<?php

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('token', 'UserController@token');
Route::get('user', 'UserController@user')->middleware('auth:sanctum');
Route::post('logout', 'UserController@logout')->middleware('auth:sanctum');
Route::get('courses', 'CourseController@index');
Route::get('course/{id}', 'CourseController@show');
Route::get('question', 'CourseController@question'); 
Route::get('test/{course_id}', 'CourseController@test')->middleware('auth:sanctum'); 

Route::post('submit/{id}', 'CourseController@submit')->middleware('auth:sanctum');
