setTimeout(function(){
    var theme = document.getElementById('page-theme'),
        classname = theme.className;
    //启动领先者动画;
    var idx=34,
        img = $("#lxz-img");
    document.getElementById('page-loading').className = 'hide'
    theme.className = classname.replace('hide','');
    var timerId = setInterval(function () {
        if(idx<1){
            clearInterval(timerId);
        }else{
            img.attr('src','https://www.lgstatic.com/activity-rsrc/dist/2017-employSelect/image/lxz/'+idx+'.png');
            idx--;
        }
    },30);
},1000);

var app = null;
// var PM = new PageMove({ animation: "move" });
document.addEventListener('touchmove',function(e){
    // e.preventDefault();
});
document.getElementById('page-theme').addEventListener('touchmove',function(e){
    e.stopPropagation();
})
// Vue.use(VueAwesomeSwiper)
// alert('最新代码：'+new Date());
app = new Vue({
    el:"#app",
    data:{
        activeStatus:0,  // 0:综合类  1:行业类  2: 区域类  3:特别类
        currentIndex:0,  // 0: 华北地区
        bprevIndex:-2,
        prevIndex:-1,
        nextIndex:1,
        bnextIndex:2,
        currentClass:'current',
        prevClass:'prev',
        bprevClass:'',
        nextClass:'next',
        isMoving:false,
        bnextClass:'',
        swiperOption:{
            // autoplay: 3000,
            initialSlide: 0,
            // loop: true,
            // prevButton:'.swiper-left',
            // nextButton:'.swiper-right',
            // pagination: '.swiper-pagination',
        },
        rank:[{
            name:'综合类 （入围）',
            title:'2017中国互联网',
            subtitle:'新锐领先者',
            content:[{
                name:'年度领先者',
                subtitle:'年度领先雇主',
                list:[{
                    name:'北京拉勾科技有限公司',
                    logo:'https://static.lagou.com/thumbnail_300x300/i/image/M00/76/40/Cgp3O1g1TNOAB2yxAAA9bQUyc4g814.png'
                }]
            },{
                name:'新锐领先者',
                subtitle:'新锐领先雇主',
                list:[{
                    name:'北京拉勾科技有限公司',
                    logo:'https://static.lagou.com/thumbnail_300x300/i/image/M00/76/40/Cgp3O1g1TNOAB2yxAAA9bQUyc4g814.png'
                }]
            }]
        },{
            name:'行业类 （入围）',
            title:'2017互联网',
            subtitle:'新锐领先者',
            // 电商        金融        游戏        硬件        教育        企业服务        大文娱
            content:[{
                name:'电商',
                subtitle:'电商领域领先雇主',
                list:[{
                    name:'北京拉勾科技有限公司',
                    logo:'https://static.lagou.com/thumbnail_300x300/i/image/M00/76/40/Cgp3O1g1TNOAB2yxAAA9bQUyc4g814.png'
                }]
            },{
                name:'金融',
                subtitle:'金融领域领先雇主',
                list:[{
                    name:'北京拉勾科技有限公司',
                    logo:'https://static.lagou.com/thumbnail_300x300/i/image/M00/76/40/Cgp3O1g1TNOAB2yxAAA9bQUyc4g814.png'
                }]
            },{
                name:'游戏',
                subtitle:'游戏领域领先雇主',
                list:[{
                    name:'北京拉勾科技有限公司',
                    logo:'https://static.lagou.com/thumbnail_300x300/i/image/M00/76/40/Cgp3O1g1TNOAB2yxAAA9bQUyc4g814.png'
                }]
            },{
                name:'硬件',
                subtitle:'硬件领域领先雇主',
                list:[{
                    name:'北京拉勾科技有限公司',
                    logo:'https://static.lagou.com/thumbnail_300x300/i/image/M00/76/40/Cgp3O1g1TNOAB2yxAAA9bQUyc4g814.png'
                }]
            },{
                name:'教育',
                subtitle:'教育领域领先雇主',
                list:[{
                    name:'北京拉勾科技有限公司',
                    logo:'https://static.lagou.com/thumbnail_300x300/i/image/M00/76/40/Cgp3O1g1TNOAB2yxAAA9bQUyc4g814.png'
                }]
            },{
                name:'企业服务',
                subtitle:'企业服务领域领先雇主',
                list:[{
                    name:'北京拉勾科技有限公司',
                    logo:'https://static.lagou.com/thumbnail_300x300/i/image/M00/76/40/Cgp3O1g1TNOAB2yxAAA9bQUyc4g814.png'
                }]
            },{
                name:'大文娱',
                subtitle:'大文娱领域领先雇主',
                list:[{
                    name:'北京拉勾科技有限公司',
                    logo:'https://static.lagou.com/thumbnail_300x300/i/image/M00/76/40/Cgp3O1g1TNOAB2yxAAA9bQUyc4g814.png'
                }]
            }]
        },{
            name:'区域类 （入围）',
            title:'2017互联网',
            subtitle:'新锐领先者',
            // 华北地区            华东地区            华南地区
            content:[{
                name:'华北地区',
                subtitle:'华北地区领先雇主',
                list:[{
                    name:'北京拉勾科技有限公司',
                    logo:'https://static.lagou.com/thumbnail_300x300/i/image/M00/76/40/Cgp3O1g1TNOAB2yxAAA9bQUyc4g814.png'
                }]
            },{
                name:'华东地区',
                subtitle:'华东地区领先雇主',
                list:[{
                    name:'北京拉勾科技有限公司',
                    logo:'https://static.lagou.com/thumbnail_300x300/i/image/M00/76/40/Cgp3O1g1TNOAB2yxAAA9bQUyc4g814.png'
                }]
            },{
                name:'华南地区',
                subtitle:'华南地区领先雇主',
                list:[{
                    name:'北京拉勾科技有限公司',
                    logo:'https://static.lagou.com/thumbnail_300x300/i/image/M00/76/40/Cgp3O1g1TNOAB2yxAAA9bQUyc4g814.png'
                }]
            }]
        },{
            name:'特别类 （入围）',
            title:'2017',
            subtitle:'新锐领先者',
            // 新零售        人工智能        最受员工喜爱        自媒体        最受大学生青睐
            content:[{
                name:'',
                subtitle:'内容创业&营销领先雇主',
                list:[{
                    name:'北京拉勾科技有限公司',
                    logo:'https://static.lagou.com/thumbnail_300x300/i/image/M00/76/40/Cgp3O1g1TNOAB2yxAAA9bQUyc4g814.png'
                }]
            }]
        }],
        isiPhone:false
    },
    mounted:function(){
        this.getData();
        // show 榜单
        $('#btn-signup').on('click',function () {
            var pageRank = document.getElementById('page-rank'),
                classname = pageRank.className;
            document.getElementById('page-theme').className = 'moveDisppear';
            console.log(document.getElementById('page-theme').className)
            pageRank.className = classname.replace(' hide','');
        });
        // rule 
        var curNavIdx = -1;
        var navRules={
            0:-118,
            1:-64,
            2:-172,
            3:-226,
            4:-334,
            5:-280
        };
        $(".rule-icon").on('click',function () {
            curNavIdx = $(this).data('idx');
            console.log(curNavIdx);
            $("#rules-detail-box").show();
            renderRuleNav();
            renderRuleBox();
        });
        $(".nav-btn").on('click',function () {
            if($(this).data('idx') != curNavIdx){
                curNavIdx = $(this).data('idx');
                $("#rules-detail-box").show();
                renderRuleNav();
                renderRuleBox();
            }
        });
        dragRulesDetailList();
        //音乐
        $('.music-box').on('click',function(){
            if($('#music')[0].paused){
                $('#music')[0].play();
                $(".music-icon").removeClass('close').addClass('open');

            }else{
                $('#music')[0].pause();
                $(".music-icon").removeClass('open').addClass('close');
            }
        });
        function rem($n) {
            return $n * (750 / 1080) / (750 / 16) +'rem';
        }
        function renderRuleNav() {
            $("#theme-rules").css('background-position',rem(-10)+' '+rem(navRules[curNavIdx]));
        }
        function renderRuleBox() {
            $("#rules-detail-list").animate({
                left:rem(-808*curNavIdx+168)
            },500);
        }
        function dragRulesDetailList() {
            var startX = 0,
                moveX = 0,
                startY = 0,
                moveY = 0;
            $("#rules-detail-list").on("touchstart",function (e) {
                startX = e.originalEvent.changedTouches[0].pageX;
                startY = e.originalEvent.changedTouches[0].pageY;
            }).on('touchmove',function (e) {
                moveX = e.originalEvent.changedTouches[0].pageX;
                moveY = e.originalEvent.changedTouches[0].pageY;
            }).on('touchend',function (e) {
                if(Math.abs(moveY-startY)>Math.abs(moveX-startX)){
                    // e.stopImmediatePropagation();
                    // return false;
                }else{
                    if(moveX<startX){
                        //向右滑动了
                        curNavIdx++;
                        if(curNavIdx<6){
                            renderRuleBox();
                            renderRuleNav();
                        }
                    }else if(moveX>startX){
                        //向左滑动了
                        curNavIdx--;
                        if(curNavIdx>-1){
                            renderRuleNav();
                            renderRuleBox();
                        }
                    }
                }
            });
        }
    },
    methods:{
        setScrollDataRank:function(){
            // if(scrollData['rank'] && scrollData['rank'].destory){
            //     self.destoryScrollRank();
            // }
            var config = {
                parentClassname:'rank-list',
                classname: 'rank',
                elemHeight:696,//694,//464,  
                height: 696,//694,//464,
                barHeight:700 - 14 * 2,//440,
                reduce:0,//26,//+39(padding-top) 26(last: margin-bottom),
                space: 8,//12,
                number: 696 / 220,//2.1,//this.rank[this.activeStatus].content[0].list,
                one: 220,
                fixedHeight: true,//false,
                parentIndex:this.activeStatus,
                index:this.currentIndex,
                leftCallback:this.showNext,
                rightCallback:this.showPrev,
                length:this.rank[this.activeStatus].content[this.currentIndex].list.length
            };
            if(this.activeStatus == 3 && this.currentIndex == 0){
                config.one = 1246;
                config.number = 696 / 1246;
                config.space = 0;
                config.length = 1;
            }
            scrollData['rank'] = new scrollClass(config);
        },
        getData:function(){
            var self = this;
            $.ajax({
                url:'https://activity.lagou.com/activityapi/employer/final-top',
                type:'get',
                // dataType:'jsonp',
                // jsonp:'jsoncallback',
                success:function(data){
                    var content = data.content,
                        key = '',
                        i = 0;
                    for(i = 0; i < content.length; i++){
                        key = content[i].optionKey;
                        switch(key){
                            case 'hb':  // 区域类2 - 华北地区0
                                self.rank[2].content[0].list = content[i].companyTopInfo;
                                break;
                            case 'hd':  // 区域类2 - 华东地区1
                                self.rank[2].content[1].list = content[i].companyTopInfo;
                                break;
                            case 'hn':  // 区域类2 - 华南地区2
                                self.rank[2].content[2].list = content[i].companyTopInfo;
                                break;
                            case 'xrgz':  // 综合类0 - 新锐雇主1
                                self.rank[0].content[1].list = content[i].companyTopInfo;
                                break;
                            case 'zjgz':  // 综合类0 - 最佳雇主0
                                self.rank[0].content[0].list = content[i].companyTopInfo;
                                break;
                            case 'jr':  // 行业类1 - 金融1
                                self.rank[1].content[1].list = content[i].companyTopInfo;
                                break;
                            case 'yx':  // 行业类1 - 游戏2
                                self.rank[1].content[2].list = content[i].companyTopInfo;
                                break;
                            case 'yj':  // 行业类1 - 硬件3
                                self.rank[1].content[3].list = content[i].companyTopInfo;
                                break;
                            case 'jy':  // 行业类1 - 教育4
                                self.rank[1].content[4].list = content[i].companyTopInfo;
                                break;
                            case 'qyfw':  // 行业类1 - 企业服务5
                                self.rank[1].content[5].list = content[i].companyTopInfo;
                                break;
                            case 'whyl':  // 行业类1 - 文化娱乐6
                                self.rank[1].content[6].list = content[i].companyTopInfo;
                                break;
                            case 'dzsw':  // 行业类1 - 电子商务0
                                self.rank[1].content[0].list = content[i].companyTopInfo;
                                break;

                        }
                    }
                    self.setScrollDataRank();
                },
                error:function(error){
                    console.log(error)
                },
            })
        },
        dealStringLine:function(value){
            var re=/([\u4E00-\u9FA5]|[\uFE30-\uFFA0])/g,   // 匹配中文
                one = 5,total = 9,
                enTotal = total * 2,
                tempStr = value.replace(re,"çç");
               
            if(enTotal < tempStr.length){
                return value.slice(0,tempStr.slice(0,enTotal).replace(/(çç)/g,"ç").length) + '...';
            }else{
                return value;
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
        changeTabEvent:function(value){
            this.activeStatus = value;
            this.bprevIndex = -2;
            this.prevIndex = -1;
            this.currentIndex = 0;
            this.nextIndex = 1;
            this.bnextIndex = 2;
            this.setScrollDataRank();
        },
        showNext:function(){
            // console.log('next')
            var index = this.currentIndex,
                length = this.rank[this.activeStatus].content.length,
                self = this;
            index++;
            if(index < length){
                if(this.isMoving){
                    return
                }
                this.isMoving = true
                this.prevIndex = this.currentIndex;
                this.bprevIndex = this.prevIndex - 1;
                this.currentIndex = index;
                this.nextIndex = this.currentIndex + 1;
                this.bnextIndex = this.nextIndex + 1;
                this.bprevClass = 'prevToNormal';
                this.prevClass = 'currentToPrev';
                this.currentClass = 'nextToCurrent';
                this.nextClass = 'normalToNext';
                this.bnextClass = '';
                setTimeout(function(){
                    self.currentClass = 'current';
                    self.prevClass = 'prev';
                    self.nextClass = 'next';
                    self.bprevClass = '';
                    self.bnextClass = '';
                    self.setScrollDataRank();
                    self.isMoving = false;
                },500)
            }
        },
        showPrev:function(){
            // console.log('prev')
            var index = this.currentIndex,
                self = this;
            index--;
            if(index >= 0){
                if(this.isMoving){
                    return
                }
                this.isMoving = true
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
                    self.currentClass = 'current'
                    self.prevClass = 'prev'
                    self.nextClass = 'next'
                    self.bprevClass = '';
                    self.bnextClass = '';
                    self.setScrollDataRank();
                    self.isMoving = false;
                },500)
            }
        },
        changeRankArea:function(index){
            let line = this.currentIndex - index,
                self = this;
            if(this.isMoving || line == 0){
                return
            }
            this.isMoving = true;
            this.currentIndex = index;
            this.prevIndex = this.currentIndex - 1;
            this.bprevIndex = this.prevIndex - 1;
            this.nextIndex = this.currentIndex + 1;
            this.bnextIndex = this.nextIndex + 1;
            if(line > 0){  // next
                this.bnextClass = 'nextToNormal';
                this.nextClass = 'currentToNext';
                this.currentClass = 'prevToCurrent';
                this.prevClass = 'normalToPrev';
                this.bprevClass = '';
            }else {  // prev
                this.bprevClass = 'prevToNormal';
                this.prevClass = 'currentToPrev';
                this.currentClass = 'nextToCurrent';
                this.nextClass = 'normalToNext';
                this.bnextClass = '';
            }
            setTimeout(function(){
                self.currentClass = 'current'
                self.prevClass = 'prev'
                self.nextClass = 'next'
                self.bprevClass = '';
                self.bnextClass = '';
                self.setScrollDataRank();
                self.isMoving = false;
            },500)
        }
    },
    updated:function(){
        document.getElementById('item-list'+this.activeStatus+this.currentIndex).style.top = '0px'
        document.getElementById('rank_bar'+this.activeStatus+this.currentIndex).style.top = '0px'
    },
});


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


