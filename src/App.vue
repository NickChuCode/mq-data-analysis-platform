<template>
  <div id="app">
    <div class="nav-bar">
      <el-menu
        mode="horizontal"
        background-color="#fff"
        text-color="#606266"
        active-text-color="#409eff"
        :router="true"
      >
        <el-menu-item index="/">
          <img src="./assets/logo.png" alt="" style="height: 45px;">
        </el-menu-item>
        <el-menu-item index="/dashboard">
          仪表盘
        </el-menu-item>
        <el-menu-item index="/charts/create">
          创建图表
        </el-menu-item>
      </el-menu>
      <el-dropdown class="avatar-container" trigger="hover">
        <div class="avatar-wrapper">
          <img src="./assets/logo.png" alt="" class="user-avatar">
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              首页
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span @click="logout">登出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    logout () {
      console.log('logout')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html {
  box-sizing: border-box;
}
*, *:before, *:after{
  box-sizing: inherit;
}
body,div,ul,li {
  margin: 0;
  padding: 0;
}
a,a:hover {
  text-decoration: none;
  color: inherit;
}
.nav-bar {
  display: flex;
  justify-content: space-between;
  height: 61px;
  border-bottom: 1px solid #EBEEF5;
  .avatar-container {
    align-self: center;
    margin-right: 15px;
    height: 100%;
    height: 45px;
    width: 45px;
    .avatar-wrapper {
      cursor: pointer;
      img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
      }
    }
  }
}
</style>
