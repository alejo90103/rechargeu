<!--
@Author: alejandro
@Date:   2019-11-22T15:55:19+01:00
@Email:  alejo901003@hotmail.com
@Project: Recargame
@Last modified by:   alejandro
@Last modified time: 2019-11-25T02:53:30+01:00
-->

<script>

import {mapState} from 'vuex'
import _ from 'lodash'
import moment from 'moment'
import Timeline from './Timeline'
import Testimony from './Testimony'

export default {
  data () {
    return {
      col: '',
      now: moment(new Date()).format('YYYY/MM/DD'),
      moment
    }
  },
  components: {
    Timeline,
    Testimony
  },
  computed: {
    ...mapState({
      offerStore: state => state.offerStore
    })
  },
  methods: {
    setCol () {
      let count = 0
      _.forEach(this.offerStore.offers, function (offer, key) {
        if (offer.type === 'Cell') {
          count++
        }
      })
      if (count < 3) {
        this.col = 'margin: 0 auto'
      } else {
        this.col = ''
      }
    },
    recharge: function (offer) {
      this.$root.$emit('loadOffer', offer)
    }
  }
}
</script>

<template>
  <div v-bind="setCol()" class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12 center">
        <ul class="nav nav-pills nav-pills-icons" role="tablist">
          <!-- color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger" -->
          <li class="nav-item">
            <a class="nav-link active" href="#cell-info" role="tab" data-toggle="tab">
              <i class="material-icons">phone_iphone</i> Móvil
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#nauta-info" role="tab" data-toggle="tab">
              <i class="material-icons">wifi</i> Nauta
            </a>
          </li>
        </ul>
        <div class="tab-content tab-space col-lg-12">
          <div class="tab-pane active" id="cell-info">
            <div v-if="offerStore.offers.length > 0" class="row">
              <div class="card text-center col-md-4" :style="col" v-for="offer in offerStore.offers" v-if="offer.type === 'Cell' && offer.ads === 1" :key="offer.id" style="float: none; margin-bottom: 10px; box-shadow: none">
                <div class="card-body shadow">
                  <h4 class="card-title">Paga</h4>
                  <h2 class="card-title" style="color: #9c27b0; font-size: 28px">{{ offer.price_pay }} €</h2>
                  <hr style="color: #0056b2;" />
                  <h4 class="card-title">Recibe</h4>
                  <h2 class="card-title" style="color: #9c27b0; font-size: 28px">{{ offer.receive }}</h2>
                  <hr style="color: #0056b2;" />
                  <div class="row" style="display: -webkit-inline-box;">
                    <div class="col-md-1" style="display: contents;">
                      <i class="material-icons col-md-2" style="margin-top: 0.625rem; max-width: 0; color:#9c27b0"> check_circle </i>
                    </div>
                    <div class="col-md-10">
                      <h6  class="card-title" style="text-align: left">{{ offer.receive }} de bonificación, a consumir antes del {{ offer.date_expire }}</h6>
                    </div>
                  </div>
                  <div v-if="moment(now).isBetween(offer.date_ini, offer.date_end, null, '[]')" class="col-sm-12 mt-3">
                    <button type="button" v-on:click="recharge(offer)" class="btn btn-success btn-lg bold"><i class="material-icons bold">sentiment_satisfied_alt</i>    Recargame</button>
                  </div>
                  <div v-else class="col-sm-12 mt-3">
                    <router-link :to="{name: 'schedule'}" class="btn btn-warning btn-lg bold"><i class="material-icons bold">sentiment_satisfied_alt</i>    Programar</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane" id="nauta-info">

          </div>
          <Timeline></Timeline>
          <Testimony></Testimony>
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
  .shadow {
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 3px 20px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    padding: 25px;
    border-radius: 6px;
  }
</style>
