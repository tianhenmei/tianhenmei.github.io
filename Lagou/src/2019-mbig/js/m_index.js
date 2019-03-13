(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function noop(){}
// test
var initialNow = 0,
    initialLast = 0,
    initialToggleMusic = false;

// 音乐
backgroundMusic(document.getElementById("music"));
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

// var bgMusic = document.getElementById("music");
// bgMusic.addEventListener('click',function(){
//     console.log('click');
//     bgMusic.load();
//     bgMusic.play();
// },false);
// var bgMusicEvent = document.createEvent("HTMLEvents");
// bgMusicEvent.initEvent('click',true,true);
// bgMusic.dispatchEvent(bgMusicEvent);


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
        // this._initPageMoveEvent();
        document.addEventListener("touchmove", function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
        },{
            passive:false
        });
    }
    
    _createClass(PageMove, [{
        key: "pageMove",
        value: function pageMove(od, self) {
            // app.$data['page'+self.data.last].status = 'out';
            if(self.data.now > self.data.last){
                jQuery(".page" + self.data.last).removeClass('movePageULast movePageUNow movePageDLast movePageDNow hide')
                    .addClass('movePageULast');
                jQuery(".page" + self.data.now).removeClass('movePageULast movePageUNow movePageDLast movePageDNow hide')
                    .addClass("movePageUNow");
            }else{
                jQuery(".page" + self.data.last).removeClass('movePageULast movePageUNow movePageDLast movePageDNow hide')
                    .addClass('movePageDLast');
                jQuery(".page" + self.data.now).removeClass('movePageULast movePageUNow movePageDLast movePageDNow hide')
                    .addClass("movePageDNow");
            }
            
            setTimeout(function(){
                jQuery(".page").removeClass("active").addClass("hide");
                jQuery(".page" + self.data.last)
                    .removeClass('movePageULast movePageUNow movePageDLast movePageDNow').attr('style','');
                jQuery(".page" + self.data.now).removeClass("movePageULast movePageUNow movePageDLast movePageDNow hide");
                app.setActiveIndex(self.data.now);
                self.data.isMoving = false;
                // app.$data['page'+self.data.now].status = 'in';
                // app.$data['page'+self.data.last].status = 'in';
            },500)
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
            var od = "down";
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
                self.data.now = 0;
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
            },{
                passive:false
            });
            document.addEventListener("touchend", function (ev) {
                var initdisc = 40,
                    disc = self.data.end.y == 0 ? false : Math.abs(self.data.end.y - self.data.start.y) > initdisc;
                self.data.direction.x = self.data.end.x - self.data.start.x > initdisc ? "down" : self.data.end.x - self.data.start.x < initdisc ? "up" : "down";
                self.data.direction.y = self.data.end.y - self.data.start.y > initdisc ? "down" : self.data.end.y - self.data.start.y < initdisc ? "up" : "down";
                if (app.$data.pageStatus && !self.data.clickStatus && !self.data.isMoving && disc) {
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
var PM = new PageMove({ animation: "move" });  
app = new Vue({
    el:"#app",
    data:{
        // test
        mode:"development",
        lg:"1bir",
        activePage:initialNow,
        pageStatus:true,
        clickStatus:false,
        heightStatus:0,
        shortHeight:0,
        moreWidth:0,
        fontSize:16,
        page0:{
            moveStatus:false,
            status:'in',
            in:'',
            out:'zoomIn-out',
        },
        answers:[],
        page1:{
            moveStatus:false,
            status:'in',
            in:'',
            out:'movePageLLast',//'cutCardParentShake',
            questionAni:'littleTopIn',
            answerAni:'opacityChange',
            answers:["A","B","C"],
            active:-1
        },
        page2:{
            moveStatus:false,
            status:'in',
            in:{
                A:"littleBottomIn delay2-5 duration1-0",
                B:"littleBottomIn delay2-8 duration1-0"
            },
            out:'movePageLLast',//'flipLeft',
            questionAni:'littleTopIn',
            answerAni:'opacityChange',
            answers:["A","B"],
            active:-1
        },
        page3:{
            moveStatus:false,
            status:'in',
            in:'',
            out:'movePageLLast',//'leftIn-out duration0-7',
            questionAni:'littleTopIn',
            answerAni:'opacityChange',
            dialogStatus:false,
            answers:["A","B","C","D"],
            active:-1
        },
        page4:{
            canvas:null,
            ctx:null,
            img:null,
            moveStatus:false,
            status:'in',
            out:'movePageLLast',//'rotateZoomOut',
            questionAni:'littleTopIn',
            answerAni:'opacityChange',
            answers:["A","B","C"],
            active:-1
        },
        page5:{
            moveStatus:false,
            status:'in',
            out:'movePageLLast',//'zoomIn-out origin-lt',
            dialogStatus:false,
            questionAni:'littleTopIn',
            answerAni:'opacityChange',
            answers:["A","B","C"],
            active:-1
        },
        page6:{
            moveStatus:false,
            status:'in',
            in:'',
            out:'movePageLLast',// topIn-out duration0-7
            questionAni:'littleTopIn',
            answerAni:'opacityChange',
            answers:["A","B","C"],
            active:-1
        },
        page7:{
            moveStatus:false,
            dialogStatus:false,
            status:'in',
            out:'movePageLLast',//'bounceOutDown',
            questionAni:'littleTopIn',
            answerAni:'opacityChange',
            answers:["A","B","C","D"],
            active:-1
        },
        page8:{
            moveStatus:false,
            status:'in',
            out:'movePageLLast', // rollOut
            questionAni:'littleTopIn',
            answerAni:'opacityChange',
            answers:["A","B"],
            active:-1
        },
        page9:{
            moveStatus:false,
            status:'in',
            out:'movePageLLast', // active
            questionAni:'littleTopIn',
            answerAni:'opacityChange',
            answers:["A","B","C"],
            active:-1
        },
        page10:{
            meat:[]
        },
        result:[
            1,  // 豪门小鲜肉
            2,  // 佛系青年
            3,  // 七年之痒
            4   // 大赢家
        ],
        lastResult:-1,
        showStatus:true
    },
    computed:{
        qrcodeUrl:function(){
            return 'https://activity.lagou.com/activity/dist/2018-autumn/m_index.html'
        },
        createCode:function(){
            return encodeURIComponent(this.qrcodeUrl)
        },
        setSaveStyle:function(){
            var height = RC.w / GC.w * GC.h - RC.h,
                width = RC.h / GC.h * GC.w - RC.w,
                temp = 0,
                scale = 0.748,
                gap = -168
            if(height < 0){
                temp = height / RC.h / 12,//Math.abs(height / RC.h / 12)
                scale += temp
                gap = gap * (1 - scale) - RC.h * (1 - scale) / 2// gap * (1 + temp * 10)
            }else if(height > 0){
                temp = height / RC.h
                scale += temp
                gap = gap * (1 - scale) - RC.h * (1 - scale) / 2
                if(scale > 1) {
                    scale = 1
                    gap = 0
                }
                if(gap > 0){
                    gap = 0
                }
            }
            return {
                transform:"scale3d("+scale+","+scale+","+scale+") translateY("+this.setRem(gap)+")",
                opacity:1
            }
        },
        getCenterTop:function(){
            return this.setRem(873 + this.heightStatus * 7/8);
        },
    },
    mounted:function(){
        pageStatus = true;
        var rightSize = parseFloat((RC.w / RC.h).toFixed(1)),
            currentSize = parseFloat((GC.w / GC.h).toFixed(1));
        this.fontSize = parseFloat(document.getElementsByTagName("html")[0].style.fontSize)
        if(rightSize > currentSize){
            this.heightStatus = Math.floor(RC.w / GC.w * GC.h - RC.h);
        }else{
            this.shortHeight = Math.floor(RC.h - RC.w / GC.w * GC.h);
            this.moreWidth = Math.floor(RC.h / GC.h * GC.w - RC.w);
        }
        // test 注释
        // if(this.isWeiXin()){
        //     this.getUserWeixinData()
        // }
        //音乐
        $('.music-icon').on('click',function(){
            initialToggleMusic = true;
            if($('#music')[0].paused){
                $('#music')[0].play();
                $(".music-icon").removeClass('close').addClass('open');

            }else{
                $('#music')[0].pause();
                $(".music-icon").removeClass('open').addClass('close');
            }
        });
    },
    methods:{
        getFitTop:function(def,ratio,max,limit){
            var n = this.heightStatus * ratio;
            n = (max && n > max ? max : n) + (limit ? limit : 0);
            return this.setRem(def+n);
        },
        getShortTop:function(def,ratio,max,limit){
            if(this.shortHeight){
                var n = this.shortHeight * ratio;
                n = (max && n > max ? max : n) + (limit ? limit : 0);
                return this.setRem(def+n);
            }
        },
        getWordsRatio:function(){
            // console.log(this.moreWidth);
            // return this.setRem(404+this.moreWidth);
        },
        getDynamicHeight:function(def,ratio,max){
            var n;
            if(this.shortHeight){
                n = this.shortHeight * ratio;
                n = def - (max && n > max ? max : n);
            }else{
                n = this.heightStatus * ratio;
                n = def + (max && n > max ? max : n);
            }
            return this.setRem(n);
        },
        setRem:function(value){
            return value / (750 / 16)+'rem';
        },
        getDelayTime:function(start,index,gap){
            var current = start + gap * index,
                s = Math.floor(current / 10),
                l = current % 10;
            if(s == 0){
                return '0-'+l;
            }
            return s + '-' + l
        },
        setDelayTime:function(start,now,index){
            var current = Math.floor(now / 10)
            return start + current
        },
        setLaterDelay:function(start,now){
            var current = Math.floor(now / 10),
                sec = now % 10
            return 'delay'+(start+current)+'-'+sec
        },
        setActiveIndex:function(index){
            this.activePage = index;
        },
        toNext:function(pindex){
            if(this.clickStatus){
                return
            }
            this.clickStatus = true
            var self = this
            this['page'+pindex].status = 'out'
            setTimeout(function(){
                self.playAudio(pindex+1);
                self['page'+pindex].moveStatus = false;
                self['page'+pindex].status = 'in'
                self['page'+pindex].chose = false
                self.clickStatus = false
                self.activePage = ++pindex
            },700)
        },
        playAudio:function(index){
            var audio = document.getElementById('q'+index),
                self = this;
            if(index == 1){
                setTimeout(function(){
                    self.startPlay(audio);
                },1000);
            }else if(index == 3){
                setTimeout(function(){
                    self.startPlay(audio);
                },2500);
            }else if(index == 10){

            }else{
                self.startPlay(audio);
            }
        },
        startPlay:function(elem){
            if (window.WeixinJSBridge) {
                WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                    elem.play();
                }, false);
            }else{
                elem.play();
            }
        },
        closeEvent:function(pindex){
            this['page'+pindex].chose = false
        },
        noop:function(){

        },
        isWeiXin:function() {
            var ua = window.navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                return true;
            } else {
                return false;
            }
        },
        retryEvent:function(){
            this.activePage = 0
            this.showStatus = true
        },
        startTest:function(){
            var bgMusic = document.getElementById("music");
            if(!initialToggleMusic && bgMusic.paused){
                bgMusic.play();
            }
            this.page0.moveStatus = true;
            this.toNext(0);
        },
        activeChooseEvent:function(pindex,index){
            var sbg = document.getElementById('q'+(pindex+1)),
                audio = document.getElementById('btn');
            sbg.pause();
            audio.play();
            if(pindex == 2 && index == 3){ // 第三题 D
                this.page3.dialogStatus = true;
            }else if(pindex == 4 && index == 1){ // 第五题 B
                this.page5.dialogStatus = true;
            }else if(pindex == 4 && index == 2){ // 第五题 C
                this.lastResult = 0;
                this.toNextPage(pindex,index);
            }else if(pindex == 6){ // 第七题
                if(this.lastResult == -1 && index < 3){
                    if(index == 0){ // A
                        this.lastResult = 3;
                    }else if(index == 1){  // B 
                        this.lastResult = 2;
                    }else if(index == 2){  // C
                        this.lastResult = 1;
                    }
                }else if(index < 3){

                }else{// 第七题 D
                    this.page7.dialogStatus = true;
                    return;
                }
                this.toNextPage(pindex,index);
            }else {
                // if(pindex == 2){  // 第二题跳入第三题
                //     this.initPage4Sweat();
                // }
                if(pindex == 8){  // 最后一题
                    var arr = [],
                        brr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
                        temp = -1,it = -1,
                        len = Math.floor(Math.random() * 4 + 4),
                        i = 0;
                    for(i = 0; i < len; i++){
                        it = Math.floor(Math.random() * brr.length);
                        temp = brr[it];
                        brr.splice(it,1);
                        arr.push(temp);
                    }
                    this.page10.meat = arr;
                }
                this.toNextPage(pindex,index);
            }
        },
        toNextPage:function(pindex,index){
            var self = this;
            this['page'+(pindex+1)].moveStatus = true;
            if(this['page'+(pindex+1)].active == -1){
                this['page'+(pindex+1)].active = index;
            }
            this.answers[index] = index;
            this.$nextTick(function(){
                self.toNext(pindex+1);
            })
        },
        question3TryAgain:function(){
            var audio = document.getElementById('q1'),
                self = this;
            setTimeout(function(){
                self.startPlay(audio);
            },1000);
            this.page1.active = -1;
            this.page2.active = -1;
            this.page3.active = -1;
            this.page3.dialogStatus = false;
            this.answers.length = 0;
            this.activePage = 1;
        },
        question5TryAgain:function(){
            this.question3TryAgain();
            this.page4.active = -1;
            this.page5.active = -1;
            this.page5.dialogStatus = false;
        },
        question7TryAgain:function(){
            this.question5TryAgain();
            this.page6.active = -1;
            this.page7.active = -1;
            this.lastResult = -1;
            this.page7.dialogStatus = false;
        },
        tryAgainEvent:function(){
            this.question7TryAgain();
            this.page8.active = -1;
            this.page9.active = -1;
            this.lastResult = -1;
        },
        initPage4Sweat:function(){
            var self = this,
                w = 148,
                h = 166;
            this.page4.canvas = document.getElementById("page4__canvas");
            this.page4.ctx = this.page4.canvas.getContext("2d");
            this.page4.canvas.width = w;
            this.page4.canvas.width = h;
            this.page4.ctx.clearRect(0,0,w,h);
            
            this.page4.img = new Image(),
            this.page4.img.onload = function(){
                self.drawSweat();
            }
            this.page4.img.src = "images/page4-person-sweat.png";
        },
        drawSweat:function(){
            var arr = [],
                brr = [],
                list = [],
                x = 0,y = 0,
                i = 0,j = 0;
            for(i = 0; i < 3; i++){
                arr.push([]);
                for(j = 0; j < 4; j++){
                    arr[i].push(false);
                }
            }
            for(i = 0; i < 3; i++){
                list.push([]);
                x = 0;
                for(j = 0; j < 4; j++){
                    x = x + Math.floor(Math.random() * 10) + (j > 0 ? 30 : 0); // x + Math.floor(Math.random() * 36) + (j > 0 ? 36 : 0);
                    y = (i == 0 ? 0 : ((brr[j] || 0) + 50)) +  Math.floor(Math.random() * 10);  // (i == 0 ? 0 : (brr[i-1] + 55)) +  Math.floor(Math.random() * 55);
                    brr[j] = y;
                    if(x < (148-36) && y < (166-55)){
                        list[i].push(new Sweat(x,y))
                    }
                }
            }
        },
        // toggleMusicEvent:function(){
        //     var icon = this.$refs['music-icon'];
        //     var music = this.$refs['music'];
        //     if(music.paused){
        //         music.play();
        //         icon.className = icon.className.replace(/( close| open)/g,'')+' open';
        //     }else{
        //         music.pause();
        //         icon.className = icon.className.replace(/( close| open)/g,'')+' close';
        //     }
        // },
    }
});

/**定义sweat */
var SWEATS = [{
    x:0,
    y:0
},{
    x:0,
    y:70
},{
    x:0,
    y:140
}]
function Sweat(x,y){
    this.type = Math.floor(Math.random() * 3);
    this.w = 36;
    this.h = 55;
    this.bgX = SWEATS[this.type].x;
    this.bgY = SWEATS[this.type].y;
    this.x = x;
    this.y = y;
    this.draw();
}
Sweat.prototype.draw = function(){
    app.page4.ctx.drawImage(app.page4.img,
        0,0,this.w,this.h,
        this.x,this.y,this.w,this.h);
};
Sweat.prototype.move = function(){
    this.y += 1;
    this.draw();
};
},{}]},{},[1]);