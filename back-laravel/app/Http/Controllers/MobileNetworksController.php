<?php

namespace App\Http\Controllers;

use App\Models\Mobile_networks;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MobileNetworksController extends Controller
{
    public function index()
    {
        $networks = Mobile_networks::all()->map(function ($network) {
            // Sử dụng Storage::url() để tạo URL đầy đủ cho ảnh
            $network->image = Storage::url($network->image);
            return $network;
        });

        return response()->json($networks);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255|unique:mobile_networks,name',
            'image' => 'required|file|mimes:jpeg,png,jpg,svg|max:2048', // Thêm kiểm tra file ảnh
        ]);

        // Lưu ảnh vào thư mục storage
        $validatedData['image'] = $request->file('image')->store('public/logo');

        $network = Mobile_networks::create($validatedData);

        // Thêm URL đầy đủ cho ảnh
        $network->image = Storage::url($network->image);

        return response()->json($network, 201);
    }

    public function show(Mobile_networks $mobile_network)
    {
        // Thêm URL đầy đủ cho ảnh
        $mobile_network->image = Storage::url($mobile_network->image);

        return response()->json($mobile_network);
    }

    public function update(Request $request, Mobile_networks $mobile_network)
    {
        $validatedData = $request->validate([
            'name' => 'sometimes|required|string|max:255|unique:mobile_networks,name,' . $mobile_network->id,
            'image' => 'sometimes|file|mimes:jpeg,png,jpg,svg|max:2048', // Thêm kiểm tra file ảnh nếu được cập nhật
        ]);

        // Cập nhật ảnh nếu có
        if ($request->hasFile('image')) {
            // Xóa ảnh cũ nếu có
            if ($mobile_network->image) {
                Storage::delete($mobile_network->image);
            }
            // Lưu ảnh mới
            $validatedData['image'] = $request->file('image')->store('public/logo');
        }

        $mobile_network->update($validatedData);

        $mobile_network->image = Storage::url($mobile_network->image);

        return response()->json($mobile_network);
    }

    public function destroy(Mobile_networks $mobile_network)
    {
        if ($mobile_network->image) {
            Storage::delete($mobile_network->image);
        }

        $mobile_network->delete();
        return response()->json(null, 204);
    }
}
