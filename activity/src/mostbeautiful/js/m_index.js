"use strict";
Vue.use(VueAwesomeSwiper)

var initialNow = 0,
    initialLast = 0;

// // 音乐
// backgroundMusic(document.getElementById("music"));
// // 音乐播放
// function backgroundMusic(audio){
//     // 自动播放音乐效果，解决浏览器或者APP自动播放问题
//     if(audio.paused){
//         audio.load();
//         audio.play();
//     }
//     function musicInBrowserHandler() {
//         if(audio.paused){
//             audio.load();
//             audio.play();
//         }
//         document.body.removeEventListener('touchstart', musicInBrowserHandler);
//     }
//     document.body.addEventListener('touchstart', musicInBrowserHandler);

//     // 自动播放音乐效果，解决微信自动播放问题
//     function musicInWeixinHandler() {
//         if(audio.paused){
//             audio.load();
//             audio.play();
//         }
//         document.addEventListener("WeixinJSBridgeReady", function () {
//             if(audio.paused){
//                 audio.load();
//                 audio.play();
//             }
//         }, false);
//         document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
//     }
//     document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
// }

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
            initialSlide:0
        },
        secondPhoneStatus: true,
        thirdPhoneStatus: false,
        fourthPhoneStatus: false,
        fivePhoneStatus: false,
        dialogStatus: false,
        darkTextStatus: false,
        darkExistStatus: false,

        babyCryStatus: false,
        manStandStatus: false,
        page3ThirdStatus: false,
        page3Dialog1: false,
        page3Dialog2: false,
        page3Imagenary: false
    },
    computed:{
        qrcodeUrl:function(){
            return 'https://activity.lagou.com/activity/dist/2018-autumn/m_index.html'
        },
        createCode:function(){
            return encodeURIComponent(this.qrcodeUrl)
        },
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
        var script = document.createElement('script')
        script.src = '//cdn.jsdelivr.net/npm/vconsole'
        script.onload = function(){
            new VConsole()
        }
        document.body.appendChild(script)
    },
    mounted:function(){
        pageStatus = true;
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

            }else{
                $('#music')[0].pause();
                $(".music-icon").removeClass('open').addClass('close');
            }
        });
        if (this.activePage === 2) {
            this.playSecond()
        }
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
        retryEvent:function(){
            this.activePage = 0
            this.showStatus = true
        },
        openDoorEvent:function(){
            this.page0.buildingAnimate = 'leftIn-out';
            this.page0.videoStatus = true
            // this.addAnimation();
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
            this.swiper.slidePrev()
        },
        swiperToNext:function(){
            this.swiper.slideNext()
        },
        startPlayVideo:function() {
            var index = (this.swiper.activeIndex - 1 + 3) % 3 + 1
            this.activePage = index
            if (index === 1) {
                this.playFirst()
            } else if(index === 2) {
                this.playSecond();
            } else if(index === 3) {
                this.playThird();
            }
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
                        self.showDialog()
                    }, 500)
                }, 1000)
            }, 10000)
        },
        showDialog:function(){
            var self = this
            setTimeout(function(){
                self.dialogStatus = true;
                setTimeout(function(){
                    self.darkTextStatus = true;
                    setTimeout(function(){
                        self.darkExistStatus = true;
                    }, 2800)
                }, 1500)
            },11000);
        },
        playSecond:function(){

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
                    self.page3Dialog2 = true
                    // setTimeout(function(){
                    //     self.page3Imagenary = true
                    // },2000)
                },2000)
            },2500)
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