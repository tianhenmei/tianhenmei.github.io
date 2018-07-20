var swiperChlidren;

var search_list = {};
var scrollData = {
    'search_list': {},
    'rank-content': {},
    confirmCompany: false, // 是否选择公司
    requestCompany: '', // 当前请求公司的搜索值
    company: {},
    isMoving: false,
    companyID: 0,
    currentCompany: {}
};
var clickTime = 0;
var mySwiperParent = null;
var GC = {
    w: document.documentElement.clientWidth,
    h: document.documentElement.clientHeight
};

var scrollClass = function(options) {
    this.elem = null;
    this.initHeight = 0;
    this.elemHeight = 0;
    this.ul = null;
    this.li = null;
    this.bar = null;
    this.barHeight = 0;
    this.classname = '';
    this.length = 0;
    this.one = 0;
    this.height = 0;
    this.top = 0;
    this.start = 0;
    this.end = 0;
    this.number = 0;
    this.space = 0;
    this.scale = 0;
    this.fixedHeight = true;

    var self = this;
    this.init = function(options) {
        var elem = $('.' + options.classname),
            ul = elem.children('ul'),
            li = ul.children('li'),
            bar = elem.find('.' + options.classname + '_bar'),
            length = li.length,
            one = length > 0 ? li.eq(0).height() : 0;

        self.initHeight = options.height;
        self.elemHeight = elem.height();
        self.classname = options.classname;
        self.elem = elem[0];
        self.ul = ul;
        self.li = li;
        self.bar = bar;
        self.length = length;
        self.one = options.one ? self.getRem(options.one) : one;
        self.height = self.one * length + parseFloat(ul.css('padding-top')) + parseFloat(ul.css('padding-bottom')) - self.getRem(self.initHeight);
        self.number = options.number;
        self.space = options.space;
        self.barHeight = elem.height() * self.number / self.length;
        self.scale = (self.elemHeight - self.barHeight - self.getRem(self.space) * 2) / ((self.length - self.number) * self.one);
        self.fixedHeight = options.fixedHeight == undefined ? true : !!options.fixedHeight;
        bar.css({
            height: self.barHeight + 'px'
        });

        var barParent = self.bar.parent('.' + self.classname + '_bar_bg');
        if (self.length > self.number) { // 只有列表的值太多，才会出现滚动条
            if (barParent.length > 0) {
                barParent.removeClass('search_hide');
            } else {
                self.bar.removeClass('search_hide');
            }
            self.initEvent();
            if (!self.fixedHeight) {
                elem.css({
                    'height': self.getRem(self.initHeight) + 'px'
                });
            }
        } else {
            if (barParent.length > 0) {
                barParent.addClass('search_hide');
            } else {
                self.bar.addClass('search_hide');
            }
            if (!self.fixedHeight) {
                elem.css({
                    'height': ul.height() + parseFloat(ul.css('padding-top')) + parseFloat(ul.css('padding-bottom')) + 'px'
                });
            }
            elem[0].removeEventListener('touchstart', scrollData[self.classname].startScroll, false);
            elem[0].removeEventListener('touchmove', scrollData[self.classname].moveScroll, false);
        }
    };

    this.initEvent = function() {
        var elem = $('.' + self.classname)[0];
        elem.removeEventListener('touchstart', self.startScroll, false);
        elem.removeEventListener('touchmove', self.moveScroll, false);

        elem.addEventListener('touchstart', self.startScroll, false);
        elem.addEventListener('touchmove', self.moveScroll, false);
    };

    this.startScroll = function(e) {
        e.stopPropagation();
        e.preventDefault();

        scrollData.isMoving = false;
        clickTime = new Date().getTime();
        if (scrollData[self.classname].length > scrollData[self.classname].number) {
            var touch = e.targetTouches[0];
            scrollData[self.classname].start = touch.clientY;
            scrollData[self.classname].top = parseFloat(scrollData[self.classname].ul.css('top'));
        }
    };

    this.moveScroll = function(e) {
        e.stopPropagation();
        e.preventDefault();

        if (scrollData[self.classname].length > scrollData[self.classname].number) {
            scrollData.isMoving = true;
            var touch = e.targetTouches[0],
                direction = touch.clientY - scrollData[self.classname].start;

            direction = direction > 0 ? 1 : -1;
            scrollData[self.classname].end = touch.clientY - scrollData[self.classname].start + scrollData[self.classname].top
            if (direction == 1 && scrollData[self.classname].end >= 0) { // 向上
                scrollData[self.classname].end = 0;
            } else if (direction == -1 && scrollData[self.classname].end <= -scrollData[self.classname].height) { // 向下
                scrollData[self.classname].end = -scrollData[self.classname].height;
            }
            // console.log(-self.scale*self.end);
            scrollData[self.classname].bar.css({
                top: -scrollData[self.classname].scale * scrollData[self.classname].end + 'px'
            });
            scrollData[self.classname].ul.css({
                top: scrollData[self.classname].end + 'px'
            });
        }
    };

    this.setRank = function(rank) {
        rank -= 1;
        self.li.removeClass('rank-active');
        if (rank <= (self.length - 1) && rank >= 0) {
            var rankTop = (rank - 1) * self.one,
                position = rank;
            if (rank <= self.number / 2) { // 当前排行在一半以下
                // 什么也不用做
                position = 0;
            } else if (rank >= (self.length - self.number / 2)) { // 当前排行在最后一屏的一半以上
                // 定位在最后一屏
                position = self.length - self.number;

            } else {
                position = rank - Math.floor(self.number / 2);
            }
            self.li.eq(rank).addClass('rank-active');
        } else {
            position = 0;
            // rank = 0;
        }
        self.ul.css({
            top: -(position * self.one) + 'px'
        });
        self.bar.css({
            top: self.scale * (position * self.one) + 'px'
        });
    };

    this.getRem = function(value) {
        var scale = 1206 / 750,
            currentScale = GC.h / GC.w,
            fontSize = GC.w / (10 / currentScale * scale);
        return value / 750 * 10 * fontSize;
        // return value / 750 * document.documentElement.clientWidth;
    }

    self.init(options);
};



