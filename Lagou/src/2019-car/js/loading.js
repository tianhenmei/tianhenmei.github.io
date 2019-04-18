var audios = document.getElementsByTagName('audio'),
	audiosArr = [],
	audiosLen = 0;//audios.length;
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
	// loadingHost+"images/loading-bg.png",
	loadingHost+"images/loading-title.png",
	loadingHost+"images/loading-btn-01.png",
	loadingHost+"images/loading-more.png",
	loadingHost+"images/loading-person.png",
	loadingHost+"images/loading-pillow.png",
	loadingHost+"images/loading-text.png",
	
	"images/canvas-bg.png",
	"images/canvas-01.png",
	"images/canvas-02.png",
	"images/canvas-03.png",
	"images/canvas-04.png",
	"images/canvas-05.png",
	"images/canvas-06.png",
	"images/canvas-07.png",

	loadingHost+"images/page-q01-s01-bg.png",
	loadingHost+"images/page-q01-s01.png",
	loadingHost+"images/page-q01-s02-bg.png",
	loadingHost+"images/page-q01-s02.png",
	loadingHost+"images/page-q01-s03-bg.png",
	loadingHost+"images/page-q01-s03.png",
	loadingHost+"images/page-q01.png",
	loadingHost+"images/page-q01-s01-active.png",
	loadingHost+"images/page-q01-s02-active.png",
	loadingHost+"images/page-q01-s03-active.png",

	loadingHost+"images/page-q02-e01.png",
	loadingHost+"images/page-q02-s01-bg.png",
	loadingHost+"images/page-q02-s01.png",
	loadingHost+"images/page-q02-s02-bg.png",
	loadingHost+"images/page-q02-s02.png",
	loadingHost+"images/page-q02-s03-bg.png",
	loadingHost+"images/page-q02-s03.png",
	loadingHost+"images/page-q02.png",
	loadingHost+"images/page-q02-s01-active.png",
	loadingHost+"images/page-q02-s02-active.png",
	loadingHost+"images/page-q02-s03-active.png",

	loadingHost+"images/page-q03-s01-bg.png",
	loadingHost+"images/page-q03-s01.png",
	loadingHost+"images/page-q03-s02-bg.png",
	loadingHost+"images/page-q03-s02.png",
	loadingHost+"images/page-q03-s03-bg.png",
	loadingHost+"images/page-q03-s03.png",
	loadingHost+"images/page-q03.png",
	loadingHost+"images/page-q03-s01-active.png",
	loadingHost+"images/page-q03-s02-active.png",
	loadingHost+"images/page-q03-s03-active.png",

	loadingHost+"images/page-q04-s01-bg.png",
	loadingHost+"images/page-q04-s01.png",
	loadingHost+"images/page-q04-s02-bg.png",
	loadingHost+"images/page-q04-s02.png",
	loadingHost+"images/page-q04-s03-bg.png",
	loadingHost+"images/page-q04-s03.png",
	loadingHost+"images/page-q04.png",
	loadingHost+"images/page-q04-s01-active.png",
	loadingHost+"images/page-q04-s02-active.png",
	loadingHost+"images/page-q04-s03-active.png",

	loadingHost+"images/page-q05-s01-bg.png",
	loadingHost+"images/page-q05-s01.png",
	loadingHost+"images/page-q05-s02-bg.png",
	loadingHost+"images/page-q05-s02.png",
	loadingHost+"images/page-q05-s03-bg.png",
	loadingHost+"images/page-q05-s03.png",
	loadingHost+"images/page-q05.png",
	loadingHost+"images/page-q05-s01-active.png",
	loadingHost+"images/page-q05-s02-active.png",
	loadingHost+"images/page-q05-s03-active.png",

	loadingHost+"images/page-submit-bg.png",
	loadingHost+"images/page-submit.png"
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
		// number = document.getElementById('loading__num'),
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
		// number.innerHTML = l+"%";
		if( loaded >= all ){
			// number.innerHTML = "100%";
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
	};
	this.loadLoading = function(imgArray,obj){
		var loading = document.getElementById('loading');
		// loading.addEventListener('touchstart',function(e){
		// 	e.stopPropagation();
		// 	e.preventDefault();
		// },false);
		// loading.addEventListener('touchmove',function(e){
		// 	e.stopPropagation();
		// 	e.preventDefault();
		// },false);
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
// loadAudio();
loader.loadLoading(imgArray,loader);
//};