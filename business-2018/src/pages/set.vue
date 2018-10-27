<style lang="scss">
    @import '../css/set.scss';
</style>
<template>
    <div class="package">
        <div class="package__banner package--01">
            <img class="img__one"
                v-for="(item,iindex) in bannerList" 
                :src="item.url"
                :style="{
                    height:item.height+'px'
                }" />
        </div>
        <div class="package__banner package--02"></div>
        <div class="package__banner package--02_01"></div>
        <div class="package__banner package--03"></div>
        <div class="package__banner package--04"></div>
        <div class="package__banner package--05"></div>
        <yh-form :countNum="12" extend1="LGJ"></yh-form>
    </div>
</template>
<script>
    import form from 'components/form.vue';
    export default {
        name:'set',
        data(){
            return {
                bannerList:[
                    {
                        url:require('../assets/images/set/1_01.png'),
                        height:48
                    },{
                        url:require('../assets/images/set/1_02.png'),
                        height:47
                    },{
                        url:require('../assets/images/set/1_03.png'),
                        height:48
                    },{
                        url:require('../assets/images/set/1_04.png'),
                        height:48
                    },{
                        url:require('../assets/images/set/1_05.png'),
                        height:47
                    },{
                        url:require('../assets/images/set/1_06.png'),
                        height:48
                    },{
                        url:require('../assets/images/set/1_07.png'),
                        height:48
                    },{
                        url:require('../assets/images/set/1_08.png'),
                        height:47
                    },{
                        url:require('../assets/images/set/1_09.png'),
                        height:48
                    },{
                        url:require('../assets/images/set/1_10.png'),
                        height:48
                    },{
                        url:require('../assets/images/set/1_11.png'),
                        height:47
                    },{
                        url:require('../assets/images/set/1_12.png'),
                        height:48
                    },{
                        url:require('../assets/images/set/1_13.png'),
                        height:48
                    },{
                        url:require('../assets/images/set/1_14.png'),
                        height:47
                    },{
                        url:require('../assets/images/set/1_15.png'),
                        height:48
                    }
                ]
            }
        },
        components:{
            'yh-form':form
        }
    }
</script>