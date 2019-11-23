<!--
@Author: Codeals
@Date:   05-08-2019
@Email:  ian@codeals.es
@Last modified by:   alejandro
@Last modified time: 2019-11-23T20:31:38+01:00
@Copyright: Codeals
-->

<script>

import Info from './../components/dashboard/Info'

export default {
  created () {
    this.$store.dispatch('setBanner', true)
  },
  components: {
    Info
  }
}
</script>

<template>
  <div class="main main-raised" id="dashboard-wrapper">
    <div class="section section-basic">
      <Info></Info>
    </div>
  </div>
</template>

<style lang="css" scoped>
  .center {
    align-items: center;
    flex-direction: column;
    display: flex;
  }
</style>
