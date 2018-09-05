<template>
    <div class="as">
        <!-- <div class="n_tit">新闻信息</div> -->
        <div class="tt">
            <div class="h-menu">
                <ul v-for="(item, name) in h_name" :key="name">
                    <li>{{item.name}}</li>
                </ul>
            </div>
        </div>
        <div @click="to_item(index)" v-for="(item,index) in news" :key="index">
            <div class='post_container'>
                <div class="inf">
                    <img :src="item.avatar" class='s_img'/>
                    <i>{{item.title}}</i>
                </div>
                <img :src="item.imgulr" class='b_img'/>
                <p>{{item.content}}</p>
                <p class="n_show" ref="poid" id="poid">{{item.postId}}</p>
                <!-- <p class="n_show" ref="poid">{{$store.state.postId}}</p> -->
                <div class="f_inf">
                    <img src='/static/images/icon/chat.png' class='s2_img'/>
                    <i>92</i>
                    <img src='/static/images/icon/chat1.png' class='s2_img'/>
                    <i>65</i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
var postsData = require('../../assets/js/posts-data.js')
export default {
    name: "News",
    data () {
        return {
            news:[],
            imgurl:'../../static/image/avatar/1.png',
            h_name:[
                {name: '要闻'},
                {name: '视频'},
                {name: '推荐'},
                {name: '佛山'},
                {name: '新时代'},
                {name: '娱乐'},
                {name: '体育'},
                {name: '军事'},
                {name: 'NBA'},
                {name: '国际'},
                {name: '法制'},
                {name: '科技'},
                {name: '财经'}
            ]
        }
    },
  methods:{
    to_item(index){
        // let index = this.news.postId;
        this.$store.state.postId = index;
        // newsitem.data().det = this.news[index];
        this.$router.push({path: '/NewsItem'}); 
        return 1;
      },
  },
  mounted(){
    this.news = postsData.postList;
    // let index =  this.$store.state.postId;
    // console.log(newsitem.data().det);
    // let a = this.$store.state.postId;
  }
};
</script>
<style lang="less">
.as{
    text-align: left;
    // width: 370px;
    height: 600px;
    // border: solid red 1px;
    border-radius: 4px;
    margin: 0 auto;
    overflow-y: scroll;
    overflow-x: hidden;
    .tt{
        height: 28px;
        /* 设置30px的目的为了隐藏滚动条 */
        overflow: hidden;
        .h-menu{
            width: 100%;
            height: 46px;
            /* 这里设置46px比.tt的高多16px也是为达到隐藏滚动条的目的 */
            overflow-x: auto;
            overflow-y: hidden;
            white-space: nowrap;
            float: left;
            ul{
                width: 1000px;
                margin: 0px;
                padding: 0px;
                li{
                    list-style: none;
                    float: left;
                    margin-left: 10px;
                    color: rgb(112, 110, 110);
                    font-size: 16px;
                }
            }
        }
    }
    // .n_tit{
    //     text-align: center;
    // }
}
.post_container{
    margin-top: 10px;
    margin-bottom: 30px;
    border: solid 1px #ededed;
    padding-bottom: 5px;
    .inf{
        overflow: hidden;
        .s_img{
            width: 35px;
            height: 35px;
            margin-right: 8px;
        }
        i{
            font-style: normal;
            position: relative;
            top: -10px;
        }
    }
    .b_img{
        width: 100%;
        height: 200px;
    }
    .f_inf{
        // float: left;
        .s2_img{
            width: 18px;
            height: 18px;
            margin-left: 10px;
        }
        i{
            font-style: normal;
        }
    }
}
// p{
//     font-size: 16px;
//     margin: 0px;
// }
</style>
