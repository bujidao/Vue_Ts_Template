<template>
  <div class="home-item">
    <h2>{{title}}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HomeItem',
  data() {
    return {
      msg: '404'
    }
  },
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.home-item {
  height: 100%;
  padding: 20px;
  border-radius: 20px;
  background: #e0e0e0;
  box-shadow:  30px 30px 60px #bebebe,
              -30px -30px 60px #ffffff;
}
</style>
