Date.prototype.format = function (format) {
    /*
     * format="yyyy-MM-dd hh:mm:ss";
     */
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
                : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
};
var hashRouter = {
    newHash: '',
    oldHash: '',
    events: {},
    initialized: false,
    init: function (events, immediate) {
        this._parseEvents(events);
        if (this.initialized) return;
        if (immediate) {
            this._hashChangeHandler();
        }
        this._setup();
    },
    on: function (evt, cb) {
        if(!this.initialized) {
            return;
        }
        this._join(evt, cb);
    },
    one: function (evt, cb) {
        var self = this,
            _cb = function() {
                cb();
                self._remove(evt, _cb);
            };
        this._join(evt, _cb);
    },
    stop: function () {
        if (this.initialized) {
            window.onhashchange = this._oldHashChage;
        }
    },
    chage: function (hash) {
        window.location.hash = hash;
    },
    replace: function (hash) {
        window.location.replace(hash);
    },
    current: function () {
        return window.location.hash;
    },
    _parseEvents: function (events) {
        this.events = {};
        for (var p in events) {
            if (events.hasOwnProperty(p)) {
                this._join(p, events[p]);
            }
        }
    },
    _join: function (p, cb) {
        var result = /(\w+)\s+(\S+)/.exec(p),
            evt = result[1],
            hash = result[2],
            key = evt + '_' + hash;
        if(!this.events[key]) {
            this.events[key] = [];
        }
        this.events[key].push(cb);
    },
    _remove: function (p, cb) {
        var result = /(\w+)\s+(\S+)/.exec(p),
            evt = result[1],
            hash = result[2],
            key = evt + '_' + hash;
        if(!this.events[key]) {
            return;
        }
        for (var i = 0; i < this.events[key].length; i++) {
            if (this.events[key][i] == cb) {
                //this.events[key].splice(i, 1); //bug
                this.events[key][i] == null;
            }
        }
    },
    _triggerEvent: function (evt, source) {
        var queue = this.events[evt];
        if(!queue) return;
        for (var i = 0; i < queue.length; i++) {
            queue[i] && queue[i](source);
        }
    },
    _setup: function () {
        var self = this;
        this._oldHashChage = window.onhashchange;
        window.onhashchange = function (evt) {
            self._oldHashChage && self._oldHashChage(evt);
            self._hashChangeHandler(evt);
        };
        this.initialized = true;
    },
    _compare: function (oldHash, newHash) {
        var _o = oldHash.split('&'),
            _n = newHash.split('&'),
            map = {};
        for (var i = 0; i < _o.length; i++) {
            newHash = newHash.replace(_o[i], '');
        }
        for (var j = 0; j < _n.length; j++) {
            oldHash = oldHash.replace(_n[j], '');
        }
        return {
            'exit': oldHash.split('&'),
            'enter': newHash.split('&')
        }
    },
    _hashChangeHandler: function (evt) {
        this.oldHash = this.newHash;
        this.newHash = window.location.hash.replace('#', '');
        var result = this._compare(this.oldHash, this.newHash);
        for (var i = 0; i < result['exit'].length; i++) {
            if (result['exit'][i]) {
                this._triggerEvent('exit_' + result['exit'][i], evt);
                this._triggerEvent('exit_' + '*', evt);
            }
        }
        for (var j = 0; j < result['enter'].length; j++) {
            if (result['enter'][j]) {
                this._triggerEvent('enter_' + result['enter'][j], evt);
                this._triggerEvent('enter_' + '*', evt);
            }
        }
    }
};
var util = {

    initLoading: function() {
        window._loadingTimer = -1;
        $(document).on('ajaxBeforeSend', function() {
            window._loadingTimer = setTimeout(function() {
                util.showLoading();
            }, 200);
        }).on('ajaxComplete', function() {
            clearTimeout(window._loadingTimer);
            util.closeLoading();
        });
    },

    parseJSON: function(data) {
        try {
            return JSON.parse(data)
        }
        catch (e) {
            return (new Function("return " + data))()
        }
    },

    getUrlParam: function (key) {
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    },

	showLoading: function() {
        try {
            EventJavascriptInterface.hideNativeProgress();
            EventJavascriptInterface.showNativeProgress();
        } catch(err) {

        }
        // if(!$('.load-flg').length) {
        //     $('body').append('<div class="dialog-bg load-flg"></div><div class="loading-container load-flg">' +
        //         '<img src="../images/loading2_1a1177d9.webp"></div>');
        // }
    },

    closeLoading: function(){
        try {
            EventJavascriptInterface.hideNativeProgress();
        } catch (err) {

        }
        //$('.load-flg').remove();
    },

	changeHash: function(newHash) {
        var h = window.location.hash.replace('#', '');
        if (h.indexOf('mzdialog') != -1 || h.indexOf('mzpopup') != -1) {
            hashRouter.chage(window.location.hash + '&' + newHash);
        } else {
            hashRouter.chage('#' + newHash);
        }
    },
	buildTransition: function($el) {
        var actionEntryGroup = [];
        var endActions = [];
        var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
        var actionChain = {
            next: function(action) {
                actionEntryGroup.push(action);
                return this;
            },
            end: function(action) {
                endActions.push(action);
                return this;
            },
            play: function() {
                if(actionEntryGroup.length) {
                    function fn(evt) {
                        if(evt.srcElement == $el[0]) {
                            while(endActions.length) {
                               endActions.shift().call($(this)); 
                            }
                            $el.off('webkitTransitionEnd', fn);
                        }
                    }
                    $el.on('webkitTransitionEnd', fn);
                    var _loop = function() {
                        if(actionEntryGroup.length) {
                            actionEntryGroup.shift().call($el);
                            requestAnimationFrame(_loop);
                        }
                    }
                    requestAnimationFrame(_loop);
                }
            }
        };
        return actionChain;
    },

    buildEnterTransition: function($el, transitionClazz) {
        $el.addClass(transitionClazz + '-enter');
        $el.removeClass(transitionClazz + '-leave')
            .removeClass(transitionClazz + '-leave-active');
        return this.buildTransition($el)
            .next(function() {
                this.addClass(transitionClazz + '-enter-active');
            }).next(function() {
                this.removeClass(transitionClazz + '-enter');
            }).end(function() {
                this.removeClass(transitionClazz + '-enter-active');
            });
    },

    buildLeaveTransition: function($el, transitionClazz) {
        $el.addClass(transitionClazz + '-leave');
        $el.removeClass(transitionClazz + '-enter')
            .removeClass(transitionClazz + '-enter-active');
        return util.buildTransition($el)
            .next(function() {
                this.addClass(transitionClazz + '-leave-active');
            }).end(function() {
                this.removeClass(transitionClazz + '-leave')
                    .removeClass(transitionClazz + '-leave-active');               
            });
    },

    addRippleEffect: function (e) {
        var target = e.target;
        
        while(target && target !== document.body){
            if(target.classList.contains('tap')){
                break;
            }    
            target = target.parentNode;
        }
        //if (!target.classList.contains('tap')) return false;

        // if(!e.target.classList.contains('game_download_url')) {
        //     e.preventDefault();    
        // } else {
        //     return true;
        // }
        
        // e.stopPropagation();

        var rect = target.getBoundingClientRect();
        var rippleInner = target.querySelector('.ripple-inner');
        //var rippleInner;
        if (!rippleInner) {
            ripple = document.createElement('div');
            ripple.className = 'ripple';
            var rippleInner = document.createElement('div');
            rippleInner.className = 'ripple-inner';
            ripple.appendChild(rippleInner);
            rippleInner.style.height = rippleInner.style.width = Math.min(rect.width, rect.height)*1.1 + 'px';
            target.appendChild(ripple);
        }
        rippleInner.classList.remove('activated');
        var top = e.touches[0].pageY - rect.top - rippleInner.offsetHeight / 2 - document.body.scrollTop;
        var left = e.touches[0].pageX - rect.left - rippleInner.offsetWidth / 2 - document.body.scrollLeft;
        rippleInner.style.top = top+ 'px';
        rippleInner.style.left = left+ 'px';
        rippleInner.classList.add('activated');
        // setTimeout(function(){
        //   window.location.href = target.getAttribute('href');  
        // },600);
        //return false;
    }
}