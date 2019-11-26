/**
 * @Author: alejandro
 * @Date:   2019-11-21T19:08:21+01:00
 * @Email:  alejo901003@hotmail.com
 * @Last modified by:   alejandro
 * @Last modified time: 2019-11-26T04:12:13+01:00
 */



// import Vue from 'vue'
// import {
//   // getHeader,
//   // userListUrl
// } from './../../config'
const state = {
  authUser: null,
  is_banner: true,
  topMenu: true
}

const mutations = {
  SET_AUTH_USER (state, userObj) {
    state.authUser = userObj
  },
  CLEAR_AUTH_USER (state) {
    state.authUser = null
  },
  SET_IS_BANNER (state, status) {
    state.is_banner = status
  },
  SET_IS_TOP (state, status) {
    state.topMenu = status
  }
}

const actions = {
  setUserObject: ({commit}, userObj) => {
    commit('SET_AUTH_USER', userObj)
  },
  clearAuthUser: ({commit}) => {
    commit('CLEAR_AUTH_USER')
  },
  setBanner: ({commit}, status) => {
    commit('SET_IS_BANNER', status)
  },
  setTopMenu: ({commit}, status) => {
    commit('SET_IS_TOP', status)
  }
  // getUserList: ({commit}) => {
  //   return Vue.http.get(userListUrl, {headers: getHeader()})
  //     .then(response => {
  //       Vue.$logger('info', 'userListUrl response', response)
  //       if (response.status === 200) {
  //         commit('SET_USER_LIST', response.body.data)
  //         return response.body.data
  //       }
  //     })
  // }
}

export default {
  state, mutations, actions
}
