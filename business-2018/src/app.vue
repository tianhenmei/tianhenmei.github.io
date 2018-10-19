<style lang="scss">
    @import 'css/init.scss';
    @import 'css/index.scss';
</style>
<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name:'app',
        data(){
            return {

            }
        },
        mounted(){
            this.$store.dispatch('getUserData',{});/*.then(data => {
                // if(data.state == 200){

                // }
            });*/
        },
        methods:{
            
        }
    }
</script>