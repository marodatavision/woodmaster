<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PersonController;
use App\Http\Controllers\SawnTimberController;
use App\Http\Controllers\StorageController;
use App\Http\Controllers\WoodenLogController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/**
 * Initial Auth routes for starting / terminating sessions
 */
Route::group(['prefix' => '/userauth'], function (){
    Route::post('/register', [LoginController::class, 'register']);

    Route::post('/login', [LoginController::class, 'authenticate']);

    Route::get('/logout', [LoginController::class, 'logout']);

    Route::get('/checkauth', [LoginController::class, 'checkAuth']);
});

/**
 * User routes authenticated by sanctum
 */
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/**
 * Model - Controller routes authenticated by sanctum
 */
Route::middleware('auth:sanctum')->group(function(){

    
    Route::apiResource('orders', OrderController::class);

    Route::apiResource('people', PersonController::class);

    Route::apiResource('sawn-timbers', SawnTimberController::class);
    Route::get('sawn-timbers/order/{order}', [SawnTimberController::class, 'showByOrderId']);

    Route::apiResource('storages', StorageController::class);

    Route::apiResource('wooden-logs', WoodenLogController::class);
    Route::get('wooden-logs/order/{order}', [WoodenLogController::class, 'showByOrderId']);

});