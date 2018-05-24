<?php

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

Route::get('/', function () {
    return view('welcome');
});

// Chapter 1 routes.

Route::get('/ch1', function () {
    return redirect('/ch1/people');
});

Route::get('/ch1/people')->uses('People@index')->name('people.index');
Route::get('/ch1/people/{id}')->uses('People@show')->name('people.show');

// Chapter 2 routes.

Route::get('ch2/')->uses('App@index');
Route::get('ch2/{all}')->where('all', '.*')->uses('App@index');
