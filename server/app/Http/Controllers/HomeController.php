<?php
# @Author: Codeals
# @Date:   21-11-2019
# @Email:  ian@codeals.es
# @Last modified by:   Codeals
# @Last modified time: 23-11-2019
# @Copyright: Codeals

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Offer;
use App\Recharge;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('main');
    }

    public static function dashboard()
    {
        $Offers = Offer::all();
        $users = User::all();
        $recharges = Recharge::all();

        $dashboard['offers'] = $Offers;
        $dashboard['users'] = $users;
        $dashboard['recharges'] = $recharges;

        return $dashboard;
    }

    public static function dashboardChart($date_year)
    {

        $year[0][0] = count(DB::table('recharges')->where('created_at', 'like', $date_year.'-01-'.'%')->get());
        $year[0][1] = count(DB::table('recharges')->where('created_at', 'like', $date_year.'-02-'.'%')->get());
        $year[0][2] = count(DB::table('recharges')->where('created_at', 'like', $date_year.'-03-'.'%')->get());
        $year[0][3] = count(DB::table('recharges')->where('created_at', 'like', $date_year.'-04-'.'%')->get());
        $year[0][4] = count(DB::table('recharges')->where('created_at', 'like', $date_year.'-05-'.'%')->get());
        $year[0][5] = count(DB::table('recharges')->where('created_at', 'like', $date_year.'-06-'.'%')->get());
        $year[0][6] = count(DB::table('recharges')->where('created_at', 'like', $date_year.'-07-'.'%')->get());
        $year[0][7] = count(DB::table('recharges')->where('created_at', 'like', $date_year.'-08-'.'%')->get());
        $year[0][8] = count(DB::table('recharges')->where('created_at', 'like', $date_year.'-09-'.'%')->get());
        $year[0][9] = count(DB::table('recharges')->where('created_at', 'like', $date_year.'-10-'.'%')->get());
        $year[0][10] = count(DB::table('recharges')->where('created_at', 'like', $date_year.'-11-'.'%')->get());
        $year[0][11] = count(DB::table('recharges')->where('created_at', 'like', $date_year.'-12-'.'%')->get());


        // $year[1][0] = count(DB::table('recharges')->where('created_at', 'like', $date_year.'-01-'.'%')->where('is_engine', '=', 1)->get());
        // $year[1][1] = count(DB::table('recharges')->where('created_at', 'like', $date_year.'-02-'.'%')->where('is_engine', '=', 1)->get());
        // $year[1][2] = count(DB::table('recharges')->where('created_at', 'like', $date_year.'-03-'.'%')->where('is_engine', '=', 1)->get());
        // $year[1][3] = count(DB::table('recharges')->where('created_at', 'like', $date_year.'-04-'.'%')->where('is_engine', '=', 1)->get());
        // $year[1][4] = count(DB::table('recharges')->where('created_at', 'like', $date_year.'-05-'.'%')->where('is_engine', '=', 1)->get());
        // $year[1][5] = count(DB::table('recharges')->where('created_at', 'like', $date_year.'-06-'.'%')->where('is_engine', '=', 1)->get());
        // $year[1][6] = count(DB::table('recharges')->where('created_at', 'like', $date_year.'-07-'.'%')->where('is_engine', '=', 1)->get());
        // $year[1][7] = count(DB::table('recharges')->where('created_at', 'like', $date_year.'-08-'.'%')->where('is_engine', '=', 1)->get());
        // $year[1][8] = count(DB::table('recharges')->where('created_at', 'like', $date_year.'-09-'.'%')->where('is_engine', '=', 1)->get());
        // $year[1][9] = count(DB::table('recharges')->where('created_at', 'like', $date_year.'-10-'.'%')->where('is_engine', '=', 1)->get());
        // $year[1][10] = count(DB::table('recharges')->where('created_at', 'like', $date_year.'-11-'.'%')->where('is_engine', '=', 1)->get());
        // $year[1][11] = count(DB::table('recharges')->where('created_at', 'like', $date_year.'-12-'.'%')->where('is_engine', '=', 1)->get());

        $year[2] = count(DB::table('recharges')->get());

        // $total_engine = count(DB::table('recharges')->where('created_at', 'like', $date_year.'%')->where('is_engine', '=', 1)->get());
        // $total_out = count(DB::table('recharges')->where('created_at', 'like', $date_year.'%')->get());
        //
        // $total = $total_engine + $total_out;
        // $total_engine_send = 0;
        // $total_out_send = 0;
        //
        // if ($total > 0) {
        //     $total_engine_send = ($total_engine * 100)/$total;
        //     $total_out_send = ($total_out * 100)/$total;
        // }
        //
        // $year[4] = $total_engine_send;
        // $year[5] = $total_out_send;

        return $year;
    }
}
