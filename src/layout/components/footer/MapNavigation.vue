<template>
  <div class="map-navigation">
    <div class="info">
      <div class="floor">3F</div>
      <div class="department">影像科</div>
      <div class="moreInfo">
        <slot name="moreInfo">李义山 | 副主任医师</slot>
      </div>
    </div>
    <div class="map">
      <map-navigation></map-navigation>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterMapNavigation',
  props: {
    floor: {
      type: String
    },
    department: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/_variables.scss';
.map-navigation {
  height: 100%;
  color: #fff;
  display: flex;
  >div {
    height: 100%;
  }
  .info {
    width: 370px;
    background: #039BE5;
    padding: $padding;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      display: inline-block;
      width: $padding/2;
      height: $padding/2;
      background: #039BE5;
      right: -$padding*0.25;
      top: 20%;
      transform:rotate(45deg);
    }
    .floor {
      font-size: 64px;
      font-weight: 700;
      text-decoration-line: underline;
    }
    .department {
      font-size: 36px;
    }
    .moreInfo {
      position: absolute;
      left: $padding;
      right: $padding;
      bottom: $padding;
      font-size: 24px;
    }
  }
  .map {
    flex: 1;
    background: #E6F4FA;
  }
}
</style>
