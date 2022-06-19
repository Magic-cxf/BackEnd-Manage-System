<template>
  <h5 class="mb-2">凯圣ERP</h5>
  <el-menu class="el-menu-vertical" @select="itemSelect" unique-opened>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><List /></el-icon>
        <span>销售部门</span>
      </template>
      <el-menu-item index="1-1" @click="tarGet">新一代</el-menu-item>
      <el-menu-item index="1-2">凯&nbsp;&nbsp;&nbsp;圣</el-menu-item>
      <el-menu-item index="1-3">外&nbsp;&nbsp;&nbsp;订</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><List /></el-icon>
        <span>上海办公室</span>
      </template>
      <el-menu-item index="2-1">订单管理</el-menu-item>
      <el-menu-item index="2-2">售后管理</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <el-icon><List /></el-icon>
        <span>上海仓库</span>
      </template>
      <el-menu-item index="3-1">库存管理</el-menu-item>
      <el-menu-item index="3-2">发货管理</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="4">
      <template #title>
        <el-icon><List /></el-icon>
        <span>海安办公室</span>
      </template>
      <el-menu-item index="4-1">生产管理</el-menu-item>
      <el-menu-item index="4-2">发货管理</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="5">
      <template #title>
        <el-icon><List /></el-icon>
        <span>海安仓库</span>
      </template>
      <el-menu-item index="5-1">库存管理</el-menu-item>
      <el-menu-item index="5-2">收货管理</el-menu-item>
      <el-menu-item index="5-3">发货管理</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="6">
      <template #title>
        <el-icon><List /></el-icon>
        <span>售后部</span>
      </template>
      <el-menu-item index="6-1">外订补单</el-menu-item>
      <el-menu-item index="6-2">自家售后</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="7">
      <template #title>
        <el-icon><List /></el-icon>
        <span>人事部</span>
      </template>
      <el-menu-item index="7-1">员工管理</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="8" :disabled="false">
      <template #title>
        <el-icon><List /></el-icon>
        <span>财务部</span>
      </template>
      <el-menu-item index="8-1">出纳管理</el-menu-item>
      <el-menu-item index="8-2">收入管理</el-menu-item>
      <el-menu-item index="8-3">工资管理</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="9">
      <template #title>
        <el-icon><List /></el-icon>
        <span>个人管理</span>
      </template>
      <el-menu-item index="9-1">信息管理</el-menu-item>
      <el-menu-item index="9-2">业绩查询</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { List } from "@element-plus/icons-vue"
// const handleOpen = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
// const handleClose = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
const tarGet = () => {
  console.log("hahahh")
}

const itemSelect = (index: string, indexPath: string) => {
  console.log(index)
  console.log(indexPath)
}
</script>
<style scoped>
.mb-2 {
  margin-top: 15px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 22px;
}
.el-menu-vertical {
  border-right: none;
  text-align: center;
}
</style>
