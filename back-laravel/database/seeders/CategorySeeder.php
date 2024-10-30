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
        $categories = [
            [
                'name' => 'SIM Vip',
                'label' => 'sim-vip'
            ],
            [
                'name' => 'Sim Tam Hoa',
                'label' => 'sim-tam-hoa'
            ],
            [
                'name' => 'Sim Tam hoa kép',
                'label' => 'sim-tam-hoa-kep'
            ],
            [
                'name' => 'Sim Tứ quý',
                'label' => 'sim-tu-quy'
            ],
            [
                'name' => 'Sim Tứ quý giữa',
                'label' => 'sim-tu-quy-giua'
            ],
            [
                'name' => 'Sim Ngũ Quý',
                'label' => 'sim-ngu-quy'
            ],
            [
                'name' => 'Sim Ngũ quý giữa',
                'label' => 'sim-ngu-quy-giua'
            ],
            [
                'name' => 'Sim Lục Quý',
                'label' => 'sim-luc-quy'
            ],
            [
                'name' => 'Sim Lục quý giữa',
                'label' => 'sim-luc-quy-giua'
            ],
            [
                'name' => 'Sim năm sinh',
                'label' => 'sim-nam-sinh'
            ],
            [
                'name' => 'Sim Lộc Phát',
                'label' => 'sim-loc-phat'
            ],
            [
                'name' => 'Sim Thần Tài',
                'label' => 'sim-than-tai'
            ],
            [
                'name' => 'Sim Dễ nhớ',
                'label' => 'sim-de-nho'
            ],
            [
                'name' => 'Sim Taxi',
                'label' => 'sim-taxi'
            ],
            [
                'name' => 'SIM đầu số cổ',
                'label' => 'sim-dau-so-co'
            ],
            [
                'name' => 'Sim Tiến Lên',
                'label' => 'sim-tien-len'
            ],
            [
                'name' => 'Sim Lặp kép',
                'label' => 'sim-lap-kep'
            ],
            [
                'name' => 'Sim Gánh đảo',
                'label' => 'sim-ganh-dao'
            ],
            [
                'name' => 'Sim Số độc',
                'label' => 'sim-so-doc'
            ],
            [
                'name' => 'Sim Ông Địa',
                'label' => 'sim-ong-dia'
            ],
            [
                'name' => 'Sim Lặp',
                'label' => 'sim-lap'
            ]
        ];

        foreach ($categories as $item) {
            Category::create($item);
        }
    }
}
