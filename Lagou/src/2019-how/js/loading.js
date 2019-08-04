// JavaScript Document
// var loadingHost = '';
var loadingHost = 'https://www.lgstatic.com/activity-rsrc/dist/2018-award/';
var imgArray = [
	// "images/LTe50012.ttf",
	// "images/movie-03.mp4",
	loadingHost+"images/icon.png",
	loadingHost+"images/page0-bg01-02.png",
	loadingHost+"images/page0-bg02-02.png",
	loadingHost+"images/page0-dot01.png",
	loadingHost+"images/page0-dot02.png",
	loadingHost+"images/page0-grotesque.png",
	loadingHost+"images/page0-title.png"
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
		// loading.addEventListener('touchstart',function(e){
		// 	// e.stopPropagation();
		// 	e.preventDefault();
		// },false);
		// loading.addEventListener('touchmove',function(e){
		// 	// e.stopPropagation();
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
loader.loadLoading(imgArray,loader);
//};