<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

const data = ["JavaScript", "Vue.js", "React.js", "Node.js", "Angular", "HTML5", "CSS3", "jQuery", "Typescript", "Bootstrap", "WebApp", "小程序", "HTTP", "Sass/Less", "Webpack", "ES6"]
const activeIndex = ref(-1)

let timer = null, i = 5
onMounted(() => {
  timer = setInterval(() => {
    activeIndex.value = parseInt(Math.random() * 15, 10)

    if (i) {
      i--
    } else {
      i = 5
      data.sort(() => Math.random() - 0.5)
    }
  }, 2000)
})

onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>

<template>
  <div class="wrap-container container">
    <div class="content">
      <div class="title">闪动词云</div>
      <div class="body">
        <div class="wrap-container cloud">
          <div class="lines">
            <div class="cloud-container">
              <div class="tree"></div>
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

            <div id="textCloud" class="text">
              <div
                v-for="(item, index) in data"
                :key="index"
                :id="`text-${index + 1}`"
                :class="{ flash: index === activeIndex }"
              >
                <span :title="item">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  left: 512px;
  top: 1978px;
  width: 432px;
  height: 400px;

  .cloud {
    left: 55px;
    top: 0;
    width: 80%;
    height: 100%;
  }

  .lines {
    position: relative;
    width: 310px;
    height: 335px;

    .cloud-container {
      width: 100%;
      height: 100%;
      background: url(@/assets/images/flashCloud/pd-main-left-bg-2.png) no-repeat 50% 50%;

      > div {
        &:nth-child(2) {
          height: 90%;
          animation-duration: 2s;
          animation-delay: 1.5s;
          bottom: 0;
          left: 51px;
        }
        &:nth-child(3) {
          height: 100%;
          animation-duration: 3s;
          animation-delay: 0s;
          bottom: 32px;
          left: 89px;
        }
        &:nth-child(4) {
          height: 100%;
          animation-duration: 2.5s;
          animation-delay: 1s;
          bottom: 3px;
          left: 179px;
          filter: hue-rotate(180deg);
        }
        &:nth-child(5) {
          height: 90%;
          animation-duration: 2s;
          animation-delay: 2s;
          bottom: 42px;
          left: 229px;
        }
        &:nth-child(6) {
          height: 100%;
          animation-duration: 2.5s;
          animation-delay: .5s;
          bottom: 11px;
          left: 48px;
        }
        &:nth-child(7) {
          height: 90%;
          animation-duration: 3s;
          animation-delay: 2.5s;
          bottom: -22px;
          left: 174px;
          filter: hue-rotate(180deg);
        }
        &:nth-child(8) {
          height: 90%;
          animation-duration: 3s;
          animation-delay: 1.5s;
          bottom: -22px;
          left: 100px;
        }
        &:nth-child(9) {
          height: 100%;
          animation-duration: 2.5s;
          animation-delay: 2s;
          bottom: -10px;
          left: 220px;
        }
        &:nth-child(10) {
          height: 95%;
          animation-duration: 2s;
          animation-delay: 1s;
          bottom: -41px;
          left: 182px;
        }
      }

      .tree {
        width: 100%;
        height: 100%;
        background: url(@/assets/images/flashCloud/pd-main-left-bg-tree.png) no-repeat 50% bottom;
        mix-blend-mode: screen;
      }

      .line-fs {
        width: 14px;
        height: 100%;
        background: url(@/assets/images/flashCloud/line-fs.png) no-repeat 50% 150%;
        position: absolute;
        z-index: -1;
        animation: fs 3s cubic-bezier(1, 0, .6, .6) infinite;
      }
    }
  }

  .text {
    position: absolute;
    width: 318px;
    height: 195px;
    top: 0;
    left: 50%;
    margin-left: -161px;
    z-index: 2;

    .flash {
      color: #00f6ff;
      font-size: 12px;
      animation-name: flash;
      animation-duration: 1s;
      animation-iteration-count: 1;
    }

    div {
      position: absolute;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 70px;
      height: 36px;
      line-height: 36px;
      word-wrap: break-word;
      word-break: break-all;
      opacity: .8;
      color: #00f6ff;

      span {
        font-size: 12px;
        cursor: pointer;
      }

      &:nth-child(1) {
        top: 84px;
        left: 26px;
      }
      &:nth-child(2) {
        top: 13px;
        left: 157px;
      }
      &:nth-child(3) {
        top: 105px;
        left: 35px;
      }
      &:nth-child(4) {
        top: 38px;
        left: 89px;
      }
      &:nth-child(5) {
        top: 43px;
        left: 178px;
      }
      &:nth-child(6) {
        top: 76px;
        left: 227px;
      }
      &:nth-child(7) {
        top: 63px;
        left: 66px;
      }
      &:nth-child(8) {
        top: 156px;
        left: 43px;
      }
      &:nth-child(9) {
        top: 130px;
        left: 16px;
      }
      &:nth-child(10) {
        top: 93px;
        left: 128px;
      }
      &:nth-child(11) {
        top: 106px;
        left: 241px;
      }
      &:nth-child(12) {
        top: 121px;
        left: 112px;
      }
      &:nth-child(13) {
        top: 67px;
        left: 153px;
      }
      &:nth-child(14) {
        top: 157px;
        left: 207px;
      }
      &:nth-child(15) {
        top: 132px;
        left: 206px;
      }
      &:nth-child(16) {
        top: 150px;
        left: 117px;
      }
    }
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

@keyframes flash {
  from, 50%, to {
    opacity: 1;
  }
  20%, 75% {
    opacity: 0;
  }
}
</style>