$(document).ready(function() {

    mySwiperParent = new Swiper('.swiper-container.parent', {
        //播放动画（一页一页播放）   
        onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit  
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
        },
        onSlideChangeEnd: function(swiper) {
            swiperAnimate(swiper);

            if (swiper.activeIndex == 1) {
                // initScroll('search_list',4);

            } else if (swiper.activeIndex == 2) {
                // initScroll('rank-content',15.5);
                // scrollData['rank-content'] = new scrollClass({
                // 	classname:'rank-content',
                // 	space:3,
                // 	number:15.5
                // });
            }
        },
        direction: 'vertical',
        loop: false,
        roundLengths: true,
        grabCursor: true,
        keyboardControl: true,
        　　speed: 600,
    });

    swiperChlidren = $(".section3 .chlidren").swiper({
        direction: 'horizontal', //垂直    horizontal 水平  vertical 垂直 
        spaceBetween: document.documentElement.clientWidth / 750 * 15,
        slidesPerView: 'auto',
        centeredSlides: true,
        pagination: '.swiper-pagination'
    });
    mySwiperParent.lockSwipes();
    judgeUrl(mySwiperParent);

    $('.btn.sharebtn').bind('click', function() {
        $('.sharepop').show();
    });

    $('.sharepop').bind('click', function() {
        $('.sharepop').hide();
    });
});

//生成奖项页卡
function createCard(swiper, data) {
    var pagelist = [];
    $.each(data.companyAwards, function(index, item) {
        var obj = item.voteCountVo;
        var type = returnType(obj.item);
        // console.log(type);
        var prize = prizeList[type];
        prize.type = type;
        pagelist.push(createCardHtml(prize, obj.num, obj.order, data.company, item.ifVoted));
    });
    // console.log(pagelist);
    swiper.prependSlide(pagelist);
    swiper.slideTo(0);
}

function returnType(str) {
    return str.split('_')[1];
}

//生成页面字符串
function createCardHtml(prize, hugNum, ranking, comObj, isHug) {
    // console.log(prize);
    var prizeLimit = 10;
    var stillNeed = ranking - prizeLimit;
    var already = '';
    if (ranking > 999) {
        ranking = '999+'
    }
    var _prizeWord = '嗨，我的心愿是成为' + prize.shortName + '，还有你的拥抱'
    var stillNeedString = '<p>暂未入围</p><p>(前10名入围）</p>'

    if (stillNeed <= 50) {
        stillNeedString = '<span>还差</span><span class="bn red"> ' + stillNeed + ' </span><span>名入围</span>';
    }
    if (stillNeed <= 0) {
        stillNeedString = '恭喜，暂时入围！'
    }
    if (isHug) {
        already = 'already';
        _prizeWord = prize.hugWord;
    }
    var string = '<div class="swiper-slide page1 swing">' +
        '	<div class="header"><div class="header-inner">' +
        '		<div class="icon ' + prize.group + '"></div>' +
        '		<div class="name">' + prize.name + '</div>' +
        '		<div class="dot">·</div>' +
        '		<div class="cardword">心愿卡片</div>' +
        '	</div></div>' +
        '	<div class="line2"></div>' +
        '	<div class="word-box">' +
        '		<div class="wquote left"></div>' +
        '		<p>' + _prizeWord + '</p>' +
        '		<div class="wquote right"></div>' +
        '	</div>' +
        '	<div class="clearfix"></div>' +
        '	<div class="num-box">' +
        '		<span>已有</span>' +
        '		<span class="hug-num">' + hugNum + '</span>' +
        '		<span>次拥抱</span>' +
        '	</div>' +
        '	<div class="hug-btn ' + already + '" type="' + prize.type + '" comid="' + comObj.id + '" comshortname="' + comObj.companyshortname + '" onclick="hug(this)"></div>' +
        '	<div class="footer">' +
        '		<div class="block">' +
        '			<div class="block-inner">' +
        '				<span>当前排名</span>' +
        '				<span class="ranking bn">' + ranking + '</span>' +
        '			</div>' +
        '		</div>' +
        '		<div class="block">' +
        '			<div class="block-inner">' + stillNeedString + '</div>' +
        '		</div>' +
        '		<div class="block">' +
        '			<div class="ckbd" data-lg-tj-id="1Yq0" data-lg-tj-no="0005" data-lg-tj-cid="idnull" award="' + prize.type + '" type="ddd" shortname="' + prize.name + '" onclick="getRanking(this)"></div>' +
        '		</div>' +
        '	</div>' +
        '</div>';
    return string;
}

//顶部的公司信息
function setCompany(comName, logoSrc, shortName, registerDay) {
    var urlHeader = '';
    $('.section3 .com-name').html(comName);
    $('.section3 .day').html(registerDay);
    $('.section3 .com-logo').attr('src', urlHeader + logoSrc);
}

//换一批
function bindChange() {
    var num = 0;
    var length = 3;
    var height = $('.tagarea').height();
    $('.change').bind('click', function() {
        num++;
        if (num == length) {
            num = 0
        }
        $('.section3 .tagarea-inner').css({
            'transform': 'translate(0px, -' + height * num + 'px)',
        });
    });
}

