function share(datas){
    /*
     分享
     */
    //success: to share
    function encode(url) {
        return encodeURIComponent(url).replace(/'/g, "%27").replace(/"/g, "%22");
    }
    //统计分享次数
    function countShare(datas) {
        var parameter =  datas.parameter;
        var countUrl = "https://activity.lagou.com/activityapi/weixin/countShare.json?activityType="+datas.activityType;
        $.ajax({
            type: 'get',
            contentType:"application/x-www-form-urlencoded;charset=UTF-8",
            url: countUrl,
            dataType:'jsonp',
            jsonp:'jsoncallback',
            success: function(data){
                if(data.success){

                }else{

                }
            },
            error: function(xhr, type){

            }
        })
        return
    }
    surl = window.location.href;
    var url = "https://www.lagou.com/weixin/wx_share.json?url=" + encode(window.location.href.split('#')[0]);
    var callback = function (json) {
        var data = json.message;
        data = eval("(" + data + ")");
        wx.config({
            debug: false,
            appId: data.appId,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo']
        });

        wx.ready(function () {
            var shareData = {
                title: datas.title,
                desc: datas.desc,
                link: datas.shareUrl==undefined?surl:datas.shareUrl, // 分享链接
                imgUrl: datas.imgUrl,
                success: function () {
                    // 用户确认分享后执行的回调函数

                    //如果存在统计类型 则统计分享次数
                    if(datas.activityType){
                        countShare(datas);
                    }

                }
            };
            var shareFrieds = {
                title: datas.title,
                link: datas.shareUrl==undefined?surl:datas.shareUrl, // 分享链接
                imgUrl: datas.imgUrl,
                success: function () {
                    // 用户确认分享后执行的回调函数

                    //如果存在统计类型 则统计分享次数
                    // if(datas.activityType){
                    //     countShare(datas);
                    // }

                }
            };
            wx.onMenuShareAppMessage(shareData);
            wx.onMenuShareQQ(shareData);
            wx.onMenuShareWeibo(shareData);
            wx.onMenuShareTimeline(shareFrieds);

            console.log('weixin support set success.');
        });
        wx.error(function (res) {
            //alert(res.errMsg);
        });
    };
    callback({
        content:{
            rows:[0]
        },
        message:'{"timestamp":"'+Math.floor(Date.now() / 1000)+'","appId":"wxbffbd15772cd6152","nonceStr":"dc4224da-062d-4ba5-af6a-7b7862fb3bc4","jsapi_ticket":"bxLdikRXVbTPdHSM05e5u222LdKBalFuMtFEYyFv1RQaCWELnmrK5ihUwYPB8JpIT36uKHfIRrjeuwyfI0kaTw","signature":"d3060a11761b042feebc1700f6a141e0b6c25391","url":"http://tianhenmei.github.io/YR/src/home/index.html"}',
        state:1
    })
    // $.ajax({
    //     url: url,
    //     dataType: "jsonp",
    //     jsonp: "jsoncallback",
    //     success: function (response) {
            // callback && callback(response);
        // },
    //     error: function (xhr, type) {
    //         console.log('xhr:' + xhr + "type:" + type);

    //     }
    // })
}
    
