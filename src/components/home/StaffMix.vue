<script setup>
const data = [
  {
    name: "前端开发",
    number: 3
  },
  {
    name: "后端开发",
    number: 5
  },
  {
    name: "网页设计",
    number: 2
  },
  {
    name: "测试",
    number: 2
  },
  {
    name: "产品经理",
    number: 1
  },
  {
    name: "安卓开发",
    number: 1
  },
  {
    name: "IOS开发",
    number: 1
  }
]
</script>

<template>
  <div class="wrap-container container">
    <div class="content">
      <div class="title">人员占比</div>
      <div class="body">
        <div class="wrap-container">
          <div class="persons">
            <div class="person person1"></div>
            <div class="person person2"></div>
            <div class="person person3"></div>
          </div>

          <div class="svg">
            <svg width="244" height="264" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="linear" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style="stop-color:#0a6aff;stop-opacity:0.47"></stop>
                  <stop offset="40%" style="stop-color:#5cffff;stop-opacity:1"></stop>
                  <stop offset="100%" style="stop-color:#0a6aff;stop-opacity:1"></stop>
                </linearGradient>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="rgb(11,108,255)"></path>
                </marker>
              </defs>
              <path d="M134 86C136 86 80 85 77 208" fill="none" stroke="url(#linear)" stroke-opacity="1" marker-end="url(#arrow)"></path>
              <path d="M136 86C138 86 212 88 204 208" fill="none" stroke="url(#linear)" stroke-opacity="1" marker-end="url(#arrow)"></path>
              <path d="M136 84C138 84 195 84 206 116" fill="none" stroke="url(#linear)" stroke-opacity="1" marker-end="url(#arrow)"></path>
              <path d="M134 84C136 84 81 82 58 123" fill="none" stroke="url(#linear)" stroke-opacity="1" marker-end="url(#arrow)"></path>
              <path d="M132 86C134 86 120 68 93 67" fill="none" stroke="url(#linear)" stroke-opacity="1" marker-end="url(#arrow)"></path>
              <path d="M134 86C136 86 132 78 134 74C136 69 150 52 150 52" fill="none" stroke="url(#linear)" stroke-opacity="1" marker-end="url(#arrow)"></path>
              <path d="M134 85C136 85 146 65 183 65" fill="none" fill-opacity="0" stroke="url(#linear)" marker-end="url(#arrow)"></path>
            </svg>
          </div>

          <div class="svg">
            <div
              class="text"
              v-for="(item, index) in data"
              :key="index"
              :class="`person${index + 1}`"
            >
              <span>{{ item.name }}</span>
              <span>{{ item.number }}</span>
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
  top: 1978px;
  width: 432px;
  height: 400px;
  .persons {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;

    .person {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-repeat: no-repeat;
      background-position: center center;
      &.person1 {
        background-image: url(@/assets/images/staff/online.png);
        transform: rotateX(64deg) rotateZ(0);
        top: 16%;
      }
      &.person2 {
        background-image: url(@/assets/images/staff/cir-2.png);
        animation: rotate 10s linear infinite;
        transform: rotateX(64deg);
        top: 16%;
      }
      &.person3 {
        background-image: url(@/assets/images/staff/person-1.png);
        top: 5%;
      }
    }
  }

  .svg {
    width: 270px;
    height: 260px;
    margin: auto;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .text {
    position: absolute;
    width: 50px;
    height: 50px;
    background: url(@/assets/images/staff/cir-1.png) no-repeat center center;
    color: rgb(114, 198, 230);
    text-align: center;

    span {
      &:nth-child(1) {
        display: block;
        width: 52px;
        margin-top: 10px;
        line-height: 12px;
        transform: scale(.85);
        height: 22px;
      }
      &:nth-child(2) {
        font-size: 14px;
        font-weight: bold;
      }
    }

    &.person1 {
      top: 215px;
      left: 50px;
    }
    &.person2 {
      top: 113px;
      left: 3px;
    }
    &.person3 {
      top: 45px;
      left: 35px;
    }
    &.person4 {
      left: 120px;
    }
    &.person5 {
      top: 45px;
      left: 190px;
    }
    &.person6 {
      top: 105px;
      left: 210px;
    }
    &.person7 {
      top: 215px;
      left: 180px;
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotateX(-64deg) rotateZ(360deg);
  }
  100% {
    transform: rotateX(-64deg) rotateZ(0deg);
  }
}
</style>