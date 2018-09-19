import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: window.localStorage.getItem('user'),
  token: window.localStorage.getItem('token')
}
const mutations = {
  SET_TOKEN: (state, data) => {
    state.token = data
    window.localStorage.setItem('token', data)
  },
  GET_USER: (state, data) => {
    state.user = data
    window.localStorage.setItem('user', data)
  },
  LOGINOUT: (state) => {
    state.token = null
    state.user = null
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('user')
  }
}
const actions = {
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
