<?php

namespace App\Domains\HttpWeb\Jobs;

use Lucid\Foundation\Job;

class RedirectWithSuccessJob extends Job
{
    protected $request;
    protected $redirectUrl;
    protected $successMessage;

    public function __construct($request,$redirectUrl,$successMessage)
    {
        $this->request=$request;
        $this->redirectUrl=$redirectUrl;
        $this->successMessage=$successMessage;
    }

    public function handle()
    {
        $this->request->session()->flash('successMessage', $this->successMessage);
        return redirect($this->redirectUrl);
    }
}
