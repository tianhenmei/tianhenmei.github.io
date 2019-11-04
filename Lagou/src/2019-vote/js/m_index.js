(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function noop(){}
var loadingHost = 'https://www.lgstatic.com/plat-activity-fed/2019-vote/';
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
            }else if(self.moveUpStatus){
                self.secondUpTimeStatus = true;
            }else {
                self.secondTimeStatus = false;
                self.secondUpTimeStatus = false;
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
                        self.moveEndStatus = false;
                        self.secondTimeStatus = false;
                        self.moveUpCallback();
                    }else{
                        if(!self.moveUpStatus){
                            self.moveUpStatus = true;
                            self.secondUpTimeStatus = false;
                            self.moveEndStatus = false;
                            self.secondTimeStatus = false;
                        }else if(self.secondUpTimeStatus){
                            self.moveUpStatus = false;
                            self.secondUpTimeStatus = false;
                            self.moveEndStatus = false;
                            self.secondTimeStatus = false;
                            self.moveUpCallback();
                        }
                    }
                }
            } else if (direction == -1 && app.scrollData[self.classname].end <= -app.scrollData[self.classname].height) { // 向下

                app.scrollData[self.classname].end = -app.scrollData[self.classname].height;
                // 移动到底部：
                if(self.moveEndCallback){
                    if(app.scrollData[self.classname].top == -app.scrollData[self.classname].height){
                        self.moveUpStatus = false;
                        self.secondUpTimeStatus = false;
                        self.moveEndStatus = false;
                        self.secondTimeStatus = false;
                        self.moveEndCallback();
                    }else{
                        if(!self.moveEndStatus){
                            self.moveUpStatus = false;
                            self.secondUpTimeStatus = false;
                            self.moveEndStatus = true;
                            self.secondTimeStatus = false;
                        }else if(self.secondTimeStatus){
                            self.moveUpStatus = false;
                            self.secondUpTimeStatus = false;
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
    createStatus = false,
    mode = "production",//"production", development
    saveMode = "production",
    initialText = mode !== 'production' ? '测试' : '',
    initialPhone =  mode !== 'production' ? '12345678900' : '',
    randomIndex = Math.floor(Math.random() * 6) % 6;

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
            switch(self.data.now){
                default:
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
                    app.$data.activePage = self.data.now;
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
        lg:"1k6a",
        activePage:initialNow,
        pageStatus:true,
        heightStatus:0,
        page0:{
            status:'in',
            in:{
                out:'outTopMoveIn duration8-0 delay0-5',
                text1:'textMoveAni duration2-0 delay0-5',
                text2:'textMoveAni duration2-0 delay1-5',
                text3:'textMoveAni duration2-0 delay2-5',
                text4:'textMoveAni duration2-0 delay4-5',
                text5:'textMoveAni duration2-0 delay5-5',
                move:'opacityChange delay1-0'
            },
            out:{
                out:'topIn-out',
                text1:'',
                text2:'',
                text3:'',
                text4:'',
                text5:'',
                text6:'',
                text7:'',
                text8:'',
                text9:'',
                text10:'',
                text11:'',
                move:'topIn-out'
            },
            textArr: [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25
            ]
        },
        page1:{
            status:'in',
            in:{
                lb: 'mleftBottomIn delay0-5',
                rb: 'mrightBottomIn delay0-5',
                lt: 'mleftTopIn delay0-5',
                rt: 'mrightTopIn delay0-5',
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
            back:{
                move:'littleTopOut',
                year:'littleTopOut',
                logo:'littleTopOut',
                title:'littleTopOut',
                subtitle:'littleTopOut',
                info:'littleTopOut'
            },
            text:[
                {
                    w:22,  // 宽度
                    l:0  // 位置
                },{
                    w:14,
                    l:22
                },{
                    w:12,
                    l:36
                },{
                    w:16,
                    l:48
                },{
                    w:28,
                    l:64
                },{
                    w:28,
                    l:92
                },{
                    w:30,
                    l:120
                },{
                    w:30,
                    l:150
                },{
                    w:30,
                    l:180
                },{
                    w:26,
                    l:210
                },{
                    w:26,
                    l:236
                },{
                    w:25,
                    l:262
                },{
                    w:30,
                    l:287
                },{
                    w:30,
                    l:317
                },{
                    w:30,
                    l:347
                },{
                    w:30,
                    l:377
                }
            ]
        },
        page2:{
            status:'in',
            in:{
                title:'zoomIn delay0-5',
                info:'opacityChange delay1-0',
                list:'opacityChange delay1-0',
                btn:'littleBottomIn delay1-5',
                go:'littleBottomIn delay1-7'
            },
            out:{
                title:'zoomIn-out',
                info:'zoomIn-out',
                list:'zoomIn-out',
                btn:'zoomIn-out',
                go:'zoomIn-out'
            },
            back:{
                title:'zoomIn-out',
                info:'zoomIn-out',
                list:'zoomIn-out',
                btn:'zoomIn-out',
                go:'zoomIn-out'
            },
            start:{
                x:0,
                y:0
            },
            end:{
                x:0,
                y:0
            },
            dirActive:0,
            dirTabStatus:false,
            dirLast:0,
            dirNow:0,
            dirClass:'',
            dirStatus:false,
            rankStatus:false,
            dir:[
                {
                    l:550,
                    t:485,
                    name:'评选初心',
                    listStatus:false,
                    totalHeight:460,
                    detail:[
                        {
                            icon:'',
                            height:setRem(33 * 2 + 26 + 2 + 45),
                            title:'挖掘',
                            info:'通过专业评审模型，挖掘并盘点互联<br/>网各行业各领域Top企业；',
                            backgroundPosition:setRem(-700)+' 0'
                        },{
                            icon:'',
                            height:setRem(33 * 2 + 26 + 2 + 45),
                            title:'鼓励',
                            info:'以评选出的TOP雇主为互联网标杆，<br/>陪伴并鼓励企业更好成长；',
                            backgroundPosition:setRem(-700)+' '+setRem(-50)
                        },{
                            icon:'',
                            height:setRem(33 * 2 + 26 + 2 + 45),
                            title:'引导',
                            info:'公平公正的评选结果，<br/>为互联网人的求职选择提供参考。',
                            backgroundPosition:setRem(-700)+' '+setRem(-50*2),
                            classname:'none-outer'
                        }
                    ]
                },{
                    l:680,
                    t:485,
                    name:'评选日程',
                    // listStatus:false,
                    // totalHeight:650,
                    listStatus:false,
                    totalHeight:820,  // 884
                    detail:[
                        {
                            icon:'',
                            title:'挖掘',
                            info:'通过专业评审模型，挖掘并盘点互联网各行业<br/>各领域Top企业；',
                            backgroundPosition:'0 0'
                        },{
                            icon:'',
                            title:'鼓励',
                            info:'以评选出的TOP雇主为互联网标杆，<br/>陪伴并鼓励企业更好成长；',
                            backgroundPosition:'0 '+setRem(-80)
                        },{
                            icon:'',
                            title:'引导',
                            info:'公平公正的评选结果，<br/>为互联网人的求职选择提供参考。',
                            backgroundPosition:'0 '+setRem(-160)
                        }
                    ]
                },{
                    l:810,
                    t:485,
                    name:'参选规则',
                    listStatus:true,
                    totalHeight:840-139 + 527 - 33 * 6 - 52,
                    classname:'page2__content--d2',
                    detail:[
                        /*{
                            icon:'',
                            title:'申报数量',
                            height:setRem(33 * 2 + 26 + 2 + 45),
                            info:'每个企业至少选择一项，最多申报两项<br/>趣味奖不算在选项里；',
                            backgroundPosition:setRem(-700)+' '+setRem(-50*14)
                        },*/{
                            icon:'',
                            title:'参选条件',
                            height:setRem(33 * 2 + 26 + 2 + 45),
                            // height:setRem(33 * 6 + 26 + 2 + 45),
                            // listHeight:setRem(33 * 6 + 26 + 2 + 0),
                            info: '所有具有互联网人才岗位需求的<br/>企业皆可参与评选',
                            // list:[
                            //     {
                            //         name:'（综合榜）',
                            //         height:setRem(30 * 4 + 20 + 2 + 20),
                            //         info:'D轮or员工规模大于800人：</br>'+
                            //             '拉勾年度TOP雇主；</br>'+
                            //             'D轮以下or员工规模小于800人：</br>'+
                            //             '拉勾年度新锐TOP雇主；'
                            //     },{
                            //         name:'（行业榜）',
                            //         height:setRem(30 * 1 + 20 + 2 + 20),
                            //         top:setRem(-1 * (30 * 4 + 10)),
                            //         info:'企业所属行业的领域范围内均可申报；'
                            //     },{
                            //         name:'（区域榜）',
                            //         height:setRem(30 * 1 + 20 + 2 + 20),
                            //         top:setRem(-2 * (30 * 1 + 20 + 2 + 35)),
                            //         info:'企业所属区域的范围内均可申报；'
                            //     }
                            // ],
                            backgroundPosition:setRem(-700)+' '+setRem(-50*15)
                        },{
                            icon:'',
                            title:'入围方式',
                            height:setRem(33 * 2 + 26 + 2 + 45),
                            info:'由大众评审投票决定，<br />排名前500名企业进入终审名单',
                            backgroundPosition:setRem(-700)+' '+setRem(-50*16)
                        },{
                            icon:'',
                            title:'评选标准',
                            height:setRem(0 + 26 + 2 + 45 + 527),
                            img: true,
                            // info:'<span class="float">拉勾指数</span><span class="float">企业可信任度</span><span class="float">企业形象与口碑</span><span class="float">企业实力</span><span class="float">企业招聘效果</span>',
                            backgroundPosition:setRem(-700)+' '+setRem(-50*17),
                            classname:'none-outer'
                        }
                    ]
                },{
                    l:550,
                    t:615,
                    name:'评选维度',
                    listStatus:false,
                    totalHeight:1040,
                    classname:'page2__content--d3',
                    detail:[
                        {
                            icon:'none',
                            height:setRem(33 * 2 + 26 + 2 + 45),
                            title:'影响力',
                            info: '业务发展稳定，快速成长，<br/>用人需求攀升',
                            // info:'行业的品牌影响力<br/>'+
                            //     '人力资源行业内拥有良好口碑<br/>'+
                            //     '对校园群体的吸引力<br/>'+
                            //     '企业的发展空间与潜力',
                            backgroundPosition:setRem(-700)+' '+setRem(-50*10)
                        },{
                            icon:'none',
                            height:setRem(33 * 2 + 26 + 2 + 45),
                            title:'凝聚力',
                            info: '组织结构及公司运作机制上<br/>具有先进性与成熟度',
                            // info:'集体效能，权力分配、归属心里<br/>在共同责任目标上的统一感',
                            backgroundPosition:setRem(-700)+' '+setRem(-50*9)
                        },{
                            icon:'none',
                            height:setRem(33 * 2 + 26 + 2 + 45),
                            title:'组织力',
                            info: '企业文化建设及雇主品牌<br/>打造与传播上，具有突出表现',
                            // info:'企业具有方向作用的引领力、<br/>向心作用的凝聚力、引擎作用的战斗力',
                            backgroundPosition:setRem(-700)+' '+setRem(-50*11),
                            classname:'none-outer'
                        } /*,{
                            icon:'none',
                            height:setRem(33 * 4 + 26 + 2 + 45),
                            title:'幸福力',
                            info:'有竞争力的底薪和薪酬激励<br/>'+
                                '人性化的福利<br/>'+
                                '舒适的环境和开放的氛围<br/>'+
                                '不断改进的企业文化<br/>',
                            backgroundPosition:setRem(-700)+' '+setRem(-50*12)
                        },{
                            icon:'none',
                            height:setRem(33 * 3 + 26 + 2 + 45),
                            title:'牵引力',
                            info:'尊重员工个人发展意愿<br/>'+
                                '系统的员工培训体系<br/>'+
                                '个人提升的机会与空间',
                            backgroundPosition:setRem(-700)+' '+setRem(-50*13),
                            classname:'none-outer'
                        } */
                    ]
                },{
                    l:680,
                    t:615,
                    name:'奖项设置',
                    listStatus:true,
                    totalHeight:902+33,  // 902
                    detail:[
                        {
                            icon:'page2__content--iconall',
                            height:setRem(33 * 3 + 26 + 2 + 45),
                            title:'综合榜',
                            info:'2019拉勾年度卓越TOP雇主<br/>2019拉勾年度领先TOP雇主<br/>2019拉勾年度新锐TOP雇主',
                            backgroundPosition:setRem(-700)+' '+setRem(-50*6)
                        },{
                            icon:'page2__content--iconarea',
                            height:setRem(33 * 3 + 26 + 2 + 45),
                            title:'区域榜',
                            info:' 2019拉勾年度华北区域TOP雇主<br/>2019拉勾年度华东区域TOP雇主<br/>2019拉勾年度华南区域TOP雇主',
                            backgroundPosition:setRem(-700)+' '+setRem(-50*7)
                        },{
                            icon:'page2__content--iconindrustry',
                            height:setRem(33 * 12 + 26 + 2 + 45),
                            title:'行业榜',
                            info:''+
                                '2019拉勾年度电商领域TOP 雇主<br/>'+
                                '2019拉勾年度生活服务领域TOP 雇主<br/>'+
                                '2019拉勾年度金融领域TOP 雇主<br/>'+
                                '2019拉勾年度教育领域TOP 雇主<br/>'+
                                '2019拉勾年度文娱领域TOP 雇主<br/>'+
                                '2019拉勾年度物联网领域TOP 雇主<br/>'+
                                '2019拉勾年度硬件领域TOP 雇主<br/>'+
                                '2019拉勾年度企业服务领域TOP 雇主<br/>'+
                                '2019拉勾年度人工智能领域TOP 雇主<br/>'+
                                '2019拉勾年度全球化领域TOP 雇主<br/>'+
                                '2019拉勾年度社交领域TOP 雇主<br/>'+
                                '2019拉勾年度游戏领域TOP 雇主<br/>',
                            backgroundPosition:setRem(-700)+' '+setRem(-50*8),
                            classname:'none-outer'
                        }
                    ]
                },{
                    l:810,
                    t:615,
                    name:'获奖福利',
                    listStatus:true,
                    totalHeight:670 + 33 * 3,
                    classname:'page2__content--d5',
                    detail:[
                        {
                            icon:'',
                            height:setRem(33 * 7 + 26 + 2 + 45),
                            title:'入围权益',
                            info:'a. 点亮拉勾平台<span class="green">“入围TOP雇主” </span><br/><span class="space">图标一个月；</span><br/>' +
                                'b. 北京拉勾年度TOP雇主<br/><span class="space">颁奖盛典门票一张；</span><br/>' + 
                                'c. 获得拉勾独家出品的<br/><span class="space">《2019互联网行业招聘白皮书》</span><br/><span class="space">实体版及电子版各一份；</span><br/>',
                            // info:'所有报名企业点亮企业主页<span class="green">“TOP雇主角逐中”</span><br/>图标2周；',
                            backgroundPosition:setRem(-700)+' '+setRem(-50*3)
                        },{
                            icon:'',
                            height:setRem(33 * 9 + 26 + 2 + 45),
                            title:'获奖权益',
                            info:'a. 点亮拉勾平台<span class="green">“TOP雇主”</span><br/><span class="space">图标一年；</span><br/>'+
                                'b. 北京拉勾年度TOP雇主<br/><span class="space">颁奖盛典<span class="green">门票一张</span>；</span><br/>'+
                                'c. 获得拉勾独家出品的<br/><span class="space green">《2019互联网行业招聘白皮书》</span><br/><span class="space">实体版及电子版各一份；</span><br/>' + 
                                'd. 面向全媒体公布拉勾2019·<br/><span class="space">中国互联网TOP雇主<span class="green">评选名单</span></span>',
                            backgroundPosition:setRem(-700)+' '+setRem(-50*4),
                            classname:'none-outer'
                        }/* ,{
                            icon:'',
                            height:setRem(33 * 5 + 26 + 2 + 45),
                            title:'获奖福利',
                            info:''+
                                'a. 可点亮企业主页<span class="green">“TOP雇主”</span>图标<span class="green">3个月-</span><br/>'+
                                '<span class="space"></span><span class="green">1年</span>不等，提升雇主品牌影响力；<br/>'+
                                'b. 北京水立方TOP雇主颁奖盛典<span class="green">门票一张；</span><br/>'+
                                'c. 雇主品牌曝光一次<br/>'+
                                'd. 致胜2019招聘秘籍一份<br/>',
                            backgroundPosition:setRem(-700)+' '+setRem(-50*5),
                            classname:'none-outer'
                        }*/
                    ]
                }
            ],
            rankActive:0,
            rankLastActive:0,
            rankActiveIndex:0,//:-1,
            rankSubActive:-1,
            rankListStatus:true,
            showSubListStatus:false,
            rankSearchList:[],
            // 报名
            signupStatus:false,
            signup:{
                companyId:initialCompanyId,
                company:initialText,
                industryfield:initialText,
                user:initialText,
                position:initialText,
                phone:initialPhone,
                awardTypes: []
            },
            awardTypesCN: {},
            signupList:[],
            signupSearchStatus:false,
            signupRequestStatus:false,
            waitingRequest:0,
            industryfieldCN:'',
            companyTips:'',  // * 您输入的企业已经参选TOP雇主，为TA助力吧
            industryfieldTips:'',
            userTips:'',
            positionTips:'',
            phoneTips:'',  // * 请输入正确的电话格式
            rankSearch:'',
            industryfieldStatus:false,
            industryfield:[
                {
                    cn:'电商领域',
                    en:'dsly'
                },{
                    cn:'生活服务领域',
                    en:'shfw'
                },{
                    cn:'游戏领域',
                    en:'yx'
                },{
                    cn:'金融领域',
                    en:'jy'
                }/*,{
                    cn:'知识付费领域',
                    en:'zsff'
                }*/,{
                    cn:'教育领域',
                    en:'jyu'
                },{
                    cn:'文娱领域',
                    en:'wy'
                }, {
                    cn: '物联网领域',
                    en: 'wlw'
                }/*, {
                    cn:'新媒体领域',
                    en:'xmt'
                },{
                    cn:'社交领域',
                    en:'sj'
                }*/,{
                    cn:'硬件领域',
                    en:'yj'
                },{
                    cn:'企业服务领域',
                    en:'qyfw'
                },{
                    cn:'人工智能领域',
                    en:'rgzn'
                },{
                    cn:'全球化领域',
                    en:'qqh'
                },{
                    cn:'社交领域',
                    en:'sj'
                }
            ],
            awardTypesTips: '', // 最多选择两项
            awardListStatus:false,
            awardList: [
                {
                    cn:'年度TOP雇主',
                    en:'ZHL'
                }, {
                    cn:'行业TOP雇主',
                    en:'HYL'
                }, {
                    cn:'区域TOP雇主',
                    en:'QUL'
                }
            ]
        },
        page3:{
            status:'in',
            showVote:false,
            scanStatus:false,
            voteStatus:false,
            createStatus:createStatus,
            voteNum:9988,
            beginClientX:0,
            moveStatus:false, 
            maxwidth:488,
            confirmWords:'向右滑动为企业助力',
            confirmSuccess:false,
            moveLeft:0,
            randomWords:"我努力K掉所有人，<br/>就是为了成为<br/>你心中的<span class='white'>TOP1</span>！"
        },
        mycompany:{
            "employerOptionList":[
	            {
	                "optionName":"年度top雇主",
	                "optionKey":"ZHL",
	                "category":"综合类"
	            },{
	                "optionName":"北京",
	                "optionKey":"QUL",
	                "category":"区域类"
	            },{
	                "optionName":"电商领域",
	                "optionKey":"HYL",
	                "category":"行业类"
	            }
	        ],
	        "shortName":"-",
	        "companyId":0,
	        "logo":"https://www.lgstatic.com/thumbnail_300x300/images/logo_default.png",
            "companyName":"-",
            voteNum:0,
            voteList:[{
                ranking:-1,
                key:0
            },{
                ranking:-1,
                key:1
            },{
                ranking:-1,
                key:2
            }]
        },
        hasVoted:{

        },
        rankActive:0,
        rankLastActive:0,
        rankActiveIndex:0,//-1,
        rankListStatus:true,
        rankData:[],
        rankAllData:[
            [],  // ZHL（综合类）
            [],  // QUL（区域类）
            []   // HYL（行业类）
        ],
        timeupdate:Date.now(),
        rankClassify:[
            /*{
                cn:'2019拉勾年度卓越TOP雇主',
                en:'zygz',
                parent:0
            },*/{
                cn:'2019拉勾年度领先TOP雇主',
                en:'xrgz',
                parent:0
            }/*,{
                cn:'2019拉勾年度新锐TOP雇主',
                en:'zjgz',
                parent:0
            }*/,{
                cn:'电商领域',
                en:'dsly',
                parent:1
            },{
                cn:'生活服务领域',
                en:'shfw',
                parent:1
            },{
                cn:'游戏领域',
                en:'yx',
                parent:1
            },{
                cn:'金融领域',
                en:'jy',
                parent:1
            }/*,{
                cn:'知识付费',
                en:'zsff',
                parent:1
            }*/,{
                cn:'教育领域',
                en:'jyu',
                parent:1
            },{
                cn:'文娱领域',
                en:'wy',
                parent:1
            },{
                cn:'物联网领域',
                en:'wlw',
                parent:1
            }/*,{
                cn:'新媒体',
                en:'xmt',
                parent:1
            }*/,{
                cn:'社交领域',
                en:'sj',
                parent:1
            },{
                cn:'硬件领域',
                en:'yj',
                parent:1
            },{
                cn:'企业服务领域',
                en:'qyfw',
                parent:1
            },{
                cn:'人工智能领域',
                en:'rgzn',
                parent:1
            },{
                cn:'全球化领域',
                en:'qqh',
                parent:1
            }/*,{
                cn:'其他',
                en:'other',
                parent:1
            }*/,{
                cn:'华北区',
                en:'hb',
                parent:2
            },{
                cn:'华东区',
                en:'hd',
                parent:2
            },{
                cn:'华南区',
                en:'hn',
                parent:2
            }
        ],
        rankClassifyCopy:[],
        rankClassifyEmpty:false,
        rankSearchListStatus:false,
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
                data:null,
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
                data:null,
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
            "companyname": "-",
            "companyshortname": "-",
            "companyfeatures": "-",
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
        /*
        {
            "id": 38079,
            "financestage": "不需要融资",
            "logo": "i/image/M00/03/BD/CgqKkVbC5DyAYlIvAAAMhxAJc1Y825.jpg",
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
            "displayContactNum": 20
        },*/
        // 搜索公司轮播，暂时用不着
        // bprevIndex:-1,
        // prevIndex:0,
        // currentIndex:1,
        // nextIndex:2,
        // bnextIndex:3,
        // prevClass:'prev',
        // bprevClass:'',
        // currentClass:'active',
        // bnextClass:'',
        // nextClass:'next',
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
        userTotal:3,
        userUsed:0,
        userRank:0,
        votedCompanyIds:[],
        user:{
            "nickname":"我",
            // "headimgurl":"images/create-logo.png"
        },
        testUserLogo:'',
        successStatus:false,
        giftHref:"https://activity.lagou.com/topic/jplq.html",
        rankStatus:false,
        createStatus:createStatus,
        canvas:null,
        ctx:null,
        down:0,
        url:'',
        loadingArray:[
            loadingHost+"images/page2-bg.png",
            loadingHost+"images/canvas-title.png",
            loadingHost+"images/canvas-top.png",
            loadingHost+"images/page0-logo.png",
            loadingHost+"images/canvas-ercode-bg.png",
            loadingHost+"images/canvas-logo-bg.png",

            loadingHost+"images/create-share01.png",  // 6
            loadingHost+"images/create-share02.png",
            loadingHost+"images/create-share03.png",
            loadingHost+"images/create-share04.png",
            loadingHost+"images/create-share05.png",
            loadingHost+"images/create-share06.png"
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
        drawStatus:false,
        createUserStyle:{

        },
        // 滑动
        isMoving:false,
        scrollData:{
            'search_list': {},
            'rank-center': {},
            'page2__rank--item0':{},
            'page2__rank--item1':{},
            'page2__rank--item2':{},
            'page2__rank--item3':{},
            'page2__signup--search':{},
            'page2__ranksearch--search':{},
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
        qrcodeUrl:function(){
            // var loca = window.location
            // return loca.protocol+'//'+loca.host+'/src/2018-employer/m_index.html?selected='+this.selected.id
            return 'https://activity.lagou.com/activity/dist/2018-employer/m_index.html?selected='+this.selected.id
        },
        getRandomIndex:function(){
            return randomIndex;
        },
        createCode:function(){
            return encodeURIComponent(this.qrcodeUrl)
        },
        getPage2TitleTop:function(){
            var top = 74 + this.heightStatus * 1 / 4;
            return this.setRem(top);
        },
        getPage2InfoTop:function(){
            var top = 304 + this.heightStatus * 5 / 16;
            return this.setRem(top);
        },
        getPage2listTop:function(){
            var top = 384 + this.heightStatus * 9 / 16;
            return this.setRem(top);
        },
        getPage2OneBottom:function(){
            var top = 32 + this.heightStatus * 1 / 8;
            return this.setRem(top);
        },
        getPage2BtnTop:function(){
            var top = 987 + this.heightStatus * 14 / 16;
            return this.setRem(top);
        },
        getPage2RankTop:function(){
            var top = 1084 + this.heightStatus * 15 / 16;
            return this.setRem(top);
        },
        getPage3LogoTop:function(){
            var top = 364 + this.heightStatus * 1 / 8;
            return this.setRem(top);
        },
        getPage3ListTop:function(){
            var top = 769 + this.heightStatus * 10 / 16;
            return this.setRem(top);
        },
        getPage3ListHeight:function(){
            var top = 0 + this.heightStatus * 1 / 8;
            return this.setRem(top);
        },
        getPage3ShareTop:function(){
            var top = 955 + this.heightStatus * 14 / 16;
            return this.setRem(top);
        },
        getPage3RandomTop:function(){
            var top = 0 + this.heightStatus * 10 / 16;
            return this.setRem(top);
        },
        getPage3SuccessTop:function(){
            var top = 597 + this.heightStatus * 9 / 16;
            return this.setRem(top);
        },
        getPage3SaveTop:function(){
            var top = 1145-128 + this.heightStatus * 12 / 16;
            return this.setRem(top);
        },
        getPage2OuterHeight:function(){
            return this.setRem(913+this.heightStatus);
        },
        getPage2RankHeight:function(){
            var height = 746
            if(!this.getSelfRanking){
                height = 890;
            }
            return this.setRem(height+this.heightStatus * 2 / 4);
        },
        getSearchRankHeight:function(){
            var height = 890;
            return this.setRem(height+this.heightStatus * 2 / 4);
        },
        getPage2CloseTop:function(){
            return this.setRem(1060+60+this.heightStatus * 3 / 4);
        },
        getSelfRanking:function(){
            var parent = this.page2,
                index = parent.rankActive,
                data = this.mycompany.voteList;
            if(data[index] && data[index].ranking !== -1){
                return data[index].ranking;
            }
            return undefined
        },
        getRankSubType:function(){
            return false;
            // 当前被选中的子类型
            // var data = this.companyList ? this.companyList.voteList : this.mycompany.voteList,
            //     parent = this.page2,
            //     index = parent.rankSubActive == -1 ? parent.rankActive : parent.rankLastActive,
            //     subIndex = parent.rankActiveIndex != -1 ? parent.rankActiveIndex : 0,
            //     classify = this.rank[parent.rankActive].list[subIndex].classify;
            // if(data[index] && data[index].optionKey == classify){
            //     return true;
            // }
            // return false;
        },
        getMineRank:function(){
            var data = this.companyList ? this.companyList.voteList : this.mycompany.voteList,
                active = this.page2.rankActive,
                i = 0;
            for(i = 0; i < data.length; i++){
                if(data[i] && data[i].key == active && data[i].ranking !== -1){
                    return true;
                }
            }
            return false;
        },
    },
    mounted:function(){
        this.selectedId = getQueryString('selected') || '';
        $('.page2__layer').removeClass('hide');
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
        // this.page3.confirmSuccess = true;
        // this.page3.confirmWords = '活动已结束！';
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
            postEncodingID({
                "data-lg-tj-id":this.lg,
                "data-lg-tj-no":"1000" ,
                "data-lg-tj-cid":"idnull"
            });
        }
        this.initCreateUserStyle();
        // test
        // if(this.isWeiXin()){
        //     this.getUserWeixinData()
        // }
        var rightSize = parseFloat((RC.w / RC.h).toFixed(1)),
            currentSize = parseFloat((GC.w / GC.h).toFixed(1));
        if(rightSize > currentSize){
            this.heightStatus = Math.floor(RC.w / GC.w * GC.h - RC.h);
        }
        // this.dragCompanylList();

        // page2 info
        this.setPage2Info();
        // test
        if(mode !== 'production' && createStatus){
            this.drawStatus = true;
        }
        this.initCanvas();

        // this.setSearchScroll()
        // this.getRankList()
        // var self = this
        // this.$nextTick(function(){
        //     self.rankStatus = true
        //     self.showRankList()
        // })
        // this.successStatus = true
        // this.createPictures()
    },
    methods:{
        noop:function(){},
        to2: function(index) {
            var i = index + ''
            return '00'.slice(i.length) + i
        },
        getFitTop:function(def,ratio){
            return this.setRem(def+this.heightStatus * ratio);
        },
        getRankLast:function(pindex,iindex,index){
            var data = this.rankAllData[pindex];
            return iindex == data.length - 1 && index == data[iindex].companyTopInfo.length - 1;
            // return index == this.rankData.length - 1;
            // var index = this.page2.rankSubActive == -1 ? this.page2.rankActive : this.page2.rankLastActive,
            //     data = this.mycompany.voteList,
            //     len = this.rankData.length,
            //     rank = null;
            // if(data[index]){
            //     // rank = data[index].ranking;
            //     return index == len - 1;
            // }else {
            //     return index == len - 1;
            // }
            // if(index >= 17){
            //     console.log(rank > len ? index == len - 1 : index == len - 2)
            // }
            // return rank > len ? index == len - 1 : index == len - 2
        },
        getSearchRankLast:function(pindex,iindex,index){
            var data = this.page2.rankSearchList;
            return iindex == data.length - 1 && index == data[iindex].companyTopInfo.length - 1;
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
            var total = start+gap * index
            var current = [Math.floor(total / 10), total % 10],
                f = current[0],
                l = current[1];
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
            if(this.signupFromOther){
                this.signupFromOther = false;
                this.showSearchPageEvent();
            }
            this.page2.signupStatus = false;
        },
        showPage2InfoEvent:function(index){
            this.page2.dirActive = index;
            this.page2.dirClass = 'page2CenterLeft'+index;
            this.page2.dirStatus = true;
        },
        introTabChangeEvent:function(index){
            this.page2.dirActive = index;
        },
        showPage2RankEvent:function(){
            // window.location.href = "https://activity.lagou.com/topic/guzhupingxuanpc.html";
            // return;
            this.page2.rankStatus = true;
            this.page2.rankActive = 0;
            this.page2.rankLastActive = 0;
            this.page2.rankActiveIndex = 0; //-1;
            this.page2.rankSubActive = -1;
            this.page2.rankListStatus = true;
            // 排行榜搜索内容清空
            this.rankClassifyCopy = [];
            this.rankSearchListStatus = false;
            this.rankClassifyEmpty = false;
            this.page2.rankSearchList = [];
            this.page2.rankSearch = "";
            this.getRankList(0,this.rank[0].classify,-1,this.page2);
        },
        showPage2SearchRankEvent:function(){
            this.showSearchPageEvent();
        },
        setPage2Info2:function(){
            var self = this;
            this.$nextTick(function(){
                var classname = '',
                    i = 0,
                    bar = null,
                    height = 532,// + this.heightStatus,
                    ratio = 0; 
                for(i = 0; i < self.page2.dir.length; i++){
                    classname = 'info-list--'+i;
                    if(self.page2.dir[i].listStatus){
                        bar = self.$refs[classname+'_bar'][0];
                        bar.style.top = 0;
                        ratio = self.page2.dir[i].totalHeight / height;
                        if(ratio > 1){
                            self.page2.dir[i].listStatus = true;
                            self.scrollData[classname] = new scrollClass({
                                classname: classname,
                                height: height,
                                totalHeight:self.getRem(height),//self.getRem(self.page2.dir[i].totalHeight),
                                length:ratio,
                                number: 1,
                                space: 0,
                                one: height,
                                fixedHeight: false
                            });
                        }else {
                            self.page2.dir[i].listStatus = false;
                        }
                    }else{
                        self.scrollData[classname] = null;
                    }
                }
            });
        },
        setPage2Info:function(){
            var self = this;
            this.$nextTick(function(){
                var classname = '',
                    i = 0,
                    bar = null,
                    height = 567 - 39,// + this.heightStatus,
                    ratio = 0; 
                for(i = 0; i < self.page2.dir.length; i++){
                    classname = 'intro__list--'+i;
                    if(self.page2.dir[i].listStatus){
                        bar = self.$refs[classname+'_bar'][0];
                        bar.style.top = 0;
                        ratio = self.page2.dir[i].totalHeight / height;
                        if(ratio > 1){
                            self.page2.dir[i].listStatus = true;
                            self.scrollData[classname] = new scrollClass({
                                classname: classname,
                                height: height,
                                totalHeight:self.getRem(height),//self.getRem(self.page2.dir[i].totalHeight),
                                length:ratio,
                                number: 1,
                                space: 0,
                                one: height,
                                fixedHeight: false,
                                moveEndCallback:self.moveEndCallback,
                                moveUpCallback:self.moveUpCallback
                            });
                        }else {
                            self.page2.dir[i].listStatus = false;
                            self.scrollData[classname] = {};
                            self.addIntroMoveEvent(classname);

                        }
                    }else{
                        self.scrollData[classname] = {};
                        self.addIntroMoveEvent(classname);
                    }
                }
            });
        },
        addIntroMoveEvent:function(classname){
            var elem = $('.' + classname)[0],
                self = this,
                isMoving = false,
                start = 0,
                moveEndStatus = false,
                secondTimeStatus = false,
                moveUpStatus = false,
                secondUpTimeStatus = false;
            elem.addEventListener('touchstart', startScroll, false);
            elem.addEventListener('touchmove', moveScroll, false);

            function startScroll(e){
                var touch = e.targetTouches[0];
                start = touch.clientY;

                isMoving = false;
                if(moveEndStatus){
                    secondTimeStatus = true;
                }
                if(moveUpStatus){
                    secondUpTimeStatus = true;
                }
            }
            function moveScroll(e){
                isMoving = true;
                var touch = e.targetTouches[0],
                    direction = touch.clientY - start;
                if(Math.abs(direction) > 60){
                    e.stopPropagation();
                }
                direction = direction > 0 ? 1 : -1;
                if(direction > 0){
                    // 移动到顶部：
                    // if(!moveUpStatus){
                    //     moveUpStatus = true;
                    // }else if(secondUpTimeStatus){
                        moveUpStatus = false;
                        secondUpTimeStatus = false;
                        self.moveUpCallback();
                    // }
                }else{
                    // 移动到底部：
                    // if(!moveEndStatus){
                    //     moveEndStatus = true;
                    // }else if(secondTimeStatus){
                        moveEndStatus = false;
                        secondTimeStatus = false;
                        self.moveEndCallback();
                    // }
                }
            }
        },
        moveEndCallback:function(){
            var self = this,
                len = this.page2.dir.length;
            if(this.page2.dirActive < len - 1){
                this.page2.dirTabStatus = true;
                this.page2.dirLast = this.page2.dirActive;
                this.page2.dirNow = this.page2.dirActive + 1;
                setTimeout(function(){
                    self.page2.dirTabStatus = false;
                    self.page2.dirActive = self.page2.dirNow;
                },500);
            }
        },
        moveUpCallback:function(){
            var self = this;
            if(this.page2.dirActive > 0){
                this.page2.dirTabStatus = true;
                this.page2.dirLast = this.page2.dirActive;
                this.page2.dirNow = this.page2.dirActive - 1;
                setTimeout(function(){
                    self.page2.dirTabStatus = false;
                    self.page2.dirActive = self.page2.dirNow;
                },500);
            }
        },
        getIntroAniClassname:function(index){
            if(this.page2.dirTabStatus){
                var last = this.page2.dirLast,
                    now = this.page2.dirNow;
                if(index == last || index == now){
                    if(last > now){
                        // 向上
                        if(index == last){
                            return 'lastMoveDown';
                        }else{
                            return 'nowMoveDown'
                        }
                    }else{
                        if(index == last){
                            return 'lastMoveUp';
                        }else{
                            return 'nowMoveUp'
                        }
                    }
                }
            }
            return '';
        },
        page2RankTabEvent:function(index,classify,iindex){
            var rank = this.rank[index],
                status = true;
            // 点击顶部导航
            this.page2.rankActiveIndex = iindex;
            // 如果当前点击的导航跟上次一样
            if(index == this.page2.rankActive){
                
            }else{
                this.page2.rankActive = index;
                this.page2.rankSearchList = [];
                if(this.rankAllData[index].length == 0){
                    this.getRankList(index,classify,iindex,this.page2);
                }else{
                    this.setRankList(index);
                }
                // if(rank.data){
                //     this.rankData = rank.data;
                //     this.setRankList();
                // }else{
                //     this.getRankList(index,classify,iindex,this.page2);
                // }
            }
        },
        page2RankTabEvent2:function(index,classify,iindex){
            var rank = this.rank[index],
                status = true;
            // 点击顶部导航
            if(iindex == -1){
                this.page2.rankActiveIndex = iindex;
                if(this.page2.showSubListStatus && this.page2.rankActive == index){
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
        setSearchRankScroll:function(){
            var iheight = 890;
            var height = iheight+this.heightStatus * 2 / 4,
                data = this.page2.rankSearchList,
                length = data.length,
                nameHeight = 0,
                sublen = 0,
                index = 3,
                i = 0;
            for(i = 0; i < length; i++){
                sublen += data[i].companyTopInfo.length;
                nameHeight += 47+18+13-28;
            }
            nameHeight -= 15;
            sublen += nameHeight / 146;
            var classname = 'page2__rank--item'+index,
                elem = $('.'+classname),
                bar = elem.find('.' + classname + '_bar'),
                num = height / 146;
            elem.children('ul,.'+classname+'_ul').css('top','0');
            bar.css('top','0');

            if(sublen > num){
                bar.show();
                this.scrollData[classname] = new scrollClass({
                    classname: classname,
                    height: height,
                    totalHeight:this.getRem(height),
                    length:sublen,
                    one: 146,
                    space: 0,
                    number: num
                });
            }else{
                var scrollObj = this.scrollData[classname]
                bar.hide();
                if(scrollObj && scrollObj.removeEvent){
                    scrollObj.removeEvent();
                }
                this.scrollData[classname] = {};
            }
        },
        setRankSearchScroll:function(){
            var classname = 'page2__ranksearch--search',
                elem = $('.'+classname),
                bar = elem.find('.' + classname + '_bar')
            elem.children('ul').css('top','0');
            bar.css('top','0');
            if(this.rankClassifyCopy.length > 6 ){
                bar.show();
                this.scrollData[classname] = new scrollClass({
                    classname: classname,
                    height: 252,
                    totalHeight:this.getRem(252),
                    length:this.rankClassifyCopy.length,
                    space: 0,
                    number: 252 / 42,
                    one: 42,
                    fixedHeight: false
                })
            }else{
                var scrollObj = this.scrollData[classname]
                bar.hide();
                if(scrollObj && scrollObj.removeEvent){
                    scrollObj.removeEvent();
                }
                this.scrollData[classname] = {};
            }
        },
        setRankList:function(index){
            var iheight = 746;
            if(!this.getMineRank){
                iheight = 890;
            }
            var height = iheight+this.heightStatus * 2 / 4,
                data = this.rankAllData[index],
                length = data.length,
                nameHeight = 0,
                sublen = 0,
                i = 0;
            for(i = 0; i < length; i++){
                sublen += data[i].companyTopInfo.length;
                nameHeight += 47+18+13-28;
            }
            nameHeight -= 15;
            // if(this.getSelfRanking < length){
            //     length--;
            // }
            // page2
            var classname = 'page2__rank--item'+index,
                elem = $('.'+classname),
                bar = elem.find('.' + classname + '_bar'),
                num = height / 146;
            elem.children('ul,.'+classname+'_ul').css('top','0');
            bar.css('top','0');

            if(sublen > num){
                bar.show();
                this.scrollData[classname] = new scrollClass({
                    classname: classname,
                    height: height,
                    totalHeight:this.getRem(height),
                    length:sublen+nameHeight / 146,
                    one: 146,
                    space: 0,
                    number: num
                });
            }else{
                var scrollObj = this.scrollData[classname]
                bar.hide();
                if(scrollObj && scrollObj.removeEvent){
                    scrollObj.removeEvent();
                }
                this.scrollData[classname] = {};
            }
        },
        // 修改input内容
        rankSearchEvent:function(){
            var self = this,
                text = this.page2.rankSearch.trim(),
                has = [],
                arr = [],
                len = 0;
            if(text){
                var data = null,
                    i = 0;
                for(i = 0; i < this.rankClassify.length; i++){
                    data = this.rankClassify[i];
                    if(data.cn.indexOf(text) != -1){
                        arr.push(data);
                    }
                }
                if(arr.length){
                    this.rankClassifyCopy = arr;
                    this.rankClassifyEmpty = false;
                    this.timeupdate = Date.now();
                    this.$nextTick(function(){
                        self.setRankSearchScroll();
                    });
                }else{
                    this.rankClassifyCopy = [];
                    this.rankClassifyEmpty = true;
                    this.timeupdate = Date.now();
                    this.$nextTick(function(){
                        self.setRankSearchScroll();
                    });
                }
            }else {
                this.rankClassifyCopy = this.rankClassify;
                this.rankSearchListStatus = true;
                this.rankClassifyEmpty = false;
                this.timeupdate = Date.now();
                this.$nextTick(function(){
                    self.setRankSearchScroll();
                });
            }
            // var text = this.page2.rankSearch.trim(),
            //     has = [],
            //     arr = [],
            //     len = 0;
            // if(text){
            //     var self = this,
            //         data = null,
            //         i = 0,j = 0;
            //     for(i = 0; i < this.rank.length; i++){
            //         data = this.rank[i].list;
            //         for(j = 0; j < data.length; j++){
            //             if(data[j].text.indexOf(text) != -1){
            //                 if(has.indexOf(i) == -1){
            //                     has.push(i);
            //                 }
            //                 arr.push(data[j].classify);
            //             }
            //         }
            //     }
            //     if(arr.length){
            //         for(i = 0; i < has.length; i++){
            //             if(this.rankAllData[has[i]].length == 0){
            //                 len++;
            //                 this.getRankList(has[i],this.rank[has[i]].classify,-1,this.page2,function(){
            //                     len--;
            //                     if(len == 0){
            //                         // 加载完成
            //                         self.setSearchRankList(arr);
            //                     }
            //                 });
            //             }
            //         }
            //         if(len == 0){  // 已获取所有数据
            //             self.setSearchRankList(arr);
            //         }
            //     }
            // }else{
            //     this.page2.rankSearchList = [];
            //     this.page2.rankActive = 0;
            //     if(this.rankAllData[0].length == 0){
            //         this.getRankList(0,'ZHL',-1,this.page2);
            //     }else{
            //         this.setRankList(0);
            //     }
            // }
        },
        setSearchRankList:function(arr){
            var self = this,
                brr = [],
                data = null,
                i = 0, j = 0;
            for(i = 0; i < this.rankAllData.length; i++){
                data = this.rankAllData[i];
                for(j = 0; j < data.length; j++){
                    if(arr.indexOf(data[j].optionKey) != -1){
                        brr.push(data[j]);
                    }
                }
            }
            this.page2.rankActive = -1;
            this.page2.rankSearchList = brr;
            this.timeupdate = Date.now();
            this.$nextTick(function(){
                self.setSearchRankScroll();
            });
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
            this.page2.signupStatus = true;
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
            if(!this.page2.signup[key].trim()){
                this.page2[key+'Tips'] = '* 请输入'+cn;
                return false;
            }else{
                this.page2[key+'Tips'] = '';
                return true;
            }
        },
        checkAwardTypeEvent: function(key, cn) {
            if(this.page2.signup[key].length === 0){
                this.page2[key+'Tips'] = '* 请选择'+cn;
                return false;
            }else{
                this.page2[key+'Tips'] = '';
                return true;
            }
        },
        checkPhoneEvent:function(key){
            var value = this.page2.signup[key],
                isValidPhone = /^1[\d]{10}$/g.test(this.page2.signup[key]);
            if(!isValidPhone) {
                this.page2[key+'Tips'] = '* 请输入正确的电话格式';
                return false;
            }else{
                this.page2[key+'Tips'] = '';
                return true;
            }
        },
        closeSelectLayer: function() {
            this.page2.industryfieldStatus = false;
            this.page2.awardListStatus = false;
        },
        showChooseLayer:function(){
            this.page2.industryfieldStatus = true;
            this.page2.awardListStatus = false;
        },
        chooseIndustryfieldEvent:function(en,cn){
            this.page2.industryfieldStatus = false;
            this.page2.signup.industryfield = en;
            this.page2.industryfieldCN = cn;
        },
        showAwardListLayer: function() {
            this.page2.awardListStatus = true;
            this.page2.industryfieldStatus = false;
        },
        chooseAwardEvent: function(en, cn) {
            var arr = this.page2.signup.awardTypes
            var index = arr.indexOf(en)
            if (arr.length >= 2 && index === -1) {
                this.page2.awardListTips = '* 最多选择两项'
                this.page2.awardListStatus = false;
                return
            }
            if (index === -1) {
                this.page2.awardListTips = ''
                arr.push(en);
                this.page2.awardTypesCN[en] = {
                    index: arr.length,
                    en: en,
                    cn: cn
                }
                if (arr.length === 2) {
                    this.page2.awardListStatus = false;
                }
            } else {
                arr.splice(index, 1)
                delete this.page2.awardTypesCN[en]   
            }
        },
        signupEvent:function(){
            var status = true;
            if(!this.checkNullEvent('company','企业简称')){
                status = false;
            }
            if(!this.checkNullEvent('industryfield','所属行业')){
                status = false;
            }
            if(!this.checkAwardTypeEvent('awardTypes','报名奖项')){
                status = false;
            }
            if(!this.checkNullEvent('user','联系人')){
                status = false;
            }
            if(!this.checkNullEvent('position','联系人职位')){
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
                    signup = this.page2.signup;
                self.selectedId = signup.companyId;
                $.ajax({
                    type: 'get',
                    url: 'https://activity.lagou.com/activityapi/employer/newEmployerSignUp',
                    data:{
                        companyId:signup.companyId,
                        industryfield:signup.industryfield,
                        user:signup.user,
                        position:signup.position,
                        phone:signup.phone,
                        rewardType: signup.awardTypes.join(',')
                    },
                    success: function(result) {
                        if (result.success) {
                            var data = result.content,
                                voteList = self.setCompanyVoteList(data.employerOptionList);

                            self.selected = data;
                            self.selected.voteList = voteList;

                            self.mycompany = data;
                            self.mycompany.voteList = voteList;
                            self.mycompany.companyId = self.selectedId;

                            self.companyList = data;
                            self.companyList.voteList = voteList;
                            self.companyList.companyId = self.selectedId;
                            self.getUserVoteStatus();
                            self.getCompanyInfo(true);
                            // self.showSuccessPage();
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
        // 获取公司信息（已对）
        getCompanyInfo:function(status){
            var self = this;
            if(this.mode == "development"){
                return;
            }
            $.ajax({
                type: 'get',
                url: 'https://activity.lagou.com/activityapi/employer/employerInfo',
                data:{
                    companyId:this.selectedId
                },
                success: function(result) {
                    if (result.success) {
                        var data = result.content,
                            voteList = self.setCompanyVoteList(data.optionList);
                        self.mycompany = data;
                        self.mycompany.voteList = voteList;
                        self.mycompany.companyId = self.selectedId;

                        if(status){
                            self.companyList = data;
                            self.companyList.voteList = voteList;
                            self.companyList.companyId = self.selectedId;
                        }
                        self.showSuccessPage();
                    }
                },
                error: function(xhr, type) {
                    alert('网络原因请重新尝试!');
                }
            });
        },
        showSuccessPage:function(){
            var self = this;
            this.page2.status = 'out';
            PM.data.last = 2;
            PM.data.now = 3;
            setTimeout(function(){
                jQuery(".page").removeClass("pageCurrent").addClass("hide");
                jQuery(".page" + PM.data.last).attr('style','');
                jQuery(".page" + PM.data.now).removeClass("hide").addClass("pageCurrent");
                PM.data.isMoving = false;
                self['page'+PM.data.now].status = 'in';
                self['page'+PM.data.last].status = 'in';
                self.activePage = 3;
            },500);
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
            // this.page3.confirmWords = '您已助力，非常感谢！';
            this.page3.confirmWords = '3次助力已用完，明日再来！';
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
                        // 已投过票
                        self.getCompanyInfo(false);
                        // alert(result.message || result.content);
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
        setSearchScroll:function(data){
            var classname = 'search_list',
                elem = $('.search_list'),
                bar = elem.find('.' + classname + '_bar')
            elem.children('ul').css('top','0');
            bar.css('top','0');
            this.scrollData['search_list'] = new scrollClass({
                classname: classname,
                height: 252,
                totalHeight: this.getRem(252),
                space: 12,
                number: 4.19,
                one: 53,
                length: data.length || 0,
                fixedHeight: false
            })
        },
        // 获取排行榜（未完成）
        getRankList:function(index,classify,iindex,parent,callback){
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
            // // 排行榜大类：传值分别是ZHL（综合类）、QUL（区域类）、HYL（行业类）
            $.ajax({
                type: 'get',
                url: url,
                data:data,
                success: function(result) {
                    if (result.success) {
                        var data = result.content;
                        if(data){
                            var i = 0;
                            if(index == 0){
                                for(i = 0; i < data.length; i++){
                                    data[i].optionName = '2019拉勾年度'+data[i].optionName;
                                }
                            }
                            self.rankAllData[index] = data;
                            if(callback){
                                callback();
                            }else{
                                self.timeupdate = Date.now();
                                self.$nextTick(function(){
                                    self.setRankList(index);
                                });
                            }
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
        // 没用的方法
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
                img.crossOrigin="anonymous";
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
                this.ctx.drawImage(this.loadedImgs[1],239,41);
                this.ctx.drawImage(this.loadedImgs[2],40,32);
                this.ctx.drawImage(this.loadedImgs[3],624 - 34, -129);
                this.ctx.drawImage(this.loadedImgs[4],212,1001);
                this.ctx.drawImage(this.loadedImgs[5],145, 250);
                
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
            var sp = 0,
                sw = 0,
                id = this.selectedId || this.mycompany.companyId,
                url = window.location.href.split('?')[0];
            // if(!getQueryString('selected')){
            //     if(/\?/g.test(url)){
            //         url += '&selected='+id;
            //     }else {
            //         url += '?selected='+id;
            //     }
            // }
            url += '?selected='+id;
            this.down = 0;
            var imgs = [
                    // "https://activity.lagou.com/activityapi/votelike/userHeadImg",
                    "https://activity.lagou.com/activityapi/votelike/image/"+(id || 147)+"/logo",
                    "https://activity.lagou.com/activityapi/employer/qrcode?url="+encodeURIComponent(url)+"&size=120&imageFormat=JPEG"
                    // "https://activity.lagou.com/activityapi/votelike/qrcode/"+this.mycompany.companyId
                    // ercode
                ],
                loadedImgs = [],
                loaded = 0,
                self = this;
            if(saveMode == "development"){
                imgs = [
                    "images/share.png",
                    "images/share.png",
                ]
            }
            imgs.forEach(function(url){
                var img = new Image()
                img.crossOrigin="anonymous"
                img.onload = function(){
                    loaded++
                    if(loaded == imgs.length){
                        self.drawAllInformation()
                    }
                }
                img.onerror = function(){
                    // alert("error: "+url)
                    loaded++
                    if(loaded == imgs.length){
                        self.drawAllInformation()
                    }
                }
                img.src = url
                self.loadedImgs2.push(img)
            })
        },
        drawAllInformation:function(){
            // this.drawUserPicture(this.loadedImgs2[0])
            // this.drawUserInfo()
            var index = randomIndex;// shareRandomIndex >= 8 ? 8 : shareRandomIndex;
            this.ctx.drawImage(this.loadedImgs[6+index],107, 655);
            this.drawCompanyLogo(this.loadedImgs2[0]);
            this.drawCompanyInfo()
            this.drawErcode(this.loadedImgs2[1])

            this.canvasToImage()
        },
        canvasToImage:function(){
            // this.shareSuccessCallback();
            var self = this;
            setTimeout(function(){
                self.url = self.canvas.toDataURL('image/png');
            },1000)
        },
        drawErcode:function(img){
            this.ctx.drawImage(img,0,0,img.width,img.height,216,1009,130,130);
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
                    img.crossOrigin="anonymous";
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
            this.ctx.roundRect(145 + 104, 250 + 6, 255, 255, 12);
            this.ctx.fillStyle = '#ffffff';
            this.ctx.fill();
            this.drawCirclePicture(
                img, // url,// base64,
                145 + 104, 250 + 6,
                255,255,
                12,
                true
            )
        },
        drawCompanyInfo:function(){
            this.ctx.font = "43px normal";
            this.ctx.fillStyle = "#25e49d";
            this.ctx.textAlign = "center";
            // this.mycompany.companyName || 
            this.ctx.fillText(this.mycompany.companyShortName || this.mycompany.shortName, this.canvas.width / 2, 546+43)
        },
        // getBase64("https://z649319834.github.io/Learn_Example/video_track/webvtt.jpg")
        getBase64:function(imgUrl,callback) {
            var img = new Image()
            img.crossOrigin="anonymous";
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
        // 没用方法
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
            if(!this.page2.signup.company){
                this.page2.companyTips = '* 请输入企业名称或企业ID';
                return;
            }
            this.page2.companyTips = '';
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
                    keyword:this.page2.signup.company
                },
                success: function(result) {
                    self.signupRequestStatus = false;
                    if (result.success) {
                        var data = result.content || [];
                        if(data.length > 0){
                            self.page2.signupList = data;
                            self.page2.companyTips = '';
                            self.page2.signupSearchStatus = true;
                            self.$nextTick(function(){
                                self.setSignupSearchScroll();
                            })
                        }else{
                            self.page2.companyTips = '* 您输入的企业不存在';
                            self.page2.signupSearchStatus = false;
                        }
                    } else{ // 查找失败
                        self.page2.companyTips = '* 您输入的企业不存在';
                        self.page2.signupSearchStatus = false;
                    }
                },
                error: function(xhr, type) {
                    self.signupRequestStatus = false;
                    self.page2.companyTips = '网络原因请重新尝试!';
                }
            });
        },
        setSignupSearchScroll:function(){
            var classname = 'page2__signup--search';
            this.$refs['page2__signup--search_ul'].style.top = 0;
            this.$refs['page2__signup--search_bar'].style.top = 0;
            this.scrollData['page2__signup--search'] = new scrollClass({
                classname: classname,
                height: 270,
                totalHeight:this.getRem(305),
                space: 0,
                number: 5.19,
                one: 52,
                fixedHeight: false
            });
        },
        signupSelectCompanyEvent:function(one){
            this.page2.signup.company = one.companyname;
            this.page2.signup.companyId = one.id;
            this.page2.signupSearchStatus = false;
            this.page2.companyTips = '';
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
                            self.search_tips = ''
                            self.searchStatus = true
                            self.$nextTick(function(){
                                self.setSearchScroll(self.search_list)
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
        noop:function(){

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
            self.showSignupStatus = false;
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
        // 没用方法
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
        // 没用方法
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
        showRankClassify:function(){
            var self = this;
            if(!this.page2.rankSearch){
                this.rankClassifyCopy = this.rankClassify;
            }
            this.rankSearchListStatus = true;
            this.timeupdate = Date.now();
            this.$nextTick(function(){
                self.setRankSearchScroll();
            });
        },
        setRankClassify:function(one){
            var self = this,
                has = [],
                brr = [],
                data = null,
                status = false,
                len = 0,
                i = 0, j = 0;
            this.page2.rankSearch = one.cn;
            this.rankSearchListStatus = false;
            if(this.rankAllData[one.parent].length == 0){
                this.getRankList(one.parent,this.rank[one.parent].classify,-1,this.page2,function(){
                    // 加载完成
                    self.rankClassifyCopy = [one];
                    self.setSearchRankList([one.en]);
                });
            }else{
                // 已获取所有数据
                self.rankClassifyCopy = [one];
                self.setSearchRankList([one.en]);
            }
        },
        inputBlurEvent: function() {
            setTimeout(function() {
                var active = document.activeElement
                if (active.tagName !== 'INPUT') {
                    $('html, body').scrollTop(0);
                }
            }, 300);
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