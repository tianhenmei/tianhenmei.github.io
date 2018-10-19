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
            <contrast 
                :example="example"
                :company="company"
                :from="from"
                :title3="title3"
                :detail3="detail3"
                :parent="parent"></contrast>
        </div>
    </div>
</template>
<script>
    import contrast from 'components/contrast.vue';
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
            'detail3',
            'parent'
        ],
        components:{
            contrast
        },
        data(){
            return {
                
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