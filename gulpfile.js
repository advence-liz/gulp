//导入工具包 require('node_modules里对应模块')
"use strict";
var gulp = require("gulp"), //本地安装gulp所用到的地方
    clean = require("gulp-clean"),
    lessSourcemap = require('gulp-less-sourcemap'),
    less = require("gulp-less"),
    rename = require("gulp-rename"),
    git = require('gulp-git'),
    concat = require("gulp-concat"),
    uglify = require('gulp-uglify'),
    babel = require("gulp-babel"),
    path = require("path"),
    sourcemaps = require('gulp-sourcemaps'),
    Q = require("q");

gulp.task("clean", function () {
    return gulp.src("dist/", { read: false }).pipe(clean());
});



gulp.task("less:s", function () {
    gulp.src(path.join('src', 'index.less'))
        .pipe(lessSourcemap({
            sourceMap: {
                //sourceMapURL: sourceMapFileName,
                // sourceMapBasepath: lessFile.base,
                sourceMapRootpath: '../src', // Optional absolute or relative path to your LESS files
                sourceMapFileInline: false
            }
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task("less", function () {
    gulp.src(path.join('src', 'index.less'))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('dist'));
});


//gulp.task("default", ["testLess", "minifycss"]); //定义默认任务

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options])处理完后文件生成路径