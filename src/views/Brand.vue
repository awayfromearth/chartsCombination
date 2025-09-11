<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

import { CountTo } from "vue3-count-to"

import xue from "@/assets/images/brand/xue.png"
import Business from "@/components/brand/Business.vue"
import Talent from "@/components/brand/Talent.vue"
import Income from "@/components/brand/Income.vue"

const imgSrc = ref(xue)

const weather = ref({
  tem: "-2℃",
  wea: "小雪"
})

const nowTime = ref(""), nowWeek = ref(""), nowDate = ref("")
let timer = null
function formatTime(timeDate) {
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

function flexible() {
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
function setBodyFontSize(dpr) {
  if (document.body) {
    document.body.style.fontSize = 12 * dpr + "px";
  } else {
    document.addEventListener("DOMContentLoaded", () => setBodyFontSize(dpr))
  }
}
function setRemUnit(docEl) {
  const rem = docEl.clientWidth / 24
  docEl.style.fontSize = rem + "px"
}

onMounted(() => {
  flexible()
})

onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>

<template>
  <div class="brand-container">
    <div class="wrap">
      <header>
        <div class="weather">
          <img :src="imgSrc" alt="" />
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
            <Business />
            <div class="panel-footer"></div>
          </div>

          <div class="panel">
            <h2>人才队伍</h2>
            <Talent />
            <div class="panel-footer"></div>
          </div>

          <div class="panel">
            <h2>营收状况</h2>
            <Income />
            <div class="panel-footer"></div>
          </div>
        </div>

        <div class="item center">
          <div class="resume">
            <div class="resume-hd">
              <ul>
                <li>
                  <CountTo :startVal="0" :endVal="490" :duration="6000" separator="" />
                </li>
                <li>
                  <CountTo :startVal="0" :endVal="75" :duration="6000" separator="" />
                </li>
                <li>
                  <CountTo :startVal="0" :endVal="3000" :duration="6000" separator="" />
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

        <div class="item right"></div>
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
          right: 0;
          bottom: 0;
        }

        %map-style {
          position: absolute;
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
    }
  }
}
</style>