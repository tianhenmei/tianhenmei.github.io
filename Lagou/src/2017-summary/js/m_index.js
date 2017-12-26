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
            pageLength: jQuery(".page").length,
            isMoving: false,
            clickStatus: false
        };
        this._initPageMoveEvent();
    }
    
    _createClass(PageMove, [{
        key: "pageMove",
        value: function pageMove(od, self) {
            app.$data['page'+self.data.last].status = 'out';
            app.$data.bottom.status = 'out';
            if(self.data.last < self.data.now){
                app.$data.bottom.direction = 'next';
            }else{
                app.$data.bottom.direction = 'prev';
            }
            setTimeout(function(){
                jQuery(".page").removeClass("pageCurrent").addClass("hide");
                jQuery(".page" + self.data.last).attr('style','');
                jQuery(".page" + self.data.now).removeClass("hide").addClass("pageCurrent");
                self.data.isMoving = false;
                app.$data.flipStatus = false;
                app.$data.bottom.status = 'in';
                app.$data.page4.tabIndex = 0;
                app.$data.page4.status = "in";
                app.$data.page4.showStatus = "";
                app.$data.page7.tabIndex = 0;
                app.$data.page7.status = "in";
                app.$data.page7.showStatus = "";
                app.$data['page'+self.data.now].status = 'in';
            },500)
            
            // jQuery(".page" + self.data.now).removeClass("hide").addClass("pageCurrent");
            // jQuery(".page").removeClass("moveDLast")
            //                .removeClass("moveDNow")
            //                .removeClass("moveULast")
            //                .removeClass("moveUNow")
            //                .removeClass("moveADLast")
            //                .removeClass("pageCurrent")
            //                .addClass("hide");
            // jQuery(".page" + self.data.now).removeClass("hide")
            //     .addClass(self.data.page[od].now)
            //     .addClass("pageCurrent");
            // jQuery(".page" + self.data.last).removeClass("hide").addClass(self.data.page[od].last);
            // if(od == 'up'){
            //     var lastPage = jQuery(".page" + self.data.last);
            //     setTimeout(function(){
            //         jQuery(".page").removeClass("moveDLast")
            //             .removeClass("moveDNow")
            //             .removeClass("moveULast")
            //             .removeClass("moveUNow")
            //             .removeClass("moveADLast");
            //         jQuery(".page" + self.data.last).attr('style','').addClass("hide");
            //         jQuery(".page" + self.data.now).removeClass("hide").addClass("pageCurrent");
            //         app.$data.flipStatus = false;
            //     },500);
            // }else {
            //     var lastPage = jQuery(".page" + self.data.last);
            //     setTimeout(function(){
            //         jQuery(".page").removeClass("moveDLast")
            //                 .removeClass("moveDNow")
            //                 .removeClass("moveULast")
            //                 .removeClass("moveUNow")
            //                 .removeClass("moveADLast");
            //         jQuery(".page" + self.data.last).attr('style','').addClass("hide");
            //         jQuery(".page" + self.data.now).removeClass("hide").addClass("pageCurrent");
            //         app.$data.flipStatus = false;
            //     },500)
            // }
            // setTimeout(function () {
            //     app.$data.flipStatus = false;
            //     // if(app.$data.isiPhone){
                    
            //     // }
            //     jQuery(".page").removeClass("moveDLast")
            //                .removeClass("moveDNow")
            //                .removeClass("moveULast")
            //                .removeClass("moveUNow");
            //     jQuery(".page" + self.data.last).attr('style','').addClass("hide");
            //     jQuery(".page" + self.data.now).removeClass("hide").addClass("pageCurrent");
            //     self.data.isMoving = false;
            // }, 500);
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
                case 9:
                case 10:
                    var dataname = 'data'+(self.data.now - 1);
                    if (self.data.direction.x == "up") {
                        if(app.$data[dataname].current == app.$data[dataname].length - 1){
                        }else {
                            app.$data[dataname].current += 1;
                            self._dataMove(od,self);
                            break;
                        }
                    } else {
                        if(app.$data[dataname].current == 0){
                        }else {
                            od = "up";
                            app.$data[dataname].current -= 1;
                            self._dataMove(od,self);
                            break;
                        }
                    }
                default:
                    self.data.last = self.data.now;
                    if (self.data.direction.x == "up") {
                        self.data.now += 1;
                    } else {
                        // if(self.data.now == 8){
                        //     self.data.isMoving = false;
                        //     self.data.clickStatus = false;
                        //     app.$data.flipStatus = false;
                        //     return;
                        // }
                        self.data.now -= 1;
                        od = "up";
                    }

                    // console.log(self.data.now);
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
            }, false);
            document.addEventListener("touchmove", function (ev) {
                ev.preventDefault();
                var touch = ev.targetTouches[0];
                self.data.end.x = touch.clientX;
                self.data.end.y = touch.clientY;
            }, false);
            document.addEventListener("touchend", function (ev) {
                var initdisc = 40,
                    disc = self.data.end.x == 0 ? false : Math.abs(self.data.end.x - self.data.start.x) > initdisc;
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
            }, false);
        }
    }]);

    return PageMove;
}();

