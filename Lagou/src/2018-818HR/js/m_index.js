(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
app = new Vue({
    el:"#app",
    data:{
        // test
        mode:"development",
        lg:"1c5b",
        loadingHost:'',
        // loadingHost:'https://www.lgstatic.com/activity-rsrc/dist/2018-818HR/',
        // test
        activePage:-1,
        clickStatus:false,
        saveTips:'长按图片保存到本地相册',
        videoClass:'hide',
        playingIndex:-1,
        playingEnd:false,
        scene0:{
            w0:0,
            w1:0,
            w2:0
        },
        scene1:{
            w0:0,
            w1:0
        },
        scene2:{
            words:[
                "都办完入职手续了，告诉我不来？",
                "别人去求姻缘，我就去求候选人",
                "哪里去找男朋友，候选人就是男朋友",
                "工作5年，每天面试20K应届生",
                "在招人了，不要再催了",
                "候选人又找不到电梯了？",
                "今天面试约了吗？",
                "不会一份简历都筛不出来吧",
                "最为痛恨放鸽子"
            ],
            style:[],
            bubble:0,
            bubble_word:0,
            shake:0,
            body:0
        },
        scene3:{
            w0:0,
            end:0
        },
        // page0 
        name:'',
        tips:'',
        shakeClass:'',
        type:'in',
        page0:{
            in:{
                title_bg:'leftTopIn delay0-5',
                big_star:'rightIn delay0-5',
                bottom_title:'littleBottomIn delay2-7',
                bottom_logo:'littleBottomIn delay2-9',
                orbit:'rightBottomZoomIn delay0-5',
                svg:'opacityChange delay1-0',
                title:'littleBottomIn delay1-5',
                detail:'littleBottomIn delay2-0',
                sure:'littleTopIn delay1-5',
                input:'littleTopIn delay2-0'
            },
            out:{
                title_bg:'leftTopOut',
                big_star:'rightIn-out',
                bottom_title:'littleBottomOut',
                bottom_logo:'littleBottomOut',
                orbit:'rightIn-out',
                svg:'rightIn-out',
                title:'leftIn-out',
                detail:'leftIn-out',
                sure:'leftIn-out',
                input:'leftIn-out'
            },
        },
        // page1
        choseOptionIndex:-1,
        result:[],
        resultIndex:-1,
        resultTotal:0,
        activeQuestion:0,
        doneNum:0,
        hideProgress:'opacityChange delay2-0',
        btAni:'',
        queAni:'in',
        musicStatus:true,
        questionList:[{
            in:{
                total:'',
                en:'opacityChange delay0-7',
                cn:'opacityChange delay0-5',
                title:'opacityChange delay1-0',
                option0:'opacityChange delay1-5',
                option1:'opacityChange delay1-5'
                // en:'opacityChange delay0-7',
                // cn:'rotateXIn delay0-5',
                // title:'leftIn delay1-0',
                // option0:'rotateXIn delay1-1',
                // option1:'rotateXIn delay1-3'
            },
            out:{
                total:'opacityChange-out',
                // total:'leftIn-out',
                en:'',
                cn:'',
                title:'',
                option0:'',
                option1:''
            },
            list:[{
                content:"同事向你倾诉工作",
                
            },{
                content:"候选人告知面试取消"
            }]
        },{
            in:{
                total:'',
                en:'opacityChange delay0-7',
                cn:'opacityChange delay0-5',
                title:'opacityChange delay1-0',
                option0:'opacityChange delay1-1',
                option1:'opacityChange delay1-3'
                // en:'rightIn delay0-5',
                // cn:'rightIn delay0-7',
                // title:'rightIn delay0-9',
                // option0:'rightIn delay1-1',
                // option1:'rightIn delay1-3'
            },
            out:{
                total:'opacityChange-out',
                // total:'topInMove-out',
                en:'',
                cn:'',
                title:'',
                option0:'',
                option1:''
            },
            list:[{
                content:"去雍和宫烧香",
                
            },{
                content:"把床搬到公司干活",
                // scaleStatus:true
            }]
        },{
            in:{
                total:'',
                en:'opacityChange delay0-7',
                cn:'opacityChange delay0-5',
                title:'opacityChange delay1-0',
                option0:'opacityChange delay1-1',
                option1:'opacityChange delay1-3',
                option2:'opacityChange delay1-5'
                // en:'littleBottomIn delay0-5',
                // cn:'littleBottomIn delay0-7',
                // title:'littleBottomIn delay0-9',
                // option0:'littleBottomIn delay1-1',
                // option1:'littleBottomIn delay1-3',
                // option2:'littleBottomIn delay1-5'
            },
            out:{
                total:'opacityChange-out',
                // total:'rotate-out',
                en:'',
                cn:'',
                title:'',
                option0:'',
                option1:'',
                option2:''
            },
            list:[{
                content:"另约时间，陪另一半约会",
                scaleStatus:true
                
            },{
                content:"推掉约会，去完成面试",
                scaleStatus:true
            },{
                content:"把候选人带到餐厅聊聊",
                scaleStatus:true
            }]
        },{
            in:{
                total:'',
                en:'opacityChange delay0-7',
                cn:'opacityChange delay0-5',
                title:'opacityChange delay1-0',
                option0:'opacityChange delay1-1',
                option1:'opacityChange delay1-3'
                // total:'rotateIn2 delay0-5',
                // en:'',
                // cn:'',
                // title:'',
                // option0:'',
                // option1:''
            },
            out:{
                total:'opacityChange-out',
                // total:'zoomIn-out',
                en:'',
                cn:'',
                title:'',
                option0:'',
                option1:''
            },
            list:[{
                content:"胖三斤"
            },{
                content:"招不来人"
            }]
        },{
            in:{
                total:'',
                en:'opacityChange delay0-7',
                cn:'opacityChange delay0-5',
                title:'opacityChange delay1-0',
                option0:'opacityChange delay1-1',
                option1:'opacityChange delay1-3',
                option2:'opacityChange delay1-5'
                // en:'centerToTop delay0-5',
                // cn:'centerToTop delay0-7',
                // title:'centerToTop delay0-9',
                // option0:'centerToBottom delay1-1',
                // option1:'centerToBottom delay1-3',
                // option2:'centerToBottom delay1-5'
            },
            out:{
                total:'opacityChange-out',
                en:'',
                cn:'',
                title:'',
                option0:'',
                option1:'',
                option2:''
            },
            list:[{
                content:"尔晴"
            },{
                content:"富察皇后"
            },{
                content:"魏璎珞"
            }]
        }],
        canvas:null,
        ctx:null,
        url:'',
        loaded:0,
        loadingArray:[
            "images/result-bg.png",
            "images/result-border.png",
            "images/result-bottom.png",
            "images/result-ercode.png",
            "images/result-title-01.png",  // 4
            "images/result-title-02.png",
            "images/result-title-03.png",
            "images/page1-orbit.png", // 7
            "images/result-star-01.png",
            "images/result-star-02.png",
            "images/result-line.png"  // 10
        ],
        loadedImgs:[],
        drawStatus:false,
        drawStartTime:0,
        resultText:[{  // 0
            name:"戏精本精HR",
            intro:["善于在琐碎的工作中找寻乐趣","同事们都为你欢呼鼓掌。"],
            rule:"不加戏怎么红",
            gift:"已在拉勾为你找到最契合神秘武器",
            gift_name:"【拉勾直call大咖】",
            gift_intro:["主动出击，电话邀约心仪大咖","随时随地享受加戏乐趣"]
        },{  // 1
            name:"24小时待机HR",
            intro:["作为HR中的战斗机，精力充沛，随叫随到","招不到人？不存在的"],
            rule:"生命不息，折腾不止",
            gift:"已在拉勾找到与你最为契合的神秘武器",
            gift_name:"【拉勾全库简历】",
            gift_intro:["1954万简历开放给你","大咖多到停不下来"]
        },{  // 2
            name:"主角光环HR",
            intro:["别人只看到你表面上春风得意，","不知道你背后也风生水起"],
            rule:"哪有一路开挂，不过是厚积薄发",
            gift:"已在拉勾找到与你最为契合的神秘武器",
            gift_name:"【拉勾特权职位】",
            gift_intro:["发布职位不受限制，","职位排名一路开挂"]
        },{  // 3
            name:"锦鲤依赖HR",
            intro:["在招人的道路上不抛弃，不放弃，","坚持…转发锦鲤，可以说是非常有毅力。"],
            rule:"得锦鲤者得候选人",
            gift:"已在拉勾为你找到最契合神秘武器",
            gift_name:"【拉勾大咖到面】",
            gift_intro:["高端人才主动上门","快速招揽技术大牛"]
        },{  // 4
            name:"候选人磁铁HR",
            intro:["候选人总是不由自主的被你吸引，","团队有了你再也不担心被放鸽子"],
            rule:"我要变成万人迷",
            gift:"已在拉勾为你找到最契合神秘武器",
            gift_name:"【拉勾在线沟通】",
            gift_intro:["在线“撩人”不限次","想跟谁聊跟谁聊"]
        },{  // 5
            name:"小太阳HR",
            intro:["善于沟通，协作能力一流，","和你一起工作总是事倍功半。"],
            rule:"代表太阳温暖你",
            gift:"已在拉勾为你找到最契合神秘武器",
            gift_name:"【拉勾超级协同】",
            gift_intro:["付费权益多人共享","和同事一起提高招聘效率"]
        },{  // 6
            name:"颜值赛高HR",
            intro:["同事都夸你特别有毅力","因为光好看这事你就坚持了好几十年"],
            rule:"永远做最耀眼的存在",
            gift:"与你最为契合的神秘武器",
            gift_name:"【拉勾职位置顶卡】",
            gift_intro:["24小时精准置顶，专属标识，","海量曝光，让所有求职者一眼看到你"]
        }],
        resultScore:0,
        showSaveTips:false,
        toUrl:'https://mp.weixin.qq.com/s/r_ZQM-95nhWnTFv5GfnMjA',
        user:{
            "nickname":"我",
            "headimgurl":"images/create-logo.png"
        },
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
        // this.initVideo()
        pageStatus = true
        // this.initCreateUserStyle()
        // test 注释
        // if(this.isWeiXin()){
        //     this.getUserWeixinData()
        // }     
        // test 注释
        this.initCanvas()
    },
    methods:{
        initVideo:function(){
            var video = document.getElementById('videoALL'),
                clientWidth = $(window).width(),
                clientHeight = $(window).height(),
                self = this;
            var isend = false, ispass = true;

            video.addEventListener('timeupdate', function(e) {
                isend = true;
                if (this.currentTime >= 92.3 && ispass) {
                    ispass = false;
                    self.activePage = 1
                    video.pause();
                }
            });

            video.addEventListener('ended', function(e) {
                // $('.end').fadeIn();
                self.activePage = 1
            });
            // video.play()
        },
        videoPlayEvent:function(){
            var video = document.getElementById('videoALL')
            this.videoClass = ''
            video.play()
        },
        startVideo:function(){
            var self = this
            this.playingIndex = 0

            // 场景1
            setTimeout(function(){
                self.$refs['music-01'].play()
                setTimeout(function(){  // 第一个音频播放延迟
                    self.scene0.w0 = 1
                    setTimeout(function(){
                        self.scene0.w0 = 2
                        self.scene0.w1 = 1
                        self.$refs['music-01'].pause()
                        self.$refs['music-02'].play()
                        setTimeout(function(){
                            self.scene0.w1 = 2
                            self.scene0.w2 = 1
                            self.$refs['music-02'].pause()
                            self.$refs['music-03'].play()
                            setTimeout(function(){
                                self.showScene2()
                            },1700)
                        },1200)
                    },1200)
                },700)
            },500)
        },
        showScene2:function(){
            var self = this
            this.playingIndex = 1
            setTimeout(function(){
                self.scene1.w0 = 1
                self.$refs['music-03'].pause()
                self.$refs['music-04'].play()
                setTimeout(function(){
                    self.scene1.w1 = 1
                    setTimeout(function(){
                        self.showScene3()
                    },1100)
                },800)
            },500)
        },
        showScene3:function(){
            var self = this,
                fontSize = [this.setRem(35),this.setRem(48),this.setRem(29),this.setRem(57)],
                lineHeight = [this.setRem(70),this.setRem(96),this.setRem(59),this.setRem(114)],
                color = ['#fff','#02ffb1'],
                ran = -1,
                style = [],
                top = [],
                temp = 0,
                i = 0
            for(i = 0; i < this.scene2.words.length; i++){
                ran = Math.floor(Math.random() * 4)
                temp = Math.floor(Math.random() * 886 + 160)
                style.push({
                    lineHeight:lineHeight[ran],
                    top:this.setRem(160+i*120),
                    left:(GC.w+Math.floor(Math.random() * 270 + 50))+'px',
                    fontSize:fontSize[ran],
                    color:color[Math.floor(Math.random() * 2)],
                    animationDelay:(0.5 + Math.floor(Math.random() * 1.8))+'s'
                })
            }
            this.scene2.style = style
            this.playingIndex = 2
            this.$refs['music-04'].pause()
            this.$refs['music-bullet'].play()
            setTimeout(function(){
                // self.scene2.bubble = 1
                self.$refs['music-bullet'].pause()
                self.$refs['music-05'].play()
                setTimeout(function(){
                    self.scene2.bubble = 1
                    // 原来播放
                    setTimeout(function(){  // 延迟
                        self.scene2.bubble_word = 1
                        setTimeout(function(){
                            // 播放完成，开始振动
                            self.$refs['music-05'].pause()
                            self.$refs['music-message'].play()
                            self.scene2.shake = 1
                            // 添加斜眼
                            setTimeout(function(){
                                self.scene2.body = 1
                                // 最后一屏
                                setTimeout(function(){
                                    self.showScene4()
                                },1200)
                            },1000)
                        },1600)
                    },1500)
                },500)
            },3000)
        },
        showScene4:function(){
            var self = this
            this.playingIndex = 3
            setTimeout(function(){
                self.$refs['music-message'].pause()
                self.$refs['music-06'].play()
                setTimeout(function(){ // 延迟
                    self.scene3.w0 = 1
                    setTimeout(function(){
                        // 旋转页面
                        self.scene3.w0 = 2
                        setTimeout(function(){
                            self.$refs['music-06'].pause()
                            self.scene3.end = 1
                        },700)
                    },1700)
                },500)
            },1000)
        },
        endVideoEvent:function(){
            var self = this
            this.playingEnd = true
            setTimeout(function(){
                self.activePage = 1
            },500)
        },
        setLaterDelay:function(start,now){
            var current = Math.floor(now / 10),
                sec = now % 10
            return 'delay'+(start+current)+'-'+sec
        },
        chooseAnswer:function(pindex,index){
            var self = this,
                type = -1
            if(index == 0){
                this.resultTotal += 1
            }else if(index == 1){
                this.resultTotal += 2
            }else if(index == 2){
                this.resultTotal += 3
            }
            /*
            if(pindex == 0){
                switch(index){
                    case 0:
                        type = 5
                        break
                    default:
                        break
                }
            }else if(pindex == 1){
                switch(index){
                    case 0:
                        type = 3
                        break
                    default:
                        break
                }
            }else if(pindex == 2){
                switch(index){
                    case 0:
                        type = 4
                        break
                    default:
                        break
                }
            }else if(pindex == 3){
                switch(index){
                    case 0:
                        type = 6
                        break
                    default:
                        break
                }
            }else if(pindex == 4){
                switch(index){
                    case 0:
                        type = 2
                        break
                    case 1:
                        type = 1
                        break
                    case 2:
                        type = 0
                        break
                }
            }
            if(this.resultIndex == -1 && type != -1){
                this.resultIndex = type
            }
            */
            // this.result[pindex] = str
            this.queAni = 'out'
            setTimeout(function(){
                self.doneNum++
                if(self.activeQuestion < 4){
                    self.activeQuestion++
                    self.queAni = 'in'
                }else{
                    self.hideProgress = 'opacityChange-out delay0-5'//'littleBottomOut delay0-5'
                    self.btAni = 'littleBottomOut delay0-5'
                    // 开始绘制
                    self.showResult()
                }
            },300)
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
                this.ctx.drawImage(this.loadedImgs[0],0,0)
                this.ctx.drawImage(this.loadedImgs[7],181,143)
                this.ctx.drawImage(this.loadedImgs[8],55,117)
                this.ctx.drawImage(this.loadedImgs[9],502,651)
                this.ctx.drawImage(this.loadedImgs[1],31,-8)
                this.ctx.drawImage(this.loadedImgs[2],114,1036)
                this.ctx.drawImage(this.loadedImgs[3],487,1074)
                this.ctx.drawImage(this.loadedImgs[4],78,69)
                this.ctx.drawImage(this.loadedImgs[5],78,498)
                this.ctx.drawImage(this.loadedImgs[6],78,719)
                this.ctx.drawImage(this.loadedImgs[10],125,448)
                this.ctx.drawImage(this.loadedImgs[10],125,671)
                // test 注释
                if(this.drawStatus){
                    this.startDraw()
                }
                // test 打开
                // $('html,body').css({
                //     height:'auto'
                // })
                // this.name = '测试'
                // this.resultIndex = 6
                // this.startDraw()
            }
        },

        showResult:function(pindex){
            if(this.clickStatus){
                return
            }
            this.drawStartTime = Date.now()
            this.clickStatus = true
            var self = this,
                score = 0,
                i = 0
            if(this.loaded == this.loadingArray.length){
                this.startDraw()
            }else{
                this.drawStatus = true
            }
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
        drawAllInformation:function(ercode){
            this.getResult()
            this.drawUserInfo()
            // this.drawErcode(ercode)

            this.canvasToImage()
        },
        drawErcode:function(drawErcode){
            this.ctx.drawImage(drawErcode,0,0,drawErcode.width,drawErcode.height,45,1188,104,104)
        },
        getResult:function(){
            if(this.resultTotal <= 6){
                this.resultIndex = 6
            }else if(this.resultTotal == 7){
                this.resultIndex = 0
            }else if(this.resultTotal == 8){
                this.resultIndex = 3
            }else if(this.resultTotal == 9){
                this.resultIndex = 5
            }else if(this.resultTotal == 10){
                this.resultIndex = 4
            }else if(this.resultTotal == 11){
                this.resultIndex = 1
            }else {
                this.resultIndex = 2
            }
        },
        drawUserInfo:function(){
            var sp = 0,
                data = this.resultText[this.resultIndex]
            this.ctx.fillStyle = '#ffffff'
            this.ctx.font = "48px normal"
            this.ctx.fillText(this.name,120,180+48)

            this.ctx.fillStyle = '#08dfa5'
            this.ctx.font = "36px normal"
            this.ctx.fillText("你是",120,267+36)
            sp = this.ctx.measureText("你是").width
            this.ctx.font = "48px normal"
            this.ctx.fillText(data.name,120+sp,257+48)

            this.ctx.fillStyle = '#9f9f9f'
            this.ctx.font = "30px normal"
            this.ctx.fillText(data.intro[0],120,332+30)
            this.ctx.fillText(data.intro[1],120,380+30)

            this.ctx.fillStyle = '#08dfa5'
            this.ctx.font = "40px normal"
            this.ctx.fillText(data.rule,120,597+40)

            this.ctx.fillText(data.gift_name,100,832+40)

            this.ctx.fillStyle = '#9f9f9f'
            this.ctx.font = "30px normal"
            this.ctx.fillText(data.gift_intro[0],120,920+30)
            this.ctx.fillText(data.gift_intro[1],120,968+30)
            
        },
        canvasToImage:function(){
            var self = this
            setTimeout(function(){
                self.url = self.canvas.toDataURL('image/png')
                $('html,body').css({
                    height:'auto'
                })
                self.activePage = 3
            },1000)
        },
        setDataCount:function(count){
            // console.log(one.count)
            return '0000'.slice((count+'').length)+count
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
        loadSuccess:function(){
            // test
            this.activePage = 0
        },
        startAnswer:function(){
            var self = this
            if(this.name){
                this.tips = ""
                this.shakeClass = ""
                // var func = Math.floor(Math.random() * 44)
                // this.drawWords(this.textArray[func])

                this.type = "out"
                setTimeout(function(){
                    self.activePage = 2
                    self.$refs['music'].play()
                },500)
                // this.drawStatus = true
                // if(this.load == this.imgs.length){
                //     this.drawImgContent()
                // }
            }else{
                this.tips = "* 请输入你的名字"
                this.shakeClass = "shake"
                setTimeout(function(){
                    self.shakeClass = ""
                },500)
            }
        },
        nameChange:function(){
            if(this.name){
                this.tips = ""
                var re=/([\u4E00-\u9FA5]|[\uFE30-\uFFA0])/g,
                    str = this.name.replace(re,"çç"),
                    len = 0
                if(str.length > 10){
                    len = str.slice(0,10).replace(/(çç)/g,"ç").length;
                    this.name = this.name.slice(0,len)
                }
            }else{
                // this.tips = "* 请输入你的名字"
            }
        },
        showShareLayer:function(){
            var self = this
            this.showSaveTips = true
            setTimeout(function(){
                self.showSaveTips = false
            },3000)
        },
        togglerMusic:function(){
            var music = this.$refs['music']
            if(music.paused){
                this.musicStatus = true
                music.play()
            }else{
                this.musicStatus = false
                music.pause()
            }
        },
        retryEvent:function(){
            this.activePage = 0
            this.showStatus = true
        },
    }
})
},{}]},{},[1]);