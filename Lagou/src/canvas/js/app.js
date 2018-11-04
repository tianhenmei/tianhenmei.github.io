!function(t) {
    function e(r) {
        if (n[r])
            return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, e),
        o.l = !0,
        o.exports
    }
    var n = {};
    e.m = t,
    e.c = n,
    e.i = function(t) {
        return t
    }
    ,
    e.d = function(t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }
    ,
    e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return e.d(n, "a", n),
        n
    }
    ,
    e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    e.p = "",
    e(e.s = 48)
}([function(t, e, n) {
    var r = n(39)("wks")
      , o = n(42)
      , i = n(1).Symbol
      , u = "function" == typeof i;
    (t.exports = function(t) {
        return r[t] || (r[t] = u && i[t] || (u ? i : o)("Symbol." + t))
    }
    ).store = r
}
, function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}
, function(t, e) {
    var n = t.exports = {
        version: "2.4.0"
    };
    "number" == typeof __e && (__e = n)
}
, function(t, e, n) {
    var r = n(13);
    t.exports = function(t) {
        if (!r(t))
            throw TypeError(t + " is not an object!");
        return t
    }
}
, function(t, e, n) {
    t.exports = !n(32)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(t, e, n) {
    var r = n(7)
      , o = n(21);
    t.exports = n(4) ? function(t, e, n) {
        return r.f(t, e, o(1, n))
    }
    : function(t, e, n) {
        return t[e] = n,
        t
    }
}
, function(t, e) {
    t.exports = {}
}
, function(t, e, n) {
    var r = n(3)
      , o = n(66)
      , i = n(83)
      , u = Object.defineProperty;
    e.f = n(4) ? Object.defineProperty : function(t, e, n) {
        if (r(t),
        e = i(e, !0),
        r(n),
        o)
            try {
                return u(t, e, n)
            } catch (t) {}
        if ("get"in n || "set"in n)
            throw TypeError("Accessors not supported!");
        return "value"in n && (t[e] = n.value),
        t
    }
}
, function(t, e, n) {
    var r = n(17);
    t.exports = function(t, e, n) {
        if (r(t),
        void 0 === e)
            return t;
        switch (n) {
        case 1:
            return function(n) {
                return t.call(e, n)
            }
            ;
        case 2:
            return function(n, r) {
                return t.call(e, n, r)
            }
            ;
        case 3:
            return function(n, r, o) {
                return t.call(e, n, r, o)
            }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(15)
      , i = r(o)
      , u = n(16)
      , c = r(u)
      , a = function t() {
        var e = this;
        (0,
        c.default)(this, t),
        this.promise = new i.default(function(t, n) {
            e.resolve = t,
            e.reject = n
        }
        )
    };
    e.default = a
}
, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}
, function(t, e, n) {
    var r = n(1)
      , o = n(2)
      , i = n(8)
      , u = n(5)
      , c = function(t, e, n) {
        var a, s, f, l = t & c.F, v = t & c.G, h = t & c.S, d = t & c.P, p = t & c.B, y = t & c.W, m = v ? o : o[e] || (o[e] = {}), x = m.prototype, g = v ? r : h ? r[e] : (r[e] || {}).prototype;
        v && (n = e);
        for (a in n)
            (s = !l && g && void 0 !== g[a]) && a in m || (f = s ? g[a] : n[a],
            m[a] = v && "function" != typeof g[a] ? n[a] : p && s ? i(f, r) : y && g[a] == f ? function(t) {
                var e = function(e, n, r) {
                    if (this instanceof t) {
                        switch (arguments.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(e);
                        case 2:
                            return new t(e,n)
                        }
                        return new t(e,n,r)
                    }
                    return t.apply(this, arguments)
                };
                return e.prototype = t.prototype,
                e
            }(f) : d && "function" == typeof f ? i(Function.call, f) : f,
            d && ((m.virtual || (m.virtual = {}))[a] = f,
            t & c.R && x && !x[a] && u(x, a, f)))
    };
    c.F = 1,
    c.G = 2,
    c.S = 4,
    c.P = 8,
    c.B = 16,
    c.W = 32,
    c.U = 64,
    c.R = 128,
    t.exports = c
}
, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}
, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(81)(!0);
    n(36)(String, "String", function(t) {
        this._t = String(t),
        this._i = 0
    }, function() {
        var t, e = this._t, n = this._i;
        return n >= e.length ? {
            value: void 0,
            done: !0
        } : (t = r(e, n),
        this._i += t.length,
        {
            value: t,
            done: !1
        })
    })
}
, function(t, e, n) {
    t.exports = {
        default: n(60),
        __esModule: !0
    }
}
, function(t, e, n) {
    "use strict";
    e.__esModule = !0,
    e.default = function(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
}
, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t)
            throw TypeError(t + " is not a function!");
        return t
    }
}
, function(t, e, n) {
    var r = n(10)
      , o = n(0)("toStringTag")
      , i = "Arguments" == r(function() {
        return arguments
    }())
      , u = function(t, e) {
        try {
            return t[e]
        } catch (t) {}
    };
    t.exports = function(t) {
        var e, n, c;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = u(e = Object(t), o)) ? n : i ? r(e) : "Object" == (c = r(e)) && "function" == typeof e.callee ? "Arguments" : c
    }
}
, function(t, e) {
    t.exports = function(t) {
        if (void 0 == t)
            throw TypeError("Can't call method on  " + t);
        return t
    }
}
, function(t, e, n) {
    var r = n(13)
      , o = n(1).document
      , i = r(o) && r(o.createElement);
    t.exports = function(t) {
        return i ? o.createElement(t) : {}
    }
}
, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}
, function(t, e, n) {
    var r = n(7).f
      , o = n(12)
      , i = n(0)("toStringTag");
    t.exports = function(t, e, n) {
        t && !o(t = n ? t : t.prototype, i) && r(t, i, {
            configurable: !0,
            value: e
        })
    }
}
, function(t, e, n) {
    var r = n(39)("keys")
      , o = n(42);
    t.exports = function(t) {
        return r[t] || (r[t] = o(t))
    }
}
, function(t, e) {
    var n = Math.ceil
      , r = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
    }
}
, function(t, e, n) {
    var r = n(68)
      , o = n(19);
    t.exports = function(t) {
        return r(o(t))
    }
}
, function(t, e, n) {
    var r = n(24)
      , o = Math.min;
    t.exports = function(t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0
    }
}
, function(t, e, n) {
    var r = n(18)
      , o = n(0)("iterator")
      , i = n(6);
    t.exports = n(2).getIteratorMethod = function(t) {
        if (void 0 != t)
            return t[o] || t["@@iterator"] || i[r(t)]
    }
}
, function(t, e, n) {
    n(87);
    for (var r = n(1), o = n(5), i = n(6), u = n(0)("toStringTag"), c = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], a = 0; a < 5; a++) {
        var s = c[a]
          , f = r[s]
          , l = f && f.prototype;
        l && !l[u] && o(l, u, s),
        i[s] = i.Array
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(57),
        __esModule: !0
    }
}
, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = n(53)
      , o = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(r);
    e.default = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                (0,
                o.default)(t, r.key, r)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n),
            r && t(e, r),
            e
        }
    }()
}
, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}
, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}
, function(t, e, n) {
    t.exports = n(1).document && document.documentElement
}
, function(t, e, n) {
    var r = n(6)
      , o = n(0)("iterator")
      , i = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (r.Array === t || i[o] === t)
    }
}
, function(t, e, n) {
    var r = n(3);
    t.exports = function(t, e, n, o) {
        try {
            return o ? e(r(n)[0], n[1]) : e(n)
        } catch (e) {
            var i = t.return;
            throw void 0 !== i && r(i.call(t)),
            e
        }
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(38)
      , o = n(11)
      , i = n(78)
      , u = n(5)
      , c = n(12)
      , a = n(6)
      , s = n(69)
      , f = n(22)
      , l = n(74)
      , v = n(0)("iterator")
      , h = !([].keys && "next"in [].keys())
      , d = function() {
        return this
    };
    t.exports = function(t, e, n, p, y, m, x) {
        s(n, e, p);
        var g, _, w, b = function(t) {
            if (!h && t in k)
                return k[t];
            switch (t) {
            case "keys":
            case "values":
                return function() {
                    return new n(this,t)
                }
            }
            return function() {
                return new n(this,t)
            }
        }, M = e + " Iterator", E = "values" == y, j = !1, k = t.prototype, L = k[v] || k["@@iterator"] || y && k[y], O = L || b(y), S = y ? E ? b("entries") : O : void 0, P = "Array" == e ? k.entries || L : L;
        if (P && (w = l(P.call(new t))) !== Object.prototype && (f(w, M, !0),
        r || c(w, v) || u(w, v, d)),
        E && L && "values" !== L.name && (j = !0,
        O = function() {
            return L.call(this)
        }
        ),
        r && !x || !h && !j && k[v] || u(k, v, O),
        a[e] = O,
        a[M] = d,
        y)
            if (g = {
                values: E ? O : b("values"),
                keys: m ? O : b("keys"),
                entries: S
            },
            x)
                for (_ in g)
                    _ in k || i(k, _, g[_]);
            else
                o(o.P + o.F * (h || j), e, g);
        return g
    }
}
, function(t, e, n) {
    var r = n(0)("iterator")
      , o = !1;
    try {
        var i = [7][r]();
        i.return = function() {
            o = !0
        }
        ,
        Array.from(i, function() {
            throw 2
        })
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !o)
            return !1;
        var n = !1;
        try {
            var i = [7]
              , u = i[r]();
            u.next = function() {
                return {
                    done: n = !0
                }
            }
            ,
            i[r] = function() {
                return u
            }
            ,
            t(i)
        } catch (t) {}
        return n
    }
}
, function(t, e) {
    t.exports = !0
}
, function(t, e, n) {
    var r = n(1)
      , o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    t.exports = function(t) {
        return o[t] || (o[t] = {})
    }
}
, function(t, e, n) {
    var r, o, i, u = n(8), c = n(67), a = n(33), s = n(20), f = n(1), l = f.process, v = f.setImmediate, h = f.clearImmediate, d = f.MessageChannel, p = 0, y = {}, m = function() {
        var t = +this;
        if (y.hasOwnProperty(t)) {
            var e = y[t];
            delete y[t],
            e()
        }
    }, x = function(t) {
        m.call(t.data)
    };
    v && h || (v = function(t) {
        for (var e = [], n = 1; arguments.length > n; )
            e.push(arguments[n++]);
        return y[++p] = function() {
            c("function" == typeof t ? t : Function(t), e)
        }
        ,
        r(p),
        p
    }
    ,
    h = function(t) {
        delete y[t]
    }
    ,
    "process" == n(10)(l) ? r = function(t) {
        l.nextTick(u(m, t, 1))
    }
    : d ? (o = new d,
    i = o.port2,
    o.port1.onmessage = x,
    r = u(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function(t) {
        f.postMessage(t + "", "*")
    }
    ,
    f.addEventListener("message", x, !1)) : r = "onreadystatechange"in s("script") ? function(t) {
        a.appendChild(s("script")).onreadystatechange = function() {
            a.removeChild(this),
            m.call(t)
        }
    }
    : function(t) {
        setTimeout(u(m, t, 1), 0)
    }
    ),
    t.exports = {
        set: v,
        clear: h
    }
}
, function(t, e, n) {
    var r = n(19);
    t.exports = function(t) {
        return Object(r(t))
    }
}
, function(t, e) {
    var n = 0
      , r = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
    }
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t) {
        if (t.offsetX)
            return new x.default(t.offsetX,t.offsetY);
        var e = t.target.getBoundingClientRect()
          , n = e.left
          , r = e.top
          , o = t.targetTouches[0]
          , i = o.pageX
          , u = o.pageY;
        return new x.default(Math.floor(i - n),Math.floor(u - r))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(54)
      , u = r(i)
      , c = n(55)
      , a = r(c)
      , s = n(29)
      , f = r(s)
      , l = n(16)
      , v = r(l)
      , h = n(30)
      , d = r(h)
      , p = n(9)
      , y = r(p)
      , m = n(50)
      , x = r(m)
      , g = n(49)
      , _ = r(g)
      , w = function() {
        function t(e) {
            (0,
            v.default)(this, t),
            this.pos = e
        }
        return (0,
        d.default)(t, [{
            key: "render",
            value: function(t, e) {
                var n = Math.pow(40, 2)
                  , r = !0
                  , o = !1
                  , i = void 0;
                try {
                    for (var u, c = (0,
                    f.default)(e); !(r = (u = c.next()).done); r = !0) {
                        var a = u.value
                          , s = this.pos.dist2(a.pos);
                        s < n && (t.beginPath(),
                        t.moveTo(this.pos.x, this.pos.y),
                        t.lineTo(a.pos.x, a.pos.y),
                        t.strokeStyle = "rgba(255, 255, 255, " + .6 * (1 - Math.pow(s / n, .5)) + ")",
                        t.stroke())
                    }
                } catch (t) {
                    o = !0,
                    i = t
                } finally {
                    try {
                        !r && c.return && c.return()
                    } finally {
                        if (o)
                            throw i
                    }
                }
            }
        }]),
        t
    }();
    e.default = function(t) {
        function e(e) {
            if (!m && (m = !0,
            t.classList.add("drawing"),
            s.classList.add("animationstart"),
            e)) {
                var n = s.getBoundingClientRect()
                  , r = n.left
                  , o = (n.right,
                n.top)
                  , i = (n.bottom,
                e.targetTouches[0])
                  , u = i.pageX
                  , c = i.pageY;
                s.style.transformOrigin = u - r + "px " + (c - o) + "px",
                s.style.transform = "scale(0)"
            }
        }
        function n(t) {
            var e = new w(t);
            e.render(v, g),
            g.push(e)
        }
        function r() {
            v.clearRect(0, 0, l.width, l.height),
            g.splice(0, g.length)
        }
        function i(t, e, n, r, o) {
            var i = g.map(function(t) {
                return t.pos.x
            })
              , u = g.map(function(t) {
                return t.pos.y
            })
              , c = Math.max(Math.min.apply(Math, (0,
            a.default)(i)) * p, 0)
              , s = Math.min(Math.max.apply(Math, (0,
            a.default)(i)) * p, l.width)
              , f = Math.max(Math.min.apply(Math, (0,
            a.default)(u)) * p, 0)
              , v = Math.min(Math.max.apply(Math, (0,
            a.default)(u)) * p, l.height)
              , h = s - c
              , d = v - f
              , y = Math.min(1, o / d)
              , m = d * y
              , x = n + (o - m) / 2
              , _ = h * y
              , w = e + (r - _) / 2;
            t.drawImage(l, c, f, h, d, w, x, _, m)
        }
        var c = new y.default
          , s = t.querySelector("img")
          , l = t.querySelector("canvas")
          , v = l.getContext("2d")
          , h = l.offsetWidth
          , d = l.offsetHeight
          , p = window.devicePixelRatio || 1;
        l.width = h * p,
        l.height = d * p,
        v.scale(p, p);
        var m = !1
          , g = []
          , b = 0
          , M = function(t) {
            var e = Date.now();
            e - b > 30 && (n(o(t)),
            b = e)
        }
          , E = function t() {
            l.removeEventListener("touchmove", M, !1),
            document.removeEventListener("touchend", t, !1),
            document.removeEventListener("touchcancel", t, !1)
        }
          , j = function(t) {
            e(t),
            n(o(t)),
            t.preventDefault(),
            l.addEventListener("touchmove", M, !1),
            document.addEventListener("touchend", E, !1),
            document.addEventListener("touchcancel", E, !1)
        };
        l.addEventListener("touchstart", j, !1);
        var k = t.querySelector(".js-clear");
        k.addEventListener("click", r, !1);
        var L = 0
          , O = function() {
            r(),
            e();
            var t = (h - 320) / 2
              , o = (d + 240) / 2
              , i = Math.ceil(Math.random() * (_.default.length - 1));
            L = (i + L) % _.default.length;
            var c = !0
              , a = !1
              , s = void 0;
            try {
                for (var l, v = (0,
                f.default)(_.default[L]); !(c = (l = v.next()).done); c = !0) {
                    var p = l.value
                      , y = (0,
                    u.default)(p, 2)
                      , m = y[0]
                      , g = y[1];
                    n(new x.default(m + t,-g + o))
                }
            } catch (t) {
                a = !0,
                s = t
            } finally {
                try {
                    !c && v.return && v.return()
                } finally {
                    if (a)
                        throw s
                }
            }
        }
          , S = t.querySelector(".js-fill");
        S.addEventListener("click", O, !1);
        var P = t.querySelector(".js-done");
        return P.addEventListener("click", function t() {
            l.removeEventListener("touchstart", j, !1),
            k.removeEventListener("click", r, !1),
            S.removeEventListener("click", O, !1),
            P.removeEventListener("click", t, !1),
            c.resolve(i)
        }, !1),
        c.promise
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(9)
      , o = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(r);
    e.default = function(t) {
        var e = new o.default;
        return t.querySelector("button").addEventListener("click", e.resolve, !1),
        e.promise
    }
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(15)
      , i = r(o)
      , u = n(9)
      , c = r(u)
      , a = ["//www.qcloud.com/images/17h5summit/share-1.png", "//www.qcloud.com/images/17h5summit/share-2.png", "//www.qcloud.com/images/17h5summit/share-3.png", "//www.qcloud.com/images/17h5summit/share-4.png", "//www.qcloud.com/images/17h5summit/share-5.png", "//www.qcloud.com/images/17h5summit/share-6.png", "//www.qcloud.com/images/17h5summit/share-7.png"]
      , s = void 0
      , f = 0;
    !function() {
        var t = Math.ceil(Math.random() * (a.length - 1));
        f = (t + f) % a.length,
        s = new i.default(function(t) {
            var e = new Image;
            e.crossOrigin = "anonymous",
            e.src = a[f],
            e.onload = function() {
                t(e)
            }
        }
        )
    }(),
    e.default = function(t, e) {
        var n = new c.default
          , r = t.querySelector("canvas")
          , o = t.querySelector("img")
          , i = r.getContext("2d");
        return s.then(function(t) {
            var n = t.naturalWidth
              , u = t.naturalHeight;
            r.width = n,
            r.height = u,
            i.drawImage(t, 0, 0, n, u),
            e(i, 0, 160, n, 470),
            o.src = r.toDataURL()
        }),
        n.promise
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(9)
      , o = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(r);
    e.default = function(t) {
        function e() {
            t.classList.add("playing"),
            i.play(),
            t.classList.add("loading"),
            i.addEventListener("playing", function() {
                t.classList.remove("loading")
            }),
            i.addEventListener("waiting", function() {
                t.classList.add("loading")
            }, !1)
        }
        var n = new o.default
          , r = t.querySelector("img")
          , i = t.querySelector("video");
        t.querySelector("button").addEventListener("click", function() {
            i.pause(),
            n.resolve()
        }, !1),
        i.addEventListener("ended", n.resolve, !1);
        return /iPhone/i.test(navigator.platform) && t.addEventListener("touchstart", function e() {
            i.play(),
            i.pause(),
            t.removeEventListener("touchstart", e, !1)
        }, !1),
        t.addEventListener("touchstart", function n(o) {
            function i(t, e, n, r, o) {
                var i = t.targetTouches[0]
                  , u = i.pageX
                  , c = i.pageY
                  , s = (u - a.left) / a.width
                  , f = (c - a.top) / a.height;
                return s >= e && s <= n && f >= r && f <= o
            }
            o.preventDefault();
            var u = !1
              , c = !1
              , a = r.getBoundingClientRect()
              , s = function r(o) {
                !u && i(o, .2, 350 / 750, 400 / 1206, 600 / 1206) && (u = !0),
                !c && i(o, 400 / 750, .8, 250 / 1206, 450 / 1206) && (c = !0),
                u && c && (document.addEventListener("WeixinJSBridgeReady", e, !1),
                e(),
                t.removeEventListener("touchmove", r, !1),
                t.removeEventListener("touchstart", n, !1))
            }
              , f = function e() {
                t.removeEventListener("touchmove", s, !1),
                document.removeEventListener("touchend", e, !1),
                document.removeEventListener("touchcancel", e, !1)
            };
            t.addEventListener("touchmove", s, !1),
            document.addEventListener("touchend", f, !1),
            document.addEventListener("touchcancel", f, !1)
        }, !1),
        n.promise
    }
}
, function(t, e) {}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t) {
        return p && (p.classList.remove("active"),
        p.classList.add("animationstart")),
        p = document.querySelector(t),
        p.classList.add("active"),
        p
    }
    var i = n(15)
      , u = r(i);
    n(47);
    var c = n(46)
      , a = r(c)
      , s = n(44)
      , f = r(s)
      , l = n(43)
      , v = r(l)
      , h = n(45)
      , d = r(h);
    document.addEventListener("animationend", function(t) {
        t.target.classList.remove("animationstart")
    }, !1),
    document.addEventListener("webkitAnimationEnd", function(t) {
        t.target.classList.remove("animationstart")
    }, !1);
    var p = null;
    u.default.resolve().then(function() {
        return (0,
        a.default)(o(".stage-video"))
    }).then(function() {
        return (0,
        f.default)(o(".stage-poster"))
    }).then(function() {
        function t() {
            return (0,
            v.default)(o(".stage-draw")).then(e)
        }
        function e(e) {
            return (0,
            d.default)(o(".stage-result"), e).then(t)
        }
        return t()
    })
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = [[[171, 155], [176, 154], [181, 151], [187, 147], [191, 144], [194, 140], [197, 134], [199, 130], [200, 125], [200, 119], [200, 113], [199, 108], [196, 102], [193, 97], [190, 93], [187, 90], [182, 87], [177, 84], [171, 82], [165, 81], [160, 81], [155, 82], [149, 84], [144, 86], [140, 89], [135, 93], [133, 97], [130, 102], [128, 108], [126, 114], [126, 119], [126, 125], [128, 130], [130, 135], [132, 139], [136, 144], [140, 148], [145, 151], [150, 153], [155, 155], [161, 156], [167, 156], [149, 174], [143, 172], [138, 169], [134, 167], [128, 163], [125, 161], [121, 156], [117, 152], [114, 147], [111, 141], [109, 137], [108, 132], [106, 125], [106, 119], [106, 113], [107, 109], [108, 104], [110, 98], [111, 94], [115, 87], [118, 83], [122, 78], [125, 75], [129, 71], [135, 68], [140, 65], [144, 63], [150, 61], [154, 60], [161, 60], [167, 60], [172, 61], [176, 61], [182, 63], [188, 66], [192, 68], [198, 72], [200, 75], [205, 79], [208, 83], [212, 88], [214, 92], [217, 99], [218, 104], [219, 109], [220, 114], [220, 119], [220, 126], [219, 130], [217, 137], [215, 142], [213, 146], [209, 152], [207, 155], [202, 160], [198, 163], [194, 166], [188, 170], [184, 172], [178, 174], [173, 175], [168, 175], [161, 176], [155, 175], [149, 174], [185, 214], [192, 212], [198, 210], [203, 208], [207, 207], [212, 204], [220, 200], [223, 199], [227, 196], [232, 193], [237, 190], [242, 187], [246, 184], [253, 180], [257, 176], [259, 175], [263, 172], [271, 165], [274, 162], [277, 160], [283, 155], [285, 152], [290, 148], [294, 143], [297, 140], [303, 134], [304, 133], [311, 126], [311, 125], [316, 117], [312, 113], [309, 109], [306, 106], [301, 100], [298, 96], [297, 95], [293, 91], [289, 87], [282, 81], [280, 79], [273, 72], [272, 72], [268, 68], [264, 65], [256, 58], [254, 57], [249, 53], [242, 49], [238, 46], [233, 43], [229, 41], [227, 40], [221, 37], [213, 33], [209, 31], [203, 29], [198, 27], [194, 26], [186, 23], [185, 23], [176, 21], [171, 21], [166, 20], [161, 20], [153, 20], [148, 20], [143, 21], [139, 22], [132, 23], [130, 24], [121, 26], [115, 28], [113, 29], [108, 31], [100, 35], [97, 36], [92, 39], [85, 43], [82, 45], [78, 47], [75, 49], [68, 54], [62, 58], [58, 62], [54, 65], [52, 67], [47, 70], [40, 76], [37, 80], [33, 83], [29, 87], [26, 90], [20, 96], [16, 100], [13, 104], [12, 105], [5, 112], [2, 117], [1, 120], [3, 122], [9, 130], [12, 133], [16, 138], [19, 140], [25, 146], [26, 147], [30, 152], [37, 158], [41, 161], [43, 164], [48, 167], [54, 172], [58, 176], [60, 177], [65, 180], [68, 183], [75, 188], [81, 192], [87, 195], [88, 196], [94, 199], [98, 201], [104, 204], [111, 207], [116, 209], [120, 210], [126, 212], [130, 213], [135, 215], [142, 216], [145, 216], [153, 217], [156, 217], [162, 217], [172, 216], [173, 216], [182, 215], [185, 214], [264, 110], [148, 42], [164, 94], [222, 96], [181, 127], [95, 134], [138, 206], [55, 109], [264, 129], [127, 196], [62, 120], [148, 211], [105, 59], [86, 61], [233, 170], [214, 186], [173, 137], [189, 202], [101, 191], [154, 135], [274, 81], [74, 132], [266, 148], [267, 93], [269, 74], [151, 176], [205, 55], [82, 188], [110, 75], [227, 62], [213, 34], [179, 215], [160, 189], [73, 131], [75, 109], [245, 156], [194, 180], [144, 47], [103, 90], [279, 99]], [[93, 66], [88, 66], [83, 64], [87, 60], [91, 56], [95, 53], [99, 48], [103, 45], [107, 41], [108, 44], [109, 50], [109, 56], [109, 61], [107, 66], [102, 66], [96, 66], [127, 82], [133, 82], [139, 82], [145, 82], [150, 84], [155, 85], [153, 88], [149, 92], [145, 96], [141, 100], [138, 104], [133, 108], [129, 112], [125, 115], [124, 109], [123, 104], [123, 98], [123, 93], [123, 87], [123, 82], [146, 143], [142, 140], [138, 136], [134, 132], [132, 127], [137, 123], [140, 120], [145, 116], [149, 112], [152, 108], [157, 104], [161, 100], [165, 96], [169, 92], [173, 96], [177, 100], [181, 103], [184, 108], [186, 113], [182, 117], [178, 121], [175, 124], [171, 128], [167, 132], [163, 136], [158, 140], [154, 144], [150, 146], [190, 155], [184, 155], [178, 155], [172, 154], [167, 153], [166, 151], [170, 147], [174, 143], [179, 139], [183, 135], [186, 132], [190, 128], [193, 129], [194, 135], [194, 141], [194, 146], [194, 151], [192, 155], [212, 171], [217, 171], [224, 171], [229, 171], [234, 172], [235, 175], [232, 179], [227, 183], [223, 186], [219, 190], [215, 194], [211, 198], [209, 197], [208, 191], [208, 185], [208, 180], [208, 174], [210, 171], [208, 124], [207, 119], [205, 113], [203, 109], [199, 101], [195, 95], [192, 91], [191, 91], [186, 85], [181, 81], [177, 78], [173, 76], [169, 73], [160, 70], [157, 69], [152, 68], [146, 66], [141, 66], [136, 66], [130, 66], [125, 63], [125, 57], [125, 55], [125, 50], [124, 39], [123, 35], [123, 32], [120, 24], [119, 21], [116, 15], [113, 10], [110, 7], [105, 0], [104, 0], [96, 7], [96, 8], [96, 15], [100, 20], [103, 25], [102, 28], [96, 33], [92, 36], [92, 37], [87, 41], [83, 45], [76, 52], [75, 53], [67, 59], [67, 58], [62, 55], [58, 52], [50, 51], [48, 53], [44, 57], [45, 62], [50, 66], [54, 69], [58, 72], [60, 73], [66, 76], [74, 79], [79, 80], [85, 81], [90, 82], [94, 82], [103, 82], [104, 82], [107, 89], [106, 94], [107, 98], [107, 104], [108, 112], [109, 116], [110, 121], [112, 125], [115, 132], [116, 133], [121, 141], [125, 146], [127, 148], [130, 151], [137, 157], [140, 159], [144, 162], [152, 166], [156, 167], [160, 168], [163, 169], [172, 170], [178, 171], [184, 171], [190, 171], [192, 171], [192, 177], [192, 186], [192, 191], [192, 197], [193, 202], [194, 206], [197, 213], [199, 219], [201, 223], [202, 224], [208, 233], [212, 237], [215, 235], [217, 233], [223, 226], [220, 222], [217, 217], [215, 214], [220, 208], [221, 207], [226, 203], [232, 197], [236, 193], [238, 191], [242, 187], [248, 181], [253, 180], [254, 181], [259, 185], [262, 188], [268, 183], [274, 179], [271, 174], [270, 173], [265, 169], [261, 167], [255, 163], [248, 160], [243, 158], [239, 157], [233, 156], [229, 155], [224, 155], [217, 155], [213, 155], [210, 150], [210, 147], [210, 141], [210, 132], [209, 131], [208, 121], [117, 72], [106, 79], [172, 136], [82, 51], [133, 114], [217, 222], [235, 160], [185, 165], [119, 56], [266, 172], [197, 164], [233, 166], [115, 104], [114, 119], [194, 104], [199, 114], [148, 103], [206, 136], [249, 177], [146, 110], [104, 27], [203, 202], [160, 74], [109, 30], [106, 19], [227, 170], [68, 69], [251, 179], [123, 118], [92, 44], [66, 63], [207, 155], [205, 147], [190, 162], [193, 161], [165, 79], [202, 116], [103, 72], [136, 138], [112, 68]], [[246, 79], [241, 79], [236, 78], [229, 77], [224, 77], [219, 76], [213, 75], [208, 74], [202, 73], [197, 71], [192, 69], [186, 67], [188, 62], [192, 58], [196, 55], [200, 52], [206, 50], [211, 50], [218, 50], [223, 52], [228, 54], [233, 56], [238, 59], [242, 63], [246, 67], [249, 72], [252, 76], [251, 79], [198, 191], [204, 190], [209, 189], [215, 187], [220, 184], [224, 182], [228, 179], [233, 175], [237, 171], [240, 167], [243, 162], [246, 158], [248, 152], [250, 146], [249, 141], [243, 139], [238, 141], [237, 145], [234, 152], [232, 156], [228, 160], [225, 165], [220, 168], [216, 172], [211, 174], [206, 176], [199, 178], [194, 178], [188, 178], [183, 178], [178, 177], [173, 179], [171, 183], [175, 189], [180, 190], [186, 191], [191, 191], [196, 191], [126, 178], [126, 172], [126, 171], [120, 166], [120, 166], [113, 173], [113, 180], [115, 185], [114, 185], [116, 191], [120, 200], [120, 201], [127, 210], [126, 210], [125, 211], [120, 210], [113, 207], [110, 206], [99, 201], [96, 200], [91, 197], [88, 195], [85, 194], [78, 190], [75, 188], [70, 179], [69, 177], [69, 174], [68, 164], [68, 162], [70, 152], [69, 149], [66, 146], [59, 146], [57, 150], [55, 155], [55, 162], [55, 165], [52, 166], [47, 160], [44, 155], [45, 156], [41, 149], [39, 143], [38, 137], [38, 134], [38, 129], [40, 118], [41, 117], [43, 112], [47, 107], [52, 104], [56, 102], [62, 101], [71, 100], [76, 100], [77, 101], [82, 101], [91, 107], [90, 109], [89, 111], [84, 120], [84, 122], [82, 129], [81, 135], [81, 138], [85, 147], [84, 146], [94, 142], [93, 144], [95, 132], [96, 126], [98, 121], [100, 118], [104, 111], [108, 114], [107, 113], [112, 117], [116, 120], [126, 125], [127, 126], [138, 129], [137, 129], [143, 130], [148, 131], [160, 131], [161, 131], [168, 131], [176, 133], [181, 134], [186, 137], [189, 139], [190, 141], [192, 147], [192, 157], [195, 161], [200, 161], [204, 158], [205, 154], [205, 144], [205, 146], [202, 134], [199, 130], [196, 127], [192, 124], [184, 121], [180, 120], [175, 119], [171, 118], [163, 118], [163, 118], [151, 118], [145, 117], [145, 117], [140, 116], [129, 113], [128, 112], [123, 109], [115, 103], [114, 101], [112, 98], [110, 95], [109, 86], [111, 79], [115, 74], [119, 71], [120, 71], [125, 69], [137, 68], [141, 68], [146, 70], [151, 72], [155, 73], [161, 78], [166, 81], [171, 84], [170, 84], [181, 89], [187, 91], [190, 92], [192, 92], [203, 95], [208, 96], [213, 97], [216, 98], [223, 100], [223, 100], [220, 106], [216, 116], [215, 121], [214, 123], [213, 128], [215, 137], [220, 140], [219, 140], [225, 137], [226, 133], [227, 123], [230, 116], [232, 110], [232, 110], [236, 105], [239, 101], [245, 101], [255, 101], [260, 102], [263, 102], [269, 103], [273, 105], [276, 107], [279, 115], [279, 117], [278, 126], [277, 128], [275, 134], [272, 145], [272, 144], [269, 155], [268, 157], [265, 165], [262, 169], [260, 172], [255, 180], [255, 180], [250, 185], [246, 189], [240, 193], [235, 196], [231, 198], [229, 200], [222, 203], [213, 206], [214, 206], [209, 208], [203, 210], [194, 212], [187, 213], [184, 213], [177, 214], [173, 215], [165, 215], [166, 215], [159, 215], [148, 212], [143, 208], [141, 207], [140, 205], [134, 198], [130, 191], [128, 186], [127, 182], [197, 233], [199, 233], [205, 232], [211, 230], [213, 229], [224, 226], [223, 226], [230, 223], [237, 220], [243, 217], [247, 214], [250, 213], [256, 208], [259, 206], [265, 200], [267, 199], [273, 192], [276, 187], [278, 185], [282, 178], [283, 177], [287, 169], [288, 167], [290, 161], [293, 153], [294, 149], [296, 142], [296, 140], [298, 132], [300, 125], [300, 119], [300, 115], [300, 112], [299, 104], [296, 98], [294, 94], [290, 90], [283, 85], [283, 85], [278, 83], [274, 75], [273, 72], [272, 69], [270, 65], [267, 59], [262, 52], [259, 49], [255, 46], [249, 41], [244, 38], [238, 34], [235, 33], [228, 30], [223, 29], [216, 28], [210, 28], [205, 28], [201, 29], [199, 29], [201, 24], [202, 21], [207, 12], [208, 11], [209, 8], [207, 1], [201, 0], [197, 4], [195, 7], [193, 11], [187, 21], [186, 23], [183, 29], [180, 33], [178, 37], [173, 45], [172, 47], [170, 51], [166, 54], [158, 50], [155, 49], [152, 48], [154, 41], [157, 35], [160, 31], [160, 31], [164, 24], [167, 18], [169, 15], [172, 9], [170, 1], [166, 0], [161, 3], [160, 5], [156, 11], [154, 16], [150, 21], [147, 27], [145, 31], [142, 36], [138, 42], [137, 45], [133, 46], [127, 46], [118, 48], [114, 49], [108, 53], [103, 56], [102, 57], [95, 64], [94, 64], [91, 70], [89, 73], [86, 80], [79, 79], [76, 78], [68, 78], [64, 79], [56, 80], [54, 80], [47, 82], [40, 86], [40, 86], [32, 92], [31, 92], [27, 98], [23, 103], [20, 109], [18, 115], [17, 120], [16, 126], [16, 128], [16, 134], [17, 144], [18, 146], [19, 151], [22, 160], [22, 160], [25, 166], [29, 172], [33, 178], [35, 181], [40, 186], [45, 191], [46, 192], [51, 196], [57, 201], [60, 204], [65, 207], [68, 209], [74, 213], [80, 216], [81, 217], [91, 222], [94, 223], [98, 225], [107, 228], [109, 229], [114, 231], [121, 233], [129, 235], [132, 235], [140, 236], [146, 237], [150, 237], [156, 237], [157, 237], [167, 237], [172, 237], [175, 237], [183, 236], [187, 235], [193, 234], [110, 215], [270, 89], [240, 159], [43, 176], [105, 95], [116, 70], [204, 145], [178, 71], [102, 211], [92, 69], [174, 58], [203, 141], [240, 81], [234, 78], [245, 201], [244, 212], [159, 125], [270, 182], [74, 83], [219, 107], [66, 170], [145, 55], [177, 225], [63, 186], [59, 168], [196, 142], [35, 112], [83, 101], [207, 96], [36, 168], [29, 135], [269, 187], [289, 153], [185, 50], [165, 77], [186, 222], [283, 133], [267, 77], [184, 73], [112, 210]], [[97, 134], [93, 132], [88, 128], [85, 123], [83, 118], [82, 113], [83, 107], [85, 102], [89, 98], [94, 95], [99, 93], [104, 92], [110, 94], [115, 96], [119, 100], [122, 104], [124, 109], [124, 114], [123, 121], [121, 126], [117, 130], [113, 133], [107, 134], [102, 135], [134, 202], [128, 199], [124, 197], [120, 192], [117, 187], [116, 182], [115, 176], [116, 171], [118, 165], [121, 161], [125, 157], [130, 154], [135, 152], [140, 152], [146, 152], [151, 154], [156, 157], [160, 161], [163, 165], [165, 171], [166, 177], [166, 181], [164, 188], [162, 192], [158, 196], [153, 199], [148, 202], [142, 203], [137, 202], [184, 234], [193, 232], [198, 230], [203, 228], [206, 227], [211, 225], [216, 222], [219, 220], [228, 225], [232, 227], [237, 230], [241, 232], [246, 234], [254, 236], [259, 237], [262, 237], [268, 234], [268, 232], [267, 223], [265, 218], [263, 212], [262, 211], [259, 206], [255, 198], [254, 196], [249, 188], [248, 187], [244, 182], [241, 178], [237, 172], [235, 170], [228, 162], [226, 159], [222, 154], [219, 151], [217, 148], [212, 143], [209, 139], [203, 133], [201, 130], [198, 128], [192, 122], [190, 119], [184, 113], [181, 110], [178, 107], [173, 102], [169, 99], [165, 95], [161, 91], [158, 88], [152, 82], [146, 78], [142, 74], [141, 73], [136, 69], [131, 65], [126, 61], [123, 59], [119, 55], [112, 49], [110, 48], [105, 44], [100, 41], [96, 38], [91, 35], [87, 32], [80, 28], [75, 25], [73, 24], [68, 21], [59, 17], [55, 16], [52, 15], [44, 14], [40, 15], [39, 22], [40, 27], [42, 31], [45, 39], [46, 40], [51, 49], [51, 50], [56, 58], [54, 63], [51, 68], [49, 72], [47, 79], [45, 84], [45, 85], [43, 91], [42, 96], [41, 105], [40, 108], [40, 118], [40, 119], [40, 125], [40, 130], [42, 140], [42, 142], [44, 148], [46, 155], [48, 161], [50, 166], [52, 170], [53, 173], [56, 178], [60, 185], [63, 189], [67, 194], [70, 198], [73, 201], [79, 207], [80, 208], [88, 214], [92, 216], [96, 219], [100, 222], [107, 225], [111, 227], [116, 229], [120, 231], [127, 233], [129, 234], [139, 236], [145, 236], [147, 237], [152, 237], [161, 237], [164, 237], [170, 237], [178, 235], [182, 235], [187, 75], [182, 73], [178, 69], [176, 64], [175, 58], [176, 53], [179, 48], [183, 45], [188, 43], [194, 42], [199, 44], [204, 47], [207, 52], [209, 57], [208, 63], [206, 68], [203, 72], [198, 75], [193, 76], [187, 76], [269, 162], [272, 154], [273, 149], [275, 144], [275, 139], [276, 132], [277, 129], [277, 123], [277, 115], [277, 110], [276, 106], [276, 100], [274, 93], [273, 87], [272, 85], [270, 79], [269, 74], [266, 68], [263, 62], [260, 56], [258, 54], [255, 49], [252, 45], [248, 40], [242, 35], [238, 31], [235, 28], [231, 24], [227, 22], [223, 19], [217, 15], [213, 13], [207, 10], [203, 9], [198, 7], [190, 4], [187, 3], [179, 2], [175, 1], [168, 0], [163, 0], [158, 0], [151, 0], [148, 0], [142, 1], [136, 2], [130, 3], [124, 5], [120, 6], [116, 8], [110, 10], [103, 14], [101, 15], [96, 18], [97, 21], [103, 25], [108, 29], [111, 31], [116, 35], [121, 38], [126, 42], [128, 44], [133, 47], [139, 53], [144, 56], [147, 59], [150, 62], [156, 67], [160, 71], [165, 75], [168, 78], [173, 82], [176, 85], [180, 89], [184, 93], [187, 96], [193, 102], [194, 103], [199, 108], [204, 113], [208, 117], [212, 121], [214, 124], [219, 129], [222, 133], [227, 138], [229, 141], [234, 147], [238, 151], [240, 155], [244, 160], [246, 162], [251, 168], [253, 171], [257, 176], [261, 179], [263, 174], [266, 169], [267, 165], [167, 154], [49, 103], [177, 77], [109, 59], [129, 10], [223, 72], [198, 15], [132, 130], [170, 126], [218, 30], [262, 160], [188, 9], [53, 167], [62, 185], [201, 172], [224, 200], [143, 23], [174, 212], [248, 49], [121, 30], [157, 93], [240, 116], [249, 227], [153, 99], [148, 82], [186, 41], [67, 38], [260, 64], [89, 144], [77, 45], [105, 60], [175, 227], [151, 212], [133, 140], [258, 160], [242, 217], [241, 197], [54, 109], [105, 168], [178, 119]], [[121, 162], [119, 159], [118, 153], [118, 146], [118, 141], [118, 136], [118, 129], [118, 124], [118, 119], [118, 113], [118, 108], [119, 102], [122, 96], [127, 93], [132, 92], [136, 92], [142, 92], [147, 92], [154, 92], [160, 92], [164, 92], [170, 92], [176, 92], [182, 92], [187, 92], [193, 95], [196, 98], [198, 103], [198, 109], [198, 115], [198, 121], [198, 127], [198, 132], [198, 137], [198, 142], [198, 148], [198, 154], [197, 159], [194, 164], [190, 167], [184, 168], [178, 168], [173, 168], [167, 168], [161, 168], [157, 168], [150, 168], [145, 168], [140, 168], [134, 168], [128, 167], [123, 164], [250, 166], [256, 161], [263, 152], [266, 147], [268, 142], [269, 141], [270, 138], [272, 131], [273, 130], [276, 115], [276, 112], [277, 104], [277, 103], [278, 97], [278, 87], [283, 84], [283, 84], [290, 79], [290, 79], [296, 69], [296, 62], [291, 62], [293, 62], [286, 62], [280, 69], [280, 69], [268, 73], [271, 73], [265, 72], [260, 70], [256, 63], [255, 62], [242, 62], [242, 66], [243, 71], [244, 74], [246, 76], [252, 82], [254, 84], [257, 94], [257, 95], [257, 97], [256, 108], [256, 109], [254, 121], [253, 123], [252, 127], [249, 134], [247, 138], [245, 143], [240, 147], [238, 149], [228, 154], [228, 145], [228, 140], [228, 143], [228, 134], [228, 127], [228, 121], [228, 119], [228, 114], [228, 101], [228, 101], [228, 96], [228, 89], [227, 83], [225, 79], [221, 75], [213, 70], [207, 69], [207, 69], [203, 69], [201, 56], [201, 54], [201, 52], [206, 43], [206, 41], [204, 34], [201, 29], [201, 26], [201, 15], [201, 18], [201, 4], [201, 7], [195, 0], [189, 0], [183, 0], [181, 0], [180, 8], [180, 13], [180, 11], [180, 17], [180, 22], [176, 33], [177, 33], [174, 46], [173, 42], [176, 49], [179, 52], [180, 65], [180, 65], [177, 69], [168, 69], [162, 69], [157, 69], [154, 69], [153, 69], [147, 69], [136, 68], [136, 63], [136, 58], [136, 53], [139, 51], [143, 41], [143, 44], [139, 32], [136, 29], [136, 25], [136, 20], [136, 10], [136, 6], [136, 1], [134, 0], [126, 0], [127, 0], [116, 2], [116, 8], [116, 7], [116, 11], [116, 24], [116, 25], [116, 30], [110, 40], [110, 42], [111, 45], [112, 47], [116, 56], [116, 64], [114, 69], [109, 69], [109, 69], [104, 70], [93, 77], [91, 81], [89, 86], [88, 91], [88, 95], [88, 104], [88, 109], [88, 114], [88, 112], [88, 126], [88, 132], [88, 134], [88, 136], [88, 149], [88, 153], [83, 152], [82, 151], [73, 144], [75, 146], [70, 140], [65, 130], [64, 125], [63, 123], [62, 118], [60, 108], [60, 102], [60, 104], [59, 97], [59, 93], [62, 84], [68, 79], [72, 74], [71, 75], [74, 69], [75, 65], [70, 62], [60, 64], [58, 68], [57, 70], [51, 73], [48, 73], [44, 73], [37, 68], [35, 67], [30, 62], [28, 62], [22, 62], [22, 73], [21, 71], [29, 81], [29, 82], [38, 86], [39, 90], [39, 94], [39, 104], [39, 103], [40, 110], [41, 116], [42, 123], [44, 129], [45, 133], [45, 135], [48, 142], [53, 152], [52, 150], [55, 154], [59, 159], [66, 166], [72, 170], [74, 171], [81, 173], [85, 174], [91, 178], [90, 177], [94, 183], [104, 190], [110, 191], [111, 191], [111, 193], [111, 203], [112, 211], [113, 217], [115, 221], [119, 227], [119, 227], [124, 231], [130, 235], [131, 235], [144, 237], [140, 237], [149, 237], [158, 237], [164, 237], [169, 237], [171, 237], [180, 237], [182, 236], [191, 232], [191, 232], [200, 224], [202, 219], [203, 217], [205, 209], [205, 210], [205, 199], [205, 198], [205, 192], [214, 189], [217, 187], [223, 182], [223, 182], [229, 175], [236, 173], [243, 171], [245, 169], [246, 169], [204, 153], [125, 57], [176, 208], [192, 91], [181, 228], [23, 64], [148, 222], [82, 163], [217, 103], [127, 233], [56, 147], [158, 192], [113, 34], [100, 73], [247, 142], [257, 152], [151, 172], [215, 179], [117, 201], [183, 198], [218, 77], [46, 101], [281, 81], [215, 83], [198, 86], [151, 171], [171, 80], [113, 204], [114, 94], [192, 35], [168, 70], [213, 189], [191, 175], [75, 171], [56, 142], [275, 81], [235, 158], [130, 39], [114, 102], [223, 94]], [[308, 208], [308, 207], [311, 202], [316, 190], [316, 187], [317, 184], [316, 175], [316, 173], [315, 169], [313, 162], [311, 157], [308, 152], [302, 145], [297, 140], [294, 139], [293, 138], [289, 136], [284, 134], [271, 131], [267, 131], [265, 131], [261, 132], [253, 134], [248, 130], [246, 127], [242, 120], [242, 120], [238, 114], [234, 108], [229, 101], [226, 96], [223, 92], [220, 87], [220, 87], [219, 82], [224, 76], [227, 70], [228, 67], [230, 60], [231, 59], [230, 49], [229, 43], [229, 40], [226, 33], [222, 27], [222, 26], [214, 18], [214, 18], [209, 14], [202, 11], [197, 10], [189, 9], [188, 9], [181, 10], [171, 13], [166, 16], [161, 19], [160, 21], [157, 24], [153, 29], [152, 31], [147, 43], [147, 46], [146, 54], [146, 56], [148, 62], [151, 71], [154, 75], [155, 76], [159, 82], [159, 82], [152, 90], [147, 95], [144, 99], [144, 99], [140, 104], [132, 100], [131, 99], [120, 95], [122, 96], [115, 95], [110, 96], [103, 97], [100, 98], [90, 105], [88, 103], [84, 99], [82, 96], [79, 94], [74, 88], [72, 85], [65, 77], [64, 75], [62, 73], [58, 65], [59, 64], [62, 54], [62, 50], [61, 46], [59, 39], [56, 35], [53, 31], [49, 27], [46, 25], [36, 22], [28, 21], [23, 23], [24, 22], [17, 25], [11, 29], [7, 33], [5, 35], [2, 39], [0, 51], [0, 52], [1, 57], [2, 63], [5, 68], [7, 72], [11, 76], [19, 81], [24, 83], [25, 83], [30, 83], [43, 80], [45, 79], [47, 78], [54, 84], [56, 85], [60, 91], [64, 95], [66, 98], [73, 106], [72, 105], [81, 114], [79, 113], [79, 123], [78, 130], [79, 135], [79, 138], [82, 146], [84, 151], [84, 150], [87, 155], [90, 158], [100, 165], [101, 165], [113, 167], [111, 167], [118, 167], [122, 166], [133, 161], [134, 161], [140, 156], [145, 150], [148, 145], [149, 140], [150, 136], [150, 135], [150, 128], [147, 118], [148, 114], [151, 110], [155, 106], [157, 103], [164, 96], [163, 97], [171, 92], [175, 93], [179, 95], [184, 95], [193, 95], [197, 94], [202, 93], [206, 91], [211, 94], [211, 94], [217, 104], [221, 110], [221, 110], [223, 113], [230, 123], [230, 124], [234, 129], [239, 138], [241, 140], [238, 142], [236, 144], [229, 151], [225, 158], [223, 163], [222, 168], [222, 169], [221, 175], [221, 186], [222, 190], [224, 196], [226, 201], [228, 204], [232, 211], [236, 215], [240, 219], [239, 218], [250, 225], [255, 227], [258, 227], [260, 228], [272, 228], [277, 227], [282, 225], [285, 225], [293, 220], [293, 221], [299, 217], [306, 210], [262, 161], [216, 43], [137, 144], [227, 164], [98, 143], [57, 78], [48, 39], [142, 107], [276, 173], [17, 37], [120, 106], [30, 33], [199, 22], [209, 24], [278, 183], [280, 206], [40, 76], [257, 211], [52, 58], [124, 138], [305, 146], [123, 113], [269, 154], [302, 145], [260, 132], [38, 25], [193, 75], [59, 58], [173, 66], [231, 165], [219, 71], [274, 215], [249, 216], [159, 97], [130, 108], [313, 164], [289, 188], [206, 49], [176, 22], [269, 143]]]
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(16)
      , i = r(o)
      , u = n(30)
      , c = r(u)
      , a = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            (0,
            i.default)(this, t),
            this.x = e,
            this.y = n
        }
        return (0,
        c.default)(t, [{
            key: "add",
            value: function(t) {
                return new this.constructor(this.x + t.x,this.y + t.y)
            }
        }, {
            key: "sub",
            value: function(t) {
                return new this.constructor(this.x - t.x,this.y - t.y)
            }
        }, {
            key: "mul",
            value: function(t) {
                return new this.constructor(this.x * t.x,this.y * t.y)
            }
        }, {
            key: "div",
            value: function(t) {
                return new this.constructor(this.x / t.x,this.y / t.y)
            }
        }, {
            key: "scale",
            value: function(t) {
                return new this.constructor(this.x * t,this.y * t)
            }
        }, {
            key: "mutableSet",
            value: function(t) {
                return this.x = t.x,
                this.y = t.y,
                this
            }
        }, {
            key: "mutableAdd",
            value: function(t) {
                return this.x += t.x,
                this.y += t.y,
                this
            }
        }, {
            key: "mutableSub",
            value: function(t) {
                return this.x -= t.x,
                this.y -= t.y,
                this
            }
        }, {
            key: "mutableMul",
            value: function(t) {
                return this.x *= t.x,
                this.y *= t.y,
                this
            }
        }, {
            key: "mutableDiv",
            value: function(t) {
                return this.x /= t.x,
                this.y /= t.y,
                this
            }
        }, {
            key: "mutableScale",
            value: function(t) {
                return this.x *= t,
                this.y *= t,
                this
            }
        }, {
            key: "equals",
            value: function(t) {
                return this.x == t.x && this.y == t.y
            }
        }, {
            key: "epsilonEquals",
            value: function(t, e) {
                return Math.abs(this.x - t.x) <= e && Math.abs(this.y - t.y) <= e
            }
        }, {
            key: "length",
            value: function(t) {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }
        }, {
            key: "length2",
            value: function(t) {
                return this.x * this.x + this.y * this.y
            }
        }, {
            key: "dist",
            value: function(t) {
                return Math.sqrt(this.dist2(t))
            }
        }, {
            key: "dist2",
            value: function(t) {
                var e = t.x - this.x
                  , n = t.y - this.y;
                return e * e + n * n
            }
        }, {
            key: "normal",
            value: function() {
                var t = Math.sqrt(this.x * this.x + this.y * this.y);
                return new this.constructor(this.x / t,this.y / t)
            }
        }, {
            key: "dot",
            value: function(t) {
                return this.x * t.x + this.y * t.y
            }
        }, {
            key: "angle",
            value: function(t) {
                return Math.atan2(this.x * t.y - this.y * t.x, this.x * t.x + this.y * t.y)
            }
        }, {
            key: "angle2",
            value: function(t, e) {
                return t.sub(this).angle(e.sub(this))
            }
        }, {
            key: "rotate",
            value: function(t, e) {
                var n = this.x - t.x
                  , r = this.y - t.y;
                return new this.constructor(n * Math.cos(e) - r * Math.sin(e) + t.x,n * Math.sin(e) + r * Math.cos(e) + t.y)
            }
        }, {
            key: "toString",
            value: function() {
                return "(" + this.x + ", " + this.y + ")"
            }
        }]),
        t
    }();
    e.default = a
}
, function(t, e, n) {
    t.exports = {
        default: n(56),
        __esModule: !0
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(58),
        __esModule: !0
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(59),
        __esModule: !0
    }
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var o = n(52)
      , i = r(o)
      , u = n(29)
      , c = r(u);
    e.default = function() {
        function t(t, e) {
            var n = []
              , r = !0
              , o = !1
              , i = void 0;
            try {
                for (var u, a = (0,
                c.default)(t); !(r = (u = a.next()).done) && (n.push(u.value),
                !e || n.length !== e); r = !0)
                    ;
            } catch (t) {
                o = !0,
                i = t
            } finally {
                try {
                    !r && a.return && a.return()
                } finally {
                    if (o)
                        throw i
                }
            }
            return n
        }
        return function(e, n) {
            if (Array.isArray(e))
                return e;
            if ((0,
            i.default)(Object(e)))
                return t(e, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
}
, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = n(51)
      , o = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(r);
    e.default = function(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++)
                n[e] = t[e];
            return n
        }
        return (0,
        o.default)(t)
    }
}
, function(t, e, n) {
    n(14),
    n(86),
    t.exports = n(2).Array.from
}
, function(t, e, n) {
    n(28),
    n(14),
    t.exports = n(84)
}
, function(t, e, n) {
    n(28),
    n(14),
    t.exports = n(85)
}
, function(t, e, n) {
    n(88);
    var r = n(2).Object;
    t.exports = function(t, e, n) {
        return r.defineProperty(t, e, n)
    }
}
, function(t, e, n) {
    n(89),
    n(14),
    n(28),
    n(90),
    t.exports = n(2).Promise
}
, function(t, e) {
    t.exports = function() {}
}
, function(t, e) {
    t.exports = function(t, e, n, r) {
        if (!(t instanceof e) || void 0 !== r && r in t)
            throw TypeError(n + ": incorrect invocation!");
        return t
    }
}
, function(t, e, n) {
    var r = n(25)
      , o = n(26)
      , i = n(82);
    t.exports = function(t) {
        return function(e, n, u) {
            var c, a = r(e), s = o(a.length), f = i(u, s);
            if (t && n != n) {
                for (; s > f; )
                    if ((c = a[f++]) != c)
                        return !0
            } else
                for (; s > f; f++)
                    if ((t || f in a) && a[f] === n)
                        return t || f || 0;
            return !t && -1
        }
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(7)
      , o = n(21);
    t.exports = function(t, e, n) {
        e in t ? r.f(t, e, o(0, n)) : t[e] = n
    }
}
, function(t, e, n) {
    var r = n(8)
      , o = n(35)
      , i = n(34)
      , u = n(3)
      , c = n(26)
      , a = n(27)
      , s = {}
      , f = {}
      , e = t.exports = function(t, e, n, l, v) {
        var h, d, p, y, m = v ? function() {
            return t
        }
        : a(t), x = r(n, l, e ? 2 : 1), g = 0;
        if ("function" != typeof m)
            throw TypeError(t + " is not iterable!");
        if (i(m)) {
            for (h = c(t.length); h > g; g++)
                if ((y = e ? x(u(d = t[g])[0], d[1]) : x(t[g])) === s || y === f)
                    return y
        } else
            for (p = m.call(t); !(d = p.next()).done; )
                if ((y = o(p, x, d.value, e)) === s || y === f)
                    return y
    }
    ;
    e.BREAK = s,
    e.RETURN = f
}
, function(t, e, n) {
    t.exports = !n(4) && !n(32)(function() {
        return 7 != Object.defineProperty(n(20)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(t, e) {
    t.exports = function(t, e, n) {
        var r = void 0 === n;
        switch (e.length) {
        case 0:
            return r ? t() : t.call(n);
        case 1:
            return r ? t(e[0]) : t.call(n, e[0]);
        case 2:
            return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
        case 3:
            return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
        case 4:
            return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
}
, function(t, e, n) {
    var r = n(10);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == r(t) ? t.split("") : Object(t)
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(72)
      , o = n(21)
      , i = n(22)
      , u = {};
    n(5)(u, n(0)("iterator"), function() {
        return this
    }),
    t.exports = function(t, e, n) {
        t.prototype = r(u, {
            next: o(1, n)
        }),
        i(t, e + " Iterator")
    }
}
, function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
}
, function(t, e, n) {
    var r = n(1)
      , o = n(40).set
      , i = r.MutationObserver || r.WebKitMutationObserver
      , u = r.process
      , c = r.Promise
      , a = "process" == n(10)(u);
    t.exports = function() {
        var t, e, n, s = function() {
            var r, o;
            for (a && (r = u.domain) && r.exit(); t; ) {
                o = t.fn,
                t = t.next;
                try {
                    o()
                } catch (r) {
                    throw t ? n() : e = void 0,
                    r
                }
            }
            e = void 0,
            r && r.enter()
        };
        if (a)
            n = function() {
                u.nextTick(s)
            }
            ;
        else if (i) {
            var f = !0
              , l = document.createTextNode("");
            new i(s).observe(l, {
                characterData: !0
            }),
            n = function() {
                l.data = f = !f
            }
        } else if (c && c.resolve) {
            var v = c.resolve();
            n = function() {
                v.then(s)
            }
        } else
            n = function() {
                o.call(r, s)
            }
            ;
        return function(r) {
            var o = {
                fn: r,
                next: void 0
            };
            e && (e.next = o),
            t || (t = o,
            n()),
            e = o
        }
    }
}
, function(t, e, n) {
    var r = n(3)
      , o = n(73)
      , i = n(31)
      , u = n(23)("IE_PROTO")
      , c = function() {}
      , a = function() {
        var t, e = n(20)("iframe"), r = i.length;
        for (e.style.display = "none",
        n(33).appendChild(e),
        e.src = "javascript:",
        t = e.contentWindow.document,
        t.open(),
        t.write("<script>document.F=Object<\/script>"),
        t.close(),
        a = t.F; r--; )
            delete a.prototype[i[r]];
        return a()
    };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (c.prototype = r(t),
        n = new c,
        c.prototype = null,
        n[u] = t) : n = a(),
        void 0 === e ? n : o(n, e)
    }
}
, function(t, e, n) {
    var r = n(7)
      , o = n(3)
      , i = n(76);
    t.exports = n(4) ? Object.defineProperties : function(t, e) {
        o(t);
        for (var n, u = i(e), c = u.length, a = 0; c > a; )
            r.f(t, n = u[a++], e[n]);
        return t
    }
}
, function(t, e, n) {
    var r = n(12)
      , o = n(41)
      , i = n(23)("IE_PROTO")
      , u = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = o(t),
        r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
    }
}
, function(t, e, n) {
    var r = n(12)
      , o = n(25)
      , i = n(63)(!1)
      , u = n(23)("IE_PROTO");
    t.exports = function(t, e) {
        var n, c = o(t), a = 0, s = [];
        for (n in c)
            n != u && r(c, n) && s.push(n);
        for (; e.length > a; )
            r(c, n = e[a++]) && (~i(s, n) || s.push(n));
        return s
    }
}
, function(t, e, n) {
    var r = n(75)
      , o = n(31);
    t.exports = Object.keys || function(t) {
        return r(t, o)
    }
}
, function(t, e, n) {
    var r = n(5);
    t.exports = function(t, e, n) {
        for (var o in e)
            n && t[o] ? t[o] = e[o] : r(t, o, e[o]);
        return t
    }
}
, function(t, e, n) {
    t.exports = n(5)
}
, function(t, e, n) {
    "use strict";
    var r = n(1)
      , o = n(2)
      , i = n(7)
      , u = n(4)
      , c = n(0)("species");
    t.exports = function(t) {
        var e = "function" == typeof o[t] ? o[t] : r[t];
        u && e && !e[c] && i.f(e, c, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}
, function(t, e, n) {
    var r = n(3)
      , o = n(17)
      , i = n(0)("species");
    t.exports = function(t, e) {
        var n, u = r(t).constructor;
        return void 0 === u || void 0 == (n = r(u)[i]) ? e : o(n)
    }
}
, function(t, e, n) {
    var r = n(24)
      , o = n(19);
    t.exports = function(t) {
        return function(e, n) {
            var i, u, c = String(o(e)), a = r(n), s = c.length;
            return a < 0 || a >= s ? t ? "" : void 0 : (i = c.charCodeAt(a),
            i < 55296 || i > 56319 || a + 1 === s || (u = c.charCodeAt(a + 1)) < 56320 || u > 57343 ? t ? c.charAt(a) : i : t ? c.slice(a, a + 2) : u - 56320 + (i - 55296 << 10) + 65536)
        }
    }
}
, function(t, e, n) {
    var r = n(24)
      , o = Math.max
      , i = Math.min;
    t.exports = function(t, e) {
        return t = r(t),
        t < 0 ? o(t + e, 0) : i(t, e)
    }
}
, function(t, e, n) {
    var r = n(13);
    t.exports = function(t, e) {
        if (!r(t))
            return t;
        var n, o;
        if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t)))
            return o;
        if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t)))
            return o;
        if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t)))
            return o;
        throw TypeError("Can't convert object to primitive value")
    }
}
, function(t, e, n) {
    var r = n(3)
      , o = n(27);
    t.exports = n(2).getIterator = function(t) {
        var e = o(t);
        if ("function" != typeof e)
            throw TypeError(t + " is not iterable!");
        return r(e.call(t))
    }
}
, function(t, e, n) {
    var r = n(18)
      , o = n(0)("iterator")
      , i = n(6);
    t.exports = n(2).isIterable = function(t) {
        var e = Object(t);
        return void 0 !== e[o] || "@@iterator"in e || i.hasOwnProperty(r(e))
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(8)
      , o = n(11)
      , i = n(41)
      , u = n(35)
      , c = n(34)
      , a = n(26)
      , s = n(64)
      , f = n(27);
    o(o.S + o.F * !n(37)(function(t) {
        Array.from(t)
    }), "Array", {
        from: function(t) {
            var e, n, o, l, v = i(t), h = "function" == typeof this ? this : Array, d = arguments.length, p = d > 1 ? arguments[1] : void 0, y = void 0 !== p, m = 0, x = f(v);
            if (y && (p = r(p, d > 2 ? arguments[2] : void 0, 2)),
            void 0 == x || h == Array && c(x))
                for (e = a(v.length),
                n = new h(e); e > m; m++)
                    s(n, m, y ? p(v[m], m) : v[m]);
            else
                for (l = x.call(v),
                n = new h; !(o = l.next()).done; m++)
                    s(n, m, y ? u(l, p, [o.value, m], !0) : o.value);
            return n.length = m,
            n
        }
    })
}
, function(t, e, n) {
    "use strict";
    var r = n(61)
      , o = n(70)
      , i = n(6)
      , u = n(25);
    t.exports = n(36)(Array, "Array", function(t, e) {
        this._t = u(t),
        this._i = 0,
        this._k = e
    }, function() {
        var t = this._t
          , e = this._k
          , n = this._i++;
        return !t || n >= t.length ? (this._t = void 0,
        o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]])
    }, "values"),
    i.Arguments = i.Array,
    r("keys"),
    r("values"),
    r("entries")
}
, function(t, e, n) {
    var r = n(11);
    r(r.S + r.F * !n(4), "Object", {
        defineProperty: n(7).f
    })
}
, function(t, e) {}
, function(t, e, n) {
    "use strict";
    var r, o, i, u = n(38), c = n(1), a = n(8), s = n(18), f = n(11), l = n(13), v = n(17), h = n(62), d = n(65), p = n(80), y = n(40).set, m = n(71)(), x = c.TypeError, g = c.process, _ = c.Promise, g = c.process, w = "process" == s(g), b = function() {}, M = !!function() {
        try {
            var t = _.resolve(1)
              , e = (t.constructor = {})[n(0)("species")] = function(t) {
                t(b, b)
            }
            ;
            return (w || "function" == typeof PromiseRejectionEvent) && t.then(b)instanceof e
        } catch (t) {}
    }(), E = function(t, e) {
        return t === e || t === _ && e === i
    }, j = function(t) {
        var e;
        return !(!l(t) || "function" != typeof (e = t.then)) && e
    }, k = function(t) {
        return E(_, t) ? new L(t) : new o(t)
    }, L = o = function(t) {
        var e, n;
        this.promise = new t(function(t, r) {
            if (void 0 !== e || void 0 !== n)
                throw x("Bad Promise constructor");
            e = t,
            n = r
        }
        ),
        this.resolve = v(e),
        this.reject = v(n)
    }
    , O = function(t) {
        try {
            t()
        } catch (t) {
            return {
                error: t
            }
        }
    }, S = function(t, e) {
        if (!t._n) {
            t._n = !0;
            var n = t._c;
            m(function() {
                for (var r = t._v, o = 1 == t._s, i = 0; n.length > i; )
                    !function(e) {
                        var n, i, u = o ? e.ok : e.fail, c = e.resolve, a = e.reject, s = e.domain;
                        try {
                            u ? (o || (2 == t._h && T(t),
                            t._h = 1),
                            !0 === u ? n = r : (s && s.enter(),
                            n = u(r),
                            s && s.exit()),
                            n === e.promise ? a(x("Promise-chain cycle")) : (i = j(n)) ? i.call(n, c, a) : c(n)) : a(r)
                        } catch (t) {
                            a(t)
                        }
                    }(n[i++]);
                t._c = [],
                t._n = !1,
                e && !t._h && P(t)
            })
        }
    }, P = function(t) {
        y.call(c, function() {
            var e, n, r, o = t._v;
            if (A(t) && (e = O(function() {
                w ? g.emit("unhandledRejection", o, t) : (n = c.onunhandledrejection) ? n({
                    promise: t,
                    reason: o
                }) : (r = c.console) && r.error && r.error("Unhandled promise rejection", o)
            }),
            t._h = w || A(t) ? 2 : 1),
            t._a = void 0,
            e)
                throw e.error
        })
    }, A = function(t) {
        if (1 == t._h)
            return !1;
        for (var e, n = t._a || t._c, r = 0; n.length > r; )
            if (e = n[r++],
            e.fail || !A(e.promise))
                return !1;
        return !0
    }, T = function(t) {
        y.call(c, function() {
            var e;
            w ? g.emit("rejectionHandled", t) : (e = c.onrejectionhandled) && e({
                promise: t,
                reason: t._v
            })
        })
    }, q = function(t) {
        var e = this;
        e._d || (e._d = !0,
        e = e._w || e,
        e._v = t,
        e._s = 2,
        e._a || (e._a = e._c.slice()),
        S(e, !0))
    }, R = function(t) {
        var e, n = this;
        if (!n._d) {
            n._d = !0,
            n = n._w || n;
            try {
                if (n === t)
                    throw x("Promise can't be resolved itself");
                (e = j(t)) ? m(function() {
                    var r = {
                        _w: n,
                        _d: !1
                    };
                    try {
                        e.call(t, a(R, r, 1), a(q, r, 1))
                    } catch (t) {
                        q.call(r, t)
                    }
                }) : (n._v = t,
                n._s = 1,
                S(n, !1))
            } catch (t) {
                q.call({
                    _w: n,
                    _d: !1
                }, t)
            }
        }
    };
    M || (_ = function(t) {
        h(this, _, "Promise", "_h"),
        v(t),
        r.call(this);
        try {
            t(a(R, this, 1), a(q, this, 1))
        } catch (t) {
            q.call(this, t)
        }
    }
    ,
    r = function(t) {
        this._c = [],
        this._a = void 0,
        this._s = 0,
        this._d = !1,
        this._v = void 0,
        this._h = 0,
        this._n = !1
    }
    ,
    r.prototype = n(77)(_.prototype, {
        then: function(t, e) {
            var n = k(p(this, _));
            return n.ok = "function" != typeof t || t,
            n.fail = "function" == typeof e && e,
            n.domain = w ? g.domain : void 0,
            this._c.push(n),
            this._a && this._a.push(n),
            this._s && S(this, !1),
            n.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }),
    L = function() {
        var t = new r;
        this.promise = t,
        this.resolve = a(R, t, 1),
        this.reject = a(q, t, 1)
    }
    ),
    f(f.G + f.W + f.F * !M, {
        Promise: _
    }),
    n(22)(_, "Promise"),
    n(79)("Promise"),
    i = n(2).Promise,
    f(f.S + f.F * !M, "Promise", {
        reject: function(t) {
            var e = k(this);
            return (0,
            e.reject)(t),
            e.promise
        }
    }),
    f(f.S + f.F * (u || !M), "Promise", {
        resolve: function(t) {
            if (t instanceof _ && E(t.constructor, this))
                return t;
            var e = k(this);
            return (0,
            e.resolve)(t),
            e.promise
        }
    }),
    f(f.S + f.F * !(M && n(37)(function(t) {
        _.all(t).catch(b)
    })), "Promise", {
        all: function(t) {
            var e = this
              , n = k(e)
              , r = n.resolve
              , o = n.reject
              , i = O(function() {
                var n = []
                  , i = 0
                  , u = 1;
                d(t, !1, function(t) {
                    var c = i++
                      , a = !1;
                    n.push(void 0),
                    u++,
                    e.resolve(t).then(function(t) {
                        a || (a = !0,
                        n[c] = t,
                        --u || r(n))
                    }, o)
                }),
                --u || r(n)
            });
            return i && o(i.error),
            n.promise
        },
        race: function(t) {
            var e = this
              , n = k(e)
              , r = n.reject
              , o = O(function() {
                d(t, !1, function(t) {
                    e.resolve(t).then(n.resolve, r)
                })
            });
            return o && r(o.error),
            n.promise
        }
    })
}
]);
