<!--
@Author: Codeals
@Date:   10-08-2019
@Email:  ian@codeals.es
@Last modified by:   Codeals
@Last modified time: 20-08-2019
@Copyright: Codeals
-->

<script>
export default {
  data () {
    return {
      make: {},
      modelmake: {}
    }
  },
  computed: {
    year: {
      get () {
        return this.$store.state.carStore.filter.year
      },
      set (val) {
        this.$store.commit('SET_SEARCH_YEAR', val)
      }
    },
    mileage: {
      get () {
        return this.$store.state.carStore.filter.mileage
      },
      set (val) {
        this.$store.commit('SET_SEARCH_MILEAGE', val)
      }
    },
    fuel_type: {
      get () {
        return this.$store.state.carStore.filter.fuel_type
      },
      set (val) {
        this.$store.commit('SET_SEARCH_FUEL_TYPE', val)
      }
    },
    transmission: {
      get () {
        return this.$store.state.carStore.filter.transmission
      },
      set (val) {
        this.$store.commit('SET_SEARCH_TRANSMISSION', val)
      }
    },
    exterior_color: {
      get () {
        return this.$store.state.carStore.filter.exterior_color
      },
      set (val) {
        this.$store.commit('SET_SEARCH_EXTERIOR_COLOR', val)
      }
    }
  },
  methods: {
    changeMake () {
      this.$store.commit('SET_SEARCH_BRAND', this.make.id)
    },
    changeModelMake () {
      this.$store.commit('SET_SEARCH_MODELMAKE', this.modelmake.id)
    }
  },
  destroyed () {
    this.$store.commit('CLEAR_CAR_LIST')
  }
}
</script>

<template>
  <div class="sidebar-car-search">
    <!-- <pre>{{listCar}}</pre> -->
    <div class="form-group">
      <label for="">Price</label>
      <input type="range" class="form-control" placeholder="Enter price">
    </div>
    <div class="form-group">

      <label for="">Make</label>
      <multiselect
        v-model="make"
        :options="this.$store.state.carStore.makes"
        :searchable="true"
        :close-on-select="true"
        :show-labels="false"
        v-on:input="changeMake"
        track-by="id"
        label="name"
        placeholder="Select a Make">
      </multiselect>
    </div>
    <div class="form-group">
      <!-- <pre>{{make}}</pre> -->
      <label for="">Model</label>
      <multiselect
        v-model="modelmake"
        :options="this.$store.state.carStore.modelmakes"
        :searchable="true"
        :close-on-select="true"
        :show-labels="false"
        v-on:input="changeModelMake"
        track-by="id"
        label="name"
        placeholder="Select a Make">
      </multiselect>
    </div>
    <div class="form-group">
      <label for="">Year</label>
      <input type="number" v-model="year" class="form-control" placeholder="Enter year">
    </div>
    <div class="form-group">
      <label for="">Fuel Type</label>
      <input type="text" v-model="fuel_type" class="form-control" placeholder="Enter fuel type">
    </div>
    <div class="form-group">
      <label for="">Mileage less than</label>
      <input type="number" class="form-control" v-model="mileage" placeholder="Enter mileage">
    </div>
    <div class="form-group">
      <label for="">Transmission</label>
      <input type="text" v-model="transmission" class="form-control" placeholder="Enter transmission">
    </div>
    <div class="form-group">
      <label for="">Exterior Color</label>
      <input type="text" v-model="exterior_color" class="form-control" placeholder="Enter exterior color">
    </div>
  </div>
</template>
