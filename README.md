#  GULP
----
## Branch
- master branch 作为脚手架
- [sourcemap branch](https://github.com/advence-liz/gulp/tree/sourcesmap)整理几个通过gulp生成sourcemap的方案
## code snippets
- runSequence
```js
const  merge = require('merge-stream'),
    runSequence = require('run-sequence');

gulp.task('build', function () {
    let deferred = Q.defer();
    isProd = false;
    runSequence('clean',
        ['build:cp', 'build:common'],
        'copy',
        function () {
            deferred.resolve();
        });
    return deferred.promise;
});
```
- merge
```js
gulp.task("copy", function () {
    var copyList = require("./copyFileList.json");

    var tasks = copyList.map(function (value) {
        var basePath = "";
        console.info(path.resolve(value.srcPath, '**'));
        console.info(path.resolve(value.destPath, pkg.module));


        if (value.copyBaseFolder) {
            basePath = basePath = path.dirname(value.srcPath);
        } else {
            basePath = value.srcPath;
        }
        return gulp.src([path.resolve(value.srcPath, '**')], { base: basePath })
             .pipe(gulp.dest(path.resolve(value.destPath, pkg.module)))
    });
    return merge(tasks);
});
```

## REF
- [through2](https://github.com/rvagg/through2)
- <a href="https://github.com/bower/spec">bower guid</a>
- <a href="https://github.com/hawx1993/resume-master">简例生成工具</a>
- <a href="http://www.2cto.com/kf/201212/175989.html">强大的web包管理工具bower</a>
- <a href="http://jingyan.baidu.com/article/2a13832885099a074a134f97.html">nodejs+npm+bower+git+bootstrap组件环境配置</a>
- <a href="http://www.cnblogs.com/xljzlw/p/5215529.html">在gulp 中使用bowser-sync </a>
- <a href="http://wowubuntu.com/markdown/">markdown</a>
- <a href="https://github.com/newbreedofgeek/html5-skeletor/blob/master/.gitignore">gitignore</a>
- <a href="http://www.cnblogs.com/xjcjcsy/p/4467751.html">Gulp livereload</a>
- <a href="http://array_huang.coding.me/webpack-book/">webpack多页应用架构专题系列</a>
- <a href="https://www.w3ctech.com/topic/134">gulp开发教程</a>