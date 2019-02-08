<?php

namespace App\Domains\Jwt\Jobs;

use Illuminate\Support\Facades\Auth;
use Lucid\Foundation\Job;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;

class GenerateJwtTokenJob extends Job
{
    protected  $payload;

    public function __construct($payload)
    {
        $this->payload=$payload;
    }

    public function handle()
    {
        $factory = JWTFactory::customClaims(['sub'=> $this->payload['id']]);
        $payload = $factory->data($this->payload)->make();
        $access_token = JWTAuth::encode($payload);
        $access_token=(string)$access_token;
        return $access_token;
    }
}
