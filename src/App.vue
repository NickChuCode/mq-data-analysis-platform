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
    </div>
    <router-view/>
  </div>
</template>

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
}
</style>
