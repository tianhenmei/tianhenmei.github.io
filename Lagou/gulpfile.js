var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;
var gulp = require('gulp');
var upload = require('gulp-upload');
var del = require('del');
var watch = require('gulp-watch');
var through2 = require('through2');
var mkdirp = require('mkdirp');
var Proxy = require('gulp-connect-proxy');
var connect = require('gulp-connect');
var reload = require('require-nocache')(module);
var scss = require('gulp-sass');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var minifyImg = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var sprite = require('gulp.spritesmith-multi');
var hash = require('hash-file');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var rev = require('gulp-rev');
var revColl = require('gulp-rev-collector');
/*var _url = require( 'url' );
// 压缩css
var cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');*/

var jspmCfg = 'jspm.config.js';
var mockDir = 'mock';
var srcDir = 'src';
var distDir = 'dist';

var mockJs = path.join(mockDir, '/**/*.js');
var srcJs = path.join(srcDir, '/**/*.js');
var srcAll = path.join(srcDir, '/**/*');
//var sourJs = path.join(srcDir, '/**/*[^(.min)].js');
var srcScss = path.join(srcDir, '/**/*.scss');

var distPng = path.join(distDir, '/**/*.png');
var distJpg = path.join(distDir, '/**/*.jpg');
var distJs = path.join(distDir, '/**/*.js');
var distCss = path.join(distDir, '/**/*.css');

/** 获取命令行参数 **/
var type = process.argv[2];
var paramGroups = _.reduce(process.argv.slice(3), function(grps, elem) {
    if(/^--/.test(elem)) {
        grps.push([elem.replace(/^-*/, '')]);
    }else if(/^-/.test(elem)){
        grps.push([elem.replace(/^-*/, '')]);
    } else {
        grps[grps.length - 1].push(elem);
    }

    return grps;
}, []);
var params = {};
params[type] = _.reduce(paramGroups, function(res, grp) {
    res[grp[0]] = _.isUndefined(grp[1]) && true || grp[1];
    return res;
}, {});
/*****************/

gulp.task('dev', ['dev:scss', 'dev:watch', 'dev:reload', 'server']);

/** 初始化, 比如生成文件夹 **/
gulp.task('dev:init', function() {
    mkdirp.sync(srcDir);
    mkdirp.sync(mockDir);

    srcJs = path.join(srcDir, params.dev.dir || '.', '/**/*.js');
    srcScss = path.join(srcDir, params.dev.dir || '.', '/**/*.scss');
    srcAll = path.join(srcDir, params.dev.dir || '.', '/**/*');
    srcDir = path.join(srcDir, params.dev.dir || '');
});
/************************/

/** 转译scss文件 **/
gulp.task('dev:scss', ['dev:init'], function(cb) {
    gulp.src(srcScss)
        .pipe(scss().on('error', gutil.log))
        .pipe(rename({extname: '.css'}))
        .pipe(postcss([autoprefixer()]))
        //.pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(srcDir))
        .on('end', function() {
            cb();
        });
});
/***************/

/** 自动刷新页面 **/
gulp.task('dev:reload', ['dev:init'], function() {
    gulp.src([srcAll, '!' + srcScss])
        .pipe(watch([srcAll, '!' + srcScss]))
        .pipe(connect.reload());

    gulp.src(mockJs)
        .pipe(watch(mockJs))
        .pipe(connect.reload());
});
/***************/

