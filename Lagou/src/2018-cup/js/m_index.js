(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function rem($n) {
    return $n / (750 / 16) +'rem';
}
var bgmusic_button = null,
    audio = null,
    app = null;
function bgMusicPlay(){
    var bgmusic_button = $(".bgmusic");
    var audio = document.getElementById("music");
    audio.preload = 'auto';
    audio.loop = 'true'
    audio.play();

    //webPlayAudio();

    function webPlayAudio(){
        var context,
            dogBarkingBuffer;
        init();
        function init() {
            try {
                // Fix up for prefixing
                window.AudioContext = window.AudioContext||window.webkitAudioContext;
                context = new AudioContext();
            }
            catch(e) {
                alert('Web Audio API is not supported in this browser');
            }
        }

        var source = null;
        var audioBuffer = null;
        function stopSound() {
            if (source) {
                source.noteOff(0); //立即停止
            }
        }
        function playSound() {
            var absn = context.createBufferSource();
            var analyser = context.createAnalyser();
            absn.connect(analyser);
            absn.connect(context.destination);
            absn.buffer = audioBuffer;
            absn.loop = true;
            absn.start(0);

            /*source = context.createBufferSource();
            var analyser = context.createAnalyser();
            source.connect(analyser);
            source.connect(context.destination);
            source.buffer = audioBuffer;
            source.loop = true;
            //source.noteOn(0); //立即播放
            //(source.start || source.noteOn)(0);
            if(source.start){
                source.start(0);
            }else if(source.noteOn){
                source.noteOn(0);
            }*/
        }
        function initSound(arrayBuffer) {
            context.decodeAudioData(arrayBuffer, function(buffer) { //解码成功时的回调函数
                audioBuffer = buffer;
                playSound();
            }, function(e) { //解码出错时的回调函数
                console.log('Error decoding file', e);
            });
        }
        function loadAudioFile(url) {
            var xhr = new XMLHttpRequest(); //通过XHR下载音频文件
            xhr.open('GET', url, true);
            xhr.responseType = 'arraybuffer';
            xhr.onload = function(e) { //下载完成
                initSound(this.response);
            };
            xhr.send();
        }
        loadAudioFile('images/bg.mp3');
    }

    // bgmusic_button.click(function(e){
    //     //e.stopPropagation();
    //     if($(this).hasClass('open')){
    //         audio.pause();

    //         bgmusic_button.removeClass("open").addClass("close");
    //     }else{
    //         audio.play();

    //         bgmusic_button.removeClass("close").addClass("open");
    //     }
    // });

    autoPlayMusic(audio);
    // 音乐播放
    function autoPlayMusic(audio) {
        // 自动播放音乐效果，解决浏览器或者APP自动播放问题
        function musicInBrowserHandler() {
            musicPlay(audio,true);
            document.body.removeEventListener('touchstart', musicInBrowserHandler);
        }
        document.body.addEventListener('touchstart', musicInBrowserHandler);

        // 自动播放音乐效果，解决微信自动播放问题
        function musicInWeixinHandler() {
            musicPlay(audio,true);
            document.addEventListener("WeixinJSBridgeReady", function () {
                musicPlay(audio,true);
            }, false);
            document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
        }
        document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
    }
    function musicPlay(audio,isPlay) {
        if (isPlay && audio.paused) {
            audio.play();
            app.musicStatus = false
        }
        if (!isPlay && !audio.paused) {
            audio.pause();
            app.musicStatus = true
        }
    }

    //autoPlayMusic(audio);

    // 音乐播放
    /*function autoPlayMusic(audio) {
        // 自动播放音乐效果，解决浏览器或者APP自动播放问题
        function musicInBrowserHandler() {
            audio.play();
            document.body.removeEventListener('touchstart', musicInBrowserHandler);
        }
        document.body.addEventListener('touchstart', musicInBrowserHandler);

        // 自动播放音乐效果，解决微信自动播放问题
        function musicInWeixinHandler() {
            audio.play();
            document.addEventListener("WeixinJSBridgeReady", function () {
                audio.play();
            }, false);
            document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
        }
        document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
    }*/


}
app = new Vue({
    el:"#app",
    data:{
        host:"https://activity.lagou.com/activity/dist/2018-cup/",
        activePage:0,
        name:"",
        canvas:null,
        ctx:null,
        imgCanvas:null,
        imgCtx:null,
        img:null,
        tips:"",
        shakeClass:"",
        
        url:"",
        saveStatus:false,
        lineWidth:2,
        bold:"bold",
        drawStatus:false,

        musicStatus:false,

        load:0,
        loadedImgs:[],
        imgs:[
            "images/draw-bg.png",
            "images/draw-ercode.png",
            "images/star/Messi-draw.png",
            "images/star/CRonaldo-draw.png",
            "images/star/Neymar-draw.png",
            "images/star/OZ-draw.png",
            "images/star/Suarez-draw.png",
            "images/star/Iniesta-draw.png",
            "images/star/Mbappe-draw.png",
            "images/star/Beckham-draw.png",
            "images/star/Zidane-draw.png",
            "images/star/Kaka-draw.png",
            "images/star/Ronaldo-draw.png",
            "images/star/Liyi-draw.png",
            "images/star/Maradona-draw.png"
        ],
        type:"in",
        ani:{
            in:{
                bg:"opacityChange delay0-5",
                bg_zoom:"zoomBigIn delay0-5",
                littleBottomIn:"littleBottomIn",
                text_bg:"opacityChange delay1-0",
                bottomIn:"bottomIn delay1-0",
                s1:"leftZoomIn delay1-0",
                s2:"rightZoomIn delay1-0",
                s3:"leftZoomIn2 delay1-0",
                s4:"rightZoomIn2 delay1-0",
                fly:"leftBottomIn delay1-5",
                showImmediate:"opacityChange delay2-0 duration0-1",
                ballIn:"ballIn delay2-1",
                startIn:"opacityChange delay2-1",
                pageOut:""
            },
            out:{
                bg:"zoomOut",
                bg_zoom:"zoomOut",
                littleBottomIn:"opacityChange-out",
                text_bg:"opacityChange-out",
                bottomIn:"opacityChange-out",
                s1:"leftZoomOut",
                s3:"leftZoomOut2",
                s2:"rightZoomOut",
                s4:"rightZoomOut2",
                fly:"rightZoomOut",
                showImmediate:"opacityChange-out",
                ballIn:"opacityChange-out",
                startIn:"opacityChange-out",
                pageOut:"opacityChange-out"
            }
        },
        // 滑动
        isMoving:false,
        bprevIndex:-2,
        prevIndex:-1,
        starActive:0,
        nextIndex:1,
        bnextIndex:2,
        prevClass:'prev',
        bprevClass:'',
        currentClass:'active',
        bnextClass:'',
        nextClass:'next',
        star:[{
            name:"Messi",
            cn:"梅西",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:209772000,
            _salary:["209","772","000"],
            words1:"面对再多的困难也不能倒下，",
            words2:"不是因为背后空无一人，",
            words3:"而是他们选择成为传奇。",
            outer:{
                height:rem(993),
                left:0,
                top:0
            }
        },{
            name:"CRonaldo",
            cn:"C罗",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:153133560,
            _salary:["153","133","560"],
            words1:"有以一己之力逆天改命的能力，",
            words2:"敌人越强，他们越强大。",
            outer:{
                left:0,
                top:rem(-128),
                status:true
            }
        },{
            name:"Neymar",
            cn:"内马尔",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:218512500,
            _salary:["218","512","500"],
            words1:"难能可贵的不是天赋异禀，",
            words2:"而是在关键时刻堪当大任，他做到了！",
            outer:{
                height:rem(1334),
                left:0,
                top:rem(-128)
            }
        },{
            name:"OZ",
            cn:"厄齐尔",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:146840400,
            _salary:["146","840","400"],
            words1:"不是谁都有四两拨千斤的能力，",
            words2:"它源于对事物的充分理解。",
            outer:{
                left:0,
                top:0,
                status:true
            }
        },{
            name:"Suarez",
            cn:"苏亚雷斯",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:123808000,
            _salary:["123","808","000"],
            words1:"认为成绩才是自己的证明",
            words2:"既然这个世界总有人要赢，",
            words3:"为什么不能是自己？",
            outer:{
                left:0,
                top:0,
                status:true
            }
        },{
            name:"Iniesta",
            cn:"伊涅斯塔",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:123808000,
            _salary:["123","808","000"],
            words1:"无论局势瞬息万变，",
            words2:"心中总有自己的节奏，",
            words3:"关键时刻的决断来自于不断推演和复盘。",
            outer:{
                left:0,
                top:0,
                status:true
            }
        },{
            name:"Mbappe",
            cn:"姆巴佩",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:139284000,
            _salary:["139","284","000"],
            words1:"初出江湖的时候就沉稳的像个老手",
            words2:"对未来无需多言，",
            words3:"因为世界在他们的脚下。",
            outer:{
                left:0,
                top:0,
                status:true
            }
        },{
            name:"Beckham",
            cn:"贝克汉姆",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:29368080,
            _salary:["29","368","080"],
            words1:"虽然有着国民老公的脸，",
            words2:"却依然保持谦逊和专业。",
            outer:{
                left:0,
                top:0,
                status:true
            }
        },{
            name:"Zidane",
            cn:"齐达内",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:61904000,
            _salary:["61","904","000"],
            words1:"相信没有人可以永远站在顶峰，",
            words2:"但向上攀爬的感觉却永远让人澎湃。",
            outer:{
                height:rem(950),
                left:rem(-8),
                top:0
            }
        },{
            name:"Kaka",
            cn:"卡卡",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:69642000,
            _salary:["69","642","000"],
            words1:"拥有一切干净、利落、简单的技巧，",
            words2:"背后都离不开专注和努力的日常。",
            outer:{
                height:rem(947),
                left:0,
                top:0
            }
        },{
            name:"Ronaldo",
            cn:"罗纳尔多",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:49523200,
            _salary:["49","523","200"],
            words1:"无论顺境还是逆境， ",
            words2:"胸怀坚定的信仰，露出灿烂的微笑。",
            outer:{
                left:0,
                top:rem(-128)
            }
        },{
            name:"Liyi",
            cn:"李毅",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:123808000,
            _salary:["123","808","000"],
            words1:"相信榜样的力量，",
            words2:"你正是因为他的存在而更强。",
            outer:{
                width:rem(1128),
                height:rem(947),
                left:rem(-478),
                top:0
            }
        },{
            name:"Maradona",
            cn:"马拉多纳",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:33085500,
            _salary:["33","085","500"],
            words1:"知道人无法打败时间，",
            words2:"只希望留下能站在时间之上的作品。",
            outer:{
                left:0,
                top:0,
                status:true
            }
        }],
        pk:{
            name:'我',
            salary:'',
            nstatus:false,
            sstatus:false
        },
        scrollStatus:false,
        startTime:Date.now(),
        nowTime:0,
        url:"",
        load:0,
        canvas:null,
        ctx:null,
        drawStatus:true,
        active_index:[],
        changeStatus:false,
        long_list:[{
            elem:'title-layer',
            top:0,
            height:0
        },{
            elem:'star-detail-layer',
            top:0,
            height:0
        },{
            elem:'pkdetail-layer-01',
            top:0,
            height:0
        },{
            elem:'pkdetail-layer-02',
            top:0,
            height:0
        },{
            elem:'pkdetail-layer-03',
            top:0,
            height:0
        },{
            elem:'insert-layer-01',
            top:0,
            height:0
        },{
            elem:'pkdetail-layer-04',
            top:0,
            height:0
        },{
            elem:'end-layer',
            top:0,
            height:0
        }],
        secTimer:null,
        animateNumber:{
            _starSalary:[0],
            selfMoney:2018,
            salaryTimes:0,
            xsalaryTimes:0,
            doCarStatus:false,
            starCar:0,
            selfCar:0,
            starHouse:0,
            selfHouse:0,
            doHouseStatus:false
        },
        // swiperOptionA: {
        //     pagination: {
        //         el: '.swiper-pagination'
        //     },
        //     navigation: {
        //         nextEl: '.swiper-button-next',
        //         prevEl: '.swiper-button-prev'
        //     }
        // },
    },
    computed:{
        getSelfMoney:function(){
            var salary = this.star[this.starActive].salary,
                years = Math.ceil(salary / (this.pk.salary * 12))
            return years+2018
        },
        getStarSalary:function(){
            var salary = this.star[this.starActive].salary
            return Math.floor(salary / 10000)
        },
        getSalaryTimes:function(){
            var times = (this.pk.salary / 11000).toFixed(1),
                arr = times.split('.')[1]
            if(arr[1] == '0'){
                return arr[0]
            }else {
                return times
            }
        },
        getXSalaryTimes:function(){
            var times = (this.pk.salary / 13000).toFixed(1),
                arr = times.split('.')[1]
            if(arr[1] == '0'){
                return arr[0]
            }else {
                return times
            }
        },
        getStarCar:function(){
            var salary = this.star[this.starActive].salary,
                hours = Math.ceil(1232600 / ( salary / 12 / 30 / 24 ))
            return hours
        },
        getSelfCar:function(){
            var salary = this.pk.salary,
                days = Math.ceil(1232600 / ( salary / 30 ))
            return days
        },
        getTotalTime:function(){
            // var now = Math.ceil((Date.now() - this.startTime) / 1000)
            // this.nowTime = now
            // return now
            return this.nowTime
        },
        getSelfSecMoney:function(){
            var money = (this.pk.salary * 12 / 5760000 * this.nowTime).toFixed(2)
            return this.getFixedMoney(money)
        },
        getOtherSecMoney:function(){
            var money = (11000 * 12 / 5760000 * this.nowTime).toFixed(2)
            return this.getFixedMoney(money)
        },
        getStarSecMoney:function(){
            var money = (this.star[this.starActive].salary / 5760000 * this.nowTime).toFixed(2)
            return this.getFixedMoney(money)
        },
        getStarHouse:function(){
            var salary = this.star[this.starActive].salary / 12 / 200
            return Math.ceil(1000 * 10000 / salary)
        },
        getSelfHouse:function(){
            var salary = this.pk.salary * 12
            return Math.ceil(1000 * 10000 / salary)
        }
    },
    mounted:function(){
        var self = this;
        // this.weixinAuth()
        dragRulesDetailList();
        bgMusicPlay();
        function dragRulesDetailList() {
            var startX = 0,
                moveX = 0,
                startY = 0,
                moveY = 0;
            $(".star-list").on("touchstart",function (e) {
                e.preventDefault()
                e.stopPropagation()
                startX = e.originalEvent.changedTouches[0].pageX;
                startY = e.originalEvent.changedTouches[0].pageY;
            }).on('touchmove',function (e) {
                e.preventDefault()
                e.stopPropagation()
                moveX = e.originalEvent.changedTouches[0].pageX;
                moveY = e.originalEvent.changedTouches[0].pageY;
            }).on('touchend',function (e) {
                e.preventDefault()
                e.stopPropagation()
                if(self.isMoving){
                    return
                }
                self.isMoving = true
                if(Math.abs(moveY-startY)>Math.abs(moveX-startX)){
                    // e.stopImmediatePropagation();
                    // return false;
                    self.isMoving = false
                }else{
                    if(moveX<startX){
                        //向左滑动了
                        self.starActive++;
                        if(self.starActive < self.star.length){
                            // renderRuleBox();
                            self.showNext()
                        }else {
                            self.starActive = self.star.length - 1
                            self.isMoving = false
                        }
                    }else if(moveX>startX){
                        //向右滑动了
                        self.starActive--;
                        if(self.starActive > -1){
                            self.showPrev()
                        }else{
                            self.starActive = 0
                            self.isMoving = false
                        }
                    }
                }
            });
        }

        this.initCanvas()
        this.initLongAnimate()
    },
    methods:{
        rem:function($n) {
            return $n / (750 / 16) +'rem';
        },
        showAllStar:function(){
            var self = this,
                audio = document.getElementById("music");
            if(audio.paused){
                audio.play();
            }
            this.type = "out"
            setTimeout(function(){
                self.type = "in"
                self.activePage = 1
            },500)
        },
        selectedStar:function(){
            var self = this
            this.type = "out"
            setTimeout(function(){
                self.type = "in"
                if(self.changeStatus){
                    self.changeStatus = false
                    self.showResult()
                }else{
                    self.activePage = 2
                }
            },500)
            datas.imgUrl = this.host + "images/share/"+this.star[this.starActive].name+'.jpg'
            if(share){
                share(datas);
            }
        },
        startPK:function(){
            var value = parseFloat(this.pk.salary)
            if(this.pk.name && value){
                var self = this
                // 限制文字，开始滚动
                this.scrollStatus = true
                this.active_index = []
                setTimeout(function(){
                    self.type = "out"
                    self.showResult()
                },3000)
            }else{
                if(!this.pk.name){
                    this.pk.nstatus = true
                }else if(this.pk.salary && !value){
                    this.pk.sstatus = true
                }if(!this.pk.salary){
                    this.pk.sstatus = true
                }
            }
        },
        showResult:function(){
            var self = this
            self.active_index = []
            setTimeout(function(){
                self.activePage = 3
                setTimeout(function(){
                    self.active_index = [0,1,2,3]
                    self.nowTime = 0
                    self.animateNumber._starSalary = [0]
                    self.animateNumber.selfMoney = 2018
                    // self.animateNumber.salaryTimes = 0
                    // self.animateNumber.xsalaryTimes = 0
                    self.animateNumber.doCarStatus = false
                    self.animateNumber.starCar = 0
                    self.animateNumber.selfCar = 0
                    self.animateNumber.starHouse = 0
                    self.animateNumber.selfHouse = 0
                    self.animateNumber.doHouseStatus = false
                    self.calcuteNumAnimation()
                },500)
                $('html,body').css({
                    'overflow-x': 'hidden',
                    'overflow':'visible',
                    'height': 'auto'
                });
                self.startTime = Date.now()
                self.setSecMoney()
                // 绘制文案与图片
                self.clearCanvas()
                if(self.load == self.imgs.length){
                    // if(self.star[self.starActive].words3){
                        self.ctx.drawImage(self.loadedImgs[self.starActive+2],0,44)
                    // }else{
                        // self.ctx.drawImage(self.loadedImgs[self.starActive+2],0,0)
                    // }
                    self.drawContent()
                }else{
                    self.drawStatus = true
                }
            },500)
        },
        saveImage:function(){
            this.saveStatus = true
        },
        closeSave:function(){
            this.saveStatus = false
        },
        reSetMoney:function(){
            var self = this
            this.type = "out"
            setTimeout(function(){
                self.active_index = []
                $('html,body').css({
                    'overflow':'hidden',
                    'height': '100%'
                });
                self.scrollStatus = false
                self.type = "in"
                self.activePage = 2
            },500)
        },
        changeStar:function(){
            var self = this
            this.type = "out"
            this.changeStatus = true
            setTimeout(function(){
                self.active_index = []
                $('html,body').css({
                    'overflow':'hidden',
                    'height': '100%'
                });
                self.scrollStatus = false
                self.type = "in"
                self.activePage = 1
            },500)
        },
        getLongHeight:function(){
            var list = this.long_list,
                elem = null,
                parent = [],
                height = 0,
                top = 0,
                status = false,
                i = 0,
                j = 0;
            for (i = 0; i < list.length; i++) {
                if (list[i].elem) {
                    elem = this.$refs[list[i].elem];
                    top = 0;
                    height = 0;
                    if (list[i].parent) {
                        parent = list[i].parent;
                        for (j = 0; j < parent.length; j++) {
                            top += this.location[this.current].long.list[parent[j]].offsetTop;
                        }
                        top += this.getPX(list[i].top);
                    } else {
                        top += elem.offsetTop;
                    }
                    if (list[i].initHeight) {
                        height = this.getPX(list[i].initHeight);
                    } else {
                        height = elem.offsetHeight;
                    }
                    if (list[i].top != top || list[i].height != height) {
                        this.long_list[i].top = top;
                        this.long_list[i].height = height;
                        status = true;
                    }
                }
            }
            // if (!status) {
            //     this.location[this.current].long.status = true;
            // }
        },
        initLongAnimate:function(){
            var long = this.$refs['long-page'],
                self = this,
                status = false,
                arr = [];
            $(window).scroll(function () {
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
                    height = $(window).height(),
                    halfWidow = height / 8,
                    one = null,
                    i = 0;
                self.getLongHeight();
                for (i = 0; i < self.long_list.length; i++) {
                    one = self.long_list[i];
                    if (one.elem && scrollTop > one.top - halfWidow * 7 && arr.indexOf(i) == -1) {
                        if(self.active_index.indexOf(i) == -1){
                            self.active_index.push(i);
                        }   
                    }
                }
                if(self.active_index.indexOf(4) != -1 && !self.animateNumber.doCarStatus){
                    self.animateNumber.doCarStatus = true
                    setTimeout(function(){
                        self.numAutoPlusAnimation({
                            time: 1000,
                            num: self.getStarCar,
                            regulator: 20,
                            callback:function(value){
                                self.animateNumber.starCar = value
                            }
                        })
                    },2000)
                    setTimeout(function(){
                        self.numAutoPlusAnimation({
                            time: 1000,
                            num: self.getSelfCar,
                            regulator: 20,
                            callback:function(value){
                                self.animateNumber.selfCar = value
                            }
                        })
                    },2500)
                }
                if(self.active_index.indexOf(5) != -1 && !self.animateNumber.doHouseStatus){
                    self.animateNumber.doHouseStatus = true
                    setTimeout(function(){
                        self.numAutoPlusAnimation({
                            time: 1000,
                            num: self.getStarHouse,
                            regulator: 20,
                            callback:function(value){
                                self.animateNumber.starHouse = value
                            }
                        })
                    },2200)
                    setTimeout(function(){
                        self.numAutoPlusAnimation({
                            time: 1000,
                            num: self.getSelfHouse,
                            regulator: 20,
                            callback:function(value){
                                self.animateNumber.selfHouse = value
                            }
                        })
                    },2700)
                }
                // self.active_index = arr;
            });
        },
        getProgressWidth:function(index){
            var arr = [
                    this.pk.salary,
                    11000,
                    13000
                ],
                max = Math.max.apply(null,arr)
            if(this.active_index.indexOf(3) != -1){
                return {
                    width:this.rem(arr[index] / max * 267)
                }
            }
            return ''
        },
        setStarOuter:function(one){
            var style = {
                left:one.outer.left,
                top:one.outer.top,
                backgroundImage:'url(images/star/'+one.name+'-outer.png)'
            }
            if(one.outer.status){
                style.backgroundImage = 'none'
            }
            if(one.outer.height){
                style.height = one.outer.height
            }
            if(one.outer.width){
                style.width = one.outer.width
            }
            return style
        },
        showShare:function(){
            var func = Math.floor(Math.random() * 44)
            this.initCanvas()
            this.drawWords(this.textArray[func])
            this.drawImgContent()
        },
        showNext:function(){
            var index = this.starActive,
                self = this;
            self.prevIndex = self.starActive - 1;
            self.bprevIndex = self.prevIndex - 1;
            self.starActive = index;
            self.nextIndex = self.starActive + 1;
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
            var index = this.starActive,
                self = this;
            this.prevIndex = this.starActive - 1;
            this.bprevIndex = this.prevIndex - 1;
            this.starActive = index;
            this.nextIndex = this.starActive + 1;
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
            this.starActive--;
            if(this.starActive > -1){
                this.showPrev()
            }else{
                this.starActive = 0
                this.isMoving = false
            }
        },
        showNextEvent:function(){
            if(this.isMoving){
                return
            }
            this.isMoving = true
            this.starActive++;
            // alert(this.starActive+" , "+ this.star.length)
            if(this.starActive < this.star.length){
                this.showNext()
            }else {
                this.starActive = this.star.length - 1
                this.isMoving = false
            }
        },
        nameChange:function(){
            if(!this.pk.name){
                this.pk.nstatus = true
            }else{
                this.pk.nstatus = false
            }
        },
        salaryChange:function(){
            if(!this.pk.salary){
                this.pk.sstatus = true
            }else{
                this.pk.sstatus = false
            }
        },
        setSecMoney:function(){
            clearTimeout(this.secTimer)
            this.secTimer = setTimeout(this.setSecMoney,1000)
            this.nowTime++
        },
        getFixedMoney:function(money){
            var arr = money.split('.'),
                brr = arr[1].split(''),
                i = 0,
                str = ''
            for(i = brr.length - 1; i > -1; i--){
                if(brr[i] != '0'){
                    str = brr.slice(0,i+1).join('')
                    break
                }
            }
            if(str){
                return arr[0]+'.'+str
            }else{
                return arr[0]
            }
        },
        initCanvas:function(){
            var width = 588,
                height = 962,
                self = this

            this.canvas = this.$refs['canvas']
            this.ctx = this.canvas.getContext("2d")
            this.canvas.width = width
            this.canvas.height = height

            this.ctx.fillStyle = "#321f8f"
            this.ctx.rect(0,0,this.canvas.width,this.canvas.height)
            this.ctx.fill()

            this.imgs.forEach(function(url){
                var img = new Image()
                img.onload = function(){
                    self.load++
                    if(self.load == self.imgs.length){
                        self.ctx.drawImage(self.loadedImgs[0],0,0)
                        self.ctx.drawImage(self.loadedImgs[1],487,849)
                        if(self.drawStatus){
                            // if(self.star[self.starActive].words3){
                                self.ctx.drawImage(self.loadedImgs[self.starActive+2],0,44)
                            // }else{
                                // self.ctx.drawImage(self.loadedImgs[self.starActive+2],0,0)
                            // }
                            self.drawContent()
                            self.drawStatus = false
                        }
                    }
                }
                img.src = url,
                self.loadedImgs.push(img)
            })
        },
        clearCanvas:function(){
            this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

            this.ctx.fillStyle = "#321f8f"
            this.ctx.rect(0,0,this.canvas.width,this.canvas.height)
            this.ctx.fill()

            if(this.load == this.imgs.length){
                this.ctx.drawImage(this.loadedImgs[0],0,0)
                this.ctx.drawImage(this.loadedImgs[1],487,849)
            }
        },
        drawContent:function(){
            var self = this,
                star = this.star[this.starActive],
                starName = star.cn,
                salary = Math.floor(star.salary / 10000)
            this.ctx.strokeStyle = '#ffffff'
            this.ctx.lineWidth = 3
            this.ctx.beginPath()
            this.ctx.moveTo(0,0)
            this.ctx.lineTo(this.canvas.width,0)
            this.ctx.lineTo(this.canvas.width,this.canvas.height)
            this.ctx.lineTo(0,this.canvas.height)
            this.ctx.lineTo(0,0)
            this.ctx.stroke()
            this.ctx.closePath()

            this.ctx.font = "36px normal"
            this.ctx.fillStyle = "#ffffff"
            this.ctx.fillText(starName+"年薪"+salary+"万",38,46+36)

            var twidth = this.ctx.measureText(starName+"年薪"+salary+"万").width
            this.ctx.beginPath()
            this.ctx.lineWidth = 1
            this.ctx.moveTo(38,105)
            this.ctx.lineTo(38+twidth,105)
            this.ctx.stroke()
            this.ctx.closePath()

            this.ctx.font = "26px normal"
            this.ctx.fillText(this.pk.name+"和"+starName+"一样，",38,132+26)
            this.ctx.fillText(star.words1,38,176+26)
            this.ctx.fillText(star.words2,38,220+26)

            if(star.words3){
                this.ctx.fillText(star.words3,38,264+26)
            }


            // 绘制完毕，导出图片地址
            setTimeout(function(){
                self.url = self.canvas.toDataURL("image/png")
            },500)
        },
        calcuteNumAnimation:function(){
            var self = this
            setTimeout(function(){
                self.numAutoPlusAnimation({
                    time: 2500,
                    num: self.star[self.starActive].salary,
                    regulator: 50,
                    callback:function(value){
                        var str = value+'',
                            len = Math.ceil(str.length / 3),
                            left = str.length % 3 || 3,
                            arr = [],
                            i = 0
                        for( i = 0; i < len; i++){
                            if(i == 0){
                                arr.push(str.slice(0,left))
                            }else{
                                arr.push(str.slice(left+(i-1)*3,left+i*3))
                            }
                        }
                        self.animateNumber._starSalary = arr
                    }
                })
            },3100)
            setTimeout(function(){
                self.numAutoPlusAnimation({
                    time: 2500,
                    num: self.getSelfMoney,
                    regulator: 50,
                    base:2018,
                    callback:function(value){
                        self.animateNumber.selfMoney = value
                    }
                })
            },4800)
            // setTimeout(function(){
            //     self.numAutoPlusAnimation({
            //         time: 2500,
            //         num: self.getSalaryTimes,
            //         regulator: 50,
            //         callback:function(value){
            //             value = new Number(value).toFixed(1)
            //             var arr = value ? value.split('.') : ['0']
            //             if(arr[1] == '0'){
            //                 self.animateNumber.salaryTimes = arr[0]
            //             }else {
            //                 self.animateNumber.salaryTimes = value
            //             }
            //         }
            //     })
            // },4700)
            // setTimeout(function(){
            //     self.numAutoPlusAnimation({
            //         time: 2500,
            //         num: self.getXSalaryTimes,
            //         regulator: 50,
            //         callback:function(value){
            //             value = new Number(value).toFixed(1)
            //             var arr = value ? value.split('.') : ['0']
            //             if(arr[1] == '0'){
            //                 self.animateNumber.xsalaryTimes = arr[0]
            //             }else {
            //                 self.animateNumber.xsalaryTimes = value
            //             }
            //         }
            //     })
            // },4900)
        },
        //数字自增到某一值动画参数（目标元素,自定义配置）
	    numAutoPlusAnimation:function(options) {
            options = options || {};
            var time = options.time, //总时间--毫秒为单位
                finalNum = options.num, //要显示的真实数值
                regulator = options.regulator || 100, //调速器，改变regulator的数值可以调节数字改变的速度
                callback = options.callback || function(){},
                base = options.base || 0,
                step = finalNum / (time / regulator),/*每30ms增加的数值--*/
                count = base, //计数器
                len = (finalNum+'').split('.').length,
                status = false,
                temp = 0,
                initial = 0;

            if(finalNum < 50){
                if(len == 1){
                    step = 1
                }else if(finalNum < 10){
                    step = 0.01
                }else{
                    step = 0.1
                }
                status = true
            }
            var timer = setInterval(function() {
                temp = status ? step : Math.random() * step + step / 2
                if(len == 1){
                    count = count + Math.ceil(temp);
                }else{
                    count = count + temp;
                }
                if(count >= finalNum) {
                    clearInterval(timer);
                    count = finalNum;
                }
                //t未发生改变的话就直接返回
                //避免调用text函数，提高DOM性能
                // var t = Math.floor(count);
                if(count == initial) return;
                initial = count;
                callback(initial)
            }, 30);
        },
        musicEvent:function(e){
            var audio = document.getElementById("music");
            if(audio.paused){
                audio.play();
                this.musicStatus = false
            }else{
                audio.pause();
                this.musicStatus = true;
            }
            // if(this.musicStatus){
            //     audio.pause();
            //     this.musicStatus = false;
            // }else{
            //     audio.play();
            //     this.musicStatus = true
            // }
        },
        weixinAuth:function(){
            $.ajax({
                type: 'get',
                url: 'https://activity.lagou.com/activityapi/weixin/hasOpenId',
                success: function(data) {
                    alert(JSON.stringify(data))
                    if (data.state == 200) { // 已登录
                        initTotal();
                    } else if (data.state == 201) { // 未登录
                        var weixinlogin = window.sessionStorage.getItem('weixinlogin');
                        if (weixinlogin == 1) {
                            
                        } else if (!weixinlogin) {
                            window.sessionStorage.setItem('weixinlogin', 1);
                            window.location.href = 'https://activity.lagou.com/activityapi/weixin/auth.html?url=' + window.location.href;
                        }
                    }
                },
                error: function(error) {
                    console.log(error.message);
                }
            });
        }
    }
})
},{}]},{},[1]);