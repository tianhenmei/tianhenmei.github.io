// JavaScript Document
var loadingHost = '';
// var loadingHost = 'https://www.lgstatic.com/activity-rsrc/dist/2018-night/';
var imgArray = [
	loadingHost+"images/loading-title.png",
	loadingHost+"images/icon.png",
	loadingHost+"images/page1-icon01.png",
	loadingHost+"images/page1-icon02.png",
	loadingHost+"images/page1-item1.png",
	loadingHost+"images/page1-item2.png",
	loadingHost+"images/page1-item3.png",
	loadingHost+"images/page1-item5.png",
	loadingHost+"images/page1-item8.png",
	loadingHost+"images/page1-item10.png",
	loadingHost+"images/page1-item13.png",
	loadingHost+"images/page1-item15.png",
	loadingHost+"images/page1-item16.png",
	loadingHost+"images/page1-item17.png",
	loadingHost+"images/page1-item19.png",
	loadingHost+"images/page1-item20.png",
	loadingHost+"images/page1-item21.png",
	loadingHost+"images/page1-item22.png",
	loadingHost+"images/page1-item24.png",
	loadingHost+"images/page1-item25.png",
	loadingHost+"images/page1-item26.png",
	loadingHost+"images/page1-item27.png",
	loadingHost+"images/page1-item28.png",
	loadingHost+"images/page1-item29.png",
	loadingHost+"images/page1-item30.png",
	loadingHost+"images/page1-item32.png",
	loadingHost+"images/page1-item34.png",
	loadingHost+"images/page1-item35.png",
	loadingHost+"images/page1-item36.png",
	loadingHost+"images/page1-item37.png",
	loadingHost+"images/page1-item39.png",
	loadingHost+"images/page1-item40.png",
	loadingHost+"images/page1-item42.png",
	loadingHost+"images/page1-item43.png",
	loadingHost+"images/page1-item49.png",
	loadingHost+"images/page1-item53.png",
	loadingHost+"images/page1-item58.png",
	loadingHost+"images/page1-item64.png",
	loadingHost+"images/page1-title-01.png"
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
		loading.addEventListener('touchstart',function(e){
			e.stopPropogation();
			e.preventDefault();
		},false);
		loading.addEventListener('touchmove',function(e){
			e.stopPropogation();
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