<template>
    <div class="as">
        <!-- det_inf -->
        <i @click="to_back"><button>&lt;返回</button></i>
        <img :src='det.imgulr' class='t_img'>
        <div class="a_inf">
            <img :src='det.avatar' class='s_img'>
            <i class='author'>{{det.author}}</i>
            <i class='author_t'>发表于</i>
            <i class='author_t'>24小时前</i>
        </div>
        <i class='t_tit'>{{det.title}}</i>
        <div class='c_img'>
            <div class='us_b'>
                <img src='/static/images/icon/collection.png' class='us_img'>
                <img src='/static/images/icon/share.png' class='us_img'>
            </div>
            <div class='line'></div>
        </div>
        <p class='m_text'>{{det.detail}}</p>
    </div>
</template>
<script>
var postsData = require('../../assets/js/posts-data.js')
import news from "./News.vue"

export default {
    name:'NewsItem',
    data(){
        return{
            det:[]
        }
    },
    methods:{
        to_back(){
            window.history.go(-1);
        }
    },
    mounted(){
        let index =  this.$store.state.postId;
        this.det = postsData.postList[index];
        console.log(this.det);
    }
}
</script>
<style lang="less">
.as{
    // width: 370px;
    // height: 600px;
    // border: solid red 1px;
    // border-radius: 4px;
    // margin: 0 auto;
    // overflow-y: scroll;
    // overflow-x: hidden;
    .t_img{
        width: 100%;
        height: 200px;
    }
    .s_img{
        width: 45px;
        height: 45px;
        margin-right: 8px;
    }
    i{
        font-size: 16px;
    }
    .author,.t_tit{
        font-weight:bold;
    }
    .c_img{
        margin-bottom: 3px;
        height: 40px;
        .us_b{
            float: right;
            z-index: 100;
            .us_img{
                width: 35px;
                height: 35px;
                margin-right: 10px;
                margin-left: 10px;
            }
        }
        .line{
            height: 0;
            border: solid 1px #949191;
            z-index: -100;
            position: relative;
            top: 15px;
        }
    }
}
</style>
