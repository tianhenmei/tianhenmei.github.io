### 开发环境 ###
node v8.1.2
npm v5.6.0

### 目录介绍 ###
config: 存放webpack启动打包的配置文件
src: 开发目录
    assets: 静态资源路径，主要是图片
    common: 公共代码部分，主要是router、state
    pages: 每个页面对应的vue文件
    css: 所有页面和组件的css文件
    components: 提取的公共组件文件
dist: 代码打包目录
mock: 本地开发模拟数据

### 本地开发命令 ###
1、npm run dev 本地启动项目
2、npm run dist 打包项目
3、npm run dist:online 打包项目，并且将css、js的引用路径替换为
静态资源路径：https://www.lgstatic.com/activity-rsrc/dist/business-2018/

### 本地开发首页访问地址 ###

### 上线打包命令 ###