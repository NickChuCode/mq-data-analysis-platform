<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        mode="vertical"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
      >
        <el-menu-item index="/dashboard">
          仪表盘
        </el-menu-item>
        <el-menu-item index="/chartpanel/create">
          图表
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import variables from '@/styles/variables.scss'
export default {
  name: 'Sidebar',
  computed: {
    variables () {
      return variables
    }
  }
}
</script>

<style scoped lang="scss">

</style>
