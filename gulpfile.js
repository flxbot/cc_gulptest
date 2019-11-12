var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnano = require("cssnano"); // CSS Minifier
var uncss = require('postcss-uncss');
var rename = require("gulp-rename");


gulp.task('css', function() {
    var plugins = [];
    return gulp.src('./_site/css/cyxc.css')
        .pipe(postcss([
            uncss({
                html: ['_site/**/*.html'],
                htmlroot: '_site',
                ignore: ['.monthholder', '.col-6', '.col-sm-4', '.col-lg-3', '.ex-month', '.month', '.unavailable']
            }),
            cssnano()
        ]))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest('./_site/css/'));
});




 