<script setup>
import { onMounted, onBeforeUnmount } from "vue"
import { init, graphic } from "echarts"

const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const y1 = [9, 12, 15, 18, 15, 12, 9, 12, 15, 18, 15, 12]
const y2 = [-9, -12, -15, -18, -15, -12, -9, -12, -15, -18, -15, -12]

let chart
function renderChart() {
  chart = init(document.getElementById('bar'))
  const barWidth = "10%"
  const data1 = [
    {coord: [0, 9]},
    {coord: [1, 12]},
    {coord: [2, 15]},
    {coord: [3, 18]},
    {coord: [4, 15]},
    {coord: [5, 12]},
    {coord: [6, 9]},
    {coord: [7, 12]},
    {coord: [8, 15]},
    {coord: [9, 18]},
    {coord: [10, 15]},
    {coord: [11, 12]}
  ]
  const data2 = [
    {coord: [0, -9]},
    {coord: [1, -12]},
    {coord: [2, -15]},
    {coord: [3, -18]},
    {coord: [4, -15]},
    {coord: [5, -12]},
    {coord: [6, -9]},
    {coord: [7, -12]},
    {coord: [8, -15]},
    {coord: [9, -18]},
    {coord: [10, -15]},
    {coord: [11, -12]}
  ]

  const option = {
    xAxis: {
      data: x,
      axisLabel: {
        color: "#999",
        formatter: "{value} 月"
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(40, 103, 168, .3)"
        }
      }
    },
    yAxis: {
      axisLabel: {
        color: "#999"
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(40, 103, 168, .3)"
        }
      }
    },
    grid: {
      top: 20,
      left: 20,
      right: 20,
      bottom: 20,
      containLabel: true
    },
    series: [
      {
        name: "正值柱状图",
        type: "bar",
        stack: "one",
        itemStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 1,
              color: "rgba(0, 0, 0, 0)"
            },
            {
              offset: .5,
              color: "#466e71"
            },
            {
              offset: 0,
              color: "#eb9b44"
            }
          ])
        },
        barWidth,
        markPoint: {
          symbol: "circle",
          itemStyle: {
            color: "#eb9b44",
            shadowColor: "#eb9b44",
            shadowBlur: 20
          },
          symbolSize: [10, 10],
          symbolOffset: [0, 0],
          data: data1
        },
        data: y1
      },
      {
        name: "负值柱状图",
        type: "bar",
        stack: "one",
        itemStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(0, 0, 0, 0)"
            },
            {
              offset: .5,
              color: "#774a75"
            },
            {
              offset: 1,
              color: "#b34d69"
            }
          ])
        },
        barWidth,
        markPoint: {
          symbol: "circle",
          itemStyle: {
            color: "#b34d69",
            shadowColor: "#b34d69",
            shadowBlur: 20
          },
          symbolSize: [10, 10],
          symbolOffset: [0, 0],
          data: data2
        },
        data: y2
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
      <div class="title">双轴柱状图</div>
      <div class="body">
        <div class="wrap-container">
          <div class="chart" id="bar"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  left: 975px;
  top: 690px;
  width: 895px;
  height: 400px;
  .chart {
    width: 100%;
    height: 95%;
  }
}
</style>