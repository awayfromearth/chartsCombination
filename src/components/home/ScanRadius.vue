<script setup>
import { onMounted, onBeforeUnmount } from "vue"
import { init, graphic } from "echarts"

let chart
function renderChart() {
  chart = init(document.getElementById("scan"))

  const seriesData1 = [
    {
      value: 3,
      name: "区块链",
      itemStyle: {
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#4284dd"
          },
          {
            offset: 1,
            color: "#0c3371"
          }
        ])
      }
    },
    {
      value: 4.5,
      name: "AI",
      itemStyle: {
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#5253d3"
          },
          {
            offset: 1,
            color: "#072559"
          }
        ])
      }
    },
    {
      value: 3,
      name: "大数据",
      itemStyle: {
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#8b5c85"
          },
          {
            offset: 1,
            color: "#183571"
          }
        ])
      }
    },
    {
      value: 5.5,
      name: "云计算",
      itemStyle: {
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#b4734f"
          },
          {
            offset: 1,
            color: "#443e5f"
          }
        ])
      }
    },
    {
      value: 3,
      name: "移动互联网",
      itemStyle: {
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#3ab1d9"
          },
          {
            offset: 1,
            color: "#124c94"
          }
        ])
      }
    }
  ]

  let s = 0
  for (let i = 0; i < seriesData1.length; i++) {
    s += seriesData1[i].value
  }

  seriesData1.push({
    value: s,
    name: "__other",
    itemStyle: {
      color: "rgba(0, 0, 0, 0)"
    }
  })

  const seriesData2 = [
    {
      value: 10,
      itemStyle: {
        color: "rgba(0, 0, 0, 0)",
        borderColor: "rgba(17, 93, 217, .4)",
        borderWidth: 1
      }
    },
    {
      value: 10,
      itemStyle: {
        color: "rgba(0, 0, 0, 0)"
      }
    }
  ]

  const tooltip = {
    formatter: " ",
    backgroundColor: "rgba(0, 0, 0, 0)",
  }

  const option = {
    label: {
      show: false
    },
    labelLine: {
      show: false
    },
    tooltip: {
      trigger: "item"
    },
    series: [
      {
        name: "现代技术",
        type: "pie",
        startAngle: -180,
        radius: "190%",
        center: ["50%", "50%"],
        roseType: "radius",
        z: 0,
        tooltip: {
          formatter: "{b0}: {c0} ({d0}%)"
        },
        label: {
          show: false
        },
        emphasis: {
          label: {
            show: false
          }
        },
        data: seriesData1
      },
      {
        name: "2020年",
        type: "pie",
        clockwise: false,
        startAngle: 0,
        radius: ["90%", "90%"],
        center: ["50%", "50%"],
        tooltip: tooltip,
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        emphasis: {
          scale: false
        },
        data: [
          {
            value: 10,
            itemStyle: {
              color: "rgba(0, 0, 0, 0)",
              borderColor: "rgba(21, 103, 214, 1)",
              borderWidth: 2,
              borderType: "dashed"
            }
          },
          {
            value: 10,
            itemStyle: {
              color: "rgba(0, 0, 0, 0)"
            }
          }
        ]
      },
      {
        name: "2019年",
        type: "pie",
        clockwise: false,
        startAngle: 0,
        radius: ["70%", "70%"],
        center: ["50%", "50%"],
        tooltip,
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        emphasis: {
          scale: false,
          label: {
            show: false
          }
        },
        data: seriesData2
      },
      {
        name: "2018年",
        type: "pie",
        clockwise: false,
        startAngle: 0,
        radius: ["50%", "50%"],
        center: ["50%", "50%"],
        tooltip,
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        emphasis: {
          scale: false,
          label: {
            show: false
          }
        },
        data: seriesData2
      },
      {
        name: "2017年",
        type: "pie",
        clockwise: false,
        startAngle: 0,
        radius: ["30%", "30%"],
        center: ["50%", "50%"],
        tooltip,
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        emphasis: {
          scale: false,
          label: {
            show: false
          }
        },
        data: seriesData2
      },
      {
        name: "2016年",
        type: "pie",
        clockwise: false,
        startAngle: 0,
        radius: ["10%", "10%"],
        center: ["50%", "50%"],
        tooltip,
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        emphasis: {
          scale: false,
          label: {
            show: false
          }
        },
        data: seriesData2
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
      <div class="title">扫描半径图</div>
      <div class="body">
        <div class="wrap-container">
          <div class="chart" id="scan"></div>
          <div class="box">
            <div class="nodeText text0">
              <span>区块链</span>
            </div>
            <div class="nodeText text1">
              <span>人工智能</span>
            </div>
            <div class="nodeText text2">
              <span>大数据</span>
            </div>
            <div class="nodeText text3">
              <span>云计算</span>
            </div>
            <div class="nodeText text4">
              <span>移动互联网</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  left: 1436px;
  top: 1120px;
  width: 432px;
  height: 400px;

  .chart {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .box {
    overflow: hidden;

    .nodeText {
      position: absolute;
      left: 50%;
      top: 51%;
      margin-left: -9px;
      transform: translate(0, -60%);
      color: #00c2ff;
      font-size: 13px;
      &.text0 {
        border-right: 2px solid rgba(29, 122, 248, .54);
        border-bottom: 2px solid rgba(29, 122, 248, .54);
        width: 70px;
        height: 50px;
        margin-left: -110px;
        margin-top: 25px;
        span {
          position: absolute;
          margin-top: 55px;
        }
        &:before {
          content: "";
          position: absolute;
          width: 5px;
          height: 5px;
          margin-top: 47px;
          border-radius: 100%;
          background-color: rgb(47, 138, 240);
        }
      }
      &.text1 {
        border-right: 2px solid rgba(29, 122, 248, .54);
        border-bottom: 2px solid rgb(134, 92, 255);
        width: 30px;
        height: 80px;
        margin-left: -50px;
        margin-top: 44px;
        border-image: linear-gradient(rgba(29, 122, 248, .54), rgb(134, 92, 255)) 2 2;
        span {
          position: absolute;
          margin-left: -50px;
          margin-top: 83px;
        }
        &:before {
          content: "";
          position: absolute;
          width: 5px;
          height: 5px;
          margin-top: 77px;
          border-radius: 100%;
          background-color: rgb(117, 94, 255);
        }
      }
      &.text2 {
        border-right: 2px solid rgba(29, 122, 248, .54);
        width: 30px;
        height: 93px;
        margin-top: 53px;
        margin-left: -31px;
        border-image: linear-gradient(rgb(10, 106, 255), rgba(112, 117, 189, .54), rgb(214, 108, 123)) 2 2;
        span {
          position: absolute;
          display: block;
          width: 330px;
          margin-left: 8px;
          margin-top: 100px;
        }
        &:before {
          content: "";
          position: absolute;
          width: 5px;
          height: 5px;
          margin-top: 92px;
          margin-left: 26px;
          border-radius: 100%;
          background-color: rgb(197, 73, 89);
        }
      }
      &.text3 {
        border-left: 2px solid rgba(29, 122, 248, .54);
        border-bottom: 2px solid rgba(29, 122, 248, .54);
        width: 30px;
        height: 80px;
        margin-left: 18px;
        margin-top: 44px;
        border-image: linear-gradient(rgba(29, 122, 248, .54), rgba(136, 135, 162, .5), rgb(249, 161, 77)) 2 2;
        span {
          position: absolute;
          display: block;
          width: 330px;
          margin-left: 6px;
          margin-top: 83px;
        }
        &:before {
          content: "";
          position: absolute;
          width: 5px;
          height: 5px;
          margin-top: 77px;
          margin-left: 27px;
          border-radius: 100%;
          background-color: rgb(230, 137, 50);
        }
      }
      &.text4 {
        border-left: 2px solid rgba(29, 122, 248, .54);
        border-bottom: 2px solid rgba(29, 122, 248, .54);
        width: 70px;
        height: 50px;
        margin-left: 40px;
        margin-top: 25px;
        border-image: linear-gradient(rgba(29, 122, 248, .54), rgba(51, 181, 255, .64), rgb(92, 255, 255)) 2 2;
        span {
          position: absolute;
          display: block;
          width: 330px;
          margin-left: 10px;
          margin-top: 50px;
        }
        &:before {
          content: "";
          position: absolute;
          width: 5px;
          height: 5px;
          margin-top: 47px;
          margin-left: 63px;
          border-radius: 100%;
          background-color: rgb(56, 208, 231);
        }
      }
    }
  }
}
</style>