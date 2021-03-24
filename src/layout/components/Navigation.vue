<template>
  <div class="app-navigation">
    <div class="content-container">
      <ul>
        <li v-for="(item, index) in router" :key="index">
          <ul v-if="item.children">
            <li v-for="(ite, idx) in item.children" :key="idx">
              <span class="btn" :class="{active: currentMenu === ite.name}" @click="handleBtnClick(ite)">{{ite.meta.title || 'Dashboard'}}</span>
            </li>
          </ul>
          <span class="btn" :class="{active: currentMenu === item.name}" v-else @click="handleBtnClick(item)">{{item.meda.title || 'Dashboard'}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      router: [],
      currentMenu: 'Home'
    }
  },
  created() {
    this.router = this.$router.options.routes
  },
  methods: {
    handleBtnClick(route) {
      this.currentMenu = route.name
      this.$router.push({
        name: route.name
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_variables.scss';
.app-navigation {
  height: 39px;
  line-height: 39px;
  border-bottom: 1px solid #E5E5E5;
  ul, li, .btn {
    display: inline-block;
    height: 100%;
  }
  .btn {
    margin: 0 5px;
    padding: 0 10px;
    cursor: pointer;
    &:hover {
      border-bottom: 2px solid #41B883;
    }
  }
  .active {
    border-bottom: 2px solid #41B883;
  }
}
</style>
