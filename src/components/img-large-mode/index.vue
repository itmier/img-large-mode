<!--
 * @Author: Tmier
 * @Date: 2021-06-02 09:17:51
 * @LastEditTime: 2021-06-02 22:46:00
 * @Description: 
 * @LastModifiedBy: Tmier
-->
<template>
  <div class="img-large-mode">
    <!-- 引入遮罩组件,配置相关属性与方法 -->
    <bg-mask :visible.sync="visible" v-if="visible" @close="closeMask" :imgData="imgData" :buttonOptions="buttonOptions"></bg-mask>
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
      // 按钮配置
      buttonOptions: {},
      imgData: '',
      visible: false
    }
  },
  computed: {},
  methods: {
    // 打开遮罩方法
    show(opt) {
      // 对用户传入的的opt进行相关设置
      if(opt) {
        this.imgData = opt.imgData
        this.buttonOptions = opt.buttonOptions
      }
      // 打开遮罩
      this.visible = true
    },
    // 关闭遮罩方法
    closeMask() {
      this.visible = false
      let imgLargeDomArr = document.querySelectorAll('.img-large-mode')
      // 删除产生的dom
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