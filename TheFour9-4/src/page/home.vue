<template>
  <div class="MySwiper" >
    <router-view></router-view>
    <SieFooter>
        <div @click="t_one">
            <siefooteritem>
                <i slot="icon" class="iconfont icon-tuijianxiangmu"></i>
                <p slot="value">推荐</p>
            </siefooteritem>
        </div>
        <div @click="t_two">
            <siefooteritem>
                <i slot="icon" class="iconfont icon-tuijianxiangmu"></i>
                <p slot="value">推荐</p>
            </siefooteritem>
        </div>
        <div @click="t_three">
            <siefooteritem>
                <i slot="icon" class="iconfont icon-tuijianxiangmu"></i>
                <p slot="value">推荐</p>
            </siefooteritem>
        </div>
    </SieFooter>
  </div>
</template>

<script>
import  SieFooter  from '../components/sie_footer/sie_footer.vue'
import  siefooteritem  from '../components/sie_footer/sie_footer_item.vue'
export default {
  name: 'home',
  components: {
    SieFooter,
    siefooteritem,
  },
  data () {
    return {
      msg: '原生Swiper',
    }
  },
  methods:{
    t_one(){
      this.$router.push({path:'/home/one'})
    },
    t_two(){
      this.$router.push({path:'/home/two'})
    },
    t_three(){
      this.$router.push({path:'/home/three'})
    }
  },
  mounted(){
    //   console.log(typeof(siefooteritem));
  }
}
     
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = "less">
.MySwiper{
  text-align: center;
  margin: 0px;
}

</style>