<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'comments',
        'deadline',
        'state',
    ];

    public function person()
    {
        return $this->belongsTo(Person::class);
    }

    public function woodenLogs()
    {
        return $this->belongsToMany(WoodenLog::class);
    }
}
