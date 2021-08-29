<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    use HasFactory;

    protected $fillable = [
        'firstname',
        'lastname',
        'address',
        'phone',
        'company',
        'role',
    ];

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
