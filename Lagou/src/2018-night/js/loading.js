var audios = document.getElementsByTagName('audio'),
	audiosArr = [],
	audiosLen = audios.length;
function loadAudio(){
	var i = 0;
	for(i = 0; i < audiosLen; i++){
		(function(i){
			var img = new Image();
			img.onload = function(){
				audiosArr.push(i);
				loader.addLoaded();
			};
			img.onerror = function(){
				audiosArr.push(i);
				loader.addLoaded();
			};
			img.src = audios[i].src;
			// audios[i].oncanplaythrough = function(){
			// 	if(audiosArr.indexOf(i) == -1){
			// 		// console.log(i);
			// 		audiosArr.push(i);
			// 		loader.addLoaded();
			// 	}
			// 	// console.log(audioLoaded);
			// 	// if(audioLoaded == audiosLen){
			// 	// 	audioPrepared = true;
			// 	// 	if(imgPrepared){
			// 	// 		imgPrepared = false;
			// 	// 		audioPrepared = false;
			// 	// 		loadingComplete();
			// 	// 	}
			// 	// }
			// };
			// audios[i].onprogress = function(){
			// 	// alert("Starting to load video: "+i);
			// };
			// audios[i].onloadeddata = function(){
			// 	// alert("Browser has loaded the current frame");
			// 	if(audiosArr.indexOf(i) == -1){
			// 		// console.log(i);
			// 		audiosArr.push(i);
			// 		loader.addLoaded();
			// 	}
			// };
			// audios[i].onabort = function() {
			// 	if(audiosArr.indexOf(i) == -1){
			// 		audiosArr.push(i);
			// 		loader.addLoaded();  
			// 		// alert("视频终止加载");
			// 	}
			// };
			// audios[i].onerror = function() {
			// 	if(audiosArr.indexOf(i) == -1){
			// 		audiosArr.push(i);
			// 		loader.addLoaded();  
			// 		// alert("Error! 出错了");
			// 	}
			// };
			// audios[i].onstalled = function() {
			// 	if(audiosArr.indexOf(i) == -1){
			// 		audiosArr.push(i);
			// 		loader.addLoaded(); 
			// 		// alert("媒体数据不可用");
			// 	}
			// };
			// audios[i].onsuspend = function() {
			// 	if(audiosArr.indexOf(i) == -1){
			// 		audiosArr.push(i);
			// 		loader.addLoaded(); 
			// 		// alert("媒体数据加载被阻止");
			// 	}
			// };
		})(i);
	}
}

