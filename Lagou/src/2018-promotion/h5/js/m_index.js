"use strict";
// Vue.use(VueAwesomeSwiper)
var app = new Vue({
    el:"#app",
    data:{
        countId:'1b2f',
        fontSize:16,
        from:'',
        isAPP:false,
        isiPhone:false,
        testStatus:false,
        browserType:0,  // 浏览器类型
        loadedCount:0,  // js、css加载数量
        employerAnimation:{},
        logoHref:'http://www.lgstatic.com/thumbnail_100x100/',
        logoHrefO:'http://www.lgstatic.com/',
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
        swiperOption: {
            navigation: {
                nextEl: '.employer__arrow--left',
                prevEl: '.employer__arrow--right'
            }
        },
        // tab 切换
        tab:{
            offsetTop:0,
            height:0,
            fixed:false,
            active_index:0,
            count:2,
            status:false,
            click_status:false,
            transition:true,
            list:[{
                name:'超级雇主',
                elem:'yh-center__employer',
                offsetTop:0,
                height:0,
                index:0
            },{
                name:'名企首发',
                elem:'yh-center__first',
                offsetTop:0,
                height:0,
                index:1
            },{
                name:'AI专场',
                elem:'yh-center__ai',
                offsetTop:0,
                // initHeight:105+35+252+18+15-15,
                height:0,
                index:2
            },{
                name:'24Hour排行榜',
                elem:'yh-center__popular',
                offsetTop:0,
                height:0,
                index:3
            },{
                name:'千万豪门',
                elem:'yh-center__rich',
                offsetTop:0,
                height:0,
                index:4
            },{
                name:'高薪必投',
                elem:'yh-center__will',
                offsetTop:0,
                height:0,
                index:5
            },{
                name:'热招风暴',
                elem:'yh-center__storm',
                offsetTop:0,
                height:0,
                index:6
            },{
                name:'工程师专场',
                elem:'yh-center__special',
                parent:[2],
                top:105+35+252+18+15,
                offsetTop:0,
                height:0,
                index:7
            },{
                name:'产品专场',
                parent:[2],
                top:105+35+252+18+15,
                elem:'yh-center__special',
                offsetTop:0,
                height:0,
                index:8
            },{
                name:'市场商业运营',
                parent:[2],
                elem:'yh-center__other',
                top:105+35+252+18+15+102+16,
                offsetTop:0,
                height:0,
                index:9
            },{
                name:'人气精选',
                elem:'yh-center__choice',
                offsetTop:0,
                height:0,
                index:10
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
            initWidth:710,//573,//589-26,
            showWidth:710,//573,//589-26,
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
            status:false,
            list:[{
                "type":1,//快报类型：1、查看简历；2、面试邀请；3、投递
                "userName":"free1",
                "companyShort":"拉勾",
                "positionName":"java开发"
            },{
                "type":2,
                "userName":"free2",
                "companyShort":"拉勾",
                "positionName":"java开发"
            },{
                "type":3,
                "userName":"free3",
                "companyShort":"拉勾",
                "positionName":"java开发"
            },{
                "type":1,//快报类型：1、查看简历；2、面试邀请；3、投递
                "userName":"free1",
                "companyShort":"拉勾",
                "positionName":"java开发"
            },{
                "type":2,
                "userName":"free2",
                "companyShort":"拉勾",
                "positionName":"java开发"
            },{
                "type":3,
                "userName":"free3",
                "companyShort":"拉勾",
                "positionName":"java开发"
            }],
            duration:150
        },
        // 24 小时 热力排行榜
        popular:{
            count:100,
            href:"https://activity.lagou.com/activi/promotion2018/pages/h5/index.html#/hotRankH5",
            in:{
                count:120,
                list:[{
                    "companyId":781,
                    "companyName":"贵州四方鼎立咨询服务有限公司",
                    "logo":"image1/M00/00/04/CgYXBlTUV_6AG-L8AAB2-ox3Ikg157.jpg",
                    "shortName":"移折通",
                    "positionId":112547,
                    "positionName":"产品运营总监",
                    "oneWord":"最牛的公司",
                    "salary":"15k-30k"
                },{
                    "companyId":18725,
                    "companyName":"齐分享（上海）纺织科技有限公司",
                    "logo":"image1/M00/00/23/CgYXBlTUWHiALBkvAAClxZtES4I255.jpg",
                    "shortName":"齐分享",
                    "positionId":93411,
                    "positionName":"运营总监",
                    "oneWord":"钱最多的公司",
                    "salary":"15k-25k"
                },{
                    "companyId":18725,
                    "companyName":"齐分享（上海）纺织科技有限公司",
                    "logo":"image1/M00/00/23/CgYXBlTUWHiALBkvAAClxZtES4I255.jpg",
                    "shortName":"齐分享",
                    "positionId":93411,
                    "positionName":"运营总监",
                    "oneWord":"钱最多的公司",
                    "salary":"15k-25k"
                }]
            },
            quickest:{
                count:130,
                list:[{
                    "companyId":781,
                    "companyName":"贵州四方鼎立咨询服务有限公司",
                    "logo":"image1/M00/00/04/CgYXBlTUV_6AG-L8AAB2-ox3Ikg157.jpg",
                    "shortName":"移折通",
                    "positionId":112547,
                    "positionName":"产品运营总监",
                    "oneWord":"最牛的公司",
                    "salary":"15k-30k"
                },{
                    "companyId":18725,
                    "companyName":"齐分享（上海）纺织科技有限公司",
                    "logo":"image1/M00/00/23/CgYXBlTUWHiALBkvAAClxZtES4I255.jpg",
                    "shortName":"齐分享",
                    "positionId":93411,
                    "positionName":"运营总监",
                    "oneWord":"钱最多的公司",
                    "salary":"15k-25k"
                },{
                    "companyId":18725,
                    "companyName":"齐分享（上海）纺织科技有限公司",
                    "logo":"image1/M00/00/23/CgYXBlTUWHiALBkvAAClxZtES4I255.jpg",
                    "shortName":"齐分享",
                    "positionId":93411,
                    "positionName":"运营总监",
                    "oneWord":"钱最多的公司",
                    "salary":"15k-25k"
                }]
            },
            most:{
                count:140,
                list:[{
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                "financeStage":"不需要融资",
                },{
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                },{
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                "financeStage":"不需要融资",
                }]
            }
        },
        // 领先雇主
        leader:{
            count:150,
            href:"https://www.lagou.com",
            list:[{
                count:160,
                "companyId":147,
                "companyName":"拉勾网",
                "shortName":"拉勾",
                "oneWord":"最牛的招聘公司",
                "companySize":"2000人以上",
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
                "companyLabel":[
                    "绩效奖金",
                    "年底双薪",
                    "五险一金",
                    "节日礼物"
                ],
                "industryFields":"互联网招聘",
                "financeStage":"不需要融资",
                "city":"北京"
            }]
        },
        // 超级雇主
        employer:{
            count:210,
            animateStatus:false,
            href:"https://activity.lagou.com/topic/2018qmszjcjgz.html",
            list:[{
                logo:'https://www.lgstatic.com/thumbnail_300x300/i/image/M00/47/15/CgpFT1ll1HSAJd7KAABwVghAOK4012.png',
                "companyId":147,
                "companyName":"拉勾网",
                "shortName":"拉勾",
                "oneWord":"最牛的招聘公司",
                "companySize":"2000人以上",
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K",
                        "city":"北京",
					    "education":"本科",
					    "workYear":"1-3年"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K",
                        "city":"北京",
					    "education":"本科",
					    "workYear":"1-3年"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K",
                        "city":"北京",
					    "education":"本科",
					    "workYear":"1-3年"
                    }
                ],
                "companyLabel":[
                    "绩效奖金",
                    "年底双薪",
                    "五险一金",
                    "节日礼物"
                ],
                "industryFields":"互联网招聘",
                "financeStage":"不需要融资",
                "city":"北京"
            }]
        },
        // 名企首发
        first:{
            count:600,
            href:"https://activity.lagou.com/activi/promotion2018/pages/h5/index.html#/firstreleaseposition",
            company:{
                count:5000,
                list:[{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image/M00/47/15/CgpFT1ll1HSAJd7KAABwVghAOK4012.png',
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"25-40K",
                            "city":"北京",
					        "education":"本科",
					        "workYear":"1-3年"
                        },{
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K",
                            "city":"北京",
					        "education":"本科",
					        "workYear":"1-3年"
                        },{
                            "positionId":1,
                            "positionName":"产品经理",
                            "salary":"15-40K",
                            "city":"北京",
					        "education":"本科",
					        "workYear":"1-3年"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                    "city":"北京"
                },{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image/M00/47/15/CgpFT1ll1HSAJd7KAABwVghAOK4012.png',
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K",
                            "city":"北京",
					        "education":"本科",
					        "workYear":"1-3年"
                        },{
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K",
                            "city":"北京",
					        "education":"本科",
					        "workYear":"1-3年"
                        },{
                            "positionId":1,
                            "positionName":"产品经理",
                            "salary":"15-40K",
                            "city":"北京",
					        "education":"本科",
					        "workYear":"1-3年"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                    "city":"北京"
                },{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image/M00/47/15/CgpFT1ll1HSAJd7KAABwVghAOK4012.png',
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K",
                            "city":"北京",
					        "education":"本科",
					        "workYear":"1-3年"
                        },{
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K",
                            "city":"北京",
					        "education":"本科",
					        "workYear":"1-3年"
                        },{
                            "positionId":1,
                            "positionName":"产品经理",
                            "salary":"15-40K",
                            "city":"北京",
					        "education":"本科",
					        "workYear":"1-3年"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                    "city":"北京"
                },{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image/M00/47/15/CgpFT1ll1HSAJd7KAABwVghAOK4012.png',
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K",
                            "city":"北京",
					        "education":"本科",
					        "workYear":"1-3年"
                        },{
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K",
                            "city":"北京",
					        "education":"本科",
					        "workYear":"1-3年"
                        },{
                            "positionId":1,
                            "positionName":"产品经理",
                            "salary":"15-40K",
                            "city":"北京",
					        "education":"本科",
					        "workYear":"1-3年"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                    "city":"北京"
                },{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image/M00/47/15/CgpFT1ll1HSAJd7KAABwVghAOK4012.png',
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K",
                            "city":"北京",
					        "education":"本科",
					        "workYear":"1-3年"
                        },{
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K",
                            "city":"北京",
					        "education":"本科",
					        "workYear":"1-3年"
                        },{
                            "positionId":1,
                            "positionName":"产品经理",
                            "salary":"15-40K",
                            "city":"北京",
					        "education":"本科",
					        "workYear":"1-3年"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                    "city":"北京"
                },{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image/M00/47/15/CgpFT1ll1HSAJd7KAABwVghAOK4012.png',
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K",
                            "city":"北京",
					        "education":"本科",
					        "workYear":"1-3年"
                        },{
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K",
                            "city":"北京",
					        "education":"本科",
					        "workYear":"1-3年"
                        },{
                            "positionId":1,
                            "positionName":"产品经理",
                            "salary":"15-40K",
                            "city":"北京",
					        "education":"本科",
					        "workYear":"1-3年"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                    "city":"北京"
                }]
            },
            question:{
                count:700,
                href:'https://activity.lagou.com/activity/dist/interviewQA/m_index.html',
                list:[{
                    ask:'你觉得钱是什么颜色？',
                    answer:'互联网名企面试题',
                    guest:'30位大咖答疑'
                }]
            },
            recommend:{
                count:750,
                href:'https://activity.lagou.com/activi/promotion2018/pages/h5/index.html#/firstreleaseposition',
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
            count:7000,
            href:"https://activity.lagou.com/topic/2018qmszjqwhm.html",
            active_index:0,
            list:[
                [{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"产品经理",
                            "salary":"15-40K"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                    "city":"北京"
                },{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"产品经理",
                            "salary":"15-40K"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                    "city":"北京"
                },{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"产品经理",
                            "salary":"15-40K"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                    "city":"北京"
                },{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"产品经理",
                            "salary":"15-40K"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                    "city":"北京"
                }],[{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"产品经理",
                            "salary":"15-40K"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                    "city":"北京"
                    },{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        "companyId":147,
                        "companyName":"拉勾网",
                        "shortName":"拉勾",
                        "oneWord":"最牛的招聘公司",
                        "companySize":"2000人以上",
                        "positionVo":[
                            {
                                "positionId":1,
                                "positionName":"设计",
                                "salary":"15-40K"
                            },{
                                "positionId":1,
                                "positionName":"设计",
                                "salary":"15-40K"
                            },{
                                "positionId":1,
                                "positionName":"产品经理",
                                "salary":"15-40K"
                            }
                        ],
                        "companyLabel":[
                            "绩效奖金",
                            "年底双薪",
                            "五险一金",
                            "节日礼物"
                        ],
                        "industryFields":"互联网招聘",
                        "financeStage":"不需要融资",
                        "city":"北京"
                    },{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        "companyId":147,
                        "companyName":"拉勾网",
                        "shortName":"拉勾",
                        "oneWord":"最牛的招聘公司",
                        "companySize":"2000人以上",
                        "positionVo":[
                            {
                                "positionId":1,
                                "positionName":"设计",
                                "salary":"15-40K"
                            },{
                                "positionId":1,
                                "positionName":"设计",
                                "salary":"15-40K"
                            },{
                                "positionId":1,
                                "positionName":"产品经理",
                                "salary":"15-40K"
                            }
                        ],
                        "companyLabel":[
                            "绩效奖金",
                            "年底双薪",
                            "五险一金",
                            "节日礼物"
                        ],
                        "industryFields":"互联网招聘",
                        "financeStage":"不需要融资",
                        "city":"北京"
                    },{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        "companyId":147,
                        "companyName":"拉勾网",
                        "shortName":"拉勾",
                        "oneWord":"最牛的招聘公司",
                        "companySize":"2000人以上",
                        "positionVo":[
                            {
                                "positionId":1,
                                "positionName":"设计",
                                "salary":"15-40K"
                            },{
                                "positionId":1,
                                "positionName":"设计",
                                "salary":"15-40K"
                            },{
                                "positionId":1,
                                "positionName":"产品经理",
                                "salary":"15-40K"
                            }
                        ],
                        "companyLabel":[
                            "绩效奖金",
                            "年底双薪",
                            "五险一金",
                            "节日礼物"
                        ],
                        "industryFields":"互联网招聘",
                        "financeStage":"不需要融资",
                        "city":"北京"
                    }],
                [{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"产品经理",
                            "salary":"15-40K"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                    "city":"北京"
                },{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"产品经理",
                            "salary":"15-40K"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                    "city":"北京"
                },{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"产品经理",
                            "salary":"15-40K"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                    "city":"北京"
                },{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"产品经理",
                            "salary":"15-40K"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                    "city":"北京"
                }]
            ]
        },
        // 高薪必投
        will:{
            count:1000,
            href:"https://activity.lagou.com/topic/2018qmszjgx.html",
            active_index:0,
            list:[
                {   
                    title:'丰厚起薪系列',
                    intro:'没有高薪，是谁给你的勇气买房买车',
                    company:[{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        "companyId":147,
                        "companyName":"拉勾网",
                        "shortName":"拉勾",
                        "oneWord":"最牛的招聘公司",
                        "companySize":"2000人以上",
                        "positionVo":[
                            {
                                "positionId":1,
                                "positionName":"设计",
                                "salary":"15-40K"
                            },{
                                "positionId":1,
                                "positionName":"设计",
                                "salary":"15-40K"
                            },{
                                "positionId":1,
                                "positionName":"产品经理",
                                "salary":"15-40K"
                            }
                        ],
                        "companyLabel":[
                            "绩效奖金",
                            "年底双薪",
                            "五险一金",
                            "节日礼物"
                        ],
                        "industryFields":"互联网招聘",
                        "financeStage":"不需要融资",
                        "city":"北京"
                    },{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        "companyId":147,
                        "companyName":"拉勾网",
                        "shortName":"拉勾",
                        "oneWord":"最牛的招聘公司",
                        "companySize":"2000人以上",
                        "positionVo":[
                            {
                                "positionId":1,
                                "positionName":"设计",
                                "salary":"15-40K"
                            },{
                                "positionId":1,
                                "positionName":"设计",
                                "salary":"15-40K"
                            },{
                                "positionId":1,
                                "positionName":"产品经理",
                                "salary":"15-40K"
                            }
                        ],
                        "companyLabel":[
                            "绩效奖金",
                            "年底双薪",
                            "五险一金",
                            "节日礼物"
                        ],
                        "industryFields":"互联网招聘",
                        "financeStage":"不需要融资",
                        "city":"北京"
                    },{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        "companyId":147,
                        "companyName":"拉勾网",
                        "shortName":"拉勾",
                        "oneWord":"最牛的招聘公司",
                        "companySize":"2000人以上",
                        "positionVo":[
                            {
                                "positionId":1,
                                "positionName":"设计",
                                "salary":"15-40K"
                            },{
                                "positionId":1,
                                "positionName":"设计",
                                "salary":"15-40K"
                            },{
                                "positionId":1,
                                "positionName":"产品经理",
                                "salary":"15-40K"
                            }
                        ],
                        "companyLabel":[
                            "绩效奖金",
                            "年底双薪",
                            "五险一金",
                            "节日礼物"
                        ],
                        "industryFields":"互联网招聘",
                        "financeStage":"不需要融资",
                        "city":"北京"
                    }],
                },
                {
                    title:'优越福利系列',
                    intro:'别看这些小福利，能增多不少幸福感',
                    company:[{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        "companyId":147,
                        "companyName":"拉勾网",
                        "shortName":"拉勾",
                        "oneWord":"最牛的招聘公司",
                        "companySize":"2000人以上",
                        "positionVo":[
                            {
                                "positionId":1,
                                "positionName":"设计",
                                "salary":"15-40K"
                            },{
                                "positionId":1,
                                "positionName":"设计",
                                "salary":"15-40K"
                            },{
                                "positionId":1,
                                "positionName":"产品经理",
                                "salary":"15-40K"
                            }
                        ],
                        "companyLabel":[
                            "绩效奖金",
                            "年底双薪",
                            "五险一金",
                            "节日礼物"
                        ],
                        "industryFields":"互联网招聘",
                        "financeStage":"不需要融资",
                        "city":"北京"
                    },{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        "companyId":147,
                        "companyName":"拉勾网",
                        "shortName":"拉勾",
                        "oneWord":"最牛的招聘公司",
                        "companySize":"2000人以上",
                        "positionVo":[
                            {
                                "positionId":1,
                                "positionName":"设计",
                                "salary":"15-40K"
                            },{
                                "positionId":1,
                                "positionName":"设计",
                                "salary":"15-40K"
                            },{
                                "positionId":1,
                                "positionName":"产品经理",
                                "salary":"15-40K"
                            }
                        ],
                        "companyLabel":[
                            "绩效奖金",
                            "年底双薪",
                            "五险一金",
                            "节日礼物"
                        ],
                        "industryFields":"互联网招聘",
                        "financeStage":"不需要融资",
                        "city":"北京"
                    },{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        "companyId":147,
                        "companyName":"拉勾网",
                        "shortName":"拉勾",
                        "oneWord":"最牛的招聘公司",
                        "companySize":"2000人以上",
                        "positionVo":[
                            {
                                "positionId":1,
                                "positionName":"设计",
                                "salary":"15-40K"
                            },{
                                "positionId":1,
                                "positionName":"设计",
                                "salary":"15-40K"
                            },{
                                "positionId":1,
                                "positionName":"产品经理",
                                "salary":"15-40K"
                            }
                        ],
                        "companyLabel":[
                            "绩效奖金",
                            "年底双薪",
                            "五险一金",
                            "节日礼物"
                        ],
                        "industryFields":"互联网招聘",
                        "financeStage":"不需要融资",
                        "city":"北京"
                    }]
                }
            ]
        },
        // 热招风暴
        storm:{
            count:1100,
            href:"https://activity.lagou.com/topic/2018qmszjrz.html",
            active_index:0,
            list:[
                {   
                    title:'',
                    intro:'无法让你涨姿势的工作，这样的生活和咸鱼没什么区别',
                    company:[{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        "companyId":147,
                        "companyName":"拉勾网",
                        "shortName":"拉勾",
                    },{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        "companyId":147,
                        "companyName":"拉勾网",
                        "shortName":"拉勾",
                    },{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        "companyId":147,
                        "companyName":"拉勾网",
                        "shortName":"拉勾",
                    },{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        "companyId":147,
                        "companyName":"拉勾网",
                        "shortName":"拉勾",
                    },{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        "companyId":147,
                        "companyName":"拉勾网",
                        "shortName":"拉勾",
                    },{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        "companyId":147,
                        "companyName":"拉勾网",
                        "shortName":"拉勾",
                    },{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        "companyId":147,
                        "companyName":"拉勾网",
                        "shortName":"拉勾",
                    },{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        "companyId":147,
                        "companyName":"拉勾网",
                        "shortName":"拉勾",
                    }],
                },
                {
                    title:'优越福利系列',
                    intro:'真相了！队友属性基本决定你会在怎样的氛围中工作',
                    company:[{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        "companyId":147,
                        "companyName":"拉勾网",
                        "shortName":"拉勾",
                    },{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        "companyId":147,
                        "companyName":"拉勾网",
                        "shortName":"拉勾",
                    },{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        "companyId":147,
                        "companyName":"拉勾网",
                        "shortName":"拉勾",
                    },{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        "companyId":147,
                        "companyName":"拉勾网",
                        "shortName":"拉勾",
                    },{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        "companyId":147,
                        "companyName":"拉勾网",
                        "shortName":"拉勾",
                    },{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        "companyId":147,
                        "companyName":"拉勾网",
                        "shortName":"拉勾",
                    },{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        "companyId":147,
                        "companyName":"拉勾网",
                        "shortName":"拉勾",
                    },{
                        logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                        "companyId":147,
                        "companyName":"拉勾网",
                        "shortName":"拉勾",
                    }],
                }
            ]
        },
        // AI狂热季
        ai:{
            count:1200,
            href:"https://activity.lagou.com/activity/dist/AI2018/h5/m_index.html",
            engineer:"https://activity.lagou.com/topic/engineers1010.html",  // 工程师专场
            product:"https://activity.lagou.com/topic/qmszjcpzc.html",  // 产品专场
            other:"https://activity.lagou.com/topic/qmszjssy.html",  // 市场/商业化/运营专场
            list:[{
                logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                "companyId":147,
                "companyName":"拉勾网",
                "shortName":"拉勾",
                "oneWord":"最牛的招聘公司",
                "companySize":"2000人以上",
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
                "companyLabel":[
                    "绩效奖金",
                    "年底双薪",
                    "五险一金",
                    "节日礼物"
                ],
                "industryFields":"互联网招聘",
                "financeStage":"不需要融资",
                "city":"北京"
            },{
                logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                "companyId":147,
                "companyName":"拉勾网",
                "shortName":"拉勾",
                "oneWord":"最牛的招聘公司",
                "companySize":"2000人以上",
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
                "companyLabel":[
                    "绩效奖金",
                    "年底双薪",
                    "五险一金",
                    "节日礼物"
                ],
                "industryFields":"互联网招聘",
                "financeStage":"不需要融资",
                "city":"北京"
            },{
                logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                "companyId":147,
                "companyName":"拉勾网",
                "shortName":"拉勾",
                "oneWord":"最牛的招聘公司",
                "companySize":"2000人以上",
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
                "companyLabel":[
                    "绩效奖金",
                    "年底双薪",
                    "五险一金",
                    "节日礼物"
                ],
                "industryFields":"互联网招聘",
                "financeStage":"不需要融资",
                "city":"北京"
            },{
                logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                "companyId":147,
                "companyName":"拉勾网",
                "shortName":"拉勾",
                "oneWord":"最牛的招聘公司",
                "companySize":"2000人以上",
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
                "companyLabel":[
                    "绩效奖金",
                    "年底双薪",
                    "五险一金",
                    "节日礼物"
                ],
                "industryFields":"互联网招聘",
                "financeStage":"不需要融资",
                "city":"北京"
            }]
        },
        // 人气精选
        choice:{
            count:1310,
            href:"https://activity.lagou.com/topic/2018qmszjrqjx.html",
            list:[{
                logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                "companyId":147,
                "companyName":"拉勾网",
                "shortName":"拉勾",
                "oneWord":"最牛的招聘公司",
                "companySize":"2000人以上",
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
                "companyLabel":[
                    "绩效奖金",
                    "年底双薪",
                    "五险一金",
                    "节日礼物"
                ],
                "industryFields":"互联网招聘",
                "financeStage":"不需要融资",
                "city":"北京"
            },{
                logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                "companyId":147,
                "companyName":"拉勾网",
                "shortName":"拉勾",
                "oneWord":"最牛的招聘公司",
                "companySize":"2000人以上",
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
                "companyLabel":[
                    "绩效奖金",
                    "年底双薪",
                    "五险一金",
                    "节日礼物"
                ],
                "industryFields":"互联网招聘",
                "financeStage":"不需要融资",
                "city":"北京"
            }],
            companys:[{
                name:'团队超给力',
                list:[{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"产品经理",
                            "salary":"15-40K"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                    "city":"北京"
                },{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"产品经理",
                            "salary":"15-40K"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                    "city":"北京"
                },{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"产品经理",
                            "salary":"15-40K"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                    "city":"北京"
                }]
            },{
                name:'环境高大上',
                list:[{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"产品经理",
                            "salary":"15-40K"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                    "city":"北京"
                },{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"产品经理",
                            "salary":"15-40K"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                    "city":"北京"
                },{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"产品经理",
                            "salary":"15-40K"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                    "city":"北京"
                }]
            },{
                name:'领导超 Nice',
                list:[{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"产品经理",
                            "salary":"15-40K"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                    "city":"北京"
                },{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"产品经理",
                            "salary":"15-40K"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                    "city":"北京"
                },{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"产品经理",
                            "salary":"15-40K"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                    "city":"北京"
                }]
            },{
                name:'成长空间大',
                list:[{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"产品经理",
                            "salary":"15-40K"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                    "city":"北京"
                },{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"产品经理",
                            "salary":"15-40K"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                    "city":"北京"
                },{
                    logo:'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/16/6B/CgpOIFpzqwSAScO4AADvrDAWMAM49.jpeg',
                    "companyId":147,
                    "companyName":"拉勾网",
                    "shortName":"拉勾",
                    "oneWord":"最牛的招聘公司",
                    "companySize":"2000人以上",
                    "positionVo":[
                        {
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"设计",
                            "salary":"15-40K"
                        },{
                            "positionId":1,
                            "positionName":"产品经理",
                            "salary":"15-40K"
                        }
                    ],
                    "companyLabel":[
                        "绩效奖金",
                        "年底双薪",
                        "五险一金",
                        "节日礼物"
                    ],
                    "industryFields":"互联网招聘",
                    "financeStage":"不需要融资",
                    "city":"北京"
                }]
            }]
        },
    },
    mounted:function(){
        this.from = (getQueryString('lagoufrom')+'').toLocaleLowerCase();
        this.isAPP = this.from == 'ios' || this.from == 'android'
        this.hot.duration = this.hot.list.length * 1.5
        this.browserType = this.getBrowserType()

        this.fontSize = parseFloat(this.getComputedValue(document.documentElement,'font-size'));
        this.tab.showWidth = this.getRemValue(this.tab.initWidth) * this.fontSize;
        this.setTabWidth();

        // this.addJSCSS();
        // this.loadedJSCSS();
        this.initWindowScrollEvent();

        // 热招快报
        this.getBulletData()
        // 24小时热力排行榜 - 最In
        this.getPopularInData()
        // 24小时热力排行榜 - 极速响应
        this.getPopularQuickestData()
        // 24小时热力排行榜 - 最受欢迎
        this.getPopularMostData()
        // 领先雇主
        this.getLeaderData()
        // 超级雇主
        this.getEmployerData()
        // 名企首发 - 公司列表
        this.getFirstData()
        // 名企首发 - 大咖
        this.getFirstRecommendData()
        // 千万豪门
        this.getRichData()
        // 高薪必投
        this.getWillData()
        // 热招风暴
        this.getStormData()
        // AI狂热季
        this.getAiData()
        // 人气精选
        this.getChoiceData()
    },
    methods:{
        setLogoHref:function(logo){
            if(logo){
                if(logo.indexOf('i/image') == 0 || 
                    logo.indexOf('image1') == 0 || 
                    logo.indexOf('image2') == 0){
                    return this.logoHref + logo
                }else if(logo.indexOf('http') == 0){
                    return logo
                }else {
                    return this.logoHrefO + logo
                }
            }else{
                return '';
            }
        },
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
        getPX:function(value){
            return value / (750 / 16) * this.fontSize
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
        getAjaxData:function(url,callback,params){
            $.ajax({
                url:'https://activity.lagou.com/'+url,
                type:'get',
                data:params ? params : {},
                // dataType:'jsonp',
                // jsonp:'jsoncallback',
                success:function(data){
                    var content = data.content;
                    if(data.success){
                        callback(content)
                    }else {
                        console.log('出错啦～刷新重试～')
                    }
                },
                error:function(error){
                    console.log(error)
                },
            })
        },
        isObject:function(e){
            return e instanceof Object
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
            this.tab.transition = false;
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
            this.tab.transition = true;
        },
        unfoldEvent:function(e){
            this.tab.unfoldStatus = !this.tab.unfoldStatus; 
        },
        tabClickEvent:function(index,e){
            var self = this;
            this.tab.active_index = index;
            this.tab.click_status = true;
            if(this.tab.list[index].elem){
                // if(!this.tab.status){
                    this.getTabHeight();
                    this.tab.offsetTop = this.$refs['yh-center__tab'].offsetTop;
                // }
                this.tab.height = this.$refs['yh-center__tab'].offsetHeight; // this.$refs['yh-center__tab-center'].offsetHeight;
                $('html,body').animate({'scrollTop': (this.tab.list[index].offsetTop - this.tab.height)+ "px"},500,function(){
                    self.tab.click_status = false;
                });
            }else{  // 跳页面
                window.location.href = this.tab.list[index].href
            }
        },
        loadedJSCSS:function(){
            this.loadedCount++;

            if (this.loadedCount == 2) {
                // animationStatus = true;
                this.addEmployerAnimation();
                this.addRichAnimation();
                this.addFirstAnimation();
                this.addFirstGuestAnimation();
                //if (movieElem.length > 0 && movieElem.attr('movie_type') == 'local') {
                //    getMovie();
                //}
                //添加轮播动画
                //lunAnimation(browserType);
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
                    var index = swiper.activeIndex,
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
            var pagination = $('#'+id+'-pagination').children(),
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
                    var index = swiper.activeIndex,
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
                parent = [],
                height = 0,
                top = 0,
                status = false,
                i = 0,j = 0;
            for(i = 0; i < list.length; i++){
                if(list[i].elem){
                    elem = this.$refs[list[i].elem];
                    top = 0;
                    height = 0;
                    if(list[i].parent){
                        parent = list[i].parent;
                        for(j = 0; j < parent.length; j++){
                            top += this.tab.list[parent[j]].offsetTop;
                            // height += this.tab.list[parent[j]].height;
                        }
                        // top += elem.offsetTop;
                        top += this.getPX(list[i].top)
                    }else{
                        top += elem.offsetTop;
                    }
                    if(list[i].initHeight){
                        height = this.getPX(list[i].initHeight);
                    }else{
                        height = elem.offsetHeight;
                    }
                    if(list[i].offsetTop != top || list[i].height != height){
                        this.tab.list[i].offsetTop = top;
                        this.tab.list[i].height = height;
                        status = true
                    }
                }
            }
            if(!status) {
                this.tab.status = true;
            }
        },
        initWindowScrollEvent:function(){
            var self = this,
                min = this.getPX(58);
            self.getTabHeight();
            self.tab.offsetTop = self.$refs['yh-center__tab'].offsetTop;
            self.tab.height = self.$refs['yh-center__tab-center'].offsetHeight;
            $(window).scroll(function() {
                if(self.tab.click_status){
                    return
                }
                var tab = self.$refs['yh-center__tab'],
                    scrollTop = $(window).scrollTop(),
                    one = null,
                    // halfWidow = tab.offsetHeight,//self.$refs['yh-center__tab-center'].offsetHeight,//$(window).height() / 8,
                    halfWidow = $(window).height() / 4,
                    left = 0,
                    i = 0;
                // if(!self.tab.status){
                    self.getTabHeight();
                    self.tab.offsetTop = tab.offsetTop;
                    self.tab.height = tab.offsetHeight;//self.$refs['yh-center__tab-center'].offsetHeight;
                // }
                if(self.tab.offsetTop <= scrollTop){
                    self.tab.fixed = true;
                }else{
                    self.tab.fixed = false;
                }
                for (i = 0; i < self.tab.list.length; i++) {
                    one = self.tab.list[i];
                    // if (one.elem && (one.offsetTop - halfWidow + min) < scrollTop && (one.offsetTop + one.height - halfWidow - min) > scrollTop) {
                    if (one.elem && (one.offsetTop - halfWidow) < scrollTop && (one.offsetTop + one.height - halfWidow) > scrollTop) {
                        self.tab.active_index = i;
                        left = self.$refs['tab__li--'+i][0].offsetLeft;
                        if(left >= (self.tab.width - self.tab.showWidth)){
                            self.tab.left = -1 * (self.tab.width - self.tab.showWidth);
                            self.tab.shadow_status = false;
                        }else {
                            self.tab.left = -1 * left;
                            self.tab.shadow_status = true;
                        }
                        // 
                        break;
                    }
                }
            });
        },
        getBulletData:function(){
            var self = this;
            this.getAjaxData('activityapi/smallActivity/query-express.json',function(data){
                self.hot.list = data.concat(data);
                self.hot.duration = self.hot.list.length * 1.5
                self.$nextTick(function(){
                    self.hot.status = true;
                })
            })
        },
        getPopularInData:function(){
            var self = this,
                url = 'activityapi/smallActivity/most-delivery.json';
            if(this.isAPP){
                url = 'activityapi/smallActivity/app-most-delivery.json'
            }
            this.getAjaxData(url,function(data){
                self.popular.in.list = data;
            },{
                count:3
            })
        },
        getPopularQuickestData:function(){
            var self = this,
                url = '';
            if(this.from == 'ios' || this.from == 'android'){
                url = 'activityapi/smallActivity/app-deal-fast.json'
            }else {
                url = 'activityapi/smallActivity/pc-deal-fast.json'
            }
            this.getAjaxData(url,function(data){
                if(self.isObject(data)){
                    self.popular.quickest.list = data;
                }
            },{
                count:3
            })
        },
        getPopularMostData:function(){
            var self = this;
            this.getAjaxData('activityapi/smallActivity/query-config-position.json',function(data){
                self.popular.most.list = data;
            },{
                templateId:'2018MustVoteGoodCompany',
                count:3,
                positionCount:0
            })
        },
        getLeaderData:function(){
            var self = this,
                count = self.leader.list[0].count;
            this.getAjaxData('activityapi/smallActivity/query-config-position.json',function(data){
                var i = 0;
                for(i = 0; i < data.length; i++){
                    data[i].count = count
                }
                self.leader.list = data;
            },{
                templateId:'2018LeadEmployer',
                count:1,
                positionCount:3
            })
        },
        getEmployerData:function(){
            var self = this;
            this.getAjaxData('activityapi/smallActivity/query-config-position.json',function(data){
                self.employer.list = data;
                self.$nextTick(function(){
                    self.addEmployerAnimation();
                })
            },{
                templateId:'2018SuperEmployer',
                positionCount:3
            })
        },
        getFirstData:function(){
            var self = this;
            this.getAjaxData('activityapi/smallActivity/query-config-position.json',function(data){
                if(self.isObject(data)){
                    self.first.company.list = data;
                    self.$nextTick(function(){
                        self.addFirstAnimation();
                    })
                }
            },{
                templateId:'2018FamousFirst',
                positionCount:1
            })
        },
        getFirstRecommendData:function(){
            var self = this;
            this.getAjaxData('activityapi/smallActivity/query-bigCoffee.json',function(data){
                // self.first.recommend.list = data;
                console.log(data)
                self.$nextTick(function(){
                    self.addFirstGuestAnimation();
                })
            },{
                // templateId:arr[0],
                positionCount:0
            })
        },
        getRichData:function(){
            var self = this;
            this.getAjaxData('activityapi/smallActivity/query-config-position.json',function(data){
                var length = data.length,
                    num = 4,
                    l = Math.ceil(length / num),
                    list = [],
                    i = 0;
                for(i = 0; i < l; i++){
                    list.push(data.slice(i*num,(i+1)*num))
                }
                self.rich.list = list;
                self.$nextTick(function(){
                    self.addRichAnimation();
                })
            },{
                templateId:'2018ThousandsWealthy',
                positionCount:3
            })
        },
        getWillData:function(){
            var self = this;
            this.getAjaxData('activityapi/smallActivity/query-config-position.json',function(data){
                self.will.list[0].company = data.slice(0,3);
                self.will.list[1].company = data.slice(3,6);
            },{
                templateId:'2018HighPayMustVote',
                positionCount:1
            })
        },
        getStormData:function(){
            var self = this;
            this.getAjaxData('activityapi/smallActivity/query-config-position.json',function(data){
                self.storm.list[0].company = data.slice(0,8);
                self.storm.list[1].company = data.slice(8,16);
            },{
                templateId:'2018HotTrickstorm',
                positionCount:0
            })
        },
        getAiData:function(){
            var self = this;
            this.getAjaxData('activityapi/smallActivity/query-config-position.json',function(data){
                if(self.isObject(data)){
                    self.ai.list = data;   
                }
            },{
                templateId:'2018AIPosition',
                positionCount:1
            })
        },
        getChoiceData:function(){
            var self = this;
            this.getAjaxData('activityapi/smallActivity/query-config-position.json',function(data){
                self.choice.list[0] = data[0];
                self.choice.list[1] = data[1];
                self.choice.companys[0].list = data.slice(2,5);
                self.choice.companys[1].list = data.slice(5,8);
                self.choice.companys[2].list = data.slice(8,11);
                self.choice.companys[3].list = data.slice(11,14);
            },{
                templateId:'2018PopularSelection',
                positionCount:3
            })
        },
    }
})
