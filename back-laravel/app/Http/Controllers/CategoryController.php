<?php

namespace App\Http\Controllers;

use App\Models\Product_category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Product_category::all();
        return response()->json($categories);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255|unique:product_categories,name',
        ]);

        $category = Product_category::create($validatedData);

        return response()->json($category, 201);
    }

    public function show(Product_category $product_category)
    {
        return response()->json($product_category);
    }

    public function update(Request $request, Product_category $product_category)
    {
        $validatedData = $request->validate([
            'name' => 'sometimes|required|string|max:255|unique:product_categories,name,' . $product_category->id,
        ]);

        $product_category->update($validatedData);

        return response()->json($product_category);
    }

    public function destroy(Product_category $product_category)
    {
        $product_category->delete();
        return response()->json(null, 204);
    }
}
