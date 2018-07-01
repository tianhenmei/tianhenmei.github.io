// JavaScript Document
var loadingHost = '';
// var loadingHost = 'https://static.lagou.com/activity-rsrc/dist/2017-summary/';
var imgArray = [
	"images/draw-bg.png",
	"images/draw-ercode.png",
	"images/icon.png",
	"images/page0-bg-content.png",
	"images/page0-bg.png",
	"images/page0-cicle01.png",
	"images/page0-cicle02.png",
	"images/page0-icon-bg.png",
	"images/page0-pattern.png",
	"images/page1-bg-content.png",
	"images/page1-border.png",
	"images/page1-btn.png",
	"images/page1-light.png",
	"images/page1-one-bg.png",
	"images/page2-cover-bottom.png",
	"images/page2-cover-bottom.png",
	"images/page2-cover-top.png",
	"images/page2-text-cover.png",
	"images/page3-btn.png",
	"images/page3-dark.png",
	"images/page3-end.png",
	"images/page3-light.png",
	"images/page3-mesh.png",
	"images/page3-pkdetail-01.png",
	"images/page3-pkdetail-02.png",
	"images/page3-pkdetail-03.png",
	"images/page3-pkdetail-03-car.png",
	"images/page3-pkdetail-04.png",
	"images/page3-title.png",
	"images/save-bg.png",

	"images/star/Beckham-card.png",
	"images/star/Beckham-draw.png",
	"images/star/Beckham-name.png",
	"images/star/Beckham-portrait.png",
	"images/star/Beckham.png",
	"images/star/CRonaldo-card.png",
	"images/star/CRonaldo-draw.png",
	"images/star/CRonaldo-name.png",
	"images/star/CRonaldo-portrait.png",
	"images/star/CRonaldo.png",
	"images/star/Iniesta-card.png",
	"images/star/Iniesta-draw.png",
	"images/star/Iniesta-name.png",
	"images/star/Iniesta-portrait.png",
	"images/star/Iniesta.png",
	"images/star/Kaka-card.png",
	"images/star/Kaka-draw.png",
	"images/star/Kaka-name.png",
	"images/star/Kaka-portrait.png",
	"images/star/Kaka-outer.png",
	"images/star/Kaka.png",
	"images/star/Liyi-card.png",
	"images/star/Liyi-draw.png",
	"images/star/Liyi-name.png",
	"images/star/Liyi-portrait.png",
	"images/star/Liyi-outer.png",
	"images/star/Liyi.png",
	"images/star/Maradona-card.png",
	"images/star/Maradona-draw.png",
	"images/star/Maradona-name.png",
	"images/star/Maradona-portrait.png",
	"images/star/Maradona.png",
	"images/star/Mbappe-card.png",
	"images/star/Mbappe-draw.png",
	"images/star/Mbappe-name.png",
	"images/star/Mbappe-portrait.png",
	"images/star/Mbappe.png",
	"images/star/Messi-card.png",
	"images/star/Messi-draw.png",
	"images/star/Messi-name.png",
	"images/star/Messi-portrait.png",
	"images/star/Messi-outer.png",
	"images/star/Messi.png",
	"images/star/Neymar-card.png",
	"images/star/Neymar-draw.png",
	"images/star/Neymar-name.png",
	"images/star/Neymar-portrait.png",
	"images/star/Neymar-outer.png",
	"images/star/Neymar.png",
	"images/star/OZ-card.png",
	"images/star/OZ-draw.png",
	"images/star/OZ-name.png",
	"images/star/OZ-portrait.png",
	"images/star/OZ.png",
	"images/star/Ronaldo-card.png",
	"images/star/Ronaldo-draw.png",
	"images/star/Ronaldo-name.png",
	"images/star/Ronaldo-portrait.png",
	"images/star/Ronaldo-outer.png",
	"images/star/Ronaldo.png",
	"images/star/Suarez-card.png",
	"images/star/Suarez-draw.png",
	"images/star/Suarez-name.png",
	"images/star/Suarez-portrait.png",
	"images/star/Suarez.png",
	"images/star/Zidane-card.png",
	"images/star/Zidane-draw.png",
	"images/star/Zidane-name.png",
	"images/star/Zidane-portrait.png",
	"images/star/Zidane-outer.png",
	"images/star/Zidane.png",
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