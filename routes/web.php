<?php

use Illuminate\Http\Request;
use App\User as User;
use App\Message as Message;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::post('/create-user', function (Request $request) {

	$user = User::create($request->all());
    return $user;

});




Route::get('/login-user', function (Request $request) {
    return $request->user();
});



Route::get('/all-messages', function (Request $request) {
    

    return Message::all();

});



Route::get('/write-message', function(Request $request) {

	$message = Message::create($request->all());
	return $message;

});




Route::get('/get-user-messages', function (Request $request) {

    return User::messages()->all();

});




Route::any('{all}', function () {
    return view('index');
})->where(['all' => '.*']);