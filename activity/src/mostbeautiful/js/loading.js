// JavaScript Document
var loadingHost = '';
var imgArray = [
	"images/loading-icon.png",
	"images/loading-words.png",
	"images/icon.png",
	"images/icon2.png",
	"images/page0-building-words.png",
	"images/page0-building.png",
	"images/page0-content.png",
	"images/page0-door.png",
	"images/page0-line.png",
	"images/page0-moon-line.png",
	"images/page0-moon.png",
	"images/page0-shadow.png",
	"images/page0-video-1.png",
	"images/page0-video-2.png",
	"images/page0-video-3.png",
	"images/page0-video-bg.png",
	"images/page0-video-frame.png",
	"images/page0-video-shadow.png",
	"images/page0-words.png",

	"images/page1-anut.png",
	"images/page1-bg.png",
	"images/page1-five-mom.png",
	"images/page1-fourth-phone.png",
	"images/page1-light.png",
	"images/page1-second-bg.png",
	"images/page1-second-phone.png",
	"images/page1-second-text.png",
	"images/page1-text.png",
	"images/page1-third-phone.png",

	"images/page2-finger.png",
	"images/page2-first.png",
	"images/page2-fringe.png",
	"images/page2-page.png",
	"images/page2-phone.png",
	"images/page2-third-wechat.png",
	"images/page2-wechat-title.png",

	"images/page3-bg.png",
	"images/page3-desk.png",
	"images/page3-face-01.png",
	"images/page3-face-02.png",
	"images/page3-fourth-bg.png",
	"images/page3-light.png",
	"images/page3-phone.png",
	"images/page3-screen.png",
	"images/page3-second-bg.png",
	"images/page3-second-man.png",
	"images/page3-second-manturn.png",
	"images/page3-shadow.png",
	"images/page3-third-bg.png",
	"images/page3-window.png"
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
		// progress_bg = document.getElementById('loading__progress'),
		// progress = document.getElementById('progress'),
		// w = progress_bg.offsetWidth;// / imgArray.length;//20;
	// alert(w)
	this.Loading = function(imgArray,success){
		var self = this;
		for( var i = 0 ; i < imgArray.length; i++ ){
			var ext = imgArray[i].substring(imgArray[i].lastIndexOf('.')).toLowerCase();
			if( /((.png)|(.jpg)|(.jpeg)|(.gif))/g.test(ext)){
				var img = new Image();
				img.onload = function(){
					loaded ++;
					// self.currProgress = Math.floor(loaded / imgArray.length * 100)
					// progress.style.width = self.currProgress / 100 * w+"px";  // self.currProgress / 100 * w+"px"
					// number.innerHTML = (self.currProgress).toFixed(0)+"%";
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