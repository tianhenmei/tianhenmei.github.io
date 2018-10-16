const path = require('path');
const express = require('express');
const webpack = require('webpack');
// 分离CSS单独成文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const mock = require('../mock/index.js');
const util = require('./util.js');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const IP = util.getLocalIps()[0] || '127.0.0.1';
const hash = IS_PRODUCTION ? 'chunkhash' : 'hash'; 


module.exports = {
    // Chosen mode tells webpack to use its built-in optimizations accordingly.
    mode: IS_PRODUCTION ? "production" : "development",  // 'production' | 'development' | 'none'
    // mode: "production", // enable many optimizations for production builds
    // mode: "development", // enabled useful tools for development
    // mode: "none", // no defaults
    devtool: "cheap-source-map",
    entry:{ // string | object | array
        index:'./src/index.js',
        lib:['vue','vuex','vue-router']
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'js/[name].['+hash+':8].js',
        publicPath:''  // url 相对于html
    },
    resolve: {
        modules: ['node_modules'],
        alias: {
            'components': path.resolve(__dirname,'../src/components'),
            'pages': path.resolve(__dirname,'../src/pages'),
            'common': path.resolve(__dirname,'../src/common'),
            'assets': path.resolve(__dirname,'../src/assets'),
            'vue': 'vue/dist/vue.js'
        }
    },
    module:{
        rules:[{
            test:/\.vue$/,
            exclude:/node_modules/,
            loader:'vue-loader'
        },{
            test:/\.js$/,
            exclude:/node_modules/,
            loader:'babel-loader',
            options:{
                presets:['env','stage-0'],
                plugins: ['syntax-dynamic-import','transform-object-rest-spread',"transform-runtime"]
            }
        },{
            test: /\.woff|\.eot|\.svg|\.ttf|\.otf|\.png|\.jpg|\.gif|\.jpeg|\.mp3|\.mp4/,
            loader: 'url-loader',
            options: {
                name: 'images/[folder]/[name].[ext]',
                limit: '1024'
            }
        },{
            test:/\.scss$/,
            exclude:/node_modules/,
            use:[
                {
                    loader:MiniCssExtractPlugin.loader,
                    options:{
                        publicPath: '../'
                    }
                },
                'css-loader',
                {
                    loader:"postcss-loader",
                    options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                        plugins: (loader) => [
                            require('autoprefixer')(), //CSS浏览器兼容
                        ]
                    }
                },
                'sass-loader'
            ]
        },{ 
            test: /\.css$/,
            use:[
                {
                    loader:MiniCssExtractPlugin.loader,
                    options:{
                        publicPath: '../'
                    }
                },
                'css-loader',
                {
                    loader:"postcss-loader",
                    options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                        plugins: (loader) => [
                            require('autoprefixer')(), //CSS浏览器兼容
                        ]
                    }
                }
            ]
        }]
    },
    plugins:[
        new webpack.DefinePlugin({
            '__isProd__':  IS_PRODUCTION
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].["+hash+":8].css",
            chunkFilename:"css/[name].["+hash+":8].css"
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, `../src/index.html`),
            inject: true
        }),
        new VueLoaderPlugin()
    ],
    optimization:{
        splitChunks:{
            chunks: "async", // 必须三选一： "initial"（只提取初始入口模块的公共代码） | "all"（同时提取前两者的代码） | "async" (默认，只会提取异步加载模块的公共模块)
            minSize: 30000,//0, // 最小尺寸，默认0  模块大于30K会被抽离到公共模块
            minChunks: 1, // 最小 chunk ，默认1  // 分割前必须共享模块的最小块数。   模块出现1次就会被抽离到公共模块
            maxAsyncRequests: 5, // 最大异步请求数， 默认5   异步模块，一次最多只能被加载5个
            maxInitialRequests : 3, // 最大初始化请求数，默认3   入口模块，最多只能加载3个
            // automaticNameDelimiter: '~',  e.g. vendors~main.js
            name: true, // 名称，此选项可接收 function
            cacheGroups:{ // 这里开始设置缓存的 chunks
                // priority: 0, // 缓存组优先级
                // lib: { // key 为entry中定义的 入口名称
                //     chunks: "initial", // 必须三选一： "initial" | "all" | "async"(默认就是异步) 
                //     name: "lib.min", // 要缓存的 分隔出来的 chunk 名称 
                //     enforce: true,
                //     reuseExistingChunk: true // 可设置是否重用该chunk（查看源码没有发现默认值）
                // },
                // //打包第三方类库
                // vendors:{
                //     test: /[\\/]node_modules[\\/]/,
                //     priority:-10
                // }
            }
        },
        minimize: IS_PRODUCTION
    },
    stats:{
        modules:false
    },
    devServer: {
        // proxy: { 
        //     '/api/*': {
        //         target: `http://${IP}:8090`,
        //         secure: false
        //     }
        // },
        before: function(app) {
            app.use('/static', express.static('public'));  // 指定挂载路径（虚拟）
            if(!IS_PRODUCTION){
                app.use('/api/mock', mock);
            }
        },
        after: function(app){
            // app.use('/', express.static('dist'));
        },
        staticOptions:{},
        contentBase: [
            path.join(__dirname, '../'),
            // path.join(__dirname, '../public/')
        ], // boolean | string | array, static file location
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: true, // only errors & warns on hot reload
        open: true,
        openPage: '',
        stats:{
            modules:false,
            entrypoints:false
        },
        host: IP,
        port: 9999
    }
}