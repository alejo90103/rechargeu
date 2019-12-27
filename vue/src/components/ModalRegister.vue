<!--
@Author: alejandro
@Date:   2019-11-21T17:41:21+01:00
@Email:  alejo901003@hotmail.com
@Project: Recargame
@Last modified by:   alejandro
@Last modified time: 2019-11-26T04:49:58+01:00
-->

<script>

import {loginUrl, registerUserUrl, userUrl, getHeader, apiClient} from './../config'
import {clientId, clientSecret} from './../env'
import {mapState} from 'vuex'

export default {
  data () {
    return {
      login: {
        email: '',
        password: ''
      },
      register: {
        name: '',
        email: '',
        password: '',
        confirm: ''
      },
      loading: false
    }
  },
  computed: {
    ...mapState({
      rechargeStore: state => state.rechargeStore
    })
  },
  props: {
    method: { type: Function }
  },
  methods: {
    handleLoginFormSubmit () {
      const postData = {
        grant_type: 'password',
        client_id: clientId,
        client_secret: clientSecret,
        username: this.login.email,
        password: this.login.password,
        scope: ''
      }

      const authUser = {}
      this.loading = true
      this.$http.post(loginUrl, postData)
        .then(response => {
          if (response.status === 200) {
            console.log('Oauth token', response)
            authUser.access_token = response.data.access_token
            authUser.refresh_token = response.data.refresh_token
            window.localStorage.setItem('authUser', JSON.stringify(authUser))
            this.$http.get(userUrl, {headers: getHeader()})
              .then(response => {
                console.log('user object', response)
                authUser.email = response.body.email
                authUser.name = response.body.name
                window.localStorage.setItem('authUser', JSON.stringify(authUser))
                this.$store.dispatch('setUserObject', authUser)
                this.loading = false
                $('#exampleModal').modal('hide')
                console.log(this.rechargeStore.recharge.call)
                this.$store.dispatch(this.rechargeStore.recharge.call)
                  .then(response => {
                    if (response.status === 201) {
                      this.$router.push({name: 'payment'})
                    } else {
                      this.$toastr.e('ERROR en la recarga :( ')
                      this.$router.push({name: 'dashboard'})
                    }
                  })
              })
              .catch(response => {
                window.localStorage.removeItem('authUser')
                if (response.status === 404) {
                  this.loading = false
                  this.$toastr.e('Active la cuenta en su correo')
                }
              })
          }
        })
        .catch(response => {
          this.loading = false
          if (response.status === 401) {
            this.$toastr.e('Usuario o contraseña incorrecto')
          }
        })
    },
    handleRegisterFormSubmit () {
      if (this.register.password !== this.register.confirm) {
        this.$toastr.e('Contraseñas no coinciden')
        return
      }

      var postDataRegister = {
        name: this.register.name,
        email: this.register.email,
        password: this.register.password,
        url: apiClient
      }

      this.loading = true
      this.$http.post(registerUserUrl, postDataRegister)
        .then(response => {
          console.log('response', response)
          this.$toastr.s('Ha sido registrado con éxito')

          const postDataLogin = {
            grant_type: 'password',
            client_id: clientId,
            client_secret: clientSecret,
            username: this.register.email,
            password: this.register.password,
            scope: ''
          }

          const authUser = {}
          this.$http.post(loginUrl, postDataLogin)
            .then(response => {
              if (response.status === 200) {
                console.log('Oauth token', response)
                authUser.access_token = response.data.access_token
                authUser.refresh_token = response.data.refresh_token
                window.localStorage.setItem('authUser', JSON.stringify(authUser))
                this.$http.get(userUrl, {headers: getHeader()})
                  .then(response => {
                    console.log('user object', response)
                    authUser.email = response.body.email
                    authUser.name = response.body.name
                    window.localStorage.setItem('authUser', JSON.stringify(authUser))
                    this.$store.dispatch('setUserObject', authUser)
                    this.loading = false
                    $('#exampleModal').modal('hide')
                    console.log(this.rechargeStore.recharge.call)
                    this.$store.dispatch(this.rechargeStore.recharge.call)
                      .then(response => {
                        if (response.status === 201) {
                          this.$router.push({name: 'payment'})
                        } else {
                          this.$toastr.e('ERROR en la recarga :( ')
                          this.$router.push({name: 'dashboard'})
                        }
                      })
                  })
                  .catch(response => {
                    window.localStorage.removeItem('authUser')
                    if (response.status === 404) {
                      this.loading = false
                      this.$toastr.e('Active la cuenta en su correo')
                    }
                  })
              }
            })
            .catch(response => {
              this.loading = false
              if (response.status === 401) {
                this.$toastr.e('Usuario o contraseña incorrecto')
              }
            })
        }).catch(response => {
          this.loading = false
          console.log('response', response)
          if (response.status === 430) {
            this.$toastr.e('Este usuario ya existe')
          }
          // this.$toastr.e(`${response.data}`)
        })
    }
  }
}
</script>

