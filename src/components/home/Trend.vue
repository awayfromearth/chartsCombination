<script setup>
import { onMounted, onBeforeUnmount } from "vue"
import { init } from "echarts"

const cities = ["长沙", "湘潭", "株洲", "岳阳", "邵阳", "衡阳", "益阳", "娄底", "怀化", "湘西", "张家界", "梆州", "常德", "永州"]
function formatData(data) {
  let temp, max, sum
  for (let x = 0; x < 3; x++) {
    max = 0
    sum = 0
    temp = data[x]
    for (let i = 0, l = temp.length; i < l; i++) {
      max = Math.max(max, temp[i])
      sum += temp[i]
      data[x][i] = {
        name: cities[i],
        value: temp[i]
      }
    }
    data[x + "max"] = Math.floor(max / 100) * 100
    data[x + "sum"] = sum
  }

  return data
}

let chart
function renderChart() {
  chart = init(document.getElementById("trend"))

  const itemStyle = {
    barBorderRadius: [15, 0],
    color: "#0084ff"
  }
  const data = formatData({
    2: [124, 145, 261, 54, 195, 131, 150, 39, 11, 40, 23, 51, 45, 88],
    1: [136, 159, 205, 41, 306, 7, 77, 101, 24, 34, 8, 15, 14, 9],
    0: [118, 128, 220, 47, 92, 14, 9, 11, 113, 61, 11, 22, 33, 5]
  })
  const option = {
    baseOption: {
      timeline: {
        axisType: "category",
        autoPlay: true,
        playInterval: 1000,
        data: ["一类", "二类", "三类"],
        left: 80,
        right: 80,
        bottom: 10,
        lineStyle: {
          color: "#179bf1"
        },
        label: {
          color: "#fff"
        },
        checkPointStyle: {
          color: "#01d8ff",
          symbolSize: 10,
          borderColor: "rgba(1, 216, 255, .5)",
          borderWidth: 5
        },
        controlStyle: {
          show: false
        },
        itemStyle: {
          borderColor: "#004b85",
          borderWidth: 1,
          shadowColor: "rgba(1, 216, 255, .5)",
          shadowBlur: 5
        },
        emphasis: {
          label: {
            color: "#01d8ff",
            show: false
          },
          checkPointStyle: {
            color: "#01d8ff",
            borderColor: "rgba(1, 216, 255, .5)",
            borderWidth: 5
          },
          itemStyle: {
            color: "#01d8ff",
            borderColor: "rgba(1, 216, 255, .5)",
            borderWidth: 5
          }
        }
      },
      calculable: true,
      grid: {
        top: "10%",
        bottom: "25%"
      },
      xAxis: [
        {
          type: "category",
          axisLabel: {
            interval: 0
          },
          data: cities,
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#2867a8",
            }
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          name: "家",
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#2867a8",
            }
          }
        }
      ],
      series: [
        {
          name: "一类",
          type: "bar",
          barWidth: 15,
          legendHoverLink: true,
          label: {
            show: true,
            position: "top",
            color: "#fff"
          }
        }
      ]
    },
    options: [
      {
        series: [
          {
            data: data[0],
            itemStyle
          }
        ]
      },
      {
        series: [
          {
            data: data[1],
            itemStyle
          }
        ]
      },
      {
        series: [
          {
            data: data[2],
            itemStyle
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
  <div class="wrap-container container">
    <div class="content">
      <div class="title">金字塔趋势</div>
      <div class="body">
        <div class="wrap-container">
          <div class="chart" id="trend"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  left: 666px;
  top: 1548px;
  width: 586px;
  height: 400px;
  .chart {
    width: 100%;
    height: 100%;
  }
}
</style>