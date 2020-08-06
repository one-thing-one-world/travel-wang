import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isZero: Boolean
  },
  mutations: {
    setIsZero(state, data) {
      state.isZero = data
    }
  },
  actions: {
  },
  modules: {
  }
})
