<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Mobile_networks extends Model
{
    use HasFactory,softDeletes;
    protected $fillable = [
        'name'
    ];
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
