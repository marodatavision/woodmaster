<?php

use App\Http\Controllers\LoginController;
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
Route::group(['prefix' => '/userauth'], function (){
    Route::post('/register', [LoginController::class, 'register']);

    Route::post('/login', [LoginController::class, 'authenticate']);

    Route::get('/logout', [LoginController::class, 'logout']);

    Route::get('/checkauth', [LoginController::class, 'checkAuth']);
});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
