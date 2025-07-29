<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class LocationController extends Controller
{
    public function index(): JsonResponse
    {
        $locations = json_decode(file_get_contents(base_path('data/locations.json')), true);

        return response()->json($locations);
    }
}
