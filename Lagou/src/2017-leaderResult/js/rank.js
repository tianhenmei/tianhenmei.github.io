var swiperChlidren;

var search_list = {};
var scrollData = {
    'rank': {},
    confirmCompany: false, // 是否选择公司
    company: {},
    isMoving: false
};
var clickTime = 0;
var mySwiperParent = null;
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
    this.move = {
        sx:0,
        sy:0,
        ex:0,
        ey:0
    },
    this.index = 0;
    this.number = 0;
    this.space = 0;
    this.scale = 0;
    this.fixedHeight = true;

    var self = this;
    this.init = function(options) {
        var elem = options.hasOwnProperty('parentIndex')
                ? $('.' + options.parentClassname).eq(options.parentIndex).find('.'+options.classname).eq(options.index)
                : $('.' + options.classname).eq(options.index),
            ul = elem.children('ul'),
            li = ul.children('li'),
            bar = elem.parent('.rank-parent').find('.' + options.classname + '_bar'),
            length = options.length ? options.length : li.length,
            one = length > 0 ? li.eq(0).height() : 0;
        
        self.initHeight = options.height;
        self.elemHeight = self.getRem(options.elemHeight) // elem.height();
        self.classname = options.classname;
        self.elem = elem[0];
        self.ul = ul;
        self.li = li;
        self.bar = bar;
        self.index = options.index;
        self.length = Math.ceil(length / 3);
        self.one = options.one ? self.getRem(options.one) : one;
        self.height = self.one* self.length
            + parseFloat(ul.css('padding-top')) + parseFloat(ul.css('padding-bottom'))
            + parseFloat(ul.css('margin-top')) + parseFloat(ul.css('margin-bottom'))
            - self.getRem(self.initHeight);
        // console.log(ul)
        // console.log(ul.css('padding-top')+', ' + ul.css('padding-top'))
        // console.log(self.one + ', '+self.length+' , '+self.getRem(self.initHeight)+', '+self.height)
        self.number = options.number;
        self.space = options.space;
        self.reduce = options.reduce ? self.getRem(options.reduce) : 0;
        self.barHeightRem = self.getRem(options.barHeight)
        self.barHeight = self.barHeightRem * self.number / self.length; //self.elemHeight * self.number / self.length;
        
        self.scale = (self.barHeightRem - self.barHeight - self.getRem(self.space) * 2) / ((self.length - self.number) * self.one - self.reduce);
        self.fixedHeight = options.fixedHeight == undefined ? true : !!options.fixedHeight;
        self.leftCallback = options.leftCallback ? options.leftCallback : function(){}
        self.rightCallback = options.rightCallback ? options.rightCallback : function(){}
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
            self.initEvent();
            // elem[0].removeEventListener('touchstart', scrollData[self.classname].startScroll, false);
            // elem[0].removeEventListener('touchmove', scrollData[self.classname].moveScroll, false);
            // elem[0].removeEventListener('touchend', scrollData[self.classname].endScroll, false);
        }
    };

    this.initEvent = function() {
        // var elem = $('.' + self.classname).eq(self.index)[0];
        var elem = self.elem;
        elem.removeEventListener('touchstart', self.startScroll, false);
        elem.removeEventListener('touchmove', self.moveScroll, false);
        elem.removeEventListener('touchend', self.moveScroll, false);

        elem.addEventListener('touchstart', self.startScroll, false);
        elem.addEventListener('touchmove', self.moveScroll, false);
        elem.addEventListener('touchend', self.endScroll, false);
    };

    this.destory = function(){
        var elem = $('.' + self.classname).eq(self.index)[0];
        elem.removeEventListener('touchstart', self.startScroll, false);
        elem.removeEventListener('touchmove', self.moveScroll, false);
        elem.removeEventListener('touchend', self.moveScroll, false);
    };

    this.startScroll = function(e) {
        e.stopPropagation();
        e.preventDefault();

        var touch = e.targetTouches[0];
        scrollData.isMoving = false;
        clickTime = new Date().getTime();
        scrollData[self.classname].move.ex = 0
        scrollData[self.classname].move.ey = 0
        scrollData[self.classname].move.sx = touch.clientX;
        scrollData[self.classname].move.sy = touch.clientY;
        if (scrollData[self.classname].length > scrollData[self.classname].number) {
            scrollData[self.classname].start = touch.clientY;
            scrollData[self.classname].top = parseFloat(scrollData[self.classname].ul.css('top'));
        }
    };

    this.moveScroll = function(e) {
        e.stopPropagation();
        e.preventDefault();
        var touch = e.targetTouches[0]
        scrollData[self.classname].move.ex = touch.clientX;
        scrollData[self.classname].move.ey = touch.clientY;

        if (scrollData[self.classname].length > scrollData[self.classname].number) {
            scrollData.isMoving = true;
            var direction = touch.clientY - scrollData[self.classname].start;
            var ele = self.elem;//$('.' + self.classname)[self.index];

            direction = direction > 0 ? 1 : -1;
            scrollData[self.classname].end = touch.clientY - scrollData[self.classname].start + scrollData[self.classname].top
            if(/rank-scroll-bottom/g.test(ele.className)){
                ele.className = ele.className.replace(' rank-scroll-bottom','');
            }
            if (direction == 1 && scrollData[self.classname].end >= 0) { // 向上
                scrollData[self.classname].end = 0;
            } else if (direction == -1 && scrollData[self.classname].end <= -scrollData[self.classname].height) { // 向下
                scrollData[self.classname].end = -scrollData[self.classname].height;
                ele.className += ' rank-scroll-bottom'
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

    this.endScroll = function(e){
        e.stopPropagation();
        e.preventDefault();
        
        // console.log(scrollData[self.classname].move)
        if(scrollData[self.classname].move.ex && scrollData[self.classname].move.ey 
            && scrollData[self.classname].move.sx && scrollData[self.classname].move.sy){
            var x = scrollData[self.classname].move.ex - scrollData[self.classname].move.sx,
                y = scrollData[self.classname].move.ey - scrollData[self.classname].move.sy
            if(Math.abs(x) > Math.abs(y)){  // 左右滑动
                if(x < 0){  // 左滑：left, 显示上一个  pre
                    self.leftCallback();
                }else if(x > 0){  // 右滑：right, 显示上一个  next
                    self.rightCallback();
                }
            }
        }
    },

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
        var fontSize = parseFloat(document.getElementsByTagName("html")[0].style.fontSize)
        return value / (750 / 16) * fontSize
        // var scale = 1206 / 750,
        //     currentScale = GC.h / GC.w,
        //     fontSize = GC.w / (10 / currentScale * scale);
        // return value / 750 * 10 * fontSize;
        // return value / 750 * document.documentElement.clientWidth;
    }

    self.init(options);
};

// 普通
// scrollData['search_list'] = new scrollClass({
//     classname: 'search_list',
//     height: 252,
//     space: 14,
//     number: 4,
//     one: 53,
//     fixedHeight: false
// });
// 带排行榜，可跳到当前排名处
// scrollData['rank-content'] = new scrollClass({
//     classname: 'rank-content',
//     height: 620,
//     one: 40,
//     space: 3,
//     number: 15.5
// });



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