<template>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" >
      <div class="modal-content" style="background-color: transparent; box-shadow: none">
        <!-- <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" @click="$emit('close')" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div> -->
        <div class="modal-body" >
          <!-- <pre>{{rechargeStore}}</pre> -->
          <ul class="nav nav-pills nav-pills-primary" role="tablist">
            <li class="nav-item">
              <a class="nav-link active pills" data-toggle="tab" href="#link1" role="tablist" aria-expanded="true" style="border-radius: 3px;">
                Iniciar Sesión
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link pills" data-toggle="tab" href="#link2" role="tablist" aria-expanded="false" style="border-radius: 3px;">
                Registrarse
              </a>
            </li>
          </ul>
          <div class="tab-content tab-space" style="padding-bottom: 0px">
              <div class="tab-pane active" id="link1" aria-expanded="true">
                <div class="row">
                  <div class="col-lg-12 col-md-12 ml-auto mr-auto">
                    <div class="card card-login" style="margin-bottom: 0px">
                      <form class="form" v-on:submit.prevent="handleLoginFormSubmit()" style="background-color: transparent">
                        <div class="card-header card-header-primary text-center">
                          <h4 class="card-title">Iniciar Sesión</h4>
                          <!-- <div class="social-line">
                            <a href="#pablo" class="btn btn-just-icon btn-link">
                              <i class="fa fa-facebook-square"></i>
                            </a>
                            <a href="#pablo" class="btn btn-just-icon btn-link">
                              <i class="fa fa-twitter"></i>
                            </a>
                            <a href="#pablo" class="btn btn-just-icon btn-link">
                              <i class="fa fa-google-plus"></i>
                            </a>
                          </div> -->
                        </div>
                        <!-- <p class="description text-center">Or Be Classical</p> -->
                        <div class="card-body">
                          <!-- <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                                <i class="material-icons">face</i>
                              </span>
                            </div>
                            <input type="text" class="form-control" placeholder="First Name...">
                          </div> -->
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                                <i class="material-icons">mail</i>
                              </span>
                            </div>
                            <input type="email" v-model="login.email" class="form-control" placeholder="Email...">
                          </div>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                                <i class="material-icons">lock_outline</i>
                              </span>
                            </div>
                            <input type="password" v-model="login.password" class="form-control" placeholder="Password...">
                          </div>
                        </div>
                        <!-- <div class="">
                           <router-link :to="{name: 'forgot-password'}" class="forgot-password">Forgot password</router-link>
                           <router-link :to="{name: 'register-user'}" class="register">Register</router-link>
                        </div> -->
                        <div class="footer text-center">
                          <div @click="handleLoginFormSubmit" class="btn btn-primary btn-link btn-wd btn-lg"><i v-show="loading" class="fa fa-circle-o-notch mr-1" style="font-size: inherit; vertical-align: unset;"></i>Iniciar Sesión</div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="link2" aria-expanded="false">
                <div class="row">
                  <div class="col-lg-12 col-md-12 ml-auto mr-auto">
                    <div class="card card-login" style="margin-bottom: 0px">
                      <form class="form" v-on:submit.prevent="handleRegisterFormSubmit()">
                        <div class="card-header card-header-primary text-center">
                          <h4 class="card-title">Register</h4>
                        </div>
                        <!-- <p class="description text-center">Or Be Classical</p> -->
                        <div class="card-body">
                          <!-- <p class="description text-center">Or Be Classical</p> -->
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                                <i class="material-icons">face</i>
                              </span>
                            </div>
                            <input type="email" v-model="register.name" class="form-control" placeholder="Nombre">
                          </div>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                                <i class="material-icons">mail</i>
                              </span>
                            </div>
                            <input type="email" v-model="register.email" class="form-control" placeholder="Correo">
                          </div>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                                <i class="material-icons">lock_outline</i>
                              </span>
                            </div>
                            <input type="password" v-model="register.password" class="form-control" placeholder="Contraseña">
                          </div>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                                <i class="material-icons">lock_outline</i>
                              </span>
                            </div>
                            <input type="password" v-model="register.confirm" class="form-control" placeholder="Confirmar Contraseña">
                          </div>
                        </div>

                        <div class="footer text-center">
                          <div @click="handleRegisterFormSubmit" class="btn btn-primary btn-link btn-wd btn-lg"><i v-show="loading" class="fa fa-circle-o-notch mr-1" style="font-size: inherit; vertical-align: unset;"></i>Registrarse</div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <!-- <div class="container"> -->

          <!-- </div> -->
        </div>
        <!-- <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="$emit('close')">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style media="screen">
  .pills {
   color: #fff;
   text-decoration: none;
   background-color: #ffffffd1;
   -webkit-text-decoration-skip: objects;
  }
  .pills:hover {
    color: #fff !important;
    background-color: #9c27b0 !important;
  }
  .center {
    align-items: center;
    flex-direction: column;
    display: flex;
  }
</style>
