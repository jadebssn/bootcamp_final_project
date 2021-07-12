const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js");
/*.postCss(
    "resources/css/app.css",
    "public/css",
    [
        //
    ]
);*/
mix.js("resources/js/Auth/index.jsx", "public/js/auth.js").react();
mix.sass("resources/scss/app.scss", "public/css")
    .sass("resources/scss/login.scss", "public/css/login.css")
    .sass("resources/scss/Course.scss", "public/css/course.css")
    .sass("resources/scss/Courses.scss", "public/css/courses.css")
    .sass("resources/scss/Nav.scss", "public/css/nav.css")
    .sass("resources/scss/Logout.scss", "public/css/logout.css")
    .sass("resources/scss/CourseDetail.scss", "public/css/coursedetail.css")
    .sass("resources/scss/Test.scss", "public/css/test.css");
mix.browserSync({
    host: "localhost",
    port: 3000,
    proxy: {
        target: process.env.APP_URL, // Yay! Using APP_URL from the .env file!
    },
});

// add versioning
mix.version();
