var nieParmas = (function(nie_parmas) {
	var objURL = function(url) {
		this.ourl = url || window.location.href;
		this.href = ""; //?前面部分
		this.params = {}; //url参数对象
		this.jing = ""; //#及后面部分
		this.init();
	};
	//分析url,得到?前面存入this.href,参数解析为this.params对象，#号及后面存入this.jing
	objURL.prototype.init = function() {
		var str = this.ourl;
		var index = str.indexOf("#");
		if (index > 0) {
			this.jing = str.substr(index);
			str = str.substring(0, index);
		}
		index = str.indexOf("?");
		if (index > 0) {
			this.href = str.substring(0, index);
			str = str.substr(index + 1);
			var parts = str.split("&");
			for (var i = 0; i < parts.length; i++) {
				var kv = parts[i].split("=");
				this.params[kv[0]] = kv[1];
			}
		} else {
			this.href = this.ourl;
			this.params = {};
		}
	};
	objURL.prototype.list = function() {
		return this.params
	};
	//只是修改this.params
	objURL.prototype.set = function(key, val) {
		this.params[key] = val;
	};
	//只是设置this.params
	objURL.prototype.remove = function(key) {
		this.params[key] = undefined;
	};
	//根据三部分组成操作后的url
	objURL.prototype.url = function() {
		var strurl = this.href;
		var objps = []; //这里用数组组织,再做join操作
		for (var k in this.params) {
			if (this.params[k]) {
				objps.push(k + "=" + this.params[k]);
			}
		}
		if (objps.length > 0) {
			strurl += "?" + objps.join("&");
		}
		if (this.jing.length > 0) {
			strurl += this.jing;
		}
		return strurl;
	};
	//得到参数值
	objURL.prototype.get = function(key) {
		return this.params[key];
	};
	nie_parmas.URL = objURL;
	return nie_parmas;
}(nieParmas || {}));

var ua = navigator.userAgent.toLowerCase();
var isIos = /ipad|iphone|ipod|ios/i;
var isAndroid = /android/i;

$.prototype.tap = function(_callback) {
	this.each(function() {
		var _this = this;
		var _deltas = [];
		$(_this).bind("touchstart", function(event) {
			_deltas.length = 0;
		});
		$(_this).bind("touchmove", function(event) {
			var touches = event.originalEvent.touches[0];
			_deltas.push({
				x: touches.pageX,
				y: touches.pageY
			});
		});
		$(_this).bind("touchend", function(event) {
			var touches = event.originalEvent.changedTouches[0];
			if (_deltas.length == 0) {
				if (_callback) {
					_callback.call(_this);
				}
			}
		});
		if (!isIos.test(ua) && !isAndroid.test(ua)) {
			$(_this).bind("mouseup", function(event) {
				if (_callback) {
					_callback.call(_this);
				}
			});
		}
	});
}

var is_weixin = (function() {
	var ua = navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == "micromessenger") {
		return true;
	} else {
		return false;
	}
});

