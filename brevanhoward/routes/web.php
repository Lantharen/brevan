<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::get('/', function () {
    return view('homepage');
});

Route::view('/about-us/', 'about-us')->name('about-us');
Route::view('/culture/', 'culture')->name('culture');
Route::view('/careers/', 'careers')->name('careers');
Route::view('/contact/', 'contact')->name('contact');
Route::view('/brevanhoward-digital/', 'brevanhoward-digital')->name('brevanhoward-digital');

