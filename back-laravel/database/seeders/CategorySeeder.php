<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $category = [
        'SIM Vip',
        'Sim Tam Hoa',
        'Sim Tam hoa kép',
        'Sim Tứ quý',
        'Sim Tứ quý giữa',
        'Sim Ngũ Quý',
        'Sim Ngũ quý giữa',
        'Sim Lục Quý',
        'Sim Lục quý giữa',
        'Sim năm sinh',
        'Sim Lộc Phát',
        'Sim Thần Tài',
        'Sim Dễ nhớ',
        'Sim Taxi',
        'SIM đầu số cổ',
        'Sim Tiến Lên',
        'Sim Lặp kép',
        'Sim Gánh đảo',
        'Sim Số độc',
        'Sim Ông Địa',
        'Sim Lặp'
        ];
        foreach ($category as $item) {
            Category::create(['name' => $item]);
        }
    }
}
