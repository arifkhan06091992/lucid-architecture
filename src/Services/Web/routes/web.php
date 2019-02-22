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

/**------------------------------- Auth Routes --------------------------------*/

Route::get('/', [ 'uses' => 'AuthController@index']);
Route::post('/authenticate',['uses' => 'AuthController@authenticate']);

Route::group(['middleware'=>['auth.api']], function() {

    Route::get('/logout', ['uses' => 'AuthController@logout']);
    Route::get('/dashboard', ['uses' => 'DashboardController@dashboard']);

});