var stageManager = {
	AnimationEnd: null,
	classKey: "stage",
	inClass: "in",
	outClass: "out",
	prevInClass: "in",
	prevOutClass: "out",
	hideClass: "hide",
	aniClass: "ani",
	aniInClass: "in",
	isChange: false,
	currentPage: 1,
	maxPage: 0,
	limitPage: [], //限定next和prev只能在这队列里选择
	isLoop: true, //是否允许循环
	isBeginLoop: true, //是否能从首页往前至末页
	isChangeAndScrollTop: true, //翻页时是否回到顶部
	isStartAni: false, //是否打开时对第一个场景播放进场动画
	init: function() {
		this.AnimationEnd = animEndEventName;
		this.maxPage = $("." + this.classKey).length;
		$("." + this.classKey).addClass(this.hideClass);
		// $("." + this.classKey + " ." + this.aniClass).addClass(this.hideClass);
		$("." + this.classKey + this.currentPage).removeClass(this.hideClass);
		this.beforeIn(this.currentPage);
		if (this.isStartAni) {
			var _this = this;
			this.isChange = true;
			$("." + this.classKey + this.currentPage).addClass(this.inClass).one(stageManager.AnimationEnd, function() {
				$(this).removeClass(_this.inClass);
				_this.afterIn(_this.currentPage);
				_this.isChange = false;
			});
		} else {
			this.afterIn(this.currentPage);
		}
	},
	next: function() {
		var _num = this.currentPage + 1;
		if (_num > this.maxPage) {
			if (this.isLoop) {
				_num = 1;
			} else {
				return;
			}
		}
		if (this.limitPage.length != 0) {
			if (this.limitPage.indexOf(_num) == -1) {
				this.next();
				return;
			}
		}
		this.showPage(_num, "next");
	},
	prev: function() {
		var _num = this.currentPage - 1;
		if (_num <= 0) {
			if (this.isBeginLoop) {
				_num = this.maxPage;
			} else {
				return;
			}
		}
		if (this.limitPage.length != 0) {
			if (this.limitPage.indexOf(_num) == -1) {
				this.prev();
				return;
			}
		}
		this.showPage(_num, "prev");
	},
	showPage: function(_page, _dir) {
		if (this.maxPage == 0) {
			this.currentPage = _page;
			this.init();
			return;
		}
		if (this.isChange) {
			return;
		}
		var _this = this;
		if (_page == this.currentPage) {
			this.isChange = true;
			this.beforeIn(_page);
			$("." + this.classKey + _page).addClass(this.inClass).one(stageManager.AnimationEnd, function() {
				$(this).removeClass(_this.inClass);
				_this.afterIn(_page);
				_this.isChange = false;
			});
			return;
		}
		if (_dir == "next") {
			this.pageShower(_page, this.currentPage, this.inClass, this.outClass);
		} else if (_dir == "prev") {
			this.pageShower(_page, this.currentPage, this.prevInClass, this.prevOutClass);
		} else if (_page > this.currentPage) {
			this.pageShower(_page, this.currentPage, this.inClass, this.outClass);
		} else {
			this.pageShower(_page, this.currentPage, this.prevInClass, this.prevOutClass);
		}
	},
	pageShower: function(_inPage, _outPage, _inClass, _outClass) {
		var _this = this;
		var _before = this.currentPage;
		this.isChange = true;
		$("." + this.classKey + _outPage).trigger("beforeOut", _before);
		$("." + this.classKey + _outPage).addClass(_outClass).one(stageManager.AnimationEnd, function() {
			$(this).addClass(_this.hideClass);
			var _tar = $(this);
			setTimeout(function() {
				_tar.removeClass(_outClass);
			}, 300);
			$(this).trigger("afterOut", _before);
		});
		$("." + this.classKey + _inPage).removeClass(_this.hideClass);
		this.currentPage = _inPage;
		this.beforeIn(_inPage);
		$("." + this.classKey + _inPage).addClass(_inClass).one(stageManager.AnimationEnd, function() {
			$(this).removeClass(_inClass);
			_this.afterIn(_inPage);
			_this.isChange = false;
		});
	},
	beforeIn: function(_page) {
		if (this.isChangeAndScrollTop) {
			$(document).scrollTop(0);
		}
		$("." + this.classKey + _page).trigger("beforeIn", _page);
		$("." + this.classKey + _page + " ." + this.aniClass).each(function() {
			if ($(this).hasClass("hide")) {
				$(this).addClass("hide_no_ani");
			} else {
				$(this).addClass("hide");
			}
		});
	},
	afterIn: function(_page) {
		var _this = this;
		$("." + this.classKey + _page + " ." + this.aniClass + ":not(.hide_no_ani)").removeClass(this.hideClass).addClass(this.aniInClass).one(stageManager.AnimationEnd, function() {
			$(this).removeClass(_this.aniInClass);
		});
		$("." + this.classKey + _page + " .hide_no_ani").removeClass("hide_no_ani");
		$("." + this.classKey + _page).trigger("afterIn", _page);
	}
}

