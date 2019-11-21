<!--
@Author: Codeals
@Date:   07-09-2019
@Email:  ian@codeals.es
@Last modified by:   Codeals
@Last modified time: 21-11-2019
@Copyright: Codeals
-->
<template>
  <div class="page-header header-filter clear-filter purple-filter trans" data-parallax="true" :style="{'background-image': 'url(' + require('./../assets/material/img/bg2.jpg') + ')'}" style="transform: translate3d(0px, 0px, 0px);">
    <Tabs></Tabs>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Tabs from './Tabs'

export default {
  components: {
    Tabs
  },
  computed: {
    ...mapState({
      userStore: state => state.userStore
    })
  }
}
</script>
