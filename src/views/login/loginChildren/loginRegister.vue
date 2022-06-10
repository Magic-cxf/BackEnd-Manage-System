<template>
  <div class="loginAccount">
    <el-form :rules="rules" :model="phone">
      <el-form-item label="手机号：" prop="number">
        <el-input v-model="phone.number"></el-input>
      </el-form-item>
      <el-form-item label="验证码：" prop="code">
        <div class="getCode">
          <el-input v-model="phone.code"></el-input>
          <el-button type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import { rules } from "@/views/login/config/register.config"

const phone = reactive({
  number: null,
  code: null
})
//输入规则的校验
</script>
<style lang="scss" scoped>
.getCode {
  display: flex;
  button {
    margin-left: 8px;
  }
}
</style>