// var flip = jQuery('.flip');
// var pageData={
//     direction:{
//         x:"down",
//         y:"down"
//     },
//     start:{
//         x:0,
//         y:0
//     },
//     end:{
//         x:0,
//         y:0
//     },
//     now:0,
//     last:0, 
//     page:{
//         up:{
//             last:"moveULast",
//             now:"moveUNow",
//         },
//         down:{
//             last:"moveDLast",
//             now:"moveDNow",
//         },
//     },
//     address:'https://activity.lagou.com',
//     code:{
//         timer:null,
//         backgroundColor:'#00b38a',
//         html:'验证'
//     },
//     pageLength:jQuery(".page").length-1,
//     isMoving:false,
//     clickStatus:false,
//     signStatus:false
// };

// "use strict";

// var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

// function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// var PageMove = function () {
//     function PageMove(options) {
//         _classCallCheck(this, PageMove);
        
//         this.data = {
//             direction: {
//                 x: "down",
//                 y: "down"
//             },
//             start: {
//                 x: 0,
//                 y: 0
//             },
//             end: {
//                 x: 0,
//                 y: 0
//             },
//             now: 0,
//             last: 0,
//             page: {
//                 up: {
//                     last: (options.animation ? options.animation : "move") + "ULast",
//                     now: (options.animation ? options.animation : "move") + "UNow"
//                 },
//                 down: {
//                     last: (options.animation ? options.animation : "move") + "DLast",
//                     now: (options.animation ? options.animation : "move") + "DNow"
//                 }
//             },
//             pageLength: jQuery(".page").length-1,
//             isMoving: false,
//             clickStatus: false
//         };
//         this._initPageMoveEvent();
//     }
    
