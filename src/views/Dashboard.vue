<template>
  <div class="dashboard">
    <h1>Dashboard!</h1>
    <el-button @click="showList">点击</el-button>
  </div>
</template>

<script>
import { fetchList } from '../api/article'

export default {
  name: 'Dashboard',
  methods: {
    showList () {
      fetchList().then(res => {
        console.log(res)
      })
      console.log(this.$root)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
