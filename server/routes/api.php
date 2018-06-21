<?php

use Illuminate\Http\Request;

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

// Add API Chapter 2 routes here.

// Gets all the people
Route::get('/people')->uses('People@all')->name('people.all');

// Gets a person by their id
Route::get('/people/{id}')->uses('People@getSingle')->name('people.single');
