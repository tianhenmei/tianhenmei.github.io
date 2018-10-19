<template>
    <div class="contrast">
        <div class="contrast__title contrast__title2">案例：{{company}}<span class="contrast__titleside">{{from}}</span></div>
        <div class="contrast__example" v-for="(one,iindex) in example" 
            :ref="'contrast__example'+iindex">
            <div class="contrast__example__data clearfix">
                <div class="contrast__example__progress" :class="scrollStatus ? 'show widthChange delay0-3' : 'initHide'" :style="{width:one.width+'px'}"></div>
                <div class="contrast__example__num">{{one.num}}</div>
            </div>
            <div class="contrast__example__name">{{one.name}}</div>
        </div>
        <div class="contrast__title3">{{title3}}</div>
        <div class="contrast__detail3">{{detail3}}</div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        name:'contrast',
        props:['company','example','from','title3','detail3','parent'],
        computed:{
            ...mapState(['activeActivity'])
        },
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
                    example = this.$refs['contrast__example0'][0],
                    height = window.innerHeight;
                // window.onscroll = (e) => {
                window.addEventListener("scroll",(e) => {
                    let top = e.currentTarget.scrollY;
                    
                    if(self.activeActivity == self.parent && !self.scrollStatus && example.offsetTop < (top + height)){
                        self.scrollStatus = true;
                    }
                },false);
            }
        }
    }
</script>
<style lang="scss">
    .contrast {
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
</style>