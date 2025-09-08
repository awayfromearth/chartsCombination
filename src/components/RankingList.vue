<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

const activeIndex = ref(-1)
const data = [
  {
    id: 1,
    itemNum: 258,
    dataItem: 1288,
    dataSize: 12306,
    workUnit: 'JS'
  },
  {
    id: 2,
    itemNum: 568,
    dataItem: 5623,
    dataSize: 12306,
    workUnit: 'Node.js'
  },
  {
    id: 3,
    itemNum: 208,
    dataItem: 1755,
    dataSize: 12043,
    workUnit: 'Vue.js'
  },
  {
    id: 4,
    itemNum: 358,
    dataItem: 1812,
    dataSize: 12306,
    workUnit: 'CSS3'
  },
  {
    id: 5,
    itemNum: 128,
    dataItem: 4718,
    dataSize: 12580,
    workUnit: 'jQuery'
  }
]

let timer
function render() {
  activeIndex.value = activeIndex.value === data.length - 1 ? 0 : activeIndex.value + 1
  timer = setTimeout(render, 5000)
}

onMounted(() => {
  setTimeout(render, 4000)
})

onBeforeUnmount(() => {
  clearTimeout(timer)
})
</script>

<template>
  <div class="wrap-container container">
    <div class="content">
      <div class="title">排行榜</div>
      <div class="body">
        <div class="wrap-container">
          <div class="pd-main">
            <div id="chart1" class="chart-1">
              <div class="compass">
                <div class="compass-bg-1"></div>
                <div class="compass-bg-2"></div>
                <div class="compass-bg-3"></div>
                <div class="compass-bg-4"></div>

                <div class="compass-bg-c-1"></div>
                <div class="compass-bg-c-2"></div>
                <div class="compass-bg-c-3"></div>
                <div class="compass-bg-c-4"></div>

                <div
                    class="compass-text"
                    v-for="(item, index) in data"
                    :key="item.id"
                    :class="[
                        `compass-text-${index + 1}`,
                        {
                          show: activeIndex === index
                        }
                    ]"
                >
                  <span>事项数：{{ item.itemNum }}</span>
                  <span>数据项：{{ item.dataItem }}</span>
                  <span>数据量：{{ item.dataSize }}</span>
                </div>
                
                <div class="compass-number">
                  <div
                    v-for="(item, index) in data"
                    :key="item.id"
                    :title="index + 1"
                    :class="[
                        `rank-${index + 1}`,
                        {
                          scale: activeIndex === index
                        }
                    ]"
                  >
                    <span>{{ item.workUnit }}</span>
                  </div>
                </div>
                
                <div class="line-sx">
                  <div class="line-fs"></div>
                  <div class="line-fs"></div>
                  <div class="line-fs"></div>
                  <div class="line-fs"></div>
                  <div class="line-fs"></div>
                  <div class="line-fs"></div>
                  <div class="line-fs"></div>
                  <div class="line-fs"></div>
                  <div class="line-fs"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  left: 50px;
  top: 110px;
  .pd-main {
    position: absolute;
    width: 100%;
    height: 100%;
    [class^=chart] {
      position: absolute;
      transform-origin: left top;
    }
    .chart-1 {
      width: 500px;
      height: 410px;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .compass {
      width: 100%;
      height: 100%;
      transform: scale(.9);
      [class^=compass-bg-] {
        position: absolute;
        bottom: 0;
      }

      %compass-bg {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: rotateX(-80deg) rotateZ(45deg) rotateY(0);
      }
      .compass-bg-1 {
        @extend %compass-bg;
        margin-left: -190px;
        bottom: -140px;
        width: 380px;
        height: 380px;
        background: repeating-radial-gradient(transparent, rgba(10, 58, 103, .2));
      }
      .compass-bg-2 {
        @extend %compass-bg;
        margin-left: -160px;
        bottom: -110px;
        width: 320px;
        height: 320px;
        background: repeating-radial-gradient(transparent, rgba(112, 67, 103, .2));
      }
      .compass-bg-3 {
        @extend %compass-bg;
        margin-left: -130px;
        bottom: -80px;
        width: 260px;
        height: 260px;
        box-shadow: inset 0 0 10px 10px rgba(44, 183, 190, .8);
      }
      .compass-bg-4 {
        @extend %compass-bg;
        margin-left: -70px;
        bottom: -20px;
        width: 140px;
        height: 140px;
        background: repeating-radial-gradient(transparent, rgba(102, 97, 70, .2));
        animation: backShadow 3s linear infinite;
      }

      .compass-bg-c-1 {
        width: 100%;
        height: 100%;
        background: url(@/assets/images/rankList/compass-bg-1.png) no-repeat 50% 345px;
      }
      .compass-bg-c-2 {
        width: 100%;
        height: 100%;
        background: url(@/assets/images/rankList/compass-bg-2.png) no-repeat 65% 146px;
        opacity: .8;
      }
      .compass-bg-c-3 {
        width: 100%;
        height: 100%;
        background: url(@/assets/images/rankList/compass-bg-3.png) no-repeat 50% 227px;
      }
      .compass-bg-c-4 {
        width: 100%;
        height: 100%;
        background: url(@/assets/images/rankList/compass-bg-4.png) no-repeat 50% 63px;
      }

      .compass-text {
        position: absolute;
        overflow: hidden;
        left: 50%;
        margin-left: -60px;
        font-size: 12px;
        background-color: rgba(0, 71, 157, .4);
        padding: 5px 10px;
        color: #00c2ff;
        border-radius: 6px;
        line-height: 1.5;
        display: none;
        &.compass-text-1 {
          top: -77px;
          left: 63px;
        }
        &.compass-text-2 {
          top: -35px;
          left: 167px;
        }
        &.compass-text-3 {
          top: 5px;
          left: 265px;
        }
        &.compass-text-4 {
          top: 49px;
          left: 365px;
        }
        &.compass-text-5 {
          top: 88px;
          left: 458px;
        }
        span {
          display: block;
        }
        &.show {
          display: block;
        }
      }

      .compass-number {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        bottom: 50px;
        > .scale {
          transform: scale(1.2);
          transform-origin: center bottom;
        }

        > div {
          position: absolute;
          bottom: 0;
          width: 55px;
          height: 0;
          animation: grow 1s linear forwards;
          transition: 1s;
          &:nth-child(1) {
            left: 5%;
            color: #ff9232;
            animation-delay: 0s;
            &:after {
              animation-delay: 0s;
            }
          }
          &:nth-child(2) {
            left: 25%;
            color: #d5c245;
            animation-delay: .2s;
            bottom: -10%;
            &:after {
              animation-delay: 2.85s;
            }
          }
          &:nth-child(3) {
            left: 45%;
            color: #01a455;
            animation-delay: .4s;
            bottom: -20%;
            &:after {
              animation-delay: 5.7s;
            }
          }
          &:nth-child(4) {
            left: 65%;
            color: #85adfb;
            animation-delay: .6s;
            bottom: -30%;
            &:after {
              animation-delay: 8.55s;
            }
          }
          &:nth-child(5) {
            left: 85%;
            color: #c36885;
            animation-delay: .8s;
            bottom: -40%;
            &:after {
              animation-delay: 11.4s;
            }
          }

          span {
            display: block;
            width: 55px;
            height: 55px;
            line-height: 55px;
            text-align: center;
            box-shadow: inset 0 0 15px currentColor;
            border-radius: 100%;
          }
          &:before {
            content: "";
            position: absolute;
            height: 100%;
            border-left: 1px dashed currentColor;
            top: 55px;
            left: 50%;
            margin-left: -1px;
          }
          &:after {
            content: "NO." attr(title);
            position: absolute;
            display: inline-block;
            top: -20px;
            width: 100%;
            font-family: "DIGITALDREAMFAT",serif;
            text-align: center;
          }
        }
      }

      .line-sx {
        > div {
          &:nth-child(2) {
            height: 90%;
            bottom: 0;
            left: 51px;
            animation-duration: 2s;
            animation-delay: 1.5s;
          }
          &:nth-child(3) {
            height: 100%;
            bottom: 32px;
            left: 89px;
            animation-duration: 3s;
            animation-delay: 0s;
          }
          &:nth-child(4) {
            height: 100%;
            bottom: 3px;
            left: 179px;
            animation-duration: 2.5s;
            animation-delay: 1s;
            filter: hue-rotate(180deg);
          }
          &:nth-child(5) {
            height: 90%;
            bottom: 42px;
            left: 229px;
            animation-duration: 2s;
            animation-delay: 2s;
          }
          &:nth-child(6) {
            height: 100%;
            bottom: 11px;
            right: 48px;
            animation-duration: 2.5s;
            animation-delay: .5s;
          }
          &:nth-child(7) {
            height: 90%;
            bottom: -22px;
            right: 174px;
            animation-duration: 3s;
            animation-delay: 2.5s;
            filter: hue-rotate(180deg);
          }
          &:nth-child(8) {
            height: 90%;
            bottom: -22px;
            right: 100px;
            animation-duration: 3s;
            animation-delay: 1.5s;
          }
          &:nth-child(9) {
            height: 100%;
            bottom: -10px;
            right: 220px;
            animation-duration: 2.5s;
            animation-delay: 2s;
          }
        }
        .line-fs {
          width: 14px;
          height: 100%;
          background: url(@/assets/images/rankList/line-fs.png) no-repeat 50% 150%;
          position: absolute;
          z-index: -1;
          animation: fs 3s cubic-bezier(1, 0, .6, .6) infinite;
        }
      }
    }
  }
}

@keyframes backShadow {
  0%, 100% {
    box-shadow: 0 0 0 rgba(255, 255, 255, 0);
  }
  50% {
    box-shadow: 0 0 30em white;
  }
}

@keyframes grow {
  0% {
    height: 0;
  }
  100% {
    height: 70%;
  }
}

@keyframes fs {
  0% {
    background-position: 50% 150%;
  }
  50% {
    background-position: 50% -132%;
  }
  100% {
    background-position: 50% -264%;
    opacity: 0;
  }
}
</style>