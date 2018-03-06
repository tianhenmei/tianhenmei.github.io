"use strict";
var app = new Vue({
    el:"#app",
    data:{
        pc:true,
        GC:{
            w:0,
            h:0
        },
        nav:{
            active_index:0,
            click_status:false,
            initWidth:0,
            showWidth:0,
            width:99999,
            height:60,
            left:0,
            top:0,
            fixed:false,
            transition:false,
            shadow_status:false,
            start:{
                x:0,
                y:0
            },
            name:'吉吉英语',
            list:[{
                cn:'首页',
                en:'HOME PAGE',
                height:0,
                top:0
            },{
                cn:'吉吉课程',
                en:'JJ CLASSES'
            },{
                cn:'吉吉外教',
                en:'JJ TEACHERS'
            },{
                cn:'关于我们',
                en:'ABOUT US'
            },{
                cn:'联系我们',
                en:'CONTACT US'
            }]
        },
    },
    created:function(){
        this.GC.w = document.documentElement.clientWidth || window.innerWidth || screen.width,
        this.GC.h = document.documentElement.clientHeight || window.innerHeight || screen.height
        this.pc = this.GC.w > 1080 ? true : false
    },
    mounted:function(){
        this.nav.showWidth = this.getRemValue(this.nav.initWidth) * this.fontSize;
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
        isObject:function(e){
            return e instanceof Object
        },
        /***********************************
         **  功能函数
         */
        setNavWidth:function(){
            var list = this.$refs['nav'].children,
                i = 0,
                total = 0,
                one = 0;
            for(i = 0; i < list.length; i++){
                one = this.getPointOuterWidth(list[i]);
                total += Math.ceil(one);
            }
            this.nav.width = total
        },
        navStartEvent:function(e){
            var touch = e.touches[0];
            this.nav.start.x = touch.clientX;
            this.nav.start.y = touch.clientY;
            this.nav.transition = false;
        },
        navMoveEvent:function(e){
            var touch = e.touches[0],
                x = touch.clientX,
                y = touch.clientY;
            
            this.nav.left += x - this.nav.start.x;
            if(this.nav.left > 0){
                this.nav.left = 0;
            }
            // alert(this.nav.width +' , '+ this.nav.showWidth)
            if(Math.abs(this.nav.left) >= (this.nav.width - this.nav.showWidth)){
                this.nav.left = -1 * (this.nav.width - this.nav.showWidth);
                this.nav.shadow_status = false;
            }else {
                this.nav.shadow_status = true;
            }
            this.nav.start.x = x;
            this.nav.start.y = y;    
        },
        navEndEvent:function(e){
            this.nav.start.x = 0;
            this.nav.start.y = 0;
            this.nav.transition = true;
        },
        unfoldEvent:function(e){
            this.nav.unfoldStatus = !this.nav.unfoldStatus; 
        },
        navClickEvent:function(index,e){
            var self = this;
            this.nav.active_index = index;
            this.nav.click_status = true;
            if(this.nav.list[index].elem){
                // if(!this.nav.status){
                    this.getNavHeight();
                    this.nav.top = this.$refs['yh-center__nav'].offsetTop;
                // }
                this.nav.height = this.$refs['yh-center__nav'].offsetHeight;
                $('html,body').animate({'scrollTop': (this.nav.list[index].top - this.nav.height)+ "px"},500,function(){
                    self.nav.click_status = false;
                });
            }else if(this.nav.list[index].href){  // 跳页面
                window.location.href = this.nav.list[index].href
            }
        },
        loadedJSCSS:function(){
            this.loadedCount++;

            if (this.loadedCount == 2) {
                // animationStatus = true;
                this.addEmployerAnimation();
                this.addRichAnimation();
                this.addFirstAnimation();
                this.addFirstGuestAnimation();
                //if (movieElem.length > 0 && movieElem.attr('movie_type') == 'local') {
                //    getMovie();
                //}
                //添加轮播动画
                //lunAnimation(browserType);
            }
        },
        addEmployerAnimation:function(){
            var i = 0,
                autoplay = true, //false,
                animation = 'move',
                id = '',
                content = null,
                childs = null,
                first = null,
                length = 3,
                elem = $(this.$refs['employer__animation'])
            id = elem.attr('id');
            // autoplay = elem.attr('autoplay');
            // autoplay = autoplay ? true : false;
            // animation = elem.attr('animation');
            // animation = animation ? animation : 'move';

            content = elem.find('#'+id+'-content')
            childs = content.children()
            length = childs.length
            first = childs.eq(0)
            content.css('left',0)
            this.employerAnimation[id] = {
                width:first.children().eq(0).width(),
                currentIndex:0,
                length:length,
                autoplay:autoplay,
                animation:animation,
                swiper:null,
                pagination:false
                // pagination_color:$('#'+id+'-pagination > div').eq(0).css('background-color')
            }
            switch(animation){
                case 'zoomIn':
                    this.initZoomInAnimation(id)
                    break
                default:
                    this.initMoveAnimation(id,'employer__list','employer__one')
                    break
            }
        },
        addRichAnimation:function(){
            var i = 0,
                autoplay = true, //false,
                animation = 'move',
                id = '',
                content = null,
                childs = null,
                first = null,
                length = 3,
                elem = $(this.$refs['rich__animation'])
            id = elem.attr('id');
            // autoplay = elem.attr('autoplay');
            // autoplay = autoplay ? true : false;
            // animation = elem.attr('animation');
            // animation = animation ? animation : 'move';

            content = elem.find('#'+id+'-content')
            childs = content.children()
            length = childs.length
            first = childs.eq(0)
            content.css('left',0)
            this.employerAnimation[id] = {
                width:first.children().eq(0).width(),
                currentIndex:0,
                length:length,
                autoplay:autoplay,
                animation:animation,
                swiper:null,
                pagination:true
                // pagination_color:$('#'+id+'-pagination > div').eq(0).css('background-color')
            }
            switch(animation){
                case 'zoomIn':
                    this.initZoomInAnimation(id)
                    break
                default:
                    this.initMoveAnimation(id,'rich__container','rich__list')
                    break
            }
        },
        addFirstAnimation:function(){
            var i = 0,
                autoplay = true, //false,
                animation = 'move',
                id = '',
                content = null,
                childs = null,
                first = null,
                length = 3,
                elem = $(this.$refs['first__company'])
            id = elem.attr('id');

            content = elem.find('#'+id+'-content')
            childs = content.children()
            length = childs.length
            first = childs.eq(0)
            content.css('left',0)
            this.employerAnimation[id] = {
                width:first.children().eq(0).width(),
                currentIndex:0,
                length:length,
                autoplay:autoplay,
                animation:animation,
                direction:'vertical',
                swiper:null,
                pagination:false
                // pagination_color:$('#'+id+'-pagination > div').eq(0).css('background-color')
            }
            switch(animation){
                case 'zoomIn':
                    this.initZoomInAnimation(id)
                    break
                default:
                    this.initMoveAnimation(id,'company__ul','company__li')
                    break
            }
        },
        addFirstGuestAnimation:function(){
            var i = 0,
                autoplay = true, //false,
                animation = 'move',
                id = '',
                content = null,
                childs = null,
                first = null,
                length = 3,
                elem = $(this.$refs['first__recommend'])
            id = elem.attr('id');

            content = elem.find('#'+id+'-content')
            childs = content.children()
            length = childs.length
            first = childs.eq(0)
            content.css('left',0)
            this.employerAnimation[id] = {
                width:first.children().eq(0).width(),
                currentIndex:0,
                length:length,
                autoplay:autoplay,
                animation:animation,
                swiper:null,
                pagination:false
                // pagination_color:$('#'+id+'-pagination > div').eq(0).css('background-color')
            }
            switch(animation){
                case 'zoomIn':
                    this.initZoomInAnimation(id)
                    break
                default:
                    this.initMoveAnimation(id,'recommend__ul','recommend__li')
                    break
            }
        },
        initMoveAnimation:function(id,wrapperClass,slideClass){
            var self = this,
                pagination = null,
                length = 0,
                totalLength = 3,
                data = this.employerAnimation[id],
                pstatus = data.pagination;
            if(pstatus){
                pagination = $('#'+id+'-pagination').children();
                length = data.length;//pagination.length
            }else {
                length = data.length
            }
            
            data.swiper = new Swiper('#'+id, {
                wrapperClass : wrapperClass,
                slideClass : slideClass,
                autoplay: data.autoplay ? 3000 : 0,//可选选项，自动滑动
                loop : true,
                autoplayDisableOnInteraction:false,
                direction:data.direction ? data.direction : 'horizontal',
                // loopedSlides:1,
                pagination : '#'+id+'-pagination',
                paginationClickable:true,
                bulletClass:'dot',
                bulletActiveClass:'dot--active',
                prevButton:'#'+id+'-arrow-left',
                nextButton:'#'+id+'-arrow-right',
                // paginationElement:'span',
                // paginationBulletRender: function (swiper, index, className) {
                //     return '<span class="' + className + '" style="background-color:'+sliderStyle1Swiper[id].pagination_color+';"></span>';
                // },
                onInit:function(swiper){
                    if(pstatus){
                        // totalLength = $('#'+id+'-pagination').children().length
                        // $('#'+id+'-pagination').children().css('background-color',data.pagination_color)
                    }
                },
                onSlideChangeEnd: function(swiper) {
                    // var ul = $(elemClass).children(),
                        // li = ul.children('li'),
                        // activeLi = ul.children('.' + this.slideActiveClass).length > 0 ? ul.children('.' + this.slideActiveClass) : ul.children('.active'),
                        // index = activeLi.index(),
                    var index = swiper.activeIndex,
                        // id = ul.attr('id'),
                        // logo = $('.' + id + 'Button').children('img'),
                        endIndex = index - 1;
                    if (endIndex == -1) {
                        endIndex = length - 1;
                    } else if (endIndex == totalLength) {
                        endIndex = 0;
                    }
                    // pagination.removeClass('active').eq(endIndex).addClass('active');
                    // li.eq(index).removeClass('active').end().eq(index).addClass('active');
                }
            })
        },
        initZoomInAnimation:function(id){
            var pagination = $('#'+id+'-pagination').children(),
                length = pagination.length,
                totalLength = 3
            this.employerAnimation[id].swiper = new Swiper('#'+id+'-container', {
                wrapperClass : 'yh-slider-content',
                slideClass : 'yh-slider-slide',
                autoplay: sliderStyle1Swiper[id].autoplay ? 3000 : 0,//可选选项，自动滑动
                // loop : true,
                // loopedSlides:1,
                // pagination : '#'+id+'-pagination',
                // paginationClickable:true,
                bulletClass:'one',
                bulletActiveClass:'active',
                prevButton:'#'+id+'-arrow-left',
                nextButton:'#'+id+'-arrow-right',
                // paginationElement:'span',
                // paginationBulletRender: function (swiper, index, className) {
                //     return '<span class="' + className + '" style="background-color:'+sliderStyle1Swiper[id].pagination_color+';"></span>';
                // },
                mode: 'horizontal',
                // paginationClickable: true,
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 1.1,
                // slidesPerView: 1.56,
                initialSlide: 1,
                autoplayDisableOnInteraction: false,
                // prevButton: '.' + id + 'Pre',
                // nextButton: '.' + id + 'Next',
                coverflow: {
                    rotate: 0,
                    stretch: 230,
                    depth: 300,
                    modifier: 1,
                    slideShadows: true
                },
                onInit:function(swiper){
                    totalLength = $('#'+id+'-pagination').children().length
                    pagination.removeClass('active').eq(1).addClass('active')
                    // $('#'+id+'-pagination').children().css('background-color',sliderStyle1Swiper[id].pagination_color)
                },
                onSlideChangeEnd: function(swiper) {
                    // var ul = $(elemClass).children(),
                        // li = ul.children('li'),
                        // activeLi = ul.children('.' + this.slideActiveClass).length > 0 ? ul.children('.' + this.slideActiveClass) : ul.children('.active'),
                        // index = activeLi.index(),
                    var index = swiper.activeIndex,
                        // id = ul.attr('id'),
                        // logo = $('.' + id + 'Button').children('img'),
                        endIndex = index //index - 1;
                    if (endIndex == -1) {
                        endIndex = length - 1;
                    } else if (endIndex == totalLength) {
                        endIndex = 0;
                    }
                    pagination.removeClass('active').eq(endIndex).addClass('active');
                    // li.eq(index).removeClass('active').end().eq(index).addClass('active');
                }
            })
        },
        getNavHeight:function(){
            var list = this.nav.list,
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
                            top += this.nav.list[parent[j]].offsetTop;
                            // height += this.nav.list[parent[j]].height;
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
                    if(list[i].top != top || list[i].height != height){
                        this.nav.list[i].top = top;
                        this.nav.list[i].height = height;
                        status = true
                    }
                }
            }
            if(!status) {
                this.nav.status = true;
            }
        },
        initWindowScrollEvent:function(){
            var self = this,
                min = this.getPX(58);
            self.getNavHeight();
            self.nav.top = self.$refs['yh-center__nav'].offsetTop;
            self.nav.height = self.$refs['yh-center__nav'].offsetHeight;
            $(window).scroll(function() {
                if(self.nav.click_status){
                    return
                }
                var nav = self.$refs['yh-center__nav'],
                    scrollTop = $(window).scrollTop(),
                    one = null,
                    halfWidow = $(window).height() / 4,
                    left = 0,
                    i = 0;
               
                self.getNavHeight();
                self.nav.top = nav.offsetTop;
                self.nav.height = nav.offsetHeight;
                
                if(self.nav.top <= scrollTop){
                    self.nav.fixed = true;
                }else{
                    self.nav.fixed = false;
                }
                for (i = 0; i < self.nav.list.length; i++) {
                    one = self.nav.list[i];
                    if (one.elem && (one.top - halfWidow) < scrollTop && (one.top + one.height - halfWidow) > scrollTop) {
                        self.nav.active_index = i;
                        left = self.$refs['nav__li--'+i][0].offsetLeft;
                        if(left >= (self.nav.width - self.nav.showWidth)){
                            self.nav.left = -1 * (self.nav.width - self.nav.showWidth);
                            self.nav.shadow_status = false;
                        }else {
                            self.nav.left = -1 * left;
                            self.nav.shadow_status = true;
                        }
                        break;
                    }
                }
            });
        },
        getBulletData:function(){
            var self = this;
            this.getAjaxData('activityapi/smallActivity/query-express.json',function(data){
                var i = 0,
                    u = '';
                for(i = 0; i < data.length; i++){
                    u = data[i].userName;
                    data[i].userName = /([\u4E00-\u9FA5]|[\uFE30-\uFFA0])/.test(u[0]) ? u[0]+'**' : u.slice(0,2)+'***';//('***************'.slice(0,u.length - 1))
                }
                self.hot.list = data.concat(data);
                self.hot.duration = self.hot.list.length * 1.5
                self.$nextTick(function(){
                    self.hot.status = true;
                })
            })
        },
        getPopularInData:function(){
            var self = this,
                url = 'activityapi/smallActivity/most-delivery.json';
            if(this.isAPP){
                url = 'activityapi/smallActivity/app-most-delivery.json'
            }
            this.getAjaxData(url,function(data){
                self.popular.in.list = data;
            },{
                count:3
            })
        },
        getPopularQuickestData:function(){
            var self = this,
                url = '';
            if(this.from == 'ios' || this.from == 'android'){
                url = 'activityapi/smallActivity/app-deal-fast.json'
            }else {
                url = 'activityapi/smallActivity/pc-deal-fast.json'
            }
            this.getAjaxData(url,function(data){
                if(self.isObject(data)){
                    self.popular.quickest.list = data;
                }
            },{
                count:3
            })
        },
        getPopularMostData:function(){
            var self = this;
            this.getAjaxData('activityapi/smallActivity/query-config-position.json',function(data){
                self.popular.most.list = data;
            },{
                templateId:'2018MustVoteGoodCompany',
                count:3,
                positionCount:0
            })
        },
        getLeaderData:function(){
            var self = this,
                count = self.leader.list[0].count;
            this.getAjaxData('activityapi/smallActivity/query-config-position.json',function(data){
                var i = 0;
                for(i = 0; i < data.length; i++){
                    data[i].count = count
                }
                self.leader.list = data;
            },{
                templateId:'2018LeadEmployer',
                count:1,
                positionCount:3
            })
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
        getEmployerData:function(){
            var self = this;
            this.getAjaxData('activityapi/smallActivity/query-config-position.json',function(data){
                var i = 0;
                for(i = 0; i < data.length; i++){
                    data[i].oneWord = self.cutString(data[i].oneWord,34);
                }
                self.employer.list = data;
                self.$nextTick(function(){
                    self.addEmployerAnimation();
                })
            },{
                templateId:'2018SuperEmployer',
                positionCount:3
            })
        },
        getFirstData:function(){
            var self = this;
            this.getAjaxData('activityapi/smallActivity/query-config-position.json',function(data){
                if(self.isObject(data)){
                    var i = 0;
                    for(i = 0; i < data.length; i++){
                        data[i].oneWord = self.cutString(data[i].oneWord,80);
                    }
                    self.first.company.list = data;
                    self.$nextTick(function(){
                        self.addFirstAnimation();
                    })
                }
            },{
                templateId:'2018FamousFirst',
                positionCount:1
            })
        },
        getFirstRecommendData:function(){
            var self = this;
            self.addFirstGuestAnimation();
            // this.getAjaxData('activityapi/smallActivity/query-bigCoffee.json',function(data){
            //     // self.first.recommend.list = data;
            //     console.log(data)
            //     self.$nextTick(function(){
            //         self.addFirstGuestAnimation();
            //     })
            // },{
            //     // templateId:arr[0],
            //     positionCount:0
            // })
        },
        getRichData:function(){
            var self = this;
            this.getAjaxData('activityapi/smallActivity/query-config-position.json',function(data){
                var length = data.length,
                    num = 4,
                    l = Math.ceil(length / num),
                    list = [],
                    i = 0;
                for(i = 0; i < l; i++){
                    list.push(data.slice(i*num,(i+1)*num))
                }
                self.rich.list = list;
                self.$nextTick(function(){
                    self.addRichAnimation();
                })
            },{
                templateId:'2018ThousandsWealthy',
                positionCount:3
            })
        },
        getWillData:function(){
            var self = this;
            this.getAjaxData('activityapi/smallActivity/query-config-position.json',function(data){
                self.will.list[0].company = data.slice(0,3);
                self.will.list[1].company = data.slice(3,6);
            },{
                templateId:'2018HighPayMustVote',
                positionCount:1
            })
        },
        getStormData:function(){
            var self = this;
            this.getAjaxData('activityapi/smallActivity/query-config-position.json',function(data){
                self.storm.list[0].company = data.slice(0,8);
                self.storm.list[1].company = data.slice(8,16);
            },{
                templateId:'2018HotTrickstorm',
                positionCount:0
            })
        },
        getAiData:function(){
            var self = this;
            this.getAjaxData('activityapi/smallActivity/query-config-position.json',function(data){
                if(self.isObject(data)){
                    self.ai.list = data;   
                }
            },{
                templateId:'2018AIPosition',
                count:4,
                positionCount:1
            })
            // var self = this,
            //     arr = ['深度学习','机器学习','图像处理','图像识别','语音识别','机器视觉','算法工程师','自然语言处理'],
            //     length = arr.length;
            // this.getAjaxData('activityapi/smallActivity/ai-position.json',function(data){
            //     if(self.isObject(data)){
            //         var col = 4,
            //             i = 0,
            //             num = [],
            //             list = [],
            //             l = data.length,
            //             o = -1;
            //         for(i = 0; i < l; i++){
            //             num.push(i)
            //         }
            //         for(i = 0; i < col; i++){
            //             o = Math.floor(Math.random() * num.length);
            //             list.push(data[num[o]])
            //             num.splice(o,1)
            //         }
            //         self.ai.list = list;   
            //     }
            // },{
            //     position:arr[Math.floor(Math.random()*length)],
            //     count:1
            // })
        },
        getChoiceData:function(){
            var self = this;
            this.getAjaxData('activityapi/smallActivity/query-config-position.json',function(data){
                self.choice.list[0] = data[0];
                self.choice.list[1] = data[1];
                self.choice.companys[0].list = data.slice(2,5);
                self.choice.companys[1].list = data.slice(5,8);
                self.choice.companys[2].list = data.slice(8,11);
                self.choice.companys[3].list = data.slice(11,14);
            },{
                templateId:'2018PopularSelection',
                positionCount:3
            })
        },
        floatingCloseEvent:function(){
            this.floating.status = false;
        },
        appDownload:function(){

        }
    }
})
