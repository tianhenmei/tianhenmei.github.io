// __inline('./common.js');
if (!window.EventJavascriptInterface || !('login' in EventJavascriptInterface)) {
    var noop = function() {};
    window.MzJavascriptInterface = {
    	getUMID: function (argument) {
    		return 111111;
    	},
    	getFlymeUid: function(argument) {
    		return 111111;
    	}
    };
    window.EventJavascriptInterface = {
        oauthRequest: function() {
     //    	setTimeout(function() {
     //    		onOauthResponse('fetchProblemCategoryCallback', JSON.stringify({
     //    			code: 200,
     //    			value: [
					// 		{
					// 	      "id": 42043,
					// 	      "name": "活动问题",
					// 	      "parentId": 0,
					// 	      "rank": 7
					// 	    },
					// 	    {
					// 	      "id": 42044,
					// 	      "name": "游戏问题",
					// 	      "parentId": 0,
					// 	      "rank": 5
					// 	    },
					// 	    {
					// 	      "id": 42046,
					// 	      "name": "其他问题",
					// 	      "parentId": 0,
					// 	      "rank": 9
					// 	    },
					// 	    {
					// 	      "id": 155758,
					// 	      "name": "登录问题",
					// 	      "parentId": 0,
					// 	      "rank": 6
					// 	    },
					// 	    {
					// 	      "id": 161766,
					// 	      "name": "充值问题",
					// 	      "parentId": 0,
					// 	      "rank": 1
					// 	    },
					// 	    {
					// 	      "id": 162459,
					// 	      "name": "角色问题",
					// 	      "parentId": 0,
					// 	      "rank": 2
					// 	    }
					// ]
     //    		}))
     //    	}, 500);
      //   	setTimeout(function() {
      //   		onOauthResponse('fecthMyProblemsCallback', JSON.stringify({
      //   			code: 200,
      //   			value: [
						// 	{
						// 		title: '游戏中心',
						// 		content: 'BBBB',
						// 		typeName: '充值问题',
						// 		response: '正在处理',
						// 		status: 5
						// 	},{
						// 		title: '游戏问题',
						// 		content: 'BBBB',
						// 		typeName: '充值问题',
						// 		response: '正在处理',
						// 		status: 5
						// 	},{
						// 		title: '剑侠情缘',
						// 		content: 'BBBB',
						// 		typeName: '充值问题',
						// 		response: '正在处理',
						// 		status: 10
						// 	},{
						// 		title: 'AAAA',
						// 		content: 'BBBB',
						// 		typeName: '充值问题',
						// 		response: '正在处理',
						// 		status: 5
						// 	},{
						// 		title: 'AAAA',
						// 		content: 'BBBB',
						// 		typeName: '充值问题',
						// 		response: '正在处理',
						// 		status: 10
						// 	},{
						// 		title: 'AAAA',
						// 		content: 'BBBB',
						// 		typeName: '充值问题',
						// 		response: '正在处理',
						// 		status: 10
						// 	},{
						// 		title: 'AAAA',
						// 		content: 'BBBB',
						// 		typeName: '充值问题',
						// 		response: '正在处理',
						// 		status: 10
						// 	},{
						// 		title: 'AAAA',
						// 		content: 'BBBB',
						// 		typeName: '充值问题',
						// 		response: '正在处理',
						// 		status: 10
						// 	},{
						// 		title: 'AAAA',
						// 		content: 'BBBB',
						// 		typeName: '充值问题',
						// 		response: '正在处理',
						// 		status: 10
						// 	}
						// ]
      //   		}))
      //   	}, 500);
        	// setTimeout(function() {
        	// 	onOauthResponse('fecthMyProblemsCallback', JSON.stringify({"code":200,"message":"","redirect":"","value":[{"activityName":"","appIcon":null,"appId":0,"appName":"像素战争","attachments":null,"content":"499797667...*-+/-*/@.……+/;……(……？-¥]*.!>-'~*]'£-:''>¥>':#~*>/;/;…\"\")","cpOrderId":null,"createDate":1476092324,"id":175,"lostTime":"","partnerId":"94765","payTime":1475978898,"productName":"购买1只熊猫宝宝","response":"","roleId":"","roleName":"6>*¥€]y'jDjcJ:k~#m¥-","roleRoom":"yyyy","staffId":"22746","status":10,"targetGroupId":"27850","targetStaffId":"22746","title":"像素战争","totalPrice":10,"typeId":"161766","typeName":"充值问题","uid":7679145,"userEmail":"test@meizu.com","userMobile":"","userName":"德玛西亚皇子"},{"activityName":"","appIcon":null,"appId":0,"appName":"火锅达人","attachments":null,"content":"B对不对好的好的难道你是你吃饱穿暖发你的大结局","cpOrderId":null,"createDate":1476082753,"id":174,"lostTime":"","partnerId":"97182","payTime":1475984247,"productName":"单机游戏SDK测试订单","response":"","roleId":"","roleName":"对不对八点半","roleRoom":"打电话都好好的","staffId":"22746","status":10,"targetGroupId":"27850","targetStaffId":"22746","title":"火锅达人","totalPrice":0.1,"typeId":"161766","typeName":"充值问题","uid":7679145,"userEmail":"test@meizu.com","userMobile":"","userName":"德玛西亚皇子"},{"activityName":"","appIcon":null,"appId":0,"appName":"诛仙","attachments":null,"content":"发酒疯加肥加大男的女的你到哪到哪发酒疯加肥加大男的女的你到哪到哪","cpOrderId":null,"createDate":1476080164,"id":172,"lostTime":"","partnerId":"94697","payTime":0,"productName":"","response":"111","roleId":"","roleName":"哈哈哈","roleRoom":"F等你等你","staffId":"22746","status":20,"targetGroupId":"27850","targetStaffId":"22746","title":"诛仙","totalPrice":0,"typeId":"161766","typeName":"充值问题","uid":7679145,"userEmail":"test@meizu.com","userMobile":"","userName":"德玛西亚皇子"},{"activityName":"带回家大家觉得","appIcon":null,"appId":0,"appName":"","attachments":null,"content":"带回家睡觉觉","cpOrderId":null,"createDate":1476010102,"id":171,"lostTime":"","partnerId":"95202","payTime":0,"productName":"","response":"","roleId":"","roleName":"","roleRoom":"","staffId":"22746","status":10,"targetGroupId":"27850","targetStaffId":"22746","title":"带回家大家觉得","totalPrice":0,"typeId":"42043","typeName":"活动问题","uid":7679145,"userEmail":"test@meizu.com","userMobile":"","userName":"德玛西亚皇子"},{"activityName":"大家姐姐","appIcon":null,"appId":0,"appName":"","attachments":null,"content":"大结局大家","cpOrderId":null,"createDate":1476010069,"id":170,"lostTime":"","partnerId":"97085","payTime":0,"productName":"","response":"好的","roleId":"","roleName":"","roleRoom":"","staffId":"22746","status":10,"targetGroupId":"27850","targetStaffId":"22746","title":"大家姐姐","totalPrice":0,"typeId":"42043","typeName":"活动问题","uid":7679145,"userEmail":"test@meizu.com","userMobile":"","userName":"德玛西亚皇子"},{"activityName":"X想不到不","appIcon":null,"appId":0,"appName":"","attachments":null,"content":"喜欢的你男的女的不懂","cpOrderId":null,"createDate":1476009408,"id":169,"lostTime":"","partnerId":"97082","payTime":0,"productName":"","response":"","roleId":"","roleName":"","roleRoom":"","staffId":"22746","status":10,"targetGroupId":"27850","targetStaffId":"22746","title":"X想不到不","totalPrice":0,"typeId":"42043","typeName":"活动问题","uid":7679145,"userEmail":"test@meizu.com","userMobile":"","userName":"德玛西亚皇子"},{"activityName":"二号机","appIcon":null,"appId":0,"appName":"","attachments":null,"content":"手机就是你","cpOrderId":null,"createDate":1476006689,"id":168,"lostTime":"","partnerId":"97075","payTime":0,"productName":"","response":"","roleId":"","roleName":"","roleRoom":"","staffId":"22746","status":10,"targetGroupId":"27850","targetStaffId":"22746","title":"二号机","totalPrice":0,"typeId":"42043","typeName":"活动问题","uid":7679145,"userEmail":"test@meizu.com","userMobile":"","userName":"德玛西亚皇子"},{"activityName":"","appIcon":null,"appId":0,"appName":"带回家","attachments":null,"content":"是男是女","cpOrderId":null,"createDate":1476006671,"id":167,"lostTime":"2016-10-09","partnerId":"92927","payTime":0,"productName":"","response":"","roleId":"","roleName":"大家觉得","roleRoom":"","staffId":"22746","status":10,"targetGroupId":"27850","targetStaffId":"22746","title":"带回家","totalPrice":0,"typeId":"162459","typeName":"角色问题","uid":7679145,"userEmail":"test@meizu.com","userMobile":"","userName":"德玛西亚皇子"},{"activityName":"回到家大家","appIcon":null,"appId":0,"appName":"","attachments":null,"content":"手机计算机","cpOrderId":null,"createDate":1476006598,"id":166,"lostTime":"","partnerId":"95190","payTime":0,"productName":"","response":"","roleId":"","roleName":"","roleRoom":"","staffId":"22746","status":10,"targetGroupId":"27850","targetStaffId":"22746","title":"回到家大家","totalPrice":0,"typeId":"42043","typeName":"活动问题","uid":7679145,"userEmail":"test@meizu.com","userMobile":"","userName":"德玛西亚皇子"},{"activityName":"公积金","appIcon":null,"appId":0,"appName":"","attachments":null,"content":"v就不分手","cpOrderId":null,"createDate":1476006506,"id":165,"lostTime":"","partnerId":"92926","payTime":0,"productName":"","response":"","roleId":"","roleName":"","roleRoom":"","staffId":"22746","status":10,"targetGroupId":"27850","targetStaffId":"22746","title":"公积金","totalPrice":0,"typeId":"42043","typeName":"活动问题","uid":7679145,"userEmail":"test@meizu.com","userMobile":"","userName":"德玛西亚皇子"},{"activityName":"哈哈","appIcon":null,"appId":0,"appName":"","attachments":null,"content":"哈哈","cpOrderId":null,"createDate":1476005587,"id":164,"lostTime":"","partnerId":"95184","payTime":0,"productName":"","response":"","roleId":"","roleName":"","roleRoom":"","staffId":"22746","status":10,"targetGroupId":"27850","targetStaffId":"22746","title":"哈哈","totalPrice":0,"typeId":"42043","typeName":"活动问题","uid":7679145,"userEmail":"test@meizu.com","userMobile":"","userName":"德玛西亚皇子"},{"activityName":"哈哈","appIcon":null,"appId":0,"appName":"","attachments":null,"content":"哈哈","cpOrderId":null,"createDate":1476005572,"id":163,"lostTime":"","partnerId":"97071","payTime":0,"productName":"","response":"","roleId":"","roleName":"","roleRoom":"","staffId":"22746","status":10,"targetGroupId":"27850","targetStaffId":"22746","title":"哈哈","totalPrice":0,"typeId":"42043","typeName":"活动问题","uid":7679145,"userEmail":"test@meizu.com","userMobile":"","userName":"德玛西亚皇子"},{"activityName":"哈哈","appIcon":null,"appId":0,"appName":"","attachments":null,"content":"哈哈","cpOrderId":null,"createDate":1476005485,"id":162,"lostTime":"","partnerId":"95182","payTime":0,"productName":"","response":"","roleId":"","roleName":"","roleRoom":"","staffId":"22746","status":10,"targetGroupId":"27850","targetStaffId":"22746","title":"哈哈","totalPrice":0,"typeId":"42043","typeName":"活动问题","uid":7679145,"userEmail":"test@meizu.com","userMobile":"","userName":"德玛西亚皇子"},{"activityName":"哈哈","appIcon":null,"appId":0,"appName":"","attachments":null,"content":"哈哈","cpOrderId":null,"createDate":1476005446,"id":161,"lostTime":"","partnerId":"92917","payTime":0,"productName":"","response":"","roleId":"","roleName":"","roleRoom":"","staffId":"22746","status":10,"targetGroupId":"27850","targetStaffId":"22746","title":"哈哈","totalPrice":0,"typeId":"42043","typeName":"活动问题","uid":7679145,"userEmail":"test@meizu.com","userMobile":"","userName":"德玛西亚皇子"},{"activityName":"发给","appIcon":null,"appId":0,"appName":"","attachments":null,"content":"哈哈哈哈","cpOrderId":null,"createDate":1476005137,"id":160,"lostTime":"","partnerId":"92914","payTime":0,"productName":"","response":"","roleId":"","roleName":"","roleRoom":"","staffId":"22746","status":10,"targetGroupId":"27850","targetStaffId":"22746","title":"发给","totalPrice":0,"typeId":"42043","typeName":"活动问题","uid":7679145,"userEmail":"test@meizu.com","userMobile":"","userName":"德玛西亚皇子"},{"activityName":"你想的你的呢","appIcon":null,"appId":0,"appName":"","attachments":null,"content":"想回家小鸡小鸡","cpOrderId":null,"createDate":1476005014,"id":159,"lostTime":"","partnerId":"96482","payTime":0,"productName":"","response":"","roleId":"","roleName":"","roleRoom":"","staffId":"22746","status":10,"targetGroupId":"27850","targetStaffId":"22746","title":"你想的你的呢","totalPrice":0,"typeId":"42043","typeName":"活动问题","uid":7679145,"userEmail":"test@meizu.com","userMobile":"","userName":"德玛西亚皇子"},{"activityName":"哈哈","appIcon":null,"appId":0,"appName":"","attachments":null,"content":"哈哈","cpOrderId":null,"createDate":1476001205,"id":158,"lostTime":"","partnerId":"92880","payTime":0,"productName":"","response":"","roleId":"","roleName":"","roleRoom":"","staffId":"22746","status":10,"targetGroupId":"27850","targetStaffId":"22746","title":"哈哈","totalPrice":0,"typeId":"42043","typeName":"活动问题","uid":7679145,"userEmail":"test@meizu.com","userMobile":"","userName":"德玛西亚皇子"},{"activityName":"哈哈","appIcon":null,"appId":0,"appName":"","attachments":null,"content":"哈哈","cpOrderId":null,"createDate":1476001145,"id":157,"lostTime":"","partnerId":"92879","payTime":0,"productName":"","response":"","roleId":"","roleName":"","roleRoom":"","staffId":"22746","status":10,"targetGroupId":"27850","targetStaffId":"22746","title":"哈哈","totalPrice":0,"typeId":"42043","typeName":"活动问题","uid":7679145,"userEmail":"test@meizu.com","userMobile":"","userName":"德玛西亚皇子"},{"activityName":"","appIcon":null,"appId":0,"appName":"","attachments":null,"content":"不想男的女的那你","cpOrderId":null,"createDate":1475999472,"id":155,"lostTime":"2016-02-02","partnerId":"96463","payTime":0,"productName":"","response":"","roleId":"","roleName":"NX想你想你那谢谢你","roleRoom":"","staffId":"22746","status":10,"targetGroupId":"27850","targetStaffId":"22746","title":"角色问题","totalPrice":0,"typeId":"162459","typeName":"角色问题","uid":7679145,"userEmail":"test@meizu.com","userMobile":"","userName":"德玛西亚皇子"},{"activityName":"哈哈","appIcon":null,"appId":0,"appName":"","attachments":null,"content":"哈哈","cpOrderId":null,"createDate":1475997348,"id":153,"lostTime":"","partnerId":"96452","payTime":0,"productName":"","response":"","roleId":"","roleName":"","roleRoom":"","staffId":"22746","status":10,"targetGroupId":"27850","targetStaffId":"22746","title":"哈哈","totalPrice":0,"typeId":"42043","typeName":"活动问题","uid":7679145,"userEmail":"test@meizu.com","userMobile":"","userName":"德玛西亚皇子"}]}))
        	// }, 500);
        },
        isAppInstalled: noop,
        onAppShowInPage: noop,
        requestChance: noop,
        getUserId: function () {return 1;},
        login: noop,
        getPhoneNumber: function () {return '10000000000'},
        launchApp: noop,
        gotoAppInfoPage: noop,
        onInstallButtonClick: noop,
        lottery: noop,
        setTitleName: noop,
        setTitleNameColor: noop,
        setTitleBarColor: noop
    }
}

