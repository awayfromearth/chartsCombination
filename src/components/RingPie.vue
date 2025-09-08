<script setup>
import { onMounted, onBeforeUnmount } from "vue"
import { init, graphic } from "echarts"

let chart
function renderChart() {
  chart = init(document.getElementById("ringPie"))

  const option = {
    series: [
      {
        name: "环形饼图",
        type: "pie",
        radius: ["68%", "80%"],
        emphasis: {
          scale: false,
          label: {
            show: false
          }
        },
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center"
        },
        labelLine: {
          show: false
        },
        data: [
          {
            value: 6,
            name: "区块链",
            itemStyle: {
              color: new graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#6984fe"
                },
                {
                  offset: 1,
                  color: "#24d1fd"
                }
              ])
            }
          },
          {
            value: 4,
            name: "大数据",
            itemStyle: {
              color: "#eee"
            }
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
      <div class="title">环形饼图</div>
      <div class="body">
        <div class="wrap-container ring-pie">
          <div class="back-chart">
            <svg width="100%" height="100%" viewBox="0 0 150 150" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path id="svg_2" d="m3,75c0,-39.77901 32.22099,-72 72,-72c39.77901,0 72,32.22099 72,72c0,39.77901 -32.22099,72 -72,72c-39.77901,0 -72,-32.22099 -72,-72z" stroke="#2de6af" fill-opacity="null" fill="none"></path>
            </svg>
          </div>

          <div class="chart" id="ringPie"></div>

          <div class="arrow-circle circle1"></div>
          <div class="arrow-circle circle2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  left: 974px;
  top: 1978px;
  width: 432px;
  height: 400px;

  .ring-pie {
    left: 125px;
    top: 94px;
    width: 150px;
    height: 150px;
  }

  .chart {
    width: 100%;
    height: 100%;
  }

  .back-chart {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: url(@/assets/images/ringPie/back_chart.png) no-repeat center;
  }

  .arrow-circle {
    width: 8px;
    height: 8px;
    offset-distance: 0;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    &.circle1 {
      background: url(@/assets/images/ringPie/icon_04.png) no-repeat 50% 50%;
      animation: arrow-circle1 5s linear infinite;
      offset-path: path("m3,75c0,-39.77901 32.22099,-72 72,-72c39.77901,0 72,32.22099 72,72c0,39.77901 -32.22099,72 -72,72c-39.77901,0 -72,-32.22099 -72,-72z");
    }
    &.circle2 {
      background: url(@/assets/images/ringPie/icon_05.png) no-repeat 50% 50%;
      animation: arrow-circle2 5s linear infinite;
      offset-path: path("m3,75c0,-39.77901 32.22099,-72 72,-72c39.77901,0 72,32.22099 72,72c0,39.77901 -32.22099,72 -72,72c-39.77901,0 -72,-32.22099 -72,-72z");
    }
  }
}

@keyframes arrow-circle1 {
  0% {
    offset-distance: 40%;
    opacity: 1;
  }
  100% {
    offset-distance: 140%;
    opacity: 1;
  }
}

@keyframes arrow-circle2 {
  0% {
    offset-distance: 0;
    opacity: 1;
  }
  100% {
    offset-distance: 100%;
    opacity: 1;
  }
}
</style>