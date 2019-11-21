<!--
@Author: Codeals
@Date:   10-08-2019
@Email:  ian@codeals.es
@Last modified by:   Codeals
@Last modified time: 07-09-2019
@Copyright: Codeals
-->

<script>
import {mapState} from 'vuex'
// import moment from 'moment'

export default {
  computed: {
    ...mapState({
      chatStore: state => state.chatStore,
      userStore: state => state.userStore
    })
  },
  created () {
    this.$store.dispatch('getUserNotificationsChat')
  },
  sockets: {
    message (data) {
      let messageChat = JSON.parse(data)
      if (messageChat.receiver.email === this.userStore.authUser.email) {
        console.log(messageChat)
        this.$store.dispatch('newChatNotification', messageChat)
      }
    },
    messageRead (data) {
      let messageChat = JSON.parse(data)
      this.$store.dispatch('chatReadNotification', messageChat)
      console.log('chatReadNotification', messageChat)
    }
  }
}
</script>

<template>
  <li class="dropdown nav-item pm-message-notification">
    <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
      <i class="material-icons">chat</i>
      <span class="label label-success" v-if="chatStore.notifications.length > 0">{{chatStore.notifications.length}}</span>
    </a>
    <div class="dropdown-menu dropdown-with-icons">
      <div class="context">Your Chat messages</div>

      <div class="context" v-if="chatStore.notifications.length === 0">No unread Chat messages</div>

      <div v-if="chatStore.notifications.length > 0" class="notification" v-bind:key="notification.id" v-for="notification in chatStore.notifications">

        <router-link  class="dropdown-item" :to="{name: 'chat', params: { userId: notification }}">
          <div>
            <span class="from">{{notification.name}} <span class="time"><i class="fa fa-clock-o"></i> {{notification.created_at}}</span></span>
            <span class="quantity">{{notification.quantity}}</span>
          </div>
        </router-link>
      </div>
      <div class="footer">
        <router-link class="dropdown-item" :to="{name: 'chat'}">See all Chat messages</router-link>
      </div>

    </div>
  </li>
</template>

<style lang="scss">
  @import './../../assets/css/variables.scss';
  .pm-message-notification {
    &.open {
      background-color: $border-color;
    }
    .context {
      color: #999999;
      width: 300px;
      padding: 5px 10px 9px 10px;
      border-bottom: 1px solid $border-color;
      overflow: hidden;
    }
    li.notification {
      border-bottom: 1px solid $border-color;
      &:last-child {
        border-bottom: none;
      }
      padding: 5px 5px 5px 0px;
      span {
        display: block;
        &.from {
          color: #444444;
          .time {
            font-size: 0.7em;
            float: right;
          }
        }
        &.subject {
          font-size: 0.8em;
        }
      }
    }
    .footer {
      text-align: center;
    }
  }
</style>
