<!--
@Author: Codeals
@Date:   07-09-2019
@Email:  ian@codeals.es
@Last modified by:   Codeals
@Last modified time: 21-11-2019
@Copyright: Codeals
-->
<template>
  <!-- <pre>userStore.authUser</pre> -->
  <!-- <div class="page-header header-filter clear-filter purple-filter" data-parallax="true" style="background-image: url('./assets/img/bg2.jpg');"> -->
  <div  v-if="userStore.authUser !== null && userStore.authUser.access_token" class="page-header header-filter clear-filter purple-filter" data-parallax="true" :style="{'background-image': 'url(' + require('./../assets/material/img/bg2.jpg') + ')'}">
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto">
          <div class="brand">
            <h1>Recharge U.</h1>
            <h3>Recarga Lo. <strong>Codeals</strong></h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      userStore: state => state.userStore
    })
  }
}
</script>
