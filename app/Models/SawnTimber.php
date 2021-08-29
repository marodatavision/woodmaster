<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SawnTimber extends Model
{
    use HasFactory;

    protected $fillable = [
        'length',
        'width',
        'height',
        'humidity',
        'quality',
        'price',
    ];

    public function storages()
    {
        return $this->belongsToMany(Storage::class);
    }

    public function woodenLogs()
    {
        return $this->belongsToMany(WoodenLog::class);
    }
}