//     _createClass(PageMove, [{
//         key: "pageMove",
//         value: function pageMove(od, self) {
//             console.log(self.data.now+' , '+self.data.last);
//             // var circle = jQuery('.page-bottom > .circle > div');
//             // circle.removeClass('active');
//             // if(self.data.now == 0){
//             //     jQuery('.page-bottom').addClass('page0-bottom')
//             //     circle.eq(self.data.now).addClass('active');
//             // }else if(self.data.now == 10){
//             //     jQuery('.page-bottom').addClass('page10-bottom')
//             //     circle.eq(self.data.now - 1).addClass('active');
//             // }else{
//             //     jQuery('.page-bottom').removeClass('page0-bottom page10-bottom');
//             //     circle.eq(self.data.now - 1).addClass('active');
//             // }
//             //  flip-animation
//             jQuery(".page" + self.data.now).removeClass("hide").addClass("pageCurrent");
//             // jQuery(".page").removeClass(self.data.page[od].now + " " + self.data.page[od].last + " " + self.data.page[od].now + " " + self.data.page[od].last + " pageCurrent").addClass("hide");
//             jQuery(".page").removeClass("moveUNow")
//                            .removeClass("moveDNow")
//                            .removeClass("moveULast")
//                            .removeClass("moveUNow")
//                            .removeClass("moveADLast")
//                            .removeClass("pageCurrent")
//                            .addClass("hide");
//             jQuery(".page" + self.data.now).removeClass("hide")
//                 .addClass(self.data.page[od].now)
//                 .addClass("pageCurrent");
//             jQuery(".page" + self.data.last).removeClass("hide").addClass(self.data.page[od].last);
//             if(od == 'up'){
//                 jQuery('.flip').addClass('flip-back').removeClass('hide');
//                 if(app.$data.isiPhone){
                    
