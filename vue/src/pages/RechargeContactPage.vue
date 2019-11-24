<!--
@Author: alejandro
@Date:   2019-11-22T21:43:11+01:00
@Email:  alejo901003@hotmail.com
@Project: Recargame
@Last modified by:   alejandro
@Last modified time: 2019-11-24T02:10:10+01:00
-->

<script>

import Footer from './../components/Footer'
import TopMenu from './../components/TopMenu'
import {mapState, mapGetters} from 'vuex'

export default {
  created () {
    this.$store.dispatch('setBanner', false)
    this.$store.dispatch('getContactList')
  },
  data () {
    return {
      type: 'cell',
      fieldsPhone: [
        { key: 'selectedPhone', label: '✓' },
        { key: 'name', label: 'Nombre', sortable: true, sortDirection: 'desc' },
        { key: 'phone', label: 'Teléfono', sortable: true, class: 'text-center' },
        { key: 'created_at', label: 'Creado', sortable: true, class: 'text-center' },
        // {
        //   key: 'isActive',
        //   label: 'is Active',
        //   formatter: (value, key, item) => {
        //     return value ? 'Yes' : 'No'
        //   },
        //   sortable: true,
        //   sortByFormatted: true,
        //   filterByFormatted: true
        // },
        { key: 'actions', label: 'Actions' }
      ],
      fieldsEmail: [
        { key: 'selectedEmail', label: '✓' },
        { key: 'name', label: 'Nombre', sortable: true, sortDirection: 'desc' },
        { key: 'email', label: 'Correo', sortable: true, class: 'text-center' },
        { key: 'created_at', label: 'Creado', sortable: true, class: 'text-center' },
        // {
        //   key: 'isActive',
        //   label: 'is Active',
        //   formatter: (value, key, item) => {
        //     return value ? 'Yes' : 'No'
        //   },
        //   sortable: true,
        //   sortByFormatted: true,
        //   filterByFormatted: true
        // },
        { key: 'actions', label: 'Actions' }
      ],
      transPropsPhone: {
        name: 'flip-list'
      },
      transPropsEmail: {
        name: 'flip-list'
      },
      totalPhoneRows: 1,
      totalEmailRows: 1,
      currentPagePhone: 1,
      perPagePhone: 10,
      pageOptionsPhone: [10, 15, 20],
      sortByPhone: '',
      sortDescPhone: false,
      sortDirectionPhone: 'asc',
      filterPhone: null,
      filterOnPhone: [],
      selectedPhone: [],
      multiPhone: 'multi',
      hoverPhone: true,
      borderedPhone: true,
      headVariantPhone: 'light',

      currentPageEmail: 1,
      perPageEmail: 10,
      pageOptionsEmail: [10, 15, 20],
      sortByEmail: '',
      sortDescEmail: false,
      sortDirectionEmail: 'asc',
      filterEmail: null,
      filterOnEmail: [],
      selectedEmail: [],
      multiEmail: 'multi',
      hoverEmail: true,
      borderedEmail: true,
      headVariantEmail: 'light',
      cell: {
        name: '',
        phone: '',
        offer_id: '',
        call: 'rechargeCell'
      },
      nauta: {
        name: '',
        email: '',
        offer_id: '',
        call: 'rechargeNauta'
      },
      multiRechargeOffer: ''
    }
  },
  computed: {
    ...mapState({
      contactStore: state => state.contactStore,
      rechargeStore: state => state.rechargeStore,
      offerStore: state => state.offerStore
    }),
    ...mapGetters({
      listEmail: 'getEmailList',
      listPhone: 'getPhoneList'
    }),
    sortOptionsEmail () {
      // Create an options list from our fields
      return this.fieldsEmail
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key }
        })
    },
    sortOptionsPhone () {
      // Create an options list from our fields
      return this.fieldsEmail
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key }
        })
    }
  },
  mounted () {
    // Set the initial number of contacts
    this.totalPhoneRows = this.listPhone.length
    this.totalEmailRows = this.listEmail.length
  },
  components: {
    TopMenu,
    Footer
  },
  // destroyed () {
  //   this.$store.dispatch('setBanner', true)
  // },
  methods: {
    changeRecharge (val) {
      this.type = val
    },
    showRechargePhoneModal (item) {
      this.cell.name = item.name
      this.cell.phone = item.phone
      this.$refs['rechargeModal'].show()
    },
    showMultiRechargePhoneModal () {
      this.$refs['rechargeMultiModal'].show()
    },
    showRechargeNautaModal (item) {
      this.nauta.name = item.name
      this.nauta.email = item.email
      this.$refs['rechargeModal'].show()
    },
    showMultiRechargeEmailModal () {
      this.$refs['rechargeMultiModal'].show()
    },
    handleRecharge () {

      if (this.type === 'cell') {
        if (!this.cell.offer_id) {
          this.$toastr.e('Debe selecionar una oferta')
          return
        }
        this.$store.dispatch('setRecharge', this.cell)
      } else {
        if (!this.nauta.offer_id) {
          this.$toastr.e('Debe selecionar una oferta')
          return
        }
        this.$store.dispatch('setRecharge', this.nauta)
      }
      this.$store.dispatch(this.rechargeStore.recharge.call)
        .then(response => {
          if (response.status === 201) {
            this.$refs['rechargeModal'].hide()
            this.$toastr.s('Recarga realizada correctamente')
            // this.$router.push({name: 'home'})
          } else {
            this.$toastr.e('ERROR en la recarga :( ')
            // this.$router.push({name: 'home'})
          }
        })
    },
    handleMultiRecharge () {
      let call = ''
      let contacts = []
      if (!this.multiRechargeOffer) {
        this.$toastr.e('Debe selecionar una oferta')
        return
      }
      if (this.type === 'cell') {
        call = 'multiRechargeCell'
        contacts = this.selectedPhone
      } else {
        call = 'multiRechargeNauta'
        contacts = this.selectedEmail
      }
      let data = {contacts: contacts, offer: this.multiRechargeOffer}
      this.$store.dispatch(call, data)
        .then(response => {
          if (response.status === 201) {
            this.$refs['rechargeMultiModal'].hide()
            this.$toastr.s('Recarga realizada correctamente')
            // this.$router.push({name: 'home'})
          } else {
            this.$toastr.e('ERROR en la recarga :( ')
            // this.$router.push({name: 'home'})
          }
        })
    },
    resetInfoModal () {
      // this.cell.name = ''
      // this.cell.phone = ''
      // this.cell.offer_id = ''
      // this.nauta.name = ''
      // this.nauta.email = ''
      // this.nauta.offer_id = ''
    },
    resetMultiModal () {
      this.multiRechargeOffer = ''
    },
    onFilteredPhone (filteredContacts) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalPhoneRows = filteredContacts.length
      this.currentPagePhone = 1
    },
    onFilteredEmail (filteredContacts) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalEmailRows = filteredContacts.length
      this.currentPageEmail = 1
    },
    onRowSelectedPhone (items) {
      this.selectedPhone = items
    },
    onRowSelectedEmail (items) {
      this.selectedEmail = items
    },
    selectAllRowsPhone () {
      if (this.selectedPhone.length === 0) {
        this.$refs.selectableTablePhone.selectAllRows()
      } else {
        this.selectedPhone = []
        this.$refs.selectableTablePhone.clearSelected()
      }
    },
    selectAllRowsEmail () {
      if (this.selectedEmail.length === 0) {
        this.$refs.selectableTableEmail.selectAllRows()
      } else {
        this.selectedEmail = []
        this.$refs.selectableTableEmail.clearSelected()
      }
    },
    clearSelectedPhone () {
      this.$refs.selectableTablePhone.clearSelected()
    },
    clearSelectedEmail () {
      this.$refs.selectableTableEmail.clearSelected()
    }
  }
}
</script>