// JavaScript Document
var loadingHost = '';
// var loadingHost = 'https://www.lgstatic.com/activity-rsrc/dist/2018-night/';
var imgArray = [
	// loadingHost+"images/loading-01.png",
	// loadingHost+"images/loading-02.png",
	// loadingHost+"images/loading-03.png",
	// loadingHost+"images/loading-04.png",
	// loadingHost+"images/loading-05.png",
	// loadingHost+"images/loading-06.png",
	// loadingHost+"images/loading-07.png",
	// loadingHost+"images/loading-08.png",
	// loadingHost+"images/loading-09.png",
	// loadingHost+"images/loading-10.png",
	// loadingHost+"images/loading-11.png",
	// loadingHost+"images/loading-12.png",
	// loadingHost+"images/loading-13.png",
	// loadingHost+"images/loading-14.png",
	// loadingHost+"images/loading-15.png",
	// loadingHost+"images/loading-16.png",
	// loadingHost+"images/loading-17.png",
	// loadingHost+"images/loading-18.png",
	loadingHost+"images/loading-03.gif",

	loadingHost+"images/icon.png",

	loadingHost+"images/page0-bg.png",
	loadingHost+"images/page0-btn.png",
	loadingHost+"images/page0-line-row.png",

	loadingHost+"images/page1-icon01.png",
	loadingHost+"images/page1-icon02.png",
	
	loadingHost+"images/page1-address.png",
	loadingHost+"images/page1-dot.png",
	loadingHost+"images/page1-item-center01.png",
	loadingHost+"images/page1-item-center02.png",
	loadingHost+"images/page1-item-center03.png",
	loadingHost+"images/page1-item-center04.png",
	loadingHost+"images/page1-item-center05.png",
	loadingHost+"images/page1-item-centerline.png",
	loadingHost+"images/page1-item-eye.png",
	loadingHost+"images/page1-item-left01.png",
	loadingHost+"images/page1-item-left02.png",
	loadingHost+"images/page1-item-left03.png",
	loadingHost+"images/page1-item-left04.png",
	loadingHost+"images/page1-item-left05.png",
	loadingHost+"images/page1-item-left06.png",
	loadingHost+"images/page1-item-right01.png",
	loadingHost+"images/page1-item-right02.png",
	loadingHost+"images/page1-item-right03.png",
	loadingHost+"images/page1-item-right04.png",
	loadingHost+"images/page1-item1.png",
	loadingHost+"images/page1-item20.png",
	loadingHost+"images/page1-item21.png",
	loadingHost+"images/page1-item40.png",
	loadingHost+"images/page1-item42.png",
	loadingHost+"images/page1-item43.png",
	loadingHost+"images/page1-item49.png",
	loadingHost+"images/page1-item53.png",
	loadingHost+"images/page1-item58-02.png",
	loadingHost+"images/page1-item64.png",
	loadingHost+"images/page1-part.png",
	loadingHost+"images/page1-right-shrink.png",
	loadingHost+"images/page1-titlegif.png",

	loadingHost+"images/page2-icon.png",
	loadingHost+"images/page2-icon02.png",
	loadingHost+"images/page2-icon03.png",
	loadingHost+"images/page2-card-bg-02.png",
	loadingHost+"images/page2-card-bg.png",
	loadingHost+"images/page2-card-btn.png",
	loadingHost+"images/page2-card-btnactive.png",
	loadingHost+"images/page2-card-btnbg.png",
	loadingHost+"images/page2-card-guest01.png",
	loadingHost+"images/page2-card-guest02.png",
	loadingHost+"images/page2-card-guest03.png",
	loadingHost+"images/page2-card-guest04.png",
	loadingHost+"images/page2-card-guest05.png",
	loadingHost+"images/page2-card02-bg.png",
	loadingHost+"images/page2-card02-btn.png",
	loadingHost+"images/page2-card02-btnactive.png",
	loadingHost+"images/page2-card02-btnbg.png",
	loadingHost+"images/page2-card02-img01.png",
	loadingHost+"images/page2-card02-img02.png",
	loadingHost+"images/page2-card02-img03.png",
	loadingHost+"images/page2-card03-bg.png",
	loadingHost+"images/page2-card03-btn.png",
	loadingHost+"images/page2-card03-btnactive.png",
	loadingHost+"images/page2-card03-btnbg.png",
	loadingHost+"images/page2-card03-img01.png",
	loadingHost+"images/page2-card03-img02.png",
	loadingHost+"images/page2-card03-img02.png",

	loadingHost+"images/page3-btn.png",
	loadingHost+"images/page3-btn01.png",
	loadingHost+"images/page3-btn02.png",
	loadingHost+"images/page3-btn04.png",
	loadingHost+"images/page3-btnactive.png",
	loadingHost+"images/page3-btnactive01.png",
	loadingHost+"images/page3-btnactive02.png",
	loadingHost+"images/page3-btnactive04.png",
	loadingHost+"images/page3-btnbg.png",
	loadingHost+"images/page3-btnbg01.png",
	loadingHost+"images/page3-btnbg02.png",
	loadingHost+"images/page3-btnbg04.png",
	loadingHost+"images/page3-card-bg.png",
	loadingHost+"images/page3-card-inner-bg.png",

	loadingHost+"images/page3-card-inner-borderbottom.png",
	loadingHost+"images/page3-card-inner-bordertop.png",
	loadingHost+"images/page3-card-inner-lightback-bottom.png",
	loadingHost+"images/page3-card-inner-lightback-top.png",
	loadingHost+"images/page3-card-inner-lightbottom.png",
	loadingHost+"images/page3-card-inner-lighttop.png",
	loadingHost+"images/page3-card-inner-line.png",

	loadingHost+"images/page3-card-inner01.png",
	loadingHost+"images/page3-card-inner03.png",
	loadingHost+"images/page3-card-inner04.png",
	loadingHost+"images/page3-card-inner05.png",
	loadingHost+"images/page3-card-inner06.png",
	loadingHost+"images/page3-card-inner07.png",
	loadingHost+"images/page3-card-inner09.png",
	loadingHost+"images/page3-card04-inner01.png",
	loadingHost+"images/page3-card04-inner03.png",
	loadingHost+"images/page3-card04-inner04.png",
	loadingHost+"images/page3-card04-inner05.png",
	loadingHost+"images/page3-card04-inner06.png",
	loadingHost+"images/page3-card04-inner07.png",
	loadingHost+"images/page3-card04-inner09.png",
	loadingHost+"images/page3-card-textstar.png",

	loadingHost+"images/page3-card01-light.png",
	loadingHost+"images/page3-card01-textbg02.png",
	loadingHost+"images/page3-card01-tv.png",
	loadingHost+"images/page3-card01-tvicon.png",

	loadingHost+"images/page3-card-light.png",
	
	loadingHost+"images/page3-card-textbg01.png",
	loadingHost+"images/page3-card-textbg02.png",
	loadingHost+"images/page3-card-tv.png",
	loadingHost+"images/page3-card-tv01.png",
	loadingHost+"images/page3-card-tv02.png",
	loadingHost+"images/page3-card-tv03.png",
	loadingHost+"images/page3-card-tv04.png",
	loadingHost+"images/page3-card-tv05.png",
	loadingHost+"images/page3-card-tv06.png",
	loadingHost+"images/page3-card-tv07.png",
	loadingHost+"images/page3-card-tv08.png",
	loadingHost+"images/page3-card-tv09.png",
	loadingHost+"images/page3-card-tv10.png",
	loadingHost+"images/page3-card-tv11.png",
	loadingHost+"images/page3-card-tv12.png",
	
	loadingHost+"images/page3-card-tvbottom.png",
	loadingHost+"images/page3-card-tvicon-text.png",
	loadingHost+"images/page3-card-tvicon.png",
	loadingHost+"images/page3-card-tvold.gif",

	loadingHost+"images/page3-card02-light.png",
	loadingHost+"images/page3-card02-textbg01.png",
	loadingHost+"images/page3-card02-textbg02.png",
	loadingHost+"images/page3-card02-tv.png",
	loadingHost+"images/page3-card02-tvbottom.png",
	loadingHost+"images/page3-card02-tvicon.png",

	loadingHost+"images/page3-card04-light.png",
	loadingHost+"images/page3-card04-textbg01.png",
	loadingHost+"images/page3-card04-textbg02.png",
	loadingHost+"images/page3-card04-tv.png",
	loadingHost+"images/page3-card04-tvbottom.png",
	loadingHost+"images/page3-card04-tvicon.png",

	loadingHost+"images/page3-icon.png",
	loadingHost+"images/page3-icon01.png",
	loadingHost+"images/page3-icon02.png",
	loadingHost+"images/page3-icon04.png",
	loadingHost+"images/page3-logo.png",
	loadingHost+"images/page3-name.png",
	loadingHost+"images/page3-name-active.png",
	loadingHost+"images/page3-name01.png",
	loadingHost+"images/page3-name01-active.png",
	loadingHost+"images/page3-name02.png",
	loadingHost+"images/page3-name02-active.png",
	loadingHost+"images/page3-name04.png",
	loadingHost+"images/page3-name04-active.png",
	loadingHost+"images/page3-share-bubble.png",
	loadingHost+"images/page3-share-bug.png",
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

	var self = this;
	var loaded = 0;

	var loading = document.getElementById('loading'),
		number = document.getElementById('loading__num'),
		all = imgArray.length + audiosLen;//,
		// progress_bg = document.getElementById('loading__progress'),
		// progress = document.getElementById('progress'),
		// w = progress_bg.offsetWidth;// / imgArray.length;//20;
	// alert(w)
	this.Loading = function(imgArray,success){
		try{
			for( var i = 0 ; i < imgArray.length; i++ ){
				var ext = imgArray[i].substring(imgArray[i].lastIndexOf('.')).toLowerCase();
				if( /((.png)|(.jpg)|(.jpeg)|(.gif))/g.test(ext)){
					(function(path){
						var img = new Image();
						img.onload = function(){
							self.addLoaded();
						};
						img.onerror = function(){
							// alert('error: '+path);
							loaded ++;
							if( loaded == all ){
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
	this.addLoaded = function(){
		loaded++;
		// alert('success: '+path);
		self.currProgress = Math.floor(loaded / all * 100)
		// progress.style.width = self.currProgress / 100 * w+"px";  // self.currProgress / 100 * w+"px"
		var n = (self.currProgress).toFixed(1),
			arr = n.split('.'),
			l = n;
		if(arr[1] == '0'){
			l = arr[0];
		}
		number.innerHTML = l+"%";
		if( loaded >= all ){
			number.innerHTML = "100%";
			self.success();  // 回调函数
		}
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
loadAudio();
loader.loadLoading(imgArray,loader);
//};