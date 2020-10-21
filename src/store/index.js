import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // apiHost:'http://192.168.43.100',
    apiHost:'http://118.31.229.85',
    apiPost:':9999',
    userState:-1,
    user:{
      email: String,
      exp: Number,
      headImg: String,
      id: Number,
      introduce: String,
      level: Number,
      recommend: Number,
      status: String,
      role: String,
      sex: String,
      username: String,
      xaccessToken: String
    }
  },
  mutations: {
    updateUser(state,user) {
      state.user = user
    },
    updateUserState(state,userState) {
      state.userState = userState
    }
  },
  actions: {
  },
  modules: {
  }
})
