import Vue from 'vue'
import playVoice from './PlayVoice/index.js'

const components = [
]

Vue.prototype.$playVoice = playVoice

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

install(Vue)

export default install
