<template>
  <div class="SvgI18nComp">
    <span class="btn" @click="handleToggleLanguage">
      {{$t('app.language')}}<svg-icon icon-class="language"/>
    </span>
  </div>
</template>

<script>
export default {
  name: 'SvgI18nComp',
  computed: {
    language() {
      return this.$store.getters.language
    }
  },
  methods: {
    handleToggleLanguage() {
      const tempLang = this.language === 'en' ? 'zh': 'en'
      this.$store.dispatch('app/setLanguage', tempLang)
      this.$i18n.locale = tempLang
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
}
</style>
