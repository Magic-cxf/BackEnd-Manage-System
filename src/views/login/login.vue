<template>
  <div class="loginPage">
    <div class="login">
      <h1>后台管理系统</h1>
      <div class="loginPlatform">
        <el-tabs type="border-card" class="demo-tabs" stretch>
          <el-tab-pane>
            <template #label>
              <span class="custom-tabs-label">
                <el-icon><Avatar /></el-icon>
                <span>账号登陆</span>
              </span>
            </template>
            <loginAccount ref="accountRef" />
          </el-tab-pane>
          <el-tab-pane>
            <template #label>
              <span class="custom-tabs-label">
                <el-icon><Cellphone /></el-icon>
                <span>手机登陆</span>
              </span>
            </template>
            <loginRegister />
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="passwordInfo">
        <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
        <el-link type="primary">忘记密码</el-link>
      </div>
      <el-button type="primary" class="loginButton" @click="handleLoginAccount">立即登陆</el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Avatar, Cellphone } from "@element-plus/icons-vue"
import { ref } from "vue"
import loginAccount from "./loginChildren/loginAccount.vue"
import loginRegister from "./loginChildren/loginRegister.vue"

const isKeepPassword = ref(false)
const accountRef = ref<InstanceType<typeof loginAccount>>() //类型限制
// const accountRef = ref()

const handleLoginAccount = () => {
  accountRef.value?.loginAction()
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.loginPage {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;

  .login {
    width: 320px;
    margin-bottom: 150px;
    h1 {
      text-align: center;
    }
    .loginPlatform {
      width: 100%;
      border: 0.5px solid rgba($color: #000000, $alpha: 0.2);
      margin-top: 20px;
      box-shadow: 1px 1px 1px 1px rgba(#6b778c, 0.1);
    }
  }
  .passwordInfo {
    display: flex;
    justify-content: space-between;
  }
  .loginButton {
    width: 100%;
  }
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>
