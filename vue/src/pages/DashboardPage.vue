<!--
@Author: Codeals
@Date:   05-08-2019
@Email:  ian@codeals.es
@Last modified by:   Codeals
@Last modified time: 07-09-2019
@Copyright: Codeals
-->

<script>

import Info from './../components/dashboard/Info'

export default {
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
