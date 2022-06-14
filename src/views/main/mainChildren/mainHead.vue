<template>
  <div class="head">
    <div class="yearSelect">
      <span>年份：</span>
      <el-select v-model="year" class="m-2" placeholder="2022" size="small">
        <el-option
          v-for="item in yearData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div class="monthSelect">
      <span>月份：</span>
      <el-select v-model="month" class="m-2" placeholder="6" size="small">
        <el-option
          v-for="item in monthData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div class="customer-adress">
      <span>客户地址:</span>
      <el-input v-model="customerAdress" placeholder="客户地址" size="small" autofocus />
    </div>
    <div class="from">
      <span>渠道：</span>
      <el-select v-model="from" class="m-2" placeholder="2022" size="small">
        <el-option
          v-for="item in origin"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div class="block">
      <el-dropdown @command="handleCommand" trigger="click">
        <span class="el-dropdown-link">
          <el-avatar :size="30" :src="circleUrl" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a">个人主页</el-dropdown-item>
            <el-dropdown-item command="b">修改信息</el-dropdown-item>
            <el-dropdown-item command="c">退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="command">
      <el-button type="primary" size="default" @click="search">查询</el-button>
      <el-button type="primary" size="default" @click="reset">重置</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from "vue"
import { ElMessage } from "element-plus"
import { yearData, monthData, origin } from "../config/headConfig"

const state = reactive({
  circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
  squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
  sizeList: ["small", "", "large"] as const
})

const { circleUrl } = toRefs(state)

const year = ref("2022")
const month = ref("近一个月")
const from = ref("全部")
const customerAdress = ref<string>("")
const result = reactive({
  year: year,
  month: month,
  adress: customerAdress,
  origin: from
})

const search = () => {
  console.log(Object.values(result))
}
const reset = () => {
  result.year = "2022"
  result.month = "近一个月"
  result.origin = "全部"
  result.adress = ""
  console.log(Object.values(result))
}

const handleCommand = (command: string | number | object) => {
  ElMessage(`click on item ${command}`)
}
</script>
<style scoped>
.head {
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.head div {
  margin-right: 8px;
}
.m-2 {
  width: 100px;
}
.customer-adress {
  width: 250px;
  display: flex;
  align-items: center;
}
.customer-adress span {
  width: 90px;
}
.yearSelect {
  width: 150px;
}
.monthSelect {
  width: 150px;
}
.block {
  position: absolute;
  right: 8px;
  top: 8px;
}

.command {
  margin-left: 30px;
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.command div {
}
</style>
