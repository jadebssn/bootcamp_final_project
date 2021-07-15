<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\TestUserAnswer;


class TestUser extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'test_id',
        'score'
    ];

    public function evaluate(){
        $score = 0;
        $answers=$this->testUserAnswers()->with('option')->with('option.question')->get();
        foreach($answers as $answer){
            if($answer->option->is_correct){
                $score += 100;
            } else {
                $score -= 100;
            }
        }
        $this->score = max(0, $score);
        $this->finished_at = date('Y-m-d H:i:s');
        $this->save();
    }

    public function testUserAnswers(){
        return $this->hasMany(TestUserAnswer::class);
    }

    public function scopeUnfinished($query){
        return $query->whereNull('finished_at');
    }
    public function test(){
        return $this->belongsTo(Test::class);
    }
 
}
