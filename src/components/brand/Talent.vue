<script setup>
import { onMounted, onBeforeUnmount } from "vue"
import { init } from "echarts"

let chart

function renderChart () {
  chart = init(document.getElementById("talent"))

  const ts = [
    {
      name: "博士",
      value: 5
    },
    {
      name: "硕士",
      value: 10
    },
    {
      name: "985本科",
      value: 21
    },
    {
      name: "211本科",
      value: 30
    },
    {
      name: "专科",
      value: 2
    },
    {
      name: "大厂专家",
      value: 5
    }
  ]
  const rich = {
    white: {
      color: "#ddd",
      align: "center",
      padding: [3, 0]
    }
  }
  let placeHolderStyle = {
    label: {
      show: false
    },
    labelLine: {
      show: false
    },
    color: "rgba(0, 0, 0, 0)",
    borderColor: "rgba(0, 0, 0, 0)",
    borderWidth: 0
  }
  const data = []
  const color = ["#00ffff", "#00cfff", "#006ced", "#ffe000", "#ffa800", "#ff5b00", "#ff3000"]
  let total = 0
  for (let i = 0; i < ts.length; i++) {
    data.push({
      value: ts[i].value,
      name: ts[i].name,
      itemStyle: {
        borderWidth: 6,
        shadowBlur: 10,
        borderColor: color[i],
        shadowColor: color[i]
      }
    }, {
      value: 2,
      name: "",
      itemStyle: placeHolderStyle
    })
    total += ts[i].value
  }

  const option = {
    series: [
      {
        name: "",
        type: "pie",
        clockwise: false,
        radius: ["66%", "68%"],
        center: ["46%", "52%"],
        emphasis: {
          scale: false
        },
        label: {
          show: true,
          position: "outside",
          color: "#ddd",
          formatter: params => {
            if (params.name) {
              return params.name + "\n{white|" + "占比" + (params.value / total * 100).toFixed(0) + "%}"
            }

            return ""
          },
          rich
        },
        labelLine: {
          length: 10,
          length2: 30,
          show: true,
          color: "#00ffff"
        },
        data
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
  <div class="chart" id="talent"></div>
</template>

<style scoped lang="scss">
.chart {
  height: 3rem;
}
</style>