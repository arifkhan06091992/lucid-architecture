<?php

namespace App\Domains\Ticket\Jobs;

use Illuminate\Support\Facades\Redirect;
use Lucid\Foundation\Job;


use Illuminate\Http\Request;

class SendBackWithErrorMessageJob extends Job
{
    protected $data;

    /**
     *
     * Create a new job instance.
     *
     * SendBackWithErrorMessageJob constructor.
     * @param $data
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     *
     * Execute the job.
     *
     * @param Request $request
     * @return $this|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request)
    {
        $request->session()->flash('messages', $this->data['messages']);

        if ($this->data['input'])
        {
            return Redirect::back()->withInput();

        }
        else
        {
            return Redirect::back();
        }
    }
}
