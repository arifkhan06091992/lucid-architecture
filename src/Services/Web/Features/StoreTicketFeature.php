<?php

namespace App\Services\Web\Features;

use App\Domains\Http\Jobs\SendBackWithErrorMessageJob;
use App\Domains\Ticket\Jobs\StoreTicketJob;
use App\Domains\Ticket\Jobs\ValidateTicketInputJob;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Lucid\Foundation\Feature;
use Illuminate\Http\Request;

class StoreTicketFeature extends Feature
{
    public function handle(Request $request)
    {
        try
        {

            $this->run(ValidateTicketInputJob::class,['data' => $request->all()]);

            $data =
                [
                    'title'     => $request->input('title'),
                    'user_id'   => 1,
                    'ticket_id' => strtoupper(str_random(10)),
                    'category_id'  => $request->input('category'),
                    'priority'  => $request->input('priority'),
                    'message'   => $request->input('message'),
                    'status'    => "Open"
                ];

            $ticket = $this->run(StoreTicketJob::class,['data' => $data]);

            return redirect()->back()->with("messages", "A ticket with ID:" .$ticket['ticket_id']. "has been opened.");


        }
        catch (ValidationException $e)
        {
            $data = ['messages' => $e->validator->messages(), 'input' =>  $request->input()];
            return $this->run(SendBackWithErrorMessageJob::class, ['data' => $data]);
        }
    }
}
