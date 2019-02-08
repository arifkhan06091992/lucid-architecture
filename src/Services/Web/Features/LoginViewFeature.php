<?php

namespace App\Services\Web\Features;

use App\Domains\HttpWeb\Jobs\RedirectJob;
use App\Domains\HttpWeb\Jobs\ReturnWithViewJob;
use Lucid\Foundation\Feature;
use Illuminate\Http\Request;

class LoginViewFeature extends Feature
{
    public function handle(Request $request)
    {
        if(session('access_token'))
        {
            $redirectUrl='/dashboard';
            return $this->run(new RedirectJob($request,$redirectUrl));
        }
        else
        {
            return $this->run(new ReturnWithViewJob('web::login.login'));
        }
    }
}
