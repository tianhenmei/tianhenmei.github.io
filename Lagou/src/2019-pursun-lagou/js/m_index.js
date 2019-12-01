// (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
    function ANGLE(position, global) {
        var dx = global.x - position.x,
            dy = global.y - position.y,
            an = Math.acos(dy / Math.sqrt(dx * dx + dy * dy))
        if(dx >= 0 && dy >= 0){
            an = 2 * Math.PI - an
        }else if(dx >= 0 && dy <= 0){
            an = 2 * Math.PI - an
        }
        return an
    }
    function SCALE(position,global,data,scale){
        var dx = global.x - position.x,
            dy = global.y - position.y,
            absA = Math.abs(dx),
            absB = Math.abs(dy),
            mins = 0.4,//100 / data.w,
            s = scale
        if(dy < 0){ // 缩小
            s = s * (1 + absB / data.w)
        }else if(dy > 0){  // 放大
            s = s * (1 - absB / data.w)
        }
        return s < mins ? mins : s
    }
    // 防止屏幕移动
    document.addEventListener('touchmove',function(e){
        e.preventDefault();
    }, {
        passive: false
    });

    var host = 'https://www.lgstatic.com/plat-activity-fed/2019-pursun/'
    var imgArr = [
        host + 'images/icon.png',
        host + 'images/icon2.png',
        host + 'images/p2-bg1.png',
        host + 'images/p2-bg2.png',
        host + 'images/p2-bg3.png',
        host + 'images/p2-person.png',
        host + 'images/p2-gou.png',
        host + 'images/p2-man.png',
        host + 'images/p3-rb.png',
        host + 'images/p3-bg.png',
        host + 'images/p3-bg2.png',
        host + 'images/p3-xgou.png',
        host + 'images/p3-sun-01.png',
        host + 'images/p3-sun-02.png',
        host + 'images/p3-sun-03.png',
        host + 'images/p3-sun-04.png',
        host + 'images/p3-sun-05.png',
        host + 'images/p3-sun-06.png',
        host + 'images/p3-sun-07.png',
        host + 'images/p3-sun-08.png',
        host + 'images/p3-sun-09.png',
        host + 'images/p3-sun-10.png',
        host + 'images/p3-sun-11.png',
        host + 'images/p3-sun-12.png',
        host + 'images/p3-sun-13.png',
        host + 'images/p3-sun-14.png',
        host + 'images/p4-rm-01.png',
        host + 'images/p4-rm-02.png',
        host + 'images/p4-rm-03.png',
        host + 'images/p4-pbg.png',
        host + 'images/p4-pcon.png',
        host + 'images/p4-line1.png',
        host + 'images/p4-line2.png',
        host + 'images/p4-line3.png',
        host + 'images/p4-line3.png',
        host + 'images/p5-spread.png',
        host + 'images/p5-man.png',
        host + 'images/p5-word1.png',
        host + 'images/p5-word2.png',
        host + 'images/p6-bg.png',
        host + 'images/p6-content-bottom.png',
        host + 'images/p6-content-top.png',
        host + 'images/p6-content.png',
        host + 'images/p6-tips.png',
        host + 'images/save-bg.png'
    ]
    var spriteSheet = {
        icon: {
            w1: {
                position: { x: 0, y: 0, w: 360, h: 44 },
                options: { x: 170, y: 133 }
            },
            w2: {
                position: { x: 0, y: 60, w: 360, h: 44 },
                options: { x: 170, y: 133 + 60 }
            },
            w3: {
                position: { x: 0, y: 120, w: 360, h: 44 },
                options: { x: 170, y: 133 + 60 * 2 }
            },
            w4: {
                position: { x: 0, y: 180, w: 360, h: 44 },
                options: { x: 170, y: 133 + 60 * 3 }
            },
            w5: {
                position: { x: 0, y: 240, w: 360, h: 44 },
                options: { x: 170, y: 133 + 60 * 4 }
            },
            b1: {
                position: { x: 410, y: 0, w: 308, h: 450 },
                options: { x: 168, y: 429 }
            },
            b2: {
                position: { x: 0, y: 310, w: 314, h: 499 },
                options: { x: 215, y: 464 }
            },
            s1: {
                position: { x: 760, y: 0, w: 50, h: 50 },
                options: { x: 215, y: 1261 },
                move: {
                    x: { min: 0, max: 160, gap: 160, speed: 160 / 472 },
                    y: { min: 1, max: 472, gap: 472, speed: 1 }
                },
                scale: {
                    x: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 },
                    y: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 }
                }
            },
            s2: {
                position: { x: 821, y: 0, w: 30, h: 30 },
                options: { x: 206, y: 1254 },
                move: {
                    x: { min: 0, max: 164, gap: 164, speed: 164 / 472 },
                    y: { min: 1, max: 472, gap: 472 + 200, speed: 1 }
                },
                scale: {
                    x: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 },
                    y: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 }
                }
            },
            s3: {
                position: { x: 860, y: 0, w: 21, h: 21 },
                options: { x: 450, y: 1362 },
                move: {
                    x: { min: 0, max: 80, gap: -80, speed: 0.2 },
                    y: { min: 1, max: 472, gap: 472, speed: 1 }
                },
                scale: {
                    x: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 },
                    y: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 }
                }
            },
            s4: {
                position: { x: 900, y: 0, w: 21, h: 25 },
                options: { x: 276, y: 1329 },
                move: {
                    x: { min: 0, max: 94 + 10, gap: 94, speed: 0.22 },
                    y: { min: 1, max: 472, gap: 472, speed: 1 }
                },
                scale: {
                    x: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 },
                    y: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 }
                }
            },
            s5: {
                position: { x: 940, y: 0, w: 21, h: 21 },
                options: { x: 656, y: 1166 },
                move: {
                    x: { min: 0, max: 282, gap: -282, speed: 282 / 472 },
                    y: { min: 1, max: 472, gap: 472, speed: 1 }
                },
                scale: {
                    x: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 },
                    y: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 }
                }
            },
            s6: {
                position: { x: 980, y: 0, w: 29, h: 31 },
                options: { x: 487, y: 1238 },
                move: {
                    x: { min: 0, max: 114, gap: -114, speed: 114 / 472 },
                    y: { min: 1, max: 472, gap: 472, speed: 1 }
                },
                scale: {
                    x: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 },
                    y: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 }
                }
            },
            s7: {
                position: { x: 760, y: 55, w: 50, h: 50 },
                options: { x: 531, y: 1181 },
                move: {
                    x: { min: 0, max: 160, gap: -160, speed: 160 / 472 },
                    y: { min: 1, max: 472, gap: 472, speed: 1 }
                },
                scale: {
                    x: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 },
                    y: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 }
                }
            },
            s8: {
                position: { x: 821, y: 55, w: 30, h: 30 },
                options: { x: 559, y: 1171 },
                move: {
                    x: { min: 0, max: 187, gap: -187, speed: 187 / 472 },
                    y: { min: 1, max: 472, gap: 472, speed: 1 }
                },
                scale: {
                    x: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 },
                    y: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 }
                }
            },
            s9: {
                position: { x: 860, y: 55, w: 26, h: 24 },
                options: { x: 263, y: 1202 },
                move: {
                    x: { min: 0, max: 108, gap: 108, speed: 108 / 472 },
                    y: { min: 1, max: 472, gap: 472, speed: 1 }
                },
                scale: {
                    x: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 },
                    y: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 }
                }
            },
            s10: {
                position: { x: 900, y: 55, w: 24, h: 24 },
                options: { x: 143, y: 1192 },
                move: {
                    x: { min: 0, max: 230, gap: 230, speed: 230 / 472 },
                    y: { min: 1, max: 472, gap: 472, speed: 1 }
                },
                scale: {
                    x: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 },
                    y: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 }
                }
            },
            s11: {
                position: { x: 940, y: 55, w: 40, h: 42 },
                options: { x: 136, y: 1104 },
                move: {
                    x: { min: 0, max: 236, gap: 236, speed: 236 / 472 },
                    y: { min: 1, max: 472, gap: 472, speed: 1 }
                },
                scale: {
                    x: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 },
                    y: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 }
                }
            },
            s12: {
                position: { x: 760, y: 110, w: 48, h: 46 },
                options: { x: 225, y: 1111 },
                move: {
                    x: { min: 0, max: 146, gap: 146, speed: 146 / 472 },
                    y: { min: 1, max: 472, gap: 472, speed: 1 }
                },
                scale: {
                    x: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 },
                    y: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 }
                }
            },
            s13: {
                position: { x: 760, y: 165, w: 60, h: 60 },
                options: { x: 91, y: 1251 },
                move: {
                    x: { min: 0, max: 280, gap: 280, speed: 280 / 472 },
                    y: { min: 1, max: 472, gap: 472, speed: 1 }
                },
                scale: {
                    x: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 },
                    y: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 }
                }
            },
            s14: {
                position: { x: 760, y: 230, w: 60, h: 60 },
                options: { x: 489, y: 1383 },
                move: {
                    x: { min: 0, max: 119, gap: -119, speed: 119 / 472 },
                    y: { min: 1, max: 472, gap: 472, speed: 1 }
                },
                scale: {
                    x: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 },
                    y: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 }
                }
            },
            s15: {
                position: { x: 760, y: 300, w: 45, h: 45 },
                options: { x: 518, y: 1265 },
                move: {
                    x: { min: 0, max: 148, gap: -148, speed: 148 / 472 },
                    y: { min: 1, max: 472, gap: 472, speed: 1 }
                },
                scale: {
                    x: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 },
                    y: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 }
                }
            },
            s16: {
                position: { x: 821, y: 110, w: 32, h: 32 },
                options: { x: 462, y: 1094 },
                move: {
                    x: { min: 0, max: 93, gap: -93, speed: 93 / 472 },
                    y: { min: 1, max: 472, gap: 472, speed: 1 }
                },
                scale: {
                    x: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 },
                    y: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 }
                }
            },
            s17: {
                position: { x: 860, y: 110, w: 34, h: 32 },
                options: { x: 599, y: 1263 },
                move: {
                    x: { min: 0, max: 227, gap: -227, speed: 227 / 472 },
                    y: { min: 1, max: 472, gap: 472, speed: 1 }
                },
                scale: {
                    x: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 },
                    y: { min: 1, max: 472, gap: -1, speed: 1, start: 0, end: 1 }
                }
            },
            r1: {
                position: { x: 410, y: 480, w: 108, h: 479, t: 25, m2: 20 },
                options: { x: 317, y: 929 },
                move: {
                    y: { min: 0, max: 472, gap: 0, speed: 1 }
                },
                // scale: {
                //     y: { min: 0, max: 472, gap: 0, speed: 1, start: 0, end: 1 }
                // },
                anchor: { x: 0.5, y: 1}
            },
            star1: {
                position: { x: 900, y: 110, w: 20, h: 20 },
                options: { x: 43, y: 189 } // ,
                // rotation: {
                //     min: 472, max: 1109, gap: 0, speed: 1, start: 0, end: 1
                // }
            },
            star2: {
                position: { x: 900, y: 110, w: 20, h: 20 },
                options: { x: 217, y: 154 },
            },
            star3: {
                position: { x: 900, y: 110, w: 20, h: 20 },
                options: { x: 265, y: 203 },
            },
            star4: {
                position: { x: 900, y: 110, w: 20, h: 20 },
                options: { x: 300, y: 93 },
            },
            star5: {
                position: { x: 940, y: 110, w: 50, h: 50 },
                options: { x: 241, y: 119 },
            },
            p2w1: {
                position: { x: 550, y: 480, w: 138, h: 78 },
                options: { x: 77, y: 460 }
            },
            p2w2: {
                position: { x: 550, y: 580, w: 292, h: 81 },
                options: { x: 394, y: 91 }
            },
            p2w3: {
                position: { x: 550, y: 680, w: 306, h: 44 },
                options: { x: 207, y: 706 }
            },
            ya: {
                position: { x: 821, y: 165, w: 88, h: 120 },
                options: { x: 32, y: 706 }
            },
            g1: {
                position: { x: 821, y: 440, w: 87, h: 115 },
                options: { x: 49, y: 411 }
            },
            g1w: {
                position: { x: 821, y: 320, w: 165, h: 98 },
                options: { x: 102, y: 473 }
            },
            g2: {
                position: { x: 821, y: 440, w: 87, h: 115 },
                options: { x: 49, y: 628 }
            },
            g2w: {
                position: { x: 550, y: 780, w: 254, h: 100 },
                options: { x: 102, y: 679 }
            },
            g3: {
                position: { x: 821, y: 440, w: 87, h: 115 },
                options: { x: 49, y: 932 }
            },
            g3w: {
                position: { x: 550, y: 900, w: 250, h: 100 },
                options: { x: 102, y: 991 }
            },
            m1: {
                position: { x: 930, y: 440, w: 86, h: 112 },
                options: { x: 612, y: 468 }
            },
            m2: {
                position: { x: 930, y: 440, w: 86, h: 112 },
                options: { x: 612, y: 733 }
            },
            m3: {
                position: { x: 930, y: 440, w: 86, h: 112 },
                options: { x: 612, y: 1044 }
            },
            m3w: {
                position: { x: 0, y: 840, w: 365, h: 160 },
                options: { x: 299, y: 1105 }
            }
        },
        icon2: {
            m1w: {
                position: { x: 0, y: 0, w: 274, h: 162 },
                options: { x: 389, y: 522 }
            },
            m2w: {
                position: { x: 0, y: 175, w: 366, h: 178 },
                options: { x: 297, y: 790 }
            },
            ball: {
                position: { x: 400, y: 0, w: 345, h: 345 },
                options: { x: 346, y: 1225 }
            },
            run: {
                position: { x: 780, y: 0, w: 244, h: 310 },
                options: { x: 229, y: 1679 }
            },
            le: {
                position: { x: 0, y: 380, w: 36, h: 36 },
                options: { x: 127 - 50 + 161, y: 2124 + 95 }
            },
            re: {
                position: { x: 50, y: 380, w: 36, h: 36 },
                options: { x: 127 - 50 + 202, y: 2124 + 92 }
            },
            tq1: {
                position: { x: 0, y: 430, w: 296, h: 44 },
                options: { x: 419, y: 2217 }
            },
            tq2: {
                position: { x: 0, y: 489, w: 296, h: 44 },
                options: { x: 419, y: 2217 + 59 }
            },
            q4w1: {
                position: { x: 0, y: 570, w: 430, h: 44 },
                options: { x: 265, y: 63 }
            },
            q4w2: {
                position: { x: 0, y: 570 + 60, w: 430, h: 44 },
                options: { x: 265, y: 123 }
            },
            q4w3: {
                position: { x: 0, y: 570 + 120, w: 430, h: 44 },
                options: { x: 265, y: 183 }
            },
            stage1: {
                position: { x: 0, y: 760, w: 206, h: 107 },
                options: { x: 463, y: 377 }
            },
            stage2: {
                position: { x: 0, y: 890, w: 206, h: 107 },
                options: { x: 58, y: 654 }
            },
            stage3: {
                position: { x: 230, y: 760, w: 206, h: 107 },
                options: { x: 476, y: 903 }
            },
            title1: {
                position: { x: 540, y: 460, w: 278, h: 64 },
                options: { x: 425, y: 500 }
            },
            title2: {
                position: { x: 540, y: 550, w: 278, h: 64 },
                options: { x: 22, y: 774 }
            },
            title3: {
                position: { x: 540, y: 655, w: 278, h: 64 },
                options: { x: 440, y: 1026 }
            },
            p4tips: {
                position: { x: 540, y: 380, w: 278, h: 64 },
                options: { x: 247, y: 1219 }
            },
            btn: {
                position: { x: 840, y: 760, w: 146, h: 146 },
                options: { x: 302, y: 997 }
            },
            hand: {
                position: { x: 400, y: 380, w: 102, h: 126 },
                options: { x: 373, y: 1080 }
            },
            light1: {
                position: { x: 540, y: 760, w: 258, h: 264 },
                options: { x: 501, y: 134 }
            },
            light2: {
                position: { x: 540, y: 760, w: 258, h: 264 },
                options: { x: -16, y: 418 }
            },
            light3: {
                position: { x: 540, y: 760, w: 258, h: 264 },
                options: { x: 512, y: 659 }
            }
        }
    }
    var scrollDirection = 'top'
    var move = 0
    var contentLength = 6037
    var nickname = ''
    var canvas = null
    var ctx = null
    var canvasImgs = [
        host + 'images/save-bg.png',
        host + 'images/save-ercode.png'
    ]
    var loadedImgs = []
    var canvasUrl = ''
    var musicOn = true
    // 以可视区域大小创建渲染器
    // var renderer = PIXI.autoDetectRenderer(GC.w, GC.h)
    var app = new PIXI.Application(750, GC.h / GC.w * 750, {
        backgroundColor: 0x0b1422 // ,
        // resolution: 2
    });
    // 将舞台添加到，页面中
    document.getElementById('main').appendChild(app.view)
    // app.stage.displayList = new PIXI.DisplayList();
    // var index1 = new PIXI.DisplayGroup(1, false);
    // 使用加载器预加载图片。& 监听加载成功事件 ‘progress’ 多次触发 ，target.progress 返回加载成功百分比
    // 加载完成 触发load 里面的 setup函数
    var spriteBox = {}
    // 预加载
    var loader = new PIXI.loaders.Loader();
    loader.add(imgArr)
        .add("support", host + "images/support-music.mp3")
        .add("open", host + "images/open-music.mp3")
        .add("question", host + "images/question-music.mp3")
        .onProgress.add(function(e){
            var loading__num = document.getElementById('loading__num')
            var progress = document.getElementById('progress')
            progress.style.width = Math.round(e.progress) + '%'
            loading__num.innerText = Math.round(e.progress) + '%'
        })
    loader.load(function(loader) {
        var main = document.getElementById('main')
        main.className = main.className.replace(/( hide)/g, '')
        loader.resources.question.loop = true
        loader.resources.support.loop = true
        loader.resources.question.sound.flag = true
        loader.resources.support.sound.flag = true
        loader.resources.open.sound.flag = true
        if (isWeiXin()) {
            getUserWeixinData()   
        }
        initCanvas()
        setup()
    })
    // 创建元素容器，类似 ‘组’概练，Container可以嵌套Container
    var container = new PIXI.Container()
    container.interactive = true
    app.stage.addChild(container)

    document.getElementById('main').addEventListener('touchstart', function(e) {
        // TweenMax.fromTo(loadContainer, 0.4, {alpha:1}, {alpha:0, onComplete:function(){
        //     loadContainer.visible = false
        // }})
    })

    function setup(){
        spriteBox.icon = loader.resources[host + 'images/icon.png'].texture
        spriteBox.icon2 = loader.resources[host + 'images/icon2.png'].texture
        // 序幕
        drawStart()
        // 第一部分
        // drawPart1()
        // 第二部分
        drawPart2()
        // 第三部分：对话框
        drawPart3()

        // 第四部分：跑
        drawPart4()
        animate()
    }
    function getImageFromIcon(container, texture, from, icon) {
        return function(name) {
            var arr = Object.prototype.toString.call(name) === '[object Array]' ? name : [name]
            var i = 0
            for ( i = 0; i < arr.length; i++) {
                spriteBox[arr[i]] = createTexture(container, new PIXI.Texture(texture.baseTexture), from, icon[arr[i]])
            }
        }
    }

    // 创建sprite对象
    function createTexture(container, texture, from, obj){
        var position = obj.position
        var options = obj.options
        var rectangle = new PIXI.Rectangle(position.x, position.y, position.w, position.h)
        var sprite = null
        var i = ''
        texture.frame = rectangle
        sprite = new PIXI.Sprite(texture)
        if (options) {
            for ( i in options) {
                sprite[i] = options[i]
            }
        }
        container.addChild(sprite)
        return sprite
    }
    function createSprite(container, img, options) {
        var sprite = new PIXI.Sprite.fromImage(img)
        if (options) {
            for ( i in options) {
                sprite[i] = options[i]
            }
        }
        container.addChild(sprite)
        return sprite
    }
     //以每秒60fps渲染
     function animate(){
        app.render(container)
        requestAnimationFrame(animate)
     }

     function init() {
        var scroller = startScroll()
        scroller.setDimensions(app.view.width, app.view.height, app.view.height, contentLength);
     }

    function startScroll() {
        var scrollStatus = false
        scroller = new Scroller(function(left, top, zoom) {
            if(scrollDirection === 'top'){
                container.y = -top
            } else if(scrollDirection === 'left'){
                container.y = -left
            }
            move = left > top ? left : top
            if (!scrollStatus && spriteBox.tips) {
                scrollStatus = true
                TweenMax.fromTo(spriteBox.tips, 0.5, {alpha: 1}, {alpha: 0})
            }
            // 序幕彩虹部分
            if (move < 1) {
            } else if (move < 472 && move >= 1) {
                scrollPart1(move)
                if (move > 250) {
                    scrollPart2(move)
                }
            } else if(move < 1109) {
                scrollPart2(move)
            } else if(move < 3409) {
                scrollPart3(move)
            } else if (move < 4800) {
                scrollPart4(move)
            }
        })
        initEvent(scroller)
        return scroller
    }

    function drawStart() {
        var con = new PIXI.Container()
        var icon = spriteSheet.icon
        var createIcon = getImageFromIcon(con, spriteBox.icon, host + 'images/icon.png', icon)
        con.x = 0
        con.y = 0
        createIcon([
            'w1', 'w2', 'w3', 'w4', 'w5', 'b1', 'b2', 'r1'
        ])

        var r1O = spriteSheet.icon.r1

        var r1Mask2 = new PIXI.Graphics()

        r1Mask2.beginFill(0xffffff)
        r1Mask2.drawRect(r1O.options.x, r1O.options.y, r1O.position.w, r1O.position.t)

        r1Mask2.endFill()
        spriteBox.r1Mask2 = r1Mask2
        con.addChild(r1Mask2)

        var r1Mask = new PIXI.Graphics()

        r1Mask.beginFill(0x0b1422)
        r1Mask.drawRect(r1O.options.x, r1O.options.y + r1O.position.t, r1O.position.w, r1O.position.h)

        r1Mask.endFill()
        spriteBox.r1Mask = r1Mask
        con.addChild(r1Mask)

        // 添加序幕动画
        TweenMax.fromTo(spriteBox.w1, 2, {y:533, alpha: 0}, {y:icon.w1.options.y, alpha: 1})
        TweenMax.fromTo(spriteBox.w2, 2, {y:533, alpha: 0}, {y:icon.w2.options.y, alpha: 1}).delay(0.5)
        TweenMax.fromTo(spriteBox.w3, 2, {y:533, alpha: 0}, {y:icon.w3.options.y, alpha: 1}).delay(1)
        TweenMax.fromTo(spriteBox.w4, 2, {y:533, alpha: 0}, {y:icon.w4.options.y, alpha: 1}).delay(1.5)
        TweenMax.fromTo(spriteBox.w5, 2, {y:533, alpha: 0}, {y:icon.w5.options.y, alpha: 1}).delay(2)
        
        spriteBox.b1.anchor.set(0.5, 0.5)
        spriteBox.b1.x = icon.b1.options.x + icon.b1.position.w / 2
        spriteBox.b1.y = icon.b1.options.y + icon.b1.position.h / 2
        spriteBox.b2.anchor.set(0.5, 0.5)
        spriteBox.b2.x = icon.b2.options.x + icon.b2.position.w / 2
        spriteBox.b2.y = icon.b2.options.y + icon.b2.position.h / 2
        TweenMax.fromTo(spriteBox.b1.scale, 1, {x: 0, y: 0}, {x: 1, y: 1}).delay(3)
        spriteBox.r1.alpha = 0
        spriteBox.r1Mask2.alpha = 0
        TweenMax.fromTo(spriteBox.b2.scale, 1, {x: 0, y: 0}, {x: 1, y: 1, onComplete: function() {
            spriteBox.r1.alpha = 1
            spriteBox.r1Mask2.alpha = 1
            init()
            drawPart1()
        }}).delay(3)

        container.addChild(con)
    }

    function drawPart1() {
        // 第一部分
        var part1 = new PIXI.Container()
        var createIcon1 = getImageFromIcon(part1, spriteBox.icon, host + 'images/icon.png', spriteSheet.icon)
        part1.x = 0
        part1.y = 0

        createIcon1([
            's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10',
            's11', 's12', 's13', 's14', 's15', 's16', 's17'
        ])

        var r1Mask0 = new PIXI.Graphics()

        r1Mask0.beginFill(0x0b1422)
        r1Mask0.drawRect(0, 1092, 750, 350)

        r1Mask0.endFill()
        spriteBox.r1Mask0 = r1Mask0
        part1.addChild(r1Mask0)

        container.addChild(part1)
        // 下滑提示
        var tips = new PIXI.Container()
        var style = new PIXI.TextStyle({
            width: 750,
            fontSize: 28,
            fill: '#aaa',
            align: 'center'
        });
        
        var text = new PIXI.Text('向下滑动', style)
        text.x = 320
        text.y = app.screen.height - 60
        
        tips.addChild(text)
        spriteBox.tips = tips
        container.addChild(tips)

        // 添加动画
        TweenMax.fromTo(tips, 0.5, {alpha: 0}, {alpha: 1})
        TweenMax.fromTo(tips, 0.5, {y: 0}, {y: -50, onComplete: function() {
            TweenMax.fromTo(tips, 0.5, {y: -50}, {y: 0, onComplete: function() {
                TweenMax.fromTo(tips, 0.5, {y: 0}, {y: -50, onComplete: function() {
                    TweenMax.fromTo(tips, 0.5, {y: -50}, {y: 0, onComplete: function() {
                        // TweenMax.fromTo(tips, 0.5, {alpha: 1}, {alpha: 0})
                    }})
                }}).delay(0.5)
            }})
        }}).delay(0.5)
    }

    function drawPart2() {
        // 第二部分，盘古大厦
        var part2 = new PIXI.Container()
        var icon = spriteSheet.icon
        var createIcon = getImageFromIcon(part2, spriteBox.icon, host + 'images/icon.png', icon)
        part2.x = 0
        part2.y = 1371
        part2.alpha = 0

        spriteBox.bg1 = createSprite(part2, host + 'images/p2-bg1.png', {
            x: -50,
            y: 0
        })

        spriteBox.bg2 = createSprite(part2, host + 'images/p2-bg2.png', {
            x: 346,
            y: 34
        })

        spriteBox.bg3 = createSprite(part2, host + 'images/p2-bg3.png', {
            x: -68,
            y: 491
        })

        spriteBox.person = createSprite(part2, host + 'images/p2-person.png', {
            x: 562 + 60,
            y: 297 + 50
        })

        spriteBox.man = createSprite(part2, host + 'images/p2-man.png', {
            x: 368,
            y: 744
        })

        spriteBox.gou = createSprite(part2, host + 'images/p2-gou.png', {
            x: 35,
            y: 709
        })

        createIcon([
            'star1', 'star2', 'star3', 'star4', 'star5',
            'p2w1', 'p2w2', 'p2w3', 'ya'
        ])

        spriteBox.star1.anchor.set(0.5)
        spriteBox.star2.anchor.set(0.5)
        spriteBox.star3.anchor.set(0.5)
        spriteBox.star4.anchor.set(0.5)
        spriteBox.star5.anchor.set(0.5)
        spriteBox.star1.x = icon.star1.options.x + icon.star1.position.w / 2
        spriteBox.star1.y = icon.star1.options.y + icon.star1.position.h / 2
        spriteBox.star2.x = icon.star2.options.x + icon.star2.position.w / 2
        spriteBox.star2.y = icon.star2.options.y + icon.star2.position.h / 2
        spriteBox.star3.x = icon.star3.options.x + icon.star3.position.w / 2
        spriteBox.star3.y = icon.star3.options.y + icon.star3.position.h / 2
        spriteBox.star4.x = icon.star4.options.x + icon.star4.position.w / 2
        spriteBox.star4.y = icon.star4.options.y + icon.star4.position.h / 2
        spriteBox.star5.x = icon.star5.options.x + icon.star5.position.w / 2
        spriteBox.star5.y = icon.star5.options.y + icon.star5.position.h / 2
        TweenMax.fromTo(spriteBox.star1, 150, {rotation: 0, ease: Linear.easeNone, repeatDelay: 0}, {rotation: -360}).repeat(-1)
        TweenMax.fromTo(spriteBox.star2, 150, {rotation: 0, ease: Linear.easeNone, repeatDelay: 0}, {rotation: 360}).repeat(-1)
        TweenMax.fromTo(spriteBox.star3, 150, {rotation: 0, ease: Linear.easeNone, repeatDelay: 0}, {rotation: -360}).repeat(-1)
        TweenMax.fromTo(spriteBox.star4, 150, {rotation: 0, ease: Linear.easeNone, repeatDelay: 0}, {rotation: 360}).repeat(-1)
        TweenMax.fromTo(spriteBox.star5, 150, {rotation: 0, ease: Linear.easeNone, repeatDelay: 0}, {rotation: 360}).repeat(-1)

        spriteBox.ya.anchor.set(1, 1)
        spriteBox.ya.x = icon.ya.options.x + icon.ya.position.w
        spriteBox.ya.y = icon.ya.options.y + icon.ya.position.h

        spriteBox.part2 = part2
        container.addChild(part2)
    }

    function drawPart3() {
        var part3 = new PIXI.Container()
        var icon = spriteSheet.icon
        var icon2 = spriteSheet.icon2
        var createIcon = getImageFromIcon(part3, spriteBox.icon, host + 'images/icon.png', icon)
        var createIcon2 = getImageFromIcon(part3, spriteBox.icon2, host + 'images/icon2.png', icon2)
        part3.x = 0
        part3.y = 2317

        spriteBox.p3bg = createSprite(part3, host + 'images/p3-bg.png', {
            x: -68,
            y: 309
        })

        spriteBox.p3bg2 = createSprite(part3, host + 'images/p3-bg2.png', {
            x: 30,
            y: 2122
        })

        spriteBox.ball1 = createSprite(part3, host + 'images/p3-sun-01.png', { x: 349, y: 1225, alpha:0 })
        spriteBox.ball2 = createSprite(part3, host + 'images/p3-sun-02.png', { x: 349, y: 1225, alpha:0 })
        spriteBox.ball3 = createSprite(part3, host + 'images/p3-sun-03.png', { x: 349, y: 1225, alpha:0 })
        spriteBox.ball4 = createSprite(part3, host + 'images/p3-sun-04.png', { x: 349, y: 1225, alpha:0 })
        spriteBox.ball5 = createSprite(part3, host + 'images/p3-sun-05.png', { x: 349, y: 1225, alpha:0 })
        spriteBox.ball6 = createSprite(part3, host + 'images/p3-sun-06.png', { x: 349, y: 1225, alpha:0 })
        spriteBox.ball7 = createSprite(part3, host + 'images/p3-sun-07.png', { x: 349, y: 1225, alpha:0 })
        spriteBox.ball8 = createSprite(part3, host + 'images/p3-sun-08.png', { x: 349, y: 1225, alpha:0 })
        spriteBox.ball9 = createSprite(part3, host + 'images/p3-sun-09.png', { x: 349, y: 1225, alpha:0 })
        spriteBox.ball10 = createSprite(part3, host + 'images/p3-sun-10.png', { x: 349, y: 1225, alpha:0 })
        spriteBox.ball11 = createSprite(part3, host + 'images/p3-sun-11.png', { x: 349, y: 1225, alpha:0 })
        spriteBox.ball12 = createSprite(part3, host + 'images/p3-sun-12.png', { x: 349, y: 1225, alpha:0 })
        spriteBox.ball13 = createSprite(part3, host + 'images/p3-sun-13.png', { x: 349, y: 1225, alpha:0 })
        spriteBox.ball14 = createSprite(part3, host + 'images/p3-sun-14.png', { x: 349, y: 1225, alpha:0 })

        // createIcon2([
        //     'ball'
        // ])

        spriteBox.rainbow = createSprite(part3, host + 'images/p3-rb.png', {
            x: 600,
            y: 0
        })

        var mask = new PIXI.Graphics()
        mask.beginFill('0xffffff', 0)
        mask.drawRect(600, 0, 88, 1399)
        mask.height = 0

        part3.addChild(mask)
        spriteBox.rainbow.mask = mask

        createIcon2([
            'm1w', 'm2w'
        ])

        createIcon([
            'g1w', 'g2w', 'g3w', 'm3w',
            'g1', 'g2', 'g3', 'm1', 'm2', 'm3'
        ])

        createIcon2([
            'run'
        ])

        spriteBox.xgou = createSprite(part3, host + 'images/p3-xgou.png', {
            x: 127 - 50,
            y: 2124
        })

        createIcon2([
            'le', 're', 'tq1', 'tq2'
        ])

        spriteBox.m1w.anchor.set(1, 0)
        spriteBox.m2w.anchor.set(1, 0)
        spriteBox.m3w.anchor.set(1, 0)
        spriteBox.m1w.x = icon2.m1w.options.x + icon2.m1w.position.w
        spriteBox.m2w.x = icon2.m2w.options.x + icon2.m2w.position.w
        spriteBox.m3w.x = icon.m3w.options.x + icon.m3w.position.w
        spriteBox.g1w.scale.x = 0
        spriteBox.g1w.scale.y = 0
        spriteBox.g2w.scale.x = 0
        spriteBox.g2w.scale.y = 0
        spriteBox.g3w.scale.x = 0
        spriteBox.g3w.scale.y = 0

        spriteBox.m1w.scale.x = 0
        spriteBox.m1w.scale.y = 0
        spriteBox.m2w.scale.x = 0
        spriteBox.m2w.scale.y = 0
        spriteBox.m3w.scale.x = 0
        spriteBox.m3w.scale.y = 0

        spriteBox.run.anchor.set(0.5, 0.5)
        spriteBox.run.x = icon2.run.options.x + icon2.run.position.w / 2
        spriteBox.run.y = icon2.run.options.y + icon2.run.position.h / 2

        spriteBox.le.anchor.set(0.5, 0.5)
        spriteBox.le.x = icon2.le.options.x + icon2.le.position.w / 2
        spriteBox.le.y = icon2.le.options.y + icon2.le.position.h / 2

        spriteBox.re.anchor.set(0.5, 0.5)
        spriteBox.re.x = icon2.re.options.x + icon2.re.position.w / 2
        spriteBox.re.y = icon2.re.options.y + icon2.re.position.h / 2

        TweenMax.fromTo(spriteBox.le, 0.2, {rotation: -0.1, ease: Linear.easeNone, repeatDelay: 0}, {rotation: 0.1}).repeat(-1).yoyo(true)
        TweenMax.fromTo(spriteBox.re, 0.2, {rotation: 0.1, ease: Linear.easeNone, repeatDelay: 0}, {rotation: -0.1}).repeat(-1).yoyo(true)

        spriteBox.tq1.x = icon2.tq1.options.x + 200
        spriteBox.tq2.x = icon2.tq2.options.x + 250

        // var mask2 = new PIXI.Graphics()
        // mask2.beginFill('0xffffff', 0)
        // mask2.drawRect(-68, 309, 798, 1848)

        // part3.addChild(mask2)
        // spriteBox.p3bg.mask = mask2

        container.addChild(part3)
    }

    function drawPart4() {
        var part4 = new PIXI.Container()
        var p4rm = new PIXI.Container()
        var icon2 = spriteSheet.icon2
        var createIcon2 = getImageFromIcon(part4, spriteBox.icon2, host + 'images/icon2.png', icon2)
        part4.x = 0
        part4.y = 4703

        spriteBox.line1 = createSprite(part4, host + 'images/p4-line1.png', {
            x: 152,
            y: 231
        })

        spriteBox.line2 = createSprite(part4, host + 'images/p4-line2.png', {
            x: 196,
            y: 481
        })

        spriteBox.line3 = createSprite(part4, host + 'images/p4-line3.png', {
            x: 158,
            y: 752
        })

        var mask1 = new PIXI.Graphics()
        mask1.beginFill('0xffffff', 0)
        mask1.drawRect(152, 231, 388, 169)
        mask1.width = 0

        part4.addChild(mask1)
        spriteBox.line1.mask = mask1

        var mask2 = new PIXI.Graphics()
        mask2.beginFill('0xffffff', 0)
        mask2.drawRect(196, 481, 367, 193)
        mask2.height = 0

        part4.addChild(mask2)
        spriteBox.line2.mask = mask2

        var mask3 = new PIXI.Graphics()
        mask3.beginFill('0xffffff', 0)
        mask3.drawRect(158, 752, 388, 169)
        mask3.width = 0

        part4.addChild(mask3)
        spriteBox.line3.mask = mask3

        createIcon2([
            'light1', 'light2', 'light3',
            'btn', 'hand',
            'q4w1', 'q4w2', 'q4w3', 'stage1', 'stage2', 'stage3',
            'title1', 'title2', 'title3', 'p4tips'
        ])

        p4rm.x = 71
        p4rm.y = 104
        spriteBox.rm = createSprite(p4rm, host + 'images/p4-rm-01.png', {
            x: 0,
            y: 0
        })
        spriteBox.rm2 = createSprite(p4rm, host + 'images/p4-rm-02.png', {
            x: 0,
            y: 0
        })
        spriteBox.rm3 = createSprite(p4rm, host + 'images/p4-rm-03.png', {
            x: 0,
            y: 0
        })

        spriteBox.pbg = createSprite(p4rm, host + 'images/p4-pbg.png', {
            x: 5, // 76,
            y: -44 // 60
        })

        spriteBox.pcon = createSprite(p4rm, host + 'images/p4-pcon.png', {
            x: 5, // 76,
            y: -44 // 60
        })

        var mask = new PIXI.Graphics()
        mask.beginFill('0xffffff', 0)
        mask.drawRect(5, -44, 149, 20)
        mask.width = 0

        p4rm.addChild(mask)
        spriteBox.pcon.mask = mask

        spriteBox.p4rm = p4rm

        spriteBox.q4w1.alpha = 0
        spriteBox.q4w2.alpha = 0
        spriteBox.q4w3.alpha = 0
        spriteBox.rm2.alpha = 0
        spriteBox.rm3.alpha = 0

        spriteBox.light1.alpha = 0
        spriteBox.light2.alpha = 0
        spriteBox.light3.alpha = 0
        spriteBox.light2.scale.x = -1
        spriteBox.light2.x = icon2.light2.options.x + icon2.light2.position.w

        spriteBox.btn.anchor.set(0.5, 0.5)
        spriteBox.btn.x = icon2.btn.options.x + icon2.btn.position.w / 2
        spriteBox.btn.y = icon2.btn.options.y + icon2.btn.position.h / 2
        spriteBox.btn.interactive = true
        spriteBox.btn.buttonMode = true
        spriteBox.hand.interactive = true
        spriteBox.hand.buttonMode = true

        // 添加动画
        TweenMax.fromTo(spriteBox.hand, 1, {
            x: icon2.hand.options.x + 10,
            y: icon2.hand.options.y + 10
        }, {
            x: icon2.hand.options.x - 10,
            y: icon2.hand.options.y - 10
        }).repeat(-1).yoyo(true).repeatDelay(0.5)

        TweenMax.fromTo(spriteBox.btn.scale, 1, {
            x: 1,
            y: 1
        }, {
            x: 1.1,
            y: 1.1
        }).repeat(-1).yoyo(true).repeatDelay(0.5)

        spriteBox.hand.on('pointerdown', onSupport)
        spriteBox.btn.on('pointerdown', onSupport)

        part4.addChild(p4rm)
        container.addChild(part4)
    }
     
    function scrollPart1(move) {
        var icon = spriteSheet.icon
        var arr = [
            's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10',
            's11', 's12', 's13', 's14', 's15', 's16', 's17'
        ]
        var temp = null
        var tempM = null
        var tempS = null
        var i = 0
        var j = ''
        for ( i = 0; i < arr.length; i++) {
            temp = icon[arr[i]]
            tempM = temp.move
            tempS = temp.scale
            if (tempM) {
                for (j in tempM) {
                    spriteBox[arr[i]][j] = scrollTo(tempM[j].min, tempM[j].max, move * tempM[j].speed, temp.options[j] + tempM[j].gap, temp.options[j])
                }
            }
            if (tempS) {
                for (j in tempS) {
                    spriteBox[arr[i]].scale[j] = scrollTo(tempS[j].min, tempS[j].max, move * tempS[j].speed, tempS[j].start, tempS[j].end)
                }
            }
            if (temp.anchor) {
                spriteBox[arr[i]].anchor.x = temp.anchor.x
                spriteBox[arr[i]].anchor.y = temp.anchor.y
            }
        }
        temp = icon['r1']
        tempM = temp.move
        j = 'y'
        spriteBox.r1Mask[j] = move < temp.position.m2 ? 0 : move > temp.position.t ? move : temp.position.t
        spriteBox.r1Mask2.y = move < temp.position.m2 ? move : temp.position.m2
        if (spriteBox.r1Mask2.y >= temp.position.m2) {
            spriteBox.r1Mask2.visible = false
        } else {
            spriteBox.r1Mask2.visible = true
        }
        if (move > 1) {
            spriteBox.r1Mask0.visible = false
        } else {
            spriteBox.r1Mask0.visible = true
        }
    }

    function scrollPart2(move) {
        var icon = spriteSheet.icon
        // var arr = [
        //     'p2w1', 'p2w2'
        // ]
        // var temp = null
        // var tempM = null
        // var tempS = null
        // var i = 0
        // var j = ''
        // for ( i = 0; i < arr.length; i++) {
        //     temp = icon[arr[i]]
        //     spriteBox[arr[i]].scale.x = scrollTo(472, 1109, move, 0, 1)
        //     spriteBox[arr[i]].scale.y = scrollTo(472, 1109, move, 0, 1)
        //     spriteBox[arr[i]].y = scrollTo(472, 1109, move, 0, 1)
        // }
        spriteBox['part2'].alpha = scrollTo(250, 472 + 200, move, 0, 1)
        if (move > 472) {
            spriteBox['person'].x = scrollTo(472, 1109, move, 562 + 60, 562 - 110)
            spriteBox['person'].y = scrollTo(472, 1109, move, 297 + 50, 297 - 50)
        }
        var max1 = 1109 - 500
        var max2 = 1109 - 450
        var x = 0
        var y = 0
        x = icon.p2w1.options.x + icon.p2w1.position.w / 2
        spriteBox['p2w1'].anchor.set(0.5)
        spriteBox['p2w1'].x = x

        x = icon.p2w2.options.x + icon.p2w2.position.w / 2
        spriteBox['p2w2'].anchor.set(0.5)
        spriteBox['p2w2'].x = x

        if (move < 472) {
            spriteBox['p2w1'].alpha = 0
        }
        if (move < max1) {
            y = icon.p2w1.options.y + icon.p2w1.position.h / 2
            // spriteBox['p2w1'].scale.x = scrollTo(472, max1, move, 0, 1)
            // spriteBox['p2w1'].scale.y = scrollTo(472, max1, move, 0, 1)
            spriteBox['p2w1'].y = scrollTo(472, max1, move, y - 200, y)
            spriteBox['p2w1'].alpha = scrollTo(472, max1, move, 0, 1)

            // spriteBox['p2w2'].scale.x = 0
            // spriteBox['p2w2'].scale.y = 0
            spriteBox['p2w2'].alpha = 0
        } else if (move < max2) {
            y = icon.p2w2.options.y + icon.p2w2.position.h / 2
            // spriteBox['p2w2'].scale.x = scrollTo(472, max2, move, 0, 1)
            // spriteBox['p2w2'].scale.y = scrollTo(472, max2, move, 0, 1)
            spriteBox['p2w2'].y = scrollTo(472, max2, move, y + 200, y)
            spriteBox['p2w2'].alpha = scrollTo(472, max2, move, 0, 1)
        }
        spriteBox['man'].x = scrollTo(472, 1109, move, 368 + 500, 368)
        spriteBox['ya'].scale.x = scrollTo(472, 1109, move, 0, 1)
        spriteBox['ya'].scale.y = scrollTo(472, 1109, move, 0, 1)

        spriteBox['p2w3'].alpha = scrollTo(472 + 400, 1109, move, 0, 1)
    }

    function scrollPart3(move) {
        var icon = spriteSheet.icon
        var icon2 = spriteSheet.icon2

        if (move > 1109 + 200) {
            spriteBox.rainbow.mask.scale.y = 1
            spriteBox.rainbow.mask.height = scrollTo(1109 + 200, 2609, move, 0, 1399)
            spriteBox.g1.alpha = scrollTo(1109 + 200, 1109 + 400, move, 0, 1)
            spriteBox.m1.alpha = scrollTo(1109 + 400, 1109 + 600, move, 0, 1)
            spriteBox.g2.alpha = scrollTo(1109 + 600, 1109 + 800, move, 0, 1)
            spriteBox.m2.alpha = scrollTo(1109 + 800, 1109 + 1000, move, 0, 1)
            spriteBox.g3.alpha = scrollTo(1109 + 1000, 1109 + 1200, move, 0, 1)
            spriteBox.m3.alpha = scrollTo(1109 + 1200, 1109 + 1400, move, 0, 1)
            if (move < 1109 + 2000) {
                if (!loader.resources.question.sound.isPlaying && loader.resources.question.sound.flag && musicOn) {
                    loader.resources.question.sound.play()
                    loader.resources.question.sound.flag = false
                }
            } else {
                loader.resources.question.sound.flag = true
                loader.resources.question.sound.pause()
            }

            if (move < 1109 + 500 && move > 1109 + 300) {
                spriteBox.g1w.scale.x = scrollTo(1109 + 300, 1109 + 500, move, 0, 1)
                spriteBox.g1w.scale.y = scrollTo(1109 + 300, 1109 + 500, move, 0, 1)
            }
            if (move < 1109 + 700 && move > 1109 + 500) {
                spriteBox.m1w.scale.x = scrollTo(1109 + 500, 1109 + 700, move, 0, 1)
                spriteBox.m1w.scale.y = scrollTo(1109 + 500, 1109 + 700, move, 0, 1)
            }

            if (move < 1109 + 900 && move > 1109 + 700) {
                spriteBox.g2w.scale.x = scrollTo(1109 + 700, 1109 + 900, move, 0, 1)
                spriteBox.g2w.scale.y = scrollTo(1109 + 700, 1109 + 900, move, 0, 1)
            }
            if (move <  1109 + 1100 && move > 1109 + 900) {
                spriteBox.m2w.scale.x = scrollTo(1109 + 900, 1109 + 1100, move, 0, 1)
                spriteBox.m2w.scale.y = scrollTo(1109 + 900, 1109 + 1100, move, 0, 1)
            }

            if (move < 1109 + 1300 && move > 1109 + 1100) {
                spriteBox.g3w.scale.x = scrollTo(1109 + 1100, 1109 + 1300, move, 0, 1)
                spriteBox.g3w.scale.y = scrollTo(1109 + 1100, 1109 + 1300, move, 0, 1)
            }
            if (move < 1109 + 1500 && move > 1109 + 1300) {
                spriteBox.m3w.scale.x = scrollTo(1109 + 1300, 1109 + 1500, move, 0, 1)
                spriteBox.m3w.scale.y = scrollTo(1109 + 1300, 1109 + 1500, move, 0, 1)
            }
            var len = 14
            var i = 0
            for (i = 1; i < len + 1; i++) {
                if (move > 1109 + 1500 + 35 * (i - 1) && move < 1109 + 1500 + 35 * i) {
                    spriteBox['ball' + i].alpha = 1
                } else {
                    spriteBox['ball' + i].alpha = 0
                }
            }
            if (move >= 1109 + 1500 + 35 * 14) {
                spriteBox['ball14'].alpha = 1
            }
            if (move < 1109 + 2000 && move > 1109 + 1700) {
                spriteBox.run.scale.x = scrollTo(1109 + 1700, 1109 + 2000, move, 1, 0.3)
                spriteBox.run.scale.y = scrollTo(1109 + 1700, 1109 + 2000, move, 1, 0.3)
                spriteBox.run.y = scrollTo(1109 + 1700, 1109 + 2000, move, icon2.run.options.y + icon2.run.position.h / 2, icon2.run.options.y + icon2.run.position.h / 2 + 200)
            }
            // 小勾同情
            if (move < 1109 + 2200 && move > 1109 + 2000) {
                spriteBox.xgou.x = scrollTo(1109 + 2000, 1109 + 2200, move, 127 - 50, 127)
                spriteBox.le.x = scrollTo(1109 + 2000, 1109 + 2200, move, 127 - 50 + 161 + icon2.le.position.w / 2, 127 + 161 + icon2.le.position.w / 2)
                spriteBox.re.x = scrollTo(1109 + 2000, 1109 + 2200, move, 127 - 50 + 202 + icon2.re.position.w / 2, 127 + 202 + icon2.re.position.w / 2)

                spriteBox.tq1.x = scrollTo(1109 + 2000, 1109 + 2200, move, icon2.tq1.options.x + 200, icon2.tq1.options.x)
            }
            if (move < 1109 + 2300 && move > 1109 + 2100) {
                spriteBox.tq2.x = scrollTo(1109 + 2100, 1109 + 2300, move, icon2.tq2.options.x + 300, icon2.tq2.options.x)
            }
        }
    }

    function scrollPart4(move) {
        var icon2 = spriteSheet.icon2
        
        if (move < 3409 + 100) {
            spriteBox.q4w1.alpha = scrollTo(3409, 3409 + 100, move, 0, 1)
        } else if (move < 3409 + 200) {
            spriteBox.q4w2.alpha = scrollTo(3409 + 100, 3409 + 200, move, 0, 1)
        } else if (move < 3409 + 300) {
            spriteBox.q4w3.alpha = scrollTo(3409 + 200, 3409 + 300, move, 0, 1)
        } else if (move < 3409 + 550) {
            spriteBox.line1.mask.width = scrollTo(3409 + 300, 3409 + 550, move, 0, 388)
            spriteBox.q4w3.alpha = scrollTo(3409 + 300, 3409 + 550, move, 1, 0)
        } else if (move < 3409 + 810) {
            spriteBox.line1.mask.width = 388
            spriteBox.line2.mask.height = scrollTo(3409 + 550, 3409 + 810, move, 0, 193)
            spriteBox.q4w3.alpha = 0
            spriteBox.q4w2.alpha = scrollTo(3409 + 550, 3409 + 810, move, 1, 0)
        } else if (move < 3409 + 1050) {
            spriteBox.line1.mask.width = 388
            spriteBox.line2.mask.height = 193
            spriteBox.line3.mask.width = scrollTo(3409 + 810, 3409 + 1050, move, 0, 388)
            spriteBox.q4w3.alpha = 0
            spriteBox.q4w2.alpha = 0
            spriteBox.q4w1.alpha = scrollTo(3409 + 810, 3409 + 1050, move, 1, 0)
        } else {
            spriteBox.line1.mask.width = 388
            spriteBox.line2.mask.height = 193
            spriteBox.line3.mask.width = 388
            spriteBox.q4w3.alpha = 0
            spriteBox.q4w2.alpha = 0
            spriteBox.q4w1.alpha = 0
        }
    }

    var moveLevel = 1
    var moveStatus = false
    var level2Status = false
    var level3Status = false
    function onSupport() {
        var icon2 = spriteSheet.icon2
        var startX = 71
        var startY = 104
        var x = 50
        var y = 25
        // 第一条线
        moveStatus = !moveStatus
        spriteBox.rm.alpha = 0
        spriteBox.rm2.alpha = +moveStatus
        spriteBox.rm3.alpha = +!moveStatus
        spriteBox.light1.alpha = 0
        spriteBox.light2.alpha = 0
        spriteBox.light3.alpha = 0
        if (!loader.resources.support.sound.isPlaying && loader.resources.support.sound.flag && musicOn) {
            loader.resources.support.sound.play()
            loader.resources.support.sound.flag = false
        }
        if (moveLevel === 1) {
            y = 9
            spriteBox.p4rm.x += x
            spriteBox.p4rm.y += y
            spriteBox.pcon.mask.width = 149 * 0.33 * (spriteBox.p4rm.x - startX) / 388
            if (spriteBox.p4rm.x >= startX + 388) {
                spriteBox.p4rm.x = startX + 388 + 20
                spriteBox.p4rm.y = startY + 169 - 135
                spriteBox.pcon.mask.width = 149 * 0.33
                moveLevel = 2
                level2Status = true
                spriteBox.rm.alpha = 1
                spriteBox.rm2.alpha = 0
                spriteBox.rm3.alpha = 0
                spriteBox.light1.alpha = 1
                moveStatus = false
            }
        } else if (moveLevel === 2) {
            if (level2Status) {
                y = 150
                spriteBox.p4rm.x += 186
                level2Status = false
            } else {
                y = 20
            }
            spriteBox.p4rm.x -= x
            spriteBox.p4rm.y += y
            spriteBox.p4rm.scale.x = -1
            spriteBox.pcon.mask.width = 149 * 0.33 + 149 * 0.33 * (startX + 388 + 20 + 186 - spriteBox.p4rm.x) / 434
            if (spriteBox.p4rm.x <= 231) {
                spriteBox.p4rm.x = 231
                spriteBox.p4rm.y = startY + 193 + 169 - 50
                spriteBox.pcon.mask.width = 149 * 0.66
                moveLevel = 3
                level3Status = true
                spriteBox.rm.alpha = 1
                spriteBox.rm2.alpha = 0
                spriteBox.rm3.alpha = 0
                spriteBox.light2.alpha = 1
                moveStatus = false
            }
        } else if (moveLevel === 3) {
            spriteBox.p4rm.scale.x = 1
            y = 12
            if (level3Status) {
                spriteBox.p4rm.x -= 150
                spriteBox.p4rm.y += 150
                level3Status = false
            }
            spriteBox.p4rm.x += x
            spriteBox.p4rm.y += y
            spriteBox.p4rm.scale.x = 1
            spriteBox.pcon.mask.width = 149 * 0.66 + 149 * 0.33 * (spriteBox.p4rm.x - 231 + 150) / 408
            if (spriteBox.p4rm.x >= startX + 418) {
                spriteBox.p4rm.x = startX + 418
                spriteBox.p4rm.y = startY + 169 + 193 + 169 + 31
                spriteBox.pcon.mask.width = 149
                moveLevel = 4
                spriteBox.rm.alpha = 1
                spriteBox.rm2.alpha = 0
                spriteBox.rm3.alpha = 0
                spriteBox.light3.alpha = 1
                moveStatus = false
                loader.resources.support.sound.flag = true
                loader.resources.support.sound.pause()
                setTimeout(function() {
                    var app = document.getElementById('app')
                    app.className = app.className.replace(/( hide)/g, '')
                }, 500)
            }
        } else if(moveLevel === 4) {
            spriteBox.rm.alpha = 1
            spriteBox.rm2.alpha = 0
            spriteBox.rm3.alpha = 0
            spriteBox.light3.alpha = 1
            loader.resources.support.sound.flag = true
            loader.resources.support.sound.pause()
        }
    }

    function initEvent(scroller) {
        var mousedown = false;
        document.addEventListener("touchstart", function(e) {
            scroller.doTouchStart(e.touches, e.timeStamp);
            mousedown = true;
        }, false);
    
        document.addEventListener("touchmove", function(e) {
            if (!mousedown) {
                return;
            }
            scroller.doTouchMove(e.touches, e.timeStamp);
            mousedown = true;
        }, false);
    
        document.addEventListener("touchend", function(e) {
            if (!mousedown) {
                return;
            }
            scroller.doTouchEnd(e.timeStamp);
            mousedown = false;
        }, false);

        var p5__tips = document.getElementById('p5__tips')
        var p5__arrow = document.getElementById('p5__arrow')
        p5__tips.addEventListener('click', openTips, false)
        p5__arrow.addEventListener('click', openTips, false)

        var p6__more = document.getElementById('p6__more')
        var p6__content = document.getElementById('p6__content')
        var p6__save = document.getElementById('p6__save')
        var status = false
        p6__more.addEventListener('click', function() {
            if (status) {
                return
            }
            status = true
            p6__content.className = p6__content.className.replace(/( spreadOut)|( spreadKeep)/g, '') + ' spreadInOut'
            p6__save.className = p6__save.className.replace(/( spreadOpacity)|( spreadKeep)/g, '') + ' spreadOpacityAlter'
            setTimeout(function() {
                drawPicture()
            }, 2000)
            setTimeout(function() {
                p6__content.className = p6__content.className.replace(/( spreadInOut)/g, ' spreadKeep')
                p6__save.className = p6__save.className.replace(/( spreadOpacityAlter)/g, ' saveKeep')
                status = false
            }, 4000)
        }, false)
    }

    function openTips() {
        var p5 = document.getElementById('p5')
        var p6 = document.getElementById('p6')
        // p5.className += ' hide'
        p6.className = p6.className.replace(/( hide)/g, '')
        if (!loader.resources.open.sound.isPlaying && loader.resources.open.sound.flag && musicOn) {
            loader.resources.open.sound.play()
            loader.resources.open.sound.flag = false
        }
        drawPicture()
    }

     // 区间最小值, 区间最大值, top, 初始位置, 终点, 速度, 方向
    function scrollTo(min, max, top, start, end){
        // if (top > max) {
        //     return end
        // }
        return start + ((top - min)/(max - min) * (end - start));
    }

    function isWeiXin() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    }
    function getUserWeixinData() {
        $.ajax({
            type: 'get',
            url: 'https://activity.lagou.com/activityapi/weixin/authUserDetail',
            success: function(data) {
                if (data.state == 200 && data.content) { // 已登录
                    nickname = data.content.nickname || ''
                    var p6__content__title = document.getElementById('p6__content__title')
                    p6__content__title.innerHTML = nickname + '小友，给你的锦囊是'
                } else{ // 未登录
                    // var href = window.location.href
                    //     arr = href.split('?'),
                    //     param = getQueryString('times')
                    // if(arr.length > 1){
                    //     href += '&times=1'
                    // }else{
                    //     href += '?times=1'
                    // }
                    // if(!param){
                    //     window.location.href = 'https://activity.lagou.com/activityapi/weixin/userInfoAuth.html?returnUrl=' + encodeURIComponent(href); 
                    // }
                }
            },
            error: function(error) {
                console.log(error.message);
            }
        });
    }

    function initCanvas() {
        canvas = document.getElementById('p6__canvas')
        ctx = canvas.getContext("2d")
        canvas.width = 750
        canvas.height = 1334

        var load = 0
        canvasImgs.forEach(function(url){
            var img = new Image()
            img.onload = function(){
                load++
                if (load === canvasImgs.length) {}
            }
            img.src = url
            loadedImgs.push(img)
        })
    }

    function drawPicture() {
        var img = new Image()
        var index = Math.ceil(Math.random() * 47)
        var p6__content__words = document.getElementById('p6__content__words')
        var p6__canvas__img = document.getElementById('p6__canvas__img')
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0b1422"
        ctx.rect(0, 0, canvas.width, canvas.height)
        ctx.fill()

        ctx.drawImage(loadedImgs[0], 0, 0)
        ctx.drawImage(loadedImgs[1], 288, 1075)

        var txt = nickname + '小友，给你的锦囊是'
        var arr = txt.split('')
        var row = []
        var temp = ''
        var i = 0
        ctx.fillStyle = "#ffffff"
        ctx.font = "26px normal"
        ctx.textAlign = "center"

        for (i = 0; i < arr.length; i++) {
            if (ctx.measureText(temp).width < 360) {
            } else {
                row.push(temp)
                temp = ''
            }
            temp += arr[i]
        }

        row.push(temp);

        for (i = 0; i < row.length; i++) {
            ctx.fillText(row[i], canvas.width / 2, 224 + 78 + (i + 1) * 32)
        }

        img.onload = function() {
            ctx.drawImage(img, 316, 388)
            setTimeout(function(){
                canvasUrl = canvas.toDataURL('image/png')
                p6__canvas__img.src = canvasUrl
            }, 500)
        }
        img.src = host + 'images/p6-s' + index + '.png'
        p6__content__words.src = host + 'images/p6-s' + index + '.png'
    }
    // },{}]},{},[1]);
    
