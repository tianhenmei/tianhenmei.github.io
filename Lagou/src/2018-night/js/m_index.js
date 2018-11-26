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
            },
            page2:{
                lastCard:0,
                activeCard:0,
                isMoving:false,

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
                        imgAni:'rightIn duration1-0 delay1-5',
                        infoAni:'leftIn duration1-0 delay1-5'
                    },{
                        img:'images/page2-card-guest02.png',
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
                        imgAni:'leftIn duration1-0 delay1-5',
                        infoAni:'rightIn duration1-0 delay1-5'
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
                        imgAni:'rightIn duration1-0 delay1-5',
                        infoAni:'leftIn duration1-0 delay1-5'
                    },{
                        img:'images/page2-card-guest02.png',
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
                        imgAni:'leftIn duration1-0 delay1-5',
                        infoAni:'rightIn duration1-0 delay1-5'
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
                        imgAni:'rightIn duration1-0 delay1-5',
                        infoAni:'leftIn duration1-0 delay1-5'
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
            // 给page2 的卡片添加滑动翻事件
            this.initPage2FlipEvent();
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
                    transition = '',
                    height = 0,
                    i = 0,
                    j = 0;
                for(i = 0; i < words.length; i++){
                    height = GC.h/this.fontSize*(1080 / 16)+400;
                    for(j = 0; j < words[i].length; j++){
                        this.tempDelay = Math.floor(Math.random() * 8);
                        transition = 'all '+(40 - 4 * i) / 10+'s '+(4 * i + this.tempDelay) / 10+'s linear';
                        this.page0.style[i].line.push({ 
                            transition: transition,
                            textShadow: '0 0 '+this.setRem(20)+' #fff',
                            transform: 'translate3d('+(sign[Math.floor(Math.random() * 2)] * Math.floor(Math.random() * 150))+'px,'+this.setRem(height - (height / 9 * 12 - height)  - arr[i] + 140 + 75 * 3 + 30)+',0)'
                        });
                        this.page0.style[i].list.push({
                            opacity:'0.'+(Math.floor(Math.random() * 100)),
                            transition: transition,
                            transform: 'rotate('+(Math.floor(Math.random() * 360))+'deg) '+
                                'translate3d(0,'+Math.floor(Math.random() * 50)+'px,0)'
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
            page1ToPage2:function(){
                // setTimeout(function(){
                    PM.data.last = 1;
                    PM.data.now = 2;
                    PM.pageMove('down',PM);
                // },1000);
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
            },
            page2CardMoveBack:function(){
                var self = this,
                    one = null;
                if(this.page2.activeCard > 0){
                    one = this.$refs['page2__one--'+(this.page2.activeCard - 1)];
                    one.className += ' hide';
                    setTimeout(function(){
                        one.className = one.className.replace(/( hide)/g,'');
                        self.page2.isMoving = true;
                        self.page2.lastCard = self.page2.activeCard;
                        self.page2.activeCard = self.page2.activeCard - 1;
                        setTimeout(function(){
                            self.page2.isMoving = false;
                        },1500);
                    },200);
                }
            },
            page2CardMoveNext:function(){
                var self = this,
                    len = 3,
                    one = null;
                if(this.page2.activeCard < len - 1){
                    one = this.$refs['page2__one--'+(this.page2.activeCard + 1)];
                    one.className += ' hide';
                    setTimeout(function(){
                        one.className = one.className.replace(/( hide)/g,'');
                        self.page2.isMoving = true;
                        self.page2.lastCard = self.page2.activeCard;
                        self.page2.activeCard = self.page2.activeCard + 1;
                        setTimeout(function(){
                            self.page2.isMoving = false;
                        },500);
                    },200);
                }
            }
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