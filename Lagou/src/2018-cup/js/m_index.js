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
        shareStatus:false,
        lineWidth:2,
        bold:"bold",
        drawStatus:false,

        musicStatus:false,
        endIndex:0,

        load:0,
        loadedImgs:[],
        imgs:[
            "images/draw-bg.png",
            "images/draw-ercode-02.jpg",
            "images/star/Messi-card.png",
            "images/star/CRonaldo-card.png",
            "images/star/Neymar-card.png",
            "images/star/OZ-card.png",
            "images/star/Suarez-card.png",
            "images/star/Iniesta-card.png",
            "images/star/Mbappe-card.png",
            "images/star/Beckham-card.png",
            "images/star/Zidane-card.png",
            "images/star/Kaka-card.png",
            "images/star/Ronaldo-card.png",
            "images/star/Liyi-card.png",
            "images/star/Maradona-card.png"
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
        randomText:[
            "11k是互联网薪资的平均线",
            "在世界杯表现优异的球员，身价大概率会涨10倍",
            "北京和上海并列互联网薪资最高的城市",
            "世界薪资最高的不是C罗梅西，而是中超的特维斯",
            "北京邮电大学培养了最多的技术和产品人",
            "俄罗斯莫斯科的平均薪水是7200元"
        ],
        randomArr:[0,1,2],
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
            nickname:"梅西",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:209772000,
            _salary:["209","772","000"],
            words1:"面对再多的困难<br/>"+
                "也不能倒下<br/>"+
                "因为他选择<br/>"+
                "成为传奇",
            outer:{
                height:rem(993),
                left:0,
                top:0
            }
        },{
            name:"CRonaldo",
            cn:"C.罗纳尔多",
            nickname:"C罗",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:153133560,
            _salary:["153","133","560"],
            words1:"用一己之力<br/>"+
                "即可逆天改命<br/>"+
                "敌人越强<br/>"+
                "你越强大",
            outer:{
                left:0,
                top:rem(-128),
                status:true
            }
        },{
            name:"Neymar",
            cn:"内马尔",
            nickname:"内少",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:218512500,
            _salary:["218","512","500"],
            words1:"难能可贵的<br/>不是天赋异禀<br/>而是在关键时刻<br/>堪当大任",
            outer:{
                height:rem(1334),
                left:0,
                top:rem(-128)
            }
        },{
            name:"OZ",
            cn:"厄齐尔",
            nickname:"272",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:146840400,
            _salary:["146","840","400"],
            words1:"关键时刻的<br/>"+
                "灵光一现<br/>"+
                "来自于不断<br/>"+
                "复盘训练",
            outer:{
                left:0,
                top:0,
                status:true
            }
        },{
            name:"Suarez",
            cn:"苏亚雷斯",
            nickname:"苏牙",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:123808000,
            _salary:["123","808","000"],
            words1:"既然总有人要赢，<br/>"+
                "为什么不能是自己？",
            outer:{
                left:0,
                top:0,
                status:true
            }
        },{
            name:"Iniesta",
            cn:"伊涅斯塔",
            nickname:"小白",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:123808000,
            _salary:["123","808","000"],
            words1:"无论局势<br/>"+
                "瞬息万变<br/>"+
                "心中总有<br/>"+
                "自己的节奏",
            outer:{
                left:0,
                top:0,
                status:true
            }
        },{
            name:"Mbappe",
            cn:"姆巴佩",
            nickname:"姆巴佩",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:139284000,
            _salary:["139","284","000"],
            words1:"无需多言<br/>"+
            "世界在你的脚下",
            outer:{
                left:0,
                top:0,
                status:true
            }
        },{
            name:"Beckham",
            cn:"贝克汉姆",
            nickname:"小贝",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:29368080,
            _salary:["29","368","080"],
            words1:"虽然有着<br/>"+
                "国民老公的脸<br/>"+
                "却依然保持<br/>"+
                "谦逊和专业"+
                "",
            outer:{
                left:0,
                top:0,
                status:true
            }
        },{
            name:"Zidane",
            cn:"齐达内",
            nickname:"齐祖",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:61904000,
            _salary:["61","904","000"],
            words1:"没有人可以<br/>"+
                "永远站在顶峰<br/>"+
                "但向上攀爬的感觉<br/>"+
                "却永远让人澎湃"+
                "",
            outer:{
                height:rem(950),
                left:rem(-8),
                top:0
            }
        },{
            name:"Kaka",
            cn:"卡卡",
            nickname:"卡卡",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:69642000,
            _salary:["69","642","000"],
            words1:"一切干净、利落、简单的技巧<br/>"+
                "背后都离不开<br/>"+
                "专注和努力的日常",
            outer:{
                height:rem(947),
                left:0,
                top:0
            }
        },{
            name:"Ronaldo",
            cn:"罗纳尔多",
            nickname:"大罗",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:49523200,
            _salary:["49","523","200"],
            words1:"无论外界如何质疑<br/>"+
                "胸怀坚定的信仰<br/>"+
                "露出灿烂的微笑",
            outer:{
                left:0,
                top:rem(-128)
            }
        },{
            name:"Liyi",
            cn:"李毅",
            nickname:"大帝",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:1000000,
            _salary:["1","000","000"],
            words1:"相信榜样的力量，<br/>"+
                "你正是因为他的存在而更强。",
            outer:{
                width:rem(1128),
                height:rem(947),
                left:rem(-478),
                top:0
            }
        },{
            name:"Maradona",
            cn:"马拉多纳",
            nickname:"老马",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:33085500,
            _salary:["33","085","500"],
            words1:"人无法打败时间<br/>"+
                "但能留下站在<br/>"+
                "时间之上的作品",
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
        }/*,{
            elem:'end-layer',
            top:0,
            height:0
        }*/],
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
            var salary = this.star[this.starActive].salary,
                num = salary / 100000000
            if(num < 1) {
                return Math.floor(salary / 10000)
            }else{
                return (salary / 100000000).toFixed(1)
            }
        },
        getStarSalaryUnit:function(){
            var salary = this.star[this.starActive].salary,
            num = salary / 100000000
            if(num < 1) {
                return '万'
            }else{
                return '亿'
            }
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
                hours = Math.ceil(1232600 / ( salary / 200 / 24 ))
            return hours
        },
        getSelfCar:function(){
            var salary = this.pk.salary,
                days = Math.ceil(1232600 / ( salary * 12 / 200 ))
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
            var salary = this.star[this.starActive].salary / 200
            return Math.ceil(1000 * 10000 / salary)
        },
        getSelfHouse:function(){
            var salary = this.pk.salary * 12
            return Math.ceil(1000 * 10000 / salary)
        },
        getSelfStarMoney:function(){
            var star = this.star[this.starActive].salary,
                self = this.pk.salary
            return Math.ceil(star / (self * 12))
        },
        getSSFrom:function(){
            return this.getSelfStarMoney + 2018
        },
    },
    mounted:function(){
        var self = this;
        if(this.isWeiXin()){
            this.getUserWeixinData()
            // this.weixinAuth()
        }
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
        // 本地测试
        // this.showResult()
    },
    methods:{
        isWeiXin:function() {
            var ua = window.navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                return true;
            } else {
                return false;
            }
        },
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
                    self.setRandomArr()
                    self.activePage = 2
                }
            },500)
            datas.imgUrl = this.host + "images/share/"+this.star[this.starActive].name+'.jpg'
            datas.title = "世界杯球星擂台，"+this.pk.name+"选择和"+this.star[this.starActive].cn+"硬杠"
            if(share){
                share(datas);
            }
        },
        startPK:function(){
            var value = parseFloat(this.pk.salary)
            if(value){
                var self = this
                // 限制文字，开始滚动
                this.scrollStatus = true
                this.active_index = []
                setTimeout(function(){
                    self.type = "out"
                    self.endIndex = Math.floor(Math.random() * 3)
                    self.showResult()
                },3000)
            }else{
                // if(!this.pk.name){
                    // this.pk.nstatus = true
                /*}else */if(this.pk.salary && !value){
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
                        self.ctx.drawImage(self.loadedImgs[self.starActive+2],0,0,750,1493,-48,-110,662,1317)
                    // }else{
                        // self.ctx.drawImage(self.loadedImgs[self.starActive+2],0,0)
                    // }
                    self.ctx.drawImage(self.loadedImgs[1],1,838)
                    self.drawContent()
                }else{
                    self.drawStatus = true
                }
            },500)
        },
        setRandomArr:function(){
            var arr = [],
                brr = [0,1,2,3,4],
                i = 0,
                len = 3,
                temp = -1
            for(i = 0; i < len; i++){
                temp = Math.floor(Math.random() * brr.length)
                arr.push(brr[temp])
                brr.splice(temp,1)
            }
            this.randomArr = arr
        },
        saveImage:function(){
            this.saveStatus = true
        },
        closeSave:function(){
            this.saveStatus = false
        },
        shareLink:function(){
            this.shareStatus = true
        },
        closeShare:function(){
            this.shareStatus = false
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
                self.setRandomArr()
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
                        if(self.drawStatus){
                            // if(self.star[self.starActive].words3){
                                self.ctx.drawImage(self.loadedImgs[self.starActive+2],0,0,750,1493,-48,-110,662,1317)
                            // }else{
                                // self.ctx.drawImage(self.loadedImgs[self.starActive+2],0,0)
                            // }
                            self.ctx.drawImage(self.loadedImgs[1],1,838)
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
            }
        },
        drawContent:function(){
            var self = this,
                star = this.star[this.starActive],
                starName = star.cn,
                salary = this.getStarSalary
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

            this.ctx.fillStyle = "#ffffff"
            this.ctx.font = "48px normal"
            this.ctx.fillText(starName,63,71+36)
            var sw = this.ctx.measureText(starName).width
            
            this.ctx.font = "32px normal"
            this.ctx.fillText(" 年薪 ",63+sw,71+38)
            var nx = this.ctx.measureText(" 年薪 ").width

            this.ctx.fillStyle = "#fee53e"
            this.ctx.font = "53px bold DINCondBlack"
            this.ctx.fillText(salary,63+sw+nx,71+40)
            var sa = this.ctx.measureText(salary).width
            this.ctx.font = "32px normal"
            this.ctx.fillText(" "+this.getStarSalaryUnit,63+sw+nx+sa,71+38)

            this.ctx.fillStyle = "#ffffff"
            this.ctx.beginPath()
            this.ctx.lineWidth = 1
            this.ctx.moveTo(63,155)
            this.ctx.lineTo(63+23,155)
            this.ctx.stroke()
            this.ctx.closePath()

            this['getStarOneSalry'+this.endIndex](starName,star)

            // 绘制完毕，导出图片地址
            setTimeout(function(){
                self.url = self.canvas.toDataURL("image/png")
            },500)
        },
        getStarOneSalry0:function(starName,star){
            var sw = 0,
                nx = 0,
                lw = 0

            this.ctx.font = "38px normal"
            this.ctx.fillStyle = "#ffffff"
            this.ctx.fillText(star.nickname+"工作 ",63,203+26)
            sw = this.ctx.measureText(star.nickname+"工作 ").width
            this.ctx.font = "53px bold DINCondBlack"
            this.ctx.fillStyle = "#fee53e"
            this.ctx.fillText(this.getStarCar,63+sw,203+28)
            nx = this.ctx.measureText(this.getStarCar).width
            this.ctx.font = "38px normal"
            this.ctx.fillText("小时",63+sw+nx,203+26)

            this.ctx.fillStyle = "#ffffff"
            this.ctx.fillText("可以买",63,268+26)
            sw = this.ctx.measureText("可以买").width
            this.ctx.fillStyle = "#fee53e"
            this.ctx.fillText(" 1 辆",63+sw,268+26)
            nx = this.ctx.measureText(" 1 辆").width
            this.ctx.fillStyle = "#ffffff"
            this.ctx.fillText("特斯拉",63+sw+nx,268+26)
              
            this.ctx.fillStyle = "#fee53e"
            this.ctx.fillText(this.pk.name,63,360+26)
            sw = this.ctx.measureText(this.pk.name).width
            this.ctx.fillStyle = "#ffffff"
            this.ctx.fillText("需要工作 ",63+sw,360+26)
            nx = this.ctx.measureText("需要工作 ").width
            this.ctx.font = "53px bold DINCondBlack"
            this.ctx.fillStyle = "#fee53e"
            this.ctx.fillText(this.getSelfCar,63+sw+nx,360+28)
            lw = this.ctx.measureText(this.getSelfCar).width
            this.ctx.font = "38px normal"
            this.ctx.fillText(" 天",63+sw+nx+lw,360+26)

            this.ctx.fillStyle = "#ffffff"
            this.ctx.fillText("才能买同款",63,420+26)

            this.ctx.fillStyle = "#ffffff"
            this.ctx.beginPath()
            this.ctx.moveTo(63+3,599)
            this.ctx.lineTo(63+3+22,599)
            this.ctx.stroke()
            this.ctx.closePath()

            this.ctx.font = "16px normal"
            var arr = star.words1.split('<br/>'),
                start = 640,
                curr = 0,
                i = 0
            for(i = 0; i < arr.length; i++){
                if(arr[i]){
                    this.ctx.fillText(arr[i],63,start+16+32*curr)
                    curr++
                }
            }
        },
        getStarOneSalry1:function(starName,star){
            var sw = 0,
                nx = 0,
                lw = 0

            this.ctx.font = "38px normal"
            this.ctx.fillStyle = "#ffffff"
            this.ctx.fillText("买一套",63,203+26)
            sw = this.ctx.measureText("买一套").width
            this.ctx.fillStyle = "#fee53e"
            this.ctx.fillText("100平",63+sw,203+26)
            nx = this.ctx.measureText("100平").width
            this.ctx.fillStyle = "#ffffff"
            this.ctx.fillText("上地学区房",63+sw+nx,203+26)

            this.ctx.fillText(star.nickname+"需要工作",63,268+26)
            sw = this.ctx.measureText(star.nickname+"需要工作").width
            this.ctx.font = "53px bold DINCondBlack"
            this.ctx.fillStyle = "#fee53e"
            this.ctx.fillText(this.getStarHouse,63+sw,268+28)
            nx = this.ctx.measureText(this.getStarHouse).width
            this.ctx.font = "38px normal"
            this.ctx.fillText("天",63+sw+nx,268+26)
            
            this.ctx.fillText(this.pk.name,63,360+26)
            sw = this.ctx.measureText(this.pk.name).width
            this.ctx.fillStyle = "#ffffff"
            this.ctx.fillText("需要奋斗",63+sw,360+26)
            nx = this.ctx.measureText("需要奋斗").width
            this.ctx.font = "53px bold DINCondBlack"
            this.ctx.fillStyle = "#fee53e"
            this.ctx.fillText(this.getSelfHouse,63+sw+nx,360+28)
            lw = this.ctx.measureText(this.getSelfHouse).width
            this.ctx.font = "38px normal"
            this.ctx.fillText("年",63+sw+nx+lw,360+26)

            this.ctx.fillStyle = "#ffffff"
            this.ctx.beginPath()
            this.ctx.moveTo(63+3,599)
            this.ctx.lineTo(63+3+22,599)
            this.ctx.stroke()
            this.ctx.closePath()

            this.ctx.font = "16px normal"
            var arr = star.words1.split('<br/>'),
                start = 640,
                curr = 0,
                i = 0
            for(i = 0; i < arr.length; i++){
                if(arr[i]){
                    this.ctx.fillText(arr[i],63,start+16+32*curr)
                    curr++
                }
            }
        },
        getStarOneSalry2:function(starName,star){
            var sw = 0,
                nx = 0

            this.ctx.font = "38px normal"
            this.ctx.fillStyle = "#ffffff"
            this.ctx.fillText("要挣到"+star.nickname,63,203+26)
            sw = this.ctx.measureText("要挣到"+star.nickname).width
            this.ctx.fillStyle = "#fee53e"
            this.ctx.fillText("一年",63+sw,203+26)
            nx = this.ctx.measureText("一年").width
            this.ctx.fillStyle = "#ffffff"
            this.ctx.fillText("的工资",63+sw+nx,203+26)

            this.ctx.fillStyle = "#fee53e"
            this.ctx.fillText(this.pk.name,63,268+26)
            sw = this.ctx.measureText(this.pk.name).width
            this.ctx.fillStyle = "#ffffff"
            this.ctx.fillText("需要",63+sw,268+26)
            
            this.ctx.fillText("从现在开始再工作 ",63,337+26)
            sw = this.ctx.measureText("从现在开始再工作 ").width
            this.ctx.font = "53px bold DINCondBlack"
            this.ctx.fillStyle = "#fee53e"
            this.ctx.fillText(this.getSelfStarMoney,63+sw,337+28)
            nx = this.ctx.measureText(this.getSelfStarMoney).width
            this.ctx.font = "38px normal"
            this.ctx.fillText(" 年",63+sw+nx,337+26)

            this.ctx.fillStyle = "#ffffff"
            this.ctx.fillText("一直到 ",63,404+26)
            sw = this.ctx.measureText("一直到 ").width
            this.ctx.font = "53px bold DINCondBlack"
            this.ctx.fillStyle = "#fee53e"
            this.ctx.fillText(this.getSSFrom,63+sw,404+28)
            nx = this.ctx.measureText(this.getSSFrom).width
            this.ctx.font = "38px normal"
            this.ctx.fillText(" 年",63+sw+nx,404+26)

            this.ctx.fillStyle = "#ffffff"
            this.ctx.beginPath()
            this.ctx.moveTo(63+3,599)
            this.ctx.lineTo(63+3+22,599)
            this.ctx.stroke()
            this.ctx.closePath()

            this.ctx.font = "16px normal"
            var arr = star.words1.split('<br/>'),
                start = 640,
                curr = 0,
                i = 0
            for(i = 0; i < arr.length; i++){
                if(arr[i]){
                    this.ctx.fillText(arr[i],63,start+16+32*curr)
                    curr++
                }
            }
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
        getUserWeixinData:function(){
            var self = this
            $.ajax({
                type: 'get',
                url: 'https://activity.lagou.com/activityapi/weixin/authUserDetail',
                success: function(data) {
                    if (data.state == 200 && data.content) { // 已登录
                        self.pk.name = data.content.nickname
                    } else{ // 未登录
                        var href = window.location.href
                            arr = href.split('?'),
                            param = getQueryString('times')
                        if(arr.length > 1){
                            href += '&times=1'
                        }else{
                            href += '?times=1'
                        }
                        if(!param){
                            window.location.href = 'https://activity.lagou.com/activityapi/weixin/userInfoAuth.html?returnUrl=' + encodeURIComponent(href); 
                        }
                    }
                },
                error: function(error) {
                    console.log(error.message);
                }
            });
        },
        weixinAuth:function(){
            $.ajax({
                type: 'get',
                url: 'https://activity.lagou.com/activityapi/weixin/hasOpenId',
                success: function(data) {
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