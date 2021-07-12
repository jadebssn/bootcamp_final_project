<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
    
    use HasFactory;
    protected $fillable = [
        'test_user_id',
        'option_id'
        
    ];

    public function question(){
        return $this->belongsTo(Question::class);
    }
}
