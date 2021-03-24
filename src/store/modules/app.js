import Cookies from 'js-cookie'
import {getLanguage} from '../../lang'

const state = {
  language: getLanguage(),
  device: 'desktop'
}

const mutations = {
  SET_LANGUAGE: (state, language) => {
    state.language = language
    Cookies.set('language', language)
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  }
}

const actions = {
  setLanguage ({ commit }, language) {
    commit('SET_LANGUAGE', language)
  },
  toggleDevice ({commit}, device) {
    commit('TOGGLE_DEVICE', device)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
