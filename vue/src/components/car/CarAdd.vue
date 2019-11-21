<!--
@Author: Codeals
@Date:   10-08-2019
@Email:  ian@codeals.es
@Last modified by:   Codeals
@Last modified time: 07-09-2019
@Copyright: Codeals
-->

<script>
// import PrivateMessageSidebar from './PrivateMessageSidebar'
import {mapState} from 'vuex'

export default {
  components: {
    // 'private-message-sidebar': PrivateMessageSidebar
  },
  created () {
    this.$store.dispatch('getNomenclator')
  },
  computed: {
    ...mapState({
      carStore: state => state.carStore
    })
  },
  data () {
    return {
      // brand: {},
      // modelmake: {},
      car: {
        id: '',
        modelmake: {
          'id': '',
          'name': ''
        },
        brand: {
          'id': '',
          'name': ''
        },
        user: {
          'id': '',
          'email': ''
        },
        visible: '',
        price: '',
        year: '',
        body_style: '',
        mileage: '',
        fuel_economy: '',
        transmission: '',
        condition: '',
        drivetrain: '',
        engine: '',
        exterior_color: '',
        interior_color: '',
        stock_number: '',
        vin_number: '',
        image: '',
        features: ''
      }
    }
  },
  methods: {
    handleFormSubmit () {
      this.$store.dispatch('addCar', this.car)
        .then(response => {
          this.$router.push({name: 'car-list'})
        })
    }
  }
}
</script>

<template>
  <div class="main main-raised">
    <div class="section section-basic">
      <div class="content">
        <section class="header">
          <h1 class="page-title">Car - View <small>Add.</small></h1>
        </section>

        <section class="content">
          <div class="row">
            <div class="col-md-2 col-sm-2 col-with-right-border">
              <!-- <private-message-sidebar></private-message-sidebar> -->
            </div>

            <div class="col-sm-8">
              <div id="car-form-wrapper">

                <!-- <pre>{{car}}</pre> -->

                <form v-on:submit.prevent="handleFormSubmit()">

                  <input type="hidden" v-model="car.id" class="form-control">
                  <!-- <input type="hidden" v-model="car.user" class="form-control"> -->
                  <div class="form-group">
                    <!-- <pre>{{pm}}</pre> -->
                    <label>Select a Make</label>
                    <multiselect
                      v-model="car.brand"
                      :options="carStore.makes"
                      :searchable="true"
                      :close-on-select="true"
                      :show-labels="false"
                      track-by="id"
                      label="name"
                      placeholder="Select a Make">
                    </multiselect>
                  </div>
                  <div class="form-group">
                    <!-- <pre>{{pm}}</pre> -->
                    <label>Select a Model</label>
                    <multiselect
                      v-model="car.modelmake"
                      :options="carStore.modelmakes"
                      :searchable="true"
                      :close-on-select="true"
                      :show-labels="false"
                      track-by="id"
                      label="name"
                      placeholder="Select a Model">
                    </multiselect>
                  </div>
                  <div class="form-group">
                    <label for="">Price</label>
                    <input type="text" v-model="car.price" class="form-control" placeholder="Enter price">
                  </div>
                  <div class="form-group">
                    <label for="">Year</label>
                    <input type="text" v-model="car.year" class="form-control" placeholder="Enter year">
                  </div>
                  <div class="form-group">
                    <label for="">Body Style</label>
                    <input type="text" v-model="car.body_style" class="form-control" placeholder="Enter body style">
                  </div>
                  <div class="form-group">
                    <label for="">Mileage</label>
                    <input type="text" v-model="car.mileage" class="form-control" placeholder="Enter mileage">
                  </div>
                  <div class="form-group">
                    <label for="">Fuel Type</label>
                    <input type="text" v-model="car.fuel_type" class="form-control" placeholder="Enter fuel type">
                  </div>
                  <div class="form-group">
                    <label for="">Fuel Economy</label>
                    <input type="text" v-model="car.fuel_economy" class="form-control" placeholder="Enter fuel economy">
                  </div>
                  <div class="form-group">
                    <label for="">Transmission</label>
                    <input type="text" v-model="car.transmission" class="form-control" placeholder="Enter transmission">
                  </div>
                  <div class="form-group">
                    <label for="">Condition</label>
                    <input type="text" v-model="car.condition" class="form-control" placeholder="Enter condition">
                  </div>
                  <div class="form-group">
                    <label for="">Drivetrain</label>
                    <input type="text" v-model="car.drivetrain" class="form-control" placeholder="Enter drivetrain">
                  </div>
                  <div class="form-group">
                    <label for="">engine</label>
                    <input type="text" v-model="car.engine" class="form-control" placeholder="Enter engine">
                  </div>
                  <div class="form-group">
                    <label for="">exterior_color</label>
                    <input type="text" v-model="car.exterior_color" class="form-control" placeholder="Enter exterior color">
                  </div>
                  <div class="form-group">
                    <label for="">Interior Color</label>
                    <input type="text" v-model="car.interior_color" class="form-control" placeholder="Enter interior color">
                  </div>
                  <div class="form-group">
                    <label for="">Stock Number</label>
                    <input type="text" v-model="car.stock_number" class="form-control" placeholder="Enter stock number">
                  </div>
                  <div class="form-group">
                    <label for="">Vin Number</label>
                    <input type="text" v-model="car.vin_number" class="form-control" placeholder="Enter vin number">
                  </div>
                  <div class="form-group">
                    <label for="">Features</label>
                    <input type="text" v-model="car.features" class="form-control" placeholder="Enter features">
                  </div>

                  <button class="btn btn-primary">
                    <i class="fa fa-save"></i> Add
                  </button>
                </form>

              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
