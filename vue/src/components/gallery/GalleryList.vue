<!--
@Author: Codeals
@Date:   06-08-2019
@Email:  ian@codeals.es
@Last modified by:   Codeals
@Last modified time: 27-08-2019
@Copyright: Codeals
-->

<script>
// import {mapState} from 'vuex'
// import {apiDomain} from './../../config'
export default {
  props: {
    method: { type: Function },
    image: {
      type: Object,
      required: true
    },
    server: {
      type: String,
      required: true
    }
  },
  // created () {
  //   this.$store.dispatch('getGalleryByCar', this.$route.params.carId)
  // },
  // data () {
  //   return {
  //     server: apiDomain
  //   }
  // },
  // computed: {
  //   ...mapState({
  //     galleryStore: state => state.galleryStore
  //   })
  // },
  methods: {
    deleteImage (image) {
      this.$emit('send-image-delete', image)
    }
  }
}
</script>

<template>
  <div id="gallery-list-wrapper">
    <div class="car-grid-list">
      <div class="card col-sm-3 col-md-3">
        <img :src="server+'uploads/cars/'+image.image" alt="Card image" style="width:100%;">
        <div class="card-body">
          <div class="btn btn-danger" v-on:click="deleteImage(image)"><i class="fa fa-trash" title="Delete"></i></div>
        </div>
        <br>
      </div>
    </div>

  </div>
</template>
