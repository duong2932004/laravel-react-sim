<?php

namespace App\Http\Controllers;

use App\Models\Start_number;
use Illuminate\Http\Request;

class StartNumberController extends Controller
{
    public function index()
    {
        $startNumbers = Start_number::all();
        return response()->json($startNumbers);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255|unique:start_numbers,name',
        ]);

        $startNumber = Start_number::create($validatedData);

        return response()->json($startNumber, 201);
    }

    public function show(Start_number $start_number)
    {
        return response()->json($start_number);
    }

    public function update(Request $request, Start_number $start_number)
    {
        $validatedData = $request->validate([
            'name' => 'sometimes|required|string|max:255|unique:start_numbers,name,' . $start_number->id,
        ]);

        $start_number->update($validatedData);

        return response()->json($start_number);
    }

    public function destroy(Start_number $start_number)
    {
        $start_number->delete();
        return response()->json(null, 204);
    }
}
