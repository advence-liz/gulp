# code snippets
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
```
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
