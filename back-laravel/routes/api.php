<?php
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\MobileNetworksController;
use App\Http\Controllers\StartNumberController;
use Illuminate\Support\Facades\Route;

Route::apiResource('admins', AdminController::class);
Route::apiResource('product-categories', ProductCategoryController::class);
Route::apiResource('mobile-networks', MobileNetworksController::class);
Route::apiResource('start-numbers', StartNumberController::class);

//sản phẩm
Route::apiResource('products', ProductController::class);
Route::prefix('products')->group(function (){
    Route::get('/search/{number}', [ProductController::class, 'search']);
});
Route::get('/detail/{number}', [ProductController::class, 'detailPhoneNumber']);


//load trang web
Route::get('/get-value-load-page', [ProductController::class, 'loadPage']);
Route::get('/value-sidebar-load-page', [ProductController::class, 'sidebarLoadPage']);
