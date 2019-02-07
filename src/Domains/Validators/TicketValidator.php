<?php
namespace App\Domains\Validators;

use App\Foundation\AppValidator;

class TicketValidator extends AppValidator
{

    protected $rules =
        [
            'title'     => 'required',
            'category'  => 'required',
            'priority'  => 'required',
            'message'   => 'required'
        ];

    protected $messages = ['required'  =>  "We'd love to know your :attribute, so please fill it properly."];
}