//抱抱按钮 ajax
function hug(o) {
    if ($(o).hasClass('already')) {
        return
    }
    var elem = $(o);
    var _url = '/activityapi/vote/sign';
    var _data = {
        type: '2016GZPX',
        key1: elem.attr('type'),
        key2: elem.attr('comid'),
        message: elem.attr('comshortname'),
        source: getSource()
    }
    ajax(_url, _data, 'post', function(data) {});
    //console.log(data);
    elem.addClass('already');
    elem.append('<div class="heart fadeOutUpBig"></div>');
    var pageDom = elem.parent();
    var rankingDom = pageDom.find('.ranking');
    var wordP = pageDom.find('.word-box p');
    var ranking = rankingDom.html();
    var stillNeedDom = pageDom.find('.block-inner').eq(1);
    var stillNeed = 50;
    var stillNeedString = '';
    var hunNumDom = pageDom.find('.hug-num');
    var hugNum = Number(hunNumDom.html());
    hunNumDom.html(hugNum + 1);
    wordP.html(prizeList[elem.attr('type')].hugWord);
    if (stillNeed > 50) {
        stillNeedString = '暂时还未上榜'
    } else {
        stillNeedString = '<span>还差</span><span class="bn red"> ' + stillNeed + ' </span><span>名入围</span>';
    }
    if (ranking.indexOf('+') > 0 || ranking >= 999) {
        ranking = '999+'
    } else {
        ranking = Number(ranking);
    }
    rankingDom.html(ranking);
    setTimeout(function() {
        swiperChlidren.slideNext();
    }, 800)

}

//标签点击 ajax
function bindTagClick() {
    $('.tag').bind('click', function() {
        var elem = $(this);
        if (elem.hasClass('active')) {
            return
        }
        addTagNum(elem);
    });
}

function addTagNum(elem) {
    var comId = elem.attr('comid');
    var tagId = elem.attr('tagid');
    var _url = '/activityapi/vote/simple';
    var _data = {
        key: 'CJGZ2016WISH_' + comId + '_' + tagId
    }
    ajax(_url, _data, 'post', function() {
        var numDom = elem.find('.num');
        var num = numDom.html();
        elem.append('<span class="plusone fadeOutUp">+1</span>');
        elem.addClass('active');
        if (num.indexOf('+') > 0 || num >= 999) {
            num = '999+'
        } else {
            num = Number(num) + 1;
        }
        numDom.html(num);
        setTimeout(function() {
            elem.find('.plusone').remove();
        }, 1000);
    });
}

var prizeList = {
    'ZJGZ': {
        name: '年度最佳雇主',
        shortName: '最佳雇主',
        hugWord: '感谢你的拥抱，每个互联网人都需要一个拥抱。',
        group: 'zh'
    },
    'XRGZ': {
        name: '年度新锐雇主',
        shortName: '新锐雇主',
        hugWord: '感谢你的拥抱，每个互联网人都需要一个拥抱。',
        group: 'zh'
    },
    'O2O': {
        name: 'O2O领域年度最佳雇主',
        shortName: '最佳雇主',
        hugWord: '感谢你的拥抱，</br>这个冬天不再寒冷。',
        group: 'hy'
    },
    '电子商务': {
        name: '电商领域年度最佳雇主',
        shortName: '最佳雇主',
        hugWord: '感谢你的拥抱，</br>这个冬天不再寒冷。',
        group: 'hy'
    },
    '金融': {
        name: '金融领域年度最佳雇主',
        shortName: '最佳雇主',
        hugWord: '感谢你的拥抱，</br>这个冬天不再寒冷。',
        group: 'hy'
    },
    '游戏': {
        name: '游戏领域年度最佳雇主',
        shortName: '最佳雇主',
        hugWord: '感谢你的拥抱，</br>这个冬天不再寒冷。',
        group: 'hy'
    },
    '硬件': {
        name: '硬件领域年度最佳雇主',
        shortName: '最佳雇主',
        hugWord: '感谢你的拥抱，</br>这个冬天不再寒冷。',
        group: 'hy'
    },
    '教育': {
        name: '教育领域年度最佳雇主',
        shortName: '最佳雇主',
        hugWord: '感谢你的拥抱，</br>这个冬天不再寒冷。',
        group: 'hy'
    },
    '社交网络': {
        name: '社交领域年度最佳雇主',
        shortName: '最佳雇主',
        hugWord: '感谢你的拥抱，</br>这个冬天不再寒冷。',
        group: 'hy'
    },
    '企业服务': {
        name: '企业服务领域年度最佳雇主',
        shortName: '最佳雇主',
        hugWord: '感谢你的拥抱，</br>这个冬天不再寒冷。',
        group: 'hy'
    },
    'HB': {
        name: '华北地区年度最佳雇主',
        shortName: '最佳雇主',
        hugWord: '感谢你的拥抱，</br>无论你在哪里。',
        group: 'qy'
    },
    'HD': {
        name: '华东地区年度最佳雇主',
        shortName: '最佳雇主',
        hugWord: '感谢你的拥抱，</br>无论你在哪里。',
        group: 'qy'
    },
    'HN': {
        name: '华南地区年度最佳雇主',
        shortName: '最佳雇主',
        hugWord: '感谢你的拥抱，</br>无论你在哪里。',
        group: 'qy'
    }
};


var tagList = [{
        id: 1,
        text: '午餐加鸡腿',
        num: 0
    },
    {
        id: 2,
        text: '加薪++',
        num: 0
    },
    {
        id: 3,
        text: '买房',
        num: 0
    },
    {
        id: 4,
        text: '求老板一句话鼓励',
        num: 0
    },
    {
        id: 5,
        text: '有个mac',
        num: 0
    },
    {
        id: 6,
        text: '做自由职业者',
        num: 0
    },
    {
        id: 7,
        text: '弹琴给那个姑娘',
        num: 0
    },
    {
        id: 8,
        text: '不用上班',
        num: 0
    },
    {
        id: 9,
        text: '带宠物上班',
        num: 0
    },
    {
        id: 10,
        text: '我的设计我做主',
        num: 0
    },
    {
        id: 11,
        text: '买车',
        num: 0
    },

    {
        id: 12,
        text: '情人节放假',
        num: 0
    },
    {
        id: 13,
        text: '不熬夜',
        num: 0
    },
    {
        id: 14,
        text: '减下十斤肉',
        num: 0
    },
    {
        id: 15,
        text: '老司机带带我',
        num: 0
    },
    {
        id: 16,
        text: '挣一个亿',
        num: 0
    },
    {
        id: 17,
        text: '需求不被拒',
        num: 0
    },
    {
        id: 18,
        text: '代码不出错',
        num: 0
    },
    {
        id: 19,
        text: '求加班',
        num: 0
    },
    {
        id: 20,
        text: '旅游基金',
        num: 0
    },
    {
        id: 21,
        text: '求女票',
        num: 0
    },
    {
        id: 22,
        text: '文案人人赞',
        num: 0
    },
    {
        id: 23,
        text: '不总吃外卖',
        num: 0
    }
];