/** 监听文件变化 **/
gulp.task('dev:watch', ['dev:init'], function() {
    function getPaths(absPath) {
        var filePath = absPath.substr(path.join(__dirname, srcDir).length);
        return {
            filePath: filePath,
            srcPath: path.join(srcDir, filePath)
        };
    }

    watch(srcAll)
        .on('change', function(absFilePath) {
            var paths = getPaths(absFilePath);

            console.log(paths.srcPath + ' changed');
        })
        .on('add', function(absFilePath) {
            var paths = getPaths(absFilePath);

            console.log(paths.srcPath + ' added');
        })
        .on('unlink', function(absFilePath) {
            var paths = getPaths(absFilePath);

            console.log(paths.srcPath + ' deleted');
        });

    /*watch(sourJs)
        .on('change',function(absFilePath){
            var paths = getPaths(absFilePath);

            gulp.src(paths.srcPath)
                .pipe(rename(function (path) {
                    if(path.basename.indexOf('.min') == -1){
                        path.basename += ".min";
                    }
                    path.extname = ".js";
                }))
                .pipe(uglify())
                .pipe(gulp.dest(path.dirname(paths.srcPath)));
        })
        .on('add', function(absFilePath) {
            var paths = getPaths(absFilePath);

            gulp.src(paths.srcPath)
                .pipe(rename(function (path) {
                    if(path.basename.indexOf('.min') == -1){
                        path.basename += ".min";
                    }
                    path.extname = ".js"
                }))
                .pipe(gulp.dest(path.dirname(paths.srcPath)));
        });*/
    watch(srcScss)
        .on('change', function(absFilePath) {
            var paths = getPaths(absFilePath);
            
            gulp.src(paths.srcPath)
                .pipe(scss().on('error', gutil.log))
                .pipe(rename({extname: '.css'}))
                .pipe(postcss([autoprefixer()]))
                //.pipe(cleanCSS({compatibility: 'ie8'}))
                .pipe(gulp.dest(path.dirname(paths.srcPath)));
            /*gulp.src(paths.srcPath)
                .pipe(rename(function (path) {
                    if(path.basename.indexOf('.min') == -1){
                        path.basename += ".min";
                    }
                    path.extname = ".css";
                }))
                .pipe(cleanCSS({compatibility: 'ie8'}))
                .pipe(gulp.dest(path.dirname(paths.srcPath)));*/
        })
        .on('add', function(absFilePath) {
            var paths = getPaths(absFilePath);

            gulp.src(paths.srcPath)
                .pipe(scss().on('error', gutil.log))
                .pipe(rename({extname: '.css'}))
                .pipe(postcss([autoprefixer()]))
                .pipe(gulp.dest(path.dirname(paths.srcPath)));
            /*gulp.src(paths.srcPath)
                .pipe(rename(function (path) {
                    if(path.basename.indexOf('.min') == -1){
                        path.basename += ".min";
                    }
                    path.extname = ".css"
                }))
                .pipe(gulp.dest(path.dirname(paths.srcPath)));*/
        })
        .on('unlink', function(absFilePath) {
            var paths = getPaths(absFilePath);

            del(paths.srcPath.replace('.scss', '.css'));
        });
});

/** 启动Ajax请求服务器 **/
gulp.task('server', function() {
    connect.server({
        host: ['0.0.0.0'],
        root: './',
        port: params.dev.port || 8181,
        livereload: {
            port: params.dev.reload || 35730
        },
        middleware:function(connect,opt){
            return [
                // Proxy('/activityapi',  {
                //     target: 'http://activity.lagou.com',
                //     changeOrigin:true
                // }),
                // proxy('/otherServer', {
                //     target: 'http://IP:Port',
                //     changeOrigin:true
                // })
            ]
        },
        // middleware: function() {
        //     var middlewares = [];

        //     middlewares.push(function(req, res, next) {
        //         var url = req.url;
        //         var match = url.match(/\.json$|\.jsonp\?callback=(\w+)/);
        //         //console.log('@@@@@'+url.split('.')[1].split('?')[0]);
        //         if(match) {
        //            /* var oldUrl = req.url.split('/');
        //             url = oldUrl[oldUrl.length - 1].split('?')[0];
        //             *///console.log('&&&&&&&&&&&&&&&&&&   '+url);
        //             url = url.replace(/\//g, '-');
        //             url = url.replace(/^-|-$/, '');
        //             url = url.replace(/\.json$|\.jsonp\?callback=(\w+)$/, '');

        //             var filePath = path.join(mockDir, url + '.js');
        //             fs.exists(filePath, function (exist) {
        //                 if (!exist) {
        //                     fs.writeFileSync(filePath, 'module.exports = {\n};');
        //                 }

        //                 res.setHeader('Content-Type', 'application/json;charset="UTF-8"');
        //                 if(match[1]) {
        //                     res.end(match[1] + '(' + JSON.stringify(reload('./' + filePath)) + ')');
        //                 } else {
        //                     res.end(JSON.stringify(reload('./' + filePath)));
        //                 }
        //             });
        //         } else if(/\.upload/.test(req.url)) {
        //             setTimeout(function() {
        //                 res.end('OK');
        //             }, 1000);
        //         }/*else if(/\.upload/.test(req.url)) {
        //             setTimeout(function() {
        //                 res.end('OK');
        //             }, 1000);
        //         }*/ else {
        //             next();
        //         }
        //     });

        //     return middlewares;
        // }
    });
});
/******************/

