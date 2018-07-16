//导入工具包 require('node_modules里对应模块')
"use strict";

const gulp = require("gulp"); //本地安装gulp所用到的地方
// through2 是一个对 node 的 transform streams 简单封装
const path = require("path");
var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

// 常量
const PLUGIN_NAME = 'gulp-prefixer';

function prefixStream(prefixText) {
  var stream = through();
  stream.write(prefixText);
  return stream;
}

// 插件级别函数 (处理文件)
function gulpPrefixer(prefixText) {

  if (!prefixText) {
    throw new PluginError(PLUGIN_NAME, 'Missing prefix text!');
  }
  prefixText = new Buffer(prefixText); // 预先分配

  // 创建一个让每个文件通过的 stream 通道
  return through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      // 返回空文件
      cb(null, file);
    }
    if (file.isBuffer()) {
      file.contents = Buffer.concat([prefixText, file.contents]);
    }
    if (file.isStream()) {
        //相当于一个可读流写到可写流后面然后在输出
      file.contents = file.contents.pipe(prefixStream(prefixText));
    }

    cb(null, file);

  });

}

gulp.task("pre",function(){
  gulp.src("src/*")
  .pipe(gulpPrefixer("lizz"))
  .pipe(gulp.dest("dist"))
})




gulp.start("pre");
//gulp.task("default", ["testLess", "minifycss"]); //定义默认任务

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options])处理完后文件生成路径