tipsManager = {
	show: function(_tar, _ignore_other) {
		if (typeof(_tar) == "string") {
			if (_tar.indexOf(".") == -1) {
				_tar = $("." + _tar);
			} else {
				_tar = $(_tar);
			}
		}
		if (!_ignore_other) {
			$(".tips_mc").each(function() {
				if ($(this).hasClass("show") && $(this).attr("class") != _tar.attr("class")) {
					tipsManager.hide($(this));
				}
			});
		}
		_tar.trigger("tipsShow");
		if (!_tar.hasClass("show")) {
			_tar.addClass("show");
			_tar.find(".tips_cover").one(transitionEndEventName, function() {
				$(this).addClass("hide");
			});
		}
	},
	hide: function(_tar) {
		if (typeof(_tar) == "string") {
			if (_tar.indexOf(".") == -1) {
				_tar = $("." + _tar);
			} else {
				_tar = $(_tar);
			}
		}
		_tar.trigger("tipsHide");
		_tar.removeClass("show");
		_tar.find(".tips_cover").removeClass("hide");
	},
	hideAll: function() {
		$(".tips_mc").each(function() {
			if ($(this).hasClass("show")) {
				tipsManager.hide($(this));
			}
		});
	},
}

var touchManager = {
	direction: 1, //1:ALL,2:横向,3:纵向
	winObj: null,
	startP: null,
	delta: {
		x: 0,
		y: 0
	},
	limit: null, //需为返回true/false的Function
	handleEvent: function(event) {
		if (this.limit) {
			if (!this.limit()) {
				return;
			}
		}
		switch (event.type) {
			case 'touchstart':
				this.start(event);
				break;
			case 'touchmove':
				this.move(event);
				break;
			case 'touchend':
				this.end(event);
				break;
		}
	},
	init: function() {
		this.winObj = $(window);
		document.addEventListener('touchstart', this, false);
		document.addEventListener('touchmove', this, false);
		document.addEventListener('touchend', this, false);
	},
	start: function(event) {
		var touches = event.touches[0];
		this.startP = {
			x: touches.pageX,
			y: touches.pageY,
			time: +new Date
		};
		this.delta = {
			x: 0,
			y: 0
		};
	},
	move: function(event) {
		if (event.touches.length > 1 || event.scale && event.scale !== 1) {
			return;
		}
		if (!this.startP) {
			return;
		}
		var touches = event.touches[0];
		var _x = touches.pageX - this.startP.x;
		var _y = touches.pageY - this.startP.y;
		if (Math.abs(_x) > Math.abs(_y) && this.direction == 3) {
			return
		}
		if (Math.abs(_x) < Math.abs(_y) && this.direction == 2) {
			return
		}
		event.preventDefault();
		this.delta = {
			x: _x,
			y: _y
		}
	},
	end: function(event) {
		var isChgX = Math.abs(this.delta.x) > 50 || Math.abs(this.delta.x) > this.winObj.width() / 2;
		var isChgY = Math.abs(this.delta.y) > 50 || Math.abs(this.delta.y) > this.winObj.height() / 2;
		if (isChgX && isChgY) {
			if (Math.abs(this.delta.x) > Math.abs(this.delta.y)) {
				isChgY = false;
			} else {
				isChgX = false;
			}
		}
		if (isChgX && this.direction == 3) {
			return
		}
		if (isChgY && this.direction == 2) {
			return
		}
		if (isChgX) {
			if (this.delta.x < 0) {
				//向左
				//console.log("向左" + (-delta.x));
				$(window).trigger("touchToLeft");
			} else {
				//向右
				//console.log("向右" + delta.x);
				$(window).trigger("touchToRight");
			}
		}
		if (isChgY) {
			if (this.delta.y < 0) {
				//向上
				//console.log("向上" + (-delta.y));
				$(window).trigger("touchToUp");
			} else {
				//向下
				//console.log("向下" + delta.y);
				$(window).trigger("touchToDown");
			}
		}
	}
}

