var w = function() {
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
var c = new y.default, 
    s = t.querySelector("img"), 
    canvas = document.getElementById("canvas"), 
    ctx = canvas.getContext("2d"), 
    width = canvas.offsetWidth,
    height = canvas.offsetHeight,
    ratio = window.devicePixelRatio || 1;
canvas.width = width * ratio,
canvas.height = height * ratio,
ctx.scale(ratio, ratio);

var m = false,
    g = [], 
    b = 0,
    M = function(t) {
        var now = Date.now();
        if(now - b > 30){
            n(o(t));
            b = now;
        }
    }, 
    E = function t() {
        canvas.removeEventListener("touchmove", M, !1),
        document.removeEventListener("touchend", t, !1),
        document.removeEventListener("touchcancel", t, !1)
    }, 
    j = function(t) {
        e(t),
        n(o(t)),
        t.preventDefault(),
        canvas.addEventListener("touchmove", M, !1),
        document.addEventListener("touchend", E, !1),
        document.addEventListener("touchcancel", E, !1)
    };
canvas.addEventListener("touchstart", j, !1);

// var k = t.querySelector(".js-clear");
// k.addEventListener("click", r, !1);
var L = 0, 
    O = function() {
        r(),
        e();
        var t = (width - 320) / 2,
            o = (height + 240) / 2, 
            i = Math.ceil(Math.random() * (_.default.length - 1));
        L = (i + L) % _.default.length;
        var c = true,
            a = false,
            s = 0;
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
    },
    S = t.querySelector(".js-fill");
S.addEventListener("click", O, false);
var P = t.querySelector(".js-done");
P.addEventListener("click", function t() {
    l.removeEventListener("touchstart", j, false),
    k.removeEventListener("click", r, false),
    S.removeEventListener("click", O, false),
    P.removeEventListener("click", t, false),
    c.resolve(i)
}, false);
// return c.promise