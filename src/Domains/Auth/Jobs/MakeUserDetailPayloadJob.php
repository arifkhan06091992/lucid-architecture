<?php

namespace App\Domains\Auth\Jobs;

use Lucid\Foundation\Job;

class MakeUserDetailPayloadJob extends Job
{
    protected $user;

    public function __construct($user)
    {
        $this->user=$user;
    }


    public function handle()
    {
        return
            [
                'id'=>$this->user->id,
                'name'=>$this->user->name,
                'email'=>$this->user->email
            ];
    }
}
