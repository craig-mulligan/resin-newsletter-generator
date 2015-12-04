/*
  Get data via JSON file, keyed on filename.
*/
var gulp = require('gulp');
var swig = require('gulp-swig');
var data = require('gulp-data');
var zip = require('gulp-zip');

var getJsonData = function(file) {
  return require('./data.json');
};

gulp.task('compile', function() {
  return gulp.src('./template.html')
    .pipe(data(getJsonData))
    .pipe(swig())
    .pipe(gulp.dest('build'));
});

gulp.task('default',['compile'], function() {
   gulp.src('./img/*')
   .pipe(gulp.dest('./build/img'));
});
