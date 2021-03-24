<template>
  <div class="leld-playvoice">
    <audio id="audio" autoplay="autoplay">
      <source src="./password.mp3" type="audio/mp3" />
    </audio>
  </div>
</template>

<script>
export default {
  name: 'LeldPlayVoice',
  data() {
    return {
      onClose: null,
      timer: '',
      autoplay: 'autoplay',
      delaySecond: ''
    }
  },
  methods: {
    close() {
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
