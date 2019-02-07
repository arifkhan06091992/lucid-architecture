<?php

namespace App\Services\Web\Features;

use Lucid\Foundation\Feature;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

use App\Domains\Task\Jobs\ValidateTaskInputJob;
use App\Domains\Task\Jobs\CreateTaskJob;
use App\Domains\Http\Jobs\SendToLocationJob;
use App\Domains\Http\Jobs\SendBackWithErrorMessageJob;

class StoreTaskFeature extends Feature
{
    public function handle(Request $request)
    {
        try
        {
            $this->run(ValidateTaskInputJob::class,['data' => $request->all()]);

            $task = $this->run(CreateTaskJob::class,['data' => $request->only('title')]);

            $data = ['message'=>'new task added','location'=>'/tasks'];

            return $this->run(SendToLocationJob::class,['data' => $data]);

        }
        catch(ValidationException $e)
        {
            $data = ['messages' => $e->validator->messages(),'input' =>  $request->input()];
            return $this->run(SendBackWithErrorMessageJob::class, ['data' => $data]);
        }
    }
}