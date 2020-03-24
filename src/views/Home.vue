<template>
  <el-container class="home-container">
    <!-- 左边侧栏 -->
    <el-aside width="200px" class="my-aside">
      <div class="logo"></div>
      <el-menu
        default-active="1"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="border-right:none"
      >
        <el-menu-item index="1">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!-- 右边 -->
    <el-container>
      <!-- 头部 -->
      <el-header class="my-header">
        <span class="el-icon-s-fold icon"></span>
        <span class="text">个人文章管理中心</span>
        <!-- 下拉菜单组件 -->
        <el-dropdown class="my-dropdown">
          <span class="el-dropdown-link">
            <!-- 头像 -->
            <img src="../assets/avatar.jpg" class="user-avatar" />
            <!-- 用户名 -->
            <span class="user-name">王某某</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <!-- 主体内容 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.home-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  .my-aside {
    background-color: #002233;
  }
  .my-header {
    line-height: 60px;
    border-bottom: 1px solid #ddd;
    .icon {
      font-size: 24px;
      vertical-align: middle;
    }
    .text {
      vertical-align: middle;
      padding-left: 10px;
    }
    .my-dropdown {
      float: right;
      .user-avatar {
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
      .user-name {
        vertical-align: middle;
        font-weight: bold;
        padding-left: 5px;
      }
    }
  }
  .logo {
    width: 100%;
    height: 60px;
    background: #002244 url("../assets/logo_admin.png") no-repeat center/140px
      auto;
  }
}
</style>