<?php
# @Author: Codeals
# @Date:   26-11-2019
# @Email:  ian@codeals.es
# @Last modified by:   Codeals
# @Last modified time: 03-01-2020
# @Copyright: Codeals

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Offer;
use App\Payment;
use App\Recharge;
use App\ContactRecharge;
use App\Setting;
use App\User;
use App\Http\Controllers\RedsysAPI;
use Illuminate\Support\Facades\Redirect;

class RedsysController extends Controller
{
    public function index(Request $request)
    {
        $recharge = Recharge::where('user_id', $request->user()->id)
                 ->where('id', $request->input('offer_id'))
                 ->first();

        $offer = Offer::where('id', $recharge->offer_id)->first();

        $contactRecharges = ContactRecharge::where('recharge_id', $recharge->id)->get();

        $amount = $offer->price_pay * count($contactRecharges);

        $payment = Payment::create([
            'recharge_id' => $recharge->id,
            'user_id' => $request->user()->id,
            'token' => uniqid(),
            'method' => "Redsys",
            'amount' => $amount,
            'is_payment' => 0,
        ]);

    		// Se crea Objeto
    		$miObj = new RedsysAPI();

    		// Valores de entrada que no hemos cmbiado para ningun ejemplo
    		$fuc="NUMERO DE COMERCIO";
    		$terminal="1";
    		$moneda="978";
    		$trans="0";

        // $url="http://localhost:8080/api/response-redsys/response/".$payment->token;
  			// $urlOK="http://localhost:8080/api/response-redsys/ok/".$payment->token;
  			// $urlKO="http://localhost:8080/api/response-redsys/ko/".$payment->token;

        $url="https://recharge.codeals.es/api/response-redsys/response/".$payment->token;
  			$urlOK="https://recharge.codeals.es/api/response-redsys/ok/".$payment->token;
  			$urlKO="https://recharge.codeals.es/api/response-redsys/ko/".$payment->token;

    		//estos dos valores los vamos cambiando en cada ejemplo
        $ids = rand(10,1000);
    		$id=$payment->id.'-'.$ids;//el valor que le damos en cada ejemplo

    		$amount=floor($amount * 100);//el valor que le damos en cada ejemplo

    		// Se Rellenan los campos
    		$miObj->setParameter("DS_MERCHANT_AMOUNT",$amount);
    		$miObj->setParameter("DS_MERCHANT_ORDER",$id);
    		$miObj->setParameter("DS_MERCHANT_MERCHANTCODE",$fuc);
    		$miObj->setParameter("DS_MERCHANT_CURRENCY",$moneda);
    		$miObj->setParameter("DS_MERCHANT_TRANSACTIONTYPE",$trans);
    		$miObj->setParameter("DS_MERCHANT_TERMINAL",$terminal);
    		$miObj->setParameter("DS_MERCHANT_MERCHANTURL",$url);
    		$miObj->setParameter("DS_MERCHANT_URLOK",$urlOK);
    		$miObj->setParameter("DS_MERCHANT_URLKO",$urlKO);
    		$miObj->setParameter("DS_MERCHANT_PRODUCTDESCRIPTION", 'Recargas moviles');

    		//Datos de configuración
    		// $version="HMAC_SHA256_V1";
    		$version="HMAC_SHA256_V1";
    		$kc = 'ga00TtFIi6KYFmQuE0N1ay8mTqb288pX';//Clave recuperada de CANALES
    		// ga00TtFIi6KYFmQuE0N1ay8mTqb288pX
    		// Se generan los parámetros de la petición
    		$request = "";
    		$params = $miObj->createMerchantParameters();
    		$signature = $miObj->createMerchantSignature($kc);

    		$data['version'] =$version;
    		$data['params'] =$params;
    		$data['signature'] =$signature;

    		return response(['data' => $data], 200);
    }

    public function response()
    {

        return response(['data' => 'response'], 201);
    }

