//导入工具包 require('node_modules里对应模块')
var gulp = require("gulp"), //本地安装gulp所用到的地方
    clean = require("gulp-clean"),
    less = require("gulp-less"),
    minifycss = require("gulp-minify-css"),
    rename = require("gulp-rename"),
    webpack = require("webpack-stream"),
    concat = require("gulp-concat"),
    uglify = require('gulp-uglify'),
    babel = require("gulp-babel");
//定义一个testLess任务（自定义任务名称）
gulp.task("testLess", function () {
    return gulp.src("src/less/index.less") //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest("dist/css")) //将会在src/css下生成index.css
        .pipe(rename("index.min.css"))
        .pipe(minifycss())
        .pipe(gulp.dest("dist/css"));

});
gulp.task("clean", function () {
    return gulp.src("dist/", { read: false }).pipe(clean());
});


gulp.task("testbabel", function () {
    gulp.src("src/js/babel.js")
        .pipe(babel({
            presets: ["es2015"]
        }))
        .pipe(gulp.dest("dist"));
});

// gulp.task("syntax:js", function () {
//   return  gulp.src("syntaxhighlighter/build/pack.js")
//         .pipe(webpack({
//             output: {
//                 filename: "syntax.js"
//             }
//         }))
//         .pipe(gulp.dest("syntaxhighlighter/dist"));
// });
gulp.task("syntax:less", function () {
    return gulp.src("syntaxhighlighter/build/pack.less")
        .pipe(less())
        .pipe(rename("syntax.css"))
        .pipe(gulp.dest("syntaxhighlighter/dist"))
});

gulp.task("ss", function () {
    return gulp.src(['syntaxhighlighter/scripts/shCore.js',
        'syntaxhighlighter/scripts/shBrushCss.js',
        'syntaxhighlighter/scripts/shBrushJScript.js',
        'syntaxhighlighter/scripts/shBrushXml.js','syntaxhighlighter/scripts/init.js'])
        .pipe(concat({path: 'synatx.js'}))
        .pipe(gulp.dest('./synatx/'))
        .pipe(rename("synatx.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest('./synatx/'))
})
gulp.task("default", ["testLess", "minifycss"]); //定义默认任务

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options])处理完后文件生成路径