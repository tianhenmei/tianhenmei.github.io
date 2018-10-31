$(document).ready(function() {
    // test
    // initLogin();
    // var nameList = {
    //     '全部课程': '市场运营系统课程大包购买',
    //     '大型活动': '如何策划与统筹一场万人级线下活动',
    //     '活动运营': '活动运营：月薪2W的市场人必备技能',
    //     '面霸养成': '告别面试困难，变身Offer收割机',
    //     '市场运营入门': '1小时摸清互联网市场运营岗',
    //     '新媒体': '真相！人人都可以做新媒体运营',
    //     '用户运营': '学起来！用户运营套路大揭秘'
    // }
    var orderNo = getJsUrl(window.location.href)['orderNo'];
    var _url = 'activityapi/offer-lagou/buySuccess';
    var _data = {
        orderNo: orderNo 
    }
    ajax(_url, _data, 'post', function(data){
        var invitationCode = data.invitationCode;
        var className = data.name || 'Offer 工场';
        $('.word.w2').html('课程内容:「' + className + '」');
        $('#foo').val(invitationCode);
    });

    var clipboard = new Clipboard('.btn');
    clipboard.on('success', function(e) {
        alert('复制成功');  
    });

    clipboard.on('error', function(e) {
        alert('复制失败， 请手动复制');
    });
});

function getUrlParam(param,mode){  // mode:0 字符串  1: 布尔值   2: 拉勾APP 判断
    var search = window.location.search;
    var urlObj = {};
    if(search.indexOf('?') != -1){
        var str = search.substr(1);
        var strArray = str.split('&');
        for(var i = 0; i < strArray.length; i++){
            var c = strArray[i].split('=');
            urlObj[c[0]] = unescape(c[1]);   //unescape:对通过 escape() 编码的字符串进行解码。
        }

        if(urlObj[param]!= undefined){
            switch(mode){
                case 0:
                    if(urlObj[param] != 'undefined'){
                        return urlObj[param];
                    }
                    break;
                case 1:
                    if(urlObj[param] != 'undefined'){
                        return true;
                    }
                    break;
                case 2:
                    if(urlObj[param] == 'undefined' || urlObj[param] == 'ios' || urlObj[param] == 'android'){
                        // 当前链接为在APP中打开
                        return true;
                    }
                    break;
            }
        }
    }
    switch(mode){
        case 0:
            return '';
        case 1:
        case 2:
            return false;
    }
}

function initLogin(){
    var isAPP = getUrlParam('lagoufrom',2);
    if(isAPP){   // app 授权
        appAuth();  
    }else{   // 浏览器
        browserAuth();
    }
}

function browserAuth(){
    $.ajax({
        type:'get',
        url:'https://activity.lagou.com/activityapi/basic/ifLogin',
        success: function(data){
            if(data.success){
                var state=data.state;
                if(state == 200){ //登录成功
                }else if(state == 201){// 无登录用户
                    window.location.href = 'https://activity.lagou.com/activityapi/basic/login.html?redirect='+window.location.href;
                }
            }else{
                console.log(data.message);
            }
        },
        error:function(error){
            console.log(error.message);
        }
    });
}

function appAuth(){
    var checkcode = getQueryString('checkCode');
    if(checkcode){
        $.ajax({
            type:'get',
            url:'https://activity.lagou.com/activityapi/basic/appAutoLogin.json',
            data:{
                checkCode: checkcode
            },
            success:function(data){
                if(data.state == 200){  // 已登录
                }
            },
            error:function(error){
                alert(error.message);
            }
        });
    }else{
        alert('checkcode' + checkcode)
        window.location.href = 'https://www.lagou.com/center/login?forward='+ encodeURIComponent(window.location.href);
    }
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

function getJsUrl(url){
    var pos,str,para,parastr;
    var array =[];
    str = url;
    parastr = str.split("?")[1];
    if(typeof parastr=='undefined'){
        return 'undefined'
    }else{
        var arr = parastr.split("&");
        for (var i=0;i<arr.length;i++){
            array[arr[i].split("=")[0]]=arr[i].split("=")[1];
        }
        return array;
    }
}

function ajax(_url, _data, type, callFuc, errorFuc){
	var _host = 'https://activity.lagou.com/';
	$.ajax({
		type: type,
		url: _host + _url,
		data: _data,
		success: function(data){
			if(data.success){
				if(callFuc){
					callFuc(data.content);
				}
			}else{
                if(errorFuc){
                    errorFuc(data.message);
                }
			}
		},
		error: function(xhr, type){
			alert('出了个小问题, 请稍后再试');
		}
	})
}

// window.onbeforeunload = function() {
//     return '离开就不会回来啦，确认已经保存好邀请码了吗？';
// }
