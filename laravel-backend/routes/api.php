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

Route::post('/note', [
	'uses' => 'NoteController@postNote'
]);

Route::get('/notes',[
	'uses' => 'NoteController@getNotes'
]);

Route::get('/notes/user/{username}',[
	'uses' => 'NoteController@getNotesByUser'
]);

Route::get('/note/{id}',[
	'uses' => 'NoteController@getNoteById'
]);

Route::put('/note/{id}',[
	'uses' => 'NoteController@putNote'
]);

Route::delete('/note/{id}',[
	'uses' => 'NoteController@deleteNote'
]);