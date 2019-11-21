<!--
@Author: Codeals
@Date:   10-08-2019
@Email:  ian@codeals.es
@Last modified by:   Codeals
@Last modified time: 11-08-2019
@Copyright: Codeals
-->

<script>
export default {

}
</script>

<template>
  <ul class="nav nav-pills nav-stacked PrivateMessage-Sidebar">
    <li><router-link :to="{name: 'new-pm'}">Send PM</router-link></li>
    <li><router-link :to="{name: 'my-pms'}">Inbox</router-link></li>
    <li><router-link :to="{name: 'my-pms-sent'}">Sent</router-link></li>
  </ul>
</template>