/** 生成精灵图 **/
gulp.task('sprite', function() {
    var dir = params.sprite && params.sprite.dir;
    if(dir) {
        dir = path.join(srcDir, dir);
        gulp.src(path.join(dir, '/**/*.png'))
            .pipe(sprite())
            .on('error', function(err) {
                console.log(err);
            })
            .pipe(gulp.dest(dir));
    } else {
        console.log('请指定精灵图所在的文件夹');
    }
});
/***************/

/** 压缩图片 **/
gulp.task('imagemin', function(cb) {
    var targetDir = path.join(srcDir, params.imagemin && params.imagemin.dir || '.');
    var targetPng = path.join(targetDir, '/**/*.png');
    var targetJpg = path.join(targetDir, '/**/*.jpg');

    gulp.src([targetPng, targetJpg])
        .pipe(minifyImg({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(targetDir))
        .on('end', function() {
            cb();
        });
});

/*******************/

gulp.task('dist', ['dist:version']);

/** 生成版本号 **/
gulp.task('dist:version', ['dist:bundle'], function() {1
// gulp.task('dist:version', ['dist:copy'], function() {
    var dir = path.join(distDir, params.dist && params.dist.dir || '.');
    //var targetHtml = path.join(dir, '/**/*.*');
    var targetHtml = path.join(dir, '/**/*.html');
    var vRe = /(['"])([\S]+)\?v=\$version\$[\S]*\1/g;

    gulp.src(targetHtml)
        .pipe(through2.obj(function(file, encoding, done) {
            var dir = path.dirname(file.path.slice(__dirname.length + 1));
            var contents = String(file.contents);
            contents = contents.replace(vRe, function(s0, s1, s2) {
                var p = path.join(dir, s2);
                var v = hash.sync(p);

                return '"https://www.lgstatic.com/activity-rsrc/' + p + '?v=' + v + '"';
            });

            file.contents = new Buffer(contents);
            this.push(file);
            done();
        }))
        .pipe(gulp.dest(dir));
});
/*****************/

/** 针对ES6模块进行打包操作 **/
gulp.task('dist:bundle', ['dist:url'], function(cb) {
    var dir = path.join(distDir, params.dist && params.dist.dir || '.');
    var targetHtml = path.join(dir, '/**/*.html');

    gulp.src(targetHtml)
        .pipe(through2.obj(function(file, encoding, done) {
            var self = this;
            var contents = String(file.contents);

            var importRe = /System.import\s*\(\s*'\s*(\S*)\s*'\s*\)/;
            var entryJs = contents.match(importRe);
            if(!entryJs) {
                self.push(file);
                done();
                return;
            }

            entryJs = entryJs[1];
            var pathJs = /\.js$/.test(entryJs) ? entryJs : (entryJs + '.js');
            entryJs = path.join(path.dirname(file.path.slice(__dirname.length + 1)), pathJs);

            var bundleJs = entryJs.replace('.js', '.bundle.js');
            var cmd = 'jspm bundle ' + entryJs + ' ' + bundleJs + ' --minify';

            exec(cmd, function(err) {
                if(err) {
                    console.log(err);

                    self.push(file);
                    done();
                    return;
                }

                console.log(cmd);

                var headTail = /<\/\s*head\s*>/;
                var pathCssBundle = pathJs.replace('.js', '.bundle.css');
                var pathJsBundle = pathJs.replace('.js', '.bundle.js');

                contents = contents.replace(headTail, function(s0) {
                    var cssLink = '<link rel="stylesheet" href="' + pathCssBundle + '"/>';
                    var jsScript = '<script src="' + pathJsBundle + '"></script>';
                    return cssLink + '\n' + jsScript + '\n' + s0;
                });

                file.contents = new Buffer(contents);
                self.push(file);
                done();
            });
        }))
        .pipe(through2.obj(function(file, encoding, done) {
            var dir = path.dirname(file.path.slice(__dirname + 1));
            var contents = String(file.contents);

            var importRe = /System.import\s*\(\s*'\s*(\S*)\s*'\s*\)/;
            if(!contents.match(importRe)) {
                this.push(file);
                done();
                return;
            }

            contents = contents.replace(importRe, function(s0, s1) {
                s1 = /\.js$/.test(s1) ? s1 : (s1 + '.js');
                var p = path.join(dir, s1);
                var v = hash.sync(p);
                return "System.import('" + s1 + '?v=' + v + "')";
            });

            contents = contents.replace(/<link rel="stylesheet" href="([^"]+\.bundle\.css)"\/>/, function(s0, s1) {
                var p = path.join(dir, s1);
                if(fs.existsSync(p)) {
                    var v = hash.sync(p);
                    return '<link rel="stylesheet" href="' + s1 + '?v=' + v + '"/>';
                } else {
                    return s0;
                }
            });

            contents = contents.replace(/<script src="([^"]+\.bundle\.js)"><\/script>/, function(s0, s1) {
                var p = path.join(dir, s1);
                var v = hash.sync(p);
                return '<script src="' + s1 + '?v=' + v + '"></script>';
            });

            contents = contents.replace(/<script\s*src=\s*(['"])\s*([./]+jspm\.config\.js)\s*\1\s*>\s*<\/\s*script\s*>/, function(s0, s1, s2) {
                var p = path.join(dir, s2);
                var v = hash.sync(p);
                return '<script src="' + s2 + '?v=' + v + '"></script>';
            });

            file.contents = new Buffer(contents);
            this.push(file);
            done();
        }))
        .pipe(gulp.dest(dir))
        .on('end', function() {
            cb();
        });
});
/*******************/

