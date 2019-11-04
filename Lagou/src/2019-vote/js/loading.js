// JavaScript Document
// var loadingHost = '';
var loadingHost = 'https://www.lgstatic.com/plat-activity-fed/2019-vote/';
var imgArray = [
	loadingHost+"images/loading-bg.png",
	loadingHost+"images/loading-complete.png",
	loadingHost+"images/loading-icon.png",
	loadingHost+"images/loading-title.png",
	loadingHost+"images/LTe50012.ttf",
	loadingHost+"images/DIN-Regular.otf",
	loadingHost+"images/music.mp3",
	loadingHost+"images/icon-02.png",
	loadingHost+"images/icon-text.png",
	loadingHost+"images/icon.png",
	loadingHost+"images/music-pause.png",
	loadingHost+"images/music-play.png",
	loadingHost+"images/page0-bg.png",
	loadingHost+"images/page0-block.png",
	loadingHost+"images/page0-logo.png",
	loadingHost+"images/page0-move.png",
	loadingHost+"images/page0-smalltext.png",
	loadingHost+"images/page0-top.png",

	loadingHost+"images/page1-bg.png",
	loadingHost+"images/page1-element01.png",
	loadingHost+"images/page1-element02.png",
	loadingHost+"images/page1-element03.png",
	loadingHost+"images/page1-element04.png",
	loadingHost+"images/page1-element05.png",
	loadingHost+"images/page1-element06.png",
	loadingHost+"images/page1-element07.png",
	loadingHost+"images/page1-element08.png",
	loadingHost+"images/page1-element09.png",
	loadingHost+"images/page1-element10.png",
	loadingHost+"images/page1-en.png",
	loadingHost+"images/page1-title.png",
	loadingHost+"images/page1-top.png",

	loadingHost+"images/page2-bg.png",
	loadingHost+"images/page2-btn-02.png",
	loadingHost+"images/page2-btn.png",
	loadingHost+"images/page2-content-bg.png",
	loadingHost+"images/page2-intro-04.png",
	loadingHost+"images/page2-intro-arrow.png",
	loadingHost+"images/page2-intro-bg.png",
	loadingHost+"images/page2-intro-bgcenter.png",
	loadingHost+"images/page2-intro-schedule.png",
	loadingHost+"images/page2-intro-standard.png",
	loadingHost+"images/page2-intro-titlebg.png",
	loadingHost+"images/page2-intro.png",
	loadingHost+"images/page2-rank-bg.png",
	loadingHost+"images/page2-signup-bg.png",
	loadingHost+"images/page2-signup-btn.png",
	loadingHost+"images/page2-signup-input-multi.png",
	loadingHost+"images/page2-signup-input.png",
	loadingHost+"images/page2-time-bg.png",
	loadingHost+"images/page2-time-map-03.png",
	
	loadingHost+"images/page3-btn-metoo.png",
	loadingHost+"images/page3-btn-savelong.png",
	loadingHost+"images/page3-btn-share.png",
	loadingHost+"images/page3-btn-showrank.png",
	loadingHost+"images/page3-drag-bg.png",
	loadingHost+"images/page3-drag-btn.png",
	loadingHost+"images/page3-drag-end.png",
	loadingHost+"images/page3-drag-success.png",
	loadingHost+"images/page3-logo-bg-01.png",
	loadingHost+"images/page3-logo-bg-02.png",
	loadingHost+"images/page3-logo-bg.png",
	loadingHost+"images/page3-metoo.png",
	loadingHost+"images/page3-rank-bg.png",
	loadingHost+"images/page3-save-bottomwords02.png",
	loadingHost+"images/page3-save-btn.png",
	loadingHost+"images/page3-save-rightwords.png",
	loadingHost+"images/page3-save-sharetips02.png",
	loadingHost+"images/page3-share-btn.png",

	loadingHost+"images/page4-search-icon.png",
	loadingHost+"images/page4-search.png",
	loadingHost+"images/page4-show-line.png",
	loadingHost+"images/page4-vote-btn.png",
	loadingHost+"images/rank-search-icon.png",
	loadingHost+"images/signup-btn.png",


	loadingHost+"images/canvas-ercode-bg.png",
	loadingHost+"images/canvas-logo-bg.png",
	loadingHost+"images/canvas-title.png",
	loadingHost+"images/canvas-top.png",
	loadingHost+"images/create-share01.png",
	loadingHost+"images/create-share02.png",
	loadingHost+"images/create-share03.png",
	loadingHost+"images/create-share04.png",
	loadingHost+"images/create-share05.png",
	loadingHost+"images/create-share06.png"
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
		number = document.getElementById('loading__num');//,
		// progress_bg = document.getElementById('loading__progress'),
		// progress = document.getElementById('progress'),
		// w = progress_bg.offsetWidth;// / imgArray.length;//20;
	// alert(w)
	this.Loading = function(imgArray,success){
		var self = this;
		try{
			for( var i = 0 ; i < imgArray.length; i++ ){
				var ext = imgArray[i].substring(imgArray[i].lastIndexOf('.')).toLowerCase();
				if( /((.png)|(.jpg)|(.jpeg)|(.gif))/g.test(ext)){
					(function(path){
						var img = new Image();
						img.crossOrigin="anonymous";
						img.onload = function(){
							loaded ++;
							// alert('success: '+path);
							self.currProgress = Math.floor(loaded / imgArray.length * 100)
							// progress.style.width = self.currProgress / 100 * w+"px";  // self.currProgress / 100 * w+"px"
							var n = (self.currProgress).toFixed(1),
								arr = n.split('.'),
								l = n;
							if(arr[1] == '0'){
								l = arr[0];
							}
							number.innerHTML = l+"%";
							if( loaded == imgArray.length ){
								success();  // 回调函数
							}
						};
						img.onerror = function(){
							// alert('error: '+path);
							loaded ++;
							if( loaded == imgArray.length ){
								success();  // 回调函数
							}
						};
						// img.src = ctx + "/template/1024/" + imgArray[i];
						img.src = imgArray[i];
					})(imgArray[i]);
				}else{
					this.loadMusic(imgArray[i]);
				}
			}
		}catch(e){
			// alert(e);
		}
	};
	this.loadMusic = function(path){
		$.ajax({
			type: 'get',
			url: path,
			data: {},
			async:false,   // false 同步  true  异步
			success: function (data) {
				loaded++;
				// alert('success: '+path);
				if( loaded == imgArray.length ){
					success();  // 回调函数
				}
				//console.log("success");
			},
			error: function (xhr, type)  {
				// alert('error: '+path);
				loaded++;
				if( loaded == imgArray.length ){
					success();  // 回调函数
				}
				//console.log('error');
			}
		})
	};
	this.success = function(){
		var iconLoading = document.getElementById('iconLoading')
		var iconLoaded = document.getElementById('iconLoaded')
		iconLoading.style.display = 'none'
		iconLoaded.style.display = 'block'
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
		var loading = document.getElementById('loading');
		loading.addEventListener('touchstart',function(e){
			e.stopPropagation();
			e.preventDefault();
		},false);
		loading.addEventListener('touchmove',function(e){
			e.stopPropagation();
			e.preventDefault();
		},false);
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
