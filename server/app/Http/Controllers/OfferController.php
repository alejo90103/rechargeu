<?php
# @Author: Codeals
# @Date:   22-11-2019
# @Email:  ian@codeals.es
# @Last modified by:   Codeals
# @Last modified time: 22-11-2019
# @Copyright: Codeals

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Offer;

class OfferController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $offers = Offer::all();

        return view('offers.index', compact('offers'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('offers.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, Offer::rules());

        $data = $request->all();
        $data["is_deleted"] = 0;

        $offer = Offer::create($data);

        return redirect()->route('offers.index')->with('msg' ,'Successfull');
        // return redirect()->route('offers.index')->with('msg' , trans('offer.controller.successfull_add'));
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
        $offer = Offer::findOrFail($id);

        return view('offers.edit');
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
        $this->validate($request, Offer::rules(true, $id));

        $data = $request->all();

        $offer = Offer::findOrFail($id);

        $offer->update($data);

        return redirect()->route('offers.index')->with('msg', 'Successfull');
        // return redirect()->route('offers.index')->with('msg' , trans('offer.controller.successfull_edit'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $offer = Offer::findOrFail($id);

        $offer->delete();

        return back()->with('msg', 'Successfull');
        // return redirect()->route('offers.index')->with('msg' , trans('offer.controller.successfull_delete'));
    }

    /*******************************
    *   APi                        *
    ********************************/

    //  Offer list
    public function allOffer()
    {
        //  aqui se formo la cosa, redsys y recojo y dingconnect
        $data = $request->all();
        return response(['data' => $data], 201);
    }
}
