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

Route::view('/courses', 'auth.react-auth');
Route::view('/course/{id}', 'auth.react-auth');


Route::view('/question', 'auth.react-auth'); //added now

