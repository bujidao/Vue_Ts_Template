<template>
  <div class="app-main">
    <!-- <router-view/> -->
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.fullPath
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_variables.scss';
.app-main {
  position: relative;
  min-height: 100%;
}
</style>
