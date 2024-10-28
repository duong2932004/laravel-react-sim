<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $productIds = DB::table('products')->pluck('id')->toArray();
        $categoryIds = DB::table('categories')->pluck('id')->toArray();

        foreach ($productIds as $productId) {
            $assignedCategories = array_rand($categoryIds, rand(1, 3));

            if (!is_array($assignedCategories)) {
                $assignedCategories = [$assignedCategories];
            }

            foreach ($assignedCategories as $categoryIdIndex) {
                DB::table('product_categories')->insert([
                    'product_id' => $productId,
                    'category_id' => $categoryIds[$categoryIdIndex],
                ]);
            }
        }
    }
}
