/**
 * @Author: Codeals
 * @Date:   14-08-2019
 * @Email:  ian@codeals.es
 * @Last modified by:   Codeals
 * @Last modified time: 28-08-2019
 * @Copyright: Codeals
 */

import Vue from 'vue'
import {
  getHeader,
  carListUrl,
  deleteCar,
  getCarById,
  updateCar,
  addNewCar,
  uploadImageGallery,
  getNomenclatorMaker
} from './../../config'

const state = {
  images: [],
  cars: [],
  makes: [],
  modelmakes: [],
  car: {
    id: '',
    model_id: {},
    brand_id: {},
    user_id: {},
    visible: '',
    price: '',
    year: '',
    body_style: '',
    mileage: '',
    fuel_economy: '',
    fuel_type: '',
    transmission: '',
    condition: '',
    drivetrain: '',
    engine: '',
    exterior_color: '',
    interior_color: '',
    stock_number: '',
    vin_number: '',
    image: '',
    galleries: [],
    features: ''
  },
  filter: {
    email: '',
    price: '',
    year: '',
    fuel_type: '',
    mileage: '',
    brand: '',
    modelmake: '',
    transmission: '',
    exterior_color: ''
  }
}

const getters = {
  currentCar (state) {
    let car = state.car
    return car
  },
  getNomenclatiorMake (state) {
    let makes = state.makes
    return makes
  },
  getNomenclatiorModelMake (state) {
    let modelmakes = state.modelmakes
    return modelmakes
  },
  filteredCar (state) {
    let cars = state.cars
    if (state.filter.email !== '') {
      cars = cars.filter(car => car.user.email === state.filter.email)
    }
    if (state.filter.year.length > 2) {
      cars = cars.filter(car => car.year.includes(state.filter.year))
    }
    if (state.filter.fuel_type.length > 2) {
      cars = cars.filter(car => car.fuel_type.toLowerCase().includes(state.filter.fuel_type))
    }
    if (state.filter.brand !== '') {
      cars = cars.filter(car => car.brand.id === state.filter.brand)
    }
    if (state.filter.modelmake !== '') {
      cars = cars.filter(car => car.modelmake.id === state.filter.modelmake)
    }
    if (state.filter.mileage.length > 2) {
      cars = cars.filter(car => parseInt(car.mileage) < parseInt(state.filter.mileage))
    }
    if (state.filter.transmission.length > 2) {
      cars = cars.filter(car => car.transmission.toLowerCase().includes(state.filter.transmission))
    }
    if (state.filter.exterior_color.length > 2) {
      cars = cars.filter(car => car.exterior_color.toLowerCase().includes(state.filter.exterior_color))
    }

    return cars
  }
}

const mutations = {
  SET_CAR_LIST (state, data) {
    state.cars = data
  },
  SET_CAR_VIEW (state, data) {
    state.car = data
  },
  DELETE_CAR (state, data) {
    var index
    state.cars.forEach((car, key) => {
      if (car.id === data.id) {
        index = key
      }
    })
    state.cars.splice(index, 1)
  },
  SAVE_ADD_CAR (state, data) {
    state.cars.push(data)
  },
  SAVE_UPDATE_CAR (state, data) {
    state.cars.forEach((car) => {
      if (car.id === data.id) {
        car = data
      }
    })
  },
  SET_NOMENCLATOR_MAKER (state, nomenclator) {
    state.makes = nomenclator.brand
    state.modelmakes = nomenclator.modelmake
  },
  SET_SEARCH_OWN (state, email) {
    state.filter.email = email
  },
  SET_SEARCH_BRAND (state, brand) {
    state.filter.brand = brand
  },
  SET_SEARCH_MODELMAKE (state, model) {
    state.filter.modelmake = model
  },
  SET_SEARCH_YEAR (state, year) {
    state.filter.year = year
  },
  SET_SEARCH_MILEAGE (state, mileage) {
    state.filter.mileage = mileage
  },
  SET_SEARCH_FUEL_TYPE (state, fuelType) {
    state.filter.fuel_type = fuelType
  },
  SET_SEARCH_TRANSMISSION (state, transmission) {
    state.filter.transmission = transmission
  },
  SET_SEARCH_EXTERIOR_COLOR (state, exteriorColor) {
    state.filter.exterior_color = exteriorColor
  },
  CLEAR_CAR_VIEW (state) {
    state.car = {
      id: '',
      model_id: {},
      brand_id: {},
      user_id: {},
      visible: '',
      price: '',
      year: '',
      body_style: '',
      Mileage: '',
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
      galleries: [],
      features: ''
    }
  },
  CLEAR_CAR_LIST (state) {
    state.filter = {
      email: '',
      price: '',
      year: '',
      fuel_type: '',
      mileage: '',
      brand: '',
      modelmake: '',
      transmission: '',
      exterior_color: ''
    }
  }
}

const actions = {
  getCarList: ({commit}) => {
    return Vue.http.get(carListUrl, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'carListUrl response', response)
        if (response.status === 200) {
          commit('SET_CAR_LIST', response.body.data)
          return response.body.data
        }
      })
  },
  getCarById: ({commit}, id) => {
    let postData = {id: id}
    return Vue.http.post(getCarById, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'getCarById response', response)
        commit('SET_CAR_VIEW', response.body.data)
      })
  },
  addCar: ({commit}, car) => {
    let postData = car
    return Vue.http.post(addNewCar, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'addCar response', response)
        commit('SAVE_ADD_CAR', response.body.data)
      })
  },
  updateCar: ({commit}, car) => {
    let postData = car
    return Vue.http.put(updateCar, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'updateCar response', response)
        commit('SAVE_UPDATE_CAR', response.body.data)
      })
  },
  deleteCar: ({commit}, id) => {
    let postData = {id: id}
    return Vue.http.post(deleteCar, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'deleteCar response', response)
        commit('DELETE_CAR', response.body.data)
      })
  },
  getNomenclator: ({commit}) => {
    return Vue.http.get(getNomenclatorMaker, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'getNomenclator response', response)
        commit('SET_NOMENCLATOR_MAKER', response.body.data)
      })
  },
  uploadImage: ({commit}, postData) => {
    return Vue.http.post(uploadImageGallery, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'uploadImageGallery response', response)
        // commit('DELETE_CAR', response.body.data)
      })
  },
  clearCarView: ({commit}) => {
    commit('CLEAR_CAR_VIEW')
  }
}

export default {
  state, mutations, actions, getters
}
