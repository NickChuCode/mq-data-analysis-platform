<template>
  <div class="navbar">
    <hamburger id="hamburger-container" class="hamburger-container"></hamburger>
    <breadcrumb id="breadcrumb-container" class="breadcrumb-container"></breadcrumb>
  </div>
</template>

<script>
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'Navbar',
  components: {
    Hamburger,
    Breadcrumb
  }
}
</script>

<style scoped lang="scss">
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color: transparent;
    &:hover {
      background: rgba(0, 0, 0, .025);
    }
  }
  .breadcrumb-container {
    float: left;
  }
}
</style>
