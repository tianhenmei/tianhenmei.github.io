<style lang="scss">
    @import '../css/hunter.scss';
    @import '../css/animation.scss';
</style>
<template>
    <div class="hunter">
        <div class="hunter__banner banner--01">
            <div class="hunter__banner hunter__banner--01"></div>
            <div class="hunter__banner hunter__banner--02"></div>
            <div class="hunter__banner hunter__banner--03"></div>
            <div class="hunter__banner hunter__banner--04"></div>
            <div class="hunter__banner hunter__banner--05"></div>
        </div>
        <div class="hunter__banner banner--02"></div>
        <div class="hunter__talent">
            <div class="hunter__talent__center clearfix">
                <div class="hunter__left">
                    <div class="hunter__one" v-for="(one,index) in hunter"
                        :class="'hunter__one--'+(index+1)+(activeIcon == index ? ' hunter__one--active' : '')"
                        @click.stop.prevent="changeHunter(index)">
                        <div class="hunter__one__icon" :class="'hunter__one__icon--0'+(index+1)"></div>
                        <div class="hunter__one__name strong">{{one.name}}</div>
                    </div>
                </div>
                <div class="hunter__right">
                    <div class="hunter__content" 
                        v-for="(item,pindex) in hunter"
                        :class="'hunter__content--0'+(pindex+1)+(pindex == active ? ' active '+activeClass : '')">
                        <div class="hunter__content__title" 
                            :class="contentStatus(pindex) ? 'opacityChange delay0-3' : showArr.indexOf(pindex) != -1 ? '' : 'initHide'">{{item.name}}</div>
                        <div class="hunter__content__info"
                            :class="contentStatus(pindex) ? 'opacityChange delay0-6' : showArr.indexOf(pindex) != -1 ? '' : 'initHide'">{{item.info}}</div>
                        <ul class="hunter__content__list clearfix" 
                            :class="contentStatus(pindex) ? 'opacityChange delay1-0' : showArr.indexOf(pindex) != -1 ? '' : 'initHide'" ref="hunter__content__list">
                            <li class="hunter__content__li" v-for="(one,index) in item.list">
                                <div class="hunter__content__ratio"><DynamicNumber :num="scrllStatus ? one.ratio : 0" :wait="wait"></DynamicNumber>%</div>
                                <div class="hunter__content__bg">
                                    <div class="hunter__content__progress"
                                        :class="contentStatus(pindex) ? 'heightChange delay1-5' : showArr.indexOf(pindex) != -1 ? '' : 'initHide'" 
                                        :style="{
                                            height:one.ratio+'%'
                                        }"></div>
                                </div>
                                <div class="hunter__content__text">{{one.text}}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="hunter__banner banner--03"></div>
        <yh-form class="form-hunter" 
            backgroundColor="#ffffff" 
            :titleBg="titleBg"
            :formList="formList"
            :countNum="11"
            ></yh-form>
    </div>
</template>
<script>
    import DynamicNumber from 'components/dynamicNumber.vue';
    import form from 'components/form.vue';

    export default {
        name:'hunter',
        data(){
            return {
                showArr:[],
                hunter:[{
                    name:'人才高学历',
                    info:'集中为本科、研究生、博士等',
                    list:[{
                        ratio:5,
                        text:'大专'
                    },{
                        ratio:72,
                        text:'本科'
                    },{
                        ratio:18,
                        text:'研究生'
                    },{
                        ratio:2,
                        text:'博士'
                    }]
                },{
                    name:'行业背景优秀',
                    info:'一线大厂、独角兽公司、B/C轮高速增长公司',
                    list:[{
                        ratio:16,
                        text:'2年+'
                    },{
                        ratio:45,
                        text:'3年+'
                    },{
                        ratio:28,
                        text:'5年+'
                    },{
                        ratio:5,
                        text:'8年+'
                    }]
                },{
                    name:'工作技能专精',
                    info:'算法、AI、大数据、区块链等',
                    list:[{
                        ratio:56,
                        text:'市场'
                    },{
                        ratio:78,
                        text:'产品'
                    },{
                        ratio:62,
                        text:'运营'
                    },{
                        ratio:93,
                        text:'技术'
                    }]
                }],
                active:0,
                activeIcon:0,
                activeClass:'',
                animate:true,
                // 滚动的距离是否开始显示
                scrllStatus:false,
                wait:1500,
                // 表单
                titleBg:require('../assets/images/hunter/form-title.png'),
                formList:[{
                    cn:'联系人姓名',
                    en:'user',
                    validate:'validateNull'
                },{
                    cn:'联系人手机',
                    en:'phone',
                    validate:'validatePhone'
                },{
                    cn:'公司所在地址',
                    en:'address',
                    validate:'validateNull'
                },{
                    cn:'公司名称',
                    en:'name',
                    validate:'validateNull'
                }]
            }
        },
        components:{
            DynamicNumber,
            'yh-form':form
        },
        mounted(){
            let list = this.$refs['hunter__content__list'],
                height = window.innerHeight,
                self = this;
            window.onscroll = scrollEvent;
            function scrollEvent(e){
                let top = e ? e.currentTarget.scrollY : window.scrollY;
                if(list[self.active].offsetTop < (top + height)){
                    self.scrllStatus = true;
                }
            }
            scrollEvent();
        },
        methods:{
            contentStatus(index){
                if(index == this.active && this.showArr.indexOf(index) == -1 && this.scrllStatus && this.animate){
                    return true;
                }
                return false;
            },
            changeHunter(index){
                this.activeClass = 'opacityChange-out';
                this.animate = false;
                this.activeIcon = index;
                setTimeout(() => {
                    this.showArr.push(this.active);
                    this.active = index;
                    this.activeClass = 'opacityChange';
                    this.animate = true;
                },300);
            }
        }
    }
</script>