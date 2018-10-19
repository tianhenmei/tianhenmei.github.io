<style lang="scss">
    @import '../css/ads.scss';
</style>
<template>
    <div class="ads">
        <div class="ads__banner"></div>
        <div class="ads__nav" ref="yh-center__nav">
            <div class="ads__nav__layer" :class="{'ads__nav__layer--fixed':tab.fixed}" ref="yh-center__tab">
                <div class="ads__nav__center clearfix">
                    <div class="ads__nav__one" v-for="(one,index) in nav"
                        :class="'ads__nav__one--'+index+(active == index ? ' ads__nav__one--active' : '')"
                        @click.stop.prevent="navChange(index)">
                        <div class="ads__nav__name">{{one.name}}<div class="ads__nav__border"></div></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ads__child">
            <div class="ads__child__layer" ref="ads__child__layer">
                <div class="ads__child__center clearfix" :style="{
                    width:(357 * nav[active].child.length)+'px'
                }">
                    <div class="ads__child__one" v-for="(one,index) in nav[active].child"
                        @click.stop.prevent="moveToChild">
                        <div class="ads__child__icon" :style="{
                            backgroundImage:'url('+(activeChild == index ? one.icon_active : one.icon)+')'
                        }"></div>
                        <div class="ads__child__name">{{one.name}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ads__content" v-for="(item,pindex) in nav" 
            v-show="active == pindex">
            <div class="ads__one" v-for="(one,index) in item.imgs"
                :ref="one.elem"
                :style="{
                    height:one.height+'px',
                    backgroundImage:'url('+one.url+')'
                }"></div>
        </div>
        <yh-form class="form-ads" 
            backgroundColor="#f5f6f8" 
            :titleBg="titleBg"
            :countNum="10"
            ></yh-form>
    </div>
</template>
<script>
    import form from 'components/form.vue';
    export default {
        name:'ads',
        data(){
            return {
                active:0,
                activeChild:-1,
                tab:{
                    offsetTop:0,
                    offsetHeight:0,
                    click_status:false,
                    fixed:false
                },
                nav:[{
                    name:'PCbanner',
                    child:[{
                        icon:require('../assets/images/ads/icon-01.png'),
                        icon_active:require('../assets/images/ads/icon-active-01.png'),
                        name:'核心位置展示'
                    },{
                        icon:require('../assets/images/ads/icon-02.png'),
                        icon_active:require('../assets/images/ads/icon-active-02.png'),
                        name:'所有职位排名提升',
                        imgs:[{

                        }]
                    },{
                        icon:require('../assets/images/ads/icon-03.png'),
                        icon_active:require('../assets/images/ads/icon-active-03.png'),
                        name:'全程品牌策划'
                    }],
                    imgs:[{
                        height:1000,
                        offsetTop:0,
                        status:true,
                        elem:'pc-01',
                        url:require('../assets/images/ads/pc-01.png')
                    },{
                        height:1000,
                        offsetTop:0,
                        status:true,
                        elem:'pc-02',
                        url:require('../assets/images/ads/pc-02.png')
                    },{
                        height:1000,
                        offsetTop:0,
                        status:true,
                        elem:'pc-03',
                        url:require('../assets/images/ads/pc-03.png')
                    },{
                        height:1000,
                        offsetTop:0,
                        status:true,
                        elem:'pc-04',
                        url:require('../assets/images/ads/pc-04.png')
                    }/*,{
                        height:93,
                        offsetTop:0,
                        status:false,
                        elem:'pc-05',
                        url:require('../assets/images/ads/pc-05.png')
                    }*/]
                },{
                    name:'APPbanner',
                    child:[{
                        icon:require('../assets/images/ads/appicon-01.png'),
                        icon_active:require('../assets/images/ads/appicon-active-01.png'),
                        name:'精准匹配目标人群'
                    },{
                        icon:require('../assets/images/ads/appicon-02.png'),
                        icon_active:require('../assets/images/ads/appicon-active-02.png'),
                        name:'超强曝光'
                    },{
                        icon:require('../assets/images/ads/icon-03.png'),
                        icon_active:require('../assets/images/ads/icon-active-03.png'),
                        name:'全程品牌策划'
                    }],
                    imgs:[{
                        height:1000,
                        url:require('../assets/images/ads/app-01.png')
                    },{
                        height:1000,
                        url:require('../assets/images/ads/app-02.png')
                    }/*,{
                        height:93,
                        url:require('../assets/images/ads/pc-05.png')
                    }*/]
                },{
                    name:'APP开屏',
                    child:[{
                        icon:require('../assets/images/ads/appfirst-01.png'),
                        icon_active:require('../assets/images/ads/appfirst-active-01.png'),
                        name:'覆盖APP全人群'
                    },{
                        icon:require('../assets/images/ads/appfirst-02.png'),
                        icon_active:require('../assets/images/ads/appfirst-active-02.png'),
                        name:'雇主形象强感知'
                    }],
                    imgs:[{
                        height:952,
                        url:require('../assets/images/ads/appfirst-banner-01.png')
                    }]
                },{
                    name:'热门公司',
                    child:[{
                        icon:require('../assets/images/ads/company-01.png'),
                        icon_active:require('../assets/images/ads/company-active-01.png'),
                        name:'公司信息首页展示'
                    },{
                        icon:require('../assets/images/ads/icon-02.png'),
                        icon_active:require('../assets/images/ads/icon-active-02.png'),
                        name:'公司排名提升'
                    }],
                    imgs:[{
                        height:1000,
                        url:require('../assets/images/ads/company-banner-01.png')
                    },{
                        height:852,
                        url:require('../assets/images/ads/company-banner-02.png')
                    }]
                },{
                    name:'热门职位',
                    child:[{
                        icon:require('../assets/images/ads/position-01.png'),
                        icon_active:require('../assets/images/ads/position-active-01.png'),
                        name:'职位信息首页展示'
                    },{
                        icon:require('../assets/images/ads/icon-02.png'),
                        icon_active:require('../assets/images/ads/icon-active-02.png'),
                        name:'职位排名提升'
                    }],
                    imgs:[{
                        height:1000,
                        url:require('../assets/images/ads/position-banner-01.png')
                    }]
                }],
                // 表单
                titleBg:require('../assets/images/ads/form-title.png')
            }
        },
        components:{
            'yh-form':form
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
                            top += this.getPX(list[i].top)
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
                        halfWidow = window.innerHeight / 4,
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
                // window.scrollTo(0,nav.offsetTop);
                $('html,body').animate({
                    'scrollTop':nav.offsetTop
                },500);
            },
            moveToChild(){
                let child = this.$refs.ads__child__layer;
                // window.scrollTo(0,child.offsetTop);
                $('html,body').animate({
                    'scrollTop':child.offsetTop
                },500);
            }
        }
    }
</script>