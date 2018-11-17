(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function noop(){}
// test
var initialNow = 0,
    initialLast = 0;

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
        this._initPageMoveEvent();
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
                jQuery(".page").removeClass("pageCurrent").addClass("hide");
                jQuery(".page" + self.data.last)
                    .removeClass('movePageULast movePageUNow movePageDLast movePageDNow').attr('style','');
                jQuery(".page" + self.data.now).removeClass("movePageULast movePageUNow movePageDLast movePageDNow hide")
                    .addClass("pageCurrent");
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
        page0:{
            status:'in',
            in:{
                top:"opacityChange delay0-5",
                title:"opacityChange delay1-0",
                option0:"leftIn delay1-5",
                option2:"leftIn delay1-5",
                option1:"rightIn delay1-5",
                option3:"rightIn delay1-5",
                num:"bottomIn delay1-7",
                layer:"zoomIn",
                content:"opacityChange delay0-7",
                btext:"rotateIn2 delay1-2",
                next:"zoomIn delay1-2",
                close:"opacityChange delay1-5"
            },
            out:{
                top:"topIn-out delay0-2",
                title:"topIn-out delay0-2",
                option0:"leftIn-out delay0-2",
                option2:"leftIn-out delay0-2",
                option1:"rightIn-out delay0-2",
                option3:"rightIn-out delay0-2",
                num:"bottomIn-out delay0-2",
                layer:"zoomIn-out duration0-2",
                content:"",
                btext:"",
                next:"",
                close:""
            },
        },
        page1:{
            status:'in',
            in:{
                top:"opacityChange delay0-5",
                title:"opacityChange delay1-0",
                option0:"rightIn delay1-5 duration1-0",
                option1:"rightIn delay1-8 duration1-0",
                option2:"rightIn delay2-1 duration1-0",
                option3:"rightIn delay2-4 duration1-0",
                num:"opacityChange delay2-7"
            },
            out:{
                top:"rotate-out delay0-2",
                title:"rotate-out delay0-2",
                option0:"rotate-out delay0-2",
                option2:"rotate-out delay0-2",
                option1:"rotate-out delay0-2",
                option3:"rotate-out delay0-2",
                num:"bottomIn-out delay0-2"
            },
        },
        page2:{
            status:'in',
            in:{
                top:"rotateIn2 delay0-5",
                title:"littleBottomIn delay1-0",
                option0:"littleBottomIn delay1-5 duration1-0",
                option1:"littleBottomIn delay1-8 duration1-0",
                option2:"littleBottomIn delay2-1 duration1-0",
                option3:"littleBottomIn delay2-4 duration1-0",
                num:"opacityChange delay2-7"
            },
            out:{
                top:"topIn-out delay0-2",
                title:"topIn-out delay0-2",
                option0:"topIn-out delay0-2",
                option2:"topIn-out delay0-2",
                option1:"topIn-out delay0-2",
                option3:"topIn-out delay0-2",
                num:"topIn-out delay0-2"
            },
        },
        page3:{
            status:'in',
            in:{
                top:"zoomIn delay0-5",
                title:"opacityChange delay1-0",
                option0:"zoomIn delay1-5",
                option1:"zoomIn delay1-5",
                option2:"zoomIn delay1-5",
                option3:"zoomIn delay1-5",
                num:"opacityChange delay2-0"
            },
            out:{
                top:"zoomBig-outtop delay0-2",
                title:"zoomBig-outtop delay0-2",
                option0:"zoomBig-outleft delay0-2",
                option2:"zoomBig-outleft delay0-2",
                option1:"zoomBig-outright delay0-2",
                option3:"zoomBig-outright delay0-2",
                num:"zoomBig-outbottom delay0-2"
            },
            list:[{
                name:'MAX2018年度理想雇主',
                all:'TOP5'
            },{
                name:'MAX2018最受职场精英青睐雇主',
                all:'TOP3'
            },{
                name:'MAX2018年度影响力雇主',
                all:'TOP10'
            },{
                name:'MAX2018年度创变力雇主',
                all:'TOP5'
            },{
                name:'MAX2018年度行业顶尖雇主',
                all:'TOP3x5'
            },{
                name:'MAX2018区域顶尖雇主',
                all:'TOP3x3'
            }],
        },
        page4:{
            status:'in'
        },
        page5:{
            status:'in'
        },
        page6:{
            status:'in',
            in:{
                top:"opacityChange delay0-5",
                title:"opacityChange delay1-0",
                option0:"rotateIn delay1-5",
                option1:"rotateIn delay1-5",
                option2:"rotateIn delay1-5",
                option3:"rotateIn delay1-5",
                option4:"rotateIn delay1-5",
                num:"opacityChange delay2-0"
            },
            out:{
                top:"opacityChange-out delay0-2",
                title:"opacityChange-out delay0-2",
                option0:"opacityChange-out delay0-2",
                option2:"opacityChange-out delay0-2",
                option1:"opacityChange-out delay0-2",
                option3:"opacityChange-out delay0-2",
                option4:"opacityChange-out delay0-2",
                num:"opacityChange-out delay0-2"
            },
        },
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
    },
    mounted:function(){
        pageStatus = true;
        var rightSize = parseFloat((RC.w / RC.h).toFixed(1)),
            currentSize = parseFloat((GC.w / GC.h).toFixed(1));
        if(rightSize > currentSize){
            this.heightStatus = Math.floor(RC.w / GC.w * GC.h - RC.h);
        }
        // test 注释
        // if(this.isWeiXin()){
        //     this.getUserWeixinData()
        // }
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
    },
    methods:{
        getFitTop:function(def,ratio){
            return this.setRem(def+this.heightStatus * ratio);
        },
        setRem:function(value){
            return value / (640 / 16)+'rem';
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
        toNext:function(pindex){
            if(this.clickStatus){
                return
            }
            this.clickStatus = true
            var self = this
            this['page'+pindex].status = 'out'
            setTimeout(function(){
                self.clickStatus = false
                self['page'+pindex].status = 'in'
                self['page'+pindex].chose = false
                self.activePage = ++pindex
            },700)
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
})
},{}]},{},[1]);