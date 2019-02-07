<?php

namespace App\Domains\Task\Jobs;

use Lucid\Foundation\Job;
use App\Data\Repositories\TaskRepository;

class CreateTaskJob extends Job
{
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this-> data = $data;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle(TaskRepository $repo)
    {
        $repo->model->create($this->data);
    }
}
