var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnano = require("cssnano"); // CSS Minifier
var uncss = require('postcss-uncss');
var rename = require("gulp-rename");


gulp.task('css', function() {
    var plugins = [];
    return gulp.src('./_site/css/main.css')
        .pipe(postcss([
            uncss({
                html: ['_site/**/*.html'],
                htmlroot: '_site',
                ignore: ['.red']
            }),
            cssnano()
        ]))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest('./_site/css/'));
});