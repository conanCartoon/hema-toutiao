<template>
  <div class="login-container">
    <el-card class="box-card">
      <img src="../assets/logo_index.png" alt />
      <el-form>
        <el-form-item>
          <el-input v-model="mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="code" placeholder="请输入验证码" style="width:240px;margin-right:8px"></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        mobile: "",
        code: ""
      }
    };
  }
};
</script>

<style lang="less" scoped>
.login-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/login_bg.jpg") no-repeat center / cover;
  .box-card {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 350px;
    img {
      width: 200px;
      display: block;
      margin: 0 auto 20px;
    }
  }
}
</style>