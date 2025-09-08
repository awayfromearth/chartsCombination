<script setup>
import { onMounted, onBeforeUnmount } from "vue"
import { init, graphic } from "echarts"

const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const data = [54, 86, 46, 77, 96, 89, 88, 23, 38, 3, 66, 98]

let timer = null, chart, activeIndex = 0
function renderChart() {
  chart = init(document.getElementById('arc'))
  const option = {
    tooltip: {
      trigger: "axis",
      showContent: false,
      axisPointer: {
        type: "shadow",
        shadowStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 1,
              color: "#5d83ff"
            },
            {
              offset: 0,
              color: "rgba(255, 255, 255, 0)"
            }
          ])
        }
      }
    },
    color: ["#5d83ff"],
    grid: {
      top: 30,
      left: 20,
      right: 20,
      bottom: 20,
      containLabel: true
    },
    xAxis: {
      type: "category",
      data: x,
      boundaryGap: false,
      axisTick: {
        show: false
      },
      axisLabel: {
        formatter: "{value}月"
      },
      axisLine: {
        lineStyle: {
          color: "#999"
        }
      }
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: false
      }
    },
    series: [
      {
        name: "人数",
        type: "line",
        data,
        symbolSize: 10,
        itemStyle: {
          opacity: 0
        },
        emphasis: {
          label: {
            show: true,
            color: "#fff",
            fontSize: 20
          },
          itemStyle: {
            color: "#5d83ff",
            borderColor: "#fff",
            borderWidth: 2,
            opacity: 1
          }
        },
        areaStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#5d83ff"
            },
            {
              offset: 1,
              color: "rgba(0, 0, 0, 0)"
            }
          ])
        },
        smooth: true
      }
    ]
  }

  chart.setOption(option, true)
  window.addEventListener("resize", chart.resize)
  startTimer()
}

function startTimer() {
  timer = setInterval(() => {
    chart.dispatchAction({
      type: "showTip",
      seriesIndex: 0,
      dataIndex: ++activeIndex
    })
    if (activeIndex === data.length - 1) {
      activeIndex = -1
    }
  }, 1000)
}

function stopTimer() {
  clearInterval(timer)
  timer = null
}

onMounted(renderChart)

onBeforeUnmount(() => {
  window.removeEventListener("resize", chart.resize)
  stopTimer()
})
</script>

<template>
  <div class="wrap-container container">
    <div class="content">
      <div class="title">滚动弧形线</div>
      <div class="body">
        <div class="wrap-container" @mouseover="stopTimer" @mouseleave="startTimer">
          <div class="chart" id="arc"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  left: 50px;
  top: 690px;
  width: 895px;
  height: 400px;
  .chart {
    width: 100%;
    height: 95%;
  }
}
</style>