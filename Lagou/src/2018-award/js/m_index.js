(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function noop(){}
var scrollClass = function(options) {
    this.elem = null;
    this.initHeight = 0;
    this.elemHeight = 0;
    this.ul = null;
    this.li = null;
    this.bar = null;
    this.barHeight = 0;
    this.classname = '';
    this.length = 0;
    this.one = 0;
    this.height = 0;
    this.top = 0;
    this.start = 0;
    this.end = 0;
    this.number = 0;
    this.space = 0;
    this.scale = 0;
    this.fixedHeight = true;
    // 滑到底部调用回调函数
    this.moveEndCallback = null;
    this.moveEndStatus = false;
    this.secondTimeStatus = false;
    // 滑到顶部调用回调函数
    this.moveUpCallback = null;
    this.moveUpStatus = false;
    this.secondUpTimeStatus = false;

    var self = this;
    this.init = function(options) {
        var elem = $('.' + options.classname),
            ul = elem.children('ul').length ? elem.children('ul') : elem.find('.'+options.classname+'_ul'),
            li = ul.children('li').length ? ul.children('li') : ul.find('.'+options.classname+'_li'),
            bar = elem.find('.' + options.classname + '_bar'),
            length = options.length ? options.length : li.length,
            one = length > 0 ? li.eq(0).height() : 0;

        self.initHeight = options.height;
        self.elemHeight = options.totalHeight || elem.height();
        self.classname = options.classname;
        self.elem = elem[0];
        self.ul = ul;
        self.li = li;
        self.bar = bar;
        self.length = length;
        self.one = options.one ? self.getRem(options.one) : one;
        self.height = self.one * length + parseFloat(ul.css('padding-top')) + parseFloat(ul.css('padding-bottom')) - self.getRem(self.initHeight);
        self.number = options.number;
        self.space = options.space;
        self.barHeight = self.elemHeight * self.number / self.length;
        self.scale = (self.elemHeight - self.barHeight - self.getRem(self.space) * 2) / ((self.length - self.number) * self.one);
        self.fixedHeight = options.fixedHeight == undefined ? true : !!options.fixedHeight;
        self.moveEndCallback = options.moveEndCallback || null;
        self.moveUpCallback = options.moveUpCallback || null;
        bar.css({
            height: self.barHeight + 'px'
        });

        var barParent = self.bar.parent('.' + self.classname + '_bar_bg');
        if (self.length > self.number) { // 只有列表的值太多，才会出现滚动条
            if (barParent.length > 0) {
                barParent.removeClass('search_hide');
            } else {
                self.bar.removeClass('search_hide');
            }
            self.initEvent();
            if (!self.fixedHeight) {
                elem.css({
                    'height': self.getRem(self.initHeight) + 'px'
                });
            }
        } else {
            if (barParent.length > 0) {
                barParent.addClass('search_hide');
            } else {
                self.bar.addClass('search_hide');
            }
            if (!self.fixedHeight) {
                elem.css({
                    'height': ul.height() + parseFloat(ul.css('padding-top')) + parseFloat(ul.css('padding-bottom')) + 'px'
                });
            }
            if(app.scrollData[self.classname]){
                elem[0].removeEventListener('touchstart', app.scrollData[self.classname].startScroll, false);
                elem[0].removeEventListener('touchmove', app.scrollData[self.classname].moveScroll, false);
            }
        }
    };

    this.initEvent = function() {
        var elem = $('.' + self.classname)[0];
        this.removeEvent();

        elem.addEventListener('touchstart', self.startScroll, false);
        elem.addEventListener('touchmove', self.moveScroll, false);
    };

    this.removeEvent = function(){
        var elem = $('.' + self.classname)[0];
        elem.removeEventListener('touchstart', self.startScroll, false);
        elem.removeEventListener('touchmove', self.moveScroll, false);        
    },

    this.startScroll = function(e) {
        // e.stopPropagation();
        // e.preventDefault();

        app.scrollData.isMoving = false;
        // clickTime = new Date().getTime();
        if (app.scrollData[self.classname].length > app.scrollData[self.classname].number) {
            var touch = e.targetTouches[0];
            app.scrollData[self.classname].start = touch.clientY;
            app.scrollData[self.classname].top = parseFloat(app.scrollData[self.classname].ul.css('top')) || 0;
            if(self.moveEndStatus){
                self.secondTimeStatus = true;
            }
            if(self.moveUpStatus){
                self.secondUpTimeStatus = true;
            }
        }
    };

    this.moveScroll = function(e) {
        // e.stopPropagation();
        e.preventDefault();

        if (app.scrollData[self.classname].length > app.scrollData[self.classname].number) {
            app.scrollData.isMoving = true;
            var touch = e.targetTouches[0],
                direction = touch.clientY - app.scrollData[self.classname].start;

            app.scrollData[self.classname].end = touch.clientY - app.scrollData[self.classname].start + app.scrollData[self.classname].top
            
            if(Math.abs(direction) > 60){
                e.stopPropagation();
            }
            direction = direction > 0 ? 1 : -1;
            if (direction == 1 && app.scrollData[self.classname].end >= 0) { // 向上
                self.secondTimeStatus = false;
                app.scrollData[self.classname].end = 0;
                // 移动到顶部：
                if(self.moveUpCallback){
                    if(app.scrollData[self.classname].top == 0){
                        self.moveUpStatus = false;
                        self.secondUpTimeStatus = false;
                        self.moveUpCallback();
                    }else{
                        if(!self.moveUpStatus){
                            self.moveUpStatus = true;
                        }else if(self.secondUpTimeStatus){
                            self.moveUpStatus = false;
                            self.secondUpTimeStatus = false;
                            self.moveUpCallback();
                        }
                    }
                }
            } else if (direction == -1 && app.scrollData[self.classname].end <= -app.scrollData[self.classname].height) { // 向下

                app.scrollData[self.classname].end = -app.scrollData[self.classname].height;
                // 移动到底部：
                if(self.moveEndCallback){
                    if(app.scrollData[self.classname].top == -app.scrollData[self.classname].height){
                        self.moveEndStatus = false;
                        self.secondTimeStatus = false;
                        self.moveEndCallback();
                    }else{
                        if(!self.moveEndStatus){
                            self.moveEndStatus = true;
                        }else if(self.secondTimeStatus){
                            self.moveEndStatus = false;
                            self.secondTimeStatus = false;
                            self.moveEndCallback();
                        }
                    }
                }
            }
            // console.log(-self.scale*self.end);
            app.scrollData[self.classname].bar.css({
                top: -app.scrollData[self.classname].scale * app.scrollData[self.classname].end + 'px'
            });
            app.scrollData[self.classname].ul.css({
                top: app.scrollData[self.classname].end + 'px'
            });
        }
    };

    this.setRank = function(rank) {
        rank -= 1;
        self.li.removeClass('rank-active');
        if (rank <= (self.length - 1) && rank >= 0) {
            var rankTop = (rank - 1) * self.one,
                position = rank;
            if (rank <= self.number / 2) { // 当前排行在一半以下
                // 什么也不用做
                position = 0;
            } else if (rank >= (self.length - self.number / 2)) { // 当前排行在最后一屏的一半以上
                // 定位在最后一屏
                position = self.length - self.number;

            } else {
                position = rank - Math.floor(self.number / 2);
            }
            self.li.eq(rank).addClass('rank-active');
        } else {
            position = 0;
            // rank = 0;
        }
        self.ul.css({
            top: -(position * self.one) + 'px'
        });
        self.bar.css({
            top: self.scale * (position * self.one) + 'px'
        });
    };

    this.getRem = function(value) {
        var scale = 1206 / 750,
            currentScale = GC.h / GC.w,
            fontSize = parseFloat(document.documentElement.style.fontSize) || 16 //GC.w / (10 / currentScale * scale);
        
        return value / (750 / 16) * fontSize;
        // return value / 750 * 10 * fontSize;
        // return value / 750 * document.documentElement.clientWidth;
    }

    self.init(options);
};
function setRem(value){
    return value / (750 / 16)+'rem';
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
    initialCompanyId = 0,
    initialDraw = false,
    mode = "production",// "development",//"production",
    initialText = '测试',
    initialPhone = '12345678900',
    randomIndex = Math.floor(Math.random() * 10);
var baseHost = '';
// var baseHost = 'https://www.lgstatic.com/activity-rsrc/dist/2018-award/';
// 音乐
// if(mode != "development"){
//     backgroundMusic(document.getElementById("music"));
// }
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
            if(self.data.last < self.data.now){
                app.$data['page'+self.data.last].status = 'out';
            }else {
                app.$data['page'+self.data.last].status = 'back';
            }
            setTimeout(function(){
                jQuery(".page").removeClass("pageCurrent").addClass("hide");
                jQuery(".page" + self.data.last).attr('style','');
                jQuery(".page" + self.data.now).removeClass("hide").addClass("pageCurrent");
                self.data.isMoving = false;
                app.$data.flipStatus = false;
                app.$data['page'+self.data.now].status = 'in';
                app.$data['page'+self.data.last].status = 'in';
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
            switch(true){
                case self.data.now < 1:
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
                    jQuery(".page" + self.data.last)
                        .addClass("active moveULast");
                    jQuery(".page" + self.data.now)
                        .addClass("active moveUNow");
                    setTimeout(function(){
                        jQuery(".page" + self.data.last)
                            .removeClass("active moveUNow moveULast moveDNow moveDLast");
                        jQuery(".page" + self.data.now)
                            .removeClass("moveUNow moveULast moveDNow moveDLast");
                        app.$data.activePage = self.data.now;
                    },500);
                    // self.pageMove(od, self);
                    break;
                case self.data.now == 1:
                    // $('html,body,.page1').css({
                    //     'height':'auto',
                    //     'overflow-y': 'scroll'
                    // });
                    // $('.page1').css({
                    //     'position':'relative'
                    // });
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
                if(self.data.now < 1){
                    ev.preventDefault();
                }
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

// Vue.config.errorHandler = function (err, vm, info) {
//     alert(err);
// }
app = new Vue({
    el:"#app",
    data:{
        // test
        mode:mode,// "development",//"production",
        lg:"1k66",
        activePage:initialNow,
        pageStatus:true,
        heightStatus:0,
        page0:{
            status:'in',
            in:{
                out:'outTopMoveIn duration13-0 delay0-5',
                move:'opacityChange delay1-0'
            },
            out:{
                out:'topIn-out',
                move:'topIn-out'
            },
            back:{
                out:'outTopMoveIn duration13-0 delay0-5',
                move:'opacityChange delay1-0'
            }
        },
        page1:{
            status:'in',
            in:{
                move:'bottomIn delay1-0',
                year:'littleBottomIn duration1-0 delay0-5',
                logo:'rightIn duration1-0 delay0-5',
                title:'littleBottomIn duration1-0 delay1-0',
                subtitle:'littleBottomIn duration1-0 delay1-5',
                info:'opacityChange delay1-8'
            },
            out:{
                move:'littleBottomOut',
                year:'littleBottomOut',
                logo:'littleBottomOut',
                title:'littleBottomOut',
                subtitle:'littleBottomOut',
                info:'littleBottomOut'
            },
            schedule:[
                {
                    time:'13:30-14:00',
                    name:'签到',
                    info:'',
                    line:'',
                    timePosition:'0 0',
                    namePosition:setRem(-244)+' 0',
                    classname:'page1__schedule__one--short'
                },{
                    time:'14:00 - 14:30',
                    name:'白皮书发布：',
                    info:'拉勾董事长许单单致辞·2018<br/>互联网人才白皮书发布',
                    timePosition:'0 '+setRem(-69),
                    namePosition:setRem(-244)+' '+setRem(-69),
                    infoPosition:setRem(-244)+' '+setRem(-110),
                    infoClass:'page1__schedule__info--2'
                },{
                    time:'14:30 - 14:40',
                    name:'颁奖仪式',
                    info:'2018拉勾年度区域TOP雇主奖',
                    timePosition:'0 '+setRem(-207),
                    namePosition:setRem(-244)+' '+setRem(-207),
                    infoPosition:setRem(-244)+' '+setRem(-246)
                },{
                    time:'14:40 - 15:10',
                    name:'嘉宾分享',
                    info:'面向未来的组织与人才发展变革',
                    timePosition:'0 '+setRem(-344),
                    namePosition:setRem(-244)+' '+setRem(-344),
                    infoPosition:setRem(-244)+' '+setRem(-388)
                },{
                    time:'15:10 - 15:20',
                    name:'颁奖仪式',
                    info:'2018拉勾年度区域领先TOP雇主奖',
                    timePosition:'0 '+setRem(-483),
                    namePosition:setRem(-244)+' '+setRem(-483),
                    infoPosition:setRem(-244)+' '+setRem(-526)
                },{
                    time:'15:20 - 15:50',
                    name:'拉勾招聘秘籍发布',
                    info:'拉勾城市总监解读2019招聘<br/>致胜秘籍',
                    timePosition:'0 '+setRem(-621),
                    namePosition:setRem(-244)+' '+setRem(-621),
                    infoPosition:setRem(-244)+' '+setRem(-664),
                    infoClass:'page1__schedule__info--2'
                },{
                    time:'15:50 - 16:00',
                    name:'启动仪式',
                    info:'2018拉勾年度TOP雇主颁奖<br/>盛典·全国巡回启动仪式',
                    timePosition:'0 '+setRem(-759),
                    namePosition:setRem(-244)+' '+setRem(-759),
                    infoPosition:setRem(-244)+' '+setRem(-801),
                    infoClass:'page1__schedule__info--2'
                },{
                    time:'16:00 - 16:30',
                    name:'答谢酒会',
                    info:'',
                    timePosition:'0 '+setRem(-896),
                    namePosition:setRem(-244)+' '+setRem(-896),
                    infoClass:'page1__schedule__info--2'
                }
            ],
            guest:[
                {
                    timePosition:'0 '+setRem(-480), 
                    list:[  // 0
                        {
                            src:baseHost+'images/page1-guest-default.png',
                            guestName:'张帆',
                            companyName:'迅雷集团',
                            position:'人力资源高级副总裁',
                            city:'深圳'
                        },{
                            src:baseHost+'images/page1-guest02.png',
                            guestName:'吴宇',
                            companyName:'小鹏汽车',
                            position:'人力资源总监',
                            city:'广州'
                        },{
                            src:baseHost+'images/page1-guest04.png',
                            guestName:'Terry Luo',
                            companyName:'阅文集团',
                            position:'招聘及员工关系总监',
                            city:'上海'
                        }
                    ]
                },{
                    timePosition:'0 '+setRem(-480-50), 
                    list:[ // 3
                        {
                            src:baseHost+'images/page1-guest03.png',
                            guestName:'Eva Gong',
                            companyName:'Shopee',
                            position:'人力资源负责人',
                            city:'深圳'
                        },{
                            src:baseHost+'images/page1-guest05.png',
                            guestName:'张丽俊',
                            companyName:'创业酵母',
                            position:'创始人',
                            city:'杭州'
                        },{
                            src:baseHost+'images/page1-guest06.png',
                            guestName:'麦老师',
                            companyName:'500强外企',
                            position:'人力资源副总裁',
                            city:'上海'
                        }
                    ]
                },{
                    timePosition:'0 '+setRem(-480-50*2), 
                    list:[ // 6
                        {
                            src:baseHost+'images/page1-guest-default.png',
                            guestName:'庄黎',
                            companyName:'HRPC创始人',
                            position:''
                        },{
                            src:baseHost+'images/page1-guest-default.png',
                            guestName:'更多嘉宾',
                            companyName:'敬请期待',
                            position:''
                        }
                    ]
                }
            ],
            partner:[
                baseHost+'images/partner-01.png',
                baseHost+'images/partner-02.png',
                baseHost+'images/partner-03.png',
                baseHost+'images/partner-04.png',
                baseHost+'images/partner-05.png',

                baseHost+'images/partner-06.png',
                baseHost+'images/partner-07.png',
                baseHost+'images/partner-08.png',
                baseHost+'images/partner-09.png',
                baseHost+'images/partner-10.png',

                baseHost+'images/partner-11.png',
                baseHost+'images/partner-12.png',
                baseHost+'images/partner-13.png',
                baseHost+'images/partner-14.png',
                baseHost+'images/partner-15.png',

                baseHost+'images/partner-16.png',
                baseHost+'images/partner-17.png',
                baseHost+'images/partner-18.png',
                baseHost+'images/partner-19.png',
                baseHost+'images/partner-20.png'
            ],
            showStatus:true,
            moveStatus:true,
            signupStatus:false,
            signup:{
                templateId:'5bee5ac4e4b030768a24ca84',
                companyId:initialCompanyId,
                company:'',
                user:initialText,
                position:initialText,
                phone:initialPhone,
                city:'shanghai'
            },
            signupList:[],
            signupSearchStatus:false,
            waitingRequest:0,
            signupRequestStatus:false,
            signupFromOther:false,
            tipsStatus:false,
            successTips:'报名成功！',
            tab:[
                {
                    elem:'page1__schedule__content',
                    parent:['page1__schedule'],
                    height:1074,
                    top:1207,
                    active:false
                },{
                    elem:'page1__guest',
                    height:1637,
                    top:2400-128,
                    active:false
                },{
                    elem:'page1__partner',
                    height:861,
                    top:4046-128,
                    active:false
                }
            ],
            cityCN:'11.21上海',
            citySelected:0,
            cityStatus:false,
            cityArr:[
                {
                    cn:'11.21上海',
                    en:'shanghai',
                    templateId:'5bee5ac4e4b030768a24ca84'
                },{
                    cn:'11.23杭州',
                    en:'hangzhou',
                    templateId:'5bee5cc5e4b030768a24cb1b'
                },{
                    cn:'11.27深圳',
                    en:'shenzhen',
                    templateId:'5bee5d08e4b030768a24cb4a'
                },{
                    cn:'11.29广州',
                    en:'guangzhou',
                    templateId:'5bee5c7de4b030768a24caea'
                },{
                    cn:'11.29成都',
                    en:'chengdu',
                    templateId:'5bee5ad1e4b030768a24ca85'
                },{
                    cn:'12.21北京',
                    en:'beijing',
                    templateId:'5bee67a4e4b030768a24cbcf'
                }
            ],
            companyTips:'',  // * 请输入公司简称
            userTips:'',
            positionTips:'',
            phoneTips:'',  // * 请输入正确的电话格式
            cityTips:''
        },
        page2:{
            status:'in',
            rankActive:0,
            rankLastActive:0,
            rankActiveIndex:0,//:-1,
            rankSubActive:-1,
            rankListStatus:true,
            showSubListStatus:false
            
        },
        rankActive:0,
        rankLastActive:0,
        rankActiveIndex:0,//-1,
        rankListStatus:true,
        rankData:[],
        rank:[
            {  // 综合类
                list:[
                    {
                        text:'2018拉勾年度<span class="green">年度top雇主</span>TOP雇主奖',
                        classify:'xrgz', //'NDTGZ',
                        data:null
                    },{
                        text:'2018拉勾年度<span class="green">新锐top雇主</span>TOP雇主奖',
                        classify:'zjgz', //'XRTGZ',
                        data:null
                    },
                ],
                classify:'ZHL',
                data:null
            },{  // 行业类
                classify:'HYL',
                list:[
                    {
                        text:'2018拉勾年度<span class="green">电商领域</span>TOP雇主',
                        classify:'dsly', //'SALY',
                        data:null
                    },{
                        text:'2018拉勾年度<span class="green">生活服务</span>领域TOP雇主',
                        classify:'shfw', //'SHFW',
                        data:null
                    },{
                        text:'2018拉勾年度<span class="green">游戏</span>领域TOP雇主',
                        classify:'yx', //'YX',
                        data:null
                    },{
                        text:'2018拉勾年度<span class="green">金融</span>领域TOP雇主',
                        classify:'jy', //'JY',
                        data:null
                    },{
                        text:'2018拉勾年度<span class="green">知识付费</span>领域TOP雇主',
                        classify:'zsff', //'ZSFF',
                        data:null
                    },{
                        text:'2018拉勾年度<span class="green">教育</span>领域TOP雇主',
                        classify:'jyu', //'JYU',
                        data:null
                    },{
                        text:'2018拉勾年度<span class="green">文娱</span>领域TOP雇主',
                        classify:'wy', //'WY',
                        data:null
                    },{
                        text:'2018拉勾年度<span class="green">新媒体</span>领域TOP雇主',
                        classify:'xmt', //'XMT',
                        data:null
                    },{
                        text:'2018拉勾年度<span class="green">社交</span>领域TOP雇主',
                        classify:'sj', //'SJ',
                        data:null
                    },{
                        text:'2018拉勾年度<span class="green">硬件</span>领域TOP雇主',
                        classify:'yj', //'YJ',
                        data:null
                    },{
                        text:'2018拉勾年度<span class="green">企业服务</span>领域TOP雇主',
                        classify:'qyfw', //'QYFW',
                        data:null
                    },{
                        text:'2018拉勾年度<span class="green">人工智能（AI）</span>领域TOP雇主',
                        classify:'rgzn', //'RGZN',
                        data:null
                    },{
                        text:'2018拉勾年度<span class="green">全球化</span>领域TOP雇主',
                        classify:'qqh', //'QQH',
                        data:null
                    },{
                        text:'2018拉勾年度<span class="green">其他</span>领域TOP雇主',
                        classify:'other', //'OTHER',
                        data:null
                    }
                ]
            },{  // 区域类
                classify:'QUL',
                list:[
                    {
                        text:'2018拉勾年度<span class="green">华北区</span>TOP雇主奖',
                        classify:'hb', //'HB',
                        data:null
                    },{
                        text:'2018拉勾年度<span class="green">华东区</span>TOP雇主奖',
                        classify:'hd', //'HD',
                        data:null
                    },{
                        text:'2018拉勾年度<span class="green">华南区</span>TOP雇主奖',
                        classify:'hn', //'HN',
                        data:null
                    }
                ]
            }
        ],
        searchLayerStatus:false,
        // 搜索
        search_name:'',
        search_tips:'',
        searchStatus:false,
        search_list:[
            {
                "id": 147,
                "logo": "i/image/M00/76/40/Cgp3O1g1TNOAB2yxAAA9bQUyc4g814.png",
                "companyshortname": "拉勾网",
                "companyname": "北京拉勾网络技术有限公司",
                "city": "北京"
            },{
                "id": 176091,
                "logo": "i/image/M00/0A/D7/CgpEMljfTp-ATpS5AAAP7lpK4Ns933.jpg",
                "companyshortname": "拉勾成长平台",
                "companyname": "拉勾成长平台",
                "city": "北京"
            },{
                "id": 223516,
                "logo": "i/image3/M00/21/9B/CgpOIFqT4y6AIAZpAAA3LysEOlk186.png",
                "companyshortname": "小手拉勾",
                "companyname": "苏州小手拉勾健康管理有限公司",
                "city": "上海"
            },{
                "id": 116998,
                "logo": "i/image/M00/0A/BF/Cgp3O1bVAoCASE4AAAAUkbnqqw4447.jpg",
                "companyshortname": "拉拉勾旅游网",
                "companyname": "上海拉拉勾电子商务有限公司",
                "city": "上海"
            },{
                "id": 191640,
                "logo": "i/image/M00/10/57/CgpEMljrG_OAAm65AADO36PujvQ946.png",
                "companyshortname": "移动互联网教育平台",
                "companyname": "深圳拉拉勾科技有限公司",
                "city": "深圳"
            },{
                "id": 223516,
                "logo": "i/image3/M00/21/9B/CgpOIFqT4y6AIAZpAAA3LysEOlk186.png",
                "companyshortname": "小手拉勾",
                "companyname": "苏州小手拉勾健康管理有限公司",
                "city": "上海"
            },{
                "id": 116998,
                "logo": "i/image/M00/0A/BF/Cgp3O1bVAoCASE4AAAAUkbnqqw4447.jpg",
                "companyshortname": "拉拉勾旅游网",
                "companyname": "上海拉拉勾电子商务有限公司",
                "city": "上海"
            },{
                "id": 191640,
                "logo": "i/image/M00/10/57/CgpEMljrG_OAAm65AADO36PujvQ946.png",
                "companyshortname": "移动互联网教育平台",
                "companyname": "深圳拉拉勾科技有限公司",
                "city": "深圳"
            }
        ],
        // 搜索后展示列表，用户选择
        selectedId:'',
        selected:{
            "id": 1575,
            "financestage": "B轮",
            "logo": "i/image/M00/21/3E/CgpFT1kVdzeAJNbUAABJB7x9sm8374.png",
            "companyname": "百度在线网络技术（北京）有限公司",
            "companyshortname": "百度",
            "companyfeatures": "用科技让复杂的世界更简单",
            "city": "北京",
            "createtime": "Oct 13, 2013 3:49:33 PM",
            "isenable": 1,
            "approve": 2,
            "companysize": "2000人以上",
            "industryfield": "移动互联网,数据服务",
            "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
            "customerlabel": "2787",
            "approvemanid": 3634,
            "approvemanemail": "yelin@baidu.com",
            "createmanid": 10747,
            "createmanemail": "zhubaining@baidu.com",
            "companylng": "116.2956171",
            "companylat": "40.04873954",
            "companyaddress": "百度大厦",
            "displayContactNum": 20
        },
        selecting:null,
        selectedStatus:0,
        noneSelected:false,
        companyList:null,
        showSignupStatus:false,  // 未报名提示
        signupFromOther:false,
        dragVoteStatus:false,
        selectedData:{
            "id": 133644,
            "financestage": "不需要融资",
            "logo": "i/image/M00/2F/0B/CgpEMlkvdRaAEh8cAABAH22jc5U052.gif",
            "companyname": "百度在线网络技术（北京）有限公司",
            "companyshortname": "GYENNO",
            "companyfeatures": "用科技让复杂的世界更简单",
            "city": "北京",
            "createtime": "Oct 13, 2013 3:49:33 PM",
            "isenable": 1,
            "approve": 2,
            "companysize": "2000人以上",
            "industryfield": "移动互联网,数据服务",
            "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
            "customerlabel": "2787",
            "approvemanid": 3634,
            "approvemanemail": "yelin@baidu.com",
            "createmanid": 10747,
            "createmanemail": "zhubaining@baidu.com",
            "companylng": "116.2956171",
            "companylat": "40.04873954",
            "companyaddress": "百度大厦",
            "displayContactNum": 20,
            voteList:[{
                rank:123,
                voteNum:8899
            },{
                rank:1,
                voteNum:10999
            },{
                rank:33,
                voteNum:90
            }]
        },
        createStatus:false,
        canvas:null,
        ctx:null,
        down:0,
        url:'',
        loadingArray:[
            // "images/create-bg.png"
            "images/canvas-bg.png",
            "images/canvas-dot1.png",
            "images/canvas-dot2.png",
            "images/canvas-grotesque.png",
            "images/canvas-title.png",
            "images/canvas-2018.png",
            "images/canvas-text.png",  // 6
            "images/canvas-bottom.png",  // 7
            "images/canvas-ercode.png",  // 8
            "images/canvas-city1.png",  // 9
            "images/canvas-city2.png",
            "images/canvas-city3.png",
            "images/canvas-city4.png",
            "images/canvas-city5.png",
            "images/canvas-city6.png"   // 14
        ],
        shareArr:[{
            w:543,
            h:237
        },{
            w:423,
            h:238
        },{
            w:562,
            h:236
        },{
            w:423,
            h:233
        },{
            w:479,
            h:236
        },{
            w:514,
            h:233
        },{
            w:530,
            h:237
        },{
            w:542,
            h:236
        },{
            w:561,
            h:231
        },{
            w:529,
            h:234
        }],
        loadedImgs:[],
        loadedImgs2:[],
        loaded:0,
        drawStatus:initialDraw,
        createUserStyle:{

        },
        // 滑动
        isMoving:false,
        scrollData:{
            'search_list': {},
            'rank-center': {},
            'page2__rank--item':{},
            'page1__signup--search':{},
            confirmCompany: false, // 是否选择公司
            requestCompany: '', // 当前请求公司的搜索值
            company: {},
            isMoving: false,
            companyID: 0,
            currentCompany: {}
        },
        rankList:[
            {
                companyId:147,
                logo:"i/image/M00/10/57/CgpEMljrG_OAAm65AADO36PujvQ946.png",
                companyName:"背景拉勾网络科技有限公司",
                companyShortName:"拉勾网",
                voteNum:1235468
            },{
                companyId:147,
                logo:"i/image/M00/0A/BF/Cgp3O1bVAoCASE4AAAAUkbnqqw4447.jpg",
                companyName:"背景拉勾网络科技有限公司",
                companyShortName:"拉勾网",
                voteNum:567890
            },{
                companyId:147,
                logo:"i/image/M00/10/57/CgpEMljrG_OAAm65AADO36PujvQ946.png",
                companyName:"背景拉勾网络科技有限公司",
                companyShortName:"拉勾网",
                voteNum:1235468
            },{
                companyId:147,
                logo:"i/image/M00/0A/BF/Cgp3O1bVAoCASE4AAAAUkbnqqw4447.jpg",
                companyName:"背景拉勾网络科技有限公司",
                companyShortName:"拉勾网",
                voteNum:567890
            },{
                companyId:147,
                logo:"i/image/M00/10/57/CgpEMljrG_OAAm65AADO36PujvQ946.png",
                companyName:"背景拉勾网络科技有限公司",
                companyShortName:"拉勾网",
                voteNum:1235468
            },{
                companyId:147,
                logo:"i/image/M00/0A/BF/Cgp3O1bVAoCASE4AAAAUkbnqqw4447.jpg",
                companyName:"背景拉勾网络科技有限公司",
                companyShortName:"拉勾网",
                voteNum:56789
            },{
                companyId:147,
                logo:"i/image/M00/10/57/CgpEMljrG_OAAm65AADO36PujvQ946.png",
                companyName:"背景拉勾网络科技有限公司",
                companyShortName:"背景拉勾网络科技有限公司",
                voteNum:1235468
            },{
                companyId:147,
                logo:"i/image/M00/0A/BF/Cgp3O1bVAoCASE4AAAAUkbnqqw4447.jpg",
                companyName:"背景拉勾网络科技有限公司",
                companyShortName:"拉勾网",
                voteNum:567890
            },{
                companyId:147,
                logo:"i/image/M00/10/57/CgpEMljrG_OAAm65AADO36PujvQ946.png",
                companyName:"背景拉勾网络科技有限公司",
                companyShortName:"拉勾网",
                voteNum:1235468
            },{
                companyId:147,
                logo:"i/image/M00/0A/BF/Cgp3O1bVAoCASE4AAAAUkbnqqw4447.jpg",
                companyName:"背景拉勾网络科技有限公司",
                companyShortName:"拉勾网",
                voteNum:567890
            },{
                companyId:147,
                logo:"i/image/M00/10/57/CgpEMljrG_OAAm65AADO36PujvQ946.png",
                companyName:"背景拉勾网络科技有限公司",
                companyShortName:"拉勾网",
                voteNum:1235468
            },{
                companyId:147,
                logo:"i/image/M00/0A/BF/Cgp3O1bVAoCASE4AAAAUkbnqqw4447.jpg",
                companyName:"背景拉勾网络科技有限公司",
                companyShortName:"拉勾网",
                voteNum:567890
            },{
                companyId:147,
                logo:"i/image/M00/10/57/CgpEMljrG_OAAm65AADO36PujvQ946.png",
                companyName:"背景拉勾网络科技有限公司",
                companyShortName:"拉勾网",
                voteNum:1235468
            },{
                companyId:147,
                logo:"i/image/M00/0A/BF/Cgp3O1bVAoCASE4AAAAUkbnqqw4447.jpg",
                companyName:"背景拉勾网络科技有限公司",
                companyShortName:"拉勾网",
                voteNum:56789
            },{
                companyId:147,
                logo:"i/image/M00/10/57/CgpEMljrG_OAAm65AADO36PujvQ946.png",
                companyName:"背景拉勾网络科技有限公司",
                companyShortName:"背景拉勾网络科技有限公司",
                voteNum:1235468
            },{
                companyId:147,
                logo:"i/image/M00/0A/BF/Cgp3O1bVAoCASE4AAAAUkbnqqw4447.jpg",
                companyName:"背景拉勾网络科技有限公司",
                companyShortName:"拉勾网",
                voteNum:567890
            }
        ]
    },
    computed:{
        getPage2CloseTop:function(){
            return this.setRem(1060+this.heightStatus);
        },
        getPage2RankHeight:function(){
            var height = 746
            if(!this.getRankSubType){
                height = 890;
            }
            return this.setRem(height+this.heightStatus);
        },
        getSelfRanking:function(){
            return undefined
        },
        getRankSubType:function(){
            return false;
        },
    },
    mounted:function(){
        this.selectedId = getQueryString('selected') || '';
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
        if(this.selectedId){
            // 扫码进入页面
            this.initDragVote();
            this.getUserVoteStatus();
            this.getCompanyInfo(true);
            this.activePage = 3;
            PM.data.now = 3;
            PM.data.last = 2;
            this.page3.showVote = true;
            this.page3.scanStatus = true;
            this.searchLayerStatus = true;
        }
        this.initCreateUserStyle();
        this.initPage1MoveEvent();
        // test
        // if(this.isWeiXin()){
        //     this.getUserWeixinData()
        // }
        var rightSize = parseFloat((RC.w / RC.h).toFixed(1)),
            currentSize = parseFloat((GC.w / GC.h).toFixed(1));
        if(rightSize > currentSize){
            this.heightStatus = Math.floor(RC.w / GC.w * GC.h - RC.h);
        }
        // test
        // if(mode !== 'production' && initialDraw){
            this.initCanvas();
        // }
    },
    methods:{
        noop:function(){},
        getFitTop:function(def,ratio){
            return this.setRem(def+this.heightStatus * ratio);
        },
        getRankLast:function(index){
            return index == this.rankData.length - 1;
        },
        setDataCount:function(count){
            return '0000'.slice((count+'').length)+count
        },
        initCreateUserStyle:function(){
            // this.createUserStyle
            var height = RC.w / GC.w * GC.h - RC.h,
                offset = height > 0 ? height / 3 : 0
            this.createUserStyle = {
                top:this.setRem(385+offset)
            }
        },
        setRem:setRem,
        getRem:function(value) {
            var fontSize = parseFloat(document.documentElement.style.fontSize) || 16;
            
            return value / (750 / 16) * fontSize;
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
        // 介绍左右滑动
        touchstartEvent:function(e){
            var touch = e.targetTouches[0];
            this.page2.start.x = touch.clientX;
            this.page2.start.y = touch.clientY;
        },
        touchmoveEvent:function(e){
            var touch = e.targetTouches[0];
            this.page2.end.x = touch.clientX;
            this.page2.end.y = touch.clientY;
        },
        touchendEvent:function(e){
            var x1 = this.page2.start.x,
                x2 = this.page2.end.x;
            if(x1 && x2){
                if(x1 - x2 > 40){
                    // 左
                    this.page2InfoNext();
                }else if(x1 - x2 < -40){
                    // 右
                    this.page2InfoPrev();
                }
            }
            this.page2.start.x = 0;
            this.page2.start.y = 0;
            this.page2.end.x = 0;
            this.page2.end.y = 0;
        },
        page2InfoNext:function(){
            this.page2.dirActive++;
            if(this.page2.dirActive < this.page2.dir.length){
                this.page2.dirClass = 'page2CenterNext'+this.page2.dirActive;
            }else {
                this.page2.dirActive = this.page2.dir.length - 1;
            }
        },
        page2InfoPrev:function(){
            this.page2.dirActive--;
            if(this.page2.dirActive >= 0){
                this.page2.dirClass = 'page2CenterPrev'+this.page2.dirActive;
            }else {
                this.page2.dirActive = 0;
            }
        },
        page2CloseEvent:function(){
            this.page2.dirStatus = false;
            this.page2.rankStatus = false;
            this.page2.signupStatus = false;
        },
        signupCloseEvent:function(){
            // if(this.signupFromOther){
            //     this.signupFromOther = false;
            //     this.showSearchPageEvent();
            // }
            this.page1.signupStatus = false;
        },
        showPage2InfoEvent:function(index){
            this.page2.dirActive = index;
            this.page2.dirClass = 'page2CenterLeft'+index;
            this.page2.dirStatus = true;
        },
        showPage2RankEvent:function(){
            this.page2.rankStatus = true;
            this.page2.rankActive = 0;
            this.page2.rankLastActive = 0;
            this.page2.rankActiveIndex = 0; //-1;
            this.page2.rankSubActive = -1;
            this.page2.rankListStatus = true;
            this.getRankList(0,this.rank[0].classify,-1,this.page2);
        },
        showPage2SearchRankEvent:function(){
            this.showSearchPageEvent();
        },
        page2RankTabEvent:function(index,classify,iindex){
            var rank = this.rank[index],
                status = true;
            // 点击顶部导航
            if(iindex == -1){
                this.page2.rankActiveIndex = iindex;
                if(this.page2.showSubListStatus){
                    this.page2.showSubListStatus = false;
                }else{
                    this.page2.showSubListStatus = true;
                }
                // 如果当前点击的导航跟上次一样
                if(index == this.page2.rankActive){
                    // 有子导航
                    if(rank.list){
                         // 如果还未打开导航，打开
                        if(this.page2.rankSubActive == -1){
                            this.page2.rankListStatus = true;
                            this.page2.rankSubActive = index;
                            this.page2.rankLastActive = this.page2.rankActive;
                        }else{
                            // 如果已经打开子导航，则关闭
                            this.page2.rankSubActive = -1;
                            this.page2.rankListStatus = false;
                            this.page2.rankActive = this.page2.rankLastActive;
                        }
                    }else{
                        this.page2.rankActive = index;
                    }
                }else{
                    if(rank.list){
                        this.page2.rankSubActive = index;
                        if(this.page2.rankListStatus){ 
                            // false, 已展开
                            
                        }else{
                            this.page2.rankLastActive = this.page2.rankActive;
                        }
                    }else{
                        this.page2.rankSubActive = -1;
                        this.page2.rankLastActive = index;
                    }
                    this.page2.rankListStatus = true;
                    this.page2.rankActive = index;
                    if(!rank.list){
                        if(rank.data){
                            this.rankData = rank.data;
                            this.setRankList();
                        }else{
                            this.getRankList(index,classify,iindex,this.page2);
                        }   
                    }
                }
            }else {
                this.page2.showSubListStatus = false;
                this.page2.rankSubActive = -1;
                this.page2.rankActiveIndex = iindex;
                this.page2.rankActive = index;
                this.page2.rankLastActive = index;
                this.page2.rankListStatus = false;
                if(rank.list[iindex].data){
                    this.rankData = rank.list[iindex].data;
                    this.setRankList();
                }else{
                    this.getRankList(index,classify,iindex,this.page2);
                }
            }
        },
        setRankList:function(){
            var iheight = 746;
            if(!this.getRankSubType){
                iheight = 890;
            }
            var height = iheight+this.heightStatus,
                length = this.rankData.length;
            if(this.getSelfRanking < length){
                length--;
            }
            // page2
            var classname = 'page2__rank--item',
                elem = $('.'+classname),
                bar = elem.find('.' + classname + '_bar'),
                num = height / 146;
            elem.children('ul,.'+classname+'_ul').css('top','0');
            bar.css('top','0');

            if(this.rankData.length > num){
                bar.show();
                this.scrollData['page2__rank--item'] = new scrollClass({
                    classname: 'page2__rank--item',
                    height: height,
                    totalHeight:this.getRem(height),
                    length:length,
                    one: 146,
                    space: 0,
                    number: num
                });
            }else{
                var scrollObj = this.scrollData['page2__rank--item']
                bar.hide();
                if(scrollObj && scrollObj.removeEvent){
                    scrollObj.removeEvent();
                }
                this.scrollData['page2__rank--item'] = {};
            }
        },
        getCompanyLogo:function(logo){
            var url = logo;
            if(logo != undefined){
                if(logo.indexOf('http') == -1){
                    if(logo.indexOf('i/image/') != -1 || logo.indexOf('image1/') != -1 || logo.indexOf('image2/') != -1){
                        url = 'https://www.lgstatic.com/thumbnail_200x200/'+logo;
                    }else{
                        url = 'https://www.lgstatic.com/'+logo;
                    }
                }else{
                    url = ''+logo;
                }
            }
            return url;
        },
        showSignupEvent:function(){
            this.page1.signupStatus = true;
            // var self = this;
            // this.page2.status = 'out';
            // PM.data.last = 2;
            // PM.data.now = 3;
            // setTimeout(function(){
            //     jQuery(".page").removeClass("pageCurrent").addClass("hide");
            //     jQuery(".page" + PM.data.last).attr('style','');
            //     jQuery(".page" + PM.data.now).removeClass("hide").addClass("pageCurrent");
            //     PM.data.isMoving = false;
            //     self['page'+PM.data.now].status = 'in';
            //     self['page'+PM.data.last].status = 'in';
            //     self.activePage = 3;
            // },500);
        },
        // 报名
        checkNullEvent:function(key,cn){
            if(!this.page1.signup[key].trim()){
                this.page1[key+'Tips'] = '* 请输入'+cn;
                return false;
            }else{
                this.page1[key+'Tips'] = '';
                return true;
            }
        },
        checkPhoneEvent:function(key){
            var value = this.page1.signup[key],
                isValidPhone = /^1[\d]{10}$/g.test(this.page1.signup[key]);
            if(!isValidPhone) {
                this.page1[key+'Tips'] = '* 请输入正确的电话格式';
                return false;
            }else{
                this.page1[key+'Tips'] = '';
                return true;
            }
        },
        showChooseLayer:function(){
            if(this.page1.cityStatus){
                this.page1.cityStatus = false;
            }else{
                this.page1.cityStatus = true;
            }
        },
        chooseCityEvent:function(en,cn,one,index){
            this.page1.cityStatus = false;
            this.page1.signup.city = en;
            this.page1.cityCN = cn;
            this.page1.signup.templateId = one.templateId;
            this.page1.citySelected = index;
        },
        signupEvent:function(){
            var status = true;
            if(!this.checkNullEvent('company','公司名称')){
                status = false;
            }
            if(!this.checkNullEvent('user','姓名')){
                status = false;
            }
            if(!this.checkNullEvent('position','职位')){
                status = false;
            }
            if(!this.checkNullEvent('city','城市')){
                status = false;
            }
            if(!this.checkPhoneEvent('phone')){
                status = false;
            }

            if(status){
                // 信息填写完成
                this.sendSighup();
            }
        },
        // 报名接口（已对）
        sendSighup:function(){
            if(this.mode == "development"){
                this.showSuccessPage();
            }else{
                var self = this,
                    signup = this.page1.signup;
                self.selectedId = signup.companyId;
                $.ajax({
                    type: 'get',
                    url: 'https://activity.lagou.com/activityapi/common/signUp.json',
                    data:{
                        type:signup.templateId,
                        name:signup.user,
                        companyName:signup.company,
                        city:this.page1.cityCN,//signup.city,
                        positionName:signup.position,
                        contact:signup.phone,
                        extend1:signup.companyId
                    },
                    success: function(result) {
                        if (result.success) {
                            self.showSuccessPage();
                        }else if(result.state == 300){
                            alert(result.message);
                        }
                    },
                    error: function(xhr, type) {
                        alert('网络原因请重新尝试!');
                    }
                });
            }
        },
        showSuccessPage:function(){
            var self = this;
            PM.data.last = 1;
            PM.data.now = 2;
            this.page1.signupStatus = false;
            this.page1.tipsStatus = true;
            this.page1.successTips = '报名成功！(2)';
            this.drawStatus = true;
            if(this.loaded == this.loadingArray.length){
                this.startDraw();
            }
            setTimeout(function(){
                self.page1.successTips = '报名成功！(1)';
                setTimeout(function(){
                    self.page1.successTips = '报名成功！';
                    self.page1.tipsStatus = false;
                    self.page1.status = 'out';
                    // setTimeout(function(){
                        $('html,body,.page1').css({
                            'height':'100%',
                            'overflow': 'hidden'
                        });
                        // jQuery(".page").removeClass("pageCurrent").addClass("hide");
                        // jQuery(".page" + PM.data.last).attr('style','');
                        // jQuery(".page" + PM.data.now).removeClass("hide").addClass("pageCurrent");
                        PM.data.isMoving = false;
                        self['page'+PM.data.now].status = 'in';
                        self['page'+PM.data.last].status = 'in';
                        self.activePage = 2;
                    // },500);
                },1000);
            },1000);
        },
        showPage3VoteEvent:function(){
            this.initDragVote();
            this.drawStatus = true;
            if(this.loaded == this.loadingArray.length){
                this.startDraw();
            }
        },
        createCanvasImg:function(){
            this.page3.createStatus = true;
            $('.music-box').hide();
        },
        goToPage3VoteEvent:function(){
            if(this.companyList){
                this.getUserVoteStatus();
                this.activePage = 3;
                PM.data.last = 2;
                PM.data.now = 3;
                this.page3.scanStatus = false;
                this.showPage3VoteEvent();
            }else{
                this.noneSelected = true;
            }
        },
        closeNoneSelectedLayer:function(){
            this.noneSelected = false;
        },
        getUserVoteStatus:function(){
            var self = this;
            if(this.mode == "development"){
                var status = !!(Math.floor(Math.random()*2));
                this.hasVoted[this.selectedId || this.mycompany.companyId] = status;
                if(status){
                    this.setVoted();
                }
                return;
            }
            $.ajax({
                type: 'get',
                url: 'https://activity.lagou.com/activityapi/employer/isHaveSign',
                data:{
                    companyId:this.selectedId || this.mycompany.companyId
                },
                success: function(result) {
                    if (result.success) {
                        // 已经投过票
                        self.hasVoted[self.selectedId || self.mycompany.companyId] = true;
                        self.setVoted();
                    }else{
                        // content: "没有投过票"
                        // state: 301
                        // success: false
                    }
                },
                error: function(xhr, type) {
                    // alert('网络原因请重新尝试!');
                }
            });
        },
        setVoted:function(){
            this.page3.confirmWords = '您已助力，非常感谢！';
            this.$refs['drag_text'].style.color = '#00e18a';
            this.$refs['drag_text'].style.opacity = 1;
            var page3__vote = this.$refs['page3__vote'];
            if(window.addEventListener){
                page3__vote.removeEventListener('touchmove',this.page3DragVoteMove);
                page3__vote.removeEventListener('touchend',this.page3DragVoteEnd);
            }else {
                page3__vote.removeEventListener('touchend',this.noop);
            }
        },
        initDragVote:function(){
            var page3__vote = this.$refs['page3__vote'];
            this.page3.showVote = true;
            this.page3.maxwidth = this.getRem(488);
            this.dragVoteStatus = false;
            page3__vote.addEventListener('touchmove',this.page3DragVoteMove,false);
            page3__vote.addEventListener('touchend',this.page3DragVoteEnd,false);
        },
        page3DragVoteStart:function(e){
            e.stopPropagation();
            e.preventDefault();
            if(!this.page3.confirmSuccess){
                this.page3.moveStatus = true;
                this.page3.beginClientX = e.targetTouches[0].clientX;
            }
        },
        page3DragVoteMove:function(e){
            e.stopPropagation();
            e.preventDefault();
            if(this.page3.moveStatus){
                var width = e.targetTouches[0].clientX - this.page3.beginClientX;
                if(width > 0 && width <= this.page3.maxwidth){
                    this.page3.moveLeft = width + 'px';
                }else if(width > this.page3.maxwidth){
                    this.page3DragVoteSuccess();
                }
            }
        },
        page3DragVoteEnd:function(e){
            e.stopPropagation();
            e.preventDefault();
            this.page3.moveStatus = false;
            var width = e.changedTouches[0].clientX - this.page3.beginClientX;
            if(width < this.page3.maxwidth){
                this.page3.moveLeft = this.setRem(2);;
            }
        },
        page3DragVoteSuccess:function(){
            var page3__vote = this.$refs['page3__vote'];
            this.page3.confirmSuccess = true;
            this.page3.confirmWords = '助力成功，非常感谢！';
            this.mycompany.voteNum++;
            if(!this.dragVoteStatus){
                this.dragVoteStatus = true;
                this.goVote();
            }
            this.$refs['drag_text'].style.color = '#00e18a';
            this.$refs['drag_text'].style.opacity = 1;
            this.page3.moveLeft = this.page3.maxwidth + 'px';
            if(window.addEventListener){
                page3__vote.removeEventListener('touchmove',this.page3DragVoteMove);
                page3__vote.removeEventListener('touchend',this.page3DragVoteEnd);
            }else {
                page3__vote.removeEventListener('touchend',this.noop);
            }
            postEncodingID({
                "data-lg-tj-id":this.lg,
                "data-lg-tj-no":"3003" ,
                "data-lg-tj-cid":"idnull"
            });
        },
        // 点击投票（已对）
        goVote:function(){
            var self = this
            if(this.mode == 'development'){
                return;
            }
            $.ajax({
                type: 'get',
                url: 'https://activity.lagou.com/activityapi/employer/signUp',
                data:{
                    companyId:this.selectedId || this.mycompany.companyId
                },
                success: function(result) {
                    if (result.success) {
                        // 投票成功
                        self.getCompanyInfo(false);
                        // var data = result.content || [];
                        // self.companyList = data
                    }else{
                        alert(result.message);
                    }
                },
                error: function(xhr, type) {
                    // alert('网络原因请重新尝试!');
                }
            });
        },
        getBackToStart:function(){
            this.activePage = 0;
            PM.data.now = 0;
            PM.data.last = 0;
            this.page3.showVote = false;
            this.page3.scanStatus = false;
            this.page3.voteStatus = false;
            this.page2.dirActive = 0;
            this.page2.dirClass = '';
            this.page2.dirStatus = false;
            this.page2.rankStatus = false;
            this.page2.rankActive = 0;
            this.page2.rankLastActive = 0;
            this.page2.rankActiveIndex = 0;//-1;
            this.page2.rankSubActive = -1;
            this.page2.rankListStatus = true;
            this.page2.signupStatus = false;
            this.page2.industryfieldStatus = false;
            this.searchLayerStatus = false;
        },
        showSearchPageEvent:function(){
            this.activePage = 4;
            PM.data.now = 4;
            PM.data.last = 3;
            this.page2.rankStatus = false;
            this.page2.rankActive = 0;
            this.page2.rankLastActive = 0;
            this.page2.rankActiveIndex = 0;//-1;
            this.page2.rankSubActive = -1;
            this.page2.rankListStatus = true;

            this.searchLayerStatus = false;
        },
        // 获取用户投票次数（不需要）
        getUserInfo:function(){
            var self = this
            $.ajax({
                type: 'get',
                url: 'https://activity.lagou.com/activityapi/votelike/userVoteInfo.json',
                data:{
                    activityId:20180723
                },
                success: function(result) {
                    if (result.success) {
                        var data = result.content || {};
                        self.userUsed = data.votedNum || 0
                        self.userTotal = data.allVoteNum || 3
                        self.votedCompanyIds = data.voteCompanyIds || []
                    }
                },
                error: function(xhr, type) {
                    // alert(xhr)
                    alert('网络原因请重新尝试!');
                }
            });
        },
        setSearchScroll:function(){
            var classname = 'search_list',
                elem = $('.search_list'),
                bar = elem.find('.' + classname + '_bar')
            elem.children('ul').css('top','0');
            bar.css('top','0');
            this.scrollData['search_list'] = new scrollClass({
                classname: classname,
                height: 252,
                space: 12,
                number: 4.19,
                one: 53,
                fixedHeight: false
            })
        },
        // 获取排行榜（未完成）
        getRankList:function(index,classify,iindex,parent){
            var self = this,
                url = 'https://activity.lagou.com/activityapi/employer/employerAllTop',
                data = {
                    // 排行榜大类：传值分别是ZHL（综合类）、QUL（区域类）、HYL（行业类），其他参数返回为空
                    type:this.rank[index].classify//classify
                }
            if(this.mode == "development"){
                url = 'https://activity.lagou.com/activityapi/votelike/getVoteSortV2.json';
                data = {
                    activityId:20180723
                };
            }
            $.ajax({
                type: 'get',
                url: url,
                data:data,
                success: function(result) {
                    if (result.success) {
                        var data = result.content;
                        if(data){
                            // 排行榜大类：传值分别是ZHL（综合类）、QUL（区域类）、HYL（行业类）
                            var obj = [
                                {  // 综合类  ZHL:
                                    xrgz:0, // NDTGZ("xrgz", "年度top雇主"), 
                                    zjgz:1  // XRTGZ("zjgz", "新锐top雇主");  // zjgz
                                },
                                {  // 行业类  HYL:
                                    dsly:0,  // SALY 电商领域
                                    shfw:1,  // SHFW 生活服务
                                    yx:2,  // YX 游戏
                                    jy:3,  // JY 金融
                                    zsff:4,  // ZSFF 知识付费
                                    jyu:5,  // JYU 教育
                                    wy:6,  // WY 文娱
                                    xmt:7,  // XMT 新媒体
                                    sj:8,  // SJ 社交
                                    yj:9,  // YJ 硬件
                                    qyfw:10,  // QYFW 企业服务
                                    rgzn:11,  // RGZN 人工智能（AI）
                                    qqh:12,  // QQH 全球化
                                    other:13,  // OTHER 其他
                                },
                                {  // 区域类  QUL:
                                    hb:0,  // HB("hb", "华北地区"), 
                                    hd:1,  // HD("hd", "华东地区"), 
                                    hn:2   // HN("hn", "华南地区"),
                                }
                            ];
                            
                            var list = {},
                                type = '',
                                i = 0; 
                            for(i = 0; i < data.length; i++){
                                type = data[i].optionKey;
                                list[type] = data[i].companyTopInfo;
                                // if(!list[type]){
                                //     list[type] = [];   
                                // }
                                // list[type].push(data[i]);
                            }

                            for(i in obj[index]){
                                self.rank[index].list[obj[index][i]].data = list[i];
                            }

                            // if(iindex != -1){
                            //     self.rank[index].list[iindex].data = data || [];
                            // }else {
                            //     self.rank[index].data = data || [];
                            // }
                            var temp = null,
                                tempIndex = parent.rankActiveIndex != -1 ? parent.rankActiveIndex : 0;
                            temp = self.rank[parent.rankActive].list[tempIndex].data;
                            // if(parent.rankActiveIndex != -1){
                            //     temp = self.rank[parent.rankActive].list[parent.rankActiveIndex].data;
                            // }else{
                            //     temp = self.rank[parent.rankActive].data;
                            // }
                            // if(temp){
                                self.rankData = temp || [];
                                self.setRankList();
                            // }
                        }
                    }
                },
                error: function(xhr, type) {
                    // alert('网络原因请重新尝试!');
                }
            });
        },
        showRankList:function(){
            var classname = 'rank-center',
                elem = $('.rank-center'),
                bar = elem.find('.' + classname + '_bar')
            elem.children('ul').css('top','0');
            bar.css('top','0');
            this.scrollData['rank-center'] = new scrollClass({
                classname: 'rank-center',
                height: 656,
                one: 76,
                space: 21,
                number: 8.6
            });
            // this.scrollData['rank-center'].setRank(this.scrollData.currentCompany[award].voteCountVo.order);
        },
        closeRank:function(){
            this.rankStatus = false
        },
        voteCompanyEvent:function(one){
            var self = this
            // if(this.votedCompanyIds.indexOf(one.id) != -1){
            //     return
            // }
            if(this.mode == "development"){
                this.votedCompanyIds.push(one.id)
                this.voteCompanySuccess(one)
                this.userUsed--
                return
            }
            $.ajax({
                type: 'get',
                url: 'https://activity.lagou.com/activityapi/votelike/optionVote',
                data:{
                    activityId:20180723,
                    parentId:one.id,
                    optionId:1
                },
                success: function(result) {
                    if (result.success) {
                        var data = result.content;
                        if(data){
                            self.userTotal = data.allVoteNum || 3
                            self.userUsed = data.votedNum || 0
                            self.userRank = parseInt(data.userVoteOrderNum)
                            self.votedCompanyIds = data.voteCompanyIds || []
                            self.voteCompanySuccess(one)
                        }
                    }else{
                        self.getUserInfo()
                    }
                },
                error: function(xhr, type) {
                    // alert('网络原因请重新尝试!');
                }
            });
        },
        voteCompanySuccess:function(one){
            var self = this;
            this.selected = one;
            setTimeout(function(){
                self.successStatus = true;
            },500)
        },
        initPage1MoveEvent:function(){
            var self = this,
                isFirst = false,
                screenHeight = document.documentElement.clientHeight;
            this.$refs.page1.addEventListener('touchstart',function(){
                if(!isFirst){
                    isFirst = true;
                    self.page1.showStatus = false;
                    $('html,body,.page1').css({
                        'height':'auto',
                        'overflow-y': 'scroll'
                    });
                    $('.page1').css({
                        'position':'relative'
                    });
                    self.$nextTick(function(){
                        document.addEventListener('scroll',scrollEvent,false);
                    });
                }
            },false);
            var halfWidow = document.documentElement.clientHeight * 3 / 4;
            function scrollEvent(e){
                self.getTabHeight();
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || document.scrollTop,
                    height = document.documentElement.offsetHeight,
                    one = null,
                    i = 0;
                if((height - scrollTop - 50) <= screenHeight){
                    self.page1.moveStatus = false;
                }else {
                    self.page1.moveStatus = true;
                }
                for (i = 0; i < self.page1.tab.length; i++) {
                    one = self.page1.tab[i];
                    
                    if (one.elem && one.top - halfWidow < scrollTop && one.top + one.height - halfWidow > scrollTop && !self.page1.tab[i].active) {
                        self.page1.tab[i].active = true;
                        break;
                    }
                }
            }
        },
        getTabHeight:function(){
            var list = this.page1.tab,
                elem = null,
                parent = [],
                height = 0,
                top = 0,
                i = 0,
                j = 0;
            for (i = 0; i < list.length; i++) {
                if (list[i].elem) {
                    elem = this.$refs[list[i].elem];
                    top = 0;
                    height = 0;
                    if (list[i].parent) {
                        parent = list[i].parent;
                        for (j = 0; j < parent.length; j++) {
                            top += this.$refs[parent[j]].offsetTop;
                            // height += this.$refs[parent[j]].height;
                        }
                        top += elem.offsetTop;
                        // top += this.getRem(list[i].top);
                    } else {
                        top += elem.offsetTop;
                    }
                    if (list[i].initHeight) {
                        height = this.getRem(list[i].initHeight);
                    } else {
                        height = elem.offsetHeight;
                    }
                    if (list[i].top != top || list[i].height != height) {
                        this.page1.tab[i].top = top;
                        this.page1.tab[i].height = height;
                    }
                }
            }
        },
        initCanvas:function(){
            //圆角矩形
            CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
                var min_size = Math.min(w, h);
                if (r > min_size / 2) r = min_size / 2;
                // 开始绘制
                this.beginPath();
                this.moveTo(x + r, y);
                this.arcTo(x + w, y, x + w, y + h, r);
                this.arcTo(x + w, y + h, x, y + h, r);
                this.arcTo(x, y + h, x, y, r);
                this.arcTo(x, y, x + w, y, r);
                this.closePath();
                return this;
            }
            this.canvas = this.$refs['canvas']
            this.ctx = this.canvas.getContext('2d')
            var height = 1334;
            this.canvas.width = 750;
            this.canvas.height = height
            var loadedImgs = [],
                self = this;
            this.loadingArray.forEach(function(url){
                var img = new Image()
                img.onload = function(){
                    self.initImageLoading()
                }
                img.onerror = function(){
                    self.initImageLoading()
                }
                img.src = url,
                self.loadedImgs.push(img)
            })
        },
        initImageLoading:function(){
            this.loaded++
            if(this.loaded == this.loadingArray.length){
                this.ctx.drawImage(this.loadedImgs[0],0,0);
                this.ctx.drawImage(this.loadedImgs[1],666,700);
                this.ctx.drawImage(this.loadedImgs[2],527,373);
                this.ctx.drawImage(this.loadedImgs[3],0,0);
                this.ctx.drawImage(this.loadedImgs[4],86,390);
                this.ctx.drawImage(this.loadedImgs[5],479,576);
                this.ctx.drawImage(this.loadedImgs[6],90,820);
                this.ctx.drawImage(this.loadedImgs[7],0,1125);
                this.ctx.drawImage(this.loadedImgs[8],69,1151);
                
                if(this.drawStatus){
                    this.startDraw()
                }
            }
        },
        getHeight:function(){
            // var rightSize = parseFloat((RC.w / RC.h).toFixed(1)),
            //     currentSize = parseFloat((GC.w / GC.h).toFixed(1))
            // if(rightSize < currentSize){  //宽屏
            //     return RC.w / ((RC.h / GC.h) * GC.w) * GC.h
            // }
            return RC.w / GC.w * GC.h
        },
        startDraw:function(){
            this.drawAllInformation();
        },
        drawAllInformation:function(){
            var index = this.page1.citySelected;
            this.ctx.drawImage(this.loadedImgs[9+index],236,1220);
            this.drawCompanyInfo();
            this.canvasToImage();
        },
        canvasToImage:function(){
            // this.shareSuccessCallback();
            var self = this;
            setTimeout(function(){
                self.url = self.canvas.toDataURL('image/png');
            },1000)
        },
        drawErcode:function(img){
            this.ctx.drawImage(img,0,0,img.width,img.height,78,943,128,128);
        },
        drawUserPicture:function(img){
            var height = this.getHeight() - RC.h,//RC.w / GC.w * GC.h - RC.h,
                offset = height > 0 ? height / 3 : 0
            // "https://activity.lagou.com/activityapi/votelike/userHeadImg"
            if(height < 0){
                offset = height / 8
            }
            if(this.mode != "development"){
                img.setAttribute('crossorigin', 'anonymous');
            }
            this.drawCirclePicture(img,97,385+offset,98,98,-1,true)
        },
        drawCirclePicture:function(img,x,y,w,h,r,crossStatus){
            var self = this,
                temp = this.$refs['temp-canvas'],
                ctx = temp.getContext('2d'),
                obj = null,
                height = this.getHeight() - RC.h,//RC.w / GC.w * GC.h - RC.h,
                offset = height > 0 ? height / 3 : 0,
                draw = function(obj) {
                    if(ctx.createPattern && ctx.roundRect){
                        // 创建图片纹理
                        var pattern = ctx.createPattern(obj, "no-repeat");
                        // 如果要绘制一个圆，使用下面代码
                        // ctx.arc(obj.width / 2, obj.height / 2, Math.max(obj.width, obj.height) / 2, 0, 2 * Math.PI);
                        // 这里使用圆角矩形
                        ctx.roundRect(0, 0, obj.width, obj.height, r ==-1 ? obj.width : r);
                        
                        // 填充绘制的圆
                        ctx.fillStyle = pattern;
                        ctx.fill();
                    }else{
                        ctx.drawImage(obj,0,0)
                    }
                };//,
                // img = new Image();
            temp.width = 750
            temp.height = 750
            // if(crossStatus){
            //     img.setAttribute('crossorigin', 'anonymous');
            // }else{
            //     // img.setAttribute('crossorigin', '');
            // }
            // img.onload = function() {
                // obj = this
                draw(img);
                var src = temp.toDataURL("image/png"),
                    image = new Image()
                if(crossStatus){
                    image.setAttribute('crossorigin', 'anonymous');
                }
                ctx.clearRect(0,0,750,750)
                image.onload = function(){
                    // alert("drawing: "+img.src)
                    self.ctx.drawImage(image,0,0,img.width,img.height,x,y,w,h)
                    // self.down++
                    // self.canvasToImage()
                }
                image.src = src
            // };
            // img.src = portrait
        },
        drawUserInfo:function(){
            var height = this.getHeight() - RC.h,//RC.w / GC.w * GC.h - RC.h,
                offset = height > 0 ? height / 3 : height < 0 ? height / 8 : 0
            this.ctx.font = "32px normal"
            this.ctx.fillStyle = "#3c05c2"
            this.ctx.fillText(this.user.nickname,234,387+30+offset)
            this.ctx.fillText("是",234,437+30+offset)
            sp = this.ctx.measureText("是").width
            this.ctx.font = "32px bold"
            this.ctx.fillStyle = "#f22b35"
            this.ctx.fillText(this.selected.companyshortname,234+sp,437+30+offset)

            this.ctx.font = "32px normal"
            this.ctx.fillStyle = "#3c05c2"
            this.ctx.fillText("第",234,487+30+offset)
            sp = this.ctx.measureText("第").width
            this.ctx.font = "32px bold"
            this.ctx.fillStyle = "#f22b35"
            this.ctx.fillText(this.userRank,234+sp,487+30+offset)
            sw = this.ctx.measureText(this.userRank).width
            this.ctx.font = "32px normal"
            this.ctx.fillStyle = "#3c05c2"
            this.ctx.fillText("位支持者",234+sp+sw,487+30+offset)

            this.ctx.fillText("并获得了神秘秋招大礼",234,537+30+offset)
            // this.down++
            // this.canvasToImage()
        },
        drawCompanyLogo:function(img){
            img.setAttribute('crossorigin', 'anonymous');
            this.drawCirclePicture(
                img, // url,// base64,
                73,127,
                147,147,
                24,
                true
            )
        },
        drawCompanyInfo:function(){
            var company = this.page1.signup.company,
                gradient = this.ctx.createLinearGradient(0, 661, 0, 661+34);
            gradient.addColorStop(0,'#f0d38e');
            gradient.addColorStop(1,'#9d7c3b');
            this.ctx.font = "34px normal";
            this.ctx.fillStyle = "#42351b";
            this.ctx.strokeStyle = "#42351b";
            this.ctx.lineWidth = 2;
            this.ctx.fillText("特别邀请 "+company,89,661+34);
            this.ctx.strokeText("特别邀请 "+company,89,661+34);
            this.ctx.fillStyle = gradient;
            this.ctx.fillText('特别邀请 '+company,89,661+34);
            this.ctx.fillText('特别邀请 '+company,89,661+34);
            this.ctx.font = "54px normal";
            this.ctx.fillStyle = "#61de8f";
            this.ctx.fillText(this.page1.signup.user,89,717+54);
        },
        // getBase64("https://z649319834.github.io/Learn_Example/video_track/webvtt.jpg")
        getBase64:function(imgUrl,callback) {
            var img = new Image()
            img.onload = function(){
                console.log(this)
            }
            img.src = imgUrl
            // window.URL = window.URL || window.webkitURL;
            // var xhr = new XMLHttpRequest();
            // console.log(imgUrl)
            // xhr.open("get", imgUrl, true);
            // // 至关重要
            // xhr.responseType = "blob";
            // xhr.onload = function () {
            //     if (this.status == 200) {
            //         //得到一个blob对象
            //         var blob = this.response;
            //         // 至关重要
            //         var oFileReader = new FileReader();
            //         oFileReader.onloadend = function (e) {
            //             var base64 = e.target.result;
            //             callback(base64)
            //             // console.log("方式一》》》》》》》》》", base64)
            //         };
            //         oFileReader.readAsDataURL(blob);
            //     }
            // }
            // xhr.send();
        },
        setTextLimit:function(str,size){
            var re = /[\u4E00-\u9FA5]/g,
                value = str.replace(re,"çç"),
                len = 0;
            if(value.length > size){
                len = value.slice(0,size-2).replace(/(çç)/g,"ç").length
                return str.slice(0,len)+'...'
            }
            return str
        },
        companyLabelLimit:function(labels,one,index){
            if(index < 3){
                var arr = this.labelList(this.selected.otherlabel),
                    re = /[\u4E00-\u9FA5]/g,
                    len = 0,
                    i = 0
                for(i = 0; i <= index; i++){
                    len += (arr[i].replace(re,"çç")).length
                    if(len > 24){
                        return false
                    }
                }
                return true
            }
            return false
        },
        createPictures:function(){
            if(this.loaded == this.loadingArray.length){
                this.startDraw()
            }else{
                this.drawStatus = true
            }
            this.createStatus = true
        },
        closeSuccess:function(){
            this.successStatus = false
        },
        getUserRank:function(one){
            var self = this
            $.ajax({
                type: 'get',
                url: 'https://activity.lagou.com/activityapi/votelike/userVoteOrderNum',
                data:{
                    activityId:20180723,
                    companyId:one.id
                },
                success: function(result) {
                    if (result.success) {
                        var data = result.content;
                        if(data){
                            self.userRank = data
                        }
                    }
                },
                error: function(xhr, type) {
                    // alert('网络原因请重新尝试!');
                }
            });
        },
        updateCompanyList:function(){
            var self = this;
            if(!this.page1.signup.company){
                this.page1.companyTips = '* 请输入企业名称或企业ID';
                return;
            }
            this.page1.companyTips = '';
            // 正在请求
            // if(this.signupRequestStatus){
            //     this.waitingRequest++;
            //     return;
            // }
            this.signupRequestStatus = true;
            $.ajax({
                type: 'get',
                url: 'https://activity.lagou.com/activityapi/common/queryCompany.json',
                data:{
                    keyword:this.page1.signup.company
                },
                success: function(result) {
                    self.signupRequestStatus = false;
                    if (result.success) {
                        var data = result.content || [];
                        if(data.length > 0){
                            self.page1.signupList = data;
                            self.page1.signupSearchStatus = true;
                            self.$nextTick(function(){
                                self.setSignupSearchScroll();
                            })
                        }else{
                            self.page1.companyTips = '* 您输入的企业不存在';
                            self.page1.signupSearchStatus = false;
                        }
                    } else{ // 查找失败
                        self.page1.companyTips = '* 您输入的企业不存在';
                        self.page1.signupSearchStatus = false;
                    }
                },
                error: function(xhr, type) {
                    self.signupRequestStatus = false;
                    self.page1.companyTips = '网络原因请重新尝试!';
                }
            });
        },
        setSignupSearchScroll:function(){
            var classname = 'page1__signup--search';
            this.$refs['page1__signup--search_ul'].style.top = 0;
            this.$refs['page1__signup--search_bar'].style.top = 0;
            this.scrollData['page1__signup--search'] = new scrollClass({
                classname: classname,
                height: 270,
                totalHeight:this.getRem(270+35),
                space: 0,
                number: 5.19,
                one: 52,
                fixedHeight: false
            });
        },
        signupSelectCompanyEvent:function(one){
            this.page1.signup.company = one.companyname;
            this.page1.signup.companyId = one.id;
            this.page1.signupSearchStatus = false;
            this.page1.companyTips = '';
        },
        searchCompanyEvent:function(){
            var self = this
            if(!this.search_name){
                this.search_tips = '* 请输入企业名称或企业ID'
                return
            }
            this.search_tips = ''
            $.ajax({
                type: 'get',
                url: 'https://activity.lagou.com/activityapi/common/queryCompany.json',
                data:{
                    keyword:this.search_name
                },
                success: function(result) {
                    if (result.success) {
                        var data = result.content || [];
                        if(data.length > 0){
                            self.search_list = data
                            self.searchStatus = true
                            self.$nextTick(function(){
                                self.setSearchScroll()
                            })
                        }else{
                            self.search_tips = '* 您输入的企业不存在'
                        }
                    } else{ // 查找失败
                        self.search_tips = '* 您输入的企业不存在'
                        console.log(result.msg);
                    }
                },
                error: function(xhr, type) {
                    self.search_tips = '网络原因请重新尝试!'
                    // alert('网络原因请重新尝试!');
                }
            });
        },
        selectCompanyEvent:function(one){
            var self = this
            if(this.mode == "development"){
                self.searchStatus = false
                self.selected = self.selectedData;
                self.companyList = self.selected;
                if(self.selectedStatus == 0){
                    self.selectedStatus = 1
                }
                // self.bprevIndex = -1
                // self.prevIndex = 0
                // self.currentIndex = 1
                // self.nextIndex = 2
                // self.bnextIndex = 3
                return
            }
            self.selectedId = one.id;
            self.selecting = one;
            $.ajax({
                type: 'get',
                url: 'https://activity.lagou.com/activityapi/employer/employerInfo',
                data:{
                    companyId:one.id
                },
                success: function(result) {
                    if (result.success) {
                        var data = result.content;
                        if(data){
                            var voteList = self.setCompanyVoteList(data.optionList);
                            self.searchStatus = false
                            self.selected = data;
                            self.selected.voteList = voteList;

                            self.mycompany = data || {};
                            self.mycompany.voteList = voteList;
                            self.mycompany.companyId = self.selectedId;

                            self.companyList = data;
                            self.companyList.voteList = voteList;
                            self.companyList.companyId = self.selectedId;
                            // self.companyList.splice(1,self.selectedStatus,data)
                            if(self.selectedStatus == 0){
                                self.selectedStatus = 1
                            }
                            // self.bprevIndex = -1
                            // self.prevIndex = 0
                            // self.currentIndex = 1
                            // self.nextIndex = 2
                            // self.bnextIndex = 3
                        }
                    }else if(result.state == -1){
                        // 未报名
                        self.searchStatus = false;
                        self.showSignupStatus = true;
                    }
                },
                error: function(xhr, type) {
                    // alert('网络原因请重新尝试!');
                }
            });
        },
        toSignupEvent:function(){
            this.activePage = 2;
            PM.data.now = 2;
            PM.data.last = 1;
            this.page2.signupStatus = true;
            this.showSignupStatus = false;
            this.signupFromOther = true;
            this.page2.signup.company = this.selecting.companyshortname;
            this.page2.signup.companyId = this.selecting.id;
        },
        setCompanyVoteList:function(optionList){
            var arr = [null,null,null],
                crr = [],
                brr = [],
                i = 0;
            if(optionList){
                for(i = 0; i < optionList.length; i++){
                    if(brr.indexOf(optionList[i].category) == -1){
                        brr.push(optionList[i].category);
                        // arr.push(optionList[i]);
                        switch(optionList[i].category){
                            case '区域类':
                                arr[2] = optionList[i];
                                arr[2].key = 1;
                                // arr[arr.length - 1].key = 1;
                                break;
                            case '行业类':
                                arr[1] = optionList[i];
                                arr[1].key = 2;
                                // arr[arr.length - 1].key = 2;
                                break;
                            default:  // 综合
                                arr[0] = optionList[i];
                                arr[0].key = 0;
                                // arr[arr.length - 1].key = 0;
                                break;
                        }
                    }
                }
                // for(i = 0; i < arr.length; i++){
                //     if(arr[i]){
                //         crr.push(arr[i])
                //     }
                // }
            }
            return arr;
        },
        isWeiXin:function() {
            var ua = window.navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                return true;
            } else {
                return false;
            }
        },
        getUserWeixinData:function(){
            var self = this
            $.ajax({
                type: 'get',
                url: 'https://activity.lagou.com/activityapi/weixin/authUserDetail',
                success: function(data) {
                    if (data.state == 200 && data.content) { // 已登录
                        self.user = data.content
                        self.getUserInfo()
                    } else{ // 未登录
                        var href = window.location.href
                            arr = href.split('?'),
                            param = getQueryString('times')
                        if(arr.length > 1){
                            href += '&times=1'
                        }else{
                            href += '?times=1'
                        }
                        if((!getQueryString('selected') && !param) || (!param && getQueryString('selected') && !localStorage.getItem('2018-employer'))){
                            localStorage.setItem('2018-employer',1)
                            window.location.href = 'https://activity.lagou.com/activityapi/weixin/userInfoAuth.html?returnUrl=' + encodeURIComponent(href); 
                        }
                    }
                },
                error: function(error) {
                    console.log(error.message);
                }
            });
        },
        shareSuccessCallback:function(){
            var self = this
            $.ajax({
                type: 'get',
                url: 'https://activity.lagou.com/activityapi/votelike/userShare.json',
                data:{
                    activityId:20180723
                },
                success: function(result) {
                    if (result.success) {
                        var data = result.content;
                        if(data){
                            self.userTotal = data
                        }
                    }
                },
                error: function(xhr, type) {
                    // alert('网络原因请重新尝试!');
                }
            });
        },
        dragCompanylList:function(){
            var self = this,
                startX = 0,
                moveX = 0,
                startY = 0,
                moveY = 0;
            $(".company-list").on("touchstart",function (e) {
                // e.preventDefault()
                e.stopPropagation()
                startX = e.originalEvent.changedTouches[0].pageX;
                startY = e.originalEvent.changedTouches[0].pageY;
            }).on('touchmove',function (e) {
                e.preventDefault()
                e.stopPropagation()
                moveX = e.originalEvent.changedTouches[0].pageX;
                moveY = e.originalEvent.changedTouches[0].pageY;
            }).on('touchend',function (e) {
                // e.preventDefault()
                e.stopPropagation()
                if(self.isMoving){
                    return
                }
                self.isMoving = true
                if(Math.abs(moveY-startY)>Math.abs(moveX-startX)){
                    // e.stopImmediatePropagation();
                    // return false;
                    self.isMoving = false
                }else if(Math.abs(moveX-startX) > 10){
                    if(moveX<startX){
                        //向左滑动了
                        self.currentIndex++;
                        if(self.currentIndex < self.companyList.length){
                            // renderRuleBox();
                            self.showNext()
                        }else {
                            self.currentIndex = self.companyList.length - 1
                            self.isMoving = false
                        }
                    }else if(moveX>startX){
                        //向右滑动了
                        self.currentIndex--;
                        if(self.currentIndex > -1){
                            self.showPrev()
                        }else{
                            self.currentIndex = 0
                            self.isMoving = false
                        }
                    }
                }
                moveX = 0
                startX = 0
                moveY = 0
                startY = 0
            });
        },
        labelList:function(labels){
            var arr = (labels ? labels : '').split(/[,.、。|·]/g),
                brr = [],
                i = 0
            for(i = 0; i < arr.length; i++){
                if(arr[i].trim()){
                    brr.push(arr[i].trim())
                }
            }
            return brr
        },
        getVotedStatus:function(id){
            if(this.votedCompanyIds.indexOf(id+"") != -1){
                return true
            }
            if(this.votedCompanyIds.indexOf(id) != -1){
                return true
            }
            return false
        },
        showNext:function(){
            var index = this.currentIndex,
                self = this;
            self.prevIndex = self.currentIndex - 1;
            self.bprevIndex = self.prevIndex - 1;
            self.currentIndex = index;
            self.nextIndex = self.currentIndex + 1;
            self.bnextIndex = self.nextIndex + 1;
            this.bprevClass = 'prevToNormal';
            this.prevClass = 'currentToPrev';
            this.currentClass = 'nextToCurrent';
            this.nextClass = 'normalToNext';
            this.bnextClass = '';
            setTimeout(function(){
                self.currentClass = 'active';
                self.prevClass = 'prev';
                self.nextClass = 'next';
                self.bprevClass = '';
                self.bnextClass = '';
                // self.setScrollDataRank();
                self.isMoving = false;
            },500)
        },
        showPrev:function(){
            // console.log('prev')
            var index = this.currentIndex,
                self = this;
            this.prevIndex = this.currentIndex - 1;
            this.bprevIndex = this.prevIndex - 1;
            this.currentIndex = index;
            this.nextIndex = this.currentIndex + 1;
            this.bnextIndex = this.nextIndex + 1;
            this.bnextClass = 'nextToNormal';
            this.nextClass = 'currentToNext';
            this.currentClass = 'prevToCurrent';
            this.prevClass = 'normalToPrev';
            this.bprevClass = '';
            setTimeout(function(){
                self.currentClass = 'active'
                self.prevClass = 'prev'
                self.nextClass = 'next'
                self.bprevClass = '';
                self.bnextClass = '';
                // self.setScrollDataRank();
                self.isMoving = false;
            },500)
        },
        showPreEvent:function(){
            if(this.isMoving){
                return
            }
            this.isMoving = true
            this.currentIndex--;
            if(this.currentIndex > -1){
                this.showPrev()
            }else{
                this.currentIndex = 0
                this.isMoving = false
            }
        },
        showNextEvent:function(){
            if(this.isMoving){
                return
            }
            this.isMoving = true
            this.currentIndex++;
            // alert(this.currentIndex+" , "+ this.companyList.length)
            if(this.currentIndex < this.companyList.length){
                this.showNext()
            }else {
                this.currentIndex = this.companyList.length - 1
                this.isMoving = false
            }
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