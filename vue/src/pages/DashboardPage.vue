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

    var cookies = localStorage.getItem('cubarecargamecookie')
    if (cookies === undefined || cookies === null) {
      this.showMsgBoxOne()
    }
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
    },
    showMsgBoxOne () {
      const h = this.$createElement
      // More complex structure
      const messageVNode = h('p', { class: ['text-center'] }, [
          this.$i18n.t('app.cookie'),
          h('div', {class: ['d-inline'], domProps: { innerHTML: '<a href="/cookie"> '+this.$i18n.t('app.more_info')+'<a>' } }, '')
        ])
      this.$bvModal.msgBoxOk(messageVNode, {
        title: this.$i18n.t('cookie.title'),
        size: 'xl',
        noCloseOnBackdrop: true,
        noCloseOnEsc: true,
        okOnly: true,
        buttonSize: 'sm',
        okVariant: 'success',
        okTitle: this.$i18n.t('cookie.accept'),
        dialogClass: 'modal-cookie',
        titleClass: 'col-md-12 text-center font-weight-bold',
        bodyClass: 'text-center p-1',
        modalClass: 'p-0',
        headerClass: 'p-0',
        footerClass: 'p-1 d-block'
      })
        .then(value => {
          if (value) {
            localStorage.setItem('cubarecargamecookie', 'cookie aceptada')
          }
        })
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
