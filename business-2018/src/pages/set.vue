<style lang="scss">
    @import '../css/set.scss';
</style>
<template>
    <div class="package">
        <div class="package__banner package--01"></div>
        <div class="package__banner package--02"></div>
        <div class="package__banner package--02_01"></div>
        <div class="package__banner package--03"></div>
        <div class="package__banner package--04"></div>
        <div class="package__banner package--05"></div>
        <yh-form :countNum="12"></yh-form>
    </div>
</template>
<script>
    import form from 'components/form.vue';
    export default {
        name:'set',
        data(){
            return {

            }
        },
        components:{
            'yh-form':form
        }
    }
</script>