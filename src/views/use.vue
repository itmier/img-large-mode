<!--
 * @Author: Tmier
 * @Date: 2021-06-02 15:35:52
 * @LastEditTime: 2021-06-02 16:18:55
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
        imgData: `https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f06e07b54c2a423d82e760a8f081e5ff~tplv-k3u1fbpfcp-watermark.image`
      })
    }
  }
}
</script>

<style lang='less' scoped>
//@import url()
</style>