<template>
  <div class="loginAccount">
    <el-form :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号：" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, defineExpose, ref } from "vue"
import { useStore } from "vuex"
import { rules } from "@/views/login/config/account.config"
import { ElForm } from "element-plus"
import localCache from "@/utils/cache"

const account = reactive({
  name: localCache.getCache("name") ?? "",
  password: localCache.getCache("password") ?? ""
})
const formRef = ref<InstanceType<typeof ElForm>>()
const store = useStore()

const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      console.log("验证成功！账号开始登陆")
      if (isKeepPassword) {
        localCache.setCache("name", account.name)
        localCache.setCache("password", account.password)
      }
      store.dispatch("loginAccountAction", { ...account })
    }
  })
}

defineExpose({ loginAction }) //手动抛出子组件函数
//输入规则的校验
</script>
<style scoped></style>