var Native = {
	oauthRequest: function() {
		window._loadingTimer = setTimeout(function() {
        	util.showLoading();
        }, 200);
        EventJavascriptInterface.oauthRequest.apply(EventJavascriptInterface, arguments);
	}
};

var CS = {

	//_myProblemCur: 0,

	_tokenValid: true,

	init: function() {
		this.setTitle();
		this.bindEvents();
		util.initLoading();
		this.initProblemBlock();
		this.initOnlineCS();
	},

	setTitle: function() {
		try {
			EventJavascriptInterface.setTitleName('客服');
			EventJavascriptInterface.setTitleNameColor('#000000');
			/*EventJavascriptInterface.setTitleBarColor('#ffffff')*/
		} catch(err) {

		}
	},

    initProblemBlock: function() {
    	// if(EventJavascriptInterface.getUserId()) {
    	// 	Native.oauthRequest('fetchProblemCategoryCallback', '/oauth/worksheet/listworksheetallcategory', JSON.stringify({}));
    	// }
    	$.get('https://api-game.meizu.com/games/public/worksheet/listworksheetallcategory', function(result) {
    		if(result.code == 200) {
				var map = {};
				for(var i = 0; i < result.value.length; i++) {
					var val = result.value[i];
					map[val.name] = val.id;
				}
				$('.problem-list h3').each(function() {
					$(this).closest('li').attr('data-id', map[$(this).text()]);
				});
				$('.problem-block, .divider, .action-block').removeClass('none');
			} else {
				window.alert('出错了！');
			}
    	});
  	},


    initOnlineCS: function() {
    	var self = this;
    	var s = document.createElement('script');
    	s.src = 'https://qiyukf.com/script/c5f794498e9d870dd3cd62b8d368d39e.js?' + $.param({hidden:1, uid: EventJavascriptInterface.getUserId()});
    	s.onload = function() {
    		self.mgcBaseInfo();
    	}
    	document.body.appendChild(s);
    },

    /*getUrlParam: function (key) {
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    },*/

   	
    mgcBaseInfo: function() {
    	window.EventJavascriptInterface.getToken(false);
	    /*if(EventJavascriptInterface.getUserId()) {
	    	Native.oauthRequest('baseInfoCallback', '/oauth/memeber/baseinfo', JSON.stringify({form: client}));
	    }*/
    },
    mgcBaseInfoCallback: function(result) {
    	if (result.code == 200) {
    		ysf.config({
    	       uid : result.value.uid,
    	       level : result.value.lv,
			   name: result.value.uid,
			   gameid: getUrlParam('gameid'),
			   gamename: getUrlParam('gamename')
    	   	})
    	} else {
    		window.alert('会员信息接口出错了，请刷新重试');
    	}
    },
	bindEvents: function() {
		var self = this;
		// var $popup = $('.my-problem-popup');
		// $(document).on('touchstart', '.tap', function() {
		// 	$(this).addClass('tap-activated');
		// }).on('touchend', '.tap', function() {
		// 	$(this).removeClass('tap-activated');
		// });
		$(document).on('touchstart', '.tap', util.addRippleEffect);
		$('.problem-list').on('click', '.problem-list-item', function() {
			var param = {
				id: $(this).attr('data-id'),
				name: $(this).find('h3').text()
			};
			//数据埋点
			try	{
				MeizuBH({action: 'problems_enter', time: Number(new Date()), type: param.name});
			} catch(err) {}
			if(!EventJavascriptInterface.getUserId() || !CS._tokenValid) {
				EventJavascriptInterface.login();
				return;
			}
			if($(this).children('h3').text() == '充值问题') {
				location.href = '/resources/cs/html/problem-types.html?' + $.param(param);
				// try {
				// 	EventJavascriptInterface.setTitleName('选择充值问题类型');
				// 	EventJavascriptInterface.setTitleNameColor('#000000');
				// 	EventJavascriptInterface.setTitleBarColor('#ffffff')
				// } catch(err) {

				// }
				// $('.charge-problem-popup').off('click').on('click', 'li', function() {
				// 	param.name = $(this).find('h1').text();
				// 	location.href = 'http://game.res.meizu.com/resources/cs/html/form.html?' + $.param(param);
				// });
				// var $popup = $('.charge-problem-popup');
				// $popup.removeClass('none');
				// util.buildEnterTransition($popup, 'slideleft').play();
				// var newHash = 'mzpopup-' + Date.now();
		  //       hashRouter.chage(newHash);
		  //       hashRouter.one('exit ' + newHash, function () {
		  //           if(window.location.hash.indexOf(newHash) != -1) return;
		  //           CS.setTitle();
		  //           util.buildLeaveTransition($popup, 'slideleft').end(function() {            
		  //               this.addClass('none');
		  //           }).play();
		  //       });
			} else {
				location.href = '/resources/cs/html/form.html?' + $.param(param);
			}
		});
		$('.my-problems').on('click', function() {
			try	{
				MeizuBH({action: 'my_problems_enter', time: Number(new Date())});
			} catch(err) {}
			if(!EventJavascriptInterface.getUserId() || !CS._tokenValid) {
				EventJavascriptInterface.login();
				return;
			}
			location.href = '/resources/cs/html/problems.html';
			// try {
			// 	EventJavascriptInterface.setTitleName('我的问题');
			// 	EventJavascriptInterface.setTitleNameColor('#000000');
			// 	EventJavascriptInterface.setTitleBarColor('#ffffff')
			// } catch(err) {
			// }

			// CS._myProblemCur = 0;
			// $popup.empty();
			// Native.oauthRequest('fecthMyProblemsCallback',
			//  '/oauth/worksheet/listworksheetviauserid', JSON.stringify({start: CS._myProblemCur, max: 20}));

			// $popup.removeClass('none');
			// util.buildEnterTransition($popup, 'slideleft').play();
			// var newHash = 'mzpopup-' + Date.now();
	  //       hashRouter.chage(newHash);
	  //       hashRouter.one('exit ' + newHash, function () {
	  //           if(window.location.hash.indexOf(newHash) != -1) return;

	  //           util.closeLoading();
	  //           CS.setTitle();
	  //           CS._myProblemCur = 0;       

	  //           util.buildLeaveTransition($popup, 'slideleft').end(function() {            
	  //               this.addClass('none');
	  //           }).play();
	  //       });
		});
		// var myProblemScrollTimer = -1;
		
		// $popup.on('scroll', function() {
		// 	clearTimeout(myProblemScrollTimer);
		// 	myProblemScrollTimer = setTimeout(function() {
		// 		var $list = $('.my-problem-list');
		// 		var listHeight = $list.height();
		// 		var popupHeight = $popup.height();
		// 		if((popupHeight < listHeight) && ((listHeight - popupHeight - $popup[0].scrollTop) < 10)) {
		// 			Native.oauthRequest('fecthMyProblemsCallback',
		// 	 			'/oauth/worksheet/listworksheetviauserid', JSON.stringify({start: CS._myProblemCur, max: 20}));
		// 		}
		// 	}, 200);
		// });
		
		$('.online-cs').on('click', function() {
			if(!EventJavascriptInterface.getUserId() || !CS._tokenValid) {
				EventJavascriptInterface.login();
				return;
			}
			ysf.open();
		});

		// $('body').on('click', '.my-problem-item', function() {
		// 	location.href = 'http://game.res.meizu.com/resources/cs/html/detail.html?' + $.param({id: $(this).attr('data-id')});
		// });
	},

	// fecthMyProblemsCallback: function(result) {
	// 	if(result.code == 200) {
	// 		if(CS._myProblemCur) {
	// 			$('.my-problem-list').append($(myProblemListTpl({problems: result.value, first: false})).html());
	// 		} else {
	// 			$('.my-problem-popup').html(myProblemListTpl({problems: result.value, first: true}));
	// 		}
	// 		CS._myProblemCur += result.value.length;
	// 	} else {
	// 		window.alert('出错了！');
	// 	}
	// },

	// fetchProblemCategoryCallback: function(result) {
	// 	if(result.code == 200) {
	// 		var map = {};
	// 		for(var i = 0; i < result.value.length; i++) {
	// 			var val = result.value[i];
	// 			map[val.name] = val.id;
	// 		}
	// 		$('.problem-list h3').each(function() {
	// 			$(this).closest('li').attr('data-id', map[$(this).text()]);
	// 		});
	// 		$('.problem-block, .divider, .action-block').removeClass('none');
	// 		//alert(window.innerWidth + '_' + document.body.offsetWidth);
	// 	} else {
	// 		window.alert('出错了！');
	// 	}
	// }
};

function onOauthResponse(tag, result) {
	clearTimeout(window._loadingTimer);
	util.closeLoading();
    try {
        CS[tag](util.parseJSON(result));
    } catch(e) {
        CS[tag]({code: 100, message: result});
    }
}

function onOauthError(tag, result) {
	clearTimeout(window._loadingTimer);
	util.closeLoading();
    CS[tag]({code: 100, message: result});
}

function onGetTokenSuccess(token) {
    $.ajax({
        url: "https://mgc.meizu.com/oauth/memeber/baseinfo",
        dataType: "jsonp",
        jsonpCallback: "CS.mgcBaseInfoCallback",
        data: {
            from: 'client',
            access_token: token
        }
    })
}

function onGetTokenError() {
	CS.access_token = '';
}

function onTokenSuccess(tag) {
	CS._tokenValid = true;
}

function onTokenError(tag, isFromLogin) {
	CS._tokenValid = false;
	clearTimeout(window._loadingTimer);
	util.closeLoading();
}

$(function() {
	hashRouter.init();
	CS.init();
});