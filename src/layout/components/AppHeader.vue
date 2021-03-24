<template>
  <div class="app-header">
    <div class="content-container app-container">
      <div class="left">
        <img src="@/assets/logo-vue.png" alt="">
      </div>
      <div class="right">
        Vue Typescript Template
      </div>
    </div>
  </div>
</template>

<script>
import settings from '@/settings'
export default {
  name: 'AppHeader',
  data() {
    return {
      settings: settings
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_variables.scss';
.app-header {
  height: 56px;
  line-height: 56px;
  background: rgba(255, 255, 255, .6);
  box-shadow: 0 2px 10px rgb(0 0 0 / 5%);
  color: #fff;
  img {
    margin: 9px 0;
    height: 40px;
  }
  .app-container {
    display: flex;
    .left, .right {
      height: 100%;
    }
    .right {
      flex: 1;
      text-align: right;
      color: #5C5C5C;
    }
  }
}
</style>
