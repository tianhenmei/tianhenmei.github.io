// var userId = 1111;

$(document).ready(function() {
    var flag = false,
        isIphone = /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);
    if(!isIphone){
        $('.android-pay').show();
    }
    // setMenu();
    $('.btn-link').bind('click', function () {
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { //判断iPhone|iPad|iPod|iOS
            flag = false;
            postEncodingID({
                "data-lg-tj-id":LG ,
				"data-lg-tj-no":"0051" ,
				"data-lg-tj-cid":"idnull"  
            })
            window.location.href='https://activity.lagou.com/topic/7dayios.html'
            return
        }else{
            flag = false;
            postEncodingID({
                "data-lg-tj-id":LG ,
                "data-lg-tj-no":"0052" ,
                "data-lg-tj-cid":"idnull"  
            })
            window.location.href='https://st.h5.xiaoe-tech.com/st/9cUT10Yhf'
        }
    })
    $('.btn').not('.not').bind('click', function () {
        if (flag) {
            return
        }
        flag = true;
        var id = $(this).data('id');
        var _url = 'activityapi/offer-lagou/buyOfferLagou';
        var _data = {
            offerLagouType: id
        }
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { //判断iPhone|iPad|iPod|iOS
            $('#ios-pay').removeClass('opacityChange-out').addClass('opacityChange').css({
                'display':'block'
            })
            $('.pay-tips,.weixin-ercode').css({
                'display':'block'
            })
            $('.pay-btn').css({
                'display':'block'
            }).removeClass('opacityChange-out').addClass('opacityChange delay0-5');
            $('.pay-center').removeClass('zoomY-out').addClass('zoomY-in').css({
                'display':'block'
            })
            flag = false;
            postEncodingID({
                "data-lg-tj-id":LG ,
				"data-lg-tj-no":"0021" ,
				"data-lg-tj-cid":"idnull"  
            })
            return
        }
        postEncodingID({
            "data-lg-tj-id":LG ,
            "data-lg-tj-no":"0022" ,
            "data-lg-tj-cid":"idnull"  
        })
        ajax(_url, _data, 'post', function(data) {
            flag = false;
            window.location.href = data.payUrl;
        }, function(msg){
            alert('抱歉，' + msg);
            flag = false;
        });
        
    });
    $('.android-btn').bind('click',function(e){
        if (flag) {
            return
        }
        flag = true;
        var id = $(this).data('id');
        var _url = 'activityapi/offer-lagou/buyOfferLagou';
        var _data = {
            offerLagouType: id
        }
        ajax(_url, _data, 'post', function(data) {
            flag = false;
            window.location.href = data.payUrl;
        }, function(msg){
            alert('抱歉，' + msg);
            flag = false;
        });
    });
    $('.pay-btn').bind('click', function (e){
        e.stopPropagation();
        e.preventDefault();

        $('.pay-center').removeClass('zoomY-in').addClass('zoomY-out')
        $('.pay-tips,.weixin-ercode').css({
            'display':'none'
        })
        $('.pay-btn').removeClass('opacityChange delay0-5').addClass('opacityChange-out');
        $('#ios-pay').removeClass('opacityChange').addClass('opacityChange-out')
        setTimeout(function(){
            $('#ios-pay,.pay-btn').css({
                'display':'none'
            })
        },500)
    })


    $('.charpter__name').bind('click',function(e){
        e.stopPropagation();
        e.preventDefault();
        
        var that = $(this);
        if(that.hasClass('active')){
            that.children('.charpter__arrow')
                .removeClass('charpter__arrow--movedown')
                .addClass('charpter__arrow--moveback');
            that.siblings('.charpter__content').slideUp(500);
            setTimeout(function(){
                that.removeClass('active');
            },500);
        }else{
            that.addClass('active');
            that.children('.charpter__arrow')
                .removeClass('charpter__arrow--moveback')
                .addClass('charpter__arrow--movedown');
            that.siblings('.charpter__content').slideDown(500);
        }
    });
});

