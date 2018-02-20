// JavaScript Document
var imgArray = [
	"images/loading.gif",
	"images/page1_bg.png",
	"images/message_bg.png",
	"images/swipe.png",
	"images/swipe_light.png",
	"images/hangup.png",
	"images/mess_footer.png",
	"images/messImage.png",
	"images/mix.png",
	"images/page2_bg.png",
	"images/page3_bg2.png",
	"images/page4_bg.png",
	"images/page5_bg.png",
	"images/page6_person.png",
	"images/phonePhoto.png",
	"images/toAnser.png",
	"images/Tony.png",
	"images/boss.png",
	"images/weixin.png",
	//"images/voice.mp3",
	//"images/unlock.mp3",
	//"images/wordBG2.mp3",
	//"images/message.mp3",
	//"images/call.mp3",
	//"images/dudu.mp3",
	"images/hangup.png",
	"images/start.png",
	"images/huadong01.png",
	"images/huadong02.png",
	"images/huadong03.png",
	"images/huadong04.png",
	"images/huadong05.png",
	"images/huadong06.png",
	"images/huadong07.png",
	"images/huadong08.png",
	"images/huadong09.png",
	"images/huadong10.png",

	"images/page7-bg.png",
	"images/page7_gift.png",
	"images/page7_giftnumber.png",
	"images/page7_logo.png",
	"images/page9-check.png",
	"images/page9-psweye.png",
	"images/page10_cover.png",
	"images/newma.png",
	"images/right.gif",
	"images/toNext.png",
	"images/share3.jpg"
];
// 资源加载
var Loader = function(){
	this.currProgress = 0;  // 当前加载进度
	this.isCompleted = false; // 判断是否加载完毕
	this.total = 100;  // 最大值100

	var loaded = 1;

	//var content = document.getElementById('content');
	var number = document.getElementsByClassName('number')[0];
	//var w = document.getElementsByClassName('progress')[0].offsetWidth / 20;
		this.Loading = function(imgArray,success){
		var self = this;
		for( var i = 1 ; i < imgArray.length; i++ ){
			var ext = imgArray[i].substring(imgArray[i].lastIndexOf('.')).toLowerCase();
			if( ext == '.png' || ext == '.jpg' || ext == '.jpeg' || ext == '.gif' ){
				var img = new Image();
				img.onload = function(){
					loaded ++;
					//self.currProgress = loaded / imgArray.length * 100;
					//content.style.width = self.currProgress / 100 * w+"rem";
					//number.innerHTML = (self.currProgress).toFixed(1)+"%";
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
				img.src = ctx + "/template/1024/" + imgArray[i];
			}else{
				this.loadMusic(imgArray[i]);
			}
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
		//console.log("加载完毕");
		$('.page').css({width:GC.w,height:GC.h});
		$('.page1 .content').css({width:GC.w,height:GC.h});
		$('.loading').addClass('hidden');
		$('.page1').removeClass('hidden');

		//init.initDate();  // 设置时间
		init.page1Play();  // 播放音乐

		//$('.page5').removeClass('hidden');
		//$('.page5 .message').removeClass('hidden');
		//$('.page5 .messBG').addClass('person').removeClass('hidden');
		//init.nextAnimate();
	};
	this.loadLoading = function(imgArray,obj){
		var img = new Image();
		img.onload = function(){
			obj.Loading(imgArray,obj.success);
		};
		img.onerror = function(){
			obj.Loading(imgArray,obj.success);
		};
		img.src = ctx + "/template/1024/" + imgArray[0];
	};
};
//window.onload = function(){
	var loader = new Loader();
	loader.loadLoading(imgArray,loader);
//};