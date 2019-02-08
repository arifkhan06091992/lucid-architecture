<?php

namespace App\Services\Web\Http\Controllers;

use App\Services\Web\Features\DashboardViewFeature;
use Lucid\Foundation\Http\Controller;

class DashboardController extends Controller
{
    public function dashboard()
    {
        return $this->serve(DashboardViewFeature::class);
    }
}
