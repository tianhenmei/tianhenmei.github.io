<template>
    <div class="summit">
        <div class="summit__top clearfix">
            <div class="summit__left">
                <img class="summit__mac" :src="mac" />
            </div>
            <div class="summit__right">
                <div class="summit__right__title__start">{{start}}</div>
                <div class="summit__right__title clearfix">
                    <div class="summit__right__title__name">{{name2}}</div>
                    <div class="summit__right__title__time" 
                            :style="{
                            backgroundImage:'url('+time+')'
                        }">{{time_text}}</div>
                </div>
                <div class="summit__right__info">{{info}}</div>
                
                <div class="summit__right__t"></div>
                <div class="summit__right__ta" 
                    v-for="(one,index) in tarr">{{one}}</div>
                
                <div class="summit__right__btn clearfix">
                    <a class="summit__right__btn__center" :href="link" target="_blank">在线查看</a>
                </div>
            </div>
        </div>
        <div class="summit__content">
            <div class="summit__content__layer">
                <div class="summit__content__center clearfix">
                    <div class="summit__banner">
                        <div class="summit__banner__center clearfix"
                            :style="{
                                width:summitWidth * banner.length + 'px'
                            }">
                            <img class="summit__banner__one"
                                v-for="(one,index) in banner"
                                :src="one" />
                        </div>
                    </div>
                    <div class="summit__advantage">
                        <div class="summit__advantage__title">活动亮点</div>
                        <div class="summit__advantage__list">
                            <div class="summit__advantage__li" v-for="(one,index) in advantage"
                                :class="'summit__advantage__li--'+index">
                                <div class="summit__advantage__name strong">{{one.name}}</div>
                                <div class="summit__advantage__detail">{{one.detail}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="summit__activity__page">
            <div class="summit__activity__name">活动解析</div>
        </div>
        <div class="summit__img summit__img--01"></div>
        <div class="summit__img summit__img--02">
            <div class="summit__img__center">
                <div class="summit__img__title">行业大咖分享</div>
                <div class="summit__img__detail">一次人力资源管理科学与<br/>实践的激烈碰撞</div>
            </div>
        </div>
        <div class="summit__img summit__img--03">
            <div class="summit__img__center summit__img__center--right">
                <div class="summit__img__title">独角兽企业HRD分<br/>享经验</div>
                <div class="summit__img__detail">共同探讨当下热门的专业话<br/>题，领会行业大咖独到见解</div>
            </div>
        </div>
        <div class="summit__img summit__img--04"></div>
        <div class="summit__link">
            <a class="summit__link__a" :href="link" target="_blank">线上活动链接 ></a>
        </div>
    </div>
</template>
<script>
    export default {
        name:'summit',
        data(){
            return {
                name:'互联网人才官领袖峰会',
                start:'中国互联网人才官',
                name2:'领袖峰会',
                mac:require('../assets/images/activity/summit-mac.png'),
                time:require('../assets/images/activity/summit-time.png'),
                time_text:'每年6月/线下活动',
                info:'在人力资源行业最顶级的峰会曝光品牌',
                tarr:[
                    '一次专属互联网圈的人力资源行业盘点',
                    '一次人力资源管理科学与实践的激烈碰撞',
                    '一场HR实战经验的经典传承'
                ],
                link:'https://activity.lagou.com/topic/rencaiguanfenghui.html',
                banner:[
                    require('../assets/images/activity/summit-banner.png')
                ],
                summitWidth:671,
                advantage:[{
                    name:'洞察行业',
                    detail:'人力资源顶级大咖演讲，让公司驾驭组织变革时代',
                },{
                    name:'STAR101',
                    detail:'邀请华为、腾讯等101位HR高管出席，同道分享最佳实践',
                },{
                    name:'颁奖晚宴',
                    detail:'颁发人力资源最有影响力的超级雇主奖，打造强力雇主品牌',
                }]
            }
        }
    }
</script>
<style lang="scss">
    .summit {
        &__top {
            width:1200px;
            padding:81px 0 72px 0;
            margin:0 auto;
        }
        &__left {
            padding:0 108px 0 140px;
            float:left;
        }
        &__mac {
            width:399px;
            height:322px;
        }
        &__right {
            padding:8px 0 0 0;
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
                    width:156px;
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
            &__t {
                height:18px;
            }
            &__ta {
                line-height:35px;
                padding:0 0 0 15px;
                color:#828799;
                font-size:18px;
                text-align:left;
                position:relative;
            }
            &__ta:before {
                content:"";
                width:6px;
                height:6px;
                border-radius:6px;
                background-color:#73798f;
                position:absolute;
                left:0;
                top:15px;
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
            height:574px;
            background:url('~assets/images/activity/summit-bg.png') no-repeat center top;
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
            &__li--1 .summit__advantage__detail {
                border-bottom: 1px solid #e7eaf1;
            }
            &__li--2 .summit__advantage__detail {
                width:395px;
                border-bottom: none;
            }
        }
        &__activity__page {
            width:100%;
            background:url('~assets/images/activity/line.png') no-repeat center center;
            .summit__activity__name {
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
            background-repeat:no-repeat;
            background-position:center bottom;
        }
        &__img--01 {
            height:362px;
            background-image:url('~assets/images/activity/summit-01.png');
        }
        &__img--02 {
            width:1200px;
            height:278px;
            padding-top:69px;
            margin: 0 auto;
            background-image:url('~assets/images/activity/summit-02.png');
        }
        &__img--03 {
            width:1201px;
            height:307px;
            padding-top:69px;
            margin: 0 auto;
            background-image:url('~assets/images/activity/summit-03.png');
        }
        &__img--04 {
            height:461px;
            padding-top:70px;
            background-image:url('~assets/images/activity/summit-04.png');
        }
        &__img__center {
            padding-left:29px;
        }
        &__img__center--right {
            padding-left:992px;
        }
        &__img__title {
            line-height:62px;
            padding:25px 0 0 0;
            font-size:20px;
            color:#2b2d33;
            font-weight:600;
            text-align:left;
            position:relative;
        }
        &__img__title:after {
            content:"";
            width:23px;
            height:2px;
            background-color:#28b567;
            position:absolute;
            left:3px;
            bottom:0;
        }
        &__img__detail {
            line-height:24px;
            padding-top:14px;
            font-size:14px;
            color:#2b2d33;
            text-align:left;
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
    }
</style>