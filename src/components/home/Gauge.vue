<script setup>
import { onBeforeUnmount, onMounted } from "vue"
import { init } from "echarts"

let chart, timer
function renderChart() {
  chart = init(document.getElementById("gauge"))

  const option = {
    tooltip: {
      formatter: "{a} <br />{c} {b}"
    },
    series: [
      {
        name: "速度",
        type: "gauge",
        min: 0,
        max: 220,
        splitNumber: 11,
        axisLine: {
          lineStyle: {
            color: [[0.09, "lime"], [0.82, "#1e90ff"], [1, "#ff4500"]],
            width: 3,
            shadowColor: "#fff",
            shadowBlur: 10
          }
        },
        axisLabel: {
          fontWeight: "bolder",
          color: "#fff",
          shadowColor: "#fff",
          shadowBlur: 10
        },
        axisTick: {
          length: 15,
          lineStyle: {
            color: "auto",
            shadowColor: "#fff",
            shadowBlur: 10
          }
        },
        splitLine: {
          length: 25,
          lineStyle: {
            width: 3,
            color: "#fff",
            shadowColor: "#fff",
            shadowBlur: 10
          }
        },
        pointer: {
          shadowColor: "#fff",
          shadowBlur: 5
        },
        title: {
          textStyle: {
            fontWeight: "bolder",
            fontSize: 20,
            fontStyle: "italic",
            color: "#fff",
            shadowColor: "#fff",
            shadowBlur: 10
          }
        },
        detail: {
          offsetCenter: [0, "50%"],
          textStyle: {
            fontWeight: "bolder",
            fontSize: 25,
            color: "#fff"
          }
        },
        data: [
          {
            value: 40,
            name: "km/h"
          }
        ]
      }
    ]
  }

  chart.setOption(option, true)

  timer = setInterval(() => {
    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    chart.setOption(option, true)
  }, 2000)

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
      <div class="title">仪表盘</div>
      <div class="body">
        <div class="wrap-container">
          <div class="chart" id="gauge"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  left: 512px;
  top: 2838px;
  width: 432px;
  height: 400px;

  .chart {
    width: 100%;
    height: 100%;
  }
}
</style>