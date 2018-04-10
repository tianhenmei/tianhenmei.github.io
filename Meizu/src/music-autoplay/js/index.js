var bgmusic_button = null,
    audio = null;
function autoPlayAudio() {
    wx.config({
        // 配置信息, 即使不正确也能使用 wx.ready
        debug: false,
        appId: '',
        timestamp: 1,
        nonceStr: '',
        signature: '',
        jsApiList: []
    });
    wx.ready(function() {
        console.log(wx)
        var audio = document.getElementById("music");
        audio.load();
        audio.play();
    });
};
// 解决ios音乐不自动播放的问题
autoPlayAudio();
function bgMusicPlay(){
    var bgmusic_button = document.getElementsByClassName("bgmusic")[0];
    var audio = document.getElementById("music");
    audio.preload = 'auto';
    audio.loop = 'true'
    audio.src = 'images/bg.mp3'
    audio.load();
    audio.play();

    // webPlayAudio();

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
    bgmusic_button.addEventListener('click',function(e){
        e.stopPropagation()
        e.preventDefault()
        alert(audio.paused)
        if(audio.paused){
            bgmusic_button.classList.remove('close')
            bgmusic_button.classList.add('open');
            audio.autoplay = 'autoplay'
            audio.load();
            audio.play();
        }else{
            bgmusic_button.classList.remove('open')
            bgmusic_button.classList.add('close');
            audio.autoplay = false
            audio.pause();
        }
    },false)
    // trigger(audio)
    // function trigger(elem){
    //     //IE
    //     if(document.all) {
    //         elem.click();
    //     }
    //     // 其它浏览器
    //     else {
    //         var e = document.createEvent("MouseEvents");
    //         e.initEvent("click", true, true);　　　　　　　　　　　　　　//这里的click可以换成你想触发的行为
    //             elem.dispatchEvent(e);　　　//这里的clickME可以换成你想触发行为的DOM结点
    //     }   
    // }

    autoPlayMusic(audio);
    // 音乐播放
    function autoPlayMusic(audio) {
        // 自动播放音乐效果，解决浏览器或者APP自动播放问题
        function musicInBrowserHandler() {
            musicPlay(audio,true);
            document.body.removeEventListener('click', musicInBrowserHandler);
        }
        document.body.addEventListener('click', musicInBrowserHandler);

        // 自动播放音乐效果，解决微信自动播放问题
        function musicInWeixinHandler() {
            musicPlay(audio,true);
            document.addEventListener("WeixinJSBridgeReady", function () {
                musicPlay(audio,true);
            }, false);
            document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
        }
        document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
        // window.onload = musicInWeixinHandler
    }
    function musicPlay(audio,isPlay) {
        // alert(audio.networkState)
        // alert(isPlay +' , '+ audio.paused)
        if (isPlay && audio.paused) {
            audio.touchstart = true;  
            audio.load();
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
bgMusicPlay();
// var audioElement = document.createElement('audio');
// audioElement.setAttribute('src', 'images/bg.mp3');
// audioElement.play();
// if('webkitAudioContext' in window) {
//     var myAudioContext = new webkitAudioContext();
//     var request = new XMLHttpRequest(),
//         mySource;
//     request.open('GET', 'images/bg.mp3', true);
//     request.responseType = 'arraybuffer';
//     request.addEventListener('load', bufferSound, false);
//     request.send();
//     function bufferSound(event) {
//         var request = event.target;
//         var source = myAudioContext.createBufferSource();
//         source.buffer = myAudioContext.createBuffer(request.response, false);
//         mySource = source;
//     }
// }


// webView.getSettings().setMediaPlaybackRequiresUserGesture(false);  
// console.log(webView)

// var app = new Vue({
//     el: "#app",
//     data: {
//         music:'open'
//     },
//     methods:{
//         musicEvent(e){
//             var audio = document.getElementById("music");
//             if(audio.paused){
//                 this.music = 'open';
//                 audio.autoplay = 'autoplay'
//                 audio.play();
//             }else{
//                 this.music = 'close';
//                 audio.autoplay = false
//                 audio.pause();
//             }
//         }
//     }
// })



// // 自定义音乐
// var g_audio = window.g_audio = new Audio(); //创建一个audio播放器
// var g_event = window.g_event = new function() {
//     var events = ['load', 'abort', 'canplay', 'canplaythrough', 'durationchange', 'emptied', 'ended', 'error', 'loadeddata', 'loadedmetadata', 'loadstart', 'pause', 'play', 'playing', 'progress', 'ratechange', 'seeked', 'seeking', 'stalled', 'suspend', 'timeupdate', 'volumechange', 'waiting', 'mediachange'];
//     g_audio.loop = false;
//     g_audio.autoplay = true;
//     g_audio.isLoadedmetadata = false;
//     g_audio.touchstart = true;
//     g_audio.audio = true;
//     g_audio.elems = {};
//     g_audio.isSupportAudio = function(type) {
//         type = type || "audio/mpeg";
//         try {
//             var r = g_audio.canPlayType(type);
//             return g_audio.canPlayType && (r == "maybe" || r == "probably")
//         } catch(e) {
//             return false;
//         }
//     };
//     g_audio.push = function(meta) {
//         g_audio.previousId = g_audio.id;
//         g_audio.id = meta.song_id;
//         g_audio.previousSrc = g_audio.src;
//         g_audio.previousTime = 0.00;
//         g_audio.src = g_audio.currentSrc = meta.song_fileUrl;
//         g_audio.isLoadedmetadata = false;
//         g_audio.autobuffer = true;
//         g_audio.load();
//         g_audio.play();
//         if (g_audio.previousSrc !== g_audio.src) {
//             g_audio.play();
//         }
//         alert(g_audio.paused)
//     };
//     for (var i = 0,l = events.length; i < l; i++) { 
//         (function(e) {
//             var fs = [];
//             this[e] = function(fn) {
//                 if (typeof fn !== 'function') {
//                     for (var k = 0; k < fs.length; k++) {
//                         fs[k].apply(g_audio);
//                     }
//                     return;
//                 }
//                 fs.push(fn);
//                 g_audio.addEventListener(e,
//                 function() {
//                     fn.apply(this);
//                 });
//             };
//         }).apply(this, [events[i]]);
//     }
//     this.ended(function() { //播放结束
//     });
//     this.load(function() { //加载
//         this.pause();
//         this.play();
//     });
//     this.loadeddata(function() {
//         this.pause();
//         this.play();
//     });
//     this.loadedmetadata(function() {
//         this.isLoadedmetadata = true;
//     });
//     this.error(function() { //请求资源时遇到错误
//     });
//     this.pause(function() { //歌曲暂停播放
//     });
//     this.play(function() { //歌曲播放
//     });
// };
// g_audio.elems["id"] = "music";
// g_audio.push({
//     song_id: "music",
//     song_fileUrl: "images/bg.mp3"
// });
// // $$$$(document).ready(function() {
// //     if (/i(Phone|P(o|a)d)/.test(navigator.userAgent)) {
// //         $$$$(document).one('touchstart',
// //         function(e) {
// //             g_audio.touchstart = true;
// //             g_audio.play();
// //             g_audio.pause();
// //             return false;
// //         });
// //     }
// // });
// // audio使用: $$$$("#main").unbind("click").bind("click",function() {
// //     //gid 表示歌曲id,只是一个表示，没有值不影响播放
// //     //song_fileUrl :播放歌曲地址，不能为空，有效地址
// //     g_audio.elems["id"] = gid;
// //     g_audio.push({
// //         song_id: gid,
// //         song_fileUrl: json.URL
// //     });
// // }); //绑定事件