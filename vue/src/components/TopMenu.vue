<!--
@Author: Codeals
@Date:   11-08-2019
@Email:  ian@codeals.es
@Last modified by:   alejandro
@Last modified time: 2019-11-26T23:20:00+01:00
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
      <div class="navbar-translate" style="margin-left: 0%">
        <router-link :to="{name: 'dashboard'}" class="navbar-brand">Cuba Recargame</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="sr-only">Toggle navigation</span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link menu-link" :to="{name: 'dashboard'}"><i class="material-icons">home</i> Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link menu-link" :to="{name: 'contact'}"><i class="material-icons">perm_contact_calendar</i> Contactos</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'my-pms'}"><i class="material-icons">email</i> Private Messages</router-link>
          </li> -->
          <li class="dropdown nav-item">
            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
              <i class="material-icons">attach_money</i> Recarga
            </a>
            <div class="dropdown-menu dropdown-with-icons">
              <!-- <router-link class="dropdown-item"><i class="material-icons">apps</i> Recargar ofertas</router-link> -->
              <router-link :to="{name: 'recharge-contact'}" class="dropdown-item menu-link"><i class="material-icons">account_box</i> Recargar Contactos</router-link>
              <router-link :to="{name: 'recharge-list'}" class="dropdown-item menu-link"><i class="material-icons">format_list_bulleted</i> Recargas Realizadas</router-link>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <!-- <li class="nav-item">
            <a class="nav-link menu-link" rel="tooltip" title="" data-placement="bottom" href="#" target="_blank" data-original-title="Follow us on Twitter">
              <i class="fa fa-twitter"></i>
            </a>
          </li> -->
          <li class="nav-item">
            <a class="nav-link menu-link" rel="tooltip" title="" data-placement="bottom" href="#" target="_blank" data-original-title="Siguenos en Facebook">
              <i class="fa fa-facebook-square"></i>
            </a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link menu-link" rel="tooltip" title="" data-placement="bottom" href="#" target="_blank" data-original-title="Follow us on Instagram">
              <i class="fa fa-instagram"></i>
            </a>
          </li> -->
          <li class="dropdown nav-item">
            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
              <i class="material-icons">face</i> {{userStore.authUser.name}}
            </a>
            <div class="dropdown-menu dropdown-with-icons">
              <router-link class="dropdown-item menu-link" :to="{name: 'reset-password'}"><i class="material-icons">vpn_key</i> Cambiar Contraseña</router-link>
              <a v-on:click="handleLogout()" class="dropdown-item logout menu-link">
                <i class="material-icons"> logout </i> Salir
              </a>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </nav>
  <nav v-else='' class="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll="100" id="sectionsNav">
    <div class="container">
      <div class="navbar-translate">
        <router-link :to="{name: 'dashboard'}" class="navbar-brand">Cuba Recargame</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="sr-only">Toggle navigation</span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <!-- <li class="nav-item">
            <a class="nav-link" rel="tooltip" title="" data-placement="bottom" href="#" target="_blank" data-original-title="Follow us on Twitter">
              <i class="fa fa-twitter"></i>
            </a>
          </li> -->
          <li class="nav-item">
            <a class="nav-link" rel="tooltip" title="" data-placement="bottom" href="#" target="_blank" data-original-title="Siguenos en Facebook">
              <i class="fa fa-facebook-square"></i>
            </a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" rel="tooltip" title="" data-placement="bottom" href="#" target="_blank" data-original-title="Follow us on Instagram">
              <i class="fa fa-instagram"></i>
            </a>
          </li> -->
          <li class="dropdown nav-item">
            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
              <i class="material-icons">face</i> Iniciar Sesión
            </a>
            <div class="dropdown-menu dropdown-with-icons">
              <router-link class="dropdown-item" :to="{name: 'login'}"><i class="material-icons">face</i>Iniciar Sesión</router-link>
              <router-link class="dropdown-item" :to="{name: 'register-user'}"><i class="material-icons">fingerprint</i>Registrarse</router-link>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>

<style media="screen">
  .logout:hover{
    color: white !important
  }
</style>
