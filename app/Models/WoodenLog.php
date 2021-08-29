<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WoodenLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'vendor',
        'forest',
        'diameter',
        'length',
        'humidity',
        'quality',
        'tree_type',
        'shape',
    ];

    public function orders()
    {
        return $this->belongsToMany(Order::class);
    }

    public function sawnTimbers()
    {
        return $this->belongsToMany(SawnTimber::class);
    }
}
