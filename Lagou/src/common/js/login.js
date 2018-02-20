/**
 * lgFe_login
 * lgFe_login.appAuth      拉勾APP授权
 * lgFe_login.browserAuth  拉勾浏览器授权
 * lgFe_login.weixinAuth   拉勾微信授权
 */
var lgFe_login = (function (global) {

    function getUrlParam(param) { 
        var search = global.location.search;
        var urlObj = {};
        if (search.indexOf('?') != -1) {
            var str = search.substr(1);
            var strArray = str.split('&');
            for (var i = 0; i < strArray.length; i++) {
                var c = strArray[i].split('=');
                urlObj[c[0]] = unescape(c[1]); 
            }
            if (urlObj[param] != 'undefined') {
                return urlObj[param];
            }
        }
    };


    function appAuth(config) {
        var checkcode = getUrlParam('checkCode');
        if (checkcode) {
            $.ajax({
                type: 'get',
                url: 'https://activity.lagou.com/activityapi/basic/appAutoLogin.json',
                data: {
                    checkCode: checkcode
                },
                success: function(data) {
                    if (data.state == 200) { // 已登录
                        config.cb && config.cb();
                    }
                },
                error: function(error) {
                    if (config.debug) {
                        config.cb && config.cb ();
                        return;
                    };
                    alert('未登录成功，请刷新重试');
                }
            });
        } else {
            global.location.href = 'https://www.lagou.com/center/login?forward=' + config.cbUrl || global.location.href;
        }
    };

    function browserAuth(config) {
        $.ajax({
            type: 'get',
            url: 'https://activity.lagou.com/activityapi/basic/ifLogin',
            success: function(data) {
                if (data.success) {
                    var state = data.state;
                    if (state == 200) { //登录成功
                        config.cb && config.cb();
                    } else if (state == 201) { // 无登录用户
                        global.location.href = 'https://activity.lagou.com/activityapi/basic/login.html?redirect=' + config.cbUrl || global.location.href;
                    }
                } else {
                    config.cb && config.cb();
                }
            },
            error: function(error) {
                if (config.debug) {
                    config.cb && config.cb ();
                    return;
                };
                alert('未登录成功，请刷新重试');
            }
        });
    };

    function weixinAuth (config) {
        $.ajax({
            type: 'get',
            url: 'https://activity.lagou.com/activityapi/weixin/hasOpenId',
            success: function(data) { 
                if (data.state == 200) { // 已登录
                    config.cb && config.cb();
                } else if (data.state == 201) { // 未登录
                    var weixinlogin = global.sessionStorage.getItem('weixinlogin');
                    if (weixinlogin == 1) {
                        cb && cb();
                    } else if (!weixinlogin) {
                        global.sessionStorage.setItem('weixinlogin', 1);
                        global.location.href = 'https://activity.lagou.com/activityapi/weixin/auth.html?url=' + config.cbUrl || global.location.href;
                    }
                }
            },
            error: function(error) {
                if (config.debug) {
                    config.cb && config.cb ();
                    return;
                };
                alert('未登录成功，请刷新重试');
            }
        });
    };

    return {
        appAuth: appAuth,
        browserAuth: browserAuth,
        weixinAuth: weixinAuth
    };

}) (window);


/**
 * 获取当前浏览器信息
 */
var lgFe_checkBrowser = (function (global) {
    return {
        versions: function() {
            var ua = navigator.userAgent,
            appVersion = navigator.appVersion;
            return {
                trident: ua.indexOf('Trident') > -1, //IE内核
                presto: ua.indexOf('Presto') > -1, //opera内核
                webKit: ua.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') == -1, //火狐内核
                opera: ua.indexOf('Opera') > -1,
                chrome: ua.indexOf('Chrome') > -1,
                firefox: ua.indexOf('Firefox') > -1,
                safari: ua.indexOf('Safari') > -1 && ua.indexOf('Chrome') == -1, //Safari
                ie: ua.indexOf('compatible') > -1 && ua.indexOf('MSIE') > -1 && ua.indexOf('Gecko') == -1,
                mobile: ua.search(/AppleWebKit.*Mobile/) > -1, //是否为移动终端
                ios: ua.search(/\(i[^;]+;( U;)? CPU.+Mac OS X/) > -1, //ios终端
                android: ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1, //android终端
                winPhone: ua.search(/Windows Phone/) > -1, //windows phone终端
                iPhone: ua.indexOf('iPhone') > -1, //是否为iPhon
                iPad: ua.indexOf('iPad') > -1, //是否iPad
                webApp: ua.indexOf('Safari') == -1, //是否Safari web应该程序，没有头部与底部
                weibo: ua.search(/WeiBo/i) > -1, //是否微博
                weixin: ua.search(/MicroMessenger/i) > -1, //是否微信
                qq: ua.search(/\sQQ/i) > -1 && ua.search(/QQBrowser/i) == -1, //是否QQ
                mQQBrowser: ua.search(/MQQBrowser/) > -1, //是否QQ手机浏览器
                qqBrowser: ua.search(/QQBrowser/i) > -1 && ua.search(/MQQBrowser/) == -1, //是否QQ浏览器
                uc: ua.search(/UCBrowser/) > -1 //是否UC浏览器
            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase(),
        isApp: /lagoufrom=android|lagoufrom=ios/i.test(global.location.search)
    };
} (window));
