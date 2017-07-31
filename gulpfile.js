//导入工具包 require('node_modules里对应模块')
var gulp = require("gulp"), //本地安装gulp所用到的地方
    clean = require("gulp-clean"),
    // less = require("gulp-less"),
    less = require('gulp-less-sourcemap'),
    rename = require("gulp-rename"),
    // webpack = require("webpack-stream"),
    through2 = require("through2"),
    concat = require("gulp-concat"),
    uglify = require('gulp-uglify'),
    babel = require("gulp-babel");

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

gulp.task("less:source", function () {
    gulp.src("src/less/index.less")
    .pipe(less({
        sourceMap: {
            sourceMapRootpath: '../../src/less/' // Optional absolute or relative path to your LESS files// dir relative of dest
        }
    }))
    .pipe(gulp.dest('./dist/css'));
});

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
        'syntaxhighlighter/scripts/shBrushXml.js',
        'syntaxhighlighter/scripts/init.js'])
        .pipe(concat({path: 'syntax.js'}))
        .pipe(gulp.dest('./syntax/'))
        .pipe(rename("syntax.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest('./syntax/'))
})
// function modify(modifier) {
//     return through2.obj(function(file, encoding, done) {
//         var content = modifier(String(file.contents));
//         file.contents = new Buffer(content);
//         this.push(file);
//         done();
//     });
// }
// gulp.task('modify', function() {
//     return gulp.src('app.js')
//         .pipe(modify(version))
//         .pipe(modify(swapStuff))
//         .pipe(gulp.dest('build'));
// });
// function version(data) {
//     return data.replace(/__VERSION__/, pkg.version);
// }
// function swapStuff(data) {
//     return data.replace(/(\w+)\s(\w+)/, '$2, $1');
// }


gulp.task("test", function () {

   console.log("test");
});
//gulp.task("default", ["testLess", "minifycss"]); //定义默认任务

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options])处理完后文件生成路径