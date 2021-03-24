<template>
  <div class="item">
    <ul>
      <li v-for="(item, index) in dataList" :key="index">{{item.name}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
// For more docs, see https://github.com/kaorun343/vue-property-decorator
import { Vue, Component} from 'vue-property-decorator'

import {
  getDataList
} from '@/api/index'

@Component({
  name: 'FitchData'
})

export default class FitchData extends Vue {
  public dataList: any = []

  mounted() {
    this.getDataList()
  }

  private getDataList() {
    getDataList().then(res => {
      this.dataList = res.data.list
    })
  }
}
</script>

<style lang="scss" scoped>
.item {
  height: 70%;
  overflow: auto;
}
</style>
