//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    clean=require('gulp-clean'),
    less = require('gulp-less');
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel');
//定义一个testLess任务（自定义任务名称）
gulp.task('testLess', function () {
  return  gulp.src('src/less/index.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('dist/css')) //将会在src/css下生成index.css
        .pipe(rename('index.min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'))
        
});
gulp.task('clean', function () {
    return gulp.src('dist/', { read: false }).pipe(clean());
});

  gulp.task('minifycss', function () {
    gulp.src('src/css/*.css') //该任务针对的文件
        .pipe(minifycss())
        .pipe(gulp.dest('dist/min'));
});
//  gulp.watch('src/less/*.less', function(event) {
 // console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
//});
  function cb(){
    console.log("cbcbcbcbcbcbc");
  }
gulp.task("testcb",function(cb){
    console.log("eeeeeee");
    cb();
})
gulp.task("testbabel",function(){
    gulp.src('src/js/babel.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'))
})
gulp.task('default',['testLess','minifycss']); //定义默认任务

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径