<?php

use Illuminate\Http\Request;
use App\User as User;
use App\Message as Message;
use Illuminate\Support\Facades\Hash;
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

	$email = $request->input('email');
	$name = $request->input('name');
	$password = Hash::make($request->input('password'));

	$user = User::create([
		'name' => $name,
		'email' => $email,
		'password' => $password
	]);

    return $user;

});


Route::post('/login-user', 'AuthenticateController@authenticate');

Route::get('/get-user', 'AuthenticateController@getAuthenticatedUser')->middleware('jwt.auth');



Route::get('/all-messages', function (Request $request) {

	return Message::orderBy('created_at', 'desc')
	//crossJoin('users')
	//->join('users', 'messages.user_id', '=','users.id')

	->paginate(10);

});


Route::post('/write-message', function(Request $request) {

	$message = Message::create($request->all());
	return $message;

})->middleware('jwt.auth');




Route::get('/get-user-messages', function (Request $request) {

    return User::messages()->all();

})->middleware('jwt.auth');




Route::any('{all}', function () {
    return view('index');
})->where(['all' => '.*']);