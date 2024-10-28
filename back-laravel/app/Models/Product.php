<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory,softDeletes;
    protected $fillable = [
        'start_number_id',
        'mobile_networks_id',
        'number',
        'price',
        'quantity',
        'describe',
    ];
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'product_categories', 'product_id', 'category_id');
    }
    public function startNumber(){
        return $this->belongsTo(Start_number::class);
    }
    public function mobile_network() {
        return $this->belongsTo(Mobile_networks::class, 'mobile_networks_id', 'id');
    }

}
