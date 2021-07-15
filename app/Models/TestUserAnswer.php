<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Option;

class TestUserAnswer extends Model
{
    use HasFactory;
    protected $fillable = [
        'test_user_id',
        'option_id',
        
    ];

    public function option(){
        return $this->belongsTo(Option::class);
    }
}