function setTagArea(data) {
    $('.tagarea .tagarea-inner').html('');
    var list = [
        tagList.slice(0, 8),
        tagList.slice(8, 16),
        tagList.slice(16, 24)
    ];
    $.each(list, function(index, taglist) {
        var divDom = $('<div class="tag-block"></div>');
        setTag(divDom, data.company.id, taglist);
        $('.tagarea .tagarea-inner').append(divDom);
    });
    bindTagClick();
}

function setTag(divDom, comid, taglist) {
    $.each(taglist, function(index, tag) {
        divDom.append(
            '<div class="tag" data-lg-tj-id="1Yq0" data-lg-tj-no="0006" data-lg-tj-cid="idnull" comid="' + comid + '" tagId="' + tag.id + '">' +
            '<span>' + tag.text + '</span>' +
            '<span class="num">' + tag.num + '</span>' +
            '</div>'
        );
    });
}

//设置带有公司id的分享
function setShare(comId, comName, logo) {
    datas.shareUrl = baseUrl + '?emc=' + comId;
    datas.imgUrl = 'https://www.lgstatic.com/thumbnail_200x200/' + logo;
    // datas.title = '雇主评选|我是' + comName + '，请你进来一下，抱抱我呗';//#公司名称#请你投一票！还能给老板提心愿，没准会实现喔！
    datas.title = comName + '请你投一票！互联网最酷的公司都在拉勾评选！';
    datas.desc = '拉勾2016年度雇主评选火热进行中！';
    datas.activityType = 'ACTIVITY_H5_GZPXSC_A';
    console.log(datas);
    share(datas);
}
//打开新的公司生成页面
function openCreatePage() {
    window.location.href = baseUrl;
}

function judgeUrl(swiper) {
    var comId = getJsUrl(window.location.href)['emc'];
    if (comId) { //有公司id
        toComCover(swiper, comId);
    } else { //没有公司id
        // swiper.removeSlide(0); 
        // scrollData['search_list'] = new scrollClass({
        // 	classname:'search_list',
        // 	height:252,
        // 	space:14,
        // 	number:4
        // });
        $('.loadingcover').addClass('search_hide');
        swiper.slideTo(1, 0, true);
        swiper.lockSwipes();
        // $('.search_create').click(function(){
        // 	getComPrizePage(147);
        // });
    }
}


function getComPrizePage(comid) {
    var _url = '/activityapi/ambition/loadGZPX';
    var _data = {
        companyId: comid
    }
    ajax(_url, _data, 'get', function(data) {
        setShare(data.company.id, data.company.companyshortname, data.company.logo);
        setAllComPage(data);
        $('.section2 .search_create_loading').removeClass('search_hide');
        mySwiperParent.slideTo(3);
    });
}

//根据comId 请求接口 获取公司信息
function toComCover(swiper, comid) {
    var _url = '/activityapi/ambition/loadGZPX';
    var _data = {
        companyId: comid
    }
    ajax(_url, _data, 'get', function(data) {
        // console.log(data);
        $('.loadingcover').addClass('search_hide');
        var comId = data.company.id;
        var logoSrc = data.company.logo;
        var shortName = data.company.companyshortname;
        setShare(comId, shortName, logoSrc);
        $('.section1 .logo').attr('src', 'https://www.lgstatic.com/' + logoSrc);
        $('.section1 .com-name').html(shortName);
        setAllComPage(data);
        swiper.removeSlide(1);
        swiper.slideTo(0);
        swiper.unlockSwipes();
    });
}

function setComInfo(data) {
    $('.section3 .com-name').html(data.company.companyshortname); //
    $('.section3 .com-logo').attr('src', 'https://www.lgstatic.com/' + data.company.logo);
    $('.section3 .day').html(data.days);
    if (data.companyLeader && data.companyLeader.name && data.companyLeader.photo) {
        $('.com-ceo').attr('src', 'https://www.lgstatic.com/' + data.companyLeader.photo.replace('/www.lgstatic.com/', '') || 'www/static/community/modules/common/img/avatar_default_7d46160.png');
        $('.com-person').html(data.company.companyshortname + data.companyLeader.position + data.companyLeader.name);
    } else {
        $('.hasinfo').hide();
        $('.hasnoinfo').show();
    }

}

function setAllComPage(data) {
    $('.card.search_hide').removeClass('search_hide');
    scrollData.currentCompany = data.companyAwards;
    bindChange();
    createCard(swiperChlidren, data);
    arrangeTagList(data, tagList);
    setTagArea(data);
    setComInfo(data);

    // 判断链接
    var /*app = getUrlParam('lagoufrom',0),*/
        againHref = 'https://activity.lagou.com/activity/dist/emAwardCreate/m_index.html',
        againElem = $('.join');
    console.log('setAllComPage lagoufrom: ' + app);
    switch (app.toLowerCase().trim()) {
        case 'android':
        case 'ios':
            againElem.attr('href', againHref + '?lagoufrom=' + app.toLowerCase().trim());
            break;
    }
}

function arrangeTagList(data, tagList) {
    if (data.withList) {
        $.each(data.withList, function(index, item) {
            var id = item.item - 1;
            var num = item.num;
            // console.log(tagList);
            var tagItem = tagList[id] || tagList[18];
            tagItem.num = num;
        })
    }
}

//解析URL
function getJsUrl(url) {
    var pos, str, para, parastr;
    var array = [];
    str = url;
    parastr = str.split("?")[1];
    if (typeof parastr == 'undefined') {
        return 'undefined'
    } else {
        var arr = parastr.split("&");
        for (var i = 0; i < arr.length; i++) {
            array[arr[i].split("=")[0]] = arr[i].split("=")[1];
        }
        return array;
    }
}

