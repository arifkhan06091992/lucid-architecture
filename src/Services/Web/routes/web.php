<?php

/*
|--------------------------------------------------------------------------
| Service - Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for this service.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['prefix' => 'web'], function() {

    // The controllers live in src/Services/Web/Http/Controllers
    // Route::get('/', 'UserController@index');

    Route::get('/', function() {
        return view('web::welcome');
    });

});

Route::group(['middleware' => 'web'], function() {

    Route::get('/tasks','TaskController@index');
    Route::get('/tasks/create','TaskController@create');
    Route::post('/tasks/store','TaskController@store');
    Route::get('/tasks/edit/{id}','TaskController@edit');
    Route::put('/tasks/{id}/update','TaskController@update');
    Route::delete('/tasks/{id}/delete','TaskController@destroy');

});
