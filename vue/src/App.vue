<!--
@Author: Codeals
@Date:   05-08-2019
@Email:  ian@codeals.es
@Last modified by:   alejandro
@Last modified time: 2019-11-26T04:11:14+01:00
@Copyright: Codeals
-->

<script>
import {mapState} from 'vuex'
// import {pusherSecret} from './env'
// import Pusher from 'pusher-js'
import TopMenu from './components/TopMenu'
import Banner from './components/Banner'
import Footer from './components/Footer'
import ModalRegister from './components/ModalRegister'

export default {
  // data () {
  //   return {
  //     is_banner: true
  //   }
  // },
  components: {
    TopMenu,
    Banner,
    Footer,
    ModalRegister
  },
  computed: {
    ...mapState({
      userStore: state => state.userStore,
      offerStore: state => state.offerStore
    })
  },
  created () {
    // set user login
    const userObj = JSON.parse(window.localStorage.getItem('authUser'))

    if (userObj !== undefined && userObj !== null) {
      this.$store.dispatch('setUserObject', userObj)
        .then(() => {
          // set user list on chat
          // this.$store.dispatch('setUserList')
        })
    }

    this.$store.dispatch('getOfferList')

    // init pusher librery
    // this.pusher = new Pusher(pusherSecret, {
    //   cluster: 'eu',
    //   forceTLS: true
    // })

    // let that = this
    // this.channel = this.pusher.subscribe('my-channel')
    // this.channel.bind('my-event', function (data) {
    //   that.$emit('notification_chat', data)
    // })
    // this.$on('notification_chat', function (chatMessage) {
    //   this.notification_chat(chatMessage)
    // })
  },
  methods: {
    // notification_chat (chatMessage) {
    //   if (this.userStore.authUser.email === chatMessage.msg.receiver.email) {
    //     this.$store.dispatch('chatRTNotification', chatMessage.msg)
    //   }
    // }
  }
}
</script>

<template>
  <div>
    <!-- <pre>{{offerStore.offers}}</pre> -->
    <Top-Menu v-if='userStore.topMenu === true'></Top-Menu>
    <Banner v-if='userStore.is_banner === true'></Banner>
    <Router-View></Router-View>
    <Footer v-if='userStore.is_banner === true'></Footer>
    <ModalRegister></ModalRegister>
  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="sass">
  /* // @import './assets/css/bootstrap.css' */
  // @import './assets/css/bootstrap.min.css'
  @import './assets/css/global.scss'
  @import '~vue-toastr/src/vue-toastr.scss'

</style>
