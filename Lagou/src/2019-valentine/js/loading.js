// JavaScript Document
var loadingHost = '';
// var loadingHost = 'https://static.lagou.com/activity-rsrc/dist/2019-valentine/';
var imgArray = [
	// "images/loading.gif",
	loadingHost + "images/loading-img.png",
	loadingHost + "images/loading-line.png",
	loadingHost + "images/icon.png",
	loadingHost + "images/close.png",
	loadingHost + "images/open.png",
	loadingHost + "images/page0-bg.png",
	loadingHost + "images/page0-c01.png",
	loadingHost + "images/page0-c05.png",
	loadingHost + "images/page0-c06.png",
	loadingHost + "images/page0-dark.png",
	loadingHost + "images/page0-star.png",
	loadingHost + "images/page1-bg.png",
	loadingHost + "images/page1-top.png",
	loadingHost + "images/page1-window.png",
	loadingHost + "images/page2-bg.png",
	loadingHost + "images/page2-btn.png",
	loadingHost + "images/page2-decoration.png",
	loadingHost + "images/page2-ercode.png",
	loadingHost + "images/page2-input.png",
	loadingHost + "images/page2-logo.png",
	loadingHost + "images/page2-title-01.png",
	loadingHost + "images/page2-title-02.png",
	loadingHost + "images/page2-title-03.png",
	loadingHost + "images/page2-subtitle-01.png",
	loadingHost + "images/page2-subtitle-02.png",
	loadingHost + "images/page2-subtitle-03.png"
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
		number = document.getElementById('progress-number') // ,
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
					self.currProgress = loaded / imgArray.length * 100;
					// progress.style.width = self.currProgress / 100 * w+"px";  // self.currProgress / 100 * w+"px"
					number.innerHTML = (self.currProgress).toFixed(1)+"%";
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
                img.src = imgArray[i];
			}else{
				this.loadMusic(imgArray[i]);
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
		number.innerHTML = "100%";
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