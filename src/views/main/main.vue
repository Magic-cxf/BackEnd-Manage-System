<template>
  <el-container class="main-contain">
    <el-aside width="180px" class="aside">
      <leftAside></leftAside>
    </el-aside>
    <el-container class="content">
      <el-header class="header">
        <mainHead />
      </el-header>
      <el-main class="main-content">
        <component :is="targetComponent" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { markRaw, ref } from "vue"
import leftAside from "./mainChildren/aside.vue"
import mainHead from "./mainChildren/mainHead.vue"
import mainContent from "./mainChildren/mainContent.vue"

const targetComponent = ref()
targetComponent.value = markRaw(mainContent)
</script>
<style scoped>
.main-contain {
  width: 100vw;
  height: 100vh;
}
.header {
  height: 70px;
  padding: 4px;
  background-color: #ebedf0;
}
.main-content {
  background-color: #ebedf0;
  padding-top: 1px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  height: calc(100vh - 70px);
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
