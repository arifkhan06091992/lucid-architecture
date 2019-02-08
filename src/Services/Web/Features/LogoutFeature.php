<?php

namespace App\Services\Web\Features;

use App\Domains\Auth\Jobs\LogoutFromWebJob;
use App\Domains\HttpWeb\Jobs\RedirectWithSuccessJob;
use Lucid\Foundation\Feature;
use Illuminate\Http\Request;

class LogoutFeature extends Feature
{
    public function handle(Request $request)
    {
        $this->run(LogoutFromWebJob::class);

        $redirectUrl='/';
        $successMessage='you are logged out successfully';
        return $this->run(new RedirectWithSuccessJob($request,$redirectUrl,$successMessage));
    }
}
