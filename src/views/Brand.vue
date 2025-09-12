<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import { init, registerMap } from "echarts"

import { CountTo } from "vue3-count-to"

import xue from "@/assets/images/brand/xue.png"
import yin from "@/assets/images/brand/yin.png"
import yu from "@/assets/images/brand/yu.png"
import yun from "@/assets/images/brand/yun.png"
import wu from "@/assets/images/brand/wu.png"
import shachen from "@/assets/images/brand/shachen.png"
import qing from "@/assets/images/brand/qing.png"
import lei from "@/assets/images/brand/lei.png"
import Business from "@/components/brand/Business.vue"
import Talent from "@/components/brand/Talent.vue"
import Income from "@/components/brand/Income.vue"
import WordCloud from "@/components/brand/WordCloud.vue"
import Distribution from "@/components/brand/Distribution.vue"
import History from "@/components/brand/History.vue"
import chinaMap from "@/assets/map/china.json"

const imgSrc = ref(xue)

const weather = ref({})

const nowTime = ref(""), nowWeek = ref(""), nowDate = ref("")
let timer = null

function formatTime (timeDate) {
  const year = timeDate.getFullYear()
  let month = timeDate.getMonth() + 1
  month = month < 10 ? "0" + month : month
  let date = timeDate.getDate()
  date = date < 10 ? "0" + date : date
  let hour = timeDate.getHours()
  hour = hour < 10 ? "0" + hour : hour
  let minute = timeDate.getMinutes()
  minute = minute < 10 ? "0" + minute : minute
  let second = timeDate.getSeconds()
  second = second < 10 ? "0" + second : second

  const weeks = ["日", "一", "二", "三", "四", "五", "六"]
  nowTime.value = hour + ":" + minute + ":" + second
  nowWeek.value = "星期" + weeks[timeDate.getDay()]
  nowDate.value = year + "-" + month + "-" + date
}

formatTime(new Date())
timer = setInterval(() => formatTime(new Date()), 1000)

function flexible () {
  const docEl = document.documentElement
  const dpr = window.devicePixelRatio || 1

  setBodyFontSize(dpr)
  setRemUnit(docEl)

  window.addEventListener("resize", () => setRemUnit(docEl))
  window.addEventListener("pageshow", e => {
    if (e.persisted) {
      setRemUnit(docEl)
    }
  })
}

function setBodyFontSize (dpr) {
  if (document.body) {
    document.body.style.fontSize = 12 * dpr + "px"
  } else {
    document.addEventListener("DOMContentLoaded", () => setBodyFontSize(dpr))
  }
}

function setRemUnit (docEl) {
  const rem = docEl.clientWidth / 24
  docEl.style.fontSize = rem + "px"
}

function render () {
  getWeatherInfo()
  renderMap()
}

function getWeatherInfo () {
  const ws = {
    xue: {
      wea: "雪",
      tem: "-2℃",
      imgSrc: xue
    },
    yin: {
      wea: "阴",
      temp: "20℃",
      imgSrc: yin
    },
    yu: {
      wea: "雨",
      temp: "18℃",
      imgSrc: yu
    },
    yun: {
      wea: "多云",
      temp: "31℃",
      imgSrc: yun
    },
    wu: {
      wea: "雾",
      temp: "13℃",
      imgSrc: wu
    },
    shachen: {
      wea: "沙尘暴",
      temp: "15℃",
      imgSrc: shachen
    },
    bingbao: {
      wea: "冰雹",
      temp: "20℃",
      imgSrc: yu
    },
    lei: {
      wea: "雷阵雨",
      temp: "37℃",
      imgSrc: lei
    },
    qing: {
      wea: "晴",
      temp: "6℃",
      imgSrc: qing
    }
  }

  const keys = Object.keys(ws)
  const index = Math.floor(Math.random() * keys.length)
  const w = ws[keys[index]]
  weather.value = {
    tem: w.temp,
    wea: w.wea,
  }
  imgSrc.value = w.imgSrc
}

