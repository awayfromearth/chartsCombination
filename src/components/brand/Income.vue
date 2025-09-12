<script setup>
import { onMounted, onBeforeUnmount } from "vue"
import { init, graphic } from "echarts"

let chart
function renderChart() {
  chart = init(document.getElementById("income"))

  const years = ["2015", "2016", "2017", "2018", "2019", "2020"]
  const data = [555, 896, 1935, 2922, 4508, 5000]

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(255, 255, 255, 0)"
              },
              {
                offset: .5,
                color: "rgba(255, 255, 255, 1)"
              },
              {
                offset: 1,
                color: "rgba(255, 255, 255, 0)"
              }
            ],
            global: false
          }
        }
      },
      formatter: value => value[0].marker + value[0].name + "年营业收入：<br />" + value[0].value + "万元"
    },
    grid: {
      top: "5%",
      left: "2%",
      right: "2%",
      bottom: 0,
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        axisLine: {
          show: false
        },
        axisLabel: {
          color: "#24c4ff",
          margin: 15,
          formatter: "{value}年"
        },
        axisTick: {
          show: false
        },
        data: years
      }
    ],
    yAxis: [
      {
        min: 0,
        max: 6000,
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: true,
          color: "#24c4ff"
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: "",
        type: "line",
        symbol: "circle",
        showAllSymbol: true,
        symbolSize: 8,
        lineStyle: {
          color: "#7c80f4",
          borderColor: "rgba(0, 0, 0, .4)"
        },
        itemStyle: {
          color: "rgba(14, 30, 73, 1)",
          borderColor: "#646ace",
          borderWidth: 2
        },
        label: {
          show: true,
          position: "top",
          formatter: " {a|{c}}",
          rich: {
            a: {
              color: "#fff",
              align: "center"
            }
          }
        },
        smooth: true,
        areaStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(124, 128, 244, .3)"
            },
            {
              offset: 1,
              color: "rgba(124, 128, 244, 0)"
            }
          ], false),
          shadowColor: "rgba(53, 142, 215, .9)",
          shadowBlur: 20
        },
        data
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
  <div class="chart" id="income"></div>
</template>

<style scoped lang="scss">
.chart {
  height: 3rem;
}
</style>