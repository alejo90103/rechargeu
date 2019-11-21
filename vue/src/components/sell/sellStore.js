/**
 * @Author: Codeals
 * @Date:   28-08-2019
 * @Email:  ian@codeals.es
 * @Last modified by:   Codeals
 * @Last modified time: 29-08-2019
 * @Copyright: Codeals
 */

import Vue from 'vue'
import _ from 'lodash'
import {
  getHeader,
  // sellListUrl,
  sellByUserUrl,
  getSellById,
  addNewSell,
  deleteSell
} from './../../config'

const state = {
  sells: [],
  sell: {
    id: '',
    seller_id: '',
    seller: {},
    buyer_id: '',
    buyer: {},
    car_id: '',
    car: {},
    price: '',
    observations: '',
    date: ''
  }
}

const getters = {}

const mutations = {
  SET_SELL_LIST (state, data) {
    state.sells = data
  },
  SET_SELL_VIEW (state, data) {
    state.sell = data
  },
  DELETE_SELL (state, sellId) {
    _.forEach(state.sells, function (sell, key) {
      if (sell.id === sellId) {
        state.sells.splice(key, 1)
      }
    })
  },
  SAVE_ADD_SELL (state, data) {
    state.sells.push(data)
  },
  CLEAR_SELL_VIEW (state) {
    state.sell = {
      id: '',
      seller_id: '',
      seller: {},
      buyer_id: '',
      buyer: {},
      car_id: '',
      car: {},
      price: '',
      observations: '',
      date: ''
    }
  }
}

const actions = {
  // sellListUrl: ({commit}) => {
  //   return Vue.http.get(sellListUrl, {headers: getHeader()})
  //     .then(response => {
  //       Vue.$logger('info', 'sellListUrl response', response)
  //       if (response.status === 200) {
  //         commit('SET_SELL_LIST', response.body.data)
  //         return response.body.data
  //       }
  //     })
  // },
  sellByUserUrl: ({commit}) => {
    let postData = {}
    return Vue.http.post(sellByUserUrl, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'sellListUrl response', response)
        if (response.status === 200) {
          commit('SET_SELL_LIST', response.body.data)
          return response.body.data
        }
      })
  },
  getSellById: ({commit}, id) => {
    let postData = {id: id}
    return Vue.http.post(getSellById, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'getSellById response', response)
        commit('SET_SELL_VIEW', response.body.data)
      })
  },
  addSellCar: ({commit}, sell) => {
    // console.log(sell)
    sell.buyer_id = sell.buyer_id.id
    let postData = sell
    return Vue.http.post(addNewSell, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'addSell response', response)
        commit('SAVE_ADD_SELL', response.body.data)
      })
  },
  deleteSell: ({commit}, id) => {
    let postData = {id: id}
    return Vue.http.post(deleteSell, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'deleteSell response', response.body.data)
        commit('DELETE_SELL', id)
      })
  },
  clearSellView: ({commit}) => {
    commit('CLEAR_SELL_VIEW')
  }
}

export default {
  state, mutations, actions, getters
}
