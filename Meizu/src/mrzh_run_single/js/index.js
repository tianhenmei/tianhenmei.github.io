require.config({
	paths: {
		"jquery": "js/jquery-1.11.2.min",
		"mobile-base": "js/mobile_base",
		"mobile-video": "js/mobile_video",
		"pixi": "js/pixi",
		"pixi-projection": "js/pixi-projection",
		"pixi-layers": "js/pixi-layers",
		"tween": "js/Tween",
	}
});

var user;

var PAGESIZE = {
	"width": 750,
	"height": 1472,
};

require(["jquery", "pixi"], function() {
	require(["mobile-base", "tween", "pixi-projection", "pixi-layers", "mobile-video"], function() {
		var wx_use;
		var debug = false;

		user = dataManager.createDB();

		$(window).resize(reSize);
		reSize();

		var currentGame;
		var app;
		var touchTimer;

		var sound = document.createElement('audio');
		sound.setAttribute('src', 'sounds/bg.mp3');
		sound.loop = true;

		addEvent();

		/*
		 * 小米处理声音事件
		 * */
		addMIEvent();
		/*
		 * @description 小米处理声音事件
		 * @params null
		 * @return null
		 * */
		function addMIEvent() {
			var visibilityChange
			if (typeof document.hidden !== 'undefined') {
				visibilityChange = 'visibilitychange'
			} else if (typeof document.webkitHidden !== 'undefined') {
				visibilityChange = 'webkitvisibilitychange'
			}
			document.addEventListener(visibilityChange, function() {
					var isHidden = document.hidden
						// 页面处于隐藏状态
					if (isHidden) {
						//暂停播放
						sound && sound.pause();
					} else {
						//开始播放
						sound && sound.play();
					}
				}, false)
				//小米jsbridge 处理  屏幕显示
			document.addEventListener('JsBridgeResume', function() {
					//开始播放
					sound && sound.play();
				})
				//小米jsbridge 处理  息屏
			document.addEventListener('JsBridgePause', function() {
				sound && sound.pause();
			})
		}

		function addEvent() {
			// CREATE CODE START
			$(".stage1 .stage2_button").tap(function() {
				stageManager.showPage(2);
			});
			// CREATE CODE END
			$(".stage2").bind("beforeIn", function() {
				currentGame = new Game();
				currentGame.create();
				app.start();

				user.set("touchX", 0);

				currentGame.start();
			});
			$(".stage2").bind("touchstart touchmove touchend", function(e) {
				e.preventDefault();
			});
			$(".stage2").bind("touchstart touchmove", function(e) {
				// console.log(e);
				var _x = e.originalEvent.changedTouches[0].pageX / windowScale - 375;

				if (touchTimer) {
					clearInterval(touchTimer);
					touchTimer = null;
				}

				var _max = 6;
				user.set("touchX", Math.min(_max, Math.max(-_max, user.get("touchX") + _x / 375)));
				user.set("tempX", _x);
			});
			$(".stage2").bind("touchend", function(e) {
				user.set("tempX", null);
			});
			$(".stage1 .role_button").tap(function() {
				tipsManager.show("role_tips");
			});
			$(".role_tips .pic .close_button").tap(function() {
				tipsManager.hide(".role_tips");
			});
			$(".role_tips").bind("tipsShow", function() {
				user.set("has_show_help", true);
			});
			$(".stage3").bind("beforeIn", function() {
				$(".stage3 .res_txt").html(formatSeconds(user.get("result")));
				if (user.get("result") < 100) {
					$(".stage3 .rank_txt").html("击败了" + (30 + Math.ceil(Math.random() * 10)) + "%的幸存者");
				} else if (user.get("result") < 200) {
					$(".stage3 .rank_txt").html("击败了" + (50 + Math.ceil(Math.random() * 10)) + "%的幸存者");
				} else if (user.get("result") < 300) {
					$(".stage3 .rank_txt").html("击败了" + (70 + Math.ceil(Math.random() * 10)) + "%的幸存者");
				} else if (user.get("result") < 400) {
					$(".stage3 .rank_txt").html("击败了" + (80 + Math.ceil(Math.random() * 10)) + "%的幸存者");
				} else {
					$(".stage3 .rank_txt").html("击败了" + (90 + Math.ceil(Math.random() * 5)) + "%的幸存者");
				}
			});
			$(".stage3 .stage2_button").tap(function() {
				stageManager.showPage(2);
			});
			$(".stage3 .stage4_button").tap(function() {
				// stageManager.showPage(2);
				// var _target = $(this).attr("data-target");

				// location.href = _target;

				NativeInterface.goSubscribeAppInfo(3047419, 'com.test.luo');
			});
			$(".stage2 .res_txt").bind("render", function() {
				$(this).html(formatSeconds(user.get("result")));
			});
			$(".stage1").one("touchend", function() {
				sound.play();
			});

			user.set("has_show_help", false);

			app = new PIXI.Application(750, 1448, {
				transparent: true
			});

			app.ticker.speed = 1;
			app.ticker.add(function() {
				if (stageManager.currentPage == 2 && currentGame) {
					TWEEN.update();

					if (user.get("tempX")) {
						var _max = 6;
						user.set("touchX", Math.min(_max, Math.max(-_max, user.get("touchX") + user.get("tempX") / 375)));
					}

					currentGame.setStage();

					if (currentGame.player) {
						currentGame.player.move();

						if (currentGame.posY % 300 < currentGame.speed) {
							if (Math.random() < 0.8) {
								currentGame.addRock([-150, 0, 150][Math.floor(Math.random() * 3)], 'images/rock' + Math.ceil(Math.random() * 4) + '.png');
							} else if (Math.random() < 0.9) {
								currentGame.addRock(0, 'images/rock5.png');
								currentGame.addRock(-150, 'images/empty.png');
							} else {
								currentGame.addRock(0, 'images/rock6.png');
								currentGame.addRock(150, 'images/empty.png');
							}
						}

						currentGame.setRockStage();

						currentGame.speed = Math.min(24, currentGame.speed + 0.004);
					}

					currentGame.camera.updateTransform();
				}
			});

			$("#game")[0].appendChild(app.view);

			start(1);

			setTimeout(function() {
				tipsManager.show(".role_tips");
			}, 500);

			jsGetter("movies/start.js", function() {
				var start_movie = new AnimationPlayer({
					frames: 12,
					target: ".stage1 .start_movie",
					key: startList,
					loop: true,
					stage: 1,
				});
				start_movie.reset();
				start_movie.play();
			});
		}

		function DeviceOrientationHandler(event) {
			var alpha = event.alpha,
				beta = event.beta,
				gamma = event.gamma;

			user.set("gamma", event.gamma);

			var _max = 6;

			user.set("touchX", Math.min(_max, Math.max(-_max, user.get("touchX") + user.get("gamma") / 90 * 5)));
		}

		if (window.DeviceOrientationEvent) {
			window.addEventListener('deviceorientation', DeviceOrientationHandler, false);
		} else {
			alert("您的浏览器不支持重力感应");
		}

		function formatSeconds(value) {
			var secondTime = parseInt(value);
			var minuteTime = 0;
			var hourTime = 0;
			if (secondTime >= 10) {
				minuteTime = parseInt(secondTime / 10);
				secondTime = parseInt(secondTime % 10);
				if (minuteTime > 60) {
					hourTime = parseInt(minuteTime / 60);
					minuteTime = parseInt(minuteTime % 60);
				}
			}
			var result = "" + parseInt(secondTime) + "0";
			if (minuteTime >= 10) {
				result = "" + parseInt(minuteTime) + ":" + result;
			} else {
				result = "0" + parseInt(minuteTime) + ":" + result;
			}
			if (hourTime >= 10) {
				result = "" + parseInt(hourTime) + ":" + result;
			} else {
				result = "0" + parseInt(hourTime) + ":" + result;
			}
			return result;
		}

		function Game() {
			var _game = this;
			this.camera = null;
			this.groundLayer = null;
			this.layerList = [];
			this.timer = null;
			this.player;
			this.posY = 0;
			this.rockLayer;
			this.rockList = [];
			this.speed = 2;
			this.monster;
			this.create = function() {
				this.clear();

				user.set("result", 0);

				var sky = PIXI.Sprite.fromImage('images/sky.jpg');
				app.stage.addChildAt(sky, 0);

				this.camera = new PIXI.projection.Camera3d();
				this.camera.position.set(app.screen.width / 2, app.screen.height / 2);
				this.camera.setPlanes(700, -3000, 10000);
				this.camera.position3d.y = -200;
				app.stage.addChild(this.camera);

				this.groundLayer = new PIXI.projection.Container3d();
				this.groundLayer.euler.x = Math.PI / 2;
				this.camera.addChild(this.groundLayer);

				var fg1 = new PIXI.projection.Sprite3d(PIXI.Texture.fromImage('images/ground.jpg'));
				fg1.anchor.set(0.5);
				fg1.y = 0;
				this.groundLayer.addChild(fg1);

				var fg2 = new PIXI.projection.Sprite3d(PIXI.Texture.fromImage('images/ground.jpg'));
				fg2.anchor.set(0.5);
				fg2.y = 1270;
				this.groundLayer.addChild(fg2);

				var fg3 = new PIXI.projection.Sprite3d(PIXI.Texture.fromImage('images/ground.jpg'));
				fg3.anchor.set(0.5);
				fg3.y = 1270 * 2;
				this.groundLayer.addChild(fg3);

				for (var i = 310; i >= 210; i -= 4) {
					this.addWall(i, 'images/right_building.png');
					this.addWall(-i, 'images/left_building.png');
				}

				for (var i = -210; i <= -180; i += 5) {
					this.addWall(i, 'images/left_building_1.png');
				}

				for (var i = 210; i >= 180; i -= 5) {
					this.addWall(i, 'images/right_building_1.png');
				}

				this.rockLayer = new PIXI.projection.Container3d();
				this.rockLayer.euler.x = Math.PI / 2;
				this.rockLayer.position3d.x = 0;
				this.camera.addChild(this.rockLayer);
			};
			this.clear = function() {
				app.stage.removeChildren();

				this.layerList.length = 0;
			};
			this.monsterMove = function(_tar, _y) {
				var _tween = new TWEEN.Tween({
						y: _tar.y,
						a: _y == 2500 ? 1 : 0.7,
					})
					.to({
						y: _y,
						a: _y == 2500 ? 0.7 : 1,
					}, 3000)
					.onUpdate(function() {
						_tar.y = this.y;
						_tar.alpha = this.a;
					})
					.onComplete(function() {
						if (stageManager.currentPage == 2) {
							_game.monsterMove(_tar, _y == 2500 ? 1500 : 2500);
						}
					});
				_tween.start();
			}
			this.addRock = function(_x, _img) {
				var _rock = new PIXI.projection.Sprite3d(PIXI.Texture.fromImage(_img));
				_rock.anchor.set(0.5);
				_rock.euler.x = -Math.PI / 2;
				_rock.y = -500;
				_rock.x = _x;
				this.rockLayer.addChild(_rock);

				this.rockList.push(_rock);
			};
			this.setRockStage = function() {
				var _del_list = [];

				for (var i in this.rockList) {
					if (this.rockList[i].parent) {
						this.rockList[i].y += this.speed * 1.6;
						if (this.rockList[i].y >= 300 && this.rockList[i].y <= 320) {
							switch (this.rockList[i].x) {
								case -150:
									if (this.player.object.x <= -45) {
										this.player.fall();
									}
									break
								case 0:
									if (this.player.object.x > -80 && this.player.object.x < 70) {
										this.player.fall();
									}
									break
								case 150:
									if (this.player.object.x >= 20) {
										this.player.fall();
									}
									break
							}
							this.rockLayer.addChildAt(this.rockList[i], Math.max(0, this.rockLayer.getChildIndex(this.player.object) - 1));
						} else if (this.rockList[i].y + 10 >= this.monster.y - 376 / 2 * 1.6 - 60 * 1.6 && this.rockList[i].alpha == 1) {
							_del_list.push(this.rockList[i]);
							this.rockLayer.addChildAt(this.monster, this.rockLayer.getChildIndex(this.rockList[i]));
						}
					}
				}

				for (var i in _del_list) {
					this.fadeOut(_del_list[i], this.rockLayer);
				}
			};
			this.addWall = function(_x, _img) {
				var _layer = new PIXI.projection.Container3d();
				_layer.euler.y = Math.PI / 2;
				_layer.position3d.x = _x;
				this.camera.addChild(_layer);

				var rb1 = new PIXI.projection.Sprite3d(PIXI.Texture.fromImage(_img));
				rb1.anchor.set(1);
				rb1.y = 0;
				rb1.x = 1000;
				rb1.scale.x = rb1.scale.y = 2;
				_layer.addChild(rb1);

				var rb2 = new PIXI.projection.Sprite3d(PIXI.Texture.fromImage(_img));
				rb2.anchor.set(1);
				rb2.y = 0;
				rb2.x = -1000;
				rb2.scale.x = rb2.scale.y = 2;
				_layer.addChild(rb2);

				this.layerList.push({
					"layer": _layer,
					"img": _img
				});
			};
			this.setStage = function() {
				var _del_list1 = [];

				this.posY += this.speed;

				for (var i in this.groundLayer.children) {
					this.groundLayer.getChildAt(i).y += this.speed;
					if (this.groundLayer.getChildAt(i).y > 1270 * 3) {
						_del_list1.push(this.groundLayer.getChildAt(i));
					}
				}

				if (this.groundLayer.getChildAt(this.groundLayer.children.length - 1).y >= 0) {
					var fg = new PIXI.projection.Sprite3d(PIXI.Texture.fromImage('images/ground.jpg'));
					fg.anchor.set(0.5);
					fg.y = -1260;
					this.groundLayer.addChild(fg);
				}

				for (var i in _del_list1) {
					this.groundLayer.removeChild(_del_list1[i]);
				}

				for (var i in this.layerList) {
					this.setWallStage(this.layerList[i]["layer"], this.speed, this.layerList[i]["img"]);
				}
			};
			this.setWallStage = function(_group, _step, _img) {
				var _del_list = [];

				for (var i in _group.children) {
					_group.getChildAt(i).x -= _step;
					if (_group.getChildAt(i).x <= -3000 && _group.getChildAt(i).alpha == 1) {
						_del_list.push(_group.getChildAt(i));
					}
				}

				if (_group.getChildAt(_group.children.length - 1).x <= 1000) {
					var rb = new PIXI.projection.Sprite3d(PIXI.Texture.fromImage(_img));
					rb.anchor.set(1);
					rb.y = 0;
					rb.x = 3000;
					rb.scale.x = rb.scale.y = 2;
					_group.addChild(rb);
				}

				for (var i in _del_list) {
					this.fadeOut(_del_list[i], _group);
				}
			};
			this.fadeOut = function(_tar, _group) {
				var _tween = new TWEEN.Tween({
						a: 1,
					})
					.to({
						a: 0,
					}, 3000)
					.onUpdate(function() {
						_tar.alpha = this.a;
					})
					.onComplete(function() {
						_group.removeChild(_tar);
					});
				_tween.start();
			};
			this.pause = function() {
				app.stop();

				if (_game.timer) {
					clearInterval(_game.timer);
					_game.timer = null;
				}
			};
			this.start = function() {
				app.start();

				var explosionTextures = [],
					i;

				for (i = 1; i <= 3; i++) {
					var texture = PIXI.Texture.fromImage('images/zombie' + i + '.png');
					explosionTextures.push(texture);
				}

				var _monster = new PIXI.extras.AnimatedSprite(explosionTextures);
				_monster.animationSpeed = 5 / 60;
				_monster.anchor.set(0.5);
				_monster.gotoAndPlay(1);
				_monster.y = 0;

				this.monster = new PIXI.projection.Container3d();

				this.monster.euler.x = -Math.PI / 2;
				this.monster.y = 2500;
				this.monster.x = 0;
				this.monster.scale3d.x = this.monster.scale3d.y = 1;
				this.rockLayer.addChild(this.monster);
				this.monster.addChild(_monster);

				this.monsterMove(this.monster, 1500);

				this.player = new Player();
				this.player.create(this.rockLayer);

				if (_game.timer) {
					clearInterval(_game.timer);
					_game.timer = null;
				}

				_game.timer = setInterval(function() {
					_game.addResult(1);
				}, 100);
			};
			this.addResult = function(_num) {
				user.set("result", user.get("result") + _num);
			};
			this.end = function() {
				console.log("end");

				if (_game.timer) {
					clearInterval(_game.timer);
					_game.timer = null;

					// if (user.get("user_id")) {
					// 	sent_result(user.get("result"));
					// }

					setTimeout(function() {
						stageManager.showPage(3);
					}, 2000);
				}
			};
		}

		function Player() {
			var _player = this;
			this.player;
			this.fallObject;
			this.object;
			this.posX = 0;
			this.moveTimer = null;
			this.move_tween = null;
			this.create = function(_layer) {
				this.object = new PIXI.projection.Container3d();

				var explosionTextures = [],
					i;

				for (i = 1; i <= 8; i++) {
					if (i <= 5) {
						var texture = PIXI.Texture.fromImage('images/player/p' + i + '.png');
					} else {
						var texture = PIXI.Texture.fromImage('images/player/p' + (10 - i) + '.png');
					}
					explosionTextures.push(texture);
				}

				this.player = new PIXI.extras.AnimatedSprite(explosionTextures);

				this.player.animationSpeed = 10 / 60;
				this.player.anchor.x = 0.5;
				this.player.anchor.y = 1;
				this.player.scale.x = this.player.scale.y = 0.3;
				this.player.gotoAndPlay(1);
				this.object.addChild(this.player);

				var fallExplosionTextures = [],
					j;

				for (j = 6; j <= 12; j++) {
					var texture = PIXI.Texture.fromImage('images/player/p' + Math.min(8, parseInt(j)) + '.png');
					fallExplosionTextures.push(texture);
				}

				this.fallObject = new PIXI.extras.AnimatedSprite(fallExplosionTextures);
				this.fallObject.animationSpeed = 5 / 60;
				this.fallObject.anchor.x = 0.5;
				this.fallObject.anchor.y = 1;
				this.fallObject.scale.x = this.fallObject.scale.y = 0.3;
				this.fallObject.visible = false;
				this.fallObject.loop = false;
				this.object.addChild(this.fallObject);

				this.object.euler.x = -Math.PI / 2;

				_layer.addChild(this.object);
			};
			this.run = function(_x) {
				this.move_tween = new TWEEN.Tween({
						x: _player.posX,
					})
					.to({
						x: _x,
					}, 2000 + Math.random() * 2000)
					.onUpdate(function() {
						_player.posX = this.x;
						_player.move();
					})
					.onComplete(function() {
						setTimeout(function() {
							_player.run((Math.ceil(Math.random() * 12) + 8) * -1 * (_x / Math.abs(_x)));
						}, 1000 + Math.random() * 1000);
					});
				this.move_tween.start();
			};
			this.move = function() {
				var _lastX = _player.posX + user.get("touchX");

				_player.object.x = _lastX * 20;
			};
			this.fall = function() {
				if (currentGame.timer) {
					_player.object.y -= 10;
					_player.player.visible = false;
					_player.fallObject.visible = true;
					_player.fallObject.gotoAndPlay(1);

					currentGame.end();

					setTimeout(function() {
						app.stop();
					}, 600);
				}
			};
		}

		function getDistance(_x1, _y1, _x2, _y2) {
			return Math.sqrt((_x2 - _x1) * (_x2 - _x1) + (_y2 - _y1) * (_y2 - _y1));
		}

		function start(page) {
			stageManager.currentPage = page;
			stageManager.isLoop = false;
			stageManager.isBeginLoop = false;
			stageManager.init();
			$("#main").removeClass("hide");
		}

		function reSize() {
			var pw = PAGESIZE.width;
			var ph = PAGESIZE.height;
			var tww = document.body.offsetWidth;
			var twh = document.body.offsetHeight;
			var wh = twh * pw / tww;
			var sc = tww / pw;
			var tw = Math.min(0, (pw - tww) * 0.5);
			if (sc <= 1) {
				tw = 0;
			}
			$('#main').css({
				'transform': 'translate(' + tw + 'px, 0px) scale(' + sc + ')',
				'-webkit-transform': 'translate3d(' + tw + 'px, 0px, 0px) scale(' + sc + ')',
				'min-height': ($(window).height() / sc > 1200) ? $(window).height() / sc : 1200
			});
			$('#main_container').height($(window).height());

			$(".stage4 .rank_list").height($(window).height() / sc - 240);

			windowScale = sc;
		}

		sound.play();
	});
});