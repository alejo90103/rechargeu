<!--
@Author: Codeals
@Date:   11-08-2019
@Email:  ian@codeals.es
@Last modified by:   Codeals
@Last modified time: 21-11-2019
@Copyright: Codeals
-->

<script>
// import PrivateMessageNotificationDropdown from './private-message/PrivateMessageNotificationDropdown'
// import ChatNotificationDropdown from './chat/ChatNotificationDropdown'
import {mapState} from 'vuex'
export default {
  components: {
    // 'pm-notification': PrivateMessageNotificationDropdown
    // 'chat-notification': ChatNotificationDropdown
  },
  computed: {
    ...mapState({
      userStore: state => state.userStore
    })
  },
  methods: {
    handleLogout () {
      this.$store.dispatch('clearAuthUser')
      window.localStorage.removeItem('authUser')
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<template>
  <nav v-if="userStore.authUser !== null && userStore.authUser.access_token" class="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll="100" id="sectionsNav">
    <div class="container">
      <div class="navbar-translate">
        <a class="navbar-brand" href="http://localhost:8080/dashboard">
          Recharge U
        </a>
        <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="sr-only">Toggle navigation</span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
        </button> -->
      </div>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'dashboard'}"><i class="material-icons">dashboard</i> Home</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'chat'}"><i class="material-icons">chat</i> Chat</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'my-pms'}"><i class="material-icons">email</i> Private Messages</router-link>
          </li> -->
          <li class="dropdown nav-item">
            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
              <i class="material-icons">apps</i> Components
            </a>
            <div class="dropdown-menu dropdown-with-icons">
              <!-- <router-link class="dropdown-item" :to="{name: 'car-list'}"><i class="material-icons">apps</i> Car</router-link>
              <router-link class="dropdown-item" :to="{name: 'sell-car-list'}"><i class="material-icons">apps</i> Sells</router-link> -->
            </div>
          </li>
        </ul>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <!-- <chat-notification></chat-notification> -->
          <!-- <pm-notification></pm-notification> -->
          <li class="dropdown nav-item">
            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
              <i class="material-icons">face</i>
              <!-- <i class="material-icons">face</i> {{userStore.authUser.name}} -->
            </a>
            <div class="dropdown-menu dropdown-with-icons">
              <a href="#" class="dropdown-item">
                <i class="material-icons">settings</i> Perfil
              </a>
              <a v-on:click="handleLogout()" class="dropdown-item">
                <i class="material-icons"> logout </i> Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
