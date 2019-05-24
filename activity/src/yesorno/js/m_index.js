"use strict";
var app = new Vue({
    el:"#app",
    // mixins:[commonMixin],
    data:{
        shareBtnStatus: false
    },
    created: function(){
        // var script = document.createElement('script')
        // script.src = '//cdn.jsdelivr.net/npm/vconsole'
        // script.onload = function(){
        //     new VConsole()
        // }
        // document.body.appendChild(script)
    },
    mounted:function(){
        if(WBAPP && WBAPP.action && WBAPP.action.share){
            var from = getQueryString('from')
            if(from === '58'){
                this.shareBtnStatus = true;
            }
        }
    },
    methods:{
        toShare: function(){
            console.log('调用分享组件')
            if(WBAPP && WBAPP.action && WBAPP.action.share){
                // this.shareBtnStatus = true;
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
