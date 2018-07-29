"use strict";
Vue.use(VueAwesomeSwiper)
var app = new Vue({
    el:"#app",
    mixins:[commonMixin],
    data:{
        countId:'1bis',
        onlyone:{
            count:1,
            imgs:[
                'images/onlyone-img-01.jpg',
                'images/onlyone-img-01.jpg',
                'images/onlyone-img-01.jpg'
            ],
            company:{
                companyId:147,
                city:"北京",
                financestage: "D轮及以上",
                companysize: "2000人以上",
                otherlabel: "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                positionVo:[{
                    "positionId":1,
                    "positionName":"算法工程师",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"算法工程师",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"算法工程师",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"算法工程师",
                    "salary":"15-40K"
                }],
            }
        },
        others:[
            "beijing","shanghai",
            "hangzhou","guangzhou",
            "nanjing","chengdu",
            "suzhou","wuhan"
        ],
        corperate:[
            147,147,147,147,147,147,
            147,147,147,147,147,147,
            147,147,147,147,147,147
        ],
    },
    mounted:function(){
        this.from = (getQueryString('lagoufrom')+'').toLocaleLowerCase();
        this.browserType = this.getBrowserType()

        // // this.addJSCSS();
        // // this.loadedJSCSS();

        // // 热招快报
        // this.getBulletData()
        // // 24小时热力排行榜 - 最In
        // this.getPopularInData()
        // // 24小时热力排行榜 - 极速响应
        // this.getPopularQuickestData()
        // // 24小时热力排行榜 - 最受欢迎
        // this.getPopularMostData()
        // // 领先雇主
        // this.getLeaderData()
        // // 超级雇主
        // this.getEmployerData()
        // // 名企首发 - 公司列表
        // this.getFirstData()
        // // 名企首发 - 大咖
        // this.getFirstRecommendData()
        // // 千万豪门
        // this.getRichData()
        // // 高薪必投
        // this.getWillData()
        // // 热招风暴
        // this.getStormData()
        // // AI狂热季
        // this.getAiData()
        // // 人气精选
        // this.getChoiceData()
    },
    methods:{
    
        






        
        addJSCSS:function(){
            switch (this.browserType) {
                case 0:  // Opera浏览器
                case 1:  // Firefox浏览器
                case 2:  // Chrome浏览器
                case 3:  // Safari浏览器
                    this.addCssByLink('https://www.lgstatic.com/topic/css/swiper.min.css', this.loadedJSCSS);
                    this.addScript('https://www.lgstatic.com/topic/js/swiper.min.js', this.loadedJSCSS);
                    break;
                case 6:  // IE浏览器
                    animationStatus = true;
                    // lunAnimation(browserType);
                    break;
                case 4:  // IE9.0及以上浏览器
                case 5:
                default:
                    this.addCssByLink('https://www.lgstatic.com/topic/css/idangerous.swiper.css', this.loadedJSCSS);
                    this.addScript('https://www.lgstatic.com/topic/js/idangerous.swiper.min.js', this.loadedJSCSS);
                    break;
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
        /***********************************
         **  功能函数
         */
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
        appDownload:function(){

        }
    }
})
