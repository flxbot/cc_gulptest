var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnano = require("cssnano"); // CSS Minifier
var uncss = require('postcss-uncss');
var rename = require("gulp-rename");
var fs = require('fs');
var debug = require('gulp-debug');
var path = require('path');


gulp.task('css', function() {
    var plugins = [];
    return gulp.src(path.join(__dirname, "css/main.css"))
    .pipe(debug({title: 'gulp-debug:',minimal:false}))
        .pipe(postcss([
            uncss({
                html: ['**/*.html'],
                htmlroot: '_site',
                ignore: ['.green']
            }),
            cssnano()
        ]))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest('./css/'))
        .pipe(debug({title: 'gulp-debug:',minimal:false}))
        ;
});

