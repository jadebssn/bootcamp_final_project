<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\Question;

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
}