<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <tags-view></tags-view>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { AppMain, Navbar, Sidebar, TagsView } from './components'
export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Sidebar,
    TagsView
  }
}
</script>

<style scoped lang="scss">

</style>
