<!--
@Author: alejandro
@Date:   2019-11-22T15:55:19+01:00
@Email:  alejo901003@hotmail.com
@Project: Recargame
@Last modified by:   alejandro
@Last modified time: 2019-11-23T14:17:31+01:00
-->

<script>

import {mapState} from 'vuex'
import _ from 'lodash'

export default {
  data () {
    return {
      col: ''
    }
  },
  components: {

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
            <div class="row">
              <!-- <pre>{{col}}</pre> -->
              <div class="card text-center col-md-4" :style="col" v-for="offer in offerStore.offers" v-if="offer.type === 'Cell'" :key="offer.id" style="width: 20rem; float: none; margin-bottom: 10px; box-shadow: none">
                <div class="card-body shadow">
                  <h4 class="card-title">Paga</h4>
                  <h2 class="card-title" style="color: #9c27b0">{{ offer.price_pay }} €</h2>
                  <hr style="color: #0056b2;" />
                  <h4 class="card-title">Recibe</h4>
                  <h2 class="card-title" style="color: #9c27b0">{{ offer.receive }}</h2>
                  <hr style="color: #0056b2;" />
                  <div class="row" style="display: -webkit-inline-box;">
                    <i class="material-icons col-md-1" style="margin-top: 0.625rem; max-width: 0; color:#9c27b0"> check_circle </i>
                    <p class="card-title col-md-11" style="text-align: left">{{ offer.receive }} de bonificación, a consumir antes del {{ offer.date_expire }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane" id="nauta-info">

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
  .shadow {
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 3px 20px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    padding: 25px;
    border-radius: 6px;
  }
</style>
