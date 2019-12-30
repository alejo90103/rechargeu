<!--
@Author: alejandro
@Date:   2019-11-22T21:43:11+01:00
@Email:  alejo901003@hotmail.com
@Project: Recargame
@Last modified by:   alejandro
@Last modified time: 2019-11-23T20:29:45+01:00
-->

<script>

import Footer from './../components/Footer'
import TopMenu from './../components/TopMenu'
import {mapState} from 'vuex'

export default {
  created () {
    this.$store.dispatch('setBanner', false)
    this.$store.dispatch('getContactList')
  },
  watch: {
    contactStore: function () {
      this.totalRows = this.contactStore.length
    }
  },
  data () {
    return {
      fields: [
        { key: 'name', label: this.$i18n.t('contact.fields.name'), sortable: true, sortDirection: 'desc' },
        { key: 'phone', label: this.$i18n.t('contact.fields.phone'), sortable: true, class: 'text-center' },
        { key: 'email', label: this.$i18n.t('contact.fields.email'), sortable: true, class: 'text-center' },
        { key: 'created_at', label: this.$i18n.t('contact.fields.created'), sortable: true, class: 'text-center' },
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
        { key: 'actions', label: this.$i18n.t('contact.fields.actions') }
      ],
      transProps: {
        name: 'flip-list'
      },
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 15, 20],
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      selected: [],
      hover: true,
      bordered: true,
      headVariant: 'light',
      infoModal: {
        id: 'info-modal',
        title: '',
        content: ''
      },
      contact: {
        name: '',
        phone: '',
        email: '',
        id: ''
      },
      mode: 'add'
    }
  },
  computed: {
    ...mapState({
      contactStore: state => state.contactStore.contacts,
      rechargeStore: state => state.rechargeStore,
      offerStore: state => state.offerStore
    }),
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key }
        })
    }
  },
  mounted () {
    // Set the initial number of contacts
    this.totalRows = this.contactStore.length
  },
  components: {
    TopMenu,
    Footer
  },
  // destroyed () {
  //   this.$store.dispatch('setBanner', true)
  // },
  methods: {
    validateEmail (email) {
      var regularExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+@nauta.(?:com|co).cu$/
      return regularExp.test(email)
    },
    validateNumber (number) {
      var regularExp = /^([0-9]{8})$/
      return regularExp.test(number)
    },
    showEditModal (item) {
      this.mode = 'edit'
      this.contact.name = item.name
      this.contact.phone = item.phone
      this.contact.email = item.email
      this.contact.id = item.id
      this.$refs['addModal'].show()
    },
    handleDelete (item, index, button) {
      console.log(item)
      this.$store.dispatch('deleteContact', item.id)
    },
    handleAdd (button) {
      if (!this.contact.name) {
        this.$toastr.e(this.$i18n.t('notifications.validations.name'))
        return
      } else if (!this.contact.phone) {
        this.$toastr.e(this.$i18n.t('notifications.validations.number'))
        return
      } else if (!this.validateNumber(this.contact.phone)) {
        this.$toastr.e(this.$i18n.t('notifications.validations.error_number'))
        return
      } else if (this.contact.email) {
        if (!this.validateEmail(this.contact.email)) {
          this.$toastr.e(this.$i18n.t('notifications.validations.error_email'))
          return
        }
      }
      this.contact.id = ''
      this.$store.dispatch('addContact', this.contact)
      this.$refs['addModal'].hide()
    },
    handleEdit (button) {
      // this.infoModal.title = `Row index: ${index}`
      // this.infoModal.content = JSON.stringify(item, null, 2)
      if (!this.contact.name) {
        this.$toastr.e(this.$i18n.t('notifications.validations.name'))
        return
      } else if (!this.contact.phone) {
        this.$toastr.e(this.$i18n.t('notifications.validations.number'))
        return
      } else if (!this.validateNumber(this.contact.phone)) {
        this.$toastr.e(this.$i18n.t('notifications.validations.error_number'))
        return
      } else if (this.contact.email) {
        if (!this.validateEmail(this.contact.email)) {
          this.$toastr.e(this.$i18n.t('notifications.validations.error_email'))
          return
        }
      }
      this.$store.dispatch('updateContact', this.contact)
      this.$refs['addModal'].hide()
    },
    resetInfoModal () {
      this.contact.name = ''
      this.contact.phone = ''
      this.contact.email = ''
      this.mode = 'add'
    },
    onFiltered (filteredContacts) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredContacts.length
      this.currentPage = 1
    },
    onRowSelected (items) {
      this.selected = items
    },
    selectAllRows () {
      if (this.selected.length === 0) {
        this.$refs.selectableTable.selectAllRows()
      } else {
        this.selected = []
        this.$refs.selectableTable.clearSelected()
      }
    },
    clearSelected () {
      this.$refs.selectableTable.clearSelected()
    }
  }
}
</script>

