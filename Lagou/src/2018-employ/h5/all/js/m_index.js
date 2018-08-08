"use strict";
Vue.use(VueAwesomeSwiper)
var app = new Vue({
    el:"#app",
    mixins:[commonMixin],
    data:{
        countId:'1c4v',
        tab:{
            offsetTop:0,
            height:0,
            active_index:0,
            count:10,
            status:false,
            click_status:false,
            list:[{
                name:'超凡雇主',
                elem:'yh-center__onlyone',
                offsetTop:0,
                height:0,
                index:0,
                top:0
            },{
                name:'STAR雇主',
                elem:'yh-center__employer',
                offsetTop:0,
                height:0,
                index:1,
                top:0
            },{
                name:'其它城市专场',
                elem:'yh-center__others',
                offsetTop:0,
                height:0,
                index:2,
                top:0
            },{
                name:'合作伙伴',
                elem:'yh-center__corperate',
                offsetTop:0,
                height:0,
                index:3,
                top:0
            }],
            fixed:false,
            shadow_status:false,
            initWidth:750,
            showWidth:750,
            width:9999,
            left:0,
            transition:true,
            start:{
                x:0,
                y:0
            }
        },
        others:[
            "shanghai","beijing",
            "nanjing","guangzhou",
            "shenzhen","chengdu",
            "wuhan","hangzhou",
            "suzhou"
        ],
        corperate:[
            147,147,147,147,
            147,147,147,147,
            147,147,147,147,
            147,147,147,147,
            147,147,147,147,
            147,147,147,147
        ],
    },
    mounted:function(){
        this.from = (getQueryString('lagoufrom')+'').toLocaleLowerCase();
        var frompartner = getQueryString('frompartner');
        this.partnerStatus = frompartner// ? true : false;
        this.isAPP = this.from == 'ios' || this.from == 'android'
        if(!this.isAPP){
            this.floating.status = true;
        }
        this.browserType = this.getBrowserType()

        this.fontSize = parseFloat(this.getComputedValue(document.documentElement,'font-size'));
        this.tab.showWidth = this.getRemValue(this.tab.initWidth) * this.fontSize;
        this.setTabWidth();

        // this.addJSCSS();
        // this.loadedJSCSS();
        this.initWindowScrollEvent();

        // 超凡雇主
        this.getOnlyoneData('TEST_2018STAR101_SUPER_EMPLOYER_SHENZHEN')
        // Star雇主
        this.getEmployerData('TEST_2018STAR101_STAR_EMPLOYER_SHENZHEN')
    },
    methods:{
        
    }
})