//                 }else{
//                     var lastPage = jQuery(".page" + self.data.last);
//                     lastPage.css({
//                         '-webkit-clip-path':'inset(0 0 0 '+app.getRem(282)+')',
//                         'clip-path':'inset(0 0 0 '+app.getRem(282)+')'
//                     });
//                     (function(lastPage){
//                         app.setLeftClip(377,62.5,lastPage,function(){
//                             app.setLeftClip(500,62.5,lastPage,function(){
//                                 app.setLeftClip(674,125,lastPage,function(){
//                                     app.setLeftClip(750,245,lastPage,function(){
//                                         jQuery('.flip').addClass('hide').removeClass('flip-back');
//                                         jQuery(".page").removeClass("moveUNow")
//                                             .removeClass("moveDNow")
//                                             .removeClass("moveULast")
//                                             .removeClass("moveUNow")
//                                             .removeClass("moveADLast");
//                                         jQuery(".page" + self.data.last).attr('style','').addClass("hide");
//                                         jQuery(".page" + self.data.now).removeClass("hide").addClass("pageCurrent");
//                                         // alert('od == "up",Now: '+jQuery(".page" + self.data.now)[0].className);
//                                         // alert('od == "up",Last: '+jQuery(".page" + self.data.last)[0].className);
//                                         app.$data.flipStatus = false;
//                                     });
//                                 });
//                             });
//                         });
//                     })(lastPage);
//                     // jQuery(".page" + self.data.last).animate({'clip':'inset(0 0 0 '+app.getRem(260)+')'},500,function(){
//                     //     // _this.toNextPage();
//                     // });
//                     // $$(this).animate({'clip':'rect(0 0 '+GC.w+'px 0)'},500,'ease-in-out',function(){
//                     //     // _this.toNextPage();
//                     // });
//                 }
//             }else {
//                 jQuery('.flip').removeClass('hide');
//                 if(app.$data.isiPhone){
                    
