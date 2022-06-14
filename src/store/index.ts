import { createStore } from "vuex"
import loginModule from "./login/login"

export default createStore<rootState>({
  state() {
    return {
      name: "",
      password: ""
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    loginModule
  }
})
