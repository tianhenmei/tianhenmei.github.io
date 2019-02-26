// JavaScript Document
var loadingHost = '';
var imgArray = [
	"images/loading-computer.png",
	"images/loading-code.png",
	"images/answer.png",
	"images/dialog-bg.png",
	"images/icon.png",
	"images/page0-bg.png",
	"images/page0-person-left.png",
	"images/page0-person-right.png",
	"images/page1-bg.png",
	"images/page1-body.png",
	"images/page1-head.png",
	"images/page2-bg.png",
	"images/page2-colleague.png",
	"images/page2-person.png",
	"images/page3-bg.png",
	"images/page3-boss.png",
	"images/page3-colleague.png",
	"images/page3-light.png",
	"images/page3-person.png",
	"images/page3-question-title.png",
	"images/page3-question-titleBottom.png",
	"images/page3-question-titleTop.png",
	"images/page3-top.png",
	"images/page4-bg.png",
	"images/page4-bottom.png",
	"images/page4-colleague.png",
	"images/page4-hand01.png",
	"images/page4-sweat-01.png",
	"images/page4-person.png",
	"images/page5-bg.png",
	"images/page5-person.png",
	"images/page5-arrow.png",
	"images/page6-bg.png",
	"images/page6-bottom.png",
	"images/page6-colleague.png",
	"images/page6-mouth.png",
	"images/page6-person.png",
	"images/page6-ppt.png",
	"images/page6-computer.png",
	"images/page6-code.png",
	"images/page6-flower.png",
	"images/page7-bg.png",
	"images/page7-bottom.png",
	"images/page7-celebrate-words.png",
	"images/page7-celebrate.png",
	"images/page7-colleague.png",
	"images/page7-person.png",
	"images/page8-bg.png",
	"images/page8-bottom.png",
	"images/page8-colleague.png",
	"images/page8-person.png",
	"images/page8-question-title.png",
	"images/page9-bg.png",
	"images/page9-colleague.png",
	"images/page9-person.png",
	"images/page9-question-title.png",
	"images/page9-words.png",
	"images/page10-bg.png",
	"images/page10-heart.png",
	"images/question.png",
	"images/result.png",
	"images/words.png"
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
					self.currProgress = Math.floor(loaded / imgArray.length * 100)
					// progress.style.width = self.currProgress / 100 * w+"px";  // self.currProgress / 100 * w+"px"
					number.innerHTML = (self.currProgress).toFixed(0)+"%";
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