//                 }else{
//                     var lastPage = jQuery(".page" + self.data.last);
//                     lastPage.css({
//                         '-webkit-clip-path':'inset(0 '+app.getRem(260)+' '+'0 0)',
//                         'clip-path':'inset(0 '+app.getRem(260)+' '+'0 0)'
//                     });
//                     (function(lastPage){
//                         app.setRightClip(377,62.5,lastPage,function(){
//                             app.setRightClip(500,62.5,lastPage,function(){
//                                 app.setRightClip(674,125,lastPage,function(){
//                                     app.setRightClip(750,245,lastPage,function(){
//                                         jQuery('.flip').addClass('hide').removeClass('flip-back');
//                                         // jQuery(".page").removeClass(self.data.page[od].now + " " + self.data.page[od].last + " " + self.data.page[od].now + " " + self.data.page[od].last);
//                                         jQuery(".page").removeClass("moveUNow")
//                                                 .removeClass("moveDNow")
//                                                 .removeClass("moveULast")
//                                                 .removeClass("moveUNow")
//                                                 .removeClass("moveADLast");
//                                         jQuery(".page" + self.data.last).attr('style','').addClass("hide");
//                                         jQuery(".page" + self.data.now).removeClass("hide").addClass("pageCurrent");
//                                         // alert('od == "down",Now: '+jQuery(".page" + self.data.now)[0].className);
//                                         // alert('od == "down",Last: '+jQuery(".page" + self.data.last)[0].className);
//                                         app.$data.flipStatus = false;
//                                     });
//                                 });
//                             });
//                         });
//                     })(lastPage);
                    
