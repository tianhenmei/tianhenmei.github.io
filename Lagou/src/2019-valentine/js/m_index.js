"use strict";
var app = null;
app = new Vue({
    el:"#app",
    data:{
        fontSize: 16,
        lastPage: 0,
        activePage: 0,
        companyName: '',
        load:0,
        loadedImgs:[],
        imgs: [
            'images/page2-bg.png',
            'images/page2-decoration.png',
            'images/page2-ercode.png',
            'images/page2-input.png', // 3
            'images/page2-logo.png',
            'images/page2-title-01.png', // 5
            'images/page2-title-02.png',
            'images/page2-title-03.png',
            'images/page2-subtitle-01.png', // 8
            'images/page2-subtitle-02.png',
            'images/page2-subtitle-03.png'
        ],
        canvas: null,
        ctx: null,
        drawStatus: false,
        saveStatus: false,
        url: '',
        showTips: false,
        pageChanging: false,
        activeTitle: 0,
        activeSubtitle: 0,
        touchstart: 0,
        showImage: false,
        saveTips: '长按保存图片',

        heightStatus: 0,
        shortHeight: 0,
        moreWidth: 0,
        pageStatus:true,
        flipStatus:false,  // 翻页状态
        from:'',
        totalDay:0,
        isiPhone:false,
        testStatus:false
    },
    created:function(){
        var script = document.createElement('script')
        script.src = '//cdn.jsdelivr.net/npm/vconsole'
        script.onload = function(){
            new VConsole()
        }
        document.body.appendChild(script)
    },
    mounted:function(){
        // this.setDay();
        this.isiPhone = this.ismobile()  == 'iphone' ? true : false;
        this.from = appfrom// getQueryString('xand');
        // if (this.from == 'ios' || this.from == 'android') {
        //     this.saveTips = '截图保存或微信打开长按保存'
        // }
        // if(getQueryString('xtest')){
        //     this.testStatus = true
        // }
        var rightSize = parseFloat((RC.w / RC.h).toFixed(1)),
            currentSize = parseFloat((GC.w / GC.h).toFixed(1));
        this.fontSize = parseFloat(document.getElementsByTagName("html")[0].style.fontSize)
        console.log(rightSize+', '+currentSize)
        if(rightSize > currentSize){
            this.heightStatus = Math.floor(RC.w / GC.w * GC.h - RC.h);
        }else{
            this.shortHeight = Math.floor(RC.h - RC.w / GC.w * GC.h);
            this.moreWidth = Math.floor(RC.h / GC.h * GC.w - RC.w);
        }
        this.initCanvas()
    },
    methods:{
        setRem:function(value){
            return value / (1080 / 16)+'rem';
        },
        getFitTop:function(def,ratio,max,limit){
            return this.setRem(def+this.shortHeight * ratio)
            // var n = this.heightStatus * ratio;
            // n = (max && n > max ? max : n) + (limit ? limit : 0);
            // return this.setRem(def+n);
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
        /***********************************
         * 显示与隐藏
         */
        getRem:function(n){
            return n/(750/16) +'rem'
        },
        getDelayTime:function(start,index,gap){
            var current = start + gap * index,
                s = Math.floor(current / 10),
                l = current % 10;
            if(s == 0){
                return '0-'+l;
            }
            return s + '-' + l
        },
        btnClickEvent:function() {
            var self = this
            this.pageChanging = true
            this.lastPage = 0
            this.activePage = 1
            setTimeout(function() {
                self.pageChanging = false
            }, 500)
        },
        showSavePage:function() {
            var self = this
            if (this.showTips) {
                return
            }
            if (this.activePage === 2) {
                return
            }
            if (this.companyName) {
                var re = /[\u4E00-\u9FA5]/g
                var value = this.companyName.replace(re,'çç')
                var totalSize = 22
                if (value.length > totalSize) {
                    this.companyName = this.companyName.slice(0, (value.slice(0, totalSize-2).replace(/(çç)/g, 'ç')).length) + '...'
                }
                this.activePage = 2
                this.activeTitle = Math.floor(Math.random() * 3)
                this.activeSubtitle = Math.floor(Math.random() * 3)
            } else {
                this.showTips = true
                setTimeout(function() {
                    self.showTips = false
                }, 2000)
            }
        },
        onblurEvent: function(){
            // var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0
            setTimeout(function(){
                window.scrollTo(0, 0)
            }, 100)
        },
        changeTextEvent:function(){
            this.activeTitle = Math.floor(Math.random() * 3)
            this.activeSubtitle = Math.floor(Math.random() * 3)
        },
        toSaveEvent:function(){
            this.clearCanvas()
            this.drawStatus = true
            if(this.load == this.imgs.length){
                this.setDefaultCanvas()
            }
        },
        clearCanvas:function(){
            this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

            this.ctx.fillStyle = "#fff"
            this.ctx.rect(0,0,this.canvas.width,this.canvas.height)
            this.ctx.fill()

            // if(this.load == this.imgs.length){
            //     this.setDefaultCanvas()
            // }
        },
        setDefaultCanvas:function(){
            this.ctx.drawImage(this.loadedImgs[0], -114, -1002)
            this.ctx.drawImage(this.loadedImgs[1], -50, 280)
            this.ctx.drawImage(this.loadedImgs[2], 99, 1473)
            this.ctx.drawImage(this.loadedImgs[4], 832, 0)
            if(this.drawStatus){
                this.ctx.drawImage(this.loadedImgs[5+this.activeTitle], 102, 193)
                this.ctx.drawImage(this.loadedImgs[8+this.activeSubtitle], 102, 652)
                this.drawContent()
                this.drawStatus = false
            }
        },
        initCanvas:function(){
            var width = 1080,
                height = 1956,
                self = this

            this.canvas = this.$refs['canvas']
            this.ctx = this.canvas.getContext("2d")
            this.canvas.width = width
            this.canvas.height = height

            this.ctx.fillStyle = "#fff"
            this.ctx.rect(0,0,this.canvas.width,this.canvas.height)
            this.ctx.fill()

            this.imgs.forEach(function(url){
                var img = new Image()
                img.onload = function(){
                    self.load++
                    if(self.load == self.imgs.length){
                        self.setDefaultCanvas()
                    }
                }
                img.src = url,
                self.loadedImgs.push(img)
            })
        },
        drawContent:function(){
            var self = this
            var sw = 0

            this.ctx.fillStyle = "#722236"
            this.ctx.font = "60px normal"
            this.ctx.fillText(this.companyName,98+34+16,867+78)
            sw = this.ctx.measureText(this.companyName).width + 16

            this.ctx.drawImage(this.loadedImgs[3], 0, 0, 34+16, 123, 98, 867, 34+16, 123)
            this.ctx.drawImage(this.loadedImgs[3], 50, 0, sw, 123, 98 + 50, 867, sw, 123)
            this.ctx.drawImage(this.loadedImgs[3], 1397, 0, 125, 123, 98 + 50 + sw, 867, 125, 123)

            this.ctx.fillStyle = "#722236"
            this.ctx.strokeStyle = '#722236'
            this.ctx.lineWidth = 2
            this.ctx.font = "60px normal"
            this.ctx.fillText(this.companyName,98+34+16,867+78)
            this.ctx.strokeText(this.companyName,98+34+16,867+78)

            this.ctx.lineWidth = 1
            this.ctx.font = "36px normal"
            this.ctx.fillText('上拉勾搜索 【',98,991+60)
            this.ctx.strokeText('上拉勾搜索 【',98,991+60)
            sw = this.ctx.measureText('上拉勾搜索 【').width
            
            this.ctx.fillText(this.companyName,98+sw,991+60)
            this.ctx.strokeText(this.companyName,98+sw,991+60)
            var nx = this.ctx.measureText(this.companyName).width

            this.ctx.fillText('】',98+sw+nx,991+60)
            this.ctx.strokeText('】',98+sw+nx,991+60)

            this.ctx.fillText("立即与我相遇", 98, 991+60+60)
            this.ctx.strokeText("立即与我相遇", 98, 991+60+60)

            // 绘制完毕，导出图片地址
            setTimeout(function(){
                self.url = self.canvas.toDataURL("image/png")
                self.showImage = true
                self.saveStatus = true
            }, 500)
        },
        imgTouchstart:function(){
            this.touchstart = Date.now()
        },
        imgTouchend:function(){
            var now = Date.now()
            // 长按
            if (this.touchstart && now - this.touchstart >= 2000) {
                postEncodingID({
                    'data-lg-tj-id': '1k6a',
                    'data-lg-tj-no': '0005' ,
                    'data-lg-tj-cid': 'null'
                })
            }
            this.touchstart = 0
        },
        clickImageEvent:function(){
            this.showImage = false
        }
    }
})

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
