// JavaScript Document
var loadingHost = '';
var imgArray = [
	"//img.digoo.cn/2019/zt/22/images-h5/loading-icon.png",
	"//img.digoo.cn/2019/zt/22/images-h5/loading-words.png",
	"//img.digoo.cn/2019/zt/22/images-h5/icon.png",
	"//img.digoo.cn/2019/zt/22/images-h5/icon2.png",
	"//img.digoo.cn/2019/zt/22/images-h5/icon3.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page0-building-words.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page0-building.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page0-content.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page0-door.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page0-line.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page0-moon-line.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page0-moon.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page0-shadow.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page0-video-1.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page0-video-2.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page0-video-3.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page0-video-bg.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page0-video-frame.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page0-video-shadow.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page0-words.png",

	"//img.digoo.cn/2019/zt/22/images-h5/page0-video-btn.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page0-video-loading.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page1-five-logo.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page1-leftbtn.png",

	"//img.digoo.cn/2019/zt/22/images-h5/page1-anut.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page1-bg.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page1-desk.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page1-person.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page1-five-mom.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page1-fourth-phone.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page1-light.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page1-second-bg.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page1-second-phone.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page1-second-text.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page1-text.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page1-third-phone.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page1-wuyu-bottom.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page1-wuyu-girl.png",

	"//img.digoo.cn/2019/zt/22/images-h5/page2-finger.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page2-first.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page2-fringe.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page2-page.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page2-phone.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page2-third-wechat.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page2-wechat-title.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page2-five-content.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page2-five-top.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page2-fourth-keyboard.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page2-fourth-top.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page2-ticket.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page2-ticket2.png",

	"//img.digoo.cn/2019/zt/22/images-h5/page3-bg.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page3-desk.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page3-face-01.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page3-face-02.png",
	// "//img.digoo.cn/2019/zt/22/images-h5/page3-fourth-bg.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page3-light.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page3-phone.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page3-screen.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page3-second-bg.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page3-second-man.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page3-second-manturn.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page3-shadow.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page3-third-bg.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page3-window.png",

	"//img.digoo.cn/2019/zt/22/images-h5/page1-result-card.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page1-result-mom.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page2-result-card.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page2-result-me.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page3-result-card.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page3-result-man.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page1-result-save.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page2-result-save.png",
	"//img.digoo.cn/2019/zt/22/images-h5/page3-result-save.png"
];
var now = 0;
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