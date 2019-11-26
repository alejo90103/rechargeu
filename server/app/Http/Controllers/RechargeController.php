<?php
# @Author: Codeals
# @Date:   22-11-2019
# @Email:  ian@codeals.es
# @Last modified by:   Codeals
# @Last modified time: 26-11-2019
# @Copyright: Codeals




namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Offer;
use App\Recharge;
use App\Contact;
use App\ContactRecharge;

class RechargeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /******************************+
    *   APi                        *
    ********************************/

    //  Recharge cell
    public function rechargeCell(Request $request)
    {
        $data = $request->all();

        $contact = Contact::where('user_id', $request->user()->id)
                 ->where('phone', $request->input('phone'))
                 ->first();

        if($contact) {
            if($contact->is_deleted == 1) {
              $data['is_deleted'] = 0;
              $contact->update($data);
            }
        } else {

          $data['phone'] = $request->input('phone');
          $data['name'] = $request->input('name');
          $data['is_deleted'] = 0;
          $data['user_id'] = $request->user()->id;

          $contact = Contact::create($data);
        }

        // take offer
        $offer = Offer::findOrFail($request->input('offer_id'));

        // create recharge
        $dataRecharge['type'] = "Cell";
        $dataRecharge['offer_id'] = $offer->id;
        $dataRecharge['user_id'] = $request->user()->id;
        $dataRecharge['date_recharge'] = date("Y-m-d");
        $dataRecharge['price_pay'] = $offer->price_pay;
        $dataRecharge['recharge_amount'] = $offer->recharge_amount;
        $dataRecharge['status'] = "Waiting";
        $dataRecharge['is_deleted'] = 0;
        $recharge = Recharge::create($dataRecharge);

        //  aqui se formo la cosa, redsys y recojo y dingconnect
        $contactRecharge = new ContactRecharge();
        $contactRecharge->recharge_id = $recharge->id;
        $contactRecharge->contact_id = $contact->id;
        $contactRecharge->user_id = $request->user()->id;
        $contactRecharge->phone = $contact->phone;
        $contactRecharge->is_deleted = 0;
        $contactRecharge->save();

        // pay and ding type of pay
        $response["recharge_id"] = $recharge->id;
        $response["amount"] = $offer->price_pay;

        return response(['data' => $response], 201);
    }

    //  Recharge nauta
    public function rechargeNauta(Request $request)
    {
        //  aqui se formo la cosa, redsys y recojo y dingconnect
        $data = $request->all();

        $contact = Contact::where('user_id', $request->user()->id)
                 ->where('email', $request->input('email'))
                 ->first();

        if($contact) {
            if($contact->is_deleted == 1) {
              $data['is_deleted'] = 0;
              $contact->update($data);
            }
        } else {

          $data['email'] = $request->input('email');
          $data['name'] = $request->input('name');
          $data['is_deleted'] = 0;
          $data['user_id'] = $request->user()->id;

          $contact = Contact::create($data);
        }

        // take offer
        $offer = Offer::findOrFail($request->input('offer_id'));

        // create recharge
        $dataRecharge['type'] = "Nauta";
        $dataRecharge['offer_id'] = $offer->id;
        $dataRecharge['user_id'] = $request->user()->id;
        $dataRecharge['date_recharge'] = date("Y-m-d");
        $dataRecharge['price_pay'] = $offer->price_pay;
        $dataRecharge['recharge_amount'] = $offer->recharge_amount;
        $dataRecharge['status'] = "Waiting";
        $dataRecharge['is_deleted'] = 0;
        $recharge = Recharge::create($dataRecharge);

        //  aqui se formo la cosa, redsys y recojo y dingconnect
        $contactRecharge = new ContactRecharge();
        $contactRecharge->recharge_id = $recharge->id;
        $contactRecharge->contact_id = $contact->id;
        $contactRecharge->user_id = $request->user()->id;
        $contactRecharge->phone = $contact->phone;
        $contactRecharge->is_deleted = 0;
        $contactRecharge->save();

        // pay and ding type of pay
        $response["recharge_id"] = $recharge->id;
        $response["amount"] = $offer->price_pay;

        return response(['data' => $response], 201);
    }

    public function multiRechargeCell(Request $request)
    {
        $contacts = $request->input('contacts');
        $offer_id = $request->input('offer');

        return response(['data' => $contacts], 201);
    }

    public function multiRechargeNauta(Request $request)
    {
        $contacts = $request->input('contacts');
        $offer_id = $request->input('offer');

        return response(['data' => $contacts], 201);
    }
}
