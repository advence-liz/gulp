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


/**
 * 使用 gulp-less-sourcemap 完成功能，源码病并不打包进去sourcemap 中
 */
gulp.task("less:s", function () {
    gulp.src(path.join('src', 'index.less'))
        .pipe(lessSourcemap({
            sourceMap: {
                sourceMapURL: 'http://10.2.165.40:8000/dist/gui/',
                // sourceMapBasepath: lessFile.base,
                sourceMapRootpath: '../src', // Optional absolute or relative path to your LESS files
                sourceMapFileInline: false
            }
        }))
        .pipe(gulp.dest('dist'));
});
/**
 * 源码存在sourceMap 文件中
 */
gulp.task("less", function () {
    gulp.src(path.join('src', 'index.less'))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('dist'));
});
/**
 * 源码不存在sourceMap 文件中
 * @desc
 * index.css                                                                         |    index.css.map
 * sourceMappingURLPrefix  控制文件尾的SourceMapURL                                        includeContent  是否包含源码
 * sourceRoot 输出的css 相对 源文件的位置 sourcemap 文件中包含 css 源map的相对位置关系  
 * ```
 * {"version":3,"sources":["var.less","index.less"],"names":[],
 * "mappings":"AACA;EACI,WAAA;;ACWF;EAVE,4BAAA;EACF,yBAAA;EACA,uBAAA;EACA,oBAAA;;AASA,CAAC;EANC,YAAA;EACA,yBAAA;;AAaF;EACE,iBAAA;;AAEF;EACI,UAAA",
 * "file":"../index.css","sourceRoot":"../../src"} 
 * ```                                                                  
 */
gulp.task("less:nocode", function () {
  return  gulp.src(path.join('src', 'index.less'))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write('maps',
            {
                includeContent: false,
                sourceRoot: path.join('..', 'src'),
                sourceMappingURLPrefix: 'http://localhost:8000/dist'
            }))
        .pipe(gulp.dest('dist'));
});

//gulp.task("default", ["testLess", "minifycss"]); //定义默认任务

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options])处理完后文件生成路径