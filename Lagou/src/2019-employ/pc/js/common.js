var commonMixin = {
    data:function(){
        return {
            fontSize:16,
            from:'',
            isAPP:false,
            isiPhone:false,
            logoHref:'https://www.lgstatic.com/thumbnail_100x100/',
            logoHrefO:'https://www.lgstatic.com/',
            companyHref:{
                one:"self.location=\'https://www.lagou.com/center/company_",
                two:".html\';"
            },
            positionHref:{
                one:"self.location=\'https://www.lagou.com/center/job_",
                two:".html\';"
            },
            othersHref:{
                // one:"self.location=\'http://172.18.12.105:8181/src/2018-employ/h5/",
                // one:"self.location=\'http://tianhenmei.github.io/Lagou/src/2018-employ/h5/",
                one:"self.location=\'https://activity.lagou.com/activity/dist/2018-employ/h5/",
                two:"/m_index.html\';"
            },
            // tab 切换
            tab:{
                offsetTop:0,
                height:0,
                active_index:0,
                count:10,
                status:false,
                click_status:false,
                list:[{
                    name:'超凡雇主',
                    elem:'yh-center__onlyone',
                    offsetTop:0,
                    height:0,
                    index:0,
                    top:0
                },{
                    name:'STAR雇主',
                    elem:'yh-center__employer',
                    offsetTop:0,
                    height:0,
                    index:1,
                    top:0
                },{
                    name:'实力首选',
                    elem:'yh-center__local',
                    offsetTop:0,
                    height:0,
                    index:2,
                    top:0
                },{
                    name:'潜力TOP榜',
                    elem:'yh-center__top',
                    offsetTop:0,
                    height:0,
                    index:3,
                    top:0
                },{
                    name:'其他城市',
                    elem:'yh-center__others',
                    offsetTop:0,
                    height:0,
                    index:4,
                    top:0
                }],
                fixed:false,
                shadow_status:false,
                initWidth:750,
                showWidth:750,
                width:9999,
                left:0,
                transition:true,
                start:{
                    x:0,
                    y:0
                }
            },
            tabOptions:{
                wrapperClass:"tab__ul",
                slideClass:"tab__li",
                // slideActiveClass:"tab__li--active",
                slidesPerView: 'auto',
                freeMode: true,
                freeModeMomentum:true,
                // direction: 'vertical',
                setWrapperSize: true,
                resistance:true,
                resistanceRatio:0,
                width:this.getTabWidth()
            },
            onlyone:{
                count:1,
                imgs:[
                    'images/onlyone-img-01.jpg',
                    'images/onlyone-img-01.jpg',
                    'images/onlyone-img-01.jpg'
                ],
                company:{
                    companyId:147,
                    companyShortName:"人人车",
                    companyName:"人人车",
                    logo:"",
                    city:"北京",
                    financeStage: "D轮及以上",
                    companySize: "2000人以上",
                    companyLabel: "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                    positionVo:[{
                        "positionId":1,
                        "positionName":"算法工程师",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"算法工程师",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"算法工程师",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"算法工程师",
                        "salary":"15-40K"
                    }],
                }
            },
            employerActiveIndex:0,
            employerOptions:{
                // autoplay:true,//等同于以下设置
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                speed:500,
                loop:true,
                initialSlide:0,
                // pagination:'.employer-pagination',
                // paginationType:'custom',
                // paginationElement:'div',
                // paginationClickable:true,
                // bulletClass : 'employer-p',
                // bulletActiveClass : 'active'
                on:{
                    slideChangeTransitionStart:function(){
                        var sapp = app || this.$el[0].__vue__.$root
                        sapp.changeEmployerActiveIndex(this.activeIndex)
                    },
                }
                // autoplay:3000,
                // speed:500,
                // loop:true,
                // pagination:'.img-pagination',
                // bulletClass : 'img-p',
                // bulletActiveClass : 'active'
            },
            employerCount:50,
            employerList:[{
                "leaderName": "郑云端",
                "leaderPhoto": "",
                "leaderRemark": "CHO",
                "companyId": 55446,
                "companyShortName": "贝壳",
                "companyName": "链家网（北京）科技有限公司",
                "logo": "i/image3/M00/4C/9E/CgpOIFrgFT-AB_lKAAAXCTsC5_U047.png",
                "city": "北京",
                "financeStage": "C轮",
                "companySize": "2000人以上",
                "companyLabel": [
                    "股票期权",
                    "带薪年假",
                    "绩效奖金",
                    "扁平管理",
                    "免费三餐",
                    "帅哥多",
                    "美女多",
                    "技能培训",
                    "弹性工作"
                ],
                "positionVo": [
                    {
                        "positionId": 4971762,
                        "positionName": "测试工程师",
                        "salary": "25k-50k"
                    },
                    {
                        "positionId": 4971686,
                        "positionName": "Java开发工程师",
                        "salary": "30k-50k"
                    },
                    {
                        "positionId": 4971577,
                        "positionName": "数据/算法工程师",
                        "salary": "25k-45k"
                    }
                ],
                "oneWord": "贝壳欢迎更多优秀伙伴的加入",
                "industryfield": "移动互联网,O2O"
            },{
                "leaderName": "徐伟凡",
                "leaderPhoto": "",
                "leaderRemark": "创始人",
                "companyId": 25068,
                "companyShortName": "假面科技",
                "companyName": "上海假面信息科技有限公司",
                "logo": "i/image/M00/02/D6/Cgp3O1aeGuuAdKkGAAAS9nLMeRU416.jpg",
                "city": "上海",
                "financeStage": "B轮",
                "companySize": "50-150人",
                "companyLabel": [
                    "股票期权",
                    "带薪年假",
                    "扁平管理",
                    "弹性工作",
                    "领导nice",
                    "年底多薪",
                    "定期体检",
                    "五险一金",
                    "无限零食"
                ],
                "positionVo": [
                    {
                        "positionId": 4806464,
                        "positionName": "技术主管（前端）",
                        "salary": "30k-40k"
                    },
                    {
                        "positionId": 4809639,
                        "positionName": "资深2D场景设计师",
                        "salary": "13k-25k"
                    },
                    {
                        "positionId": 4986253,
                        "positionName": "2D角色原画设计师",
                        "salary": "12k-20k"
                    }
                ],
                "oneWord": "社交娱乐产品的创新实验室",
                "industryfield": "移动互联网,社交网络"
            },{
                "leaderName": "陈立明",
                "leaderPhoto": "",
                "leaderRemark": "首席执行官CEO",
                "companyId": 24748,
                "companyShortName": "平安科技",
                "companyName": "平安科技（深圳）有限公司",
                "logo": "i/image/M00/7D/7C/Cgp3O1hHwlSAXh_pAACcLWenfL8606.jpg",
                "city": "深圳",
                "financeStage": "不需要融资",
                "companySize": "2000人以上",
                "companyLabel": [
                    "节日礼物",
                    "年度旅游",
                    "岗位晋升",
                    "技能培训",
                    "六险一金",
                    "扁平化管理",
                    "丰厚年终"
                ],
                "positionVo": [
                    {
                        "positionId": 2131194,
                        "positionName": "Java开发工程师（深圳）",
                        "salary": "12k-24k"
                    },
                    {
                        "positionId": 2690709,
                        "positionName": "云存储工程师/架构师(深圳)",
                        "salary": "15k-30k"
                    },
                    {
                        "positionId": 4948769,
                        "positionName": "资深J2EE开发工程师（云平台）",
                        "salary": "20k-35k"
                    }
                ],
                "oneWord": "平安科技始终坚持创新，为引领科技砥砺前行",
                "industryfield": "金融"
            },{
                "leaderName": "陈罡",
                "leaderPhoto": "",
                "leaderRemark": "CEO",
                "companyId": 109,
                "companyShortName": "马蜂窝",
                "companyName": "北京蚂蜂窝网络科技有限公司",
                "logo": "i/image3/M00/25/96/Cgq2xlqXn9-ALvW-AAAR5MK8aqs262.png",
                "city": "北京",
                "financeStage": "D轮及以上",
                "companySize": "500-2000人",
                "companyLabel": [
                    "弹性工作",
                    "扁平管理",
                    "氛围好",
                    "年度体检",
                    "发展机会",
                    "带薪年假",
                    "关爱假期",
                    "高速成长",
                    "出国旅行",
                    "管饭",
                    "年终奖",
                    "女生关爱假",
                    "靠谱的团队",
                    "青春梦想",
                    "下午茶"
                ],
                "positionVo": [
                    {
                        "positionId": 4900159,
                        "positionName": "高级Java开发工程师",
                        "salary": "25k-45k"
                    },
                    {
                        "positionId": 4733110,
                        "positionName": "PHP研发工程师",
                        "salary": "20k-40k"
                    },
                    {
                        "positionId": 4576214,
                        "positionName": "高级前端开发工程师-广告业务",
                        "salary": "20k-40k"
                    }
                ],
                "oneWord": "马蜂窝欢迎更多优秀伙伴的加入",
                "industryfield": "移动互联网,旅游"
            },{
                "leaderName": "张一鸣",
                "leaderPhoto": "",
                "leaderRemark": "CEO",
                "companyId": 62,
                "companyShortName": "字节跳动",
                "companyName": "北京字节跳动科技有限公司",
                "logo": "i/image2/M01/79/0A/CgoB5ltr2A-AM5SFAADbT9jQCn841.jpeg",
                "city": "北京",
                "financeStage": "C轮",
                "companySize": "2000人以上",
                "companyLabel": [
                    "扁平管理",
                    "弹性工作",
                    "大厨定制三餐",
                    "就近租房补贴",
                    "六险一金",
                    "股票期权",
                    "成长空间大",
                    "双线地铁沿线",
                    "mac办公"
                ],
                "positionVo": [
                    {
                        "positionId": 4143407,
                        "positionName": "Android研发工程师",
                        "salary": "20k-40k"
                    },
                    {
                        "positionId": 4537014,
                        "positionName": "高级前端研发工程师",
                        "salary": "40k-60k"
                    },
                    {
                        "positionId": 4647124,
                        "positionName": "Android开发高级工程师-抖音/火山",
                        "salary": "20k-40k"
                    }
                ],
                "oneWord": "和优秀的人，做有挑战的事儿！",
                "industryfield": "移动互联网,数据服务"
            },{
                "leaderName": "聂庆",
                "leaderPhoto": "",
                "leaderRemark": "人力资源总监",
                "companyId": 76433,
                "companyShortName": "广发银行信用卡中心",
                "companyName": "广发银行股份有限公司信用卡中心",
                "logo": "i/image/M00/93/5B/CgqKkViZi2uAaEVqAAEYVIrGiWU065.png",
                "city": "广州",
                "financeStage": "不需要融资",
                "companySize": "2000人以上",
                "companyLabel": [
                    "管理规范",
                    "平台大机遇好",
                    "金融科技",
                    "绩效奖金",
                    "技能培训",
                    "带薪年假",
                    "定期体检",
                    "五险一金",
                    "午餐补助"
                ],
                "positionVo": [
                    {
                        "positionId": 4931897,
                        "positionName": "数据管理高级专家",
                        "salary": "25k-40k"
                    },
                    {
                        "positionId": 4931860,
                        "positionName": "机器学习高级专家",
                        "salary": "25k-45k"
                    },
                    {
                        "positionId": 4931827,
                        "positionName": "算法高级专家",
                        "salary": "25k-45k"
                    }
                ],
                "oneWord": "见平台，知高度，广发卡邀您携手共创未来",
                "industryfield": "金融"
            },{
                "leaderName": "Apple",
                "leaderPhoto": "",
                "leaderRemark": "HRD",
                "companyId": 32836,
                "companyShortName": "达达-京东到家",
                "companyName": "达疆网络科技（上海）有限公司",
                "logo": "i/image3/M00/29/EB/Cgq2xlqc7cuAWcONAAARsZzDH6o620.jpg",
                "city": "上海",
                "financeStage": "D轮及以上",
                "companySize": "2000人以上",
                "companyLabel": [
                    "年底双薪",
                    "绩效奖金",
                    "岗位晋升",
                    "定期体检",
                    "五险一金",
                    "弹性工作",
                    "股票期权",
                    "扁平管理",
                    "带薪年假"
                ],
                "positionVo": [
                    {
                        "positionId": 3183990,
                        "positionName": "Java工程师",
                        "salary": "20k-35k"
                    },
                    {
                        "positionId": 3184535,
                        "positionName": "前端工程师",
                        "salary": "15k-25k"
                    },
                    {
                        "positionId": 3655384,
                        "positionName": "产品运营（商家端）",
                        "salary": "25k-40k"
                    }
                ],
                "oneWord": "选择那些将来可以完胜超越自己的人",
                "industryfield": "O2O"
            },{
                "leaderName": "刘强东",
                "leaderPhoto": "",
                "leaderRemark": "京东集团创始人",
                "companyId": 18139,
                "companyShortName": "京东集团",
                "companyName": "北京京东世纪贸易有限公司",
                "logo": "i/image2/M00/13/95/CgotOVnwNqeAFbmnAABaH5Q_vVE401.png",
                "city": "北京",
                "financeStage": "上市公司",
                "companySize": "2000人以上",
                "companyLabel": [
                    "五险一金",
                    "带薪年假",
                    "免费班车",
                    "定期体检",
                    "午餐补助",
                    "超长产假",
                    "子女教育计划",
                    "安居计划",
                    "救助基金"
                ],
                "positionVo": [
                    {
                        "positionId": 4614977,
                        "positionName": "视频云产品经理",
                        "salary": "30k-60k"
                    },
                    {
                        "positionId": 4901102,
                        "positionName": "C++工程师",
                        "salary": "30k-35k"
                    },
                    {
                        "positionId": 4879347,
                        "positionName": "测试开发工程师",
                        "salary": "20k-40k"
                    }
                ],
                "oneWord": "加入京东，更快到达你想要的未来",
                "industryfield": "电子商务,数据服务"
            },{
                "leaderName": "朱光",
                "leaderPhoto": "",
                "leaderRemark": "CEO",
                "companyId": 410453,
                "companyShortName": "度小满金融",
                "companyName": "安一恒通（北京）科技有限公司",
                "logo": "i/image2/M01/7C/DA/CgoB5lt09RiAAQddAABJxcaEm2I500.jpg",
                "city": "北京",
                "financeStage": "A轮",
                "companySize": "500-2000人",
                "companyLabel": [
                    "年底双薪",
                    "五险一金",
                    "弹性工作",
                    "节日礼物",
                    "领导好",
                    "扁平管理"
                ],
                "positionVo": [
                    {
                        "positionId": 4964538,
                        "positionName": "风控数据挖掘及机器学习研发工程师",
                        "salary": "25k-50k"
                    },
                    {
                        "positionId": 4964518,
                        "positionName": "Java开发工程师",
                        "salary": "20k-40k"
                    },
                    {
                        "positionId": 4964507,
                        "positionName": "机器学习资深研发工程师",
                        "salary": "20k-40k"
                    }
                ],
                "oneWord": "用小满足喂饱大梦想，度小满诚邀您加入！",
                "industryfield": "移动互联网,金融"
            },{
                "leaderName": "姚宏",
                "leaderPhoto": "",
                "leaderRemark": "创始人、CEO",
                "companyId": 33618,
                "companyShortName": "微贷网",
                "companyName": "微贷（杭州）金融信息服务有限公司",
                "logo": "i/image/M00/9A/54/CgqKkVihUt2ABzkYAAAPLLiT2Ig630.jpg",
                "city": "杭州",
                "financeStage": "C轮",
                "companySize": "2000人以上",
                "companyLabel": [
                    "年底双薪",
                    "专项奖金",
                    "绩效奖金",
                    "岗位晋升",
                    "年度旅游",
                    "管理规范",
                    "定期体检",
                    "五险一金",
                    "午餐补助"
                ],
                "positionVo": [
                    {
                        "positionId": 4951693,
                        "positionName": "产品经理(J10778)",
                        "salary": "10k-20k"
                    },
                    {
                        "positionId": 4951374,
                        "positionName": "视觉设计(J10777)",
                        "salary": "10k-15k"
                    },
                    {
                        "positionId": 4563797,
                        "positionName": "商务BD（流量 异业合作方向）(J10698)",
                        "salary": "10k-15k"
                    }
                ],
                "oneWord": "欢迎更多优秀的伙伴加入微贷网！",
                "industryfield": "金融"
            },{
                "leaderName": "施娜",
                "leaderPhoto": "",
                "leaderRemark": "HRVP",
                "companyId": 44091,
                "companyShortName": "自如网",
                "companyName": "北京自如友家资产管理有限公司",
                "logo": "i/image3/M00/06/87/Cgq2xlpgCByAMD8nAACUbQvvrew382.png",
                "city": "北京",
                "financeStage": "A轮",
                "companySize": "2000人以上",
                "companyLabel": [
                    "丰厚年薪",
                    "六险一金",
                    "健康体检",
                    "带薪年假",
                    "餐补房补",
                    "节日礼金",
                    "年度旅游",
                    "独栋办公",
                    "领导好"
                ],
                "positionVo": [
                    {
                        "positionId": 4135002,
                        "positionName": "java开发工程师",
                        "salary": "16k-32k"
                    },
                    {
                        "positionId": 4623084,
                        "positionName": "后台产品经理",
                        "salary": "17k-32k"
                    },
                    {
                        "positionId": 4933495,
                        "positionName": "嵌入式软件工程师",
                        "salary": "15k-30k"
                    }
                ],
                "oneWord": "自如欢迎更多优秀小伙伴的加入",
                "industryfield": "移动互联网,O2O"
            }],
            BCount: 7000,
            BList: [],
            BActiveIndex: 0,
            CCount:1000,
            CList:[{
                "companyId": 18139,
                "financeStage": "不需要融资",
                "logo": "i/image/M00/7F/B5/CgpFT1pV0aKAF4u8AABVMWtorEo579.png",
                "companyName": "百度在线网络技术（北京）有限公司",
                "companyShortName": "拉勾网",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companySize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "companyLabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "leader":{
                    "name":"陈琪",
                    "position":"CEO",
                    "words":"公司高速发展中，<br/>欢迎有趣的小伙伴<br/>们加入！”"
                },
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
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            },{
                "companyId": 15265,
                "financeStage": "不需要融资",
                "logo": "i/image/M00/5B/5A/Cgp3O1fg3uWAEuuhAABBDg7PalQ660.png",
                "companyName": "百度在线网络技术（北京）有限公司",
                "companyShortName": "我来贷WeLab",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companySize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "companyLabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "leader":{
                    "name":"陈琪",
                    "position":"CEO",
                    "words":"公司高速发展中，<br/>欢迎有趣的小伙伴<br/>们加入！”"
                },
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
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            },{
                "companyId": 1575,
                "financeStage": "不需要融资",
                "logo": "i/image/M00/21/3E/CgpFT1kVdzeAJNbUAABJB7x9sm8374.png",
                "companyName": "百度在线网络技术（北京）有限公司",
                "companyShortName": "百度",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companySize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "companyLabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "leader":{
                    "name":"陈琪",
                    "position":"CEO",
                    "words":"公司高速发展中，<br/>欢迎有趣的小伙伴<br/>们加入！”"
                },
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
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            },{
                "companyId": 38079,
                "financeStage": "不需要融资",
                "logo": "i/image/M00/03/BD/CgqKkVbC5DyAYlIvAAAMhxAJc1Y825.jpg",
                "companyName": "百度在线网络技术（北京）有限公司",
                "companyShortName": "GYENNO",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companySize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "companyLabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "leader":{
                    "name":"陈琪",
                    "position":"CEO",
                    "words":"公司高速发展中，<br/>欢迎有趣的小伙伴<br/>们加入！”"
                },
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
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            },{
                "companyId": 18139,
                "financeStage": "不需要融资",
                "logo": "i/image/M00/7F/B5/CgpFT1pV0aKAF4u8AABVMWtorEo579.png",
                "companyName": "百度在线网络技术（北京）有限公司",
                "companyShortName": "拉勾网",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companySize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "companyLabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "leader":{
                    "name":"陈琪",
                    "position":"CEO",
                    "words":"公司高速发展中，<br/>欢迎有趣的小伙伴<br/>们加入！”"
                },
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
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            },{
                "companyId": 15265,
                "financeStage": "不需要融资",
                "logo": "i/image/M00/5B/5A/Cgp3O1fg3uWAEuuhAABBDg7PalQ660.png",
                "companyName": "百度在线网络技术（北京）有限公司",
                "companyShortName": "我来贷WeLab",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companySize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "companyLabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "leader":{
                    "name":"陈琪",
                    "position":"CEO",
                    "words":"公司高速发展中，<br/>欢迎有趣的小伙伴<br/>们加入！”"
                },
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
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            },{
                "companyId": 1575,
                "financeStage": "不需要融资",
                "logo": "i/image/M00/21/3E/CgpFT1kVdzeAJNbUAABJB7x9sm8374.png",
                "companyName": "百度在线网络技术（北京）有限公司",
                "companyShortName": "百度",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companySize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "companyLabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "leader":{
                    "name":"陈琪",
                    "position":"CEO",
                    "words":"公司高速发展中，<br/>欢迎有趣的小伙伴<br/>们加入！”"
                },
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
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            },{
                "companyId": 38079,
                "financeStage": "不需要融资",
                "logo": "i/image/M00/03/BD/CgqKkVbC5DyAYlIvAAAMhxAJc1Y825.jpg",
                "companyName": "百度在线网络技术（北京）有限公司",
                "companyShortName": "GYENNO",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companySize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "companyLabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "leader":{
                    "name":"陈琪",
                    "position":"CEO",
                    "words":"公司高速发展中，<br/>欢迎有趣的小伙伴<br/>们加入！”"
                },
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
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            }],
            CActiveIndex: 0,
            DCount:3000,
            DActiveIndex:0,
            DList:[
                [{
                    "companyId": 18139,
                    "financeStage": "不需要融资",
                    "logo": "i/image/M00/7F/B5/CgpFT1pV0aKAF4u8AABVMWtorEo579.png",
                    "companyName": "百度在线网络技术（北京）有限公司",
                    "companyShortName": "拉勾网",
                    "companyfeatures": "用科技让复杂的世界更简单",
                    "city": "北京",
                    "createtime": "Oct 13, 2013 3:49:33 PM",
                    "isenable": 1,
                    "approve": 2,
                    "companySize": "2000人以上",
                    "industryfield": "移动互联网,数据服务",
                    "companyLabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                    "customerlabel": "2787",
                    "approvemanid": 3634,
                    "approvemanemail": "yelin@baidu.com",
                    "createmanid": 10747,
                    "createmanemail": "zhubaining@baidu.com",
                    "companylng": "116.2956171",
                    "companylat": "40.04873954",
                    "companyaddress": "百度大厦",
                    "displayContactNum": 20,
                    "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
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
                },{
                    "companyId": 15265,
                    "financeStage": "不需要融资",
                    "logo": "i/image/M00/5B/5A/Cgp3O1fg3uWAEuuhAABBDg7PalQ660.png",
                    "companyName": "百度在线网络技术（北京）有限公司",
                    "companyShortName": "我来贷WeLab",
                    "companyfeatures": "用科技让复杂的世界更简单",
                    "city": "北京",
                    "createtime": "Oct 13, 2013 3:49:33 PM",
                    "isenable": 1,
                    "approve": 2,
                    "companySize": "2000人以上",
                    "industryfield": "移动互联网,数据服务",
                    "companyLabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                    "customerlabel": "2787",
                    "approvemanid": 3634,
                    "approvemanemail": "yelin@baidu.com",
                    "createmanid": 10747,
                    "createmanemail": "zhubaining@baidu.com",
                    "companylng": "116.2956171",
                    "companylat": "40.04873954",
                    "companyaddress": "百度大厦",
                    "displayContactNum": 20,
                    "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
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
                },{
                    "companyId": 1575,
                    "financeStage": "不需要融资",
                    "logo": "i/image/M00/21/3E/CgpFT1kVdzeAJNbUAABJB7x9sm8374.png",
                    "companyName": "百度在线网络技术（北京）有限公司",
                    "companyShortName": "百度",
                    "companyfeatures": "用科技让复杂的世界更简单",
                    "city": "北京",
                    "createtime": "Oct 13, 2013 3:49:33 PM",
                    "isenable": 1,
                    "approve": 2,
                    "companySize": "2000人以上",
                    "industryfield": "移动互联网,数据服务",
                    "companyLabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                    "customerlabel": "2787",
                    "approvemanid": 3634,
                    "approvemanemail": "yelin@baidu.com",
                    "createmanid": 10747,
                    "createmanemail": "zhubaining@baidu.com",
                    "companylng": "116.2956171",
                    "companylat": "40.04873954",
                    "companyaddress": "百度大厦",
                    "displayContactNum": 20,
                    "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
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
                },{
                    "companyId": 38079,
                    "financeStage": "不需要融资",
                    "logo": "i/image/M00/03/BD/CgqKkVbC5DyAYlIvAAAMhxAJc1Y825.jpg",
                    "companyName": "百度在线网络技术（北京）有限公司",
                    "companyShortName": "GYENNO",
                    "companyfeatures": "用科技让复杂的世界更简单",
                    "city": "北京",
                    "createtime": "Oct 13, 2013 3:49:33 PM",
                    "isenable": 1,
                    "approve": 2,
                    "companySize": "2000人以上",
                    "industryfield": "移动互联网,数据服务",
                    "companyLabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                    "customerlabel": "2787",
                    "approvemanid": 3634,
                    "approvemanemail": "yelin@baidu.com",
                    "createmanid": 10747,
                    "createmanemail": "zhubaining@baidu.com",
                    "companylng": "116.2956171",
                    "companylat": "40.04873954",
                    "companyaddress": "百度大厦",
                    "displayContactNum": 20,
                    "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
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
                },{
                    "companyId": 18139,
                    "financeStage": "不需要融资",
                    "logo": "i/image/M00/7F/B5/CgpFT1pV0aKAF4u8AABVMWtorEo579.png",
                    "companyName": "百度在线网络技术（北京）有限公司",
                    "companyShortName": "拉勾网",
                    "companyfeatures": "用科技让复杂的世界更简单",
                    "city": "北京",
                    "createtime": "Oct 13, 2013 3:49:33 PM",
                    "isenable": 1,
                    "approve": 2,
                    "companySize": "2000人以上",
                    "industryfield": "移动互联网,数据服务",
                    "companyLabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                    "customerlabel": "2787",
                    "approvemanid": 3634,
                    "approvemanemail": "yelin@baidu.com",
                    "createmanid": 10747,
                    "createmanemail": "zhubaining@baidu.com",
                    "companylng": "116.2956171",
                    "companylat": "40.04873954",
                    "companyaddress": "百度大厦",
                    "displayContactNum": 20,
                    "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
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
                }],
                [{
                    "companyId": 18139,
                    "financeStage": "不需要融资",
                    "logo": "i/image/M00/7F/B5/CgpFT1pV0aKAF4u8AABVMWtorEo579.png",
                    "companyName": "百度在线网络技术（北京）有限公司",
                    "companyShortName": "拉勾网",
                    "companyfeatures": "用科技让复杂的世界更简单",
                    "city": "北京",
                    "createtime": "Oct 13, 2013 3:49:33 PM",
                    "isenable": 1,
                    "approve": 2,
                    "companySize": "2000人以上",
                    "industryfield": "移动互联网,数据服务",
                    "companyLabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                    "customerlabel": "2787",
                    "approvemanid": 3634,
                    "approvemanemail": "yelin@baidu.com",
                    "createmanid": 10747,
                    "createmanemail": "zhubaining@baidu.com",
                    "companylng": "116.2956171",
                    "companylat": "40.04873954",
                    "companyaddress": "百度大厦",
                    "displayContactNum": 20,
                    "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
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
                },{
                    "companyId": 15265,
                    "financeStage": "不需要融资",
                    "logo": "i/image/M00/5B/5A/Cgp3O1fg3uWAEuuhAABBDg7PalQ660.png",
                    "companyName": "百度在线网络技术（北京）有限公司",
                    "companyShortName": "我来贷WeLab",
                    "companyfeatures": "用科技让复杂的世界更简单",
                    "city": "北京",
                    "createtime": "Oct 13, 2013 3:49:33 PM",
                    "isenable": 1,
                    "approve": 2,
                    "companySize": "2000人以上",
                    "industryfield": "移动互联网,数据服务",
                    "companyLabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                    "customerlabel": "2787",
                    "approvemanid": 3634,
                    "approvemanemail": "yelin@baidu.com",
                    "createmanid": 10747,
                    "createmanemail": "zhubaining@baidu.com",
                    "companylng": "116.2956171",
                    "companylat": "40.04873954",
                    "companyaddress": "百度大厦",
                    "displayContactNum": 20,
                    "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
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
                },{
                    "companyId": 1575,
                    "financeStage": "不需要融资",
                    "logo": "i/image/M00/21/3E/CgpFT1kVdzeAJNbUAABJB7x9sm8374.png",
                    "companyName": "百度在线网络技术（北京）有限公司",
                    "companyShortName": "百度",
                    "companyfeatures": "用科技让复杂的世界更简单",
                    "city": "北京",
                    "createtime": "Oct 13, 2013 3:49:33 PM",
                    "isenable": 1,
                    "approve": 2,
                    "companySize": "2000人以上",
                    "industryfield": "移动互联网,数据服务",
                    "companyLabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                    "customerlabel": "2787",
                    "approvemanid": 3634,
                    "approvemanemail": "yelin@baidu.com",
                    "createmanid": 10747,
                    "createmanemail": "zhubaining@baidu.com",
                    "companylng": "116.2956171",
                    "companylat": "40.04873954",
                    "companyaddress": "百度大厦",
                    "displayContactNum": 20,
                    "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
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
                },{
                    "companyId": 38079,
                    "financeStage": "不需要融资",
                    "logo": "i/image/M00/03/BD/CgqKkVbC5DyAYlIvAAAMhxAJc1Y825.jpg",
                    "companyName": "百度在线网络技术（北京）有限公司",
                    "companyName": "GYENNO",
                    "companyfeatures": "用科技让复杂的世界更简单",
                    "city": "北京",
                    "createtime": "Oct 13, 2013 3:49:33 PM",
                    "isenable": 1,
                    "approve": 2,
                    "companySize": "2000人以上",
                    "industryfield": "移动互联网,数据服务",
                    "companyLabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                    "customerlabel": "2787",
                    "approvemanid": 3634,
                    "approvemanemail": "yelin@baidu.com",
                    "createmanid": 10747,
                    "createmanemail": "zhubaining@baidu.com",
                    "companylng": "116.2956171",
                    "companylat": "40.04873954",
                    "companyaddress": "百度大厦",
                    "displayContactNum": 20,
                    "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
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
                },{
                    "companyId": 18139,
                    "financeStage": "不需要融资",
                    "logo": "i/image/M00/7F/B5/CgpFT1pV0aKAF4u8AABVMWtorEo579.png",
                    "companyName": "百度在线网络技术（北京）有限公司",
                    "companyShortName": "拉勾网",
                    "companyfeatures": "用科技让复杂的世界更简单",
                    "city": "北京",
                    "createtime": "Oct 13, 2013 3:49:33 PM",
                    "isenable": 1,
                    "approve": 2,
                    "companySize": "2000人以上",
                    "industryfield": "移动互联网,数据服务",
                    "companyLabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                    "customerlabel": "2787",
                    "approvemanid": 3634,
                    "approvemanemail": "yelin@baidu.com",
                    "createmanid": 10747,
                    "createmanemail": "zhubaining@baidu.com",
                    "companylng": "116.2956171",
                    "companylat": "40.04873954",
                    "companyaddress": "百度大厦",
                    "displayContactNum": 20,
                    "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
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
                }],
                [{
                    "companyId": 18139,
                    "financeStage": "不需要融资",
                    "logo": "i/image/M00/7F/B5/CgpFT1pV0aKAF4u8AABVMWtorEo579.png",
                    "companyName": "百度在线网络技术（北京）有限公司",
                    "companyShortName": "拉勾网",
                    "companyfeatures": "用科技让复杂的世界更简单",
                    "city": "北京",
                    "createtime": "Oct 13, 2013 3:49:33 PM",
                    "isenable": 1,
                    "approve": 2,
                    "companySize": "2000人以上",
                    "industryfield": "移动互联网,数据服务",
                    "companyLabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                    "customerlabel": "2787",
                    "approvemanid": 3634,
                    "approvemanemail": "yelin@baidu.com",
                    "createmanid": 10747,
                    "createmanemail": "zhubaining@baidu.com",
                    "companylng": "116.2956171",
                    "companylat": "40.04873954",
                    "companyaddress": "百度大厦",
                    "displayContactNum": 20,
                    "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
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
                },{
                    "companyId": 15265,
                    "financeStage": "不需要融资",
                    "logo": "i/image/M00/5B/5A/Cgp3O1fg3uWAEuuhAABBDg7PalQ660.png",
                    "companyName": "百度在线网络技术（北京）有限公司",
                    "companyShortName": "我来贷WeLab",
                    "companyfeatures": "用科技让复杂的世界更简单",
                    "city": "北京",
                    "createtime": "Oct 13, 2013 3:49:33 PM",
                    "isenable": 1,
                    "approve": 2,
                    "companySize": "2000人以上",
                    "industryfield": "移动互联网,数据服务",
                    "companyLabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                    "customerlabel": "2787",
                    "approvemanid": 3634,
                    "approvemanemail": "yelin@baidu.com",
                    "createmanid": 10747,
                    "createmanemail": "zhubaining@baidu.com",
                    "companylng": "116.2956171",
                    "companylat": "40.04873954",
                    "companyaddress": "百度大厦",
                    "displayContactNum": 20,
                    "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
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
                },{
                    "companyId": 1575,
                    "financeStage": "不需要融资",
                    "logo": "i/image/M00/21/3E/CgpFT1kVdzeAJNbUAABJB7x9sm8374.png",
                    "companyName": "百度在线网络技术（北京）有限公司",
                    "companyShortName": "百度",
                    "companyfeatures": "用科技让复杂的世界更简单",
                    "city": "北京",
                    "createtime": "Oct 13, 2013 3:49:33 PM",
                    "isenable": 1,
                    "approve": 2,
                    "companySize": "2000人以上",
                    "industryfield": "移动互联网,数据服务",
                    "companyLabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                    "customerlabel": "2787",
                    "approvemanid": 3634,
                    "approvemanemail": "yelin@baidu.com",
                    "createmanid": 10747,
                    "createmanemail": "zhubaining@baidu.com",
                    "companylng": "116.2956171",
                    "companylat": "40.04873954",
                    "companyaddress": "百度大厦",
                    "displayContactNum": 20,
                    "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
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
                },{
                    "companyId": 38079,
                    "financeStage": "不需要融资",
                    "logo": "i/image/M00/03/BD/CgqKkVbC5DyAYlIvAAAMhxAJc1Y825.jpg",
                    "companyName": "百度在线网络技术（北京）有限公司",
                    "companyShortName": "GYENNO",
                    "companyfeatures": "用科技让复杂的世界更简单",
                    "city": "北京",
                    "createtime": "Oct 13, 2013 3:49:33 PM",
                    "isenable": 1,
                    "approve": 2,
                    "companySize": "2000人以上",
                    "industryfield": "移动互联网,数据服务",
                    "companyLabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                    "customerlabel": "2787",
                    "approvemanid": 3634,
                    "approvemanemail": "yelin@baidu.com",
                    "createmanid": 10747,
                    "createmanemail": "zhubaining@baidu.com",
                    "companylng": "116.2956171",
                    "companylat": "40.04873954",
                    "companyaddress": "百度大厦",
                    "displayContactNum": 20,
                    "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
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
                },{
                    "companyId": 18139,
                    "financeStage": "不需要融资",
                    "logo": "i/image/M00/7F/B5/CgpFT1pV0aKAF4u8AABVMWtorEo579.png",
                    "companyName": "百度在线网络技术（北京）有限公司",
                    "companyShortName": "拉勾网",
                    "companyfeatures": "用科技让复杂的世界更简单",
                    "city": "北京",
                    "createtime": "Oct 13, 2013 3:49:33 PM",
                    "isenable": 1,
                    "approve": 2,
                    "companySize": "2000人以上",
                    "industryfield": "移动互联网,数据服务",
                    "companyLabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                    "customerlabel": "2787",
                    "approvemanid": 3634,
                    "approvemanemail": "yelin@baidu.com",
                    "createmanid": 10747,
                    "createmanemail": "zhubaining@baidu.com",
                    "companylng": "116.2956171",
                    "companylat": "40.04873954",
                    "companyaddress": "百度大厦",
                    "displayContactNum": 20,
                    "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
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
                }],
                [{
                    "companyId": 18139,
                    "financeStage": "不需要融资",
                    "logo": "i/image/M00/7F/B5/CgpFT1pV0aKAF4u8AABVMWtorEo579.png",
                    "companyName": "百度在线网络技术（北京）有限公司",
                    "companyShortName": "拉勾网",
                    "companyfeatures": "用科技让复杂的世界更简单",
                    "city": "北京",
                    "createtime": "Oct 13, 2013 3:49:33 PM",
                    "isenable": 1,
                    "approve": 2,
                    "companySize": "2000人以上",
                    "industryfield": "移动互联网,数据服务",
                    "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                    "customerlabel": "2787",
                    "approvemanid": 3634,
                    "approvemanemail": "yelin@baidu.com",
                    "createmanid": 10747,
                    "createmanemail": "zhubaining@baidu.com",
                    "companylng": "116.2956171",
                    "companylat": "40.04873954",
                    "companyaddress": "百度大厦",
                    "displayContactNum": 20,
                    "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
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
                },{
                    "companyId": 15265,
                    "financeStage": "不需要融资",
                    "logo": "i/image/M00/5B/5A/Cgp3O1fg3uWAEuuhAABBDg7PalQ660.png",
                    "companyName": "百度在线网络技术（北京）有限公司",
                    "companyShortName": "我来贷WeLab",
                    "companyfeatures": "用科技让复杂的世界更简单",
                    "city": "北京",
                    "createtime": "Oct 13, 2013 3:49:33 PM",
                    "isenable": 1,
                    "approve": 2,
                    "companySize": "2000人以上",
                    "industryfield": "移动互联网,数据服务",
                    "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                    "customerlabel": "2787",
                    "approvemanid": 3634,
                    "approvemanemail": "yelin@baidu.com",
                    "createmanid": 10747,
                    "createmanemail": "zhubaining@baidu.com",
                    "companylng": "116.2956171",
                    "companylat": "40.04873954",
                    "companyaddress": "百度大厦",
                    "displayContactNum": 20,
                    "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
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
                },{
                    "companyId": 1575,
                    "financeStage": "不需要融资",
                    "logo": "i/image/M00/21/3E/CgpFT1kVdzeAJNbUAABJB7x9sm8374.png",
                    "companyName": "百度在线网络技术（北京）有限公司",
                    "companyShortName": "百度",
                    "companyfeatures": "用科技让复杂的世界更简单",
                    "city": "北京",
                    "createtime": "Oct 13, 2013 3:49:33 PM",
                    "isenable": 1,
                    "approve": 2,
                    "companySize": "2000人以上",
                    "industryfield": "移动互联网,数据服务",
                    "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                    "customerlabel": "2787",
                    "approvemanid": 3634,
                    "approvemanemail": "yelin@baidu.com",
                    "createmanid": 10747,
                    "createmanemail": "zhubaining@baidu.com",
                    "companylng": "116.2956171",
                    "companylat": "40.04873954",
                    "companyaddress": "百度大厦",
                    "displayContactNum": 20,
                    "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
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
                },{
                    "companyId": 38079,
                    "financeStage": "不需要融资",
                    "logo": "i/image/M00/03/BD/CgqKkVbC5DyAYlIvAAAMhxAJc1Y825.jpg",
                    "companyName": "百度在线网络技术（北京）有限公司",
                    "companyShortName": "GYENNO",
                    "companyfeatures": "用科技让复杂的世界更简单",
                    "city": "北京",
                    "createtime": "Oct 13, 2013 3:49:33 PM",
                    "isenable": 1,
                    "approve": 2,
                    "companySize": "2000人以上",
                    "industryfield": "移动互联网,数据服务",
                    "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                    "customerlabel": "2787",
                    "approvemanid": 3634,
                    "approvemanemail": "yelin@baidu.com",
                    "createmanid": 10747,
                    "createmanemail": "zhubaining@baidu.com",
                    "companylng": "116.2956171",
                    "companylat": "40.04873954",
                    "companyaddress": "百度大厦",
                    "displayContactNum": 20,
                    "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
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
                },{
                    "companyId": 18139,
                    "financeStage": "不需要融资",
                    "logo": "i/image/M00/7F/B5/CgpFT1pV0aKAF4u8AABVMWtorEo579.png",
                    "companyName": "百度在线网络技术（北京）有限公司",
                    "companyShortName": "拉勾网",
                    "companyfeatures": "用科技让复杂的世界更简单",
                    "city": "北京",
                    "createtime": "Oct 13, 2013 3:49:33 PM",
                    "isenable": 1,
                    "approve": 2,
                    "companySize": "2000人以上",
                    "industryfield": "移动互联网,数据服务",
                    "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                    "customerlabel": "2787",
                    "approvemanid": 3634,
                    "approvemanemail": "yelin@baidu.com",
                    "createmanid": 10747,
                    "createmanemail": "zhubaining@baidu.com",
                    "companylng": "116.2956171",
                    "companylat": "40.04873954",
                    "companyaddress": "百度大厦",
                    "displayContactNum": 20,
                    "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
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
                }]
            ],
            othersCount:5000,
            corperateCount:6000,
            testStatus:false,
            partnerStatus:false,
            browserType:0,  // 浏览器类型
            loadedCount:0,  // js、css加载数量
            employerAnimation:{
                onlyone:null,
                employer:null,
                B:null,
                BPagination:null,
                C:null,
                D:null
            },
            floating:{
                count:'f000',
                status:false,
            },
            corperate:[
                29946,36272,175199,43775,14491
            ],
        }
    },
    mounted:function(){
        
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
        labelList:function(labels){
            if(Object.prototype.toString.call(labels) === "[object Array]") {
                return labels
            }
            var arr = (labels ? labels : '').split(/[,.、。|·]/g),
                brr = [],
                i = 0
            for(i = 0; i < arr.length; i++){
                if(arr[i].trim()){
                    brr.push(arr[i].trim())
                }
            }
            return brr
        },
        employerSlideTo:function(index){
            this.$refs['employerSwiper'].swiper.slideTo(index+1)
        },
        employerSlidePrev:function(){
            this.$refs['employerSwiper'].swiper.slidePrev()
        },
        employerSlideNext:function(){
            this.$refs['employerSwiper'].swiper.slideNext()
        },
        BSlidePrev:function(){
            this.$refs['BSwiper'].swiper.slidePrev()
        },
        BSlideNext:function(){
            this.$refs['BSwiper'].swiper.slideNext()
        },
        topSlidePrev:function(index){
            this.$refs['topSwiper'+index][0].swiper.slidePrev()
        },
        topSlideNext:function(index){
            this.$refs['topSwiper'+index][0].swiper.slideNext()
        },
        changeEmployerActiveIndex:function(index){
            if(index == 0){
                this.employerActiveIndex = this.employerList.length - 1
            }else{
                this.employerActiveIndex = (index-1) % this.employerList.length
            }
        },
        changeBActiveIndex:function(index) {
            if(index == 0){
                this.BActiveIndex = this.BList.length - 1
            }else{
                this.BActiveIndex = (index-1) % this.BList.length
            }
            this.$refs['BPaginationSwiper'].swiper.slideTo(this.BActiveIndex)
        },
        changeCActiveIndex:function(index) {
            if(index == 0){
                this.CActiveIndex = this.CList.length - 1
            }else{
                this.CActiveIndex = (index-1) % this.CList.length
            }
        },
        changeBPaginationActiveIndex:function(index){
            if(index == 0){
                this.BActiveIndex = this.BList.length - 1
            }else{
                this.BActiveIndex = (index-1) % this.BList.length
            }
        },
        BPaginationTo:function(index){
            this.$refs['BSwiper'].swiper.slideTo(index+1)
        },
        changeDActiveIndex:function(index){
            if(index == 0){
                this.DActiveIndex = this.DList.length - 1
            }else{
                this.DActiveIndex = (index-1) % this.DList.length
            }
        },
        setTopSlideStyle:function(pindex,oindex){
            // var currentIndex = this.topActiveIndex[pindex]
            // return {
            //     'opacity':currentIndex == oindex ? 1 : (currentIndex-1 == oindex || currentIndex+1 == oindex) ? 0.8 : 0
            // }
        },
        topCurrent:function(pindex){
            return this.topList[pindex][this.topActiveIndex[pindex]]
        },
        topSlidePrevTransition:function(children,previousIndex){

        },
        topSlideNextTransitionStart:function(children,pindex,previousIndex){
            if(previousIndex > 0 && previousIndex < children.length - 2){
                var elem = children[previousIndex-1]//.$el
                elem.className += ' prevToNormal'
            }
        },
        topSlideNextTransitionEnd:function(children,pindex,previousIndex){
            if(previousIndex > 0 && previousIndex < children.length - 2){
                var elem = children[previousIndex-1]//.$el
                elem.className = elem.className.replace(' prevToNormal','')
            }
        },
        topSlidePrevTransitionStart:function(children,pindex,previousIndex){
            if(previousIndex < children.length - 1 && previousIndex > 1){
                var elem = children[previousIndex+1]//.$el
                elem.className += ' prevToNormal'
            }
        },
        topSlidePrevTransitionEnd:function(children,pindex,previousIndex){
            if(previousIndex < children.length - 1 && previousIndex > 1){
                var elem = children[previousIndex+1]//.$el
                elem.className = elem.className.replace(' prevToNormal','')
            }
        },
        getCorperateRow:function(index){
            return Math.floor(index / 5)
        },
        getEmployerLeader:function(one){
            // return one.leaderPhoto
            return 'images/employer-'+(one.companyId)+'.png'
        },
        getTopOptions:function(index){
            var options = JSON.parse(JSON.stringify(this.topOptions))
            options.pagination = {
                el: '.top__pagination--'+index,
                bulletClass : 'bullet',
                bulletActiveClass: 'active'
            }
            options.on = {
                slideChangeTransitionStart:function(){
                    var sapp = app || this.$el[0].__vue__.$root
                    sapp.changeTopActiveIndex(index,this.activeIndex)
                },
                slideNextTransitionStart:function(){
                    var sapp = app || this.$el[0].__vue__.$root
                    sapp.topSlideNextTransitionStart(this.$el[0].__vue__.$children,index,this.previousIndex)
                },
                slideNextTransitionEnd:function(){
                    var sapp = app || this.$el[0].__vue__.$root
                    sapp.topSlideNextTransitionEnd(this.$el[0].__vue__.$children,index,this.previousIndex)
                },
                slidePrevTransitionStart:function(){
                    var sapp = app || this.$el[0].__vue__.$root
                    sapp.topSlidePrevTransitionStart(this.$el[0].__vue__.$children,index,this.previousIndex)
                },
                slidePrevTransitionEnd:function(){
                    var sapp = app || this.$el[0].__vue__.$root
                    sapp.topSlidePrevTransitionEnd(this.$el[0].__vue__.$children,index,this.previousIndex)
                },
            }
            return options
        },
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
        getOnlyoneData:function(templateId){
            var self = this
            this.getAjaxData('activityapi/star101/superEmployer',function(content){
                self.onlyone.company = content
            },{
                templateId:templateId
            })
        },
        getEmployerData:function(templateId){
            var self = this
            this.getAjaxData('activityapi/star101/starEmployer',function(content){
                self.employerList = content
                self.$nextTick(function(){
                    self.addEmployerAnimation()
                })
            },{
                templateId:templateId
            })
        },
        getBData:function(templateId){
            var self = this
            this.getAjaxData('activityapi/star101/starEmployer',function(content){
                self.BList = content
                self.$nextTick(function(){
                    self.addBPaginationAnimation()
                    self.addBAnimation()
                })
            },{
                templateId:templateId
            })
        },
        getCData:function(templateId,city){
            var self = this
            this.getAjaxData('activityapi/star101/companyList',function(content){
                var arr = [],
                    i = 0;
                content.forEach(function(current,index){
                    i = Math.floor(index/2);
                    if (index % 2 === 0) {
                        arr[i] = []
                    }
                    arr[i].push(current);
                })
                self.CList = arr
                if (self.CList.length > 4) {
                    self.addCAnimation()
                }
            },{
                templateId:templateId,
                city:city
            })
        },
        getDData:function(templateId,city){
            var self = this
            this.getAjaxData('activityapi/star101/companyList',function(content){
                var arr = [],
                    i = 0
                    length = Math.ceil(content.length / 4)
                for(i = 0; i < length; i++){
                    arr.push(content.slice(i*4,(i+1)*4))
                }
                self.DList = arr.slice(0,3)
                self.$nextTick(function(){
                    self.addDAnimation()
                })
            },{
                templateId:templateId,
                city:city
            })
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
    },
}