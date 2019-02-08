<?php

namespace App\Services\Web\Features;

use App\Domains\Auth\Jobs\AuthenticateUserJob;
use App\Domains\Auth\Jobs\MakeUserDetailPayloadJob;
use App\Domains\Auth\Jobs\SetTokenInWebSessionJob;
use App\Domains\HttpWeb\Jobs\RedirectWithErrorJob;
use App\Domains\HttpWeb\Jobs\RedirectWithSuccessJob;
use App\Domains\Jwt\Jobs\GenerateJwtTokenJob;
use App\Domains\RequestValidations\UserAuthenticationRequest;
use Lucid\Foundation\Feature;
use Illuminate\Http\Request;

class AuthenticationFeature extends Feature
{
    public function handle(Request $request,UserAuthenticationRequest $authenticationRequest)
    {
        $user=$this->run(AuthenticateUserJob::class,['requestData' => $request->all()]);

        if(empty($user['errorCode']))
        {
            $userDetailPayload=$this->run(MakeUserDetailPayloadJob::class,['user'=>$user]);

            $token=$this->run(GenerateJwtTokenJob::class,['payload'=>$userDetailPayload]);

            $this->run(SetTokenInWebSessionJob::class,['token'=>$token]);

            $redirectUrl='/dashboard';
            $successMessage='you are logged in successfully';
            return $this->run(new RedirectWithSuccessJob($request,$redirectUrl,$successMessage));
        }
        else
        {
            $redirectUrl='/';
            $errorMessage=$user['message'];
            return $this->run(new RedirectWithErrorJob($request,$redirectUrl,$errorMessage));
        }
    }
}
