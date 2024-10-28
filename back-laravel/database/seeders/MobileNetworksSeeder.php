<?php
namespace Database\Seeders;

use App\Models\Mobile_networks;
use Illuminate\Database\Seeder;

class MobileNetworksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $networkProviders = [
            [
                'name' => 'Viettel',
                'image' => 'logo/viettel.svg'
            ],
            [
                'name' => 'Vinaphone',
                'image' => 'logo/vinaphone.svg'
            ],
            [
                'name' => 'Mobifone',
                'image' => 'logo/mobifone.svg'
            ],
            [
                'name' => 'Vietnamobile',
                'image' => 'logo/vietnamobile.svg'
            ],
            [
                'name' => 'Itel',
                'image' => 'logo/itelecom.svg'
            ],
        ];

        foreach ($networkProviders as $networkProvider) {
            Mobile_networks::create([
                'name' => $networkProvider['name'],
                'image' => $networkProvider['image']
            ]);
        }
    }
}
