<?php

namespace App\Domains\Ticket\Jobs;

use App\Domains\Validators\TicketValidator;
use Lucid\Foundation\Job;

class ValidateTicketInputJob extends Job
{
    protected $data;

    /**
     *
     * Create a new job instance.
     *
     * ValidateTicketInputJob constructor.
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
     * @param TicketValidator $validator
     * @return mixed
     */
    public function handle(TicketValidator $validator)
    {
        return $validator->validate($this->data);
    }
}
