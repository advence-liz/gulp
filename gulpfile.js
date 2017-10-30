//导入工具包 require('node_modules里对应模块')
"use strict";
const gulp = require("gulp"),
    path = require("path"),
    prefixer = require("./gulpPrefixer.js");

gulp.task("pre", function () {
    return gulp.src(path.join('src', 'index.md'))
        .pipe(prefixer("pre"))
        .pipe(gulp.dest('dist'))
})



//gulp.task("default", ["testLess", "minifycss"]); //定义默认任务

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options])处理完后文件生成路径