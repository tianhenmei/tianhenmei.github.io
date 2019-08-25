// JavaScript Document
var loadingHost = '';
// var loadingHost = 'https://static.lagou.com/activity-rsrc/dist/2019-birthday/';
var imgArray = [
	[
		loadingHost + "images/loading.gif",
		loadingHost + "images/cover-bg.jpg",
		loadingHost + "images/cover-kid.png",
		loadingHost + "images/cover-kid-lefthand.png",
		loadingHost + "images/cover-kid-leftleg.png",
		loadingHost + "images/cover-kid-righthand.png",
		loadingHost + "images/cover-kid-rightleg.png",
		loadingHost + "images/cover-title-bg.png",
		loadingHost + "images/icon.png",
		loadingHost + "images/page0-bg.png",
		loadingHost + "images/page0-lefthand.png",
		loadingHost + "images/page0-righthand.png",
		loadingHost + "images/page0-square.png",
		loadingHost + "images/page0-txt.png",
		loadingHost + "images/page1-bg.png",
		loadingHost + "images/page1-goods.png",
		loadingHost + "images/page1-square.png",
		loadingHost + "images/page1-left.png",
		loadingHost + "images/page1-right.png",
		loadingHost + "images/page3-bg.png",
		loadingHost + "images/page3-bgbottom.png",
		loadingHost + "images/page3-create.png",
		loadingHost + "images/page3-icon.png",
		loadingHost + "images/page3-send.png",
		loadingHost + "images/page3-success.png"
	], [
		loadingHost + "images/page1-catch-0-0.png",
		loadingHost + "images/page1-catch-0-1.png",
		loadingHost + "images/page1-catch-0-2.png",
		loadingHost + "images/page1-catch-0-3.png",
		loadingHost + "images/page1-catch-1-0.png",
		loadingHost + "images/page1-catch-1-1.png",
		loadingHost + "images/page1-catch-1-2.png",
		loadingHost + "images/page1-catch-1-3.png",
		loadingHost + "images/page1-catch-2-0.png",
		loadingHost + "images/page1-catch-2-1.png",
		loadingHost + "images/page1-catch-2-2.png",
		loadingHost + "images/page1-catch-2-3.png",

		loadingHost + "images/page3-canvas-bottom.png",
		loadingHost + "images/page3-canvas-ercode.png",
		loadingHost + "images/page3-canvas-hugleg.png",
		loadingHost + "images/page3-canvas-tips.png",

		loadingHost + "images/page3-canvas-design-bg.png",
		loadingHost + "images/page3-canvas-design-center.png",
		loadingHost + "images/page3-canvas-design-leg.png",
		loadingHost + "images/page3-canvas-design-star.png",
		loadingHost + "images/page3-canvas-design-title.png",
		loadingHost + "images/page3-canvas-design.png",

		loadingHost + "images/page3-canvas-func-bg.png",
		loadingHost + "images/page3-canvas-func-center.png",
		loadingHost + "images/page3-canvas-func-leg.png",
		loadingHost + "images/page3-canvas-func-star.png",
		loadingHost + "images/page3-canvas-func-title.png",
		loadingHost + "images/page3-canvas-func.png",

		loadingHost + "images/page3-canvas-market-bg.png",
		loadingHost + "images/page3-canvas-market-center.png",
		loadingHost + "images/page3-canvas-market-star.png",
		loadingHost + "images/page3-canvas-market-title.png",
		loadingHost + "images/page3-canvas-market.png",

		loadingHost + "images/page3-canvas-op-bg.png",
		loadingHost + "images/page3-canvas-op-center.png",
		loadingHost + "images/page3-canvas-op-leg.png",
		loadingHost + "images/page3-canvas-op-star.png",
		loadingHost + "images/page3-canvas-op-title.png",
		loadingHost + "images/page3-canvas-op.png",
		
		loadingHost + "images/page3-canvas-pm-bg.png",
		loadingHost + "images/page3-canvas-pm-center.png",
		loadingHost + "images/page3-canvas-pm-leg.png",
		loadingHost + "images/page3-canvas-pm-star.png",
		loadingHost + "images/page3-canvas-pm-title.png",
		loadingHost + "images/page3-canvas-pm.png",

		loadingHost + "images/page3-canvas-sell-bg.png",
		loadingHost + "images/page3-canvas-sell-center.png",
		loadingHost + "images/page3-canvas-sell-leg.png",
		loadingHost + "images/page3-canvas-sell-star.png",
		loadingHost + "images/page3-canvas-sell-title.png",
		loadingHost + "images/page3-canvas-sell.png",

		loadingHost + "images/page3-canvas-tech-bg.png",
		loadingHost + "images/page3-canvas-tech-center.png",
		loadingHost + "images/page3-canvas-tech-leg.png",
		loadingHost + "images/page3-canvas-tech-star.png",
		loadingHost + "images/page3-canvas-tech-title.png",
		loadingHost + "images/page3-canvas-tech.png",

		"images/page3-canvas-logo.png",
		"images/page3-canvas-bottom.png",
		"images/page3-canvas-ercode.png",
		"images/page3-canvas-hugleg.png",
		"images/page3-canvas-tips.png",

		"images/page3-canvas-design-bg.png",
		"images/page3-canvas-design-center.png",
		"images/page3-canvas-design-leg.png",
		"images/page3-canvas-design-star.png",
		"images/page3-canvas-design-title.png",
		"images/page3-canvas-design.png",

		"images/page3-canvas-func-bg.png",
		"images/page3-canvas-func-center.png",
		"images/page3-canvas-func-leg.png",
		"images/page3-canvas-func-star.png",
		"images/page3-canvas-func-title.png",
		"images/page3-canvas-func.png",

		"images/page3-canvas-market-bg.png",
		"images/page3-canvas-market-center.png",
		"images/page3-canvas-market-star.png",
		"images/page3-canvas-market-title.png",
		"images/page3-canvas-market.png",

		"images/page3-canvas-op-bg.png",
		"images/page3-canvas-op-center.png",
		"images/page3-canvas-op-leg.png",
		"images/page3-canvas-op-star.png",
		"images/page3-canvas-op-title.png",
		"images/page3-canvas-op.png",
		
		"images/page3-canvas-pm-bg.png",
		"images/page3-canvas-pm-center.png",
		"images/page3-canvas-pm-leg.png",
		"images/page3-canvas-pm-star.png",
		"images/page3-canvas-pm-title.png",
		"images/page3-canvas-pm.png",

		"images/page3-canvas-sell-bg.png",
		"images/page3-canvas-sell-center.png",
		"images/page3-canvas-sell-leg.png",
		"images/page3-canvas-sell-star.png",
		"images/page3-canvas-sell-title.png",
		"images/page3-canvas-sell.png",

		"images/page3-canvas-tech-bg.png",
		"images/page3-canvas-tech-center.png",
		"images/page3-canvas-tech-leg.png",
		"images/page3-canvas-tech-star.png",
		"images/page3-canvas-tech-title.png",
		"images/page3-canvas-tech.png"
	]
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
				this.loadMusic(imgArray, imgArray[i]);
			}
		}
	};
	this.loadMusic = function(imgArray, path){
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
loader.loadLoading(imgArray[0],loader);
//};

function loadRest(callback) {
	loader.Loading(imgArray[1], callback);
}