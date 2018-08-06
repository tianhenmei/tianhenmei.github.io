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
        // // 超凡雇主
        // this.getOnlyoneData(147)
        // // Star雇主
        // this.getEmployerData(147)
        // // 本地实力首选
        // this.getLocalData(147,'shenzhen')
    },
    methods:{
        
    }
})
