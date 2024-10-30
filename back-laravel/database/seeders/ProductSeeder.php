<?php

namespace Database\Seeders;

use App\Models\Mobile_networks;
use App\Models\Start_number;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class ProductSeeder extends Seeder
{
    /**
     * Chạy các dữ liệu giả cho cơ sở dữ liệu.
     */
    public function run(): void
    {
        // Lấy danh sách tất cả các id của start_numbers từ bảng start_numbers
        $start_numbers = Start_number::all();

        $faker = Faker::create();

        for ($i = 1; $i <= 1000; $i++) {
            // Chọn ngẫu nhiên một start_number từ bảng start_numbers
            $start_number = $start_numbers->random();

            // Lấy ngẫu nhiên một mobile_network_id hợp lệ
            $mobile_network_id = Mobile_networks::inRandomOrder()->first()->id;

            // Loại bỏ chữ 'x' trong start_number
            $start_number_prefix = str_replace('x', '', $start_number->name);

            // Tạo một số điện thoại ngẫu nhiên với đầu số tương ứng
            $random_number = $faker->numberBetween(10000000, 99999999);
            $phone_number = $start_number_prefix . $random_number; // Kết hợp

            DB::table('products')->insert([
                'start_number_id' => $start_number->id, // Sử dụng id hợp lệ
                'mobile_networks_id' => $mobile_network_id,
                'number' => $phone_number, // Số điện thoại
                'price' => $faker->randomFloat(2, 100000, 10000000),
                'quantity' => $faker->numberBetween(1, 100),
                'describe' => $faker->text(200),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
