<script setup>
import { onMounted, onBeforeUnmount } from "vue"
import { init, graphic } from "echarts"

let chart
function renderChart() {
  chart = init(document.getElementById("pin"))

  const linearGradient0 = {
    color: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: "#0a49c2"
      },
      {
        offset: 1,
        color: "#13adc5"
      }
    ])
  }
  const linearGradient1 = {
    color: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: "#0c388d"
      },
      {
        offset: 1,
        color: "#137ff6"
      }
    ])
  }
  const linearGradient2 = {
    color: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: "#05247a"
      },
      {
        offset: 1,
        color: "#183cd7"
      }
    ])
  }
  const linearGradient3 = {
    color: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: "#064d9d"
      },
      {
        offset: 1,
        color: "#00b977"
      }
    ])
  }
  const linearGradient4 = {
    color: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: "#133389"
      },
      {
        offset: 1,
        color: "#5e51e3"
      }
    ])
  }
  const linearGradient5 = {
    color: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: "#2a54a4"
      },
      {
        offset: 1,
        color: "#ff900e"
      }
    ])
  }
  const linearGradient6 = {
    color: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: "#5a847f"
      },
      {
        offset: 1,
        color: "#e3de24"
      }
    ])
  }
  const linearGradient7 = {
    color: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: "#38828a"
      },
      {
        offset: 1,
        color: "#61ac62"
      }
    ])
  }

  const option = {
    color: ["#05bbdf", "#1170e1", "#1b40e3", "#00c86c", "#5e51e3", "#ff9235", "#faf51e", "#399632"],
    legend: {
      show: true,
      orient: "vertical",
      left: "80%",
      top: "middle",
      data: ["2020年", "2019年", "2018年", "2017年", "2016年", "2015年", "2014年", "2013年"],
      textStyle: {
        color: "#fff",
        fontSize: 14
      },
      itemWidth: 20,
      itemHeight: 10
    },
    series: [
      {
        name: "2020年",
        type: "pie",
        clockwise: false,
        startAngle: 0,
        emphasis: {
          scale: false
        },
        radius: ["85%", "90%"],
        center: ["40%", "50%"],
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        data: [
          {
            value: 300,
            itemStyle: {
              color: "rgba(0, 0, 0, 0)"
            }
          },
          {
            value: 270,
            itemStyle: linearGradient0
          },
          {
            value: 30,
            itemStyle: {
              color: "#053f67"
            }
          }
        ]
      },
      {
        name: "2019年",
        type: "pie",
        clockwise: false,
        startAngle: 0,
        emphasis: {
          scale: false
        },
        radius: ["75%", "80%"],
        center: ["40%", "50%"],
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        data: [
          {
            value: 300,
            itemStyle: {
              color: "rgba(0, 0, 0, 0)"
            }
          },
          {
            value: 180,
            itemStyle: linearGradient1
          },
          {
            value: 120,
            itemStyle: {
              color: "#062d67"
            }
          }
        ]
      },
      {
        name: "2018年",
        type: "pie",
        clockwise: false,
        startAngle: 0,
        emphasis: {
          scale: false
        },
        radius: ["65%", "70%"],
        center: ["40%", "50%"],
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        data: [
          {
            value: 300,
            itemStyle: {
              color: "rgba(0, 0, 0, 0)"
            }
          },
          {
            value: 220,
            itemStyle: linearGradient2
          },
          {
            value: 80,
            itemStyle: {
              color: "#0c266a"
            }
          }
        ]
      },
      {
        name: "2017年",
        type: "pie",
        clockwise: false,
        startAngle: 0,
        emphasis: {
          scale: false
        },
        radius: ["55%", "60%"],
        center: ["40%", "50%"],
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        data: [
          {
            value: 300,
            itemStyle: {
              color: "rgba(0, 0, 0, 0)"
            }
          },
          {
            value: 210,
            itemStyle: linearGradient3
          },
          {
            value: 90,
            itemStyle: {
              color: "#03414f"
            }
          }
        ]
      },
      {
        name: "2016年",
        type: "pie",
        clockwise: false,
        startAngle: 0,
        emphasis: {
          scale: false
        },
        radius: ["45%", "50%"],
        center: ["40%", "50%"],
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        data: [
          {
            value: 300,
            itemStyle: {
              color: "rgba(0, 0, 0, 0)"
            }
          },
          {
            value: 150,
            itemStyle: linearGradient4
          },
          {
            value: 150,
            itemStyle: {
              color: "#142868"
            }
          }
        ]
      },
      {
        name: "2015年",
        type: "pie",
        clockwise: false,
        startAngle: 0,
        emphasis: {
          scale: false
        },
        radius: ["35%", "40%"],
        center: ["40%", "50%"],
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        data: [
          {
            value: 300,
            itemStyle: {
              color: "rgba(0, 0, 0, 0)"
            }
          },
          {
            value: 150,
            itemStyle: linearGradient5
          },
          {
            value: 150,
            itemStyle: {
              color: "#373546"
            }
          }
        ]
      },
      {
        name: "2014年",
        type: "pie",
        clockwise: false,
        startAngle: 0,
        emphasis: {
          scale: false
        },
        radius: ["25%", "30%"],
        center: ["40%", "50%"],
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        data: [
          {
            value: 300,
            itemStyle: {
              color: "rgba(0, 0, 0, 0)"
            }
          },
          {
            value: 50,
            itemStyle: linearGradient6
          },
          {
            value: 250,
            itemStyle: {
              color: "#35483f"
            }
          }
        ]
      },
      {
        name: "2013年",
        type: "pie",
        clockwise: false,
        startAngle: 0,
        emphasis: {
          scale: false
        },
        radius: ["15%", "20%"],
        center: ["40%", "50%"],
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        data: [
          {
            value: 300,
            itemStyle: {
              color: "rgba(0, 0, 0, 0)"
            }
          },
          {
            value: 50,
            itemStyle: linearGradient7
          },
          {
            value: 250,
            itemStyle: {
              color: "#0f3541"
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
      <div class="title">环形气泡图</div>
      <div class="body">
        <div class="wrap-container">
          <div class="chart" id="pin"></div>
          <div class="up"></div>
          <div class="info info0"><span>8个</span><span></span></div>
          <div class="info info1"><span>10个</span><span></span></div>
          <div class="info info2"><span>35个</span><span></span></div>
          <div class="info info3"><span>38个</span><span></span></div>
          <div class="info info4"><span>48个</span><span></span></div>
          <div class="info info5"><span>55个</span><span></span></div>
          <div class="info info6"><span>42个</span><span></span></div>
          <div class="info info7"><span>95个</span><span></span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  left: 50px;
  top: 1120px;
  width: 432px;
  height: 400px;
  .chart {
    left: 23px;
    top: 15px;
    width: 100%;
    height: 90%;
  }

  .up {
    position: absolute;
    width: 75%;
    height: 12px;
    left: 12px;
    top: 42%;
    background-color: rgba(6, 21, 104, .5);
    border-radius: 4px;
    box-shadow: 0 0 10px #066fe2 inset;
  }

  .info {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    white-space: nowrap;
    font-size: 14px;
    color: #fff;
    span {
      &:nth-child(1) {
        display: block;
        width: 45px;
        height: 45px;
        line-height: 45px;
        text-align: center;
      }
      &:nth-child(2) {
        display: block;
        position: absolute;
        width: 0;
        margin-left: 21px;
      }
    }

    &.info0 {
      margin-top: -83px;
      margin-left: 34%;
      span {
        &:nth-child(1) {
          background: url(@/assets/images/ringPin/icon_ls.png) repeat 0 0;
        }
        &:nth-child(2) {
          height: 62px;
          border: 1px dashed #3a962f;
        }
      }
    }
    &.info1 {
      margin-top: -112px;
      margin-left: 41%;
      span {
        &:nth-child(1) {
          background: url(@/assets/images/ringPin/icon_hs.png) repeat 0 0;
        }
        &:nth-child(2) {
          height: 100px;
          border: 1px dashed #fff600;
        }
      }
    }
    &.info2 {
      margin-top: -109px;
      margin-left: 27%;
      span {
        &:nth-child(1) {
          background: url(@/assets/images/ringPin/icon_cs.png) repeat 0 0;
        }
        &:nth-child(2) {
          height: 112px;
          border: 1px dashed #ff9232;
        }
      }
    }
    &.info3 {
      margin-top: -58px;
      margin-left: 23%;
      span {
        &:nth-child(1) {
          background: url(@/assets/images/ringPin/icon_zs.png) repeat 0 0;
        }
        &:nth-child(2) {
          height: 66px;
          border: 1px dashed #5e50e5;
        }
      }
    }
    &.info4 {
      margin-top: -92px;
      margin-left: 18%;
      span {
        &:nth-child(1) {
          background: url(@/assets/images/ringPin/icon_ml.png) repeat 0 0;
        }
        &:nth-child(2) {
          height: 99px;
          border: 1px dashed #00c172;
        }
      }
    }
    &.info5 {
      margin-top: -65px;
      margin-left: 45%;
      span {
        &:nth-child(1) {
          background: url(@/assets/images/ringPin/icon_sl.png) repeat 0 0;
        }
        &:nth-child(2) {
          height: 118px;
          border: 1px dashed #1342f1;
        }
      }
    }
    &.info6 {
      margin-top: -88px;
      margin-left: 52%;
      span {
        &:nth-child(1) {
          background: url(@/assets/images/ringPin/icon_ql.png) repeat 0 0;
        }
        &:nth-child(2) {
          height: 141px;
          border: 1px dashed #0681fd;
        }
      }
    }
    &.info7 {
      margin-top: -70px;
      margin-left: 59%;
      span {
        &:nth-child(1) {
          background: url(@/assets/images/ringPin/icon_qql.png) repeat 0 0;
        }
        &:nth-child(2) {
          height: 117px;
          border: 1px dashed #2bcbe6;
        }
      }
    }
  }
}
</style>