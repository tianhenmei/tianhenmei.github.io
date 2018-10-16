<template>
    <div class="dialog">
        <div class="dialog__center">
            <div class="dialog__head">
                <div class="dialog__title" v-if="!!title.cid" :is="title"></div>
                <div class="dialog__title" v-else v-html="title"></div>
            </div>
            <div class="dialog__body">
                <div class="dialog__content" v-if="!!content.cid" :is="content"></div>
                <div class="dialog__content" v-html="content"></div>
            </div>
            <div class="dialog__footer clearfix">
                <div class="dialog__cancel" v-if="mode == 'confirm'" @click.stop.prevent="undoEvent">取消</div>
                <div class="dialog__confirm" :class="{'dialog__confirm--primary':mode != 'confirm'}" @click.stop.prevent="confirmEvent">确定</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'Dialog',
        props:{
            mode:"",
            title:{
                default:''
            },
            content:{
                default:''
            }
        },
        data(){
            return {

            }
        },
        methods:{
            undoEvent(){
                this.$emit('toggleDialog',false);
            },
            confirmEvent(){
                this.$emit('toggleDialog',false);
            }
        }
    }
</script>
<style lang="scss">
    .dialog {
        width:100%;
        height:100%;
        position:fixed;
        left:0;
        top:0;
        z-index:9999;
        background-color:#000;
        background:rgba(0,0,0,0.5);
        filter:Alpha(opacity=50);
        *zoom:1;
        &__center {
            min-width: 200px;
            min-height: 110px;
            padding:0 20px;
            border-radius:8px;
            background-color:#fff;
            position:absolute;
            left:50%;
            top:50%;
            transform:translate(-50%,-50%);
        }
        &__head {
            padding:10px 0;
        }
        &__title {
            // line-height:36px;
            font-size:18px;
            font-weight:600;
            color:#3e4047;
            text-align:center;
        }
        &__body {
            padding:10px 0;
        }
        &__content{
            line-height:24px;
            font-size:14px;
            color:#3e4047;
            text-align:center;
        }
        &__footer {
            padding:10px 0 20px 0;
        }
        &__cancel,
        &__confirm {
            width: 40%;
            height: 36px;
            line-height: 36px;
            margin:0 auto;
            border-radius:8px;
            background-color:#09C084; /* #00b38a */;
            color:#fff;
            font-size:16px;
            text-align:center;
            cursor:pointer;
            float: left;
        }
        &__cancel {
            margin:0 10% 0 5%;
            background-color:#999;
        }
        &__confirm--primary {
            width: 75%;
            float: none;
        }
    }
</style>