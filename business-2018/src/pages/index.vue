<style lang="scss">
    @import '../css/index.scss';
</style>
<template>
    <div class="main">
        <div class="main__banner">
            <div class="main__banner__center">
                <img class="main__banner__name" src="~assets/images/main/banner-name@2.png"/>
                <img class="main__banner__title" src="~assets/images/main/banner-title@2.png" />
                <img class="main__banner__subtitle" src="~assets/images/main/banner-subtitle@2.png"/>
            </div>
        </div>
        <div class="main__data">
            <div class="main__data__center clearfix" ref="main__data__center">
                <div class="main__data__one main__data__one--1">
                    <div class="main__data__icon"></div>
                    <div class="main__data__num"><DynamicNumber :num="scrllStatus ? 36 : 0" :wait="0"></DynamicNumber>万+</div>
                    <div class="main__data__content">互联网公司</div>
                </div>
                <div class="main__data__one main__data__one--2">
                    <div class="main__data__icon"></div>
                    <div class="main__data__num"><DynamicNumber :num="scrllStatus ? 1954 : 0" :wait="0"></DynamicNumber>万+</div>
                    <div class="main__data__content">互联网人</div>
                </div>
                <div class="main__data__one main__data__one--3">
                    <div class="main__data__icon"></div>
                    <div class="main__data__num"><DynamicNumber :num="scrllStatus ? 909 : 0" :wait="0"></DynamicNumber>万+</div>
                    <div class="main__data__content">每月投递简历</div>
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
                            :data-lg-tj-id="countId" 
                            :data-lg-tj-no="getCount(index+1)" 
                            :data-lg-tj-cid="null">
                            <div class="main__content__one">
                                <div class="main__content__icon" :class="'main__content__icon--'+index"></div>
                                <div class="main__content__name">{{one.name}}</div>
                                <div class="main__content__detail" v-html="one.detail"></div>
                                <!--<router-link :to="{ name: one.href }" class="main__content__link">了解详情</router-link>-->
                                <div class="main__content__link">了解详情</div>
                            </div>
                        <!--</router-link>-->
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="main__corpartner"></div>
        <div class="main__advantage">
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
                    href:"set"
                },{
                    name:"拉勾猎头",
                    detail:"精英猎头团队，为您推荐<span class='green'>资深高端</span>互联网人才<br/><span class='green'>提供保到面/保offer/保入职</span>等多种服务",
                    href:"hunter"
                },{
                    name:"广告展示",
                    detail:"拉勾站内<span class='green'>核心职位</span>展示，强化雇主印象<br/><span class='green'>专业策划</span>主题招聘，打造最闪耀的雇主品牌  ",
                    href:"ads"
                },{
                    name:"品牌活动",
                    detail:"<span class='green'>多渠道</span>超强曝光，旺季把握招聘先机<br/>抢占<span class='green'>大量优质</span>人才，塑造立体雇主形象",
                    href:"activity"
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
                scrllStatus:false
            }
        },
        mounted(){
            // setTimeout(() => {
            //     this.scrllStatus = true;
            // },300);
            let list = this.$refs['main__data__center'],
                height = window.innerHeight;
            window.onscroll = (e) => {
                let top = e.currentTarget.scrollY;
                if(list.offsetTop < (top + height)){
                    this.scrllStatus = true;
                }
            };
        },
        methods:{
            getCount(num) {
                return '0000'.slice((num + '').length) + num;
            },
            toChildActivity(href){
                window.location.href = '#/'+href
            }
        }
    }
</script>