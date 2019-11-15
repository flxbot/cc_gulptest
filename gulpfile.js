var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnano = require("cssnano"); // CSS Minifier
var uncss = require('postcss-uncss');
var rename = require("gulp-rename");
var fs = require('fs');


gulp.task('css', function() {
    var plugins = [];
    fs.writeFileSync('test.txt', '1.2.4');
    return gulp.src('./css/main.css')
        .pipe(postcss([
            uncss({
                html: ['prime-cucumber.cloudvent.net/_site/**/*.html'],
                htmlroot: './',
                ignore: ['.green']
            }),
            cssnano()
        ]))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest('./css/'));
});

