/**
 * @Author: alejandro
 * @Date:   2019-11-22T14:46:15+01:00
 * @Email:  alejo901003@hotmail.com
 * @Project: Recargame
 * @Last modified by:   alejandro
 * @Last modified time: 2019-11-23T14:17:45+01:00
 */

import Vue from 'vue'
import moment from 'moment'

import {
  offerList
  // rechargeCell,
  // rechargeNauta
} from './../../config'

const state = {
  offers: []
}

const getters = {
  getCellOffersSchedule (state) {
    let list = state.offers
    let now = moment(new Date()).format('YYYY/MM/DD')
    return list.filter(function (offer) {
      if (offer.type === 'Cell' && !moment(now).isBetween(offer.date_ini, offer.date_end, null, '[]')) {
        return true
      }
      return false
    })
  },
  getCellOffers (state) {
    let list = state.offers
    let now = moment(new Date()).format('YYYY/MM/DD')
    return list.filter(function (offer) {
      if (offer.type === 'Cell' && moment(now).isBetween(offer.date_ini, offer.date_end, null, '[]')) {
        return true
      }
      return false
    })
  },
  getNautaOffers (state) {
    let list = state.offers
    let now = moment(new Date()).format('YYYY/MM/DD')
    return list.filter(function (offer) {
      if (offer.type === 'Nauta' && moment(now).isBetween(offer.date_ini, offer.date_end, null, '[]')) {
        return true
      }
      return false
    })
  }
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
}

export default {
  state, mutations, actions, getters
}
