<?php

namespace App\Services\Web\Features;

use Lucid\Foundation\Feature;
use Illuminate\Http\Request;

use App\Domains\Categories\Jobs\ListAllCategoryJob;

class CreateTicketFeature extends Feature
{
    public function handle(Request $request)
    {
        $categories = $this->run(ListAllCategoryJob::class);
        return view('tickets.create', compact('categories'));
    }
}
