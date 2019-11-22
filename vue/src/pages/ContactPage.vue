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
      // contacts: [],
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
      }
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
    this.totalRows = this.contactStore.contacts.length
  },
  components: {
    TopMenu,
    Footer
  },
  destroyed () {
    //  this.$emit('SET_IS_BANNER', true)
    //  this.userStore.commit('SET_IS_BANNER', { status: true })
    this.$store.dispatch('setBanner', true)
  },
  methods: {
    handleDelete (item, index, button) {
      this.$store.dispatch('deleteContact', item.id)
    },
    resetInfoModal () {
      this.infoModal.title = ''
      this.infoModal.content = ''
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
          <!-- User Interface controls -->
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
                label-cols-lg="3"
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
              <b-button size="sm" @click="row.toggleDetails" variant="primary" >
                <!-- {{ row.detailsShowing ? 'Hide' : 'Show' }} Editar -->
                Editar
              </b-button>
              <b-button variant="danger" size="sm" @click="handleDelete(row.item, row.index, $event.target)" class="mr-1">
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
          <!-- <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
            <pre>{{ infoModal.content }}</pre>
          </b-modal> -->
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