let chart
function renderMap () {
  chart = init(document.getElementById("map"))
  registerMap("china", { geoJSON: chinaMap })
  const mapData = {
    上海: [121.4648, 31.2891],
    东莞: [113.8953, 22.901],
    东营: [118.7073, 37.5513],
    中山: [113.4229, 22.478],
    临汾: [111.4783, 36.1615],
    临沂: [118.3118, 35.2936],
    丹东: [124.541, 40.4242],
    丽水: [119.5642, 28.1854],
    乌鲁木齐: [87.9236, 43.5883],
    佛山: [112.8955, 23.1097],
    保定: [115.0488, 39.0948],
    兰州: [103.5901, 36.3043],
    包头: [110.3467, 41.4899],
    北京: [116.4551, 40.2539],
    北海: [109.314, 21.6211],
    南京: [118.8062, 31.9208],
    南宁: [108.479, 23.1152],
    南昌: [116.0046, 28.6633],
    南通: [121.1023, 32.1625],
    厦门: [118.1689, 24.6478],
    台州: [121.1353, 28.6688],
    合肥: [117.29, 32.0581],
    呼和浩特: [111.4124, 40.4901],
    咸阳: [108.4131, 34.8706],
    哈尔滨: [127.9688, 45.368],
    唐山: [118.4766, 39.6826],
    嘉兴: [120.9155, 30.6354],
    大同: [113.7854, 39.8035],
    大连: [122.2229, 39.4409],
    天津: [117.4219, 39.4189],
    太原: [112.3352, 37.9413],
    威海: [121.9482, 37.1393],
    宁波: [121.5967, 29.6466],
    宝鸡: [107.1826, 34.3433],
    宿迁: [118.5535, 33.7775],
    常州: [119.4543, 31.5582],
    广州: [113.5107, 23.2196],
    廊坊: [116.521, 39.0509],
    延安: [109.1052, 36.4252],
    张家口: [115.1477, 40.8527],
    徐州: [117.5208, 34.3268],
    德州: [116.6858, 37.2107],
    惠州: [114.6204, 23.1647],
    成都: [103.9526, 30.7617],
    扬州: [119.4653, 32.8162],
    承德: [117.5757, 41.4075],
    拉萨: [91.1865, 30.1465],
    无锡: [120.3442, 31.5527],
    日照: [119.2786, 35.5023],
    昆明: [102.9199, 25.4663],
    杭州: [119.5313, 29.8773],
    枣庄: [117.323, 34.8926],
    柳州: [109.3799, 24.9774],
    株洲: [113.5327, 27.0319],
    武汉: [114.3896, 30.6628],
    汕头: [117.1692, 23.3405],
    江门: [112.6318, 22.1484],
    沈阳: [123.1238, 42.1216],
    沧州: [116.8286, 38.2104],
    河源: [114.917, 23.9722],
    泉州: [118.3228, 25.1147],
    泰安: [117.0264, 36.0516],
    泰州: [120.0586, 32.5525],
    济南: [117.1582, 36.8701],
    济宁: [116.8286, 35.3375],
    海口: [110.3893, 19.8516],
    淄博: [118.0371, 36.6064],
    淮安: [118.927, 33.4039],
    深圳: [114.5435, 22.5439],
    清远: [112.9175, 24.3292],
    温州: [120.498, 27.8119],
    渭南: [109.7864, 35.0299],
    湖州: [119.8608, 30.7782],
    湘潭: [112.5439, 27.7075],
    滨州: [117.8174, 37.4963],
    潍坊: [119.0918, 36.524],
    烟台: [120.7397, 37.5128],
    玉溪: [101.9312, 23.8898],
    珠海: [113.7305, 22.1155],
    盐城: [120.2234, 33.5577],
    盘锦: [121.9482, 41.0449],
    石家庄: [114.4995, 38.1006],
    福州: [119.4543, 25.9222],
    秦皇岛: [119.2126, 40.0232],
    绍兴: [120.564, 29.7565],
    聊城: [115.9167, 36.4032],
    肇庆: [112.1265, 23.5822],
    舟山: [122.2559, 30.2234],
    苏州: [120.6519, 31.3989],
    莱芜: [117.6526, 36.2714],
    菏泽: [115.6201, 35.2057],
    营口: [122.4316, 40.4297],
    葫芦岛: [120.1575, 40.578],
    衡水: [115.8838, 37.7161],
    衢州: [118.6853, 28.8666],
    西宁: [101.4038, 36.8207],
    西安: [109.1162, 34.2004],
    贵阳: [106.6992, 26.7682],
    连云港: [119.1248, 34.552],
    邢台: [114.8071, 37.2821],
    邯郸: [114.4775, 36.535],
    郑州: [113.4668, 34.6234],
    鄂尔多斯: [108.9734, 39.2487],
    重庆: [107.7539, 30.1904],
    金华: [120.0037, 29.1028],
    铜川: [109.0393, 35.1947],
    银川: [106.3586, 38.1775],
    镇江: [119.4763, 31.9702],
    长春: [125.8154, 44.2584],
    长沙: [113.0823, 28.2568],
    长治: [112.8625, 36.4746],
    阳泉: [113.4778, 38.0951],
    青岛: [120.4651, 36.3373],
    韶关: [113.7964, 24.7028]
  }
  const planePath = "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z"
  const colors = ["#fff", "#fff", "#fff"]
  const series = []
  const XAData = [
    [{ name: "长沙" }, { name: "北京", value: 100 }],
    [{ name: "长沙" }, { name: "上海", value: 100 }],
    [{ name: "长沙" }, { name: "广州", value: 100 }],
    [{ name: "长沙" }, { name: "深圳", value: 100 }],
    [{ name: "长沙" }, { name: "西安", value: 100 }]
  ]
  const XNData = [
    [{ name: "长沙" }, { name: "西宁", value: 100 }],
    [{ name: "长沙" }, { name: "拉萨", value: 100 }],
    [{ name: "长沙" }, { name: "哈尔滨", value: 100 }],
    [{ name: "长沙" }, { name: "成都", value: 100 }],
    [{ name: "长沙" }, { name: "重庆", value: 100 }]
  ]
  const YCData = [
    [{ name: "北京" }, { name: "长沙", value: 100 }],
    [{ name: "北京" }, { name: "贵阳", value: 100 }],
    [{ name: "北京" }, { name: "杭州", value: 100 }]
  ]

  const seriesTop3 = [
    ["长沙", XAData],
    ["长沙", XNData],
    ["北京", YCData]
  ]
  let item
  for (let i = 0; i < seriesTop3.length; i++) {
    item = seriesTop3[i]
    series.push(
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: .7,
          color: "red",
          symbolSize: 3
        },
        lineStyle: {
          color: colors[i],
          width: 0,
          curveness: .2
        },
        data: convertData(item[1], mapData)
      }, {
          name: item[0] + " Top3",
          type: "lines",
          zlevel: 2,
          symbol: ["none", "arrow"],
          symbolSize: 10,
          effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15
          },
          lineStyle: {
            color: colors[i],
            width: 1,
            opacity: .6,
            curveness: .2
          },
          data: convertData(item[1], mapData)
      }, {
          name: item[0] + " Top3",
          type: "effectScatter",
          coordinateSystem: "geo",
          zlevel: 2,
          rippleEffect: {
            brushType: "stroke"
          },
          label: {
            show: true,
            position: "right",
            formatter: "{b}"
          },
          symbolSize: val => val[2] / 8,
          itemStyle: {
            color: colors[i],
          },
          emphasis: {
            itemStyle: {
              areaColor: "#2b91b7"
            }
          },
          data: item[1].map(item => ({
            name: item[1].name,
            value: mapData[item[1].name].concat(item[1].value)
          }))
      }
    )
  }

  const option = {
    grid: {
      top: "50%"
    },
    tooltip: {
      trigger: "item",
      formatter: params => {
        if (params.seriesType === "effectScatter") {
          return "线路：" + params.data.name + " " + params.data.value[2]
        } else if (params.seriesType === "lines") {
          return params.data.fromName + " --> " + params.data.toName + "<br />" + params.data.value
        } else {
          return params.name
        }
      }
    },
    geo: {
      map: "china",
      roam: false,
      zoom: 1.2,
      itemStyle: {
        areaColor: "rgba(43, 196, 243, .42)",
        borderColor: "rgba(43, 196, 243, 1)",
        borderWidth: 1
      },
      emphasis: {
        itemStyle: {
          areaColor: "#2b91b7"
        },
        label: {
          show: true,
          color: "#fff"
        }
      }
    },
    series
  }

  chart.setOption(option, true)

  window.addEventListener("resize", chart.resize)
}

