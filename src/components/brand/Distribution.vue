<script setup>
import { onMounted, onBeforeUnmount } from "vue"
import { init } from "echarts"

let chart
function renderChart() {
  chart = init(document.getElementById("distribution"))

  const option = {
    color: ["#eaea26", "#906bf9", "#fe5656", "#01e17e", "#3d01f9", "#ffad05", "#4465fc"],
    tooltip: {
      trigger: 'item',
      formatter: "{b} : {c} ({d}%)"
    },
    polar: {},
    angleAxis: {
      interval: 1,
      type: "category",
      data: [],
      z: 10,
      axisLine: {
        show: false
      },
      axisLabel: {
        interval: 0,
        show: true,
        color: "#0b4a6b",
        margin: 8,
        fontSize: 16
      }
    },
    radiusAxis: {
      min: 40,
      max: 120,
      interval: 20,
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: "#0b3e5e",
          width: 2,
          type: "solid"
        }
      }
    },
    calculable: true,
    series: [
      {
        type: "pie",
        radius: ["6%", "10%"],
        emphasis: {
          scale: false,
          labelLine: {
            show: false
          }
        },
        labelLine: {
          show: false
        },
        tooltip: {
          show: false
        },
        data: [
          {
            name: "",
            value: 0,
            itemStyle: {
              color: "#0b4a6b"
            }
          }
        ]
      },
      {
        type: "pie",
        radius: ["90%", "95%"],
        emphasis: {
          scale: false,
          labelLine: {
            show: false
          }
        },
        labelLine: {
          show: false
        },
        tooltip: {
          show: false
        },
        data: [
          {
            name: "",
            value: 0,
            itemStyle: {
              color: "#0b4a6b"
            }
          }
        ]
      },
      {
        stack: "a",
        type: "pie",
        radius: ["20%", "80%"],
        roseType: "area",
        zlevel: 10,
        emphasis: {
          scale: false,
          labelLine: {
            show: false
          },
          label: {
            show: false
          }
        },
        labelLine: {
          show: true,
          length: 15,
          length2: 50,
          lineStyle: {
            type: "dotted"
          }
        },
        label: {
          show: true,
          formatter: "{b}",
          fontSize: 12,
          position: "outside"
        },
        data: [
          {
            name: "湖南",
            value: 35
          },
          {
            name: "河北",
            value: 28
          },
          {
            name: "广东",
            value: 23
          },
          {
            name: "四川",
            value: 18
          },
          {
            name: "浙江",
            value: 13
          },
          {
            name: "江苏",
            value: 8
          },
          {
            name: "湖北",
            value: 5
          }
        ]
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
  <div class="chart" id="distribution"></div>
</template>

<style scoped lang="scss">
.chart {
  height: 3rem;
}
</style>