<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ActivityController;
use App\Models\Activity; 

Route::get('/activities', [ActivityController::class, 'index'])->name('activities.index');
Route::post('/activities', [ActivityController::class, 'store'])->name('activities.store');
Route::get('/activities/{id}', [ActivityController::class, 'show'])->name('activities.show');
Route::put('/activities/{id}', [ActivityController::class, 'update'])->name('activities.update');
Route::delete('/activities/{id}', [ActivityController::class, 'destroy'])->name('activities.destroy');



Route::get('/', function () {
    $activities = Activity::all(); 
    return view('index', compact('activities'));
});
