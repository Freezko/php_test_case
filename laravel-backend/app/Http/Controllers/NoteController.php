<?php

namespace App\Http\Controllers;

use DB;
use App\Note;
use Illuminate\Http\Request;

class NoteController extends Controller {

	public function postNote(Request $request){
		$note = new Note();
		$note->content = $request->input('content');
		$note->username = $request->input('username');
		$note->email = $request->input('email');
		
		if($note->save()){
			return response()->json(['note' => $note], 201);
		} else {
			return response()->json(['error' => 'Can not to create a note'], 500);
		}
	}

	public function getNotes(){
		$notes = Note::all();
		$response = [
			'notes' => $notes
		];
		return response()->json($response, 200);	
	}

	public function getNotesByUser($username){
		$notes = Note::where('username', $username)->get();
		
		if(count($notes)==0){
			return response()->json(['message'=>'Notes not found', 404]);
		}
		$response = [
			'notes' => $notes
		];

		return response()->json($response, 200);
	}

	public function getNoteById($id){
		$note = Note::find($id);
		if(!$note){
			return response()->json(['message'=>'Notes not found', 404]);
		}
		$response = [
			'note' => $note
		];

		return response()->json($response, 200);
	}

	public function putNote(Request $request, $id){
		//
	}

	public function deleteNote($id){
		$note = Note::find($id);
		$note->delete();
		return response()->json(['message' => 'Note deleted']);
	}
}