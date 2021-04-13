const module = {
  namespaced: true,
  state: {
    istabbar: true
  },
  mutations: {
    show (state) {
      state.istabbar = false
    },
    hide (state) {
      state.istabbar = true
    }
  },
  actions: {

  }
}
export default module
