#拉勾活动前端组前端工程自动化工具#

注意: 以下叙述中会涉及到本文档所在的目录, 为了方便, 我称之为"根目录".

##安装步骤##

1.  安装 node
2.  进入根目录, 运行 npm install, 它会安装开发及编译环境, 比如 gulp 组件
3.  运行 npm run lib install, 它会安装前端库, 比如 ES6 的运行环境

**注意：**

- 问题：
  出现类似这样的错误：“[19:33:16] Error: ENOENT: no such file or directory, scandir '/home/vagrant/sites/dev.friendsforever/server/node_modules/node-sass/vendor”
  （具体报错信息见http://stackoverflow.com/questions/39173020/laravel-elixir-sass-error）

      解决方法：
      尝试重新安装sass：npm rebuild node-sass

##命令列表##

1.  npm run dev \[-- --port 8181 --reload 35730\]
    例：只监听 dreamMaket 下的 H5 文件夹（加上--dir 可加快启动速度，也可防止使用者因为 sass 版本差异编译不一样而不断的修改）
    npm run dev -- --port 8888 --dir dreamMarket/h5

        安装步骤都执行完后, 就可以运行该命令, 该命令执行后会做以下几件事情:
        1)  生成一些必需的目录, 如果这些目录本来就存在, 就使用存在的这些目录.
        2)  启动本地服务器(port可以指定端口, 默认时8181), 可以用来模拟数据. 每当有数据请求产生, 服务器就会拦截这些请求,
        	并在mock目录中根据url生成一个js文件, 用户在该文件中可以填写需要的数据, 当下一次请求发生时就会将填写的数据返回.
        3)  将scss文件编译成css文件
        4)  监听文件, 一旦文件发生变化就自动刷新浏览器(reload指定监听端口, 默认时35729), 显示最新文件. 如果时scss文件发生变化, 则会先将其编译为css文件.

2.  npm run sprite -- --dir promotion/preheat/pc/sprite

        将指定目录下的png图片整合为精灵图, 并在指定目录下生成必要的css文件. xxx代表用户指定的目录, 请使用相对根目录的路径.

3.  npm run imagemin -- --dir promotion/preheat/h5
    会将指定文件夹下的 png 和 jpg 图片压缩并按原名称保存
4.  npm run lib install xxx

        安装前端库文件, 比如jquery可以这样安装: npm run lib install jquery.
        默认已经安装了一些常用的库, 比如jquery, zepto, art-template, swiper, hammerjs

5.  npm run lib remove demo

        删除安装了的前端库

6.  npm run dist \[-- --dir demo --url activity\]
    （eg. npm run dist -- --dir promotion2017/citySpecial/pc。
    以项目 src 目录为根目录，文件会生成到和 src 同级的 dist 文件夹中）

        	编译指定目录(通过dir参数指定,默认时根目录)下的代码. 编译包括以下几部分:
        	1)  生成版本号. 如果在link, script或img标签的路径中有"?v=$version$", 我就会生成路径对应文件的hash值, 并它来替换$version$.
        	2)  如果是在ES6的运行环境中开发, 则会利用jspm工具将js和css文件打包, 并在html文件生成link和script标签指向打包文件.
        	3)  修改jspm.config.js中的baseURL配置参数,通过url参数指定(和nginx配置有关).


7.  npm run upload \[-- --dir demo\]
    （eg. npm run upload -- --dir promotion2017/citySpecial/pc。以项目 src 目录为根目录）

        	上传指定目录下的文件到测试服务器，只上传dist目录下的相应目录


7.npm run remove -- --dir demo
删除指定 dist 目录中指定文件夹,然后再运行 sudo /etc/init.d/activity deploy 即可将指定项目下线 ###注意事项### 1. npm run dev 执行之后就可以进行开发. 2. 开发过程中可以另外打开一个命令行来运行 npm run lib, npm run sprite, 以及 npm run imagemin 3. npm run dist 是在开发完成之后执行的, 不要在 npm run dev 运行的时候执行这个命令. 4. node 版本使用 6 ##部署步骤##

    0   配置host: 123.59.64.165 receiver1.lagou.com
    1   本地编译项目 npm run dist -- --dir xxx（详见命令列表）
    2   从本地上传代码 npm run upload -- --dir xxx (尽量指定一个文件夹来上传，不然会上传dist下所有的文件，详见命令列表)
    3   通过跳板机连接 lg.cdn.nginx.bjc.999
    4   切换目录 cd /data/static/activity/，可以检查一下是否上传成功
    5   发布上线 sudo /etc/init.d/activity deploy
    6   地址：https://activity.lagou.com/activity/dist/2018-vote/m_index.html


接入oss后的上线流程：
      0. 打tag
      1. 登录oss.lagou.com
      2. 选择plat.activity.fed项目及相应的tag，走发布流程
      3. 999 hosts配置： 123.59.64.165 activity.lagou.com 123.59.64.165 www.lgstatic.com
      4. 地址：https://activity.lagou.com/activity/dist/2018-vote/m_index.html
      线上执行的脚本是gulpfile.js