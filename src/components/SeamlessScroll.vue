<script setup>
import { Vue3SeamlessScroll } from "vue3-seamless-scroll"

const data = [
  {
    title: "钱花哪了?一图带你读懂年轻人的消费观",
    date: "2020-05-05",
    hot: 2306
  },
  {
    title: "“五一”假期前三天国内旅游收入超350亿元",
    date: "2020-05-02",
    hot: 5689
  },
  {
    title: "滴滴、美团、哈啰交战，本地生活会是终局？",
    date: "2020-05-02",
    hot: 9
  },
  {
    title: "“互联网+文化”逆势上行文娱消费云端真精彩",
    date: "2020-04-25",
    hot: 288
  },
  {
    title: "乐观还是悲观？巴菲特是个现实主义者！",
    date: "2020-04-21",
    hot: 158
  },
  {
    title: "B站的后浪，会把爱优腾拍在沙滩上吗?",
    date: "2020-04-20",
    hot: 889
  },
  {
    title: "华为如何做投资的：先给两亿订单一年上市",
    date: "2020-04-01",
    hot: 5800
  },
  {
    title: "马斯克：特斯拉股价太高了，我要卖豪宅",
    date: "2020-03-25",
    hot: 6
  },
  {
    title: "人民日报海外版：云模式巧解“就业难”",
    date: "2020-03-16",
    hot: 88
  },
  {
    title: "刚刚港股\"崩了\"：狂跌近1000点！",
    date: "2020-03-12",
    hot: 88
  },
  {
    title: "个人健康信息码国家标准发布",
    date: "2020-02-28",
    hot: 5
  },
  {
    title: "传软银国际裁员约10%两名管理合伙人离职",
    date: "2020-02-15",
    hot: 258
  },
  {
    title: "27万个岗位：区块链、人工智能等专场招聘",
    date: "2020-02-10",
    hot: 198
  },
  {
    title: "一季度电商发展势头迅猛农村电商破1300万家",
    date: "2020-02-08",
    hot: 19
  }
]
</script>

<template>
  <div class="wrap-container container">
    <div class="content">
      <div class="title">新闻无缝滚动</div>
      <div class="body">
        <div class="wrap-container">
          <div class="table">
            <table border="0" cellpadding="0" class="table-header">
              <tbody>
              <tr>
                <td width="60%">
                  <span>标题</span>
                </td>
                <td width="20%">
                  <span>日期</span>
                </td>
                <td width="20%">
                  <span>热度</span>
                </td>
              </tr>
              </tbody>
            </table>
            <div style="height: calc(100% - 40px); overflow: hidden;">
              <Vue3SeamlessScroll class="seamless-wrap" :list="data" :hover="true">
                <table class="item">
                  <tr v-for="(item, index) in data" :key="index">
                    <td class="table-title" style="width: 60%">
                      <span>{{ item.title }}</span>
                    </td>
                    <td>
                      <span>{{ item.date }}</span>
                    </td>
                    <td>
                    <span :class="{ red: item.hot > 4999, orange: item.hot < 10}">
                      {{ item.hot}}
                    </span>
                    </td>
                  </tr>
                </table>
              </Vue3SeamlessScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
%table {
  width: 100%;
  table-layout: fixed;

  tr {
    td {
      padding: 10px 5px;
      text-align: center;
      background-color: transparent;
      white-space: nowrap;
      overflow: hidden;
      color: #E2E5FF;
      font-size: 14px;
    }
  }
}
.container {
  left: 1370px;
  top: 110px;

  .table {
    height: 100%;
    .table-header {
      @extend %table;
      height: 35px;
    }

    .seamless-wrap {
      height: 400px;
      overflow: hidden;
      visibility: visible;
      .red {
        color: #ff4669;
      }
      .orange {
        color: #ffc956;
      }
      .item {
        @extend %table;
        height: 400px;
        tr {
          td {
            &.table-title {
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
  }
}
</style>