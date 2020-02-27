/**
 * @Author: alejandro
 * @Date:   2019-11-22T23:25:27+01:00
 * @Email:  alejo901003@hotmail.com
 * @Project: Recargame
 * @Last modified by:   alejandro
 * @Last modified time: 2019-11-23T23:50:11+01:00
 */

import Vue from 'vue'
import _ from 'lodash'
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
  },
  getEmailList (state) {
    let list = state.contacts
    return list.filter(list => list.email !== null)
  },
  getPhoneList (state) {
    let list = state.contacts
    return list.filter(list => list.phone !== null)
  }
}

const mutations = {
  SET_CONTACT_LIST (state, data) {
    state.contacts = data
  },
  DELETE_CONTACT (state, data) {
    _.forEach(state.contacts, function (contact, key) {
      if (contact.id === data.id) {
        state.contacts.splice(key, 1)
      }
    })
  },
  SAVE_ADD_CONTACT (state, data) {
    state.contacts.push(data)
  },
  SAVE_UPDATE_CONTACT (state, data) {
    _.forEach(state.contacts, function (contact, key) {
      if (contact.id === data.id) {
        state.contacts.splice(key, 1)
        state.contacts.splice(key, 0, data)
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
    // let postData = {name: contact.name, phone: contact.phone, email: contact.email}
    let postData = contact
    return Vue.http.post(addNewContact, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'addContact response', response)
        commit('SET_CONTACT_LIST', response.body.data)
      })
  },
  updateContact: ({commit}, contact) => {
    let postData = contact
    return Vue.http.put(updateContact, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'updateContact response', response)
        commit('SAVE_UPDATE_CONTACT', response.body.data)
        // Vue.http.get(contactListUrl, {headers: getHeader()})
        // .then(response => {
        //   commit('SET_CONTACT_LIST', response.body.data)
        // })
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
