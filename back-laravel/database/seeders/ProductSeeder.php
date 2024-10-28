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
     * Run the database seeds.
     */
    public function run(): void
    {
        // Các số bắt đầu
        $start_numbers = [
            '09',
            '08',
            '07',
            '05',
            '03'
        ];

        // Lấy danh sách tất cả các id của start_numbers từ bảng start_numbers
        $start_number_ids = Start_number::pluck('id')->toArray();

        $faker = Faker::create();

        for ($i = 1; $i <= 1000; $i++) {
            // Chọn ngẫu nhiên một start_number_id từ bảng start_numbers
            $start_number_id = $start_number_ids[array_rand($start_number_ids)];

            // Lấy ngẫu nhiên một mobile_networks_id hợp lệ
            $mobile_network_id = Mobile_networks::inRandomOrder()->first()->id;

            // Tạo một số điện thoại ngẫu nhiên với 10 ký tự
            $start_number = $start_numbers[array_rand($start_numbers)];
            $random_number = $faker->numberBetween(10000000, 99999999);
            $phone_number = $start_number . $random_number; // Kết hợp

            DB::table('products')->insert([
                'start_number_id' => $start_number_id, // Sử dụng id hợp lệ
                'mobile_networks_id' => $mobile_network_id,
                'number' => $phone_number, // Số điện thoại 10 ký tự
                'price' => $faker->randomFloat(2, 100000, 10000000),
                'quantity' => $faker->numberBetween(1, 100),
                'describe' => $faker->text(200),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
