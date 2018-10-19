<style lang="scss">
    @import '../css/activity.scss';
</style>
<template>
    <div class="activity">
        <div class="activity__banner">
            <div class="activity__nav" ref="yh-center__nav">
                <div class="activity__nav__layer" :class="{'activity__nav__layer--fixed':tab.fixed}" ref="yh-center__tab">
                    <div class="activity__nav__center clearfix">
                        <div class="activity__nav__one" v-for="(one,index) in nav"
                            :class="'activity__nav__one--'+index+(active == index ? ' activity__nav__one--active' : '')"
                            @click.stop.prevent="navChange(index)">
                            <div class="activity__nav__name">{{one.name}}<div class="activity__nav__border"></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="activity__content" v-for="(item,pindex) in nav" 
            v-show="active == pindex">
            <div class="speed" v-show="pindex == 0 || pindex == 1 || pindex == 2 || pindex == 3">
                <div class="speed__top clearfix">
                    <div class="speed__left">
                        <img class="speed__mac" :src="item.mac" />
                    </div>
                    <div class="speed__right">
                        <div class="speed__title__start">{{item.start}}</div>
                        <div class="speed__title clearfix" :class="{'speed__title--short':item.name2}">
                            <div class="speed__title__name">{{item.name2 || item.name}}</div>
                            <div class="speed__title__time" 
                                 :style="{
                                    backgroundImage:'url('+item.time+')'
                                }">{{item.time_text}}</div>
                        </div>
                        <div class="speed__info" :class="{'strong':pindex == 2}">{{item.info}}</div>
                        
                        <div class="speed__t" v-if="item.title || item.tarr">{{item.title}}</div>
                        <div class="speed__ta" 
                            v-for="(one,index) in item.tarr">{{one}}</div>

                        <div class="speed__title2" v-if="item.title2">
                            <div class="speed__title2__one" v-for="(one,index) in item.title2">{{one}}</div>
                        </div>
                        <div class="speed__tinfo" v-if="item.tinfo">{{item.tinfo}}</div>
                        
                        <div class="speed__btn clearfix" v-show="pindex != 1">
                            <a class="speed__btn__center" :href="item.link" target="_blank">在线查看</a>
                        </div>
                    </div>
                </div>
                <div class="speed__content" v-if="pindex == 0 || pindex == 2"
                    :class="{
                        'speed__content--promotion':pindex == 2
                    }">
                    <div class="speed__content__center">
                        <advantage 
                            :classname="item.classname"
                            :advantage="item.advantage"
                            :effect="item.effect"
                            :example="item.example"
                            :company="item.company"
                            :from="item.from"
                            :title3="item.title3"
                            :detail3="item.detail3"
                            :parent="'activity'+pindex"></advantage>
                    </div>
                </div>
                <div class="night__content" v-if="pindex == 1 || pindex == 3"
                    :class="item.nightClass ? item.nightClass+'__content' : ''">
                    <div class="night__content__layer">
                        <div class="night__content__center clearfix">
                            <div class="night__banner">
                                <!--<swiper :options="item.swiperOption" ref="nightSwiper">
                                    <swiper-slide v-for="(one,index) in item.night" :key="index">
                                        <img class="night__banner__one"
                                            :src="one" />
                                    </swiper-slide>
                                    <div class="night__banner__spot" :style="{
                                            width:10 * (item.night.length - 1) + 19 + 'px',
                                            marginLeft:-1 * (10 * (item.night.length - 1) + 19) / 2+'px'
                                        }" slot="pagination">
                                        <div class="night__banner__sone"
                                            v-for="(one,index) in item.night"
                                            :class="{'night__banner__sone--active':item.nightActive == index}"></div>
                                    </div>
                                </swiper>-->
                                <div class="night__banner__center clearfix"
                                    :style="{
                                        width:item.nightWidth * item.night.length + 'px'
                                    }">
                                    <img class="night__banner__one"
                                        v-for="(one,index) in item.night"
                                        :src="one" />
                                </div>
                                <!--<div class="night__banner__spot" :style="{
                                        width:10 * (item.night.length - 1) + 19 + 'px',
                                        marginLeft:-1 * (10 * (item.night.length - 1) + 19) / 2+'px'
                                    }">
                                    <div class="night__banner__sone"
                                        v-for="(one,index) in item.night"
                                        :class="{'night__banner__sone--active':item.nightActive == index}"></div>
                                </div>-->
                            </div>
                            <div class="night__advantage">
                                <div class="night__advantage__title">活动亮点</div>
                                <div class="night__advantage__list">
                                    <div class="night__advantage__li" v-for="(one,index) in item.advantage"
                                        :class="'night__advantage__li--'+index">
                                        <div class="night__advantage__name">{{one.name}}</div>
                                        <div class="night__advantage__detail">{{one.detail}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <summit v-show="pindex == 4"></summit>
            <strength v-show="pindex == 5"></strength>
            <ambition v-show="pindex == 6"></ambition>
            <div class="activity__page" v-show="pindex != 1 && pindex != 4 && pindex != 5 && pindex != 6">
                <div class="activity__name">活动解析</div>
            </div>
            <div class="activity__dream" v-if="pindex == 3">
                <div class="activity__dream__title">{{item.dream.title}}</div>
                <div class="activity__dream__info">
                    <div class="activity__dream__one" v-for="(one,index) in item.dream.info">{{one}}</div>
                </div>
            </div>
            <div class="activity__one" v-if="item.banner" :ref="item.banner.elem"
                :style="{
                    height:item.banner.height+'px',
                    backgroundImage:'url('+item.banner.url+')'
                }"></div>
            <div class="activity__imgs" v-if="item.imgs && pindex != 4 && pindex != 5 && pindex != 6" v-for="(one,index) in item.imgs">
                <div class="activity__imgs__title" v-if="one.title">{{one.title}}</div>
                <div class="activity__imgs__info" v-if="one.info">{{one.info}}</div>
                <div class="activity__one"
                    :ref="one.elem"
                    :style="{
                        height:one.height+'px',
                        backgroundImage:'url('+one.url+')'
                    }"></div>
            </div>
            <div class="speed__link" v-show="pindex == 0 || pindex == 2 || pindex == 3">
                <a class="speed__link__a" :href="item.link" target="_blank">线上活动链接 ></a></div>
        </div>
    </div>
