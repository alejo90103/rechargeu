<!--
@Author: Codeals
@Date:   06-08-2019
@Email:  ian@codeals.es
@Last modified by:   Codeals
@Last modified time: 07-09-2019
@Copyright: Codeals
-->

<script>
import {mapState} from 'vuex'
import ChatWidget from './../components/chat/ChatWidget'
import ChatUserList from './../components/chat/ChatUserList'
import ChatAddWidget from './../components/chat/ChatAddWidget'

export default {
  components: {
    'chat-block': ChatWidget,
    'user-list': ChatUserList,
    'add-chat': ChatAddWidget
  },
  computed: {
    ...mapState({
      chatStore: state => state.chatStore
    })
  },
  created () {
    this.$store.dispatch('setUserList')
  },
  destroyed () {
    this.$store.dispatch('clearCurrentConversation')
  }
}
</script>

<template>
  <div class="main main-raised" id="chat-wrapper">
    <div class="section section-basic">
      <div class="content">
        <section class="title">
          <h3>Chat <small>Get connected with your friends.</small></h3>
        </section>

        <section class="content">
          <div class="row">
            <div class="col-md-2 col-with-right-border" id="user-list-col">
              <user-list></user-list>
            </div>

            <div class="col-md-10">
              <div class="chat-block">
                <chat-block></chat-block>
              </div>
              <div class="add-chat-block">
                <add-chat></add-chat>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './../assets/css/variables.scss';
#user-list-col {
  border-right: 1px solid $border-color;
}
.add-chat-block {
  position: relative;
}
</style>
