<?php
# @Author: Codeals
# @Date:   19-10-2019
# @Email:  ian@codeals.es
# @Last modified by:   Codeals
# @Last modified time: 24-11-2019
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
use Illuminate\Support\Facades\Auth;


Auth::routes();

// Route::get('offers', 'OfferController@index')->name('offers');

// usuarios registrados
Route::group(['middleware' => 'auth'], function () {

});

// usuarios admin
Route::group(['middleware' => 'admin'], function () {

  Route::get('users/change', 'UserController@changePassword')->name('users.change');

  Route::get('/', function () {
      // return view('welcome');
      return view('main');
  })->name('/');

  Route::get('/home', 'HomeController@index')->name('home');

  Route::resource('offers', 'OfferController');
  Route::resource('users', 'UserController');

  Route::get('logout', '\App\Http\Controllers\Auth\LoginController@logout');

});
