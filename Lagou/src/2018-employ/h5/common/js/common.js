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
            localCount:1000,
            localList:[{
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
            topCount:3000,
            topActiveIndex:[1,1,1,1],
            topTime:Date.now(),
            topList:[
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
            topOptions:{
                // slideClass : 'top__one',
                slideActiveClass : 'active',
                slidePrevClass : 'prev',
                slideNextClass : 'next',
                autoplay:false,//等同于以下设置
                speed:500,
                loop:false,
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                // 设置slider容器能够同时显示的slides数量(carousel模式)。
                slidesPerView: 1,
                initialSlide:1,
                autoplayDisableOnInteraction: false,
                coverflowEffect: {
                    rotate: 0,  // rotate：slide做3d旋转时Y轴的旋转角度。默认50。
                    stretch: 600 / 750 * GC.w,   // stretch：每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
                    depth: 170,  // depth：slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
                    // modifier：depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
                    modifier: 1,  
                    // slideShadows：开启slide阴影。默认 true。
                    slideShadows:false
                },
                pagination:{
                    el: '.top__pagination--0',
                    bulletClass : 'bullet',
                    bulletActiveClass: 'active'
                },
                // on:{
                //     slidePrevTransitionStart:function(){
                //         var sapp = app || this.$el[0].__vue__.$root
                //         sapp.topSlidePrevTransition(this.$el[0].__vue__.$children,this.previousIndex)
                //     },
                //     slideNextTransitionStart:function(){
                //         var sapp = app || this.$el[0].__vue__.$root
                //         sapp.topSlideNextTransition(this.$el[0].__vue__.$children,this.activeIndex)
                //     }
                // }
            },
            othersCount:5000,
            corperateCount:6000,
            testStatus:false,
            partnerStatus:false,
            browserType:0,  // 浏览器类型
            loadedCount:0,  // js、css加载数量
            employerAnimation:{
                onlyone:null,
                employer:null,
                top:[null,null,null,null]
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
        this.from = (getQueryString('lagoufrom')+'').toLocaleLowerCase();
        var frompartner = getQueryString('frompartner');
        this.partnerStatus = frompartner// ? true : false;
        this.isAPP = this.from == 'ios' || this.from == 'android'
        if(!this.isAPP){
            this.floating.status = true;
        }
        this.browserType = this.getBrowserType()

        this.fontSize = parseFloat(this.getComputedValue(document.documentElement,'font-size'));
        this.tab.showWidth = this.getRemValue(this.tab.initWidth) * this.fontSize;

        this.setTabWidth();
        // var self = this
        // this.$nextTick(function(){
        //     $('.tab__ul')[0].style.width = self.getTabWidth()+'px'
        // })
        

        // this.addJSCSS();
        // this.loadedJSCSS();
        this.initWindowScrollEvent();
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
        changeTopActiveIndex:function(index,activeIndex){
            this.topActiveIndex = this.topActiveIndex.map(function(value,key){
                if(index == key){
                    return activeIndex
                }
                return value
            })
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
            return '../common/images/employer-'+(one.companyId)+'.png'
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
        getLocalData:function(templateId,city){
            var self = this
            this.getAjaxData('activityapi/star101/companyList',function(content){
                self.localList = content
            },{
                templateId:templateId,
                city:city
            })
        },
        getTopData:function(templateId,city){
            var self = this
            this.getAjaxData('activityapi/star101/companyList',function(content){
                var arr = [],
                    i = 0
                    length = Math.ceil(content.length / 5)
                for(i = 0; i < length; i++){
                    arr.push(content.slice(i*5,(i+1)*5))
                }
                self.topList = arr.slice(0,4)
                self.$nextTick(function(){
                    self.addTopAnimation()
                })
            },{
                templateId:templateId,
                city:city
            })
        },

















        /***********************************
         **  tab导航栏函数
         */
        getTabWidth:function(){
            // 211
            var fontSize = parseFloat(this.getComputedValue(document.documentElement,'font-size')),
                length = 5,
                width = 211 * length
            return Math.ceil(width / (750 / 16) * fontSize)
        },
        setTabWidth:function(){
            var list = this.$refs['tab'].children,//list = this.tab.list,//list = this.$refs['tab'].children,
                i = 0,
                total = 0,
                one = 0;
            for(i = 0; i < list.length; i++){
                one = this.getPointOuterWidth(list[i]);//(this.$refs['tab__li--'+i][0].$el)//(list[i]);
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
        toTopEvent:function(){
            $('html,body').animate({'scrollTop': 0},500);
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







        /***********************************
         **  基础函数
         */
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
            this.employerAnimation.employer = new Swiper('#employerSwiper', {
                // wrapperClass:"swiper-wrapper",
                // slideClass:"swiper-slide",
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
            })
        },
        addTopAnimation:function(){
            var self = this,
                i = 0
            for(i = 0; i < this.topList.length; i++){
                (function(index){
                    self.employerAnimation.top[index] = new Swiper('#topSwiper'+index, {
                        // slideClass : 'top__one',
                        slideActiveClass : 'active',
                        slidePrevClass : 'prev',
                        slideNextClass : 'next',
                        autoplay:false,//等同于以下设置
                        speed:500,
                        loop:false,
                        effect: 'coverflow',
                        grabCursor: true,
                        centeredSlides: true,
                        // 设置slider容器能够同时显示的slides数量(carousel模式)。
                        slidesPerView: 1,
                        initialSlide:1,
                        autoplayDisableOnInteraction: false,
                        coverflowEffect: {
                            rotate: 0,  // rotate：slide做3d旋转时Y轴的旋转角度。默认50。
                            stretch: 600 / 750 * GC.w,   // stretch：每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
                            depth: 170,  // depth：slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
                            // modifier：depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
                            modifier: 1,  
                            // slideShadows：开启slide阴影。默认 true。
                            slideShadows:false
                        },
                        pagination:{
                            el: '.top__pagination--'+index,
                            bulletClass : 'bullet',
                            bulletActiveClass: 'active'
                        },
                        on:{
                            slideChangeTransitionStart:function(){
                                self.changeTopActiveIndex(index,this.activeIndex)
                            },
                            slideNextTransitionStart:function(){
                                self.topSlideNextTransitionStart(this.$wrapperEl[0].children,index,this.previousIndex)
                            },
                            slideNextTransitionEnd:function(){
                                self.topSlideNextTransitionEnd(this.$wrapperEl[0].children,index,this.previousIndex)
                            },
                            slidePrevTransitionStart:function(){
                                self.topSlidePrevTransitionStart(this.$wrapperEl[0].children,index,this.previousIndex)
                            },
                            slidePrevTransitionEnd:function(){
                                self.topSlidePrevTransitionEnd(this.$wrapperEl[0].children,index,this.previousIndex)
                            },
                        }
                    })
                })(i)
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
        isObject:function(e){
            return e instanceof Object
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
        cutString:function(str,num){
            str = str ? str : ''
            var str2 = str.replace(/([\u4E00-\u9FA5]|[\uFE30-\uFFA0])/g,"çç"),
                result = '';
            if (str2.length > num){
                var length = str2.slice(0,num).replace(/çç/g,'ç').length;
                result = str.slice(0,length)+'...';
            }else {
                result = str;
            }
            return result;
        },
        floatingCloseEvent:function(){
            this.floating.status = false;
        },
        appDownload:function(){

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