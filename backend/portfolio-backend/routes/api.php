<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\UserController;

Route::apiResource('portfolio', PortfolioController::class);
Route::apiResource('users', UserController::class);