function ajax(_url, _data, type, callFuc) {
    var _host = 'https://activity.lagou.com';
    // var _host = 'http://10.1.194.46:8080';
    $.ajax({
        type: type,
        url: _host + _url,
        // dataType: 'jsonp',
        // jsonp: 'jsoncallback',
        data: _data,
        cache: false,
        success: function(data) {
            if (data.state == 200) {
                if (callFuc) {
                    // var data = {}
                    callFuc(data.content);
                }
            } else {
                console.log(data.msg);
            }

        },
        error: function(xhr, type) {
            // alert(xhr);
        }
    })
}

function getSource() {
    // var isAPP = getUrlParam('lagoufrom',2);
    if (isAPP) {
        return 'LAGOU'
    }
    return 'WEIXIN'
}

function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}

var isAPP = getUrlParam('lagoufrom', 2);
var app = getUrlParam('lagoufrom', 0).toLowerCase().trim();
var appType = getUrlParam('appType', 0).trim();
var weixin = isWeiXin();
var isPC = IsPC();

init();

function init() {
    if (weixin) { // 微信授权
        weixinAuth();
    } else {
        if (isAPP) { // app 授权
            appAuth();
        } else { // 浏览器
            if (isPC) {
                weixinAuth();
            } else {
                browserAuth();
            }

        }
    }
    // initTotal();
}

function browserAuth() {
    $.ajax({
        type: 'get',
        url: 'https://activity.lagou.com/activityapi/basic/ifLogin',
        success: function(data) {
            if (data.success) {
                var state = data.state;
                if (state == 200) { //登录成功
                    currentLoginStatus = true;
                    initTotal();
                } else if (state == 201) { // 无登录用户
                    window.location.href = 'https://activity.lagou.com/activityapi/basic/login.html?redirect=' + window.location.href;
                }
            } else {
                console.log(data.message);
                currentLoginStatus = true;
                initTotal();
            }
        },
        error: function(error) {
            console.log(error.message);
            currentLoginStatus = true;
            initTotal();
        }
    });
}

function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"
    ];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

function appAuth() {
    var checkcode = getUrlParam('checkCode', 0);
    if (checkcode) {
        $.ajax({
            type: 'get',
            url: 'https://activity.lagou.com/activityapi/basic/appAutoLogin.json', //https://activity.lagou.com/activityapi/basic/ifLogin',
            data: {
                checkCode: checkcode
            },
            success: function(data) {
                if (data.state == 200) { // 已登录
                    currentLoginStatus = true;
                    initTotal();
                }
            },
            error: function(error) {
                console.log(error.message);
                currentLoginStatus = true;
                initTotal();
            }
        });
    } else {
        window.location.href = 'https://www.lagou.com/center/login?forward=' + window.location.href;
    }
}

function weixinAuth() {
    $.ajax({
        type: 'get',
        url: 'https://activity.lagou.com/activityapi/weixin/hasOpenId',
        success: function(data) {
            if (data.state == 200) { // 已登录
                currentLoginStatus = true;
                initTotal();
            } else if (data.state == 201) { // 未登录
                var weixinlogin = window.sessionStorage.getItem('weixinlogin');
                if (weixinlogin == 1) {
                    // window.sessionStorage.setItem('weixinlogin',1);
                    currentLoginStatus = true;
                    initTotal();
                } else if (!weixinlogin) {
                    window.sessionStorage.setItem('weixinlogin', 1);
                    window.location.href = 'https://activity.lagou.com/activityapi/weixin/auth.html?url=' + window.location.href;
                }
                /*
                $.ajax({
                	type:'get',
                	url:'https://activity.lagou.com/activityapi/weixin/authOpenId.html',
                	success:function(data){
                		console.log('授权成功');
                	},
                	error:function(){
                		console.log('授权失败');
                	}
                });
                */
            }
        },
        error: function(error) {
            console.log(error.message);
            currentLoginStatus = true;
            initTotal();
        }
    });
}

function initTotal() {
    if (currentLoginStatus) {
        var c = document.createElement("script");
        c.type = "text/javascript";
        c.async = !0;
        c.src = 'https://www.lgstatic.com/activity/js/analytics.js';
        // b && (c.id = b);
        var d = document.getElementsByTagName("script")[0];
        d['parentNode'].insertBefore(c, d)
    }
    // alert(document.body.clientHeight);
    $('.section2').css('height', document.body.clientHeight + 'px');
    initSearchEvent();
    initSearchListEvent();
    initSearchCreateEvent();

    // if (app == 'ios' && window.history && window.history.pushState) {
    // 	$(window).on('popstate', function() {
    // 		var hashLocation = location.hash;
    // 		var hashSplit = hashLocation.split("#");
    // 		var hashName = hashSplit[1];

    // 		if (hashName !== '') {
    // 			var hash = window.location.hash;
    // 			if (hash === '') {
    // 				console.log('后退');
    // 				// window.history.go(-(window.history.length-1));
    // 				window.location.href = 'http://www.lagou.com/h5/close';
    // 			}
    // 		}
    // 	});
    // 	window.history.pushState('forward', null, 'https://activity.lagou.com/activity/dist/emAwardCreate/m_index.html?lagoufrom=ios#forward');
    // }
    // alert('后退:' +app);
    if (app == 'ios' && window.history && window.history.pushState) {
        // alert('后退outer');
        $(window).on('popstate', function() {
            var hashLocation = location.hash;
            var hashSplit = hashLocation.split("#");
            var hashName = hashSplit[1];

            // alert('后退inner');
            if (hashName !== '') {
                var hash = window.location.hash;
                if (hash === '') {
                    // console.log('后退');
                    // alert('后退center');
                    // window.history.go(-(window.history.length-1));
                    window.location.href = 'lagou://lagou.com/h5/close';
                }
            }
        });
        window.history.pushState('forward', null, 'https://activity.lagou.com/activity/dist/emAwardCreate/m_index.html?lagoufrom=ios#forward');
    }
    // window.onorientationchange = orientationChange;
}

