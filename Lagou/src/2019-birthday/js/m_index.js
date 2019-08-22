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
        // this._initPageMoveEvent();
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
                           .removeClass('zoomChangeOut')
                           .addClass("hide");
            if (self.data.last === 1 && self.data.now === 2) {
                jQuery(now).removeClass("hide")
                    .addClass("pageCurrent");
                jQuery(last).removeClass("hide").addClass('zoomChangeOut');
            } else {
                jQuery(now).removeClass("hide")
                    .addClass(self.data.page[od].now)
                    .addClass("pageCurrent");
                jQuery(last).removeClass("hide").addClass(self.data.page[od].last);
            }
            if(od == 'up'){
                var lastPage = jQuery(last);
                setTimeout(function(){
                    jQuery(".page, .cover").removeClass("moveDLast")
                        .removeClass("moveDNow")
                        .removeClass("moveULast")
                        .removeClass("moveUNow")
                        .removeClass('zoomChangeOut');
                    jQuery(last).attr('style','').addClass("hide");
                    jQuery(now).removeClass("hide").addClass("pageCurrent");
                    app.$data.flipStatus = false;
                },750);
            }else {
                var lastPage = jQuery(last);
                setTimeout(function(){
                    jQuery(".page, .cover").removeClass("moveDLast")
                            .removeClass("moveDNow")
                            .removeClass("moveULast")
                            .removeClass("moveUNow")
                            .removeClass('zoomChangeOut');
                    jQuery(last).attr('style','').addClass("hide");
                    jQuery(now).removeClass("hide").addClass("pageCurrent");
                    app.$data.flipStatus = false;
                },750)
            }
            setTimeout(function () {
                app.$data.flipStatus = false;
                jQuery(".page, .cover").removeClass("moveDLast")
                           .removeClass("moveDNow")
                           .removeClass("moveULast")
                           .removeClass("moveUNow")
                           .removeClass('zoomChangeOut');
                jQuery(last).attr('style','').addClass("hide");
                jQuery(now).removeClass("hide").addClass("pageCurrent");
                self.data.isMoving = false;
            }, 750);
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
                case 2:
                    if (!app.catchIndex) {
                        break
                    }
                // case 0:
                // case 1:
                // case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                // default:
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
        goods: [
            [
                { id: 0, name: '键盘'},
                { id: 1, name: '喵'},
                { id: 2, name: '香蕉'},
                { id: 3, name: '衬衣'}
            ], [
                { id: 4, name: '洗发水'},
                { id: 5, name: '指挥棒'},
                { id: 6, name: '狗子'},
                { id: 7, name: '画具'}
            ], [
                { id: 8, name: '狮子'},
                { id: 9, name: '手机'},
                { id: 10, name: '钱包'},
                { id: 11, name: '工具箱'}
            ]
        ],
        catchIndex: '',
        swiperAnimation: {
            goods: null,
            position: null
        },
        goodsActiveIndex: 0,
        move: {
            start: {
                x: 0,
                y: 0
            },
            end: {
                x: 0,
                y: 0
            }
        },
        offset: [
            { left: 0, top:0, w: 0, h: 0 },
            { left: 0, top:0, w: 0, h: 0 },
            { left: 0, top:0, w: 0, h: 0 },
            { left: 0, top:0, w: 0, h: 0 }
        ],
        hand: {
            left: 0,
            top: 0,
            w: 0,
            h: 0
        },
        catchResult: {
            '0-0': {
                title: '<div class="page2__content__title">献出你的膝盖，跪完金主跪需求，</div>'+
                    '<div class="page2__content__name clearfix">'+
                        '<span class="page2__content__name--big">运营岗</span>'+
                        '<span class="page2__content__name--small">你值得拥有。</span>'+
                    '</div>',
                detail: [
                    '运营的本质是传递产品价值,其作用就是<br/>'+
                    '围绕产品运作产生营收效应增长。',
                    '拿一个杯子生产售卖的过程来说，运营<br/>'+
                    '就是各种包装让杯子卖的更贵更多哦，<br/>'+
                    '成就感爆棚~',
                    '当然运营大类下还有很多细分岗，可以<br/>'+
                    '根据自己擅长的部分去选择呢',
                ]
            },
            '0-1': {
                title: '<div class="page2__content__title clearfix">'+
                        '<span class="page2__content__name--big">运营喵</span>'+
                        '<span class="page2__content__name--small">各种风格，各种款式，</span>'+
                    '</div>'+
                    '<div class="page2__content__name">无所不能。</div>',
                detail: [
                    '运营的本质是传递产品价值,其作用就是<br/>'+
                    '围绕产品运作产生营收效应增长。',
                    '拿一个杯子生产售卖的过程来说，运营<br/>'+
                    '就是各种包装让杯子卖的更贵更多哦，<br/>'+
                    '成就感爆棚~',
                    '当然运营大类下还有很多细分岗，可以<br/>'+
                    '根据自己擅长的部分去选择呢',
                ]
            },
            '0-2': {
                title: '<div class="page2__content__title">香蕉是你的必备精神食粮，因为<br/>你是游荡在技术语言森林里的</div>'+
                    '<div class="page2__content__name clearfix">'+
                        '<span class="page2__content__name--big">程序猿</span>'+
                    '</div>',
                detail: [
                    '技术大拿是食物链的顶端，一串串<br/>'+
                    '代码是智慧生产的结晶。',
                    '拿一个杯子生产售卖的过程来说，技术<br/>'+
                    '就是杯子生产的操盘手，当杯子问世的<br/>'+
                    '那一刻，可以傲娇得说这是你做的。'
                ]
            },
            '0-3': {
                title: '<div class="page2__content__title clearfix">'+
                        '<span class="page2__content__name--small">格子衫，</span>'+
                        '<span class="page2__content__name--big">技术大拿</span>'+
                        '<span class="page2__content__name--small">的必备，</span>'+
                    '</div>'+
                    '<div class="page2__content__name">颜色不是问题，关键是要有一件，<br/>可以说是入行必备工服。</div>',
                detail: [
                    '技术大拿是食物链的顶端，一串串<br/>'+
                    '代码是智慧生产的结晶。',
                    '拿一个杯子生产售卖的过程来说，技术<br/>'+
                    '就是杯子生产的操盘手，当杯子问世的<br/>'+
                    '那一刻，可以傲娇得说这是你做的。'
                ]
            },
            '1-0': {
                title: '<div class="page2__content__title clearfix">'+
                        '<span class="page2__content__name--big">程序猿</span>'+
                        '<span class="page2__content__name--small">的层级从发量依稀可见，</span>'+
                    '</div>'+
                    '<div class="page2__content__title">层级越高，发量越少。</div>'+
                    '<div class="page2__content__name">'+
                        '<span class="page2__content__name--tiny">不过别怕，'+
                            '<span class="page2__content__name--weight">防脱洗发水</span>'+
                            '你值得拥有。</span>'+
                        '</span>'+
                    '</div>',
                detail: [
                    '技术大拿是食物链的顶端，一串串<br/>'+
                    '代码是智慧生产的结晶。',
                    '拿一个杯子生产售卖的过程来说，技术<br/>'+
                    '就是杯子生产的操盘手，当杯子问世的<br/>'+
                    '那一刻，可以傲娇得说这是你做的。'
                ]
            },
            '1-1': {
                title: '<div class="page2__content__title clearfix">'+
                        '<span class="page2__content__name--big">产品经理</span>'+
                        '<span class="page2__content__name--small">就像是个指挥家，</span>'+
                    '</div>'+
                    '<div class="page2__content__title">不动声色得让整个乐团井井有条，</div>'+
                    '<div class="page2__content__name">是项目的owner大大。</div>',
                detail: [
                    '产品经理是运营和技术的强力纽带和<br/>'+
                    '翻译机，友好得搞定双方诉求。',
                    '拿一个杯子生产售卖的过程来说，你的<br/>'+
                    '思想就是做最初的杯子模型，可以说是<br/>'+
                    '这个杯子的亲爸爸啦。'
                ]
            },
            '1-2': {
                title: '<div class="page2__content__title">'+
                        '狗头军师非你莫属，作为一个'+
                    '</div>'+
                    '<div class="page2__content__title clearfix">'+
                        '<span class="page2__content__name--small">非著名脑力工作者，</span>'+
                        '<span class="page2__content__name--big">产品经理</span>'+
                    '</div>'+
                    '<div class="page2__content__title">'+
                        '角色可谓是四两拨千斤的存在。'+
                    '</div>'+
                    '<div class="page2__content__name">颜色不是问题，关键是要有一件，<br/>可以说是入行必备工服。</div>',
                detail: [
                    '产品经理是运营和技术的强力纽带和<br/>'+
                    '翻译机，友好得搞定双方诉求。',
                    '拿一个杯子生产售卖的过程来说，你的<br/>'+
                    '思想就是做最初的杯子模型，可以说是<br/>'+
                    '这个杯子的亲爸爸啦。'
                ]
            },
            '1-3': {
                title: '<div class="page2__content__title">'+
                        '你有你的思维，你有你的style，<br/>'+
                        '你爱高品质的审美、抽离的画面，<br/>'+
                        '但有时为了需求你也要折腰，你'+
                    '</div>'+
                    '<div class="page2__content__title clearfix">'+
                        '<span class="page2__content__name--small">就是</span>'+
                        '<span class="page2__content__name--big">设计师</span>'+
                    '</div>',
                detail: [
                    '拿一个杯子生产售卖的过程来说，你<br/>'+
                    '就是把平淡的的原型做得风格多变、<br/>'+
                    '做得美轮美奂、做得被其他人所接受，<br/>'+
                    '是当之无愧互联网界的tony老师。'
                ]
            },
            '2-0': {
                title: '<div class="page2__content__title clearfix">'+
                        '<span class="page2__content__name--big">设计狮</span>'+
                        '<span class="page2__content__name--small">的王者风范，用自己的</span>'+
                    '</div>'+
                    '<div class="page2__content__title">电脑画自己的图，让别人说自己</div>'+
                    '<div class="page2__content__name">再改~</div>',
                detail: [
                    '拿一个杯子生产售卖的过程来说，你<br/>'+
                    '就是把平淡的的原型做得风格多变、<br/>'+
                    '做得美轮美奂、做得被其他人所接受，<br/>'+
                    '是当之无愧互联网界的tony老师。'
                ]
            },
            '2-1': {
                title: '<div class="page2__content__title">'+
                        '各种social账号玩得溜，既会<br/>'+
                        '小清新也可重口味，你一定是<br/>'+
                        '隐藏的KOL。向上吧，'+
                    '</div>'+
                    '<div class="page2__content__name clearfix">'+
                        '<span class="page2__content__name--big">市场大大</span>'+
                        '<span class="page2__content__name--small">！</span>'+
                    '</div>',
                detail: [
                    '上可策划活动，传播品牌，下可开拓<br/>'+
                    '资源，借力宣传，人群中闪耀的星就<br/>'+
                    '是你。',
                    '拿一个杯子生产售卖的过程来说，你<br/>'+
                    '就是用才华助力售卖，大手笔，怕了<br/>'+
                    '怕了。'
                ]
            },
            '2-2': {
                title: '<div class="page2__content__title clearfix">'+
                        '<span class="page2__content__name--small">公司强大的后勤保障部门，</span>'+
                        '<span class="page2__content__name--big">财</span>'+
                        '<span class="page2__content__name--big">务、法务、人力、行政</span>'+
                        // '<span class="page2__content__name--small"></span>'+
                    '</div>'+
                    '<div class="page2__content__title clearfix">'+
                        '<span class="page2__content__name--small" style="padding-top:0;">等统统适合你，</span>'+
                        '<span class="page2__content__name--tiny" style="padding-top:0.2133rem; float:left;">每天除了和人打交</span>'+
                    '</div>'+
                    '<div class="page2__content__name clearfix">'+
                        '<span class="page2__content__name--tiny">道，就是和各种工具包 say hi!</span>'+
                    '</div>',
                detail: [
                    '游走在各个部门的人和事上，百世通。',
                    '拿一个杯子生产售卖的过程来说，就<br/>'+
                    '是各种前期后期的保障，是整个流程<br/>'+
                    '闭环的必备哦，缺你不可。'
                ]
            },
            '2-3': {
                title: '<div class="page2__content__title">'+
                        '赚钱赚到手软说的就是你~无论<br/>'+
                        '是开发新客户，还是维护老客户，<br/>'+
                        '你游刃有余，应对得当。对头，'+
                    '</div>'+
                    '<div class="page2__content__name clearfix">'+
                        '<span class="page2__content__name--small">你就是</span>'+
                        '<span class="page2__content__name--big">千万销售</span>'+
                        '<span class="page2__content__name--small">！</span>'+
                    '</div>',
                detail: [
                    '聪明的你，善于分析&挖掘客户需求，<br/>'+
                    '将产品解决方案推荐给需要的人。',
                    '拿一个杯子生产售卖的过程来说，就<br/>'+
                    '是卖卖卖，从此一路奔波在财富自由<br/>'+
                    '的路上。'
                ]
            }
        },
        positionActiveIndex: 0,
        positionList: [
            [
                {
                    logo: 'i/image/M00/57/6F/CgpEMlmAB7qAfWSUAAG8bbOymTQ080.jpg',
                    companyName: 'skymmer',
                    positionId: 6299135,
                    positionName: 'php开发工程师',
                    salary: '7k-10k',
                    city: '重庆',
                    requirement: '本科及以上',
                    classify: '硬件,移动互联网',
                    checkStatus: true,
                    sendStatus: false
                }, {
                    logo: 'i/image/M00/42/CE/CgpFT1ld-4yAZLJ6AAAv0QGHSIM153.png',
                    companyName: '钉钉',
                    positionId: 6299041,
                    positionName: '阿里巴巴钉钉2020校招内推',
                    salary: '15k-25k',
                    city: '杭州',
                    requirement: '本科及以上',
                    classify: '企业服务',
                    checkStatus: true,
                    sendStatus: false
                }, {
                    logo: 'i/image2/M00/1A/BF/CgoB5loBbLqAVCfvAADrf-y8Zm8795.png',
                    companyName: '苏宁易购',
                    positionId: 6299037,
                    positionName: 'Java开发工程师',
                    salary: '16k-30k',
                    city: '南京',
                    requirement: '本科及以上',
                    classify: '消费生活,移动互联网',
                    checkStatus: true,
                    sendStatus: false
                }, {
                    logo: 'images/logo_default.png',
                    companyName: '智地科技',
                    positionId: 6299061,
                    positionName: '网站开发',
                    salary: '5k-10k',
                    city: '徐州',
                    requirement: '本科及以上',
                    classify: '数据服务,软件开发',
                    checkStatus: true,
                    sendStatus: false
                }
            ], [
                {
                    logo: 'i/image/M00/37/3A/CgqKkVdfvu2AY63nAAAVOgWxiUk948.jpg',
                    companyName: '连线网络',
                    positionId: 6299232,
                    positionName: '互联网产品经理',
                    salary: '15k-20k',
                    city: '杭州',
                    requirement: '本科及以上',
                    classify: '移动互联网',
                    checkStatus: true,
                    sendStatus: false
                }, {
                    logo: 'images/logo_default.png',
                    companyName: '八维化工',
                    positionId: 6299193,
                    positionName: '质检员化验员倒班工作稳定',
                    salary: '3k-4k',
                    city: '石家庄',
                    requirement: '学历不限',
                    classify: '企业服务',
                    checkStatus: true,
                    sendStatus: false
                }, {
                    logo: 'i/image2/M01/74/17/CgotOV1Oy3KATOAyAAAScJIeDE8578.png',
                    companyName: '蓝墙网络',
                    positionId: 6299193,
                    positionName: '一线创业团队 B端产品经理',
                    salary: '10k-15k',
                    city: '上海',
                    requirement: '本科及以上',
                    classify: '移动互联网 企业服务',
                    checkStatus: true,
                    sendStatus: false
                }, {
                    logo: 'i/image2/M01/44/D8/CgoB5lz_T7WAPv4MAAJuKTImCvU634.jpg',
                    companyName: '嘉居科技',
                    positionId: 6031966,
                    positionName: 'c++开发工程师 ',
                    salary: '12k-22k',
                    city: '北京',
                    requirement: '本科及以上',
                    classify: '房产家居,软件开发',
                    checkStatus: true,
                    sendStatus: false
                }
            ]
        ],
        showTips: false,
        showTipsHideAni: false,
        showSuccess: false,
        showSuccessHideAni: false,
        result: '',
        resultStatus: false,
        resultHideStatus: false,
        touchstart: 0,
        isiPhone:false,
        testStatus:false,
        // 加载图片
        load:0,
        loadedImgs:[],
        imgs: [
            // 0
            'images/page3-canvas-bottom.png',
            'images/page3-canvas-ercode.png',
            'images/page3-canvas-hugleg.png',
            'images/page3-canvas-tips.png',
            // 4
            'images/page3-canvas-design-bg.png',
            'images/page3-canvas-design-center.png',
            'images/page3-canvas-design-leg.png',
            'images/page3-canvas-design-star.png',
            'images/page3-canvas-design-title.png',
            // 9
            'images/page3-canvas-func-bg.png',
            'images/page3-canvas-func-center.png',
            'images/page3-canvas-func-leg.png',
            'images/page3-canvas-func-star.png',
            'images/page3-canvas-func-title.png',
            // 14
            'images/page3-canvas-market-bg.png',
            'images/page3-canvas-market-center.png',
            'images/page3-canvas-market-star.png',
            'images/page3-canvas-market-title.png',
            // 18
            'images/page3-canvas-op-bg.png',
            'images/page3-canvas-op-center.png',
            'images/page3-canvas-op-leg.png',
            'images/page3-canvas-op-star.png',
            'images/page3-canvas-op-title.png',
            // 23
            'images/page3-canvas-pm-bg.png',
            'images/page3-canvas-pm-center.png',
            'images/page3-canvas-pm-leg.png',
            'images/page3-canvas-pm-star.png',
            'images/page3-canvas-pm-title.png',
            // 28
            'images/page3-canvas-sell-bg.png',
            'images/page3-canvas-sell-center.png',
            'images/page3-canvas-sell-leg.png',
            'images/page3-canvas-sell-star.png',
            'images/page3-canvas-sell-title.png',
            // 33
            'images/page3-canvas-tech-bg.png',
            'images/page3-canvas-tech-center.png',
            'images/page3-canvas-tech-leg.png',
            'images/page3-canvas-tech-star.png',
            'images/page3-canvas-tech-title.png',

            'images/page3-canvas-logo.png'
        ],
        resultObj: {
            design: { bg: '#5924a3', index:4, title: '设计大咖' },
            func: { bg: '#432e97', index:9, title: '职能大咖' },
            market: { bg: '#f95085', index: 14, title: '市场大咖' },
            op: { bg: '#f96277', index: 18, title: '运营大咖' },
            pm: { bg: '#2a2aad', index: 23, title: '产品大咖' },
            sell: { bg: '#ffb806', index: 28, title: '销售大咖' },
            tech: { bg: '#2dad5b', index: 33, title: '技术大咖' } 
        },
        canvas: null,
        ctx: null,
        drawStatus: false,
        saveStatus: false,
        url: ''
    },
    mounted:function(){
        // this.setDay();
        this.isiPhone = this.ismobile()  == 'iphone' ? true : false;
        this.from = getQueryString('xand');
        if(getQueryString('xtest')){
            this.testStatus = true
        }
        var rightSize = parseFloat((RC.w / RC.h).toFixed(1)),
            currentSize = parseFloat((GC.w / GC.h).toFixed(1));
        this.fontSize = parseFloat(document.getElementsByTagName("html")[0].style.fontSize)
        if(rightSize > currentSize){
            this.heightStatus = Math.floor(RC.w / GC.w * GC.h - RC.h);
        }else{
            this.shortHeight = Math.floor(RC.h - RC.w / GC.w * GC.h);
            this.moreWidth = Math.floor(RC.h / GC.h * GC.w - RC.w);
        }
        this.initCanvas()
    },
    methods:{
        setRem:function(value){
            return value / (750 / 16)+'rem';
        },
        getFitTop:function(def,ratio,max,limit){
            var n = this.heightStatus * ratio;

            n = (max !== undefined && n > max ? max : n) + (limit ? limit : 0);
            return this.setRem(def+n);
        },
        getFitTZero:function(def,ratio,max,limit){
            var n = this.heightStatus * ratio + def;
        
            n = (max !== undefined && n > max ? max : n) + (limit ? limit : 0);
            return this.setRem(n);
        },
        getFitPosition:function(def,ratio,max,limit) {
            if (this.heightStatus) {
                var n = this.heightStatus * ratio + def;
                
                n = (max !== undefined && n > max ? max : n) + (limit ? limit : 0);
                return this.setRem(n);
            } else if (this.shortHeight){
                console.log(this.shortHeight)
                var cheight = RC.w / GC.w * GC.h
                // return this.setRem(def - 200 + this.shortHeight);
                return this.setRem(cheight - 254);
            }
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
        initCanvas:function() {
            var width = 750,
                height = 1206,
                self = this

            this.canvas = this.$refs['canvas']
            this.ctx = this.canvas.getContext("2d")
            this.canvas.width = width
            this.canvas.height = height

            this.ctx.fillStyle = "#fff"
            this.ctx.rect(0,0,this.canvas.width,this.canvas.height)
            this.ctx.fill()

            this.imgs.forEach(function(url){
                var img = new Image()
                img.onload = function(){
                    self.load++
                    if(self.load == self.imgs.length){
                        self.setDefaultCanvas()
                    }
                }
                img.src = url,
                self.loadedImgs.push(img)
            })
        },
        initCoverMove:function(){
            var _this = this
            setTimeout(function(){
                var cover = document.getElementById('cover')
                var page0 = document.getElementById('page0')
                cover.className += ' opacityChange-out'
                page0.className = page0.className.replace(' hide','')
                setTimeout(function(){
                    cover.className += ' hide'
                }, 500)
            }, 2000)
        },
        startTestEvent:function() {
            var _this = this;
            PM.data.last = 1
            PM.data.now = 2
            PM.pageMove('down', PM);
            setTimeout(function() {
                _this.initGoodsSwiper()
                _this.initOffset()
            }, 500)
        },
        initGoodsSwiper:function() {
            this.swiperAnimation.goods = new Swiper('#goodsSwiper', {
                // wrapperClass:"swiper-wrapper",
                // slideClass:"swiper-slide",
                // autoplay:true,//等同于以下设置
                // autoplay: {
                //     delay: 3000,
                //     stopOnLastSlide: false,
                //     disableOnInteraction: false,
                // },
                autoplay: false,
                speed:500,
                loop:false,
                initialSlide:0,
                on:{
                    slideChangeTransitionStart:function(){
                        var sapp = app || this.$el[0].__vue__.$root
                        sapp.changeActiveIndex(this.activeIndex)
                    }
                }
            })
        },
        changeActiveIndex:function(index) {
            this.goodsActiveIndex = index % this.goods.length
            // this.$refs['goodsSwiper'].swiper.slideTo(this.goodsActiveIndex)
        },
        leftMoveEvent:function() {
            var index = this.goodsActiveIndex - 1
            if (index < 0) {
                index = this.goods.length - 1
            }
            this.$refs['goodsSwiper'].swiper.slideTo(index)
        },
        rightMoveEvent:function() {
            var index = this.goodsActiveIndex + 1
            if (index >= this.goods.length) {
                index = 0
            }
            this.$refs['goodsSwiper'].swiper.slideTo(index)
        },
        initOffset:function(){
            var elem = null
            var pleft = 0
            var ptop = 0
            var i = 0

            ptop = document.getElementById('goodsSwiper').offsetTop
            pleft = document.getElementById('page1__list').offsetLeft
            
            for (i = 0; i < this.offset.length; i++) {
                elem = document.getElementsByClassName('page1__item--0-' + i)[0]
                this.offset[i].left = pleft + elem.offsetLeft
                this.offset[i].top = ptop + elem.offsetTop
                this.offset[i].w = elem.offsetWidth
                this.offset[i].h = elem.offsetHeight
            }
            elem = this.$refs['page1__right']
            this.hand.left = elem.offsetLeft
            this.hand.top = elem.offsetTop
            this.hand.w = elem.offsetWidth
            this.hand.h = elem.offsetHeight
        },
        touchstartEvent:function(event) {
            var touch = event.targetTouches[0];
            this.move.start.x = touch.clientX;
            this.move.start.y = touch.clientY;
        },
        touchmoveEvent:function(event) {
            var touch = event.targetTouches[0];
            if (this.move.start.x) {
                this.move.end.x = touch.clientX;
                this.move.end.y = touch.clientY;
                var right = this.$refs['page1__right']
                right.style.transform = this.getMoveStyle()
            } else {
                this.move.start.x = touch.clientX;
                this.move.start.y = touch.clientY;
            }
        },
        touchendEvent:function() {
            var start = this.move.start,
                end = this.move.end,
                hand = this.hand,
                elem = this.$refs['page1__right'],
                moveX = end.x - start.x,
                moveY = end.y - start.y,
                pageX = moveX + this.hand.left,
                pageY = moveY + this.hand.top,
                temp = null,
                i = 0;
            this.catchIndex = ''
            for (i = 0; i < this.offset.length; i++) {
                temp = this.offset[i]
                if (pageX >= (temp.left - 30) && pageY >= (temp.top - 30)
                    && (pageX + hand.w * 0.36) <=(temp.left + temp.w)
                    && (pageY + hand.h * 0.27) <=(temp.top + temp.h)) {
                    this.catchIndex = this.goodsActiveIndex + '-' + i
                    break
                }
            }
            this.move.start.x = 0;
            this.move.start.y = 0;
            this.move.end.x = 0;
            this.move.end.y = 0;
            elem.style.transform = this.getMoveStyle()
        },
        chooseGoodsEvent:function(pindex, index){
            var _this = this
            this.catchIndex = pindex + '-' + index
            setTimeout(function() {
                var page1 = document.getElementById('page1')
                var page2 = document.getElementById('page2')
                page2.className = page2.className.replace(' hide','').replace(' zoomInChange','') + ' zoomOut'
                setTimeout(function() {
                    page1.className += ' hide'
                }, 500)
            }, 2000)
        },
        getMoveStyle:function() {
            var start = this.move.start,
                end = this.move.end;
            if (start.x && start.y && end.x && end.y) {
                return  'translate3d(' + (end.x - start.x) + 'px, ' + (end.y - start.y) + 'px, 0)'
            }
            return 'translate3d(0, 0, 0)'
        },
        retryEvent:function() {
            var page1 = document.getElementById('page1')
            var page2 = document.getElementById('page2')
            page1.className = page1.className.replace(' hide','')
            page2.className = page2.className.replace(' zoomOut','') + ' zoomInChange'
            setTimeout(function() {
                page2.className += ' hide'
            }, 500)
            // PM.data.last = 3
            // PM.data.now = 2
            // PM.pageMove('up', PM);
            this.catchIndex = ''
        },
        makesureEvent:function() {
            var _this = this
            var page2 = document.getElementById('page2')
            var page3 = document.getElementById('page3')
            page3.className = page3.className.replace(' hide','') + ' topIn'
            setTimeout(function() {
                page2.className += ' hide'
                page3.className = page3.className.replace(' topIn','')
                _this.clearCanvas()
                _this.drawStatus = true
                if(_this.load == _this.imgs.length){
                    _this.setDefaultCanvas()
                }
            }, 750)
            // PM.data.last = 3
            // PM.data.now = 4
            // PM.pageMove('down', PM);
            this.initPositionSwiper()
            switch(this.catchIndex) {
                case '0-0':
                case '0-1':
                    this.result = 'op'
                    break;
                case '0-2':
                case '0-3':
                case '1-0':
                    this.result = 'tech'
                    break;
                case '1-1':
                case '1-2':
                    this.result = 'pm'
                    break;
                case '1-3':
                case '2-0':
                    this.result = 'design'
                    break;
                case '2-1':
                    this.result = 'market'
                    break;
                case '2-2':
                    this.result = 'func'
                    break;
                case '2-3':
                    this.result = 'sell'
                    break;
            }
        },
        setDefaultCanvas:function(){
            // this.ctx.drawImage(this.loadedImgs[0], -114, -1002)
            // this.ctx.drawImage(this.loadedImgs[1], -50, 280)
            // this.ctx.drawImage(this.loadedImgs[2], 99, 1473)
            // this.ctx.drawImage(this.loadedImgs[4], 832, 0)
            if(this.drawStatus){
                // this.ctx.drawImage(this.loadedImgs[5+this.activeTitle], 102, 193)
                // this.ctx.drawImage(this.loadedImgs[8+this.activeSubtitle], 102, 652)
                this.drawContent()
                this.drawStatus = false
            }
        },
        drawContent:function(){
            var self = this
            var obj = this.resultObj
            var index = obj[this.result].index
            this.ctx.fillStyle = obj[this.result].bg
            this.ctx.rect(0,0,this.canvas.width,this.canvas.height)

            switch(this.result) {
                case 'design':
                    this.ctx.drawImage(this.loadedImgs[index], -193,-369) // bg
                    this.ctx.drawImage(this.loadedImgs[index+3], 29,157-128) // star
                    // this.ctx.drawImage(this.loadedImgs[index+4], 105,240-128) // title
                    this.ctx.drawImage(this.loadedImgs[index+2], 392,768-128) // leg
                    this.ctx.drawImage(this.loadedImgs[index+1], 70,380-128) // center
                    break
                case 'func':
                    this.ctx.drawImage(this.loadedImgs[index], -149,-227) // bg
                    this.ctx.drawImage(this.loadedImgs[index+3], 14,20-128) // star
                    // this.ctx.drawImage(this.loadedImgs[index+4], 105,240-128) // title
                    this.ctx.drawImage(this.loadedImgs[index+2], 153,799-128) // leg
                    this.ctx.drawImage(this.loadedImgs[index+1], 65,390-128) // center
                    break
                case 'market':
                    this.ctx.drawImage(this.loadedImgs[index], -407,-222) // bg
                    this.ctx.drawImage(this.loadedImgs[index+2], 29,157-128) // star
                    // this.ctx.drawImage(this.loadedImgs[index+3], 105,240-128) // title
                    // this.ctx.drawImage(this.loadedImgs[index+2], 153,799-128) // leg
                    this.ctx.drawImage(this.loadedImgs[index+1], 85,391-128) // center
                    break
                case 'op':
                    this.ctx.drawImage(this.loadedImgs[index], -185,-366) // bg
                    this.ctx.drawImage(this.loadedImgs[index+3], 9,140-128) // star
                    // this.ctx.drawImage(this.loadedImgs[index+4], 105,240-128) // title
                    this.ctx.drawImage(this.loadedImgs[index+2], 245,821-128) // leg
                    this.ctx.drawImage(this.loadedImgs[index+1], 57,404-128) // center
                    break
                case 'pm':
                    this.ctx.drawImage(this.loadedImgs[index], -93,-226) // bg
                    this.ctx.drawImage(this.loadedImgs[index+3], 40,10) // star
                    // this.ctx.drawImage(this.loadedImgs[index+4], 105,240-128) // title
                    this.ctx.drawImage(this.loadedImgs[index+2], 395,800-128) // leg
                    this.ctx.drawImage(this.loadedImgs[index+1], 55,380-128) // center
                    break
                case 'sell':
                    this.ctx.drawImage(this.loadedImgs[index], -158,-301) // bg
                    this.ctx.drawImage(this.loadedImgs[index+3], 13,180-128) // star
                    // this.ctx.drawImage(this.loadedImgs[index+4], 105,240-128) // title
                    this.ctx.drawImage(this.loadedImgs[index+2], 147,808-128) // leg
                    this.ctx.drawImage(this.loadedImgs[index+1], 61,384-128) // center
                    break
                case 'tech':
                    this.ctx.drawImage(this.loadedImgs[index], -154,-337) // bg
                    this.ctx.drawImage(this.loadedImgs[index+3], 9,140-128) // star
                    // this.ctx.drawImage(this.loadedImgs[index+4], 105,240-128) // title
                    this.ctx.drawImage(this.loadedImgs[index+2], 286,825-128) // leg
                    this.ctx.drawImage(this.loadedImgs[index+1], 60,388-128) // center
                    break
            }
            var st = 0
            this.ctx.lineWidth = 3
            this.ctx.fillStyle = "#ffffff"
            this.ctx.strokeStyle = '#ffffff'
            this.ctx.font = "60px normal"
            this.ctx.fillText('未来的',105,240-128+72)
            this.ctx.strokeText('未来的',105,240-128+72)
            st = this.ctx.measureText('未来的').width
            this.ctx.fillText(obj[this.result].title,105+st,240-128+72)
            this.ctx.strokeText(obj[this.result].title,105+st,240-128+72)
            this.ctx.fillText('是'+obj[this.result].title,105,240-128+87+72)
            this.ctx.strokeText('是'+obj[this.result].title,105,240-128+87+72)

            this.ctx.drawImage(this.loadedImgs[38], 392,156-128)
            this.ctx.drawImage(this.loadedImgs[1], 119,977-128)
            this.ctx.drawImage(this.loadedImgs[2], 319,993-128)
            this.ctx.drawImage(this.loadedImgs[3], 76, 1132-128)
            this.ctx.drawImage(this.loadedImgs[0], 0, 1206 - 69) // center

            // 绘制完毕，导出图片地址
            setTimeout(function(){
                self.url = self.canvas.toDataURL("image/png")
                // self.showImage = true
                // self.saveStatus = true
            }, 500)
        },
        clearCanvas:function(){
            this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

            this.ctx.fillStyle = "#fff"
            this.ctx.rect(0,0,this.canvas.width,this.canvas.height)
            this.ctx.fill()
        },
        chooseEvent:function(one) {
            one.checkStatus = !one.checkStatus
        },
        initPositionSwiper:function(){
            this.swiperAnimation.position = new Swiper('#positionSwiper', {
                // wrapperClass:"swiper-wrapper",
                // slideClass:"swiper-slide",
                // autoplay:true,//等同于以下设置
                // autoplay: {
                //     delay: 3000,
                //     stopOnLastSlide: false,
                //     disableOnInteraction: false,
                // },
                autoplay: false,
                speed:500,
                loop:false,
                initialSlide:0,
                on:{
                    slideChangeTransitionStart:function(){
                        var sapp = app || this.$el[0].__vue__.$root
                        sapp.changePositionActiveIndex(this.activeIndex)
                    }
                }
            })
        },
        changePositionActiveIndex:function(index){
            this.positionActiveIndex = index % this.positionList.length
        },
        leftPositionEvent:function() {
            var index = this.positionActiveIndex - 1
            if (index < 0) {
                index = this.positionList.length - 1
            }
            this.$refs['positionSwiper'].swiper.slideTo(index)
        },
        rightPositionEvent:function() {
            var index = this.positionActiveIndex + 1
            if (index >= this.positionList.length) {
                index = 0
            }
            this.$refs['positionSwiper'].swiper.slideTo(index)
        },
        createEvent:function() {
            this.resultStatus = true
        },
        sendEvent:function(){
            var arr = [],
                _this = this,
                i = 0,
                j = 0;
            for (i = 0; i < this.positionList.length; i++) {
                for (j = 0; j < this.positionList[i].length; j++) {
                    if (this.positionList[i][j].checkStatus) {
                        arr.push(this.positionList[i][j].positionId)
                    }
                }
            }
            if (arr.length) {
                this.showSuccess = true
            } else {
                this.showTips = true
                setTimeout(function(){
                    _this.showTips = false
                    _this.showTipsHideAni = true
                    setTimeout(function() {
                        _this.showTipsHideAni = false
                    }, 500)
                }, 2000)
            }
        },
        closeSuccessModal:function(){
            var _this = this
            this.showSuccess = false
            this.showSuccessHideAni = true
            setTimeout(function() {
                _this.showSuccessHideAni = false
            }, 500)
        },
        imgTouchstart:function(){
            this.touchstart = Date.now()
        },
        imgTouchend:function(event){
            var _this = this
            var now = Date.now()
            // 长按
            if (this.touchstart && now - this.touchstart >= 2000) {
                // postEncodingID({
                //     'data-lg-tj-id': '1n47',
                //     'data-lg-tj-no': '0005' ,
                //     'data-lg-tj-cid': 'null'
                // })
            } else {
                event.stopPropagation()
                this.resultHideStatus = true
                setTimeout(function() {
                    _this.resultHideStatus = false
                    _this.resultStatus = false
                }, 500)
            }
            this.touchstart = 0
        },
        clickImageEvent:function(event){
            if (!this.resultStatus) {
                event.stopPropagation()
            }
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
