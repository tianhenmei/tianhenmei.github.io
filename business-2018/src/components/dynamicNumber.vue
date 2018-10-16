<template>
    <span class="dynamic-number">{{ratio.x.toFixed(0)}}</span>
</template>
<script>
    import TWEEN from 'tween';

    export default {
        name:"dynamicNumber",
        props:{
            num:{
                type:Number,
                default:0
            },
            wait:{
                type:Number,
                default:0
            },
            duration:{
                type:Number,
                default:500
            }
        },
        data(){
            return {
                ratio:{
                    x:0
                }
            }
        },
        watch:{
            num(){
                this.updateNum();
            },
        },
        mounted(){
            // setTimeout(() => {
            //     this.updateNum();
            // },500);
        },
        methods:{
            updateNum(){
                function animate () {
                    if (TWEEN.update()) {
                        requestAnimationFrame(animate)
                    }
                }
                this.ratio.x = 0;
                new TWEEN.Tween(this.ratio)
                    .delay(this.wait)
                    .to({
                        x:this.num
                    }, this.duration)
                    .start();

                animate();
            }
        }
    }
</script>