function orientationChange() {
    var outerLayer = $('body > .swiper-container.parent')[0];
    var body = document.body;
    // if(body.getAttribute("orient")=="landscape"){  
    // 	body.setAttribute("orient","portrait");  
    // }else{  
    // 	body.setAttribute("orient","landscape");  
    // }
    switch (window.orientation) {　　
        case 0:
            // $(body)[0].className = '';
            // alert("肖像模式 0");
            body.setAttribute("orient", "portrait");
            break;　　
        case -90:
            outerLayer.className = 'orientationf90';
            // alert("左旋 -90");
            body.setAttribute("orient", "landscape");
            break;　　
        case 90:
            outerLayer.className = 'orientation90';
            body.setAttribute("orient", "landscape");
            // alert("右旋 90");
            break;　　
        case 180:
            outerLayer.className = 'orientation180';
            // 　　alert("风景模式 180");
            body.setAttribute("orient", "portrait");　　
            break;
    }
}

function initSearchEvent() {
    $('.search_button').on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();

        var value = $('.search_input').val().trim();
        if (value && value.length > 1 && value != scrollData.requestCompany) {
            scrollData.requestCompany = value;

            var result = {
                success: true,
                state: 0,
                content: [{
                    id: 147,
                    companyshortname: "拉勾网",
                    companyname: "北京拉勾网络技术有限公司",
                    city: "北京"
                }, {
                    id: 116998,
                    companyshortname: "拉拉勾旅游网",
                    companyname: "上海拉拉勾电子商务有限公司",
                    city: "上海"
                }, {
                    id: 147,
                    companyshortname: "拉勾网",
                    companyname: "北京拉勾网络技术有限公司",
                    city: "北京"
                }, {
                    id: 116998,
                    companyshortname: "拉拉勾旅游网",
                    companyname: "上海拉拉勾电子商务有限公司",
                    city: "上海"
                }, {
                    id: 147,
                    companyshortname: "拉勾网",
                    companyname: "北京拉勾网络技术有限公司",
                    city: "北京"
                }, {
                    id: 116998,
                    companyshortname: "拉拉勾旅游网",
                    companyname: "上海拉拉勾电子商务有限公司",
                    city: "上海"
                }, {
                    id: 147,
                    companyshortname: "拉勾网",
                    companyname: "美丽未来展望现在",
                    city: "北京"
                }, {
                    id: 116998,
                    companyshortname: "拉拉勾旅游网",
                    companyname: "花样年华总社团公司",
                    city: "上海"
                }, {
                    id: 147,
                    companyshortname: "拉勾网",
                    companyname: "快乐无限集团",
                    city: "北京"
                }, {
                    id: 116998,
                    companyshortname: "拉拉勾旅游网",
                    companyname: "杭州百望山有限公司",
                    city: "上海"
                }]
            };
            // callback(result.content);   // 测试
            getCompanyList(callback);
        } else if (value && value.length == 1 && value != scrollData.requestCompany) {
            $('.search_tips').html('*公司名称不少于2个字').removeClass('search_hide');
            $('.search_init').removeClass('search_hide');
            $('.search_content').addClass('search_hide');
        } else if (value && $('.search_list').hasClass('search_hide')) {
            showCallback();
        } else if (value) {

        } else {
            $('.search_tips').html('*请输入公司名称').removeClass('search_hide');
            $('.search_init').removeClass('search_hide');
            $('.search_content').addClass('search_hide');
        }
    });

    $('.search_input').on('blur', function(e) {
        e.stopPropagation();
        e.preventDefault();

        var value = $('.search_input').val().trim();
        if (value && value.length > 1 && value != scrollData.requestCompany) {
            scrollData.requestCompany = value;
            var result = {
                success: true,
                state: 0,
                content: [{
                    id: 147,
                    companyshortname: "拉勾网",
                    companyname: "北京拉勾网络技术有限公司",
                    city: "北京"
                }, {
                    id: 116998,
                    companyshortname: "拉拉勾旅游网",
                    companyname: "上海拉拉勾电子商务有限公司",
                    city: "上海"
                }, {
                    id: 147,
                    companyshortname: "拉勾网",
                    companyname: "北京拉勾网络技术有限公司",
                    city: "北京"
                }, {
                    id: 116998,
                    companyshortname: "拉拉勾旅游网",
                    companyname: "上海拉拉勾电子商务有限公司",
                    city: "上海"
                }, {
                    id: 147,
                    companyshortname: "拉勾网",
                    companyname: "北京拉勾网络技术有限公司",
                    city: "北京"
                }, {
                    id: 116998,
                    companyshortname: "拉拉勾旅游网",
                    companyname: "上海拉拉勾电子商务有限公司",
                    city: "上海"
                }, {
                    id: 147,
                    companyshortname: "拉勾网",
                    companyname: "美丽未来展望现在",
                    city: "北京"
                }, {
                    id: 116998,
                    companyshortname: "拉拉勾旅游网",
                    companyname: "花样年华总社团公司",
                    city: "上海"
                }, {
                    id: 147,
                    companyshortname: "拉勾网",
                    companyname: "快乐无限集团",
                    city: "北京"
                }, {
                    id: 116998,
                    companyshortname: "拉拉勾旅游网",
                    companyname: "杭州百望山有限公司",
                    city: "上海"
                }]
            };
            // callback(result.content);   // 测试
            getCompanyList(callback);
        } else if (value && value.length == 1 && value != scrollData.requestCompany) {
            $('.search_tips').html('*公司名称不少于2个字').removeClass('search_hide');
            $('.search_init').removeClass('search_hide');
            $('.search_content').addClass('search_hide');
        } else if (value && $('.search_list').hasClass('search_hide')) {
            showCallback();
        } else if (value) {

        } else {
            $('.search_tips').html('*请输入公司名称').removeClass('search_hide');
            $('.search_init').removeClass('search_hide');
            $('.search_content').addClass('search_hide');
        }
    });

    function callback(data) {
        if (data && data.length > 0) {
            search_list = data;
            $('.search_tips').addClass('search_hide');
            showSearchList();
        } else {
            $('.search_tips').html('*您输入的公司名称不存在').removeClass('search_hide');
            $('.search_init').removeClass('search_hide');
            $('.search_content').addClass('search_hide');
        }
    }

    function showCallback() {
        if (search_list && search_list.length > 0) {
            showSearchListHTML();
            $('.search_tips').addClass('search_hide');
        } else {
            $('.search_tips').html('*您输入的公司名称不存在').removeClass('search_hide');
            $('.search_init').removeClass('search_hide');
            $('.search_content').addClass('search_hide');
        }
    }
}

