/*
 * @Description: 
 * @Author: Wangtr
 * @Date: 2020-08-16 23:47:53
 * @LastEditTime: 2021-03-02 16:55:28
 * @LastEditors: Wangtr
 * @Reference: 
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // apiHost:'http://192.168.43.100',
    // apiHost: 'http://118.31.229.85',
    apiHost: 'http://49.235.226.27',
    // apiHost: 'http://127.0.0.1',
    apiPost: ':9999',
    userState: -1,
    user: {
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
    updateUser(state, user) {
      state.user = user
    },
    updateUserState(state, userState) {
      state.userState = userState
    }
  },
  actions: {
  },
  modules: {
  }
})