//导航栏
function setMenu() {
    var width = 0;
    var scrollYList = [];
    var scrollListMenu = [];
    var menuScrollHeight = $('.menu').offset().top;
    var liOffsetLeftList = [];
    $('.menu').scrollLeft(0);
    
    $('li').each(function (i, li) {
        var w = $(li).outerWidth();
        width = width + w;
        var left = $(li).offset().left;
        liOffsetLeftList.push(left);
    });

    $('ul').width(width + 10);

    var i = 0,
        anchor = []
    for(i = 0; i < 8; i++){
        anchor.push(document.getElementById('anchor'+i))
    }
    anchor.forEach(function (lesson, i) {
        var scrollTop = $(lesson).offset().top;
        scrollYList.push(scrollTop - $('.menu').outerHeight(true));
        scrollListMenu.push(scrollTop - $(this).outerHeight(true) * 0.5)
    });

    var flag = false;
    $('li').bind('click', function () {
        if (flag) {
            return
        }
        flag = true;
        var elem = $(this);
        var num = elem.index();
        $('li').removeClass('active');
        elem.addClass('active');
        $('html,body').animate({
            scrollTop: scrollYList[num]
        }, 500, function () {
            setTimeout(function () {
                flag = false;
            }, 200)
        });
    });

    $(window).scroll(function () {
        var $body = $(this);
        var scrollTop = $body.scrollTop();
        if (scrollTop >= menuScrollHeight) {
            $('.menu').addClass('fixed');
            $('.menu_fake').show();
        } else {
            $('.menu').removeClass('fixed');
            $('.menu_fake').hide();
        }
        setMenuWithScroll(scrollTop);
    });

    function setMenuWithScroll (scrollTop) {
        if (flag) {
            return
        }
        if (scrollTop > scrollListMenu[7]) {
            setAcive(7);
            return;
        }
        if (scrollTop > scrollListMenu[6]) {
            setAcive(6);
            return;
        }
        if (scrollTop > scrollListMenu[1]) {
            setAcive(1);
            return;
        }
        if (scrollTop > scrollListMenu[5]) {
            setAcive(5);
            return;
        }
        if (scrollTop > scrollListMenu[4]) {
            setAcive(4);
            return;
        }
        if (scrollTop > scrollListMenu[3]) {
            setAcive(3);
            return;
        }
        if (scrollTop > scrollListMenu[2]) {
            setAcive(2);
            return;
        }
        if (scrollTop > scrollListMenu[0]) {
            setAcive(0);
            return;
        }
    }

    function setAcive(num) {
        var targetLi = $('li').eq(num);
        $('li').removeClass('active');
        targetLi.addClass('active');
        var left = liOffsetLeftList[num];
        var targetLiLeft = targetLi.offset().left;
        if (targetLiLeft > $('.menu').width() * 0.9 || targetLiLeft < 0) {
            $('.menu').scrollLeft(liOffsetLeftList[num]);
        }
        
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

function postEncodingID(data) {
	var _PID = "",
	_PNO = "",
	_PV = 0,
	_PCONTENTID = "",
	_PRANDOM = "",
	_GAMETHOD = "",
	_GAMSGTYPE = "",
	_GATJ = "",
	_GATJVAL = 0,
	v = 1,
	t = "a",
	dl = encodeURIComponent(window.location.href),
	dr = document.referrer,
	dt = document.title;
    var _ELS = document;
    var arr_GATJ = [];
    try {
        _PID = data["data-lg-tj-id"] || "idnull"
        _PNO = data["data-lg-tj-no"] || "idnull"
        _PCONTENTID = data["data-lg-tj-cid"] || "idnull"
        _PRANDOM = getRandom()
        _GAMETHOD = data["data-lg-gatj-method"] || "send"
        _GAMSGTYPE = data["data-lg-gatj-msgtype"] || "event"
        _GATJ = data["data-lg-gatj-msg"] || ""
        _GATJVAL = parseInt(data["data-lg-gatj-val"] || 0)
        if (_GATJ && typeof ga == "function") {
            arr_GATJ.push(_GAMETHOD, _GAMSGTYPE);
            arr_GATJ = arr_GATJ.concat(_GATJ.split(",")); !! _GATJVAL && arr_GATJ.push(_GATJVAL);
            ga.apply(null, arr_GATJ)
        }
        if (_PID != "idnull") {
            var _params = {};
            _params.v = v;
            _params.t = 'div';//target.tagName.toLocaleLowerCase();
            _params.dl = dl;  
            _params.dr = dr;
            _params.dt = dt;
            _params.aid = [_PID, _PNO, _PV, _PCONTENTID, _PRANDOM].join("_");
            imgGET(_params)
        } else {
            return
        }
    } catch(e) {}
}
function imgGET(params) {
    var REMOTE = {
		server: "https://a.lagou.com/track"
	};
    var _img = new Image();
    paramsArr = [];
    for (var item in params) {
        if (typeof item == "string") {
            paramsArr.push(item + "=" + params[item])
        }
    }
    _img.src = REMOTE.server + "?" + paramsArr.join("&")
}
function getRandom(digit) {
    window._CASH_RANDOM ? "": window._CASH_RANDOM = {};
    var _cash_random = window._CASH_RANDOM || {},
    _digit = digit || 4,
    _random = getRandomSimple();
    while (_cash_random[_random]) {
        _random = getRandomSimple();
        if (!_cash_random[_random]) {
            break
        }
    }
    window._CASH_RANDOM[_random] = _random;
    return _random;
    function getRandomSimple() {
        var random = "";
        for (var i = 0; i < _digit; i++) {
            var r = Math.floor(Math.random() * 10);
            random += r.toString()
        }
        return random.toString()
    }
}