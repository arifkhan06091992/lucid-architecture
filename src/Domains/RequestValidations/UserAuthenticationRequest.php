<?php

namespace App\Domains\RequestValidations;

use Illuminate\Foundation\Http\FormRequest;

class UserAuthenticationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return
            [
                'email' => 'required|string|min:3|max:255',
                'password' => 'required|string|min:6|max:20'
            ];
    }
}