//                     // jQuery(".page" + self.data.last).animate({'clip':'inset(0 0 '+app.getRem(260)+'0)'},500,function(){
//                     //     // _this.toNextPage();
//                     // });
//                     // $$(this).animate({'clip':'rect(0 0 '+GC.w+'px 0)'},500,'ease-in-out',function(){
//                     //     // _this.toNextPage();
//                     // });
//                 }
//             }
//             // $$(".page" + self.data.now).animate({'clip':'rect(0 0 '+GC.h+'px 0)'},500,'linear',function(){
//             //     console.log('over');
//             //     jQuery('.flip').addClass('hide');
//             //     jQuery(".page").removeClass(self.data.page[od].now + " " + self.data.page[od].last + " " + self.data.page[od].now + " " + self.data.page[od].last);
//             //     jQuery(".page" + self.data.last).addClass("hide");
//             //     self.data.isMoving = false;
//             // });
//             setTimeout(function () {
//                 app.$data.flipStatus = false;
//                 jQuery('.flip').addClass('hide').removeClass('flip-back');
//                 if(app.$data.isiPhone){
                    
//                 }
//                 // jQuery(".page").removeClass(self.data.page[od].now + " " + self.data.page[od].last + " " + self.data.page[od].now + " " + self.data.page[od].last);
//                 jQuery(".page").removeClass("moveUNow")
//                            .removeClass("moveDNow")
//                            .removeClass("moveULast")
//                            .removeClass("moveUNow")
//                            .removeClass("moveADLast");
//                 jQuery(".page" + self.data.last).attr('style','').addClass("hide");
//                 jQuery(".page" + self.data.now).removeClass("hide").addClass("pageCurrent");
//                 // alert('setTimeout,Now: '+jQuery(".page" + self.data.now)[0].className);
//                 // alert('setTimeout,Last: '+jQuery(".page" + self.data.last)[0].className);
//                 // jQuery(".page" + self.data.last).addClass("hide").css({
//                 //     '-webkit-clip-path':'none',
//                 //     'clip-path':'none'
//                 // });
//                 self.data.isMoving = false;
//             }, 500);
//         }
//     }, {
//         key: "_dataMove",
//         value: function _dataMove(od, self) {
//             var classify = jQuery('.page'+self.data.now+' .classify'),
//                 data = app.$data['data'+(self.data.now - 1)],
//                 now = od == 'up' ? 'moveDataUNow' : 'moveDataDNow',
//                 last = od == 'up' ? 'moveDataULast' : 'moveDataDLast';
//             classify.removeClass("moveDataULast moveDataUNow moveDataDLast moveDataDNow opacityChange delay0-5").addClass("hide");
//             classify.eq(data.current).removeClass("hide").addClass(now);
//             classify.eq(data.current-1).removeClass("hide").addClass(last);
//             (function(classify,data){
//                 setTimeout(function () {
//                     classify.removeClass("moveDataULast moveDataUNow moveDataDLast moveDataDNow");
//                     // classify.eq(data.current).addClass('opacityChange delay0-5');
//                     classify.eq(data.current-1).addClass("hide");
//                     self.data.isMoving = false;
//                     app.$data.flipStatus = false;
//                 }, 500);
//             })(classify,data);
//         }
//     },{
//         key: "_pageMoveCompute",
//         value: function _pageMoveCompute(self) {
//             var od = "down";
//             switch(self.data.now){
//                 case 9:
//                 case 10:
//                     var dataname = 'data'+(self.data.now - 1);
//                     if (self.data.direction.x == "up") {
//                         if(app.$data[dataname].current == app.$data[dataname].length - 1){
//                         }else {
//                             app.$data[dataname].current += 1;
//                             self._dataMove(od,self);
//                             break;
//                         }
//                     } else {
//                         if(app.$data[dataname].current == 0){
//                         }else {
//                             od = "up";
//                             app.$data[dataname].current -= 1;
//                             self._dataMove(od,self);
//                             break;
//                         }
//                     }
//                 default:
//                     self.data.last = self.data.now;
//                     if (self.data.direction.x == "up") {
//                         self.data.now += 1;
//                     } else {
//                         // self.data.isMoving = false;
//                         // return;
//                         self.data.now -= 1;
//                         od = "up";
//                     }

