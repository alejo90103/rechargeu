<!--
@Author: Codeals
@Date:   28-08-2019
@Email:  ian@codeals.es
@Last modified by:   Codeals
@Last modified time: 07-09-2019
@Copyright: Codeals
-->

<template>
  <div class="main main-raised">
    <div class="section section-basic">
      <div class="content">
        <section class="header">
          <h1 class="page-title">Sells <small>Get your sells.</small></h1>
          <!-- <pre>{{sellStore.sells}}</pre> -->
        </section>

        <section class="content">
          <div class="row">
            <div class="col-md-2 col-sm-2 col-with-right-border">
              <!-- left sidebar -->
            </div>

            <div class="col-sm-10 col-md-10">

              <table class="table table-striped table-hover table-bordered table-condensed sell-table">
                <thead>
                  <th>Make</th>
                  <th>Model</th>
                  <th>Price Sold</th>
                  <th>Buyer By</th>
                  <th>Date</th>
                </thead>
                <tbody>
                  <tr v-bind:key="index" v-for="(sell, index) in sellStore.sells">
                    <td class="col-sm-2">{{sell.car.brand.name}}</td>
                    <td class="col-sm-2">
                      <router-link :to="{name: 'car-view', params: { carId: sell.car.id }}">{{sell.car.modelmake.name}}</router-link>
                    </td>
                    <td class="col-sm-2">{{sell.price}}</td>
                    <td class="col-sm-2">
                      <router-link :to="{name: 'chat', params: { userId: sell.buyer }}">{{sell.buyer.name}}</router-link>
                    </td>
                    <td class="col-sm-4">{{sell.date}}</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState({
      sellStore: state => state.sellStore
    })
  },
  created () {
    this.$store.dispatch('sellByUserUrl')
  },
  methods: {}
}
</script>
