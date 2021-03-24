<template>
  <div class="development" :style="{backgroundImage: 'url('+require('@/assets/pages/development.png')+')'}">
    <div class="tips">
      {{text}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Development',
  data() {
    return {
      text: '404'
    }
  }
}
</script>

<style lang="scss" scoped>
.development {
  width: 100%;
  height: 90vh;
  background-position: center;
  background-repeat: no-repeat;
  .tips {
    text-align: center;
    font-size: 36px;
    font-weight: 600;
    padding-top: 150px;
    color: #777;
  }
}
</style>
