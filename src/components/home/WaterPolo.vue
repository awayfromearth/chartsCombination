<script setup>
import { onMounted, onBeforeUnmount } from "vue"
import { init } from "echarts"

import "echarts-liquidfill"

let chart
function renderChart() {
  chart = init(document.getElementById("polo"))

  const option = {
    series: [
      {
        type: "liquidFill",
        data: [0.45],
        radius: "70%",
        color: ["#00b9f5"],
        backgroundStyle: {
          color: "rgba(0, 0, 0, .5)",
          borderColor: "#007bff",
          borderWidth: 3,
          shadowColor: "rgba(0, 123, 225, .4)",
          shadowBlur: 20
        },
        outline: {
          show: false
        }
      }
    ]
  }

  chart.setOption(option, true)

  window.addEventListener("resize", chart.resize)
}

onMounted(renderChart)

onBeforeUnmount(() => {
  window.removeEventListener("resize", chart.resize)
})
</script>

<template>
  <div class="wrap-container container">
    <div class="content">
      <div class="title">水球图</div>
      <div class="body">
        <div class="wrap-container">
          <div class="chart" id="polo"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  left: 974px;
  top: 2838px;
  width: 432px;
  height: 400px;

  .chart {
    width: 100%;
    height: 100%;
  }
}
</style>