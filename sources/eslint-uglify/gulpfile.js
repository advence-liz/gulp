"use strict";

const gulp = require('gulp'),
    path = require("path"),
    eslint = require('gulp-eslint'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('copy:sources',function(){
    return gulp.src(path.join('Scripts','**','*.js'),{base:'.'})
           .pipe(gulp.dest(path.join('Sources')))
})

gulp.task('uglify',['copy:sources'],function () {
    return gulp.src(['Scripts/**/*.js'], { base: '.' })
        .pipe(sourcemaps.init())
        .pipe(uglify({mangle:false}))//不改变变量名
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/'));
});



gulp.task('lint', () => {
    // ESLint ignores files with "node_modules" paths. 
    // So, it's best to have gulp ignore the directory as well. 
    // Also, Be sure to return the stream from the task; 
    // Otherwise, the task may end before the stream has finished. 
    return gulp.src(['Scripts/**/*.js'])
        // eslint() attaches the lint output to the "eslint" property 
        // of the file object so it can be used by other modules. 
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console. 
        // Alternatively use eslint.formatEach() (see Docs). 
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on 
        // lint error, return the stream and pipe to failAfterError last. 
        .pipe(eslint.failAfterError());
});


