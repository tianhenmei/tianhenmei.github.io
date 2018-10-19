<template>
    <div class="form" :style="{
            backgroundColor:backgroundColor
        }">
        <div class="form__title" :style="getTitleBg"></div>
        <div class="form__center">
            <div class="form__content">
                <div class="form__one" v-for="(one,index) in formList">
                    <div class="form__one__name">{{one.cn}}</div>
                    <input class="form__one__input" type="text" v-model="form[one.en]" @input.stop.prevent="_self[one.validate](one.en)" />
                    <div class="form__one__tips" v-show="$data[one.en+'False']">* 请输入{{(one.validate == 'validateNull' ? '' : '正确的')+one.cn}}</div>
                </div>
                <!--<div class="form__one">
                    <div class="form__one__name">企业名称</div>
                    <input class="form__one__input" type="text" v-model="form.name" @input.stop.prevent="validateNull('name')" />
                    <div class="form__one__tips" v-show="nameFalse">* 请输入企业名称</div>
                </div>
                <div class="form__one">
                    <div class="form__one__name">联系人名称</div>
                    <input class="form__one__input" type="text" v-model="form.user" @input.stop.prevent="validateNull('user')" />
                    <div class="form__one__tips" v-show="userFalse">* 请输入联系人名称</div>
                </div>
                <div class="form__one">
                    <div class="form__one__name">联系电话</div>
                    <input class="form__one__input" type="text" v-model="form.phone" @input.stop.prevent="validatePhone" />
                    <div class="form__one__tips" v-show="phoneFalse">* 请输入正确的联系电话</div>
                </div>
                <div class="form__one">
                    <div class="form__one__name">邮箱</div>
                    <input class="form__one__input" type="text" v-model="form.email" @input.stop.prevent="validateEmail" />
                    <div class="form__one__tips" v-show="emailFalse">* 请输入正确的邮箱</div>
                </div>-->
            </div>
            <div class="form__tips">友情提醒：提交信息，我们的营销顾问将为您提供服务</div>
            <div class="form__btn" @click.stop.prevent="postForm">提交信息</div>
        </div>
        <Dialog v-show="dialogStatus" :title="title" :content="content" @toggleDialog="toggleDialog"></Dialog>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import Dialog from 'components/Dialog.vue';

    export default {
        name:'yh-form',
        components:{
            Dialog
        },
        props:{
            backgroundColor:{
                default:'#161718'
            },
            titleBg:'',
            formList:{
                type:Array,
                default(){
                    return [{
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
            }
        },
        data(){
            let list = this.formList,
                len = list.length,
                form = {},
                obj = {},
                en = '',
                i = 0;
            for(i = 0; i < len; i++){
                en = list[i].en;
                form[en] =  '';
                obj[en+'False'] = false;
            }
            return {
                form:form,
                ...obj,
                // dialog
                dialogStatus:false,
                title:"提交成功！",
                content:"后续我们的营销顾问将为您提供服务"
            }
        },
        computed:{
            ...mapState(['user']),
            getTitleBg(){
                let style = {};
                if(this.titleBg){
                    style.backgroundImage = 'url('+this.titleBg+')';
                }
                return style;
            },
        },
        mounted(){
            this.form = {...this.user};
        },
        methods:{
            validateNull(name){
                if(this.form[name].trim()){
                    this[name+'False'] = false;
                }else{
                    this[name+'False'] = true;
                }
            },
            validatePhone(name){
                let phone = this.form[name].trim();
                // if(/^(0|86|17951)?((13[0-9]|14[57]|15[0-9]|17[0-9]|18[0-9]|19[0-9])[0-9]{8})$/g.test(phone)
                if(/^1[0-9]{10}$/g.test(phone)
                    || /^(0[0-9]{2,3}[-\u8f6c])?([2-9][0-9]{6,7})+([-\u8f6c][0-9]{1,4})?$/g.test(phone)){
                    this[name+'False'] = false;
                }else{
                    this[name+'False'] = true;
                }
            },
            validateEmail(name){
                let email = this.form[name].trim();
                if(/^\s*\w+\+*\w*(?:\.{0,1}[\w-]+\+*\w*)*@[a-zA-Z0-9]+(?:[-.][a-zA-Z0-9]+)*\.[a-zA-Z]+\s*$/g.test(email)){
                    this[name+'False'] = false;
                }else{
                    this[name+'False'] = true;
                }
            },
            postForm(){
                var list = this.formList,
                    len = list.length,
                    status = false,
                    a = 0,
                    i = '';
                for(a = 0; a < len; a++){
                    this[list[a].validate](list[a].en);
                }
                
                for(i in this.form){
                    if(this[i+'False']){
                        status = true;
                        break;
                    }
                }
                if(status){
                    return;
                }

                let formData = this.form;
                this.$store.dispatch('postForm',{
                    params: JSON.stringify({
                        name:formData.user,
                        contact:formData.phone,
                        city:formData.address,
                        companyName:formData.name,
                        extend1:''
                    })
                }).then(data => {
                    if(data.state == 200){
                        this.dialogStatus = true;
                    }else{
                        this.title = "";
                        this.content = data.message;
                        this.dialogStatus = true;
                    }
                }).catch(error => {
                    this.title = "";
                    this.content = error.message;
                    this.dialogStatus = true;
                });
            },
            toggleDialog(status){
                this.dialogStatus = status;
            }
        }
    }
</script>
<style lang="scss">
    @function set($n){
        @return $n + px;
    }
    .form {
        width:100%;
        height:set(1103-72);
        padding:72px 0 0 0;
        background-color:#161718;
        &__title {
            width:964px;
            height:70px;
            margin:0 auto;
            padding:0 0 46px 0;
            background:url('~assets/images/form-title.png') no-repeat center top;
        }
        &__center {
            width:964px;
            height:637px;
            margin:0 auto;
            background-color:#1d1e20;
            border-radius: 6px;
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.06);
        }
        &__content {
            width:500px;
            padding:34px 0 0 0;
            margin:0 auto;
        }
        &__one {
            padding:0 0 14px 0;
            position:relative;
            &__name {
                line-height:44px;
                padding:0 0 0 2px;
                color:#66dd95;
                font-size:14px;
            }
            &__input {
                width:set(500-20*2);
                height:44px;
                line-height:44px;
                padding:0 20px;
                border-radius:4px;
                border:none;
                font-size:14px;
                color:#fff;
                text-align:left;
                background-color:#27282a;
                outline:none;
                display:block;
            }
            &__tips {
                line-height:14px;
                font-size:12px;
                color:#f00;
                text-align:left;
                position:absolute;
                left:0;
                bottom:0;
            }
        }
        &__tips {
            padding:11px 0 10px 0;
            font-size:14px;
            color:#27282a;
            text-align:center;
        }
        &__btn {
            width:372px;
            height:50px;
            line-height:50px;
            margin:0 auto;
            background:url('~assets/images/form-btn.png') no-repeat center top;
            color:#161718;
            font-size:20px;
            text-align:center;
            cursor:pointer;
        }
    }
</style>