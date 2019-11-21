/**
 * @Author: Codeals
 * @Date:   06-08-2019
 * @Email:  ian@codeals.es
 * @Last modified by:   Codeals
 * @Last modified time: 04-09-2019
 * @Copyright: Codeals
 */

import Vue from 'vue'
import _ from 'lodash'
import {
  userListUrl,
  getHeader,
  getUserConversationUrl,
  saveChatMessageUrl,
  getUserNotificationsChat
} from './../../config'
const state = {
  userList: {},
  notifications: [],
  chatRec: [],
  currentChatUser: null,
  conversation: null
}

const getters = {
  getUserListChat (state) {
    let userList = state.userList

    console.log({'increment': state.notifications})

    _.forEach(userList, function (value, key) {
      let exit = true
      state.notifications.forEach((notification) => {
        if (value.id === notification.id) {
          userList[key].quantity = notification.quantity
          exit = false
        }
      })
      if (userList[key].quantity === undefined || exit === true) {
        userList[key].quantity = 0
      }
    })
    return userList
  }
}

const mutations = {
  SET_USER_CHAT_NOTIFICATIONS (state, notifications) {
    state.notifications = notifications
  },
  SET_USER_LIST (state, userList) {
    state.userList = userList
  },
  SET_CURRENT_CHAT_USER (state, user) {
    state.currentChatUser = user
  },
  SET_CONVERSATION (state, conversation) {
    state.conversation = conversation
  },
  ADD_CHAT_TO_CONVERSATION (state, chat) {
    state.conversation.push(chat)
  },
  NEW_CHAT_NOTIFICATION (state, messageChat) {
    state.notifications.unshift(messageChat)
    state.chatRec.unshift(messageChat)
  },
  CHAT_READ_NOTIFICATION (state, messageChat) {
    _.forEach(state.charRec, function (value, key) {
      if (messageChat.id === value.id) {
        state.charRec[key] = value
      }
    })

    _.forEach(state.notifications, function (value, key) {
      if (messageChat.id === value.id) {
        state.notifications.splice(key, 1)
      }
    })
  },
  CHAT_RT_NOTIFICATION (state, message) {
    let exist = false
    _.forEach(state.notifications, function (notification, key) {
      if (notification.id === message.sender_id) {
        let ntf = state.notifications[key]
        ntf.quantity += 1

        // mejorar este paso estamos eliminandolo del arreglo y volviendolo a crear no creo que sea la mejor manera
        state.notifications.splice(key, 1)
        state.notifications.push(ntf)
        exist = true
      }
    })

    if (exist === false) {
      _.forEach(state.userList, function (user, key) {
        if (user.id === message.sender_id) {
          let newNotification = state.notifications.push(state.userList[key])
          state.notifications[newNotification - 1].quantity = 1
          console.log('ok')
        }
      })
    }
  },
  CLEAR_CHAT_CONVERSATION (state) {
    state.currentChatUser = null
    state.conversation = null
  },
  DELETE_RT_NOTIFICATION (state, userId) {
    let ntf = _.find(state.notifications, {'id': userId})
    console.log(userId)
    if (ntf !== undefined) {
      console.log(ntf)
      _.forEach(state.notifications, function (notification, key) {
        if (notification.id === userId) {
          state.notifications.splice(key, 1)
        }
      })
    }
  }
}

const actions = {
  getUserNotificationsChat: ({commit}) => {
    let postData = {}
    return Vue.http.post(getUserNotificationsChat, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'getUserChatNotifications response', response)
        commit('SET_USER_CHAT_NOTIFICATIONS', response.body.data)
      })
  },
  setUserList: ({commit}, userList) => {
    return Vue.http.get(userListUrl, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'userListUrl response', response)
        if (response.status === 200) {
          commit('SET_USER_LIST', response.body.data)
          return response.body.data
        }
      })
  },
  setCurrentChatUser: ({commit}, user) => {
    let postData = {id: user.id}
    return Vue.http.post(getUserConversationUrl, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'getUserConversationUrl response', response)
        commit('SET_CURRENT_CHAT_USER', user)
        commit('SET_CONVERSATION', response.body.data)
        commit('DELETE_RT_NOTIFICATION', user.id)
      })
  },
  addNewChatToConversation: ({commit}, postData) => {
    return Vue.http.post(saveChatMessageUrl, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'addNewChatToConversation response', response)
        commit('ADD_CHAT_TO_CONVERSATION', response.body.data)
        commit('DELETE_RT_NOTIFICATION', response.body.data.receiver_id)
      })
  },
  newIncomingChat: ({commit}, chatMessage) => {
    commit('ADD_CHAT_TO_CONVERSATION', chatMessage)
  },
  clearCurrentConversation: ({commit}) => {
    commit('CLEAR_CHAT_CONVERSATION')
  },
  newChatNotification: ({commit}, message) => {
    commit('NEW_CHAT_NOTIFICATION', message)
  },
  chatReadNotification: ({commit}, message) => {
    commit('CHAT_READ_NOTIFICATION', message)
  },
  chatRTNotification: ({commit}, message) => {
    commit('CHAT_RT_NOTIFICATION', message)
  },
  clearNotificationChat: ({commit}, user) => {
    let postData = {id: user.id}
    return Vue.http.post(getUserConversationUrl, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'clearNotificationChat response', response)
        commit('DELETE_RT_NOTIFICATION', user.id)
      })
  }
}

export default {
  state, mutations, actions, getters
}
