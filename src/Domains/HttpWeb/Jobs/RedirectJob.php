<?php

namespace App\Domains\HttpWeb\Jobs;

use Lucid\Foundation\Job;

class RedirectJob extends Job
{
    protected $request;
    protected $redirectUrl;

    public function __construct($request,$redirectUrl)
    {
        $this->request=$request;
        $this->redirectUrl=$redirectUrl;
    }

    public function handle()
    {
        return redirect($this->redirectUrl);
    }
}
