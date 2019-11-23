<?php
# @Author: Codeals
# @Date:   22-11-2019
# @Email:  ian@codeals.es
# @Last modified by:   Codeals
# @Last modified time: 23-11-2019
# @Copyright: Codeals




namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Recharge;
use App\Contact;

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
        //  aqui se formo la cosa, redsys y recojo y dingconnect
        $data = $request->all();

        $contact = Contact::where('user_id', $request->user()->id)
                 ->where('phone', $request->input('phone'))
                 ->first();

        if($exist) {
            if($exist->is_deleted == 1) {
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

        return response(['data' => $contact], 201);
    }

    //  Recharge nauta
    public function rechargeNauta(Request $request)
    {
        //  aqui se formo la cosa, redsys y recojo y dingconnect
        $data = $request->all();

        $contact = Contact::where('user_id', $request->user()->id)
                 ->where('email', $request->input('email'))
                 ->first();

        if($exist) {
            if($exist->is_deleted == 1) {
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

        return response(['data' => $contact], 201);
    }
}
