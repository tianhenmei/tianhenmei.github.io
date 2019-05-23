"use strict";
var app = new Vue({
    el:"#app",
    // mixins:[commonMixin],
    data:{
        
    },
    created: function(){
        var script = document.createElement('script')
        script.src = '//cdn.jsdelivr.net/npm/vconsole'
        script.onload = function(){
            new VConsole()
        }
        document.body.appendChild(script)
    },
    mounted:function(){
        
    },
    methods:{
        toShare: function(){
            console.log(123455)
            if(WBAPP && WBAPP.action && WBAPP.action.share){
                WBAPP.action.share(shareConfigAry, function(){
                console.log('分享成功！')
            })
        }
    }
})
