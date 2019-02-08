<?php

namespace App\Domains\Auth\Jobs;

use Lucid\Foundation\Job;

class SetTokenInWebSessionJob extends Job
{
    protected $token;

    public function __construct($token)
    {
        $this->token=$token;
    }


    public function handle()
    {
        session(['access_token' => $this->token]);
    }
}
