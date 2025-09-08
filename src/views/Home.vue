<script setup>
import { onMounted, ref, onBeforeUnmount } from "vue"
import { setScreenSize } from "@/utils/size"

import RankingList from "@/components/RankingList.vue"
import SeamlessScroll from "@/components/SeamlessScroll.vue"
import Pyramid from "@/components/Pyramid.vue"
import ScrollArc from "@/components/ScrollArc.vue"
import DoubleBar from "@/components/DoubleBar.vue"
import RingPin from "@/components/RingPin.vue"
import RotateColorful from "@/components/RotateColorful.vue"
import CircleRunaway from "@/components/CircleRunaway.vue"
import ScanRadius from "@/components/ScanRadius.vue"
import CakeLinkage from "@/components/CakeLinkage.vue"
import Trend from "@/components/Trend.vue"

const editor = ref(null)
onMounted(() => {
  handleScreenSizeChange(editor.value)
  window.onresize = handleScreenSizeChange
})

function handleScreenSizeChange() {
  setScreenSize(editor.value)
}

onBeforeUnmount(() => {
  window.onresize = null
})
</script>

<template>
  <div class="home-container">
    <div class="wrap" ref="editor">
      <div class="top"></div>

      <RankingList />
      <SeamlessScroll />
      <Pyramid />

      <ScrollArc />
      <DoubleBar />

      <RingPin />
      <RotateColorful />
      <CircleRunaway />
      <ScanRadius />

      <CakeLinkage />
      <Trend />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  .wrap {
    transform-origin: 0 0 0;
    background: rgb(0, 0, 0) url(@/assets/images/background/bj.jpg) 50% 0 / contain no-repeat;
    min-width: auto;
    width: 1920px;
    min-height: auto;
    height: 1080px;
    overflow: auto;
    .top {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 80px;
      background: transparent url(@/assets/images/background/top_nav.png) 65% 0 no-repeat;
      overflow: hidden;
    }
  }
}
</style>