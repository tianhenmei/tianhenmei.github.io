var app = new Vue({
    el:"#app",
    data:{
        activePage:1,
        name:"小明小明",
        canvas:null,
        ctx:null,
        img:null
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
        }
        this.img.src = "images/ercode.png"
    },
    methods:{
        initCanvas:function(){
            this.ctx.save()
            this.ctx.fillStyle = '#fefef2'
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

            this.ctx.drawImage(this.img,485,370)

            this.ctx.font = "30px bold"
            this.ctx.lineWidth = 1;
            this.ctx.strokeStyle = '#0068b7'
            this.ctx.strokeText(this.name+"的招人真相",62,463)
            this.ctx.fillStyle = "#0068b7"
            this.ctx.fillText(this.name+"的招人真相",62,463)

            this.ctx.restore()
            this.ctx.save()
            var func = 32//Math.ceil(Math.random() * 2)
            this['writeText'+func]()
            this.ctx.restore()
        },
        writeText1:function(){
            this.ctx.font = "48px bold"
            this.ctx.lineWidth = 3
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("人家去雍和宫求姻缘",62,127)  // 97
            this.ctx.fillText("人家去雍和宫求姻缘",62,127)

            this.ctx.strokeText(this.name+"去雍和宫求",62,190)  // 160+30
            this.ctx.fillText(this.name+"去雍和宫求",62,190)  // 160+30

            var txt = '前端工程师',
                len = this.name.length
            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            this.ctx.strokeText(txt.slice(0,6 - len),62+240+48*len,190)  // 160+30
            this.ctx.fillText(txt.slice(0,6 - len),62+240+48*len,190)  // 160+30

            this.ctx.strokeText(txt.slice(6-len),62,252)  // 222+30
            this.ctx.fillText(txt.slice(6-len),62,252)  // 222+30
        },
        writeText2:function(){
            this.ctx.font = "48px bold"
            this.ctx.lineWidth = 3
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText(this.name+"，快回家吧",62,90)  // 60+30
            this.ctx.fillText(this.name+"，快回家吧",62,90)  // 60+30

            this.ctx.strokeText("就算",62,152)  // 122+30
            this.ctx.fillText("就算",62,152)  // 122+30

            this.ctx.strokeText("再晚",62+48*4,152)  // 122+30
            this.ctx.fillText("再晚",62+48*4,152)  // 122+30

            this.ctx.strokeText("不来面试的候选人",62,215)  // 185+30
            this.ctx.fillText("不来面试的候选人",62,215)  // 185+30

            this.ctx.strokeText("还是",62,276)  // 246+30
            this.ctx.fillText("还是",62,276)  // 246+30

            this.ctx.strokeText("的",62+48*5,276)  // 246+30
            this.ctx.fillText("的",62+48*5,276)  // 246+30

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            this.ctx.strokeText("加班",62+48*2,152)  // 122+30
            this.ctx.fillText("加班",62+48*2,152)  // 122+30

            this.ctx.strokeText("不会来",62+48*2,276)  // 246+30
            this.ctx.fillText("不会来",62+48*2,276)  // 246+30
        },
        writeText3:function(){
            var dis = 40
            this.ctx.font = "40px bold"
            this.ctx.lineWidth = 3
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("作为一个月薪",62,90)
            this.ctx.fillText("作为一个月薪",62,90)

            var k6 = this.ctx.measureText("6k").width+3
            this.ctx.strokeText("的HR",62+dis*6+k6,90)
            this.ctx.fillText("的HR",62+dis*6+k6,90)

            this.ctx.strokeText(this.name+"的工作是",62,152)
            this.ctx.fillText(this.name+"的工作是",62,152)

            this.ctx.strokeText("每天去劝月薪",62,215)
            this.ctx.fillText("每天去劝月薪",62,215)

            var k15 = this.ctx.measureText("15k").width+3
            this.ctx.strokeText("的人",62+dis*6+k15,215)
            this.ctx.fillText("的人",62+dis*6+k15,215)

            this.ctx.strokeText("不要理会外面月薪",62,276)
            this.ctx.fillText("不要理会外面月薪",62,276)

            var k20 = this.ctx.measureText("20k").width+3
            this.ctx.strokeText("的工作",62+dis*8+k20,276)
            this.ctx.fillText("的工作",62+dis*8+k20,276)

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            this.ctx.strokeText("6k",62+dis*6+1,90)
            this.ctx.fillText("6k",62+dis*6+1,90)

            this.ctx.strokeText("15k",62+dis*6+1,215)
            this.ctx.fillText("15k",62+dis*6+1,215)

            this.ctx.strokeText("20k",62+dis*8+1,276)
            this.ctx.fillText("20k",62+dis*8+1,276)
        },
        writeText4:function(){
            var len = this.name.length,
                dis = len <=2 ? 46 : 40
                
            this.ctx.font = len <=2 ? "46px bold" : "40px bold"
            this.ctx.lineWidth = 3
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("一两个候选人夸自己",62,90)
            this.ctx.fillText("一两个候选人夸自己",62,90)

            this.ctx.strokeText(this.name+"不以为意",62,152)
            this.ctx.fillText(this.name+"不以为意",62,152)
            //一两个候选人夸自己帅 小明不以为意 当越来越多人夸他帅时 小明才意识到事态的严重来的候选人越来越不靠谱了  
            this.ctx.strokeText("当越来越多人夸他",62,215)
            this.ctx.fillText("当越来越多人夸他",62,215)

            this.ctx.strokeText("时",62+dis*9,215)
            this.ctx.fillText("时",62+dis*9,215)

            this.ctx.strokeText(this.name+"才意识到事态",62,276)
            this.ctx.fillText(this.name+"才意识到事态",62,276)

            this.ctx.strokeText("来的候选人越来越",62,346)
            this.ctx.fillText("来的候选人越来越",62,346)

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            this.ctx.strokeText("帅",62+dis*9,90)
            this.ctx.fillText("帅",62+dis*9,90)

            this.ctx.strokeText("帅",62+dis*8,215)
            this.ctx.fillText("帅",62+dis*8,215)

            this.ctx.strokeText("的严重",62+dis*(6+len),276)
            this.ctx.fillText("的严重",62+dis*(6+len),276)

            this.ctx.strokeText("不靠谱",62+dis*8,346)
            this.ctx.fillText("不靠谱",62+dis*8,346)
        },
        writeText5:function(){
            var len = this.name.length,
                dis = len <=2 ? 46 : 40
                
            this.ctx.font = len <=2 ? "46px bold" : "40px bold"
            this.ctx.lineWidth = 3
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("朋友都夸HR小明",62,90)
            this.ctx.fillText("朋友都夸HR小明",62,90)
            var HR = this.ctx.measureText("HR").width

            this.ctx.strokeText("可是"+this.name+"觉得没用",62,152)
            this.ctx.fillText("可是"+this.name+"觉得没用",62,152)
            //朋友都夸HR小明长得好看 可是小明觉得没用 因为候选人不会因为自己长得好看 就不放他鸽子 
            this.ctx.strokeText("因为候选人不会因为自己",62,215)
            this.ctx.fillText("因为候选人不会因为自己",62,215)

            this.ctx.strokeText("就不放他鸽子",62,346)
            this.ctx.fillText("就不放他鸽子",62,346)

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            this.ctx.strokeText("长得好看",62+dis*6+HR,90)
            this.ctx.fillText("长得好看",62+dis*6+HR,90)

            this.ctx.strokeText("长得好看",62,276)
            this.ctx.fillText("长得好看",62,276)
        },
        writeText6:function(){
            var len = this.name.length,
                dis = 48
                
            this.ctx.font = "48px bold"
            this.ctx.lineWidth = 3
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("请用两个字形容HR"+this.name.slice(0,2),62,90)
            this.ctx.fillText("请用两个字形容HR"+this.name.slice(0,2),62,90)
            
            //请用两个字形容HR小明的候选人  在哪？ 
            this.ctx.strokeText(this.name.slice(2)+"的候选人",62,152)
            this.ctx.fillText(this.name.slice(2)+"的候选人",62,152)

            this.ctx.font = "60px bold"
            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            this.ctx.strokeText("在哪？ ",62,287)
            this.ctx.fillText("在哪？ ",62,287)
        },
        writeText7:function(){
            var len = this.name.length,
                dis = 46
                
            this.ctx.font = "46px bold"
            this.ctx.lineWidth = 3
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText(this.name+"筛简历的时候",62,90)
            this.ctx.fillText(this.name+"筛简历的时候",62,90)

            this.ctx.strokeText("首先会留下那些",62,152)
            this.ctx.fillText("首先会留下那些",62,152)
            //小明筛简历的时候 首先会留下那些好看的面孔 因为同样是被放鸽子 不好看的人更让人上火 

            this.ctx.strokeText("的面孔",62+dis*9,152)
            this.ctx.fillText("的面孔",62+dis*9,152)

            this.ctx.strokeText("因为同样是被放鸽子",62,215)
            this.ctx.fillText("因为同样是被放鸽子",62,215)

            this.ctx.strokeText("的人更让人",62+dis*3,276)
            this.ctx.fillText("的人更让人",62+dis*3,276)

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            this.ctx.strokeText("好看",62+dis*7,152)
            this.ctx.fillText("好看",62+dis*7,152)

            this.ctx.strokeText("不好看",62,276)
            this.ctx.fillText("不好看",62,276)

            this.ctx.strokeText("上火",62+dis*8,276)
            this.ctx.fillText("上火",62+dis*8,276)
        },
        writeText8:function(){
            var dis = 48
                
            this.ctx.font = "48px bold"
            this.ctx.lineWidth = 3
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("HR "+this.name,62,90)
            this.ctx.fillText("HR "+this.name,62,90)

            this.ctx.strokeText("没有说走就走的旅程",62,152)
            this.ctx.fillText("没有说走就走的旅程",62,152)
            //HR 小明  没有说走就走的旅程 只有说胖就胖的体型 

            this.ctx.strokeText("只有",62,215)
            this.ctx.fillText("只有",62,215)

            this.ctx.strokeText("的体型",62+dis*6,215)
            this.ctx.fillText("的体型",62+dis*6,215)

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"

            this.ctx.strokeText("说胖就胖",62+dis*2,215)
            this.ctx.fillText("说胖就胖",62+dis*2,215)
        },
        writeText9:function(){
            var len = this.name.length,
                dis = 46

            this.ctx.font = "46px bold"
            this.ctx.lineWidth = 3
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("别看HR"+this.name,62,90)
            this.ctx.fillText("别看HR"+this.name,62,90)

            var nl = this.ctx.measureText(this.name).width
            if(nl > dis * 2+10){
                this.ctx.lineWidth = 0
                this.ctx.clearRect(50,50,this.canvas.width - 100,300);
                this.ctx.beginPath()
                this.ctx.fillStyle = "#fefef2"
                this.ctx.rect(50,50,this.canvas.width - 100,300);
                this.ctx.fill()
                this.ctx.closePath()
                dis = 40
                this.ctx.lineWidth = 3
                this.ctx.font = "40px bold"
                this.ctx.fillStyle = "#0068b7"
                this.ctx.strokeText("别看HR"+this.name,62,90)
                this.ctx.fillText("别看HR"+this.name,62,90)
                nl = this.ctx.measureText(this.name).width
            }
            
            this.ctx.strokeText("因为没有合适的简历",62+dis*3,152)
            this.ctx.fillText("因为没有合适的简历",62+dis*3,152)
            //别看HR小明 表面上因为没有合适的简历 而愁眉苦脸 小明背地里也愁眉苦脸 
            this.ctx.strokeText("而愁眉苦脸",62,215)
            this.ctx.fillText("而愁眉苦脸",62,215)

            this.ctx.strokeText(this.name,62,276)
            this.ctx.fillText(this.name,62,276)

            this.ctx.strokeText("也愁眉苦脸",62+dis*3+nl,276)
            this.ctx.fillText("也愁眉苦脸",62+dis*3+nl,276)

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            this.ctx.strokeText("表面上",62,152)
            this.ctx.fillText("表面上",62,152)

            this.ctx.strokeText("背地里",62+nl,276)
            this.ctx.fillText("背地里",62+nl,276)
        },
        writeText10:function(){
            var arr = [90,152,215,276,346],
                next = 2,
                dis = 44
                
            this.ctx.font = "44px bold"
            this.ctx.lineWidth = 3
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText(this.name,62,90)
            this.ctx.fillText(this.name,62,90)
            
            var nw = this.ctx.measureText(this.name).width,
                total = 12,
                num = Math.floor((total*dis - nw) / dis),
                after = "已经不是那个打任何电话都轻声细语的小可爱了"

            this.ctx.strokeText(after.slice(0,num),62+nw,90)
            this.ctx.fillText(after.slice(0,num),62+nw,90)

            if(after.length - num > total){
                this.ctx.strokeText(after.slice(num,12),62,152)
                this.ctx.fillText(after.slice(num,12),62,152)

                this.ctx.strokeText(after.slice(16,num+total),62+dis*(16-num),152)
                this.ctx.fillText(after.slice(16,num+total),62+dis*(16-num),152)
                this.ctx.strokeText(after.slice(num+total),62,215)
                this.ctx.fillText(after.slice(num+total),62,215)

                next = 3
            }else{
                this.ctx.strokeText(after.slice(num),62,152)
                this.ctx.fillText(after.slice(num),62,152)
            }
            //小明已经不是那个打任何电话都轻声细语的小可爱了 而是打候选人电话会自觉跪下来的HR 
            this.ctx.strokeText("而是打候选人电话会自觉",62,arr[next])
            this.ctx.fillText("而是打候选人电话会自觉",62,arr[next])

            this.ctx.strokeText("的HR",62+dis*2,arr[next+1])
            this.ctx.fillText("的HR",62+dis*2,arr[next+1])

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"

            this.ctx.strokeText("轻声细语",62+dis*(12-num),152)
            this.ctx.fillText("轻声细语",62+dis*(12-num),152)

            this.ctx.strokeText("跪",62+dis*11,arr[next])
            this.ctx.fillText("跪",62+dis*11,arr[next])

            this.ctx.strokeText("下来",62,arr[next+1])
            this.ctx.fillText("下来",62,arr[next+1])
        },
        writeText11:function(){
            var arr = [90,152,215,276,346,406],
                next = 1,
                dis = 38
            // HR 小明和朋友一起去逛超市 看见一口锅便拿起来背在背上 朋友问他为什么 小明说：喔？我背黑锅都背习惯了
            this.ctx.font = "38px bold"
            this.ctx.lineWidth = 3
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("HR "+this.name,62,90)
            this.ctx.fillText("HR "+this.name,62,90)

            var nw1 = this.ctx.measureText(this.name).width
            if(nw1 > dis * 2){
                this.ctx.lineWidth = 0
                this.ctx.clearRect(50,50,this.canvas.width - 100,300);
                this.ctx.beginPath()
                this.ctx.fillStyle = "#fefef2"
                this.ctx.rect(50,50,this.canvas.width - 100,300);
                this.ctx.fill()
                this.ctx.closePath()
                dis = 35
                this.ctx.lineWidth = 3
                this.ctx.font = "35px bold"
                this.ctx.fillStyle = "#0068b7"
                this.ctx.strokeText("HR "+this.name,62,90)
                this.ctx.fillText("HR "+this.name,62,90)
            }

            var HR = this.ctx.measureText("HR ").width,
                nw = this.ctx.measureText(this.name).width,
                num = Math.floor((528 - nw - HR) / dis),
                after = "和朋友一起去逛超市"

            this.ctx.strokeText(after.slice(0,num),62+nw+HR,90)
            this.ctx.fillText(after.slice(0,num),62+nw+HR,90)

            if(after.length - num > 0){
                this.ctx.strokeText(after.slice(num),62,152)
                this.ctx.fillText(after.slice(num),62,152)

                next = 2
            }
            this.ctx.strokeText("看见一口锅便拿起来背在背上",62,arr[next])
            this.ctx.fillText("看见一口锅便拿起来背在背上",62,arr[next])

            this.ctx.strokeText("朋友问他为什么",62,arr[next+1])
            this.ctx.fillText("朋友问他为什么",62,arr[next+1])

            this.ctx.strokeText(this.name+"说：喔？我",62,arr[next+2])
            this.ctx.fillText(this.name+"说：喔？我",62,arr[next+2])

            var nw2 = this.ctx.measureText(this.name+"说：喔？我").width
            num = Math.floor((534 - nw2 - dis * 3) / dis)
            after = "都背习惯了"

            this.ctx.strokeText(after.slice(0,num),62+dis*3+nw2,arr[next+2])
            this.ctx.fillText(after.slice(0,num),62+dis*3+nw2,arr[next+2])

            if(after.length > num){
                this.ctx.strokeText(after.slice(num),62,arr[next+3])
                this.ctx.fillText(after.slice(num),62,arr[next+3])
            }

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"

            this.ctx.strokeText("背黑锅",62+nw2,arr[next+2])
            this.ctx.fillText("背黑锅",62+nw2,arr[next+2])
        },
        writeText12:function(){
            var arr = [90,152,215,276,346,406],
                next = 2,
                dis = 44
            // HR小明下定决定明天要约10个候选人来面试 不然用人部门会说，你看小明，除了腿长、腰细、脸好看,简直一无是处
            this.ctx.font = "44px bold"
            this.ctx.lineWidth = 3
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("HR"+this.name,62,90)
            this.ctx.fillText("HR"+this.name,62,90)

            var sp = this.ctx.measureText("HR").width,
                nw = this.ctx.measureText(this.name).width,
                num = Math.floor((528 - nw - sp) / dis),
                after = "下定决定明天要约10个候选人来面试"

            this.ctx.strokeText(after.slice(0,num),62+nw+sp,90)
            this.ctx.fillText(after.slice(0,num),62+nw+sp,90)

            this.ctx.strokeText(after.slice(num),62,152)
            this.ctx.fillText(after.slice(num),62,152)
            
            this.ctx.strokeText("不然用人部门会说，你看",62,215)
            this.ctx.fillText("不然用人部门会说，你看",62,215)

            sp = this.ctx.measureText("不然用人部门会说，你看").width
            var temp = 0,
                i = 0
            for(i = 0; i < this.name.length; i++){
                temp = this.ctx.measureText(this.name.slice(0,(i+1))).width
                if(temp > dis){
                    break
                }
            }
            this.ctx.strokeText(this.name.slice(0,i),62+sp,215)
            this.ctx.fillText(this.name.slice(0,i),62+sp,215)

            this.ctx.strokeText(this.name.slice(i),62,276)
            this.ctx.fillText(this.name.slice(i),62,276)

            sp = this.ctx.measureText(this.name.slice(i)).width
            this.ctx.strokeText("，除了",62+sp,276)
            this.ctx.fillText("，除了",62+sp,276)

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"

            var gmid = this.ctx.measureText("，除了").width,
                gleft = 528 - sp - gmid
            gafter = "腿长、腰细、脸好看"

            this.ctx.strokeText(gafter,1000,1000)
            this.ctx.fillText(gafter,1000,1000)

            for(i = 0; i < gafter.length; i++){
                temp = this.ctx.measureText(gafter.slice(0,(i+1))).width
                if(temp > gleft){
                    break
                }
            }
            this.ctx.strokeText(gafter.slice(0,i),62+sp+gmid,276)
            this.ctx.fillText(gafter.slice(0,i),62+sp+gmid,276)

            this.ctx.strokeText(gafter.slice(i),62,346)
            this.ctx.fillText(gafter.slice(i),62,346)

            sp = this.ctx.measureText(gafter.slice(i)).width
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("，简直",62+sp,346)
            this.ctx.fillText("，简直",62+sp,346)

            temp = this.ctx.measureText("，简直").width
            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            this.ctx.strokeText("一无是处",62+sp+temp,346)
            this.ctx.fillText("一无是处",62+sp+temp,346)
        },
        writeText13:function(){
            var arr = [90,152,215,276,346,406],
                next = 2,
                dis = 42
            // 现在的人都太花心了:开始喜欢吴宣仪,后来喜欢孟美岐,现在喜欢王菊 像HR小明就一直很专一,只喜欢正在找工作的人
            this.ctx.font = "42px bold"
            this.ctx.lineWidth = 3
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("现在的人都太",62,90)
            this.ctx.fillText("现在的人都太",62,90)

            this.ctx.strokeText("了:开始喜",62+dis*8,90)
            this.ctx.fillText("了:开始喜",62+dis*8,90)

            this.ctx.strokeText("欢吴宣仪,后来喜欢孟美岐,现",62,152)
            this.ctx.fillText("欢吴宣仪,后来喜欢孟美岐,现",62,152)
            
            this.ctx.strokeText("在喜欢王菊",62,215)
            this.ctx.fillText("在喜欢王菊",62,215)

            this.ctx.strokeText("像HR",62,276)
            this.ctx.fillText("像HR",62,276)

            var sp = this.ctx.measureText("像HR").width
            this.ctx.strokeText(this.name,62+sp,276)
            this.ctx.fillText(this.name,62+sp,276)

            this.ctx.strokeText("就一直很专一,只喜欢正在",1000,1000)
            this.ctx.fillText("就一直很专一,只喜欢正在",1000,1000)
            var nw = this.ctx.measureText(this.name).width,
                left = 528 - sp - nw,
                after = "就一直很专一,只喜欢正在"
                temp = 0,
                i = 0

            for(i = 0; i < after.length; i++){
                temp = this.ctx.measureText(after.slice(0,(i+1))).width
                if(temp > left){
                    break
                }
            }
            this.ctx.strokeText(after.slice(0,i),62+sp+nw,276)
            this.ctx.fillText(after.slice(0,i),62+sp+nw,276)

            this.ctx.strokeText(after.slice(i),62,346)
            this.ctx.fillText(after.slice(i),62,346)

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"

            this.ctx.strokeText("花心",62+dis*6,90)
            this.ctx.fillText("花心",62+dis*6,90)

            sp = this.ctx.measureText(after.slice(i)).width
            this.ctx.strokeText("找工作",62+sp,346)
            this.ctx.fillText("找工作",62+sp,346)

            temp = this.ctx.measureText("找工作").width
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("的人",62+sp+temp,346)
            this.ctx.fillText("的人",62+sp+temp,346)
        },
        writeText14:function(){
            var arr = [90,152,215,276,346,406],
                next = 2,
                dis = 42
            // HR小明在公司从来不敢主动搭话 因为只要他开口 别人一定会问他 什么时候能帮我们招到人 
            this.ctx.font = "42px bold"
            this.ctx.lineWidth = 3
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("HR"+this.name,62,90)
            this.ctx.fillText("HR"+this.name,62,90)

            var sp = this.ctx.measureText("HR").width,
                nw = this.ctx.measureText(this.name).width,
                num = Math.floor((528 - nw - sp) / dis),
                after = "在公司从来不敢",
                str1 = "主动搭话"

            this.ctx.strokeText(after.slice(0,num),62+nw+sp,90)
            this.ctx.fillText(after.slice(0,num),62+nw+sp,90)

            if(after.length > num){
                this.ctx.strokeText(after.slice(num),62,152)
                this.ctx.fillText(after.slice(num),62,152)

                sp = this.ctx.measureText(after.slice(num)).width
                this.ctx.strokeStyle = "#28b494"
                this.ctx.fillStyle = "#28b494"
                this.ctx.strokeText(str1,62+sp,152)
                this.ctx.fillText(str1,62+sp,152)
            }else if(after.length == num){
                this.ctx.strokeStyle = "#28b494"
                this.ctx.fillStyle = "#28b494"
                this.ctx.strokeText(str1,62,152)
                this.ctx.fillText(str1,62,152)
            }else {
                this.ctx.strokeStyle = "#28b494"
                this.ctx.fillStyle = "#28b494"
                this.ctx.strokeText(str1.slice(0,num-after.length),62+nw+sp+dis*after.length,90)
                this.ctx.fillText(str1.slice(0,num-after.length),62+nw+sp+dis*after.length,90)
                this.ctx.strokeText(str1.slice(num-after.length),62,152)
                this.ctx.fillText(str1.slice(num-after.length),62,152)
            }
            
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("因为只要他开口",62,215)
            this.ctx.fillText("因为只要他开口",62,215)

            this.ctx.strokeText("别人一定会问他",62,276)
            this.ctx.fillText("别人一定会问他",62,276)

            this.ctx.strokeText("什么时候能帮我们",62,346)
            this.ctx.fillText("什么时候能帮我们",62,346)

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"

            this.ctx.strokeText("招到人",62+dis*8,346)
            this.ctx.fillText("招到人",62+dis*8,346)
        },
        writeText15:function(){
            var arr = [90,152,215,276,346,406],
                next = 2,
                dis = 42
            // HR小明常常觉得自己运气很好,因为每天工作都能遇到优秀的音乐人 来面试的人，一个个退堂鼓打的可溜了 
            this.ctx.font = "42px bold"
            this.ctx.lineWidth = 3
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("HR"+this.name,62,90)
            this.ctx.fillText("HR"+this.name,62,90)

            var sp = this.ctx.measureText("HR").width,
                nw = this.ctx.measureText(this.name).width,
                num = Math.floor((528 - nw - sp) / dis),
                after = "常常觉得自己",
                str1 = "运气",
                str2 = "很好,因为每天工作都能遇到优秀的",
                str3 = "音乐人",
                start = 0,
                left = 0,
                temp = 0,
                i = 0,j = 0

            this.ctx.strokeText(after.slice(0,num),62+nw+sp,90)
            this.ctx.fillText(after.slice(0,num),62+nw+sp,90)

            this.ctx.strokeText(str2,1000,1000)
            this.ctx.fillText(str2,1000,1000)

            if(after.length > num){
                this.ctx.strokeText(after.slice(num),62,152)
                this.ctx.fillText(after.slice(num),62,152)

                sp = this.ctx.measureText(after.slice(num)).width
                this.ctx.strokeStyle = "#28b494"
                this.ctx.fillStyle = "#28b494"
                this.ctx.strokeText(str1,62+sp,152)
                this.ctx.fillText(str1,62+sp,152)
                start = this.ctx.measureText(str1).width+sp
            }else if(after.length == num){
                this.ctx.strokeStyle = "#28b494"
                this.ctx.fillStyle = "#28b494"
                this.ctx.strokeText(str1,62,152)
                this.ctx.fillText(str1,62,152)
                start = this.ctx.measureText(str1).width
            }else {
                this.ctx.strokeStyle = "#28b494"
                this.ctx.fillStyle = "#28b494"
                this.ctx.strokeText(str1.slice(0,num-after.length),62+nw+sp+dis*after.length,90)
                this.ctx.fillText(str1.slice(0,num-after.length),62+nw+sp+dis*after.length,90)

                if((num-after.length) > str1.length){
                    this.ctx.strokeStyle = "#0068b7"
                    this.ctx.fillStyle = "#0068b7"

                    var w1 = this.ctx.measureText(str1).width,
                        last = (nw+sp+dis*after.length) + w1
                    left = 528 - last
                    for(i = 0; i < str2.length; i++){
                        temp = this.ctx.measureText(str2.slice(0,i+1)).width
                        if(temp > left){
                            break
                        }
                    }
                    this.ctx.strokeText(str2.slice(0,i),62+last,90)
                    this.ctx.fillText(str2.slice(0,i),62+last,90)
                    start = 0
                }else{
                    this.ctx.strokeText(str1.slice(num-after.length),62,152)
                    this.ctx.fillText(str1.slice(num-after.length),62,152)
                    start = this.ctx.measureText(str1.slice(num-after.length)).width
                }
            }
            
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            left = 528 - start
            for(j = i; j < str2.length; j++){
                temp = this.ctx.measureText(str2.slice(i,j+1)).width
                if(temp > left){
                    break
                }
            }
            this.ctx.strokeText(str2.slice(i,j),62+start,152)
            this.ctx.fillText(str2.slice(i,j),62+start,152)
            if(str2.length > j){  // 第二行不够，将str2剩下部分写入第三行
                this.ctx.strokeText(str2.slice(j),62,215)
                this.ctx.fillText(str2.slice(j),62,215)
                start = this.ctx.measureText(str2.slice(j)).width
                i = 0
            }else if(str2.length == j){
                start = 0
                i = 0
            }else {  // 第二行写不完, 写入str3
                sp = this.ctx.measureText(str2.slice(i,j)).width
                left = 528 - start - sp
                for(i = 0; i < str3.length; i++){
                    temp = this.ctx.measureText(str3.slice(0,i+1)).width
                    if(temp > left){
                        break
                    }
                }
                this.ctx.strokeStyle = "#28b494"
                this.ctx.fillStyle = "#28b494"
                this.ctx.strokeText(str3.slice(0,i),62,152)
                this.ctx.fillText(str3.slice(0,i),62,152)
                start = this.ctx.measureText(str3.slice(0,i)).width
            }
            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            this.ctx.strokeText(str3.slice(i),62+start,215)
            this.ctx.fillText(str3.slice(i),62+start,215)

            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("来面试的人，一个个",62,276)
            this.ctx.fillText("来面试的人，一个个",62,276)

            this.ctx.strokeText("打的可溜了",62,346)
            this.ctx.fillText("打的可溜了",62,346)

            sp = this.ctx.measureText("来面试的人，一个个").width
            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            this.ctx.strokeText("退堂鼓",62+sp,276)
            this.ctx.fillText("退堂鼓",62+sp,276)
        },
        writeText16:function(){
            var name = this.name,
                arr = [90,152,215,276,346,406],
                next = 2,
                dis = 42
            // 面试前，候选人告诉HR小明 自己能力好便宜肯努力 面试后候选人告诉HR小明,不来是因为：离家远工资低干不了 
            this.ctx.font = "42px bold"
            this.ctx.lineWidth = 3
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("面试前，候选人告诉HR",62,90)
            this.ctx.fillText("面试前，候选人告诉HR",62,90)

            this.ctx.strokeText(name,1000,1000)
            this.ctx.fillText(name,1000,1000)

            var sp = this.ctx.measureText("面试前，候选人告诉HR").width,
                nw = this.ctx.measureText(name).width,
                after = "自己",
                str1 = "能力好便宜肯努力",
                start = 0,
                left = 0,
                temp = 0,
                i = 0,j = 0

            left = 528 - sp
            for(i = 0; i < name.length; i++){
                temp = this.ctx.measureText(name.slice(0,i+1)).width
                if(temp > left){
                    break
                }
            }
            this.ctx.strokeText(name.slice(0,i),62+sp,90)
            this.ctx.fillText(name.slice(0,i),62+sp,90)

            if(name.length > i){  // 名字未完，写入第二行
                this.ctx.strokeText(name.slice(i),62,152)
                this.ctx.fillText(name.slice(i),62,152)
                start = this.ctx.measureText(name.slice(i)).width
                i = 0
            }else{  // 第一行不够，加上after
                left = 528 - sp - nw
                for(i = 0; i < after.length; i++){
                    temp = this.ctx.measureText(after.slice(0,i+1)).width
                    if(temp > left){
                        break
                    }
                }
                this.ctx.strokeText(after.slice(0,i),62+sp+nw,90)
                this.ctx.fillText(after.slice(0,i),62+sp+nw,90)
                start = 0//this.ctx.measureText(after.slice(0,i)).width
            }

            this.ctx.strokeText(after.slice(i),62+start,152)
            this.ctx.fillText(after.slice(i),62+start,152)

            sp = this.ctx.measureText(after.slice(i)).width
            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            this.ctx.strokeText(str1,62+start+sp,152)
            this.ctx.fillText(str1,62+start+sp,152)

            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("面试后候选人告诉HR",62,215)
            this.ctx.fillText("面试后候选人告诉HR",62,215)

            sp = this.ctx.measureText("面试后候选人告诉HR").width
            after = ",不来是因为：",
            str1 = "离家远工资低干不了"

            this.ctx.strokeText(after,1000,1000)
            this.ctx.fillText(after,1000,1000)

            left = 528 - sp
            for(i = 0; i < name.length; i++){
                temp = this.ctx.measureText(name.slice(0,i+1)).width
                if(temp > left){
                    break
                }
            }
            this.ctx.strokeText(name.slice(0,i),62+sp,215)
            this.ctx.fillText(name.slice(0,i),62+sp,215)

            if(name.length > i){  // 名字未完，写入第二行
                this.ctx.strokeText(name.slice(i),62,276)
                this.ctx.fillText(name.slice(i),62,276)
                start = this.ctx.measureText(name.slice(i)).width
                i = 0
            }else{  // 第一行不够，加上after
                left = 528 - sp - nw
                for(i = 0; i < after.length; i++){
                    temp = this.ctx.measureText(after.slice(0,i+1)).width
                    if(temp > left){
                        break
                    }
                }
                this.ctx.strokeText(after.slice(0,i),62+sp+nw,215)
                this.ctx.fillText(after.slice(0,i),62+sp+nw,215)
                start = 0
            }

            this.ctx.strokeText(after.slice(i),62+start,276)
            this.ctx.fillText(after.slice(i),62+start,276)

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            start = start + this.ctx.measureText(after.slice(i)).width
            left = 528 - start
            var num = Math.floor(left / dis)
            this.ctx.strokeText(str1.slice(0,num),62+start,276)
            this.ctx.fillText(str1.slice(0,num),62+start,276)

            this.ctx.strokeText(str1.slice(num),62,346)
            this.ctx.fillText(str1.slice(num),62,346)
        },
        writeText17:function(){
            var dis = 48
            //锄禾日当午，不如招聘苦 对着编制图，一哭一下午 哭了一下午，编制还在补 编制刚补完，项目又重组 
            this.ctx.font = "48px bold"
            this.ctx.lineWidth = 3
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("锄禾日当午，不如",62,90)
            this.ctx.fillText("锄禾日当午，不如",62,90)
            var sp = this.ctx.measureText("锄禾日当午，不如").width

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            this.ctx.strokeText("招聘苦",62+sp,90)
            this.ctx.fillText("招聘苦",62+sp,90)

            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("对着编制图，一",62,152)
            this.ctx.fillText("对着编制图，一",62,152)
            sp = this.ctx.measureText("对着编制图，一").width
            this.ctx.strokeText("一下午",62+sp+dis,152)
            this.ctx.fillText("一下午",62+sp+dis,152)

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            this.ctx.strokeText("哭",62+sp,152)
            this.ctx.fillText("哭",62+sp,152)

            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("哭了一下午，编制还在",62,215)
            this.ctx.fillText("哭了一下午，编制还在",62,215)
            sp = this.ctx.measureText("哭了一下午，编制还在").width

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            this.ctx.strokeText("补",62+sp,215)
            this.ctx.fillText("补",62+sp,215)

            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("编制刚补完，项目又",62,276)
            this.ctx.fillText("编制刚补完，项目又",62,276)
            sp = this.ctx.measureText("编制刚补完，项目又").width

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            this.ctx.strokeText("重组",62+sp,276)
            this.ctx.fillText("重组",62+sp,276)
        },
        writeText18:function(){
            var name = this.name,
                dis = 56
            //春天小明把候选人种到了地里 到了秋天 他就把这茬忘了 
            this.ctx.font = "56px bold"
            this.ctx.lineWidth = 3
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("春天",62,90)
            this.ctx.fillText("春天",62,90)

            this.ctx.strokeText(name,62+dis*2,90)
            this.ctx.fillText(name,62+dis*2,90)

            var nw = this.ctx.measureText(name).width,
                start = dis * 2 + nw
                left = 528 - start,
                num = Math.floor(left / dis),
                after = "把候选人",
                str1 = "种到了"

            this.ctx.strokeText(after.slice(0,num),62+start,90)
            this.ctx.fillText(after.slice(0,num),62+start,90)

            if(after.length > num){
                this.ctx.strokeText(after.slice(num),62,173)
                this.ctx.fillText(after.slice(num),62,173)
                start = this.ctx.measureText(after.slice(num)).width
                this.ctx.strokeStyle = "#28b494"
                this.ctx.fillStyle = "#28b494"
                this.ctx.strokeText(str1,62+start,173)
                this.ctx.fillText(str1,62+start,173)
                start = start + this.ctx.measureText(str1).width
            }else if(after.length == num){
                this.ctx.strokeStyle = "#28b494"
                this.ctx.fillStyle = "#28b494"
                this.ctx.strokeText(str1,62,173)
                this.ctx.fillText(str1,62,173)
                start = this.ctx.measureText(str1).width
            }else {
                this.ctx.strokeStyle = "#28b494"
                this.ctx.fillStyle = "#28b494"
                this.ctx.strokeText(str1.slice(0,after.length - num),62+start+dis*after.length,90)
                this.ctx.fillText(str1.slice(0,after.length - num),62+start+dis*after.length,90)
                this.ctx.strokeText(str1.slice(after.length - num),62,173)
                this.ctx.fillText(str1.slice(after.length - num),62,173)
                start = this.ctx.measureText(str1.slice(after.length - num)).width
            }

            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("地里",62+start,173)
            this.ctx.fillText("地里",62+start,173)

            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("到了秋天",62,247)
            this.ctx.fillText("到了秋天",62,247)

            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("他就把这茬",62,319)
            this.ctx.fillText("他就把这茬",62,319)

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            this.ctx.strokeText("忘了",62+dis*5,319)
            this.ctx.fillText("忘了",62+dis*5,319)
        },
        writeText19:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                dis = 34
            //HR小明听说有朋友最近想要找工作 赶紧拿了两盒中华前去讨好 结果朋友很生气，将牙膏退还给了他 还把他拉黑了 
            this.ctx.font = "34px bold"
            this.ctx.lineWidth = 3
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("HR",62,103)
            this.ctx.fillText("HR",62,103)

            var sp = this.ctx.measureText("HR").width

            this.ctx.strokeText(name,62+sp,103)
            this.ctx.fillText(name,62+sp,103)

            var nw = this.ctx.measureText(name).width,
                start = sp + nw
                left = 528 - start,
                num = Math.floor(left / dis),
                after = "听说有朋友最近想要",
                str1 = "找工作",
                next = 1

            this.ctx.strokeText(after.slice(0,num),62+start,103)
            this.ctx.fillText(after.slice(0,num),62+start,103)

            if(after.length > num){
                this.ctx.strokeText(after.slice(num),62,164)
                this.ctx.fillText(after.slice(num),62,164)
                start = this.ctx.measureText(after.slice(num)).width
                this.ctx.strokeStyle = "#28b494"
                this.ctx.fillStyle = "#28b494"
                this.ctx.strokeText(str1,62+start,164)
                this.ctx.fillText(str1,62+start,164)
                start = start + this.ctx.measureText(str1).width
                next = 2
            }else if(after.length == num){
                this.ctx.strokeStyle = "#28b494"
                this.ctx.fillStyle = "#28b494"
                this.ctx.strokeText(str1,62,164)
                this.ctx.fillText(str1,62,164)
                start = this.ctx.measureText(str1).width
                next = 2
            }else {
                this.ctx.strokeStyle = "#28b494"
                this.ctx.fillStyle = "#28b494"
                this.ctx.strokeText(str1.slice(0,num - after.length),62+start+dis*after.length,103)
                this.ctx.fillText(str1.slice(0,num - after.length),62+start+dis*after.length,103)
                
                this.ctx.strokeText(str1.slice(num - after.length),62,164)
                this.ctx.fillText(str1.slice(num - after.length),62,164)
                start = this.ctx.measureText(str1.slice(num - after.length)).width
                next = 2
            }

            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("赶紧拿了两盒中华前去讨好",62,arr[next])
            this.ctx.fillText("赶紧拿了两盒中华前去讨好",62,arr[next])

            this.ctx.strokeText("前去讨好",62+dis*8,arr[next])
            this.ctx.fillText("前去讨好",62+dis*8,arr[next])

            this.ctx.strokeText("结果朋友很生气，将牙膏退还给了他",62,arr[next+1])
            this.ctx.fillText("结果朋友很生气，将牙膏退还给了他",62,arr[next+1])

            this.ctx.strokeText("还把他拉黑了",62,arr[next+2])
            this.ctx.fillText("还把他拉黑了",62,arr[next+2])

            this.ctx.strokeText("了",62+dis*5,arr[next+2])
            this.ctx.fillText("了",62+dis*5,arr[next+2])

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            this.ctx.strokeText("中华",62+dis*6,arr[next])
            this.ctx.fillText("中华",62+dis*6,arr[next])

            this.ctx.strokeText("拉黑",62+dis*3,arr[next+2])
            this.ctx.fillText("拉黑",62+dis*3,arr[next+2])
        },
        writeText20:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                dis = 43
            //朋友让HR小明帮忙介绍男朋友 小明二话不说 朝对方扔去了一千份简历
            this.ctx.font = "43px bold"
            this.ctx.lineWidth = 3
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("朋友让HR",62,103)
            this.ctx.fillText("朋友让HR",62,103)

            var sp = this.ctx.measureText("朋友让HR").width

            this.ctx.strokeText(name,62+sp,103)
            this.ctx.fillText(name,62+sp,103)

            var nw = this.ctx.measureText(name).width,
                start = sp + nw
                left = 536 - start,
                num = Math.floor(left / dis),
                after = "帮忙介绍",
                str1 = "男朋友",
                next = 1

            this.ctx.strokeText(after.slice(0,num),62+start,103)
            this.ctx.fillText(after.slice(0,num),62+start,103)

            if(after.length > num){
                this.ctx.strokeText(after.slice(num),62,164)
                this.ctx.fillText(after.slice(num),62,164)
                start = this.ctx.measureText(after.slice(num)).width
                this.ctx.strokeStyle = "#28b494"
                this.ctx.fillStyle = "#28b494"
                this.ctx.strokeText(str1,62+start,164)
                this.ctx.fillText(str1,62+start,164)
                start = start + this.ctx.measureText(str1).width
                next = 2
            }else if(after.length == num){
                this.ctx.strokeStyle = "#28b494"
                this.ctx.fillStyle = "#28b494"
                this.ctx.strokeText(str1,62,164)
                this.ctx.fillText(str1,62,164)
                start = this.ctx.measureText(str1).width
                next = 2
            }else {
                this.ctx.strokeStyle = "#28b494"
                this.ctx.fillStyle = "#28b494"
                this.ctx.strokeText(str1.slice(0,num - after.length),62+start+dis*after.length,103)
                this.ctx.fillText(str1.slice(0,num - after.length),62+start+dis*after.length,103)
                
                if((num - after.length) < str1.length){
                    this.ctx.strokeText(str1.slice(num - after.length),62,164)
                    this.ctx.fillText(str1.slice(num - after.length),62,164)
                    start = this.ctx.measureText(str1.slice(num - after.length)).width
                    next = 2
                }
            }

            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText(name+"二话不说",62,arr[next])
            this.ctx.fillText(name+"二话不说",62,arr[next])

            this.ctx.strokeText("朝对方扔去了",62,arr[next+1])
            this.ctx.fillText("朝对方扔去了",62,arr[next+1])

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            this.ctx.strokeText("一千份简历",62+dis*6,arr[next+1])
            this.ctx.fillText("一千份简历",62+dis*6,arr[next+1])
        },
        writeText21:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                dis = 43
            //HR小明每天拼命筛简历打电话约面试 就是为了向老板证明 在招人这件事上 自己比星座靠谱 
            this.ctx.font = "43px bold"
            this.ctx.lineWidth = 3
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("HR",62,103)
            this.ctx.fillText("HR",62,103)

            var sp = this.ctx.measureText("HR").width

            this.ctx.strokeText(name,62+sp,103)
            this.ctx.fillText(name,62+sp,103)

            var nw = this.ctx.measureText(name).width,
                start = sp + nw
                left = 536 - start,
                num = Math.floor(left / dis),
                after = "每天",
                str1 = "拼命",
                str2 = "筛简历打电话约面试"
                next = 1

            this.ctx.strokeText(after,62+start,103)
            this.ctx.fillText(after,62+start,103)

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            this.ctx.strokeText(str1,62+start+dis*2,103)
            this.ctx.fillText(str1,62+start+dis*2,103)

            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            start = start + dis * 4
            left = 536 - start
            num = Math.floor(left / dis)

            this.ctx.strokeText(str2.slice(0,num),62+start,103)
            this.ctx.fillText(str2.slice(0,num),62+start,103)
            if(str2.length > num){
                this.ctx.strokeText(str2.slice(num),62,164)
                this.ctx.fillText(str2.slice(num),62,164)
                next = 2
            }else{
                next = 1
            }

            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("就是为了向老板",62,arr[next])
            this.ctx.fillText("就是为了向老板",62,arr[next])

            this.ctx.strokeText("在招人这件事上",62,arr[next+1])
            this.ctx.fillText("在招人这件事上",62,arr[next+1])

            this.ctx.strokeText("自己比星座",62,arr[next+2])
            this.ctx.fillText("自己比星座",62,arr[next+2])

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            this.ctx.strokeText("证明",62+dis*7,arr[next])
            this.ctx.fillText("证明",62+dis*7,arr[next])

            this.ctx.strokeText("靠谱",62+dis*5,arr[next+2])
            this.ctx.fillText("靠谱",62+dis*5,arr[next+2])
        },
        writeText22:function(){
            var arr = [103,164,226,288,350],
                name = this.name,
                dis = 44
            // 父母从来不催HR小明结婚 他们只会问 给你表侄子介绍个工作呗 要钱多事少离家近的好伐？
            this.ctx.font = "44px bold"
            this.ctx.lineWidth = 3
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"

            this.ctx.strokeText("父母从来不",62,103)
            this.ctx.fillText("父母从来不",62,103)

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            this.ctx.strokeText("催",62+dis*5,103)
            this.ctx.fillText("催",62+dis*5,103)

            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText("HR",62+dis*6,103)
            this.ctx.fillText("HR",62+dis*6,103)

            this.ctx.strokeText(name,1000,1000)
            this.ctx.fillText(name,1000,1000)
            var sp = this.ctx.measureText("HR").width
                nw = this.ctx.measureText(name).width,
                start = sp + dis * 6,
                left = 536 - start,
                next = 1
                i = 0
            for(i = 0; i < name.length; i++){
                temp = this.ctx.measureText(name.slice(0,i+1)).width
                if(temp > left){
                    break
                }
            }

            this.ctx.strokeText(name.slice(0,i),62+start,103)
            this.ctx.fillText(name.slice(0,i),62+start,103)

            left = 536 - start - this.ctx.measureText(name.slice(0,i)).width
            var after = "结婚",
                str1 = "他们只会问",
                str2 = "给你表侄子介绍个工作呗"

            if(i < name.length){
                this.ctx.strokeText(name.slice(i),62,164)
                this.ctx.fillText(name.slice(i),62,164)

                sp = this.ctx.measureText(name.slice(i)).width
                this.ctx.strokeStyle = "#28b494"
                this.ctx.fillStyle = "#28b494"
                this.ctx.strokeText(after,62+sp,164)
                this.ctx.fillText(after,62+sp,164)
                next = 2
            // }else if(i == name.length){
            //     this.ctx.strokeStyle = "#28b494"
            //     this.ctx.fillStyle = "#28b494"
            //     this.ctx.strokeText(after,62,164)
            //     this.ctx.fillText(after,62,164)
            //     next = 2
            }else{
                start = start + this.ctx.measureText(name.slice(0,i)).width
                for(i = 0; i < after.length; i++){
                    temp = this.ctx.measureText(after.slice(0,i+1)).width
                    if(temp > left){
                        break
                    }
                }
                this.ctx.strokeStyle = "#28b494"
                this.ctx.fillStyle = "#28b494"
                this.ctx.strokeText(after.slice(0,i),62+start,103)
                this.ctx.fillText(after.slice(0,i),62+start,103)

                if(i < after.length){
                    this.ctx.strokeText(after.slice(i),62,164)
                    this.ctx.fillText(after.slice(i),62,164)
                    next = 2
                }
            }

            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText(str1,62,arr[next])
            this.ctx.fillText(str1,62,arr[next])

            this.ctx.strokeText(str2,62,arr[next+1])
            this.ctx.fillText(str2,62,arr[next+1])

            this.ctx.strokeText("要钱多事少离家近的好伐？",62,arr[next+2])
            this.ctx.fillText("要钱多事少离家近的好伐？",62,arr[next+2])

            this.ctx.strokeText("的好伐？",62+dis*8,arr[next+2])
            this.ctx.fillText("的好伐？",62+dis*8,arr[next+2])

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            this.ctx.strokeText("钱多事少离家近",62+dis,arr[next+2])
            this.ctx.fillText("钱多事少离家近",62+dis,arr[next+2])
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
        nameCenterLightTwice:function(arr,start,name,light,after,fontSize,startLine){
            var dis = fontSize
            this.ctx.font = fontSize+"px bold"
            this.ctx.lineWidth = 3
            
            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
            this.ctx.strokeText(start,62,arr[startLine])
            this.ctx.fillText(start,62,arr[startLine])

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            var sp = this.ctx.measureText(start).width
            this.ctx.strokeText(name,62+sp,arr[startLine])
            this.ctx.fillText(name,62+sp,arr[startLine])

            this.ctx.strokeStyle = "#0068b7"
            this.ctx.fillStyle = "#0068b7"
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

            this.ctx.strokeStyle = "#28b494"
            this.ctx.fillStyle = "#28b494"
            obj = this.breakText(arr,after,"",next,startPosition,left)
            next = obj.next
            return next
        },
        nameCenterLightCenter:function(arr,start,name,light,after,fontSize,startLine){
            var dis = fontSize
            this.ctx.font = fontSize+"px bold"
            this.ctx.lineWidth = 3
            
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
            this.ctx.font = fontSize+"px bold"
            this.ctx.lineWidth = 3
            
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
                startPosition = 0,
                left = 0,
                next = startLine
            this.ctx.font = fontSize+"px bold"
            this.ctx.lineWidth = 3
            
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

            var sp = this.ctx.measureText(start).width
            // this.ctx.strokeText(name,62+sp,arr[next])
            // this.ctx.fillText(name,62+sp,arr[next])

            startPosition = sp
            left = 528 - startPosition
            obj = this.breakText(arr,name,light,next,startPosition,left)
            next = obj.next
            startPosition = obj.start
            left = obj.left

            // var nw = this.ctx.measureText(name).width,
            //     startPosition = sp + nw,
            //     left = 528 - startPosition,
            //     next = startLine
            
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
        // HR+name+light+after (name 不会换行) 最多3行
        nameCenterLightAfter:function(arr,start,name,light,after,fontSize,startLine){
            var dis = fontSize,
                sp = 0,
                nw = 0,
                startPosition = 0
                left = 528,
                next = startLine

            this.ctx.font = fontSize+"px bold"
            this.ctx.lineWidth = 3
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
            return next
        },
        nameCenterLightAfterMore:function(arr,start,name,light,after,light2,last,fontSize,startLine){
            var dis = fontSize,
                sp = 0,
                nw = 0,
                startPosition = 0
                left = 528,
                next = startLine

            this.ctx.font = fontSize+"px bold"
            this.ctx.lineWidth = 3
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

            this.ctx.font = fontSize+"px bold"
            this.ctx.lineWidth = 3
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
            let temp = 0,
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
        startDraw:function(){

        },
        recruitEvent:function(){

        },
        showShare:function(){
            
        }
    }
})
$(function () {
    var height = $(window).height();
    var pageNum = 1;
    var swipeFlag = false;
    var pageLength = $('.page').length;
    var drawVideoTimer = null;
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    // var videoBg = document.getElementById('bgvid');
    
    $('.wrapper').height(height);
    $('.page').height(height);
    setChildHtml($('.childrenWrap ul'));
    childrenWrap($('.childrenWrap ul'));

    clearInterval(drawVideoTimer);
    // $('.music-icon').addClass('show');
    // musicPlay(pageNum);
    $('.wrapper').bind('swipeUp', function () {
        console.log(pageNum)
        if (pageNum < 2){
            pageNum++;
        } 
        if (pageNum > pageLength) {
            pageNum = pageLength;
            return
        }
        toPage(pageNum - 1, pageNum);
    }).bind('swipeDown', function () {
        console.log(pageNum)
        if (pageNum <= 2){
            pageNum--;
        }
        if (pageNum <= 0) {
            pageNum = 1;
            return
        }
        toPage(pageNum + 1, pageNum);
    });
    $('.page2-go1').click(function(){
        window.location.hash ='p3';
        datas = datas1;
        document.title = '未知展览馆';
        share(datas);
        $('.video-box').removeClass('show');
        clearInterval(drawVideoTimer);
        $('.music-icon').addClass('show');
        // videoBg.pause();
        // $(videoBg).css({
        //     'width': '1px',
        //     'height': '1px',
        //     'z-index':'-11'
        // });
        // $('video#bgvid').remove();
        music.pause();
        music.play();
        
        pageNum = 3;
        directTo(pageNum);
        setTimeout(function () {
            var loadNum = 0;
            var loadingTimer = null;
            clearInterval(loadingTimer);
            loadingTimer = setInterval(function () {
                if (loadNum >= 100) {
                    pageNum = 4;
                    $('.page' + 3).addClass('fallOut');
                    $('.page').removeClass('active');
                    $('.page' + pageNum).removeClass('fallOut').delay(5000).addClass('active');
                    clearInterval(loadingTimer);
                    swipeFlag = false;
                } else {
                    loadNum += 5;
                    $('.page3-point').css('width', scale(550) / 100 * loadNum);
                    $('.page3-num').text();
                    $('.page3-num').text(loadNum + '%');
                }
            }, 100);
        },200);
    });
    $('.page2-go2').click(function(){
        window.location.href = 'https://activity.lagou.com/topic/blackbox.html';
    });
    $('.page2-go3').click(function(){
        window.location.href = 'https://activity.lagou.com/activity/dist/hrday818-2017/gold/m_index.html';
    });
    $('.page2-share').click(function(){
        $('.share-float').addClass('show');
    });
    $('.share-float').click(function(){
        $(this).removeClass('show');
    });
    $('.page4-btn').click(function(){
        $('.float').addClass('show');
    });
    $('.float-btn').click(function(){
        var input = $('.float-txt').val();
        $('.float-txt').data("data-val", input);
        summitForm(input);
    });
    $('.float-txt').focus(function(){
        $('.float-line').addClass('hide');
    }).blur(function(){
        $('.float-line').removeClass('hide');        
    });
    $('.float-close').click(function(){
        $('.float').removeClass('show');
    });
    $('.page5-btn1').click(function(){
        pageNum = 4;
        directTo(pageNum);
        $('.float').addClass('show');
    });
    $('.page5-btn2').click(function(){
        var input = $('.float-txt').data("data-val");
        var cardText = setCardText(input);
        if(!cardText) return;
         drawCard(input, cardText, drawCardCallback);
    });
    $('.page5-back').click(function(){
        window.location.hash = '';
        datas = datas2;
        document.title = '818HR节·探索不一样';
        share(datas);
        window.location.reload();
    });
    function toPage(currentNum, nextNum) {
        console.log(swipeFlag,currentNum,nextNum);
        if(currentNum > 2){
            $('.video-box').removeClass('show');
            clearInterval(drawVideoTimer);
            $('.music-icon').addClass('show');
            // videoBg.pause();
            // $(videoBg).css({
            //     'width': '1px',
            //     'height': '1px',
            //     'z-index':'-11'
            // });
            // $('video#bgvid').remove();
            return;
        } else {
            $('.video-box').addClass('show');
            drawVideo();
            $('.music-icon').removeClass('show');
            // videoBg.play();
            // $(videoBg).css({
            //     'width': '100%',
            //     'height': '100%',
            //     'left': '0'
            // });
        }
        if (swipeFlag) {
            return
        }
        swipeFlag = true;
        $('.page' + currentNum).addClass('fallOut');

        setTimeout(function () {
            $('.page').removeClass('active');
            $('.page' + nextNum).removeClass('fallOut').addClass('active');
            
            swipeFlag = false;
            
        }, 1000);
    }

    function scale(n) {
        // return n * GC.w / 750;
        return n / (750 / 16) * parseFloat(html.style.fontSize);
    }
    function scale2(n) {
        return n * GC.w / 750 / 2;
    }
    function childrenWrap(element) {
        var num = 1;
        var width = $('.childrenWrap').width();
        var childFlag = false;
        var childrenLength = $('.childrenWrap li').length;
    
        element.on('swipeLeft swipeDown', next).on('swipeRight swipeUp', pre);
        $('.page4-arrowL').on('click', pre);
        $('.page4-arrowR').on('click', next);
        function next() {
            num++;
            if (num > childrenLength) {
                num = 1;
            }
            toGo(num - 1);
        }
        function pre() {
            num--;
            if (num < 1) {
                num = childrenLength;
            }
            toGo(num - 1);
        }
        function toGo (currentNum) {
            
            if (childFlag) {
                return
            }
            childFlag = true;
            setTimeout(function () {
                console.log(currentNum)
                element[0].style.webkitTransform = 'translate3d(-' + width * currentNum + 'px' + ',0,0)';
                element.children().eq(currentNum).addClass('curr').siblings().removeClass('curr')
                element[0].style.transition = '-webkit-transform 40ms ease-out';
                childFlag = false;
            }, 300);
        }
    }
    function directTo(pageNum) {
        $('.page' + pageNum-1).addClass('fallOut');
        $('.page').removeClass('active');
        $('.page' + pageNum).removeClass('fallOut').addClass('active');
    }
    function setChildHtml(element) {
        var result = [];
        for (var i = 1; i <= 25; i++) {
            var str = '<li class="item item'+ i +'"><img src="images/words/'+ i +'.png?v=$version$" alt=""  class="item'+ i +'"></li>';
            result.push(str);
        }
        element.html(result.join(''));
    }

    var drawImgFlag = false;
    function summitForm (input) {
        var bytesNum = bytesCount(input);
        if (bytesNum == 0) {
            $('.float-error').text('名字不能为空哦');
        } else if (bytesNum > 10) {
            $('.float-error').text('呃...你的名字太长了');
        } else {
            var cardText = setCardText(input);
            if(!cardText) return;
            drawCard(input, cardText, drawCardCallback);
        }
    }
    function drawCardCallback(canvas) {
        var src = canvas.toDataURL('image/png');

        // $('.float').removeClass('show');//test
        // directTo(5); //test
        // $('.float-txt').val(''); //test

        if (drawImgFlag) {
            $('.float-error').text('正在生成图片...');
            return;
        }
        drawImgFlag = true;
        ajaxCardImg(src, function(data) {
            var imgSrc = data.content && data.content.path;
            var img = $('.canvas-bg');
            img.attr('src','https://www.lgstatic.com/'+ imgSrc);
            $('.float-error').text('');
            $('.float').removeClass('show');
            directTo(5);
            $('.float-txt').val('');
            drawImgFlag = false;
        });
    }
    function bytesCount(str){
        var bytesCount = 0;
        for (var i = 0; i < str.length; i++){
            var c = str.charAt(i);
            if (/^[\u4e00-\u9fa5]+$/.test(c)){
                bytesCount += 2;
            }else{
                bytesCount += 1;
            }
        }
        return bytesCount;
    }

    function drawCard(input, cardText, callback){  
        var canvas = document.getElementById('canvas');  
        var ctx = canvas.getContext('2d');  
        //背景图
        var imgObj = {
            w: 729,
            h: 908,
            src : 'images/canvas-bg.png'
        };
        var bgWidth = scale(imgObj.w);
        var bgHeight= bgWidth * imgObj.h / imgObj.w;
        canvas.width = bgWidth;  
        canvas.height = bgHeight;  


        var  devicePixelRatio = window.devicePixelRatio || 1,   
        backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1, 
        ratio = devicePixelRatio / backingStoreRatio;

        var oldWidth = canvas.width; 
        var oldHeight = canvas.height; 
        canvas.width = oldWidth * ratio; 
        canvas.height = oldHeight * ratio; 
        canvas.style.width = oldWidth + 'px'; 
        canvas.style.height = oldHeight + 'px'; 
        ctx.scale(ratio, ratio);


        ctx.clearRect(0, 0, bgWidth, bgHeight);  

        // drawImg
        var imgBg = new Image(); 
        imgBg.src = imgObj.src;
        
        imgBg.onload = function(){
            ctx.drawImage(imgBg,0,0,imgObj.w,imgObj.h,0,0,bgWidth,bgHeight);
            //文字
            ctx.textAlign="center";
            ctx.textBaseline="hanging";
            ctx.fillStyle = "#000";
            ctx.font = scale(107) + 'px PingFang SC';
            
            if(isiOS){
                ctx.fillText(input, scale(361), cardText.ty - 10);
            }else{
                ctx.fillText(input, scale(361), cardText.ty);
            }
            //文字图
            var imgTxt = new Image(); 
            imgTxt.src = cardText.img;
            var imgTxtWidth = scale(cardText.w);
            var imgTxtHeight= imgTxtWidth * cardText.h / cardText.w;
            imgTxt.onload = function(){
                ctx.drawImage(imgTxt,0,0,cardText.w,cardText.h,-(imgTxtWidth-bgWidth)/2,cardText.imgy,imgTxtWidth,imgTxtHeight);
                
                //二维码
                var imgErObj = {
                    w: 115,
                    h: 115,
                    src : 'images/ercode.jpg?v=2'
                };
                var imgEr = new Image(); 
                
                var ErWidth = scale(imgErObj.w);
                var ErHeight= ErWidth * imgErObj.h / imgErObj.w;

                imgEr.onload = function(){
                    ctx.drawImage(imgEr,0,0,imgErObj.w,imgErObj.h,scale(590),scale(767),ErWidth,ErHeight);
                    callback && callback(canvas)
                }
                imgEr.src = imgErObj.src;
            };
            
        };
    }  
    function setCardText(input){
        var allCard = [];
        allCard = [{
            w: 366,
            h: 278,
            ty:  scale(441),
            imgy: scale(270)
        },{
            w: 379,
            h: 359,
            ty:  scale(336),
            imgy: scale(232)
        },{
            w: 315,
            h: 376,
            ty:  scale(340),
            imgy: scale(218)
        },{
            w: 406,
            h: 360,
            ty:  scale(343),
            imgy: scale(239)
        },{
            w: 385,
            h: 279,
            ty:  scale(267),
            imgy: scale(267)
        },{
            w: 315,
            h: 225,
            ty:  scale(415),
            imgy: scale(290)
        },{
            w: 362,
            h: 372,
            ty:  scale(431),
            imgy: scale(223)
        },{
            w: 430,
            h: 361,
            ty:  scale(285),
            imgy: scale(235)
        },{
            w: 315,
            h: 284,
            ty:  scale(333),
            imgy: scale(273)
        },{
            w: 433,
            h: 287,
            ty:  scale(266),
            imgy: scale(266)
        },{
            w: 316,
            h: 287,
            ty:  scale(266),
            imgy: scale(266)
        },{
            w: 324,
            h: 328,
            ty:  scale(400),
            imgy: scale(225)
        },{
            w: 451,
            h: 335,
            ty:  scale(285),
            imgy: scale(225)
        },{
            w: 389,
            h: 319,
            ty:  scale(293),
            imgy: scale(235)
        },{
            w: 315,
            h: 307,
            ty:  scale(320),
            imgy: scale(250)
        },{
            w: 315,
            h: 252,
            ty:  scale(423),
            imgy: scale(269)
        },{
            w: 406,
            h: 381,
            ty:  scale(293),
            imgy: scale(213)
        },{
            w: 620,
            h: 718,
            ty:  scale(323),
            imgy: scale(233)
        }];
        var currNum = Math.floor(Math.random() * 17);
            console.log(currNum)
        var currCard = allCard[currNum];
        currCard.img = 'images/word2/'+ (currNum+1) +'.png';
        return currCard; 
    }
    function ajaxCardImg(src,callback){
        let data = {
            url:""
        }
        // $.ajax({
        //     type:'post',
        //     dataType: 'json',
        //     // jsonp: 'jsoncallback',
        //     // url: 'https://activity.lagou.com/activityapi/fileUpload/base64save',
        //     url: 'https://activity.lagou.com/activityapi/fileUpload/base64save2phone',
        //     data: {
        //         imgStr: src.substring(22),
        //         type: 'canvasImg'
        //     },
        //     success: function (data) {
        //         if (data.success) {
        //             if (data.state == 200) {
                        callback && callback(data);
        //             } else {
        //                 alert(data.message);
        //             }
        //         } else {
        //             alert(data.message);
        //         }
        //     },
        //     error: function (xhr, type) {
        //         // alert('提交失败,请稍后重试！');
        //     }
        // });
    }

    function drawVideo(){
        // var canvas = document.getElementById('vidCanvas');  
        // var ctx = canvas.getContext('2d'); 
        // var i = 0; 
        // drawVideoTimer = setInterval(function() {
        //     if(i>=60){
        //         i=0;
        //         clearInterval(drawVideoTimer);
        //     }
        //     var img = new Image();
        //     if(i<10){
        //         img.src = 'images/tinified/bg_0000'+ i +'.jpg';
        //     }else{
        //         img.src = 'images/tinified/bg_000'+ i +'.jpg';
        //     }
            
        //     var imgWidth = GC.w;
        //     var imgHeight= GC.h;
        //     canvas.width = imgWidth;
        //     canvas.height = imgHeight;

        //     // ctx.save();
        //     ctx.clearRect(0, 0, imgWidth, imgHeight);  
        //     img.onload = function(){
        //         ctx.drawImage(img,0,0,750,1206,0,0,GC.w,GC.h);
        //     };
        //     // ctx.restore();
        //     i++;
        // },60);
        var i = 0;
        var src = '';
        clearInterval(drawVideoTimer);
        drawVideoTimer = setInterval(function() {
            i++;
            if(i<10){
                src = 'images/tinified/bg_0000'+ i +'.jpg';
            }else{
                src = 'images/tinified/bg_000'+ i +'.jpg';
            }
            if(i>=60){
                i=0;
                // clearInterval(drawVideoTimer);
            }
            $('.video-bg').attr('src',src);
        },100);
    }
    function musicPlay(pageNum) {
        var music = document.getElementById('music');
        console.log(pageNum)
        function musicInBrowserHandler() {
            if(pageNum == 1 || pageNum == 2){
                music.pause();
                // $('.video-box').addClass('show');
                // drawVideo();
            } else {
                music.play();
                // $('.video-box').removeClass('show');
                // clearInterval(drawVideoTimer);
            }
            document.body.removeEventListener('touchstart', musicInBrowserHandler);
        }
        document.body.addEventListener('touchstart', musicInBrowserHandler);
        
        function musicInWeixinHandler() {
            if(pageNum == 1 || pageNum == 2){
                music.pause();
                // $('.video-box').addClass('show');
                // drawVideo();
            } else {
                music.play();
                // $('.video-box').removeClass('show');
                // clearInterval(drawVideoTimer);
            }
            
            document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
        }
        document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
        document.addEventListener("WeixinJSBridgeReady", function () {
            if(pageNum == 1 || pageNum == 2){
                music.pause();
                // $('.video-box').addClass('show');
                // drawVideo();
            } else {
                music.play();
                // $('.video-box').removeClass('show');
                // clearInterval(drawVideoTimer);
            }
        }, false);
        $('.music-icon').click(function(){
            if(music.paused){
                music.play();
                $(this).addClass('open').removeClass('close');
            }else {
                music.pause();
                $(this).addClass('close').removeClass('open');
            }
        });
    }
    // function videoPlay(pageNum) {
    //     var videoBg = document.getElementById('bgvid');
    //     var music = document.getElementById('music');
    //     console.log(pageNum)
    //     // 自动播放音乐效果，解决微信自动播放问题
    //     function musicInBrowserHandler() {
    //         if(pageNum == 1 || pageNum == 2){
    //             music.pause();
    //             videoBg.pause();
    //             videoBg.play();
    //         } else {
    //             videoBg.pause();
    //             $(videoBg).css({
    //                 'width': '1px',
    //                 'height': '1px',
    //                 'z-index':'-11'
    //             });
    //             $('video#bgvid').remove();
    //             music.play();
    //         }
    //         document.body.removeEventListener('touchstart', musicInBrowserHandler);
    //     }
    //     document.body.addEventListener('touchstart', musicInBrowserHandler);
        
    //     function musicInWeixinHandler() {
    //         if(pageNum == 1 || pageNum == 2){
    //             music.pause();
    //             videoBg.pause();
    //             videoBg.play();
    //         } else {
    //             videoBg.pause();
    //             $(videoBg).css({
    //                 'width': '1px',
    //                 'height': '1px',
    //                 'z-index':'-11'
    //             });
    //             $('video#bgvid').remove();
    //             music.pause();
    //             music.play();
    //         }
            
    //         document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
    //     }
    //     document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
    //     document.addEventListener("WeixinJSBridgeReady", function () {
    //         if(pageNum == 1 || pageNum == 2){
    //             music.pause();
    //             videoBg.pause();
    //             videoBg.play();
    //         } else {
    //             videoBg.pause();
    //             $(videoBg).css({
    //                 'width': '1px',
    //                 'height': '1px',
    //                 'z-index':'-11'
    //             });
    //             $('video#bgvid').remove();
    //             music.pause();
    //             music.play();
    //         }
    //     }, false);
    //     videoBg && videoBg.addEventListener('timeupdate',function (){
    //         //当视频的currentTime大于0.1时表示黑屏时间已过，已有视频画面，可以移除浮层（.pagestart的div元素）
    //         if ( !videoBg.isPlayed && this.currentTime>0.1 ){
    //             $('.bgvidstart').addClass('hide');
    //             videoBg.isPlayed = !0;
    //         }
    //         // if(pageNum == 1 || pageNum == 2){
    //         //     music.pause();
    //         //     videoBg.play();
    //         // } else {
    //         //     $('.video-box').removeClass('show');
    //         //     videoBg.pause();
    //         //     $(videoBg).css({
    //         //         'width': '1px',
    //         //         'height': '1px',
    //         //         'z-index':'-11'
    //         //     });
    //         //     $('.video-box').remove();
    //         // }
    //     });
    //     //进入全屏
    //     videoBg && videoBg.addEventListener("x5videoenterfullscreen", function(){
        
    //       window.onresize = function(){
    //         videoBg.style.width = "100%";
    //         videoBg.style.height = "100%";
    //       }
    //     })
    //     //退出全屏
    //     videoBg && videoBg.addEventListener("x5videoexitfullscreen", function(){
    //     //   window.onresize = function(){
    //     //     $(videoBg).css({
    //     //         'width': '1px',
    //     //         'height': '1px',
    //     //         'z-index': '-11'
    //     //     });
    //     //   };
    //     });
    //     $('.music-icon').click(function(){
    //         if(music.paused){
    //             music.play();
    //             $(this).addClass('open').removeClass('close');
    //         }else {
    //             music.pause();
    //             $(this).addClass('close').removeClass('open');
    //         }
    //     });
    // }
    
});