<?php
# @Author: Codeals
# @Date:   19-10-2019
# @Email:  ian@codeals.es
# @Last modified by:   Codeals
# @Last modified time: 21-11-2019
# @Copyright: Codeals

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'admin'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * Relation with Token and User
     */
    public function token()
    {
        return $this->hasMany('App\Token');
    }

    /*
    |------------------------------------------------------------------------------------
    | relations
    |------------------------------------------------------------------------------------
    */
    // 1:m
    public function contacts()
    {
        return $this->hasMany(Contacts::class);
    }

    // 1:m
    public function contact_recharges()
    {
        return $this->hasMany(ContactRecharge::class);
    }

    // 1:m
    public function recharges()
    {
        return $this->hasMany(Recharge::class);
    }

}
