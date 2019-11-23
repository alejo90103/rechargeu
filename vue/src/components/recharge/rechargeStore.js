/**
 * @Author: alejandro
 * @Date:   2019-11-21T23:25:57+01:00
 * @Email:  alejo901003@hotmail.com
 * @Project: Recargame
 * @Last modified by:   alejandro
 * @Last modified time: 2019-11-23T18:55:10+01:00
 */

import Vue from 'vue'
import {
  getHeader,
  rechargeCell,
  rechargeNauta
} from './../../config'

const state = {
  recharge: {}
  // recharge: {
  //   id: '',
  //   type: '',
  //   offer_id: {},
  //   price_pay: '',
  //   phone: '',
  //   email: ''
  // }
}

const getters = {

}

const mutations = {
  SET_RECHARGE_QUICK (state, recharge) {
    state.recharge = recharge
  },
  CLEAR_RECHARGE (state) {
    state.recharge = {}
  }
}

const actions = {
  setRecharge: ({commit}, recharge) => {
    let postData = recharge
    Vue.$logger('info', 'setRecharge response', postData)
    commit('SET_RECHARGE_QUICK', postData)
  },
  rechargeCell: ({commit}) => {
    let postData = state.recharge
    return Vue.http.post(rechargeCell, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'rechargecell response', response)
        // commit('SAVE_ADD_CAR', response.body.data)
        return response
      })
  },
  rechargeNauta: ({commit}) => {
    debugger
    let postData = state.recharge
    return Vue.http.post(rechargeNauta, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'rechargeNauta response', response)
        // commit('SAVE_ADD_CAR', response.body.data)
        return response
      })
  },
  clearRecharge: ({commit}) => {
    Vue.$logger('info', 'clearRecharge')
    commit('CLEAR_RECHARGE')
  }
}

export default {
  state, mutations, actions, getters
}
