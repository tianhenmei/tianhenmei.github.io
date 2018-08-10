"use strict";
Vue.use(VueAwesomeSwiper)
var app = new Vue({
    el:"#app",
    mixins:[commonMixin],
    data:{
        countId:'1c4u',
        others:[
            "shanghai","beijing",
            "nanjing","guangzhou",
            "suzhou","chengdu",
            "wuhan","hangzhou"
        ]
    },
    mounted:function(){
        // 超凡雇主
        this.getOnlyoneData('2018STAR101_SUPER_EMPLOYER_shenzhen')
        // Star雇主
        this.getEmployerData('2018STAR101_STAR_EMPLOYER_shenzhen')
        // 本地实力首选
        this.getLocalData('2018STAR101_LOCAL_EMPLOYER_shenzhen','')
        // 潜力公司TOP榜
        this.getTopData('2018STAR101_TOP_EMPLOYER_shenzhen','')
    },
    methods:{
        
    }
})
