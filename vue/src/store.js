/**
 * @Author: Codeals
 * @Date:   05-08-2019
 * @Email:  ian@codeals.es
 * @Last modified by:   Codeals
 * @Last modified time: 21-11-2019
 * @Copyright: Codeals
 */

import Vue from 'vue'
import Vuex from 'vuex'

import userStore from './components/user/UserStore'
import rechargeStore from './components/recharge/RechargeStore'
import offerStore from './components/offer/OfferStore'
import contactStore from './components/contact/ContactStore'
// import carStore from './components/car/carStore'
// import galleryStore from './components/gallery/galleryStore'
// import chatStore from './components/chat/chatStore'
// import privateMessageStore from './components/private-message/privateMessageStore'
// import sellStore from './components/sell/sellStore'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // modules: {
  //   userStore, chatStore, privateMessageStore, carStore, galleryStore, sellStore
  // },
  modules: {
    userStore,
    rechargeStore,
    offerStore,
    contactStore
  },
  strict: debug
})
