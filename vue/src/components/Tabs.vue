<!--
@Author: alejandro
@Date:   2019-11-21T13:50:24+01:00
@Email:  alejo901003@hotmail.com
@Project: Recargame
@Last modified by:   alejandro
@Last modified time: 2019-11-27T01:07:53+01:00
-->

<script>
import {mapState, mapGetters} from 'vuex'
import {apiDomain} from './../../config'
import moment from 'moment'

export default {
  data () {
    return {
      type: 'cell',
      cell: {
        name: '',
        phone: '',
        offer_id: '',
        call: 'rechargeCell'
      },
      nauta: {
        name: '',
        email: '',
        offer_id: '',
        call: 'rechargeNauta'
      },
      choose_offer_cell: '',
      choose_offer_nauta: '',
      server: apiDomain,
      now: moment(new Date()).format('YYYY/MM/DD'),
      moment
    }
  },
  computed: {
    ...mapState({
      userStore: state => state.userStore,
      rechargeStore: state => state.rechargeStore,
      offerStore: state => state.offerStore
    }),
    ...mapGetters({
      optionsCell: 'getCellOffers',
      optionsNauta: 'getNautaOffers'
    })
  },
  methods: {
    changeRecharge (val) {
      this.type = val
    },
    handleSubmit () {
      if (this.type === 'cell') {
        if (!this.cell.name) {
          this.$toastr.e('Debe ingresar un nombre')
          return
        } else if (!this.cell.phone) {
          this.$toastr.e('Debe ingresar un número')
          return
        } else if (!this.choose_offer_cell.id) {
          this.$toastr.e('Debe selecionar una oferta')
          return
        }
        if (!this.validateNumber(this.cell.phone)) {
          this.$toastr.e('Número invalido')
          return
        }
        this.cell.offer_id = this.choose_offer_cell.id
        this.$store.dispatch('setRecharge', this.cell)
      } else {
        if (!this.nauta.name) {
          this.$toastr.e('Debe ingresar un nombre')
          return
        } else if (!this.nauta.email) {
          this.$toastr.e('Debe ingresar un correo')
          return
        } else if (!this.choose_offer_nauta.id) {
          this.$toastr.e('Debe selecionar una oferta')
          return
        }
        if (!this.validateEmail(this.nauta.email)) {
          this.$toastr.e('Email invalido')
          return
        }
        this.nauta.offer_id = this.choose_offer_nauta.id
        this.$store.dispatch('setRecharge', this.nauta)
      }
      if (this.userStore.authUser === null) {
        console.log('no logueado')
        console.log('show popup')
        $('#exampleModal').modal('show')
        $('.modal-backdrop').css('opacity', '1')
      } else {
        this.$store.dispatch(this.rechargeStore.recharge.call)
          .then(response => {
            if (response.status === 201) {
              // this.$toastr.s('Recarga realizada correctamente')
              this.$router.push({name: 'payment'})
            } else {
              this.$toastr.e('ERROR en la recarga :( ')
              this.$router.push({name: 'dashboard'})
            }
          })
      }
    },
    validateEmail (email) {
      var regularExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+@nauta.(?:com|co).cu$/
      return regularExp.test(email)
    },
    validateNumber (phone) {
      var regularExp = /^([0-9]{8})$/
      return regularExp.test(phone)
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
                          <div class="form-group col-md-12" style="padding-top: 0px;">
                            <div class="input-group-prepend row">
                              <div class="input-group-text col-md-2" style="color: #000; font-weight: 200; font-size: 25px;">ABC</div>
                              <input type="text" v-model="cell.name" style="font-size: 25px; text-align: center; font-weight: 200; height: auto;" class="form-control col-md-10" placeholder="Nombre">
                            </div>
                          </div>
                          <div class="form-group col-md-12" style="padding-top: 0px;">
                            <div class="input-group-prepend row">
                              <div class="input-group-text col-md-2" style="color: #000; font-weight: 200; font-size: 25px;">+53</div>
                              <input type="number" v-model="cell.phone" style="font-size: 25px; text-align: center; font-weight: 200; height: auto;" class="form-control col-md-10" placeholder="Teléfono">
                            </div>
                          </div>
                          <div class="form-group col-md-12">
                            <div class="input-group-prepend row">
                              <div class="input-group-text col-md-2" style="color: #000; font-weight: 200; font-size: 25px; padding-left: 10px">€</div>
                              <div class="col-md-10 material-select">
                                <multiselect v-model="choose_offer_cell" placeholder="Seleccione una oferta" :allowEmpty="false" label="name" track-by="name" :option-height="104" :options="optionsCell" :show-labels="false">
                                  <template slot="singleLabel" slot-scope="props">
                                    <div class="option__desc">
                                      <span class="option__title" style="font-size: 25px;">{{props.option.name}}</span>
                                      <br>
                                      <span class="option__small" style="font-size: 18px;">{{props.option.date_expire}}</span>
                                    </div>
                                  </template>
                                  <template slot="option" slot-scope="props">
                                    <div class="option__desc">
                                      <span class="option__title">{{props.option.name}}</span>
                                      <br>
                                      <span class="option__small">{{props.option.date_expire}}</span>
                                    </div>
                                  </template>
                                </multiselect>
                              </div>
                              <!-- <select v-model="cell.offer_id" style="margin: 0; font-size: 25px; text-align: center; font-weight: 200; height: auto; text-align-last: center" class="form-control col-md-10 selectpicker_cell">
                                <option v-for="offer in offerStore.offers" v-if="offer.type === 'Cell' && moment(now).isBetween(offer.date_ini, offer.date_end, null, '[]')" :data-content="offer.name + '<br> EXP: ' + offer.date_expire" :value="offer.id" :key="offer.id">
                                  {{ offer.name }}
                                </option>
                              </select> -->
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane" id="nauta">
                        <div class="form-row">
                          <div class="form-group col-md-12" style="padding-top: 0px;">
                            <div class="input-group-prepend row">
                              <div class="input-group-text col-md-2" style="color: #000; font-weight: 200; font-size: 25px;">ABC</div>
                              <input type="text" v-model="nauta.name" style="font-size: 25px; text-align: center; font-weight: 200; height: auto;" class="form-control col-md-10" placeholder="Nombre">
                            </div>
                          </div>
                          <div class="form-group col-md-12" style="padding-top: 0px;">
                            <div class="input-group-prepend row">
                              <div class="input-group-text col-md-2" style="color: #000; font-weight: 200; font-size: 25px; padding-left: 10px">@</div>
                              <input type="email" v-model="nauta.email" style="font-size: 25px; text-align: center; font-weight: 200; height: auto;" class="form-control col-md-10" placeholder="Nauta">
                            </div>
                          </div>
                          <div class="form-group col-md-12">
                            <div class="input-group-prepend row">
                              <div class="input-group-text col-md-2" style="color: #000; font-weight: 200; font-size: 25px; padding-left: 10px">€</div>
                              <div class="col-md-10 material-select">
                                <multiselect v-model="choose_offer_nauta" placeholder="Seleccione una oferta" :allowEmpty="false" label="name" track-by="name" :option-height="104" :options="optionsNauta" :show-labels="false">
                                  <template slot="singleLabel" slot-scope="props">
                                    <div class="option__desc">
                                      <span class="option__title" style="font-size: 25px;">{{props.option.name}}</span>
                                      <br>
                                      <span class="option__small" style="font-size: 18px;">{{props.option.date_expire}}</span>
                                    </div>
                                  </template>
                                  <template slot="option" slot-scope="props">
                                    <div class="option__desc">
                                      <span class="option__title">{{props.option.name}}</span>
                                      <br>
                                      <span class="option__small">{{props.option.date_expire}}</span>
                                    </div>
                                  </template>
                                </multiselect>
                              </div>
                              <!-- <select v-model="nauta.offer_id" style="font-size: 25px; text-align: center; font-weight: 200; height: auto; text-align-last: center" class="form-control col-md-10">
                                <option v-for="offer in offerStore.offers" v-if="offer.type === 'Nauta' && moment(now).isBetween(offer.date_ini, offer.date_end, null, '[]')" :value="offer.id" :key="offer.id">
                                  {{ offer.name }}
                                </option>
                              </select> -->
                            </div>
                          </div>
                        </div>
                      </div>
                      <button type="button" v-on:click="handleSubmit()" class="btn btn-success btn-lg bold"><i class="material-icons bold">sentiment_satisfied_alt</i>    Recargame</button>
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
  .material-select {
    background-image: linear-gradient(to top, rgba(210, 210, 210, 0) 1px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #d2d2d2 1px, rgba(210, 210, 210, 0) 1px);
  }
  .center {
    align-items: center;
    flex-direction: column;
    display: flex;
  }
</style>
