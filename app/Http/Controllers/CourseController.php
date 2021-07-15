<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\Question;
use App\Models\Test;
use Illuminate\Support\Facades\Auth;

use App\Models\TestUser;
use App\Models\TestUserAnswer;
use App\Models\Option;


class CourseController extends Controller
{
    public function index()
    {
        $courses = Course::all();
        // return 'hi';

        return $courses;
    
}

    public function show($id)
    {
        $course = Course::findOrFail($id);

        return $course;
    }

    public function question()
    {
        $questions = Question::all();

        return $questions;

       
        // dd($questions);
    }

    public function test($course_id){
        $test = Test::with('questions')->with('questions.options')->where('course_id',$course_id)->first();
        $test_user = TestUser::where('user_id',Auth::user()->id)->where('test_id', $test->id)->unfinished()->first();
        if(!$test_user){
        $test_user = TestUser::create([
            'user_id' => Auth::user()->id,
            'test_id' => $test->id,
            'score' => 0
        ]);
        }

       

        return $test;
    }

    public function submit($test_id, Request $request){

        $test = Test::findOrFail($test_id);

        $test_user = TestUser::where('user_id',Auth::user()->id)->where('test_id', $test->id)->unfinished()->firstOrFail();
        $options = $request->input('options');
        $test_user->testUserAnswers()->delete();

        foreach($options as $option){
            TestUserAnswer::create([
                'test_user_id' => $test_user->id,
                'option_id' => $option,
            ]);
        }
        $test_user->evaluate();        
    }

    // public function result($option_id, Request $request){
    //     $result = TestUserAnswer::with('options')->with('test_id')->where('is_correct')->get();
    //     $option_id = $request->input('is_correct');
    //     return $result;
    // }
    
}