(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

    var self = this;
    this.init = function(options) {
        var elem = $('.' + options.classname),
            ul = elem.children('ul'),
            li = ul.children('li'),
            bar = elem.find('.' + options.classname + '_bar'),
            length = li.length,
            one = length > 0 ? li.eq(0).height() : 0;

        self.initHeight = options.height;
        self.elemHeight = elem.height();
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
        self.barHeight = elem.height() * self.number / self.length;
        self.scale = (self.elemHeight - self.barHeight - self.getRem(self.space) * 2) / ((self.length - self.number) * self.one);
        self.fixedHeight = options.fixedHeight == undefined ? true : !!options.fixedHeight;
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
            elem[0].removeEventListener('touchstart', app.scrollData[self.classname].startScroll, false);
            elem[0].removeEventListener('touchmove', app.scrollData[self.classname].moveScroll, false);
        }
    };

    this.initEvent = function() {
        var elem = $('.' + self.classname)[0];
        elem.removeEventListener('touchstart', self.startScroll, false);
        elem.removeEventListener('touchmove', self.moveScroll, false);

        elem.addEventListener('touchstart', self.startScroll, false);
        elem.addEventListener('touchmove', self.moveScroll, false);
    };

    this.startScroll = function(e) {
        // e.stopPropagation();
        // e.preventDefault();

        app.scrollData.isMoving = false;
        clickTime = new Date().getTime();
        if (app.scrollData[self.classname].length > app.scrollData[self.classname].number) {
            var touch = e.targetTouches[0];
            app.scrollData[self.classname].start = touch.clientY;
            app.scrollData[self.classname].top = parseFloat(app.scrollData[self.classname].ul.css('top'));
        }
    };

    this.moveScroll = function(e) {
        // e.stopPropagation();
        e.preventDefault();

        if (app.scrollData[self.classname].length > app.scrollData[self.classname].number) {
            app.scrollData.isMoving = true;
            var touch = e.targetTouches[0],
                direction = touch.clientY - app.scrollData[self.classname].start;

            direction = direction > 0 ? 1 : -1;
            app.scrollData[self.classname].end = touch.clientY - app.scrollData[self.classname].start + app.scrollData[self.classname].top
            if (direction == 1 && app.scrollData[self.classname].end >= 0) { // 向上
                app.scrollData[self.classname].end = 0;
            } else if (direction == -1 && app.scrollData[self.classname].end <= -app.scrollData[self.classname].height) { // 向下
                app.scrollData[self.classname].end = -app.scrollData[self.classname].height;
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
    

app = new Vue({
    el:"#app",
    data:{
        // test
        mode:"development",
        lg:"1biq",
        activePage:0,
        search_name:'',
        search_tips:'',
        userTotal:3,
        userUsed:0,
        userRank:0,
        votedCompanyIds:[],
        voteActive:-1,
        selectedStatus:0,
        user:{
            "nickname":"我",
            "headimgurl":"images/create-logo.png"
        },
        testUserLogo:'',
        successStatus:false,
        giftHref:"https://activity.lagou.com/topic/jplq.html",
        rankStatus:false,
        createStatus:false,
        canvas:null,
        ctx:null,
        down:0,
        url:'',
        loadingArray:[
            // "images/create-bg.png"
            "images/page0-bg-top.png",
            "images/create-bg-bottom.png",
            "images/create-logo.png",
            "images/create-light.png",
            "images/create-tips.png",
            "images/create-card-03.png",
            "images/create-title.png",
            "images/create-size-icon.png"
        ],
        loadedImgs:[],
        loadedImgs2:[],
        loaded:0,
        drawStatus:false,
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
        createUserStyle:{

        },
        // 滑动
        isMoving:false,
        bprevIndex:-1,
        prevIndex:0,
        currentIndex:1,
        nextIndex:2,
        bnextIndex:3,
        prevClass:'prev',
        bprevClass:'',
        currentClass:'active',
        bnextClass:'',
        nextClass:'next',
        companyList:[{
            "id": 312260,
            "financestage": "不需要融资",
            "logo": "i/image/M00/7F/B5/CgpFT1pV0aKAF4u8AABVMWtorEo579.png",
            "companyname": "百度在线网络技术（北京）有限公司",
            "companyshortname": "拉勾网",
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
        },{
            "id": 15265,
            "financestage": "不需要融资",
            "logo": "i/image/M00/5B/5A/Cgp3O1fg3uWAEuuhAABBDg7PalQ660.png",
            "companyname": "百度在线网络技术（北京）有限公司",
            "companyshortname": "我来贷WeLab",
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
        },{
            "id": 1575,
            "financestage": "不需要融资",
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
        },{
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
        }],
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
            "displayContactNum": 20
        },
        searchStatus:false,
        search_list:[{
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
        }],
        scrollData:{
            'search_list': {},
            'rank-center': {},
            confirmCompany: false, // 是否选择公司
            requestCompany: '', // 当前请求公司的搜索值
            company: {},
            isMoving: false,
            companyID: 0,
            currentCompany: {}
        },
        rankList:[{
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
        }]
    },
    computed:{
        qrcodeUrl:function(){
            // var loca = window.location
            // return loca.protocol+'//'+loca.host+'/src/2018-employer/m_index.html?selected='+this.selected.id
            return 'https://activity.lagou.com/activity/dist/2018-employer/m_index.html?selected='+this.selected.id
        },
        createCode:function(){
            return encodeURIComponent(this.qrcodeUrl)
        },
    },
    mounted:function(){
        this.selectedId = getQueryString('selected') || ''
        this.initCreateUserStyle()
        if(this.isWeiXin()){
            this.getUserWeixinData()
        }
        this.initCompanyList()
        this.dragCompanylList();
        this.initCanvas()
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
        initCreateUserStyle:function(){
            // this.createUserStyle
            var height = RC.w / GC.w * GC.h - RC.h,
                offset = height > 0 ? height / 3 : 0
            this.createUserStyle = {
                top:this.setRem(385+offset)
            }
        },
        setRem:function(value){
            return value / (750 / 16)+'rem';
        },
        initCompanyList:function(){
            var self = this
            $.ajax({
                type: 'get',
                url: 'https://activity.lagou.com/activityapi/votelike/companyCards',
                data:{
                    activityId:20180723,
                    companyId:this.selectedId,
                    num:20
                },
                success: function(result) {
                    if (result.success) {
                        var data = result.content || [];
                        self.companyList = data
                    }
                },
                error: function(xhr, type) {
                    // alert('网络原因请重新尝试!');
                }
            });
        },
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
                    alert(xhr)
                    // alert('网络原因请重新尝试!');
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
        getRankList:function(){
            var self = this
            // if(this.mode == "development"){
            //     self.rankStatus = true
            //     self.showRankList()
            //     return
            // }
            $.ajax({
                type: 'get',
                url: 'https://activity.lagou.com/activityapi/votelike/getVoteSortV2.json',
                data:{
                    activityId:20180723
                },
                success: function(result) {
                    if (result.success) {
                        var data = result.content;
                        if(data){
                            self.rankList = data || []
                            self.$nextTick(function(){
                                self.rankStatus = true
                                self.showRankList()
                            })
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
        voteCompanyEvent:function(one,index){
            var self = this
            // if(this.votedCompanyIds.indexOf(one.id) != -1){
            //     return
            // }
            if(this.mode == "development"){
                this.votedCompanyIds.push(one.id)
                this.voteCompanySuccess(one,index)
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
                            self.voteCompanySuccess(one,index)
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
        voteCompanySuccess:function(one,index){
            var self = this
            this.voteActive = index
            this.selected = one
            setTimeout(function(){
                self.voteActive = -1
                self.successStatus = true
                // self.votedCompanyIds.push(one.id)
                // self.userUsed--
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
            var height = this.getHeight()//RC.w / GC.w * GC.h
            this.canvas.width = RC.w
            this.canvas.height = height
            var loadedImgs = [],
                self = this
            this.ctx.fillStyle = '#dce8ff'
            this.ctx.rect(0,0,RC.w,height)
            this.ctx.fill()
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
                var height = this.getHeight()//RC.w / GC.w * GC.h
                var top = height - RC.h,
                    temp = height,
                    temp2 = height
                // this.loadedImgs = loadedImgs
                this.ctx.drawImage(this.loadedImgs[0],0,0)
                this.ctx.drawImage(this.loadedImgs[1],0,top)
                this.ctx.drawImage(this.loadedImgs[2],462,34)
                this.ctx.drawImage(this.loadedImgs[3],0,44)
                // this.ctx.drawImage(this.loadedImgs[4],103,height-224)
                if(height < RC.h){
                    temp += Math.floor(Math.abs(RC.h - height) / 4 * 3)
                    temp2 += Math.floor(Math.abs(RC.h - height) / 2)
                }
                this.ctx.drawImage(this.loadedImgs[4],103,temp2-224+24)  // tips
                this.ctx.drawImage(this.loadedImgs[5],-28,temp-651)  // card-03
                this.ctx.drawImage(this.loadedImgs[6],20,-12)
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
                sw = 0
            this.down = 0
            var qrcode = $(this.$refs['code']).qrcode({
                    render: "canvas", //也可以替换为table
                    width: 220,
                    height: 220,
                    text: this.qrcodeUrl/*可以通过ajax请求动态设置*/
                }),
                canvas = qrcode.find('canvas').get(0),
                ercode = canvas.toDataURL('image/jpg'),
                imgs = [
                    "https://activity.lagou.com/activityapi/votelike/userHeadImg",
                    "https://activity.lagou.com/activityapi/votelike/image/"+this.selected.id+"/logo",
                    ercode
                ],
                loadedImgs = [],
                loaded = 0,
                self = this;
            if(this.mode == "development"){
                imgs = [
                    "images/create-logo.png",
                    "images/create-logo.png",
                    ercode
                ]
            }
            imgs.forEach(function(url){
                var img = new Image()
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
            this.drawUserPicture(this.loadedImgs2[0])
            this.drawUserInfo()
            this.drawCompanyLogo(this.loadedImgs2[1])
            this.drawCompanyInfo()
            this.drawErcode(this.loadedImgs2[2])
            // this.ctx.drawImage(this.loadedImgs2[0],0,0)

            this.canvasToImage()
        },
        canvasToImage:function(){
            this.shareSuccessCallback()
            // console.log(this.down)
            // if(this.down >= 5){  //  || this.down >= 4
                var self = this
                setTimeout(function(){
                    self.url = self.canvas.toDataURL('image/png')
                    // alert(self.url)
                },1000)
            // }
        },
        drawErcode:function(img){
            // var qrcode = $('#code').qrcode({
            //     render: "canvas", //也可以替换为table
            //     width: 220,
            //     height: 220,
            //     text: this.qrcodeUrl/*可以通过ajax请求动态设置*/
            // });
            //将生成的二维码转换成图片格式
            var // canvas = qrcode.find('canvas').get(0),
                // src = canvas.toDataURL('image/jpg'),
                height = this.getHeight(),//RC.w / GC.w * GC.h,
                temp = height,
                // img = new Image(),
                self = this
            if(height < RC.h){
                temp += Math.floor(Math.abs(RC.h - height) / 2)
            }
            this.ctx.strokeStyle = "#7741c3"
            this.ctx.fillStyle = '#ffffff'
            this.ctx.lineWidth = 1
            this.ctx.beginPath()
            this.ctx.rect(536,temp-113-113,113,113)
            this.ctx.fill()
            this.ctx.stroke()
            this.ctx.closePath()
            // img.onload = function(){
                console.log(img.src)
                self.ctx.drawImage(img,0,0,img.width,img.height,536+6,temp-113-113+6,101,101)
                // self.down++ 
                // self.canvasToImage()
            // }
            // img.src = src
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
                        alert("roundRect undefined")
                        ctx.drawImage(img,0,0)
                    }
                };//,
                // img = new Image();
            temp.width = 3000
            temp.height = 3000
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
                ctx.clearRect(0,0,3000,3000)
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
            var height = this.getHeight(),//RC.w / GC.w * GC.h,
                temp = height,
                can = document.getElementById('canvas'),
                ctx = can.getContext("2d"),
                // url = 'https://activity.lagou.com/activityapi/votelike/image/'+this.selected.id+'/logo',//'http://www.lgstatic.com/thumbnail_400x400/'+this.selected.logo,
                self = this

            img.setAttribute('crossorigin', 'anonymous');
            if(height < RC.h){
                temp += Math.floor(Math.abs(RC.h - height) / 4 * 3)
            }
            self.drawCirclePicture(
                img, // url,// base64,
                135,temp - 536,
                182,179,
                4,
                true
            )
        },
        drawCompanyInfo:function(){
            var height = this.getHeight(),//RC.w / GC.w * GC.h
                temp = height
            
            if(height < RC.h){
                temp += Math.floor(Math.abs(RC.h - height) / 4 * 3)
            }
            this.ctx.font = "34px bold"
            this.ctx.fillStyle = "#ffffff"
            this.ctx.fillText(this.setTextLimit(this.selected.companyshortname,16),340,temp-536+34)
            // this.ctx.fillText("是",234,437+30+offset)

            this.ctx.font = "22px normal"
            this.ctx.fillText(this.setTextLimit(this.selected.city,6),380,temp-474+22)
            this.ctx.fillText(this.setTextLimit(this.selected.industryfield,13),485,temp-474+22)

            this.ctx.fillText(this.setTextLimit(this.selected.financestage,8),380,temp-433+22)
            if(this.selected.financestage.length <= 3){
                this.ctx.drawImage(this.loadedImgs[7],460,temp-430)
                this.ctx.fillText(this.setTextLimit(this.selected.companysize,10), 485,temp-433+22)
            }else {
                this.ctx.drawImage(this.loadedImgs[7],485,temp-430)
                this.ctx.fillText(this.setTextLimit(this.selected.companysize,10),510,temp-433+22)
            }

            var label = (this.selected.otherlabel ? this.selected.otherlabel : '').split(/[,.。，|]/g),
                re = /[\u4E00-\u9FA5]/g,
                one = '',
                tw = 0,
                th = 0,
                sp = 0
                sw = 0,
                i = 0,
                llen = 0;
            this.ctx.font = "16px normal"
            this.ctx.lineWidth = 1
            this.ctx.strokeStyle = '#ffffff'
            for(i < 0; i < label.length; i++){
                one = label[i].trim()
                if(i < 3 && one){
                    tw = 340+sw+11
                    th = temp-391+20
                    llen += (one.replace(re,"çç")).length
                    if(llen > 24){
                        break
                    }
                    this.ctx.fillText(one,tw,th)
                    sp = this.ctx.measureText(one).width
                    this.ctx.beginPath()
                    this.ctx.moveTo(tw,th-20)
                    this.ctx.lineTo(tw+sp,th-20)
                    this.ctx.quadraticCurveTo(tw+sp+16,th-20+14,tw+sp,th-20+28,14);
                    this.ctx.lineTo(tw,th-20+28)
                    this.ctx.quadraticCurveTo(tw-16,th-20+14,tw,th-20,14);
                    this.ctx.stroke()
                    this.ctx.closePath()
                    sw += sp + 22+15
                }else{
                    break
                }
            } 
            // this.down++ 
            // this.canvasToImage()
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
        noop:function(){

        },
        selectCompanyEvent:function(one){
            var self = this
            if(this.mode == "development"){
                self.searchStatus = false
                self.selected = self.selectedData
                self.companyList.splice(1,self.selectedStatus,self.selected)
                if(self.selectedStatus == 0){
                    self.selectedStatus = 1
                }
                self.bprevIndex = -1
                self.prevIndex = 0
                self.currentIndex = 1
                self.nextIndex = 2
                self.bnextIndex = 3
                return
            }
            // alert(one.id)
            $.ajax({
                type: 'get',
                url: 'https://activity.lagou.com/activityapi/votelike/companyBaseInfo',
                data:{
                    companyId:one.id
                },
                success: function(result) {
                    if (result.success) {
                        var data = result.content;
                        if(data){
                            self.searchStatus = false
                            self.selected = data
                            self.companyList.splice(1,self.selectedStatus,data)
                            if(self.selectedStatus == 0){
                                self.selectedStatus = 1
                            }
                            self.bprevIndex = -1
                            self.prevIndex = 0
                            self.currentIndex = 1
                            self.nextIndex = 2
                            self.bnextIndex = 3
                        }
                    }
                },
                error: function(xhr, type) {
                    // alert('网络原因请重新尝试!');
                }
            });
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