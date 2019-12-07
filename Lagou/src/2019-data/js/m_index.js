"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
            now: 0,
            last: 0,
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
            pageLength: jQuery(".page, .cover").length,
            isMoving: false,
            clickStatus: false
        };
        this._initPageMoveEvent();
    }
    
    _createClass(PageMove, [{
        key: "pageMove",
        value: function pageMove(od, self) {
            // app.$data['page'+self.data.last].status = 'out';
            // app.$data.bottom.status = 'out';
            // if(self.data.last < self.data.now){
            //     app.$data.bottom.direction = 'next';
            // }else{
            //     app.$data.bottom.direction = 'prev';
            // }
            // setTimeout(function(){
            //     jQuery(".page").removeClass("pageCurrent").addClass("hide");
            //     jQuery(".page" + self.data.last).attr('style','');
            //     jQuery(".page" + self.data.now).removeClass("hide").addClass("pageCurrent");
            //     self.data.isMoving = false;
            //     app.$data.flipStatus = false;
            //     app.$data.bottom.status = 'in';
            //     app.$data.page4.tabIndex = 0;
            //     app.$data.page4.status = "in";
            //     app.$data.page4.showStatus = "";
            //     app.$data.page7.tabIndex = 0;
            //     app.$data.page7.status = "in";
            //     app.$data.page7.showStatus = "";
            //     app.$data['page'+self.data.now].status = 'in';
            // },500)
            var now = self.data.now === 0 ? '.cover' : '.page' + (self.data.now-1),
                last = self.data.last === 0 ? '.cover' : '.page' + (self.data.last-1);
            if (self.data.now > 0 && self.data.now < self.data.pageLength - 1) {
                var dot = jQuery('.dotLayer').children('.dot')
                jQuery('.dotLayer').removeClass('hide');
                dot.removeClass('active');
                dot.eq(self.data.now-1).addClass('active');
            } else {
                jQuery('.dotLayer').addClass('hide');
            }
            jQuery(".page, .cover").removeClass("moveDLast")
                           .removeClass("moveDNow")
                           .removeClass("moveULast")
                           .removeClass("moveUNow")
                           .removeClass("pageCurrent")
                           .addClass("hide");
            jQuery(now).removeClass("hide")
                .addClass(self.data.page[od].now)
                .addClass("pageCurrent");
            jQuery(last).removeClass("hide").addClass(self.data.page[od].last);
            if(od == 'up'){
                var lastPage = jQuery(last);
                setTimeout(function(){
                    jQuery(".page, .cover").removeClass("moveDLast")
                        .removeClass("moveDNow")
                        .removeClass("moveULast")
                        .removeClass("moveUNow");
                    jQuery(last).attr('style','').addClass("hide");
                    jQuery(now).removeClass("hide").addClass("pageCurrent");
                    app.$data.flipStatus = false;
                },500);
            }else {
                var lastPage = jQuery(last);
                setTimeout(function(){
                    jQuery(".page, .cover").removeClass("moveDLast")
                            .removeClass("moveDNow")
                            .removeClass("moveULast")
                            .removeClass("moveUNow");
                    jQuery(last).attr('style','').addClass("hide");
                    jQuery(now).removeClass("hide").addClass("pageCurrent");
                    app.$data.flipStatus = false;
                },500)
            }
            setTimeout(function () {
                app.$data.flipStatus = false;
                jQuery(".page, .cover").removeClass("moveDLast")
                           .removeClass("moveDNow")
                           .removeClass("moveULast")
                           .removeClass("moveUNow");
                jQuery(last).attr('style','').addClass("hide");
                jQuery(now).removeClass("hide").addClass("pageCurrent");
                self.data.isMoving = false;
            }, 500);
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
                case 0:
                    break;
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
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
            document.addEventListener("touchstart", function (ev) {
                var touch = ev.targetTouches[0];
                self.data.start.x = touch.clientX;
                self.data.start.y = touch.clientY;
            }, { passive: false });
            document.addEventListener("touchmove", function (ev) {
                ev.preventDefault();
                var touch = ev.targetTouches[0];
                self.data.end.x = touch.clientX;
                self.data.end.y = touch.clientY;
            }, { passive: false });
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
            }, { passive: false });
        }
    }]);

    return PageMove;
}();

