/**
 * @Author: alejandro
 * @Date:   2019-11-22T14:46:15+01:00
 * @Email:  alejo901003@hotmail.com
 * @Project: Recargame
 * @Last modified by:   alejandro
 * @Last modified time: 2019-11-23T14:17:45+01:00
 */

import Vue from 'vue'
import {
  offerList
  // rechargeCell,
  // rechargeNauta
} from './../../config'

const state = {
  offers: []
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
  SET_OFFER_LIST (state, offers) {
    state.offers = offers
  }
}

const actions = {
  getOfferList: ({commit}) => {
    return Vue.http.get(offerList)
      .then(response => {
        Vue.$logger('info', 'offerList response', response)
        if (response.status === 200) {
          commit('SET_OFFER_LIST', response.body.data)
        }
      })
  }
  // rechargeCell: ({commit}) => {
  //   let postData = state.recharge
  //   return Vue.http.post(rechargeCell, postData, {headers: getHeader()})
  //     .then(response => {
  //       Vue.$logger('info', 'rechargecell response', response)
  //       // commit('SAVE_ADD_CAR', response.body.data)
  //       return response
  //     })
  // },
  // rechargeNauta: ({commit}) => {
  //   let postData = state.recharge
  //   return Vue.http.post(rechargeNauta, postData, {headers: getHeader()})
  //     .then(response => {
  //       Vue.$logger('info', 'rechargeNauta response', response)
  //       // commit('SAVE_ADD_CAR', response.body.data)
  //     })
  // }
}

export default {
  state, mutations, actions, getters
}
