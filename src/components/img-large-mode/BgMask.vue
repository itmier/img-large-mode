<!--
 * @Author: Tmier
 * @Date: 2021-06-02 09:22:04
 * @LastEditTime: 2021-06-02 16:40:20
 * @Description: 
 * @LastModifiedBy: Tmier
-->
<template>
  <transition name="fade" v-if="visible">
    <div>
      <div class="bg-mask" :style="{width: bodyWidth + 'px', height: bodyHeight + 'px'}" @click="closeAll">
        <!-- <div class="content-box"></div> -->
      </div>
      <div class="content-box-body" :style="{width: bodyWidth + 'px', height: (bodyHeight - 100) + 'px'}" @click="closeAll" @mousewheel="handleMousewheel">
        <!-- <slot></slot> -->
        <img
          :src="imgURL"
          alt
          class="img-custom"
          ref="customImg"
          :style="{
          transform: `scale(${activeImg.scale}) rotate(${activeImg.rotate}deg)`,
          transition: `${aniOpenFlag && aniName} 0.12s linear`
        }"
        />
      </div>
      <div class="content-box-footer">
        <!-- <slot name="footer"></slot> -->
        <abbr title="放大" @click="enLarge">
          <span class="iconfont icon-fangda icon"></span>
        </abbr>
        <abbr title="缩小" @click="narrowImg">
          <span class="iconfont icon-suoxiao icon"></span>
        </abbr>
        <abbr title="还原" @click="initImg">
          <span class="iconfont icon-huanyuan icon"></span>
        </abbr>

        <abbr title="左转" @click="rotate('left')">
          <span class="iconfont icon-xiangyouxuanzhuan icon"></span>
        </abbr>
        <abbr title="右转" @click="rotate('right')">
          <span class="iconfont icon-xiangzuoxuanzhuan icon"></span>
        </abbr>
        <abbr title="下载">
          <span class="iconfont icon-xiazai icon"></span>
        </abbr>
      </div>
    </div>
  </transition>
</template>

<script>
//import x from ''
export default {
  name: 'bg-mask',
  components: {},
  data() {
    return {
      aniOpenFlag: true,
      activeImg: {
        scale: 1,
        rotate: 0
      },
      mockSrc: require('../../assets/logo.png'),
      bodyWidth: window.innerWidth,
      bodyHeight: window.innerHeight
    }
  },
  props: {
    imgData: {
      default: ''
    },
    visible: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    imgURL() {
      if (Object.prototype.toString.call(this.imgData) == '[object String]') {
        return this.imgData
      } else {
        return ''
      }
      // if (Object.prototype.toString.call(this.imgData) == '[object Array]') {
      //   return ''
      // }
    },
    aniName() {
      return this.aniOpenFlag ? 'all' : 'none'
    }
  },
  created() {
    window.addEventListener('resize', this.initMask)
  },
  methods: {
    rotate(direction) {
      this.aniOpenFlag = true
      let rotate = this.activeImg.rotate
      rotate = direction == 'right' ? rotate + 90 : rotate - 90
      this.activeImg.rotate = rotate
    },
    narrowImg() {
      let scale = this.activeImg.scale
      scale -= 0.1
      if (scale <= 0.1) {
        scale = 0.1
      }
      this.activeImg.scale = scale
    },
    enLarge() {
      let scale = this.activeImg.scale
      scale += 0.1
      if (scale >= 5) {
        scale = 5
      }
      this.activeImg.scale = scale
    },
    handleMousewheel(e) {
      if (e.deltaY < 0) {
        this.enLarge()
      }
      if (e.deltaY > 0) {
        this.narrowImg()
      }
    },
    initMask() {
      this.bodyWidth = window.innerWidth
      this.bodyHeight = window.innerHeight
    },
    initImg() {
      this.aniOpenFlag = false
      this.activeImg = {
        scale: 1,
        rotate: 0
      }
    },
    closeAll() {
      this.initImg()
      this.$emit('close')
    }
  }
}
</script>

<style lang='less' scoped>
//@import url()
@import './styles/index.css';
.bg-mask {
  background: #000;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  color: #fff;
  z-index: 9998;
  overflow: hidden;
}
.content-box-body {
  position: fixed;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20px;
  img {
    // width: 100%;
    max-width: 100%;
    max-height: 100%;
  }
}
.content-box-footer {
  position: fixed;
  bottom: 20px;
  z-index: 10000;
  left: 50%;
  right: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  width: 450px;
  height: 45px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-around;
  .icon {
    color: #fff;
    opacity: 0.6;
    font-size: 26px;
    &:hover {
      opacity: 1;
    }
  }

  & > abbr {
    font-size: 20px;
    cursor: pointer;
    -webkit-app-region: no-drag;
  }
  abbr[title] {
    border-bottom: none !important;
    text-decoration: none !important;
  }
}
</style>