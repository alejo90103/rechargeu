/**
 * @Author: Codeals
 * @Date:   14-08-2019
 * @Email:  ian@codeals.es
 * @Last modified by:   Codeals
 * @Last modified time: 28-08-2019
 * @Copyright: Codeals
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
