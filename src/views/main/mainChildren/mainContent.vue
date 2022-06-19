<template>
  <div class="mainControl">
    <div id="main-context"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue"
import * as echarts from "echarts"
let chart: echarts.ECharts
let option = {
  name: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  title: {
    text: "订 单 统 计",
    left: "center",
    top: 20
  },
  grid: [
    { left: "7%", top: "14%", width: "38%", height: "30%" },
    { right: "7%", top: "14%", width: "38%", height: "30%" }
  ],
  tooltip: {},
  // legend: {
  //   data: ["销量"]
  // },
  xAxis: [
    { gridIndex: 0, data: ["一月", "二月", "三月", "四月", "五月", "六月"] },
    { gridIndex: 1, data: ["一月", "二月", "三月", "四月", "五月", "六月"] }
  ],
  yAxis: [
    { type: "value", gridIndex: 0 },
    { type: "value", gridIndex: 1 }
  ],
  series: [
    {
      type: "pie",
      radius: "35%",
      center: ["15%", "75%"],
      data: [
        { value: 235, name: "视频广告" },
        { value: 274, name: "联盟广告" },
        { value: 310, name: "邮件营销" },
        { value: 335, name: "直接访问" },
        { value: 400, name: "搜索引擎" }
      ]
    },
    {
      type: "pie",
      radius: "35%",
      center: ["48.5%", "75%"],
      data: [
        { value: 235, name: "视频广告" },
        { value: 274, name: "联盟广告" },
        { value: 310, name: "邮件营销" },
        { value: 335, name: "直接访问" },
        { value: 400, name: "搜索引擎" }
      ]
    },
    {
      type: "pie",
      center: ["80%", "75%"],
      radius: "35%",
      data: [
        { value: 235, name: "视频广告" },
        { value: 274, name: "联盟广告" },
        { value: 310, name: "邮件营销" },
        { value: 335, name: "直接访问" },
        { value: 400, name: "搜索引擎" }
      ]
    },
    {
      type: "bar",
      xAxisIndex: 0,
      yAxisIndex: 0,
      label: {
        show: true
      },
      data: [
        { value: 235, name: "一月" },
        { value: 274, name: "二月" },
        { value: 310, name: "三月" },
        { value: 335, name: "四月" },
        { value: 400, name: "五月" },
        { value: 420, name: "六月" }
      ]
    },
    {
      type: "bar",
      xAxisIndex: 1,
      yAxisIndex: 1,
      label: {
        show: true
      },
      data: [
        { value: 235, name: "一月" },
        { value: 274, name: "二月" },
        { value: 310, name: "三月" },
        { value: 335, name: "四月" },
        { value: 400, name: "五月" },
        { value: 420, name: "六月" }
      ]
    }
  ]
}
onMounted(() => {
  chart = echarts.init(document.getElementById("main-context") as HTMLElement, "light")
  chart.setOption(option)
  chart.resize()
})
const changeData = () => {
  option.series[0].data.push({ value: 280, name: "线下广告" })
  chart.setOption(option)
}
onUnmounted(() => {
  chart.dispose()
})
</script>
<style scoped>
.mainControl {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
#main-context {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>