//                     console.log(self.data.now);
//                     // if (self.data.now == self.data.pageLength - 1) {
//                     //     if (self.data.signStatus) {
//                     //         if (self.data.last != self.data.pageLength) {
//                     //             self.data.now = self.data.pageLength;
//                     //         } else {
//                     //             if (self.data.direction.x != "up") {
//                     //                 self.data.now--;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                     if ( self.data.now > self.data.pageLength) {
//                         self.data.now = self.data.pageLength;
//                         self.data.last = self.data.now - 1;
//                         self.data.isMoving = false;
//                         return;
//                         self.data.now = 0;
//                     }
//                     if (self.data.now <= -1) {
//                         self.data.last = 1;
//                         self.data.now = 0;
//                         self.data.isMoving = false;
//                         return;
//                         // if (self.data.signStatus) {
//                         //     self.data.now = self.data.pageLength;
//                         // } else {
//                         //     self.data.now = self.data.pageLength - 1;
//                         // }
//                     }
//                     // if(self.data.now == 2){
//                     //     setTimeout(function(){
//                     //         setCircleAnimation();
//                     //     },2300);
//                     // }
//                     self.pageMove(od, self);
//                     break;
//             }
//         }
//     }, {
//         key: "_initPageMoveEvent",
//         value: function _initPageMoveEvent() {
//             var self = this;
//             document.addEventListener("touchstart", function (ev) {
//                 var touch = ev.targetTouches[0];
//                 self.data.start.x = touch.clientX;
//                 self.data.start.y = touch.clientY;
//             }, false);
//             document.addEventListener("touchmove", function (ev) {
//                 ev.preventDefault();
//                 var touch = ev.targetTouches[0];
//                 self.data.end.x = touch.clientX;
//                 self.data.end.y = touch.clientY;
//             }, false);
//             document.addEventListener("touchend", function (ev) {
//                 switch(self.data.now){
//                     case 0:
//                     case 1:
//                         return;
//                 }
//                 var initdisc = 40,
//                     disc = self.data.end.x == 0 ? false : Math.abs(self.data.end.x - self.data.start.x) > initdisc;
//                 self.data.direction.x = self.data.end.x - self.data.start.x > initdisc ? "down" : self.data.end.x - self.data.start.x < initdisc ? "up" : "down";
//                 self.data.direction.y = self.data.end.y - self.data.start.y > initdisc ? "down" : self.data.end.y - self.data.start.y < initdisc ? "up" : "down";
//                 if (!self.data.clickStatus && !self.data.isMoving && disc) {
//                     self.data.isMoving = true;
//                     if(!app.$data.flipStatus){
//                         app.$data.flipStatus = true;
//                         self._pageMoveCompute(self);
//                     }
//                 }
//                 self.data.start.x = 0;
//                 self.data.start.y = 0;
//                 self.data.end.x = 0;
//                 self.data.end.y = 0;
//                 self.data.clickStatus = false;
//             }, false);
//         }
//     }]);

//     return PageMove;
// }();

// var isAPP = getUrlParam('lagoufrom', 2);
// var app = getUrlParam('lagoufrom', 0).toLowerCase().trim();
// var appType = getUrlParam('appType', 0).trim();
// var weixin = isWeiXin();
// var isPC = IsPC();

// init();

