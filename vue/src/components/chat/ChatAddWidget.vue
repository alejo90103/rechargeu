<!--
@Author: Codeals
@Date:   06-08-2019
@Email:  ian@codeals.es
@Last modified by:   Codeals
@Last modified time: 07-09-2019
@Copyright: Codeals
-->

<script>
import {mapState, mapGetters} from 'vuex'
import _ from 'lodash'
import {pusherSecret} from './../../env'
import Pusher from 'pusher-js'
export default {
  created () {
    this.pusher = new Pusher(pusherSecret, {
      cluster: 'eu',
      forceTLS: true
    })

    // var channel = this.pusher.subscribe('my-channel');
    // channel.bind('my-event', function(data) {
    //   alert(JSON.stringify(data))
    // })

    let that = this
    this.channel = this.pusher.subscribe('my-channel')
    this.channel.bind('my-event', function (data) {
      that.$emit('incoming_chat', data)
    })
    this.$on('incoming_chat', function (chatMessage) {
      this.incomingChat(chatMessage)
    })
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
  data () {
    return {
      message: null,
      pusher: null,
      channel: null
    }
  },
  methods: {
    handleAddChat () {
      if (this.message !== null) {
        this.$logger('info', 'handleAddChat')
        let postData = {
          'receiver_id': this.chatStore.currentChatUser.id,
          'chat': this.message
        }
        this.$store.dispatch('addNewChatToConversation', postData)
          .then(response => {
            this.message = null
            let element = document.getElementById('chat-widget-wrapper')
            element.scrollIntoView(false)
          })
      }
    },
    handleClearNotification () {
      // this.$store.commit('DELETE_RT_NOTIFICATION', this.chatStore.currentChatUser)
      let user = _.find(this.listUser, this.chatStore.currentChatUser)
      if (user !== undefined && user.quantity > 0) {
        this.$logger('info', 'handleClearNotification')
        let postData = {
          'id': this.chatStore.currentChatUser.id
        }
        this.$store.dispatch('clearNotificationChat', postData)
      }
    },
    incomingChat (chatMessage) {
      console.log('chatMessage', chatMessage)
      if (this.chatStore.currentChatUser.id === chatMessage.msg.sender_id) {
        console.log(chatMessage.msg.receiver.email, this.userStore.authUser.email)
        if (chatMessage.msg.receiver.email === this.userStore.authUser.email) {
          this.$store.dispatch('newIncomingChat', chatMessage.msg)
            .then(res => {
              let element = document.getElementById('chat-widget-wrapper')
              element.scrollIntoView(false)
            })
        } else {
          console.log('Message to some other user from the selected sender')
        }
      }
    }
  }
}
</script>

<template>
  <div id="chat-add-widget" v-if="chatStore.currentChatUser != null">
    <form v-on:submit.prevent="handleAddChat()">
      <div class="form-group">
        <input
          type="text"
          v-on:click="handleClearNotification()"
          class="form-control"
          placeholder="Type your text"
          v-model="message"
        >
      </div>
    </form>
  </div>
</template>

<style lang="scss">
  #chat-add-widget {
    position: fixed;
    bottom: 0;
    width: 80%;
  }
</style>
