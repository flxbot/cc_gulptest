var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnano = require("cssnano"); // CSS Minifier
var uncss = require('postcss-uncss');
var rename = require("gulp-rename");


gulp.task('css', function() {
    var plugins = [];
    return gulp.src('./css/main.css')
        .pipe(postcss([
            uncss({
                html: ['_layouts/**/*.html'],
                htmlroot: '_site',
                ignore: ['.red']
            }),
            cssnano()
        ]))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest('./css/'));
});