<!--
@Author: Codeals
@Date:   10-08-2019
@Email:  ian@codeals.es
@Last modified by:   Codeals
@Last modified time: 07-09-2019
@Copyright: Codeals
-->

<script>
import {mapState} from 'vuex'
import {apiDomain} from './../../config'
import ChatWidget from './../chat/ChatWidget'
import ChatAddWidget from './../chat/ChatAddWidget'
import SellAddCar from './../sell/SellCarAdd'

export default {
  components: {
    'chat-block': ChatWidget,
    'add-chat': ChatAddWidget,
    'sell-add': SellAddCar
  },
  data () {
    return {
      contactChat: false,
      sellForm: false,
      server: apiDomain
    }
  },
  created () {
    this.$store.dispatch('getCarById', this.$route.params.carId)
    this.$store.dispatch('getUserList')
  },
  computed: {
    ...mapState({
      carStore: state => state.carStore,
      chatStore: state => state.chatStore,
      userStore: state => state.userStore
    })
  },
  methods: {
    contactChatUser (user) {
      this.contactChat = !this.contactChat

      if (this.chatStore.currentChatUser === null || this.chatStore.currentChatUser.id !== user.id) {
        this.$store.dispatch('setCurrentChatUser', user)
          .then(response => {
            let element = document.getElementById('chat-widget-wrapper')
            element.scrollIntoView(false)
          })
      }
    },
    contactCallUser () {

    },
    handleSellCar () {
      this.sellForm = !this.sellForm
    },
    deleteCar (car) {
      // this.$store.dispatch('deleteCar', car)
      //   .then(response => {
      //     this.$router.push({name: 'car-list'})
      //   })
      console.log(car)
    }
  },
  destroyed () {
    this.$store.dispatch('clearCarView')
    this.$store.dispatch('clearCurrentConversation')
  }
}
</script>