function convertData (data, mapData) {
  const res = []
  let d, c1, c2
  for (let i = 0; i < data.length; i++) {
    d = data[i]
    c1 = mapData[d[0].name]
    c2 = mapData[d[1].name]
    if (c1 && c2) {
      res.push({
        fromName: d[0].name,
        toName: d[1].name,
        coords: [c1, c2],
        value: d[1].value
      })
    }
  }

  return res
}

flexible()

onMounted(render)

onBeforeUnmount(() => {
  clearInterval(timer)
  window.removeEventListener("resize", chart.resize)
})
</script>

<template>
  <div class="brand-container">
    <div class="wrap">
      <header>
        <div class="weather">
          <img :src="imgSrc" alt=""/>
          <span class="tem">{{ weather.tem }}</span>
          <span class="wea">{{ weather.wea }}</span>
        </div>
        <h2>区块链科技公司品牌概览</h2>
        <div class="showTime">
          <span class="time">{{ nowTime }}</span>
          <span class="date">
            <span>{{ nowWeek }}</span>
            <span>{{ nowDate }}</span>
          </span>
        </div>
      </header>

      <section class="main">
        <div class="item left">
          <div class="panel">
            <h2>业务范围</h2>
            <Business/>
            <div class="panel-footer"></div>
          </div>

          <div class="panel">
            <h2>人才队伍</h2>
            <Talent/>
            <div class="panel-footer"></div>
          </div>

          <div class="panel">
            <h2>营收状况</h2>
            <Income/>
            <div class="panel-footer"></div>
          </div>
        </div>

        <div class="item center">
          <div class="resume">
            <div class="resume-hd">
              <ul>
                <li>
                  <CountTo :startVal="0" :endVal="490" :duration="6000" separator=""/>
                </li>
                <li>
                  <CountTo :startVal="0" :endVal="75" :duration="6000" separator=""/>
                </li>
                <li>
                  <CountTo :startVal="0" :endVal="3000" :duration="6000" separator=""/>
                </li>
              </ul>
            </div>
            <div class="resume-bd">
              <ul>
                <li>公司总人数（单位：人）</li>
                <li>技术人员占比（单位：%）</li>
                <li>产品投资额（单位：万元）</li>
              </ul>
            </div>
          </div>
          <div class="map">
            <div class="chart" id="map"></div>
            <div class="map1"></div>
            <div class="map2"></div>
            <div class="map3"></div>
          </div>
        </div>

        <div class="item right">
          <div class="panel">
            <h2>产品热词</h2>
            <WordCloud/>
            <div class="panel-footer"></div>
          </div>
          <div class="panel">
            <h2>客户分布</h2>
            <Distribution/>
            <div class="panel-footer"></div>
          </div>
          <div class="panel">
            <h2>发展历程</h2>
            <History/>
            <div class="panel-footer"></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.brand-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;

  .wrap {
    background: url(@/assets/images/brand/bg.jpg) no-repeat;
    background-size: cover;
    line-height: 1.15;

    header {
      position: relative;
      height: 1rem;
      background: url(@/assets/images/brand/head_bg.png) no-repeat top center;
      background-size: 100% 100%;

      h2 {
        color: #7e70ff;
        font-size: .475rem;
        text-align: center;
        line-height: .75rem;
        letter-spacing: 1px;
      }

      .weather {
        position: absolute;
        left: 1.375rem;
        top: .35rem;
        font-size: .25rem;
        color: rgba(126, 240, 255, .7);

        img {
          width: .45rem;
        }

        span {
          display: inline-block;
        }

        .tem {
          margin: 0 .1rem 0 .2rem;
        }
      }

      .showTime {
        position: absolute;
        right: 1.375rem;
        top: .5rem;
        color: rgba(126, 240, 255, .7);
        display: flex;

        .time {
          font-size: .28rem;
          margin-right: .18rem;
        }

        .date {
          span {
            display: block;

            &:nth-child(1) {
              font-size: .12rem;
              text-align: right;
            }

            &:nth-child(2) {
              font-size: .14rem;
            }
          }
        }
      }
    }

    .main {
      min-width: 1024px;
      max-width: 1920px;
      padding: .125rem .125rem 0;
      display: flex;

      #map {
        margin-top: 10%;
      }

      .item {
        flex: 3;

        .panel {
          position: relative;
          height: 3.875rem;
          border: 1px solid rgba(25, 186, 139, .17);
          background: rgba(255, 255, 255, .04) url(@/assets/images/brand/line.png);
          padding: 0 .1875rem 0;
          margin-bottom: .1875rem;

          &:before {
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            width: 10px;
            height: 10px;
            border-top: 2px solid #02a6b5;
            border-left: 2px solid #02a6b5;
          }

          &:after {
            position: absolute;
            top: 0;
            right: 0;
            content: "";
            width: 10px;
            height: 10px;
            border-top: 2px solid #02a6b5;
            border-right: 2px solid #02a6b5;
          }

          .panel-footer {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;

            &:before {
              position: absolute;
              bottom: 0;
              left: 0;
              content: "";
              width: 10px;
              height: 10px;
              border-bottom: 2px solid #02a6b5;
              border-left: 2px solid #02a6b5;
            }

            &:after {
              position: absolute;
              bottom: 0;
              right: 0;
              content: "";
              width: 10px;
              height: 10px;
              border-bottom: 2px solid #02a6b5;
              border-right: 2px solid #02a6b5;
            }
          }

          h2 {
            height: .6rem;
            line-height: .6rem;
            text-align: center;
            color: #fff;
            font-size: .225rem;
            font-weight: 400;
          }
        }

        &.center {
          flex: 5;
          margin: 0 .125rem .1rem;
          overflow: hidden;

          .resume {
            background-color: rgba(101, 132, 226, .1);
            padding: .1875rem;

            .resume-hd {
              position: relative;
              border: 1px solid rgba(25, 186, 139, .17);

              ul {
                display: flex;

                %li-line {
                  content: "";
                  position: absolute;
                  height: 50%;
                  width: 1px;
                  background-color: rgba(255, 255, 255, .2);
                  top: 25%;
                }

                li {
                  position: relative;
                  flex: 1;
                  text-align: center;
                  height: 1.2rem;
                  line-height: 1.2rem;
                  font-size: .65rem;
                  color: #ffeb7b;
                  padding: .05rem 0;
                  font-family: DIGITALDREAMFAT, sans-serif;
                  font-weight: bold;

                  &:nth-child(2) {
                    &:after {
                      @extend %li-line;
                      right: 0;
                    }

                    &:before {
                      @extend %li-line;
                      left: 0;
                    }
                  }
                }
              }

              &:before {
                content: "";
                position: absolute;
                width: 30px;
                height: 10px;
                border-top: 2px solid #02a6b5;
                border-left: 2px solid #02a6b5;
                top: 0;
                left: 0;
              }

              &:after {
                content: "";
                position: absolute;
                width: 30px;
                height: 10px;
                border-bottom: 2px solid #02a6b5;
                border-right: 2px solid #02a6b5;
                bottom: 0;
                right: 0;
              }
            }
          }
        }
      }

      .resume-bd {
        ul {
          display: flex;

          li {
            flex: 1;
            height: .5rem;
            line-height: .5rem;
            text-align: center;
            font-size: .225rem;
            color: rgba(255, 255, 255, .7);
            padding-top: .125rem;
          }
        }
      }

      %map-style {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 6.475rem;
        height: 6.475rem;
        background: url(@/assets/images/brand/map.png) no-repeat;
        background-size: 100% 100%;
        opacity: .3;
      }

      .map {
        position: relative;
        height: 10.125rem;

        .chart {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 5;
          height: 10.125rem;
          width: 100%;
        }

        .map1 {
          @extend %map-style;
        }

        .map2 {
          @extend %map-style;
          width: 8.0375rem;
          height: 8.0375rem;
          background-image: url(@/assets/images/brand/lbx.png);
          opacity: .6;
          z-index: 2;
          animation: rotate 15s linear infinite;
        }

        .map3 {
          @extend %map-style;
          width: 7.075rem;
          height: 7.075rem;
          background-image: url(@/assets/images/brand/jt.png);
          animation: rotate1 10s linear infinite;
        }
      }
    }
  }
}

@keyframes rotate {
  from {
    transform: translate(-50%, -50%) rotate(0);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes rotate1 {
  from {
    transform: translate(-50%, -50%) rotate(0);
  }
  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

@media screen and (max-width: 1024px) {
  html {
    font-size: 42px !important;
  }
}

@media screen and (min-width: 1920px) {
  html {
    font-size: 80px !important;
  }
}
</style>