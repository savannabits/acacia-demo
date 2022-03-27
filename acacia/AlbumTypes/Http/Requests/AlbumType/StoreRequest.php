<?php

namespace Acacia\AlbumTypes\Http\Requests\AlbumType;

use Illuminate\Foundation\Http\FormRequest;
use Acacia\AlbumTypes\Models\AlbumType;
class StoreRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            "slug" => ["required", "string"],
            "name" => ["required", "string"],
            "description" => ["nullable", "string"],
            "active" => ["required", "boolean"],
        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return $this->user()->can("create", AlbumType::class);
    }

    public function sanitizedArray(): array
    {
        $sanitized = $this->validated();
        //Add your code for manipulation with request data here
        return $sanitized;
    }
    /**
     * Return modified (sanitized data) as a php object
     * @return  object
     */
    public function sanitizedObject(): object
    {
        return json_decode(collect($this->sanitizedArray()));
    }
}
