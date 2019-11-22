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
import _ from 'lodash'

export default {
  data () {
    return {
      col: 0
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
      console.log(count)
      this.col = parseInt(count)
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
              <div class="card text-center" :class="'col-md-4'" v-for="offer in offerStore.offers" v-if="offer.type === 'Cell'" :key="offer.id" style="width: 20rem; float: none; margin-bottom: 10px; box-shadow: none">
                <div class="card-body">
                  <h4 class="card-title">Paga</h4>
                  <h3 class="card-title" style="color: #9c27b0">{{ offer.price_pay }} €</h3>
                  <hr style="color: #0056b2;" />
                  <h4 class="card-title">Recibe</h4>
                  <h3 class="card-title" style="color: #9c27b0">{{ offer.receive }}</h3>
                  <hr style="color: #0056b2;" />
                  <p class="card-title" style="align-text: justify">{{ offer.receive }} de bonificación, a consumir antes del {{ offer.date_expire }}</p>
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
</style>
