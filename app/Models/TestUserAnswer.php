<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TestUserAnswer extends Model
{
    use HasFactory;
    protected $fillable = [
        'test_user_id',
        'option_id',
        
    ];
}