var app = null;
var PM = new PageMove({ animation: "move" });
app = new Vue({
    el:"#app",
    data:{
        pageStatus:false,
        flipStatus:false,  // 翻页状态
        from:'',
        cover:{
            status:'in',
            "animation-in":{
                'cover':'',
                'center':'rightTopIn delay0-5',
                'logo':'leftIn delay0-5',
                'time':'opacityChange15 delay1-0',
                'title':'bottomIn80 delay1-0',
                'detail':'bottomIn80 delay1-2',
                'btn':'bottomIn80 delay1-4'
            },
            'animation-out':{
                'cover':'opacityChangeOut delay0',
                'center':'rightTopOut delay0',
                'logo':'leftOut delay0',
                'time':'opacityChangeOut delay0',
                'title':'bottomOut80 delay0',
                'detail':'bottomOut80 delay0',
                'btn':'bottomOut80 delay0'
            }
        },
        bottom:{
            "status":"in",
            "direction":"next",
            "animation-in-prev":{
                'prev':'leftIn delay0-5',
                'prevLine':'',
                'logo':'bottomIn delay0-5',
                'next':'rightIn delay0-5',
                'nextLine':'',
                'nextInfinite':'rightInfinite delay1-0'
            },
            "animation-in-next":{
                'prev':'leftIn delay0-5',
                'prevLine':'',
                'logo':'bottomIn delay0-5',
                'next':'rightIn delay0-5',
                'nextLine':'',
                'nextInfinite':'rightInfinite delay1-0'
            },
            "animation-out-prev":{
                'prev':'opacityChangeOut delay0',
                'prevLine':'rightOpacityOut delay0',
                'logo':'opacityChangeOut delay0',
                'next':'',
                'nextLine':'',
            },
            "animation-out-next":{
                'prev':'opacityChangeOut delay0',
                'prevLine':'',
                'logo':'opacityChangeOut delay0',
                'next':'',
                'nextLine':'leftOpacityOut delay0',
            }
        },
        page0:{
            status:'in',
            "animation-in":{
                'title-bg':'opacityChange delay1-2',
                'title':'leftIn delay0-8',
                'number':'rightTopIn delay0-5',
                'subtitle':'opacityChange delay1-5',
                'from':'littleTopIn delay2-0',
                'ratio':'littleTopIn delay2-2',
                'increase':'littleTopIn delay2-4',
                'content':'opacityChange delay2-0',
                'li0':{
                    one:'opacityChange delay2-0',
                    child:{
                        'num':'opacityChange delay2-2',
                        'value':'heightChange delay2-4',
                        'value2':'heightChange delay2-4',
                        'num2':'opacityChange delay2-2',
                        'name':'opacityChange delay2-0',
                    }
                },
                'li1':{
                    one:'opacityChange delay2-0',
                    child:{
                        'num':'opacityChange delay2-2',
                        'value':'heightChange delay2-4',
                        'value2':'heightChange delay2-4',
                        'num2':'opacityChange delay2-2',
                        'name':'opacityChange delay2-0',
                    }
                },
                'li2':{
                    one:'opacityChange delay2-0',
                    child:{
                        'num':'opacityChange delay2-2',
                        'value':'heightChange delay2-4',
                        'value2':'heightChange delay2-4',
                        'num2':'opacityChange delay2-2',
                        'name':'opacityChange delay2-0',
                    }
                },
                'li3':{
                    one:'opacityChange delay2-0',
                    child:{
                        'num':'opacityChange delay2-2',
                        'value':'heightChange delay2-4',
                        'value2':'heightChange delay2-4',
                        'num2':'opacityChange delay2-2',
                        'name':'opacityChange delay2-0',
                    }
                },
                'li4':{
                    one:'opacityChange delay2-0',
                    child:{
                        'num':'opacityChange delay2-2',
                        'value':'heightChange delay2-4',
                        'value2':'heightChange delay2-4',
                        'num2':'opacityChange delay2-2',
                        'name':'opacityChange delay2-0',
                    }
                },
                'li5':{
                    one:'opacityChange delay2-0',
                    child:{
                        'num':'opacityChange delay2-2',
                        'value':'heightChange delay2-4',
                        'value2':'heightChange delay2-4',
                        'num2':'opacityChange delay2-2',
                        'name':'opacityChange delay2-0',
                    }
                },
                'li6':{
                    one:'opacityChange delay2-0',
                    child:{
                        'num':'opacityChange delay2-2',
                        'value':'heightChange delay2-4',
                        'value2':'heightChange delay2-4',
                        'num2':'opacityChange delay2-2',
                        'name':'opacityChange delay2-0',
                    }
                },
                'li7':{
                    one:'opacityChange delay2-0',
                    child:{
                        'num':'opacityChange delay2-2',
                        'value':'heightChange delay2-4',
                        'value2':'heightChange delay2-4',
                        'num2':'opacityChange delay2-2',
                        'name':'opacityChange delay2-0',
                    }
                },
                'li8':{
                    one:'opacityChange delay2-0',
                    child:{
                        'num':'opacityChange delay2-2',
                        'value':'heightChange delay2-4',
                        'value2':'heightChange delay2-4',
                        'num2':'opacityChange delay2-2',
                        'name':'opacityChange delay2-0',
                    }
                },
                'li9':{
                    one:'opacityChange delay2-0',
                    child:{
                        'num':'opacityChange delay2-2',
                        'value':'heightChange delay2-4',
                        'value2':'heightChange delay2-4',
                        'num2':'opacityChange delay2-2',
                        'name':'opacityChange delay2-0',
                    }
                },
                'li10':{
                    one:'opacityChange delay2-0',
                    child:{
                        'num':'opacityChange delay2-2',
                        'value':'heightChange delay2-4',
                        'value2':'heightChange delay2-4',
                        'num2':'opacityChange delay2-2',
                        'name':'opacityChange delay2-0',
                    }
                },
                'li11':{
                    one:'opacityChange delay2-0',
                    child:{
                        'num':'opacityChange delay2-2',
                        'value':'heightChange delay2-4',
                        'value2':'heightChange delay2-4',
                        'num2':'opacityChange delay2-2',
                        'name':'opacityChange delay2-0',
                    }
                },
                'li12':{
                    one:'opacityChange delay2-0',
                    child:{
                        'num':'opacityChange delay2-2',
                        'value':'heightChange delay2-4',
                        'value2':'heightChange delay2-4',
                        'num2':'opacityChange delay2-2',
                        'name':'opacityChange delay2-0',
                    }
                },
                'li13':{
                    one:'opacityChange delay2-0',
                    child:{
                        'num':'opacityChange delay2-2',
                        'value':'heightChange delay2-4',
                        'value2':'heightChange delay2-4',
                        'num2':'opacityChange delay2-2',
                        'name':'opacityChange delay2-0',
                    }
                },
                'li14':{
                    one:'opacityChange delay2-0',
                    child:{
                        'num':'opacityChange delay2-2',
                        'value':'heightChange delay2-4',
                        'value2':'heightChange delay2-4',
                        'num2':'opacityChange delay2-2',
                        'name':'opacityChange delay2-0',
                    }
                },
                'li15':{
                    one:'opacityChange delay2-0',
                    child:{
                        'num':'opacityChange delay2-2',
                        'value':'heightChange delay2-4',
                        'value2':'heightChange delay2-4',
                        'num2':'opacityChange delay2-2',
                        'name':'opacityChange delay2-0',
                    }
                },
            },
            'animation-out':{
                'title-bg':'opacityChangeOut delay0',
                'title':'leftOut delay0',
                'number':'rightTopOut delay0',
                'subtitle':'opacityChangeOut delay0',
                'from':'littleTopOut delay0',
                'ratio':'littleTopOut delay0',
                'increase':'littleTopOut delay0',
                'content':'opacityChangeOut delay0',
                'li0':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li1':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li2':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li3':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li4':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li5':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li6':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li7':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li8':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li9':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li10':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li11':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li12':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li13':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li14':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li15':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                }
            },
        },
        page1:{
            status:'in',
            "animation-in":{
                'title-bg':'opacityChange delay0-8',
                'title':'leftIn delay0-3',
                'number':'rightTopIn delay0',
                'subtitle':'opacityChange delay1-1',
                'content':'opacityChange delay1-1',
                'center':'rotate360 page1ZoomCenter delay1-5 duration1-0',
                'li1':{  // tech
                    'bg':'zoomChange page1ZoomCenterBG1 delay1-5 duration1-0',
                    'name':'opacityChange delay1-7',
                    'value':'opacityChange delay1-9',
                    'sex-ratio':'zoomChange page1ZoomCenterRatio1 delay2-1'
                },
                'li3':{ // operation
                    'bg':'zoomChange page1ZoomCenterBG3 delay1-7',
                    'name':'opacityChange delay1-9',
                    'value':'opacityChange delay2-1',
                    'sex-ratio':'zoomChange page1ZoomCenterRatio3 delay2-3'
                },
                'li4':{ // market
                    'bg':'zoomChange page1ZoomCenterBG4 delay1-9',
                    'name':'opacityChange delay2-1',
                    'value':'opacityChange delay2-3',
                    'sex-ratio':'page1ZoomCenterRatio4 delay2-5'
                },
                'li0':{ // design
                    'bg':'zoomChange page1ZoomCenterBG0 delay2-1',
                    'name':'opacityChange delay2-3',
                    'value':'opacityChange delay2-5',
                    'sex-ratio':'page1ZoomCenterRatio0 delay2-7',
                },
                'li5':{  // function
                    'bg':'zoomChange page1ZoomCenterBG5 delay2-3',
                    'name':'opacityChange delay2-5',
                    'value':'opacityChange delay2-7',
                    'sex-ratio':'page1ZoomCenterRatio5 delay2-9'
                },
                'li2':{  // production
                    'bg':'',
                    'name':'opacityChange delay2-7',
                    'value':'opacityChange delay2-9',
                    'sex-ratio':'page1ZoomCenterRatio2 delay3-1'
                },
                'bubble':'zoomChange page1ZoomBulle delay2-5',
                'origin':'opacityChange delay2-3'
            },
            'animation-out':{
                'title-bg':'opacityChangeOut delay0',
                'title':'leftOut delay0',
                'number':'rightTopOut delay0',
                'subtitle':'opacityChangeOut delay0',
                'content':'opacityChangeOut delay0',
                'center':'rotate360Out page1ZoomCenter delay0',
                'li0':{'bg':'','name':'','value':'','sex-ratio':''},
                'li1':{'bg':'','name':'','value':'','sex-ratio':''},
                'li2':{'bg':'','name':'','value':'','sex-ratio':''},
                'li3':{'bg':'','name':'','value':'','sex-ratio':''},
                'li4':{'bg':'','name':'','value':'','sex-ratio':''},
                'li5':{'bg':'','name':'','value':'','sex-ratio':''},
                'bubble':'zoomChangeOut delay0',
                'origin':'opacityChangeOut delay0'
            }
        },
        page2:{
            status:'in',
            "animation-in":{
                'title-bg':'opacityChange delay1-2',
                'title':'leftIn delay0-8',
                'number':'rightTopIn delay0-5',
                'subtitle':'opacityChange delay1-5',
                'from':'littleTopIn delay2-0',
                'ratio':'littleTopIn delay2-2',
                'increase':'littleTopIn delay2-4',
                'content':'opacityChange delay2-6',
                'li0':{
                    one:'opacityChange delay2-8',
                    child:{
                        'num':'littleBottomIn delay3-5',
                        'value':'opacityChange delay3-5',
                        'value-c':'opacityChange delay3-5',
                        'value2':'heightChange delay3-0',
                        'num2':'opacityChange delay2-8',
                        'name':'opacityChange delay2-8',
                    }
                },
                'li1':{
                    one:'opacityChange delay2-8',
                    child:{
                        'num':'littleBottomIn delay3-6',
                        'value':'opacityChange delay3-6',
                        'value-c':'opacityChange delay3-6',
                        'value2':'heightChange delay3-0',
                        'num2':'opacityChange delay2-8',
                        'name':'opacityChange delay2-8',
                    }
                },
                'li2':{
                    one:'opacityChange delay2-8',
                    child:{
                        'num':'littleBottomIn delay3-7',
                        'value':'opacityChange delay3-7',
                        'value-c':'opacityChange delay3-7',
                        'value2':'heightChange delay3-0',
                        'num2':'opacityChange delay2-8',
                        'name':'opacityChange delay2-8',
                    }
                },
                'li3':{
                    one:'opacityChange delay2-8',
                    child:{
                        'num':'littleBottomIn delay3-8',
                        'value':'opacityChange delay3-8',
                        'value-c':'opacityChange delay3-8',
                        'value2':'heightChange delay3-0',
                        'num2':'opacityChange delay2-8',
                        'name':'opacityChange delay2-8',
                    }
                },
                'li4':{
                    one:'opacityChange delay2-8',
                    child:{
                        'num':'littleBottomIn delay3-9',
                        'value':'opacityChange delay3-9',
                        'value-c':'opacityChange delay3-9',
                        'value2':'heightChange delay3-0',
                        'num2':'opacityChange delay2-8',
                        'name':'opacityChange delay2-8',
                    }
                },
                'li5':{
                    one:'opacityChange delay2-8',
                    child:{
                        'num':'littleBottomIn delay4-0',
                        'value':'opacityChange delay4-0',
                        'value-c':'opacityChange delay4-0',
                        'value2':'heightChange delay3-0',
                        'num2':'opacityChange delay2-8',
                        'name':'opacityChange delay2-8',
                    }
                },
                'li6':{
                    one:'opacityChange delay2-8',
                    child:{
                        'num':'littleBottomIn delay4-1',
                        'value':'opacityChange delay4-1',
                        'value-c':'opacityChange delay4-1',
                        'value2':'heightChange delay3-0',
                        'num2':'opacityChange delay2-8',
                        'name':'opacityChange delay2-8',
                    }
                },
                'li7':{
                    one:'opacityChange delay2-8',
                    child:{
                        'num':'littleBottomIn delay4-2',
                        'value':'opacityChange delay4-2',
                        'value-c':'opacityChange delay4-2',
                        'value2':'heightChange delay3-0',
                        'num2':'opacityChange delay2-8',
                        'name':'opacityChange delay2-8',
                    }
                },
                'li8':{
                    one:'opacityChange delay2-8',
                    child:{
                        'num':'littleBottomIn delay4-3',
                        'value':'opacityChange delay4-3',
                        'value-c':'opacityChange delay4-3',
                        'value2':'heightChange delay3-0',
                        'num2':'opacityChange delay2-8',
                        'name':'opacityChange delay2-8',
                    }
                },
                'li9':{
                    one:'opacityChange delay2-8',
                    child:{
                        'num':'littleBottomIn delay4-4',
                        'value':'opacityChange delay4-4',
                        'value-c':'opacityChange delay4-4',
                        'value2':'heightChange delay3-0',
                        'num2':'opacityChange delay2-8',
                        'name':'opacityChange delay2-8',
                    }
                },
                'li10':{
                    one:'opacityChange delay2-8',
                    child:{
                        'num':'littleBottomIn delay4-5',
                        'value':'opacityChange delay4-5',
                        'value-c':'opacityChange delay4-5',
                        'value2':'heightChange delay3-0',
                        'num2':'opacityChange delay2-8',
                        'name':'opacityChange delay2-8',
                    }
                },
                'li11':{
                    one:'opacityChange delay2-8',
                    child:{
                        'num':'littleBottomIn delay4-6',
                        'value':'opacityChange delay4-6',
                        'value-c':'opacityChange delay4-6',
                        'value2':'heightChange delay3-0',
                        'num2':'opacityChange delay2-8',
                        'name':'opacityChange delay2-8',
                    }
                },
                'li12':{
                    one:'opacityChange delay2-8',
                    child:{
                        'num':'littleBottomIn delay4-7',
                        'value':'opacityChange delay4-7',
                        'value-c':'opacityChange delay4-7',
                        'value2':'heightChange delay3-0',
                        'num2':'opacityChange delay2-8',
                        'name':'opacityChange delay2-8',
                    }
                },
                'li13':{
                    one:'opacityChange delay2-8',
                    child:{
                        'num':'littleBottomIn delay4-8',
                        'value':'opacityChange delay4-8',
                        'value-c':'opacityChange delay4-8',
                        'value2':'heightChange delay3-0',
                        'num2':'opacityChange delay2-8',
                        'name':'opacityChange delay2-8',
                    }
                },
                'li14':{
                    one:'opacityChange delay2-8',
                    child:{
                        'num':'littleBottomIn delay4-9',
                        'value':'opacityChange delay4-9',
                        'value-c':'opacityChange delay4-9',
                        'value2':'heightChange delay3-0',
                        'num2':'opacityChange delay2-8',
                        'name':'opacityChange delay2-8',
                    }
                },
                'li15':{
                    one:'opacityChange delay2-8',
                    child:{
                        'num':'littleBottomIn delay5-0',
                        'value':'opacityChange delay5-0',
                        'value-c':'opacityChange delay5-0',
                        'value2':'heightChange delay3-0',
                        'num2':'opacityChange delay2-8',
                        'name':'opacityChange delay2-8',
                    }
                },
                'curve':'widthChange delay3-5 duration1-5'
            },
            'animation-out':{
                'title-bg':'opacityChangeOut delay0',
                'title':'leftOut delay0',
                'number':'rightTopOut delay0',
                'subtitle':'opacityChangeOut delay0',
                'from':'littleTopOut delay0',
                'ratio':'littleTopOut delay0',
                'increase':'littleTopOut delay0',
                'content':'opacityChangeOut delay0',
                'curve':'widthChangeOut delay0',
                'li0':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li1':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li2':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li3':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li4':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li5':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li6':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li7':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li8':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li9':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li10':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li11':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li12':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li13':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li14':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li15':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                }
            }
        },
        page3:{
            status:'in',
            "animation-in":{
                'title-bg':'opacityChange delay1-2',
                'title':'leftIn delay0-8',
                'number':'rightTopIn delay0-5',
                'subtitle':'opacityChange delay1-5',
                'from':'littleTopIn delay2-0',
                'ratio':'littleTopIn delay2-2',
                'ratio2':'littleTopIn delay2-4',
                'increase':'littleTopIn delay2-6',
                'content':'opacityChange delay2-8',
                'li0':{
                    one:'opacityChange delay2-8',
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'widthChange delay3-0',
                        'value2':'widthChange delay3-0',
                        'num':'opacityChange delay3-5'
                    }
                },
                'li1':{
                    one:'opacityChange delay2-8',
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'widthChange delay3-2',
                        'value2':'widthChange delay3-2',
                        'num':'opacityChange delay3-7'
                    }
                },
                'li2':{
                    one:'opacityChange delay2-8',
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'widthChange delay3-4',
                        'value2':'widthChange delay3-4',
                        'num':'opacityChange delay3-9'
                    }
                },
                'li3':{
                    one:'opacityChange delay2-8',
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'widthChange delay3-6',
                        'value2':'widthChange delay3-6',
                        'num':'opacityChange delay4-1'
                    }
                },
                'li4':{
                    one:'opacityChange delay2-8',
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'widthChange delay3-8',
                        'value2':'widthChange delay3-8',
                        'num':'opacityChange delay4-3'
                    }
                },
                'li5':{
                    one:'opacityChange delay2-8',
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'widthChange delay4-0',
                        'value2':'widthChange delay4-0',
                        'num':'opacityChange delay4-5'
                    }
                },
                'li6':{
                    one:'opacityChange delay2-8',
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'widthChange delay4-2',
                        'value2':'widthChange delay4-2',
                        'num':'opacityChange delay4-7'
                    }
                },
                'li7':{
                    one:'opacityChange delay2-8',
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'widthChange delay4-4',
                        'value2':'widthChange delay4-4',
                        'num':'opacityChange delay4-9'
                    }
                },
                'li8':{
                    one:'opacityChange delay2-8',
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'widthChange delay4-6',
                        'value2':'widthChange delay4-6',
                        'num':'opacityChange delay5-1'
                    }
                },
                'li9':{
                    one:'opacityChange delay2-8',
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'widthChange delay4-8',
                        'value2':'widthChange delay4-8',
                        'num':'opacityChange delay5-3'
                    }
                },
                'li10':{
                    one:'opacityChange delay2-8',
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'widthChange delay5-0',
                        'value2':'widthChange delay5-0',
                        'num':'opacityChange delay5-5'
                    }
                },
                'li11':{
                    one:'opacityChange delay2-8',
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'widthChange delay5-2',
                        'value2':'widthChange delay5-2',
                        'num':'opacityChange delay5-7'
                    }
                },
                'x-number':'opacityChange delay2-8'
            },
            'animation-out':{
                'title-bg':'opacityChangeOut delay0',
                'title':'leftOut delay0',
                'number':'rightTopOut delay0',
                'subtitle':'opacityChangeOut delay0',
                'from':'littleTopOut delay0',
                'ratio':'littleTopOut delay0',
                'ratio2':'littleTopOut delay0',
                'increase':'littleTopOut delay0',
                'content':'opacityChangeOut delay0',
                'x-number':'opacityChangeOut delay0',
                'li0':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'widthChangeOut delay0','value2':'widthChangeOut delay0','num2':'','name':''}
                },
                'li1':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'widthChangeOut delay0','value2':'widthChangeOut delay0','num2':'','name':''}
                },
                'li2':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'widthChangeOut delay0','value2':'widthChangeOut delay0','num2':'','name':''}
                },
                'li3':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'widthChangeOut delay0','value2':'widthChangeOut delay0','num2':'','name':''}
                },
                'li4':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'widthChangeOut delay0','value2':'widthChangeOut delay0','num2':'','name':''}
                },
                'li5':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'widthChangeOut delay0','value2':'widthChangeOut delay0','num2':'','name':''}
                },
                'li6':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'widthChangeOut delay0','value2':'widthChangeOut delay0','num2':'','name':''}
                },
                'li7':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'widthChangeOut delay0','value2':'widthChangeOut delay0','num2':'','name':''}
                },
                'li8':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'widthChangeOut delay0','value2':'widthChangeOut delay0','num2':'','name':''}
                },
                'li9':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'widthChangeOut delay0','value2':'widthChangeOut delay0','num2':'','name':''}
                },
                'li10':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'widthChangeOut delay0','value2':'widthChangeOut delay0','num2':'','name':''}
                },
                'li11':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'widthChangeOut delay0','value2':'widthChangeOut delay0','num2':'','name':''}
                }
            }
        },
        page4: {
            tabIndex:0,
            status:'in',
            contentStatis:'in',
            showStatus:'',
            "animation-in-init":{
                'content':'opacityChange delay2-3',
                'c-top-0':'littleTopIn delay2-5',
                'c-top-1':'littleTopIn delay2-5',
                'li0':{
                    one:'opacityChange delay2-8',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay2-8',
                        'num':''
                    }
                },
                'li1':{
                    one:'opacityChange delay3-0',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay3-0',
                        'num':''
                    }
                },
                'li2':{
                    one:'opacityChange delay3-2',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay3-2',
                        'num':''
                    }
                },
                'li3':{
                    one:'opacityChange delay3-4',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay3-4',
                        'num':''
                    }
                },
                'li4':{
                    one:'opacityChange delay3-6',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay3-6',
                        'num':''
                    }
                },
                'li5':{
                    one:'opacityChange delay3-8',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay3-8',
                        'num':''
                    }
                },
                'li6':{
                    one:'opacityChange delay4-0',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay4-0',
                        'num':''
                    }
                },
                'li7':{
                    one:'opacityChange delay4-2',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay4-2',
                        'num':''
                    }
                },
                'li8':{
                    one:'opacityChange delay4-4',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay4-4',
                        'num':''
                    }
                },
                'li9':{
                    one:'opacityChange delay4-6',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay4-6',
                        'num':''
                    }
                },
                'li10':{
                    one:'opacityChange delay4-8',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay4-8',
                        'num':''
                    }
                },
                'li11':{
                    one:'opacityChange delay5-0',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay5-0',
                        'num':''
                    }
                },
                'x0':'zoomInChange delay2-8',
                'x1':'zoomInChange delay3-0',
                'x2':'zoomInChange delay3-2',
                'x3':'zoomInChange delay3-4',
                'x4':'zoomInChange delay3-6',
                'x5':'zoomInChange delay3-8',
                'x6':'zoomInChange delay4-0',
                'x7':'zoomInChange delay4-2',
                'x8':'zoomInChange delay4-4',
                'x9':'zoomInChange delay4-6',
                'x10':'zoomInChange delay4-8',
                'x11':'zoomInChange delay5-0'
            },
            "animation-in":{
                'title-bg':'opacityChange delay1-2',
                'title':'leftIn delay0-8',
                'number':'rightTopIn delay0-5',
                'subtitle':'opacityChange delay1-5',
                'tab':'littleTopIn delay2-0',
                'content':'opacityChange delay2-3',
                'c-top-0':'littleTopIn delay2-5',
                'c-top-1':'littleTopIn delay2-5',
                'li0':{
                    one:'opacityChange delay2-8',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay2-8',
                        'num':''
                    }
                },
                'li1':{
                    one:'opacityChange delay3-0',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay3-0',
                        'num':''
                    }
                },
                'li2':{
                    one:'opacityChange delay3-2',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay3-2',
                        'num':''
                    }
                },
                'li3':{
                    one:'opacityChange delay3-4',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay3-4',
                        'num':''
                    }
                },
                'li4':{
                    one:'opacityChange delay3-6',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay3-6',
                        'num':''
                    }
                },
                'li5':{
                    one:'opacityChange delay3-8',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay3-8',
                        'num':''
                    }
                },
                'li6':{
                    one:'opacityChange delay4-0',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay4-0',
                        'num':''
                    }
                },
                'li7':{
                    one:'opacityChange delay4-2',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay4-2',
                        'num':''
                    }
                },
                'li8':{
                    one:'opacityChange delay4-4',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay4-4',
                        'num':''
                    }
                },
                'li9':{
                    one:'opacityChange delay4-6',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay4-6',
                        'num':''
                    }
                },
                'li10':{
                    one:'opacityChange delay4-8',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay4-8',
                        'num':''
                    }
                },
                'li11':{
                    one:'opacityChange delay5-0',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay5-0',
                        'num':''
                    }
                },
                'x0':'zoomInChange delay2-8',
                'x1':'zoomInChange delay3-0',
                'x2':'zoomInChange delay3-2',
                'x3':'zoomInChange delay3-4',
                'x4':'zoomInChange delay3-6',
                'x5':'zoomInChange delay3-8',
                'x6':'zoomInChange delay4-0',
                'x7':'zoomInChange delay4-2',
                'x8':'zoomInChange delay4-4',
                'x9':'zoomInChange delay4-6',
                'x10':'zoomInChange delay4-8',
                'x11':'zoomInChange delay5-0'
            },
            "animation-in-change":{
                'content':'opacityChange delay0',
                'c-top-0':'littleTopIn delay0',
                'c-top-1':'littleTopIn delay0',
                'li0':{
                    one:'opacityChange delay0',
                    child:{ 'name':'', 'value':'', 'value2':'littleBottomIn delay0', 'num':'' }
                },
                'li1':{
                    one:'opacityChange delay0-2',
                    child:{ 'name':'', 'value':'', 'value2':'littleBottomIn delay0-2', 'num':'' }
                },
                'li2':{
                    one:'opacityChange delay0-4',
                    child:{ 'name':'', 'value':'', 'value2':'littleBottomIn delay0-4', 'num':'' }
                },
                'li3':{
                    one:'opacityChange delay0-6',
                    child:{ 'name':'', 'value':'', 'value2':'littleBottomIn delay0-6', 'num':'' }
                },
                'li4':{
                    one:'opacityChange delay0-8',
                    child:{ 'name':'', 'value':'', 'value2':'littleBottomIn delay0-8', 'num':'' }
                },
                'li5':{
                    one:'opacityChange delay1-0',
                    child:{ 'name':'', 'value':'', 'value2':'littleBottomIn delay1-0', 'num':'' }
                },
                'li6':{
                    one:'opacityChange delay1-2',
                    child:{ 'name':'', 'value':'', 'value2':'littleBottomIn delay1-2', 'num':'' }
                },
                'li7':{
                    one:'opacityChange delay1-4',
                    child:{ 'name':'', 'value':'', 'value2':'littleBottomIn delay1-4', 'num':'' }
                },
                'li8':{
                    one:'opacityChange delay1-6',
                    child:{ 'name':'', 'value':'', 'value2':'littleBottomIn delay1-6', 'num':'' }
                },
                'li9':{
                    one:'opacityChange delay1-8',
                    child:{ 'name':'', 'value':'', 'value2':'littleBottomIn delay1-8', 'num':'' }
                },
                'li10':{
                    one:'opacityChange delay2-0',
                    child:{ 'name':'', 'value':'', 'value2':'littleBottomIn delay2-0', 'num':'' }
                },
                'li11':{
                    one:'opacityChange delay2-2',
                    child:{ 'name':'', 'value':'', 'value2':'littleBottomIn delay2-2', 'num':'' }
                },
                'x0':'zoomInChange delay0',
                'x1':'zoomInChange delay0-2',
                'x2':'zoomInChange delay0-4',
                'x3':'zoomInChange delay0-6',
                'x4':'zoomInChange delay0-8',
                'x5':'zoomInChange delay1-0',
                'x6':'zoomInChange delay1-2',
                'x7':'zoomInChange delay1-4',
                'x8':'zoomInChange delay1-6',
                'x9':'zoomInChange delay1-8',
                'x10':'zoomInChange delay2-0',
                'x11':'zoomInChange delay3-0'
            },
            'animation-out':{
                'title-bg':'opacityChangeOut delay0',
                'title':'leftOut delay0',
                'number':'rightTopOut delay0',
                'subtitle':'opacityChangeOut delay0',
                'tab':'littleTopOut delay0',
                'content':'opacityChangeOut delay0',
                'c-top-0':'littleTopOut delay0',
                'c-top-1':'littleTopOut delay0',
                'li0':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li1':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li2':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li3':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li4':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li5':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li6':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li7':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li8':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li9':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li10':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li11':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                }
            },
            'animation-out-change':{
                'title-bg':'opacityChangeOut delay0',
                'title':'leftOut delay0',
                'number':'rightTopOut delay0',
                'subtitle':'opacityChangeOut delay0',
                'tab':'littleTopOut delay0',
                'content':'opacityChangeOut delay0',
                'c-top-0':'littleTopOut delay0',
                'c-top-1':'littleTopOut delay0',
                'li0':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li1':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li2':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li3':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li4':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li5':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li6':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li7':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li8':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li9':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li10':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li11':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                }
            },
            "animation-in-1":{
                'title-bg':'opacityChange delay1-2',
                'title':'leftIn delay0-8',
                'number':'rightTopIn delay0-5',
                'subtitle':'opacityChange delay1-5',
                'tab':'littleTopIn delay2-0',
                'content':'opacityChange delay2-3',
                'c-top-0':'littleTopIn delay2-5',
                'c-top-1':'littleTopIn delay2-5',
                'detail':'opacityChange delay2-7',
                'li0':{
                    one:'opacityChange delay2-8',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay2-8',
                        'num':''
                    }
                },
                'li1':{
                    one:'opacityChange delay3-0',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay3-0',
                        'num':''
                    }
                },
                'li2':{
                    one:'opacityChange delay3-2',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay3-2',
                        'num':''
                    }
                },
                'li3':{
                    one:'opacityChange delay3-4',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay3-4',
                        'num':''
                    }
                },
                'li4':{
                    one:'opacityChange delay3-6',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay3-6',
                        'num':''
                    }
                },
                'li5':{
                    one:'opacityChange delay3-8',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay3-8',
                        'num':''
                    }
                },
                'li6':{
                    one:'opacityChange delay4-0',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay4-0',
                        'num':''
                    }
                },
                'li7':{
                    one:'opacityChange delay4-2',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay4-2',
                        'num':''
                    }
                },
                'li8':{
                    one:'opacityChange delay4-4',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay4-4',
                        'num':''
                    }
                },
                'li9':{
                    one:'opacityChange delay4-6',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay4-6',
                        'num':''
                    }
                },
                'li10':{
                    one:'opacityChange delay4-8',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay4-8',
                        'num':''
                    }
                },
                'li11':{
                    one:'opacityChange delay5-0',
                    child:{
                        'name':'',
                        'value':'',
                        'value2':'littleBottomIn delay5-0',
                        'num':''
                    }
                },
                'x0':'zoomInChange delay2-8',
                'x1':'zoomInChange delay3-0',
                'x2':'zoomInChange delay3-2',
                'x3':'zoomInChange delay3-4',
                'x4':'zoomInChange delay3-6',
                'x5':'zoomInChange delay3-8',
                'x6':'zoomInChange delay4-0',
                'x7':'zoomInChange delay4-2',
                'x8':'zoomInChange delay4-4',
                'x9':'zoomInChange delay4-6',
                'x10':'zoomInChange delay4-8',
                'x11':'zoomInChange delay5-0'
            },
            "animation-in-1-change":{
                'content':'opacityChange delay0',
                'c-top-0':'littleTopIn delay0',
                'c-top-1':'littleTopIn delay0',
                'detail':'opacityChange delay0',
                'li0':{
                    one:'opacityChange delay0',
                    child:{ 'name':'', 'value':'', 'value2':'littleBottomIn delay0', 'num':'' }
                },
                'li1':{
                    one:'opacityChange delay0-2',
                    child:{ 'name':'', 'value':'', 'value2':'littleBottomIn delay0-2', 'num':'' }
                },
                'li2':{
                    one:'opacityChange delay0-4',
                    child:{ 'name':'', 'value':'', 'value2':'littleBottomIn delay0-4', 'num':'' }
                },
                'li3':{
                    one:'opacityChange delay0-6',
                    child:{ 'name':'', 'value':'', 'value2':'littleBottomIn delay0-6', 'num':'' }
                },
                'li4':{
                    one:'opacityChange delay0-8',
                    child:{ 'name':'', 'value':'', 'value2':'littleBottomIn delay0-8', 'num':'' }
                },
                'li5':{
                    one:'opacityChange delay1-0',
                    child:{ 'name':'', 'value':'', 'value2':'littleBottomIn delay1-0', 'num':'' }
                },
                'li6':{
                    one:'opacityChange delay1-2',
                    child:{ 'name':'', 'value':'', 'value2':'littleBottomIn delay1-2', 'num':'' }
                },
                'li7':{
                    one:'opacityChange delay1-4',
                    child:{ 'name':'', 'value':'', 'value2':'littleBottomIn delay1-4', 'num':'' }
                },
                'li8':{
                    one:'opacityChange delay1-6',
                    child:{ 'name':'', 'value':'', 'value2':'littleBottomIn delay1-6', 'num':'' }
                },
                'li9':{
                    one:'opacityChange delay1-8',
                    child:{ 'name':'', 'value':'', 'value2':'littleBottomIn delay1-8', 'num':'' }
                },
                'li10':{
                    one:'opacityChange delay2-0',
                    child:{ 'name':'', 'value':'', 'value2':'littleBottomIn delay2-0', 'num':'' }
                },
                'li11':{
                    one:'opacityChange delay2-2',
                    child:{ 'name':'', 'value':'', 'value2':'littleBottomIn delay2-2', 'num':'' }
                },
                'x0':'zoomInChange delay0',
                'x1':'zoomInChange delay0-2',
                'x2':'zoomInChange delay0-4',
                'x3':'zoomInChange delay0-6',
                'x4':'zoomInChange delay0-8',
                'x5':'zoomInChange delay1-0',
                'x6':'zoomInChange delay1-2',
                'x7':'zoomInChange delay1-4',
                'x8':'zoomInChange delay1-6',
                'x9':'zoomInChange delay1-8',
                'x10':'zoomInChange delay2-0',
                'x11':'zoomInChange delay3-0'
            },
            'animation-out-1':{
                'title-bg':'opacityChangeOut delay0',
                'title':'leftOut delay0',
                'number':'rightTopOut delay0',
                'subtitle':'opacityChangeOut delay0',
                'tab':'littleTopOut delay0',
                'content':'opacityChangeOut delay0',
                'c-top-0':'littleTopOut delay0',
                'c-top-1':'littleTopOut delay0',
                'detail':'opacityChangeOut delay0',
                'li0':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li1':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li2':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li3':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li4':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li5':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li6':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li7':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li8':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li9':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li10':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li11':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                }
            },
            'animation-out-1-change':{
                'title-bg':'opacityChangeOut delay0',
                'title':'leftOut delay0',
                'number':'rightTopOut delay0',
                'subtitle':'opacityChangeOut delay0',
                'tab':'littleTopOut delay0',
                'content':'opacityChangeOut delay0',
                'c-top-0':'littleTopOut delay0',
                'c-top-1':'littleTopOut delay0',
                'detail':'opacityChangeOut delay0',
                'li0':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li1':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li2':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li3':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li4':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li5':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li6':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li7':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li8':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li9':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li10':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                },
                'li11':{
                    one:'opacityChangeOut delay0',
                    child:{'num':'','value':'','value2':'','num2':'','name':''}
                }
            },
        },
        page5: {
            status:'in',
            "animation-in":{
                'title-bg':'opacityChange delay1-2',
                'title':'leftIn delay0-8',
                'number':'rightTopIn delay0-5',
                'subtitle':'opacityChange delay1-5',
                'content':'opacityChange delay2-0',
                'li0':{
                    info0:'littleBottomIn delay2-2',
                    info1:'littleBottomIn delay2-4',
                    info2:'littleBottomIn delay2-6',
                    cicle:'rotate360 delay2-0',
                    name:'opacityChange delay2-2',
                    d0:'opacityChange delay2-2',
                    d1:'opacityChange delay2-4',
                    d2:'opacityChange delay2-6',
                },
                'li1':{
                    bg:'opacityChange delay2-0',
                    name:'littleTopIn delay2-8',
                    value:'heightChange delay2-4',
                    num:'opacityChange delay2-2'
                },
                'li2':{
                    info0:'littleTopIn delay2-2',
                    info1:'littleTopIn delay2-4',
                    info2:'littleTopIn delay2-6',
                    cicle:'rotate360 delay2-0',
                    name:'opacityChange delay2-2',
                    d0:'opacityChange delay2-2',
                    d1:'opacityChange delay2-4',
                    d2:'opacityChange delay2-6',
                },
                'li3':{
                    info0:'littleTopIn delay2-2',
                    info1:'littleTopIn delay2-4',
                    info2:'littleTopIn delay2-6',
                    info3:'littleTopIn delay2-8',
                    cicle:'rotate360 delay2-0',
                    name:'opacityChange delay2-2',
                    d0:'opacityChange delay2-2',
                    d1:'opacityChange delay2-4',
                    d2:'opacityChange delay2-6',
                    d3:'opacityChange delay2-8',
                },
                'li4':{
                    info0:'littleTopIn delay2-2',
                    info1:'littleTopIn delay2-4',
                    info2:'littleTopIn delay2-6',
                    cicle:'rotate360 delay2-0',
                    name:'opacityChange delay2-2',
                    d0:'opacityChange delay2-2',
                    d1:'opacityChange delay2-4',
                    d2:'opacityChange delay2-6',
                },
                'btn':'littleTopIn delay2-2'
            },
            'animation-out':{
                'title-bg':'opacityChangeOut delay0',
                'title':'leftOut delay0',
                'number':'rightTopOut delay0',
                'subtitle':'opacityChangeOut delay0',
                'content':'opacityChangeOut delay0',
                'li0':{
                    info0:'littleBottomOut delay0',
                    info1:'littleBottomOut delay0',
                    info2:'littleBottomOut delay0',
                    cicle:'rotate360Out delay0',
                    name:'opacityChangeOut delay0',
                    d0:'opacityChangeOut delay0',
                    d1:'opacityChangeOut delay0',
                    d2:'opacityChangeOut delay0',
                },
                'li1':{
                    bg:'opacityChangeOut delay0',
                    name:'littleTopOut delay0',
                    value:'heightChangeOut delay0',
                    num:'opacityChangeOut delay0'
                },
                'li2':{
                    info0:'littleTopOut delay0',
                    info1:'littleTopOut delay0',
                    info2:'littleTopOut delay0',
                    cicle:'rotate360Out delay0',
                    name:'opacityChangeOut delay0',
                    d0:'opacityChangeOut delay0',
                    d1:'opacityChangeOut delay0',
                    d2:'opacityChangeOut delay0',
                },
                'li3':{
                    info0:'littleTopOut delay0',
                    info1:'littleTopOut delay0',
                    info2:'littleTopOut delay0',
                    info3:'littleTopOut delay0',
                    cicle:'rotate360Out delay0',
                    name:'opacityChangeOut delay0',
                    d0:'opacityChangeOut delay0',
                    d1:'opacityChangeOut delay0',
                    d2:'opacityChangeOut delay0',
                    d3:'opacityChangeOut delay0',
                },
                'li4':{
                    info0:'littleTopOut delay0',
                    info1:'littleTopOut delay0',
                    info2:'littleTopOut delay0',
                    cicle:'rotate360Out delay0',
                    name:'opacityChangeOut delay0',
                    d0:'opacityChangeOut delay0',
                    d1:'opacityChangeOut delay0',
                    d2:'opacityChangeOut delay0',
                },
                'btn':'littleTopOut delay0'
            }
        },
        page6: {
            status:'in',
            "animation-in":{
                'title-bg':'opacityChange delay1-2',
                'title':'leftIn delay0-8',
                'subtitle':'opacityChange delay1-5',
                'number':'rightTopIn delay0-5',
                'content':'opacityChange delay1-8',
                'li0':{
                    one:'rotateScale page6ZoomCenter delay1-8',
                    bg:'',
                    water:'skewScale delay2-0',
                    child:{
                        't0':'zoomChange page6ZoomT0 delay2-0',
                        't1':'zoomChange page6ZoomT1 delay2-1',
                        't2':'zoomChange page6ZoomT2 delay2-2',
                        't3':'zoomChange page6ZoomT3 delay2-3',
                        't4':'zoomChange page6ZoomT4 delay2-4',
                        't5':'zoomChange page6ZoomT5 delay2-5'
                    }
                },
                'li1':{
                    one:'opacityChange delay2-5',
                    bg:'opacityChange delay2-5',
                    o0:{
                        'value':'heightChange delay2-9',
                        'num-cn':'opacityChange delay2-7'
                    },
                    o1:{
                        'value':'heightChange delay2-9',
                        'num-cn':'opacityChange delay2-7'
                    },
                    o2:{
                        'value':'heightChange delay2-9',
                        'num-cn':'opacityChange delay2-7'
                    },
                    o3:{
                        'value':'heightChange delay2-9',
                        'num-cn':'opacityChange delay2-7'
                    }
                }
            },
            'animation-out':{
                'title-bg':'opacityChangeOut delay0',
                'title':'leftOut delay0',
                'subtitle':'opacityChangeOut delay0',
                'number':'rightTopOut delay0',
                'content':'opacityChangeOut delay0',
                'li0':{
                    one:'opacityChangeOut delay0',
                    bg:'',
                    water:'opacityChangeOut delay0',
                    child:{
                        't0':'zoomChangeOut page6ZoomT0 delay0',
                        't1':'zoomChangeOut page6ZoomT1 delay0',
                        't2':'zoomChangeOut page6ZoomT2 delay0',
                        't3':'zoomChangeOut page6ZoomT3 delay0',
                        't4':'zoomChangeOut page6ZoomT4 delay0',
                        't5':'zoomChangeOut page6ZoomT5 delay0'
                    }
                },
                'li1':{
                    one:'opacityChangeOut delay0',
                    bg:'opacityChangeOut delay0',
                    o0:{
                        'value':'opacityChangeOut delay0',
                        'num-cn':'opacityChangeOut delay0'
                    },
                    o1:{
                        'value':'opacityChangeOut delay0',
                        'num-cn':'opacityChangeOut delay0'
                    },
                    o2:{
                        'value':'opacityChangeOut delay0',
                        'num-cn':'opacityChangeOut delay0'
                    },
                    o3:{
                        'value':'opacityChangeOut delay0',
                        'num-cn':'opacityChangeOut delay0'
                    }
                }
            }
        },
        page7: {
            tabIndex:0,
            status:'in',
            showStatus:'',
            "animation-in":{
                'title-bg':'opacityChange delay1-2',
                'title':'leftIn delay0-8',
                'number':'rightTopIn delay0-5',
                'subtitle':'opacityChange delay1-5',
                'tab':'littleTopIn delay2-0'
            },
            "animation-in-0":{
                'title-bg':'opacityChange delay1-2',
                'title':'leftIn delay0-8',
                'number':'rightTopIn delay0-5',
                'subtitle':'opacityChange delay1-5',
                'tab':'littleTopIn delay2-0',
                'content':'opacityChange delay2-3',
                'c-top-0':'littleTopIn delay2-5',
                'li0':{
                    one:'opacityChange delay2-8',  // bg
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'heightChange delay3-0',
                        'num':'opacityZoomChange delay3-4'
                    }
                },
                'li1':{
                    one:'opacityChange delay2-8',  // bg
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'heightChange delay3-1',
                        'num':'opacityZoomChange delay3-5'
                    }
                },
                'li2':{
                    one:'opacityChange delay2-8',  // bg
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'heightChange delay3-2',
                        'num':'opacityZoomChange delay3-6'
                    }
                },
                'li3':{
                    one:'opacityChange delay2-8',  // bg
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'heightChange delay3-3',
                        'num':'opacityZoomChange delay3-7'
                    }
                },
                'li4':{
                    one:'opacityChange delay2-8',  // bg
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'heightChange delay3-4',
                        'num':'opacityZoomChange delay3-8'
                    }
                },
                'li5':{
                    one:'opacityChange delay2-8',  // bg
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'heightChange delay3-5',
                        'num':'opacityZoomChange delay3-9'
                    }
                },
                'li6':{
                    one:'opacityChange delay2-8',  // bg
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'heightChange delay3-6',
                        'num':'opacityZoomChange delay4-0'
                    }
                },
                'li7':{
                    one:'opacityChange delay2-8',  // bg
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'heightChange delay3-7',
                        'num':'opacityZoomChange delay4-1'
                    }
                },
                'li8':{
                    one:'opacityChange delay2-8',  // bg
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'heightChange delay3-8',
                        'num':'opacityZoomChange delay4-2'
                    }
                },
                'li9':{
                    one:'opacityChange delay2-8',  // bg
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'heightChange delay3-9',
                        'num':'opacityZoomChange delay4-3'
                    }
                }
            },
            "animation-in-0-change":{
                'content':'opacityChange delay0',
                'c-top-0':'littleTopIn delay0-2',
                'li0':{
                    one:'opacityChange delay0-5',  // bg
                    child:{
                        'name':'opacityChange delay0-8',
                        'value':'heightChange delay1-0',
                        'num':'opacityZoomChange delay1-4'
                    }
                },
                'li1':{
                    one:'opacityChange delay0-5',  // bg
                    child:{
                        'name':'opacityChange delay0-8',
                        'value':'heightChange delay1-1',
                        'num':'opacityZoomChange delay1-5'
                    }
                },
                'li2':{
                    one:'opacityChange delay0-5',  // bg
                    child:{
                        'name':'opacityChange delay0-8',
                        'value':'heightChange delay1-2',
                        'num':'opacityZoomChange delay1-6'
                    }
                },
                'li3':{
                    one:'opacityChange delay0-5',  // bg
                    child:{
                        'name':'opacityChange delay0-8',
                        'value':'heightChange delay1-3',
                        'num':'opacityZoomChange delay1-7'
                    }
                },
                'li4':{
                    one:'opacityChange delay0-5',  // bg
                    child:{
                        'name':'opacityChange delay0-8',
                        'value':'heightChange delay1-4',
                        'num':'opacityZoomChange delay1-8'
                    }
                },
                'li5':{
                    one:'opacityChange delay0-5',  // bg
                    child:{
                        'name':'opacityChange delay0-8',
                        'value':'heightChange delay1-5',
                        'num':'opacityZoomChange delay1-9'
                    }
                },
                'li6':{
                    one:'opacityChange delay0-5',  // bg
                    child:{
                        'name':'opacityChange delay0-8',
                        'value':'heightChange delay1-6',
                        'num':'opacityZoomChange delay2-0'
                    }
                },
                'li7':{
                    one:'opacityChange delay0-5',  // bg
                    child:{
                        'name':'opacityChange delay0-8',
                        'value':'heightChange delay1-7',
                        'num':'opacityZoomChange delay2-1'
                    }
                },
                'li8':{
                    one:'opacityChange delay0-5',  // bg
                    child:{
                        'name':'opacityChange delay0-8',
                        'value':'heightChange delay1-8',
                        'num':'opacityZoomChange delay2-2'
                    }
                },
                'li9':{
                    one:'opacityChange delay0-5',  // bg
                    child:{
                        'name':'opacityChange delay0-8',
                        'value':'heightChange delay1-9',
                        'num':'opacityZoomChange delay2-3'
                    }
                }
            },
            "animation-out":{
                'title-bg':'opacityChangeOut delay0',
                'title':'leftOut delay0',
                'number':'rightTopOut delay0',
                'subtitle':'opacityChangeOut delay0',
                'tab':'littleTopOut delay0',
            },
            'animation-out-0':{
                'content':'opacityChangeOut delay0',
                'c-top-0':'littleTopOut delay0',
                'li0':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li1':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li2':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li3':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li4':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li5':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li6':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li7':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li8':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li9':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                }
            },
            'animation-out-0-change':{
                'content':'opacityChangeOut delay0',
                'c-top-0':'littleTopOut delay0',
                'li0':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li1':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li2':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li3':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li4':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li5':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li6':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li7':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li8':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li9':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                }
            },
            "animation-in-1":{
                'content':'opacityChange delay2-3',
                'c-top-0':'opacityChange delay2-5',
                'c-top-1':'opacityChange delay2-5',
                'li0':{
                    one:'littleBottomIn delay2-8',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li1':{
                    one:'littleBottomIn delay3-0',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li2':{
                    one:'littleBottomIn delay3-2',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li3':{
                    one:'littleBottomIn delay3-4',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li4':{
                    one:'littleBottomIn delay3-6',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li5':{
                    one:'littleBottomIn delay3-8',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li6':{
                    one:'littleBottomIn delay4-0',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li7':{
                    one:'littleBottomIn delay4-2',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li8':{
                    one:'littleBottomIn delay4-4',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li9':{
                    one:'littleBottomIn delay4-6',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
            },
            "animation-in-1-change":{
                'content':'opacityChange delay0',
                'c-top-0':'opacityChange delay0-2',
                'c-top-1':'opacityChange delay0-2',
                'li0':{
                    one:'littleBottomIn delay0-5',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li1':{
                    one:'littleBottomIn delay0-7',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li2':{
                    one:'littleBottomIn delay0-9',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li3':{
                    one:'littleBottomIn delay1-1',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li4':{
                    one:'littleBottomIn delay1-3',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li5':{
                    one:'littleBottomIn delay1-5',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li6':{
                    one:'littleBottomIn delay1-7',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li7':{
                    one:'littleBottomIn delay1-9',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li8':{
                    one:'littleBottomIn delay2-1',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li9':{
                    one:'littleBottomIn delay2-3',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
            },
            'animation-out-1':{
                'content':'opacityChangeOut delay0',
                'c-top-0':'opacityChangeOut delay0',
                'c-top-1':'opacityChangeOut delay0',
                'li0':{
                    one:'opacityChangeOut delay0',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li1':{
                    one:'opacityChangeOut delay0',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li2':{
                    one:'opacityChangeOut delay0',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li3':{
                    one:'opacityChangeOut delay0',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li4':{
                    one:'opacityChangeOut delay0',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li5':{
                    one:'opacityChangeOut delay0',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li6':{
                    one:'opacityChangeOut delay0',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li7':{
                    one:'opacityChangeOut delay0',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li8':{
                    one:'opacityChangeOut delay0',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li9':{
                    one:'opacityChangeOut delay0',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
            },
            'animation-out-1-change':{
                'content':'opacityChangeOut delay0',
                'c-top-0':'opacityChangeOut delay0',
                'c-top-1':'opacityChangeOut delay0',
                'li0':{
                    one:'opacityChangeOut delay0',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li1':{
                    one:'opacityChangeOut delay0',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li2':{
                    one:'opacityChangeOut delay0',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li3':{
                    one:'opacityChangeOut delay0',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li4':{
                    one:'opacityChangeOut delay0',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li5':{
                    one:'opacityChangeOut delay0',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li6':{
                    one:'opacityChangeOut delay0',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li7':{
                    one:'opacityChangeOut delay0',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li8':{
                    one:'opacityChangeOut delay0',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
                'li9':{
                    one:'opacityChangeOut delay0',
                    child:{ 'bg':'', 'rank-bg':'', 'rank':'', 'num':'' }
                },
            },
            "animation-in-2":{
                'title-bg':'opacityChange delay1-2',
                'title':'leftIn delay0-8',
                'number':'rightTopIn delay0-5',
                'subtitle':'opacityChange delay1-5',
                'tab':'littleTopIn delay2-0',
                'content':'opacityChange delay2-3',
                'c-top-0':'littleTopIn delay2-5',
                'li0':{
                    one:'opacityChange delay2-8',  // bg
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'heightChange delay3-0',
                        'num':'opacityZoomChange delay3-4'
                    }
                },
                'li1':{
                    one:'opacityChange delay2-8',  // bg
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'heightChange delay3-1',
                        'num':'opacityZoomChange delay3-5'
                    }
                },
                'li2':{
                    one:'opacityChange delay2-8',  // bg
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'heightChange delay3-2',
                        'num':'opacityZoomChange delay3-6'
                    }
                },
                'li3':{
                    one:'opacityChange delay2-8',  // bg
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'heightChange delay3-3',
                        'num':'opacityZoomChange delay3-7'
                    }
                },
                'li4':{
                    one:'opacityChange delay2-8',  // bg
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'heightChange delay3-4',
                        'num':'opacityZoomChange delay3-8'
                    }
                },
                'li5':{
                    one:'opacityChange delay2-8',  // bg
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'heightChange delay3-5',
                        'num':'opacityZoomChange delay3-9'
                    }
                },
                'li6':{
                    one:'opacityChange delay2-8',  // bg
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'heightChange delay3-6',
                        'num':'opacityZoomChange delay4-0'
                    }
                },
                'li7':{
                    one:'opacityChange delay2-8',  // bg
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'heightChange delay3-7',
                        'num':'opacityZoomChange delay4-1'
                    }
                },
                'li8':{
                    one:'opacityChange delay2-8',  // bg
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'heightChange delay3-8',
                        'num':'opacityZoomChange delay4-2'
                    }
                },
                'li9':{
                    one:'opacityChange delay2-8',  // bg
                    child:{
                        'name':'opacityChange delay2-8',
                        'value':'heightChange delay3-9',
                        'num':'opacityZoomChange delay4-3'
                    }
                }
            },
            "animation-in-2-change":{
                'content':'opacityChange delay0',
                'c-top-0':'littleTopIn delay0-2',
                'li0':{
                    one:'opacityChange delay0-5',  // bg
                    child:{
                        'name':'opacityChange delay0-8',
                        'value':'heightChange delay1-0',
                        'num':'opacityZoomChange delay1-4'
                    }
                },
                'li1':{
                    one:'opacityChange delay0-5',  // bg
                    child:{
                        'name':'opacityChange delay0-8',
                        'value':'heightChange delay1-1',
                        'num':'opacityZoomChange delay1-5'
                    }
                },
                'li2':{
                    one:'opacityChange delay0-5',  // bg
                    child:{
                        'name':'opacityChange delay0-8',
                        'value':'heightChange delay1-2',
                        'num':'opacityZoomChange delay1-6'
                    }
                },
                'li3':{
                    one:'opacityChange delay0-5',  // bg
                    child:{
                        'name':'opacityChange delay0-8',
                        'value':'heightChange delay1-3',
                        'num':'opacityZoomChange delay1-7'
                    }
                },
                'li4':{
                    one:'opacityChange delay0-5',  // bg
                    child:{
                        'name':'opacityChange delay0-8',
                        'value':'heightChange delay1-4',
                        'num':'opacityZoomChange delay1-8'
                    }
                },
                'li5':{
                    one:'opacityChange delay0-5',  // bg
                    child:{
                        'name':'opacityChange delay0-8',
                        'value':'heightChange delay1-5',
                        'num':'opacityZoomChange delay1-9'
                    }
                },
                'li6':{
                    one:'opacityChange delay0-5',  // bg
                    child:{
                        'name':'opacityChange delay0-8',
                        'value':'heightChange delay1-6',
                        'num':'opacityZoomChange delay2-0'
                    }
                },
                'li7':{
                    one:'opacityChange delay0-5',  // bg
                    child:{
                        'name':'opacityChange delay0-8',
                        'value':'heightChange delay1-7',
                        'num':'opacityZoomChange delay2-1'
                    }
                },
                'li8':{
                    one:'opacityChange delay0-5',  // bg
                    child:{
                        'name':'opacityChange delay0-8',
                        'value':'heightChange delay1-8',
                        'num':'opacityZoomChange delay2-2'
                    }
                },
                'li9':{
                    one:'opacityChange delay0-5',  // bg
                    child:{
                        'name':'opacityChange delay0-8',
                        'value':'heightChange delay1-9',
                        'num':'opacityZoomChange delay2-3'
                    }
                }
            },
            'animation-out-2':{
                'content':'opacityChangeOut delay0',
                'c-top-0':'littleTopOut delay0',
                'li0':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li1':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li2':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li3':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li4':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li5':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li6':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li7':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li8':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li9':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                }
            },
            'animation-out-2-change':{
                'content':'opacityChangeOut delay0',
                'c-top-0':'littleTopOut delay0',
                'li0':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li1':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li2':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li3':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li4':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li5':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li6':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li7':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li8':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                },
                'li9':{
                    one:'opacityChangeOut delay0',  // bg
                    child:{
                        'name':'opacityChangeOut delay0',
                        'value':'opacityChangeOut delay0',
                        'num':'opacityChangeOut delay0'
                    }
                }
            },
        },
        page8:{
            status:'in',
            shareStatus:false,
            day:0,
            "animation-in":{
                'title-bg':'opacityChange delay1-2',
                'title':'opacityChange delay0-8',
                'number':'rightTopIn delay0-5',
                'subtitle':'littleTopIn delay1-0',
                'ctitle':'littleBottomIn delay1-2',
                'c0':'littleBottomIn delay1-4',
                'c1':'littleBottomIn delay1-4',
                'c2':'littleBottomIn delay1-4',
                'wtitle':'littleBottomIn delay1-6',
                'w0':'littleBottomIn delay1-8',
                'w1':'littleBottomIn delay1-8',
                'w2':'littleBottomIn delay1-8',
                'info':'littleBottomIn delay2-0',
                'btn':'littleBottomIn delay2-2',
            },
            'animation-out':{
                'title-bg':'opacityChangeOut delay0',
                'title':'leftOut delay0',
                'number':'rightTopOut delay0',
                'subtitle':'littleTopOut delay0',
                'ctitle':'littleBottomOut delay0',
                'c0':'littleBottomOut delay0',
                'c1':'littleBottomOut delay0',
                'c2':'littleBottomOut delay0',
                'wtitle':'littleBottomOut delay0',
                'w0':'littleBottomOut delay0',
                'w1':'littleBottomOut delay0',
                'w2':'littleBottomOut delay0',
                'info':'littleBottomOut delay0',
                'btn':'littleBottomOut delay0',
            }
        },
        totalDay:0,
        isiPhone:false,
        testStatus:false
    },
    mounted:function(){
        // this.setDay();
        this.isiPhone = this.ismobile()  == 'iphone' ? true : false;
        if(this.isiPhone){
            this.page6['animation-in'].li0.water = 'skewScaleIphone delay2-0';
        }
        this.from = getQueryString('xand');
        var now = new Date().getTime(),
            first = new Date('2018/01/01 00:00:00').getTime(),
            middle = (first - now) > 0 ? (first - now) : 0;
        this.page8.day = Math.ceil(middle / 3600 / 1000 / 24);
        if(getQueryString('xtest')){
            this.testStatus = true
        }
    },
    methods:{
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
        }
    }
})
