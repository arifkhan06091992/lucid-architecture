<?php

namespace App\Domains\Task\Jobs;

use Lucid\Foundation\Job;
use App\Data\Repositories\TaskRepository;

class DeleteTaskJob extends Job
{
    protected $data;
    protected $id;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($data, $id)
    {
        $this->data = $data;
        $this->id = $id;

    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle(TaskRepository $repo)
    {
        $repo->model->whereId($this->id)->delete($this->data);
    }
}
