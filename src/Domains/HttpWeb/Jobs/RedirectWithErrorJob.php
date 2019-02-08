<?php

namespace App\Domains\HttpWeb\Jobs;

use Lucid\Foundation\Job;

class RedirectWithErrorJob extends Job
{
    protected $request;
    protected $redirectUrl;
    protected $errorMessage;

    public function __construct($request,$redirectUrl,$errorMessage)
    {
        $this->request=$request;
        $this->redirectUrl=$redirectUrl;
        $this->errorMessage=$errorMessage;
    }

    public function handle()
    {
        $this->request->session()->flash('errorMessage', $this->errorMessage);
        return redirect($this->redirectUrl);
    }
}
