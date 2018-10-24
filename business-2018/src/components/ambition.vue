<template>
    <div class="ambition">
        <div class="ambition__top clearfix">
            <div class="ambition__left">
                <img class="ambition__mac" :src="mac" />
            </div>
            <div class="ambition__right">
                <div class="ambition__right__title clearfix">
                    <div class="ambition__right__title__name">{{name}}</div>
                    <div class="ambition__right__title__time" 
                            :style="{
                            backgroundImage:'url('+time+')'
                        }">{{time_text}}</div>
                </div>
                <div class="ambition__right__info">{{info}}</div>
                
                <div class="ambition__right__ta" 
                    v-for="(one,index) in list">
                    <div class="ambition__right__ta__name">{{one.name}}</div>
                    <div class="ambition__right__ta__detail">{{one.detail}}</div>
                </div>
            </div>
        </div>
        <div class="ambition__content">
            <div class="ambition__content__center">
                <div class="ambition__content__title">线上活动</div>
                <div class="ambition__content__activity clearfix">
                    <div class="ambition__content__img"></div>
                    <div class="ambition__content__info">
                        <div class="ambition__content__name">招聘风暴周</div>
                        <div class="ambition__content__green strong">投递量增加186%</div>
                        <div class="ambition__content__detail">春招前抢占优质人才的最大专场<br/>平均投递量相较平时增加186%</div>
                        <a class="ambition__content__btn" :href="storm" target="_blank">在线查看</a>
                    </div>
                </div>
                <contrast
                    :example="example"
                    :company="company"
                    :from="from"
                    :title3="title3"
                    :detail3="detail3"
                    parent="activity6"></contrast>
            </div>
        </div>
        <div class="ambition__employer">
            <div class="ambition__employer__center clearfix">
                <div class="ambition__content__img"></div>
                <div class="ambition__content__info">
                    <div class="ambition__content__name">雇主评选<span class="ambition__content__subname">/线下活动</span></div>
                    <div class="ambition__content__green strong">35W+雇主、200W+互联网人参与</div>
                    <div class="ambition__content__detail">最权威的互联网最佳雇主品牌评选<br/>35万家雇主参与角逐<br/>200万互联网人参与评选</div>
                    <a class="ambition__content__btn" :href="employer" target="_blank">在线查看</a>
                </div>
            </div>
        </div>
        <div class="ambition__night">
            <div class="ambition__night__center clearfix">
                <div class="ambition__content__info">
                    <div class="ambition__content__name">拉勾之夜<span class="ambition__content__subname">/线下活动</span></div>
                    <div class="ambition__content__green strong">5位最具影响力人物<br/>2000位现场嘉宾<br/>100+互联网KOL联合转发<br/>200W页面PV传播</div>
                    <div class="ambition__content__detail">互联网招聘行业规模最大的颁奖盛典</div>
                    <a class="ambition__content__btn" :href="nightLink" target="_blank">在线查看</a>
                </div>
                <div class="ambition__content__img"></div>
            </div>
        </div>
        <div class="ambition__activity__page">
            <div class="ambition__activity__name">活动解析</div>
        </div>
        <div class="ambition__activity__dream__title">招聘风暴：春招前，互联网最大规模人才招聘专场</div>
        <div class="ambition__img">
            <div class="ambition__img__center" v-if="swiperStatus"
                @mouseenter.stop.prevent="stopSwiperAutoplay"
                @mouseleave.stop.prevent="startSwiperAutoplay">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide v-for="(one,index) in imgs" :key="index">
                        <img class="ambition__img__one" :src="one" />
                    </swiper-slide>
                    <div class="ambition__arrow ambition__arrow--left swiper-button-prev" slot="button-prev"></div>
                    <div class="ambition__arrow ambition__arrow--right swiper-button-next" slot="button-next"></div>
                </swiper>
                <!--<div class="swiper-container" ref="mySwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(one,index) in imgs" :key="index">
                            <img class="ambition__img__one" :src="one" />
                        </div>
                    </div>
                </div>-->
            </div>
        </div>
        <div class="ambition__link">
            <a class="ambition__link__a" :href="link" target="_blank">线上活动链接 ></a>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import contrast from 'components/contrast.vue';
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import 'swiper/dist/css/swiper.css';
    export default {
        name:'ambition',
        components: {
            contrast,
            swiper,
            swiperSlide
        },
        computed:{
            ...mapState(['activeActivity']),
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        data(){
            return {
                name:'野心时代',
                mac:require('../assets/images/activity/ambition-mac.png'),
                time:require('../assets/images/activity/ambition-time.png'),
                time_text:'每年12月/线上+线下活动',
                info:'年末收官大戏，抢先一步为明年做准备',
                list:[{
                    name:'招聘风暴周',
                    detail:'打造年度互联网圈最后一次大规模招聘'
                },{
                    name:'雇主评选',
                    detail:'建立全新的雇主评选生态，呈现行业TOP酷公司'
                },{
                    name:'拉勾之夜',
                    detail:'呈现一场用野心探索未来的互联网人年度盛典'
                }],
                link:'https://activity.lagou.com/activity/dist/stormWeek2017/pc/index.html',
                storm:'https://activity.lagou.com/activity/dist/stormWeek2017/pc/index.html',
                employer:'https://activity.lagou.com/topic/thebestemployers.html',
                nightLink:'http://activity.lagou.com/activity/dist/yxsd2017/index.html',
                advantage:null,
                classname:'',
                effect:'',
                example:[{
                    width:250,
                    num:'346份',
                    name:'活动前一周'
                },{
                    width:845,
                    num:'1106份',
                    name:'活动后一周'
                }],
                company:'招行信用卡',
                from:'（参与“野心时代-招聘风暴周”前后对比）',
                title3:'简历投递量提高2.2倍',
                detail3:'活动期间招商银行简历投递量增加了760份，较同期增长2.2倍',
                dream:{
                    title:'“实力派”分为超级雇主、名企盛宴、热招风暴、高薪来袭四大板块',
                    info:[
                        '高薪优质职位、100%安全捍卫、企业真实可靠'
                    ]
                },
                imgs:[
                    require('../assets/images/activity/ambition-03.png'),
                    require('../assets/images/activity/ambition-04.png'),
                    require('../assets/images/activity/ambition-05.png')
                ],
                swiperStatus:false,
                swiperOption:{
                    autoplay:{
                        delay: 3000,
                        //用户操作swiper之后，是否禁止autoplay.默认为true：停止。
                        disableOnInteraction:false,
                    },
                    loop:true,
                    effect: 'coverflow',
                    grabCursor: true,
                    slidesPerView: 1,
                    centeredSlides: true,
                    loopAdditionalSlides:1,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    coverflowEffect: {
                        rotate: 0,
                        stretch: 300,   // slide左右距离
                        depth: 100, // slide前后距离
                        modifier: 1,
                        slideShadows : true,
                    }
                },
                firstTime:false
            }
        },
        watch:{
            activeActivity(n,o){
                if(n == 'activity6' && !this.firstTime){
                    this.firstTime = true;
                    this.$nextTick(() => {
                        this.swiperStatus = true;
                        // var mySwiper = new Swiper('.swiper-container', this.swiperOption);
                        // this.swiperOption = {
                        //     autoplay:true,
                        //     loop:true,
                        //     effect: 'coverflow',
                        //     grabCursor: true,
                        //     slidesPerView: 1,
                        //     centeredSlides: true,
                        //     coverflowEffect: {
                        //         rotate: 0,
                        //         stretch: 300,
                        //         depth: 100,
                        //         modifier: 1,
                        //         slideShadows : true,
                        //     }
                        // }
                    });
                }
            }
        },
        methods:{
            stopSwiperAutoplay(){
                this.swiper.autoplay.stop()
            },
            startSwiperAutoplay(){
                this.swiper.autoplay.start()
            }
        }
    }
</script>
<style lang="scss">
    .ambition {
        &__top {
            width:1200px;
            padding:72px 0 72px 0;
            margin:0 auto;
        }
        &__left {
            padding:0 93px 0 0;
            float:left;
        }
        &__mac {
            width:617px;
            height:336px;
        }
        &__right {
            margin-top:-10px;
            float:left;

            &__title__start {
                line-height:48px;
                margin-top:-20px;
                font-size:32px;
                text-align:left;
                font-weight:500;
                color:#2b2d33;
            }
            &__title {
                &__name {
                    line-height:48px;
                    padding-bottom:7px;
                    font-size:32px;
                    text-align:left;
                    font-weight:500;
                    color:#2b2d33;
                    float:left;
                }
                &__time {
                    width:182px;
                    height:33px;
                    line-height:33px;
                    padding: 8px 0 0 19px;
                    margin:0 0 0 15px;
                    color:#00b38a;
                    text-align:left;
                    font-size:14px;
                    float:left;
                    background:no-repeat center bottom;
                    position:relative;
                }
            }
            &__info {
                width:410px;
                line-height:20px;
                padding:0 0 24px 0;
                border-bottom:1px solid #e7eaf1;
                text-align:left;
                font-size:14px;
                color:#81879a;
            }
            &__ta {
                padding:18px 0 3px 0;
            }
            &__ta__name {
                line-height:32px;
                font-size:18px;
                color:#2b2d33;
                font-weight:500;
                text-align:left;
            }
            &__ta__detail {
                line-height:27px;
                font-size:14px;
                color:#828798;
                text-align:left;
            }
            &__btn {
                padding:27px 0 0 0;
            }
            &__btn__center {
                width:122px;
                height:35px;
                line-height:35px;
                background-color:#00b787;
                font-size:14px;
                text-align:center;
                color:#fff;
                text-decoration:none;
                display:block;
            }
            &__btn__center:hover {
                background-color:#009b73;
                text-decoration:none;
            }
        }


        &__content {
            width:100%;
            height:994px;
            background:url('~assets/images/activity/ambition-bg.png') no-repeat center top;
            &__center {
                width:1200px;
                margin:0 auto;
            }
            &__title {
                line-height:84px;
                padding-top:69px;
                padding-left:82px;
                color:#2b2d33;
                font-size:24px;
                font-weight:600;
                position:relative;
            }
            &__title:after {
                content:"";
                width:1037px;
                height:1px;
                background-color:#e7eaf1;
                position:absolute;
                left:82px;
                bottom:0;
            }
            &__activity {
                padding-top:34px;
                padding-bottom:48px;
            }
            &__img {
                width:592px;
                height:293px;
                padding-left:82px;
                background:url('~assets/images/activity/ambition-img.png') no-repeat 82px bottom;
                float:left;
            }
            &__info {
                padding-left:119px;
                float:left;
            }
            &__name {
                line-height:46px;
                padding-bottom:15px;
                font-size:24px;
                color:#2b2d33;
                text-align:left;
                font-weight:500;
                position:relative;
            }
            &__name:after {
                content:"";
                width:30px;
                height:2px;
                background-color:#2b2d33;
                position:absolute;
                left:0;
                bottom:0;
            }
            &__subname {
                font-size:18px;
                color:#73798f;
                font-weight:normal;
            }
            &__green {
                line-height:38px;
                padding-top:16px;
                text-align:left;
                font-size:18px;
                color:#00b38a;
            }
            &__detail {
                line-height:27px;
                padding-top:4px;
                padding-bottom:53px;
                text-align:left;
                color:#73798f;
                font-size:16px;
            }
            &__btn {
                width:122px;
                height:35px;
                line-height:35px;
                color:#fff;
                text-align:center;
                font-size:14px;
                background-color:#00b38a;
                text-decoration:none;
                cursor:pointer;
                display:block;
            }
            &__btn:hover {
                text-decoration:none;
                background-color:#009b73;
                text-decoration:none;
            }
            .contrast {
                padding-left:82px;
            }
        }

        &__employer {
            margin-top:25px;
            padding-top:80px;
            background-color:#f5f6f8;
            &__center {
                width:1200px;
                margin:0 auto;
            }
            .ambition__content__img {
                width:647px;
                height:320px;
                background-image:url('~assets/images/activity/ambition-01.png');
            }
            .ambition__content__info {
                padding-left:97px;
            }
            .ambition__content__detail {
                padding-bottom:28px;
            }
        }
        &__night {
            padding-top:74px;
            padding-bottom:84px;
            background-color:#f5f6f8;
            &__center {
                width:1200px;
                margin:0 auto;
            }
            .ambition__content__info {
                width:394px;
                padding-left:82px;
            }
            .ambition__content__green {
                line-height:31px;
                padding-top:19px;
                padding-bottom:8px;
            }
            .ambition__content__detail {
                padding-bottom:28px;
            }
            .ambition__content__img {
                width:642px;
                height:320px;
                padding-left:0;
                background-position:left bottom;
                background-image:url('~assets/images/activity/ambition-02.png');
            }
        }
        &__activity__dream__title {
            line-height:30px;
            padding-bottom:36px;
            text-align:center;
            font-size:24px;
            color:#2b2d33;
            font-weight:normal;
        }
        &__banner {
            width:671px;
            height:423px;
            overflow:hidden;
            float:left;
            position:relative;
            &__center {
                width:7700px;
            }
            &__one {
                width:671px;
                height:423px;
            }
            &__spot {
                position:absolute;
                left:50%;
                bottom:17px;
                z-index: 2;
            }
            &__sone {
                width:4px;
                height:4px;
                margin:0 3px;
                border-radius:4px;
                background-color:#fff;
                float:left;
            }
            &__sone--active {
                width:13px;
            }
        }
        &__advantage {
            padding:0 0 0 66px;
            float:left;
            &__title {
                line-height:76px;
                padding:8px 0 2px 0;
                font-size:24px;
                color:#2b2d34;
                text-align:left;
                font-weight: 600;
                position:relative;
            }
            &__title:after {
                content:"";
                width:25px;
                height:2px;
                background-color:#2b2d34;
                position:absolute;
                left:0;
                bottom:0;
            }
            &__list {
                padding:44px 0 0 0;
            }
            &__li {
                padding:0 0 19px 0;
            }
            &__name {
                line-height:29px;
                color:#00b787;
                text-align:left;
                font-size:18px;
            }
            &__detail {
                width:375px;
                line-height:31px;
                padding:0 0 16px 0;
                border-bottom:1px solid #e7eaf1;
                color:#73798f;
                text-align:left;
                font-size:14px;
            }
            &__li--1 .ambition__advantage__detail {
                border-bottom: 1px solid #e7eaf1;
            }
            &__li--2 .ambition__advantage__detail {
                width:395px;
                border-bottom: none;
            }
        }
        &__activity__page {
            width:100%;
            background:url('~assets/images/activity/line.png') no-repeat center center;
            .ambition__activity__name {
                height:54px;
                line-height:54px;
                padding:30px 0 46px 0;
                text-align:center;
                font-size:24px;
                color:#2b2d33;
                font-weight:600;
            }
        }

        &__img {
            width:100%;
            height:1348px;
            position:relative;
            &__center {
                width:1200px;
                height:1348px;
                position:absolute;
                left:50%;
                margin-left:-600px;
            }
            &__one {
                width:1090px;
                height:1348px;
                margin:0 auto;
            }
            .swiper-slide-shadow-left,
            .swiper-slide-shadow-right {
                // display:none;
            }
            .swiper-slide-prev,
            .swiper-slide-next {
                opacity:0.85;
            }
        }

        &__arrow {
            width:80px;
            height:80px;
            background-repeat:no-repeat;
            background-position:center top;
            position:absolute;
            top:634px;
            &--left {
                left:0;
                background-image:url('~assets/images/activity/ambition-left.png');
            }
            &--right {
                right:0;
                background-image:url('~assets/images/activity/ambition-right.png');
            }
        }
        
        &__link {
            line-height:38px;
            padding:30px 0 44px 0;
            font-size:18px;
            text-align:center;
        }
        &__link__a {
            color:#73798f;
            text-decoration: none;
            cursor: pointer;
        }
        &__link__a:hover {
            text-decoration: none;
        }
        .advantage {
            &__list {
                padding-top:60px;
            }
            &__li {
                height:103px;
            }
            &__name {
                color:#00b38a;
                // font-weight:600;
            }
            &__detail {
                line-height:24px;
            }
        }
    }
</style>