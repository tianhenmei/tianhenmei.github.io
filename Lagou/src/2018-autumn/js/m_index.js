(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
app = new Vue({
    el:"#app",
    data:{
        // test
        mode:"development",
        lg:"1bir",
        // test
        activePage:0,
        sex:'',
        total:5,
        options:['a','b','c','d'],
        result:[],
        choseOptionIndex:-1,
        clickStatus:false,
        saveTips:'长按图片保存到本地相册',
        page0:{
            status:'in',
            chose:false,
            score:[0,10,30,20],
            in:{
                top:"opacityChange delay0-5",
                title:"opacityChange delay1-0",
                option0:"leftIn delay1-5",
                option2:"leftIn delay1-5",
                option1:"rightIn delay1-5",
                option3:"rightIn delay1-5",
                num:"bottomIn delay1-7",
                layer:"zoomIn",
                content:"opacityChange delay0-7",
                btext:"rotateIn2 delay1-2",
                next:"zoomIn delay1-2",
                close:"opacityChange delay1-5"
            },
            out:{
                top:"topIn-out delay0-2",
                title:"topIn-out delay0-2",
                option0:"leftIn-out delay0-2",
                option2:"leftIn-out delay0-2",
                option1:"rightIn-out delay0-2",
                option3:"rightIn-out delay0-2",
                num:"bottomIn-out delay0-2",
                layer:"zoomIn-out duration0-2",
                content:"",
                btext:"",
                next:"",
                close:""
            },
        },
        page1:{
            status:'in',
            chose:false,
            score:[0,20,10,30],
            in:{
                top:"opacityChange delay0-5",
                title:"opacityChange delay1-0",
                option0:"rightIn delay1-5 duration1-0",
                option1:"rightIn delay1-8 duration1-0",
                option2:"rightIn delay2-1 duration1-0",
                option3:"rightIn delay2-4 duration1-0",
                num:"opacityChange delay2-7"
            },
            out:{
                top:"rotate-out delay0-2",
                title:"rotate-out delay0-2",
                option0:"rotate-out delay0-2",
                option2:"rotate-out delay0-2",
                option1:"rotate-out delay0-2",
                option3:"rotate-out delay0-2",
                num:"bottomIn-out delay0-2"
            },
        },
        page2:{
            status:'in',
            chose:false,
            score:[30,0,10,20],
            in:{
                top:"rotateIn2 delay0-5",
                title:"littleBottomIn delay1-0",
                option0:"littleBottomIn delay1-5 duration1-0",
                option1:"littleBottomIn delay1-8 duration1-0",
                option2:"littleBottomIn delay2-1 duration1-0",
                option3:"littleBottomIn delay2-4 duration1-0",
                num:"opacityChange delay2-7"
            },
            out:{
                top:"topIn-out delay0-2",
                title:"topIn-out delay0-2",
                option0:"topIn-out delay0-2",
                option2:"topIn-out delay0-2",
                option1:"topIn-out delay0-2",
                option3:"topIn-out delay0-2",
                num:"topIn-out delay0-2"
            },
        },
        page3:{
            status:'in',
            chose:false,
            score:[0,30,20,10],
            in:{
                top:"zoomIn delay0-5",
                title:"opacityChange delay1-0",
                option0:"zoomIn delay1-5",
                option1:"zoomIn delay1-5",
                option2:"zoomIn delay1-5",
                option3:"zoomIn delay1-5",
                num:"opacityChange delay2-0"
            },
            out:{
                top:"zoomBig-outtop delay0-2",
                title:"zoomBig-outtop delay0-2",
                option0:"zoomBig-outleft delay0-2",
                option2:"zoomBig-outleft delay0-2",
                option1:"zoomBig-outright delay0-2",
                option3:"zoomBig-outright delay0-2",
                num:"zoomBig-outbottom delay0-2"
            },
        },
        page4:{
            status:'in',
            chose:false,
            score:[0,10,30,20],
            in:{
                top:"opacityChange delay0-5",
                title:"opacityChange delay1-0",
                option0:"rotateIn delay1-5",
                option1:"rotateIn delay1-5",
                option2:"rotateIn delay1-5",
                option3:"rotateIn delay1-5",
                option4:"rotateIn delay1-5",
                num:"opacityChange delay2-0"
            },
            out:{
                top:"opacityChange-out delay0-2",
                title:"opacityChange-out delay0-2",
                option0:"opacityChange-out delay0-2",
                option2:"opacityChange-out delay0-2",
                option1:"opacityChange-out delay0-2",
                option3:"opacityChange-out delay0-2",
                option4:"opacityChange-out delay0-2",
                num:"opacityChange-out delay0-2"
            },
        },
        page4Options:['a','b','c','d'],
        canvas:null,
        ctx:null,
        url:'',
        loadingArray:[
            "images/result-title.png",
            "images/result-lagou.png",
            "images/result-add.png",
            "images/result-tips.png",
            "images/result-person-01.png",  // 4
            "images/result-person-02.png",
            "images/result-person-03.png",
            "images/result-person-04.png",
            "images/result-text-a-01.png",  // 8
            "images/result-text-a-02.png",
            "images/result-text-a-03.png",
            "images/result-text-a-04.png",
            "images/result-text-b-01.png",  // 12
            "images/result-text-b-02.png",
            "images/result-text-b-03.png",
            "images/result-text-c-01.png",  // 15
            "images/result-text-c-02.png",
            "images/result-text-c-03.png",
            "images/result-text-d-01.png",  // 18
            "images/result-text-d-02.png"
        ],
        loadedImgs:[],
        drawStatus:false,
        loaded:0,
        resultText:[
            [
                ["面试HR如沐春风","分分钟Offer一箩筐。"],
                ["能直接发Offer","解决的问题，","就不要用面试解决。"],
                ["戴上我的面霸手套","让HR不得不","发Offer给我。"],
                ["只要我想","就没有拿不到的Offer。"]
            ],[
                ["纵然面试中","再多的突发问题，","也能微微一笑，","绝对不慌。"],
                ["纵有万千套路，","我自巍然不动。"],
                ["只要给我一个支点，","就能撬动HR的心。"]
            ],[
                ["虽然面试过程坎坷不断，","但是只要发挥自己的脑洞，","总能争取到Offer的机会。"],
                ["面试就像一场戏，","Offer拿到不容易，","为了面试发脾气，","面完想想又何必。"],
                ["只要参与足够多的面试","Offer自然会来到身边。"]
            ],[
                ["我在面试现场，","比梅西还慌的一比。","我不是天生要强，","我可能面试要凉。"],
                ["看见面试官双腿忍不","住以75THz的频率抖","动，瞬间失忆，还需","票圈高人提点。"]
            ]
        ],
        resultScore:0,
        user:{
            "nickname":"我",
            "headimgurl":"images/create-logo.png"
        },
        resultPerson:4,
        resultIndex:0,
        resultWords:[],
        showStatus:true
    },
    computed:{
        qrcodeUrl:function(){
            return 'https://activity.lagou.com/activity/dist/2018-autumn/m_index.html'
        },
        createCode:function(){
            return encodeURIComponent(this.qrcodeUrl)
        },
        setSaveStyle:function(){
            var height = RC.w / GC.w * GC.h - RC.h,
                width = RC.h / GC.h * GC.w - RC.w,
                temp = 0,
                scale = 0.748,
                gap = -168
            if(height < 0){
                temp = height / RC.h / 12,//Math.abs(height / RC.h / 12)
                scale += temp
                gap = gap * (1 - scale) - RC.h * (1 - scale) / 2// gap * (1 + temp * 10)
            }else if(height > 0){
                temp = height / RC.h
                scale += temp
                gap = gap * (1 - scale) - RC.h * (1 - scale) / 2
                if(scale > 1) {
                    scale = 1
                    gap = 0
                }
                if(gap > 0){
                    gap = 0
                }
            }
            return {
                transform:"scale3d("+scale+","+scale+","+scale+") translateY("+this.setRem(gap)+")",
                opacity:1
            }
        },
        // setTitleStyleP0:function(){
        //     var height = RC.w / GC.w * GC.h - RC.h,
        //         offset = height > 0 ? height / 3 : 0
        //     return {
        //         top:this.setRem(241+offset)
        //     }
        // },
        // setListStyle:function(){
        //     var height = RC.w / GC.w * GC.h - RC.h,
        //         offset = height > 0 ? height / 3 : 0
        //     return {
        //         top:this.setRem(413+offset)
        //     }
        // },
    },
    mounted:function(){
        if(lagoufrom == 'ios' || lagoufrom == 'android'){
            this.saveTips = '截图保存'
        }
        pageStatus = true
        this.initCreateUserStyle()
        // test 注释
        if(this.isWeiXin()){
            this.getUserWeixinData()
        }     
        // test 注释
        this.initCanvas()
    },
    methods:{
        setDelayTime:function(start,now,index){
            var current = Math.floor(now / 10)
            return start + current
        },
        setLaterDelay:function(start,now){
            var current = Math.floor(now / 10),
                sec = now % 10
            return 'delay'+(start+current)+'-'+sec
        },
        setSex:function(sex){
            this.sex = sex
            // test  打开
            // var self = this
            // this.resultScore = Math.floor(Math.random() * 150)
            // this.drawStatus = true
            // this.setResultData()
            // this.initCanvas()
        },
        chooseAnswer:function(pindex,index){
            var self = this
            this.result[pindex] = this['page'+pindex].score[index]
            this.choseOptionIndex = index
            setTimeout(function(){
                self.choseOptionIndex = -1
                self['page'+pindex].chose = true
            },1000)
        },
        toNext:function(pindex){
            if(this.clickStatus){
                return
            }
            this.clickStatus = true
            var self = this
            this['page'+pindex].status = 'out'
            setTimeout(function(){
                self.clickStatus = false
                self['page'+pindex].status = 'in'
                self['page'+pindex].chose = false
                self.activePage = ++pindex
            },700)
        },
        closeEvent:function(pindex){
            this['page'+pindex].chose = false
        },
        initCanvas:function(){
            this.canvas = this.$refs['canvas']
            this.ctx = this.canvas.getContext('2d')
            var height = 1334
            this.canvas.width = RC.w
            this.canvas.height = height
            this.ctx.clearRect(0,0,RC.w,height)
            var loadedImgs = [],
                self = this
            
            this.loadingArray.forEach(function(url){
                var img = new Image()
                img.onload = function(){
                    self.initImageLoading()
                }
                img.onerror = function(){
                    self.initImageLoading()
                }
                img.src = url,
                self.loadedImgs.push(img)
            })
        },
        initImageLoading:function(){
            this.loaded++
            if(this.loaded == this.loadingArray.length){
                if(this.drawStatus){
                    this.startDraw()
                }
            }
        },

        showResult:function(pindex){
            if(this.clickStatus){
                return
            }
            this.clickStatus = true
            var self = this,
                score = 0,
                i = 0
            this['page'+pindex].status = 'out'
            for(i = 0; i < this.result.length; i++){
                score += this.result[i]
            }
            this.resultScore = score
            this.setResultData()
            if(this.loaded == this.loadingArray.length){
                this.startDraw()
            }else{
                this.drawStatus = true
            }
            setTimeout(function(){
                self.clickStatus = false
                self['page'+pindex].status = 'in'
                self['page'+pindex].chose = false
                self.activePage = ++pindex
                var tt = 2*1000+((6+self.resultWords.length*2) % 10 + 2 + 7) * 100
                setTimeout(function(){
                    self.showStatus = false
                },tt)
            },700)
        },
        startDraw:function(){
            var ercode = "images/result-ercode.png", // "https://activity.lagou.com/activityapi/votelike/qrcode/"+147,
                self = this;
            var img = new Image()
            img.onload = function(){
                self.drawAllInformation(img)
            }
            img.onerror = function(){
                self.drawAllInformation(img)
            }
            img.src = ercode
        },
        setResultData:function(){
            var text = [],
                title = null,
                one = 0,
                index = 0,
                start = 8,
                person = 0
            if(this.resultScore < 50){
                index = 3
                start = 18
            }else if(this.resultScore < 100){
                index = 2
                start = 15
            }else if(this.resultScore < 150){
                index = 1
                start = 12
            }else{
                index = 0
                start = 8
            }
            one = Math.floor(Math.random() * this.resultText[index].length)
            text = this.resultText[index][one]
            if(this.sex == 'boy'){
                if(this.result[0] < 20){
                    this.resultPerson = 4
                }else{
                    this.resultPerson = 5
                }
            }else{
                if(this.result[0] < 20){
                    this.resultPerson = 6
                }else{
                    this.resultPerson = 7
                }
            }
            this.resultIndex = start+one
            this.resultWords = text
        },
        drawAllInformation:function(ercode){
            this.ctx.drawImage(this.loadedImgs[this.resultPerson],0,0)
            this.ctx.drawImage(this.loadedImgs[0],474,113)
            this.ctx.drawImage(this.loadedImgs[1],649,1275)
            this.ctx.drawImage(this.loadedImgs[2],101,867)
            this.ctx.drawImage(this.loadedImgs[3],177,1243)
            this.ctx.drawImage(this.loadedImgs[this.resultIndex],0,0)

            this.drawUserInfo(this.resultWords)
            this.drawErcode(ercode)

            this.canvasToImage()
        },
        drawErcode:function(drawErcode){
            this.ctx.drawImage(drawErcode,0,0,drawErcode.width,drawErcode.height,45,1188,104,104)
        },
        drawUserInfo:function(text){
            var sp = 0
            this.ctx.fillStyle = '#ffffff'
            this.ctx.font = "46px italic"
            this.ctx.fillText(this.user.nickname,101,254+46)
            sp = this.ctx.measureText(this.user.nickname).width
            this.ctx.save()
            this.ctx.beginPath();
            this.ctx.globalAlpha = 0.3
            this.ctx.rect(97,293,sp,4)
            this.ctx.closePath()
            this.ctx.restore()

            this.ctx.font = "70px bold"
            this.ctx.fillText("的面试力：",101,320+70)

            var i = 0,
                start = 936
            this.ctx.font = "29px normal"
            for(i = 0; i < text.length; i++){
                this.ctx.fillText(text[i],100,start+44*i+29)
            }
            
        },
        canvasToImage:function(){
            var self = this
            setTimeout(function(){
                self.url = self.canvas.toDataURL('image/png')
            },1000)
        },


        initCreateUserStyle:function(){
            // this.createUserStyle
            var height = RC.w / GC.w * GC.h - RC.h,
                offset = height > 0 ? height / 3 : 0
            this.createUserStyle = {
                top:this.setRem(385+offset)
            }
        },
        setRem:function(value){
            return value / (750 / 16)+'rem';
        },
        getUserInfo:function(){
            var self = this
            $.ajax({
                type: 'get',
                url: 'https://activity.lagou.com/activityapi/votelike/userVoteInfo.json',
                data:{
                    activityId:20180723
                },
                success: function(result) {
                    if (result.success) {
                        var data = result.content || {};
                        self.userUsed = data.votedNum || 0
                        self.userTotal = data.allVoteNum || 3
                        self.votedCompanyIds = data.voteCompanyIds || []
                    }
                },
                error: function(xhr, type) {
                    // alert(xhr)
                    alert('网络原因请重新尝试!');
                }
            });
        },
        noop:function(){

        },
        isWeiXin:function() {
            var ua = window.navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                return true;
            } else {
                return false;
            }
        },
        getUserWeixinData:function(){
            var self = this
            $.ajax({
                type: 'get',
                url: 'https://activity.lagou.com/activityapi/weixin/authUserDetail',
                success: function(data) {
                    if (data.state == 200 && data.content) { // 已登录
                        self.user = data.content
                        self.getUserInfo()
                    } else{ // 未登录
                        var href = window.location.href
                            arr = href.split('?'),
                            param = getQueryString('times')
                        if(arr.length > 1){
                            href += '&times=1'
                        }else{
                            href += '?times=1'
                        }
                        if((!getQueryString('selected') && !param) || (!param && getQueryString('selected') && !localStorage.getItem('2018-employer'))){
                            localStorage.setItem('2018-employer',1)
                            window.location.href = 'https://activity.lagou.com/activityapi/weixin/userInfoAuth.html?returnUrl=' + encodeURIComponent(href); 
                        }
                    }
                },
                error: function(error) {
                    console.log(error.message);
                }
            });
        },
        retryEvent:function(){
            this.activePage = 0
            this.showStatus = true
        },
    }
})
},{}]},{},[1]);