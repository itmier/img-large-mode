<!--
 * @Author: Tmier
 * @Date: 2021-06-02 09:17:51
 * @LastEditTime: 2021-06-02 15:08:28
 * @Description: 
 * @LastModifiedBy: Tmier
-->
<template>
  <div class="img-large-mode">
    <button @click="openMask">点击</button>
    <bg-mask :visible.sync="visible" v-if="visible" @close="closeMask"></bg-mask>
  </div>
</template>

<script>
//import x from ''
import BgMask from './BgMask'
export default {
  components: {
    BgMask
  },
  data() {
    return {
      visible: false
    }
  },
  computed: {},
  methods: {
    show() {
      this.visible = true
    },
    openMask() {
      this.show()
    },
    closeMask() {
      this.visible = false
    }
  }
}
</script>

<style lang='less' scoped>
//@import url()
.img-large-mode {
}
</style>