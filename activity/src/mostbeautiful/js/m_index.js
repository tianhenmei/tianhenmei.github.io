"use strict";
Vue.use(VueAwesomeSwiper)

var initialNow = 0,
    initialLast = 0;

// // 音乐
backgroundMusic(document.getElementById("music"));
// 音乐播放
function backgroundMusic(audio){
    // 自动播放音乐效果，解决浏览器或者APP自动播放问题
    if(audio.paused){
        audio.load();
        audio.play();
    }
    function musicInBrowserHandler() {
        if(audio.paused){
            audio.load();
            audio.play();
        }
        document.body.removeEventListener('touchstart', musicInBrowserHandler);
    }
    document.body.addEventListener('touchstart', musicInBrowserHandler);

    // 自动播放音乐效果，解决微信自动播放问题
    function musicInWeixinHandler() {
        if(audio.paused){
            audio.load();
            audio.play();
        }
        document.addEventListener("WeixinJSBridgeReady", function () {
            if(audio.paused){
                audio.load();
                audio.play();
            }
        }, false);
        document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
    }
    document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
}

var swiper = null
var audioList = [{

}, {
    canplayStatus: false,
    playing: false
}]
app = new Vue({
    el:"#app",
    data:{
        // test
        mode:"development",
        lg:"1bir",
        activePage:initialNow,
        pageStatus:true,
        clickStatus:false,
        heightStatus:0,
        page0:{
            buildingAnimate: 'zoomIn duration1-0 delay5-0',
            videoStatus: false
        },
        animation: null,
        animationActiveIndex: 0,
        showStatus:true,
        activeVideoIndex: 0,
        swiperOption: {
            // autoplay: {
            //     delay: 3000,
            //     stopOnLastSlide: false,
            //     disableOnInteraction: false,
            // },
            autoplay: false,
            freeMode: false,
            speed:500,
            loop:true,
            initialSlide:0,
            on: {
                slideChangeTransitionStart: function() {
                    if (!swiper) {
                        swiper = this
                    }
                    var appData = app || document.getElementById('app').__vue__
                    if (appData) {
                        appData.videoChangeStart((swiper.activeIndex - 1 + 3) % 3)
                    }
                }
            }
        },
        secondPhoneStatus: true,
        thirdPhoneStatus: false,
        fourthPhoneStatus: false,
        fivePhoneStatus: false,
        page1WuyuNextStatus: false,
        dialogStatus: false,
        darkTextStatus: false,
        darkExistStatus: false,
        page1ResultStatus: false,
        toVideoListStatus: false,

        page2NextStatus: false,
        page2ResultStatus: false,

        babyCryStatus: false,
        manStandStatus: false,
        page3ThirdStatus: false,
        page3Dialog1: false,
        page3Dialog1Hide: false,
        page3Dialog2: false,
        page3Imagenary: false,

        videoPlayingStatus: false
    },
    computed:{
        setSaveStyle:function(){
            var height = RC.w / GC.w * GC.h - RC.h,
                width = RC.h / GC.h * GC.w - RC.w,
                temp = 0,
                scale = 0.748,
                gap = -168
            if(height < 0){
                temp = height / RC.h / 12,//Math.abs(height / RC.h / 12)
                scale += temp
                gap = gap * (1 - scale) - RC.h * (1 - scale) / 2// gap * (1 + temp * 10)
            }else if(height > 0){
                temp = height / RC.h
                scale += temp
                gap = gap * (1 - scale) - RC.h * (1 - scale) / 2
                if(scale > 1) {
                    scale = 1
                    gap = 0
                }
                if(gap > 0){
                    gap = 0
                }
            }
            return {
                transform:"scale3d("+scale+","+scale+","+scale+") translateY("+this.setRem(gap)+")",
                opacity:1
            }
        },
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    created: function(){
        // var script = document.createElement('script')
        // script.src = '//cdn.jsdelivr.net/npm/vconsole'
        // script.onload = function(){
        //     new VConsole()
        // }
        // document.body.appendChild(script)
    },
    mounted:function(){
        pageStatus = true;
        var self = this;
        var rightSize = parseFloat((RC.w / RC.h).toFixed(1)),
            currentSize = parseFloat((GC.w / GC.h).toFixed(1));
        if(rightSize > currentSize){
            this.heightStatus = Math.floor(RC.w / GC.w * GC.h - RC.h);
        }
        // test 注释
        // if(this.isWeiXin()){
        //     this.getUserWeixinData()
        // }
        //音乐
        $('.music-icon').on('click',function(){
            if($('#music')[0].paused){
                $('#music')[0].play();
                $(".music-icon").removeClass('close').addClass('open');
                globalMusicStatus = true;
                if(!self.page0.videoStatus && self.activePage === 0) {
                    var paudio = document.getElementById('pressAudio');
                    if (window.WeixinJSBridge) {
                        WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                            if (!self.page0.videoStatus && self.activePage === 0) {
                                paudio.play();
                            }
                        });
                    } else {
                        paudio.play();
                    }
                }

            }else{
                $('#music')[0].pause();
                $(".music-icon").removeClass('open').addClass('close');
                globalMusicStatus = false
                if(!self.page0.videoStatus && self.activePage === 0) {
                    var paudio = document.getElementById('pressAudio');
                    paudio.pause();
                }
            }
        });
        // if (this.activePage === 2) {
        //     this.playSecond()
        // }
        this.setHiddenEvent();
    },
    methods:{
        getFitTop:function(def,ratio){
            return this.setRem(def+this.heightStatus * ratio);
        },
        setRem:function(value){
            return value / (750 / 16)+'rem';
        },
        getDelayTime:function(start,index,gap){
            var current = start + gap * index,
                s = Math.floor(current / 10),
                l = current % 10;
            if(s == 0){
                return '0-'+l;
            }
            return s + '-' + l
        },
        setDelayTime:function(start,now,index){
            var current = Math.floor(now / 10)
            return start + current
        },
        setLaterDelay:function(start,now){
            var current = Math.floor(now / 10),
                sec = now % 10
            return 'delay'+(start+current)+'-'+sec
        },
        toNext:function(pindex){
            if(this.clickStatus){
                return
            }
            this.clickStatus = true
            var self = this
            this['page'+pindex].status = 'out'
            setTimeout(function(){
                self.clickStatus = false
                self['page'+pindex].status = 'in'
                self['page'+pindex].chose = false
                self.activePage = ++pindex
            },700)
        },
        closeEvent:function(pindex){
            this['page'+pindex].chose = false
        },
        noop:function(){

        },
        isWeiXin:function() {
            var ua = window.navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                return true;
            } else {
                return false;
            }
        },
        setHiddenEvent2:function(){
            var self = this
            var hidden, visibilityChange; 
            if (typeof document.hidden !== "undefined") {
                hidden = "hidden";
                visibilityChange = "visibilitychange";
            } else if (typeof document.mozHidden !== "undefined") { // Firefox up to v17
                hidden = "mozHidden";
                visibilityChange = "mozvisibilitychange";
            } else if (typeof document.webkitHidden !== "undefined") { // Chrome up to v32, Android up to v4.4, Blackberry up to v10
                hidden = "webkitHidden";
                visibilityChange = "webkitvisibilitychange";
            }
            
            var videoElement = document.getElementById("videoElement");

            // If the page is hidden, pause the video;
            // if the page is shown, play the video
            function handleVisibilityChange() {
                self.setPauseVideo(hidden);
            }

            // Warn if the browser doesn't support addEventListener or the Page Visibility API
            if (typeof document.addEventListener === "undefined" || typeof document[hidden] === "undefined") {
                alert("This demo requires a modern browser that supports the Page Visibility API.");
            } else {
                // Handle page visibility change   
                document.addEventListener(visibilityChange, handleVisibilityChange, false);
                    
                // // When the video pauses and plays, change the title.
                // videoElement.addEventListener("pause", function(){
                //     document.title = 'Paused';
                // }, false);
                    
                // videoElement.addEventListener("play", function(){
                //     document.title = 'Playing'
                // }, false);
            }
        },
        setHiddenEvent:function(){
            var self = this
            var hiddenProperty = 'hidden' in document ? 'hidden' :    
                'webkitHidden' in document ? 'webkitHidden' :    
                'mozHidden' in document ? 'mozHidden' :    
                null;
            var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
            var lastPlayingStatus = false;
            var lastActivePage = 0
            var onVisibilityChange = function(){
                // alert('hiddenProperty: ' + visibilityChangeEvent)
                if (!document[hiddenProperty]) { 
                    // 再次进入
                    if (globalMusicStatus) {
                        if (window.WeixinJSBridge) {
                            WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                                if (globalMusicStatus) {
                                    $('#music')[0].play();
                                    $(".music-icon").removeClass('close').addClass('open');
                                    if (lastActivePage === 0 && lastPlayingStatus) {
                                        document.getElementById('pressAudio').play();
                                    }
                                }
                            });
                        } else {
                            $('#music')[0].play();
                            $(".music-icon").removeClass('close').addClass('open');
                            if (lastActivePage === 0 && lastPlayingStatus) {
                                document.getElementById('pressAudio').play();
                            }
                        }
                    }
                } else {
                    var audio = null
                    // 页面离开
                    lastActivePage = self.activePage
                    if (self.activePage === 0) {
                        audio = document.getElementById('pressAudio')
                        if (!audio.paused) {
                            lastPlayingStatus = true;
                            audio.pause()
                        }
                    } else if(self.activePage > 0) {
                        audio = document.getElementById('video'+self.activePage)
                        if (!audio.paused) {
                            audio.pause()
                        }
                        self.clearPlayStatus()
                    }
                    $('#music')[0].pause();
                    $(".music-icon").removeClass('open').addClass('close');
                }
            }
            document.addEventListener(visibilityChangeEvent, onVisibilityChange);
            // window.onblur = function(){
            //     alert('onbeforeunload')
            // }
            // window.onfocus = function(){
            //     alert('onfocus')
            // }
            // $(document).on("hide", function() { 
            //     alert("browser page has been hidden");
            // });
        },
        setPauseVideo:function(hiddenProperty){
            var self = this;
            var lastPlayingStatus = false;
            if (!document[hiddenProperty]) { 
                // 再次进入
                if (window.WeixinJSBridge) {
                    WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                        $('#music')[0].play();
                        $(".music-icon").removeClass('close').addClass('open');
                        if (self.activePage === 0 && lastPlayingStatus) {
                            document.getElementById('pressAudio').play();
                        }
                    });
                } else {
                    $('#music')[0].play();
                    $(".music-icon").removeClass('close').addClass('open');
                    if (self.activePage === 0 && lastPlayingStatus) {
                        document.getElementById('pressAudio').play();
                    }
                }
            } else {
                var audio = null
                // 页面离开
                if (self.activePage === 0) {
                    audio = document.getElementById('pressAudio')
                    if (!audio.paused) {
                        lastPlayingStatus = true;
                        audio.pause()
                    }
                } else if(self.activePage > 0) {
                    audio = document.getElementById('video'+self.activePage)
                    if (!audio.paused) {
                        audio.pause()
                        self.clearPlayStatus()
                    }
                }
                $('#music')[0].pause();
                $(".music-icon").removeClass('open').addClass('close');
            }
        },
        retryEvent:function(){
            this.activePage = 0
            this.showStatus = true
        },
        openDoorEvent:function(){
            this.page0.buildingAnimate = 'leftIn-out';
            this.page0.videoStatus = true
            // this.addAnimation();
            document.getElementById('pressAudio').pause();
            if(globalMusicStatus && $('#music')[0].paused){
                $('#music')[0].play();
                $(".music-icon").removeClass('close').addClass('open');
            }
        },
        addAnimation:function(){
            var self = this
            this.animation = new Swiper('#page0__video__list', {
                // autoplay:true,//等同于以下设置
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                // autoplay: false,
                freeMode: false,
                speed:500,
                loop:true,
                initialSlide:0,
                on:{
                    slideChangeTransitionStart:function(){
                        // var sapp = app || this.$el[0].__vue__.$root
                        self.changeActiveIndex(this.activeIndex)
                    }
                }
            })
        },
        changeActiveIndex:function(index) {
            this.animationActiveIndex = index
        },
        swiperToPrev:function(){
            swiper.slidePrev()
        },
        swiperToNext:function(){
            swiper.slideNext()
        },
        startPlayVideo:function() {
            var self = this
            var index = (this.swiper.activeIndex - 1 + 3) % 3 + 1
            if (index === 1) {
                self.playVideo(document.getElementById('video1'), index, self.playFirst);
            } else if(index === 2) {
                self.playVideo(document.getElementById('video2'), index, self.playSecond);
            } else if(index === 3) {
                self.playVideo(document.getElementById('video3'), index, self.playThird);
            }
        },
        playVideo:function(audio, index, callback){
            var self = this;
            console.log('audio.readyState: ', audio.readyState)
            audio.currentTime = 0;
            audio.volume = 1;
            audio.load()
            if (audio.readyState === 4) {
                console.log(audio.paused)
                self.activePage = index
                callback();
            } else {
                self.videoPlayingStatus = true;
                audio.play()
                audio.oncanplaythrough = function(){
                    console.log('oncanplaythrough audio.readyState: ', audio.readyState)
                    self.videoPlayingStatus = false;
                    self.activePage = index
                    callback();
                }
            }
        },
        clearPlayStatus: function(){
            this.toVideoListStatus = true
            this.toVideoListStatus = false
            this.activePage = 0
            this.page0.videoStatus = true
            this.page0.buildingAnimate = 'hide'
            this.resetVideoStatus()
        },
        playNextVideo: function(){
            var self = this
            this.toVideoListStatus = true
            setTimeout(function(){
                self.toVideoListStatus = false
                self.activePage = 0
                self.page0.videoStatus = true
                self.page0.buildingAnimate = 'hide'
                self.resetVideoStatus()
            }, 500)
        },
        playFirst:function(){
            var self = this
            setTimeout(function() {
                self.secondPhoneStatus = false
                self.thirdPhoneStatus = true
                setTimeout(function(){
                    self.thirdPhoneStatus = false
                    self.fourthPhoneStatus = true
                    setTimeout(function(){
                        self.fourthPhoneStatus = false
                        self.fivePhoneStatus = true
                        setTimeout(function(){
                            self.page1WuyuNextStatus = true
                            // setTimeout(function(){
                            //     self.fivePhoneStatus = false
                            //     self.page1WuyuNextStatus = false
                            // }, 2000)
                            self.showDialog()
                        }, 6000)
                    }, 500)
                }, 1000)
            }, 10000)
        },
        showDialog:function(){
            var self = this
            setTimeout(function(){
                // self.dialogStatus = true;
                // setTimeout(function(){
                    self.darkTextStatus = true;
                    setTimeout(function(){
                        self.darkExistStatus = true;
                        // self.showPage1Result()
                    }, 2000)
                // }, 1500)
            },7000);
        },
        showPage1Result:function(){
            var self = this
            self.page1ResultStatus = true
            // setTimeout(function(){
            //     self.page1ResultStatus = true
            // }, 2500)
        },
        playSecond:function(){
            var audio = document.getElementById('video2');
            var self = this;
            audio.play();
            setTimeout(function(){
                self.page2NextStatus = true;
            }, 19000 - 12500 + 2000)
        },
        showPage2Result: function(){
            this.page2ResultStatus = true
        },
        playThird:function(){
            var self = this
            setTimeout(function(){
                self.babyCryStatus = true
                setTimeout(function(){
                    self.manStandStatus = true
                    setTimeout(function(){
                        self.page3ThirdStatus = true
                        self.showVideoDialog()
                    },1500)
                }, 1000)
            }, 8000);
        },
        showVideoDialog:function(){
            var self = this
            setTimeout(function(){
                self.page3Dialog1 = true
                setTimeout(function(){
                    self.page3Dialog1Hide = true
                    // setTimeout(function(){
                    //     self.page3Imagenary = true
                    // },2000)
                },2000)
            },2500)
        },
        showPage3Result:function(){
            this.page3Dialog2 = true;
        },
        resetVideoStatus:function(){
            this.secondPhoneStatus = true
            this.thirdPhoneStatus = false
            this.fourthPhoneStatus = false
            this.fivePhoneStatus = false
            this.page1WuyuNextStatus = false
            this.dialogStatus = false
            this.darkTextStatus = false
            this.darkExistStatus = false
            this.page1ResultStatus = false
            this.toVideoListStatus = false

            this.page2NextStatus = false
            this.page2ResultStatus = false

            this.babyCryStatus = false
            this.manStandStatus = false
            this.page3ThirdStatus = false
            this.page3Dialog1 = false
            this.page3Dialog1Hide = false
            this.page3Dialog2 = false
            this.page3Imagenary =false
        },
        videoChangeStart: function(index){
            this.activeVideoIndex = index
        }
        // toggleMusicEvent:function(){
        //     var icon = this.$refs['music-icon'];
        //     var music = this.$refs['music'];
        //     if(music.paused){
        //         music.play();
        //         icon.className = icon.className.replace(/( close| open)/g,'')+' open';
        //     }else{
        //         music.pause();
        //         icon.className = icon.className.replace(/( close| open)/g,'')+' close';
        //     }
        // },
    }
})
