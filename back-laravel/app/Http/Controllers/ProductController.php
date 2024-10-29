<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Mobile_networks;
use App\Models\Product;
use App\Models\Start_number;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use function Laravel\Prompts\error;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'start_number_id' => 'required|exists:start_numbers,id',
            'mobile_networks_id' => 'required|exists:mobile_networks,id',
            'number' => 'required|string|max:10|unique:products,number',
            'price' => 'required|numeric',
            'quantity' => 'required|integer',
            'describe' => 'nullable|string',
        ]);

        $product = Product::create($validatedData);

        return response()->json($product, 201);
    }

    public function show(Product $product)
    {
        return response()->json($product);
    }

    public function update(Request $request, Product $product)
    {
        $validatedData = $request->validate([
            'start_number_id' => 'sometimes|required|exists:start_numbers,id',
            'mobile_networks_id' => 'sometimes|required|exists:mobile_networks,id',
            'number' => 'sometimes|required|string|max:10|unique:products,number,' . $product->id,
            'price' => 'sometimes|required|numeric',
            'quantity' => 'sometimes|required|integer',
            'describe' => 'nullable|string',
        ]);

        $product->update($validatedData);

        return response()->json($product);
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(null, 204);
    }
    public function search($number)
    {
        try {
            $products = Product::query()
                ->where('number', 'LIKE', '%' . $number . '%')
                ->limit(100)
                ->with('mobile_network')
                ->get();

            $data = $products->map(function($product) {
                return [
                    'number' => $product->number,
                    'mobile_network_name' => $product->mobile_network ? $product->mobile_network->name : null,
                ];
            });

            return response()->json([
                'success' => true,
                'status' => 200,
                'data' => $data,
                'waning' => '',
                'error' => ''
            ]);
        }catch (\Exception $e){
            return response()->json([
                'success' => false,
                'status' => '500',
                'data' => [],
                'warning' => 'Đã xảy ra lỗi không xác định',
                'error' => $e->getMessage(),
            ]);
        }
    }
    public function loadPage()
    {
        try {
            $dataProduct = [];
            $data_mobile_networks = [];
            $categories = Category::query()->select('id', 'name')->get();
            $start_number = Start_number::query()->select('id', 'name')->get();
            $mobile_networks = Mobile_networks::query()->select('id', 'name', 'image')->get();

            foreach ($mobile_networks as $item) {
                $data_mobile_networks[] = [
                    'id' => $item->id,
                    'name' => $item->name,
                    'image' => Storage::url($item->image),
                ];
            }

            foreach ($mobile_networks as $mobile_network) {
                $products = Product::query()
                    ->where('mobile_networks_id', '=', $mobile_network->id)
                    ->where('quantity', '>', 0)
                    ->limit(12)
                    ->get()
                    ->makeHidden(['id', 'created_at', 'updated_at', 'deleted_at']);

                $dataProduct[] = [
                    'mobile_network_name' => $mobile_network->name,
                    'products' => $products,
                ];
            }

            return response()->json([
                'success' => true,
                'status' => 200,
                'data' => [
                    'category' => $categories,
                    'strat_numbers' => $start_number,
                    'products' => $dataProduct,
                    'mobile_networks' => $data_mobile_networks,
                ],
                'warning' => '',
                'error' => ''
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'status' => '500',
                'data' => [],
                'warning' => 'Đã xảy ra lỗi không xác định',
                'error' => $e->getMessage(),
            ]);
        }
    }
    public  function sidebarLoadPage()
    {
        try {
            $data_mobile_networks = [];
            $categories = Category::query()->select('id', 'name')->get();
            $start_number = Start_number::query()->select('id', 'name')->get();
            $mobile_networks = Mobile_networks::query()->select('id', 'name', 'image')->get();
            foreach ($mobile_networks as $item) {
                $data_mobile_networks[] = [
                    'id' => $item->id,
                    'name' => $item->name,
                    'image' => Storage::url($item->image),
                ];
            }
            return response()->json([
                'success' => true,
                'status' => 200,
                'data' => [
                    'category' => $categories,
                    'strat_numbers' => $start_number,
                    'mobile_networks' => $data_mobile_networks,
                ],
                'warning' => '',
                'error' => ''
            ]);
        }catch (\Exception $e){
            return response()->json([
                'success' => false,
                'status' => '500',
                'data' => [],
                'warning' => 'Đã xảy ra lỗi không xác định',
                'error' => $e->getMessage(),
            ]);
        }
    }
    public function detailPhoneNumber($number)
    {
        try {
            $product = Product::query()
                ->where('number', '=', $number)
                ->with(['categories', 'startNumber', 'mobile_network'])
                ->first();

            if ($product) {
                $product->makeHidden(['created_at', 'updated_at', 'deleted_at']);

                $product->categories->each->makeHidden(['created_at', 'updated_at', 'deleted_at']);
                $product->startNumber?->makeHidden(['created_at', 'updated_at', 'deleted_at']);
                $product->mobile_network?->makeHidden(['created_at', 'updated_at', 'deleted_at']);
                $product->mobile_network->image = Storage::url($product->mobile_network->image);

            }

            return response()->json([
                'success' => true,
                'status' => 200,
                'data' => $product,
                'warning' => '',
                'error' => ''
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'status' => 500,
                'data' => [],
                'warning' => 'Đã xảy ra lỗi không xác định',
                'error' => $e->getMessage(),
            ]);
        }
    }
    public function getOneMobileNetworks($mobile_networks_name)
    {
        try {
            $data_mobile_networks = [];
            $mobile_networks_query = Mobile_networks::query()->select('id','name','image')->where('name', '=', $mobile_networks_name)->first();
            $products = Product::query()
                ->where('mobile_networks_id', '=', $mobile_networks_query->id)
                ->where('quantity', '>', 0)
                ->select(
                    'id',
                    'start_number_id',
                    'mobile_networks_id',
                    'number',
                    'price',
                    'quantity',
                    'describe')
                ->paginate(39)
            ;
            $mobile_networks = Mobile_networks::query()->select('id', 'name', 'image')->get();
            foreach ($mobile_networks as $item) {
                $data_mobile_networks[] = [
                    'id' => $item->id,
                    'name' => $item->name,
                    'image' => Storage::url($item->image),
                ];
            }
            return response()->json([
                'success' => true,
                'status' => 200,
                'data' => [
                    'products' => $products,
                    'mobile_networks' => $data_mobile_networks,
                ],
                'warning' => '',
                'error' => ''
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'status' => 500,
                'data' => [],
                'warning' => 'Đã xảy ra lỗi không xác định',
                'error' => $e->getMessage(),
            ]);
        }
    }

}