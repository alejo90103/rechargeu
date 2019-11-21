<?php
# @Author: Codeals
# @Date:   05-08-2019
# @Email:  ian@codeals.es
# @Last modified by:   Codeals
# @Last modified time: 28-08-2019
# @Copyright: Codeals

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Mail\ForgotPassword;
use App\Mail\RegisterUser;
use App\Token;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function getUserList()
    {
        return response(['data' => User::all()], 200);
    }

    /**
     * Handling the register user request
     */
    public function registerPassword(Request $request)
    {
        $data = $request->all();

        $data['password'] = Hash::make($request->input('password'));

        $user = User::create($data);
        $newUser = User::where('id', $user->id)->first();

        if (!$newUser) {
            return response(['data' => 'Something wrong :('], 500);
        }

        $token = Token::create([
            'user_id' => $newUser->id,
            'token' => uniqid(),
            'expire_at' => Carbon::now()->addHour(),
        ]);

        Mail::to($newUser)->send(new RegisterUser($token, $request));

        return response(['data' => 'Email sent.'], 201);
    }

    /**
     * Handling the active user request
     */
    public function activeUser(Request $request)
    {
        $token = $request->input('token');
        $dBToken = DB::table('tokens')
            ->where('token', $token)
            ->where('expire_at', '>', Carbon::now())
            ->first();

        if (!$dBToken) {
            return response(['data' => 'Wrong token.'], 403);
        }

        $user = User::where('id', $dBToken->user_id)->first();
        $user->status = 1;
        $user->save();

        DB::table('tokens')->where('id', $dBToken->id)->delete();

        return response(['data' => 'User active.'], 201);
    }

    /**
     * Handling the forgot password email request
     */
    public function forgotPassword(Request $request)
    {
        $users = User::where('email', $request->input('email'))->get();
        $user = $users[0];

        if (!$user) {
            return response(['data' => 'Check if the email is correct'], 403);
        }

        $token = Token::create([
            'user_id' => $user->id,
            'token' => uniqid(),
            'expire_at' => Carbon::now()->addHour(),
        ]);

        Mail::to($user)->send(new ForgotPassword($token, $request));

        return response(['data' => 'Email sent.'], 200);
    }

    /**
     * Hanlding the request to reset the password
     */
    public function resetPassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'password' => 'required|min:6',
            'confirm_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response(['data' => $validator->errors()], 433);
        }

        $token = $request->input('token');
        $dBToken = DB::table('tokens')
            ->where('token', $token)
            ->where('expire_at', '>', Carbon::now())
            ->first();

        if (!$dBToken) {
            return response(['data' => 'Wrong token.'], 403);
        }

        $user = User::where('id', $dBToken->user_id)->first();
        $user->password = bcrypt($request->input('password'));
        $user->save();

        DB::table('tokens')->where('id', $dBToken->id)->delete();

        return response(['data' => 'Password changed.'], 200);
    }
}