<template>
  <div>
    <Top-Menu></Top-Menu>
    <div class="page-header header-filter clear-filter purple-filter trans" data-parallax="true" :style="{'background-image': 'url(' + require('./../assets/material/img/bg2.jpg') + ')'}" style="transform: translate3d(0px, 0px, 0px); height: 20vh;">
    </div>
    <div class="main main-raised" id="dashboard-wrapper">
      <div class="section section-basic">
        <b-container fluid>
          <!-- <pre>{{ selectedPhone }}</pre>
          <pre>{{ selectedEmail }}</pre> -->
          <!-- User Interface controls -->
          <!-- <b-button variant="primary" v-b-modal.addModal style="float: right; margin-bottom: 25px;">Agregar</b-button> -->
          <div id="nav-tabs">
            <div class="row">
              <div class="col-md-12">
                <!-- <pre>{{rechargeStore}}</pre> -->
                <!-- Tabs with icons on Card -->
                <div class="card card-nav-tabs">
                  <div class="card-header card-header-primary center">
                    <div class="nav-tabs-navigation">
                      <div class="nav-tabs-wrapper">
                        <ul class="nav nav-tabs" data-tabs="tabs">
                          <li class="nav-item">
                            <a class="nav-link active" v-on:click="changeRecharge('cell')" href="#cell" data-toggle="tab">
                              <i class="material-icons">phone_iphone</i> Móvil
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" v-on:click="changeRecharge('nauta')" href="#nauta" data-toggle="tab">
                              <i class="material-icons">wifi</i> Nauta
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="card-body ">
                    <div class="tab-content text-center">
                      <div  class="tab-pane active" id="cell">
                        <b-row>
                          <!-- <b-col lg="6" class="my-1">
                            <b-form-group
                              label="Sort"
                              label-cols-sm="3"
                              label-align-sm="right"
                              label-size="sm"
                              label-for="sortBySelect"
                              class="mb-0"
                            >
                              <b-input-group size="sm">
                                <b-form-select v-model="sortBy" id="sortBySelect" :options="sortOptions" class="w-75">
                                  <template v-slot:first>
                                    <option value="">none</option>
                                  </template>
                                </b-form-select>
                                <b-form-select v-model="sortDesc" size="sm" :disabled="!sortBy" class="w-25">
                                  <option :value="false">Asc</option>
                                  <option :value="true">Desc</option>
                                </b-form-select>
                              </b-input-group>
                            </b-form-group>
                          </b-col> -->

                          <!-- <b-col lg="6" class="my-1">
                            <b-form-group
                              label="Initial sort"
                              label-cols-sm="3"
                              label-align-sm="right"
                              label-size="sm"
                              label-for="initialSortSelect"
                              class="mb-0"
                            >
                              <b-form-select
                                v-model="sortDirection"
                                id="initialSortSelect"
                                size="sm"
                                :options="['asc', 'desc', 'last']"
                              ></b-form-select>
                            </b-form-group>
                          </b-col> -->

                          <!-- <b-col lg="6" class="my-1">
                            <b-form-group
                              label="Filter On"
                              label-cols-sm="3"
                              label-align-sm="right"
                              label-size="sm"
                              description="Leave all unchecked to filter on all data"
                              class="mb-0">
                              <b-form-checkbox-group v-model="filterOn" class="mt-1">
                                <b-form-checkbox value="name">Name</b-form-checkbox>
                                <b-form-checkbox value="age">Age</b-form-checkbox>
                                <b-form-checkbox value="isActive">Active</b-form-checkbox>
                              </b-form-checkbox-group>
                            </b-form-group>
                          </b-col> -->

                          <b-col sm="6" md="2" class="my-1">
                            <b-form-group
                              label="Mostrar"
                              label-cols-sm="6"
                              label-cols-md="4"
                              label-cols-lg="4"
                              label-align-sm="right"
                              label-size="sm"
                              label-for="perPageSelect"
                              class="mb-0"
                            >
                              <b-form-select
                                v-model="perPagePhone"
                                id="perPageSelect"
                                size="sm"
                                :options="pageOptionsPhone"
                              ></b-form-select>
                            </b-form-group>
                          </b-col>

                          <b-col lg="6" sm="6" md="6" class="my-1">
                              <b-input-group size="sm">
                                <b-form-input
                                  v-model="filterPhone"
                                  type="search"
                                  id="filterInput"
                                  placeholder="Buscar"
                                ></b-form-input>
                                <b-input-group-append>
                                  <b-button :disabled="!filterPhone" @click="filterPhone = ''">Limpiar</b-button>
                                </b-input-group-append>
                              </b-input-group>
                          </b-col>
                        </b-row>

                        <!-- Main table element -->
                        <b-table
                          id = "table-phone"
                          ref="selectableTablePhone"
                          show-empty
                          striped
                          stacked="md"
                          :hover="hoverPhone"
                          :bordered = "borderedPhone"
                          :head-variant="headVariantPhone"
                          :items="listPhone"
                          :fields="fieldsPhone"
                          :current-page="currentPagePhone"
                          :per-page="perPagePhone"
                          :filter="filterPhone"
                          :filterIncludedFields="filterOnPhone"
                          :sort-by.sync="sortByPhone"
                          :sort-desc.sync="sortDescPhone"
                          :sort-direction="sortDirectionPhone"
                          sort-icon-left
                          selectable
                          :tbody-transition-props="transPropsPhone"
                          primary-key="nonmbre"
                          :select-mode="multiPhone"
                          @filtered="onFilteredPhone"
                          @row-selected="onRowSelectedPhone"
                        >
                          <!-- <template v-slot:cell(name)="row">
                            {{ row.name }}
                          </template> -->

                          <template v-slot:head(selectedPhone)>
                            <!-- <bu aria-hidden="true" @click="selectAllRows">&check;</span> -->
                            <b-button size="sm" @click="selectAllRowsPhone"><i class="material-icons">check_circle</i></b-button>
                          </template>

                          <template v-slot:cell(selectedPhone)="{ rowSelected }">
                            <template v-if="rowSelected">
                              <span aria-hidden="true">&check;</span>
                              <span class="sr-only">Selected</span>
                            </template>
                            <template v-else>
                              <span aria-hidden="true">&nbsp;</span>
                              <span class="sr-only">Not selected</span>
                            </template>
                          </template>

                          <template v-slot:cell(actions)="row">
                            <b-button variant="success" size="md" @click="showRechargePhoneModal(row.item)" class="mr-1 bold">
                              <i class="material-icons bold">sentiment_satisfied_alt</i>    Recargame
                            </b-button>
                          </template>

                          <template v-slot:row-details="row">
                            <b-card>
                              <ul>
                                <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
                              </ul>
                            </b-card>
                          </template>

                        </b-table>

                        <p class="row ml-1">
                          <b-button v-if='selectedPhone.length > 0' @click="showMultiRechargePhoneModal()" class="btn btn-success btn-lg bold" ><i class="material-icons bold">sentiment_satisfied_alt</i>    Recargame</b-button>
                        </p>

                        <b-row>
                          <b-col sm="12" md="12" class="my-1 center">
                            <b-pagination
                              v-model="currentPagePhone"
                              :total-rows="totalPhoneRows"
                              :per-page="perPagePhone"
                              align="fill"
                              size="sm"
                              class="my-0"
                            ></b-pagination>
                          </b-col>
                        </b-row>
                      </div>
                      <div class="tab-pane" id="nauta">
                        <b-row>
                          <!-- <b-col lg="6" class="my-1">
                            <b-form-group
                              label="Sort"
                              label-cols-sm="3"
                              label-align-sm="right"
                              label-size="sm"
                              label-for="sortBySelect"
                              class="mb-0"
                            >
                              <b-input-group size="sm">
                                <b-form-select v-model="sortBy" id="sortBySelect" :options="sortOptions" class="w-75">
                                  <template v-slot:first>
                                    <option value="">none</option>
                                  </template>
                                </b-form-select>
                                <b-form-select v-model="sortDesc" size="sm" :disabled="!sortBy" class="w-25">
                                  <option :value="false">Asc</option>
                                  <option :value="true">Desc</option>
                                </b-form-select>
                              </b-input-group>
                            </b-form-group>
                          </b-col> -->

                          <!-- <b-col lg="6" class="my-1">
                            <b-form-group
                              label="Initial sort"
                              label-cols-sm="3"
                              label-align-sm="right"
                              label-size="sm"
                              label-for="initialSortSelect"
                              class="mb-0"
                            >
                              <b-form-select
                                v-model="sortDirection"
                                id="initialSortSelect"
                                size="sm"
                                :options="['asc', 'desc', 'last']"
                              ></b-form-select>
                            </b-form-group>
                          </b-col> -->

                          <!-- <b-col lg="6" class="my-1">
                            <b-form-group
                              label="Filter On"
                              label-cols-sm="3"
                              label-align-sm="right"
                              label-size="sm"
                              description="Leave all unchecked to filter on all data"
                              class="mb-0">
                              <b-form-checkbox-group v-model="filterOn" class="mt-1">
                                <b-form-checkbox value="name">Name</b-form-checkbox>
                                <b-form-checkbox value="age">Age</b-form-checkbox>
                                <b-form-checkbox value="isActive">Active</b-form-checkbox>
                              </b-form-checkbox-group>
                            </b-form-group>
                          </b-col> -->

                          <b-col sm="6" md="2" class="my-1">
                            <b-form-group
                              label="Mostrar"
                              label-cols-sm="6"
                              label-cols-md="4"
                              label-cols-lg="4"
                              label-align-sm="right"
                              label-size="sm"
                              label-for="perPageSelect"
                              class="mb-0"
                            >
                              <b-form-select
                                v-model="perPageEmail"
                                id="perPageSelect"
                                size="sm"
                                :options="pageOptionsEmail"
                              ></b-form-select>
                            </b-form-group>
                          </b-col>

                          <b-col lg="6" sm="6" md="6" class="my-1">
                              <b-input-group size="sm">
                                <b-form-input
                                  v-model="filterEmail"
                                  type="search"
                                  id="filterInput"
                                  placeholder="Buscar"
                                ></b-form-input>
                                <b-input-group-append>
                                  <b-button :disabled="!filterEmail" @click="filterEmail = ''">Limpiar</b-button>
                                </b-input-group-append>
                              </b-input-group>
                          </b-col>
                        </b-row>

                        <!-- Main table element -->
                        <b-table
                          id = "table-email"
                          ref="selectableTableEmail"
                          show-empty
                          striped
                          stacked="md"
                          :hover="hoverEmail"
                          :bordered = "borderedEmail"
                          :head-variant="headVariantEmail"
                          :items="listEmail"
                          :fields="fieldsEmail"
                          :current-page="currentPageEmail"
                          :per-page="perPageEmail"
                          :filter="filterEmail"
                          :filterIncludedFields="filterOnEmail"
                          :sort-by.sync="sortByEmail"
                          :sort-desc.sync="sortDescEmail"
                          :sort-direction="sortDirectionEmail"
                          sort-icon-left
                          selectable
                          :tbody-transition-props="transPropsEmail"
                          primary-key="nonmbre"
                          :select-mode="multiEmail"
                          @filtered="onFilteredEmail"
                          @row-selected="onRowSelectedEmail"
                        >
                          <!-- <template v-slot:cell(name)="row">
                            {{ row.name }}
                          </template> -->

                          <template v-slot:head(selectedEmail)>
                            <!-- <bu aria-hidden="true" @click="selectAllRows">&check;</span> -->
                            <b-button size="sm" @click="selectAllRowsEmail"><i class="material-icons">check_circle</i></b-button>
                          </template>

                          <template v-slot:cell(selectedEmail)="{ rowSelected }">
                            <template v-if="rowSelected">
                              <span aria-hidden="true">&check;</span>
                              <span class="sr-only">Selected</span>
                            </template>
                            <template v-else>
                              <span aria-hidden="true">&nbsp;</span>
                              <span class="sr-only">Not selected</span>
                            </template>
                          </template>

                          <template v-slot:cell(actions)="row">
                            <b-button variant="success" size="md" @click="showRechargeNautaModal(row.item)" class="mr-1 bold">
                              <i class="material-icons bold">sentiment_satisfied_alt</i>    Recargame
                            </b-button>
                          </template>

                          <template v-slot:row-details="row">
                            <b-card>
                              <ul>
                                <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
                              </ul>
                            </b-card>
                          </template>

                        </b-table>

                        <p class="row ml-1">
                          <b-button v-if='selectedEmail.length > 0' @click="showMultiRechargeEmailModal()" class="btn btn-success btn-lg bold" ><i class="material-icons bold">sentiment_satisfied_alt</i>    Recargame</b-button>
                        </p>

                        <b-row>
                          <b-col sm="12" md="12" class="my-1 center">
                            <!-- <button type="button" v-on:click="handleSubmit()" class="btn btn-success btn-lg">Success</button> -->
                            <b-pagination
                              v-model="currentPageEmail"
                              :total-rows="totalEmailRows"
                              :per-page="perPageEmail"
                              align="fill"
                              size="sm"
                              class="my-0"
                            ></b-pagination>
                          </b-col>
                        </b-row>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End Tabs with icons on Card -->
              </div>
            </div>
          </div>

          <!-- Info modal -->
          <b-modal id="rechargeModal" ref="rechargeModal" ok-only @hide="resetInfoModal" hide-footer hide-header>
            <!-- <template v-slot:modal-title >
            </template> -->
            <div class="card-header card-header-primary text-center mb-5" style="background-color: #9c27b0; border-radius: 3px;">
              <h4 class="card-title" style="color: white">Selecione una Oferta</h4>
            </div>
            <b-container fluid>
              <div id="nav-tabs">
                <div class="row">
                  <div class="col-md-12">
                    <!-- <pre>{{rechargeStore}}</pre> -->
                    <!-- Tabs with icons on Card -->
                    <div class="card-body ">
                      <div class="tab-content text-center">
                        <div class="form-row">
                          <div class="form-group col-md-12">
                            <div class="input-group-prepend">
                              <div class="input-group-text" style="color: #000; font-weight: 200; font-size: 25px; margin-left: 10px; width: 40px">€</div>
                              <select v-if="type === 'cell'" v-model="cell.offer_id" style="font-size: 25px; text-align: center; font-weight: 200; height: auto; text-align-last: center" class="form-control">
                                <option v-for="offer in offerStore.offers" v-if="offer.type === 'Cell'" :value="offer.id" :key="offer.id">
                                  {{ offer.name }}
                                </option>
                              </select>
                              <select v-if="type === 'nauta'" v-model="nauta.offer_id" style="font-size: 25px; text-align: center; font-weight: 200; height: auto; text-align-last: center" class="form-control">
                                <option v-for="offer in offerStore.offers" v-if="offer.type === 'Nauta'" :value="offer.id" :key="offer.id">
                                  {{ offer.name }}
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- End Tabs with icons on Card -->
                  </div>
                </div>
              </div>

              <b-button class="mt-2 bold" variant="success" style="float: right;" @click="handleRecharge"><i class="material-icons bold">sentiment_satisfied_alt</i>    Recargame</b-button>
            </b-container>

          </b-modal>

          <!-- Multi Recharge Modal -->
          <b-modal id="rechargeMultiModal" ref="rechargeMultiModal" ok-only @hide="resetMultiModal" hide-footer hide-header>
            <!-- <template v-slot:modal-title >
            </template> -->
            <div class="card-header card-header-primary text-center mb-5" style="background-color: #9c27b0; border-radius: 3px;">
              <h4 class="card-title" style="color: white">Selecione una Oferta</h4>
            </div>
            <b-container fluid>
              <div id="nav-tabs">
                <div class="row">
                  <div class="col-md-12">
                    <!-- <pre>{{rechargeStore}}</pre> -->
                    <!-- Tabs with icons on Card -->
                    <div class="card-body ">
                      <div class="tab-content text-center">
                        <div class="form-row">
                          <div class="form-group col-md-12">
                            <div class="input-group-prepend">
                              <div class="input-group-text" style="color: #000; font-weight: 200; font-size: 25px; margin-left: 10px; width: 40px">€</div>
                              <select v-if="type === 'cell'" v-model="multiRechargeOffer" style="font-size: 25px; text-align: center; font-weight: 200; height: auto; text-align-last: center" class="form-control">
                                <option v-for="offer in offerStore.offers" v-if="offer.type === 'Cell'" :value="offer.id" :key="offer.id">
                                  {{ offer.name }}
                                </option>
                              </select>
                              <select v-if="type === 'nauta'" v-model="multiRechargeOffer" style="font-size: 25px; text-align: center; font-weight: 200; height: auto; text-align-last: center" class="form-control">
                                <option v-for="offer in offerStore.offers" v-if="offer.type === 'Nauta'" :value="offer.id" :key="offer.id">
                                  {{ offer.name }}
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- End Tabs with icons on Card -->
                  </div>
                </div>
              </div>

              <b-button class="mt-2 price_pay bold" variant="success" style="float: right;" @click="handleMultiRecharge"><i class="material-icons bold">sentiment_satisfied_alt</i>    Recargame</b-button>
            </b-container>

          </b-modal>
        </b-container>
      </div>
    </div>
    <Footer></Footer>
  </div>

</template>

<style lang="css" scoped>

  table#table-transition-example .flip-list-move {
    transition: transform 1s;
  }
</style>
