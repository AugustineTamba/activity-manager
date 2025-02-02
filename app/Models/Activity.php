<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    use HasFactory;

    // Define fillable fields (optional but recommended)
    protected $fillable = ['name', 'description', 'is_closed'];
}