<template>
  <div class="main main-raised">
    <div class="section section-basic">
      <div class="content">

        <section class="header">
          <h1 class="page-title">Car - View <small>Details.</small></h1>
        </section>

        <!-- <pre>{{carStore.car.galleries}}</pre> -->

        <!-- <section class="gallery" v-if="carStore.car.galleries !== undefined && carStore.car.galleries.length > 0">
          <div id="myCarousel" class="carousel slide" data-ride="carousel"> -->
          <!-- Indicators -->
          <!-- <ol class="carousel-indicators">
            <li data-target="#myCarousel" v-for="(image, index) in carStore.car.galleries" v-bind:class="[index === 0 ? 'active' : '']" :key="index" :data-slide-to="index"></li>
          </ol> -->

          <!-- Wrapper for slides -->
          <!-- <div class="carousel-inner">
            <div class="item"  v-for="(image, index) in carStore.car.galleries" v-bind:class="[index === 0 ? 'active' : '']" :key="index">
              <img :src="server+'uploads/cars/'+image.image" alt="carStore.car.brand.name" style="width:100%;">
            </div>
          </div> -->

          <!-- Left and right controls -->
          <!-- <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a> -->
        <!-- </div> -->

        <div class="col-md-8 mr-auto ml-auto">
          <!-- Carousel Card -->
          <div class="card card-raised card-carousel">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="3000">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" v-for="(image, index) in carStore.car.galleries" v-bind:class="[index === 0 ? 'active' : '']" :key="index" :data-slide-to="index"></li>
                <!-- <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2" class=""></li> -->
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item" v-for="(image, index) in carStore.car.galleries" v-bind:class="[index === 0 ? 'active' : '']" :key="index">
                  <img class="d-block w-100" :src="server+'uploads/cars/'+image.image" alt="First slide">
                  <!-- <img :src="server+'uploads/cars/'+image.image" alt="carStore.car.brand.name" style="width:100%;"> -->
                  <div class="carousel-caption d-none d-md-block">
                    <h4>
                      <i class="material-icons">location_on</i> Yellowstone National Park, United States
                    </h4>
                  </div>
                </div>
                <!-- <div class="carousel-item active">
                  <img class="d-block w-100" src="file:///C:/Users/IAN/Desktop/startup/selfcars/client/static/template/material/assets/img/bg2.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                    <h4>
                      <i class="material-icons">location_on</i> Somewhere Beyond, United States
                    </h4>
                  </div>
                </div> -->
                <!-- <div class="carousel-item">
                  <img class="d-block w-100" src="file:///C:/Users/IAN/Desktop/startup/selfcars/client/static/template/material/assets/img/bg2.jpg" alt="Third slide">
                  <div class="carousel-caption d-none d-md-block">
                    <h4>
                      <i class="material-icons">location_on</i> Yellowstone National Park, United States
                    </h4>
                  </div>
                </div> -->
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <i class="material-icons">keyboard_arrow_left</i>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <i class="material-icons">keyboard_arrow_right</i>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <!-- End Carousel Card -->
        </div>

        <!-- </section> -->

        <br>

        <!-- <pre>{{userStore.users}}</pre> -->

        <section class="sell-car" v-show="sellForm === true">
          <!-- <h1>Sell Car</h1> -->
          <sell-add :car="carStore.car" :userList="userStore.users"></sell-add>
        </section>

        <br>
        <section style="align-text: center;" v-if="carStore.car.id != 0">
          <div class="row actions-contact">
            <div class="col-md-4">

            </div>
            <div class="col-md-2" v-if="carStore.car.user.email !== userStore.authUser.email">
              <div class="btn btn-success" v-on:click="contactCallUser()"> <i class="fa fa-phone" title="Contact the owner "></i></div>
              <div class="btn btn-primary" v-on:click="contactChatUser(carStore.car.user)"> <i class="fa fa-comments" title="Contact the owner "></i></div>
            </div>
            <div class="col-md-3" v-else="">
              <router-link :to="{name: 'car-edit', params: { carId: carStore.car.id }}" class="btn btn-primary"><i class="fa fa-edit" title="Edit"></i></router-link>
              <router-link :to="{name: 'car-upload', params: { carId: carStore.car.id }}" class="btn btn-default"><i class="fa fa-upload" title="Upload Image"></i></router-link>
              <!-- <router-link :to="{name: 'sell-car', params: { carId: carStore.car.id }}" class="btn btn-success"><i class="fa fa-handshake-o"></i></router-link> -->
              <div class="btn btn-success" v-on:click="handleSellCar"> <i class="fa fa-handshake-o" title="Sell Car"></i></div>
              <div class="btn btn-danger" v-on:click="deleteCar(carStore.car)"> <i class="fa fa-trash" title="Delete"></i></div>
            </div>
            <div class="col-md-5">

            </div>
          </div>
        </section>
        <br>

        <section class="content">
          <div class="row">
            <div class="col-md-2 col-sm-2 col-with-right-border">
            </div>

            <div class="col-sm-8 col-md-8">
              <div id="car-list-wrapper">
                <ul class="list-group" v-if="carStore.car.visible === 1">
                  <li class="list-group-item pointer">
                    {{ carStore.car.brand.name }}
                  </li>
                  <li class="list-group-item pointer">
                    {{ carStore.car.modelmake.name }}
                  </li>
                  <li class="list-group-item pointer">
                    {{ carStore.car.price }}
                  </li>
                  <li class="list-group-item pointer">
                    {{ carStore.car.year }}
                  </li>
                  <li class="list-group-item pointer">
                    {{ carStore.car.body_style }}
                  </li>
                  <li class="list-group-item pointer">
                    {{ carStore.car.mileage }}
                  </li>
                  <li class="list-group-item pointer">
                    {{ carStore.car.fuel_type }}
                  </li>
                  <li class="list-group-item pointer">
                    {{ carStore.car.fuel_economy }}
                  </li>
                  <li class="list-group-item pointer">
                    {{ carStore.car.transmission }}
                  </li>
                  <li class="list-group-item pointer">
                    {{ carStore.car.condition }}
                  </li>
                  <li class="list-group-item pointer">
                    {{ carStore.car.drivetrain }}
                  </li>
                  <li class="list-group-item pointer">
                    {{ carStore.car.engine }}
                  </li>
                  <li class="list-group-item pointer">
                    {{ carStore.car.exterior_color }}
                  </li>
                  <li class="list-group-item pointer">
                    {{ carStore.car.interior_color }}
                  </li>
                  <li class="list-group-item pointer">
                    {{ carStore.car.stock_number }}
                  </li>
                  <li class="list-group-item pointer">
                    {{ carStore.car.vin_number }}
                  </li>
                  <li class="list-group-item pointer">
                    {{ carStore.car.features }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- view chat -->
        <div class="col-md-10" v-if="contactChat === true">
          <div class="chat-block">
            <chat-block></chat-block>
          </div>
          <div class="add-chat-block">
            <add-chat></add-chat>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
