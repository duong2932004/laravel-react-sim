<?php

namespace Database\Seeders;

use App\Models\Start_number;
use Illuminate\Database\Seeder;

class StartNumberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $numbers = [
            '09x',
            '08x',
            '07x',
            '05x',
            '03x'
        ];

        foreach ($numbers as $item) {
            Start_number::create(['name' => $item]);
        }
    }
}
