(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var app = new Vue({
    el:"#app",
    data:{
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

        load:0,
        loadedImgs:[],
        imgs:[
            "images/draw-bg.png",
            "images/draw-ercode.png",
            "images/star/Ronaldo-draw.png",
            "images/star/Ronaldo-draw.png",
            "images/star/Ronaldo-draw.png",
            "images/star/Ronaldo-draw.png",
            "images/star/Ronaldo-draw.png"
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
        prevIndex:0,
        bprevIndex:-1,
        starActive:1,
        nextIndex:2,
        bnextIndex:3,
        prevClass:'prev',
        bprevClass:'',
        currentClass:'active',
        bnextClass:'',
        nextClass:'next',
        star:[{
            name:"Ronaldo",
            cn:"梅西",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:5000000000,
            _salary:["5","000","000","000"]
        },{
            name:"Ronaldo",
            cn:"梅西",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:5000000000,
            _salary:["5","000","000","000"]
        },{
            name:"Ronaldo",
            cn:"梅西",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:5000000000,
            _salary:["5","000","000","000"]
        },{
            name:"Ronaldo",
            cn:"梅西",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:5000000000,
            _salary:["5","000","000","000"]
        },{
            name:"Ronaldo",
            cn:"梅西",
            contact:"2018年与巴塞罗那续约",
            up:"100%",
            salary:5000000000,
            _salary:["5","000","000","000"]
        }],
        pk:{
            name:'哈哈',
            salary:3000,
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
            selfMoney:0,
            salaryTimes:0,
            xsalaryTimes:0,
            doCarStatus:false,
            starCar:0,
            selfCar:0
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
    },
    mounted:function(){
        var self = this;
        dragRulesDetailList();
        //音乐
        $('.music-box').on('click',function(){
            if($('#music')[0].paused){
                $('#music')[0].play();
                $(".music-icon").removeClass('close').addClass('open');

            }else{
                $('#music')[0].pause();
                $(".music-icon").removeClass('open').addClass('close');
            }
        });
        function dragRulesDetailList() {
            var startX = 0,
                moveX = 0,
                startY = 0,
                moveY = 0;
            $(".star-list").on("touchstart",function (e) {
                startX = e.originalEvent.changedTouches[0].pageX;
                startY = e.originalEvent.changedTouches[0].pageY;
            }).on('touchmove',function (e) {
                moveX = e.originalEvent.changedTouches[0].pageX;
                moveY = e.originalEvent.changedTouches[0].pageY;
            }).on('touchend',function (e) {
                if(Math.abs(moveY-startY)>Math.abs(moveX-startX)){
                    // e.stopImmediatePropagation();
                    // return false;
                }else{
                    if(moveX<startX){
                        //向左滑动了
                        self.starActive++;
                        if(self.starActive < self.star.length){
                            // renderRuleBox();
                            self.showNext()
                        }else {
                            self.starActive = self.star.length - 1
                        }
                    }else if(moveX>startX){
                        //向右滑动了
                        self.starActive--;
                        if(self.starActive > -1){
                            self.showPrev()
                        }else{
                            self.starActive = 0
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
            var self = this
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
        },
        startPK:function(){
            if(this.pk.name && this.pk.salary){
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
                }
                if(!this.pk.salary){
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
                    self.animateNumber.selfMoney = 0
                    self.animateNumber.salaryTimes = 0
                    self.animateNumber.xsalaryTimes = 0
                    self.animateNumber.doCarStatus = false
                    self.animateNumber.starCar = 0
                    self.animateNumber.selfCar = 0
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
                if(self.load == self.imgs.length){
                    self.ctx.drawImage(self.loadedImgs[self.starActive+2],0,0)
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
        getLongHeight: function () {
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
                            time: 2500,
                            num: self.getStarCar,
                            regulator: 50,
                            callback:function(value){
                                self.animateNumber.starCar = value
                            }
                        })
                    },2200)
                    setTimeout(function(){
                        self.numAutoPlusAnimation({
                            time: 2500,
                            num: self.getSelfCar,
                            regulator: 50,
                            callback:function(value){
                                self.animateNumber.selfCar = value
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
        showShare:function(){
            var func = Math.floor(Math.random() * 44)
            this.initCanvas()
            this.drawWords(this.textArray[func])
            this.drawImgContent()
        },
        showNext:function(){
            var index = this.starActive,
                self = this;
            if(this.isMoving){
                return
            }
            this.isMoving = true
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
            if(this.isMoving){
                return
            }
            this.isMoving = true
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
                            self.ctx.drawImage(self.loadedImgs[2],0,0)
                            self.drawContent()
                            self.drawStatus = false
                        }
                    }
                }
                img.src = url,
                self.loadedImgs.push(img)
            })
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
            this.ctx.fillText("从不在乎别人的眼光，",38,176+26)
            this.ctx.fillText("但薪水上确实还差一些。 ",38,220+26)


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
            setTimeout(function(){
                self.numAutoPlusAnimation({
                    time: 2500,
                    num: self.getSalaryTimes,
                    regulator: 50,
                    callback:function(value){
                        value = new Number(value).toFixed(1)
                        var arr = value ? value.split('.') : ['0']
                        if(arr[1] == '0'){
                            self.animateNumber.salaryTimes = arr[0]
                        }else {
                            self.animateNumber.salaryTimes = value
                        }
                    }
                })
            },4700)
            setTimeout(function(){
                self.numAutoPlusAnimation({
                    time: 2500,
                    num: self.getXSalaryTimes,
                    regulator: 50,
                    callback:function(value){
                        value = new Number(value).toFixed(1)
                        var arr = value ? value.split('.') : ['0']
                        if(arr[1] == '0'){
                            self.animateNumber.xsalaryTimes = arr[0]
                        }else {
                            self.animateNumber.xsalaryTimes = value
                        }
                    }
                })
            },4900)
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
        }
    }
})
},{}]},{},[1]);