<?php
# @Author: Codeals
# @Date:   26-11-2019
# @Email:  ian@codeals.es
# @Last modified by:   Codeals
# @Last modified time: 26-11-2019
# @Copyright: Codeals

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PaypalController extends Controller
{
    public function index(Request $request)
    {
        $data = $request->all();

        return response(['data' => $data], 200);
    }
}
