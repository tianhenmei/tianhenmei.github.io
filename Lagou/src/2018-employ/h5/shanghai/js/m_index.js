"use strict";
Vue.use(VueAwesomeSwiper)
var app = new Vue({
    el:"#app",
    mixins:[commonMixin],
    data:{
        countId:'1c52',
        others:[
            "beijing","guangzhou",
            "shenzhen","hangzhou",
            "nanjing","chengdu",
            "wuhan","suzhou"
        ],
    },
    mounted:function(){
        // 超凡雇主
        this.getOnlyoneData('2018STAR101_SUPER_EMPLOYER_shanghai')
        // Star雇主
        this.getEmployerData('2018STAR101_STAR_EMPLOYER_shanghai')
        // 本地实力首选
        this.getLocalData('2018STAR101_LOCAL_EMPLOYER_shanghai','')
        // 潜力公司TOP榜
        this.getTopData('2018STAR101_TOP_EMPLOYER_shanghai','')
    },
    methods:{
        
    }
})
