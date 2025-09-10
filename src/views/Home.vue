<script setup>
import { onMounted, ref, onBeforeUnmount } from "vue"
import { setScreenSize } from "@/utils/size"

import RankingList from "@/components/home/RankingList.vue"
import SeamlessScroll from "@/components/home/SeamlessScroll.vue"
import Pyramid from "@/components/home/Pyramid.vue"
import ScrollArc from "@/components/home/ScrollArc.vue"
import DoubleBar from "@/components/home/DoubleBar.vue"
import RingPin from "@/components/home/RingPin.vue"
import RotateColorful from "@/components/home/RotateColorful.vue"
import CircleRunaway from "@/components/home/CircleRunaway.vue"
import ScanRadius from "@/components/home/ScanRadius.vue"
import CakeLinkage from "@/components/home/CakeLinkage.vue"
import Trend from "@/components/home/Trend.vue"
import DynamicLine from "@/components/home/DynamicLine.vue"
import StaffMix from "@/components/home/StaffMix.vue"
import FlashCloud from "@/components/home/FlashCloud.vue"
import RingPie from "@/components/home/RingPie.vue"
import ColorfulRadar from "@/components/home/ColorfulRadar.vue"
import DynamicList from "@/components/home/DynamicList.vue"
import Bar3D from "@/components/home/Bar3D.vue"
import ColorfulArea from "@/components/home/ColorfulArea.vue"
import Rainbow from "@/components/home/Rainbow.vue"
import Gauge from "@/components/home/Gauge.vue"
import WaterPolo from "@/components/home/WaterPolo.vue"
import CircleNesting from "@/components/home/CircleNesting.vue"

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
      <DynamicLine />

      <StaffMix />
      <FlashCloud />
      <RingPie />
      <ColorfulRadar />

      <DynamicList />
      <Bar3D />
      <ColorfulArea />

      <Rainbow />
      <Gauge />
      <WaterPolo />
      <CircleNesting />

      <div class="divider"></div>
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

    .divider {
      position: absolute;
      left: 50px;
      top: 3253px;
      width: 90%;
      height: 30px;
      border: none;
      background: transparent;
    }
  }
}
</style>