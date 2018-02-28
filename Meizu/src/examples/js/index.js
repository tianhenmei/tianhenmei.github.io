"use strict";
var app = new Vue({
    el:"#app",
    data:{
        fontSize:16,
        current_index:1,
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
                    en:'example-cubic-bezier',
                    animate:[{
                        en:'',
                        classname:'move-x',
                        content:'<div class="same cubic-bezier-move"></div>'
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
                    other:  '<div class="per">'+
                                '<div class="per-div">perspective:{{p_value}}px</div>'+
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
                }]
            }
        }],
        other_list:[{
            title:'CSS3其他属性',
            animation:{
                active_index:-1,
                list:[]
            }
        }]
    },
    mounted:function(){
        
    },
    methods:{
        changeIndex:function(pindex){
            this.current_index = pindex
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
