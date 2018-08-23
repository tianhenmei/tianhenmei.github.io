// var userId = 1111;

$(document).ready(function() {
    var flag = false;
    setMenu();
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
            $('.pay-tips,.pay-btn').css({
                'display':'block'
            })
            $('.pay-center').removeClass('zoomY-out').addClass('zoomY-in').css({
                'display':'block'
            })
            flag = false;
            return
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
        $('.pay-tips,.pay-btn').css({
            'display':'none'
        })
        $('#ios-pay').removeClass('opacityChange').addClass('opacityChange-out')
        setTimeout(function(){
            $('#ios-pay').css({
                'display':'none'
            })
        },500)
    })
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

    $('.anchor').each(function (i, lesson) {
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
        if (scrollTop > scrollListMenu[12]) {
            setAcive(12);
            return;
        }
        if (scrollTop > scrollListMenu[11]) {
            setAcive(11);
            return;
        }
        if (scrollTop > scrollListMenu[10]) {
            setAcive(10);
            return;
        }
        if (scrollTop > scrollListMenu[9]) {
            setAcive(9);
            return;
        }
        if (scrollTop > scrollListMenu[8]) {
            setAcive(8);
            return;
        }
        if (scrollTop > scrollListMenu[7]) {
            setAcive(7);
            return;
        }
        if (scrollTop > scrollListMenu[6]) {
            setAcive(6);
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
        if (scrollTop > scrollListMenu[1]) {
            setAcive(1);
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