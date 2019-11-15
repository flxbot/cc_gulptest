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
                html: ['test.html'],
                htmlroot: '_site',
                ignore: ['.red']
            }),
            cssnano()
        ]))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest('./css/'));
});

