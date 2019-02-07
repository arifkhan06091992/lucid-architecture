<?php

namespace App\Domains\Categories\Jobs;

use App\Data\Repositories\CategoryRepository;
use Lucid\Foundation\Job;

class ListAllCategoryJob extends Job
{


    /**
     *
     * Create a new job instance.
     *
     * ListAllCategoryJob constructor.
     */
    public function __construct()
    {

    }

    /**
     *
     * Execute the job.
     *
     * @param CategoryRepository $repo
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function handle(CategoryRepository $repo)
    {
        return $repo->model->all();
    }
}
