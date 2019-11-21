<!--
@Author: Codeals
@Date:   16-08-2019
@Email:  ian@codeals.es
@Last modified by:   Codeals
@Last modified time: 27-08-2019
@Copyright: Codeals
-->

<template>
    <!-- <div class="card col-sm-4 col-md-4">
    <img v-if="car.galleries.length > 0" :src="server+'uploads/cars/'+car.galleries[0].image" alt="carStore.car.brand.name" style="width:100%;">
    <svg v-else="" class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
    <div class="card-body">
      <h5 class="card-title">{{car.price}} EUR</h5>
      <ul>
        <li><strong>Make</strong>  {{car.brand.name}}</li>
        <li><strong>Model</strong>  {{car.modelmake.name}}</li>
        <li><strong>Mileage</strong>  {{car.mileage}}</li>
        <li><strong>Condition</strong>  {{car.condition}}</li>
        <li><strong>Fuel Type</strong>  {{car.fuel_type}}</li>
      </ul>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <router-link :to="{name: 'car-view', params: { carId: car.id }}" class="btn btn-success"><i class="fa fa-eye" title="Details"></i></router-link>
      <router-link v-if="car.user.email === user.authUser.email" :to="{name: 'car-edit', params: { carId: car.id }}" class="btn btn-primary"><i class="fa fa-edit" title="Details"></i></router-link>
      <router-link v-if="car.user.email === user.authUser.email"  :to="{name: 'car-upload', params: { carId: car.id }}" class="btn btn-default"><i class="fa fa-upload" title="Upload Image"></i></router-link>
      <div class="btn btn-warning" v-on:click="viewCompareCars(car)"> <i class="fa fa-compress" title="Comparet Car"></i></div>
      <div v-if="car.user.email === user.authUser.email"  class="btn btn-danger" v-on:click="deleteCar(car)"><i class="fa fa-trash" title="Delete"></i></div>
    </div>
    <br>
  </div> -->

  <div class="col-md-4">
  <div class="card-container">
    <div class="card">
      <div class="front">
        <div class="cover">
          <img v-if="car.galleries.length > 0" :src="server+'uploads/cars/'+car.galleries[0].image" alt="carStore.car.brand.name" style="width:100%;">
          <svg v-else="" class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
        </div>
        <div class="user">
          <img v-if="car.galleries.length > 0" :src="server+'uploads/cars/'+car.galleries[0].image" alt="carStore.car.brand.name" style="width:100%;">
          <svg v-else="" class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
        </div>
        <div class="content">
          <div class="main">
             <h3 class="name">Inna Corman</h3>
             <p class="profession">Product Manager</p>

             <p class="text-center">"I'm the new Sinatra, and since I made it here I can make it anywhere, yeah, they love me everywhere"</p>
          </div>
          <div class="footer">
             <div class="rating">
                 <i class="fa fa-mail-forward"></i> Auto Rotation
             </div>
          </div>
        </div>
      </div>
      <div class="back">
        <div class="header">
           <h5 class="motto">"To be or not to be, this is my awesome motto!"</h5>
        </div>
        <div class="content">
          <div class="main">
            <h4 class="text-center">Job Description</h4>
            <p class="text-center">Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...</p>

            <div class="stats-container">
              <div class="stats">
                <h4>235</h4>
                <p>
                   Followers
                </p>
              </div>
              <div class="stats">
                <h4>114</h4>
                <p>
                   Following
                </p>
              </div>
              <div class="stats">
                <h4>35</h4>
                <p>
                   Projects
                </p>
              </div>
            </div>

          </div>
        </div>
        <div class="footer">
          <div class="social-links text-center">
            <a href="https://creative-tim.com" class="facebook"><i class="fa fa-facebook fa-fw"></i></a>
            <a href="https://creative-tim.com" class="google"><i class="fa fa-google-plus fa-fw"></i></a>
            <a href="https://creative-tim.com" class="twitter"><i class="fa fa-twitter fa-fw"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

  <!-- <div class="col-md-4 col-sm-6">
             <div class="card-container manual-flip">
                <div class="card">
                    <div class="front">
                        <div class="cover">
                            <img src="images/rotating_card_thumb.png">
                        </div>
                        <div class="user">
                            <img class="img-circle" src="images/rotating_card_profile2.png">
                        </div>
                        <div class="content">
                            <div class="main">
                                <h3 class="name">Andrew Mike</h3>
                                <p class="profession">Web Developer</p>
                                <p class="text-center">"Lamborghini Mercy <br>Your chick she so thirsty <br>I'm in that two seat Lambo"</p>
                            </div>
                            <div class="footer">
                                <button class="btn btn-simple" onclick="rotateCard(this)">
                                    <i class="fa fa-mail-forward"></i> Manual Rotation
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="back">
                        <div class="header">
                            <h5 class="motto">"To be or not to be, this is my awesome motto!"</h5>
                        </div>
                        <div class="content">
                            <div class="main">
                                <h4 class="text-center">Job Description</h4>
                                <p class="text-center">Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...</p>

                                <div class="stats-container">
                                    <div class="stats">
                                        <h4>235</h4>
                                        <p>
                                            Followers
                                        </p>
                                    </div>
                                    <div class="stats">
                                        <h4>114</h4>
                                        <p>
                                            Following
                                        </p>
                                    </div>
                                    <div class="stats">
                                        <h4>35</h4>
                                        <p>
                                            Projects
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="footer">
                            <button class="btn btn-simple" rel="tooltip" title="" onclick="rotateCard(this)" data-original-title="Flip Card">
                                <i class="fa fa-reply"></i> Back
                            </button>
                            <div class="social-links text-center">
                                <a href="https://creative-tim.com" class="facebook"><i class="fa fa-facebook fa-fw"></i></a>
                                <a href="https://creative-tim.com" class="google"><i class="fa fa-google-plus fa-fw"></i></a>
                                <a href="https://creative-tim.com" class="twitter"><i class="fa fa-twitter fa-fw"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

</template>

<script>
export default {
  // created() {
  //   this.$emit('created')
  // },
  props: {
    method: { type: Function },
    car: {
      type: Object,
      required: true
    },
    user: {
      type: Object,
      required: true
    },
    server: {
      type: String,
      required: true
    }
  },
  methods: {
    viewCompareCars (car) {
      this.$emit('send-car-compare', car)
    },
    deleteCar (car) {
      this.$emit('send-car-delete', car)
    }
  }
}
</script>

<style lang="css">
  @import './../../assets/css/rotating-card.css';

</style>
