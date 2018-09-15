// JavaScript Document
var loadingHost = '';
// var loadingHost = 'https://www.lgstatic.com/activity-rsrc/dist/2018-strength/';
var imgArray = [
	// "images/DIN-BlackItalic.otf",
	loadingHost+"images/loading-title-01.png",
	loadingHost+"images/loading-title-02.png",
	loadingHost+"images/loading-title-03.png",
	// loadingHost+"images/loading-title.png",
	loadingHost+"images/loading-icon.png",
	loadingHost+"images/loading-flip-01.png",
	loadingHost+"images/loading-flip-02.png",
	loadingHost+"images/loading-flip-03.png",
	loadingHost+"images/loading-flip-04.png",
	loadingHost+"images/loading-flip-05.png",
	loadingHost+"images/loading-flip-06.png",
	loadingHost+"images/loading-flip-07.png",
	loadingHost+"images/loading-flip-08.png",
	loadingHost+"images/loading-flip-09.png",
	loadingHost+"images/loading-flip-10.png",
	loadingHost+"images/loading-flip-11.png",
	loadingHost+"images/loading-flip-12.png",
	loadingHost+"images/loading-flip-13.png",
	loadingHost+"images/loading-flip-14.png",
	loadingHost+"images/loading-flip-15.png",
	loadingHost+"images/loading-flip-16.png",
	loadingHost+"images/loading-flip-17.png",
	loadingHost+"images/loading-flip-18.png",
	loadingHost+"images/loading-flip-19.png",
	

	loadingHost+"images/music/bg.MP3",
	loadingHost+"images/music/bird-02.mp3",
	loadingHost+"images/music/camera.MP3",
	loadingHost+"images/music/computer.MP3",
	loadingHost+"images/music/guide.MP3",
	loadingHost+"images/music/steps.mp3",

	loadingHost+"images/page-noise-01.png",
	loadingHost+"images/page-noise-02.png",
	loadingHost+"images/page-noise-03.png",
	loadingHost+"images/page-noise-04.png",
	loadingHost+"images/page-noise-05.png",
	loadingHost+"images/page-noise-06.png",
	loadingHost+"images/page-noise-07.png",
	loadingHost+"images/page-noise-08.png",
	loadingHost+"images/page-noise-09.png",

	loadingHost+"images/icon.png?v=2",
	// loadingHost+"images/girl.png",

	loadingHost+"images/flip-01.png",
	loadingHost+"images/flip-02.png",
	loadingHost+"images/flip-03.png",
	loadingHost+"images/flip-04.png",
	loadingHost+"images/flip-05.png",
	loadingHost+"images/flip-06.png",
	loadingHost+"images/flip-07.png",
	loadingHost+"images/flip-08.png",
	loadingHost+"images/flip-09.png",

	loadingHost+"images/page0-cloud2-01.png",
	loadingHost+"images/page0-cloud2-02.png",
	loadingHost+"images/page0-cloud2-03.png",
	loadingHost+"images/page0-cloud2-04.png",
	loadingHost+"images/page0-cloud2-05.png",
	loadingHost+"images/page0-cloud2-06.png",
	loadingHost+"images/page0-cloud2-07.png",
	loadingHost+"images/page0-cloud2-08.png",
	loadingHost+"images/page0-cloud2-09.png",
	loadingHost+"images/page0-cloud2-10.png",
	loadingHost+"images/page0-cloud2-11.png",
	loadingHost+"images/page0-cloud2-12.png",
	loadingHost+"images/page0-cloud2-13.png",
	loadingHost+"images/page0-cloud2-14.png",
	loadingHost+"images/page0-cloud2-15.png",
	loadingHost+"images/page0-cloud2-16.png",
	loadingHost+"images/page0-cloud2-17.png",
	loadingHost+"images/page0-cloud2-18.png",
	loadingHost+"images/page0-cloud2-19.png",
	loadingHost+"images/page0-cloud2-20.png",
	loadingHost+"images/page0-cloud2-21.png",
	loadingHost+"images/page0-cloud2-22.png",
	loadingHost+"images/page0-cloud2-23.png",
	loadingHost+"images/page0-cloud2-24.png",
	loadingHost+"images/page0-cloud2-25.png",
	loadingHost+"images/page0-icon.png?v=2",
	loadingHost+"images/page0-start-btn.png",

	// loadingHost+"images/page0-cloud0-01.png",
	// loadingHost+"images/page0-cloud0-02.png",
	// loadingHost+"images/page0-cloud0-03.png",
	// loadingHost+"images/page0-cloud0-04.png",
	// loadingHost+"images/page0-cloud0-05.png",
	// loadingHost+"images/page0-cloud0-06.png",
	// loadingHost+"images/page0-cloud0-07.png",
	// loadingHost+"images/page0-cloud0-08.png",

	// loadingHost+"images/page0-cloud-09.png",
	// loadingHost+"images/page0-cloud-10.png",
	// loadingHost+"images/page0-cloud-11.png",
	// loadingHost+"images/page0-cloud.png",
	// loadingHost+"images/page0-circle-06-02.png",
	loadingHost+"images/page0-circle.png",
	loadingHost+"images/page0-girl-01.png",
	loadingHost+"images/page0-girl-02.png",
	// loadingHost+"images/bird.png",
	// loadingHost+"images/bird-02.png",
	loadingHost+"images/page1-bird.png",
	loadingHost+"images/page1-paper-01.png",
	loadingHost+"images/page1-paper-02.png",
	loadingHost+"images/page1-paper-03.png",
	loadingHost+"images/page1-paper-04.png",
	loadingHost+"images/page1-paper-05.png",
	loadingHost+"images/page1-paper-06.png",
	loadingHost+"images/page1-paper-07.png",
	loadingHost+"images/page1-paper-08.png",
	loadingHost+"images/page1-paper-09.png",
	loadingHost+"images/page1-paper-10.png",
	// loadingHost+"images/page1-cloud-01.png",
	// loadingHost+"images/page1-cloud-02.png",
	// loadingHost+"images/page1-cloud-03.png",
	// loadingHost+"images/page1-cloud-04.png",
	// loadingHost+"images/page1-cloud-05.png",
	// loadingHost+"images/page2-girl.png",
	loadingHost+"images/page2-girl-01.png",
	loadingHost+"images/page2-girl-02.png",
	loadingHost+"images/page2-girl-03.png",
	loadingHost+"images/page2-hand.png",
	// loadingHost+"images/page2-rotate.png",
	loadingHost+"images/page2-options.png?v=2",
	loadingHost+"images/page2-title.png",
	loadingHost+"images/page2-detail.png",
	loadingHost+"images/page2-bubble.png",
	loadingHost+"images/page2-words.png",

	loadingHost+"images/page2-screen2-01.png",
	loadingHost+"images/page2-screen2-02.png",
	loadingHost+"images/page2-screen2-03.png",
	loadingHost+"images/page2-screen2-04.png",
	loadingHost+"images/page2-screen2-05.png",
	// loadingHost+"images/page2-screen-01.png",
	// loadingHost+"images/page2-screen-02.png",
	// loadingHost+"images/page2-screen-03.png",
	// loadingHost+"images/page2-screen-04.png",
	// loadingHost+"images/page2-screen-05.png",
	// loadingHost+"images/page2-screen-06.png",
	// loadingHost+"images/page2-screen-07.png",
	// loadingHost+"images/page2-screen-08.png",
	// loadingHost+"images/page2-screen-09.png",
	// loadingHost+"images/page2-screen-10.png",
	// loadingHost+"images/page2-screen-11.png",
	// loadingHost+"images/page2-screen-12.png",
	// loadingHost+"images/page2-screen-13.png",
	// loadingHost+"images/page2-screen-14.png",
	// loadingHost+"images/page2-screen-15.png",
	loadingHost+"images/page3-icon.png?v=2",
	// loadingHost+"images/page3-house.png",
	// loadingHost+"images/page3-light.png",
	// loadingHost+"images/page3-pole.png",
	loadingHost+"images/page3-options.png?v=2",
	loadingHost+"images/page3-options-active.png",
	loadingHost+"images/page3-detail.png",
	loadingHost+"images/page3-girl2-01.png",
	loadingHost+"images/page3-girl2-02.png",
	loadingHost+"images/page3-girl2-03.png",
	loadingHost+"images/page3-girl2-04.png",
	loadingHost+"images/page3-girl2-05.png",
	loadingHost+"images/page3-girl2-06.png",
	loadingHost+"images/page3-girl2-07.png",
	loadingHost+"images/page3-girl2-08.png",
	loadingHost+"images/page3-girl2-09.png",
	loadingHost+"images/page3-girl2-10.png",
	loadingHost+"images/page3-girl2-11.png",
	loadingHost+"images/page3-girl2-12.png",
	loadingHost+"images/page3-girl2-13.png",
	loadingHost+"images/page3-girl2-14.png",
	// loadingHost+"images/page3-girl-01.png",
	// loadingHost+"images/page3-girl-02.png",
	// loadingHost+"images/page3-girl-03.png",
	// loadingHost+"images/page3-girl-04.png",
	// loadingHost+"images/page3-girl-05.png",
	// loadingHost+"images/page3-girl-06.png",
	// loadingHost+"images/page3-girl-07.png",
	// loadingHost+"images/page3-girl-08.png",
	// loadingHost+"images/page3-girl-09.png",
	// loadingHost+"images/page3-girl-10.png",
	// loadingHost+"images/page3-girl-11.png",
	loadingHost+"images/page4-eye.png",
	loadingHost+"images/page4-detail.png",
	loadingHost+"images/page4-options.png",
	// loadingHost+"images/page4-photo.png",
	loadingHost+"images/page4-photo-box.png",
	loadingHost+"images/page4-photo-content.png",
	loadingHost+"images/page5-icon.png?v=2",
	loadingHost+"images/page5-option-active.png",
	loadingHost+"images/page5-detail.png",
	loadingHost+"images/page5-sign-01.png",
	loadingHost+"images/page5-sign-02.png",
	loadingHost+"images/page5-sign-03.png",
	loadingHost+"images/page5-sign-04.png",
	loadingHost+"images/page5-sign-05.png",
	loadingHost+"images/page5-sign-06.png",
	loadingHost+"images/page5-sign-07.png",
	loadingHost+"images/page5-sign-08.png",
	loadingHost+"images/page5-sign-09.png",
	loadingHost+"images/page5-sign-10.png",
	loadingHost+"images/page5-sign-11.png",
	loadingHost+"images/page5-sign-12.png",
	loadingHost+"images/page5-sign-13.png",
	loadingHost+"images/page5-sign-14.png",
	loadingHost+"images/page5-sign-15.png",
	loadingHost+"images/page5-sign-16.png",
	loadingHost+"images/page5-sign-17.png",
	loadingHost+"images/page5-sign-18.png",
	loadingHost+"images/page5-sign-19.png",
	loadingHost+"images/page5-sign-20.png",
	loadingHost+"images/page5-sign-21.png",
	loadingHost+"images/page5-sign-22.png",
	loadingHost+"images/page5-sign-23.png",
	loadingHost+"images/page5-sign-24.png",
	loadingHost+"images/page5-sign-25.png",
	loadingHost+"images/page6-options.png",
	loadingHost+"images/page6-icon.png",
	loadingHost+"images/page6-start-btn.png",
	
	
	"images/result-add.png",
	"images/result-ercode.png",
	"images/result-lagou.png",
	"images/result-person-01.png",
	"images/result-person-02.png",
	"images/result-person-03.png",
	"images/result-person-04.png",
	"images/result-text-a-01.png",
	"images/result-text-a-02.png",
	"images/result-text-a-03.png",
	"images/result-text-a-04.png",
	"images/result-text-b-01.png",
	"images/result-text-b-02.png",
	"images/result-text-b-03.png",
	"images/result-text-c-01.png",
	"images/result-text-c-02.png",
	"images/result-text-c-03.png",
	"images/result-text-d-01.png",
	"images/result-text-d-02.png",
	"images/result-tips.png",
	"images/result-title.png"
];
var now = 0;
// jQuery.ajax({
//     type:'get',
//     url:'https://activity.lagou.com/activityapi/common/getNow',
//     success:function(data){
//         now = data.content;
//     }
// });
// 资源加载
var Loader = function(){
	this.currProgress = 0;  // 当前加载进度
	this.isCompleted = false; // 判断是否加载完毕
	this.total = 100;  // 最大值100

	var loaded = 0;

	var loading = document.getElementById('loading'),
		number = document.getElementById('loading__num')//,
		progress_bg = document.getElementById('loading__progress'),
		progress = document.getElementById('progress'),
		w = progress_bg.offsetWidth;// / imgArray.length;//20;
	// alert(w)
	this.Loading = function(imgArray,success){
		var self = this;
		for( var i = 0 ; i < imgArray.length; i++ ){
			var ext = imgArray[i].substring(imgArray[i].lastIndexOf('.')).toLowerCase();
			if( /((.png)|(.jpg)|(.jpeg)|(.gif))/g.test(ext)){
				var img = new Image();
				img.onload = function(){
					loaded ++;
					self.currProgress = Math.floor(loaded / imgArray.length * 100)
					progress.style.width = self.currProgress / 100 * w+"px";  // self.currProgress / 100 * w+"px"
					number.innerHTML = (self.currProgress).toFixed(0)+"%";
					// var o = Math.floor(self.currProgress / 100),
					// 	s = Math.floor(self.currProgress % 100 / 10),
					// 	t = self.currProgress % 100 % 10
					// number.innerHTML = '<div class="num'+(o > 0 ? '' : ' hide')+' num'+o+'"></div>'+
					// 	'<div class="num'+(o || s > 0 ? '' : ' hide')+' num'+s+'"></div>'+
					// 	'<div class="num num'+t+'"></div><div class="unit"></div>'
					if( loaded == imgArray.length ){
						success();  // 回调函数
					}
				};
				img.onerror = function(){
					loaded ++;
					if( loaded == imgArray.length ){
						success();  // 回调函数
					}
				};
				// img.src = ctx + "/template/1024/" + imgArray[i];
                img.src = imgArray[i]; // loadingHost + imgArray[i];
			}else{
				this.loadMusic(imgArray[i]);  // loadingHost + imgArray[i]
			}
		}
	};
	this.loadMusic = function(path){
		jQuery.ajax({
			type: 'get',
			url: path,
			data: {},
			async:false,   // false 同步  true  异步
			success: function (data) {
				loaded++;
				if( loaded == imgArray.length ){
					success();  // 回调函数
				}
				//console.log("success");
			},
			error: function (xhr, type)  {
				loaded++;
				if( loaded == imgArray.length ){
					success();  // 回调函数
				}
				//console.log('error');
			}
		})
	};
	this.success = function(){
		// progress.style.width = w+"px";
		// number.innerHTML = "100%";
		var last = new Date().getTime(),
			middle = last - startTime;
		if(middle >= 2000){
			middle = 50;
		}
		setTimeout(function(){
			console.log("加载完毕");
			loadingStatus = true;
			if(pageStatus){
				pageStatus = false;
				loadingStatus = false;
				loadingSuccess();
			}
		},middle);
		//init.initDate();  // 设置时间
		// init.page1Play();  // 播放音乐
		// init(now);

		//jQuery('.page5').removeClass('hidden');
		//jQuery('.page5 .message').removeClass('hidden');
		//jQuery('.page5 .messBG').addClass('person').removeClass('hidden');
		//init.nextAnimate();
	};
	this.loadLoading = function(imgArray,obj){
		// var img = new Image();
		// img.onload = function(){
			obj.Loading(imgArray,obj.success);
		// };
		// img.onerror = function(){
			// obj.Loading(imgArray,obj.success);
		// };
		// img.src = ctx + "/template/1024/" + imgArray[0];
        // img.src = imgArray[0];
	};
};
//window.onload = function(){
var loader = new Loader();
loader.loadLoading(imgArray,loader);
//};