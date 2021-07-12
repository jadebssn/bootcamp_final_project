<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Option;

class Question extends Model
{
    
    
    use HasFactory;

    public function Options()
    {
        return $this->hasMany(Option::class);
    }


    public function test(){
        return $this->belongsTo(Test::class);
    }
}
