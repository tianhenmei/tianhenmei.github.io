// lagou
window.dataHost = "a.lagou.com";

(function(i, s, o, g, r, a, m) {
    i['LgAnalytics'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//a.lagou.com/js/a.js', 'gatherer');

gatherer('create', 'UA-41268416-1', {'alwaysSendReferrer': true});
gatherer('send', 'pageview');

//baidu
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " https://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F4233e74dff0ae5bd0a3d81c6ccf756e6' type='text/javascript'%3E%3C/script%3E"));
//google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-41268416-1', 'auto');
ga('require', 'displayfeatures');
ga('require', 'linker');
ga('send', 'pageview');

//平台统计代码click log for platform add by vee 2015-07-04
function initResumeLog(logtype, deliverId, positionId, position){

        //平台统计代码 调用函数见analytics.js add by vee 2015-07-28
        var param = {};
        param.logtype = logtype; //suc=0表成功 1表失败
        param.position = position || GetQueryString('i');
        param.orderid = deliverId;
        param.positionid = positionId;
        param.url = location.href;
        param.fromsite = document.referrer || null;
        logImgLoader('logImgSet',param);
}

function logImgLoader(id,param) {
    var time = new Date();
    param.time = time.getTime();
    param.userid = window.global.idmd5;
     //logtype-0表成功 logtype-1表失败
    var uri = 'v=1&logtype='+param.logtype+'&position='+param.position+'&orderid='+param.orderid+'&userid='+param.userid+'&positionid='+param.positionid+'&url='+param.url+'&fromsite='+param.fromsite+'&optime='+param.time;
    $(document.body).append("<img src='https://a.lagou.com/click?"+uri+"' id='"+id+"' style='position:fixed;left:-10000px;bottom:0;' />");
    $('#'+id).remove();
}
//公用函数 获取url的参数 add by vee 2015-07-04
function GetQueryString(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
      return  unescape(r[2]); 
    return null;
}
