<template>
  <footer class="Sie-footer" :style="{ height }">
    <slot ></slot>
  </footer>
</template>

<script>
  export default {
    name: 'SieFooter',
    componentName: 'SieFooter',
    props: {
      height: {
        type: String,
        default: '50px'
      }
    },
    mounted(){
        const $el = this.$el;
        // console.log($el);
        // console.log($el.parentNode);
        $el.parentNode.style.marginBottom = 60+"px";
    }
  };
</script>
<style lang="less">
.Sie-footer{
    width:100%;
    background-color: rgb(209, 203, 209);
    position: fixed;
    bottom: 0px;
    display: flex;
    justify-content: space-around;
    align-items: center ;
    // text-align: center;
}
</style>
