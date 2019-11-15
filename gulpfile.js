var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnano = require("cssnano"); // CSS Minifier
var uncss = require('postcss-uncss');
var rename = require("gulp-rename");
var fs = require('fs');
var child = require('child_process');
var spawn = require('cross-spawn');
var debug = require('gulp-debug');


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
                .pipe(debug({title: 'gulp-debug:'}))

        .pipe(rename({ suffix: ".min" }))
                .pipe(debug({title: 'gulp-debug:'}))

        .pipe(gulp.dest('./css/'))
        .pipe(debug({title: 'gulp-debug:',minimal:false}))
        ;
});




gulp.task('jekyll', function() {
    var plugins = [];
  return spawn('jekyll', ['build'
  ]);
});