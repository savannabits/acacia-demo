<?php

namespace Acacia\AlbumTypes\Http\Controllers\Api;

use Acacia\AlbumTypes\Models\AlbumType;
use Acacia\AlbumTypes\Repositories\AlbumTypes;
use Acacia\AlbumTypes\Http\Requests\AlbumType\IndexRequest;
use Acacia\AlbumTypes\Http\Requests\AlbumType\DtRequest;
use Acacia\AlbumTypes\Http\Requests\AlbumType\ViewRequest;
use Acacia\AlbumTypes\Http\Requests\AlbumType\StoreRequest;
use Acacia\AlbumTypes\Http\Requests\AlbumType\UpdateRequest;
use Acacia\AlbumTypes\Http\Requests\AlbumType\DestroyRequest;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Savannabits\Acacia\Helpers\ApiResponse;

class AlbumTypeController extends Controller
{
    use AuthorizesRequests, ValidatesRequests;
    public function __construct(
        private ApiResponse $api,
        private AlbumTypes $repo
    ) {
    }
    /**
     * Display a listing of the resource.
     * @param IndexRequest $request
     * @return JsonResponse
     */
    public function index(IndexRequest $request): JsonResponse
    {
        try {
            $data = $this->repo->index();
            return $this->api
                ->success()
                ->message("List of AlbumTypes")
                ->payload($data)
                ->send();
        } catch (\Throwable $e) {
            \Log::error($e);
            return $this->api
                ->failed()
                ->code(500)
                ->message($e->getMessage())
                ->send();
        }
    }

    /**
     * @param DtRequest $request
     * @return LengthAwarePaginator|JsonResponse
     */
    public function dt(DtRequest $request): LengthAwarePaginator|JsonResponse
    {
        try {
            return $this->repo->dt();
        } catch (\Throwable $e) {
            \Log::error($e);
            return $this->api
                ->failed()
                ->code(500)
                ->message($e->getMessage())
                ->send();
        }
    }

    /**
     * Store a newly created resource in storage.
     * @param StoreRequest $request
     * @return JsonResponse
     */
    public function store(StoreRequest $request): JsonResponse
    {
        try {
            $payload = $this->repo->store($request->sanitizedObject());
            $success = "Record created successfully";
            return $this->api
                ->success()
                ->message($success)
                ->payload($payload)
                ->send();
        } catch (\Throwable $e) {
            \Log::error($e);
            return $this->api
                ->failed()
                ->code(500)
                ->message($e->getMessage())
                ->send();
        }
    }

    /**
     * Show the specified resource.
     * @param ViewRequest $request
     * @param AlbumType $albumType
     * @return JsonResponse
     */
    public function show(
        ViewRequest $request,
        AlbumType $albumType
    ): JsonResponse {
        try {
            $payload = $this->repo->setModel($albumType)->show();
            $success = "Single record fetched";
            return $this->api
                ->success()
                ->message($success)
                ->payload($payload)
                ->send();
        } catch (\Throwable $e) {
            \Log::error($e);
            return $this->api
                ->failed()
                ->code(500)
                ->message($e->getMessage())
                ->send();
        }
    }

    /**
     * Update the specified resource in storage.
     * @param UpdateRequest $request
     * @param AlbumType $albumType
     * @return JsonResponse
     */
    public function update(
        UpdateRequest $request,
        AlbumType $albumType
    ): JsonResponse {
        try {
            $payload = $this->repo
                ->setModel($albumType)
                ->update($request->sanitizedObject());
            $success = "Record updated successfully";
            return $this->api
                ->success()
                ->message($success)
                ->payload($payload)
                ->send();
        } catch (\Throwable $e) {
            \Log::error($e);
            return $this->api
                ->failed()
                ->code(500)
                ->message($e->getMessage())
                ->send();
        }
    }

    /**
     * Remove the specified resource from storage.
     * @param DestroyRequest $request
     * @param AlbumType $albumType
     * @return JsonResponse
     */
    public function destroy(
        DestroyRequest $request,
        AlbumType $albumType
    ): JsonResponse {
        try {
            $payload = $this->repo->setModel($albumType)->destroy();
            $success = "Record deleted successfully";
            return $this->api
                ->success()
                ->message($success)
                ->payload($payload)
                ->send();
        } catch (\Throwable $e) {
            \Log::error($e);
            return $this->api
                ->failed()
                ->code(500)
                ->message($e->getMessage())
                ->send();
        }
    }
}
