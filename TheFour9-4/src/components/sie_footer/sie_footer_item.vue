<template>
    <div :class="footer_item"  @click="c_color" ref="footer_item">
        <!-- <i></i> -->
        <div class="icon">
            <slot name="icon"></slot>
        </div>
        <div class="value">
            <slot name="value"></slot>
        </div>
        
        <!-- <span>{{value}}</span> -->
    </div>
</template>
<script>
export default {
    name: 'siefooteritem',
    componentName: 'siefooteritem',
    data(){
        return{
            value: '有了吗',
            gcolor: 'true'
        }
    },
    methods:{
         c_color(){
            let a = this.$refs.footer_item;
            this.gcolor = !this.gcolor;
            // this.gcolor = false;
            console.log(a.style.color);
            if(this.gcolor == false){
                a.style.color = 'red'
            }
            if(this.gcolor == true){
                a.style.color = 'rgb(65, 60, 60)'
            }
        }
    },
}
</script>
<style lang="less">
.footer_item{
    text-align: center;
    display: inline-block;
    color: rgb(97, 95, 93);
    .icon{
        width: 100%;
        i {
            font-size: 24px;
            // color: rgb(97, 95, 93);
            // line-height: 0;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
    .value{
        p{
            font-size: 14px;
            line-height: 0;
            margin-top: 10px;
        }
        span{
            font-size: 14px;
            line-height: 0;
            display: block;
            margin-top: 10px;
        }
    }
}
</style>
