<?php

namespace App\Services\Authentication\Http\Controllers;

use App\Services\Authentication\Features\LoginUserFeature;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Lucid\Foundation\Http\Controller;
use Tymon\JWTAuth\Exceptions\JWTException;

class ApiAuthController extends Controller
{
    public function login(Request $request)
    {
        return $this->serve(LoginUserFeature::class);
    }

    public function logout(Request $request)
    {

    }

    public function getAuthUser(Request $request)
    {

    }
}
