<!--
@Author: Codeals
@Date:   22-11-2019
@Email:  ale@codeals.es
@Last modified by:   Codeals
@Last modified time: 22-11-2019
@Copyright: Codeals
-->

<script>

// import Info from './../components/dashboard/Info'
import Footer from './../components/Footer'
import TopMenu from './../components/TopMenu'
import {mapState} from 'vuex'

export default {
  created () {
    this.$store.dispatch('setBanner', false)
    this.$store.dispatch('getContactList')
  },
  data () {
    return {
      contacts: [],
      fields: [
        { key: 'name', label: 'Nombre', sortable: true, sortDirection: 'desc' },
        { key: 'phone', label: 'Teléfono', sortable: true, class: 'text-center' },
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
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 15, 20],
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      infoModal: {
        id: 'info-modal',
        title: '',
        content: ''
      },
      newContact: {
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
      contactStore: state => state.contactStore
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
  destroyed () {
    this.$store.dispatch('setBanner', true)
  },
  methods: {
    validateEmail (email) {
      var regularExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+@nauta.(?:com|co).cu$/
      return regularExp.test(email)
    },
    validateNumber (number) {
      var regularExp = /^([0-9]{8})$/
      return regularExp.test(number)
    },
    showEditMode (item) {
      this.mode = 'edit'
      this.newContact.name = item.name
      this.newContact.phone = item.phone
      this.newContact.email = item.email
      this.newContact.id = item.id
      this.$refs['addModal'].show()
    },
    handleDelete (item, index, button) {
      console.log('ID SEND'+item.id);
      this.$store.dispatch('deleteContact', item.id)
    },
    handleAdd (button) {
      if (!this.newContact.name) {
        this.$toastr.e('Debe ingresar un nombre')
        return
      } else if (!this.newContact.phone) {
        this.$toastr.e('Debe ingresar un teléfono')
        return
      } else if (!this.validateNumber(this.newContact.phone)) {
        this.$toastr.e('Número invalido')
        return
      } else if (this.newContact.email) {
        if (!this.validateEmail(this.newContact.email)) {
          this.$toastr.e('Correo invalido')
          return
        }
      }
      // this.newContact.id = ''
      this.$store.dispatch('addContact', this.newContact)
      this.$refs['addModal'].hide()
    },
    handleEdit (button) {
      // this.infoModal.title = `Row index: ${index}`
      // this.infoModal.content = JSON.stringify(item, null, 2)
      if (!this.newContact.name) {
        this.$toastr.e('Debe ingresar un nombre')
        return
      } else if (!this.newContact.phone) {
        this.$toastr.e('Debe ingresar un teléfono')
        return
      } else if (!this.validateNumber(this.newContact.phone)) {
        this.$toastr.e('Número invalido')
        return
      } else if (this.newContact.email) {
        if (!this.validateEmail(this.newContact.email)) {
          this.$toastr.e('Correo invalido')
          return
        }
      }
      this.$store.dispatch('updateContact', this.newContact)
      this.$refs['addModal'].hide()
      this.$root.$emit('bv::refresh::table', 'my-table')
      this.$refs.table.refresh();
    },
    resetInfoModal () {
      this.newContact.name = ''
      this.newContact.phone = ''
      this.newContact.email = ''
      this.mode = 'add'
    },
    onFiltered (filteredContacts) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredContacts.length
      this.currentPage = 1
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
          <pre>{{ contactStore }}</pre>
          <!-- User Interface controls -->
          <b-button variant="primary" v-b-modal.addModal style="float: right; margin-bottom: 25px;">Agregar</b-button>
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
                    placeholder="Buscar"
                  ></b-form-input>
                  <b-input-group-append>
                    <b-button :disabled="!filter" @click="filter = ''">Limpiar</b-button>
                  </b-input-group-append>
                </b-input-group>
            </b-col>
          </b-row>

          <!-- Main table element -->
          <b-table
            ref="table"
            id="my-table"
            show-empty
            small
            striped
            stacked="md"
            :items="contactStore.contacts"
            :fields="fields"
            :current-page="currentPage"
            :per-page="perPage"
            :filter="filter"
            :filterIncludedFields="filterOn"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :sort-direction="sortDirection"
            @filtered="onFiltered"
          >
            <!-- <template v-slot:cell(name)="row">
              {{ row.name }}
            </template> -->

            <template v-slot:cell(actions)="row">
              <b-button size="sm" @click="showEditMode(row.item)" variant="info" >
                Editar
              </b-button>
              <b-button variant="danger" size="sm" @click="handleDelete($event.target)" class="mr-1">
                Eliminar
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
              <h4 class="card-title" style="color: white">Nuevo Contacto</h4>
            </div>

            <b-container fluid>
              <b-form-group
                label="Nombre"
                label-for="name-input"
                invalid-feedback="Name is required"
              >
                <b-form-input
                  id="name-input"
                  v-model="newContact.name"
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
                  v-model="newContact.phone"
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
                  v-model="newContact.email"
                  type="email"
                  required
                ></b-form-input>
              </b-form-group>
              <b-button class="mt-2" v-if='this.mode === "add"' variant="success" style="float: right;" @click="handleAdd">Agregar</b-button>
              <b-button class="mt-2" v-if='this.mode === "edit"' variant="info" style="float: right;" @click="handleEdit">Modificar</b-button>
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
  .morado {
    color: #7d2eb973
  }
</style>
