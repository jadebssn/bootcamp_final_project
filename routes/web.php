<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::view('/', 'auth.react-auth');
Route::view('/sign-in', 'auth.react-auth')->name('sign-in');
Route::view('/sign-up', 'auth.react-auth')->name('sign-up');
//i added logout
// Route::view('/logout', 'auth.react-auth')->name('logout');
Route::view('/courses', 'auth.react-auth');
//Route::get('/courses', 'CourseController@index');
Route::get('/courses/{id}', 'CourseController@show');


//code bellow is an example for our courses reservation 



// Route::group(['middleware' => ['auth']], function () {

//     Route::post('/books/{book_id}/order', 'OrderController@store');
//     Route::get('/orders', 'OrderController@index');

//     //    Route::resource('/books', 'BookController');

// });