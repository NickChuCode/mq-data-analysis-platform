<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        mode="vertical"
        :default-active="activeMenu"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        :unique-opened="false"
      >
        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path"></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import variables from '../../../styles/variables.scss'
import SidebarItem from './SidebarItem'
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  components: {
    SidebarItem
  },
  mounted () {
    console.log(this.permission_routes)
  },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    activeMenu () {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    variables () {
      return variables
    }
  }
}
</script>

<style scoped lang="scss">

</style>
