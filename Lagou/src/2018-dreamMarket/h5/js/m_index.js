(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
    "use strict";
    var bgmusic_button = null,
        audio = null;
    function bgMusicPlay(){
        var bgmusic_button = $(".bgmusic");
        var audio = document.getElementById("music");
        audio.preload = 'auto';
        audio.loop = 'true'
        audio.play();

        //webPlayAudio();

        function webPlayAudio(){
            var context,
                dogBarkingBuffer;
            init();
            function init() {
                try {
                    // Fix up for prefixing
                    window.AudioContext = window.AudioContext||window.webkitAudioContext;
                    context = new AudioContext();
                }
                catch(e) {
                    alert('Web Audio API is not supported in this browser');
                }
            }

            var source = null;
            var audioBuffer = null;
            function stopSound() {
                if (source) {
                    source.noteOff(0); //立即停止
                }
            }
            function playSound() {
                var absn = context.createBufferSource();
                var analyser = context.createAnalyser();
                absn.connect(analyser);
                absn.connect(context.destination);
                absn.buffer = audioBuffer;
                absn.loop = true;
                absn.start(0);

                /*source = context.createBufferSource();
                var analyser = context.createAnalyser();
                source.connect(analyser);
                source.connect(context.destination);
                source.buffer = audioBuffer;
                source.loop = true;
                //source.noteOn(0); //立即播放
                //(source.start || source.noteOn)(0);
                if(source.start){
                    source.start(0);
                }else if(source.noteOn){
                    source.noteOn(0);
                }*/
            }
            function initSound(arrayBuffer) {
                context.decodeAudioData(arrayBuffer, function(buffer) { //解码成功时的回调函数
                    audioBuffer = buffer;
                    playSound();
                }, function(e) { //解码出错时的回调函数
                    console.log('Error decoding file', e);
                });
            }
            function loadAudioFile(url) {
                var xhr = new XMLHttpRequest(); //通过XHR下载音频文件
                xhr.open('GET', url, true);
                xhr.responseType = 'arraybuffer';
                xhr.onload = function(e) { //下载完成
                    initSound(this.response);
                };
                xhr.send();
            }
            loadAudioFile('images/bg.mp3');
        }

        // bgmusic_button.click(function(e){
        //     //e.stopPropagation();
        //     if($(this).hasClass('open')){
        //         audio.pause();

        //         bgmusic_button.removeClass("open").addClass("close");
        //     }else{
        //         audio.play();

        //         bgmusic_button.removeClass("close").addClass("open");
        //     }
        // });

        autoPlayMusic(audio);
        // 音乐播放
        function autoPlayMusic(audio) {
            // 自动播放音乐效果，解决浏览器或者APP自动播放问题
            function musicInBrowserHandler() {
                musicPlay(audio,true);
                document.body.removeEventListener('touchstart', musicInBrowserHandler);
            }
            document.body.addEventListener('touchstart', musicInBrowserHandler);

            // 自动播放音乐效果，解决微信自动播放问题
            function musicInWeixinHandler() {
                musicPlay(audio,true);
                document.addEventListener("WeixinJSBridgeReady", function () {
                    musicPlay(audio,true);
                }, false);
                document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
            }
            document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
        }
        function musicPlay(audio,isPlay) {
            if (isPlay && audio.paused) {
                audio.play();
            }
            if (!isPlay && !audio.paused) {
                audio.pause();
            }
        }

        //autoPlayMusic(audio);

        // 音乐播放
        /*function autoPlayMusic(audio) {
            // 自动播放音乐效果，解决浏览器或者APP自动播放问题
            function musicInBrowserHandler() {
                audio.play();
                document.body.removeEventListener('touchstart', musicInBrowserHandler);
            }
            document.body.addEventListener('touchstart', musicInBrowserHandler);

            // 自动播放音乐效果，解决微信自动播放问题
            function musicInWeixinHandler() {
                audio.play();
                document.addEventListener("WeixinJSBridgeReady", function () {
                    audio.play();
                }, false);
                document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
            }
            document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
        }*/


    }
    var app = new Vue({
        el: "#app",
        data: {
            countId: '1b74',
            fontSize: 16,
            music:'open',
            from: '',
            isAPP: false,
            isiPhone: false,
            employerAnimation: {},
            current: 'sz',
            active_index: 0,
            move_out: -1,
            move_in: -1,
            companyHref: {
                one: "self.location=\'https://www.lagou.com/center/company_",
                two: ".html\';"
            },
            location: {
                sz: {
                    count: 1,
                    baoming: 'https://activity.lagou.com/topic/signup.html',
                    loading: {
                        number: 0,
                        text: [{
                            classname: 'little_move_top delay0-5',
                            word: "为每一个优秀的你安放理想" /*,{
                                                    classname:'little_move_top delay0-7',
                                                    word:"优秀的你安放理想",
                                                 },{
                                                    classname:'little_move_top delay0-9',
                                                    word:"为每一个优秀的你安放理想"
                                                 }*/
                        }]
                    },
                    first: {
                        time: '2018.03.31',
                        address: '北京<span class="gap"></span>中关村创业大街',
                        count: 20,
                        list: [{
                            classname: 'little_move_top delay2-0',
                            word: 'Top50好公司现场直招'
                        }, {
                            classname: 'little_move_top delay2-2',
                            word: '大咖亲授职场思维养成法'
                        }, {
                            classname: 'little_move_top delay2-4',
                            word: 'Workshop前沿行业探讨'
                        }, {
                            classname: 'little_move_top delay2-6',
                            word: '1to1职业咨询顾问'
                        }]
                    },
                    long: {
                        active_index: [],
                        list: [{
                            elem: 'yh-center__almighty',
                            height: 0,
                            top: 0
                        }, {
                            elem: 'yh-center__plus',
                            height: 0,
                            top: 0
                        }, {
                            elem: 'yh-center__workshop',
                            height: 0,
                            top: 0
                        }, {
                            elem: 'yh-center__street',
                            height: 0,
                            top: 0
                        }, {
                            elem: 'yh-center__activity',
                            height: 0,
                            top: 0
                        }, {
                            elem: 'yh-center__club',
                            height: 0,
                            top: 0
                        }, {
                            elem: 'yh-center__market',
                            height: 0,
                            top: 0
                        }, {
                            elem: 'yh-center__partner',
                            height: 0,
                            top: 0
                        }]
                    },
                    almighty: {
                        title: '万能的拉勾',
                        detail: '治愈系职场体验店，带你击破职场低情绪泡沫',
                        content: [{
                            name: '职场情绪黑室',
                            info: '职场里无处安放的小情绪， <br/>来这里当伪装者尽情宣泄，出</br/>来又是一条好汉。',
                            src: 'images/almighty-01.png'
                        }, {
                            name: '"Yes,And"戏剧社',
                            info: '沉浸式体验即兴戏剧的"Yes,And"精神，解锁<br/>面试官奇葩问题，从容应对职场人际交往',
                            src: 'images/almighty-02.png'
                        }, {
                            name: '职场30问',
                            info: '从面试技巧到行业知识， <br/>多种锦囊，教你化解内心焦虑， <br/>解决职场疑惑。 ',
                            src: 'images/almighty-03.png'
                        }]
                    },
                    plus: {
                        title: '梦想PLUS',
                        detail: '透过现象看本质的职场思维运用，大咖教你成为职场高手',
                        content: [{
                            time: '14:00',
                            name: '鲍艾乐',
                            photo: 'images/plus/ella.png',
                            position: '拉勾联合创始人／CMO',
                            book: '《用有效穿透造就职场心法》'
                        }, {
                            time: '14:30',
                            name: '李松蔚',
                            photo: 'images/plus/lisongwei.png',
                            position: '清华大学心理发展指导中心讲师',
                            book: '《思维穿透和开放性思考》'
                        }, {
                            time: '15:00',
                            name: '敖翔',
                            photo: 'images/plus/aoxiang.png',
                            position: 'Face++副总裁',
                            book: '《后人工智能时代：新技术革命》'
                        }, {
                            time: '15:30',
                            name: '王明远',
                            photo: 'images/plus/wangmingyuan.png',
                            position: 'Node Family技术合伙人',
                            book: '《让我们谈谈钱：风口上的区块链》'
                        }, {
                            time: '16:00',
                            name: '吴冰',
                            photo: 'images/plus/wubing.png',
                            position: '石墨CEO',
                            book: '《当极致的灵魂穿透产品》'
                        }]
                    },
                    workshop: {
                        title: 'WORKSHOP',
                        detail: '深度探讨式工作坊，了解个人职业定位与发展，看懂行业趋势',
                        checkin: 'https://activity.lagou.com/topic/signup.html',
                        count: 2,
                        content: [{
                            img: 'images/workshop-01.png',
                            shop: '阿里云栖社区<span class="icon x"></span>拉勾',
                            title: '《未来人机交互技术》',
                            time: '09:00-12:05',
                            detail: '随着语音交互、自然语言处理、多模态等技术的发展，未来人机交互的发展趋势怎样？云栖社区4位顶级专家为你解读。'
                        }, {
                            img: 'images/workshop-03.png',
                            shop: 'Node Family<span class="icon x"></span>拉勾',
                            title: '《区块链行业内的个人定位》',
                            time: '10:00-11:30',
                            detail: '区块链领域有什么样的工作机会？该如何寻找自己的定位？以什么样的“姿势”加入？这个工作坊将对这些问题一网打尽，为你全面解析。'
                        }, {
                            img: 'images/workshop-02.png',
                            shop: '特邀咨询师严嘉伟<span class="icon x"></span>拉勾',
                            title: '《职业锚测试》',
                            time: '13:00-14:30',
                            detail: '你的工作观如何影响职业定位与发展？如何更加了解自己？进入测试并报名，嘉伟老师从职业锚的角度在现场为你解析。',
                            button: {
                                text: '进入测试题',
                                href: 'https://www.wenjuan.in/s/7rieiq/'
                            }
                        }]
                    },
                    street: {
                        title: '梦想大街',
                        count: 20,
                        detail: 'Top50公司特展，争取面试机会，收割心仪Offer',
                        content: [[{
                            logo: 'images/street/logo-01.png',
                            href: 'javascript:void(0);',
                            id: 109
                        }, {
                            logo: 'images/street/logo-02.png',
                            href: 'javascript:void(0);',
                            id: 4602
                        }], [{
                            logo: 'images/street/logo-03.png',
                            href: 'javascript:void(0);',
                            id: 55446
                        }, {
                            logo: 'images/street/logo-04.png',
                            href: 'javascript:void(0);',
                            id: 44091
                        }], [{
                            logo: 'images/street/logo-05.png',
                            href: 'javascript:void(0);',
                            id: 201747
                        }, {
                            logo: 'images/street/logo-06.png',
                            href: 'javascript:void(0);',
                            id: 1686
                        }], [{
                            logo: 'images/street/logo-07.png',
                            href: 'javascript:void(0);',
                            id: 22666
                        }, {
                            logo: 'images/street/logo-08.png',
                            href: 'javascript:void(0);',
                            id: 436
                        }], [{
                            logo: 'images/street/logo-09.png',
                            href: 'javascript:void(0);',
                            id: 35422
                        }, {
                            logo: 'images/street/logo-10.png',
                            href: 'javascript:void(0);',
                            id: 8103
                        }], [{
                            logo: 'images/street/logo-11.png',
                            href: 'javascript:void(0);',
                            id: 40459
                        }, {
                            logo: 'images/street/logo-12.png',
                            href: 'javascript:void(0);',
                            id: 1561
                        }], [{
                            logo: 'images/street/logo-13.png',
                            href: 'javascript:void(0);',
                            id: 50702
                        }, {
                            logo: 'images/street/logo-14.png',
                            href: 'javascript:void(0);',
                            id: 4188
                        }], [{
                            logo: 'images/street/logo-15.png',
                            href: 'javascript:void(0);',
                            id: 5706
                        }, {
                            logo: 'images/street/logo-16.png',
                            href: 'javascript:void(0);',
                            id: 26782
                        }], [{
                            logo: 'images/street/logo-17.png',
                            href: 'javascript:void(0);',
                            id: 1537
                        }, {
                            logo: 'images/street/logo-18.png',
                            href: 'javascript:void(0);',
                            id: 113856
                        }], [{
                            logo: 'images/street/logo-19.png',
                            href: 'javascript:void(0);',
                            id: 28818
                        }, {
                            logo: 'images/street/logo-20.png',
                            href: 'javascript:void(0);',
                            id: 91
                        }], [{
                            logo: 'images/street/logo-21.png',
                            href: 'javascript:void(0);',
                            id: 1101
                        }, {
                            logo: 'images/street/logo-22.png',
                            href: 'javascript:void(0);',
                            id: 46956
                        }], [{
                            logo: 'images/street/logo-23.png',
                            href: 'javascript:void(0);',
                            id: 262476
                        }, {
                            logo: 'images/street/logo-24.png',
                            href: 'javascript:void(0);',
                            id: 1970
                        }]]
                    },
                    activity: {
                        title: '市集体验式主题活动',
                        detail: '放肆吃喝，奖励多多，激发快乐的荷尔蒙',
                        content: [{
                            img: 'images/activity-01.png',
                            name: '超级抽奖机',
                            info: '市集区内参与活动集齐奖章即<br/>可召唤礼品。',
                            row: 2
                        }, {
                            img: 'images/activity-02.png',
                            name: 'OFFER王',
                            info: '现场收割面试邀请数量的No.1<br/>获得666元现金奖励。',
                            row: 2
                        }, {
                            img: 'images/activity-03.png',
                            name: '阅读马拉松',
                            info: '华章书院联合拉勾发起的读书接力<br/>每人阅读1-2章，合作完成整本书的读书<br/>笔记完成任务送重磅好书。',
                            row: 3
                        }, {
                            img: 'images/activity-04.png',
                            name: '吃喝玩乐',
                            info: '拉勾+来电+连咖啡趣味联名定制饮品<br/>Master达人手工制作享乐；有品创意<br/>生活间体验；新氧为职场Lady皮肤检<br/>测，打造完美眉形',
                            row: 4
                        }, {
                            img: 'images/activity-05.png',
                            name: '同行吃鸡',
                            info: '拉勾网CEO马德龙坐等高手呼朋引<br/>伴，现场组队，大吉大利，一起吃<br/>鸡。',
                            row: 3
                        }]
                    },
                    club: {
                        title: '超新星俱乐部',
                        detail: '闪闪发光的你如何与好公司相遇',
                        count: 100,
                        checkin: 'https://activity.lagou.com/topic/signup.html',
                        content: [{
                            img: 'images/club-01.png',
                            name: '一对一职业顾问',
                            detail: '报名筛选且现场完成任务即<br/>可与咨询导师现场进行咨询<br/>服务。'
                        }, {
                            img: 'images/club-02.png',
                            name: '梦想者午餐会',
                            detail: '定向邀约30位求职者与一线<br/>互联网名企30位HRD\\CXO<br/>共进午餐，拉勾买单。'
                        }]
                    },
                    market: {
                        title: '市集信息',
                        src: 'images/market-map-01.png',
                        time: '2018年3月31日(周六)  10:00',
                        address: '北京市海淀区海淀西大街48号中关村创业大街'
                    },
                    partner: {
                        title: '合作伙伴',
                        count: 150,
                        content: [{
                            logo: '',
                            href: 'javascript:void(0);',
                            id: 164989
                        }, {
                            logo: '',
                            href: 'javascript:void(0);',
                            id: 117543
                        }, {
                            logo: '',
                            href: 'javascript:void(0);',
                            id: 317246
                        }, {
                            logo: '',
                            href: 'javascript:void(0);',
                            id: 165758
                        }, {
                            logo: '',
                            href: 'javascript:void(0);'
                        }, {
                            logo: '',
                            href: 'javascript:void(0);'
                        }, {
                            logo: '',
                            href: 'javascript:void(0);'
                        }, {
                            logo: '',
                            href: 'javascript:void(0);'
                        }, {
                            logo: '',
                            href: 'javascript:void(0);'
                        }, {
                            logo: '',
                            href: 'javascript:void(0);'
                        }, {
                            logo: '',
                            href: 'javascript:void(0);'
                        }, {
                            logo: '',
                            href: 'javascript:void(0);'
                        }, {
                            logo: '',
                            href: 'javascript:void(0);'
                        }, {
                            logo: '',
                            href: 'javascript:void(0);'
                        }, {
                            logo: '',
                            href: 'javascript:void(0);'
                        }, {
                            logo: '',
                            href: 'javascript:void(0);'
                        }, {
                            logo: '',
                            href: 'javascript:void(0);'
                        }, {
                            logo: '',
                            href: 'javascript:void(0);'
                        }, {
                            logo: '',
                            href: 'javascript:void(0);'
                        }, {
                            logo: '',
                            href: 'javascript:void(0);'
                        }]
                    }
                }
            }
        },
        mounted: function () {
            this.from = (getQueryString('lagoufrom') + '').toLocaleLowerCase();
            this.isAPP = this.from == 'ios' || this.from == 'android';
            var locate = getQueryString('lagoufrom');
            if (locate != 'sz' && this.location[locate]) {
                this.current = locate;
            }
            bgMusicPlay();
            this.setLoading();
            this.initWorkshopAnimation();
            this.initStreetAnimation();
            // this.initLongAnimate()
        },
        methods: {
            setLogoHref: function (logo) {
                if (logo) {
                    if (logo.indexOf('i/image') == 0 || logo.indexOf('image1') == 0 || logo.indexOf('image2') == 0) {
                        return this.logoHref + logo;
                    } else if (logo.indexOf('http') == 0) {
                        return logo;
                    } else {
                        return this.logoHrefO + logo;
                    }
                } else {
                    return '';
                }
            },
            getCount: function (num) {
                return '0000'.slice((num + '').length) + num;
            },
            addJSCSS: function () {
                switch (this.browserType) {
                    case 0: // Opera浏览器
                    case 1: // Firefox浏览器
                    case 2: // Chrome浏览器
                    case 3:
                        // Safari浏览器
                        this.addCssByLink('https://www.lgstatic.com/topic/css/swiper.min.css', this.loadedJSCSS);
                        this.addScript('https://www.lgstatic.com/topic/js/swiper.min.js', this.loadedJSCSS);
                        break;
                    case 6:
                        // IE浏览器
                        animationStatus = true;
                        // lunAnimation(browserType);
                        break;
                    case 4: // IE9.0及以上浏览器
                    case 5:
                    default:
                        this.addCssByLink('https://www.lgstatic.com/topic/css/idangerous.swiper.css', this.loadedJSCSS);
                        this.addScript('https://www.lgstatic.com/topic/js/idangerous.swiper.min.js', this.loadedJSCSS);
                        break;
                }
            },
            addCssByLink: function (url, callback) {
                var doc = document;
                var link = doc.createElement("link");
                link.setAttribute("rel", "stylesheet");
                link.setAttribute("type", "text/css");
                link.setAttribute("href", url);
    
                var heads = doc.getElementsByTagName("head");
                if (heads.length) heads[0].appendChild(link);else doc.documentElement.appendChild(link);
                link.onload = function () {
                    callback();
                };
            },
            addScript: function (url, callback) {
                var script = document.createElement("script");
                script.setAttribute("type", "text/javascript");
                script.setAttribute("src", url);
                var heads = document.getElementsByTagName("head");
                if (heads.length) heads[0].appendChild(script);else document.documentElement.appendChild(script);
                script.onload = function () {
                    callback();
                };
            },
            getBrowserType: function () {
                var userAgent = window.navigator.userAgent; //取得浏览器的userAgent字符串
                var isOpera = userAgent.indexOf("Opera") > -1;
                var browserType = 0;
                if (isOpera) {
                    //判断是否Opera浏览器
                    browserType = 0;
                } else if (userAgent.indexOf("Firefox") > -1) {
                    //判断是否Firefox浏览器
                    browserType = 1;
                } else if (userAgent.indexOf("Chrome") > -1) {
                    //判断是否Chrome浏览器
                    browserType = 2;
                } else if (userAgent.indexOf("Safari") > -1) {
                    //判断是否Safari浏览器
                    browserType = 3;
                } else if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
                    //判断是否IE浏览器
                    /*if(userAgent.match(/6./i)=="6."){
                        browserType = 6;
                        }else if(userAgent.match(/7./i)=="7."){
                        browserType = 6;
                        }else if(userAgent.match(/8./i)=="8."){
                        browserType = 6;
                        }*/
                    if (userAgent.match(/9./i) == "9." || userAgent.match(/10./i) == "10.") {
                        browserType = 4;
                    } else {
                        browserType = 6;
                    }
                } else if (userAgent.toLowerCase().indexOf("trident") > -1 && userAgent.indexOf("rv") > -1) {
                    browserType = 5;
                }
                return browserType;
            },
            ismobile: function () {
                var u = navigator.userAgent,
                    app = navigator.appVersion;
                if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent)) {
                    if (window.location.href.indexOf("?mobile") < 0) {
                        try {
                            if (/iPhone/i.test(navigator.userAgent)) {
                                // /iPhone|mac|iPod|iPad/i
                                return 'iphone';
                            } else {
                                return 'android';
                            }
                        } catch (e) {}
                    }
                } else if (u.indexOf('iPad') > -1) {
                    return 'iphone';
                } else {
                    return 'android';
                }
            },
            getRemValue: function (value) {
                return value / (750 / 16);
            },
            getPX: function (value) {
                return value / (750 / 16) * this.fontSize;
            },
            getRem: function (n) {
                return n / (750 / 16) + 'rem';
            },
            getComputedValue: function (elem, attribute) {
                var value = window.getComputedStyle(elem, null).getPropertyValue(attribute);
                return value;
            },
            getPointValue: function (elem, attribute) {
                if (!elem || elem.length == 0) {
                    return 0;
                }
                var value = window.getComputedStyle(elem, null).getPropertyValue(attribute);
                return parseFloat(parseFloat(value).toFixed(2));
            },
            getPointWidth: function (elem) {
                var value = this.getPointValue(elem, "width"); //window.getComputedStyle(elem[0],null).getPropertyValue("width");
                return value;
            },
            getPointOuterWidth: function (elem) {
                var width = this.getPointValue(elem, "width"),
                    //window.getComputedStyle(elem[0],null).getPropertyValue("width");
                left = this.getPointValue(elem, "padding-left"),
                    right = this.getPointValue(elem, "padding-right"),
                    value = width + left + right;
                return value;
            },
            getAjaxData: function (url, callback, params) {
                $.ajax({
                    url: 'https://activity.lagou.com/' + url,
                    type: 'get',
                    data: params ? params : {},
                    // dataType:'jsonp',
                    // jsonp:'jsoncallback',
                    success: function (data) {
                        var content = data.content;
                        if (data.success) {
                            callback(content);
                        } else {
                            console.log('出错啦～刷新重试～');
                        }
                    },
                    error: function (error) {
                        console.log(error);
                    }
                });
            },
            isObject: function (e) {
                return e instanceof Object;
            },
            /***********************************
             **  功能函数
             */
            setLoading: function () {
                var self = this,
                    length = 20,
                    timer = null,
                    i = 0;
                timer = setInterval(function () {
                    var ran = Math.floor(Math.random() * 5 + i * 5);
                    i++;
                    self.location[self.current].loading.number = ran;
                    if (i == 20) {
                        self.location[self.current].loading.number = 100;
                        clearInterval(timer);
                        $('.page0').addClass('page-move-out');
                        $('.page1').removeClass('hide').addClass('page-move-in');
                        setTimeout(function () {
                            $('.page0').addClass('hide');
                            $('.page1').removeClass('page-move-in');
                        }, 500);
                    }
                }, 100);
            },
            showContent: function () {
                var self = this;
                this.initLongAnimate();
                $('.page1').addClass('page-move-out');
                $('.page2').removeClass('hide').addClass('page-move-in');
                if(audio.paused){
                    audio.play();
                }
                setTimeout(function () {
                    $('.page1').addClass('hide');
                    $('.page2').removeClass('page-move-in');
                    $('html,body').css({
                        'height': 'auto',
                        'overflow-x': 'hidden',
                        'overflow-y': 'auto'
                    });
                    self.$refs['yh-center__long'].className += ' active';
                    self.location[self.current].long.active_index = [0];
                }, 500);
            },
            initWorkshopAnimation: function () {
                var i = 0,
                    autoplay = false,
                    //false,
                animation = 'move',
                    id = '',
                    content = null,
                    childs = null,
                    first = null,
                    length = 3,
                    elem = $(this.$refs['workshop__animation']);
                id = elem.attr('id');
                // autoplay = elem.attr('autoplay');
                // autoplay = autoplay ? true : false;
                // animation = elem.attr('animation');
                // animation = animation ? animation : 'move';
    
                content = elem.find('#' + id + '-content');
                childs = content.children();
                length = childs.length;
                first = childs.eq(0);
                content.css('left', 0);
                this.employerAnimation[id] = {
                    width: first.children().eq(0).width(),
                    currentIndex: 0,
                    length: length,
                    autoplay: autoplay,
                    animation: animation,
                    slidesPerView: 2.1,
                    loop: false,
                    swiper: null,
                    pagination: false
                    // pagination_color:$('#'+id+'-pagination > div').eq(0).css('background-color')
                };
                switch (animation) {
                    case 'zoomIn':
                        this.initZoomInAnimation(id);
                        break;
                    default:
                        this.initMoveAnimation(id, 'content__list', 'content__one');
                        break;
                }
            },
            initStreetAnimation: function () {
                var i = 0,
                    autoplay = false,
                    //false,
                animation = 'move',
                    id = '',
                    content = null,
                    childs = null,
                    first = null,
                    length = 3,
                    elem = $(this.$refs['street__animation']);
                id = elem.attr('id');
                // autoplay = elem.attr('autoplay');
                // autoplay = autoplay ? true : false;
                // animation = elem.attr('animation');
                // animation = animation ? animation : 'move';
    
                content = elem.find('#' + id + '-content');
                childs = content.children();
                length = childs.length;
                first = childs.eq(0);
                content.css('left', 0);
                this.employerAnimation[id] = {
                    width: first.children().eq(0).width(),
                    currentIndex: 0,
                    length: length,
                    autoplay: autoplay,
                    animation: animation,
                    slidesPerView: 5.3, //4.9,
                    loop: false,
                    swiper: null,
                    pagination: false
                    // pagination_color:$('#'+id+'-pagination > div').eq(0).css('background-color')
                };
                switch (animation) {
                    case 'zoomIn':
                        this.initZoomInAnimation(id);
                        break;
                    default:
                        this.initMoveAnimation(id, 'content__list', 'content__one');
                        break;
                }
            },
            initMoveAnimation: function (id, wrapperClass, slideClass) {
                var self = this,
                    pagination = null,
                    length = 0,
                    totalLength = 3,
                    data = this.employerAnimation[id],
                    pstatus = data.pagination;
                if (pstatus) {
                    pagination = $('#' + id + '-pagination').children();
                    length = data.length; //pagination.length
                } else {
                    length = data.length;
                }
    
                data.swiper = new Swiper('#' + id, {
                    wrapperClass: wrapperClass,
                    slideClass: slideClass,
                    autoplay: data.autoplay ? 3000 : 0, //可选选项，自动滑动
                    slidesPerView: data.slidesPerView ? data.slidesPerView : 1,
                    loop: data.hasOwnProperty('loop') ? data.loop : true,
                    autoplayDisableOnInteraction: false,
                    direction: data.direction ? data.direction : 'horizontal',
                    // loopedSlides:1,
                    pagination: '#' + id + '-pagination',
                    paginationClickable: true,
                    bulletClass: 'dot',
                    bulletActiveClass: 'dot--active',
                    prevButton: '#' + id + '-arrow-left',
                    nextButton: '#' + id + '-arrow-right',
                    // paginationElement:'span',
                    // paginationBulletRender: function (swiper, index, className) {
                    //     return '<span class="' + className + '" style="background-color:'+sliderStyle1Swiper[id].pagination_color+';"></span>';
                    // },
                    onInit: function (swiper) {
                        if (pstatus) {
                            // totalLength = $('#'+id+'-pagination').children().length
                            // $('#'+id+'-pagination').children().css('background-color',data.pagination_color)
                        }
                    },
                    onSlideChangeEnd: function (swiper) {
                        // var ul = $(elemClass).children(),
                        // li = ul.children('li'),
                        // activeLi = ul.children('.' + this.slideActiveClass).length > 0 ? ul.children('.' + this.slideActiveClass) : ul.children('.active'),
                        // index = activeLi.index(),
                        var index = swiper.activeIndex,
    
                        // id = ul.attr('id'),
                        // logo = $('.' + id + 'Button').children('img'),
                        endIndex = index - 1;
                        if (endIndex == -1) {
                            endIndex = length - 1;
                        } else if (endIndex == totalLength) {
                            endIndex = 0;
                        }
                        // pagination.removeClass('active').eq(endIndex).addClass('active');
                        // li.eq(index).removeClass('active').end().eq(index).addClass('active');
                    }
                });
            },
            initZoomInAnimation: function (id) {
                var pagination = $('#' + id + '-pagination').children(),
                    length = pagination.length,
                    totalLength = 3;
                this.employerAnimation[id].swiper = new Swiper('#' + id + '-container', {
                    wrapperClass: 'yh-slider-content',
                    slideClass: 'yh-slider-slide',
                    autoplay: sliderStyle1Swiper[id].autoplay ? 3000 : 0, //可选选项，自动滑动
                    // loop : true,
                    // loopedSlides:1,
                    // pagination : '#'+id+'-pagination',
                    // paginationClickable:true,
                    bulletClass: 'one',
                    bulletActiveClass: 'active',
                    prevButton: '#' + id + '-arrow-left',
                    nextButton: '#' + id + '-arrow-right',
                    // paginationElement:'span',
                    // paginationBulletRender: function (swiper, index, className) {
                    //     return '<span class="' + className + '" style="background-color:'+sliderStyle1Swiper[id].pagination_color+';"></span>';
                    // },
                    mode: 'horizontal',
                    // paginationClickable: true,
                    effect: 'coverflow',
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: 1.1,
                    // slidesPerView: 1.56,
                    initialSlide: 1,
                    autoplayDisableOnInteraction: false,
                    // prevButton: '.' + id + 'Pre',
                    // nextButton: '.' + id + 'Next',
                    coverflow: {
                        rotate: 0,
                        stretch: 230,
                        depth: 300,
                        modifier: 1,
                        slideShadows: true
                    },
                    onInit: function (swiper) {
                        totalLength = $('#' + id + '-pagination').children().length;
                        pagination.removeClass('active').eq(1).addClass('active');
                        // $('#'+id+'-pagination').children().css('background-color',sliderStyle1Swiper[id].pagination_color)
                    },
                    onSlideChangeEnd: function (swiper) {
                        // var ul = $(elemClass).children(),
                        // li = ul.children('li'),
                        // activeLi = ul.children('.' + this.slideActiveClass).length > 0 ? ul.children('.' + this.slideActiveClass) : ul.children('.active'),
                        // index = activeLi.index(),
                        var index = swiper.activeIndex,
    
                        // id = ul.attr('id'),
                        // logo = $('.' + id + 'Button').children('img'),
                        endIndex = index; //index - 1;
                        if (endIndex == -1) {
                            endIndex = length - 1;
                        } else if (endIndex == totalLength) {
                            endIndex = 0;
                        }
                        pagination.removeClass('active').eq(endIndex).addClass('active');
                        // li.eq(index).removeClass('active').end().eq(index).addClass('active');
                    }
                });
            },
            getTabHeight: function () {
                var list = this.location[this.current].long.list,
                    elem = null,
                    parent = [],
                    height = 0,
                    top = 0,
                    status = false,
                    i = 0,
                    j = 0;
                for (i = 0; i < list.length; i++) {
                    if (list[i].elem) {
                        elem = this.$refs[list[i].elem];
                        top = 0;
                        height = 0;
                        if (list[i].parent) {
                            parent = list[i].parent;
                            for (j = 0; j < parent.length; j++) {
                                top += this.location[this.current].tab.list[parent[j]].offsetTop;
                                // height += this.tab.list[parent[j]].height;
                            }
                            // top += elem.offsetTop;
                            top += this.getPX(list[i].top);
                        } else {
                            top += elem.offsetTop;
                        }
                        if (list[i].initHeight) {
                            height = this.getPX(list[i].initHeight);
                        } else {
                            height = elem.offsetHeight;
                        }
                        if (list[i].offsetTop != top || list[i].height != height) {
                            this.location[this.current].tab.list[i].offsetTop = top;
                            this.location[this.current].tab.list[i].height = height;
                            status = true;
                        }
                    }
                }
                if (!status) {
                    this.location[this.current].tab.status = true;
                }
            },
            initWindowScrollEvent: function () {
                var self = this,
                    min = this.getPX(58);
                self.getTabHeight();
                self.location[self.current].tab.offsetTop = self.$refs['yh-center__tab'].offsetTop;
                self.location[self.current].tab.height = self.$refs['yh-center__tab-center'].offsetHeight;
                $(window).scroll(function () {
                    if (self.location[self.current].tab.click_status) {
                        return;
                    }
                    var tab = self.$refs['yh-center__tab'],
                        scrollTop = $(window).scrollTop(),
                        one = null,
    
                    // halfWidow = tab.offsetHeight,//self.$refs['yh-center__tab-center'].offsetHeight,//$(window).height() / 8,
                    halfWidow = $(window).height() / 4,
                        left = 0,
                        i = 0;
                    // if(!self.tab.status){
                    self.getTabHeight();
                    self.location[self.current].tab.offsetTop = tab.offsetTop;
                    self.location[self.current].tab.height = tab.offsetHeight; //self.$refs['yh-center__tab-center'].offsetHeight;
                    // }
                    if (self.location[self.current].tab.offsetTop <= scrollTop) {
                        self.location[self.current].tab.fixed = true;
                    } else {
                        self.location[self.current].tab.fixed = false;
                    }
                    for (i = 0; i < self.location[self.current].tab.list.length; i++) {
                        one = self.location[self.current].tab.list[i];
                        // if (one.elem && (one.offsetTop - halfWidow + min) < scrollTop && (one.offsetTop + one.height - halfWidow - min) > scrollTop) {
                        if (one.elem && one.offsetTop - halfWidow < scrollTop && one.offsetTop + one.height - halfWidow > scrollTop) {
                            self.location[self.current].tab.active_index = i;
                            left = self.$refs['tab__li--' + i][0].offsetLeft;
                            if (left >= self.location[self.current].tab.width - self.location[self.current].tab.showWidth) {
                                self.location[self.current].tab.left = -1 * (self.location[self.current].tab.width - self.location[self.current].tab.showWidth);
                                self.location[self.current].tab.shadow_status = false;
                            } else {
                                self.location[self.current].tab.left = -1 * left;
                                self.location[self.current].tab.shadow_status = true;
                            }
                            // 
                            break;
                        }
                    }
                });
            },
            cutString: function (str, num) {
                str = str ? str : '';
                var str2 = str.replace(/([\u4E00-\u9FA5]|[\uFE30-\uFFA0])/g, "çç"),
                    result = '';
                if (str2.length > num) {
                    var length = str2.slice(0, num).replace(/çç/g, 'ç').length;
                    result = str.slice(0, length) + '...';
                } else {
                    result = str;
                }
                return result;
            },
    
            floatingCloseEvent: function () {
                this.floating.status = false;
            },
            appDownload: function () {},
            getLongHeight: function () {
                var list = this.location[this.current].long.list,
                    elem = null,
                    parent = [],
                    height = 0,
                    top = 0,
                    status = false,
                    i = 0,
                    j = 0;
                for (i = 0; i < list.length; i++) {
                    if (list[i].elem) {
                        elem = this.$refs[list[i].elem];
                        top = 0;
                        height = 0;
                        if (list[i].parent) {
                            parent = list[i].parent;
                            for (j = 0; j < parent.length; j++) {
                                top += this.location[this.current].long.list[parent[j]].offsetTop;
                                // height += this.location[this.current].long.list[parent[j]].height;
                            }
                            // top += elem.offsetTop;
                            top += this.getPX(list[i].top);
                        } else {
                            top += elem.offsetTop;
                        }
                        if (list[i].initHeight) {
                            height = this.getPX(list[i].initHeight);
                        } else {
                            height = elem.offsetHeight;
                        }
                        if (list[i].offsetTop != top || list[i].height != height) {
                            this.location[this.current].long.list[i].top = top;
                            this.location[this.current].long.list[i].height = height;
                            status = true;
                        }
                    }
                }
                if (!status) {
                    this.location[this.current].long.status = true;
                }
            },
            initLongAnimate: function () {
                var long = this.$refs['yh-center__long'],
                    self = this,
                    status = false,
                    arr = [];
                $(window).scroll(function () {
                    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
                        height = $(window).height(),
                        halfWidow = height / 8,
                        one = null,
                        i = 0;
                    // if(!status){
                    self.getLongHeight();
                    // status = true;
                    // }
                    for (i = 0; i < self.location[self.current].long.list.length; i++) {
                        one = self.location[self.current].long.list[i];
                        // if (one.elem && (one.top - halfWidow) < scrollTop && (one.top + one.height) > scrollTop) {
                        if (one.elem && scrollTop > one.top - halfWidow * 7 && arr.indexOf(i) == -1) {
                            // && scrollTop <= (one.top + one.height)) {
                            arr.push(i);
                        }
                    }
                    // alert(scrollTop);
                    self.location[self.current].long.active_index = arr;
                    // console.log(arr)
                });
            },
            musicEvent:function(e){
                if(this.music == 'open'){
                    audio.pause();
                    this.music = 'close';
                }else{
                    audio.play();
                    this.music = 'open';
                }
            },
        }
    });
    },{}]},{},[1]);
    