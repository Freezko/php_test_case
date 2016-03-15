<?php

namespace App\Http\Controllers;

use App\Comment;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\DB;

class IndexController extends Controller
{
    /**
     * Главная страница
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('welcome', ['list' => DB::table('comments')->orderBy('id', 'desc')->paginate(5)]);
    }

    /**
     * Страница для добавления комментария.
     * Отрабатывает для POST запроса.
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function addComment(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|regex:/^[a-zA-Z0-9]+$/',
            'email' => 'email',
            'text' => 'required',
        ]);

        Comment::create([
            'name' => $request->name,
            'email' => $request->email,
            'text' => strip_tags($request->text),
        ]);

        return redirect()->back();
    }
}
