import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      nav: '0',
      md: []
    }
  },
  mutations: {
    changeNav(state, payload) {
      state.nav = payload.nav
    },
    setMd(state, payload) {
      state.md = payload.md
    }
  }
})