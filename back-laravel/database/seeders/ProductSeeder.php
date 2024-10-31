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
        $text = "Sim số đẹp, một thuật ngữ không còn xa lạ đối với người tiêu dùng Việt Nam trong thời đại công nghệ thông tin hiện nay. Đó không chỉ đơn thuần là một dãy số điện thoại mà còn chứa đựng nhiều ý nghĩa sâu sắc, giá trị tinh thần và vật chất. Với sự phát triển của thị trường sim số đẹp, nhiều người đã nhận ra rằng việc sở hữu một chiếc sim số đẹp không chỉ giúp nâng cao hình ảnh cá nhân mà còn có thể kích thích phong thủy tốt, tạo nên những cơ hội trong cuộc sống.

Sim Số Đẹp: Khái Niệm, Ý Nghĩa Và Giá Trị
Sim số đẹp không chỉ đơn thuần là một chuỗi số ngẫu nhiên mà nó còn mang theo nhiều ý nghĩa và giá trị khác nhau. Trong vai trò là chuyên gia sim số đẹp, Nicholas Việt Hùng - sẽ phân tích rõ hơn về khái niệm, ý nghĩa và giá trị của sim số đẹp để bạn có cái nhìn tổng quát hơn.

Khái niệm  trong bạn là gì?
Sim số đẹp được hiểu là những dãy số điện thoại có cấu trúc đặc biệt, dễ nhớ và thường có sự kết hợp giữa các con số mang ý nghĩa tốt đẹp. Ví dụ như các sim số có đuôi, hay các dãy sim có sự lặp lại hoặc dễ đọc dễ nhớ. Việc lựa chọn sim số đẹp không chỉ nhằm mục đích phục vụ cho nhu cầu liên lạc hàng ngày, xây dựng mối quan hệ cá nhân mà còn mang lại những lợi ích về mặt phong thủy.

Ý nghĩa của sim số đẹp
Ý nghĩa của sim số đẹp rất đa dạng và phụ thuộc vào góc nhìn của mỗi người. Nhiều người tin rằng sim số đẹp có thể mang lại tài lộc, may mắn và thành công trong công việc. Chẳng hạn, số  thường được coi là số may mắn trong văn hóa phương Đông, bởi nó gần giống với từ  (phát đạt). Ngoài ra, sim số đẹp cũng thể hiện đẳng cấp và sự sang trọng của chủ sở hữu.

Giá trị của sim số đẹp
Bạn cần phải so sánh sim số đẹp với tài sản gì để nhìn nhận rõ nhất về giá trị của nó? Một câu hỏi mà khá nhiều thắc mắc.

Dưới góc nhìn của chuyên gia Nicholas Việt Hùng, giá trị của sim số đẹp không chỉ nằm ở mức giá khi mua mà còn ở giá trị sử dụng lâu dài. Một số điện thoại đẹp không chỉ giúp bạn gây ấn tượng với bạn bè, đồng nghiệp mà còn có thể trở thành một tài sản quý giá. Theo thời gian, giá trị của sim có thể tăng lên, thậm chí gấp nhiều lần so với giá mua ban đầu. Những chiếc sim số đẹp hiếm có, mang ý nghĩa đặc biệt thường được giới đầu tư săn đón.

Các loại sim số đẹp phổ biến hiện nay
Thị trường sim số đẹp hiện nay rất đa dạng với nhiều loại khác nhau, đáp ứng nhu cầu của đông đảo khách hàng. Dưới đây là một số loại sim số đẹp phổ biến mà bạn có thể tham khảo.";
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
                'describe' => $text,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
