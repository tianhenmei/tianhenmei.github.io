<template>
    <div class="advantage" :class="classname">
        <div class="advantage__center">
            <div class="advantage__title">活动亮点</div>
            <div class="advantage__list clearfix">
                <div class="advantage__li clearfix" v-for="(one,index) in advantage"
                    :class="'advantage__li--'+index">
                    <div class="advantage__icon" :style="{
                        backgroundImage:'url('+one.icon+')'
                    }"></div>
                    <div class="advantage__text">
                        <div class="advantage__name">{{one.name}}</div>
                        <div class="advantage__detail">{{one.detail}}</div>
                    </div>
                </div>
            </div>
            <div class="advantage__title" v-if="effect">活动效果</div>
            <div class="advantage__effect" v-if="effect">
                <div class="advantage__effect__list clearfix">
                    <div class="advantage__effect__li" v-for="(one,index) in effect">
                        <div class="advantage__effect__name">{{one.name}}</div>
                        <div class="advantage__effect__info">{{one.info}}</div>
                    </div>
                </div>
            </div>
            <div class="advantage__title advantage__title2">案例：{{company}}<span class="advantage__titleside">{{from}}</span></div>
            <div class="advantage__example" v-for="(one,iindex) in example" 
                :ref="'advantage__example'+iindex">
                <div class="advantage__example__data clearfix">
                    <div class="advantage__example__progress" :class="scrollStatus ? 'show widthChange delay0-3' : 'initHide'" :style="{width:one.width+'px'}"></div>
                    <div class="advantage__example__num">{{one.num}}</div>
                </div>
                <div class="advantage__example__name">{{one.name}}</div>
            </div>
            <div class="advantage__title3">{{title3}}</div>
            <div class="advantage__detail3">{{detail3}}</div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'advantage',
        props:[
            'classname',
            'advantage',
            'effect',
            'example',
            'company',
            'from',
            'title3',
            'detail3'
        ],
        data(){
            return {
                scrollStatus:false
            }
        },
        mounted(){
            this.initWindowScrollEvent();
        },
        methods:{
            initWindowScrollEvent(){
                let self = this,
                    example = this.$refs['advantage__example0'][0],
                    height = window.innerHeight;
                // window.onscroll = (e) => {
                window.addEventListener("scroll",(e) => {
                    let top = e.currentTarget.scrollY;
                    if(!self.scrollStatus && example.offsetTop < (top + height)){
                        self.scrollStatus = true;
                    }
                },false);
            }
        }
    }
</script>
<style lang="scss">
    .advantage {
        width:100%;
        height:896px;
        &__center {
            width:1004px;
            padding:59px 60px 0 38px;
            margin:0 auto;
        }
        &__title {
            height:82px;
            line-height:82px;
            padding:11px 0 0 0;
            border-bottom:1px solid #e6eaf2;
            font-size:24px;
            color:#2b2d34;
            text-align:left;
            font-weight: 600;
        }
        &__titleside {
            color:#73798f;
            font-size:14px;
            font-weight: normal;
        }
        &__list {
            padding:42px 0 6px 0;
        }
        &__li {
            width:450px;
            height:115px;
            float:left;
        }
        &__icon {
            width:55px;
            height:55px;
            padding:8px 0 0 0;
            background-repeat:no-repeat;
            background-position:center bottom;
            float:left;
        }
        &__text {
            padding:0 0 0 22px;
            float:left;
        }
        &__name {
            line-height:40px;
            color:#2b2d34;
            font-size:20px;
            text-align:left;
        }
        &__detail {
            line-height:27px;
            color:#73798f;
            font-size:14px;
            text-align:left;
        }

        &__effect {
            padding:29px 0 0 0;
            &__list {
                height:100px;
            }
            &__li {
                width:419px;
                float:left;
            }
            &__name {
                line-height:39px;
                font-size:20px;
                color:#00b787;
                text-align:left;
                font-weight:600;
            }
            &__info {
                line-height:31px;
                font-size:14px;
                color:#73798f;
                text-align:left;
            }
        }


        &__title2 {
            margin:0 0 19px 0;
        }
        &__example {
            
        }
        &__example__data {
            padding:21px 0 0 0;
        }
        &__example__progress {
            height:18px;
            background-color:#00b38a;
            float:left;
        }
        &__example__num {
            line-height:18px;
            padding:0 0 0 16px;
            font-size:14px;
            color:#00b38a;
            text-align:left;
            float:left;
        }
        &__example__name {
            line-height:32px;
            color:#73798f;
            font-size:14px;
            text-align:left;
        }

        &__title3 {
            line-height:41px;
            padding:31px 0 0 0;
            font-size:20px;
            color:#2b2d34;
            font-weight:600;
            text-align:left;
        }
        &__detail3 {
            line-height:35px;
            font-size:14px;
            color:#73798f;
            text-align:left;
        }
        .initHide {
            opacity:0;
        }
        .show {
            opacity:1;
        }
    }

    .promotion__advantage {
        .advantage__li {
            width:418px;
            height:152px;
        }
        .advantage__li--2 {
            width:168px;
        }
        .advantage__icon {
            float:none;
        }
        .advantage__text {
            padding-left:0;
            float:none;
        }
        .advantage__detail {
            width:182px;
            line-height:24px;
            padding:16px 0 0 0;
        }
    }
    @import '../css/animation.scss';
</style>