<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <button @click="to_test">去实验页面</button>
    <button @click="to_prop">去props页面</button>
    <button @click="to_home" title="请用手机模式预览">去home页面</button>
    <button @click="to_news" title="请用手机模式预览">去资讯页面</button> -->
    <div class="nav">
      <img src="../assets/style/imgs/书.png" width="95" height="95">
      <div class="nav_r">
        <ul>
          <li @click="to_test">MyNotes</li>
          <li @click="to_movies">Movies</li>
          <li @click="to_home" title="请用手机模式预览">TestHome</li>
          <li @click="to_news" title="请用手机模式预览">News</li>
          <!-- <li title="请用手机模式预览"><img src="/static/images/link/cnblogs.png"></li> -->
          <!-- <li title="请用手机模式预览"><img src="/static/images/link/github.png"></li> -->
        </ul>
      </div>
    </div>
    <router-view class="c_router"></router-view>
    <div class="my_link">
      <a href="https://www.cnblogs.com/akun-2017/" title="本人博客园" class="mylink"><i class="iconfont icon-CN_cnblogs"></i></a>
      <a href="https://github.com/akun2017" title="本人GitHub" class="mylink"><i class="iconfont icon-github"></i></a>
      <a href="https://www.cnblogs.com/asheng2016/" title="有情连接"><i class="iconfont icon-CN_cnblogs"></i></a>
      <a href="https://github.com/xys2015/xys2015.github.io" title="有情连接"><i class="iconfont icon-github"></i></a>
      <!-- <i class="iconfont icon-github"></i> -->
    </div>
  </div>
</template>

<script>
import news from './news/News.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to My world!',
    }
  },
  components:{
    news
  },
  methods:{
    to_test(){
      // this.$routes.path="/index";
      this.$router.push({path: '/index'})
    },
    to_movies(){
       this.$router.push({path: '/movies'})
    },
    to_home(){
      this.$router.push({path: '/home'})
    },
    to_news(){
      this.$router.push({path: '/news'})
    }
  },
  // watch:{
  //       $route(to,from){
  //           console.log(to,from);
  //       }
  //   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello{
  text-align: center;
  .nav{
    height: 100px;
    width: 100%;
    position: fixed;
    top: 0px;
    background-color: #eaf0ed;
    z-index: 100;
    .nav_r{
      width: 70%;
      height: 100%;
      float: right;
      ul {
        list-style-type: none;
        padding: 0;
        margin: 0px;
        li {
          display: inline-block;
          height: 98px;
          margin: 0 10px;
          font-size: 22px;
          font-weight: 550;
          line-height: 100px;
        }
        li:hover{
          color: #42b983;
          border-bottom: solid #42b983 2px;
        }
      }
    }
  }
}
// a {
//   // color: #42b983;
//   text-decoration: none;
//   color: #1d1f1e;
// }
.my_link{
  position:fixed;
  top: 240px;
  right:6px;
  width: 40px;
  .mylink{
    text-decoration: none;
    color: #1d1f1e;
  }
  a{
    text-decoration: none;
  }
  .icon-github:hover{
    color: #24e78f;
  }
  .icon-CN_cnblogs:hover{
    color: #24e78f;
  }
}
.c_router{
  margin-top: 105px;
  // z-index: -100;
}
</style>