var dataManager = {
	renderTarget: function(key) {
		$("*[data-render*=" + key + "]").each(function() {
			var _l = $(this).attr("data-render").split(" ");
			if (_l.indexOf(key) != -1) {
				$(this).trigger("render");
			}
		});
	},
	createDB: function() {
		var _this = this;
		var _db = new this.DB();
		$("*[data-render]").each(function() {
			_this.fixDataRender(_db, $(this));
		});
		return _db
	},
	DB: function() {
		var _db = this;
		this.set = function(_name, _value) {
			_db[_name] = _value;
			dataManager.renderTarget(_name);
		};
		this.get = function(_name) {
			return _db[_name]
		};
	},
	fixDataRender: function(_db, _target, _key) {
		var _key_line = "";
		if (_key) {
			_key_line = "-" + _key;
		}
		var _this = this;
		if (_target.attr("data-render-html" + _key_line) != null) {
			_this.fixDataRenderHtml(_db, _target, _key);
		}
		if (_target.attr("data-render-attr" + _key_line) != null) {
			_this.fixDataRenderAttr(_db, _target, _key);
		}
		if (_target.attr("data-render-if" + _key_line) != null) {
			_this.fixDataRenderIf(_db, _target, _key);
		}
		if (_target.attr("data-render-class" + _key_line) != null) {
			_this.fixDataRenderClass(_db, _target, _key);
		}
	},
	fixDataRenderHtml: function(_database, _target, _key) {
		var _this = this;
		var _base_key = "data-render-html";
		if (_key) {
			_base_key = "data-render-html-" + _key;
			if (_target.attr(_base_key)) {
				var _html = _target.attr(_base_key);
				_target.html(_this.renderToWord(_html, _database));
			}
		} else {
			if (_target.attr(_base_key)) {
				_target.bind("render", function() {
					var _html = _target.attr(_base_key);
					_target.html(_this.renderToWord(_html, _database));
					// if (_key) {
					// 	_target.unbind("render", arguments.callee);
					// }
				});
			}
		}
	},
	fixDataRenderAttr: function(_database, _target, _key) {
		var _this = this;
		var _base_key = "data-render-attr";
		if (_key) {
			_base_key = "data-render-attr-" + _key;
			if (_target.attr(_base_key)) {
				var _dl = _target.attr(_base_key).split("|");
				for (var i in _dl) {
					var _list = _dl[i].split(",");
					var _name = _list[0];
					var _value = _list[1];
					_target.attr(_name, _this.renderToWord(_value, _database));
				}
			}
		} else {
			if (_target.attr(_base_key)) {
				var _dl = _target.attr(_base_key).split("|");
				_target.bind("render", function() {
					for (var i in _dl) {
						var _list = _dl[i].split(",");
						var _name = _list[0];
						var _value = _list[1];
						_target.attr(_name, _this.renderToWord(_value, _database));
					}
				});
			}
		}
	},
	fixDataRenderIf: function(_database, _target, _key) {
		var _this = this;
		var _base_key = "data-render-if";
		if (_key) {
			_base_key = "data-render-if-" + _key;
			if (_target.attr(_base_key)) {
				var _dl = _target.attr(_base_key).split("|");
				for (var i in _dl) {
					var _list = _dl[i].split("=>");
					var _name = _list[0];
					var _value = _list[1];
					var _if = _this.renderToWord(_name, _database);
					_if = _this.fixIf(_if);
					if (eval(_if)) {
						_this.fixDataRender(_database, _target, _value);
					}
				}
			}
		} else {
			if (_target.attr(_base_key)) {
				var _dl = _target.attr(_base_key).split("|");
				_target.bind("render", function() {
					for (var i in _dl) {
						var _list = _dl[i].split("=>");
						var _name = _list[0];
						var _value = _list[1];
						var _if = _this.renderToWord(_name, _database);
						_if = _this.fixIf(_if);
						if (eval(_if)) {
							_this.fixDataRender(_database, _target, _value);
						}
					}
				});
			}
		}
	},
	fixDataRenderClass: function(_database, _target, _key) {
		var _this = this;
		var _base_key = "data-render-class";
		if (_key) {
			_base_key = "data-render-class-" + _key;
			if (_target.attr(_base_key)) {
				var _dl = _target.attr(_base_key).split("|");
				for (var i in _dl) {
					var _list = _dl[i].split("=>");
					var _name = _list[0];
					var _value = _list[1];
					var _if = _this.renderToWord(_name, _database);
					_if = _this.fixIf(_if);
					if (eval(_if)) {
						_target.addClass(_value);
					} else {
						_target.removeClass(_value);
					}
				}
			}
		} else {
			if (_target.attr(_base_key)) {
				var _dl = _target.attr(_base_key).split("|");
				_target.bind("render", function() {
					for (var i in _dl) {
						var _list = _dl[i].split("=>");
						var _name = _list[0];
						var _value = _list[1];
						var _if = _this.renderToWord(_name, _database);
						_if = _this.fixIf(_if);
						if (eval(_if)) {
							_target.addClass(_value);
						} else {
							_target.removeClass(_value);
						}
					}
				});
			}
		}
	},
	renderToWord: function(_word, _database) {
		var _this = this;
		var _list = _this.getKeyList(_word);
		for (var i in _list) {
			var _key = _list[i];
			if (/\{\%[\S]+\%\}/.test(_key)) {
				_action = _key.replace(/(\{\%)|(\%\})/g, "").split("|");
				switch (_action[0]) {
					case "eval":
						var _value = eval(_this.renderToWord(_action[1], _database));
						_word = _word.replace(_list[i], _value);
						break
				}
			} else {
				_word = _word.replace(_list[i], _database.get(_list[i].replace(/[{|}]/g, "")));
			}
		}
		return _word
	},
	getKeyList: function(_word) {
		var _list = [];
		var _num = 0;
		while (_word.indexOf("{", _num) != -1) {
			var _v = this.getKeyObject(_word.slice(_num));
			if (!_v[0]) {
				break
			}
			_num += _v[1];
			_list.push(_v[0]);
		}
		return _list
	},
	getKeyObject: function(_word) {
		var _id1 = _word.indexOf("{");
		var _id2 = _word.indexOf("{%");
		if (_id1 == _id2) {
			return [_word.slice(_id1, _word.indexOf("%}") + 2), _word.indexOf("%}") + 2]
		} else {
			return [_word.slice(_id1, _word.indexOf("}") + 1), _word.indexOf("}") + 1];
		}
	},
	fixIf: function(_if) {
		_if = _if.replace(/or/g, "||");
		_if = _if.replace(/and/g, "&&");
		_if = _if.replace(/'null'/g, "''");
		_if = _if.replace(/"null"/g, '""');
		return _if
	}
}

