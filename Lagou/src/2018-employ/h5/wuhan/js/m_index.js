"use strict";
Vue.use(VueAwesomeSwiper)
var app = new Vue({
    el:"#app",
    mixins:[commonMixin],
    data:{
        countId:'1c54',
        others:[
            "shanghai","beijing",
            "shenzhen","guangzhou",
            "nanjing","chengdu",
            "suzhou","hangzhou"
        ]
    },
    mounted:function(){
        // 超凡雇主
        this.getOnlyoneData('2018STAR101_SUPER_EMPLOYER_wuhan')
        // Star雇主
        this.getEmployerData('2018STAR101_STAR_EMPLOYER_wuhan')
        // 本地实力首选
        this.getLocalData('2018STAR101_LOCAL_EMPLOYER_wuhan','')
        // 潜力公司TOP榜
        this.getTopData('2018STAR101_TOP_EMPLOYER_wuhan','')
    },
    methods:{
        
    }
})
