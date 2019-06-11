"use strict";
Vue.use(VueAwesomeSwiper)
var app = new Vue({
    el:"#app",
    // mixins:[commonMixin],
    data:{
        countId:'1maj',
        loadedCount: 0,
        logoHref:'https://www.lgstatic.com/thumbnail_100x100/',
        logoHrefO:'https://www.lgstatic.com/',
        companyHref:{
            one:"self.location=\'https://www.lagou.com/center/company_",
            two:".html\';"
        },
        positionHref:{
            one:"self.location=\'https://www.lagou.com/center/job_",
            two:".html\';"
        },
        combg: [
            '22666',
            '13171',
            '263043',
            '356010'
        ],
        employerActiveIndex:0,
        employerCount:50,
        employerList:[],
        BCount: 7000,
        BList: [],
        BActiveIndex: 0,
        CCount:1000,
        CList:[],
        CActiveIndex: 0,
        DCount:3000,
        DActiveIndex:0,
        DList:[],
        corperateCount:6000,
        browserType:0,  // 浏览器类型
        employerAnimation:{
            onlyone:null,
            employer:null,
            B:null,
            BPagination:null,
            C:null,
            D:null
        },
        corperate:[
            29946,36272,175199,43775,14491
        ]
    },
    mounted:function(){
        this.browserType = this.getBrowserType()
        this.addJSCSS()

        // this.tab.showWidth = this.getRemValue(this.tab.initWidth) * this.fontSize;
        // this.setTabWidth();
        
        // this.initWindowScrollEvent();
    },
    methods:{
        getSpanClass(val){
            var arr = val.match(/[a-zA-z\d-]/g) || ''
            return ' employer__spanOuter--'+(val.length || 0)+'-'+arr.length
        },
        /***********************************
         **  基础函数
         */
        getCount:function(num){
            return '0000'.slice((num+'').length)+num
        },
        splitSalary:function(salary){
            var arr = salary.replace(/ /g, '').toLowerCase().split(''),
                i = 0;
            return arr
        },
        addJSCSS:function(){
            this.loadedJSCSS()
            // switch (this.browserType) {
            //     case 0:  // Opera浏览器
            //     case 1:  // Firefox浏览器
            //     case 2:  // Chrome浏览器
            //     case 3:  // Safari浏览器
            //         this.addCssByLink('https://www.lgstatic.com/topic/css/swiper.min.css', this.loadedJSCSS);
            //         this.addScript('https://www.lgstatic.com/topic/js/swiper.min.js', this.loadedJSCSS);
            //         break;
            //     case 6:  // IE浏览器
            //         animationStatus = true;
            //         // lunAnimation(browserType);
            //         break;
            //     case 4:  // IE9.0及以上浏览器
            //     case 5:
            //     default:
            //         this.addCssByLink('https://www.lgstatic.com/topic/css/idangerous.swiper.css', this.loadedJSCSS);
            //         this.addScript('https://www.lgstatic.com/topic/js/idangerous.swiper.min.js', this.loadedJSCSS);
            //         break;
            // }
        },
        loadedJSCSS:function(){
            // this.loadedCount++;

            // if (this.loadedCount == 2) {
            // Star雇主
            this.getEmployerData('20190221PROMOTION_MAIN_POWER')
            // 超级雇主
            this.getBData('2018STAR101_STAR_EMPLOYER_beijing')
            // 本地实力首选
            this.getCData('2018STAR101_STAR_EMPLOYER_beijing','')
            // 潜力公司TOP榜
            this.getDData('2018STAR101_TOP_EMPLOYER_beijing','')
            // }
        },
        addCssByLink:function(url, callback) {
            var doc = document;
            var link = doc.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("type", "text/css");
            link.setAttribute("href", url);
            
            var heads = doc.getElementsByTagName("head");
            if (heads.length)
                heads[0].appendChild(link);
            else
                doc.documentElement.appendChild(link);
            link.onload = function() {
                callback();
            }
        },
        addScript:function(url, callback) {
            var script = document.createElement("script");
            script.setAttribute("type", "text/javascript");
            script.setAttribute("src", url);
            var heads = document.getElementsByTagName("head");
            if (heads.length)
                heads[0].appendChild(script);
            else
                document.documentElement.appendChild(script);
            script.onload = function() {
                callback();
            }
        },
        getBrowserType:function(){
            var userAgent = window.navigator.userAgent; //取得浏览器的userAgent字符串
            var isOpera = userAgent.indexOf("Opera") > -1;
            var browserType = 0;
            if (isOpera) { //判断是否Opera浏览器
                browserType = 0;
            } else if (userAgent.indexOf("Firefox") > -1) { //判断是否Firefox浏览器
                browserType = 1;
            } else if (userAgent.indexOf("Chrome") > -1) { //判断是否Chrome浏览器
                browserType = 2;
            } else if (userAgent.indexOf("Safari") > -1) { //判断是否Safari浏览器
                browserType = 3;
            } else if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) { //判断是否IE浏览器
                /*if(userAgent.match(/6./i)=="6."){
                    browserType = 6;
                    }else if(userAgent.match(/7./i)=="7."){
                    browserType = 6;
                    }else if(userAgent.match(/8./i)=="8."){
                    browserType = 6;
                    }*/
                if (userAgent.match(/9./i) == "9." || userAgent.match(/10./i) == "10.") {
                    browserType = 4;
                } else {
                    browserType = 6;
                }
            } else if (userAgent.toLowerCase().indexOf("trident") > -1 && userAgent.indexOf("rv") > -1) {
                browserType = 5;
            }
            return browserType;
        },
        addEmployerAnimation:function(){
            this.employerAnimation.employer = new Swiper('#employerSwiper', {
                watchSlidesProgress: true,
                slidesPerView: 'auto',
                centeredSlides: true,
                loop: false,
                // loopedSlides: 3,
                initialSlide:0,
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false
                },
                on: {
                    progress: function(progress) {
                        var i = 0;
                        var modify = 1,
                            translate= '',
                            scale = 0,
                            zIndex = 0;
                        for (i = 0; i < this.slides.length; i++) {
                            var slide = this.slides.eq(i);
                            var slideProgress = this.slides[i].progress;
                            modify = 1;
                            if (Math.abs(slideProgress) > 1) {
                                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                            }
                            translate = slideProgress * modify * 808 + 'px';
                            scale = 1; // 1 - Math.abs(slideProgress) / 5;
                            zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                            slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                            slide.css('zIndex', zIndex);
                            slide.css('opacity', slideProgress ? 0.4 : 1);
                            if (Math.abs(slideProgress) > 1) {
                                slide.css('opacity', 0);
                            }
                        }
                    },
                    setTransition: function(transition) {
                        for (var i = 0; i < this.slides.length; i++) {
                            var slide = this.slides.eq(i)
                            slide.transition(transition);
                        }
                    },
                    slideChangeTransitionStart:function(){
                        var sapp = app || this.$el[0].__vue__.$root
                        sapp.changeEmployerActiveIndex(this.activeIndex)
                    }
                }
                // // autoplay:true,//等同于以下设置
                // // autoplay: {
                // //     delay: 3000,
                // //     stopOnLastSlide: false,
                // //     disableOnInteraction: false,
                // // },
                // autoplay: false,
                // speed:500,
                // loop:true,
                // initialSlide:0,
                // effect : 'coverflow',
                // slidesPerView: 1,
                // centeredSlides: true,
                // coverflowEffect: {
                //     rotate: 0,
                //     stretch: 550,
                //     depth: 0,
                //     modifier: 2,
                //     slideShadows : false
                // },
                // on:{
                //     slideChangeTransitionStart:function(){
                //         var sapp = app || this.$el[0].__vue__.$root
                //         sapp.changeEmployerActiveIndex(this.activeIndex)
                //     },
                // }
            })
        },
        addBAnimation: function(){
            this.employerAnimation.B = new Swiper('#BSwiper', {
                // wrapperClass:"swiper-wrapper",
                // slideClass:"swiper-slide",
                // autoplay:true,//等同于以下设置
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                // autoplay: false,
                speed:500,
                loop:true,
                initialSlide:0,
                on:{
                    slideChangeTransitionStart:function(){
                        var sapp = app || this.$el[0].__vue__.$root
                        sapp.changeBActiveIndex(this.activeIndex)
                    }
                }
            })
        },
        addBPaginationAnimation: function(){
            this.employerAnimation.BPagination = new Swiper('#BPaginationSwiper', {
                // wrapperClass:"swiper-wrapper",
                // slideClass:"swiper-slide",
                // autoplay:true,//等同于以下设置
                // autoplay: {
                //     delay: 3000,
                //     stopOnLastSlide: false,
                //     disableOnInteraction: false,
                // },
                width:570,
                slidesPerView: 6,
                spaceBetween: 25, // 
                autoplay: false,
                speed:500,
                loop:false,
                initialSlide:0,
                centeredSlides: false, // 设定为true时，active slide会居中，而不是默认状态下的居左。
                slidesOffsetBefore: 0, // 设定slide与左边框的预设偏移量（单位px）。
                // on:{
                //     slideChangeTransitionStart:function(){
                //         var sapp = app || this.$el[0].__vue__.$root
                //         console.log(this.realIndex)
                //         sapp.changeBPaginationActiveIndex(this.realIndex)
                //     }
                // }
            })
        },
        addCAnimation:function(){
            this.employerAnimation.C = new Swiper('#CSwiper', {
                // autoplay:true,//等同于以下设置
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                // autoplay: false,
                speed:500,
                loop:true,
                initialSlide:0,
                on:{
                    slideChangeTransitionStart:function(){
                        var sapp = app || this.$el[0].__vue__.$root
                        sapp.changeCActiveIndex(this.activeIndex)
                    }
                }
            })
        },
        addDAnimation:function(){
            var self = this
            this.employerAnimation.D = new Swiper('#DSwiper', {
                // autoplay: {
                //     delay: 2000,
                //     stopOnLastSlide: false,
                //     disableOnInteraction: false,
                // },
                autoplay: false,
                speed:500,
                loop:true,
                initialSlide:0,
                on:{
                    slideChangeTransitionStart:function(){
                        self.changeDActiveIndex(this.activeIndex)
                    }
                }
            })
        },
        isObject:function(e){
            return e instanceof Object
        },
        getRemValue:function(value){
            return value / (750 / 16)
        },
        getPX:function(value){
            return value / (750 / 16) * this.fontSize
        },
        getRem:function(n){
            return n/(750/16) +'rem'
        },
        getComputedValue:function(elem,attribute){
            var value = window.getComputedStyle(elem,null).getPropertyValue(attribute);
            return value;
        },
        getPointValue:function(elem,attribute){
            if(!elem || elem.length == 0){
                return 0
            }
            var value = window.getComputedStyle(elem,null).getPropertyValue(attribute);
            return parseFloat(parseFloat(value).toFixed(2));
        },
        getPointWidth:function(elem){
            var value = this.getPointValue(elem,"width"); //window.getComputedStyle(elem[0],null).getPropertyValue("width");
            return value;
        },
        getPointOuterWidth:function(elem){
            var width =  this.getPointValue(elem,"width"), //window.getComputedStyle(elem[0],null).getPropertyValue("width");
                left = this.getPointValue(elem,"padding-left"),
                right = this.getPointValue(elem,"padding-right"),
                value = width + left + right;
            return value;
        },
        cutString:function(str,num){
            str = str ? str : ''
            var str2 = str.replace(/([\u4E00-\u9FA5]|[\uFE30-\uFFA0])/g,"çç"),
                result = '';
            if (str2.length > num){
                var length = str2.slice(0,num).replace(/çç/g,'ç').length;
                result = str.slice(0,length)+'...';
            }else {
                result = str;
            }
            return result;
        },
        floatingCloseEvent:function(){
            this.floating.status = false;
        },
        appDownload:function(){

        },
        

        /***********************************
         **  tab导航栏函数
         */
        getTabWidth:function(){
            // 211
            var fontSize = parseFloat(this.getComputedValue(document.documentElement,'font-size')),
                length = 5,
                width = 211 * length
            return Math.ceil(width / (750 / 16) * fontSize)
        },
        setTabWidth:function(){
            var list = this.$refs['tab'].children,//list = this.tab.list,//list = this.$refs['tab'].children,
                i = 0,
                total = 0,
                one = 0;
            for(i = 0; i < list.length; i++){
                one = this.getPointOuterWidth(list[i]);//(this.$refs['tab__li--'+i][0].$el)//(list[i]);
                total += Math.ceil(one);
            }
            this.tab.width = total
        },
        tabStartEvent:function(e){
            var touch = e.touches[0];
            this.tab.start.x = touch.clientX;
            this.tab.start.y = touch.clientY;
            this.tab.transition = false;
        },
        tabMoveEvent:function(e){
            var touch = e.touches[0],
                x = touch.clientX,
                y = touch.clientY;
            
            this.tab.left += x - this.tab.start.x;
            if(this.tab.left > 0){
                this.tab.left = 0;
            }
            // alert(this.tab.width +' , '+ this.tab.showWidth)
            if(Math.abs(this.tab.left) >= (this.tab.width - this.tab.showWidth)){
                this.tab.left = -1 * (this.tab.width - this.tab.showWidth);
                this.tab.shadow_status = false;
            }else {
                this.tab.shadow_status = true;
            }
            this.tab.start.x = x;
            this.tab.start.y = y;    
        },
        tabEndEvent:function(e){
            this.tab.start.x = 0;
            this.tab.start.y = 0;
            this.tab.transition = true;
        },
        getTabHeight:function(){
            var list = this.tab.list,
                elem = null,
                parent = [],
                height = 0,
                top = 0,
                status = false,
                i = 0,j = 0;
            for(i = 0; i < list.length; i++){
                if(list[i].elem){
                    elem = this.$refs[list[i].elem];
                    top = 0;
                    height = 0;
                    if(list[i].parent){
                        parent = list[i].parent;
                        for(j = 0; j < parent.length; j++){
                            top += this.tab.list[parent[j]].offsetTop;
                            // height += this.tab.list[parent[j]].height;
                        }
                        // top += elem.offsetTop;
                        top += this.getPX(list[i].top)
                    }else{
                        top += elem.offsetTop;
                    }
                    if(list[i].initHeight){
                        height = this.getPX(list[i].initHeight);
                    }else{
                        height = elem.offsetHeight;
                    }
                    if(list[i].offsetTop != top || list[i].height != height){
                        this.tab.list[i].offsetTop = top;
                        this.tab.list[i].height = height;
                        status = true
                    }
                }
            }
            if(!status) {
                this.tab.status = true;
            }
        },
        initWindowScrollEvent:function(){
            var self = this,
                min = this.getPX(58);
            self.getTabHeight();
            self.tab.offsetTop = self.$refs['yh-center__tab'].offsetTop;
            self.tab.height = self.$refs['yh-center__tab-center'].offsetHeight;
            $(window).scroll(function() {
                if(self.tab.click_status){
                    return
                }
                var tab = self.$refs['yh-center__tab'],
                    scrollTop = $(window).scrollTop(),
                    one = null,
                    // halfWidow = tab.offsetHeight,//self.$refs['yh-center__tab-center'].offsetHeight,//$(window).height() / 8,
                    halfWidow = $(window).height() / 4,
                    left = 0,
                    i = 0;
                // if(!self.tab.status){
                    self.getTabHeight();
                    self.tab.offsetTop = tab.offsetTop;
                    self.tab.height = tab.offsetHeight;//self.$refs['yh-center__tab-center'].offsetHeight;
                // }
                if(self.tab.offsetTop <= scrollTop){
                    self.tab.fixed = true;
                }else{
                    self.tab.fixed = false;
                }
                for (i = 0; i < self.tab.list.length; i++) {
                    one = self.tab.list[i];
                    // if (one.elem && (one.offsetTop - halfWidow + min) < scrollTop && (one.offsetTop + one.height - halfWidow - min) > scrollTop) {
                    if (one.elem && (one.offsetTop - halfWidow) < scrollTop && (one.offsetTop + one.height - halfWidow) > scrollTop) {
                        self.tab.active_index = i;
                        left = self.$refs['tab__li--'+i][0].offsetLeft;
                        if(left >= (self.tab.width - self.tab.showWidth)){
                            self.tab.left = -1 * (self.tab.width - self.tab.showWidth);
                            self.tab.shadow_status = false;
                        }else {
                            self.tab.left = -1 * left;
                            self.tab.shadow_status = true;
                        }
                        // 
                        break;
                    }
                }
            });
        },
        toTopEvent:function(){
            $('html,body').animate({'scrollTop': 0},500);
        },
        unfoldEvent:function(e){
            this.tab.unfoldStatus = !this.tab.unfoldStatus; 
        },
        tabClickEvent:function(index,e){
            var self = this;
            this.tab.active_index = index;
            this.tab.click_status = true;
            if(this.tab.list[index].elem){
                // if(!this.tab.status){
                    this.getTabHeight();
                    this.tab.offsetTop = this.$refs['yh-center__tab'].offsetTop;
                // }
                this.tab.height = this.$refs['yh-center__tab'].offsetHeight; // this.$refs['yh-center__tab-center'].offsetHeight;
                $('html,body').animate({'scrollTop': (this.tab.list[index].offsetTop - this.tab.height)+ "px"},500,function(){
                    self.tab.click_status = false;
                });
            }else{  // 跳页面
                window.location.href = this.tab.list[index].href
            }
        },





        getCorperateRow:function(index){
            return Math.floor(index / 5)
        },
        setLogoHref:function(logo){
            if(logo){
                if(logo.indexOf('i/image') == 0 || 
                    logo.indexOf('image1') == 0 || 
                    logo.indexOf('image2') == 0){
                    return this.logoHref + logo
                }else if(logo.indexOf('http') == 0){
                    return logo
                }else {
                    return this.logoHrefO + logo
                }
            }else{
                return '';
            }
        },
        labelList:function(labels){
            if(Object.prototype.toString.call(labels) === "[object Array]") {
                return labels
            }
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
        employerSlideTo:function(index){
            var swiper = this.$refs['employerSwiper'].swiper
            swiper.slideTo(index)
        },
        employerSlidePrev:function(){
            this.$refs['employerSwiper'].swiper.slidePrev()
        },
        employerSlideNext:function(){
            this.$refs['employerSwiper'].swiper.slideNext()
        },
        BSlidePrev:function(){
            this.$refs['BSwiper'].swiper.slidePrev()
        },
        BSlideNext:function(){
            this.$refs['BSwiper'].swiper.slideNext()
        },
        CSlidePrev:function(){
            this.$refs['CSwiper'].swiper.slidePrev()
        },
        CSlideNext:function(){
            this.$refs['CSwiper'].swiper.slideNext()
        },
        changeEmployerActiveIndex:function(index){
            this.employerActiveIndex = index % this.employerList.length
            // if(index == 0){
            //     this.employerActiveIndex = this.employerList.length - 1
            // }else{
            //     this.employerActiveIndex = (index-1) % this.employerList.length
            // }
        },
        changeBActiveIndex:function(index) {
            // test
            var len = 3 // this.BList.length
            if(index == 0){
                this.BActiveIndex = len - 1
            }else{
                this.BActiveIndex = (index-1) % len
            }
            this.$refs['BPaginationSwiper'].swiper.slideTo(this.BActiveIndex)
        },
        changeCActiveIndex:function(index) {
            if(index == 0){
                this.CActiveIndex = this.CList.length - 1
            }else{
                this.CActiveIndex = (index-1) % this.CList.length
            }
        },
        changeBPaginationActiveIndex:function(index){
            if(index == 0){
                this.BActiveIndex = this.BList.length - 1
            }else{
                this.BActiveIndex = (index-1) % this.BList.length
            }
        },
        BPaginationTo:function(index){
            this.$refs['BSwiper'].swiper.slideTo(index+1)
        },
        changeDActiveIndex:function(index){
            if(index == 0){
                this.DActiveIndex = this.DList.length - 1
            }else{
                this.DActiveIndex = (index-1) % this.DList.length
            }
        },



        getAjaxData:function(url,callback,params){
            $.ajax({
                url:'https://activity.lagou.com/'+url,
                type:'get',
                data:params ? params : {},
                // dataType:'jsonp',
                // jsonp:'jsoncallback',
                success:function(data){
                    var content = data.content;
                    if(data.success){
                        callback(content)
                    }else {
                        console.log('出错啦～刷新重试～')
                    }
                },
                error:function(error){
                    console.log(error)
                },
            })
        },
        getEmployerData:function(templateId){
            var self = this
            this.getAjaxData('activityapi/promotion/companyList',function(content){
                if (content.companyLabel) {
                    content.map(function(current){
                        current.companyLabel = self.labelList(current.companyLabel)
                    })
                }
                self.employerList = content
                self.$nextTick(function(){
                    self.addEmployerAnimation()
                })
            },{
                templateId:templateId
            })
        },
        getBData:function(templateId){
            var self = this
            this.getAjaxData('activityapi/star101/starEmployer',function(content){
                self.BList = content
                self.$nextTick(function(){
                    self.addBPaginationAnimation()
                    self.addBAnimation()
                })
            },{
                templateId:templateId
            })
        },
        getCData:function(templateId,city){
            var self = this
            this.getAjaxData('activityapi/star101/companyList',function(content){
                var arr = [],
                    i = 0;
                if (content.companyLabel) {
                    content.map(function(current){
                        current.companyLabel = self.labelList(current.companyLabel)
                    })
                }
                content.forEach(function(current,index){
                    i = Math.floor(index/4);
                    if (index % 4 === 0) {
                        arr[i] = []
                    }
                    arr[i].push(current);
                })
                self.CList = arr
                if (content.length > 4) {
                    self.$nextTick(function(){
                        self.addCAnimation()
                    })
                }
            },{
                templateId:templateId,
                city:city
            })
        },
        getDData:function(templateId,city){
            var self = this
            this.getAjaxData('activityapi/star101/companyList',function(content){
                self.DList = content
                // var arr = [],
                //     i = 0
                //     length = Math.ceil(content.length / 4)
                // if (content.companyLabel) {
                //     content.map(function(current){
                //         current.companyLabel = self.labelList(current.companyLabel)
                //     })
                // }
                // for(i = 0; i < length; i++){
                //     arr.push(content.slice(i*4,(i+1)*4))
                // }
                // self.DList = arr.slice(0,3)
                // self.$nextTick(function(){
                //     self.addDAnimation()
                // })
            },{
                templateId:templateId,
                city:city
            })
        }
    }
})
