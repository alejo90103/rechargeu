/**
 * @Author: Codeals
 * @Date:   05-08-2019
 * @Email:  ian@codeals.es
 * @Last modified by:   Codeals
 * @Last modified time: 21-11-2019
 * @Copyright: Codeals
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Multiselect from 'vue-multiselect'
import Toastr from 'vue-toastr'
// import VueSocketio from 'vue-socketio'
import store from './store'

import App from './App'

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ActiveAccount from './pages/ActiveAccount'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import DashboardPage from './pages/DashboardPage'
// import ChatPage from './pages/ChatPage'

// import PrivateMessageInbox from './components/private-message/PrivateMessageInbox'
// import PrivateMessageSent from './components/private-message/PrivateMessageSent'
// import PrivateMessageView from './components/private-message/PrivateMessageView'
// import PrivateMessageCompose from './components/private-message/PrivateMessageCompose'

// import CarList from './components/car/CarList'
// import CarView from './components/car/CarView'
// import CarEdit from './components/car/CarEdit'
// import CarAdd from './components/car/CarAdd'
// import UploadImage from './components/car/CarGallery'

// import SellCarList from './components/sell/SellCarList'

import Logger from './plugins/Logger'

// register globally
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Logger, {loggin: true})
Vue.use(Toastr)
Vue.component('multiselect', Multiselect)
// Vue.use(VueSocketio, 'http://localhost:8890')
// Vue.use(VueSocketio, 'http://socketserver.com:1923');

Vue.component('app', App)

// routes
const routes = [
  {path: '/', component: LoginPage, name: 'home'},
  // user
  {path: '/register-user', component: RegisterPage, name: 'register-user'},
  {path: '/active-account/:token', component: ActiveAccount, name: 'active-account'},
  {path: '/forgot-password', component: ForgotPassword, name: 'forgot-password'},
  {path: '/reset-password/:token', component: ResetPassword, name: 'reset-password'},
  {path: '/dashboard', component: DashboardPage, name: 'dashboard', meta: { requiresAuth: true }}
  // chat
  // {path: '/chat', component: ChatPage, name: 'chat', meta: { requiresAuth: true }},
  // {path: '/chat/:userId', component: ChatPage, name: 'chat', meta: { requiresAuth: true }},
  // private message
  // {path: '/new-pm', component: PrivateMessageCompose, name: 'new-pm', meta: { requiresAuth: true }},
  // {path: '/inbox-pms', component: PrivateMessageInbox, name: 'my-pms', meta: { requiresAuth: true }},
  // {path: '/pms/:pmId', component: PrivateMessageView, name: 'pm-view', meta: { requiresAuth: true }},
  // {path: '/sent-pms', component: PrivateMessageSent, name: 'my-pms-sent', meta: { requiresAuth: true }},
  // car
  // {path: '/car-list', component: CarList, name: 'car-list', meta: { requiresAuth: true }},
  // {path: '/car/:carId', component: CarView, name: 'car-view', meta: { requiresAuth: true }},
  // {path: '/car-add', component: CarAdd, name: 'car-add', meta: { requiresAuth: true }},
  // {path: '/car-edit/:carId', component: CarEdit, name: 'car-edit', meta: { requiresAuth: true }},
  // {path: '/car-upload/:carId', component: UploadImage, name: 'car-upload', meta: { requiresAuth: true }},
  // sell
  // {path: '/sell-car-list', component: SellCarList, name: 'sell-car-list', meta: { requiresAuth: true }}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    if (authUser && authUser.access_token) {
      next()
    } else {
      next({name: 'home'})
    }
  }
  next()
})

Vue.http.interceptors.push((request, next) => {
  next((response) => {
    if (response.status === 401) {
      console.log('Need to login again')
    }
  })
})

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

//
new Vue({
  router, store
}).$mount('#app')
