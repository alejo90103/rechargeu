<!--
@Author: Codeals
@Date:   11-08-2019
@Email:  ian@codeals.es
@Last modified by:   Codeals
@Last modified time: 02-01-2020
@Copyright: Codeals
-->

<script>
// import PrivateMessageNotificationDropdown from './private-message/PrivateMessageNotificationDropdown'
// import ChatNotificationDropdown from './chat/ChatNotificationDropdown'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      'locale': 'spanish'
    }
  },
  mounted () {
    if (this.$i18n.locale === 'es') {
      this.locale = this.$i18n.t('app.locales.english')
    } else {
      this.locale = this.$i18n.t('app.locales.spanish')
    }
  },
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
    },
    changeLocale () {
      if (this.$i18n.locale === 'es') {
        this.$i18n.locale = 'en'
        this.locale = this.$i18n.t('app.locales.spanish')
        window.localStorage.setItem('lang', 'en')
      } else {
        this.$i18n.locale = 'es'
        this.locale = this.$i18n.t('app.locales.english')
        window.localStorage.setItem('lang', 'es')
      }
    }
  }
}
</script>

<template>
  <nav v-if="userStore.authUser !== null && userStore.authUser.access_token" class="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll="5" id="sectionsNav">
    <div class="container">
      <div class="navbar-translate" style="margin-left: 5%">
        <router-link :to="{name: 'dashboard'}" class="navbar-brand"><h4 style="margin-top: 0px;" class="d-none d-sm-block">{{ $t('app.title') }}</h4></router-link>
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
            <router-link class="nav-link menu-link" :to="{name: 'dashboard'}"><i class="material-icons">home</i> {{ $t('menu.home') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link menu-link" :to="{name: 'contact'}"><i class="material-icons">perm_contact_calendar</i> {{ $t('menu.contact') }}</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'my-pms'}"><i class="material-icons">email</i> Private Messages</router-link>
          </li> -->
          <li class="dropdown nav-item">
            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
              <i class="material-icons">attach_money</i> {{ $t('menu.recharge') }}
            </a>
            <div class="dropdown-menu dropdown-with-icons">
              <!-- <router-link class="dropdown-item"><i class="material-icons">apps</i> Recargar ofertas</router-link> -->
              <router-link :to="{name: 'recharge-contact'}" class="dropdown-item menu-link"><i class="material-icons">account_box</i> {{ $t('menu.submenu_recharge.recharge_contacts') }} </router-link>
              <router-link :to="{name: 'recharge-list'}" class="dropdown-item menu-link"><i class="material-icons">format_list_bulleted</i> {{ $t('menu.submenu_recharge.recharges_mades') }} </router-link>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link menu-link" rel="tooltip" title="" data-placement="bottom" href="#" target="_blank" data-original-title="Follow us on Twitter">
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link menu-link" rel="tooltip" title="" data-placement="bottom" href="#" target="_blank" :data-original-title=" $t('menu.social_medias.facebook') ">
              <i class="fa fa-facebook-square"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link menu-link" rel="tooltip" title="" data-placement="bottom" href="#" target="_blank" data-original-title="Follow us on Instagram">
              <i class="fa fa-instagram"></i>
            </a>
          </li>
          <li class="nav-item">
            <a v-on:click="changeLocale()" class="nav-link menu-link" href="#">
              <i class="material-icons"> flag </i> {{ locale }}
            </a>
          </li>
          <li class="dropdown nav-item">
            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
              <i class="material-icons">face</i> {{userStore.authUser.name}}
            </a>
            <div class="dropdown-menu dropdown-with-icons">
              <router-link class="dropdown-item menu-link" :to="{name: 'reset-password'}"><i class="material-icons">vpn_key</i> {{ $t('menu.submenu_settings.change_password') }}</router-link>
              <a v-on:click="handleLogout()" class="dropdown-item logout menu-link">
                <i class="material-icons"> logout </i> {{ $t('menu.submenu_settings.logout') }}
              </a>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </nav>
  <nav v-else='' class="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll="5" id="sectionsNav">
    <div class="container">
      <div class="navbar-translate">
        <router-link :to="{name: 'dashboard'}" class="navbar-brand"><h4 style="margin-top: 0px;" class="d-none d-sm-block">{{ $t('app.title') }}</h4></router-link>
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
            <a class="nav-link" rel="tooltip" title="" data-placement="bottom" href="#" target="_blank" data-original-title="Follow us on Twitter">
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link menu-link" rel="tooltip" title="" data-placement="bottom" href="#" target="_blank" :data-original-title="$t('menu.social_medias.facebook')">
              <i class="fa fa-facebook-square"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" rel="tooltip" title="" data-placement="bottom" href="#" target="_blank" data-original-title="Follow us on Instagram">
              <i class="fa fa-instagram"></i>
            </a>
          </li>
          <li class="nav-item">
            <a v-on:click="changeLocale()" class="nav-link menu-link" href="#">
              <i class="material-icons"> flag </i> {{ locale }}
            </a>
          </li>
          <li class="dropdown nav-item">
            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
              <i class="material-icons">face</i> {{ $t('menu.login') }}
            </a>
            <div class="dropdown-menu dropdown-with-icons">
              <router-link class="dropdown-item menu-link" :to="{name: 'login'}"><i class="material-icons">face</i>{{ $t('menu.submenu_login.login') }}</router-link>
              <router-link class="dropdown-item menu-link" :to="{name: 'register-user'}"><i class="material-icons">fingerprint</i>{{ $t('menu.submenu_login.signin') }}</router-link>
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
