<?php
# @Author: Codeals
# @Date:   20-11-2019
# @Email:  ian@codeals.es
# @Last modified by:   Codeals
# @Last modified time: 21-11-2019
# @Copyright: Codeals

namespace App;

use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    /*
    |------------------------------------------------------------------------------------
    | Table
    |------------------------------------------------------------------------------------
    */
    protected $table = 'offers';

    /*
    |------------------------------------------------------------------------------------
    | Primary Key
    |------------------------------------------------------------------------------------
    */
    protected $primaryKey = 'id';

    /*
    |------------------------------------------------------------------------------------
    | Attributes
    |------------------------------------------------------------------------------------
    */
    protected $fillable = [
        'id',
        'name',
        'type',
        'date_ini',
        'date_end',
        'price_pay',
        'recharge_amount',
        'is_deleted'
    ];

    /*
    |------------------------------------------------------------------------------------
    | Validations
    |------------------------------------------------------------------------------------
    */
    public static function rules($update = false, $id = null)
    {
        $commun = [
            'name' => "required",
            'type' => "required",
            'price_pay' => "required",
            'recharge_amount' => "required",
        ];

        if ($update) {
            return $commun;
        }

        return array_merge($commun, [
            'name' => "required",
            'type' => "required",
            'price_pay' => "required",
            'recharge_amount' => "required",
        ]);
    }

    /*
    |------------------------------------------------------------------------------------
    | relations
    |------------------------------------------------------------------------------------
    */
    // 1:m
    public function recharges()
    {
        return $this->hasMany(Recharge::class);
    }
    // // 1:m
    // public function recharge()
    // {
    //     return $this->hasMany(Recharge::class);
    // }

    /*
    |------------------------------------------------------------------------------------
    | functions
    |------------------------------------------------------------------------------------
    */

}
