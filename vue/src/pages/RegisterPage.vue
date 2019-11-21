<!--
@Author: Codeals
@Date:   19-08-2019
@Email:  ian@codeals.es
@Last modified by:   Codeals
@Last modified time: 07-09-2019
@Copyright: Codeals
-->

<template>

  <!-- <div class="image-container set-full-height" style="background-image: url('./wizard-profile.jpg')"> -->
  <div class="image-container set-full-height" :style="{'background-image': 'url(' + require('./../assets/img/98b20f06654c5e64c8602ddf3f31c6fd.jpg') + ')'}">
    <!--   Creative Tim Branding   -->
    <a href="http://codeals.es">
      <div class="logo-container">
        <div class="logo">
          <img src="http://codeals.es/img/codeals.png">
        </div>
        <div class="brand">
          Codeals
        </div>
      </div>
    </a>

    <!--  Made With Material Kit  -->
    <a href="http://codeals.es" class="made-with-mk">
      <div class="brand">CD</div>
      <div class="made-with">Made with <strong>Codeals</strong></div>
    </a>

    <!-- <pre>{{user}}</pre> -->

    <!--   Big container   -->
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2">
          <!--      Wizard container        -->
          <div class="wizard-container">
            <div class="card wizard-card" data-color="purple" id="wizardProfile">
              <form v-on:submit.prevent="handleFormSubmit()">
          <!--You can switch " data-color="purple" "  with one of the next bright colors: "green", "orange", "red", "blue"       -->

                <div class="wizard-header">
                  <h3 class="wizard-title">
                    Build Your Profile
                  </h3>
                  <h5>This information will let us know more about you.</h5>
                </div>
                <div class="wizard-navigation">
                  <ul>
                    <li><a href="#about" data-toggle="tab">About</a></li>
                    <li><a href="#account" data-toggle="tab">Account</a></li>
                    <li><a href="#address" data-toggle="tab">Address</a></li>
                    <li><a href="#payment" data-toggle="tab">Payment</a></li>
                    <li><a href="#confirm" data-toggle="tab">Comfirm</a></li>
                  </ul>
                </div>

                <div class="tab-content">
                  <div class="tab-pane" id="about">
                    <div class="row">
                        <h4 class="info-text"> Let's start with the basic information </h4>
                        <div class="col-sm-4 col-md-4 col-sm-offset-1">
                          <div class="picture-container">
                            <div class="picture">
                              <img src="./../assets/img/wizard/default-avatar.png" class="picture-src" id="wizardPicturePreview" title=""/>
                              <input type="file" id="wizard-picture">
                            </div>
                            <h6>Choose Picture</h6>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-6">
                          <div class="input-group">
                            <span class="input-group-addon">
                              <i class="material-icons">face</i>
                            </span>
                            <div class="form-group label-floating">
                              <label class="control-label">NIF <small>(required)</small></label>
                              <input name="nif1" v-model="user.nif" type="text" class="form-control">
                            </div>
                          </div>

                          <div class="input-group">
                            <span class="input-group-addon">
                              <i class="material-icons">record_voice_over</i>
                            </span>
                            <div class="form-group label-floating">
                              <label class="control-label">Name <small>(required)</small></label>
                              <input name="firstname1" v-model="user.name" type="text" class="form-control">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-10 col-sm-offset-1">
                          <div class="input-group">
                            <span class="input-group-addon">
                              <i class="material-icons">email</i>
                            </span>
                            <div class="form-group label-floating">
                              <label class="control-label">Email <small>(required)</small></label>
                              <input name="email1" v-model="user.email" type="email" class="form-control">
                            </div>
                          </div>
                          <div class="input-group">
                            <span class="input-group-addon">
                              <!-- <i class="material-icons">key</i> -->
                            </span>
                            <div class="form-group label-floating">
                              <label class="control-label">Password <small>(required)</small></label>
                              <input name="password1" v-model="user.password" type="password" class="form-control">
                            </div>

                            <span class="input-group-addon">
                              <!-- <i class="material-icons">key</i> -->
                            </span>
                            <div class="form-group label-floating">
                              <label class="control-label">Confirm <small>(required)</small></label>
                              <input name="confirm1" v-model="user.confirm_password" type="password" class="form-control">
                            </div>
                          </div>
                          <!-- <div class="input-group">
                            <span class="input-group-addon">
                              <i class="material-icons">key</i>
                            </span>
                            <div class="form-group label-floating">
                              <label class="control-label">Confirm Password <small>(required)</small></label>
                              <input name="email" v-model="user.confirm_password" type="password" class="form-control">
                            </div>
                          </div> -->
                        </div>
                      </div>
                  </div>
                  <div class="tab-pane" id="account">
                    <h4 class="info-text"> What are you doing? </h4>
                    <div class="row">
                      <div class="col-sm-10 col-sm-offset-1">
                        <div class="col-sm-4">
                          <div class="choice" data-toggle="wizard-radio">
                            <input type="radio" v-model="user.type" value="Basic">
                            <div class="icon">
                              <i class="fa fa-laptop"></i>
                            </div>
                            <h6>Basic</h6>

                            <div class="badge badge-pill badge-success">EUR 9.99 / month</div>
                            <div>Post your cars unlimited</div>
                            <div>See All Car Unlimited</div>
                            <div>Access the details of the cars only the first month</div>
                            <div>Contact other sellers the first month nothing more</div>
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="choice" data-toggle="wizard-radio">
                            <input type="radio" v-model="user.type" value="Advance">
                            <div class="icon">
                              <i class="fa fa-angellist"></i>
                            </div>
                            <h6>Advance</h6>

                            <div class="badge badge-pill badge-primary" style="background-color:#9c27b0">Pro</div>
                            <br>
                            <div class="badge badge-pill badge-success">EUR 24.99 / Month</div>
                            <div>Post your cars unlimited</div>
                            <div>See All Car Unlimited</div>
                            <div>Access the details of the cars unlimited</div>
                            <div>Contact other sellers unlimited</div>
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="choice" data-toggle="wizard-radio">
                            <input type="radio" v-model="user.type" value="Premium">
                            <div class="icon">
                              <i class="fa fa-connectdevelop"></i>
                            </div>
                            <h6>Premium</h6>

                            <div class="badge badge-pill badge-success">EUR 19.99 / Month</div>
                            <div>Post your cars unlimited</div>
                            <div>See All Car Unlimited</div>
                            <div>Access the details of the cars unlimited</div>
                            <div>Contact other sellers</div>
                            <div>Payment for the whole year a saving of 61 EUR</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="payment">
                    <h4 class="info-text"> Payment Account </h4>
                    <div class="row">
                      <div class="col-sm-10 col-sm-offset-1">

                        <h4 class="info-text">Aquí los metodos: <small>Los metodos de pago para la suscripcion.</small></h4>
                        <strong>tenemos que tener los terminos y condiciones incorporados tambien.</strong>
                        <small>Las politicas de seguridad tambien y que el usuario acepte todos los terminos de la app.</small>

                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="address">
                    <div class="row">
                      <div class="col-sm-12">
                        <h4 class="info-text"> Data advance? </h4>
                      </div>
                      <div class="col-sm-5 col-sm-offset-1">
                        <div class="form-group label-floating">
                          <label class="control-label">Autonomo Number</label>
                          <input type="text" class="form-control" v-model="user.autonomo_number">
                        </div>
                      </div>
                      <div class="col-sm-5">
                        <div class="form-group label-floating">
                            <label class="control-label">Phone</label>
                            <input type="text" class="form-control" v-model="user.phone">
                        </div>
                      </div>
                      <div class="col-sm-10 col-sm-offset-1">
                        <div class="form-group label-floating">
                          <label class="control-label">Address</label>
                          <input type="text" class="form-control" v-model="user.address">
                        </div>
                      </div>
                      <!-- <div class="col-sm-5">
                        <div class="form-group label-floating">
                          <label class="control-label">Country</label>
                            <select name="country" class="form-control">
                            <option disabled="" selected=""></option>
                            <option value="Afghanistan"> Afghanistan </option>
                            <option value="Albania"> Albania </option>
                            <option value="Algeria"> Algeria </option>
                            <option value="American Samoa"> American Samoa </option>
                            <option value="Andorra"> Andorra </option>
                            <option value="Angola"> Angola </option>
                            <option value="Anguilla"> Anguilla </option>
                            <option value="Antarctica"> Antarctica </option>
                            <option value="...">...</option>
                          </select>
                        </div>
                      </div> -->
                    </div>
                  </div>
                  <div class="tab-pane" id="confirm">
                    <h4 class="info-text"> Confirm </h4>
                    <div class="row">
                      <div class="col-sm-10 col-sm-offset-1">

                        <h4 class="info-text">Confirm: <small>Confirmar la suscripcion.</small></h4>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="wizard-footer">
                  <div class="pull-right">
                    <input type='button' class='btn btn-next btn-fill btn-wd btn-primary' name='next' value='Next' />
                    <input type='button' @click="handleFormSubmit" class='btn btn-finish btn-fill btn-primary btn-wd' name='finish' value='Finish' />
                  </div>

                  <div class="pull-left">
                    <input type='button' class='btn btn-previous btn-fill btn-default btn-wd' name='previous' value='Previous' />
                  </div>
                  <div class="clearfix"></div>
                </div>
              </form>
            </div>
          </div> <!-- wizard container -->
        </div>
      </div><!-- end row -->
    </div> <!--  big container -->

    <div class="footer">
      <div class="container text-center">
         Made by <i class="fa fa-heart heart"></i> by <a href="http://codeals.es">Codeals</a>. SelfCars <router-link :to="{name: 'home'}">here.</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {registerUserUrl} from './../config'
export default {
  data () {
    return {
      activeStep: 0,
      position: 1,
      user: {
        name: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        confirm_password: '',
        admin: 0,
        type: 'Basic',
        nif: '',
        autonomo_number: ''
      }
    }
  },
  methods: {
    handleFormSubmit () {
      var postData = {
        name: this.user.name,
        email: this.user.email,
        phone: this.user.phone,
        address: this.user.address,
        password: this.user.password,
        admin: 0,
        type: this.user.type,
        nif: this.user.nif,
        autonomo_number: this.user.autonomo_number,
        status: 0,
        url: 'http://localhost:8080'
      }
      this.$http.post(registerUserUrl, postData).then(response => {
        console.log('response', response)
        this.$toastr.s('We send a confirmation email to your email')

        // this.$router.push({name: 'home'})
      }).catch(response => {
        console.log('response', response)
        this.$toastr.e(`${response.data}`)
      })
    }
  }
}
</script>

<style lang="css">
  @import './../assets/css/bootstrap.min.css';
  @import './../assets/css/wizard/material-bootstrap-wizard.css';
  @import './../assets/css/wizard/demo.css';

</style>
