<?php

namespace App\Services\Authentication\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Lucid\Foundation\Http\Controller;

class AuthController extends Controller
{
    /**
     * Admin login form
     * @return View
     */
    public function index()
    {
        if(Auth::guard('api')->user())
        {
            return redirect('dashboard');
        }
        else
        {
            return view('authentication::login.login');
        }
    }

    /**
     * Authenticate admin login
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function authenticate(Request $request)
    {
        if ($token=Auth::guard('api')->attempt(['email' => $request->email, 'password' => $request->password]))
        {
            session(['jwt_token' => $token]);
            return redirect('dashboard');
        }
        else
        {
            $request->flash();
            Session::flash('error_message', 'Invalid email or password');
            return redirect('/');
        }
    }

    /**
     * index()
     * This function show dashboard for merchant / store admin
     * @developer : Arif Khan
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function dashboard(Request $request)
    {
        $user=Auth::guard('api')->user();
        return $user;
    }


    /**
     * admin logout
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function logout(Request $request)
    {
        Auth::guard('api')->logout();
        return redirect('/');
    }
}
