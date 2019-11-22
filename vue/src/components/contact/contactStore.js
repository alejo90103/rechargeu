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
  getHeader,
  contactListUrl,
  deleteContact,
  getContactById,
  updateContact,
  addNewContact
} from './../../config'

const state = {
  contacts: []
}

const getters = {
  currentContact (state) {
    let contact = state.contact
    return contact
  }
}

const mutations = {
  SET_CONTACT_LIST (state, data) {
    state.contacts = data
  },
  DELETE_CONTACT (state, data) {
    var index
    state.contacts.forEach((contact, key) => {
      if (contact.id === data.id) {
        index = key
      }
    })
    state.contacts.splice(index, 1)
  },
  SAVE_ADD_CONTACT (state, data) {
    state.contacts.push(data)
  },
  SAVE_UPDATE_CONTACT (state, data) {
    state.contacts.forEach((contact) => {
      if (contact.id === data.id) {
        contact = data
      }
    })
  },
  CLEAR_CONTACT_LIST (state) {
    state.contacts = []
  }
}

const actions = {
  getContactList: ({commit}) => {
    return Vue.http.get(contactListUrl, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'contactListUrl response', response)
        if (response.status === 200) {
          commit('SET_CONTACT_LIST', response.body.data)
          return response.body.data
        }
      })
  },
  getContactById: ({commit}, id) => {
    let postData = {id: id}
    return Vue.http.post(getContactById, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'getContactById response', response)
        commit('SET_CONTACT_VIEW', response.body.data)
      })
  },
  addContact: ({commit}, contact) => {
    let postData = contact
    return Vue.http.post(addNewContact, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'addContact response', response)
        commit('SAVE_ADD_CONTACT', response.body.data)
      })
  },
  updateContact: ({commit}, contact) => {
    let postData = contact
    return Vue.http.put(updateContact, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'updateContact response', response)
        commit('SAVE_UPDATE_CONTACT', response.body.data)
      })
  },
  deleteContact: ({commit}, id) => {
    let postData = {id: id}
    return Vue.http.post(deleteContact, postData, {headers: getHeader()})
      .then(response => {
        if (response.status === 201) {
          Vue.$logger('info', 'deleteContact response', response)
          commit('DELETE_CONTACT', response.body.data)
        }
      })
  },
  clearContactView: ({commit}) => {
    commit('CLEAR_CONTACT_VIEW')
  }
}

export default {
  state, mutations, actions, getters
}
