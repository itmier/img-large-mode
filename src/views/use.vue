<!--
 * @Author: Tmier
 * @Date: 2021-06-02 15:35:52
 * @LastEditTime: 2021-06-03 11:25:24
 * @Description: 
 * @LastModifiedBy: Tmier
-->
<template>
  <div class="use">
    <button @click="openMask">点击</button>
  </div>
</template>

<script>
//import x from ''
export default {
  components: {},
  data() {
    return {
      imgData: require('../assets/logo.png'), // 本地图片
    }
  },
  computed: {},
  methods: {
    openMask() {
      this.$_openLargeMode.show({
        imgData: `https://user-gold-cdn.xitu.io/2019/12/7/16ee08923006f96b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1`,
        // imgData: this.imgData,
        buttonOptions: {
          // downloadButton: false
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
//@import url()
</style>