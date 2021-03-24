import Vue from 'vue'
import Main from './main.vue'

const VoiceConstructor = Vue.extend(Main)

var instance

const Voice = function(options) {
  options = options || {}

  if (typeof options === 'string') {
    options = {
      delaySecond: options
    }
  }

  options.onClose = function() {
    Voice.close()
  }
  instance = new VoiceConstructor({
    data: options
  })
  if (instance.$data.timer) {
    clearTimeout(instance.$data.timer)
  }
  instance.$data.timer = setTimeout(() => {
    Voice.start()
  }, instance.$data.delaySecond)
  return instance
}

Voice.start = function() {
  instance.$mount()
  document.body.appendChild(instance.$el)
  var audio = document.getElementById('audio')
  audio.addEventListener('ended', () => {
    Voice.close()
  }, false)
}

Voice.close = function() {
  instance.$destroy()
  document.body.removeChild(instance.$el)
}

export default Voice
