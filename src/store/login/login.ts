import router from "@/router"
import { Module } from "vuex"

const loginModule: Module<loginState, rootState> = {
  namespaced: false,
  state() {
    return {
      name: "",
      password: ""
    }
  },
  actions: {
    loginAccountAction({ commit }, payload) {
      router.push("/main")
    }
  }
}

export default loginModule
