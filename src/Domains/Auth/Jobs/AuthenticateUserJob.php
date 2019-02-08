<?php

namespace App\Domains\Auth\Jobs;

use App\Data\User;
use Illuminate\Support\Facades\Hash;
use Lucid\Foundation\Job;

class AuthenticateUserJob extends Job
{
    protected $requestData;


    public function __construct($requestData)
    {
        $this->requestData=$requestData;
    }

    public function handle()
    {
        $email=$this->requestData['email'];
        $password = $this->requestData['password'];
        $user = User::where(['email'=>$email])->first();

        if (!empty($user) && Hash::check($password, $user->password))
        {
            if($user->isAdmin==0)
            {
                $return = $user;
            }
            else
            {
                $return =
                    [
                        'errorCode'=>'accountNotActive',
                        'message' => 'Your Account is inactive'
                    ];
            }
        }
        else
        {
            $return =
                [
                    'errorCode'=>'invalidCredentials',
                    'message' => 'Please enter valid credentials'
                ];
        }

        return $return;
    }
}
