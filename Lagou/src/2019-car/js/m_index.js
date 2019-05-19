(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
    "use strict";
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    function noop(){}
    // Vue.config.errorHandler = function(err, vm, info){
    //     alert(err);
    // }
    // 3: 报名成功，展示公司页
    // test
    var initialNow = 0,
        initialLast = 0,
        mode = "production",// "development",//"production",
        music = document.getElementById("music");
    // var loadingHost = '';
    var loadingHost = 'https://www.lgstatic.com/activity-rsrc/dist/2018-night/';
    // 音乐
    // if(mode != "development"){
        backgroundMusic(document.getElementById("music"));
    // }
    
    Vue.config.errorHandler = function (err, vm, info) {
        console.log(err);
    }
    app = new Vue({
        el:"#app",
        data:{
            // test
            mode:mode,// "development",//"production",
            lg:"1k68",
            activePage:initialNow,
            startMoving:false,
            pageStatus:true,
            heightStatus:0,
            tempDelay:0,
            fontSize:16,
            shareStatus:false,
            hasShowedShare:false,
            price_txt:"¥ ? 9 限时抢票",
            page0:{
                status:'in',
                in:{
                    
                }
            },
            audioPosition:[2000,5000,8000,10000],
            landscape:false,
            lastAudio:null,
            // answers:[0,1,2,0,1],
            answers:[-1,-1,-1,-1,-1],
            all:[
                [2,4,1],
                [5,2,3],
                [5,4,1],
                [3,2,1],
                [5,3,4]
            ],
            results:[0,0,0,0,0],
            questions:[0, 4320, 9500, 14880, 19920],
            submitStatus:false,
            submitClass:'',
            isclick: false,
            myresult: -1,
            // 绘制
            loaded:0,
            loadedImgs:[],
            imgs:[
                "images/canvas-bg.jpeg",
                "images/canvas-01.png",
                "images/canvas-02.png",
                "images/canvas-03.png",
                "images/canvas-04.png",
                "images/canvas-05.png",
                "images/canvas-06.png",
                "images/canvas-07.png" //, // 7

                // "images/result-car-01.png", // 8
                // "images/result-keywords-01.png",
                // "images/result-ratio-01.png"

                // "images/result-car-02.png",
                // "images/result-keywords-02.png",
                // "images/result-ratio-02.png"
            ],
            drawStatus:false,
            canvas:null,
            ctx:null,
            url:'',
            changeStatus: false,
            moveLeft: 0,
            showInput: false,
            showTips: false,
            nickname:'',
            tipsContent:'大佬请留名',
            ratioSize:[
                {w:422,h:399,l:555},
                {w:451,h:390,l:576},
                {w:422,h:399,l:555},
                {w:433,h:409,l:576},
                {w:461,h:409,l:576},
                {w:431,h:424,l:576},
                {w:461,h:409,l:576},
                {w:464,h:443,l:576},
                {w:426,h:429,l:576},
                {w:457,h:412,l:576}, // 9
                {w:418,h:424,l:576},
                {w:423,h:425,l:576},
                {w:457,h:419,l:576},
                {w:422,h:399,l:555},
                {w:422,h:399,l:555},
                {w:463,h:361,l:576}  // 15
            ],
            moveText:'滑动测试',
            moveStatus:true,
            forgot: false
        },
        computed: {
            getMoveLeft:function(){
                var page0 = document.getElementById('page0');
                var total = getRem(27100)
                var one = Math.max(GC.w, GC.h)
                var obj = {}, name = ''

                if(this.moveLeft > getRem(19912) - one){  // 隐藏
                    this.moveStatus = false
                }else{
                    this.moveStatus = true
                }
                if(this.moveLeft > getRem(5700)) {
                    this.moveText = '滑动继续测试'
                }else {
                    this.moveText = '滑动测试'
                }
                if(this.landscape){
                    name = 'left'
                }else {
                    name = 'top'
                }
                obj[name] = (getRem(131)+ one * this.moveLeft / total) + 'px'
                return obj
            },
            getIndex:function(){
                return '00'.slice(0,2-(this.myresult+'').length)+this.myresult
            },
            getNameSize:function() {
                var re = /([\u4E00-\u9FA5]|[\uFE30-\uFFA0])/g,
                    tempStr = this.nickname.replace(re,"çç"),
                    fs = 66.5;
                if(tempStr.length > 9) {
                    fs = 50
                }
                return fs
            }
        },
        created:function(){
            // var script = document.createElement('script');
            // script.onload = function(){
            //     new VConsole()
            // }
            // script.src = 'https://cdn.jsdelivr.net/npm/vconsole'
            // document.body.appendChild(script);
        },
        mounted:function(){
            this.resetData();
            this.initScrollEvent()
            this.initCanvas()
            this.loadImages();

            // this.myresult = 1
            // this.nickname = '习近平'
            // this.checkInputEvent();
            // document.addEventListener('touchstart',function(e){
            //     e.stopPropagation();
            //     e.preventDefault();
            // },{
            //     capture:false,
            //     passive:false
            // })
            // document.addEventListener('touchmove',function(e){
            //     e.stopPropagation();
            //     e.preventDefault();
            // },{
            //     capture:false,
            //     passive:false
            // })
            // 播放音乐
            // document.getElementById('app').addEventListener('touchstart',this.pageScroll,{
            //     capture:false,
            //     passive:false
            // });
            document.body.addEventListener('focusout', function() { 
                window.scrollTo(0,0);
            });
        },
        methods:{
            noop:function(){},
            setDataCount:function(count){
                return '0000'.slice((count+'').length)+count
            },
            setRem:setRem,
            getRem:getRem,
            getDelayTime:getDelayTime,
            resetData:function(){
                var i = 0;
                // 重置audio位置
                // for(i = 0; i < this.audioPosition.length; i++){
                //     this.audioPosition[i] = this.getRem(this.audioPosition[i])
                // }
                this.fontSize = parseFloat(document.documentElement.style.fontSize) || 16;
                var landscape =  false;
                try{
                    landscape = window.matchMedia("(orientation: landscape)").matches;
                } catch(e){}
                this.landscape = landscape;
            },
            pageMoveEvent: function(){
                var outer = document.getElementById('pages__outer');
                this.moveLeft = this.landscape ? outer.scrollLeft : outer.scrollTop;
            },
            setAnswerEvent:function(pindex,index){
                var arr = this.answers.slice(0),
                    obj = {};
                arr[pindex] = index;
                this.results[pindex] = this.all[pindex][index]
                this.answers = arr;

                if(this.submitStatus){
                    var status = this.getNoneSelect();
                    if(status == -1){
                        this.showResult();
                    }else {
                        this.showForgotTips(status);
                    }
                }
            },
            submitEvent:function(){
                console.log('***分割线*************************');
                console.log('isclick: '+this.isclick);
                if(!this.isclick){
                    var len = this.answers.length,
                        _this = this,
                        obj = {},
                        status = this.getNoneSelect(),
                        i = 0;
                    console.log("answers: ",this.answers);
                    this.submitStatus = true;
                    this.submitClass = 'submit-zoom'
                    this.isclick = true;
                    setTimeout(function(){
                        console.log("按钮动画结束");
                        _this.submitClass = ''
                        if(status == -1){
                            console.log("都已选择，提交");
                            // 都已选择，提交
                            _this.showResult();
                            // _this.changeStatus = true;
                        }else{
                            _this.showForgotTips(status);
                        }
                        _this.isclick = false;
                    },500)
                }
            },
            showForgotTips:function(status){
                var obj = {},
                    _this = this;
                obj[this.landscape ? 'scrollLeft' : 'scrollTop'] = this.getRem(this.questions[status])
                $('#pages__outer').animate(obj,500,function(){
                    _this.forgot = true;
                    setTimeout(function(){
                        _this.forgot = false;
                    },2000)
                });
            },
            getNoneSelect:function(){
                var len = this.answers.length,
                    status = -1,
                    i = 0;
                for(i = 0; i < len; i++){
                    if(this.answers[i] == -1){
                        status = i;
                        break;
                    }
                }
                return status
            },
            showResult:function(){
                var arr = this.results,
                    str = arr.join(''),
                    brr = [],
                    temp = null,
                    res = 0,
                    i = 0;
                // 两个 两个相同
                for(i = 1; i <= 5; i++){
                    temp = str.match(new RegExp('('+i+')','g'));
                    if(temp){
                        if(temp.length > 2){
                            brr.splice(i,1,i)
                            break
                        }else if(temp.length == 2){
                            brr.push(i)
                        }
                    }
                }
                if(brr.length == 2){
                    // 两个相同
                    if(brr[0] == 1){ // 6\7\8\9
                        res = 4 + brr[1];
                    }else if(brr[0] == 2){
                        if(brr[1] == 3){
                            res = 10
                        }else if(brr[1] == 4){
                            res = 11
                        }else if(brr[1] == 5){
                            res = [2, 15][Math.floor(Math.random() * 2)]
                        }
                    } else if(brr[0] == 3){
                        if(brr[1] == 4){
                            res = 12
                        }else if(brr[1] == 5){
                            res = [2, 16][Math.floor(Math.random() * 2)]
                        }
                    }else if(brr[0] == 4){
                        if(brr[1] == 5){
                            res = 13
                        }
                    }
                }else if(brr.length == 1){
                    res = brr[0];
                }else {
                    res = 14;
                }
                console.log("myresult: "+res);
                this.myresult = res;
                this.showInput = true;
            },
            checkInputEvent:function(){
                console.log("点击查看结果："+this.nickname);
                if(this.nickname){
                    var re = /([\u4E00-\u9FA5]|[\uFE30-\uFFA0])/g,
                        tempStr = this.nickname.replace(re,"çç");
                    if(tempStr.length > 12){
                        this.showTips = true;  
                        this.tipsContent =  '最多六个字哦'
                    }else {
                        this.checkNickname()
                    }
                }else {
                    this.showTips = true;  
                    this.tipsContent =  '大佬请留名'
                }
            },
            closeTipBox:function(){
                this.showTips = false;  
            },
            drawResult:function(){
                this.drawStatus = true;
                console.log("drawResult: "+this.loaded +" , "+this.imgs.length);
                if(this.loaded == this.imgs.length) {
                    this.startDraw();
                }
            },
            startDraw:function(){
                var self = this;
                // this.ctx.fillStyle = "#333"
                // this.ctx.font = "40px normal"
                // this.ctx.fillText('稳'+this.myresult,0,40+10)
                
                // this.ctx.fillStyle = "#666"
                // this.ctx.font = "30px normal"
                // this.ctx.fillText('你喜欢专业领域内的挑战',0,50+30+7)
                // this.ctx.fillText('挫折越大，',0,50+45+30+7)
                // this.ctx.fillText('越能激发你的潜能',0,50+45*2+30+7)
                
                setTimeout(function(){
                    $('html,body,.page1__center,.page1,.pages').css({
                        'scrollTop':'0'
                    });
                    window.scrollTo(0,0);
                },100);
                console.log("setPortraitFontSize");
                setPortraitFontSize();
                this.resetData();
                console.log("setPortraitFontSize end, fontSize: "+this.fontSize);
                setTimeout(function(){
                    console.log("show result");
                    self.activePage = 1;
                },500)
                this.loadDynamicImage(function(resultList){
                    console.log(" start draw text");
                    var fs = self.getNameSize
                    self.ctx.fillStyle = "#000"
                    self.ctx.font = fs + "px normal"
                    self.ctx.textAlign="center";
                    self.ctx.fillText(self.nickname,320,118+fs+(fs == 50 ? 18 : 0))
                    console.log(" start draw img");
                    self.ctx.drawImage(resultList[0],0,0,1080,1920,0,0,1080,1920);  // car
                    self.ctx.drawImage(resultList[1],118,266);
                    self.ctx.drawImage(resultList[2],self.ratioSize[self.myresult-1].l,290);
                    // 绘制完毕，导出图片地址
                    setTimeout(function(){
                        console.log("output result");
                        self.url = self.canvas.toDataURL("image/png");
                    },500)
                })
            },
            loadDynamicImage:function(callback){
                var index = this.getIndex
                var imgList = [
                    "images/result-car-"+index+".png",
                    "images/result-keywords-"+index+".png",
                    "images/result-ratio-"+index+".png"
                ]
                var resultList = [],
                    dload = 0
                var i = 0
                console.log("loadDynamicImage");
                for(i = 0; i < imgList.length; i++){
                    (function(){
                        var img = new Image();
                        img.onload = function(){
                            dload++
                            if(dload == imgList.length){
                                console.log("loadDynamicImage success");
                                callback(resultList)
                            }
                        }
                        img.onerror = function(){
                            dload++
                            if(dload == imgList.length){
                                console.log("loadDynamicImage some faild");
                                callback(resultList)
                            }
                        }
                        img.src = imgList[i]
                        resultList.push(img)
                    })(i);
                }
            },
            initCanvas:function(){
                var width = 1080,
                    height = 1920,
                    self = this

                this.canvas = document.getElementById("canvas") 
                this.ctx = this.canvas.getContext("2d")
                this.canvas.width = width
                this.canvas.height = height

                this.ctx.fillStyle = "#fff"
                this.ctx.rect(0,0,this.canvas.width,this.canvas.height)
                this.ctx.fill()
            },
            loadImages:function(){
                var self = this;
                this.imgs.forEach(function(url){
                    var img = new Image()
                    img.onload = function(){
                        self.loaded++
                        if(self.loaded == self.imgs.length){
                            self.ctx.drawImage(self.loadedImgs[0],0,0,1080,1920,0,0,1080,1920); // bg
                            self.ctx.drawImage(self.loadedImgs[1],112,108);
                            self.ctx.drawImage(self.loadedImgs[2],0,0,1080,1920,0,0,1080,1920); // box
                            self.ctx.drawImage(self.loadedImgs[3],-44,1790);
                            self.ctx.drawImage(self.loadedImgs[4],635,1702);
                            self.ctx.drawImage(self.loadedImgs[5],990,1436);
                            self.ctx.drawImage(self.loadedImgs[6],0,0,1129,1255,7,523,1129,1255);  // line
                            self.ctx.drawImage(self.loadedImgs[7],714,45);
                            if(self.drawStatus){
                                self.startDraw()
                                self.drawStatus = false
                            }
                        }
                    }
                    img.src = url,
                    self.loadedImgs.push(img)
                })
            },
            initScrollEvent:function(){

            },
            pageScroll:function(){
                var left = this.landscape ? document.getElementById('pages__outer').scrollLeft : document.getElementById('pages__outer').scrollTop,
                    audio = null,
                    i = 0;
                for(i = this.audioPosition.length - 1; i >= 0; i--){
                    if(left >= this.audioPosition[i]) {
                        audio = document.getElementById('audio'+i);
                        if(audio.paused && this.lastAudio != audio){
                            audio.play();
                            if(this.lastAudio){
                                this.lastAudio.pause();
                            }
                            this.lastAudio = audio;
                        }
                        break;
                    }
                }
            },
            playAudio:playAudio,
            loopMusictvPlay:function(){
                var self = this,
                    musictv = document.getElementById('music-tv'),
                    // tvbg = document.getElementById('music-bg'),
                    current = 0,
                    arr = [0,0,0,0],
                    now = 0;
 
                clearTimeout(this.page3.tvtimer);
                this.page3.tvtimer = null;
                this.page3.tvtimer = setTimeout(function(){
                    current = self.page3.activeCard;
                    now = self.page3.loopCard[current];
                    if(now == 2){
                        now = 0;
                    }else{
                        now++;
                        // if(!self.hasShowedShare && now == 2 && current == 3 && !self.shareStatus){
                        //     self.shareStatus = true;
                        //     self.hasShowedShare = true;
                        // }
                    }
                    arr[current] = now;
                    self.page3.loopCard = arr; 
                    self.page3.showNoise = true;
                    playAudio(musictv,function(){
                        // music.volume = 0.2;
                        // if(music.volume != 0.2) {
                        //     music.pause();
                        // }
                    });
                    setTimeout(function(){
                        musictv.pause();
                        if(music.paused){
                            playAudio(music,function(){},true);
                        }else{
                            // music.volume = 1;
                        }
                    },600);
                    setTimeout(function(){
                        self.page3.showNoise = false;
                    },1500);
                    self.loopMusictvPlay();
                },3000);
            },
            cancelMusictvPlay:function(){
                clearTimeout(this.page3.tvtimer);
                this.page3.tvtimer = null;
            },
            checkNickname:function(){
                var self = this,
                    key = 'qEA9Tc3UmzzO60KUFMa7vvhfIqBkAYZQ';
                $.ajax({
                    url:'https://api.lagou.com/sensitive/check',
                    type:'get',
                    data:{
                        key:key,
                        securityCode:hex_md5(key+this.nickname),//key+ word  MD5计算结果
                        word:this.nickname
                    },
                    success:function(data){
                        if(data.code == 1){ // 成功
                            // true--包含敏感词  false--不包含敏感词
                            if(data.content){
                                self.showTips = true;
                                self.tipsContent = '这好像不是你的名字哦，换一个吧'
                            }else {
                                self.showInput = false;
                                self.drawResult(); 
                            }
                        }else {
                            self.showTips = true;
                            self.tipsContent = '网络错误，请重试'
                        }
                    },
                    error:function(error){
                        console.log(error)
                        self.showInput = false;
                        self.drawResult(); 
                    }
                })
            }
        }
    })
    },{}]},{},[1]);
    
    function postEncodingID(data) {
        var _PID = "",
        _PNO = "",
        _PV = 0,
        _PCONTENTID = "",
        _PRANDOM = "",
        _GAMETHOD = "",
        _GAMSGTYPE = "",
        _GATJ = "",
        _GATJVAL = 0,
        v = 1,
        t = "a",
        dl = encodeURIComponent(window.location.href),
        dr = document.referrer,
        dt = document.title;
        var _ELS = document;
        var arr_GATJ = [];
        try {
            _PID = data["data-lg-tj-id"] || "idnull"
            _PNO = data["data-lg-tj-no"] || "idnull"
            _PCONTENTID = data["data-lg-tj-cid"] || "idnull"
            _PRANDOM = getRandom()
            _GAMETHOD = data["data-lg-gatj-method"] || "send"
            _GAMSGTYPE = data["data-lg-gatj-msgtype"] || "event"
            _GATJ = data["data-lg-gatj-msg"] || ""
            _GATJVAL = parseInt(data["data-lg-gatj-val"] || 0)
            if (_GATJ && typeof ga == "function") {
                arr_GATJ.push(_GAMETHOD, _GAMSGTYPE);
                arr_GATJ = arr_GATJ.concat(_GATJ.split(",")); !! _GATJVAL && arr_GATJ.push(_GATJVAL);
                ga.apply(null, arr_GATJ)
            }
            if (_PID != "idnull") {
                var _params = {};
                _params.v = v;
                _params.t = 'div';//target.tagName.toLocaleLowerCase();
                _params.dl = dl;  
                _params.dr = dr;
                _params.dt = dt;
                _params.aid = [_PID, _PNO, _PV, _PCONTENTID, _PRANDOM].join("_");
                imgGET(_params)
            } else {
                return
            }
        } catch(e) {}
    }
    function imgGET(params) {
        var REMOTE = {
            server: "https://a.lagou.com/track"
        };
        var _img = new Image();
        paramsArr = [];
        for (var item in params) {
            if (typeof item == "string") {
                paramsArr.push(item + "=" + params[item])
            }
        }
        _img.src = REMOTE.server + "?" + paramsArr.join("&")
    }
    function getRandom(digit) {
        window._CASH_RANDOM ? "": window._CASH_RANDOM = {};
        var _cash_random = window._CASH_RANDOM || {},
        _digit = digit || 4,
        _random = getRandomSimple();
        while (_cash_random[_random]) {
            _random = getRandomSimple();
            if (!_cash_random[_random]) {
                break
            }
        }
        window._CASH_RANDOM[_random] = _random;
        return _random;
        function getRandomSimple() {
            var random = "";
            for (var i = 0; i < _digit; i++) {
                var r = Math.floor(Math.random() * 10);
                random += r.toString()
            }
            return random.toString()
        }
    }