</template>
<script>
    import advantage from 'components/advantage.vue';
    import summit from 'components/summit.vue';
    import strength from 'components/strength.vue';
    import ambition from 'components/ambition.vue';
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import 'swiper/dist/css/swiper.css';

    export default {
        name:'activity',
        data(){
            return {
                active:0,
                tab:{
                    offsetTop:0,
                    offsetHeight:0,
                    click_status:false,
                    fixed:false
                },
                nav:[{
                    name:'极速入职',
                    time:require('../assets/images/activity/speed-time.png'),
                    time_text:'每2个月1期/线上活动',
                    mac:require('../assets/images/activity/speed-mac.png'),
                    info:'品牌曝光，极速招聘，最快24小时入职',
                    title:'24小时入职成功',
                    tarr:[
                        '专为企业急招职位打造，以“24小时入职”引爆求职者快速投递；',
                        '同时企业24小时内迅速响应，集中处理简历、发起面试，极大缩短招聘周期。'
                    ],
                    link:'https://activity.lagou.com/activity/dist/speedEntry/pc/index2.html?num=29',
                    advantage:[{
                        name:'线上专场',
                        detail:'亮点包装，突出优势&急招职位',
                        icon:require('../assets/images/activity/speed-icon-01.png')
                    },{
                        name:'急招职位曝光',
                        detail:'极速职位“top10”榜单实时更新',
                        icon:require('../assets/images/activity/speed-icon-02.png')
                    },{
                        name:'职位搜索推荐',
                        detail:'专场职位搜索权重提升',
                        icon:require('../assets/images/activity/speed-icon-03.png')
                    },{
                        name:'站内外同步推广',
                        detail:'丰富的广告位，精准站内推送，外部新媒体推广',
                        icon:require('../assets/images/activity/speed-icon-04.png')
                    }],
                    classname:'',
                    example:[{
                        width:160,
                        num:'172份简历',
                        name:'活动前（5天）'
                    },{
                        width:877,
                        num:'800份简历',
                        name:'活动上线期间（5天）'
                    }],
                    company:'蘑菇租房',
                    from:'（参与“极速入职”前后对比）',
                    title3:'简历投递量提高3.6倍',
                    detail3:'活动期间蘑菇租房简历投递量增加了628份，较同期增长3.6倍',
                    banner:{
                        height:753,
                        offsetTop:0,
                        status:true,
                        elem:'pc-03',
                        url:require('../assets/images/activity/speed-03.png')
                    },
                    imgs:[{
                        title:'Logo持续曝光',
                        info:'合作企业商标置顶曝光，提高企业品牌知名度',
                        height:197,
                        offsetTop:0,
                        status:true,
                        elem:'pc-04',
                        url:require('../assets/images/activity/speed-04.png')
                    },{
                        title:'职位卡',
                        info:'根据简历处理效率排名职位卡',
                        height:502,
                        offsetTop:0,
                        status:true,
                        elem:'pc-05',
                        url:require('../assets/images/activity/speed-05.png')
                    }]
                },{
                    name:'拉勾夜宴',
                    time:require('../assets/images/activity/night-time.png'),
                    time_text:'每月1次/线下活动',
                    mac:require('../assets/images/activity/night-mac.png'),
                    info:'拉勾最具效率和野心的招聘盛宴',
                    title:'现场沟通拿offer',
                    tarr:[
                        '候选人与企业面对面沟通，现场敲定offer',
                        '最有效率的线下招聘盛宴'
                    ],
                    link:'https://activity.lagou.com/activity/dist/speedEntry/pc/index2.html?num=29',
                    night:[
                        require('../assets/images/activity/night-b01.png')
                    ],
                    nightWidth:770,
                    nightActive:0,
                    advantage:[{
                        name:'优质候选人',
                        detail:'邀请一周内优质活跃候选人参加（本科及以上，工作经验2年+，薪资20K+）',
                    },{
                        name:'优质企业',
                        detail:'邀请10家优质企业参加，通过与候选人茶歇聊天的方式，现场发放offer',
                    }],
                    swiperOption:{
                        loop:true,
                        speed:300,
                        autoplay : {
                            delay:3000
                        },
                        pagination:{
                            el:'.night__banner__spot',
                            bulletClass : 'night__banner__sone',
                            bulletActiveClass: 'night__banner__sone--active'
                        }
                    },
                    imgs:null
                },{
                    name:'全民升职季',
                    time:require('../assets/images/activity/promotion-time.png'),
                    time_text:'每年3月/线上活动',
                    mac:require('../assets/images/activity/promotion-mac.png'),
                    info:'一个能完成全年70%招聘KPI的活动',
                    title:'',
                    tarr:[
                        '打造互联网人的开年招聘狂欢节',
                        '助力企业提升雇主品牌影响力',
                        '帮助企业完成招聘需求'
                    ],
                    link:'https://activity.lagou.com/activi/promotion2018/pages/pc/index.html#/main',
                    advantage:[{
                        name:'',
                        detail:'拉勾全站流量导入，招聘最热季，形成招人最强音',
                        icon:require('../assets/images/activity/promotion-icon-01.png')
                    },{
                        name:'',
                        detail:'专场形式多样，满足客户精细化招聘需求',
                        icon:require('../assets/images/activity/promotion-icon-02.png')
                    },{
                        name:'',
                        detail:'参与企业专享特权，打下全年招聘基础',
                        icon:require('../assets/images/activity/promotion-icon-03.png')
                    }],
                    effect:[{
                        name:'突破1000w+',
                        info:'2018活动期间投递量破1000万'
                    },{
                        name:'简历量提高400%',
                        info:'超过一半企业收取简历量提高400%'
                    }],
                    classname:'promotion__advantage',
                    example:[{
                        width:200,
                        num:'2861份',
                        name:'活动前两周'
                    },{
                        width:885,
                        num:'11025份',
                        name:'活动上线期间'
                    }],
                    company:'OPPO',
                    from:'（参与“全民升职季”前后对比）',
                    title3:'简历投递量提高近3倍',
                    detail3:'活动期间OPPO简历投递量增加了8164份，较同期增长2.85倍',
                    banner:{
                        height:1110,
                        offsetTop:0,
                        status:true,
                        // elem:'pc-03',
                        url:require('../assets/images/activity/promotion-02.png')
                    },
                    imgs:[{
                        title:'超级雇主、千万豪门、高薪必投、热招风暴、人气精选，五大招聘主题任你选',
                        info:'活动期间各个主题特色不同，涵盖互联网各类公司...',
                        height:416,
                        url:require('../assets/images/activity/promotion-03.png')
                    },{
                        height:415,
                        url:require('../assets/images/activity/promotion-04.png')
                    },{
                        height:416,
                        url:require('../assets/images/activity/promotion-05.png')
                    },{
                        height:415,
                        url:require('../assets/images/activity/promotion-06.png')
                    },{
                        height:416,
                        url:require('../assets/images/activity/promotion-07.png')
                    }]
                },{
                    name:'梦想者市集',
                    time:require('../assets/images/activity/dream-time.png'),
                    time_text:'每年3月/线下活动',
                    mac:require('../assets/images/activity/dream-mac.png'),
                    info:'在10000+互联网人到场的活动中深度曝光',
                    title2:[
                        'TOP100互联网公司展览+直招、职场大咖分享',
                        '打造雇主形象走廊'
                    ],
                    tinfo:'举办地点：北京 | 上海 | 杭州 | 广州 | 深圳 | 成都',
                    link:'https://activity.lagou.com/activity/dist/dreamMarket/pc/',
                    night:[
                        require('../assets/images/activity/dream-banner.png')
                    ],
                    nightClass:'dream',
                    nightWidth:718,
                    nightActive:0,
                    advantage:[{
                        name:'45000+ 参与者 ',
                        detail:'全国巡回互联网人，参与现场',
                    },{
                        name:'500+ 公司现场直面',
                        detail:'业界影响力超前，行业TOP公司现场直面',
                    },{
                        name:'100+ 媒体曝光',
                        detail:'虎嗅、网易等核心媒体深度曝光',
                    }],
                    dream:{
                        title:'100家最酷互联网公司现场直聊 offer直发',
                        info:[
                            '互联网大咖帮你摆脱迷茫',
                            '超多干货、有趣活动尽在梦想者市集'
                        ]
                    },
                    imgs:[{
                        height:676,
                        url:require('../assets/images/activity/dream-01.png')
                    },{
                        height:420,
                        url:require('../assets/images/activity/dream-02.png')
                    },{
                        height:419,
                        url:require('../assets/images/activity/dream-03.png')
                    },{
                        height:420,
                        url:require('../assets/images/activity/dream-04.png')
                    },{
                        height:419,
                        url:require('../assets/images/activity/dream-05.png')
                    }]
                },{
                    name:'互联网人才官领袖峰会',
                    imgs:[{
                        height:1000,
                        url:require('../assets/images/ads/position-banner-01.png')
                    }]
                },{
                    name:'实力派',
                    link:'https://activity.lagou.com/activity/dist/strength2017/pc/index.html',
                    imgs:[{
                        height:1000,
                        url:require('../assets/images/ads/position-banner-01.png')
                    }]
                },{
                    name:'野心时代',
                    imgs:[{
                        height:1000,
                        url:require('../assets/images/ads/position-banner-01.png')
                    }]
                }],
                scrollStatus:false
            }
        },
        components: {
            advantage,
            summit,
            strength,
            ambition,
            swiper,
            swiperSlide
        },
        mounted(){
            // this.initWindowScrollEvent();
        },
        methods:{
            getTabHeight:function(){
                var list = this.nav[this.active].imgs,
                    elem = null,
                    parent = [],
                    height = 0,
                    top = 0,
                    status = false,
                    i = 0,j = 0;
                if(!list){
                    return;
                }
                for(i = 0; i < list.length; i++){
                    if(list[i].elem){
                        elem = this.$refs[list[i].elem];
                        top = 0;
                        height = 0;
                        if(list[i].parent){
                            parent = list[i].parent;
                            for(j = 0; j < parent.length; j++){
                                top += list[parent[j]].offsetTop;
                                // height += this.tab.list[parent[j]].height;
                            }
                            // top += elem.offsetTop;
                            // top += this.getPX(list[i].top)
                        }else{
                            top += elem.offsetTop;
                        }
                        // if(list[i].initHeight){
                        //     height = this.getPX(list[i].initHeight);
                        // }else{
                        //     height = elem.offsetHeight;
                        // }
                        if(list[i].offsetTop != top || list[i].height != height){
                            list[i].offsetTop = top;
                            // list[i].height = height;
                            status = true
                        }
                    }
                }
                // if(!status) {
                //     this.tab.status = true;
                // }
            },
            initWindowScrollEvent:function(){
                var self = this,
                    nav = this.$refs['yh-center__nav'],
                    tab = this.$refs['yh-center__tab'],
                    height = window.innerHeight,
                    min = 58;
                this.tab.offsetTop = nav.offsetTop,
                this.tab.height = tab.offsetHeight,
                this.getTabHeight();
                window.onscroll = (e) => {
                    if(self.click_status){
                        return
                    }
                    var imgs = self.nav[self.active].imgs,
                        scrollTop = e.currentTarget.scrollY,
                        one = null,
                        halfWidow = height / 4,
                        left = 0,
                        i = 0;
                   
                    self.getTabHeight();
                    self.tab.offsetTop = nav.offsetTop;
                    self.tab.height = tab.offsetHeight;

                    if(self.tab.offsetTop <= scrollTop){
                        self.tab.fixed = true;
                    }else{
                        self.tab.fixed = false;
                    }
                    if(!imgs){
                        return;
                    }
                    for (i = 0; i < imgs.length; i++) {
                        one = imgs[i];
                        if (one.elem && (one.offsetTop - halfWidow) < scrollTop && (one.offsetTop + one.height - halfWidow) > scrollTop) {
                            self.activeChild = i;
                            break;
                        }
                    }
                };
            },
            navChange(index){
                let nav = this.$refs['yh-center__nav'];
                this.active = index;
                window.scrollTo(0,nav.offsetTop);
                this.$store.commit('setActivity','activity'+index)
            }
        }
    }
</script>