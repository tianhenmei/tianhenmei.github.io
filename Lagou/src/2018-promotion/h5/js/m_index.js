"use strict";
var app = new Vue({
    el:"#app",
    data:{
        fontSize:16,
        from:'',
        isiPhone:false,
        testStatus:false,
        oppo:{
            href:"javascript:void(0);"
        },
        tab:{
            active_index:0,
            list:[{
                name:'超级雇主'
            },{
                name:'千万豪门'
            },{
                name:'独家首发'
            },{
                name:'AI分会场'
            },{
                name:'独家首发1'
            },{
                name:'独家首发2'
            },{
                name:'独家首发3'
            }],
            shadow_status:true,
            showWidth:589-26,
            width:9999,
            left:0,
            start:{
                x:0,
                y:0
            }
        },
        // 热招职位
        hot:{
            href:"javascript:void(0);",
            list:[{
                name:'李**',
                company:'京东1',
                position:'Java工程师1'
            },{
                name:'孙**',
                company:'京东2',
                position:'Java工程师2'
            },{
                name:'高**',
                company:'京东3',
                position:'Java工程师3'
            },{
                name:'陈**',
                company:'京东4',
                position:'Java工程师4'
            },{
                name:'张**',
                company:'京东5',
                position:'Java工程师5'
            }],
            duration:50
        },
        // 24 小时 热力排行榜
        popular:{
            href:"javascript:void(0);",
            in:{
                list:[{
                    position:'Java开发'
                },{
                    position:'Python开发'
                },{
                    position:'商业化运营'
                }]
            },
            quickest:{
                list:[{
                    position:'销售主管'
                },{
                    position:'首席架构师'
                },{
                    position:'市场营销主管'
                }]
            },
            most:{
                list:[{
                    position:'OPPO'
                },{
                    position:'Vivo'
                },{
                    position:'点我达'
                }]
            }
        },
        // 领先雇主
        leader:{
            href:"javascript:void(0);",
            list:[{
                industry:'移动互联网行业',
                location:'深圳',
                scale:'2000人以上',
                label:['长期激励','长期激励','长期激励'],
                position:[{
                    id:'247',
                    name:'工程师工程师工',
                    salary:'20K-30K'
                },{
                    id:'247',
                    name:'工程师工程师工',
                    salary:'20K-30K'
                },{
                    id:'247',
                    name:'工程师工程师工',
                    salary:'20K-30K'
                }]
            }]
        },
        // 超级雇主
        employer:{
            href:"javascript:void(0);",
            list:[{
                logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                name:'京东商城',
                level:'不需要融资',
                industry:'移动互联网行业',
                location:'深圳',
                scale:'2000人以上',
                label:['长期激励','长期激励','长期激励'],
                introduce:'150天涨薪计划，游戏平台一人当关,万夫莫敌！',
                position:[{
                    id:'247',
                    name:'Java工程师',
                    year:'1-3年',
                    education:'本科',
                    salary:'20K-30K'
                },{
                    id:'247',
                    name:'Java工程师',
                    year:'1-3年',
                    education:'本科',
                    salary:'20K-30K'
                },{
                    id:'247',
                    name:'Java工程师',
                    year:'1-3年',
                    education:'本科',
                    salary:'20K-30K'
                }]
            }]
        },
        // 名企首发
        first:{
            href:"javascript:void(0);",
            company:{
                list:[{
                    name:'京东商城',
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image/M00/47/15/CgpFT1ll1HSAJd7KAABwVghAOK4012.png',
                    companyId:278,
                    position:'高级架构师',
                    location:'北京',
                    salary:'50K',
                    intro:'50K犒赏够爽快，说不定下一个年会你就和刘强东和奶茶MM一起过。'
                }]
            },
            question:{
                list:[{
                    ask:'你觉得钱是什么颜色？',
                    answer:'互联网名企面试题',
                    guest:'30位大咖答疑'
                }]
            },
            recommend:{
                list:[{
                    guest:'ELLA',
                    companys:[
                        'Face++',
                        '爱奇艺AI',
                        '爱奇艺AI'
                    ],
                    name:'李开复',
                    leader:'images/first/ella.png',
                    position:'创新工场董事长'
                }]
            }
        },
        // 千万豪门
        rich:{
            href:"javascript:void(0);",
            active_index:0,
            list:[
                [{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    location:'深圳',
                    position:[{
                        id:'247',
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        id:'247',
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        id:'247',
                        name:'高级产品经理',
                        salary:'20K-30K'
                    }]
                },{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    location:'深圳',
                    position:[{
                        id:'247',
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        id:'247',
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        id:'247',
                        name:'高级产品经理',
                        salary:'20K-30K'
                    }]
                },{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    location:'深圳',
                    position:[{
                        id:'247',
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        id:'247',
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        id:'247',
                        name:'高级产品经理',
                        salary:'20K-30K'
                    }]
                },{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    location:'深圳',
                    position:[{
                        id:'247',
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        id:'247',
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        id:'247',
                        name:'高级产品经理',
                        salary:'20K-30K'
                    }]
                }],[{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    location:'深圳',
                    position:[{
                        id:'247',
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        id:'247',
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        id:'247',
                        name:'高级产品经理',
                        salary:'20K-30K'
                    }]
                    },{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城',
                        location:'深圳',
                        position:[{
                            id:'247',
                            name:'高级产品经理',
                            salary:'20K-30K'
                        },{
                            id:'247',
                            name:'高级产品经理',
                            salary:'20K-30K'
                        },{
                            id:'247',
                            name:'高级产品经理',
                            salary:'20K-30K'
                        }]
                    },{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城',
                        location:'深圳',
                        position:[{
                            id:'247',
                            name:'高级产品经理',
                            salary:'20K-30K'
                        },{
                            id:'247',
                            name:'高级产品经理',
                            salary:'20K-30K'
                        },{
                            id:'247',
                            name:'高级产品经理',
                            salary:'20K-30K'
                        }]
                    },{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城',
                        location:'深圳',
                        position:[{
                            id:'247',
                            name:'高级产品经理',
                            salary:'20K-30K'
                        },{
                            id:'247',
                            name:'高级产品经理',
                            salary:'20K-30K'
                        },{
                            id:'247',
                            name:'高级产品经理',
                            salary:'20K-30K'
                        }]
                    }],
                [{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    location:'深圳',
                    position:[{
                        id:'247',
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        id:'247',
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        id:'247',
                        name:'高级产品经理',
                        salary:'20K-30K'
                    }]
                },{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    location:'深圳',
                    position:[{
                        id:'247',
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        id:'247',
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        id:'247',
                        name:'高级产品经理',
                        salary:'20K-30K'
                    }]
                },{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    location:'深圳',
                    position:[{
                        id:'247',
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        id:'247',
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        id:'247',
                        name:'高级产品经理',
                        salary:'20K-30K'
                    }]
                },{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    location:'深圳',
                    position:[{
                        id:'247',
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        id:'247',
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        id:'247',
                        name:'高级产品经理',
                        salary:'20K-30K'
                    }]
                }]
            ]
        },
        // 高薪必投
        will:{
            href:"javascript:void(0);",
            active_index:0,
            list:[
                {   
                    title:'丰厚起薪系列',
                    intro:'没有高薪，是谁给你的勇气买房买车',
                    company:[{
                        companyId:147,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城',
                        location:'深圳',
                        position:[{
                            id:'247',
                            name:'高级产品经理',
                            salary:'20K-30K'
                        }]
                    },{
                        companyId:147,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城',
                        location:'深圳',
                        position:[{
                            id:'247',
                            name:'高级产品经理',
                            salary:'20K-30K'
                        }]
                    },{
                        companyId:147,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城',
                        location:'深圳',
                        position:[{
                            id:'247',
                            name:'高级产品经理',
                            salary:'20K-30K'
                        }]
                    }],
                },
                {
                    title:'优越福利系列',
                    intro:'别看这些小福利，能增多不少幸福感',
                    company:[{
                        companyId:147,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城',
                        location:'深圳',
                        position:[{
                            id:'247',
                            name:'高级产品经理',
                            salary:'20K-30K'
                        }]
                    },{
                        companyId:147,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城',
                        location:'深圳',
                        position:[{
                            id:'247',
                            name:'高级产品经理',
                            salary:'20K-30K'
                        }]
                    },{
                        companyId:147,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城',
                        location:'深圳',
                        position:[{
                            id:'247',
                            name:'高级产品经理',
                            salary:'20K-30K'
                        }]
                    }]
                }
            ]
        },
        // 热招风暴
        storm:{
            href:"javascript:void(0);",
            active_index:0,
            list:[
                {   
                    title:'',
                    intro:'无法让你涨姿势的工作，这样的生活和咸鱼没什么区别',
                    company:[{
                        companyId:147,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:147,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:147,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:147,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:147,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:147,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:147,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:147,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    }],
                },
                {
                    title:'优越福利系列',
                    intro:'真相了！队友属性基本决定你会在怎样的氛围中工作',
                    company:[{
                        companyId:147,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:147,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:147,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:147,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:147,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:147,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:147,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:147,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    }],
                }
            ]
        },
    },
    mounted:function(){
        this.fontSize = parseFloat(this.getComputedValue(document.documentElement,'font-size'));
        this.tab.showWidth = this.getRemValue(this.tab.showWidth) * this.fontSize;
        
        this.hot.duration = this.hot.list.length * 1.5
        this.setTabWidth();
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
        /***********************************
         **  功能函数
         */
        setTabWidth:function(){
            var list = this.$refs['tab'].children,
                i = 0,
                total = 0,
                one = 0;
            for(i = 0; i < list.length; i++){
                one = this.getPointOuterWidth(list[i]);
                total += Math.ceil(one);
            }
            this.tab.width = total
        },
        tabStartEvent:function(e){
            var touch = e.touches[0];
            this.tab.start.x = touch.clientX;
            this.tab.start.y = touch.clientY;
        },
        tabMoveEvent:function(e){
            var touch = e.touches[0],
                x = touch.clientX,
                y = touch.clientY;
            
            this.tab.left += x - this.tab.start.x;
            if(this.tab.left > 0){
                this.tab.left = 0;
            }
            if(Math.abs(this.tab.left) >= (this.tab.width - this.tab.showWidth)){
                this.tab.left = -1 * (this.tab.width - this.tab.showWidth);
                this.tab.shadow_status = false;
            }else {
                this.tab.shadow_status = true;
            }
            this.tab.start.x = x;
            this.tab.start.y = y;    
        },
        tabEndEvent:function(e){
            this.tab.start.x = 0;
            this.tab.start.y = 0;
        },
        tabClickEvent:function(index,e){
            this.tab.active_index = index;
        }
    }
})
