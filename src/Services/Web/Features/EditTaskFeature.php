<?php

namespace App\Services\Web\Features;

use Lucid\Foundation\Feature;
use Illuminate\Http\Request;

use App\Domains\Http\Jobs\RespondWithViewJob;
use App\Domains\Task\Jobs\RetriveSingleTaskjob;

class EditTaskFeature extends Feature
{
    public function __construct($id)
    {
        $this->id = $id;
    }

    public function handle(Request $request)
    {
        $task = $this->run(RetriveSingleTaskjob::class, [
            'id' => $this->id
        ]);

        $data = [
            'task' => $task
        ];


        return $this->run(RespondWithViewJob::class,[

            'template' => 'task.edit',
            'data' =>  $data

        ]);
    }
}
