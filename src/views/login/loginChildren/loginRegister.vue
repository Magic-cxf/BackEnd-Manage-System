<template>
  <div class="loginAccount">
    <el-form :rules="rules" :model="phone" ref="formRef1">
      <el-form-item label="手机号：" prop="number">
        <el-input v-model="phone.number"></el-input>
      </el-form-item>
      <el-form-item label="验证码：" prop="code">
        <div class="getCode">
          <el-input v-model="phone.code"></el-input>
          <el-button type="primary" @click="getCode">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, defineExpose, ref } from "vue"
import { rules } from "@/views/login/config/register.config"
import { ElForm } from "element-plus"

const phone = reactive({
  number: null,
  code: null
})
const formRef1 = ref<InstanceType<typeof ElForm>>()
const loginAction = () => {
  formRef1.value?.validate((valid) => {
    if (valid && phone.code) {
      console.log("都正确 开始登陆工作")
    }
  })
}

const getCode = () => {
  formRef1.value?.validate((valid) => {
    if (valid && phone.number) {
      console.log("手机号正确 开始向后台申请验证码！")
    }
  })
}

defineExpose({ loginAction })
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
