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
import TopMenu from './components/TopMenu'
import Banner from './components/Banner'
import Footer from './components/Footer'
import ModalRegister from './components/ModalRegister'

export default {
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
  }
}

</script>

<template>
  <div>
    <Top-Menu v-if='userStore.topMenu === true'></Top-Menu>
    <Banner v-if='userStore.is_banner === true'></Banner>
    <Router-View></Router-View>
    <Footer v-if='userStore.is_banner === true'></Footer>
    <ModalRegister></ModalRegister>
  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="sass">
  @import './assets/css/global.scss'
  @import '~vue-toastr/src/vue-toastr.scss'
</style>
