(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
    "use strict";
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    function noop(){}
    function setRem(value){
        return value / (1080 / 16)+'rem';
    }
    // 音乐播放
    function backgroundMusic(audio){
        // 自动播放音乐效果，解决浏览器或者APP自动播放问题
        if(audio.paused){
            audio.load();
            audio.play();
        }
        function musicInBrowserHandler() {
            if(audio.paused){
                audio.load();
                audio.play();
            }
            document.body.removeEventListener('touchstart', musicInBrowserHandler);
        }
        document.body.addEventListener('touchstart', musicInBrowserHandler);
    
        // 自动播放音乐效果，解决微信自动播放问题
        function musicInWeixinHandler() {
            if(audio.paused){
                audio.load();
                audio.play();
            }
            document.addEventListener("WeixinJSBridgeReady", function () {
                if(audio.paused){
                    audio.load();
                    audio.play();
                }
            }, false);
            document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
        }
        document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
    }
    // Vue.config.errorHandler = function(err, vm, info){
    //     alert(err);
    // }
    // 3: 报名成功，展示公司页
    // test
    var initialNow = 0,
        initialLast = 0,
        mode = "development";// "development",//"production",
    
    // 音乐
    if(mode != "development"){
        backgroundMusic(document.getElementById("music"));
    }
    var PageMove = function () {
        function PageMove(options) {
            _classCallCheck(this, PageMove);
            
            this.data = {
                direction: {
                    x: "down",
                    y: "down"
                },
                start: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                },
                // test
                now: initialNow,
                last: initialLast,
                page: {
                    up: {
                        last: (options.animation ? options.animation : "move") + "ULast",
                        now: (options.animation ? options.animation : "move") + "UNow"
                    },
                    down: {
                        last: (options.animation ? options.animation : "move") + "DLast",
                        now: (options.animation ? options.animation : "move") + "DNow"
                    }
                },
                pageLength: jQuery(".page").length,
                isMoving: false,
                clickStatus: false
            };
            this._initPageMoveEvent();
        }
        
        _createClass(PageMove, [{
            key: "pageMove",
            value: function pageMove(od, self) {
                // if(self.data.last < self.data.now){
                //     app.$data['page'+self.data.last].status = 'out';
                // }else {
                //     app.$data['page'+self.data.last].status = 'back';
                // }
                var delayTime = 500;
                jQuery(".page" + self.data.now).addClass("hide");
                if(self.data.last == 0 && self.data.last < self.data.now){
                    delayTime = 5000;
                    app.setPage0DownStatus(true);
                }else{
                    app.$data.startMoving = true;
                }
                setTimeout(function(){
                    app.$data.activePage = self.data.now;
                    app.$data.startMoving = false;
                    jQuery(".page").removeClass("pageCurrent").addClass("hide");
                    jQuery(".page" + self.data.last).attr('style','');
                    jQuery(".page" + self.data.now).removeClass("hide").addClass("pageCurrent");
                    self.data.isMoving = false;
                    app.$data.flipStatus = false;
                    app.setPage0DownStatus(false);
                    // app.$data['page'+self.data.now].status = 'in';
                    // app.$data['page'+self.data.last].status = 'in';
                },delayTime);
            }
        }, {
            key: "_dataMove",
            value: function _dataMove(od, self) {
                var classify = jQuery('.page'+self.data.now+' .classify'),
                    data = app.$data['data'+(self.data.now - 1)],
                    now = od == 'up' ? 'moveDataUNow' : 'moveDataDNow',
                    last = od == 'up' ? 'moveDataULast' : 'moveDataDLast';
                classify.removeClass("moveDataULast moveDataUNow moveDataDLast moveDataDNow opacityChange delay0-5").addClass("hide");
                classify.eq(data.current).removeClass("hide").addClass(now);
                classify.eq(data.current-1).removeClass("hide").addClass(last);
                (function(classify,data){
                    setTimeout(function () {
                        classify.removeClass("moveDataULast moveDataUNow moveDataDLast moveDataDNow");
                        classify.eq(data.current-1).addClass("hide");
                        self.data.isMoving = false;
                        app.$data.flipStatus = false;
                    }, 500);
                })(classify,data);
            }
        },{
            key: "_pageMoveCompute",
            value: function _pageMoveCompute(self) {
                var od = "down",
                    now = Date.now();
                // if(now - firstTime < 3000){
                //     self.data.isMoving = false;
                //     self.data.clickStatus = false;
                //     app.$data.flipStatus = false;
                //     return;
                // }
                switch(true){  // self.data.now
                    case false:
                        self.data.last = self.data.now;
                        if (self.data.direction.y == "up") {
                            self.data.now += 1;
                        } else {
                            self.data.now -= 1;
                            od = "up";
                        }
    
                        if ( self.data.now >= self.data.pageLength) {
                            self.data.now = self.data.pageLength - 1;
                            self.data.last = self.data.now - 1;
                            self.data.isMoving = false;
                            self.data.clickStatus = false;
                            app.$data.flipStatus = false;
                            return;
                        }
                        if (self.data.now <= -1) {
                            self.data.last = 1;
                            self.data.now = 0;
                            self.data.isMoving = false;
                            self.data.clickStatus = false;
                            app.$data.flipStatus = false;
                            return;
                        }
                        self.pageMove(od, self);
                        break;
                }
            }
        }, {
            key: "_initPageMoveEvent",
            value: function _initPageMoveEvent() {
                var self = this;
                window.addEventListener('touchmove', noop, { passive: false })
                document.addEventListener("touchstart", function (ev) {
                    var touch = ev.targetTouches[0];
                    self.data.start.x = touch.clientX;
                    self.data.start.y = touch.clientY;
                },false);
                document.addEventListener("touchmove", function (ev) {
                    ev.preventDefault();
                    var touch = ev.targetTouches[0];
                    self.data.end.x = touch.clientX;
                    self.data.end.y = touch.clientY;
                },{passive:false});
                document.addEventListener("touchend", function (ev) {
                    var initdisc = 40,
                        disc = self.data.end.y == 0 ? false : Math.abs(self.data.end.y - self.data.start.y) > initdisc;
                    self.data.direction.x = self.data.end.x - self.data.start.x > initdisc ? "down" : self.data.end.x - self.data.start.x < initdisc ? "up" : "down";
                    self.data.direction.y = self.data.end.y - self.data.start.y > initdisc ? "down" : self.data.end.y - self.data.start.y < initdisc ? "up" : "down";
                    
                    if (app.$data.activePage < 2 && app.$data.pageStatus && !self.data.clickStatus && !self.data.isMoving && disc) {
                        self.data.isMoving = true;
                        if(!app.$data.flipStatus){
                            app.$data.flipStatus = true;
                            self._pageMoveCompute(self);
                        }
                    }
                    self.data.start.x = 0;
                    self.data.start.y = 0;
                    self.data.end.x = 0;
                    self.data.end.y = 0;
                    self.data.isMoving = false;
                    self.data.clickStatus = false;
                    app.$data.flipStatus = false;
                },false);
            }
        }]);
    
        return PageMove;
    }();
    
    var app = null;
    var PM = new PageMove({ animation: "move" });  
    
    Vue.config.errorHandler = function (err, vm, info) {
        console.log(err);
    }
    app = new Vue({
        el:"#app",
        data:{
            // test
            mode:mode,// "development",//"production",
            lg:"1k68",
            activePage:initialNow,
            startMoving:false,
            pageStatus:true,
            heightStatus:0,
            tempDelay:0,
            fontSize:16,
            page0:{
                status:'in',
                in:{
                    text1:"littleBottomIn duration1-0 delay0-5",
                    text2:"littleBottomIn duration1-0 delay0-7",
                    text3:"littleBottomIn duration1-0 delay0-9",
                    text4:"littleBottomIn duration1-0 delay1-1",
                    text5:"littleBottomIn duration1-0 delay1-3",
                    text6:"littleBottomIn duration1-0 delay1-5",
                    text7:"littleBottomIn duration1-0 delay1-7",
                    text8:"littleBottomIn duration1-0 delay1-9",
                    text9:"littleBottomIn duration1-0 delay2-1"
                },
                down:false,
                moveEndStatus:false,
                moveBtnStatus:true,
                firstMove:false,
                start:0,
                end:0,
                btnStyle:null,
                words:[
                    ['你','的','生','活','中'],
                    ['已','经','多','久','没','有','奇','遇'],
                    ['少','年','时','追','求','激','情'],
                    ['成','熟','后','却','迷','恋','平','庸'],
                    ['害','怕','不','确','定','的','未','来'],
                    ['年','轻','是','热','烈','，','是','追','逐'],
                    ['而','职','场','是','一','座','奇','幻','森','林'],
                    ['当','你','拥','抱','所','有','“不确定”'],
                    ['就','能','把','遇','见','变','为','奇','遇']
                ],
                style:[
                    {
                        line:[],
                        list:[]
                    },{
                        line:[],
                        list:[]
                    },{
                        line:[],
                        list:[]
                    },{  // 4
                        line:[],
                        list:[]
                    },{
                        line:[],
                        list:[]
                    },{
                        line:[],
                        list:[]
                    },{  // 7
                        line:[],
                        list:[]
                    },{
                        line:[],
                        list:[]
                    },{
                        line:[],
                        list:[]
                    },
                ]
            },
            page1:{
                status:'in',
                animated:false,
                time:{
                    x:0,
                    y:0
                },
                hidden:false,
                building:[
                    {  // 1
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' 0'}
                    },{  // 2
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-100)}
                    },{  // 3
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-180)}
                    },{  // 4
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-250)}
                    },{  // 5
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-380)}
                    },{  // 6
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-470)}
                    },{  // 7
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-520)}
                    },{  // 8
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-650)}
                    },{  // 9
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-750)}
                    },{  // 10
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-820)}
                    },{  // 11
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-880)}
                    },{  // 12
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-970)}
                    },{  // 13
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-1050)}
                    },{  // 14
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-1170)}
                    },{  // 15
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-1270)}
                    },{  // 16
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-1355)}
                    },{  // 17
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-1456)}
                    },{  // 18
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-1530)}
                    },{  // 19
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-1670)}
                    },{  // 20
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-1775)}
                    },{  // 21
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-1860)}
                    },{  // 22
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-2000)}
                    },{  // 23
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-2140)}
                    },{  // 24
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-2250)}
                    },{  // 25
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-2360)}
                    },{  // 26
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-2486)}
                    },{  // 27
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-2578)}
                    },{  // 28
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-2660)}
                    },{  // 29
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-2785)}
                    },{  // 30
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-2862)}
                    },{  // 31
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-3075)}
                    },{  // 32
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-3170)}
                    },{  // 33
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-3265)}
                    },{  // 34
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-3342)}
                    },{  // 35
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-3436)}
                    },{  // 36
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-3560)}
                    },{  // 37
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-3648)}
                    },{  // 38
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-3770)}
                    },{  // 39
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-3894)}
                    },{  // 40
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-4032)}
                    },{  // 41
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-4120)}
                    },{  // 42
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-4255)}
                    },{  // 43
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-4326)}
                    },{  // 44
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-4430)}
                    },{  // 45
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-4560)}
                    },{  // 46
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-4685)}
                    },{  // 47
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-4765)}
                    },{  // 48
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-4865)}
                    },{  // 49
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-4920)}
                    },{  // 50
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-4980)}
                    },{  // 51
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-5100)}
                    },{  // 52
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-5137)}
                    },{  // 53
                        ani:{},
                        active:{  backgroundPosition:setRem(-250)+' '+setRem(-5195)}
                    }
                ]
            },
            page2:{
                lastCard:0,
                activeCard:0,
                isMoving:false,
                nomove:false,  // 如果点击了票根就不能滑动了
                cardActive:[false,false,false],
                hidden:false,
                list:[
                    {
                        img:'images/page2-card-guest01.png',
                        title:'拉勾·奇葩之王',
                        icon:{
                            width:setRem(330),
                            height:setRem(72),
                            right:setRem(-17),
                            top:setRem(97-8),
                            backgroundPosition:'0 '+setRem(-150)
                        },
                        name:'黄执中',
                        nameStyle:{
                            paddingRight:setRem(314)
                        },
                        theme:'《世界上没有哪个方向是一定对的》',
                        imgAni:'littleBottomIn duration1-0 delay1-5',
                        infoAni:'littleBottomIn duration1-0 delay1-5'
                    },{
                        img:'images/page2-card-guest04.png',
                        title:'拉勾·超级CEO',
                        icon:{
                            width:setRem(466),
                            height:setRem(72),
                            left:0,
                            top:setRem(88+9-8-3),
                            backgroundPosition:'0 '+setRem(-230)
                        },
                        name:'许单单',
                        nameStyle:{
                            paddingLeft:setRem(396)
                        },
                        theme:'《拥抱变化，职场会有奇遇》',
                        imgAni:'littleBottomIn duration1-0 delay1-7',
                        infoAni:'littleBottomIn duration1-0 delay1-7'
                    },{
                        img:'images/page2-card-guest02.png',
                        title:'拉勾·运营之光',
                        icon:{
                            width:setRem(460),
                            height:setRem(72),
                            right:setRem(6-13),
                            top:setRem(87+9-8),
                            backgroundPosition:'0 '+setRem(-310)
                        },
                        name:'黄有璨',
                        nameStyle:{
                            paddingRight:setRem(365)
                        },
                        theme:'《如何在不确定中成就自己》',
                        imgAni:'littleBottomIn duration1-0 delay1-9',
                        infoAni:'littleBottomIn duration1-0 delay1-9'
                    },{
                        img:'images/page2-card-guest05.png',
                        title:'拉勾·心理大师',
                        icon:{
                            width:setRem(466),
                            height:setRem(72),
                            left:setRem(-1),
                            top:setRem(88),
                            backgroundPosition:'0 '+setRem(-390)
                        },
                        name:'李松蔚',
                        nameStyle:{
                            paddingLeft:setRem(335)
                        },
                        theme:'《不要让自己成为你的屏障》',
                        imgAni:'littleBottomIn duration1-0 delay2-1',
                        infoAni:'littleBottomIn duration1-0 delay2-1'
                    },{
                        img:'images/page2-card-guest03.png',
                        title:'拉勾·人才发展专家',
                        icon:{
                            width:setRem(330),
                            height:setRem(72),
                            right:setRem(7-24),
                            top:setRem(96-8),
                            backgroundPosition:'0 '+setRem(-470)
                        },
                        name:'李银飞',
                        nameStyle:{
                            paddingRight:setRem(262)
                        },
                        theme:'《如何在不确定中成就自己》',
                        imgAni:'littleBottomIn duration1-0 delay2-3',
                        infoAni:'littleBottomIn duration1-0 delay2-3'
                    }
                ],
                party:[
                    {
                        indexPosition:'0 '+setRem(-280),
                        movePosition:setRem(-630)+' '+setRem(-280),
                        info:[
                            '阿里、爱奇艺、360、京东、百度...',
                            '顶级互联网好公司齐聚，',
                            '争夺年度TOP雇主光环'
                        ]
                    },{
                        indexPosition:setRem(-210)+' '+setRem(-280),
                        movePosition:setRem(-700)+' '+setRem(-280),
                        info:[
                            '200+大厂HRD在专属区域，',
                            '期待与所有职场人面对面直聊'
                        ]
                    },{
                        indexPosition:setRem(-420)+' '+setRem(-280),
                        movePosition:setRem(-770)+' '+setRem(-280),
                        info:[
                            '2018拉勾年度TOP雇主将现身红毯，',
                            '绽放领先企业荣耀'
                        ]
                    }
                ],
                theater:[
                    {
                        pic:'images/page2-card03-img01.png'
                    },{
                        pic:'images/page2-card03-img02.png'
                    }
                ]
            },
            page3:{
                lastCard:0,
                activeCard:0,
                isMoving:false,
                nomove:false,  // 如果点击了票根就不能滑动了
                hidden:false,
                classname:'',
                list:[
                    {
                        // 奇妙办公室
                        content:[
                            {
                                title:'职场3D照相馆',
                                img:'images/page3-card-tv01.png',
                                info:'身临其境地来一场办公室大冒险。'
                            },{
                                title:'百万年薪屋',
                                img:'images/page3-card-tv02.png',
                                info:'过把富豪瘾，在满地钞票中寻找神秘大礼'
                            },{
                                title:'倒着的办公会',
                                img:'images/page3-card-tv03.png',
                                info:'奇幻世界中，show出办公室里不一样的你'
                            }
                        ],
                        title:'探秘奇幻的办公室场景',
                        detail:'为什么职场必须沉闷枯燥？放开想象，<br/>会遇见意外惊喜。拉勾帮你解锁意想不到的个性Pose，<br/>Show出办公室里不一样的你！'
                    },{ // 有情绪小卖部
                        content:[
                            {
                                title:'情绪黑室',
                                img:'images/page3-card-tv04.png',
                                info:'你可以伪装成任意角色，将那些职场上<br/>无处安放的小情绪，在这个房间里肆意宣泄！'
                            },{
                                title:'有答案诊所',
                                img:'images/page3-card-tv05.png',
                                info:'有问必答，拉勾给你行业知识和面试技巧，<br/>填满你的装备包！'
                            },{
                                title:'12星座睡床',
                                img:'images/page3-card-tv06.png',
                                info:'一个星座一张“床”，<br/>12星座睡姿大比拼！'
                            }
                        ],
                        title:'排解职场疑惑和情绪',
                        detail:'365天，1000个我们，1000种情绪；<br/>拉勾帮你遇见与自己相似的模样，<br/>给所有职场疑惑一个答案。'
                    },{ // 奇遇森林
                        content:[
                            {
                                title:'世界慢递局',
                                img:'images/page3-card-tv07.png',
                                info:'写下你的职业困惑，这封信将绕地球一圈，<br/>盖上500多个国家的邮戳，回到你身边！'
                            },{
                                title:'猫王太空唱片计划',
                                img:'images/page3-card-tv08.png',
                                info:'现场录制你的声音，将你的声音送上太空！<br/>什么加班什么焦虑，把它抛到宇宙中吧！'
                            },{
                                title:'So real VR乐园',
                                img:'images/page3-card-tv09.png',
                                info:'你可以与巨型机器人、生化尸潮、<br/>甚至是古老神灵对战。'
                            }
                        ],
                        title:'当红品牌互动试验场',
                        detail:'最当红品牌热门玩儿法，<br/>一场前沿的互动装置体验展。<br/>拉勾带你遇见未曾有过的人生实验。'
                    },{ // 奇物大赏
                        content:[
                            {
                                title:'定制可乐',
                                img:'images/page3-card-tv10.png',
                                info:'上百个可乐瓶，Pick出你的姓氏，<br/>拉勾送给你！'
                            },{
                                title:'拉勾黑市',
                                img:'images/page3-card-tv11.png',
                                info:'互联网首场艺术展，<br/>只在今晚开门，过时不候。'
                            },{
                                title:'答案茶',
                                img:'images/page3-card-tv12.png',
                                info:'你敢问，它就敢答。来喝茶的人，将职场困惑<br/>写在茶杯腰封上，奶盖上会出现问题的答案......'
                            }
                        ],
                        title:'拉勾尖货快闪店',
                        detail:'吃也要吃出观点，<br/>买也要买出态度，<br/>一年到头，遇见吃喝玩乐的正确姿势。'
                    }
                ]
            }
        },
        computed:{
            isOverHeight:function(){
                var max = 1755 + this.heightStatus;
                if(max > 1920){
                    return true;
                }
                return false;
            },
        },
        mounted:function(){
            var self = this;
            //音乐
            $('.music-icon').on('click',function(){
                if($('#music')[0].paused){
                    $('#music')[0].play();
                    $(".music-icon").removeClass('close').addClass('open');
    
                }else{
                    $('#music')[0].pause();
                    $(".music-icon").removeClass('open').addClass('close');
                }
            });
            var rightSize = parseFloat((RC.w / RC.h).toFixed(3)),
                currentSize = parseFloat((GC.w / GC.h).toFixed(3));
            if(rightSize > currentSize){
                this.heightStatus = Math.floor(RC.w / GC.w * GC.h - RC.h);
            }
            this.fontSize = parseFloat(document.documentElement.style.fontSize) || 16;
            // 设置page0文字动画
            this.initPage0Ani();
            // 设置水立方动画
            this.initPage1PartAni();
            // 给page2 的卡片添加滑动翻事件
            this.initPage2FlipEvent();
            this.initPage3FlipEvent();
            if(mode == 'development' && initialNow == 1){
                self.animated = true;
                setTimeout(function(){
                    self.updateNum();
                },5000);
            }
        },
        methods:{
            noop:function(){},
            getFitTop:function(def,ratio){
                return this.setRem(def+this.heightStatus * ratio);
            },
            setDataCount:function(count){
                return '0000'.slice((count+'').length)+count
            },
            setRem:setRem,
            getRem:function(value) {
                var fontSize = parseFloat(document.documentElement.style.fontSize) || 16;
                
                return value / (1080 / 16) * fontSize;
            },
            getDelayTime:function(start,gap,index){
                var current = (start+gap * index)+''.split(''),
                    f = '',
                    l = '';
                if(current.length == 1){
                    f = '0';
                    l = current[0];
                }else {
                    f = current[0];
                    l = current[1];
                }
                return f+'-'+l;
            },
            setPage0DownStatus:function(status){
                var self = this;
                this.page0.down = status;
                if(!self.animated){
                    self.animated = true;
                    setTimeout(function(){
                        self.updateNum();
                    },5000);
                }
            },
            initPage0Ani:function(){
                var words = this.page0.words,
                    style = { },
                    arr = [0,84,211,296,376,504,587,715,798],
                    sign = [1,-1],
                    len = 0,
                    dir = 1,
                    transition = '',
                    height = 0,
                    i = 0,
                    j = 0;
                for(i = 0; i < words.length; i++){
                    height = GC.h/this.fontSize*(1080 / 16)+400;
                    len = words[i].length;
                    for(j = 0; j < len; j++){
                        this.tempDelay = Math.floor(Math.random() * 8);
                        transition = 'all '+(40 - 4 * i) / 10+'s '+(4 * i + this.tempDelay) / 10+'s linear';
                        dir = j < len / 2 ? -1 : j > len / 2 ? 1 : 0;
                        this.page0.style[i].line.push({ 
                            transition: transition,
                            textShadow: '0 0 '+this.setRem(20)+' #fff',
                            transform: 'translate3d('+(dir * Math.floor(Math.random() * 150))+'px,'+this.setRem(height / 15 * 12  - arr[i] + 140 + 75 * 3 + 30)+',0)'
                        });
                        this.page0.style[i].list.push({
                            opacity:'0.'+(Math.floor(Math.random() * 100)),
                            transition: transition,
                            transform: 'rotate('+(Math.floor(Math.random() * 360))+'deg) '+
                                'translate3d(0,0,0)'
                        });
                    }
                }
            },
            page0TouchStart:function(e){
                var touch = e.targetTouches[0];
                if(this.page0.moveBtnStatus){
                    this.page0.moveBtnStatus = false;
                    this.page0.start = touch.clientY;
                }
            },
            page0TouchMove:function(e){
                var touch = e.targetTouches[0],
                    top = this.getRem(216+73/2),
                    gap = this.page0.start - this.page0.end;
                this.page0.end = touch.clientY;
                if(!this.page0.moveBtnStatus && this.page0.start && this.page0.end){
                    if(gap > 0){
                        this.page0.btnStyle = {
                            transform:'translate3d(0,'+(-(gap > top ? top : gap))+'px,0)'
                        };
                    }else{
                        this.page0.btnStyle = {
                            transform:'translate3d(0,0,0)'
                        };
                    }
                }
            },
            page0TouchEnd:function(e){
                var top = this.getRem(216+73/2),
                    gap = this.page0.start - this.page0.end;
                if(this.page0.start && this.page0.end){
                    if(gap > 0){
                        if(gap < top * 0.6){
                            this.page0.moveBtnStatus = true;
                            this.page0.btnStyle = null;
                        }else {
                            this.page0.btnStyle = {
                                transform:'translate3d(0,'+(-top)+'px,0)'
                            };
                            this.page0.moveEndStatus = true;
                            PM.data.last = 0;
                            PM.data.now = 1;
                            PM.pageMove('down',PM);
                            postEncodingID({
                                "data-lg-tj-id":this.lg,
                                "data-lg-tj-no":"0002" ,
                                "data-lg-tj-cid":"idnull"
                            });
                        }
                    }else{
                        this.page0.moveBtnStatus = true;
                        this.page0.btnStyle = null;
                        this.page0.btnStyle = {
                            transform:'translate3d(0,0,0)'
                        };
                    }
                }else{
                    this.page0.moveBtnStatus = true;
                    this.page0.btnStyle = null;
                }   
                this.page0.firstMove = true;
                this.page0.start = 0;
                this.page0.end = 0;
            },
            updateNum:function(){
                function animate () {
                    if (TWEEN.update()) {
                        requestAnimationFrame(animate)
                    }
                }
                this.page1.time.x = 0;
                this.page1.time.y = 0;
                new TWEEN.Tween(this.page1.time)
                    .delay(2000)
                    .to({
                        x:18,
                        y:30
                    }, 1000)
                    .start();

                animate();
            },
            initPage1PartAni:function(){
                var arr = [],
                    list = this.page1.building,
                    len = list.length,
                    index = -1,
                    igap = 0.2,
                    total = igap * (len+1),
                    i = 0;
                for(i = 0; i < len; i++){
                    arr.push(i);
                }
                for(i = 0; i < len; i++){
                    index = Math.floor(Math.random() * arr.length);
                    list[arr[index]].ani = {
                        animationDelay:(igap * (index+1))+'s',
                        animationDuration:total+'s'
                    };
                    arr.splice(index,1);
                }
            },
            getPage2CardParentClass:function(index){
                // 初始状态，直接显示
                if(index == 0 && this.page2.lastCard == 0 && this.page2.activeCard == 0){
                    
                }else if(this.page2.isMoving){
                    // 开始翻卡片
                    // 如果是向后翻
                    if(this.page2.lastCard < this.page2.activeCard){
                        if(index == this.page2.lastCard){
                            return 'cutCardParentShake';
                        }else if(index < this.page2.lastCard){
                            return 'hide';
                        }
                    }else{
                        if(index == this.page2.lastCard){
                            return 'cutCardParentShakeBack';
                        }else if(index < this.page2.lastCard){
                            return 'hide';
                        }
                    }
                }
                return '';
            },
            getPage2CardClass:function(index){
                // 初始状态，直接显示
                if(index == 0 && this.page2.lastCard == 0 && this.page2.activeCard == 0){
                    return 'active-card';
                }else if(this.page2.isMoving){
                    // 开始翻卡片
                    // 如果是向后翻
                    if(this.page2.lastCard < this.page2.activeCard){
                        if(index == this.page2.lastCard){
                            return 'cutCardLast';//'flipCardLast';
                        }else if(index == this.page2.activeCard){
                            return '';// return 'flipCardNow';
                        }
                    }else{
                        if(index == this.page2.lastCard){
                            return 'cutCardBLast';// return 'flipCardBLast';
                        }else if(index == this.page2.activeCard){
                            return 'active-card';// return 'flipCardBNow';
                        }
                    }
                }else if(index == this.page2.activeCard){
                    // 当前显示的卡片
                    return 'active-card';
                }
                return '';
            },
            getPage2CardTicketClass:function(index){
                // 初始状态，直接显示
                if(index == 0 && this.page2.lastCard == 0 && this.page2.activeCard == 0){
                    
                }else if(this.page2.isMoving){
                    // 开始翻卡片
                    // 如果是向后翻
                    if(this.page2.lastCard < this.page2.activeCard){
                        if(index == this.page2.lastCard){
                            return 'cutCardTicketShake';
                        }
                    }else{
                        if(index == this.page2.lastCard){
                            return 'cutCardTicketShakeBack';
                        }
                    }
                }
                return '';
            },
            page1ToPage2:function(){
                // setTimeout(function(){
                    PM.data.last = 1;
                    PM.data.now = 2;
                    PM.pageMove('down',PM);
                // },1000);
                var self = this,
                    one = this.$refs['page2__li--0'];
                one.className += ' hide';
                setTimeout(function(){
                    self.page1.hidden = true;
                    one.className = one.className.replace(/( hide)/g,'');
                },1000);
            },
            initPage2FlipEvent:function(){
                var elem = this.$refs['page2'],
                    self = this,
                    isMoving = false,
                    start = 0;
                elem.addEventListener('touchstart', startMove, false);
                elem.addEventListener('touchend', endMove, false);

                function startMove(e){
                    var touch = e.targetTouches[0];
                    start = touch.clientX;
                    isMoving = false;
                }
                function endMove(e){
                    if(!self.page2.nomove){
                        isMoving = true;
                        var touch = e.changedTouches[0],
                            direction = touch.clientX - start;
                        if(Math.abs(direction) > 60){
                            e.stopPropagation();
                            direction = direction > 0 ? 1 : -1;
                            if(direction > 0){
                                // back
                                self.page2CardMoveBack();
                            }else{
                                // next
                                self.page2CardMoveNext();
                            }
                        }
                    }
                }
            },
            page2CardMoveBack:function(){
                var self = this,
                    one = null;
                if(this.page2.activeCard > 0){
                    one = this.$refs['page2__one--'+(this.page2.activeCard - 1)];
                    one.className += ' hide';
                    setTimeout(function(){
                        self.page2.isMoving = true;
                        self.page2.lastCard = self.page2.activeCard;
                        self.page2.activeCard = self.page2.activeCard - 1;
                        setTimeout(function(){
                            one.className = one.className.replace(/( hide)/g,'');
                            self.page2.isMoving = false;
                        },1500);
                    },200);
                }
            },
            page2CardMoveNext:function(){
                var self = this,
                    len = 3,
                    last = len - 1,
                    one = null;
                if(this.page2.activeCard < last){
                    one = this.$refs['page2__li--'+(this.page2.activeCard + 1)];
                    one.className += ' hide';
                    setTimeout(function(){
                        self.page2.isMoving = true;
                        self.page2.lastCard = self.page2.activeCard;
                        self.page2.activeCard = self.page2.activeCard + 1;
                        // setTimeout(function(){
                        //      one.className = one.className.replace(/( hide)/g,'');
                        // },1000);
                        setTimeout(function(){
                            one.className = one.className.replace(/( hide)/g,'');
                            self.page2.isMoving = false;
                        },1000);
                    },200);
                }else if(this.page2.activeCard == last){
                    this.page2.nomove = true;
                    this.page2.isMoving = true;
                    this.page2.lastCard = this.page2.activeCard;
                    this.page2.activeCard = this.page2.activeCard + 1;
                    setTimeout(function(){
                        // one.className = one.className.replace(/( hide)/g,'');
                        self.page2.isMoving = false;
                    },1000);
                    setTimeout(function(){
                        self.toPage3();
                    },500);
                }
            },
            getPage3CardParentClass:function(index){
                // 初始状态，直接显示
                if(index == 0 && this.page3.lastCard == 0 && this.page3.activeCard == 0){
                    
                }else if(this.page3.isMoving){
                    // 开始翻卡片
                    // 如果是向后翻
                    if(this.page3.lastCard < this.page3.activeCard){
                        if(index == this.page3.lastCard){
                            return 'cutCardParentShake';
                        }else if(index < this.page3.lastCard){
                            return 'hide';
                        }
                    }else{
                        if(index == this.page3.lastCard){
                            return 'cutCardParentShakeBack';
                        }else if(index < this.page3.lastCard){
                            return 'hide';
                        }
                    }
                }
                return '';
            },
            getPage3CardClass:function(index){
                // 初始状态，直接显示
                if(index == 0 && this.page3.lastCard == 0 && this.page3.activeCard == 0){
                    return 'active-card';
                }else if(this.page3.isMoving){
                    // 开始翻卡片
                    // 如果是向后翻
                    if(this.page3.lastCard < this.page3.activeCard){
                        if(index == this.page3.lastCard){
                            return 'cutCardLast';//'flipCardLast';
                        }else if(index == this.page3.activeCard){
                            return '';// return 'flipCardNow';
                        }
                    }else{
                        if(index == this.page3.lastCard){
                            return 'cutCardBLast';// return 'flipCardBLast';
                        }else if(index == this.page3.activeCard){
                            return 'active-card';// return 'flipCardBNow';
                        }
                    }
                }else if(index == this.page3.activeCard){
                    // 当前显示的卡片
                    return 'active-card';
                }
                return '';
            },
            getPage3CardTicketClass:function(index){
                // 初始状态，直接显示
                if(index == 0 && this.page3.lastCard == 0 && this.page3.activeCard == 0){
                    
                }else if(this.page3.isMoving){
                    // 开始翻卡片
                    // 如果是向后翻
                    if(this.page3.lastCard < this.page3.activeCard){
                        if(index == this.page3.lastCard){
                            return 'cutCardTicketShake';
                        }
                    }else{
                        if(index == this.page3.lastCard){
                            return 'cutCardTicketShakeBack';
                        }
                    }
                }
                return '';
            },
            initPage3FlipEvent:function(){
                var elem = this.$refs['page3'],
                    self = this,
                    isMoving = false,
                    start = 0;
                elem.addEventListener('touchstart', startMove, false);
                elem.addEventListener('touchend', endMove, false);

                function startMove(e){
                    var touch = e.targetTouches[0];
                    start = touch.clientX;
                    isMoving = false;
                }
                function endMove(e){
                    if(!self.page3.nomove){
                        isMoving = true;
                        var touch = e.changedTouches[0],
                            direction = touch.clientX - start;
                        if(Math.abs(direction) > 60){
                            e.stopPropagation();
                            direction = direction > 0 ? 1 : -1;
                            if(direction > 0){
                                // back
                                self.page3CardMoveBack();
                            }else{
                                // next
                                self.page3CardMoveNext();
                            }
                        }
                    }
                }
            },
            page3CardMoveBack:function(){
                var self = this,
                    one = null;
                if(this.page3.activeCard > 0){
                    one = this.$refs['page3__one--'+(this.page3.activeCard - 1)];
                    one.className += ' hide';
                    setTimeout(function(){
                        self.page3.isMoving = true;
                        self.page3.lastCard = self.page3.activeCard;
                        self.page3.activeCard = self.page3.activeCard - 1;
                        setTimeout(function(){
                            one.className = one.className.replace(/( hide)/g,'');
                            self.page3.isMoving = false;
                        },1500);
                    },200);
                }
            },
            page3CardMoveNext:function(){
                var self = this,
                    len = 3,
                    last = len - 1,
                    one = null;
                if(this.page3.activeCard < last){
                    one = this.$refs['page3__one--'+(this.page3.activeCard + 1)];
                    one.className += ' hide';
                    setTimeout(function(){
                        self.page3.isMoving = true;
                        self.page3.lastCard = self.page3.activeCard;
                        self.page3.activeCard = self.page3.activeCard + 1;
                        setTimeout(function(){
                            one.className = one.className.replace(/( hide)/g,'');
                            self.page3.isMoving = false;
                        },1000);
                    },200);
                }else if(this.page3.activeCard == last){
                    this.page3.nomove = true;
                    this.page3.isMoving = true;
                    this.page3.lastCard = this.page3.activeCard;
                    this.page3.activeCard = this.page3.activeCard + 1;
                    setTimeout(function(){
                        // one.className = one.className.replace(/( hide)/g,'');
                        self.page3.isMoving = false;
                    },1000);
                    setTimeout(function(){
                        self.toPage3();
                    },500);
                }
            },
            toPage3:function(index){
                var self = this,
                    page2 = this.$refs['page2'],
                    page3 = this.$refs['page3'];
                self.page2.hidden = true;
                self.page3.hidden = true;
                setTimeout(function(){
                    self.page3.hidden = false;
                    self.page3.classname = 'pageMoveU';
                    setTimeout(function(){
                        PM.data.last = 2;
                        PM.data.now = 3;
                        self.activePage = 3;
                    },500);
                },500);
            },
            toLoginIn:function(){

            },
        }
    })
    },{}]},{},[1]);
    
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