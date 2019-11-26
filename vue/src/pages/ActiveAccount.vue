<!--
@Author: Codeals
@Date:   05-08-2019
@Email:  ian@codeals.es
@Last modified by:   alejandro
@Last modified time: 2019-11-26T02:36:09+01:00
@Copyright: Codeals
-->

<template>
  <div></div>
  <!-- <div class="ResetPassword__Wrapper">
    <section class="login">
      <div class="row">
        <div class="col-md-6 col-md-push-3">
          <div class="panel panel-default">
            <div class="panel-heading"><strong>Active</strong></div>
            <div class="panel-body">
              <form v-on:submit.prevent="handleActiveSubmit()">

                <h1>Active Account</h1>

                <button class="btn btn-primary">Active</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div> -->
</template>

<script>
import {activeUserUrl} from './../config'
export default {
  created () {
    this.$store.dispatch('setBanner', false)
    this.handleActiveSubmit()
  },
  methods: {
    handleActiveSubmit () {
      var postData = {
        token: this.$route.params.token
      }

      this.$http.post(activeUserUrl, postData).then(response => {
        // console.log('response', response)
        this.$toastr.s('Has sido registrado!!!')
        this.$router.push({name: 'login'})
      }).catch(response => {
        // console.log('response', response)
        this.$toastr.e(`${response.data}`)
      })
    }
  }
}
</script>

<style lang="sass">
  .ResetPassword__Wrapper
    margin-top: 50px
</style>
