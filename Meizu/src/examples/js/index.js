"use strict";
var app = new Vue({
    el:"#app",
    data:{
        fontSize:16,
        current_index:2,
        p_value:200,
        list:[{
            title:'常用CSS3动画',
            animation:{
                active_index:-1,
                list:[{
                    name:'透明度改变',
                    en:'opacity',
                    animate:[{
                        en:'in',
                        classname:'opacityChangeIn'
                    },{
                        en:'out',
                        classname:'opacityChangeOut'
                    }],
                    status:false
                },{
                    name:'大小改变',
                    en:'scale',
                    animate:[{
                        en:'in',
                        classname:'scaleChangeIn'
                    },{
                        en:'out',
                        classname:'scaleChangeOut'
                    }],
                    status:false
                },{
                    name:'偏移改变',
                    en:'skew',
                    animate:[{
                        en:'in',
                        classname:'skewXChange'
                    },{
                        en:'out',
                        classname:'skewYChange'
                    }],
                    status:false
                },{
                    name:'左右位移',
                    en:'move',
                    animate:[{
                        en:'in',
                        classname:'moveRight'
                    },{
                        en:'out',
                        classname:'moveLeft'
                    }],
                    status:false
                },{
                    name:'上下位移',
                    en:'move-ud',
                    animate:[{
                        en:'in',
                        classname:'moveBottom'
                    },{
                        en:'out',
                        classname:'moveTop'
                    }],
                    status:false
                },{
                    name:'宽度改变',
                    en:'width',
                    animate:[{
                        en:'in',
                        classname:'widthChangeLeft'
                    },{
                        en:'out',
                        classname:'widthChangeRight'
                    }],
                    status:false
                },{
                    name:'高度改变',
                    en:'height',
                    animate:[{
                        en:'in',
                        classname:'heightChange'
                    },{
                        en:'out',
                        classname:'heightChange'
                    }],
                    status:false
                },{
                    name:'旋转',
                    en:'rotate',
                    animate:[{
                        en:'X',
                        classname:'rotateXChange'
                    },{
                        en:'Y',
                        classname:'rotateYChange'
                    },{
                        en:'Z',
                        classname:'rotateZChange'
                    }],
                    status:false
                }]
            }
        },{
            title:'CSS3动画属性',
            animation:{
                active_index:-1,
                list:[{
                    name:'动画时间: animation-duration',
                    en:'example-rotate example-rotate-bg',
                    animate:[{
                        en:'in',
                        classname:'rotateYChange'
                    },{
                        en:'out',
                        classname:'rotateYChange duration2-2'
                    }],
                    status:false
                },{
                    name:'延迟: animation-delay',
                    en:'example-rotate',
                    animate:[{
                        en:'in',
                        classname:'rotateYChange'
                    },{
                        en:'out',
                        classname:'rotateYChange delay1-2'
                    }],
                    status:false
                },{
                    name:'动画循环次数: animation-iteration-count',
                    en:'example-rotate example-rotate-3',
                    animate:[{
                        en:'in',
                        classname:'rotateYChange'
                    },{
                        en:'middle',
                        classname:'rotateYChange count-2'
                    },{
                        en:'out',
                        classname:'rotateYChange count-infinite'
                    }],
                    status:false
                },{
                    name:'动画反向: animation-direction',
                    en:'example-rotate',
                    animate:[{
                        en:'in',
                        classname:'widthChangeLeft count-2'
                    },{
                        en:'out',
                        classname:'widthChangeLeft count-2 direction-back'
                    }],
                    status:false
                },{
                    name:'动画时间曲线: animation-timing-function',
                    en:'example-more',
                    animate:[{
                        en:'same same1',
                        classname:'moveRight timing-function-linear'
                    },{
                        en:'same same2',
                        classname:'moveRight timing-function-ease'
                    },{
                        en:'same same3',
                        classname:'moveRight timing-function-ease-in'
                    },{
                        en:'same same4',
                        classname:'moveRight timing-function-ease-out'
                    },{
                        en:'same same5',
                        classname:'moveRight timing-function-ease-in-out'
                    }],
                    status:false
                },{
                    name:'动画时间曲线: animation-timing-function:cubic-bezier',
                    link:'http://web.chacuo.net/css3beziertool',
                    en:'example-cubic-bezier',
                    animate:[{
                        en:'',
                        classname:'move-x',
                        content:'<div class="same cubic-bezier-move"></div>'
                    }],
                    status:false
                },{
                    name:'动画时间曲线: animation-timing-function:steps()',
                    detail: '允许我们将动画或者过渡分割成段，而不是从一种状态持续到另一种状态的过渡<br/>'+
                            '这个函数有两个参数——第一个参数是一个正值，指定我们希望动画分割的段数。<br/>'+
                            'Steps(number_of_steps，direction)<br/>'+
                            '第二个参数定义了这个要点 在我们的@keyframes中申明的动作将会发生的关键。这个值是可选的，在没有传递参数时，默认为”end”。方向为”start”表示一个左--持续函数，在动画开始时，动画的第一段将会马上完成。以左侧端点为起点，立即跳到第一个step的结尾处。它会立即跳到第一段的结束并且保持这样的状态直到第一步的持续时间结束。后面的每一帧都将按照此模式来完成动画。<br/>'+
                            '方向为”end”表示一个右--持续函数。动画执行时，在每一帧里，动画保持当前状态直到这一段的持续时间完成，才会跳到下一步的起点，后面的每一帧都按照这个模式来进行，在最后一帧的起点，等到这一帧的持续时间结束，整个动画的执行也已经结束，执行动画的元素来不及跳到这一帧的终点，直接回到了整个动画起点，开始了第二次动画。每个选择本质上从一个不同的面移动这个元素并且将产生一个不同的位置在这个相同的动画里。',
                    en:'example-steps',
                    animate:[{
                        en:'',
                        classname:'',
                        content:'<div class="same s-start"><img src="http://pic.58pic.com/58pic/13/20/61/89B58PIC5Nz_1024.jpg" /></div>'+
                                '<div class="same s-end"><img src="http://pic.58pic.com/58pic/13/20/61/89B58PIC5Nz_1024.jpg" /></div>',
                    }],
                    status:false
                },{
                    name:'背面显示状态: backface-visibility',
                    en:'example-rotate example-rotate-bg',
                    animate:[{
                        en:'in',
                        classname:'rotateYChange'
                    },{
                        en:'out',
                        classname:'rotateYChange backface-hidden'
                    }],
                    status:false
                },{
                    name:'动画原点：transfrom-origin',
                    en:'example-rotate',
                    animate:[{
                        en:'in',
                        classname:'scaleChangeIn'
                    },{
                        en:'out',
                        classname:'scaleChangeIn origin0-0'
                    }],
                    status:false
                },{
                    name:'视距：perspective',
                    detail:'该属性会设置查看者的位置，并将可视内容映射到一个视锥上，继而投到一个2D视平面上。<br/>'+
                            '可理解为视距，用来设置用户和元素3D空间Z平面之间的距离。<br/>'+
                            '值越小，用户与3D空间Z平面距离越近，视觉效果更令人印象深刻；<br/>'+
                            '反之，值越大，用户与3D控件Z平面距离越远，视觉效果就很小。<br/>'+
                            '默认值：none，表示无限的角度来看3D物体，但看上去是平的<br/>'+
                            '<length>接受一个长度单位大于0的值，单位不能为百分比。<br/>'+
                            'perspective的值无穷大，或值为0时与取值为none效果一样。',
                    en:'rotate example-perspective',
                    animate:[{
                        en:'X',
                        classname:''
                    },{
                        en:'Y',
                        classname:'rotateY'
                    },{
                        en:'Z',
                        classname:'perspective100RotateY60'
                    }],
                    other:  '<div class="per1">'+
                                '<div class="per-div"></div>'+
                            '</div>'+
                            '<div class="per clearfix">'+
                                '<div class="per-div"></div>'+
                                '<div class="per-div"></div>'+
                                '<div class="per-div"></div>'+
                            '</div>',
                    status:false
                },{
                    name:'视距原点：perspective-origin',
                    detail:'决定perspective属性的源点角度，实际上设置了X轴和Y轴位置。<br/>'+
                            '可能的值： [percentage] | [length] | left(top) | center | right(bottom)<br/>'+
                            '默认值：50% 50%；<br/>'+
                            '<span style="font-weight:bold;">必须定义在父元素上，本身不做任何事情，它必须定义在设置了perspective属性的元素上</span><br/>'+
                            '<a href="https://css-tricks.com/almanac/properties/p/perspective-origin/" target="_blank">可通过此了解</a><br/>'+
                            '',
                    en:'rotate example-perspective',
                    animate:[],
                    other:  '<div class="wrapper clearfix">'+
                                '<div class="container">'+
                                    '<div class="cube" style="perspective-origin:left top;">'+
                                        '<div class="face face-front">1</div>'+
                                        '<div class="face face-back">2</div>'+
                                        '<div class="face face-left">3</div>'+
                                        '<div class="face face-right">4</div>'+
                                        '<div class="face face-top">5</div>'+
                                        '<div class="face face-bottom">6</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="container">'+
                                    '<div class="cube" style="perspective-origin:top;">'+
                                        '<div class="face face-front">1</div>'+
                                        '<div class="face face-back">2</div>'+
                                        '<div class="face face-left">3</div>'+
                                        '<div class="face face-right">4</div>'+
                                        '<div class="face face-top">5</div>'+
                                        '<div class="face face-bottom">6</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="container">'+
                                    '<div class="cube" style="perspective-origin:top right;">'+
                                        '<div class="face face-front">1</div>'+
                                        '<div class="face face-back">2</div>'+
                                        '<div class="face face-left">3</div>'+
                                        '<div class="face face-right">4</div>'+
                                        '<div class="face face-top">5</div>'+
                                        '<div class="face face-bottom">6</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="container">'+
                                    '<div class="cube" style="perspective-origin:right;">'+
                                        '<div class="face face-front">1</div>'+
                                        '<div class="face face-back">2</div>'+
                                        '<div class="face face-left">3</div>'+
                                        '<div class="face face-right">4</div>'+
                                        '<div class="face face-top">5</div>'+
                                        '<div class="face face-bottom">6</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="container">'+
                                    '<div class="cube" style="perspective-origin:center;">'+
                                        '<div class="face face-front">1</div>'+
                                        '<div class="face face-back">2</div>'+
                                        '<div class="face face-left">3</div>'+
                                        '<div class="face face-right">4</div>'+
                                        '<div class="face face-top">5</div>'+
                                        '<div class="face face-bottom">6</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="container">'+
                                    '<div class="cube" style="perspective-origin:right bottom;">'+
                                        '<div class="face face-front">1</div>'+
                                        '<div class="face face-back">2</div>'+
                                        '<div class="face face-left">3</div>'+
                                        '<div class="face face-right">4</div>'+
                                        '<div class="face face-top">5</div>'+
                                        '<div class="face face-bottom">6</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="container">'+
                                    '<div class="cube" style="perspective-origin:bottom;">'+
                                        '<div class="face face-front">1</div>'+
                                        '<div class="face face-back">2</div>'+
                                        '<div class="face face-left">3</div>'+
                                        '<div class="face face-right">4</div>'+
                                        '<div class="face face-top">5</div>'+
                                        '<div class="face face-bottom">6</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="container">'+
                                    '<div class="cube" style="perspective-origin:bottom left;">'+
                                        '<div class="face face-front">1</div>'+
                                        '<div class="face face-back">2</div>'+
                                        '<div class="face face-left">3</div>'+
                                        '<div class="face face-right">4</div>'+
                                        '<div class="face face-top">5</div>'+
                                        '<div class="face face-bottom">6</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="container">'+
                                    '<div class="cube" style="perspective-origin:left;">'+
                                        '<div class="face face-front">1</div>'+
                                        '<div class="face face-back">2</div>'+
                                        '<div class="face face-left">3</div>'+
                                        '<div class="face face-right">4</div>'+
                                        '<div class="face face-top">5</div>'+
                                        '<div class="face face-bottom">6</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="container">'+
                                '<div class="cube perspectiveOriginChange">'+
                                    '<div class="face face-front">1</div>'+
                                    '<div class="face face-back">2</div>'+
                                    '<div class="face face-left">3</div>'+
                                    '<div class="face face-right">4</div>'+
                                    '<div class="face face-top">5</div>'+
                                    '<div class="face face-bottom">6</div>'+
                                '</div>'+
                            '</div>',
                    status:false
                },{
                    name:'transform-style',
                    detail:'指定嵌套元素如何在3D空间中呈现。可能的值： flat  |   preserve-3d<br/>'+
                            'flat: 默认值，表示所有子元素在2D平面呈现<br/>'+
                            'preserve-3d： 表示所有子元素在3D空间中呈现<br/>',
                    en:'rotate example-perspective',
                    animate:[],
                    other:  '<div class="wrapper clearfix">'+
                                '<div class="spin">'+
                                    '<div class="rotate-div">'+
                                        '<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519825090705&di=e31c97c0ba1e0af6506f6028cfa3ba2b&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D5b1ac40baa8b87d6444fa35f6e704d54%2F58ee3d6d55fbb2fbab102e28444a20a44623dcd5.jpg" />'+
                                    '</div>'+
                                '</div>'+
                                '<div class="spin">'+
                                    '<div class="rotate-div three-d">'+
                                        '<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519825090705&di=e31c97c0ba1e0af6506f6028cfa3ba2b&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D5b1ac40baa8b87d6444fa35f6e704d54%2F58ee3d6d55fbb2fbab102e28444a20a44623dcd5.jpg" />'+
                                    '</div>'+
                                '</div>'+
                            '</div>',
                    status:false
                },{
                    name:'transform:matrix',
                    detail:'transform: matrix(a,b,c,d,e,f);<br/>'+
                            '<img src="./images/css-transforms-matrix3.gif" /><br/>'+
                            '即为矩阵，要让其发生变化，只有与另外矩阵相乘<br/>'+
                            '<img src="./images/css-transforms-matrix5.gif" /><br/>'+
                            '其中，x, y表示转换元素的所有坐标（变量）了。<br/>'+
                            '3*3矩阵每一行的第1个值与后面1*3的第1个值相乘，第2个值与第2个相乘，第3个与第3个，然后相加，如下图同色标注：<br/>'+
                            '<img src="./images/2012-06-07_160412.png" /><br/>'+
                            'ax+cy+e为变换后的水平坐标，bx+dy+f表示变换后的垂直位置。<br/>'+
                            '<h3>位移（translate）</h3>'+
                            '假设矩阵参数如下：<br/>'+
                            '<p style="height:36px; line-height:36px; padding:0 0 0 15px; color:blue; background:#ccc;">transform: matrix(1, 0, 0, 1, 30, 30); <span style="color:green;">/* a=1, b=0, c=0, d=1, e=30, f=30 */</span></p>'+
                            '现在，我们根据这个矩阵偏移元素的中心点，假设是(0, 0)，即x=0, y=0。<br/>'+
                            '于是，变换后的x坐标就是ax+cy+e = 1*0+0*0+30 =30, y坐标就是bx+dy+f = 0*0+1*0+30 =30.<br/>'+
                            '于是，中心点坐标从(0, 0)变成了→(30, 30)<br/>'+
                            '<div style="width:100px;height:100px;background:#ccc;" id="matrix-translate"></div>'+
                            '<div style="width:250px; height:30px; line-height:30px; margin:10px 0 0 0; cursor:pointer; color:#fff; background-color:#ff0084; text-align:center;" id="matrixShowTranslate">点击应用matrix(1,0,0,0,30,30)</div><br/>'+
                            '<h3>缩放（scale）</h3>'+
                            'matrix(1, 0, 0, 1, 30, 30);的元素比例与原来一样，1:1, 而这几个参数中，有两个1, 所以这两个1就是缩放相关的参数。<br/>'+
                            '其中，第一个缩放x轴，第二个缩放y轴。<br/>'+
                            '假设比例是s，则有matrix(s, 0, 0, s, 0, 0);，于是，套用公式，就有：<br/>'+
                            'x‘ = ax+cy+e = s*x+0*y+0 = s*x;<br/>'+
                            'y’ = bx+dy+f = 0*x+s*y+0 = s*y;<br/>'+
                            '也就是matrix(sx, 0, 0, sy, 0, 0);，等同于scale(sx, sy);<br/>'+
                            '目前属性值：<span id="matrix-scale-value">matrix(1,0,0,1,0,0)</span><br/>'+
                            'X轴比例（0.1-3）：<input type="range" id="matrix-scale-x" value="1" min="0.1" max="3" step="0.1" /><br/>'+
                            'Y轴比例（0.1-3）：<input type="range" id="matrix-scale-y" value="1" min="0.1" max="3" step="0.1" /><br/>'+
                            '<div style="width:100px;height:100px;background:#ccc; transform-origin:0 0; transform:matrix(1,0,0,1,0,0);" id="matrix-scale"></div><br/>'+
                            '<h3>旋转（rotate）</h3>'+
                            '方法以及参数使用如下（假设角度为θ）：<br/>'+
                            '<p style="height:36px; line-height:36px; padding:0 0 0 15px; color:blue; background:#ccc;">matrix(cosθ,sinθ,-sinθ,cosθ,0,0)</p>'+
                            '结合矩阵公式，就有：<br/>'+
                            '<p style="height:36px; line-height:36px; padding:0 0 0 15px; color:blue; background:#ccc;">x‘ = x*cosθ-y*sinθ+0 = x*cosθ-y*sinθ</p>'+
                            '<p style="height:36px; line-height:36px; padding:0 0 0 15px; color:blue; background:#ccc;">y‘ = x*sinθ+y*cosθ+0 = x*sinθ+y*cosθ</p>'+
                            '目前属性值：<span id="matrix-rotate-value">0</span><br/>'+
                            '目前角度：<span id="matrix-rotate-angle">0</span><br/>'+
                            '旋转角度（0-360）：<input type="range" id="matrix-rotate-input" value="1" min="0" max="360" step="1" /><br/>'+
                            '<div style="width:100px;height:100px;background:#ccc; transform:matrix(1,0,0,1,0,0); transition:all 0.5s;" id="matrix-rotate"></div><br/>'+
                            '<h3>拉伸（skew）</h3>'+
                            '拉伸也用到了三角函数，不过是tanθ，其只于b, c两个参数相关，书写如下（注意y轴倾斜角度在前）：<br/>'+
                            '<p style="height:36px; line-height:36px; padding:0 0 0 15px; color:blue; background:#ccc;">matrix(1,tan(θy),tan(θx),1,0,0)</p>'+
                            '套用矩阵公式计算结果为：<br/>'+
                            '<p style="height:36px; line-height:36px; padding:0 0 0 15px; color:blue; background:#ccc;">x‘ = x+y*tan(θx)+0 = x+y*tan(θx) </p>'+
                            '<p style="height:36px; line-height:36px; padding:0 0 0 15px; color:blue; background:#ccc;">y‘ = x*tan(θy)+y+0 = x*tan(θy)+y</p>'+
                            '其中，θx表示x轴倾斜的角度，θy表示y轴，两者并无关联。'+
                            '目前属性值：<span id="matrix-skew-value">0</span><br/>'+
                            '倾斜角度-X(0-89)：<input type="range" id="matrix-skew-x" value="1" min="0" max="89" step="1" /><br/>'+
                            '旋转角度-Y(0-89)：<input type="range" id="matrix-skew-y" value="1" min="0" max="89" step="1" /><br/>'+
                            '<div style="width:100px;height:100px;background:#ccc; transform:matrix(1,0,0,1,0,0); transition:all 0.5s;" id="matrix-skew"></div><br/>'+
                            '<h3>matrix用处-镜像对称效果</h3>'+
                            '镜像对称围绕的那个点就是CSS3中transform变换的中心点，因为该轴永远经过原点，因此，任意对称轴都可以用y = k * x表示。则matrix表示就是：<br/>'+
                            '<p style="height:36px; line-height:36px; padding:0 0 0 15px; color:blue; background:#ccc;">matrix((1-k*k) / (1+k*k), 2k / (1 + k*k), 2k / (1 + k*k), (k*k - 1) / (1+k*k), 0, 0)</p>'+
                            '如何得到的呢,如下图，已经y=kx，并且知道点(x, y)坐标，求其对称点(x’, y’)的坐标<br/>'+
                            '<img src="./images/css-transforms-matrix-mirror.png" /><br/>'+
                            '一是垂直，二是中心点在轴线上，因此有：<br/>'+
                            '(y-y‘) / (x - x’) = -1/ k → ky-ky‘ = -x+x’<br/>'+
                            '(x + x‘) / 2 * k = (y + y’)/2 → kx+kx‘ = y+y’<br/>'+
                            '把x‘和y’提出来，就有：<br/>'+
                            'x‘ = (1-k*k)/(k*k+1) *x + 2k/(k*k+1) *y;<br/>'+
                            'y‘ = 2k/(k*k+1) *x + (k*k-1)/(k*k+1) *y;<br/>'+
                            '再结合矩阵公式<br/>'+
                            'x’ = ax+cy+e;<br/>'+
                            'y‘ = bx+dy+f;<br/>'+
                            '可以得到：<br/>'+
                            'a = (1-k*k)/(k*k+1);<br/>'+
                            'b = 2k/(k*k+1);<br/>'+
                            'c = 2k/(k*k+1);<br/>'+
                            'd = -(1-k*k)/(k*k+1);<br/>'+
                            '例：改变对称轴的角度：<br/>'+
                            '目前属性值：<span id="matrix-mirror-value">0</span><br/>'+
                            '目前角度：<span id="matrix-mirror-angle">0</span><br/>'+
                            '旋转角度（0-360）：<input type="range" id="matrix-mirror-input" value="1" min="0" max="360" step="10" /><br/>'+
                            '<div class="clearfix">'+
                                '<img id="martrix-origin" style="width:200px; float:left;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520243089508&di=d7b6ba3da52bb6fb0df82d7d4830e170&imgtype=0&src=http%3A%2F%2Fpic17.nipic.com%2F20111102%2F8185414_173746037356_2.jpg" />'+
                                '<div style="height:266px; position:relative; float:left; margin:0 0 0 200px;">'+
                                    '<img id="matrix-mirror" style="width:200px; transform:matrix(1,0,0,1,0,0); transition:all 0.5s;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520243089508&di=d7b6ba3da52bb6fb0df82d7d4830e170&imgtype=0&src=http%3A%2F%2Fpic17.nipic.com%2F20111102%2F8185414_173746037356_2.jpg" /><br/>'+
                                    '<div id="matrix-mirror-center" style="width:200px; height:4px; background:#000; position:absolute; left:0; top:131px;">'+
                                        '<div style="width:20px; height:4px; transform:rotateZ(45deg); position:absolute; right:-2px; bottom:7px; background:#000;"></div>'+
                                        '<div style="width:20px; height:4px; transform:rotateZ(-45deg); position:absolute; right:-2px; bottom:-7px; background:#000;"></div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<h3>3D变换中的矩阵</h3>'+
                            '从二维到三维，是从4到9；而在矩阵里头是从3*3变成4*4, 9到16了<br/>'+
                            '其实，本质上很多东西都与2D一致的，只是复杂度不一样而已。这里就举一个简单的3D缩放变换的例子。<br/>'+
                            '对于3D缩放效果，其矩阵如下：<br/>'+
                            '<img src="./images/css-transforms-matrix8.gif" /><br/>'+
                            '代码表示就是：<br/>'+
                            '<p style="height:36px; line-height:36px; padding:0 0 0 15px; color:blue; background:#ccc;">transform: matrix3d(sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1)</p>'+
                            '',
                    en:'rotate example-perspective',
                    animate:[],
                    other:  '',
                    status:false
                }]
            }
        }],
        other_list:[{
            title:'CSS3其他属性',
            animation:{
                active_index:-1,
                list:[]
            }
        }],
        canvas:{
            mode:0,
            MAX_RECF_SPACE:250,
        },
    },
    mounted:function(){
        document.getElementById('matrixShowTranslate').addEventListener('click',function(e){
            e.stopPropagation();
            var elem = document.getElementById('matrix-translate')
            elem.style.transform = 'matrix(1,0,0,1,30,30)'
            setTimeout(function(){
                elem.style.transform = 'none'
            },2000)
        },false)
        var elemX = document.getElementById('matrix-scale-x'),
            elemY = document.getElementById('matrix-scale-y'),
            eleminput = document.getElementById('matrix-scale-value'),
            scale = document.getElementById('matrix-scale'),
            X = 1,
            Y = 1
        elemX.addEventListener('change',function(e){
            e.stopPropagation();

            X = elemX.value;
            eleminput.innerHTML = 'matrix('+X+',0,0,'+Y+',0,0)'
            scale.style.transform = 'matrix('+X+',0,0,'+Y+',0,0)'
        },false)
        elemY.addEventListener('change',function(e){
            e.stopPropagation();

            Y = elemY.value;
            eleminput.innerHTML = 'matrix('+X+',0,0,'+Y+',0,0)'
            scale.style.transform = 'matrix('+X+',0,0,'+Y+',0,0)'
        },false)

        var rotateValue = document.getElementById('matrix-rotate-value'),
            rotateInput = document.getElementById('matrix-rotate-input'),
            rotateAngle = document.getElementById('matrix-rotate-angle'),
            rotate = document.getElementById('matrix-rotate')
        rotateInput.addEventListener('change',function(e){
            e.stopPropagation();

            var value = rotateInput.value,
                a = Math.cos(2*Math.PI/360 * value),
                b = Math.sin(2*Math.PI/360 * value),
                ac = '';
            ac = 'matrix('+a+','+b+','+(-b)+','+a+',0,0)'
            rotateValue.innerHTML = ac
            rotateAngle.innerHTML = value
            rotate.style.transform = ac
        },false)

        var skewValue = document.getElementById('matrix-skew-value'),
            skewX = document.getElementById('matrix-skew-x'),
            skewY = document.getElementById('matrix-skew-y'),
            skew = document.getElementById('matrix-skew'),
            sx = 0,
            sy = 0
        skewX.addEventListener('change',function(e){
            e.stopPropagation();

            sx = Math.tan(Math.PI / 180 * skewX.value)
            skewValue.innerHTML = 'matrix(1,'+sy+','+sx+',1,0,0)'
            skew.style.transform = 'matrix(1,'+sy+','+sx+',1,0,0)'
        },false)
        skewY.addEventListener('change',function(e){
            e.stopPropagation();

            sy = Math.tan(Math.PI / 180 * skewY.value)
            skewValue.innerHTML = 'matrix(1,'+sy+','+sx+',1,0,0)'
            skew.style.transform = 'matrix(1,'+sy+','+sx+',1,0,0)'
        },false)

        var mirrorValue = document.getElementById('matrix-mirror-value'),
            mirrorInput = document.getElementById('matrix-mirror-input'),
            mirrorAngle = document.getElementById('matrix-mirror-angle'),
            mirrorCenter = document.getElementById('matrix-mirror-center'),
            mirrorOrigin = document.getElementById('martrix-origin'),
            mirror = document.getElementById('matrix-mirror')
        mirrorInput.addEventListener('change',function(e){
            e.stopPropagation();

            var value = mirrorInput.value,
                k = Math.tan(-1 * value * Math.PI / 180),
                u1 = (1-k*k) / (k*k+1),
                u2 = 2 * k / (k*k+1),
                ac = ''
            ac = 'matrix('+u1+','+u2+','+u2+','+(-u1)+',0,0)'
            mirrorValue.innerHTML = ac
            mirrorAngle.innerHTML = value
            // mirrorOrigin.style.transform = 'rotateZ('+value+'deg)'
            mirror.style.transform = ac
            mirrorCenter.style.transform = 'rotateZ('+value+'deg)'
        },false)
        this.initTextPath()
    },
    methods:{
        initTextPath:function(){
            var canvas = document.getElementById('text-path'),
                ctx = canvas.getContext('2d')
        },
        drawLinePathAndText:function(ctx){
            if(this.canvas.mode == 0){
                this.drawLinePath()
            }else{
                this.drawArcPath()
            }
        },
        drawLinePath:function(ctx){

        },
        drawArcPath:function(ctx){

        },
        changeIndex:function(pindex){
            if(this.current_index == pindex){
                this.current_index = -1
            }else{
                this.current_index = pindex
            }   
        },
        changeAnimationStatus:function(one,index,pindex){
            var active_index = this.list[pindex].animation.active_index
            if(active_index > -1 && active_index != index){
                this.list[pindex].animation.list[active_index].status = false
            }
            one.status = !one.status
            if(!one.status){
                this.list[pindex].animation.active_index = -1
            }else{
                this.list[pindex].animation.active_index = index
            }
        }
    }
})
