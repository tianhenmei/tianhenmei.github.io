(function() {
	var REMOTE = {
		server: "https://a.lagou.com/track"
	};
	var _PID = "",
	_PNO = "",
	_PV = 0,
	_PCONTENTID = "",
	_PRANDOM = "",
	_GAMETHOD = "",
	_GAMSGTYPE = "",
	_GATJ = "",
	_GATJVAL = 0,
	v = 1,
	t = "a",
	dl = window.location.href,
	dr = document.referrer,
	dt = document.title;
	var _ELS = document;
	if (_ELS.addEventListener) {
		_ELS.addEventListener("touchstart", postEncodingID, false)
	} else {
		if (_ELS.attachEvent) {
			_ELS.attachEvent("touchstart", postEncodingID)
		}
	}
	function postEncodingID(e) {
		var target = e.target || e.srcElement;
		var arr_GATJ = [];
		while (target && target.getAttribute) {
			if (target.getAttribute("data-lg-tj-id") || target.getAttribute("data-lg-gatj-msg")) {
				break
			} else {
				target = target.parentNode
			}
		}
		if (!target || !target.getAttribute) {
			return
		}
		try {
			_PID = (target.getAttribute("data-lg-tj-id") || "idnull").trim();
			_PNO = (target.getAttribute("data-lg-tj-no") == "idnull" ? "idnull": (target.getAttribute("data-lg-tj-no") || "idnull")).trim();
			_PCONTENTID = (target.getAttribute("data-lg-tj-cid") == "idnull" ? "idnull": (target.getAttribute("data-lg-tj-cid") || "idnull")).trim();
			_PRANDOM = getRandom();
			_GAMETHOD = (target.getAttribute("data-lg-gatj-method") || "send").trim();
			_GAMSGTYPE = (target.getAttribute("data-lg-gatj-msgtype") || "event").trim();
			_GATJ = (target.getAttribute("data-lg-gatj-msg") || "").trim();
			_GATJVAL = parseInt(target.getAttribute("data-lg-gatj-val") || 0);
			if (_GATJ && typeof ga == "function") {
				arr_GATJ.push(_GAMETHOD, _GAMSGTYPE);
				arr_GATJ = arr_GATJ.concat(_GATJ.split(",")); !! _GATJVAL && arr_GATJ.push(_GATJVAL);
				ga.apply(null, arr_GATJ)
			}
			if (_PID != "idnull") {
				var _params = {};
				_params.v = v;
				_params.t = target.tagName.toLocaleLowerCase();
				_params.dl = dl;
				_params.dr = dr;
				_params.dt = dt;
				_params.aid = [_PID, _PNO, _PV, _PCONTENTID, _PRANDOM].join("_");
				imgGET(_params)
			} else {
				return
			}
		} catch(e) {}
	}
	function imgGET(params) {
		var _img = new Image();
		paramsArr = [];
		for (var item in params) {
			if (typeof item == "string") {
				paramsArr.push(item + "=" + params[item])
			}
		}
		_img.src = REMOTE.server + "?" + paramsArr.join("&")
	}
	function getRandom(digit) {
		window._CASH_RANDOM ? "": window._CASH_RANDOM = {};
		var _cash_random = window._CASH_RANDOM || {},
		_digit = digit || 4,
		_random = getRandomSimple();
		while (_cash_random[_random]) {
			_random = getRandomSimple();
			if (!_cash_random[_random]) {
				break
			}
		}
		window._CASH_RANDOM[_random] = _random;
		return _random;
		function getRandomSimple() {
			var random = "";
			for (var i = 0; i < _digit; i++) {
				var r = Math.floor(Math.random() * 10);
				random += r.toString()
			}
			return random.toString()
		}
	}
	window._PTJ = window._PTJ || {
		postEncodingID: postEncodingID
	}
})();