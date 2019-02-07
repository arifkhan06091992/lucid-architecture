<?php

namespace App\Services\Web\Features;

use Lucid\Foundation\Feature;
use Illuminate\Http\Request;

use App\Domains\Task\Jobs\DeleteTaskJob;
use App\Domains\Http\Jobs\SendToLocationJob;

class DeleteTaskFeature extends Feature
{
    protected  $id;

    public function __construct($id)
    {
        $this->id = $id;
    }

    public function handle(Request $request)
    {
        $this->run(DeleteTaskJob::class,[
            'id' => $this->id,
            'data' => $request->input($this->id),
        ]);

        $data = [
            'message' => 'task Deleted',
            'location' =>  '/tasks'
        ];

        return $this->run(SendToLocationJob::class,[
            'data' => $data
        ]);
    }
}