// function init() {
//     if (weixin) { // 微信授权
//         weixinAuth();
//     } else {
//         if (isAPP) { // app 授权
//             appAuth();
//         } else { // 浏览器
//             if (isPC) {
//                 weixinAuth();
//             } else {
//                 browserAuth();
//             }

//         }
//     }
//     // initTotal();
// }

// function browserAuth() {
//     $.ajax({
//         type: 'get',
//         url: 'https://activity.lagou.com/activityapi/basic/ifLogin',
//         success: function(data) {
//             if (data.success) {
//                 var state = data.state;
//                 if (state == 200) { //登录成功
//                     initTotal();
//                 } else if (state == 201) { // 无登录用户
//                     window.location.href = 'https://activity.lagou.com/activityapi/basic/login.html?redirect=' + window.location.href;
//                 }
//             } else {
//                 console.log(data.message);
//                 initTotal();
//             }
//         },
//         error: function(error) {
//             console.log(error.message);
//             initTotal();
//         }
//     });
// }

// function IsPC() {
//     var userAgentInfo = navigator.userAgent;
//     var Agents = ["Android", "iPhone",
//         "SymbianOS", "Windows Phone",
//         "iPad", "iPod"
//     ];
//     var flag = true;
//     for (var v = 0; v < Agents.length; v++) {
//         if (userAgentInfo.indexOf(Agents[v]) > 0) {
//             flag = false;
//             break;
//         }
//     }
//     return flag;
// }

// function appAuth() {
//     var checkcode = getUrlParam('checkCode', 0);
//     if (checkcode) {
//         $.ajax({
//             type: 'get',
//             url: 'https://activity.lagou.com/activityapi/basic/appAutoLogin.json', //https://activity.lagou.com/activityapi/basic/ifLogin',
//             data: {
//                 checkCode: checkcode
//             },
//             success: function(data) {
//                 if (data.state == 200) { // 已登录
//                     initTotal();
//                 }
//             },
//             error: function(error) {
//                 console.log(error.message);
//                 initTotal();
//             }
//         });
//     } else {
//         window.location.href = 'https://www.lagou.com/center/login?forward=' + encodeURIComponent(window.location.href);
//     }
// }

// function weixinAuth() {
//     $.ajax({
//         type: 'get',
//         url: 'https://activity.lagou.com/activityapi/weixin/hasOpenId',
//         success: function(data) {
//             if (data.state == 200) { // 已登录
//                 initTotal();
//             } else if (data.state == 201) { // 未登录
//                 var weixinlogin = window.sessionStorage.getItem('weixinlogin');
//                 if (weixinlogin == 1) {
//                     // window.sessionStorage.setItem('weixinlogin',1);
//                     initTotal();
//                 } else if (!weixinlogin) {
//                     window.sessionStorage.setItem('weixinlogin', 1);
//                     window.location.href = 'https://activity.lagou.com/activityapi/weixin/auth.html?url=' + window.location.href;
//                 }
//                 /*
//                 $.ajax({
//                 	type:'get',
//                 	url:'https://activity.lagou.com/activityapi/weixin/authOpenId.html',
//                 	success:function(data){
//                 		console.log('授权成功');
//                 	},
//                 	error:function(){
//                 		console.log('授权失败');
//                 	}
//                 });
//                 */
//             }
//         },
//         error: function(error) {
//             console.log(error.message);
//             initTotal();
//         }
//     });
// }
// function orientationChange() {
//     var outerLayer = $('body > .swiper-container.parent')[0];
//     var body = document.body;
//     // if(body.getAttribute("orient")=="landscape"){  
//     // 	body.setAttribute("orient","portrait");  
//     // }else{  
//     // 	body.setAttribute("orient","landscape");  
//     // }
//     switch (window.orientation) {　　
//         case 0:
//             // $(body)[0].className = '';
//             // alert("肖像模式 0");
//             body.setAttribute("orient", "portrait");
//             break;　　
//         case -90:
//             outerLayer.className = 'orientationf90';
//             // alert("左旋 -90");
//             body.setAttribute("orient", "landscape");
//             break;　　
//         case 90:
//             outerLayer.className = 'orientation90';
//             body.setAttribute("orient", "landscape");
//             // alert("右旋 90");
//             break;　　
//         case 180:
//             outerLayer.className = 'orientation180';
//             // 　　alert("风景模式 180");
//             body.setAttribute("orient", "portrait");　　
//             break;
//     }
// }


