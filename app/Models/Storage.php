<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Storage extends Model
{
    use HasFactory;

    protected $fillable = [
        'location',
        'rack',
        'shelf_position',
    ];

    public function sawnTimbers()
    {
        return $this->belongsToMany(SawnTimber::class);
    }
}
