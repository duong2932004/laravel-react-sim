<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Start_number extends Model
{
    use HasFactory,softDeletes;
    protected $fillable = [
        'name'
    ];
}
