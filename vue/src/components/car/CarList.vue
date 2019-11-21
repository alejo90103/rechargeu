<!--
@Author: Codeals
@Date:   10-08-2019
@Email:  ian@codeals.es
@Last modified by:   Codeals
@Last modified time: 09-09-2019
@Copyright: Codeals
-->

<script>
import CarSidebar from './CarSidebar'
import CarItemGrid from './CarItemGrid'
import {apiDomain} from './../../config'
import {mapState, mapGetters} from 'vuex'

export default {
  components: {
    'car-search-sidebar': CarSidebar,
    'car-item-grid': CarItemGrid
  },
  data () {
    return {
      carFirst: [],
      own: false,
      fullFirst: false,
      carSecound: [],
      fullSecound: false,
      compareView: false,
      gridView: true,
      server: apiDomain
    }
  },
  computed: {
    ...mapState({
      carStore: state => state.carStore,
      userStore: state => state.userStore
    }),
    ...mapGetters({
      listCar: 'filteredCar'
    })
  },
  created () {
    this.$store.dispatch('getCarList')
    this.$store.dispatch('getNomenclator')
  },
  methods: {
    changeOwn () {
      this.own = !this.own

      if (this.own === true) {
        this.$store.commit('SET_SEARCH_OWN', this.userStore.authUser.email)
      } else {
        this.$store.commit('SET_SEARCH_OWN', '')
      }
    },
    changeView (val) {
      this.gridView = val
    },
    viewCompareCars (car) {
      if (this.fullFirst === false) {
        this.carFirst = car
        this.fullFirst = true
      } else if (this.fullFirst === true && this.carFirst.id === car.id) {
        this.carFirst = []
        this.fullFirst = false
      } else {
        this.carSecound = car
        this.fullSecound = true
        this.compareView = true
      }
    },
    viewListCars (car) {
      if (this.carFirst.id === car.id) {
        this.carFirst = []
        this.fullFirst = false
      } else {
        this.carSecound = []
        this.fullSecound = false
      }

      if (this.fullFirst === false && this.fullSecound === false) {
        this.compareView = false
      }
    },
    deleteCar (car) {
      // this.$store.dispatch('deleteCar', car)
      //   .then(response => {
      //     this.$router.push({name: 'car-list'})
      //   })
      console.log(car)
    }
  }
}
</script>

