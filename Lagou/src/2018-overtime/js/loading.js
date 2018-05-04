// JavaScript Document
var loadingHost = '';
// var loadingHost = 'https://static.lagou.com/activity-rsrc/dist/2017-summary/';
var imgArray = [
	"images/room1.jpg",
	"images/room2.jpg",
	"images/room3.jpg",
	"images/room4.jpg",
	"images/close.png",
	"images/fold.png",
	"images/unfold.png",
	"images/man-hair-01.png",
	"images/man-hair-02.png",
	"images/man-hair-03.png",
	"images/man-hair-04.png",
	"images/man-hair-05.png",
	"images/man-hair-06.png",
	"images/man-hair-07.png",
	"images/man-hair-08.png",
	"images/man-hair-09.png",
	"images/man-head-01.png",
	"images/man-head-02.png",
	"images/man-head-03.png",
	"images/man-head-04.png",
	"images/man-head-05.png",
	"images/man-head-06.png",
	"images/man-head-07.png",
	"images/man-head-08.png",
	"images/man-knee-01.png",
	"images/man-knee-02.png",
	"images/man-knee-03.png",
	"images/man-knee-04.png",
	"images/man-knee-05.png",
	"images/man-knee-06.png",
	"images/man-sit-01.png",
	"images/man-sit-02.png",
	"images/man-sit-03.png",
	"images/man-sit-04.png",
	"images/man-sit-05.png",
	"images/man-sit-06.png",
	"images/man-stand-01.png",
	"images/man-stand-02.png",
	"images/man-stand-03.png",
	"images/man-stand-04.png",
	"images/man-stand-05.png",
	"images/man-stand-06.png",
	"images/rotate.png",
	"images/save.png",
	"images/scale.png",
	"images/woman-hair-01.png",
	"images/woman-hair-02.png",
	"images/woman-hair-03.png",
	"images/woman-hair-04.png",
	"images/woman-hair-05.png",
	"images/woman-hair-06.png",
	"images/woman-hair-07.png",
	"images/woman-hair-08.png",
	"images/woman-head-1.png",
	"images/woman-head-2.png",
	"images/woman-head-3.png",
	"images/woman-head-4.png",
	"images/woman-head-5.png",
	"images/woman-head-6.png",
	"images/woman-head-7.png",
	"images/woman-head-8.png",
	"images/woman-knee-01.png",
	"images/woman-knee-02.png",
	"images/woman-knee-03.png",
	"images/woman-knee-04.png",
	"images/woman-knee-05.png",
	"images/woman-knee-06.png",
	"images/woman-sit-01.png",
	"images/woman-sit-02.png",
	"images/woman-sit-03.png",
	"images/woman-sit-04.png",
	"images/woman-sit-05.png",
	"images/woman-sit-06.png",
	"images/woman-stand-01.png",
	"images/woman-stand-02.png",
	"images/woman-stand-03.png",
	"images/woman-stand-04.png",
	"images/woman-stand-05.png",
	"images/woman-stand-06.png",
	"images/others/01.png",
	"images/others/02.png",
	"images/others/03.png",
	"images/others/04.png",
	"images/others/05.png",
	"images/others/06.png",
	"images/others/07.png",
	"images/others/08.png",
	"images/others/09.png",
	"images/others/10.png",
	"images/others/11.png",
	"images/others/12.png",
	"images/others/13.png",
	"images/others/14.png",
	"images/others/15.png",
	"images/others/16.png",
	"images/others/17.png",
	"images/others/18.png",
	"images/others/19.png",
	"images/others/20.png",
	"images/others/21.png",
	"images/others/22.png",
	"images/others/23.png",
	"images/others/24.png",
	"images/others/25.png",
	"images/others/26.png",
	"images/others/27.png",
	"images/others/28.png",
	"images/others/29.png",
	"images/others/30.png",
	"images/others/31.png",
	"images/others/32.png",
	"images/others/33.png",
	"images/others/34.png",
	"images/others/35.png",
	"images/others/36.png",
	"images/others/37.png",
	"images/others/38.png",
	"images/others/39.png",
	"images/others/40.png",
	"images/others/41.png",
	"images/others/42.png",
	"images/others/43.png",
	"images/others/44.png",
	"images/others/45.png",
	"images/others/46.png",
	"images/others/47.png",
	"images/others/48.png",
	"images/others/49.png",
	"images/others/50.png",
	"images/others/51.png"
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