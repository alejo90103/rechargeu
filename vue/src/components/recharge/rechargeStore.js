/**
 * @Author: alejandro
 * @Date:   2019-11-21T23:25:57+01:00
 * @Email:  alejo901003@hotmail.com
 * @Project: Recargame
 * @Last modified by:   alejandro
 * @Last modified time: 2019-11-26T04:26:12+01:00
 */

import Vue from 'vue'
import {
  getHeader,
  rechargeCell,
  rechargeNauta,
  multiRechargeCell,
  multiRechargeNauta
} from './../../config'

const state = {
  recharge: {},
  purchaseInfo: {}
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
  SET_PURCHASE_INFO (state, purchase) {
    state.purchaseInfo = purchase
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
        if (response.status === 201) {
          commit('SET_PURCHASE_INFO', response.body.data)
        }
        return response
      })
  },
  rechargeNauta: ({commit}) => {
    let postData = state.recharge
    return Vue.http.post(rechargeNauta, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'rechargeNauta response', response)
        commit('SET_PURCHASE_INFO', response.body.data)
        if (response.status === 201) {
          commit('SET_PURCHASE_INFO', response.body.data)
        }
        return response
      })
  },
  multiRechargeCell: ({commit}, contacts) => {
    let postData = contacts
    return Vue.http.post(multiRechargeCell, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'multiRechargeCell response', response)
        if (response.status === 201) {
          commit('SET_PURCHASE_INFO', response.body.data)
        }
        return response
      })
  },
  multiRechargeNauta: ({commit}, contacts) => {
    let postData = contacts
    return Vue.http.post(multiRechargeNauta, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'multiRechargeNauta response', response)
        if (response.status === 201) {
          commit('SET_PURCHASE_INFO', response.body.data)
        }
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
