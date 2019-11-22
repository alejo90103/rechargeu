<?php
# @Author: Codeals
# @Date:   20-10-2019
# @Email:  ian@codeals.es
# @Last modified by:   Codeals
# @Last modified time: 22-11-2019
# @Copyright: Codeals

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('test', function () {
    return response([1,2,3], 200);
});

Route::post('forgot-password', 'UserController@forgotPassword');
Route::post('reset-password', 'UserController@resetPassword');
Route::post('user-register', 'UserController@registerPassword');
Route::post('user-active', 'UserController@activeUser');

Route::get('offer-list', 'OfferController@allOffer');

Route::middleware('auth:api')->get('/user', function (Request $request) {
	if ($request->user()->status == 1) {
		return $request->user();
	}

	return response(['data' => 'User is not activated :('], 404);
	//return $request->user();
});

Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function () {
    // Route::get('user-list', 'UserController@getUserList');

    /*recharge url*/
    Route::post('recharge-cell', 'RechargeController@rechargeCell');
    Route::post('recharge-nauta', 'RechargeController@rechargeNauta');

    /*contact url*/
    Route::get('contact-list', 'ContactController@getContactList');
    Route::post('contact-get', 'ContactController@getContactById');
    Route::post('contact-add', 'ContactController@saveAddContact');
    Route::put('contact-updata', 'ContactController@saveUpdateContact');
    Route::post('contact-delete', 'ContactController@deleteContact');

});
