"use strict";
var app = new Vue({
    el:"#app",
    data:{
        pc:true,
        GC:{
            w:0,
            h:0
        },
        fontSize:16,
        animation:{},
        init_status:false,
        nav:{
            active_index:0,
            click_status:false,
            initWidth:630,
            showWidth:630,
            width:99999,
            height:60,
            list_offset_top:0,
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
                en:'JJ CLASSES',
                elem:'yh-center__classes'
            },{
                cn:'吉吉外教',
                en:'JJ TEACHERS'
            },{
                cn:'吉吉教材',
                en:'JJ MATRIALS',
                elem:'yh-center__matrials'
            },{
                cn:'吉吉成果',
                en:'JJ RESULTS',
                elem:'yh-center__results'
            },{
                cn:'关于我们',
                en:'ABOUT US'
            },{
                cn:'联系我们',
                en:'CONTACT US'
            }],
        },
        banner:{
            theme:'banner-default',
            list_pc:[{
                href:'javascript:void(0);',
                src:'1.jpg'
            },{
                href:'javascript:void(0);',
                src:'2.jpg'
            }],
            list_h5:[{
                href:'javascript:void(0);',
                src:'1.jpeg'
            },{
                href:'javascript:void(0);',
                src:'2.jpeg'
            },{
                href:'javascript:void(0);',
                src:'3.jpeg'
            },{
                href:'javascript:void(0);',
                src:'4.jpeg'
            },{
                href:'javascript:void(0);',
                src:'5.jpeg'
            }]
        },
        introduce:{
            title:'2-7岁，为什么？',
            detail:'WHY IS 2-7?',
            list:[
                [{
                    icon:'images/introduce-01.jpg',
                    title:'英语主题教学，孩子从小爱上英语',
                    detail:'2-7岁的孩子处于语言学习的黄金期。对于英语，孩子会以"母语"的形式掌握并自然运用。调动孩子的英语兴趣尤为重要。瑞思学科英语采用主题教学的方法，通过故事、歌曲、游戏等方式灵活的表现出来，让孩子在生动有趣的互动过程中，在浸入式的英语环境里，英语自然习得。每个主题都会初步涉及数学逻辑、自然科学，为下一阶段系统学习学科知识做好铺垫。'
                },{
                    icon:'images/introduce-02.jpg',
                    title:'用孩子喜欢的方式学英语',
                    detail:'每个孩子性格不同，有的爱表达、有的动手能力强、有的喜欢音乐，区角活动是指用孩子擅长的不同方式学习同样的英语知识。尊重每个孩子的独特性，从他们的兴趣出发，英语学习事半功倍！'
                },{
                    icon:'images/introduce-03.jpg',
                    title:'看词能读，听音能写',
                    detail:'通过语音专项训练，让孩子循序渐进的了解到字母及词根的发音。发音练习并非不断重复某个音，而是感受字母在不同的单词、句子中的读音，感知字母的韵律。例如学习an的发音，会把它放在进tan、man、fan中拼读。这样即使是不认识的单词也能拼读、拼写，使孩子对英语阅读产生浓厚的兴趣。无论孩子在什么场合，当孩子看到某个词时会自然而然的拼读出声。'
                }],
                [{
                    icon:'',
                    title:'口语表达，清晰流利',
                    detail:'经过语音专项训练，孩子能够用地道的英语读出单词。接下来老师会引入词群的概念，引导孩子找到词与词之间的联系。孩子借助词群，在朗读时减少停顿时间，从而提升流利度。孩子能够流利朗读后，注意力就会从词的层面转移到句子的理解层面，进而提升阅读能力。'
                },{
                    icon:'',
                    title:'选词填句，启蒙孩子的写作兴趣',
                    detail:'这个阶段的孩子有强烈的表达欲，但不具备写句的能力。选词填句是孩子借助词库来填写一个有意义的句子。孩子能够根据场景，选择一个合适的单词填空，完成一个有意义的句子，逐步培养孩子写句的兴趣。'
                }]
            ]
        },
        classes:{
            title:'吉吉课程',
            en:'JJ CLASSES',
            list:[{
                src:'images/classes-01.jpg',
                title:'科学教学体系助力幼小衔接',
                list:[{
                    icon:'images/classes-01-icon-01.png',
                    content:'课程有效衔接小学课程，旨在帮助孩子们掌握500多个核心英语单词，拓宽词汇量。'
                },{
                    icon:'images/classes-01-icon-02.png',
                    content:'我们的教材被英国文化协会ELTons创新大奖提名，配合英孚自主研发Efekta™学习系统，致力于培养孩子听说读写各项基础，提高学习效果。'
                },{
                    icon:'images/classes-01-icon-03.png',
                    content:'贯穿课程始终的自然拼读法学习，帮助孩子通过学习字母和发音的对应联系，准确发音，学习拼读单词。'
                },{
                    icon:'images/classes-01-icon-04.png',
                    content:'自主研发的iLab学习系统同步课堂学习内容，包括配套音视频、在线英语练习和趣味英语游戏，让孩子在课后也能巩固课堂所学，助力幼小衔接。'
                }]
            },{
                src:'images/classes-02.jpg',
                title:'多元教学法提高英语学习兴趣',
                list:[{
                    icon:'images/classes-02-icon-01.png',
                    content:'外籍培训师主持的Life Club主题活动，为孩子创建英文浸入式环境，让孩子在真实语境中锻炼口语，培养表达的自信。'
                },{
                    icon:'images/classes-02-icon-02.png',
                    content:'课程配套歌曲，童谣、视频，手偶，英语词卡及互动白板等工具的综合使用，将多方位调动孩子的视听动三大感官，提高英语学习兴趣。'
                },{
                    icon:'images/classes-02-icon-03.png',
                    content:'	通过课后作业本、配套CD、卡通动画视频、APP互动游戏等工具，将语言学习空间从教室延伸至家中，打造360度浸入式语言学习环境。'
                }]
            },{
                src:'images/classes-03.jpg',
                title:'丰富活动培养综合软技能',
                list:[{
                    icon:'images/classes-03-icon-01.png',
                    content:'课程根据3-6岁孩子的认知特点和学习习惯，基于大量调研，系统研发而成。'
                },{
                    icon:'images/classes-03-icon-02.png',
                    content:'丰富的课堂游戏和小组活动，旨在培养孩子动手能力、社交技能、解决问题的能力、团队协作能力等综合软技能。'
                },{
                    icon:'images/classes-03-icon-03.png',
                    content:'我们的课程注重“全人教育”，帮助孩子在学习语言的同时，了解西方文化，提高综合素养和全球视野。'
                }]
            }]
        },
        matrials:{
            title:'吉吉教材',
            en:'JJ MATRIALS',
            active_index:-1,
            list:[{
                name:"蓝皮书",
                img:"images/book-01.png",
                intro:'通过这一阶段的学习，孩子们将通过简单句的练习，建立地道语感和开口自信。',
                list:[
                    'images/book-01-intro-01.png',
                    'images/book-01-intro-02.png',
                    'images/book-01-intro-03.png'
                ]
            },{
                name:"教材A",
                img:"images/book-02.png",
                intro:'学生们将会通过大量的字母和单词描红锻炼书写技巧，并学习不同字母和字母组的自然拼读发音。',
                list:[
                    'images/book-02-intro-01.png',
                    'images/book-02-intro-02.png',
                    'images/book-02-intro-03.png'
                ]
            },{
                name:"教材B",
                img:"images/book-03.png",
                intro:'此外，孩子们将通过自然拼读法的练习，进一步学习不同字母组合和元音的发音变化，提高口语和听力水平。拼写和书写练习同样涵盖在这一阶段的课程学习中。',
                list:[
                    'images/book-03-intro-01.png',
                    'images/book-03-intro-02.png',
                    'images/book-03-intro-03.png'
                ]
            },{
                name:"教材C",
                img:"images/book-04.png",
                intro:'学生们将通过角色扮演锻炼口语表达，运用自然拼读法则读出发音相似而拼写不同的复杂单词，并完成带有标点符号的整句写作。',
                list:[
                    'images/book-04-intro-01.png',
                    'images/book-04-intro-02.png',
                    'images/book-04-intro-03.png'
                ]
            }],
            view:{},
        },
        results:{
            title:'吉吉学习成果',
            en:'JJ RESULTS',
            active_index:0,
            list:[{
                name:'听力与口语要点',
                img:'images/results-01.png',
                detail:'在英孚360度浸入式语言学习环境中，孩子们将循序渐进地提高听力与口语水平，从音节发音、单词拼读再到简单对话，帮助自信开口，流利表达。',
                func:'在课程中学员将学到：',
                list:[{
                    title:'1. 自然拼读/音节',
                    detail:'理解字母表中的字母与它们独特发音的联系'
                },{
                    title:'2. 单词/表达',
                    detail:'理解并回答简单的问题。学生开始通过循环递进的方式建立词汇量。'
                },{
                    title:'3. 完整句/对话',
                    detail:'参与简单的日常对话，并能用简短的完整句描述日常生活中的物品与情景。'
                }]
            },{
                name:'阅读要点',
                img:'images/results-02.png',
                detail:'孩子们将在每个单元中学习认读核心词汇和短句，部分常用词汇会在每个单元中重复出现，让孩子在不断强化的过程中加深记忆，熟练运用。学生课本和练习册中都包含了阅读和书写练习，旨在提高阅读兴趣，培养阅读习惯。',
                func:'在课程中学员将学到：',
                list:[{
                    title:'1. 字母与单词认读',
                    detail:'通过图像记忆认读字母、单词和数字'
                },{
                    title:'2. 单词',
                    detail:'有能力将字母组合成单词.'
                },{
                    title:'3. 完整句',
                    detail:'用正确的语音语调读出短句子。'
                }]
            },{
                name:'写作要点',
                img:'images/results-03.png',
                detail:'这一阶段的书写练习将锻炼孩子们精细肌肉的发展，提高字母笔画、字母结构等书写技巧，而通过大量的重复练习和即时反馈，孩子们对单词拼写和句型结构的记忆也将得到强化。',
                func:'在课程中学员将学到：',
                list:[{
                    title:'1. 基础描红',
                    detail:'通过对线条和形状的描红和标记，为书写能力的发展打好基础'
                },{
                    title:'2. 字母和单词描红',
                    detail:'通过字母和单词的描红，提高肌肉运动技巧，锻炼书写能力'
                },{
                    title:'3. 句子抄写',
                    detail:'描红和抄写由3到5个单词组成的简短句子'
                }]
            },{
                name:'自然拼读法',
                img:'images/results-04.png',
                detail:'自然拼读法是以英语为母语国家的孩子学习英语发音的一种方法，帮助孩子通过学习字母和发音的对应联系，准确发音，学习拼读单词。',
                func:'自然拼读法中，教师旨在培养孩子：',
                list:[{
                    title:'',
                    detail:'<span class="num">1</span><span class="normal">可以轻松、流畅地阅读，并很好地理解</span>'
                },{
                    title:'',
                    detail:'<span class="num">2</span><span class="normal">可以连贯、清晰、准确地书写</span>'
                },{
                    title:'',
                    detail:'<span class="num">3</span><span class="normal">掌握丰富的词汇</span>'
                },{
                    title:'',
                    detail:'<span class="num">4</span><span class="normal">养成广泛涉猎不同题材书本的良好阅读习惯</span>'
                }]
            }]
        },
    },
    created:function(){
        this.GC.w = document.documentElement.clientWidth || window.innerWidth || screen.width,
        this.GC.h = document.documentElement.clientHeight || window.innerHeight || screen.height
        this.pc = this.GC.w > 1080 ? true : false
        this.nav.list_offset_top = this.pc ? 80 : 0
        this.fontSize = parseFloat(this.getComputedValue(document.documentElement,'font-size'));
    },
    mounted:function(){
        this.init_status = true
        if(!this.pc){
            this.setNavWidth()
            this.nav.showWidth = this.getRemValue(this.nav.initWidth) * this.fontSize;
        }
        this.initWindowScrollEvent()
        this.addBannerAnimation()
        if(!this.pc){
            this.addClassesAnimation()
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
            // console.log(this.nav.width +' , '+ this.nav.showWidth)
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
                window.scrollTo(0,this.nav.list[index].top - this.nav.height);
                self.nav.click_status = false;
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
        addBannerAnimation:function(){
            var i = 0,
                autoplay = true, //false,
                animation = 'move',
                elem = this.$refs['banner__animation'],
                id = elem.id,
                content = this.$refs['banner__animation-content'],
                childs = content.children,
                first = childs[0],
                length = childs.length;

            content.style.left = 0;
            this.animation[id] = {
                width:this.getPointOuterWidth(first),
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
                    this.initMoveAnimation(id,'banner__ul','banner__li')
                    break
            }
        },
        addClassesAnimation:function(){
            var i = 0,
                autoplay = true, //false,
                animation = 'move',
                elem = this.$refs['classes__list'],
                id = elem.id,
                content = this.$refs[id+'-content'],
                childs = content.children,
                length = childs.length,
                first = childs[0];
            // autoplay = elem.attr('autoplay');
            // autoplay = autoplay ? true : false;
            // animation = elem.attr('animation');
            // animation = animation ? animation : 'move';
            content.style.left = 0;
            this.animation[id] = {
                width:this.getPointOuterWidth(first),
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
                    this.initMoveAnimation(id,'classes__ul','classes__li')
                    break
            }
        },
        addMatrialViewAnimation:function(){
            var i = 0,
                autoplay = true, //false,
                animation = 'move',
                elem = this.$refs['view__list'],
                id = elem.id,
                content = this.$refs[id+'-content'],
                childs = content.children,
                length = childs.length,
                first = childs[0];
            // autoplay = elem.attr('autoplay');
            // autoplay = autoplay ? true : false;
            // animation = elem.attr('animation');
            // animation = animation ? animation : 'move';
            content.style.left = 0;
            this.animation[id] = {
                width:this.getPointOuterWidth(first),
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
                    this.initMoveAnimation(id,'view__ul','view__li')
                    break
            }
        },
        initMoveAnimation:function(id,wrapperClass,slideClass){
            var self = this,
                pagination = null,
                length = 0,
                totalLength = 3,
                data = this.animation[id],
                pstatus = data.pagination;
            if(pstatus){
                pagination = this.$refs[id+'-pagination'].children;
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
            self.nav.top = self.$refs['yh-center__nav'].offsetTop + self.nav.list_offset_top;
            self.nav.height = self.$refs['yh-center__nav-list'].offsetHeight;
            window.addEventListener('scroll',function() {
                if(self.nav.click_status){
                    return
                }
                var nav = self.$refs['yh-center__nav'],
                    scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
                    one = null,
                    halfWidow = document.documentElement.clientHeight / 4,
                    left = 0,
                    i = 0;
               
                self.getNavHeight();
                self.nav.top = nav.offsetTop + self.nav.list_offset_top;
                self.nav.height = self.$refs['yh-center__nav-list'].offsetHeight;
                
                // alert(self.nav.top +' , '+scrollTop)
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
            },false);
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

        },
        matrialViewEvent:function(index){
            if(this.animation['view__list'] && this.animation['view__list'].swiper){
                this.animation['view__list'].swiper.destroy(true,true)
                this.animation['view__list'].swiper = null
            }
            this.matrials.active_index = index
            this.matrials.view = this.matrials.list[this.matrials.active_index]
            this.$nextTick(function(){
                this.addMatrialViewAnimation()
            })
        },
        matrialViewClose:function(){
            this.matrials.active_index = -1
            this.matrials.view = {}
        },
        resultsChangeEvent:function(index){
            this.results.active_index = index
        },
    }
})
