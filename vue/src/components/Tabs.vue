<!--
@Author: alejandro
@Date:   2019-11-21T13:50:24+01:00
@Email:  alejo901003@hotmail.com
@Project: Recargame
@Last modified by:   alejandro
@Last modified time: 2019-11-23T16:27:40+01:00
-->

<script>
import {mapState} from 'vuex'
import {apiDomain} from './../../config'
// import ModalRegister from './ModalRegister'

export default {
  data () {
    return {
      type: 'cell',
      cell: {
        number: '',
        offer_id: '',
        call: 'rechargeCell'
      },
      nauta: {
        email: '',
        offer_id: '',
        call: 'rechargeNauta'
      },
      server: apiDomain
    }
  },
  // components: {
  //   ModalRegister
  // },
  computed: {
    ...mapState({
      userStore: state => state.userStore,
      rechargeStore: state => state.rechargeStore,
      offerStore: state => state.offerStore
    })
  },
  methods: {
    changeRecharge (val) {
      this.type = val
    },
    handleSubmit () {
      if (this.type === 'cell') {
        if (!this.cell.number) {
          this.$toastr.e('Debe ingresar un número')
          return
        } else if (!this.cell.offer_id) {
          this.$toastr.e('Debe selecionar una oferta')
          return
        }
        if (!this.validateNumber(this.cell.number)) {
          this.$toastr.e('Número invalido')
          return
        }
        this.$store.dispatch('setRecharge', this.cell)
      } else {
        if (!this.nauta.email) {
          this.$toastr.e('Debe ingresar un correo')
          return
        } else if (!this.nauta.offer_id) {
          this.$toastr.e('Debe selecionar una oferta')
          return
        }
        if (!this.validateEmail(this.nauta.email)) {
          this.$toastr.e('Email invalido')
          return
        }
        this.$store.dispatch('setRecharge', this.nauta)
      }
      if (this.userStore.authUser === null) {
        console.log('no logueado')
        console.log('show popup')
        $('#exampleModal').modal('show')
        $('.modal-backdrop').css('opacity', '1')
        this.cell.number = ''
        this.cell.offer_id = ''
        this.nauta.email = ''
        this.nauta.offer_id = ''
      } else {
        this.$store.dispatch(this.rechargeStore.recharge.call)
          .then(response => {
            this.cell.number = ''
            this.cell.offer_id = ''
            this.nauta.email = ''
            this.nauta.offer_id = ''
            if (response.status === 201) {
              this.$toastr.s('Recarga realizada correctamente')
              this.$router.push({name: 'home'})
            } else {
              this.$toastr.e('ERROR en la recarga :( ')
              this.$router.push({name: 'home'})
            }
          })
      }
    },
    validateEmail (email) {
      var regularExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+@nauta.(?:com|co).cu$/
      return regularExp.test(email)
    },
    validateNumber (number) {
      var regularExp = /^([0-9]{8})$/
      return regularExp.test(number)
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5 ml-auto mr-auto">
        <div class="brand">
          <div id="nav-tabs">
            <div class="row">
              <div class="col-md-12">
                <!-- <pre>{{rechargeStore}}</pre> -->
                <!-- Tabs with icons on Card -->
                <div class="card card-nav-tabs">
                  <div class="card-header card-header-primary center">
                    <div class="nav-tabs-navigation">
                      <div class="nav-tabs-wrapper">
                        <ul class="nav nav-tabs" data-tabs="tabs">
                          <li class="nav-item">
                            <a class="nav-link active" v-on:click="changeRecharge('cell')" href="#cell" data-toggle="tab">
                              <i class="material-icons">phone_iphone</i> Móvil
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" v-on:click="changeRecharge('nauta')" href="#nauta" data-toggle="tab">
                              <i class="material-icons">wifi</i> Nauta
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="card-body ">
                    <div class="tab-content text-center">
                      <div  class="tab-pane active" id="cell">
                        <div class="form-row">
                          <div class="form-group col-md-12">
                            <div class="input-group-prepend">
                              <div class="input-group-text" style="color: #000; font-weight: 200; font-size: 25px;">+53</div>
                              <input type="number" v-model="cell.number" style="font-size: 25px; text-align: center; font-weight: 200; height: auto;" class="form-control" placeholder="">
                            </div>
                          </div>
                          <div class="form-group col-md-12">
                            <div class="input-group-prepend">
                              <div class="input-group-text" style="color: #000; font-weight: 200; font-size: 25px; margin-left: 10px; width: 40px">€</div>
                              <select v-model="cell.offer_id" style="font-size: 25px; text-align: center; font-weight: 200; height: auto; text-align-last: center" class="form-control">
                                <!-- <option selected>Selecciona una oferta</option> -->
                                <option v-for="offer in offerStore.offers" v-if="offer.type === 'Cell'" :value="offer.id" :key="offer.id">
                                  {{ offer.name }}
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane" id="nauta">
                        <div class="form-row">
                          <div class="form-group col-md-12">
                            <div class="input-group-prepend">
                              <div class="input-group-text" style="color: #000; font-weight: 200; font-size: 25px; margin-left: 10px; width: 40px">@</div>
                              <input type="email" v-model="nauta.email" style="font-size: 25px; text-align: center; font-weight: 200; height: auto;" class="form-control" placeholder="">
                            </div>
                          </div>
                          <div class="form-group col-md-12">
                            <div class="input-group-prepend">
                              <div class="input-group-text" style="color: #000; font-weight: 200; font-size: 25px; margin-left: 10px; width: 40px">€</div>
                              <select v-model="nauta.offer_id" style="font-size: 25px; text-align: center; font-weight: 200; height: auto; text-align-last: center" class="form-control">
                                <option v-for="offer in offerStore.offers" v-if="offer.type === 'Nauta'" :value="offer.id" :key="offer.id">
                                  {{ offer.name }}
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button type="button" v-on:click="handleSubmit()" class="btn btn-success btn-lg">Success</button>
                    </div>
                  </div>
                </div>
                <!-- End Tabs with icons on Card -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <ModalRegister v-if="showModal" @close="close"></ModalRegister> -->
    <!-- <ModalRegister @close="close"></ModalRegister> -->
  </div>
</template>

<style lang="css" scoped>
  .center {
    align-items: center;
    flex-direction: column;
    display: flex;
  }
</style>
