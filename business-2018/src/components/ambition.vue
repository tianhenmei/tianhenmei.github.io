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
            <contrast
                :example="example"
                :company="company"
                :from="from"
                :title3="title3"
                :detail3="detail3"></contrast>
        </div>
        <div class="ambition__activity__page">
            <div class="ambition__activity__name">活动解析</div>
        </div>
        <div class="ambition__activity__dream">
            <div class="ambition__activity__dream__title">{{dream.title}}</div>
            <div class="ambition__activity__dream__info">
                <div class="ambition__activity__dream__one" v-for="(one,index) in dream.info">{{one}}</div>
            </div>
        </div>
        <div class="ambition__img ambition__img--01"></div>
        <div class="ambition__img ambition__img--02"></div>
        <div class="ambition__img ambition__img--03"></div>
        <div class="ambition__img ambition__img--04"></div>
        <div class="ambition__img ambition__img--05"></div>
        <div class="ambition__link">
            <a class="ambition__link__a" :href="link" target="_blank">线上活动链接 ></a>
        </div>
    </div>
</template>
<script>
    import contrast from 'components/contrast.vue';
    export default {
        name:'ambition',
        components: {
            contrast
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
                link:'https://activity.lagou.com/activity/dist/ambition2017/pc/index.html',
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
            height:782px;
            background:url('~assets/images/activity/ambition-bg.png') no-repeat center top;
            &__layer {
                width:1200px;
                margin:0 auto;
            }
            &__center {
                padding:83px 0 0 25px;
            }
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
        &__activity__dream {
            width:1200px;
            margin:0 auto;
            &__title {
                line-height:36px;
                margin-left: -10px;
                font-size:20px;
                color:#2b2d33;
                text-align:left;
                font-weight:600;
            }
            &__info {
                padding-top:4px;
                padding-bottom:26px;
            }
            &__one {
                line-height:26px;
                font-size:14px;
                color:#73798f;
                text-align:left;
            }
        }

        &__img {
            width:100%;
            background-repeat:no-repeat;
            background-position:center bottom;
        }
        &__img--01 {
            height:410px;
            background-image:url('~assets/images/activity/ambition-01.png');
        }
        &__img--02 {
            height:411px;
            background-image:url('~assets/images/activity/ambition-02.png');
        }
        &__img--03 {
            height:410px;
            background-image:url('~assets/images/activity/ambition-03.png');
        }
        &__img--04 {
            height:410px;
            background-image:url('~assets/images/activity/ambition-04.png');
        }
        &__img--05 {
            height:411px;
            background-image:url('~assets/images/activity/ambition-05.png');
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