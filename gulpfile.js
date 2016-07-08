/*
  Get data via JSON file, keyed on filename.
*/
var gulp = require('gulp');
var swig = require('gulp-swig');
var data = require('gulp-data');
var zip = require('gulp-zip');
var watch = require('gulp-watch');

var getJsonData = function(file) {
  return require('./data.json');
};

gulp.task('compile', function() {
  return gulp.src('./index.html')
    .pipe(data(getJsonData))
    .pipe(swig())
    .pipe(swig({defaults: { cache: false }}))
    .pipe(gulp.dest('build'));
});

gulp.task('default',['compile']);

gulp.task('watch', function () {
    watch('*.html', function () {
        gulp.run();
    });
});
