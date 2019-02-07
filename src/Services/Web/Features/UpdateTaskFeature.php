<?php

namespace App\Services\Web\Features;

use Lucid\Foundation\Feature;
use Illuminate\Http\Request;

use Illuminate\Validation\ValidationException;
use App\Domains\Task\Jobs\ValidateTaskInputJob;
use App\Domains\Task\Jobs\UpdateTaskJob;
use App\Domains\Http\Jobs\SendToLocationJob;
use App\Domains\Http\Jobs\SendBackWithErrorMessageJob;

class UpdateTaskFeature extends Feature
{
    protected $id;

    public function __construct($id)
    {
        $this->id = $id;
    }

    public function handle(Request $request)
    {
        try
        {
            $this->run(ValidateTaskInputJob::class, [

                'data' => $request->all(),

            ]);

            $task = $this->run(UpdateTaskJob::class, [
                'data' => $request->only('title'),
                'id' => $this->id
            ]);

            $data = [
                'message'  => 'task edited',
                'location' => '/tasks',
            ];

            return $this->run(SendToLocationJob::class, [
                'data' => $data

            ]);

        } catch(ValidationException $e)
        {

            $data = [
                'messages' => $e->validator->messages(),
                'input' =>  $request->input()
            ];

            return $this->run(SendBackWithErrorMessageJob::class, ['data' => $data]);
        }
    }
}
