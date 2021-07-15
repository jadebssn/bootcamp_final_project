<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $title }} | Final project</title>

    <link rel="stylesheet" href="{{ mix('css/login.css') }}">
    <link rel="stylesheet" href="{{ mix('css/course.css') }}">
    <link rel="stylesheet" href="{{ mix('css/courses.css') }}">
    <link rel="stylesheet" href="{{ mix('css/nav.css') }}">
    <link rel="stylesheet" href="{{ mix('css/logout.css') }}">
    <link rel="stylesheet" href="{{ mix('css/coursedetail.css') }}">
    <link rel="stylesheet" href="{{ mix('css/test.css') }}">
    <link rel="stylesheet" href="{{ mix('css/results.css') }}">
    <link rel="stylesheet" href="{{ mix('css/footer.css') }}">

    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body>

    @include('partials.header', [
        'current' => $current_menu_item ?? null
    ])

    

    

    <main>

        @include('partials.messages')

        @yield('content')

    </main>

</body>
</html>