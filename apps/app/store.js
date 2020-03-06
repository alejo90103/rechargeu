/**
 * @Author: Codeals
 * @Date:   05-03-2020
 * @Email:  ian@codeals.es
 * @Last modified by:   Codeals
 * @Last modified time: 06-03-2020
 * @Copyright: Codeals
 */

import Vue from 'nativescript-vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import userStore from './components/user/UserStore';
import rechargeStore from './components/recharge/RechargeStore';
import offerStore from './components/offer/OfferStore';
// import contactStore from './components/contact/ContactStore'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    userStore, offerStore, rechargeStore
  },
  strict: debug
});