    public function responseOk($token)
    {
        $payment = Payment::where('token', $token)->first();

        if(!$payment) {
            return Redirect::to(env('APP_CLIENT', 'https://recharge.codeals.es').'/dashboard/failedDing');
        }

        $recharge = Recharge::where('id', $payment->recharge_id)->first();
        $contactRecharges = ContactRecharge::where('recharge_id', $payment->recharge_id)->get();

        $fecha = date('Y-m-d H:m');
        $nuevafecha = strtotime ( '-8 hour' , strtotime ( $fecha ) ) ;
        $now = date ( 'Y-m-d' , $nuevafecha );
        // $now = Date('Y-m-d');
        $offer = Offer::where('id', $recharge->offer_id)->first();

        $user = User::find($recharge->user_id);
        $err_number = array();
        $status = true;

        if($now < $offer->date_ini && $offer->ads == 1) {
            $recharge->status = 'Scheduled';
            $recharge->save();
            $payment->is_payment = 1;
            $payment->save();

            foreach ($contactRecharges as $contactRecharge) {
                $contactRecharge->status = 'Scheduled';
                $contactRecharge->save();
            }

            Mail::to($user->email)->send(new RechargeMail(true, $user->name, $status, $err_number, $recharge->date_recharge));

            // programacion success
            // return redirect()->route('/')->with('msg', trans('user.controller.success_schedul'));
            return Redirect::to(env('APP_CLIENT', 'https://recharge.codeals.es').'/dashboard/success_schedul');
            // return Redirect::to("http://localhost:8080/dashboard/success");
        }

        // call ding
        foreach ($contactRecharges as $contactRecharge) {

            $user->accumulated += $recharge->price_pay * 0.01;
            $user->save();

            if ($recharge->type == "Cell") {
                $status_dg = $this->dingSendTransfer($contactRecharge->phone, $recharge->recharge_amount, $contactRecharge->id, "CU_CU_TopUp");

                if(!$status_dg) {
                    $contactRecharge->status = 'Denied';
                    $contactRecharge->save();
                    $status = false;
                    array_push($err_number, $contactRecharge->phone);
                } else {
                    $contactRecharge->status = 'Accepted';
                    $contactRecharge->save();
                }

            } else {
                $status_dg = $this->dingSendTransfer($contactRecharge->email, $recharge->recharge_amount, $contactRecharge->id, "CU_NU_TopUp");

                if(!$status_dg) {
                    $contactRecharge->status = 'Denied';
                    $contactRecharge->save();
                    $status = false;
                    array_push($err_number, $contactRecharge->email);
                } else {
                    $contactRecharge->status = 'Accepted';
                    $contactRecharge->save();
                }
            }
        }

        // if ($status == true) {
        //   //
        //   $recharge->status = "Accepted";
        //   $recharge->save();
        //   $payment->is_payment = 1;
        //   $payment->save();
        //   // $urlBack = Setting::first()->server_client;
    		// 	// return Redirect::to($urlBack."dashboard/success");
        //
    		// 	return Redirect::to(env('APP_CLIENT', 'http://localhost:8080').'/dashboard/success');
    		// 	// return Redirect::to("http://localhost:8080/dashboard/success");
        // } else {
        //   //
        //   $recharge->status = "Denied";
        //   $recharge->save();
        //   // $urlBack = Setting::first()->server_client;
        //   // return Redirect::to($urlBack."dashboard/failedDing");
        //   return Redirect::to(env('APP_CLIENT', 'http://localhost:8080').'/dashboard/failedDing');
        //   // return Redirect::to("http://localhost:8080/dashboard/failedDing");
        // }

        if ($status == true) {
            //
            $recharge->status = "Accepted";
            $recharge->save();
            $payment->is_payment = 1;
            $payment->save();

            Mail::to($user->email)->send(new RechargeMail(false, $user->name, $status, $err_number, $recharge->date_recharge));

            return Redirect::to(env('APP_CLIENT', 'https://recharge.codeals.es').'/dashboard/success');
        } else {
            //
            $recharge->status = "Denied";
            $recharge->save();
            $payment->is_payment = 1;
            $payment->save();

            Mail::to($user->email)->send(new RechargeMail(false, $user->name, $status, $err_number, $recharge->date_recharge));

            return Redirect::to(env('APP_CLIENT', 'https://recharge.codeals.es').'/dashboard/failedDing');
        }
    }

    public function responseKo($token)
    {
        $payment = Payment::where('token', $token)->first();

        $recharge = Recharge::where('id', $payment->recharge_id)->first();
        // $contactRecharges = ContactRecharge::where('recharge_id', $payment->recharge_id)->get();

        $contactRecharges = ContactRecharge::where('recharge_id', $recharge->id)->get();

        foreach ($contactRecharges as $contactRecharge) {
            $contactRecharge->status = 'Cancel';
            $contactRecharge->save();
        }

        $recharge->status = "Cancel";
        $recharge->save();

        // $urlBack = Setting::first()->server_client;
        // return Redirect::to($urlBack."dashboard/failed");
        return Redirect::to(env('APP_CLIENT', 'https://recharge.codeals.es').'/dashboard/failed');
        // return Redirect::to("http://localhost:8080/dashboard/failed");
    }

    // Send a transfer to an account
  	function dingSendTransfer($telefono, $cantidad, $idFef, $SkuCode)
  	{
  	    $url = "https://api.dingconnect.com/api/V1/SendTransfer";
        $header = array(
  					"Content-Type: application/json",
  					"api_key: ".env('API_DING', '55NhaAwAtfu6VeuEGjiSZU') // secret api ding
        );

        // para hacer transferencia requerido
  			// SkuCode						//ej: CU_CU_TopUp (CUBA)
  			// SendValue					// send value dinero a porner
  			// ValidateOnly				// true
  			// DistributorRef			// esto es un numero de referencia deberia ser autoincrementar
  			// AccountNumber			// cuenta telefonica a la cual se le hace la transferencia

        $dataTransf = array('SkuCode' => $SkuCode, 'SendValue' => $cantidad, 'ValidateOnly' => false, 'DistributorRef' => $idFef, 'AccountNumber' => $telefono);

  			$somoPost = json_encode($dataTransf);
        // echo $url;
        $api = curl_init();
        curl_setopt($api,CURLOPT_URL,$url);
        curl_setopt($api,CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($api,CURLOPT_HTTPHEADER,$header);
  	    curl_setopt($api, CURLOPT_POSTFIELDS, $somoPost);
        curl_setopt($api,CURLOPT_RETURNTRANSFER, true);
        $apiResult = curl_exec($api);
        $apiCurlError = curl_error($api);
        $status = curl_getinfo($api, CURLINFO_HTTP_CODE);
        if( ! $apiResult)
        {
            trigger_error(curl_error($api));
        }
        curl_close($api);

        // Convert JSON string to Array
        $someArray = json_decode($apiResult, true);
        //

        if ($someArray["ResultCode"] == 1 || $someArray["ResultCode"] == 2) {
          return true;

        } else {
          return false;
        }
  	}
}
