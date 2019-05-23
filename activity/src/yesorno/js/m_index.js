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
            console.log('调用分享组件')
            if(WBAPP && WBAPP.action && WBAPP.action.share){
                WBAPP.action.share(shareConfigAry, function(state, source){
                    console.log('调用成功！')
                    console.log('state', state)
                    console.log('source', source)
                })
                // var rdata = data.params
                // delete rdata.shareto
                // WBAPP.extend.share.to('WEIXIN,FRIENDS,FLIPCHAT,!FLIPCHAT,CHART,FACETOFACE,SINA,QQ',rdata,function(state, source){
                //     console.log('state', state)
                //     console.log('source', source)
                // })
            }
        }
    }
})
