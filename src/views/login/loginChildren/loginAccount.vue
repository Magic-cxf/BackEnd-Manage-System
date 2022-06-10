<template>
  <div class="loginAccount">
    <el-form :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号：" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, defineExpose, ref } from "vue"
import { rules } from "@/views/login/config/account.config"
import { ElForm } from "element-plus"

const account = reactive({
  name: null,
  password: null
})
const formRef = ref<InstanceType<typeof ElForm>>()

const loginAction = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      console.log("验证成功！开始登陆")
    }
  })
}

defineExpose({ loginAction }) //手动抛出子组件函数
//输入规则的校验
</script>
<style scoped></style>
