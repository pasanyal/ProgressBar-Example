'use strict';

var gulp = require("gulp");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var plugins = require('gulp-load-plugins')({scope: ['dependencies']});

require('harmonize')();

gulp.task("bundle", function () {
    return browserify({
        entries: "./app/main.jsx",
        debug: true
    }).transform(reactify)
        .bundle()
        .pipe(source("main.js"))
        .pipe(gulp.dest("app/dist"))
});

gulp.task("bundle", function () {
    return browserify({
        entries: "./app/tests/ProgressBarList.test.js",
        debug: true
    }).transform(reactify)
        .bundle()
        .pipe(source("tests.js"))
        .pipe(gulp.dest("app/__tests__"))
});

gulp.task("copy", ["bundle"], function () {
    return gulp.src(["app/index.html"])
        .pipe(gulp.dest("app/dist"));
});

gulp.task('less', function() {
  return gulp.src(['styles/less/_build.less'])
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(concat('control-bar.css'))
    .pipe(gulp.dest('app/dist/css'));
});

gulp.task("default",["copy", "less"],function(){
   console.log("Gulp completed..."); 
});

gulp.task('jest', plugins.shell.task('npm test', {
    ignoreErrors: true
}));

gulp.task('test', function () {
  runSequence('jest');
  gulp.watch(['app/__tests__/tests.js'], ['jest'])
});