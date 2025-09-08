<script setup>
import { onMounted, onBeforeUnmount } from "vue"
import { init } from "echarts"

let now = +new Date(2019, 1, 1), value = Math.random() * 1000, year, month, day
const gap = 24 * 60 * 60 * 1000
function getRandomData() {
  now = new Date(+now + gap)
  value += Math.random() * 25 - 12
  year = now.getFullYear()
  month = now.getMonth() + 1
  day = now.getDate()
  return {
    name: now.toString(),
    value: [
        year + "/" + month + "/" + day,
        Math.round(value)
    ]
  }
}

let chart, timer = null
function renderChart() {
  chart = init(document.getElementById("dt"))

  const data = []
  for (let i = 0; i < 1000; i++) {
    data.push(getRandomData())
  }
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#283b56"
        }
      }
    },
    grid: {
      top: "10%",
      left: "3%",
      right: "12%",
      bottom: "3%",
      containLabel: true
    },
    color: ["#b54c5d"],
    calculable: true,
    xAxis: {
      type: "time",
      name: "年-月-日",
      boundaryGap: false,
      splitNumber: 5,
      axisLabel: {
        formatter(value) {
          let date = new Date(value)
          year = date.getFullYear()
          month = date.getMonth() + 1
          day = date.getDate()
          return year + "-" + month < 10 ? "0" + month : month + "-" + day
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#2867a8",
        }
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      scale: true,
      name: "比特币（美元）",
      min: 0,
      boundaryGap: false,
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#2867a8"
        }
      },
      splitLine: {
        show: false
      }
    },
    series: [
      {
        name: "实时交易",
        type: "line",
        xAxisIndex: 0,
        yAxisIndex: 0,
        itemStyle: {
          opacity: 0
        },
        data,
        smooth: true
      }
    ]
  }

  chart.setOption(option, true)

  window.addEventListener("resize", chart.resize)

  if (!timer) {
    timer = setInterval(() => {
      data.shift()
      data.push(getRandomData())

      chart.setOption(option, true)
    }, 10000)
  }
}

onMounted(renderChart)

onBeforeUnmount(() => {
  window.removeEventListener("resize", chart.resize)
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<template>
  <div class="wrap-container container">
    <div class="content">
      <div class="title">动态轮播折线图</div>
      <div class="body">
        <div class="wrap-container">
          <div class="chart" id="dt"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  left: 1282px;
  top: 1548px;
  width: 586px;
  height: 400px;
  .chart {
    width: 100%;
    height: 100%;
  }
}
</style>