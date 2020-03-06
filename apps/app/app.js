/**
 * @Author: Codeals
 * @Date:   05-03-2020
 * @Email:  ian@codeals.es
 * @Last modified by:   Codeals
 * @Last modified time: 06-03-2020
 * @Copyright: Codeals
 */

import Vue from 'nativescript-vue';

import App from './components/Login';
import BackendService from "./services/backend-service";
// import RadListView from 'nativescript-ui-listview/vue'
// import RadSideDrawer from 'nativescript-ui-sidedrawer/vue'
import { TNSFontIcon, fonticon } from 'nativescript-fonticon';
// import ChartVue from 'nativescript-ui-chart/vue';
import { isAndroid, isIOS } from 'tns-core-modules/platform';
// import Vuex from './vuex';
// import appSettings from 'tns-core-modules/application-settings';

import Vuex from 'vuex';
Vue.use(Vuex);

import store from './store';

Vue.prototype.$isAndroid = isAndroid;
Vue.prototype.$isIOS = isIOS;

Vue.config.silent = true;

//Initialize FontAwesome
TNSFontIcon.debug = false;
TNSFontIcon.paths = {
    'fa': './fonts/fa5-all.css'
};
TNSFontIcon.loadCss();
Vue.filter('fonticon', fonticon);

// Vue.use(RadListView)

// login with backend
const backendService = new BackendService();
Vue.prototype.$backendService = backendService;

// Vue.prototype.$appSettings = appSettings;

new Vue({
    render: h => h('frame', [h(App)]),
    store
}).$start()




// import Vue from "nativescript-vue";

// import routes from "./routes";
// import BackendService from "./services/backend-service";

// // Uncommment the following to see NativeScript-Vue output logs
// // Vue.config.silent = false;

// const backendService = new BackendService();
// Vue.prototype.$backendService = backendService;

// new Vue({
//   render: h => h("frame", [h(backendService.isLoggedIn() ? routes.home : routes.login)])
// }).$start();
