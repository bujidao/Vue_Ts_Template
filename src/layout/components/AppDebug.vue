<template>
  <div class="debug" @click="reload">
    width: {{sw}}  height: {{sh}}
  </div>
</template>

<script>
export default {
  name: 'Debug',
  data() {
    return {
      msg: 'hi',
      sw: '',
      sh: ''
    }
  },
  created() {
    this.sw = window.innerWidth || document.documentElement.clientWidth
    this.sh = window.innerHeight || document.documentElement.clientHeight
  },
  methods: {
    reload() {
      location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
.debug {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 999;
}
</style>
