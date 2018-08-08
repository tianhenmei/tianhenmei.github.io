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
        // 超凡雇主
        this.getOnlyoneData('TEST_2018STAR101_SUPER_EMPLOYER_SHENZHEN')
        // Star雇主
        this.getEmployerData('TEST_2018STAR101_STAR_EMPLOYER_SHENZHEN')
        // 本地实力首选
        this.getLocalData('TEST_2018STAR101_LOCAL_EMPLOYER_SHENZHEN','')
        // 潜力公司TOP榜
        this.getTopData('TEST_2018STAR101_TOP_EMPLOYER_SHENZHEN','')
    },
    methods:{
        
    }
})