<template>
  <div>
    <div class="page-header header-filter clear-filter purple-filter trans" data-parallax="true" :style="{'background-image': 'url(' + require('./../assets/material/img/bg2.jpg') + ')'}" style="transform: translate3d(0px, 0px, 0px); height: 20vh;">
    </div>
    <div class="main main-raised" id="dashboard-wrapper">
      <div class="section section-basic">
        <b-container fluid>
          <!-- <pre>{{ contactStore }}</pre> -->
          <!-- User Interface controls -->
          <b-button variant="primary" v-b-modal.addModal style="float: right; margin-bottom: 25px;">{{$t('contact.add')}}</b-button>
          <b-row>

            <b-col sm="6" md="2" class="my-1">
              <b-form-group
                :label="$t('contact.show')"
                label-cols-sm="6"
                label-cols-md="4"
                label-cols-lg="4"
                label-align-sm="right"
                label-size="sm"
                label-for="perPageSelect"
                class="mb-0"
              >
                <b-form-select
                  v-model="perPage"
                  id="perPageSelect"
                  size="sm"
                  :options="pageOptions"
                ></b-form-select>
              </b-form-group>
            </b-col>

            <b-col lg="6" sm="6" md="6" class="my-1">
                <b-input-group size="sm">
                  <b-form-input
                    v-model="filter"
                    type="search"
                    id="filterInput"
                    :placeholder="$t('contact.search')"
                  ></b-form-input>
                  <b-input-group-append>
                    <b-button :disabled="!filter" @click="filter = ''">{{$t('contact.clear')}}</b-button>
                  </b-input-group-append>
                </b-input-group>
            </b-col>
          </b-row>

          <!-- Main table element -->
          <div class="table-responsive-sm">
            <b-table
              id = "table-transition-example"
              ref="selectableTable"
              show-empty
              striped
              small
              stacked="sm"
              :hover="hover"
              :bordered = "bordered"
              :head-variant="headVariant"
              :items="contactStore"
              :fields="fields"
              :current-page="currentPage"
              :per-page="perPage"
              :filter="filter"
              :filterIncludedFields="filterOn"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              :sort-direction="sortDirection"
              sort-icon-left
              :tbody-transition-props="transProps"
              primary-key="created_at"
              @filtered="onFiltered"
            >

              <template v-slot:cell(actions)="row">
                <!-- <b-button variant="success" size="sm" @click="showRechargeModal(row.item)" class="mr-1">
                  Recargar
                </b-button> -->
                <b-button size="sm" @click="showEditModal(row.item)" variant="info" >
                  {{$t('contact.edit')}}
                </b-button>
                <b-button variant="danger" size="sm" @click="handleDelete(row.item)" class="mr-1">
                  {{$t('contact.delete')}}
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
        </div>

          <!-- <b-button size="sm" @click="selectAllRows">Marcar Todos</b-button>
          <b-button size="sm" @click="clearSelected">Desmarcar</b-button> -->

          <b-row>
            <b-col sm="12" md="12" class="my-1 center">
              <b-pagination
                v-model="currentPage"
                :total-rows="totalRows"
                :per-page="perPage"
                align="fill"
                size="sm"
                class="my-0"
              ></b-pagination>
            </b-col>
          </b-row>

          <!-- Info modal -->
          <b-modal id="addModal" ref="addModal" ok-only @hide="resetInfoModal" hide-footer hide-header>
            <!-- <template v-slot:modal-title >
            </template> -->
            <div class="card-header card-header-primary text-center mb-5" style="background-color: #9c27b0; border-radius: 3px;">
              <h4 class="card-title" style="color: white">{{$t('contact.new')}}</h4>
            </div>

            <b-container fluid>
              <b-form-group
                label="Nombre"
                label-for="name-input"
                invalid-feedback="Name is required"
              >
                <b-form-input
                  id="name-input"
                  v-model="contact.name"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label="Teléfono"
                label-for="phone-input"
                invalid-feedback="Name is required"
              >
                <b-form-input
                  id="phone-input"
                  v-model="contact.phone"
                  type="number"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label="Correo"
                label-for="email-input"
                invalid-feedback="Name is required"
              >
                <b-form-input
                  id="email-input"
                  v-model="contact.email"
                  type="email"
                  required
                ></b-form-input>
              </b-form-group>
              <b-button class="mt-2" v-if='this.mode === "add"' variant="success" style="float: right;" @click="handleAdd">{{$t('contact.add')}}</b-button>
              <b-button class="mt-2" v-if='this.mode === "edit"' variant="info" style="float: right;" @click="handleEdit">{{$t('contact.edit')}}</b-button>
            </b-container>

          </b-modal>

        </b-container>
      </div>
    </div>
    <Footer></Footer>
  </div>

</template>

<style lang="css" scoped>
  .center {
    align-items: center;
    flex-direction: column;
    display: flex;
  }

  table#table-transition-example .flip-list-move {
    transition: transform 1s;
  }
</style>
