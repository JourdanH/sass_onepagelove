var gulp = require('gulp');

var validate = require('gulp-w3c-css');
 
var path = require('path');
var gulp = require('gulp');
var gutil = require('gulp-util');
 
var srcPath = path.join(__dirname, './assets/css/*.css');
var dstPath = path.join(__dirname, './assets/test');

var htmlhint = require("gulp-htmlhint");
 
gulp.task('htmlhint', function(){
    return gulp.src("./*.html")
    .pipe(htmlhint())
    .pipe(gulp.dest(dstPath));

});
gulp.task('w3s', function(){
    return gulp.src(srcPath)
    .pipe(validate())
    .pipe(gulp.dest(dstPath));
});

 gulp.task('default', ['w3s', 'htmlhint']);