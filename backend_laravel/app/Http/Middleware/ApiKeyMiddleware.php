<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ApiKeyMiddleware
{
    public function handle(Request $request, Closure $next)
    {
 
        if(env('API_KEY')!== "") {
            
            $key = $request->header('X-API-KEY');  
            if ($key != env('API_KEY')) {
                return response()->json(['error' => 'Acceso denegado'], 401);
            }else{
                return $next($request);
            }
        } else { 
            return response()->json(['error' => 'API key  no configurado'], 500);
        }

        
    }
}
