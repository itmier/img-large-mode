# **img-large-mode**

**使用方式(示例)**

```js
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



```

| 方法                   | 描述                          |
| ---------------------- | ----------------------------- |
| $_openLargeMode.show() | 打开大图模式 , params: Object |



| 参数          | 描述                                   |
| ------------- | -------------------------------------- |
| imgData       | 图片数据,目前仅支持单张图片,String类型 |
| buttonOptions | 预览功能按钮,Object类型                |
|               | enLargeButton: Boolean                 |
|               | narrowImgButton: Boolean               |
|               | initImgButton: Boolean                 |
|               | leftButton: Boolean                    |
|               | rightButton: Boolean                   |
|               | downloadButton: Boolean                |