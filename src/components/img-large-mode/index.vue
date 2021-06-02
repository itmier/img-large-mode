<!--
 * @Author: Tmier
 * @Date: 2021-06-02 09:17:51
 * @LastEditTime: 2021-06-02 16:30:28
 * @Description: 
 * @LastModifiedBy: Tmier
-->
<template>
  <div class="img-large-mode">
    <bg-mask :visible.sync="visible" v-if="visible" @close="closeMask" :imgData="imgData"></bg-mask>
  </div>
</template>

<script>
//import x from ''
import BgMask from './BgMask'
export default {
  components: {
    BgMask
  },
  props: {},
  data() {
    return {
      imgData: '',
      visible: false
    }
  },
  computed: {},
  methods: {
    show(opt) {
      if(opt) {
        this.imgData = opt.imgData
      }
      this.visible = true
    },
    closeMask() {
      this.visible = false
      let imgLargeDomArr = document.querySelectorAll('.img-large-mode')
      if (imgLargeDomArr.length > 0) {
        for (let i = 0; i < imgLargeDomArr.length; i++) {
          imgLargeDomArr[i].parentNode.removeChild(imgLargeDomArr[i])
        }
      }
    }
  }
}
</script>

<style lang='less' scoped>
//@import url()
.img-large-mode {
}
</style>