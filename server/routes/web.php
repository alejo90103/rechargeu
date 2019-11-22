<?php
# @Author: Codeals
# @Date:   19-10-2019
# @Email:  ian@codeals.es
# @Last modified by:   Codeals
# @Last modified time: 22-11-2019
# @Copyright: Codeals

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Events\ChatConversation;

Route::get('/', function () {
    // return view('welcome');
    return view('main');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::resource('offers', 'OfferController');
// Route::get('offers', 'OfferController@index')->name('offers');

// usuarios registrados
Route::group(['middleware' => 'auth'], function () {

});

// usuarios admin
Route::group(['middleware' => 'admin'], function () {

});
