<template>
  <div class="default" :style="{backgroundImage:'url('+require('../../../assets/footer.png')+')'}">
    <title-content :title="title" :content="content" gap="50px"></title-content>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '医疗服务',
      content: '医疗方面，华西医院是中国西部疑难危急重症诊疗的国家级中心，医疗水平处于全国先进行列。医疗区占地500余亩，业务用房60余万平方米，编制床位4300张，在职员工1万余人；现设成都国学巷本部院区、温江院区，全托管成都上锦南府医院（简称上锦分院）；有25个省级医疗质控中心，46个临床科室，9个医技科室；门诊设专科、专病门诊200余种，最高日门急诊量20000余人次；有标准手术室99间，日均外科手术500余台；有核磁共振11台、螺旋CT 11台、直线加速器6台、PET-ECT 2台、伽玛刀、达芬奇机器人手术系统等当今世界上最先进的诊疗设备，设备总值22亿。2019年门、急诊量573.85万人次，出院病人27.90万人次，手术18.66万台次，平均住院日7.13天，日间手术占择期手术比例25.56%。医院持续加强抗菌药物管理、单病种质量管理、医院感染管理等工作，不断开拓医疗新技术，各项终末医疗质量效率指标取得明显提升，患者医疗安全保障得到进一步加强。近年来不断创新优化门诊预约体系、多学科联合门诊、通科门诊、日间手术流程等医疗服务模式，患者就医体验和满意度持续提升'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/_variables.scss';
.default {
  height: 100%;
  padding: $padding;
}
</style>
