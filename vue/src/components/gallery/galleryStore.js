/**
 * @Author: Codeals
 * @Date:   14-08-2019
 * @Email:  ian@codeals.es
 * @Last modified by:   Codeals
 * @Last modified time: 26-08-2019
 * @Copyright: Codeals
 */

import Vue from 'vue'
import _ from 'lodash'
import {
  getHeader,
  getGalleryByCar,
  deleteImage
} from './../../config'

const state = {
  gallery: [],
  image: {}
}

const getters = {}

const mutations = {
  SET_GALLERY_LIST (state, galleries) {
    state.gallery = galleries
  },
  DELETE_IMAGE_GALLERY (state, imgId) {
    _.forEach(state.gallery, function (image, key) {
      if (image.id === imgId) {
        state.gallery.splice(key, 1)
      }
    })
  },
  CLEAR_GALLERY_LIST (state) {
    state.gallery = []
    state.image = {}
  }
}

const actions = {
  getGalleryByCar: ({commit}, id) => {
    let postData = {carId: id}
    return Vue.http.post(getGalleryByCar, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'getGalleryByCar response', response)
        commit('SET_GALLERY_LIST', response.body.data)
      })
  },
  deleteImage: ({commit}, image) => {
    let postData = {id: image.id}
    return Vue.http.post(deleteImage, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'deleteImage response', response)
        commit('DELETE_IMAGE_GALLERY', image.id)
      })
  },
  clearGalleryList: ({commit}) => {
    commit('CLEAR_GALLERY_LIST')
  }
}

export default {
  state, mutations, actions, getters
}
