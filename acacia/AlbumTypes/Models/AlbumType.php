<?php

namespace Acacia\AlbumTypes\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Acacia\AlbumTypes\Database\Factories\AlbumTypeFactory;
use Laravel\Scout\Searchable;

class AlbumType extends Model
{
    use HasFactory, Searchable;

    protected $fillable = ["slug", "name", "description", "active"];
    protected $hidden = [];
    protected $casts = [
        "active" => "boolean",
        "created_at" => "datetime",
        "updated_at" => "datetime",
    ];
    protected $appends = ["can"];

    protected function getCanAttribute(): array
    {
        $policies = collect([
            "viewAny",
            "view",
            "create",
            "update",
            "delete",
            "restore",
            "forceDelete",
            "review",
        ]);
        return $policies
            ->map(
                fn(string $policy) => [
                    "policy" => $policy,
                    "can" =>
                        \Auth::check() && \Auth::user()->can($policy, $this),
                ]
            )
            ->pluck("can", "policy")
            ->toArray();
    }

    protected static function newFactory(): AlbumTypeFactory
    {
        return AlbumTypeFactory::new();
    }
    /********* BELONGS TO **********/

    /********* MORPH TO **********/

    public function toSearchableArray(): array
    {
        return $this->only($this->getFillable());
    }
}
