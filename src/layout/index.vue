<template>
  <div class="app-container" :style="{backgroundImage: 'url('+require('@/assets/bg.png')+')'}">
    <div style="position: fixed; left: 0;right: 0; top: 0; z-index: 999;">
      <app-header></app-header>

      <navigation></navigation>
    </div>

    <div class="main">
      <app-main></app-main>
    </div>

    <app-footer></app-footer>

    <div class="node-env">
      <app-debug></app-debug>
    </div>
  </div>
</template>

<script>
import ResizeMixin from './mixin/ResizeHandler'
import { mapState } from 'vuex'
import { AppHeader, AppFooter, Navigation, AppDebug, AppMain } from './components'
export default {
  name: 'Layout',
  data () {
    return {
      msg: 'hi app'
    }
  },
  components: {
    AppHeader,
    AppFooter,
    AppDebug,
    Navigation,
    AppMain
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      device: state => state.app.device
    })
  },
  methods: {
    changeLanguage () {
      const language = this.$store.getters.language
      const temp = language === 'zh' ? 'en' : 'zh'
      this.$i18n.locale = temp
      this.$store.dispatch('app/setLanguage', temp)
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-container {
    width: 100%;
    height: 100vh;
    overflow: auto;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    .main {
      flex: 1;
    }
  }
</style>
