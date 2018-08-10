"use strict";
Vue.use(VueAwesomeSwiper)
var app = new Vue({
    el:"#app",
    mixins:[commonMixin],
    data:{
        countId:'1c4x',
        others:[
            "shanghai","beijing",
            "shenzhen","guangzhou",
            "nanjing","wuhan",
            "suzhou","hangzhou"
        ]
    },
    mounted:function(){
        // 超凡雇主
        this.getOnlyoneData('2018STAR101_SUPER_EMPLOYER_chengdu')
        // Star雇主
        this.getEmployerData('2018STAR101_STAR_EMPLOYER_chengdu')
        // 本地实力首选
        this.getLocalData('2018STAR101_LOCAL_EMPLOYER_chengdu','')
        // 潜力公司TOP榜
        this.getTopData('2018STAR101_TOP_EMPLOYER_chengdu','')
    },
    methods:{
        
    }
})
