<?php

namespace App\Domains\Auth\Jobs;

use Illuminate\Support\Facades\Auth;
use Lucid\Foundation\Job;

class LogoutFromWebJob extends Job
{

    public function handle()
    {
        session(['access_token' => '']);
        Auth::guard('api')->logout();
    }
}
