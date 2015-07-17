'use strict';

var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

// This will minify and rename to angular-mailcheck.min.js
gulp.task('default', function() {
  return gulp.src('angular-mailcheck.js')
    .pipe(uglify({mangle: true}))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./'));
});
