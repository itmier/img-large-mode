<!--
 * @Author: Tmier
 * @Date: 2021-06-02 15:35:52
 * @LastEditTime: 2021-06-02 22:44:40
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
    return {}
  },
  computed: {},
  methods: {
    openMask() {
      this.$_openLargeMode.show({
        imgData: `https://user-gold-cdn.xitu.io/2019/12/7/16ee08923006f96b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1`,
        buttonOptions: {
          downloadButton: false
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
//@import url()
</style>