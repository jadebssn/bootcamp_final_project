<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Question;

class Test extends Model
{
    use HasFactory;

    public function Questions () {
       return $this->hasMany(Question::class);
    }
}