function jsGetter(url, succ, err) {
	var script = document.createElement('script');
	script.type = "text/javascript";
	script.src = url;

	if (script.readyState) {
		script.onreadystatechange = function() {
			if (script.readyState == "loaded" || script.readyState == "complete") {
				script.onreadystatechange = null;
				succ();
			}
		};
	} else {
		script.onload = succ;
	}
	script.onerror = err;
	var head = document.getElementsByTagName("head")[0];
	head.appendChild(script);
}

var animEndEventNames = {
		'webkit': 'webkitAnimationEnd',
		'o': 'oAnimationEnd',
		'ms': 'MSAnimationEnd',
		'animation': 'animationend'
	},
	animEndEventName = animEndEventNames[prefix().lowercase] || animEndEventNames['animation'];
var transitionEndEventNames = {
		'webkit': 'webkitTransitionEnd',
		'o': 'oTransitionEnd',
		'ms': 'MSTransitionEnd',
		'animation': 'transitionend'
	},
	transitionEndEventName = transitionEndEventNames[prefix().lowercase] || transitionEndEventNames['animation'];

function prefix() {
	var styles = getCompStyle(document.documentElement),
		pre = (Array.prototype.slice.call(styles).join('')
			.match(/-(moz|webkit|ms)-/) || ['', 'o']
		)[1],
		dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
	return {
		dom: dom,
		lowercase: pre,
		css: '-' + pre + '-',
		js: pre[0].toUpperCase() + pre.substr(1)
	};
};

function getCompStyle(elem, classes) {
	return (window.getComputedStyle ? window.getComputedStyle(elem, classes || null) : elem.currentStyle) || null;
}