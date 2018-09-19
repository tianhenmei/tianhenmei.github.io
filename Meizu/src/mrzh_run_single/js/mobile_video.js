function AnimationPlayer(opt) {
	if (!opt.key) {
		concole.log("请输入视频序列帧Key");
	}
	if (opt) {
		this.frames = opt.frames ? opt.frames : 24;
		this.target = opt.target ? opt.target : "";
		this.key = opt.key;
		this.loop = opt.loop;
		this.complete = opt.complete ? opt.complete : null;
		this.stage = opt.stage ? opt.stage : null;
	}
	var main = this;
	this.total = this.key.length;
	this.current = 0;
	this.time = 1000 / this.frames;
	this.timer = null;
	this.startTime = 0;
	this.startFrame = 0;
	this.isPlaying = false;
	this.play = function() {
		if (main.timer) {
			clearTimeout(main.timer);
			main.timer = null;
		}
		main.isPlaying = true;
		main.startTime = new Date().getTime();
		main.startFrame = main.current;
		main.showFrames();
	};
	this.showFrames = function() {
		if (main.loop && main.stage) {
			if (stageManager.currentPage != main.stage) {
				main.pause();
				return
			}
		}
		main.current = Math.max(0, Math.min(main.total - 1, main.current));
		$(main.target).attr("src", "data:image/jpeg;base64," + main.key[main.current].replace("b'", "").replace("'", ""));
		var _now_time = new Date().getTime();
		var _next = Math.min(main.total - 1, main.current + 1);
		var _t = _now_time - main.startTime - (_next - main.startFrame) * main.time;
		main.timer = setTimeout(function() {
			main.next();
		}, Math.max(10, main.time - _t));
	};
	this.next = function() {
		main.current = Math.min(main.total - 1, main.current + 1);
		if (main.current >= main.total - 1) {
			if (main.loop) {
				main.current = 0;
				main.startTime = new Date().getTime();
				main.startFrame = main.current;
			} else {
				if (main.complete) {
					main.complete.call(main);
				}
				main.pause();
				return
			}
		}
		main.showFrames();
	};
	this.pause = function() {
		clearInterval(main.timer);
		main.timer = null;
		main.isPlaying = false;
	};
	this.reset = function() {
		main.current = 0;
		$(main.target).attr("src", "data:image/jpeg;base64," + main.key[main.current].replace("b'", "").replace("'", ""));
	};
}