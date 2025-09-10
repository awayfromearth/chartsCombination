<script setup>
import { onMounted, onBeforeUnmount } from "vue"
import { init, graphic } from "echarts"

let chart
function renderChart() {
  chart = init(document.getElementById("circle"))

  const option = {
    color: ["#5d8ef8", "#638bfd", "#1dd1c1"],
    series: [
      {
        type: "pie",
        clockWise: false,
        startAngle: 90,
        emphasis: {
          scale: false
        },
        radius: ["68%", "70%"],
        center: ["50%", "50%"],
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        data: [
          {
            value: 10,
            name: "100%",
            itemStyle: {
              color: new graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 1,
                  color: "#628cfd"
                },
                {
                  offset: 0,
                  color: "#20cdc4"
                }
              ])
            }
          }
        ]
      },
      {
        type: "pie",
        clockWise: false,
        startAngle: 90,
        emphasis: {
          scale: false
        },
        radius: ["53%", "56%"],
        center: ["50%", "50%"],
        label: {
          show: true,
          fontSize: 16,
          lineHeight: 22,
          formatter: params => {
            return params.name + "\n" + params.value + "%"
          }
        },
        labelLine: {
          show: true,
          length: 20,
          length2: 20,
          lineStyle: {
            type: "dotted"
          },
          smooth: true
        },
        data: [
          {
            value: 64,
            name: "交易比",
            itemStyle: {
              color: "#638bfd"
            }
          },
          {
            value: 36,
            name: "",
            itemStyle: {
              color: "rgba(0, 0, 0, 0)"
            }
          }
        ]
      },
      {
        type: "pie",
        clockWise: false,
        startAngle: 0,
        emphasis: {
          scale: false
        },
        radius: ["43%", "46%"],
        center: ["50%", "50%"],
        label: {
          show: true,
          fontSize: 16,
          lineHeight: 22,
          formatter: params => {
            return params.name + "\n" + params.value + "%"
          }
        },
        labelLine: {
          show: true,
          length: 20,
          length2: 50,
          lineStyle: {
            type: "dotted"
          },
          smooth: true
        },
        data: [
          {
            value: 36,
            name: "通道比",
            itemStyle: {
              color: "#1dd1c1"
            }
          },
          {
            value: 64,
            name: "",
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
      <div class="title">嵌套圆环</div>
      <div class="body">
        <div class="element">
          <div class="wrap-container">
            <div class="chart" id="circle"></div>

            <div class="svgs">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <path id="svg_2" d="m117,210c0,-51.65746 41.61878,-93.5 93,-93.5c51.38122,0 93,41.84254 93,93.5c0,51.65746 -41.61878,93.5 -93,93.5c-51.38122,0 -93,-41.84254 -93,-93.5z" stroke="#bfbfbf" fill="none" stroke-dasharray="3,3" xmlns="http://www.w3.org/2000/svg"></path>
                <path id="svg_3" d="m134,210c0,-41.71271 34.01105,-75.5 76,-75.5c41.98895,0 76,33.78729 76,75.5c0,41.71271 -34.01105,75.5 -76,75.5c-41.98895,0 -76,-33.78729 -76,-75.5z" stroke="#bfbfbf" fill="none" stroke-dasharray="3,3" xmlns="http://www.w3.org/2000/svg"></path>
              </svg>
            </div>

            <div class="circle-arrow1"></div>
            <div class="circle-arrow2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  left: 1436px;
  top: 2837px;
  width: 432px;
  height: 400px;

  .element {
    position: absolute;
    height: 420px;
    border: none;
    top: -40px;
    left: 6px;
    width: 420px;
    overflow: hidden;

    .chart {
      width: 100%;
      height: 100%;
    }

    .svgs {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
    }

    [class^=circle-arrow] {
      width: 17px;
      height: 17px;
      offset-distance: 0;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      &.circle-arrow1 {
        background: url(@/assets/images/circleNesting/icon_circle1.png) no-repeat 50% 50%;
        animation: circle-arrow1 5s linear infinite;
        offset-path: path("m117,210c0,-51.65746 41.61878,-93.5 93,-93.5c51.38122,0 93,41.84254 93,93.5c0,51.65746 -41.61878,93.5 -93,93.5c-51.38122,0 -93,-41.84254 -93,-93.5z");
      }
      &.circle-arrow2 {
        background: url(@/assets/images/circleNesting/icon_circle2.png) no-repeat 50% 50%;
        animation: circle-arrow2 5s linear infinite;
        offset-path: path("m134,210c0,-41.71271 34.01105,-75.5 76,-75.5c41.98895,0 76,33.78729 76,75.5c0,41.71271 -34.01105,75.5 -76,75.5c-41.98895,0 -76,-33.78729 -76,-75.5z");
      }
    }
  }
}

@keyframes circle-arrow1 {
  0% {
    offset-distance: 0;
    opacity: 1;
  }
  100% {
    offset-distance: 100%;
    opacity: 1;
  }
}

@keyframes circle-arrow2 {
  0% {
    offset-distance: 100%;
    opacity: 1;
  }
  100% {
    offset-distance: 0;
    opacity: 1;
  }
}
</style>