/** 修改 jspm.config.js中的baseURL **/
gulp.task('dist:url', ['dist:copy'], function(cb) {
    gulp.src(jspmCfg)
        .pipe(through2.obj(function(file, encoding, done) {
            var contents = String(file.contents);
            contents = contents.replace(/baseURL: "[^"]+"/, function() {
                return 'baseURL: "' + path.join('/', params.dist.url || '') + '"';
            });
            
            file.contents = new Buffer(contents);
            this.push(file);
            done();
        }))
        .pipe(gulp.dest('.'))
        .on('end', function() {
            cb();
        });
});
/**********************************/

/** 拷贝源代码到编译目录 **/
gulp.task('dist:copy', function(cb) {
    var targetDir = path.join(srcDir, params.dist && params.dist.dir || '.');
    var targetAll = path.join(targetDir, '/**/*.*');
    var targetScss = path.join(targetDir, '/**/*.scss');

    var targetDistDir = path.join(distDir, params.dist && params.dist.dir || '.');
    gulp.src([targetAll])
        .pipe(through2.obj(function(file, encoding, done) {
            var name = file.path.split('.'),
                extname = name[name.length - 1];
            if(extname != 'scss'){
                this.push(file);
            }
            done();
        }))
        //.pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(targetDistDir))
        .on('end', function() {
            cb();
        });
});
/*********************/

/** 在编译之前先将 dist 目录删掉 **/
gulp.task('remove', function() {
    del(path.join(distDir, params.remove.dir || '.'));
});
/*****************************/

/** 上传编译好的文件到999测试服务器 */
gulp.task('upload', function(cb) {
    var dir = path.join(distDir, params.upload && params.upload.dir || '.');
    gulp.src(dir + '/**/*.*')
        .pipe(through2.obj(function(file, encoding, done) {
            var filePath = path.relative(__dirname, file.path)
            var toPath = path.join('/data/static/activity/', filePath)
            var cmd = `curl -F "to=${toPath}" -F "file=@${filePath}" http://receiver1.lagou.com/upload`,
                extname = path.extname(file.path)
            if(extname == '.psd'){
                console.log('NoSending: ' + filePath);
                done();
            }else{
                exec(cmd, function(err) {
                    if(err) {
                        console.log(err.toString());
                    } else {
                        console.log('Sending: ' + filePath);
                    }

                    done();
                });
            }
        }))
        .on('end', function() {
            cb()
        });
});
/*****************************/
