"use strict";
Vue.use(VueAwesomeSwiper)
var app = new Vue({
    el:"#app",
    mixins:[commonMixin],
    data:{
        countId:'1bis',
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

        // // 超凡雇主
        // this.getOnlyoneData(147)
        // // Star雇主
        // this.getEmployerData(147)
        // // 本地实力首选
        // this.getLocalData(147,'shenzhen')
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
        appDownload:function(){

        }
    }
})
