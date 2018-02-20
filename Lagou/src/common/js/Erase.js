var Erase = function(config){
    this.width = 0;
    this.height = 0;
    this.canvasID = '';
    this.canvas = null;
    this.ctx = null;
    this.src = '';
    this.frame = 60;
    this.lineWidth = 30;
    this.leave = 0.4;
    this.disappearClass = 'disappear';
    this.bottomImage = '';
    this.touchType = "ontouchstart" in window?true:false;
    this.start = {
        x:0,
        y:0
    };
    this.end = {
        x:0,
        y:0
    };

    var GC = {
        width:window.outerWidth ? window.outerWidth : document.body.clientWidth,
        height:window.outerHeight ? window.outerHeight : document.body.clientHeight
    };
    var self = this;

    var touchstart = self.touchType?"touchstart":"mousedown",
        touchmove = self.touchType?"touchmove":"mousemove",
        touchend = self.touchType?"touchend":"mouseup";
    var timeout;

    this.initConfig = function(config){
        for( var attr in config ){
            switch(attr){
                case 'width':
                case 'height':
                case 'src':
                case 'disappearClass':
                case 'bottomImage':
                case 'lineWidth':
                    self[attr] = config[attr];
                    break;
                case 'canvasID':
                    self[attr] = config[attr];
                    break;
            }
        }
        self.canvas = document.getElementById(self.canvasID);
        self.ctx = self.canvas.getContext('2d');

        if(!self.width){
            self.width = GC.width;
        }
        self.canvas.width = self.width;
        if(!self.height){
            self.height = GC.height;
        }
        self.canvas.height = self.height;

        if(self.bottomImage){
            self.bottomImage = document.getElementById(self.bottomImage);
            self.bottomImage.style.display = 'none';
        }
    };

    this.touchstartHandler = function(e){
        clearTimeout(timeout);
        e.preventDefault();

        self.start.x = self.touchType ? e.targetTouches[0].pageX : e.clientX - self.canvas.offsetLeft;
        self.start.y = self.touchType ? e.targetTouches[0].pageY : e.clientY - self.canvas.offsetTop;

        self.ctx.save();
        self.ctx.beginPath();
        self.ctx.arc(self.start.x, self.start.y, 1, 0, 2 * Math.PI);
        self.ctx.fill();
        self.ctx.restore();
    };

    this.touchmoveHandler = function(e){
        e.preventDefault();

        clearTimeout(timeout);
        self.end.x = self.touchType ? e.targetTouches[0].pageX : e.clientX - self.canvas.offsetLeft;
        self.end.y = self.touchType ? e.targetTouches[0].pageY : e.clientY - self.canvas.offsetTop;

        self.ctx.save();
        self.ctx.moveTo(self.start.x, self.start.y);
        self.ctx.lineTo(self.end.x, self.end.y);
        self.ctx.stroke();
        self.ctx.restore();

        self.start.x = self.end.x;
        self.start.y = self.end.y;
    };

    this.touchendHandler = function(e){
        self.canvas.removeEventListener(touchmove, self.touchmoveHandler);

        //getImageData() 方法返回 ImageData 对象，该对象拷贝了画布指定矩形的像素数据。
        //对于 ImageData 对象中的每个像素，都存在着四方面的信息，即 RGBA 值：
        //R - 红色 (0-255)
        //G - 绿色 (0-255)
        //B - 蓝色 (0-255)
        //A - alpha 通道 (0-255; 0 是透明的，255 是完全可见的)
        //color/alpha 以数组形式存在，并存储于 ImageData 对象的 data 属性中。
        var imgData = self.ctx.getImageData(0, 0, self.width, self.height);
        var dd = 0;
        for (var x = 0; x < imgData.width; x += self.lineWidth) {
            for (var y = 0; y < imgData.height; y += self.lineWidth) {
                var i = (y * imgData.width + x) * 4;
                if (imgData.data[i + 3] > 0) {
                    dd++
                }
            }
        }
        if (dd / (imgData.width * imgData.height / (self.lineWidth * self.lineWidth)) < self.leave) {
            self.canvas.className = self.disappearClass;
        }
    };

    this.clipEvent = function(){
        self.ctx.lineCap = "round";
        self.ctx.lineJoin = "round";
        self.ctx.lineWidth = self.lineWidth*2;
        self.ctx.globalCompositeOperation = "destination-out";

        self.canvas.addEventListener(touchstart , self.touchstartHandler);
        self.canvas.addEventListener(touchmove, self.touchmoveHandler);
        self.canvas.addEventListener(touchend, self.touchendHandler);
    };

    this.touchstartErase = function(e){
        e.preventDefault();

        self.start.x = self.touchType ? e.targetTouches[0].pageX : e.clientX - self.canvas.offsetLeft;
        self.start.y = self.touchType ? e.targetTouches[0].pageY : e.clientY - self.canvas.offsetTop;

        self.ctx.save();
        self.ctx.beginPath();
        self.ctx.arc(self.start.x, self.start.y, self.lineWidth, 0, 2 * Math.PI);
        self.ctx.clip();
        self.ctx.clearRect(0, 0, self.width, self.height);
        self.ctx.restore();
    };

    this.touchmoveErase = function(e){
        e.preventDefault();
        self.end.x = self.touchType ? e.targetTouches[0].pageX : e.clientX - self.canvas.offsetLeft;
        self.end.y = self.touchType ? e.targetTouches[0].pageY : e.clientY - self.canvas.offsetTop;

        var asin = self.lineWidth * Math.sin(Math.atan((self.end.y - self.start.y) / (self.end.x - self.start.x)));
        var acos = self.lineWidth * Math.cos(Math.atan((self.end.y - self.start.y) / (self.end.x - self.start.x)));
        var x3 = self.start.x + asin;
        var y3 = self.start.y - acos;
        var x4 = self.start.x - asin;
        var y4 = self.start.y + acos;
        var x5 = self.end.x + asin;
        var y5 = self.end.y - acos;
        var x6 = self.end.x - asin;
        var y6 = self.end.y + acos;

        self.ctx.save();
        self.ctx.beginPath();
        self.ctx.arc(self.end.x, self.end.y, self.lineWidth, 0, 2 * Math.PI);
        self.ctx.clip();
        self.ctx.clearRect(0, 0, self.width, self.height);
        self.ctx.restore();

        self.ctx.save();
        self.ctx.beginPath();
        self.ctx.moveTo(x3, y3);
        self.ctx.lineTo(x5, y5);
        self.ctx.lineTo(x6, y6);
        self.ctx.lineTo(x4, y4);
        self.ctx.closePath();
        self.ctx.clip();
        self.ctx.clearRect(0, 0, self.width, self.height);
        self.ctx.restore();

        self.start.x = self.end.x;
        self.start.y = self.end.y;
    };

    this.touchendErase = function(){
        self.canvas.removeEventListener(touchmove, self.touchendErase);

        var imgData = self.ctx.getImageData(0, 0, self.width, self.height);
        var dd = 0;
        for (var x = 0; x < imgData.width; x += self.lineWidth) {
            for (var y = 0; y < imgData.height; y += self.lineWidth) {
                var i = (y * imgData.width + x) * 4;
                if (imgData.data[i + 3] > 0) {
                    dd++
                }
            }
        }
        if (dd / (imgData.width * imgData.height / (self.lineWidth * self.lineWidth)) < self.leave) {
            self.canvas.className = self.disappearClass;
        }
    };

    this.eraseClipEvent = function(){
        self.canvas.addEventListener(touchstart ,self.touchstartErase);
        self.canvas.addEventListener(touchmove, self.touchmoveErase);
        self.canvas.addEventListener(touchend, self.touchendErase);
    };

    this.drawImage = function(){
        var img = new Image();
        img.src = self.src;
        img.onload = function(){
            self.ctx.drawImage(img,0,0,self.width,self.height);
            self.bottomImage.style.display = 'block';
            self.clipEvent();
            self.eraseClipEvent();
        };
    };

    this.init = function(config){
        self.initConfig(config);

        self.ctx.clearRect(0,0,self.width,self.height);
        if(self.src){
            self.drawImage();
        }
    };

    self.init(config);
};

/*// 使用方式
new Erase({
    canvasID:'gameCanvas',   // canvas ID
    src:'images/page1_2.png',   // 模糊图片
    bottomImage:'canvasBG',  // img ID, 最好是默认隐藏：使用 display:none
    disappearClass:'disappear', // 结束后所要添加的类名，通常用于消失或隐藏
    lineWidth:10,    // 默认 30
    leave:0.4   // 0-1，剩下多少没擦canvas消失隐藏，自行添加类名disappear 消失动画
    width:100,   // 默认不设为屏幕宽
    height:100   // 默认不设为屏幕高
});*/
