<?php

namespace App\Domains\Ticket\Jobs;

use App\Data\Repositories\TicketRepository;
use Lucid\Foundation\Job;

class StoreTicketJob extends Job
{
    protected $data;

    /**
     *
     * Create a new job instance.
     *
     * StoreTicketJob constructor.
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
     * @param TicketRepository $repo
     * @return mixed
     */
    public function handle(TicketRepository $repo)
    {
        return $repo->model->create($this->data);
    }
}
