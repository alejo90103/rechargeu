<?php
# @Author: Codeals
# @Date:   26-11-2019
# @Email:  ian@codeals.es
# @Last modified by:   alejandro
# @Last modified time: 2019-11-27T01:34:12+01:00
# @Copyright: Codeals

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Offer;
use App\Payment;
use App\Recharge;
use App\ContactRecharge;
use App\Http\Controllers\RedsysAPI;

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
    		$fuc="049763097";
    		$terminal="1";
    		$moneda="978";
    		$trans="0";

            $url="http://127.0.0.1:8000/api/response-redsys/response/".$payment->token;
  			$urlOK="http://127.0.0.1:8000/api/response-redsys/ok/".$payment->token;
  			$urlKO="http://127.0.0.1:8000/api/response-redsys/ko/".$payment->token;

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
    		$miObj->setParameter("DS_MERCHANT_PRODUCTDESCRIPTION", 'Paquetes de empresas');

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
        // code...
        return response(['data' => 'response'], 201);
    }

    public function responseOk()
    {
        // code...
        return response(['data' => 'ok'], 201);
    }

    public function responseKo()
    {
        // code...
        return response(['data' => 'ko'], 201);
    }
}