<?php
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\MobileNetworksController;
use App\Http\Controllers\StartNumberController;
use Illuminate\Support\Facades\Route;

//giới hạn thời gian gọi api
//Route::middleware('throttle:60,1')->group(function () {
//
//});
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

// phân trang
Route::prefix('/pagination')->group(function (){
    Route::get('/mobileNetworks/{mobile_networks_name}',[ProductController::class,'getOneMobileNetworks']);
    Route::get('/startNumbers/{start_number_name}',[ProductController::class,'getOneStartNumber']);
    Route::get('/category/{category_label}',[ProductController::class,'getOneTypeCategory']);
});
