/**
 * Created by Dream on 16/4/29.
 */
$(function(){
    setTimeout(function(){
        /** 初始化对象*/
        LOGINER.init();
        /** 替换链接 执行退出操作*/
        LOGINER.doReplace();
    },3000);
});

/**
 * 登录处理
 * @type {{status: boolean}}
 */
var LOGINER = {
    /** 登录标识 默认未登录 */
    status:null,
    /** 地址栏 链接*/
    locationUrl:null,
    /** a链接元素*/
    aElement:null,
    doReplace:function(){
          if(this.status){
              //console.info("当前用户已登录入. 替换退出链接");
              this.aElement.href="javascript:LOGINER.loginOut()";
          }else{
              //console.info("当前用户未登录入. 替换登录链接");
              var frontLoginUrl = "https://passport.lagou.com/login/login.html?serviceId=lagou&service="+encodeURI(this.locationUrl);
              this.aElement.href = frontLoginUrl;
          }

          //console.info("替换完毕~~!");
    },
    init:function(){
        this.locationUrl = window.location.href;
        var a = $("a:contains('登录')");
        if(a && a.length>0) {
            var loginHref = a[0].href;
            if ('https://www.lagou.com/frontLogin.do' == loginHref) {
                this.status = false;
                this.aElement = a[0];
            }
        }

        var o = $("a:contains('退出')");
        if(o && o.length>0){
            var loginHref = o[0].href;
            if('https://www.lagou.com/frontLogout.do'==loginHref){
                this.status = true;
                this.aElement = o[0];
            }
        }
    },
    loginOut:function(){
        $.ajax({
            type: 'post',
            url:'https://www.lagou.com/activityapi/basic/loginOut.json',
            data: {
                delete:'yes'
            },
            success: function (data) {
                window.location.href="https://www.lagou.com/frontLogout.do";
            },
            error: function (xhr, type) {
                console.info("提交失败,请稍后重试!")
            }
        });
    }
}