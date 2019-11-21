<!--
@Author: Codeals
@Date:   06-08-2019
@Email:  ian@codeals.es
@Last modified by:   Codeals
@Last modified time: 30-08-2019
@Copyright: Codeals
-->

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  created () {
    this.$logger('info', 'ChatUserList created')

    if (this.$route.params.userId !== undefined) {
      this.changeChatUser(this.$route.params.userId)
    }
  },
  computed: {
    ...mapState({
      chatStore: state => state.chatStore,
      userStore: state => state.userStore
    }),
    ...mapGetters({
      listUser: 'getUserListChat'
    })
  },
  methods: {
    userActiveStyle (user) {
      if (this.chatStore.currentChatUser === null) {
        return false
      }
      if (this.chatStore.currentChatUser.id === user.id) {
        return true
      }
      return false
    },
    changeChatUser (user) {
      if (this.chatStore.currentChatUser === null || this.chatStore.currentChatUser.id !== user.id) {
        this.$store.dispatch('setCurrentChatUser', user)
          .then(response => {
            let element = document.getElementById('chat-widget-wrapper')
            element.scrollIntoView(false)
          })
      }
    }
  }
}
</script>

<template>
  <div id="chat-user-list-wrapper">
    <ul class="list-group">
      <li v-bind:key="user.id"
        class="list-group-item pointer"
        :class="[{active: userActiveStyle(user)}]"
        v-for="user in listUser"
        v-on:click="changeChatUser(user)"
        v-if="user.name !== userStore.authUser.name"
      >
        {{ user.name }}
        <span class="label label-primary" v-if="user.quantity !== undefined && user.quantity !== 0">{{user.quantity}}</span>
      </li>
    </ul>
  </div>
</template>
