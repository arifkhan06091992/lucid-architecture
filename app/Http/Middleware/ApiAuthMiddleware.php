<?php

namespace Framework\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class ApiAuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        // Check if request Web
        if (!$request->ajax() && !$request->wantsJson())
        {
            $request->headers->set('Authorization', 'Bearer ' . session('access_token'));
        }

        if (Auth::guard($guard)->guest())
        {
            if ($request->ajax() || $request->wantsJson())
            {
                return response(['errorCode'=>'UnAuthorize'], 401);
            }
            else
            {
                session(['access_token' => '']);
                return redirect()->guest('/');
            }
        }
        return $next($request);
    }
}
