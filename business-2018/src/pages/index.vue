<style lang="scss">
    @import '../css/index.scss';
    @import '../css/animation.scss';
</style>
<template>
    <div class="main">
        <div class="main__banner">
            <div class="main__banner__bg">
                <div class="main__banner__bg--one main__banner__bg--01"></div>
                <div class="main__banner__bg--one main__banner__bg--02"></div>
                <div class="main__banner__bg--one main__banner__bg--03"></div>
                <div class="main__banner__bg--one main__banner__bg--04"></div>
                <div class="main__banner__bg--one main__banner__bg--05"></div>
                <div class="main__banner__bg--one main__banner__bg--06"></div>
                <div class="main__banner__bg--one main__banner__bg--07"></div>
                <div class="main__banner__bg--one main__banner__bg--08"></div>
            </div>
            <div class="main__banner__center clearfix">
                <div class="main__banner__left">
                    <img class="main__banner__title" src="~assets/images/main/banner2-title@2.png" /><!-- titleMove2 delay0-5-->
                    <img class="main__banner__subtitle" src="~assets/images/main/banner2-subtitle@2.png"/> <!-- subtitleMove2-->
                </div>
                <div class="main__banner__picture pictureMove2">
                    <div class="main__banner__picture--one main__banner__picture--01"></div>
                    <div class="main__banner__picture--one main__banner__picture--02"></div>
                    <div class="main__banner__picture--one main__banner__picture--03"></div>
                    <div class="main__banner__picture--one main__banner__picture--04"></div>
                    <div class="main__banner__picture--one main__banner__picture--05"></div>
                    <div class="main__banner__picture--one main__banner__picture--06"></div>
                    <div class="main__banner__picture--one main__banner__picture--07"></div>
                    <div class="main__banner__picture--one main__banner__picture--08"></div>
                </div>
                <div class="main__banner__cloundLayer1 cloudLayer1Move2">
                    <div class="main__banner__cloud01 cloud1Move2"></div>
                </div>
                <div class="main__banner__cloundLayer2 cloudLayer2Move2">
                    <div class="main__banner__cloud02 cloud2Move2"></div>
                </div>
                <div class="main__banner__ballonLayer ballonLayerMove2">
                    <div class="main__banner__ballon balloonMove2"></div>
                </div>
            </div>
            
            <!--<div class="main__banner__bg" :class="'zoomBigIn delay1-0'"></div>-->
        </div>
        <div class="main__data">
            <div class="main__data__center clearfix" ref="main__data__center">
                <div class="main__data__one main__data__one--1 clearfix">
                    <div class="main__data__icon"></div>
                    <div class="main__data__left">
                        <div class="main__data__num strong"><DynamicNumber :num="scrllStatus ? 40 : 0" :wait="0"></DynamicNumber>万+</div>
                        <div class="main__data__content">互联网公司</div>
                    </div>
                </div>
                <div class="main__data__one main__data__one--2 clearfix">
                    <div class="main__data__icon"></div>
                    <div class="main__data__left">
                        <div class="main__data__num strong"><DynamicNumber :num="scrllStatus ? 1954 : 0" :wait="0"></DynamicNumber>万+</div>
                        <div class="main__data__content">互联网人</div>
                    </div>
                </div>
                <div class="main__data__one main__data__one--3 clearfix">
                    <div class="main__data__icon"></div>
                    <div class="main__data__left">
                        <div class="main__data__num strong"><DynamicNumber :num="scrllStatus ? 909 : 0" :wait="0"></DynamicNumber>万+</div>
                        <div class="main__data__content">每月投递简历</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main__content">
            <div class="main__content__center">
                <img class="main__content__title" src="~assets/images/main/content-title.png"/>
                <ul class="main__content__list clearfix">
                    <li class="main__content__li" v-for="(one,index) in content"
                        :class="'main__content__li--'+index">
                        <!--:data-lg-tj-id="countId" 
                        :data-lg-tj-no="getCount(index+1)" 
                        :data-lg-tj-cid="null"
                        @click="toChildActivity(one.href)">-->
                        <!--<router-link :to="{ name: one.href }" class="main__content__lilink">-->
                        <a class="main__content__lilink" target="_blank" :href="'#/'+one.href"
                            v-if="index % 2 == 0"
                            :data-lg-tj-id="countId" 
                            :data-lg-tj-no="getCount(index+1)" 
                            :data-lg-tj-cid="null">
                            <div class="main__content__one clearfix" :class="'main__content__one--'+index">
                                <div class="main__content__icon" :class="'main__content__icon--'+index"></div>
                                <div class="main__content__right" v-if="one.img">
                                    <img class="main__content__img" :src="one.img" :style="{
                                        width:one.width+'px',
                                        paddingTop:'20px'
                                    }" />
                                    <div class="main__content__link">了解详情 ></div>
                                </div>
                                <div class="main__content__right" v-else>
                                    <div class="main__content__name">{{one.name}}</div>
                                    <div class="main__content__detail" v-html="one.detail"></div>
                                    <!--<router-link :to="{ name: one.href }" class="main__content__link">了解详情</router-link>-->
                                    <div class="main__content__link">了解详情 ></div>
                                </div>
                            </div>
                        <!--</router-link>-->
                        </a>
                        <a class="main__content__lilink" target="_blank" :href="'#/'+one.href"
                            v-else
                            :data-lg-tj-id="countId" 
                            :data-lg-tj-no="getCount(index+1)" 
                            :data-lg-tj-cid="null">
                            <div class="main__content__one clearfix" :class="'main__content__one--'+index">
                                <div class="main__content__right" v-if="one.img">
                                    <img class="main__content__img" :src="one.img" :style="{
                                        width:one.width+'px',
                                        paddingTop:'20px'
                                    }" />
                                    <div class="main__content__link">了解详情 ></div>
                                </div>
                                <div class="main__content__right" v-else>
                                    <div class="main__content__name">{{one.name}}</div>
                                    <div class="main__content__detail" v-html="one.detail"></div>
                                    <div class="main__content__link">了解详情 ></div>
                                </div>
                                <div class="main__content__icon" :class="'main__content__icon--'+index"></div>
                            </div>
                        </a>
                    </li>
                </ul>
                <div class="main__content__tree tree01 main__content__tree--01"></div>
                <div class="main__content__tree tree01 main__content__tree--02"></div>
                <div class="main__content__tree tree03 main__content__tree--03"></div>
                <div class="main__content__tree tree02 main__content__tree--04"></div>
                <div class="main__content__tree tree02 main__content__tree--05"></div>
            </div>
        </div>
        <div class="main__corpartner"></div>
        <div class="main__advantage">
            <!--<div class="main__advantage2"></div>-->
            <img class="main__advantage__title" src="~assets/images/main/advantage-title@2.png"/>
            <div class="main__advantage__center clearfix">
                <ul class="main__advantage__list">
                    <li class="main__advantage__one" v-for="(one,index) in advantage"
                        :class="'main__advantage__one--'+index">
                        <div class="main__advantage__icon"></div>
                        <div class="main__advantage__name">{{one.name}}</div>
                        <div class="main__advantage__content" v-html="one.detail"></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import DynamicNumber from 'components/dynamicNumber.vue';
    export default {
        name:'index',
        computed:{
            ...mapState(['countId'])
        },
        components:{
            DynamicNumber
        },
        data(){
            return {
                content:[{
                    name:"拉勾招聘套餐",
                    detail:"发布职位<span class='green'>自带特权</span>，<span class='green'>职位置顶</span>海量曝光<br/>电话直Call中意大咖， 满足多样招聘需求",
                    href:"set",
                    img:require('../assets/images/main/content2-01@2.png'),
                    width:722 / 2
                },{
                    name:"拉勾猎头",
                    detail:"精英猎头团队，为您推荐<span class='green'>资深高端</span>互联网人才<br/><span class='green'>提供保到面/保offer/保入职</span>等多种服务",
                    href:"hunter",
                    img:require('../assets/images/main/content2-02@2.png'),
                    width:722 / 2
                },{
                    name:"广告展示",
                    detail:"拉勾站内<span class='green'>核心职位</span>展示，强化雇主印象<br/><span class='green'>专业策划</span>主题招聘，打造最闪耀的雇主品牌  ",
                    href:"ads",
                    img:require('../assets/images/main/content2-03@2.png'),
                    width:684 / 2
                },{
                    name:"品牌活动",
                    detail:"<span class='green'>多渠道</span>超强曝光，旺季把握招聘先机<br/>抢占<span class='green'>大量优质</span>人才，塑造立体雇主形象",
                    href:"activity",
                    img:require('../assets/images/main/content2-04@2.png'),
                    width:612 / 2
                }],
                advantage:[{
                    name:"最优质",
                    detail:"<span class='green'>200+</span> 拉勾自营猎头<br/>拉勾独有高端人才库<br/>人工筛选最优质人才"
                },{
                    name:"最有效",
                    detail:"<span class='green'>BAT</span>、<span class='green'>TMD</span>互联网人才招聘NO.1渠道<br/>百度、今日头条产研职位只在拉勾发布<br/><span class='green'>B轮</span>以上公司，<span class='green'>60%</span>互联网人才来自拉勾"
                },{
                    name:"最具实力",
                    detail:"3次<span class='green'>李克强</span>总理接见<br/>4年完成<span class='green'>5</span>轮融资<br/>已进入<span class='green'>IPO</span>筹备阶段"
                }],
                bannerList:[
                    {
                        url:require('../assets/images/main/banner_01.png'),
                        height:50
                    },{
                        url:require('../assets/images/main/banner_02.png'),
                        height:51
                    },{
                        url:require('../assets/images/main/banner_03.png'),
                        height:50
                    },{
                        url:require('../assets/images/main/banner_04.png'),
                        height:50
                    },{
                        url:require('../assets/images/main/banner_05.png'),
                        height:51
                    },{
                        url:require('../assets/images/main/banner_06.png'),
                        height:50
                    },{
                        url:require('../assets/images/main/banner_07.png'),
                        height:50
                    },{
                        url:require('../assets/images/main/banner_08.png'),
                        height:51
                    },{
                        url:require('../assets/images/main/banner_09.png'),
                        height:50
                    },{
                        url:require('../assets/images/main/banner_10.png'),
                        height:50
                    },{
                        url:require('../assets/images/main/banner_11.png'),
                        height:51
                    },{
                        url:require('../assets/images/main/banner_12.png'),
                        height:50
                    },{
                        url:require('../assets/images/main/banner_13.png'),
                        height:50
                    },{
                        url:require('../assets/images/main/banner_14.png'),
                        height:51
                    },{
                        url:require('../assets/images/main/banner_15.png'),
                        height:50
                    },{
                        url:require('../assets/images/main/banner_16.png'),
                        height:50
                    },{
                        url:require('../assets/images/main/banner_17.png'),
                        height:51
                    },{
                        url:require('../assets/images/main/banner_18.png'),
                        height:50
                    },{
                        url:require('../assets/images/main/banner_19.png'),
                        height:50
                    },{
                        url:require('../assets/images/main/banner_20.png'),
                        height:51
                    },{
                        url:require('../assets/images/main/banner_21.png'),
                        height:50
                    },{
                        url:require('../assets/images/main/banner_22.png'),
                        height:50
                    },{
                        url:require('../assets/images/main/banner_23.png'),
                        height:51
                    },{
                        url:require('../assets/images/main/banner_24.png'),
                        height:50
                    }
                ],
                scrllStatus:false
            }
        },
        mounted(){
            // setTimeout(() => {
            //     this.scrllStatus = true;
            // },300);
            let list = this.$refs['main__data__center'],
                height = window.innerHeight,
                self = this;
            window.onscroll = scrollEvent;
            function scrollEvent(e){
                let top = e ? e.currentTarget.scrollY : window.scrollY;
                if(list.offsetTop < (top + height)){
                    self.scrllStatus = true;
                }
            }
            scrollEvent();
        },
        methods:{
            getCount(num) {
                return '0000'.slice((num + '').length) + num;
            },
            getIndex(one){
                return '00'.slice((one + '').length) + one;
            },
            toChildActivity(href){
                window.location.href = '#/'+href
            }
        }
    }
</script>