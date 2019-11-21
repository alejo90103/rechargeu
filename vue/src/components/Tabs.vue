<!--
@Author: Codeals
@Date:   05-08-2019
@Email:  ian@codeals.es
@Last modified by:   Codeals
@Last modified time: 07-09-2019
@Copyright: Codeals
-->

<script>
import {mapState} from 'vuex'
import {apiDomain} from './../../config'
import ModalRegister from './ModalRegister'

export default {
  data () {
    return {
      type: 'cell',
      cell: {
        number: '',
        offert: ''
      },
      nauta: {
        email: '',
        offert: ''
      },
      server: apiDomain
    }
  },
  components: {
    ModalRegister
  },
  computed: {
    ...mapState({
      userStore: state => state.userStore
    })
  },
  methods: {
    changeRecharge (val) {
      this.type = val
    },
    handleSubmit () {
      if (this.userStore.authUser === null) {
        console.log('no logueado')
        console.log('show popup')
      } else {
        console.log('logueado')
        if (this.type === 'cell') {
          // recargar cell
          console.log('Cell')
          console.log(this.cell.number)
          console.log(this.cell.offert)
        } else {
          // recargar nauta
          console.log('Nauta')
          console.log(this.cell.email)
          console.log(this.cell.offert)
        }
      }
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
                <!-- <pre>{{url}}</pre> -->
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
                              <select v-model="cell.offert" style="font-size: 25px; text-align: center; font-weight: 200; height: auto; text-align-last: center" class="form-control">
                                <option selected>Choose...</option>
                                <option value="20">De 20 a 40</option>
                                <option value="40">De 40 a 80</option>
                                <option value="50">De 50 a 100</option>
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
                              <select v-model="nauta.offert" style="font-size: 25px; text-align: center; font-weight: 200; height: auto; text-align-last: center" class="form-control">
                                <option selected>Choose...</option>
                                <option value="20">De 20 a 40</option>
                                <option value="40">De 40 a 80</option>
                                <option value="50">De 50 a 100</option>
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
  </div>
</template>

<style lang="css" scoped>
  .center {
    align-items: center;
    flex-direction: column;
    display: flex;
  }
</style>
