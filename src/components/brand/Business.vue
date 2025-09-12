<script setup>
import { onMounted, onBeforeUnmount } from "vue"
import { init, graphic } from "echarts"

let chart
function renderChart() {
  chart = init(document.getElementById('business'))

  const types = ["金融行业", "电子政务", "文创版权", "教育行业", "智慧停车", "医疗互联", "物流行业"]
  const data = [1500, 1200, 900, 600, 400, 300, 100]
  const colors = ["rgba(14, 109, 236", "rgba(255, 91, 6", "rgba(100, 255, 249", "rgba(248,195,248", "rgba(110,234,19", "rgba(255,168,17", "rgba(218,111,227"]
  const lineY = []
  for (let i = 0; i < types.length; i++) {
    lineY.push({
      name: types[i],
      color: colors[i] + ", 1)",
      value: data[i],
      itemStyle: {
        show: true,
        color: new graphic.LinearGradient(0, 0, 1, 0, [
          {
            offset: 0,
            color: colors[i] + ", .3)"
          },
          {
            offset: 1,
            color: colors[i] + ", 1)"
          }
        ], false),
        borderRadius: 10
      },
      emphasis: {
        shadowBlur: 15,
        shadowColor: "rgba(0, 0, 0, .1)"
      }
    })
  }

  const option = {
    color: colors,
    tooltip: {
      trigger: "item"
    },
    grid: {
      borderWidth: 0,
      top: "5%",
      left: "2%",
      right: "2%",
      bottom: 0,
      containLabel: true
    },
    xAxis: [
      {
        type: "value",
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "category",
        inverse: true,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: true,
          inside: false,
          color: "#b3ccf8",
          fontSize: 13
        },
        data: types
      },
      {
        type: "category",
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: true,
          inside: false,
          color: "#b3ccf8",
          fontSize: 13
        },
        splitArea: {
          show: false
        },
        splitLine: {
          show: false
        },
        data: data.reverse()
      }
    ],
    series: [
      {
        name: "",
        type: "bar",
        zlevel: 2,
        barWidth: "10px",
        data: lineY,
        animationDuration: 1500,
        label: {
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
  <div class="chart" id="business"></div>
</template>

<style scoped lang="scss">
.chart {
  height: 3rem;
}
</style>