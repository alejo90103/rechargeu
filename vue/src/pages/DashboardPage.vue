<!--
@Author: Codeals
@Date:   05-08-2019
@Email:  ian@codeals.es
@Last modified by:   alejandro
@Last modified time: 2019-11-27T04:08:25+01:00
@Copyright: Codeals
-->

<script>

import Info from './../components/dashboard/Info'

export default {
  data () {
    return {
      paymentResult: ''
    }
  },
  created () {
    this.paymentResult = this.$route.params.paymentResult
    this.$store.dispatch('setBanner', true)
    this.checkPaymentStatus()
  },
  components: {
    Info
  },
  methods: {
    checkPaymentStatus () {
      if (this.$route.params.paymentResult !== undefined) {
        if (this.$route.params.paymentResult === 'success') {
          this.$toastr.s(this.$i18n.t('notifications.success_pay'))
        } else if (this.$route.params.paymentResult === 'failed') {
          this.$toastr.e(this.$i18n.t('notifications.error_pay'))
        } else if (this.$route.params.paymentResult === 'failedDing') {
          this.$toastr.e(this.$i18n.t('notifications.error_provider'))
        }
      }
    }
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
