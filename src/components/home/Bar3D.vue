<script setup>
import { onBeforeUnmount, onMounted } from "vue"
import { init } from "echarts"

import "echarts-gl"

let chart
function renderChart() {
  chart = init(document.getElementById("chart_3d"))
  const xData = ["20 - 25", "25 - 30", "30 - 35", "35 - 40", "40 - 45", "45 - 50"]
  const days = ["1", "2", "3", "4", "5", "6"]
  const sex = ["女", "男"]
  const data = [
    [0, 0, 3, sex[0], xData[0], 500, 25],
    [0, 1, 2.5, sex[0], xData[3], 1000, 35],
    [0, 2, 1.5, sex[1], xData[4], 3000, 5],
    [0, 3, 1, sex[1], xData[1], 300, 15],
    [0, 4, 2, sex[0], xData[2], 500, 55],
    [0, 5, 3, sex[0], xData[3], 1500, 45],

    [1, 5, 6, sex[1], xData[0], 300, 25],
    [1, 1, 4, sex[0], xData[1], 500, 22],
    [1, 2, 2, sex[0], xData[2], 1500, 38],
    [1, 3, 1.5, sex[1], xData[3], 2500, 25],
    [1, 4, 3, sex[0], xData[4], 3500, 49],
    [1, 0, 4, sex[1], xData[5], 5500, 15],

    [2, 2, 3, sex[1], xData[0], 300, 25],
    [2, 1, 2, sex[0], xData[4], 1300, 25],
    [2, 2, 5, sex[0], xData[2], 900, 25],
    [2, 5, 1, sex[1], xData[3], 2000, 25],
    [2, 0, 3, sex[1], xData[1], 2300, 25],
    [2, 0, 10, sex[1], xData[5], 3500, 25],

    [3, 2, 3, sex[0], xData[5], 500, 35],
    [3, 3, 2, sex[0], xData[4], 2300, 55],
    [3, 2, 1, sex[1], xData[3], 3300, 15],
    [3, 5, 5, sex[1], xData[2], 500, 10],
    [3, 1, 2, sex[1], xData[1], 1000, 35],
    [3, 0, 1, sex[0], xData[0], 300, 45],

    [4, 2, 3, sex[1], xData[1], 600, 25],
    [4, 0, 5, sex[0], xData[0], 500, 15],
    [4, 1, 3.5, sex[1], xData[3], 4000, 5],
    [4, 4, 7, sex[0], xData[0], 300, 75],
    [4, 1, 0, sex[1], xData[5], 3000, 85],
    [3, 1, 3, sex[0], xData[2], 2500, 65],

    [5, 2, 3, sex[0], xData[2], 500, 15],
    [5, 1, 2, sex[1], xData[3], 3300, 52],
    [5, 1, 5, sex[0], xData[4], 1000, 88],
    [5, 5, 8, sex[1], xData[0], 200, 12],
    [5, 2, 7, sex[0], xData[0], 300, 45],
    [3, 2, 2, sex[1], xData[1], 5000, 51]
  ]

  const option = {
    tooltip: {
      borderColor: "#8a704e",
      borderWidth: 1,
      padding: 15,
      formatter(params) {
        return `
            ${params.marker}${params.seriesName} <br />
            <span style="color: ${params.color};">性别：${params.value[3]}</span> <br />
            <span style="color: ${params.color};">年龄：${params.value[4]}岁</span> <br />
            <span style="color: ${params.color};">贷款金额：${params.value[5]}</span> <br />
            <span style="color: ${params.color};">总人数：${params.value[6]}</span> <br />
        `
      },
      textStyle: {
        color: "#8a704e",
        fontSize: 16
      }
    },
    xAxis3D: {
      type: "category",
      data: xData
    },
    yAxis3D: {
      type: "category",
      data: days
    },
    zAxis3D: {
      type: "value"
    },
    grid3D: {
      show: false,
      boxWidth: 160,
      boxDepth: 80,
      viewControl: {
        alpha: 10,
        beta: 15
      }
    },
    series: [
      {
        type: "bar3D",
        name: "series",
        data: data.map(d => ({
          value: [d[1], d[0], d[2], d[3], d[4], d[5], d[6]]
        })),
        shading: "lambert",
        label: {
          show: false
        },
        itemStyle: {
          color: "#0084ff",
          opacity: .8
        },
        emphasis: {
          label: {
            show: false
          },
          itemStyle: {
            color: "#0084ff"
          }
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
  <div class="wrap-container triple">
    <div class="bar bar-img"></div>
    <div class="bar bar-img1"></div>
    <div class="bar bar-img2"></div>

    <div class="chart" id="chart_3d"></div>
  </div>
</template>

<style scoped lang="scss">
.triple {
  left: 644px;
  top: 2409px;
  width: 620px;
  height: 400px;

  .chart {
    width: 100%;
    height: 100%;
  }

  .bar {
    position: absolute;
    width: 100%;
    height: 100%;

    &.bar-img {
      bottom: 0;
      background: url(@/assets/images/bar3d/bk_circle.png) no-repeat center 97%;
      background-size: 100%;
      filter: hue-rotate(180deg);
    }
    &.bar-img1 {
      bottom: 30%;
      background: url(@/assets/images/bar3d/bk_circle1.png) no-repeat center 97%;
      background-size: 75%;
      filter: hue-rotate(180deg);
    }
    &.bar-img2 {
      bottom: 60%;
      background: url(@/assets/images/bar3d/bk_circle2.png) no-repeat center 97%;
      background-size: 50%;
      filter: hue-rotate(180deg);
    }
  }
}
</style>