var app = null;
var PM = new PageMove({ animation: "move" });
app = new Vue({
    el:"#app",
    data:{
        fontSize: 16,
        heightStatus: 0,
        shortHeight: 0,
        moreWidth: 0,
        pageStatus:true,
        flipStatus:false,  // 翻页状态
        from:'',
        page0:{
            list: [
                0, 1, 2, 3, 4, 5, 6, 7, 8
            ]
        },
        page1:{
            list: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
            ]
        },
        page4: {
            list: [
                'delay3-4', 'delay3-3', 'delay3-2', 'delay3-1', 'delay3-0', 'delay2-9', 'delay2-8'
            ]
        },
        page6:{
            list: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9
            ]
        },
        totalDay:0,
        isiPhone:false,
        testStatus:false,
        showErcode: false
    },
    mounted:function(){
        // this.setDay();
        this.isiPhone = this.ismobile()  == 'iphone' ? true : false;
        this.from = getQueryString('xand');
        if(getQueryString('xtest')){
            this.testStatus = true
        }
        var rightSize = parseFloat((RC.w / RC.h).toFixed(2)),
            currentSize = parseFloat((GC.w / GC.h).toFixed(2));
        this.fontSize = parseFloat(document.getElementsByTagName("html")[0].style.fontSize)
        console.log(rightSize , currentSize)
        if(rightSize > currentSize){
            this.heightStatus = Math.floor(RC.w / GC.w * GC.h - RC.h);
        }else{
            this.shortHeight = Math.floor(RC.h - RC.w / GC.w * GC.h);
            this.moreWidth = Math.floor(RC.h / GC.h * GC.w - RC.w);
        }
    },
    methods:{
        setRem:function(value){
            return value / (750 / 16)+'rem';
        },
        getFitTop:function(def,ratio,max,limit){
            var n = this.heightStatus * ratio;
            n = (max && n > max ? max : n) + (limit ? limit : 0);
            return this.setRem(def+n);
        },
        showErcodeEvent: function() {
            this.showErcode = true
        },
        ismobile:function(){
            var u = navigator.userAgent, app = navigator.appVersion;
            if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
                if(window.location.href.indexOf("?mobile")<0){
                    try{
                        if(/iPhone/i.test(navigator.userAgent)){  // /iPhone|mac|iPod|iPad/i
                            return 'iphone';
                        }else{
                            return 'android';
                        }
                    }catch(e){}
                }
            }else if( u.indexOf('iPad') > -1){
                return 'iphone';
            }else{
                return 'android';
            }
        },
        /***********************************
         * 显示与隐藏
         */
        getRem:function(n){
            return n/(750/16) +'rem'
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
        showPageData:function(){
            this.pageStatus = true;
            this.cover.status = 'out'
            var page0 = document.getElementsByClassName('page0')[0],
                self = this;
            setTimeout(function(){
                page0.className = page0.className.replace(' hide','');
                document.getElementById('cover').className += ' hide';
                PM.data.isMoving = false;
                PM.data.clickStatus = false;
                self.flipStatus = false;
                self.cover.status = 'in';
            },500)
        },
        changePage4Tab:function(value){
            PM.data.clickStatus = true;
            this.page4.showStatus = '-change';
            setTimeout(function(){

            },500);
            this.page4.tabIndex = parseInt(value);
        },
        changePage7Tab:function(value){
            var v = parseInt(value)
            PM.data.clickStatus = true;
            this.page7.showStatus = '-change';
            setTimeout(function(){

            },500);
            this.page7.tabIndex = v;
        },
        showShareLayer:function(){
            this.page8.shareStatus = true;
        },
        hideShareLayer:function(e){
            this.page8.shareStatus = false;
        },
        toBackEvent:function(e){
            if(!this.flipStatus){
                this.flipStatus = true;
                PM.data.last = PM.data.now;
                PM.data.now -= 1;
                PM.pageMove("up",PM);
            }
        },
        toNextEvent:function(e){
            if(!this.flipStatus){
                this.flipStatus = true;
                PM.data.last = PM.data.now;
                PM.data.now += 1;
                PM.pageMove("down",PM);
            }
        },
        btnshowEvent: function(e) {
            this.toNextEvent(e)
        },
        btndownloadEvent: function(e) {
            // 
        }
    }
})
