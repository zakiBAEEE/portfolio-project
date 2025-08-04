
<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PortfolioController;

Route::apiResource('portfolio', PortfolioController::class);
