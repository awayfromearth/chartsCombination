<script setup>
import { onMounted, onBeforeUnmount } from "vue"
import { init } from "echarts"

const types = ["金融类", "政务类", "医疗类", "互联网类"]
let chart
function renderChart() {
  chart =init(document.getElementById("bp"))

  const JR = formatData({
    2020: [136, 159, 905, 305],
    2019: [124, 145, 562, 285],
    2018: [118, 128, 207, 265],
    2017: [112, 122, 234, 245],
    2016: [101, 110, 804, 225]
  })
  const ZW = formatData({
    2020: [752, 928, 126, 210],
    2019: [388, 840, 707, 208],
    2018: [855, 987, 959, 207],
    2017: [626, 709, 701, 206],
    2016: [509, 892, 201, 205]
  })
  const YL = formatData({
    2020: [363, 219, 483, 505],
    2019: [600, 438, 123, 405],
    2018: [179, 405, 668, 305],
    2017: [375, 2886, 276, 205],
    2016: [236, 250, 408, 105]
  })
  const IT = formatData({
    2020: [752, 928, 126, 255],
    2019: [388, 840, 707, 245],
    2018: [855, 987, 959, 235],
    2017: [626, 709, 701, 225],
    2016: [509, 892, 201, 215]
  })

  const option = {
    baseOption: {
      timeline: {
        axisType: "category",
        autoPlay: true,
        playInterval: 2000,
        data: ["2016-01-01", "2017-01-01", "2018-01-01", "2019-01-01", "2020-01-01"],
        lineStyle: {
          color: "#179bf1"
        },
        left: 30,
        right: 30,
        label: {
          color: "#2867a8",
          formatter(s) {
            return new Date(s).getFullYear()
          }
        },
        checkPointStyle: {
          color: "#01d8ff",
          symbolSize: 10,
          borderColor: "rgba(1, 216, 255, .5)",
          borderWidth: 5
        },
        controlStyle: {
          showPlayBtn: false,
          borderColor: "#01bde6",
          itemGap: 20
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
          controlStyle: {
            borderColor: "rgba(1, 216, 255, .5)"
          },
          itemStyle: {
            color: "#01d8ff",
            borderColor: "rgba(1, 216, 255, .5)",
            borderWidth: 5
          }
        }
      },
      grid: {
        bottom: "20%",
        right: "42%"
      },
      calculable: true,
      xAxis: [
        {
          type: "category",
          data: types,
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#2867a8"
            }
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          name: "区块链应用（个）",
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#2867a8"
            }
          }
        }
      ],
      series: [
        {
          name: "联盟链",
          type: "bar",
          barMaxWidth: 15,
          center: ["20%", "65%"],
          seriesLayoutBy: "row",
          markPoint: {
            symbol: "pin",
            itemStyle: {
              color: "#eb9b44",
              shadowColor: "#eb9b44",
              shadowBlur: 15
            },
            data: [
              {
                type: "max",
                name: "最大值"
              },
              {
                type: "min",
                name: "最小值"
              }
            ]
          }
        },
        {
          name: "应用占比",
          type: "pie",
          center: ["76%", "20%"],
          radius: "20%",
          z: 100,
          label: {
            color: "inherit"
          }
        }
      ]
    },
    options: [
      {
        series: [
          {
            data: [
              {
                name: types[0],
                value: JR["2016sum"],
                itemStyle: {
                  color: "#d6d638"
                }
              },
              {
                name: types[1],
                value: ZW["2016sum"],
                itemStyle: {
                  color: "#00c86c"
                }
              },
              {
                name: types[2],
                value: YL["2016sum"],
                itemStyle: {
                  color: "#07d8ff"
                }
              },
              {
                name: types[3],
                value: IT["2016sum"],
                itemStyle: {
                  color: "#0c71cf"
                }
              }
            ]
          },
          {
            data: [
              {
                name: types[0],
                value: JR["2016sum"],
                itemStyle: {
                  color: "#d6d638"
                }
              },
              {
                name: types[1],
                value: ZW["2016sum"],
                itemStyle: {
                  color: "#00c86c"
                }
              },
              {
                name: types[2],
                value: YL["2016sum"],
                itemStyle: {
                  color: "#07d8ff"
                }
              },
              {
                name: types[3],
                value: IT["2016sum"],
                itemStyle: {
                  color: "#0c71cf"
                }
              }
            ]
          }
        ]
      },
      {
        series: [
          {
            data: [
              {
                name: types[0],
                value: JR["2017sum"],
                itemStyle: {
                  color: "#d6d638"
                }
              },
              {
                name: types[1],
                value: ZW["2017sum"],
                itemStyle: {
                  color: "#00c86c"
                }
              },
              {
                name: types[2],
                value: YL["2017sum"],
                itemStyle: {
                  color: "#07d8ff"
                }
              },
              {
                name: types[3],
                value: IT["2017sum"],
                itemStyle: {
                  color: "#0c71cf"
                }
              }
            ]
          },
          {
            data: [
              {
                name: types[0],
                value: JR["2017sum"],
                itemStyle: {
                  color: "#d6d638"
                }
              },
              {
                name: types[1],
                value: ZW["2017sum"],
                itemStyle: {
                  color: "#00c86c"
                }
              },
              {
                name: types[2],
                value: YL["2017sum"],
                itemStyle: {
                  color: "#07d8ff"
                }
              },
              {
                name: types[3],
                value: IT["2017sum"],
                itemStyle: {
                  color: "#0c71cf"
                }
              }
            ]
          }
        ]
      },
      {
        series: [
          {
            data: [
              {
                name: types[0],
                value: JR["2018sum"],
                itemStyle: {
                  color: "#d6d638"
                }
              },
              {
                name: types[1],
                value: ZW["2018sum"],
                itemStyle: {
                  color: "#00c86c"
                }
              },
              {
                name: types[2],
                value: YL["2018sum"],
                itemStyle: {
                  color: "#07d8ff"
                }
              },
              {
                name: types[3],
                value: IT["2018sum"],
                itemStyle: {
                  color: "#0c71cf"
                }
              }
            ]
          },
          {
            data: [
              {
                name: types[0],
                value: JR["2018sum"],
                itemStyle: {
                  color: "#d6d638"
                }
              },
              {
                name: types[1],
                value: ZW["2018sum"],
                itemStyle: {
                  color: "#00c86c"
                }
              },
              {
                name: types[2],
                value: YL["2018sum"],
                itemStyle: {
                  color: "#07d8ff"
                }
              },
              {
                name: types[3],
                value: IT["2018sum"],
                itemStyle: {
                  color: "#0c71cf"
                }
              }
            ]
          }
        ]
      },
      {
        series: [
          {
            data: [
              {
                name: types[0],
                value: JR["2019sum"],
                itemStyle: {
                  color: "#d6d638"
                }
              },
              {
                name: types[1],
                value: ZW["2018sum"],
                itemStyle: {
                  color: "#00c86c"
                }
              },
              {
                name: types[2],
                value: YL["2019sum"],
                itemStyle: {
                  color: "#07d8ff"
                }
              },
              {
                name: types[3],
                value: IT["2019sum"],
                itemStyle: {
                  color: "#0c71cf"
                }
              }
            ]
          },
          {
            data: [
              {
                name: types[0],
                value: JR["2019sum"],
                itemStyle: {
                  color: "#d6d638"
                }
              },
              {
                name: types[1],
                value: ZW["2019sum"],
                itemStyle: {
                  color: "#00c86c"
                }
              },
              {
                name: types[2],
                value: YL["2019sum"],
                itemStyle: {
                  color: "#07d8ff"
                }
              },
              {
                name: types[3],
                value: IT["2019sum"],
                itemStyle: {
                  color: "#0c71cf"
                }
              }
            ]
          }
        ]
      },
      {
        series: [
          {
            data: [
              {
                name: types[0],
                value: JR["2020sum"],
                itemStyle: {
                  color: "#d6d638"
                }
              },
              {
                name: types[1],
                value: ZW["2020sum"],
                itemStyle: {
                  color: "#00c86c"
                }
              },
              {
                name: types[2],
                value: YL["2020sum"],
                itemStyle: {
                  color: "#07d8ff"
                }
              },
              {
                name: types[3],
                value: IT["2020sum"],
                itemStyle: {
                  color: "#0c71cf"
                }
              }
            ]
          },
          {
            data: [
              {
                name: types[0],
                value: JR["2020sum"],
                itemStyle: {
                  color: "#d6d638"
                }
              },
              {
                name: types[1],
                value: ZW["2020sum"],
                itemStyle: {
                  color: "#00c86c"
                }
              },
              {
                name: types[2],
                value: YL["2020sum"],
                itemStyle: {
                  color: "#07d8ff"
                }
              },
              {
                name: types[3],
                value: IT["2020sum"],
                itemStyle: {
                  color: "#0c71cf"
                }
              }
            ]
          }
        ]
      }
    ]
  }

  chart.setOption(option, true)

  window.addEventListener("resize", chart.resize)
}

function formatData(data) {
  let temp, max = 0, sum = 0
  for (let y = 2016; y <= 2020; y++) {
    max = 0
    sum = 0
    temp = data[y]
    for (let i = 0, l = temp.length; i < l; i++) {
      max = Math.max(max, temp[i])
      sum += temp[i]
      data[y][i] = {
        name: types[i],
        value: temp[i]
      }
    }
    data[y + "max"] = Math.floor(max / 100) * 100
    data[y + "sum"] = sum
  }
  return data
}

onMounted(renderChart)

onBeforeUnmount(() => {
  window.removeEventListener("resize", chart.resize)
})
</script>

<template>
  <div class="wrap-container container">
    <div class="content">
      <div class="title">柱饼组合联动</div>
      <div class="body">
        <div class="wrap-container">
          <div class="chart" id="bp"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  left: 50px;
  top: 1548px;
  width: 586px;
  height: 400px;
  .chart {
    width: 100%;
    height: 100%;
  }
}
</style>