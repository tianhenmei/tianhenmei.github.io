
/**
 * 唤起app
 */
var lgFe_evokeApp = ( function (global) {
    return function(config) {

		if (browser.versions.weibo || browser.versions.weixin || browser.versions.qq) {
			return;
		}

		for (var i in config) {
			var data = config[i].data;
			if (data) {
				var dataArr = [];
				for (var j in data) {
					Object.prototype.hasOwnProperty.call(data, j) && dataArr.push(j + '=' + encodeURIComponent(data[j]));
				}
				config[i].dataArr = dataArr;
			}
		}
		var browserVersions = browser.versions;
		if (browserVersions.ios) {
			var evokeAppURL = config.ios.data ? 'lagou://' + config.ios.url + '?' + config.ios.dataArr.join('&') : 'lagou://' + config.ios.url;
			window.location.href = evokeAppURL;
		} else if (browserVersions.android) {
			var evokeAppURL = config.android.data ? 'lagou://' + config.android.url + '?' + config.android.dataArr.join('&') : 'lagou://' + config.android.url;

			function openApp(openUrl, callback) {
				//检查app是否打开
				function checkOpen(cb) {
					var clickTime = +(new Date());

					function check(elsTime) {
						if (elsTime > 3000 || document.hidden || document.webkitHidden) {
							// 唤起成功opened参数设置为1
							cb(1);
						} else {
							// 唤起失败opened参数设置为0
							cb(0);
						}
					}
					//启动间隔20ms运行的定时器，并检测累计消耗时间是否超过3000ms，超过则结束
					var count = 0,
						intHandle;
					intHandle = setInterval(function() {
						count++;
						var elsTime = +(new Date()) - clickTime;
						if (count >= 100 || elsTime > 3000) {
							clearInterval(intHandle);
							check(elsTime);
						}
					}, 20);
				}

				if (browser.versions.chrome) {
					window.location.href = openUrl;
					if (callback) {
						checkOpen(function(opened) {
							callback && callback(opened);
						});
					}
				} else {
					//在iframe 中打开APP
					var ifr = document.createElement('iframe');
					ifr.src = openUrl;
					ifr.style.display = 'none';
					if (callback) {
						checkOpen(function(opened) {
							callback && callback(opened);
						});
					}
					document.body.appendChild(ifr);
					setTimeout(function() {
						document.body.removeChild(ifr);
					}, 2000);
				}

			}
			openApp(evokeAppURL, config.android.callback);
		}

	};
} (window));