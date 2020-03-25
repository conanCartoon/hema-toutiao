<template>
  <div class="login-container">
    <el-card class="box-card">
      <img src="../assets/logo_index.png" alt />
      <el-form :model="loginForm" :rules=" loginRules" status-icon ref="loginForm">
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            placeholder="请输入验证码"
            style="width:240px;margin-right:8px"
          ></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="login('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import auth from "@/utils/auth.js";
export default {
  data() {
    var CheckMobile = (rule, value, callback) => {
      if (/^1[3-9]\d{9}$/.test(value)) {
        return callback();
      } else {
        return callback(new Error("手机号码格式不对"));
      }
    };
    return {
      loginForm: {
        mobile: "",
        code: ""
      },
      loginRules: {
        mobile: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: CheckMobile, trigger: "blur" }
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { len: 6, message: "验证码6个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // console.log("登录成功");
          this.$http
            .post("/authorizations", this.loginForm)
            .then(res => {
              console.log(res.data);

              auth.setUser(res.data.data);
              this.$router.push("/");
            })
            .catch(() => {
              this.$message.error("手机号或验证码错误");
            });
        }
      });
    }
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