<?php

namespace App\Services\Web\Http\Controllers;

use App\Services\Web\Features\AuthenticationFeature;
use App\Services\Web\Features\LoginViewFeature;
use App\Services\Web\Features\LogoutFeature;
use Illuminate\Http\Request;
use Lucid\Foundation\Http\Controller;

class AuthController extends Controller
{

    /**
     * @return mixed
     */
    public function index()
    {
        return $this->serve(LoginViewFeature::class);
    }


    /**
     * @param Request $request
     * @return mixed
     */
    public function authenticate(Request $request)
    {
        return $this->serve(AuthenticationFeature::class);
    }


    /**
     * @param Request $request
     * @return mixed
     */
    public function logout(Request $request)
    {
        return $this->serve(LogoutFeature::class);
    }
}
