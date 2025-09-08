<script setup>
import { onMounted, onBeforeUnmount } from "vue"
import { init, graphic } from "echarts"

let chart
function renderChart() {
  chart = init(document.getElementById( "rotate"))

  const option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      show: true,
      orient: "vertical",
      left: "center",
      top: "middle",
      data: ["内存", "存储"],
      textStyle: {
        color: "#4ce5ff",
        fontSize: 14
      },
      itemWidth: 20,
      itemHeight: 10
    },
    label: {
      normal: {
        show: false
      }
    },
    labelLine: {
      show: false
    },
    series: [
      {
        name: "磁盘空间",
        type: "pie",
        radius: [60, 110],
        center: ["50%", "50%"],
        roseType: "area",
        label: {
          show: false
        },
        emphasis: {
          label: {
            show: false
          }
        },
        data: [
          {
            value: 6.5,
            name: "内存",
            itemStyle: {
              color: new graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#387ed3"
                },
                {
                  offset: 1,
                  color: "#bc8b68"
                }
              ])
            }
          },
          {
            value: 3.5,
            name: "存储",
            itemStyle: {
              color: new graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#188bfd"
                },
                {
                  offset: 1,
                  color: "#51eeff"
                }
              ])
            }
          },
          {
            value: 0,
            name: "其它1",
            itemStyle: {
              color: "rgba(0, 0, 0, 0)"
            }
          },
          {
            value: 0,
            name: "其它2",
            itemStyle: {
              color: "rgba(0, 0, 0, 0)"
            }
          },
          {
            value: 0,
            name: "其它3",
            itemStyle: {
              color: "rgba(0, 0, 0, 0)"
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
      <div class="title">旋转多彩图</div>
      <div class="body">
        <div class="wrap-container">
          <div class="pie">
            <div class="pies pie1"></div>
            <div class="pies pie2"></div>
            <div class="pies pie3"></div>
            <div class="pie4"></div>
          </div>
          <div class="chart" id="rotate"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  left: 512px;
  top: 1120px;
  width: 432px;
  height: 400px;
  .chart {
    width: 100%;
    height: 100%;
  }

  .pie {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    .pies {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-repeat: no-repeat;
      background-position: center center;
    }
    .pie1 {
      transform-origin: center;
      background-image: url(@/assets/images/rotateColrful/wheel.png);
      animation: move1 20s linear infinite;
    }
    .pie2 {
      transform-origin: center;
      background-image: url(@/assets/images/rotateColrful/circle2.png);
      animation: move2 20s linear infinite;
    }
    .pie3 {
      background-image: url(@/assets/images/rotateColrful/inner.png);
    }
    .pie4 {
      position: absolute;
      top: 50%;
      left: 36%;
      width: 76px;
      height: 1px;
      background: linear-gradient(to right, rgb(31, 38, 103), rgb(90, 250, 253), rgb(31, 38, 103));
    }
  }
}

@keyframes move1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes move2 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>