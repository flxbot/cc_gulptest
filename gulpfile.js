var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnano = require("cssnano"); // CSS Minifier
var uncss = require('postcss-uncss');
var rename = require("gulp-rename");
var fs = require('fs');

const child = require('child_process');

gulp.task('css', function() {
    var plugins = [];
   // fs.writeFileSync('test.txt', 'hello world');
    return gulp.src('./css/main.css')
        .pipe(postcss([
            uncss({
                html: ['test.html'],
                htmlroot: '_site',
                ignore: ['.red','.green','.gray']
            }),
            cssnano()
        ]))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest('./css/'));
});


gulp.task('jekyll', function() {
    var plugins = [];
  return child.exec('jekyll', ['build'
  ]);
});