function postEncodingID(data) {
    var _PID = "",
    _PNO = "",
    _PV = 0,
    _PCONTENTID = "",
    _PRANDOM = "",
    _GAMETHOD = "",
    _GAMSGTYPE = "",
    _GATJ = "",
    _GATJVAL = 0,
    v = 1,
    t = "a",
    dl = encodeURIComponent(window.location.href),
    dr = document.referrer,
    dt = document.title;
    var _ELS = document;
    var arr_GATJ = [];
    try {
        _PID = data["data-lg-tj-id"] || "idnull"
        _PNO = data["data-lg-tj-no"] || "idnull"
        _PCONTENTID = data["data-lg-tj-cid"] || "idnull"
        _PRANDOM = getRandom()
        _GAMETHOD = data["data-lg-gatj-method"] || "send"
        _GAMSGTYPE = data["data-lg-gatj-msgtype"] || "event"
        _GATJ = data["data-lg-gatj-msg"] || ""
        _GATJVAL = parseInt(data["data-lg-gatj-val"] || 0)
        if (_GATJ && typeof ga == "function") {
            arr_GATJ.push(_GAMETHOD, _GAMSGTYPE);
            arr_GATJ = arr_GATJ.concat(_GATJ.split(",")); !! _GATJVAL && arr_GATJ.push(_GATJVAL);
            ga.apply(null, arr_GATJ)
        }
        if (_PID != "idnull") {
            var _params = {};
            _params.v = v;
            _params.t = 'div';//target.tagName.toLocaleLowerCase();
            _params.dl = dl;  
            _params.dr = dr;
            _params.dt = dt;
            _params.aid = [_PID, _PNO, _PV, _PCONTENTID, _PRANDOM].join("_");
            imgGET(_params)
        } else {
            return
        }
    } catch(e) {}
}
function imgGET(params) {
    var REMOTE = {
        server: "https://a.lagou.com/track"
    };
    var _img = new Image();
    img.crossOrigin="anonymous";
    paramsArr = [];
    for (var item in params) {
        if (typeof item == "string") {
            paramsArr.push(item + "=" + params[item])
        }
    }
    _img.src = REMOTE.server + "?" + paramsArr.join("&")
}
function getRandom(digit) {
    window._CASH_RANDOM ? "": window._CASH_RANDOM = {};
    var _cash_random = window._CASH_RANDOM || {},
    _digit = digit || 4,
    _random = getRandomSimple();
    while (_cash_random[_random]) {
        _random = getRandomSimple();
        if (!_cash_random[_random]) {
            break
        }
    }
    window._CASH_RANDOM[_random] = _random;
    return _random;
    function getRandomSimple() {
        var random = "";
        for (var i = 0; i < _digit; i++) {
            var r = Math.floor(Math.random() * 10);
            random += r.toString()
        }
        return random.toString()
    }
}