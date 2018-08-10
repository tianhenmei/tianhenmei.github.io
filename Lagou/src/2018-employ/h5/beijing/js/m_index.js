"use strict";
Vue.use(VueAwesomeSwiper)
var app = new Vue({
    el:"#app",
    mixins:[commonMixin],
    data:{
        countId:'1c4w',
        others:[
            "shanghai","guangzhou",
            "shenzhen","nanjing",
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
        this.getOnlyoneData('2018STAR101_SUPER_EMPLOYER_beijing')
        // Star雇主
        this.getEmployerData('2018STAR101_STAR_EMPLOYER_beijing')
        // 本地实力首选
        this.getLocalData('2018STAR101_LOCAL_EMPLOYER_beijing','')
        // 潜力公司TOP榜
        this.getTopData('2018STAR101_TOP_EMPLOYER_beijing','')
    },
    methods:{
        
    }
})
