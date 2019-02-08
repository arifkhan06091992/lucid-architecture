<?php

namespace App\Services\Web\Features;

use App\Domains\HttpWeb\Jobs\ReturnWithViewJob;
use Lucid\Foundation\Feature;
use Illuminate\Http\Request;

class DashboardViewFeature extends Feature
{
    public function handle(Request $request)
    {
        return $this->run(new ReturnWithViewJob('web::dashboard.index'));
    }
}
