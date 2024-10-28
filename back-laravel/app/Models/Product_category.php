<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class Product_category extends Pivot
{
    protected $table = 'product_categories';

    public $timestamps = false;
    protected $fillable = [
        'category_id',
        'product_id',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