<template>
  <div class="main main-raised">
    <div class="section section-basic">
      <div class="content">

        <div class="Car Car-List">
          <section class="header">
            <h1 class="page-title">Car - Lisr <small>All Cars.</small></h1>
          </section>

          <!-- <section class="action-msg">
            <div class="msg" id="msg"></div>
          </section> -->

          <section class="content">
            <div class="row">
              <div class="col-md-2 col-sm-2 col-with-right-border">
                <car-search-sidebar></car-search-sidebar>
              </div>

              <div class="col-lg-10 col-md-12">
                  <ul class="nav nav-pills nav-pills-icons" role="tablist">
                    <!--
                                    color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger"
                                -->
                    <li class="nav-item">
                      <a class="nav-link active show" href="#dashboard-1" v-on:click="changeView(true)" role="tab" data-toggle="tab" aria-selected="true">
                        <i class="material-icons">dashboard</i> Grid View
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#tasks-1" role="tab" v-on:click="changeView(false)" data-toggle="tab" aria-selected="false">
                        <i class="material-icons">list</i> List View
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#schedule-1" role="tab" data-toggle="tab" aria-selected="false">
                        <i class="material-icons">schedule</i> Compared
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content tab-space">
                    <div class="tab-pane active show" id="dashboard-1">

                      <div class="options-car row" align="right">
                        <div class="col-md-8">
                        </div>
                        <div class="col-md-2">
                          <label v-on:click="changeOwn" for="">{{own === true? 'All cars': 'My cars'}}</label>
                        </div>
                        <div class="col-md-1">
                          <router-link :to="{name: 'car-add'}">Add</router-link>
                        </div>
                      </div>

                      <!-- compare component -->
                      <div v-if="gridView === true" class="car-grid-list">
                        <car-item-grid :user="userStore" :car="car" :server="server" v-bind:key="car.id" v-for="car in listCar" @send-car-delete="deleteCar" @send-car-compare="viewCompareCars"></car-item-grid>

                      </div>
                    </div>

                    <div class="tab-pane" id="tasks-1">
                      <div class="col-sm-12 col-md-12" v-if="gridView !== true">
                        <!-- <div class="change-view" v-on:click="changeView()">Chande View</div> -->
                        <div class="options-car row" align="right">
                          <div class="col-md-8">
                          </div>
                          <div class="col-md-2">
                            <label v-on:click="changeOwn" for="">{{own === true? 'All cars': 'My cars'}}</label>
                          </div>
                          <div class="col-md-1">
                            <router-link :to="{name: 'car-add'}">Add</router-link>
                          </div>
                        </div>

                        <table v-if="gridView !== true" class="table table-striped table-hover table-bordered table-condensed message-table">
                          <thead>
                            <th width="200">Image</th>
                            <th width="200">Make</th>
                            <th width="200">Model</th>
                            <th width="50">Price</th>
                            <th width="50">Mileage</th>
                            <th width="400">Action</th>
                          </thead>
                          <tbody>

                            <tr v-bind:key="car.id" v-for="car in listCar" v-bind:class="[carFirst.id === car.id ? 'seclect' : '']">
                              <td width="200" class="col-sm-2 col-md-2">
                                <img v-if="car.galleries.length > 0" :src="server+'uploads/cars/'+car.galleries[0].image" alt="carStore.car.brand.name" width="200" height="180">
                                <svg v-else width="200" height="180" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><rect width="100%" height="100%" fill="#868e96"></rect></svg>
                              </td>
                              <td width="200" class="col-sm-2 col-md-2">{{car.brand.name}}</td>
                              <td width="200" class="col-sm-2 col-md-2">
                                <router-link :to="{name: 'car-view', params: { carId: car.id }}">{{car.modelmake.name}}</router-link>
                              </td>
                              <td width="50" class="col-sm-2 col-md-2">{{car.price}}</td>
                              <td width="50" class="col-sm-2 col-md-2">{{car.mileage}}</td>
                              <td width="400" class="col-sm-2 col-md-2">
                                <router-link :to="{name: 'car-view', params: { carId: car.id }}" class="btn btn-success"><i class="fa fa-eye" title="Details"></i></router-link>
                                <router-link v-if="car.user.email === userStore.authUser.email" :to="{name: 'car-edit', params: { carId: car.id }}" class="btn btn-primary"><i class="fa fa-edit" title="Edit"></i></router-link>
                                <router-link v-if="car.user.email === userStore.authUser.email" :to="{name: 'car-upload', params: { carId: car.id }}" class="btn btn-default"><i class="fa fa-upload" title="Upload Image"></i></router-link>
                                <div class="btn btn-warning" v-on:click="viewCompareCars(car)"> <i class="fa fa-compress" title="Comparet Car"></i></div>
                                <div v-if="car.user.email === userStore.authUser.email" class="btn btn-danger" v-on:click="deleteCar(car)"> <i class="fa fa-trash" title="Delete"></i></div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                      </div>
                    </div>

                    <div class="tab-pane" id="schedule-1">
                      <div class="Car Car-compare" v-if="compareView === true">
                        <section class="header">
                          <h1 class="page-title">Car - Compare <small>Cars Select.</small></h1>
                        </section>

                        <section class="action-msg">
                          <div class="msg" id="msg"></div>
                        </section>

                        <section class="content">
                          <div class="row">
                            <div class="col-md-2 col-sm-2 col-with-right-border">
                              <table class="table table-striped table-hover table-bordered table-condensed message-table">

                              </table>
                            </div>

                            <div class="col-sm-10">
                              <!-- car first -->
                              <div class="card col-sm-4 col-md-4" v-if="fullFirst === true">
                                <img v-if="carFirst.galleries.length > 0" :src="server+'uploads/cars/'+carFirst.galleries[0].image" width="250" height="200">
                                <svg v-else="" class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                                <div class="card-body">
                                  <h5 class="card-title">{{carFirst.price}} EUR</h5>
                                  <ul>
                                    <li><strong>Year</strong>  {{carFirst.year}}</li>
                                    <li><strong>Make</strong>  {{carFirst.brand.name}}</li>
                                    <li><strong>Model</strong>  {{carFirst.modelmake.name}}</li>
                                    <li><strong>Mileage</strong>  {{carFirst.mileage}}</li>
                                    <li><strong>Condition</strong>  {{carFirst.condition}}</li>
                                    <li><strong>Fuel Type</strong>  {{carFirst.fuel_type}}</li>
                                    <li><strong>Fuel Economy</strong>  {{carFirst.fuel_economy}}</li>
                                    <li><strong>Transmission</strong>  {{carFirst.transmission}}</li>
                                    <li><strong>Drivetrain</strong>  {{carFirst.drivetrain}}</li>
                                    <li><strong>Exterior Color</strong>  {{carFirst.exterior_color}}</li>
                                    <li><strong>Interior Color</strong>  {{carFirst.interior_color}}</li>
                                  </ul>
                                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                  <div class="btn btn-danger" v-on:click="viewListCars(carFirst)"><i class="fa fa-close" title="Close"></i></div>
                                </div>
                                <br>
                              </div>

                              <!-- car secound -->
                              <div class="card col-sm-4 col-md-4" v-if="fullSecound === true">
                                <img v-if="carSecound.galleries.length > 0" :src="server+'uploads/cars/'+carSecound.galleries[0].image" width="250" height="200">
                                <svg v-else="" class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                                <div class="card-body">
                                  <h5 class="card-title">{{carSecound.price}} EUR</h5>
                                  <ul>
                                    <li><strong>Year</strong>  {{carSecound.year}}</li>
                                    <li><strong>Make</strong>  {{carSecound.brand.name}}</li>
                                    <li><strong>Model</strong>  {{carSecound.modelmake.name}}</li>
                                    <li><strong>Mileage</strong>  {{carSecound.mileage}}</li>
                                    <li><strong>Condition</strong>  {{carSecound.condition}}</li>
                                    <li><strong>Fuel Type</strong>  {{carSecound.fuel_type}}</li>
                                    <li><strong>Fuel Economy</strong>  {{carSecound.fuel_economy}}</li>
                                    <li><strong>Transmission</strong>  {{carSecound.transmission}}</li>
                                    <li><strong>Drivetrain</strong>  {{carSecound.drivetrain}}</li>
                                    <li><strong>Exterior Color</strong>  {{carSecound.exterior_color}}</li>
                                    <li><strong>Interior Color</strong>  {{carSecound.interior_color}}</li>
                                  </ul>
                                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                  <div class="btn btn-danger" v-on:click="viewListCars(carSecound)"><i class="fa fa-close" title="Close"></i></div>
                                </div>
                                <br>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
          </section>

        </div>

      </div>
    </div>
  </div>
</template>

<style lang="css">

  .seclect {
    box-shadow: 2px 2px 10px #666;
    font: bold 90% monospace;
    font-weight: 700;
  }

</style>