function showSearchListHTML() {
    var html = getListHTML();
    var search_list = $('.search_list');
    var ul = search_list.children('ul');
    ul.html(html);
    search_list.removeClass('search_hide');
}

function initSearchListEvent() {
    $('.search_list').on('touchend', 'ul > li', function(e) {
        e.stopPropagation();
        e.preventDefault();

        // alert((new Date().getTime() - clickTime)+' , '+scrollData.isMoving);
        if (!scrollData.isMoving || (new Date().getTime() - clickTime) < 100) {
            var index = $(this).index();
            scrollData.confirmCompany = true;
            scrollData.companyID = search_list[index].id;
            getCurrentCompany(search_list[index], callback);
        } else {
            scrollData.isMoving = false;
        }
    });

    function callback() {
        var html = getCompanyHTML();
        $('.search_list').addClass('search_hide');
        $('.search_init').addClass('search_hide');
        $('.search_content').html(html).removeClass('search_hide');
    }
}

function initSearchCreateEvent() {
    $('.search_create').on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();

        if (scrollData.confirmCompany) {
            // 已经输入公司并选择公司
            // 请求公司的所有数据
            $('.search_list').addClass('search_hide');
            $('.section2 .search_create_loading').removeClass('search_hide');
            $('.section3 > .card').removeClass('search_hide');
            getComPrizePage(scrollData.companyID);
            // getCompany(function(data){
            // 	setRankHTML(data);
            // 	scrollData['rank-content'] = new scrollClass({
            // 		classname:'rank-content',
            // 		height:620,
            // 		space:3,
            // 		number:15.5
            // 	});
            // 	scrollData['rank-content'].setRank(2);
            // 	// 请求成功后跳转页面
            // 	mySwiperParent.slideTo((mySwiperParent.activeIndex+1));
            // });
        }
    });
    // 判断链接
    var /*app = getUrlParam('lagoufrom',0),*/
        searchInfoHref = 'https://activity.lagou.com/topic/bestEmployer.html',
        infoHrefElem = $('.search_info_href');
    console.log('initSearchCreateEvent lagoufrom: ' + app);
    switch (app.toLowerCase().trim()) {
        case 'android':
        case 'ios':
            infoHrefElem.attr('href', searchInfoHref + '?lagoufrom=' + app.toLowerCase().trim());
            break;
    }
}

function getCompanyList(callback) {
    var url = 'https://activity.lagou.com';
    // var url = 'http://10.1.194.46:8080';
    jQuery.ajax({
        type: 'get',
        url: url + '/activityapi/common/queryCompany.json?keyword=' + scrollData.requestCompany,
        //async:false,
        // dataType: 'jsonp',
        // jsonp:'jsoncallback',
        success: function(result) {
            if (result.success) {
                var data = result.content;
                callback(data);
            } else {
                console.log(result.msg);
            }
        },
        error: function(xhr, type) {
            alert('网络原因请重新尝试!');
        }
    });
}

/*****
 * 请求当前选中公司的信息
 */
function getCurrentCompany(company, callback) {
    var url = 'https://activity.lagou.com';
    // var url = 'http://10.1.194.46:8080';
    jQuery.ajax({
        type: 'get',
        url: url + '/activityapi/ambition/companyBaseInfo',
        //async:false,
        data: {
            companyId: company.id
        },
        // dataType: 'jsonp',
        // jsonp:'jsoncallback',
        success: function(result) {
            if (result.success) {
                var data = result.content;
                scrollData.company = data;
                callback();
            } else {
                console.log(result.msg);
            }
        },
        error: function(xhr, type) {
            alert('网络原因请重新尝试!');
        }
    });
}

/*
function getCompany(callback){
	jQuery.ajax({
		type: 'get',
		url: 'https://activity.lagou.com/activityapi/common/queryCompany.json?keyword='+txtVal,
		//async:false,
		dataType:'json',
		success: function(result){
			if(result.success){
				var data = result.content;
				callback(data);
			}else{
				console.log(result.msg);
			}
		},
		error: function(xhr, type){
			alert('网络原因请重新尝试!');
		}
	});
}
*/

function showSearchList() {
    showSearchListHTML();
    scrollData['search_list'] = new scrollClass({
        classname: 'search_list',
        height: 252,
        space: 14,
        number: 4,
        one: 53,
        fixedHeight: false
    });
}

function getListHTML() {
    var html = '';
    for (var i = 0; i < search_list.length; i++) {
        html += '<li class="">' + search_list[i].companyname + ' ></li>';
    }
    return html;
}

var awardTypes = {
    XRGZ: { type: '综合类', name: '年度新锐雇主' },
    ZJGZ: { type: '综合类', name: '年度最佳雇主' },
    HD: { type: '区域类', name: '华东地区年度最佳雇主' },
    HN: { type: '区域类', name: '华南地区年度最佳雇主' },
    HB: { type: '区域类', name: '华北地区年度最佳雇主' },
    'O2O': { type: '行业类', name: 'O2O领域年度最佳雇主' },
    '电子商务': { type: '行业类', name: '电商领域年度最佳雇主' },
    '金融': { type: '行业类', name: '金融领域年度最佳雇主' },
    '游戏': { type: '行业类', name: '游戏领域年度最佳雇主' },
    '硬件': { type: '行业类', name: '硬件领域年度最佳雇主' },
    '教育': { type: '行业类', name: '教育领域年度最佳雇主' },
    '社交网络': { type: '行业类', name: '社交领域年度最佳雇主' },
    '企业服务': { type: '行业类', name: '企业服务领域年度最佳雇主' }
};

