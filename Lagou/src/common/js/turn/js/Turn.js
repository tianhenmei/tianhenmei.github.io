var TurnBook = function(config){
    this.width = 0;
    this.height = 0;
    this.currentPage = null;
    this.towards = {
        left:'left',
        right:'right'
    };
    this.classPastCommon = 'page';
    this.totalPage = null;
    this.pageCenter = null;
    this.startPage = 0;
    this.now = 0;
    this.last = 0;
    this.isAnimating = false;
    this.pagelength = 0;
    this.animationTime = 600;
    this.hasLeft = false;
    this.hasRight = false;
    this.left = 0;
    this.right = 0;
    this.turnbookshadow = '';
    this.shadowWidth = 0;
    this.shadow = '';
    this.shadowParent = '';
    this.sequence = {
        normal:true,
        list:{},
        inlist:{}
    };

    var GC = {
        width:window.outerWidth ? window.outerWidth : document.body.clientWidth,
        height:window.outerHeight ? window.outerHeight : document.body.clientHeight
    };
    var self = this;

    this.getStyle = function(){
        var styleCSS = '.moveToLeft {' +
            '-webkit-transform:translate3d(0,0,0);'+
            'transform:translate3d(0,0,0);'+
            '-webkit-animation: moveToLeft '+(self.animationTime/1000)+'s linear both;' +
            'animation: moveToLeft '+(self.animationTime/1000)+'s linear both;' +
        '}' +
        '@-webkit-keyframes moveToLeft {' +
            '0% {' +
                'width:'+self.width+'px;/*clip:rect(0 '+self.width+'px '+self.height+'px 0);*/'+
            '}' +
            '100% {' +
                'width:0;/*clip:rect(0 0 '+self.height+'px 0);*/'+
            '}' +
        '}' +
        '@keyframes moveToLeft {' +
            '0% {' +
                'width:'+self.width+'px;/*clip:rect(0 '+self.width+'px '+self.height+'px 0);*/'+
            '}' +
            '100% {' +
                'width:0;/*clip:rect(0 0 '+self.height+'px 0);*/'+
            '}' +
        '}' +
        '.moveToRight {' +
            '-webkit-transform:translate3d(0,0,0);'+
            'transform:translate3d(0,0,0);'+
            'animation:moveToRight '+(self.animationTime/1000)+'s linear both;' +
            '-webkit-animation:moveToRight '+(self.animationTime/1000)+'s linear both;' +
        '}' +
        '@keyframes moveToRight {' +
            '0% {' +
                'width:'+self.width+'px;/*clip:rect(0 '+self.width+'px '+self.height+'px 0);*/'+
            '}' +
            '100% {' +
                'width:0;/*clip:rect(0 '+self.width+'px '+self.height+'px '+self.width+'px);*/'+
            '}' +
        '}' +
        '@-webkit-keyframes moveToRight {' +
            '0% {' +
                'width:'+self.width+'px;/*clip:rect(0 '+self.width+'px '+self.height+'px 0);*/'+
            '}' +
            '100% {' +
                'width:0;/*clip:rect(0 '+self.width+'px '+self.height+'px '+self.width+'px);*/'+
            '}' +
        '}' +
        '.moveFromRight {' +
            '-webkit-transform:translate3d(0,0,0);'+
            'transform:translate3d(0,0,0);'+
            'animation:moveFromRight '+(self.animationTime/1000)+'s linear both;' +
            '-webkit-animation:moveFromRight '+(self.animationTime/1000)+'s linear both;' +
        '}' +
        '@keyframes moveFromRight {' +
            '0% {' +
                'width:0;/*clip:rect(0 '+self.width+'px '+self.height+'px 0);*/'+
            '}' +
            '100% {' +
                'width:'+self.width+'px;/*clip:rect(0 '+self.width+'px '+self.height+'px '+self.width+'px);*/'+
            '}' +
        '}' +
        '@-webkit-keyframes moveFromRight {' +
            '0% {' +
                'width:0;'+
            '}' +
            '100% {' +
                'width:'+self.width+'px;'+
            '}' +
        '}' +
        '.leftToLeft {' +
            '-webkit-transform:scale3d(-1,1,1);'+
            'transform:scale3d(-1,1,1);'+
            'animation:leftToLeft '+(self.animationTime/1000*self.left/self.width)+'s linear both;' +
            '-webkit-animation:leftToLeft '+(self.animationTime/1000*self.left/self.width)+'s linear both;' +
        '}' +
        '@keyframes leftToLeft {' +
            '0% {' +
                'width:0;'+
                'left:'+self.left+'px;'+
            '}' +
            '100% {' +
                'width:'+self.left+'px;'+   //self.width
                'left:'+(0)+'px;'+  // (self.left-self.width)
            '}' +
        '}'+
        '@-webkit-keyframes leftToLeft {' +
            '0% {' +
                'width:0;'+
                'left:'+self.left+'px;'+
            '}' +
            '100% {' +
                'width:'+self.left+'px;'+   //self.width
                'left:'+(0)+'px;'+  // (self.left-self.width)
            '}' +
         '}' +
        '.rightToRight {' +
            '-webkit-transform:translate3d(0,0,0);'+
            'transform:translate3d(0,0,0);'+
            'left:'+(self.left+self.width)+'px;'+
            'animation:rightToRight '+(self.animationTime/1000*self.right/self.width)+'s linear both;' +
            '-webkit-animation:rightToRight '+(self.animationTime/1000*self.right/self.width)+'s linear both;' +
        '}'+
        '@keyframes rightToRight {' +
            '0% {' +
                'width:0;'+
            '}' +
            '100% {' +
                'width:'+self.right+'px;'+  //self.width
            '}' +
        '}'+
        '@-webkit-keyframes rightToRight {' +
            '0% {' +
                'width:0;'+
            '}' +
            '100% {' +
                'width:'+self.right+'px;'+  //self.width
            '}' +
        '}' +
        '.rightToLeft {' +
            '-webkit-transform:translate3d(0,0,0);'+
            'transform:translate3d(0,0,0);'+
            '-webkit-transform-origin:0 0;'+
            'transform-origin:0 0;'+
            'animation:rightToLeft '+(self.animationTime/1000)+'s linear both;' +
            '-webkit-animation:rightToLeft '+(self.animationTime/1000)+'s linear both;' +
        '}'+
        '@keyframes rightToLeft {' +
            '0% {' +
                'left:'+(self.width - self.shadowWidth / 2)+'px;'+
            '}' +
            '100% {' +
                'left:'+(- self.shadowWidth / 2)+'px;'+
            '}' +
        '}'+
        '@-webkit-keyframes rightToLeft {' +
            '0% {' +
                'left:'+(self.width - self.shadowWidth / 2)+'px;'+
            '}' +
            '100% {' +
                'left:'+(- self.shadowWidth / 2)+'px;'+
            '}' +
        '}' +
        '.leftToRight {' +
            '-webkit-transform:translate3d(0,0,0);'+
            'transform:translate3d(0,0,0);'+
            'animation:leftToRight '+(self.animationTime/1000)+'s linear both;' +
            '-webkit-animation:leftToRight '+(self.animationTime/1000)+'s linear both;' +
        '}'+
        '@keyframes leftToRight {' +
            '0% {' +
                'left:'+(- self.shadowWidth / 2)+'px;'+
            '}' +
            '100% {' +
                'left:'+(self.width - self.shadowWidth / 2)+'px;'+
            '}' +
        '}'+
        '@-webkit-keyframes leftToRight {' +
            '0% {' +
                'left:'+(- self.shadowWidth / 2)+'px;'+
            '}' +
            '100% {' +
                'left:'+(self.width - self.shadowWidth / 2)+'px;'+
            '}' +
        '}';
        return styleCSS;
    };

    this.addStyle = function(){
        var style = document.createElement('style');
        style.type = "text/css";
        if(style.styleSheet){
            style.styleSheet.cssText = self.getStyle();
        }else{
            style.innerHTML = self.getStyle();
        }
        document.getElementsByTagName("head")[0].appendChild(style);
    };

    this.addShadow = function(){
        if(self.turnbookshadow){
            var div = document.createElement('div');
            div.style.width = self.width+'px';
            div.style.height = self.height+'px';
            div.style.position = 'absolute';
            div.style.left = self.left + 'px';
            div.style.top = self.totalPage.css('top');
            div.style.overflow = 'hidden';
            div.style.display = 'none';
            div.style.zIndex = '21';
            div.id = 'shadowParent';

            var img = document.createElement('img');
            img.src = self.turnbookshadow;
            img.style.position = 'absolute';
            img.style.left = (self.width - self.shadowWidth / 2) + 'px';
            img.style.top = 0;
            img.style.width = self.shadowWidth+'px';
            img.style.height = self.height+'px';
            img.style.opacity = 0.8;
            img.id = 'turnbookshadow';

            div.appendChild(img);

            document.body.appendChild(div);
            self.shadowParent = $('#shadowParent');
            self.shadow = $('#turnbookshadow');
        }
    };

    this.initData = function(){
        if(self.startPage > 0){
            self.now = self.startPage;
            self.last = self.startPage;
        }
        if(!self.width){
            self.width = GC.width;
        }
        if(!self.height){
            self.height = GC.height;
        }
        if(self.totalPage){
            self.pagelength = self.totalPage.length;
        }

        //if(self.hasLeft){
            self.left = parseFloat(self.totalPage.css('left'));
        //}
        //if(self.hasRight){
            self.right = parseFloat(self.totalPage.css('right'));
        //}

        self.pageCenter.css({
            width:self.width,
            height:self.height
        });
        self.addStyle();

        self.addShadow();
    };

    this.initConfig = function(config){
        for( var attr in config ){
            switch(attr){
                case 'width':
                case 'height':
                case 'currentPage':
                case 'totalPage':
                case 'pageCenter':
                case 'animationTime':
                case 'hasLeft':
                case 'hasRight':
                case 'turnbookshadow':
                case 'shadowWidth':
                case 'classPastCommon':
                case 'startPage':
                    self[attr] = config[attr];
                    break;
                case 'sequence':
                    for( var ss in config[attr] ){
                        switch(ss){
                            case 'normal':
                                self[attr][ss] = config[attr][ss];
                                break;
                            case 'list':
                                self[attr][ss] = JSON.parse(JSON.stringify(config[attr][ss]));
                                break;
                            case 'inlist':
                                self[attr][ss] = JSON.parse(JSON.stringify(config[attr][ss]));
                                break;
                        }
                    }
                    break;
            }
        }
        self.initData();
    };

    this.turnPage = function(page){
        if(page != self.now){
            self.last = self.now;
            self.now = page;
            if(self.last > self.now){
                self.pageMove(self.towards.right);
            }else if(self.last < self.now){
                self.pageMove(self.towards.left);
            }
        }
    };

    this.pageMove = function(tw){
        var nowpage = "."+self.classPastCommon+ self.now,
            lastpage = "."+self.classPastCommon+ self.last;
        var outclass = '',
            inclass = '',
            afterClass = '',
            shadowClass = '';
        switch (tw) {
            case self.towards.left:
                outclass = 'moveToLeft';
                if(self.hasLeft){
                    afterClass = 'leftToLeft';
                }
                shadowClass = 'rightToLeft';
                break;
            case self.towards.right:
                outclass = 'moveToRight';
                inclass = 'moveFromRight';
                if(self.hasRight){
                    afterClass = 'rightToRight';
                }
                shadowClass = 'leftToRight';
                break;
        }
        self.isAnimating = true;

        if(self.now > self.last){
            $(lastpage).css({
                'z-index':10
            }).removeClass('leftToLeft').removeClass('rightToRight').addClass(outclass);
            $(nowpage).css('z-index',9).removeClass('leftToLeft').removeClass('rightToRight');
        }else{
            $(lastpage).css({
                'z-index':9
            }).removeClass('leftToLeft').removeClass('rightToRight');
            $(nowpage).css({
                'z-index':10
            }).removeClass('leftToLeft').removeClass('rightToRight').addClass(inclass);
        }
        if(self.shadow){
            self.shadowParent.css('display','block');
            self.shadow.addClass(shadowClass);
        }
        setTimeout(function () {
            self.shadowParent.css('display','none');
            $(lastpage)
                .removeClass(outclass)
                .css('z-index',1)
                .addClass(afterClass);
            if(self.hasRight && tw == self.towards.right){
                $(lastpage).css('z-index',self.pagelength - self.last);
            }
            $(nowpage).removeClass(inclass).css({
                'z-index':10
            });
            if(self.shadow){
                self.shadow.removeClass(shadowClass);
            }
            self.isAnimating = false;
        },self.animationTime);
    };

    this.touchstartHandler = function(e){
        e.preventDefault();
    };

    this.swipeLeftHandler = function(e){
        e.preventDefault();
        if (self.isAnimating) return;
        self.last = self.now;
        if (self.now != self.pagelength-1) {
            self.now = self.last + 1;

            if(!self.sequence.normal && self.sequence.list[''+self.last]){
                self.now = self.sequence.list[''+self.last];
            }
            self.pageMove(self.towards.left);
        }
    };

    this.swipeRightHandler = function(e){
        e.preventDefault();
        if (self.isAnimating) return;
        self.last = self.now;
        if (self.now != 0) {
            self.now = self.last - 1;

            if(!self.sequence.normal && self.sequence.inlist[''+self.last]){
                self.now = self.sequence.inlist[''+self.last];
            }

            self.pageMove(self.towards.right);
        }
    };

    this.initEvent = function(){
        self.pageCenter.on("touchmove" ,self.touchstartHandler);
        self.pageCenter.swipeLeft(self.swipeLeftHandler);
        self.pageCenter.swipeRight(self.swipeRightHandler);
    };

    this.init = function(config){
        self.initConfig(config);
        self.initEvent();
    };

    self.init(config);
};

/**必须引用 zepto.min.js *******/


var page0 = $('.page0');
var turnbook = new TurnBook({
    //width:page0.width(),
    //height:page0.height(),
    sequence:{   // 是否正常顺序翻页，正常不需词参数
        normal:false,  // 如果不正常，normal: false
        list:{   // （向左翻页）不正常时列表对应（只需列出不正常的）
            '3':5,
            '4':5
        },
        inlist:{ // （向右回翻）不正常时列表对应（只需列出不正常的）
            '5':2
        }
    },
    hasLeft:false,
    hasRight:false,
    classPastCommon:'page',   // 默认page
    startPage:0,   // 开始翻页的索引。默认从 0 开始
    totalPage:$('.page'),
    pageCenter:$('.pageContent'),
    turnbookshadow:'images/turnbook_shadow.png',
    shadowWidth:(100/(750/16))*parseFloat($('html').css('font-size')),
    animationTime:600
});

$('.button').on('touchstart',function(e){
    e.stopPropagation();
    e.preventDefault();

    turnbook.turnPage(3);
});

$(window).on('touchstart',function(e){
    e.preventDefault();
});
$(window).on('touchmove',function(e){
    e.preventDefault();
});
