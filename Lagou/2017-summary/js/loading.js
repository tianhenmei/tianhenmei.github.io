// JavaScript Document
var loadingHost = '';
// var loadingHost = 'https://static.lagou.com/activity-rsrc/dist/2017-summary/';
var imgArray = [
	"images/cover-bg-time.png",
	"images/cover-btn.png",
	"images/cover-center.png",
	"images/cover-detail.png",
	"images/cover-logo-sohu.png",
	"images/cover-logo.png",
	"images/cover-title.png",
	"images/icon.png",
	"images/title-bg.png",
	"images/page0-bg.png",
	"images/page0-center-bg.png",
	"images/page0-icon.png",
	"images/page1-center-bg.png",
	"images/page1-icon.png",
	"images/page2-center-bg.png",
	"images/page2-icon.png",
	// "images/page3-center-bg.png",
	"images/page3-icon.png",
	"images/page4-center-bg.png",
	"images/page4-icon.png",
	"images/page4-icon2.png",
	// "images/page5-center-bg.png",
	"images/page5-icon.png",
	// "images/page6-center-bg.png",
	"images/page6-icon.png",
	"images/page7-center-bg.png",
	"images/page7-icon.png",
	"images/page7-icon2.png",
	"images/page8-icon.png",
	"images/page8-light.png",
	"images/page8-logo-sohu.png",
	"images/page8-other.png",
	"images/page8-plane.png",
	"images/page8-title-bg-sohu.png",
	"images/title-bg.png"
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

	var loading = document.getElementById('loading')//,
		// number = document.getElementById('progress-number'),
		// progress_bg = document.getElementById('progress-bg'),
		// progress = document.getElementById('progress'),
		// w = progress_bg.offsetWidth;// / imgArray.length;//20;
	this.Loading = function(imgArray,success){
		var self = this;
		for( var i = 0 ; i < imgArray.length; i++ ){
			var ext = imgArray[i].substring(imgArray[i].lastIndexOf('.')).toLowerCase();
			if( /((.png)|(.jpg)|(.jpeg)|(.gif))/g.test(ext)){
				var img = new Image();
				img.onload = function(){
					loaded ++;
					// self.currProgress = loaded / imgArray.length * 100;
					// progress.style.width = self.currProgress / 100 * w+"px";  // self.currProgress / 100 * w+"px"
					// number.innerHTML = (self.currProgress).toFixed(1)+"%";
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
                img.src = loadingHost + imgArray[i];
			}else{
				this.loadMusic(loadingHost + imgArray[i]);
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