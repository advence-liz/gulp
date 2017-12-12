##  O(∩_∩)O

- ng-strict-di
- "use strict"

## tip
- --cwd 参数可以修改工作目录，gulp task中的任务写的都是相对目录也就是相对 CWD ，默认是gulpfile 所在文件（这么看来在根写个gulpfile 共用逻辑与 node_modules）
```
PS d:\lizgit\nodecmd\eslint-uglify> gulp --cwd .\sources copy:sources
[14:34:54] Working directory changed to D:\lizgit\nodecmd\eslint-uglify
\sources
[14:34:56] Using gulpfile D:\lizgit\nodecmd\eslint-uglify\gulpfile.js
[14:34:56] Starting 'copy:sources'...
[14:34:56] Finished 'copy:sources' after 159 ms
PS D:\lizgit\nodecmd\eslint-uglify>
```