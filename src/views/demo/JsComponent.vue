<template>
  <div class="item">
    <button @click="bofang">点击播放音频</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '404'
    }
  },
  methods: {
    bofang() {
      this.$playVoice('0')
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  
}
</style>