function dealAwards(awards) {
    var awardsOptions = [],
        award = {};
    for (var i = 0; i < awards.length; i++) {
        award = awardTypes[awards[i]];
        if (award) {
            awardsOptions.push({
                type: award.type,
                name: award.name
            });
        }
    }
    return awardsOptions;
}

function getCompanyHTML() {
    var company = scrollData.company.company,
        awards = scrollData.company.awards.split(/,/g),
        awardsOptions = dealAwards(awards);
    var html = '<div class="search_company_logo">' +
        '<img src="https://www.lgstatic.com/' + company.logo + '" />' +
        '</div>' +
        '<h3 class="search_company_name">' + company.companyname + '</h3>' +
        '<div class="search_award clearfix">' +
        '<div class="search_award_line"></div>' +
        '<div class="search_award_word">可评奖项</div>' +
        '<div class="search_award_line"></div>' +
        '</div>' +
        '<ul class="search_award_options">',
        type = '',
        words = 0;
    for (var i = 0; i < awardsOptions.length; i++) {
        switch (awardsOptions[i].type) {
            case '综合类':
                type = "";
                break;
            case '区域类':
                type = "search_option_icon_2";
                break;
            case '行业类':
                type = "search_option_icon_3";
                break;
            case '特别奖':
                type = "search_option_icon_4";
                break;
        }
        words = awardsOptions[i].name.trim().length;
        html += '<li class="search_' + words + ' clearfix">' +
            '<span class="search_image search_option_icon ' + type + ' search_image_size"></span>' +
            '<span class="search_option_type">' + awardsOptions[i].type + '</span>' +
            '<span class="search_option_se"></span>' +
            '<span class="search_option_name search_green">' + awardsOptions[i].name + '</span>' +
            '</li>';
    }
    html += '</ul>';
    return html;
}

function setRankHTML(data, awards) {
    var html = '',
        top = '';

    var award = dealAwards(awards),
        type = award[0].type,
        classname = '';
    switch (type) {
        case '综合类':
            classname = 'rank-subtitle-icon-1';
            break;
        case '区域类':
            classname = 'rank-subtitle-icon-2';
            break;
        case '行业类':
            classname = 'rank-subtitle-icon-3';
            break;
        default:
            classname = 'rank-subtitle-icon-1';
            break;
    }
    top = '<div class="rank-subtitle">-<span class="rank-subtitle-content"><span class="search_image rank-subtitle-icon ' + classname + ' search_image_size"></span><span class="rank-subtitle-word">' + type + '</span></span>-</div>' +
        '<div class="rank-title">' + award[0].name + '</div>';
    $('.rank-top').html(top);
    if (data) {
        for (var i = 0; i < data.length; i++) {
            html += '<li class="clearfix">' +
                '<div class="rank-company-rank">' + (i + 1) + '</div>' +
                '<div class="rank-company-name">' + data[i].message + '</div>' +
                '<div class="rank-company-support">' + data[i].num + '</div>' +
                '</li>';
        }
    }
    $('.rank-list').html(html);
}

function getRanking(o) {
    var startTime = new Date('2016/12/19 00:00:00').getTime();
    var currentTime = new Date().getTime();
    if (currentTime >= startTime) {
        window.location.href = 'https://activity.lagou.com/topic/2016voting.html?gzpx2016=h5';
        return;
    }
    $('.search_image_size').bind('click', function() {
        $('.rank-layer').hide();
    });
    var type = $(o).attr('type'),
        award = $(o).attr('award');
    // var shortname = $(o).attr('shortname');
    // $('.rank-title').html(shortname);	
    $('.rank-layer').show();

    setRankHTML(scrollData.currentCompany[award].voList, [award]);
    scrollData['rank-content'] = new scrollClass({
        classname: 'rank-content',
        height: 620,
        one: 40,
        space: 3,
        number: 15.5
    });
    scrollData['rank-content'].setRank(scrollData.currentCompany[award].voteCountVo.order);
    // scrollData['rank-content'] = new scrollClass({
    // 	classname:'rank-content',
    // 	height:620,
    // 	space:3,
    // 	number:15.5
    // });
}



$(function() {
    var movingX = function(position) {
        var deg = position * 20 / 30;
        $(".section1").css({
            'background-position-x': deg + 'px'
        });
    };
    var movingY = function(position) {
        var deg = position * 20 / 30;
        $(".section1").css({
            'background-position-y': deg + 'px'
        });
    };
    // 只能是放在lay上 如果是lay里面的 会消失
    window.addEventListener('deviceorientation', function(e) {
        var gamma = e.gamma;
        var beta = e.beta;
        if (gamma > -30 && gamma < 30) {
            movingX(gamma / 10);
        }
        if (beta > -20 && beta < 0) {
            movingY(beta / 5);
        }
    });
});


function getUrlParam(param, mode) { // mode:0 字符串  1: 布尔值   2: 拉勾APP 判断
    var search = window.location.search;
    var urlObj = {};
    if (search.indexOf('?') != -1) {
        var str = search.substr(1);
        var strArray = str.split('&');
        for (var i = 0; i < strArray.length; i++) {
            var c = strArray[i].split('=');
            urlObj[c[0]] = unescape(c[1]); //unescape:对通过 escape() 编码的字符串进行解码。
        }

        if (urlObj[param] != undefined) {
            switch (mode) {
                case 0:
                    if (urlObj[param] != 'undefined') {
                        return urlObj[param];
                    }
                    break;
                case 1:
                    if (urlObj[param] != 'undefined') {
                        return true;
                    }
                    break;
                case 2:
                    if (urlObj[param] == 'undefined' || urlObj[param] == 'ios' || urlObj[param] == 'android') {
                        // 当前链接为在APP中打开
                        return true;
                    }
                    break;
            }
        }
    }
    switch (mode) {
        case 0:
            return '';
        case 1:
        case 2:
            return false;
    }
}