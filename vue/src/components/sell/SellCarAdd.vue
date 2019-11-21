<!--
@Author: Codeals
@Date:   28-08-2019
@Email:  ian@codeals.es
@Last modified by:   Codeals
@Last modified time: 28-08-2019
@Copyright: Codeals
-->

<script>
import {mapState} from 'vuex'

export default {
  props: {
    // method: { type: Function },
    car: {
      // type: Object,
      required: true
    },
    userList: {
      // type: Object,
      required: true
    }
  },
  computed: {
    ...mapState({
      sellStore: state => state.sellStore
    })
  },
  data () {
    return {
      sell: {
        // seller_id: '',
        // seller: {},
        buyer_id: '',
        buyer: {},
        car_id: this.car.id,
        car: this.car,
        price: '',
        observations: '',
        date: ''
      }
    }
  },
  methods: {
    handleFormSubmit () {
      this.$store.dispatch('getNomenclator')
      this.$store.dispatch('addSellCar', this.sell)
        .then(response => {
          this.$router.push({name: 'sell-car-list'})
        })

      // console.log(this.sell)
    }
  }
}
</script>

<template lang="html">
  <div class="add-sell-car">
    <h1>Sell your car <small>Select user</small></h1>

    <section class="content">
      <div class="row">
        <div class="col-md-2 col-sm-2 col-with-right-border">
          <!-- <private-message-sidebar></private-message-sidebar> -->
        </div>

        <div class="col-sm-8">
          <div id="car-form-wrapper">

            <!-- <pre>{{sell}}</pre> -->

            <form v-on:submit.prevent="handleFormSubmit()">

              <!-- <input type="hidden" v-model="car.user" class="form-control"> -->
              <div class="form-group">
                <!-- <pre>{{pm}}</pre> -->
                <label>Select a Buyer</label>
                <multiselect
                  v-model="sell.buyer_id"
                  :options="userList"
                  :searchable="true"
                  :close-on-select="true"
                  :show-labels="false"
                  track-by="id"
                  label="name"
                  placeholder="Select a Buyer">
                </multiselect>
              </div>
              <div class="form-group">
                <label for="">Price</label>
                <input type="text" v-model="sell.price" class="form-control" placeholder="Enter price">
              </div>
              <div class="form-group">
                <label for="">Observations</label>
                <input type="text" v-model="sell.observations" class="form-control" placeholder="Enter observations">
              </div>
              <div class="form-group">
                <label for="">Date</label>
                <input type="date" v-model="sell.date" class="form-control" placeholder="YYYY/MM/DD">
              </div>

              <button class="btn btn-primary">
                <i class="fa fa-save"></i> Sell
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>
