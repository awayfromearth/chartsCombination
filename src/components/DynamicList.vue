<script setup>
import { CountTo } from "vue3-count-to"
</script>

<template>
  <div class="wrap-container container">
    <div class="content">
      <div class="title">动态列表</div>
      <div class="body">
        <div class="wrap-container info">
          <div class="info-main">
            <div class="center">
              <div class="info-1 animated infinite rotateF"></div>
              <div class="info-2 animated infinite rotateF"></div>
              <div class="info-3 animated infinite rotate"></div>
              <div class="info-4 animated infinite rotate"></div>
              <div class="info-5 animated infinite flashPD"></div>
            </div>

            <div class="number number-1 animated fadeInLeft">
              <div class="number-bg animated infinite rotate"></div>
              <div class="number-icon"></div>
              <div class="number-text">
                <span>区块链</span>
                <span id="number1" class="odometer odometer-theme-digital">
                  <span class="odometer-inside">
                    <span class="odometer-digit">
                      <span class="odometer-digit-spacer">8</span>
                      <span class="odometer-digit-inner">
                        <span class="odometer-ribbon">
                          <span class="odometer-ribbon-inner">
                            <span class="odometer-value">
                              <CountTo :startVal="0" :endVal="12356" :duration="6000" separator="" />
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
            </div>

            <div class="number number-2 animated fadeInLeft">
              <div class="number-bg animated infinite rotate"></div>
              <div class="number-icon"></div>
              <div class="number-text">
                <span>大数据</span>
                <span id="number1" class="odometer odometer-theme-digital">
                  <span class="odometer-inside">
                    <span class="odometer-digit">
                      <span class="odometer-digit-spacer">8</span>
                      <span class="odometer-digit-inner">
                        <span class="odometer-ribbon">
                          <span class="odometer-ribbon-inner">
                            <span class="odometer-value">
                              <CountTo :startVal="0" :endVal="65321" :duration="6000" separator="" />
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
            </div>

            <div class="number number-3 animated fadeInLeft">
              <div class="number-bg animated infinite rotate"></div>
              <div class="number-icon"></div>
              <div class="number-text">
                <span>云计算</span>
                <span id="number1" class="odometer odometer-theme-digital">
                  <span class="odometer-inside">
                    <span class="odometer-digit">
                      <span class="odometer-digit-spacer">8</span>
                      <span class="odometer-digit-inner">
                        <span class="odometer-ribbon">
                          <span class="odometer-ribbon-inner">
                            <span class="odometer-value">
                              <CountTo :startVal="0" :endVal="8986" :duration="6000" separator="" />
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
            </div>

            <div class="number number-4 animated fadeInLeft">
              <div class="number-bg animated infinite rotate"></div>
              <div class="number-icon"></div>
              <div class="number-text">
                <span>人工智能</span>
                <span id="number1" class="odometer odometer-theme-digital">
                  <span class="odometer-inside">
                    <span class="odometer-digit">
                      <span class="odometer-digit-spacer">8</span>
                      <span class="odometer-digit-inner">
                        <span class="odometer-ribbon">
                          <span class="odometer-ribbon-inner">
                            <span class="odometer-value">
                              <CountTo :startVal="0" :endVal="258" :duration="6000" separator="" />
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
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
  left: 50px;
  top: 2408px;
  width: 560px;
  height: 400px;

  .info {
    left: 0;
    top: 35px;
    width: 100%;
    height: 80%;
  }

  .info-main {
    width: 100%;
    height: 100%;

    .center {
      position: absolute;
      top: 16px;
      left: 30px;
      width: 234px;
      height: 234px;

      > [class^=info] {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-repeat: no-repeat;
        background-position: center center;
      }
      .info-1 {
        background-image: url(@/assets/images/dynamicList/info-1-0.png);
        animation-duration: 20s;
      }
      .info-2 {
        background-image: url(@/assets/images/dynamicList/info-1-1.png);
        animation-duration: 20s;
        animation-delay: 3s;
      }
      .info-3 {
        background-image: url(@/assets/images/dynamicList/info-1-2.png);
        animation-duration: 20s;
        animation-delay: 8s;
      }
      .info-4 {
        background-image: url(@/assets/images/dynamicList/info-1-3.png);
        animation-duration: 10s;
        animation-delay: 5s;
      }
      .info-5 {
        background-image: url(@/assets/images/dynamicList/info-1-4.png);
        animation-duration: 5s;
      }
    }

    .number {
      position: absolute;
      left: 0;
      padding-left: 290px;
      animation-timing-function: cubic-bezier(1, 0, .6, .6);

      .number-bg {
        width: 54px;
        height: 54px;
        position: absolute;
        top: 5px;
        animation-duration: 5s;
      }

      .number-icon {
        width: 54px;
        height: 54px;
        position: absolute;
        top: 5px;
      }

      .number-text {
        display: inline-block;
        color: #0072bc;
        font-size: 18px;
        padding: 10px 0 0 60px;

        > span {
          display: block;
          &:nth-child(2) {
            font-size: 22px;
            color: #00aeef;
            line-height: 28px;
            padding: 0;
            background: transparent;
          }
        }
      }

      &.number-1 {
        animation-delay: 1s;
        background: url(@/assets/images/dynamicList/info-line-01.png) no-repeat 180px center;
        height: 60px;
        top: 15px;

        .number-bg {
          animation-delay: 2s;
          background: url(@/assets/images/dynamicList/info-bg-01.png) no-repeat 50% 50%;
        }

        .number-icon {
          background: url(@/assets/images/dynamicList/info-icon-1.png) no-repeat 50% 50%;
        }
      }
      &.number-2 {
        animation-delay: 1.25s;
        background: url(@/assets/images/dynamicList/info-line-02.png) no-repeat 180px center;
        height: 60px;
        top: 70px;
        padding-left: 350px;

        .number-bg {
          animation-delay: 2.5s;
          background: url(@/assets/images/dynamicList/info-bg-02.png) no-repeat 50% 50%;
        }

        .number-icon {
          background: url(@/assets/images/dynamicList/info-icon-2.png) no-repeat 50% 50%;
        }
      }
      &.number-3 {
        animation-delay: 1.5s;
        background: url(@/assets/images/dynamicList/info-line-02.png) no-repeat 180px center;
        height: 60px;
        top: 135px;
        padding-left: 350px;

        .number-bg {
          animation-delay: 3s;
          background: url(@/assets/images/dynamicList/info-bg-03.png) no-repeat 50% 50%;
        }

        .number-icon {
          background: url(@/assets/images/dynamicList/info-icon-3.png) no-repeat 50% 50%;
        }
      }
      &.number-4 {
        animation-delay: 1.75s;
        background: url(@/assets/images/dynamicList/info-line-01.png) no-repeat 180px center;
        height: 60px;
        top: 190px;

        .number-bg {
          animation-delay: 3.5s;
          background: url(@/assets/images/dynamicList/info-bg-04.png) no-repeat 50% 50%;
        }

        .number-icon {
          background: url(@/assets/images/dynamicList/info-icon-4.png) no-repeat 50% 50%;
        }
      }
    }
  }
}

.animated {
  animation-duration: 1s;
  animation-fill-mode: both;

  &.infinite {
    animation-iteration-count: infinite;
  }
}

@keyframes rotate {
  0% {
    transform-origin: center;
    transform: rotate(0deg);
  }
  100% {
    transform-origin: center;
    transform: rotate(360deg);
  }
}
.rotate {
  animation-name: rotate;
  animation-timing-function: linear;
}

@keyframes rotateF {
  100% {
    transform-origin: center;
    transform: rotate(-360deg);
  }
}
.rotateF {
  animation-name: rotateF;
  animation-timing-function: linear;
}

@keyframes flashPD {
  0%, 90% {
    opacity: 1;
  }
  92%, 98% {
    opacity: 0;
  }
  96%, 100% {
    opacity: 1;
  }
}
.flashPD {
  animation-name: flashPD;
}
</style>