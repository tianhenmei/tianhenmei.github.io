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
        type:"in",
        url:"",
        lineWidth:2,
        bold:"bold",
        miniprogram:false,
        ani:{
            in:{
                bg:"rightIn delay0-5",
                s1:"centerRightOut delay1-0",
                s2:"toBottomOut delay1-0",
                logo:"centerOut delay1-0",
                dot:"opacityChange delay1-3",
                title:"zoomIn delay1-0",
                line:"widthChange delay1-5",
                layer:"leftIn delay0-5"
            },
            out:{
                bg:"rightIn-out",
                s1:"centerRightOut-out",
                s2:"toBottomOut-out",
                logo:"centerOut-out",
                dot:"opacityChange-out duration0-2",
                title:"zoomIn-out",
                line:"widthChange-out duration0-2",
                layer:"leftIn-out"
            }
        }
    },
    mounted:function(){
        var self = this
        this.canvas = this.$refs['canvas']
        this.canvas.width = 643
        this.canvas.height = 532
        this.ctx = this.canvas.getContext('2d')
        this.img = new Image()
        this.img.onload = function(){
            self.initCanvas()
            var name = getQueryString("name"),
                test = getQueryString("test")
            if(name){
                self.activePage = 1
                self.name = name
                if(!test){
                    test = Math.ceil(Math.random() * 45)
                }
                self.drawWords(test)
                self.drawImgContent()
            }
        }
        this.img.src = "images/ercode-03.png"
        this.initImgCanvas()
        // document.addEventListener("touchstart",undoDefault,false)
        // document.addEventListener("touchmove",undoDefault,false)
        // document.addEventListener("touchend",undoDefault,false)
        function undoDefault(e){
            e.preventDefault()
        }
        function ready() {
            self.miniprogram == window.__wxjs_environment === 'miniprogram' // true
        }
        if (!window.WeixinJSBridge || !WeixinJSBridge.invoke) {
            document.addEventListener('WeixinJSBridgeReady', ready, false)
        } else {
            ready()
        }
    },
    methods:{
        initCanvas:function(){
            this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
            this.ctx.save()
            this.ctx.fillStyle = '#ffffff'//'#fefef2'
            this.ctx.rect(0,0,this.canvas.width,this.canvas.height)
            this.ctx.fill()

            this.ctx.strokeStyle = '#0068b7'
            this.ctx.lineWidth = 18
            this.ctx.beginPath()
            this.ctx.moveTo(0,0)
            this.ctx.lineTo(this.canvas.width,0)
            this.ctx.lineTo(this.canvas.width,this.canvas.height)
            this.ctx.lineTo(0,this.canvas.height)
            this.ctx.lineTo(0,0)
            this.ctx.stroke()
            this.ctx.closePath()

            this.ctx.drawImage(this.img,452,343)//,485,370)

            this.ctx.restore()
        },
        initImgCanvas:function(){
            var w = 750,
                h = 836
            this.imgCanvas = this.$refs["img-canvas"]
            this.imgCanvas.width = w
            this.imgCanvas.height = h

            this.imgCtx = this.imgCanvas.getContext('2d')

            this.imgCtx.fillStyle = '#f3ead5'
            this.imgCtx.rect(0,0,w,h)
            this.imgCtx.fill()

            var bg = this.$refs["img-bg"],
                en = this.$refs["img-en"],
                logo = this.$refs["img-logo"]
            this.imgCtx.drawImage(bg,74,86)
            this.imgCtx.drawImage(en,49,111)
            this.imgCtx.drawImage(logo,528,40)
        },
        writeText1:function(){
            var arr = [127,190,252],
                name = this.name,
                fontSize = 48
            // 人家去雍和宫求姻缘 小明小明去雍和宫求前端工程师 
            var next = this.nameCenterLightEnd(arr,"","人家去雍和宫求姻缘","","",fontSize,0)
            next++
            next = this.nameCenterLightAfter(arr,"",name+"去雍和宫求","前端工程师","",fontSize,next)
        },
        writeText2:function(){
            var arr = [90,152,215,276],
                name = this.name,
                fontSize = 48
            // 小明，快回家吧 就算加班再晚 不来面试的候选人 还是不会来的  
            var next = this.nameCenterLightEnd(arr,"",name+"，快回家吧","","",fontSize,0)
            next++
            next = this.nameCenterLightAfter(arr,"","就算","加班","再晚",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"","不来面试的候选人","","",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"","还是","不会来","的",fontSize,next)
        },
        writeText3:function(){
            var arr = [90,152,215,276],
                name = this.name,
                fontSize = 40
            // 作为一个月薪6k的HR 小明的工作是 每天去劝月薪15k的人 不要理会外面月薪20k的工作
            var next = this.nameCenterLightAfter(arr,"","作为一个月薪","6k","的HR",fontSize,0)
            next++
            next = this.nameCenterLightAfter(arr,"",name+"的工作是","","",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"","每天去劝月薪","15k","的人",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"","不要理会外面月薪","20k","的工作",fontSize,next)
        },
        writeText4:function(){
            var arr = [90,152,215,276,346],
                name = this.name,
                len = this.getNameLength(name),
                fontSize = len > 2 ? len > 3 ? len > 4 ? 37 : 40 : 44 : 46
            // 一两个候选人夸自己帅 小明不以为意 当越来越多人夸他帅时 小明才意识到事态的严重来的候选人越来越不靠谱了  
            var next = this.nameCenterLightAfter(arr,"","一两个候选人夸自己","帅","",fontSize,0)
            next++
            next = this.nameCenterLightAfter(arr,"",name+"不以为意","","",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"","当越来越多人夸他","帅","时",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"",name+"才意识到事态的","严重","",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"","来的候选人越来越","不靠谱","了",fontSize,next)
        },
        writeText5:function(){
            var arr = [90,152,215,276,346],
                name = this.name,
                len = this.getNameLength(name),
                fontSize = len > 2 ? len > 3 ? len > 4 ? 36 : 39 : 42 : 46
            // 朋友都夸HR小明长得好看 可是小明觉得没用 因为候选人不会因为自己长得好看 就不放他鸽子 
            var next = this.nameCenterLightAfter(arr,"","朋友都夸HR"+name,"长得好看","",fontSize,0)
            next++
            next = this.nameCenterLightAfter(arr,"","可是"+name+"觉得没用","","",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"","因为候选人不会因为自己","长得好看","",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"","就","不","放他鸽子",fontSize,next)
        },
        writeText6:function(){
            var arr = [90,152,287],
                name = this.name,
                fontSize = 48
            // 请用两个字形容HR小明的候选人  在哪？ 
            var next = this.nameCenterLightAfter(arr,"","请用两个字形容HR"+name+"的候选人","","",fontSize,0)
            next++
            fontSize = 60
            next = this.nameCenterLightAfter(arr,"","","在哪？ ","",fontSize,next)
        },
        writeText7:function(){
            var arr = [90,152,215,276,346],
                name = this.name,
                fontSize = 44
            // 小明筛简历的时候 首先会留下那些好看的面孔 因为同样是被放鸽子 不好看的人更让人上火 
            var next = this.nameCenterLightAfter(arr,"",name+"筛简历的时候","","",fontSize,0)
            next++
            next = this.nameCenterLightAfter(arr,"","首先会留下那些","好看","的面孔",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"","因为同样是被放鸽子","","",fontSize,next)
            next++
            next = this.nameCenterLightTwice(arr,"","不好看","的人更让人","上火",fontSize,next)
        },
        writeText8:function(){
            var arr = [90,152,215,276,346],
                name = this.name,
                fontSize = 48
            // HR 小明  没有说走就走的旅程 只有说胖就胖的体型 
            var next = this.nameCenterLightAfter(arr,"HR "+name,"","","",fontSize,0)
            next++
            next = this.nameCenterLightAfter(arr,"没有说走就走的旅程","","","",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"只有说","","说胖就胖","的体型",fontSize,next)
        },
        writeText9:function(){
            var arr = [90,152,215,276,346],
                name = this.name,
                fontSize = 46
            //  别看HR小明 表面上因为没有合适的简历 而愁眉苦脸 小明背地里也愁眉苦脸 
            var next = this.nameCenterLightAfter(arr,"别看HR"+name,"","","",fontSize,0)
            next++
            next = this.nameCenterLightAfter(arr,"","","表面上","因为没有合适的简历而愁眉苦脸",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,name,"","背地里","也愁眉苦脸",fontSize,next)
        },
        writeText10:function(){
            var arr = [90,152,215,276,346],
                name = this.name,
                len = this.getNameLength(name),
                fontSize = len >= 4 ? 40 : 44
            //  小明已经不是那个打任何电话都轻声细语的小可爱了 而是打候选人电话会自觉跪下来的HR 
            var next = this.nameCenterLightAfter(arr,"",name+"已经不是那个打任何电话都","轻声细语","的小可爱了",fontSize,0)
            next++
            next = this.nameCenterLightAfter(arr,"","而是打候选人电话会自觉","跪下来","的HR",fontSize,next)
        },
        writeText11:function(){
            var arr = [90,152,215,276,346,406],
                name = this.name,
                len = this.getNameLength(name),
                fontSize = len == 4 ? 35 : len >=5 ? 33 : 38
            // HR 小明和朋友一起去逛超市 看见一口锅便拿起来背在背上 朋友问他为什么 小明说：喔？我背黑锅都背习惯了
            var next = this.nameCenterLightAfter(arr,"","HR "+name+"和朋友一起去逛超市","","",fontSize,0)
            next++
            next = this.nameCenterLightAfter(arr,"","看见一口锅便拿起来背在背上","","",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"","朋友问他为什么","","",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"",name+"说：喔？我","背黑锅","都背习惯了",fontSize,next)
        },
        writeText12:function(){
            var arr = [90,152,215,276,346,406],
                name = this.name,
                fontSize = 44
            // HR小明下定决定明天要约10个候选人来面试 不然用人部门会说，你看小明，除了腿长、腰细、脸好看,简直一无是处
            var next = this.nameCenterLightAfter(arr,"","HR"+name+"下定决定明天要约10个候选人来面试","","",fontSize,0)
            next++
            next = this.nameCenterLightTwice(arr,"不然用人部门会说，你看"+name+"，除了","腿长、腰细、脸好看",",简直","一无是处",fontSize,next)
        },
        writeText13:function(){
            var arr = [90,152,215,276,346,406],
                name = this.name,
                fontSize = 42
            // 现在的人都太花心了:开始喜欢吴宣仪,后来喜欢孟美岐,现在喜欢王菊 像HR小明就一直很专一,只喜欢正在找工作的人
            var next = this.nameCenterLightAfter(arr,"现在的人都太","","花心","了:开始喜欢吴宣仪,后来喜欢孟美岐,现在喜欢王菊",fontSize,0)
            next++
            next = this.nameCenterLightAfter(arr,"","像HR"+name+"就一直很专一,只喜欢正在","找工作","的人",fontSize,next)
        },
        writeText14:function(){
            var arr = [90,152,215,276,346,406],
                name = this.name,
                fontSize = 42
            // HR小明在公司从来不敢主动搭话 因为只要他开口 别人一定会问他 什么时候能帮我们招到人 
            var next = this.nameCenterLightAfter(arr,"","HR"+name+"在公司从来不敢","主动搭话","",fontSize,0)
            next++
            next = this.nameCenterLightAfter(arr,"因为只要他开口","","","",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"别人一定会问他","","","",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"什么时候能帮我们","","招到人","",fontSize,next)
        },
        writeText15:function(){
            var arr = [90,152,215,276,346,406],
                name = this.name,
                fontSize = 42
            // HR小明常常觉得自己运气很好,因为每天工作都能遇到优秀的音乐人 来面试的人，一个个退堂鼓打的可溜了 
            var next = this.nameCenterLightTwice(arr,"HR"+name+"常常觉得自己","运气","很好,因为每天工作都能遇到优秀的","音乐人",fontSize,0)
            next++
            next = this.nameCenterLightAfter(arr,"来面试的人，一个个","","退堂鼓","打的可溜了",fontSize,next)
        },
        writeText16:function(){
            var arr = [90,152,215,276,346,406],
                name = this.name,
                fontSize = 42
            // 面试前，候选人告诉HR小明 自己能力好便宜肯努力 面试后候选人告诉HR小明,不来是因为：离家远工资低 
            var next = this.nameCenterLightAfter(arr,"","面试前，候选人告诉HR"+name+"自己","能力好便宜肯努力","",fontSize,0)
            next++
            next = this.nameCenterLightAfter(arr,"","面试后候选人告诉HR"+name+",不来是因为：","离家远工资低干不了","",fontSize,next)
        },
        writeText17:function(){
            var arr = [90,152,215,276,346,406],
                name = this.name,
                fontSize = 48
            // 锄禾日当午，不如招聘苦 对着编制图，一哭一下午 哭了一下午，编制还在补 编制刚补完，项目又重组 
            var next = this.nameCenterLightAfter(arr,"","锄禾日当午，不如","招聘苦","",fontSize,0)
            next++
            next = this.nameCenterLightAfter(arr,"","对着编制图，一","哭","一下午",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"","哭了一下午，编制还在","补","",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"","编制刚补完，项目又","重组","",fontSize,next)
        },
        writeText18:function(){
            var arr = [90,173,247,319],
                name = this.name,
                fontSize = 56
            // 春天小明把候选人种到了地里 到了秋天 他就把这茬忘了 
            var next = this.nameCenterLightAfter(arr,"","春天"+name+"把候选人","种到了","地里",fontSize,0)
            next++
            next = this.nameCenterLightAfter(arr,"到了秋天","","","",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"他就把这茬忘了","","","",fontSize,next)
        },
        writeText19:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                fontSize = 34
            // HR小明听说有朋友最近想要找工作 赶紧拿了两盒中华前去讨好 结果朋友很生气，将牙膏退还给了他 还把他拉黑了 
            var next = this.nameCenterLightAfter(arr,"","HR"+name+"听说有朋友最近想要","找工作","",fontSize,0)
            next++
            next = this.nameCenterLightAfter(arr,"赶紧拿了两盒","","中华","前去讨好",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"结果朋友很生气，将牙膏退还给了他","","","",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"还把他","","拉黑","了",fontSize,next)
        },
        writeText20:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                fontSize = 42
            // 朋友让HR小明帮忙介绍男朋友 小明二话不说 朝对方扔去了一千份简历
            var next = this.nameCenterLightAfter(arr,"","朋友让HR"+name+"帮忙介绍","男朋友","",fontSize,0)
            next++
            next = this.nameCenterLightAfter(arr,name+"二话不说","","","",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"","朝对方扔去了","一千份简历","",fontSize,next)
        },
        writeText21:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                fontSize = 42
            // HR小明每天拼命筛简历打电话约面试 就是为了向老板证明 在招人这件事上 自己比星座靠谱 
            var next = this.nameCenterLightAfter(arr,"HR"+name+"每天","","拼命","筛简历打电话约面试",fontSize,0)
            next++
            next = this.nameCenterLightAfter(arr,"就是为了向老板证明","","","",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"在招人这件事上","","","",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"自己比星座","","靠谱","",fontSize,next)
        },
        writeText22:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                len = this.getNameLength(name),
                fontSize = len < 4 ? 42 : len == 4 ? 39 : 36
            // 父母从来不催HR小明结婚 他们只会问 给你表侄子介绍个工作呗 要钱多事少离家近的好伐？
            var next = this.nameCenterLightTwice(arr,"父母从来不","催","HR"+name,"结婚",fontSize,0)
            next++
            next = this.nameCenterLightAfter(arr,"他们只会问","","","",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"给你表侄子介绍个工作呗","","","",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"要","","钱多事少离家近","的好伐？",fontSize,next)
        },
        writeText23:function(){
            var arr = [103,164,226,288,350],
                fontSize = 35,
                name = this.name
            // HR小明半夜两点给老板打电话:“领导，你睡了吗? ” 领导:“睡了，怎么了？” 小明怒吼:“老子还在筛简历!” 然后果断挂掉。
            var next = this.nameCenterLightAfter(arr,"HR",name,"半夜两点","给老板打电话:“领导，你睡了吗? ” ",fontSize,0)
            next++
            next = this.nameCenterLightAfter(arr,"领导:“","","睡了","，怎么了？”",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"",name,"怒吼",":“老子还在筛简历!”",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"然后果断","","挂掉","。",fontSize,next)
        },
        writeText24:function(){
            var arr = [103,164,226,288,350],
                fontSize = 42,
                name = this.name
            // 心狠手辣的HR小明看见不合适的简历,就坚决淘汰 有一天,小明添了一下自己的手指,结果被辣哭了  拷贝
            var next = this.nameCenterLightFirst(arr,"心狠手辣","的HR",name,"看见不合适的简历,就坚决淘汰",fontSize,0)
            next++
            next = this.nameCenterLightEnd(arr,"有一天,",name,"舔了一下自己的手指,结果被","辣哭了",fontSize,next)
        },
        writeText25:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                fontSize = 40
            // HR小明捡到了阿拉丁神灯 许愿死之前能招到100个员工 之后，小明获得了永生 
            var next = this.nameCenterLightEnd(arr,"HR",name,"捡到了","阿拉丁神灯",fontSize,0)
            next++
            next = this.nameCenterLightEnd(arr,"许愿死之前能招到","","100个员工","",fontSize,next)
            next++
            next = this.nameCenterLightEnd(arr,"之后，",name,"获得了","永生",fontSize,next)
        },
        writeText26:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                fontSize = 46
            // 小明很羡慕那些资历丰富的HR，擅长约面招人留人 不像自己，除了帅，竟一无是处
            var next = this.nameCenterLightEnd(arr,name,"很羡慕","那些资历丰富的HR，擅长约面招人留人","",fontSize,0)
            next++
            next = this.nameCenterLightTwice(arr,"不像自己，除了","帅","，竟","一无是处",fontSize,next)
        },
        writeText27:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                fontSize = 40
            // 同事和HR小明打招呼: “吃饭了吗”  HR小明和同事打招呼: “在帮你招了，别催我” 
            var next = this.nameCenterLightEnd(arr,"同事和HR",name,"打招呼: ","",fontSize,0)
            next++
            next = this.nameCenterLightAfter(arr,"“","","吃饭了吗","”",fontSize,next)
            next++
            next = this.nameCenterLightEnd(arr,"HR",name,"和同事打招呼: ","",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"“在帮你招了，","","别催我","”",fontSize,next)
        },
        writeText28:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                fontSize = 45
            // 应聘者问HR小明: “今天就你一个人面我啊?” 小明生气的回答道: “半个人我怕把你吓走” 
            var next = this.nameCenterLightEnd(arr,"应聘者问HR",name,": ","",fontSize,0)
            next++
            next = this.nameCenterLightAfter(arr,"“今天就你","","一个人","我啊?”",fontSize,next)
            next++
            next = this.nameCenterLightEnd(arr,name,"生气的回答道: ","","",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"“","","半个人","我怕把你吓走”",fontSize,next)
        },
        writeText29:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                fontSize = 45
            // 有人找HR小明问路 小明一巴掌扇过去，说: “不找工作还想找我唠嗑,信不信老子揍你！”
            var next = this.nameCenterLightEnd(arr,"有人找HR",name,"","问路",fontSize,0)
            next++
            next = this.nameCenterLightEnd(arr,name,"","一巴掌扇过去，说: ","",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"“","","不找工作","还想找我唠嗑,信不信老子揍你！”",fontSize,next)
        },
        writeText30:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                fontSize = 42
            // 面试时，候选人问HR小明:“我诚实正直努力，为什么没人要”小明撕了简历，大吼一声:“不会PS还敢应聘设计师，给老子滚” 
            var next = this.nameCenterLightAfterMore(
                    arr,
                    "面试时，候选人问HR",
                    name+":“我诚实正直努力，为什么",
                    "没人要",
                    "”"+name+"撕了简历，大吼一声:“",
                    "不会PS",
                    "还敢应聘设计师，给老子滚”",
                    fontSize,
                    0
                )
        },
        writeText31:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                fontSize = 42
            // HR小明梦见明天上午的面试者都不来了，朋友安慰小明,别担心，梦是反的。这意味着你下午的面试者都不来了 
            this.nameCenterLightAfterMoreTwice(
                arr,
                "HR",
                name,
                "梦见",
                "明天上午的面试者都",
                "不来",
                "了，朋友安慰小明,别担心，梦是",
                "反的",
                "。这意味着你",
                "下午",
                "的面试者都不来了",
                fontSize,
                0
            )
        },
        writeText32:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                fontSize = 42
            // 有一天小明遇到了网络诈骗，小明说：“大哥，你别废话了，咱俩是同行。”对方认真的问的：“你干啥的”小明说：“HR....” 
            this.nameCenterLightAfterMoreTwice(
                arr,
                "有一天",
                name+"遇到了",
                "网络诈骗",
                "，"+name+"说：“大哥，你别废话了，咱俩是",
                "同行",
                "。”对方认真的问的：“你干啥的”"+name+"说：“",
                "HR",
                "....”",
                "",
                "",
                fontSize,
                0
            )
        },
        writeText33:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                fontSize = 38
            // 做了HR以后 小明短短一年就出书了 书名叫 《候选人爽约的1000个借口》 
            var next = this.nameCenterLightEnd(arr,"做了HR以后","","","",fontSize,0)
            next++
            next = this.nameCenterLightAfter(arr,name+"短短一年就","","出书","了",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"书名叫: ","","","",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"《候选人爽约的1000个","","借口","》",fontSize,next)
        },
        writeText34:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                len = this.getNameLength(name),
                fontSize = len > 4 ? 42 : 46
            // 妈： 小明，你一个做HR的 怎么还给自己招不到对象 
            var next = this.nameCenterLightEnd(arr,"妈：","","","",fontSize,0)
            next++
            next = this.nameCenterLightAfter(arr,name,"，你一个做HR的","","",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"怎么还给自己招不到","","对象","",fontSize,next)
        },
        writeText35:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                fontSize = 40
            // 小明说 我从大学毕业就做了HR,从一无所有发展到身无分文,再从身无分文发展到负债累累 这就是我,不一样的烟火 
            var next = this.nameCenterLightEnd(arr,name+"说","","","",fontSize,0)
            next++
            next = this.nameCenterLightEnd(
                arr,
                "我从大学毕业",
                "就做了HR,从一无所有发展到身无分文,",
                "再从身无分文发展到负债累累",
                "",
                fontSize,
                next
            )
            next++
            next = this.nameCenterLightEnd(arr,"这就是我,","","","不一样的烟火",fontSize,next)
        },
        writeText36:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                len = this.getNameLength(name),
                fontSize = len <= 2 ? 44 : len <= 3 ? 40 : len <= 4 ? 38 : 36
            // HR小明每次半夜发朋友圈不是为了骗同情 而是为了让老板看到 在招人这件事上，他真的在努力
            var next = this.nameCenterLightEnd(
                arr,
                "HR",
                name,
                "每次半夜发",
                "朋友圈",
                fontSize,
                0
            )
            next++
            next = this.nameCenterLightEnd(arr,"不是为了骗同情","","","",fontSize,next)
            next++
            next = this.nameCenterLightEnd(arr,"","而是为了让老板看到","","",fontSize,next)
            next++
            next = this.nameCenterLightEnd(arr,"","在招人这件事上，他真的在","","努力",fontSize,next)
        },
        writeText37:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                fontSize = 48
            // 在HR小明眼里 生活不止眼前的苟且 还有对面候选人的狂野 
            var next = this.nameCenterLightEnd(arr,"在HR",name,"眼里","",fontSize,0)
            next++
            next = this.nameCenterLightEnd(arr,"","生活不止眼前的","","苟且",fontSize,next)
            next++
            next = this.nameCenterLightEnd(arr,"","还有对面候选人的","","狂野 ",fontSize,next)
        },
        writeText38:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                fontSize = 50
            // 每封简历小明平均只看1分钟 其中发呆时长 50秒 
            var next = this.nameCenterLightEnd(arr,"每封简历",name,"平均只看","1分钟",fontSize,0)
            next++
            next = this.nameCenterLightEnd(arr,"","其中发呆时长","","",fontSize,next)
            next++
            next = this.nameCenterLightEnd(arr,"","","","50秒",fontSize,next)
        },
        writeText39:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                fontSize = 40
            // “小明，什么时候才能招到人啊” “你们到底有完没完,他都进精神病院了，你们还不放过他” 小明身后的护士骂道。 
            var next = this.nameCenterLightEnd(arr,"“"+name,"","，什么时候才能招到人啊”","",fontSize,0)
            next++
            next = this.nameCenterLightAfter(arr,"","“你们到底有完没完,他都进","精神病院","了，你们还不放过他”",fontSize,next)
            next++
            next = this.nameCenterLightEnd(arr,"",name,"身后的护士骂道。","",fontSize,next)
        },
        writeText40:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                fontSize = 40
            // 看着不断下降的入职率 HR小明叹了口气说： 幸好我的体重和发际线 还在不断上升 
            var next = this.nameCenterLightEnd(arr,"","看着不断下降的","","入职率",fontSize,0)
            next++
            next = this.nameCenterLightEnd(arr,"HR",name,"叹了口气说：","",fontSize,next)
            next++
            next = this.nameCenterLightTwice(arr,"幸好我的","体重","和","发际线",fontSize,next)
            next++
            next = this.nameCenterLightEnd(arr,"","","还在不断","上升",fontSize,next)
        },
        writeText41:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                len = this.getNameLength(name),
                fontSize = len <= 2 ? 40 : len == 4 ? 34 : len >= 5 ? 32 : 36
            // 小明:钱多活少离家近是吗？ 你怎么知道？ 小明：来，南墙我都准备好了 你们这些人不撞两下就难受
            var next = this.nameCenterLightAfter(arr,name+":","","钱多活少离家近","是吗？",fontSize,0)
            next++
            next = this.nameCenterLightEnd(arr,"你怎么知道？","","","",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,name+"：来，","","南墙","我都准备好了",fontSize,next)
            next++
            next = this.nameCenterLightEnd(arr,"","","你们这些人不撞两下就难受","",fontSize,next)
        },
        writeText42:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                fontSize = 40
            // 很多人的愿望一年一变 小明的愿望始终如一 他希望 每天都能收到很多的简历 
            var next = this.nameCenterLightAfter(arr,"","很多人的愿望","一年一变","",fontSize,0)
            next++
            next = this.nameCenterLightEnd(arr,name,"的愿望","","始终如一",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"他希望","","","",fontSize,next)
            next++
            next = this.nameCenterLightEnd(arr,"","","每天都能收到很多的简历","",fontSize,next)
        },
        writeText43:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                fontSize = 42
            // 小明经常感叹 早知道做HR要经常被放鸽子 我当初做鸽子的时候 就不那么努力修炼了 
            var next = this.nameCenterLightAfter(arr,name,"经常感叹","","",fontSize,0)
            next++
            next = this.nameCenterLightEnd(arr,"","","早知道做HR要经常被","放鸽子",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"","我当初做鸽子的时候","","",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"","就不那么努力","修炼","了",fontSize,next)
        },
        writeText44:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                len = this.getNameLength(name),
                fontSize = len <= 2 ? 42 : len >= 5 ? 38 : 40
            // 每当有项目无法按时上线的时候 HR 小明总会背着一口锅 从公司门口默默走过
            var next = this.nameCenterLightAfter(arr,"每当有项目","","无法","按时上线的时候",fontSize,0)
            next++
            next = this.nameCenterLightEnd(arr,"","HR "+name+"总会背着一口","","锅",fontSize,next)
            next++
            next = this.nameCenterLightAfter(arr,"","从公司门口","默默","走过",fontSize,next)
        },
        writeText45:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                fontSize = 40
            // 小明哭着说： 本人身在异乡被骗，无法回家 求朋友圈的好心人帮我介绍一个靠谱的产品经理 
            var next = this.nameCenterLightAfter(arr,"",name+"哭着说：","","",fontSize,0)
            next++
            next = this.nameCenterLightAfter(arr,"本人身在异乡","","被骗","，无法回家",fontSize,next)
            next++
            next = this.nameCenterLightEnd(arr,"","求朋友圈的好心人帮我介绍一个靠谱的","","产品经理",fontSize,next)
        },
        nameCenterLightTwice:function(arr,start,name,light,after,fontSize,startLine){
            var dis = fontSize,
                obj = null,
                nw = 0,
                startPosition = 0,
                left = 528,
                next = startLine
            this.ctx.font = fontSize+"px "+this.bold
            this.ctx.lineWidth = this.lineWidth
            
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"

            if(start){
                obj = this.breakText(arr,start,name,next,startPosition,left)
                next = obj.next
                startPosition = obj.start
                left = obj.left
            }

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            if(name){
                obj = this.breakText(arr,name,light,next,startPosition,left)
                next = obj.next
                startPosition = obj.start
                left = obj.left
            }

            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText(light,1000,1000)
            this.ctx.fillText(light,1000,1000)

            this.ctx.strokeText(after,1000,1000)
            this.ctx.fillText(after,1000,1000)
            
            obj = this.breakText(arr,light,after,next,startPosition,left)
            next = obj.next
            startPosition = obj.start
            left = obj.left

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            obj = this.breakText(arr,after,"",next,startPosition,left)
            next = obj.next
            return next
        },
        nameCenterLightCenter:function(arr,start,name,light,after,fontSize,startLine){
            var dis = fontSize
            this.ctx.font = fontSize+"px "+this.bold
            this.ctx.lineWidth = this.lineWidth
            
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText(start,62,arr[startLine])
            this.ctx.fillText(start,62,arr[startLine])

            var sp = this.ctx.measureText(start).width
            this.ctx.strokeText(name,62+sp,arr[startLine])
            this.ctx.fillText(name,62+sp,arr[startLine])

            this.ctx.strokeText(light,1000,1000)
            this.ctx.fillText(light,1000,1000)

            this.ctx.strokeText(after,1000,1000)
            this.ctx.fillText(after,1000,1000)

            var nw = this.ctx.measureText(name).width,
                startPosition = sp + nw,
                left = 528 - startPosition,
                next = startLine,
                i = 0
            
            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            var obj = this.breakText(arr,light,after,next,startPosition,left)
            next = obj.next
            startPosition = obj.start
            left = obj.left

            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            obj = this.breakText(arr,after,"",next,startPosition,left)
            next = obj.next
            return next
        },
        nameCenterLightFirst:function(arr,start,name,light,after,fontSize,startLine){
            var dis = fontSize
            this.ctx.font = fontSize+"px "+this.bold
            this.ctx.lineWidth = this.lineWidth
            
            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            this.ctx.strokeText(start,62,arr[startLine])
            this.ctx.fillText(start,62,arr[startLine])

            var sp = this.ctx.measureText(start).width
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText(name,62+sp,arr[startLine])
            this.ctx.fillText(name,62+sp,arr[startLine])

            this.ctx.strokeText(light,1000,1000)
            this.ctx.fillText(light,1000,1000)

            this.ctx.strokeText(after,1000,1000)
            this.ctx.fillText(after,1000,1000)

            var nw = this.ctx.measureText(name).width,
                startPosition = sp + nw,
                left = 528 - startPosition,
                next = startLine,
                i = 0
            
            var obj = this.breakText(arr,light,after,next,startPosition,left)
            next = obj.next
            startPosition = obj.start
            left = obj.left

            obj = this.breakText(arr,after,"",next,startPosition,left)
            next = obj.next
            return next
        },
        nameCenterLightEnd:function(arr,start,name,light,after,fontSize,startLine){
            var dis = fontSize,
                obj = null,
                sp = 0,
                startPosition = 0,
                left = 0,
                next = startLine
            this.ctx.font = fontSize+"px "+this.bold
            this.ctx.lineWidth = this.lineWidth
            
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            if(start){
                this.ctx.strokeText(start,62,arr[next])
                this.ctx.fillText(start,62,arr[next])
                sp = this.ctx.measureText(start).width
            }
            
            this.ctx.strokeText(name,1000,1000)
            this.ctx.fillText(name,1000,1000)

            this.ctx.strokeText(light,1000,1000)
            this.ctx.fillText(light,1000,1000)

            this.ctx.strokeText(after,1000,1000)
            this.ctx.fillText(after,1000,1000)

            // this.ctx.strokeText(name,62+sp,arr[next])
            // this.ctx.fillText(name,62+sp,arr[next])

            startPosition = sp
            left = 528 - startPosition
            if(name){
                obj = this.breakText(arr,name,light,next,startPosition,left)
                next = obj.next
                startPosition = obj.start
                left = obj.left
            }

            // var nw = this.ctx.measureText(name).width,
            //     startPosition = sp + nw,
            //     left = 528 - startPosition,
            //     next = startLine
            if(light){
                obj = this.breakText(arr,light,after,next,startPosition,left)
                next = obj.next
                startPosition = obj.start
                left = obj.left
            }

            if(after){
                this.ctx.strokeStyle = "#28b494"
                this.ctx.fillStyle = "#28b494"
                obj = this.breakText(arr,after,"",next,startPosition,left)
                next = obj.next
            }
            return next
        },
        // HR+name+light+after (name 不会换行) 最多3行
        nameCenterLightAfter:function(arr,start,name,light,after,fontSize,startLine){
            var dis = fontSize,
                sp = 0,
                nw = 0,
                startPosition = 0
                left = 528,
                next = startLine

            this.ctx.font = fontSize+"px "+this.bold
            this.ctx.lineWidth = this.lineWidth
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            if(start){
                this.ctx.strokeText(start,62,arr[next])
                this.ctx.fillText(start,62,arr[next])
                sp = this.ctx.measureText(start).width
            }

            this.ctx.strokeText(name,1000,1000)
            this.ctx.fillText(name,1000,1000)

            this.ctx.strokeText(light,1000,1000)
            this.ctx.fillText(light,1000,1000)

            this.ctx.strokeText(after,1000,1000)
            this.ctx.fillText(after,1000,1000)
            
            // this.ctx.strokeText(name,62+sp,arr[next])
            // this.ctx.fillText(name,62+sp,arr[next])

            startPosition = sp
            left = 528 - startPosition
            if(name){
                var obj = this.breakText(arr,name,light,next,startPosition,left)
                next = obj.next
                startPosition = obj.start
                left = obj.left
            }

            // nw = this.ctx.measureText(name).width
            // start = sp + nw
            // left = 528 - start
            // next = startLine
            if(light){
                this.ctx.strokeStyle = "#28b494"
                this.ctx.fillStyle = "#28b494"

                obj = this.breakText(arr,light,after,next,startPosition,left)
                next = obj.next
                startPosition = obj.start
                left = obj.left
            }
            if(after){
                this.ctx.strokeStyle = "#0068b7"
                this.ctx.fillStyle = "#0068b7"
                obj = this.breakText(arr,after,"",next,startPosition,left)
                next = obj.next
            }
            return next
        },
        nameCenterLightAfterMore:function(arr,start,name,light,after,light2,last,fontSize,startLine){
            var dis = fontSize,
                sp = 0,
                nw = 0,
                startPosition = 0
                left = 528,
                next = startLine

            this.ctx.font = fontSize+"px "+this.bold
            this.ctx.lineWidth = this.lineWidth
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText(start,62,arr[next])
            this.ctx.fillText(start,62,arr[next])

            this.ctx.strokeText(name,1000,1000)
            this.ctx.fillText(name,1000,1000)

            this.ctx.strokeText(light,1000,1000)
            this.ctx.fillText(light,1000,1000)

            this.ctx.strokeText(after,1000,1000)
            this.ctx.fillText(after,1000,1000)
            
            sp = this.ctx.measureText(start).width
            // this.ctx.strokeText(name,62+sp,arr[next])
            // this.ctx.fillText(name,62+sp,arr[next])

            startPosition = sp
            left = 528 - startPosition
            var obj = this.breakText(arr,name,light,next,startPosition,left)
            next = obj.next
            startPosition = obj.start
            left = obj.left

            // nw = this.ctx.measureText(name).width
            // start = sp + nw
            // left = 528 - start
            // next = startLine
            
            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"

            obj = this.breakText(arr,light,after,next,startPosition,left)
            next = obj.next
            startPosition = obj.start
            left = obj.left

            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            obj = this.breakText(arr,after,"",next,startPosition,left)
            next = obj.next
            startPosition = obj.start
            left = obj.left

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"

            obj = this.breakText(arr,light2,last,next,startPosition,left)
            next = obj.next
            startPosition = obj.start
            left = obj.left

            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            obj = this.breakText(arr,last,"",next,startPosition,left)
            next = obj.next
            return next
        },
        nameCenterLightAfterMoreTwice:function(arr,start,name,light,after,light2,last,light3,last2,light4,last3,fontSize,startLine){
            var dis = fontSize,
                sp = 0,
                nw = 0,
                startPosition = 0
                left = 528,
                next = startLine

            this.ctx.font = fontSize+"px "+this.bold
            this.ctx.lineWidth = this.lineWidth
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText(start,62,arr[next])
            this.ctx.fillText(start,62,arr[next])

            this.ctx.strokeText(name,1000,1000)
            this.ctx.fillText(name,1000,1000)

            this.ctx.strokeText(light,1000,1000)
            this.ctx.fillText(light,1000,1000)

            this.ctx.strokeText(after,1000,1000)
            this.ctx.fillText(after,1000,1000)
            
            sp = this.ctx.measureText(start).width
            // this.ctx.strokeText(name,62+sp,arr[next])
            // this.ctx.fillText(name,62+sp,arr[next])

            startPosition = sp
            left = 528 - startPosition
            var obj = this.breakText(arr,name,light,next,startPosition,left)
            next = obj.next
            startPosition = obj.start
            left = obj.left

            // nw = this.ctx.measureText(name).width
            // start = sp + nw
            // left = 528 - start
            // next = startLine
            
            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"

            obj = this.breakText(arr,light,after,next,startPosition,left)
            next = obj.next
            startPosition = obj.start
            left = obj.left

            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            obj = this.breakText(arr,after,light2,next,startPosition,left)
            next = obj.next
            startPosition = obj.start
            left = obj.left

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"

            obj = this.breakText(arr,light2,last,next,startPosition,left)
            next = obj.next
            startPosition = obj.start
            left = obj.left

            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            obj = this.breakText(arr,last,light2,next,startPosition,left)
            next = obj.next
            startPosition = obj.start
            left = obj.left

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"

            obj = this.breakText(arr,light3,last2,next,startPosition,left)
            next = obj.next
            startPosition = obj.start
            left = obj.left

            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            obj = this.breakText(arr,last2,light4,next,startPosition,left)
            next = obj.next
            startPosition = obj.start
            left = obj.left

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            obj = this.breakText(arr,light4,last3,next,startPosition,left)
            next = obj.next
            startPosition = obj.start
            left = obj.left

            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            obj = this.breakText(arr,last3,"",next,startPosition,left)
            next = obj.next
            return next
        },
        centerLight:function(arr,start,light,end,next){
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText(start,62,arr[next])
            this.ctx.fillText(start,62,arr[next])

            var sp = this.ctx.measureText(start).width
            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            this.ctx.strokeText(light,62+sp,arr[next])
            this.ctx.fillText(light,62+sp,arr[next])

            var cp = this.ctx.measureText(light).width
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText(end,62+sp+cp,arr[next])
            this.ctx.fillText(end,62+sp+cp,arr[next])
        },
        breakText:function(arr,text,after,next,start,left){
            var temp = 0,
                i = 0
            for(i = 0; i < text.length; i++){
                temp = this.ctx.measureText(text.slice(0,i+1)).width
                if(temp > left){
                    break
                }
            }
            this.ctx.strokeText(text.slice(0,i),62+start,arr[next])
            this.ctx.fillText(text.slice(0,i),62+start,arr[next])

            if(i < text.length){  // 够填满一行，需要换行
                next++
                start = 0
                left = 528
                var obj = this.breakText(arr,text.slice(i),after,next,start,left)
                next = obj.next
                start = obj.start
                left = obj.left
                // this.ctx.strokeText(text.slice(i),62,arr[next])
                // this.ctx.fillText(text.slice(i),62,arr[next])
                // start = this.ctx.measureText(text.slice(i)).width
                // left = 528 - start
            }else{  // 已填满
                start = start + this.ctx.measureText(text.slice(0,i)).width
                left = 528 - start
                for(i = 0; i < after.length; i++){
                    temp = this.ctx.measureText(after.slice(0,i+1)).width
                    if(temp > left){
                        break
                    }
                }
            }
            return {
                next:next,
                start:start,
                left:left
            }
        },
        getNameLength:function(name){
            this.ctx.font = "40px "+this.bold
            this.ctx.lineWidth = this.lineWidth
            this.ctx.strokeText(name,1000,1000)
            this.ctx.fillText(name,1000,1000)
            var sp = this.ctx.measureText(name).width,
                num = Math.ceil(sp / 40)
            return num
        },
        drawWords:function(func){
            this.ctx.save()
            this['writeText'+func]()
            this.ctx.restore()
            this.ctx.font = "30px "+this.bold
            this.ctx.lineWidth = 1;
            this.ctx.strokeStyle = '#0068b7'
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText(this.name+"的招人真相",62,463)
            this.ctx.fillText(this.name+"的招人真相",62,463)
        },
        startDraw:function(){
            var self = this
            if(this.name){
                this.tips = ""
                this.shakeClass = ""
                var func = Math.ceil(Math.random() * 45)
                this.drawWords(func)

                this.type = "out"
                setTimeout(function(){
                    self.activePage = 1
                },500)
                this.drawImgContent()
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
        drawImgContent:function(){
            var self = this,
                words = this.canvas.toDataURL("image/png"),
                img = new Image()
            
            img.onload = function(){
                self.imgCtx.drawImage(img,45,189,643,532)
            }
            img.src = words
            setTimeout(function(){
                self.url = self.imgCanvas.toDataURL("image/png")
            },500)
        },
        recruitEvent:function(){
            if(self.miniprogram){
                wx.miniProgram.navigateBack()
            }else{
                window.location.href = "https://www.lagou.com"
            }
        },
        showShare:function(){
            var func = Math.ceil(Math.random() * 45)
            this.initCanvas()
            this.drawWords(func)
            this.drawImgContent()
        }
    }
})
},{}]},{},[1]);