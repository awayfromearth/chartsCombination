<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue"

const tabTitles = [2015, 2016, 2017, 2018, 2019, 2020]
const tabContents = [
  [
    "2015.10，公司成立，正式布局区块链、大数据方向",
    "2015.11，与国家超算吕梁云计算中心签订战略合作协议",
    "2015.12，建设高性能计算服务平台，基于区块链技术打造文创基础云平台"
  ],
  [
    "2016.03，公司提供的高性能计算服务得到中科院认可，就此达成合作",
    "2016.07，与国家超算广州中心签订战略合作协议，启动区块链底层公链开发技术论证",
    "2016.10，启动区块链底层公链开发，开拓数字资产管理业务",
    "2016.11，与国家超级计算长沙中心签订战略合作协议"
  ],
  [
    "2017.03，与国家级长沙经开区共建博士创新创业园",
    "2017.07，开发GBI区块链资讯信息平台",
    "2017.09，打造区块链信息服务平台，开拓区块链安全业务",
    "2017.12，区块链底层公链测试链上线运行，启动链上DAPP开发"
  ],
  [
    "2018.05，与长沙经开区共建区块链产业园，区块链底层公链上线运行",
    "2018.08，公链分布式存储网络正式运行",
    "2018.10，区块链安全技术检测中心正式运行，公链多侧链技术落地，链上应用上线",
    "2018.12，被评为中国区块链百强企业"
  ],
  [
    "2019.03，上线分布式存储系统UDFS，更新优壹号V2.0.0版，完成Ulord V2.0版白皮书全部规划",
    "2019.07，文创版权公共服务平台优版权正式上线",
    "2019.08，承担国家网信办区块链相关课题研究",
  ],
  [
    "2020.03，完成分布式计算框架和贡献证明算法的设计和开发",
    "2020.05，完成分布式计算资源动态调度和管理开发",
    "2020.10，推出链云计算生态，完成计算平台和API接口开发，完成优壹号对计算Dapp支持"
  ]
]

const activeIndex = ref(0)
let timer
function handleMouseover (i) {
  clearInterval(timer)
  activeIndex.value = i
}

function handleMouseout () {
  timer = setInterval(() => {
    activeIndex.value++
    if (activeIndex.value === tabTitles.length) {
      activeIndex.value = 0
    }
  }, 2000)
}

onMounted(() => {
  timer = setInterval(() => {
    activeIndex.value++
    if (activeIndex.value === tabTitles.length) {
      activeIndex.value = 0
    }
  }, 5000)
})

onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>

<template>
  <div class="history-container">
    <div class="tabs">
      <ul class="tab-title">
        <li
            v-for="(item, index) in tabTitles"
            :key="index"
            :class="{ active: activeIndex === index }"
            @mouseover="handleMouseover(index)"
            @mouseout="handleMouseout"
        >
          {{ item }}
        </li>
      </ul>
      <div class="indicatorDots">
        <span
            v-for="i in tabTitles.length"
            :key="i"
            :class="{ active: activeIndex === i - 1 }"
        ></span>
      </div>
      <div class="tab-content">
        <template
            v-for="(item, index) in tabContents"
            :key="index"
        >
          <div
              v-show="activeIndex === index"
          >
            <div
                class="content"
                v-for="(v, i) in item"
                :key="i"
            >
              {{ v }}
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.history-container {
  margin: 0 .125rem;

  .tabs {
    display: flex;

    .tab-title {
      li {
        color: #fff;
        background-color: rgba(36, 196, 255, .5);
        text-align: center;
        cursor: pointer;
        font-size: .125rem;
        width: 1rem;
        height: .35rem;
        line-height: .35rem;
        margin-bottom: .175rem;
        border-radius: 5px;
        &.active {
          background: linear-gradient(to right, #1b81bc, 20%, #24c4ff);
        }
      }
    }

    .indicatorDots {
      background-color: rgba(36, 196, 255, .5);
      width: 1px;
      height: 2.8rem;
      margin: .0625rem 0 0 .375rem;

      span {
        display: block;
        height: .525rem;
        margin-left: -.0875rem;

        &:after {
          content: "";
          display: block;
          width: .125rem;
          height: .125rem;
          background-color: #ddd;
          border-radius: 50%;
          border: 2px solid #1b81bc;
        }

        &.active {
          &:after {
            background-color: #24c4ff;
            box-shadow: 0 0 .125rem #1b81bc;
          }
        }
      }
    }

    .tab-content {
      display: flex;
      align-items: center;

      div {
        margin-left: .1875rem;
        color: #fff;

        .content {
          font-size: .175rem;
          line-height: .275rem;
          padding: .1rem 0;
        }
      }
    }
  }
}
</style>