<template>
    <div class="home">
      <div class="header">
        <div class="top">
          <img src="@/assets/logo-vue.png">
          <p>{{$t('app.welcome')}}</p>
          <p>
            <a href="https://cn.vuejs.org/" target="blank">Vue 官网</a>
            <a href="https://www.tslang.cn/" target="blank">Typescript 官网</a>
          </p>
        </div>
      </div>
      <div class="demos">
        <ul>
          <li class="demo-item">
            <home-item title="Svg 图标 & I18n">
              <svg-i18n-comp></svg-i18n-comp>
            </home-item>
          </li>
          <li class="demo-item">
            <home-item title="JS组件">
              <js-comp></js-comp>
            </home-item>
          </li>
          <li class="demo-item">
            <home-item title="Ts + Vue 装饰器">
              <ts-comp></ts-comp>
            </home-item>
          </li>
          <li class="demo-item">
            <home-item title="获取数据">
              <fitch-data-comp></fitch-data-comp>
            </home-item>
          </li>
        </ul>
      </div>
      
    </div>
</template>

<script>
import HomeItem from './demo/components/HomeItem'

import SvgI18nComp from './demo/SvgI18nComp.vue'
import JsComp from './demo/JsComponent.vue'
import TsComp from './demo/TsComponent.vue'
import FitchDataComp from './demo/FitchData.vue'

export default {
  name: 'index',
  data () {
    return {
      msg: 'i am vue demo.'
    }
  },
  components: {
    HomeItem,
    SvgI18nComp,
    JsComp,
    TsComp,
    FitchDataComp
  }
}
</script>

<style lang="scss" scoped>
.home {
  a {
    text-decoration: none;
    color: #41B883;
    padding: 0 5px;
    &:hover {
      text-decoration: underline;
    }
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    .top {
      text-align: center;
    }
    img {
      width: 100px;
      height: 100px;
    }
  }
  .demos {
    display: flex;
    ul {
      width: 100%;
    }
    .demo-item {
      width: 50%;
      float: left;
      padding: 20px;
      height: 300px;
    }
  }
}
</style>
