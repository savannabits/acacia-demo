<?php

namespace Acacia\AlbumTypes\Http\Requests\AlbumType;

use Illuminate\Foundation\Http\FormRequest;
use Acacia\AlbumTypes\Models\AlbumType;
class UpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            "slug" => ["sometimes", "string"],
            "name" => ["sometimes", "string"],
            "description" => ["nullable", "string"],
            "active" => ["sometimes", "boolean"],
        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return $this->user()->can("update", $this->album_type);
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
