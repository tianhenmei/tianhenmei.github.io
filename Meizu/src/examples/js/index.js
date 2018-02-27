"use strict";
var app = new Vue({
    el:"#app",
    data:{
        fontSize:16,
        current_index:1,
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
                    en:'example-rotate',
                    animate:[{
                        en:'in',
                        classname:'scaleChangeIn'
                    },{
                        en:'out',
                        classname:'scaleChangeIn origin0-0'
                    }],
                    status:false
                }]
            }
        }],
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
