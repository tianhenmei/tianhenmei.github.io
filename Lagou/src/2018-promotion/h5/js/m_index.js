"use strict";
var app = new Vue({
    el:"#app",
    data:{
        countId:'',
        fontSize:16,
        from:'',
        isiPhone:false,
        testStatus:false,
        browserType:0,  // 浏览器类型
        loadedCount:0,  // js、css加载数量
        employerAnimation:{},
        oppo:{
            href:"https://www.lagou.com"
        },
        companyHref:{
            one:"self.location=\'https://www.lagou.com/center/company_",
            two:".html\';"
        },
        positionHref:{
            one:"self.location=\'https://www.lagou.com/center/job_",
            two:".html\';"
        },
        // tab 切换
        tab:{
            offsetTop:0,
            height:0,
            fixed:false,
            active_index:0,
            count:2,
            status:false,
            list:[{
                name:'超级雇主',
                elem:'yh-center__employer',
                offsetTop:0,
                height:0
            },{
                name:'名企首发',
                elem:'yh-center__first',
                offsetTop:0,
                height:0
            },{
                name:'千万豪门',
                elem:'yh-center__rich',
                offsetTop:0,
                height:0
            },{
                name:'高薪必投',
                elem:'yh-center__will',
                offsetTop:0,
                height:0
            },{
                name:'热招风暴',
                elem:'yh-center__storm',
                offsetTop:0,
                height:0
            },{
                name:'AI狂热季',
                elem:'yh-center__ai',
                offsetTop:0,
                height:0
            },{
                name:'人气精选',
                elem:'yh-center__choice',
                offsetTop:0,
                height:0
            }],
            unfoldStatus:false,
            unfold:[{
                href:'https://www.lagou.com',
                name:'热招风暴'
            },{
                href:'https://www.lagou.com',
                name:'人气精选'
            },{
                href:'https://www.lagou.com',
                name:'工程师专场'
            },{
                href:'https://www.lagou.com',
                name:'产品专场',
                last:true
            },{
                href:'https://www.lagou.com',
                name:'市场  \  商业化  \  运营专场'
            },{
                href:'https://www.lagou.com',
                name:'高薪来袭',
                last:true
            }],
            shadow_status:true,
            initWidth:573,//589-26,
            showWidth:573,//589-26,
            width:9999,
            left:0,
            start:{
                x:0,
                y:0
            }
        },
        // 热招职位
        hot:{
            href:"https://www.lagou.com",
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
            count:100,
            href:"https://www.lagou.com",
            in:{
                count:120,
                list:[{
                    positionId:4123331,
                    position:'Java开发'
                },{
                    positionId:4123331,
                    position:'Python开发'
                },{
                    positionId:4123331,
                    position:'商业化运营'
                }]
            },
            quickest:{
                count:130,
                list:[{
                    positionId:4123331,
                    position:'销售主管'
                },{
                    positionId:4123331,
                    position:'首席架构师'
                },{
                    positionId:4123331,
                    position:'市场营销主管'
                }]
            },
            most:{
                count:140,
                list:[{
                    companyId:322564,
                    position:'OPPO'
                },{
                    companyId:322564,
                    position:'Vivo'
                },{
                    companyId:322564,
                    position:'点我达'
                }]
            }
        },
        // 领先雇主
        leader:{
            count:150,
            href:"https://www.lagou.com",
            list:[{
                count:160,
                companyId:322564,
                industry:'移动互联网行业',
                location:'深圳',
                scale:'2000人以上',
                label:['长期激励','长期激励','长期激励'],
                position:[{
                    positionId:4123331,
                    name:'工程师工程师工',
                    salary:'20K-30K'
                },{
                    positionId:4123331,
                    name:'工程师工程师工',
                    salary:'20K-30K'
                },{
                    positionId:4123331,
                    name:'工程师工程师工',
                    salary:'20K-30K'
                }]
            }]
        },
        // 超级雇主
        employer:{
            count:210,
            href:"https://www.lagou.com",
            list:[{
                companyId:322564,
                logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                name:'京东商城',
                level:'不需要融资',
                industry:'移动互联网行业',
                location:'深圳',
                scale:'2000人以上',
                label:['长期激励','长期激励','长期激励'],
                introduce:'150天涨薪计划，游戏平台一人当关,万夫莫敌！',
                position:[{
                    positionId:4123331,
                    name:'Java工程师',
                    year:'1-3年',
                    education:'本科',
                    salary:'20K-30K'
                },{
                    positionId:4123331,
                    name:'Java工程师',
                    year:'1-3年',
                    education:'本科',
                    salary:'20K-30K'
                },{
                    positionId:4123331,
                    name:'Java工程师',
                    year:'1-3年',
                    education:'本科',
                    salary:'20K-30K'
                }]
            }]
        },
        // 名企首发
        first:{
            count:600,
            href:"https://www.lagou.com",
            company:{
                count:5000,
                list:[{
                    name:'京东商城',
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image/M00/47/15/CgpFT1ll1HSAJd7KAABwVghAOK4012.png',
                    companyId:322564,
                    positionId:4123331,
                    position:'高级架构师',
                    location:'北京',
                    salary:'50K',
                    intro:'50K犒赏够爽快，说不定下一个年会你就和刘强东和奶茶MM一起过。'
                },{
                    name:'京东商城',
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image/M00/47/15/CgpFT1ll1HSAJd7KAABwVghAOK4012.png',
                    companyId:322564,
                    positionId:4123331,
                    position:'高级架构师',
                    location:'北京',
                    salary:'50K',
                    intro:'50K犒赏够爽快，说不定下一个年会你就和刘强东和奶茶MM一起过。'
                },{
                    name:'京东商城',
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image/M00/47/15/CgpFT1ll1HSAJd7KAABwVghAOK4012.png',
                    companyId:322564,
                    positionId:4123331,
                    position:'高级架构师',
                    location:'北京',
                    salary:'50K',
                    intro:'50K犒赏够爽快，说不定下一个年会你就和刘强东和奶茶MM一起过。'
                },{
                    name:'京东商城',
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image/M00/47/15/CgpFT1ll1HSAJd7KAABwVghAOK4012.png',
                    companyId:322564,
                    positionId:4123331,
                    position:'高级架构师',
                    location:'北京',
                    salary:'50K',
                    intro:'50K犒赏够爽快，说不定下一个年会你就和刘强东和奶茶MM一起过。'
                },{
                    name:'京东商城',
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image/M00/47/15/CgpFT1ll1HSAJd7KAABwVghAOK4012.png',
                    companyId:322564,
                    positionId:4123331,
                    position:'高级架构师',
                    location:'北京',
                    salary:'50K',
                    intro:'50K犒赏够爽快，说不定下一个年会你就和刘强东和奶茶MM一起过。'
                },{
                    name:'京东商城',
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image/M00/47/15/CgpFT1ll1HSAJd7KAABwVghAOK4012.png',
                    companyId:322564,
                    positionId:4123331,
                    position:'高级架构师',
                    location:'北京',
                    salary:'50K',
                    intro:'50K犒赏够爽快，说不定下一个年会你就和刘强东和奶茶MM一起过。'
                }]
            },
            question:{
                count:700,
                href:'https://www.lagou.com',
                list:[{
                    ask:'你觉得钱是什么颜色？',
                    answer:'互联网名企面试题',
                    guest:'30位大咖答疑'
                }]
            },
            recommend:{
                count:750,
                href:'https://www.lagou.com',
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
            count:800,
            href:"https://www.lagou.com",
            active_index:0,
            list:[
                [{
                    companyId:322564,
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    location:'深圳',
                    position:[{
                        positionId:4123331,
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        positionId:4123331,
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        positionId:4123331,
                        name:'高级产品经理',
                        salary:'20K-30K'
                    }]
                },{
                    companyId:322564,
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    location:'深圳',
                    position:[{
                        positionId:4123331,
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        positionId:4123331,
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        positionId:4123331,
                        name:'高级产品经理',
                        salary:'20K-30K'
                    }]
                },{
                    companyId:322564,
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    location:'深圳',
                    position:[{
                        positionId:4123331,
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        positionId:4123331,
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        positionId:4123331,
                        name:'高级产品经理',
                        salary:'20K-30K'
                    }]
                },{
                    companyId:322564,
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    location:'深圳',
                    position:[{
                        positionId:4123331,
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        positionId:4123331,
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        positionId:4123331,
                        name:'高级产品经理',
                        salary:'20K-30K'
                    }]
                }],[{
                    companyId:322564,
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    location:'深圳',
                    position:[{
                        positionId:4123331,
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        positionId:4123331,
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        positionId:4123331,
                        name:'高级产品经理',
                        salary:'20K-30K'
                    }]
                    },{
                        companyId:322564,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城',
                        location:'深圳',
                        position:[{
                            positionId:4123331,
                            name:'高级产品经理',
                            salary:'20K-30K'
                        },{
                            positionId:4123331,
                            name:'高级产品经理',
                            salary:'20K-30K'
                        },{
                            positionId:4123331,
                            name:'高级产品经理',
                            salary:'20K-30K'
                        }]
                    },{
                        companyId:322564,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城',
                        location:'深圳',
                        position:[{
                            positionId:4123331,
                            name:'高级产品经理',
                            salary:'20K-30K'
                        },{
                            positionId:4123331,
                            name:'高级产品经理',
                            salary:'20K-30K'
                        },{
                            positionId:4123331,
                            name:'高级产品经理',
                            salary:'20K-30K'
                        }]
                    },{
                        companyId:322564,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城',
                        location:'深圳',
                        position:[{
                            positionId:4123331,
                            name:'高级产品经理',
                            salary:'20K-30K'
                        },{
                            positionId:4123331,
                            name:'高级产品经理',
                            salary:'20K-30K'
                        },{
                            positionId:4123331,
                            name:'高级产品经理',
                            salary:'20K-30K'
                        }]
                    }],
                [{
                    companyId:322564,
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    location:'深圳',
                    position:[{
                        positionId:4123331,
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        positionId:4123331,
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        positionId:4123331,
                        name:'高级产品经理',
                        salary:'20K-30K'
                    }]
                },{
                    companyId:322564,
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    location:'深圳',
                    position:[{
                        positionId:4123331,
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        positionId:4123331,
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        positionId:4123331,
                        name:'高级产品经理',
                        salary:'20K-30K'
                    }]
                },{
                    companyId:322564,
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    location:'深圳',
                    position:[{
                        positionId:4123331,
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        positionId:4123331,
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        positionId:4123331,
                        name:'高级产品经理',
                        salary:'20K-30K'
                    }]
                },{
                    companyId:322564,
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    location:'深圳',
                    position:[{
                        positionId:4123331,
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        positionId:4123331,
                        name:'高级产品经理',
                        salary:'20K-30K'
                    },{
                        positionId:4123331,
                        name:'高级产品经理',
                        salary:'20K-30K'
                    }]
                }]
            ]
        },
        // 高薪必投
        will:{
            count:1000,
            href:"https://www.lagou.com",
            active_index:0,
            list:[
                {   
                    title:'丰厚起薪系列',
                    intro:'没有高薪，是谁给你的勇气买房买车',
                    company:[{
                        companyId:322564,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城',
                        location:'深圳',
                        position:[{
                            positionId:4123331,
                            name:'高级产品经理',
                            salary:'20K-30K'
                        }]
                    },{
                        companyId:322564,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城',
                        location:'深圳',
                        position:[{
                            positionId:4123331,
                            name:'高级产品经理',
                            salary:'20K-30K'
                        }]
                    },{
                        companyId:322564,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城',
                        location:'深圳',
                        position:[{
                            positionId:4123331,
                            name:'高级产品经理',
                            salary:'20K-30K'
                        }]
                    }],
                },
                {
                    title:'优越福利系列',
                    intro:'别看这些小福利，能增多不少幸福感',
                    company:[{
                        companyId:322564,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城',
                        location:'深圳',
                        position:[{
                            positionId:4123331,
                            name:'高级产品经理',
                            salary:'20K-30K'
                        }]
                    },{
                        companyId:322564,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城',
                        location:'深圳',
                        position:[{
                            positionId:4123331,
                            name:'高级产品经理',
                            salary:'20K-30K'
                        }]
                    },{
                        companyId:322564,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城',
                        location:'深圳',
                        position:[{
                            positionId:4123331,
                            name:'高级产品经理',
                            salary:'20K-30K'
                        }]
                    }]
                }
            ]
        },
        // 热招风暴
        storm:{
            count:1100,
            href:"https://www.lagou.com",
            active_index:0,
            list:[
                {   
                    title:'',
                    intro:'无法让你涨姿势的工作，这样的生活和咸鱼没什么区别',
                    company:[{
                        companyId:322564,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:322564,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:322564,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:322564,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:322564,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:322564,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:322564,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:322564,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    }],
                },
                {
                    title:'优越福利系列',
                    intro:'真相了！队友属性基本决定你会在怎样的氛围中工作',
                    company:[{
                        companyId:322564,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:322564,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:322564,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:322564,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:322564,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:322564,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:322564,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    },{
                        companyId:322564,
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        name:'京东商城'
                    }],
                }
            ]
        },
        // AI狂热季
        ai:{
            count:1200,
            href:"https://www.lagou.com",
            engineer:"https://www.lagou.com",  // 工程师专场
            product:"https://www.lagou.com",  // 产品专场
            other:"https://www.lagou.com",  // 市场/商业化/运营专场
            list:[{
                companyId:322564,
                logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                name:'京东商城',
                position:[{
                    positionId:4123331,
                    name:'Java工程师',
                    salary:'20K-30K'
                }]
            },{
                companyId:322564,
                logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                name:'京东商城',
                position:[{
                    positionId:4123331,
                    name:'Java工程师',
                    salary:'20K-30K'
                }]
            },{
                companyId:322564,
                logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                name:'京东商城',
                position:[{
                    positionId:4123331,
                    name:'Java工程师',
                    salary:'20K-30K'
                }]
            },{
                companyId:322564,
                logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                name:'京东商城',
                position:[{
                    positionId:4123331,
                    name:'Java工程师',
                    salary:'20K-30K'
                }]
            }]
        },
        // 人气精选
        choice:{
            count:1310,
            href:"https://www.lagou.com",
            list:[{
                companyId:322564,
                logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                name:'京东商城',
                level:'不需要融资',
                industry:'移动互联网行业',
                location:'深圳',
                scale:'2000人以上',
                label:['长期激励','长期激励','长期激励'],
                introduce:'150天涨薪计划，游戏平台一人当关,万夫莫敌！',
                position:[{
                    positionId:4123331,
                    name:'Java工程师',
                    year:'1-3年',
                    education:'本科',
                    salary:'20K-30K'
                },{
                    positionId:4123331,
                    name:'Java工程师',
                    year:'1-3年',
                    education:'本科',
                    salary:'20K-30K'
                },{
                    positionId:4123331,
                    name:'Java工程师',
                    year:'1-3年',
                    education:'本科',
                    salary:'20K-30K'
                }]
            },{
                companyId:322564,
                logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                name:'京东商城',
                level:'不需要融资',
                industry:'移动互联网行业',
                location:'深圳',
                scale:'2000人以上',
                label:['长期激励','长期激励','长期激励'],
                introduce:'150天涨薪计划，游戏平台一人当关,万夫莫敌！',
                position:[{
                    positionId:4123331,
                    name:'Java工程师',
                    year:'1-3年',
                    education:'本科',
                    salary:'20K-30K'
                },{
                    positionId:4123331,
                    name:'Java工程师',
                    year:'1-3年',
                    education:'本科',
                    salary:'20K-30K'
                },{
                    positionId:4123331,
                    name:'Java工程师',
                    year:'1-3年',
                    education:'本科',
                    salary:'20K-30K'
                }]
            }],
            companys:[{
                name:'团队超给力',
                list:[{
                    companyId:322564,
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    position:'资深视觉设计师',
                    positionId:4123331,
                },{
                    companyId:322564,
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    position:'资深视觉设计师',
                    positionId:4123331,
                },{
                    companyId:322564,
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    position:'资深视觉设计师',
                    positionId:4123331,
                }]
            },{
                name:'环境高大上',
                list:[{
                    companyId:322564,
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    position:'资深视觉设计师',
                    positionId:4123331,
                },{
                    companyId:322564,
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    position:'资深视觉设计师',
                    positionId:4123331,
                },{
                    companyId:322564,
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    position:'资深视觉设计师',
                    positionId:4123331,
                }]
            },{
                name:'领导超 Nice',
                list:[{
                    companyId:322564,
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    position:'资深视觉设计师',
                    positionId:4123331,
                },{
                    companyId:322564,
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    position:'资深视觉设计师',
                    positionId:4123331,
                },{
                    companyId:322564,
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    position:'资深视觉设计师',
                    positionId:4123331,
                }]
            },{
                name:'成长空间大',
                list:[{
                    companyId:322564,
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    position:'资深视觉设计师',
                    positionId:4123331,
                },{
                    companyId:322564,
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    position:'资深视觉设计师',
                    positionId:4123331,
                },{
                    companyId:322564,
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    name:'京东商城',
                    position:'资深视觉设计师',
                    positionId:4123331,
                }]
            }]
        },
    },
    mounted:function(){
        this.hot.duration = this.hot.list.length * 1.5
        this.browserType = this.getBrowserType()

        this.fontSize = parseFloat(this.getComputedValue(document.documentElement,'font-size'));
        this.tab.showWidth = this.getRemValue(this.tab.initWidth) * this.fontSize;
        this.setTabWidth();

        this.addJSCSS();
        this.initWindowScrollEvent();
    },
    methods:{
        getCount:function(num){
            return '0000'.slice((num+'').length)+num
        },
        addJSCSS:function(){
            switch (this.browserType) {
                case 0:  // Opera浏览器
                case 1:  // Firefox浏览器
                case 2:  // Chrome浏览器
                case 3:  // Safari浏览器
                    this.addCssByLink('https://www.lgstatic.com/topic/css/swiper.min.css', this.loadedJSCSS);
                    this.addScript('https://www.lgstatic.com/topic/js/swiper.min.js', this.loadedJSCSS);
                    break;
                case 6:  // IE浏览器
                    animationStatus = true;
                    // lunAnimation(browserType);
                    break;
                case 4:  // IE9.0及以上浏览器
                case 5:
                default:
                    this.addCssByLink('https://www.lgstatic.com/topic/css/idangerous.swiper.css', this.loadedJSCSS);
                    this.addScript('https://www.lgstatic.com/topic/js/idangerous.swiper.min.js', this.loadedJSCSS);
                    break;
            }
        },
        addCssByLink:function(url, callback) {
            var doc = document;
            var link = doc.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("type", "text/css");
            link.setAttribute("href", url);
            
            var heads = doc.getElementsByTagName("head");
            if (heads.length)
                heads[0].appendChild(link);
            else
                doc.documentElement.appendChild(link);
            link.onload = function() {
                callback();
            }
        },
        addScript:function(url, callback) {
            var script = document.createElement("script");
            script.setAttribute("type", "text/javascript");
            script.setAttribute("src", url);
            var heads = document.getElementsByTagName("head");
            if (heads.length)
                heads[0].appendChild(script);
            else
                document.documentElement.appendChild(script);
            script.onload = function() {
                callback();
            }
        },
        getBrowserType:function(){
            var userAgent = window.navigator.userAgent; //取得浏览器的userAgent字符串
            var isOpera = userAgent.indexOf("Opera") > -1;
            var browserType = 0;
            if (isOpera) { //判断是否Opera浏览器
                browserType = 0;
            } else if (userAgent.indexOf("Firefox") > -1) { //判断是否Firefox浏览器
                browserType = 1;
            } else if (userAgent.indexOf("Chrome") > -1) { //判断是否Chrome浏览器
                browserType = 2;
            } else if (userAgent.indexOf("Safari") > -1) { //判断是否Safari浏览器
                browserType = 3;
            } else if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) { //判断是否IE浏览器
                /*if(userAgent.match(/6./i)=="6."){
                    browserType = 6;
                    }else if(userAgent.match(/7./i)=="7."){
                    browserType = 6;
                    }else if(userAgent.match(/8./i)=="8."){
                    browserType = 6;
                    }*/
                if (userAgent.match(/9./i) == "9." || userAgent.match(/10./i) == "10.") {
                    browserType = 4;
                } else {
                    browserType = 6;
                }
            } else if (userAgent.toLowerCase().indexOf("trident") > -1 && userAgent.indexOf("rv") > -1) {
                browserType = 5;
            }
            return browserType;
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
            // alert(this.tab.width +' , '+ this.tab.showWidth)
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
        unfoldEvent:function(e){
            this.tab.unfoldStatus = !this.tab.unfoldStatus; 
        },
        tabClickEvent:function(index,e){
            this.tab.active_index = index;
            if(!this.tab.status){
                this.getTabHeight();
                this.tab.offsetTop = this.$refs['yh-center__tab'].offsetTop;
            }
            this.tab.height = this.$refs['yh-center__tab'].offsetHeight;
            $('html,body').animate({'scrollTop': (this.tab.list[index].offsetTop - this.tab.height)+ "px"},500);
        },
        loadedJSCSS:function(){
            this.loadedCount++;

            if (this.loadedCount == 2) {
                // animationStatus = true;
                this.addEmployerAnimation();
                this.addRichAnimation();
                this.addFirstAnimation();
                this.addFirstGuestAnimation();
                // if (movieElem.length > 0 && movieElem.attr('movie_type') == 'local') {
                //     getMovie();
                // }
                // 添加轮播动画
                // lunAnimation(browserType);
            }
        },
        addEmployerAnimation:function(){
            var i = 0,
                autoplay = true, //false,
                animation = 'move',
                id = '',
                content = null,
                childs = null,
                first = null,
                length = 3,
                elem = $(this.$refs['employer__animation'])
            id = elem.attr('id');
            // autoplay = elem.attr('autoplay');
            // autoplay = autoplay ? true : false;
            // animation = elem.attr('animation');
            // animation = animation ? animation : 'move';

            content = elem.find('#'+id+'-content')
            childs = content.children()
            length = childs.length
            first = childs.eq(0)
            content.css('left',0)
            this.employerAnimation[id] = {
                width:first.children().eq(0).width(),
                currentIndex:0,
                length:length,
                autoplay:autoplay,
                animation:animation,
                swiper:null,
                pagination:false
                // pagination_color:$('#'+id+'-pagination > div').eq(0).css('background-color')
            }
            switch(animation){
                case 'zoomIn':
                    this.initZoomInAnimation(id)
                    break
                default:
                    this.initMoveAnimation(id,'employer__list','employer__one')
                    break
            }
        },
        addRichAnimation:function(){
            var i = 0,
                autoplay = true, //false,
                animation = 'move',
                id = '',
                content = null,
                childs = null,
                first = null,
                length = 3,
                elem = $(this.$refs['rich__animation'])
            id = elem.attr('id');
            // autoplay = elem.attr('autoplay');
            // autoplay = autoplay ? true : false;
            // animation = elem.attr('animation');
            // animation = animation ? animation : 'move';

            content = elem.find('#'+id+'-content')
            childs = content.children()
            length = childs.length
            first = childs.eq(0)
            content.css('left',0)
            this.employerAnimation[id] = {
                width:first.children().eq(0).width(),
                currentIndex:0,
                length:length,
                autoplay:autoplay,
                animation:animation,
                swiper:null,
                pagination:true
                // pagination_color:$('#'+id+'-pagination > div').eq(0).css('background-color')
            }
            switch(animation){
                case 'zoomIn':
                    this.initZoomInAnimation(id)
                    break
                default:
                    this.initMoveAnimation(id,'rich__container','rich__list')
                    break
            }
        },
        addFirstAnimation:function(){
            var i = 0,
                autoplay = true, //false,
                animation = 'move',
                id = '',
                content = null,
                childs = null,
                first = null,
                length = 3,
                elem = $(this.$refs['first__company'])
            id = elem.attr('id');

            content = elem.find('#'+id+'-content')
            childs = content.children()
            length = childs.length
            first = childs.eq(0)
            content.css('left',0)
            this.employerAnimation[id] = {
                width:first.children().eq(0).width(),
                currentIndex:0,
                length:length,
                autoplay:autoplay,
                animation:animation,
                direction:'vertical',
                swiper:null,
                pagination:false
                // pagination_color:$('#'+id+'-pagination > div').eq(0).css('background-color')
            }
            switch(animation){
                case 'zoomIn':
                    this.initZoomInAnimation(id)
                    break
                default:
                    this.initMoveAnimation(id,'company__ul','company__li')
                    break
            }
        },
        addFirstGuestAnimation:function(){
            var i = 0,
                autoplay = true, //false,
                animation = 'move',
                id = '',
                content = null,
                childs = null,
                first = null,
                length = 3,
                elem = $(this.$refs['first__recommend'])
            id = elem.attr('id');

            content = elem.find('#'+id+'-content')
            childs = content.children()
            length = childs.length
            first = childs.eq(0)
            content.css('left',0)
            this.employerAnimation[id] = {
                width:first.children().eq(0).width(),
                currentIndex:0,
                length:length,
                autoplay:autoplay,
                animation:animation,
                swiper:null,
                pagination:false
                // pagination_color:$('#'+id+'-pagination > div').eq(0).css('background-color')
            }
            switch(animation){
                case 'zoomIn':
                    this.initZoomInAnimation(id)
                    break
                default:
                    this.initMoveAnimation(id,'recommend__ul','recommend__li')
                    break
            }
        },
        initMoveAnimation:function(id,wrapperClass,slideClass){
            var self = this,
                pagination = null,
                length = 0,
                totalLength = 3,
                data = this.employerAnimation[id],
                pstatus = data.pagination;
            if(pstatus){
                pagination = $('#'+id+'-pagination').children();
                length = data.length;//pagination.length
            }else {
                length = data.length
            }
            
            data.swiper = new Swiper('#'+id, {
                wrapperClass : wrapperClass,
                slideClass : slideClass,
                autoplay: data.autoplay ? 3000 : 0,//可选选项，自动滑动
                loop : true,
                autoplayDisableOnInteraction:false,
                direction:data.direction ? data.direction : 'horizontal',
                // loopedSlides:1,
                pagination : '#'+id+'-pagination',
                paginationClickable:true,
                bulletClass:'dot',
                bulletActiveClass:'dot--active',
                prevButton:'#'+id+'-arrow-left',
                nextButton:'#'+id+'-arrow-right',
                // paginationElement:'span',
                // paginationBulletRender: function (swiper, index, className) {
                //     return '<span class="' + className + '" style="background-color:'+sliderStyle1Swiper[id].pagination_color+';"></span>';
                // },
                onInit:function(swiper){
                    if(pstatus){
                        // totalLength = $('#'+id+'-pagination').children().length
                        // $('#'+id+'-pagination').children().css('background-color',data.pagination_color)
                    }
                },
                onSlideChangeEnd: function(swiper) {
                    // var ul = $(elemClass).children(),
                        // li = ul.children('li'),
                        // activeLi = ul.children('.' + this.slideActiveClass).length > 0 ? ul.children('.' + this.slideActiveClass) : ul.children('.active'),
                        // index = activeLi.index(),
                    let index = swiper.activeIndex,
                        // id = ul.attr('id'),
                        // logo = $('.' + id + 'Button').children('img'),
                        endIndex = index - 1;
                    if (endIndex == -1) {
                        endIndex = length - 1;
                    } else if (endIndex == totalLength) {
                        endIndex = 0;
                    }
                    // pagination.removeClass('active').eq(endIndex).addClass('active');
                    // li.eq(index).removeClass('active').end().eq(index).addClass('active');
                }
            })
        },
        initZoomInAnimation:function(id){
            let pagination = $('#'+id+'-pagination').children(),
                length = pagination.length,
                totalLength = 3
            this.employerAnimation[id].swiper = new Swiper('#'+id+'-container', {
                wrapperClass : 'yh-slider-content',
                slideClass : 'yh-slider-slide',
                autoplay: sliderStyle1Swiper[id].autoplay ? 3000 : 0,//可选选项，自动滑动
                // loop : true,
                // loopedSlides:1,
                // pagination : '#'+id+'-pagination',
                // paginationClickable:true,
                bulletClass:'one',
                bulletActiveClass:'active',
                prevButton:'#'+id+'-arrow-left',
                nextButton:'#'+id+'-arrow-right',
                // paginationElement:'span',
                // paginationBulletRender: function (swiper, index, className) {
                //     return '<span class="' + className + '" style="background-color:'+sliderStyle1Swiper[id].pagination_color+';"></span>';
                // },
                mode: 'horizontal',
                // paginationClickable: true,
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 1.1,
                // slidesPerView: 1.56,
                initialSlide: 1,
                autoplayDisableOnInteraction: false,
                // prevButton: '.' + id + 'Pre',
                // nextButton: '.' + id + 'Next',
                coverflow: {
                    rotate: 0,
                    stretch: 230,
                    depth: 300,
                    modifier: 1,
                    slideShadows: true
                },
                onInit:function(swiper){
                    totalLength = $('#'+id+'-pagination').children().length
                    pagination.removeClass('active').eq(1).addClass('active')
                    // $('#'+id+'-pagination').children().css('background-color',sliderStyle1Swiper[id].pagination_color)
                },
                onSlideChangeEnd: function(swiper) {
                    // var ul = $(elemClass).children(),
                        // li = ul.children('li'),
                        // activeLi = ul.children('.' + this.slideActiveClass).length > 0 ? ul.children('.' + this.slideActiveClass) : ul.children('.active'),
                        // index = activeLi.index(),
                    let index = swiper.activeIndex,
                        // id = ul.attr('id'),
                        // logo = $('.' + id + 'Button').children('img'),
                        endIndex = index //index - 1;
                    if (endIndex == -1) {
                        endIndex = length - 1;
                    } else if (endIndex == totalLength) {
                        endIndex = 0;
                    }
                    pagination.removeClass('active').eq(endIndex).addClass('active');
                    // li.eq(index).removeClass('active').end().eq(index).addClass('active');
                }
            })
        },
        getTabHeight:function(){
            var list = this.tab.list,
                elem = null,
                status = false,
                i = 0;
            for(i = 0; i < list.length; i++){
                elem = this.$refs[list[i].elem];
                if(list[i].offsetTop != elem.offsetTop || list[i].height != elem.offsetHeight){
                    this.tab.list[i].offsetTop = elem.offsetTop;
                    this.tab.list[i].height = elem.offsetHeight;
                    status = true
                }
            }
            if(!status) {
                this.tab.status = true;
            }
        },
        initWindowScrollEvent:function(){
            var self = this;
            self.getTabHeight();
            self.tab.offsetTop = self.$refs['yh-center__tab'].offsetTop;
            self.tab.height = self.$refs['yh-center__tab'].offsetHeight;
            $(window).scroll(function() {
                var scrollTop = $(window).scrollTop(),
                    one = null,
                    halfWidow = $(window).height() / 2,
                    i = 0;
                if(!self.tab.status){
                    self.getTabHeight();
                    self.tab.offsetTop = self.$refs['yh-center__tab'].offsetTop;
                    self.tab.height = self.$refs['yh-center__tab'].offsetHeight;
                }
                if(self.tab.offsetTop <= scrollTop){
                    self.tab.fixed = true;
                }else{
                    self.tab.fixed = false;
                }
                for (i = 0; i < self.tab.list.length; i++) {
                    one = self.tab.list[i];
                    if ((one.offsetTop - halfWidow) <= scrollTop && (one.offsetTop + one.height - halfWidow) >= scrollTop) {
                        self.tab.active_index = i;
                        break;
                    }
                }
            });
        }
    }
})
