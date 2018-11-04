(function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var mousePos = [0, 0];
    // 存储“星星”和边：
    var nodes = [];  
    var edges = [];
  
    var easingFactor = 5.0;  //缓动因子
    var backgroundColor = '#000'; //背景颜色
    var nodeColor = '#fff'; //点颜色
    var edgeColor = '#fff'; //边颜色

    var cwidth = document.documentElement.clientWidth,
        width = 750,  // canvas.offsetWidth,
        height = 1000,  // canvas.offsetHeight,
        ratio = width / cwidth,
        // ratio = window.devicePixelRatio || 1,
        last = Date.now();
    canvas.width = width; // * ratio;
    canvas.height = height; // * ratio;
    // console.log(ratio);
    // ctx.scale(ratio, ratio);

    ctx.fillStyle = '#000000';
    ctx.fillRect(0,0,width,height);
    canvas.addEventListener('touchstart',touchstartEvent,false);
    document.getElementById('js-clear').addEventListener('click',function(e){
        nodes = [];
        ctx.clearRect(0,0,width,height);  //  * ratio
        ctx.fillStyle = '#000000';
        ctx.fillRect(0,0,width,height);
    },false);
    document.getElementById('js-clear').addEventListener('click',function(e){
        var img = document.getElementById('canvas__img');
        img.style.display = 'none';
        nodes = [];
        ctx.clearRect(0,0,width,height);  //  * ratio
    },false);
    document.getElementById('js-save').addEventListener('click',function(e){
        var src = canvas.toDataURL('image/png'),
            img = document.getElementById('canvas__img');
        nodes = [];
        
        img.setAttribute('src',src);
        img.style.display = 'block';
        ctx.clearRect(0,0,width,height);  //  * ratio
    },false);

    function touchstartEvent(e){
        e.preventDefault();
        startDraw(initPoint(e));
        canvas.addEventListener('touchmove',touchmoveEvent,false);
        document.addEventListener('touchend',touchendEvent,false);
        document.addEventListener('touchcancel',touchendEvent,false);
    }


    function touchmoveEvent(e){
        var now = Date.now();
        if(now - last > 30){
            startDraw(initPoint(e));
            last = now;
        }
    }

    function touchendEvent(e){
        canvas.removeEventListener('touchmove',touchmoveEvent,false);
        document.removeEventListener('touchend',touchendEvent,false);
        document.removeEventListener('touchcancel',touchendEvent,false);
    }

    function startDraw(pos){
        var drawPos = new Draw(pos);
        drawPos.render(ctx, nodes),
        nodes.push(drawPos)
    }

    function initPoint(e) {
        if (e.offsetX)
            return new Point(e.offsetX,e.offsetY);
        var obj = e.target.getBoundingClientRect(),
            left = obj.left,
            top = obj.top,
            touch = e.targetTouches[0],
            x = touch.pageX,
            y = touch.pageY;
        return new Point(Math.floor(x - left) * ratio,Math.floor(y - top) * ratio);
    }


    function Point(x,y){
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function(pos){
        return new Point(this.x + pos.x,this.y + pos.y);
    };
    Point.prototype.dist2 = function(pos){
        var gapX = pos.x - this.x,
            gapY = pos.y - this.y;
        return gapX * gapX + gapY * gapY;
    };

    function Draw(pos){
        // (0,v.default)(this, t);
        this.pos = pos;
    }

    function getPosArray(nodes){
        var arr = [],
            i = 0;
        for(i = 0; i < nodes.length; i++){
            arr.push({
                value:nodes[i],
                done:false
            });
        }
        return arr;
    }
    
    Draw.prototype.render = function(){
        var base = Math.pow(60 * ratio, 2),
            gap = 0,
            done = true,
            hasError = false,
            error = undefined;
        try {
            var cnodes = getPosArray(nodes),
                temp = null,
                current = null;
            for(i = 0; i < nodes.length; i++){
                temp = cnodes[i];
                current = temp.value;
                done = temp.done;
                if(!done) {
                    gap = this.pos.dist2(current.pos);
                    if(gap < base){
                        ctx.beginPath();
                        ctx.moveTo(this.pos.x, this.pos.y);
                        ctx.lineTo(current.pos.x, current.pos.y);
                        ctx.strokeStyle = "rgba(255, 255, 255, " + .6 * (1 - Math.pow(gap / base, .5)) + ")";
                        ctx.stroke();
                    }
                }
            }
        } catch (err) {
            hasError = true;
            error = err
        } finally {
            try {
                return;
            } finally {
                if (hasError)
                    throw error
            }
        }
    };
    
}).call(this);