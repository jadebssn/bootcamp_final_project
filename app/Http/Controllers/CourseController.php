<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;

class CourseController extends Controller
{
    public function index()
    {
        $courses = Course::all();
        // return 'hi';

        return view('courses.index', compact('courses'));
    
}

    public function show($id)
    {
        $courses = Course::findOrFail($id);

        return view('courses.show', compact('courses'));
    }
}