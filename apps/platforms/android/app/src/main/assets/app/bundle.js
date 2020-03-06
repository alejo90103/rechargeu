require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./config.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/Login.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      contact: '',
      type: 'cell',
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
      choose_offer_cell: '',
      choose_offer_nauta: '',
      server: _config__WEBPACK_IMPORTED_MODULE_1__["apiDomain"],
      now: moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date()).format('YYYY/MM/DD'),
      moment: (moment__WEBPACK_IMPORTED_MODULE_2___default())
    };
  },

  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    userStore: state => state.userStore,
    rechargeStore: state => state.rechargeStore,
    offerStore: state => state.offerStore
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    optionsCell: 'getCellOffers',
    optionsNauta: 'getNautaOffers'
  })),
  methods: {
    handleFormSubmit() {
      this.$backendService.logout();
      this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_3__["default"], {
        clearHistory: true
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tns_core_modules_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/fetch");
/* harmony import */ var tns_core_modules_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./config.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./env.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("tns-core-modules/application-settings");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      isLoggingIn: true,
      processing: false,
      user: {
        email: "iankamisama@gmail.com",
        password: "123123",
        confirmPassword: ""
      }
    };
  },

  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapState"])({
    userStore: state => state.userStore
  })),
  methods: {
    isLogin() {
      if (this.userStore.authUser !== null) {
        // this.$router.push({name: 'home'})
        this.processing = false;
        this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
          clearHistory: true
        });
      }
    },

    handleFormSubmit() {
      if (!this.user.email || !this.user.password) {
        this.alert("Please provide both an email address and password.");
        return;
      }

      this.processing = true;

      if (this.isLoggingIn) {
        this.handleLogin();
      } else {
        this.handleRegister();
      }
    },

    handleLogin() {
      this.processing = true;
      var authUser = {};
      Object(tns_core_modules_fetch__WEBPACK_IMPORTED_MODULE_0__["fetch"])(_config__WEBPACK_IMPORTED_MODULE_2__["loginUrl"], {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          grant_type: 'password',
          client_id: _env__WEBPACK_IMPORTED_MODULE_3__["clientId"],
          client_secret: _env__WEBPACK_IMPORTED_MODULE_3__["clientSecret"],
          username: this.user.email,
          password: this.user.password,
          scope: ''
        })
      }).then(res => {
        if (res.status === 200) {
          // console.log('Oauth token', res)
          return res.json();
        }
      }).then(response => {
        // console.log('Oauth token', response.refresh_token)
        authUser.access_token = response.access_token;
        authUser.refresh_token = response.refresh_token;
        Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["setString"])("authUser", response.access_token);
        Object(tns_core_modules_fetch__WEBPACK_IMPORTED_MODULE_0__["fetch"])(_config__WEBPACK_IMPORTED_MODULE_2__["userUrl"], {
          headers: Object(_config__WEBPACK_IMPORTED_MODULE_2__["getHeader"])()
        }).then(res => {
          if (res.status === 200) {
            // console.log('Oauth token', res)
            return res.json();
          }
        }).then(response => {
          console.log('user object', response);
          authUser.email = response.email;
          authUser.name = response.name;
          this.$store.dispatch('setUserObject', authUser);
          this.processing = false;
          this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
            clearHistory: true
          });
        }).catch(err => {
          if (res.status === 404) {
            this.alert("Active la cuenta en su correo");
          }
        });
      }).catch(err => {
        if (res.status === 401) {
          this.alert("Usuario o contraseña incorrecto");
        }
      });
      this.processing = false;
    },

    handleRegister() {
      if (this.user.password != this.user.confirmPassword) {
        this.alert("Your passwords do not match.");
        this.processing = false;
        return;
      }

      this.$backendService.register(this.user).then(() => {
        this.processing = false;
        this.alert("Your account was successfully created.");
        this.isLoggingIn = true;
      }).catch(() => {
        this.processing = false;
        this.alert("Unfortunately we were unable to create your account.");
      });
    },

    toggleForm() {
      this.isLoggingIn = !this.isLoggingIn;
    },

    forgotPassword() {
      prompt({
        title: "Forgot Password",
        message: "Enter the email address you used to register for Recharge U to reset your password.",
        inputType: "email",
        defaultText: "",
        okButtonText: "Ok",
        cancelButtonText: "Cancel"
      }).then(data => {
        if (data.result) {
          this.$backendService.resetPassword(data.text.trim()).then(() => {
            this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
          }).catch(() => {
            this.alert("Unfortunately, an error occurred resetting your password.");
          });
        }
      });
    },

    focusPassword() {
      this.$refs.password.nativeView.focus();
    },

    focusConfirmPassword() {
      if (!this.isLoggingIn) {
        this.$refs.confirmPassword.nativeView.focus();
      }
    },

    alert(message) {
      return alert({
        title: "Recharge U",
        okButtonText: "OK",
        message: message
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/moment/locale sync recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../node_modules/moment/locale/af.js",
	"./af.js": "../node_modules/moment/locale/af.js",
	"./ar": "../node_modules/moment/locale/ar.js",
	"./ar-dz": "../node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../node_modules/moment/locale/ar.js",
	"./az": "../node_modules/moment/locale/az.js",
	"./az.js": "../node_modules/moment/locale/az.js",
	"./be": "../node_modules/moment/locale/be.js",
	"./be.js": "../node_modules/moment/locale/be.js",
	"./bg": "../node_modules/moment/locale/bg.js",
	"./bg.js": "../node_modules/moment/locale/bg.js",
	"./bm": "../node_modules/moment/locale/bm.js",
	"./bm.js": "../node_modules/moment/locale/bm.js",
	"./bn": "../node_modules/moment/locale/bn.js",
	"./bn.js": "../node_modules/moment/locale/bn.js",
	"./bo": "../node_modules/moment/locale/bo.js",
	"./bo.js": "../node_modules/moment/locale/bo.js",
	"./br": "../node_modules/moment/locale/br.js",
	"./br.js": "../node_modules/moment/locale/br.js",
	"./bs": "../node_modules/moment/locale/bs.js",
	"./bs.js": "../node_modules/moment/locale/bs.js",
	"./ca": "../node_modules/moment/locale/ca.js",
	"./ca.js": "../node_modules/moment/locale/ca.js",
	"./cs": "../node_modules/moment/locale/cs.js",
	"./cs.js": "../node_modules/moment/locale/cs.js",
	"./cv": "../node_modules/moment/locale/cv.js",
	"./cv.js": "../node_modules/moment/locale/cv.js",
	"./cy": "../node_modules/moment/locale/cy.js",
	"./cy.js": "../node_modules/moment/locale/cy.js",
	"./da": "../node_modules/moment/locale/da.js",
	"./da.js": "../node_modules/moment/locale/da.js",
	"./de": "../node_modules/moment/locale/de.js",
	"./de-at": "../node_modules/moment/locale/de-at.js",
	"./de-at.js": "../node_modules/moment/locale/de-at.js",
	"./de-ch": "../node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../node_modules/moment/locale/de-ch.js",
	"./de.js": "../node_modules/moment/locale/de.js",
	"./dv": "../node_modules/moment/locale/dv.js",
	"./dv.js": "../node_modules/moment/locale/dv.js",
	"./el": "../node_modules/moment/locale/el.js",
	"./el.js": "../node_modules/moment/locale/el.js",
	"./en-SG": "../node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "../node_modules/moment/locale/en-SG.js",
	"./en-au": "../node_modules/moment/locale/en-au.js",
	"./en-au.js": "../node_modules/moment/locale/en-au.js",
	"./en-ca": "../node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../node_modules/moment/locale/en-ca.js",
	"./en-gb": "../node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../node_modules/moment/locale/en-gb.js",
	"./en-ie": "../node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../node_modules/moment/locale/en-ie.js",
	"./en-il": "../node_modules/moment/locale/en-il.js",
	"./en-il.js": "../node_modules/moment/locale/en-il.js",
	"./en-nz": "../node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../node_modules/moment/locale/en-nz.js",
	"./eo": "../node_modules/moment/locale/eo.js",
	"./eo.js": "../node_modules/moment/locale/eo.js",
	"./es": "../node_modules/moment/locale/es.js",
	"./es-do": "../node_modules/moment/locale/es-do.js",
	"./es-do.js": "../node_modules/moment/locale/es-do.js",
	"./es-us": "../node_modules/moment/locale/es-us.js",
	"./es-us.js": "../node_modules/moment/locale/es-us.js",
	"./es.js": "../node_modules/moment/locale/es.js",
	"./et": "../node_modules/moment/locale/et.js",
	"./et.js": "../node_modules/moment/locale/et.js",
	"./eu": "../node_modules/moment/locale/eu.js",
	"./eu.js": "../node_modules/moment/locale/eu.js",
	"./fa": "../node_modules/moment/locale/fa.js",
	"./fa.js": "../node_modules/moment/locale/fa.js",
	"./fi": "../node_modules/moment/locale/fi.js",
	"./fi.js": "../node_modules/moment/locale/fi.js",
	"./fo": "../node_modules/moment/locale/fo.js",
	"./fo.js": "../node_modules/moment/locale/fo.js",
	"./fr": "../node_modules/moment/locale/fr.js",
	"./fr-ca": "../node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../node_modules/moment/locale/fr.js",
	"./fy": "../node_modules/moment/locale/fy.js",
	"./fy.js": "../node_modules/moment/locale/fy.js",
	"./ga": "../node_modules/moment/locale/ga.js",
	"./ga.js": "../node_modules/moment/locale/ga.js",
	"./gd": "../node_modules/moment/locale/gd.js",
	"./gd.js": "../node_modules/moment/locale/gd.js",
	"./gl": "../node_modules/moment/locale/gl.js",
	"./gl.js": "../node_modules/moment/locale/gl.js",
	"./gom-latn": "../node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../node_modules/moment/locale/gom-latn.js",
	"./gu": "../node_modules/moment/locale/gu.js",
	"./gu.js": "../node_modules/moment/locale/gu.js",
	"./he": "../node_modules/moment/locale/he.js",
	"./he.js": "../node_modules/moment/locale/he.js",
	"./hi": "../node_modules/moment/locale/hi.js",
	"./hi.js": "../node_modules/moment/locale/hi.js",
	"./hr": "../node_modules/moment/locale/hr.js",
	"./hr.js": "../node_modules/moment/locale/hr.js",
	"./hu": "../node_modules/moment/locale/hu.js",
	"./hu.js": "../node_modules/moment/locale/hu.js",
	"./hy-am": "../node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../node_modules/moment/locale/hy-am.js",
	"./id": "../node_modules/moment/locale/id.js",
	"./id.js": "../node_modules/moment/locale/id.js",
	"./is": "../node_modules/moment/locale/is.js",
	"./is.js": "../node_modules/moment/locale/is.js",
	"./it": "../node_modules/moment/locale/it.js",
	"./it-ch": "../node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "../node_modules/moment/locale/it-ch.js",
	"./it.js": "../node_modules/moment/locale/it.js",
	"./ja": "../node_modules/moment/locale/ja.js",
	"./ja.js": "../node_modules/moment/locale/ja.js",
	"./jv": "../node_modules/moment/locale/jv.js",
	"./jv.js": "../node_modules/moment/locale/jv.js",
	"./ka": "../node_modules/moment/locale/ka.js",
	"./ka.js": "../node_modules/moment/locale/ka.js",
	"./kk": "../node_modules/moment/locale/kk.js",
	"./kk.js": "../node_modules/moment/locale/kk.js",
	"./km": "../node_modules/moment/locale/km.js",
	"./km.js": "../node_modules/moment/locale/km.js",
	"./kn": "../node_modules/moment/locale/kn.js",
	"./kn.js": "../node_modules/moment/locale/kn.js",
	"./ko": "../node_modules/moment/locale/ko.js",
	"./ko.js": "../node_modules/moment/locale/ko.js",
	"./ku": "../node_modules/moment/locale/ku.js",
	"./ku.js": "../node_modules/moment/locale/ku.js",
	"./ky": "../node_modules/moment/locale/ky.js",
	"./ky.js": "../node_modules/moment/locale/ky.js",
	"./lb": "../node_modules/moment/locale/lb.js",
	"./lb.js": "../node_modules/moment/locale/lb.js",
	"./lo": "../node_modules/moment/locale/lo.js",
	"./lo.js": "../node_modules/moment/locale/lo.js",
	"./lt": "../node_modules/moment/locale/lt.js",
	"./lt.js": "../node_modules/moment/locale/lt.js",
	"./lv": "../node_modules/moment/locale/lv.js",
	"./lv.js": "../node_modules/moment/locale/lv.js",
	"./me": "../node_modules/moment/locale/me.js",
	"./me.js": "../node_modules/moment/locale/me.js",
	"./mi": "../node_modules/moment/locale/mi.js",
	"./mi.js": "../node_modules/moment/locale/mi.js",
	"./mk": "../node_modules/moment/locale/mk.js",
	"./mk.js": "../node_modules/moment/locale/mk.js",
	"./ml": "../node_modules/moment/locale/ml.js",
	"./ml.js": "../node_modules/moment/locale/ml.js",
	"./mn": "../node_modules/moment/locale/mn.js",
	"./mn.js": "../node_modules/moment/locale/mn.js",
	"./mr": "../node_modules/moment/locale/mr.js",
	"./mr.js": "../node_modules/moment/locale/mr.js",
	"./ms": "../node_modules/moment/locale/ms.js",
	"./ms-my": "../node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../node_modules/moment/locale/ms-my.js",
	"./ms.js": "../node_modules/moment/locale/ms.js",
	"./mt": "../node_modules/moment/locale/mt.js",
	"./mt.js": "../node_modules/moment/locale/mt.js",
	"./my": "../node_modules/moment/locale/my.js",
	"./my.js": "../node_modules/moment/locale/my.js",
	"./nb": "../node_modules/moment/locale/nb.js",
	"./nb.js": "../node_modules/moment/locale/nb.js",
	"./ne": "../node_modules/moment/locale/ne.js",
	"./ne.js": "../node_modules/moment/locale/ne.js",
	"./nl": "../node_modules/moment/locale/nl.js",
	"./nl-be": "../node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../node_modules/moment/locale/nl-be.js",
	"./nl.js": "../node_modules/moment/locale/nl.js",
	"./nn": "../node_modules/moment/locale/nn.js",
	"./nn.js": "../node_modules/moment/locale/nn.js",
	"./pa-in": "../node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../node_modules/moment/locale/pa-in.js",
	"./pl": "../node_modules/moment/locale/pl.js",
	"./pl.js": "../node_modules/moment/locale/pl.js",
	"./pt": "../node_modules/moment/locale/pt.js",
	"./pt-br": "../node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../node_modules/moment/locale/pt-br.js",
	"./pt.js": "../node_modules/moment/locale/pt.js",
	"./ro": "../node_modules/moment/locale/ro.js",
	"./ro.js": "../node_modules/moment/locale/ro.js",
	"./ru": "../node_modules/moment/locale/ru.js",
	"./ru.js": "../node_modules/moment/locale/ru.js",
	"./sd": "../node_modules/moment/locale/sd.js",
	"./sd.js": "../node_modules/moment/locale/sd.js",
	"./se": "../node_modules/moment/locale/se.js",
	"./se.js": "../node_modules/moment/locale/se.js",
	"./si": "../node_modules/moment/locale/si.js",
	"./si.js": "../node_modules/moment/locale/si.js",
	"./sk": "../node_modules/moment/locale/sk.js",
	"./sk.js": "../node_modules/moment/locale/sk.js",
	"./sl": "../node_modules/moment/locale/sl.js",
	"./sl.js": "../node_modules/moment/locale/sl.js",
	"./sq": "../node_modules/moment/locale/sq.js",
	"./sq.js": "../node_modules/moment/locale/sq.js",
	"./sr": "../node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../node_modules/moment/locale/sr.js",
	"./ss": "../node_modules/moment/locale/ss.js",
	"./ss.js": "../node_modules/moment/locale/ss.js",
	"./sv": "../node_modules/moment/locale/sv.js",
	"./sv.js": "../node_modules/moment/locale/sv.js",
	"./sw": "../node_modules/moment/locale/sw.js",
	"./sw.js": "../node_modules/moment/locale/sw.js",
	"./ta": "../node_modules/moment/locale/ta.js",
	"./ta.js": "../node_modules/moment/locale/ta.js",
	"./te": "../node_modules/moment/locale/te.js",
	"./te.js": "../node_modules/moment/locale/te.js",
	"./tet": "../node_modules/moment/locale/tet.js",
	"./tet.js": "../node_modules/moment/locale/tet.js",
	"./tg": "../node_modules/moment/locale/tg.js",
	"./tg.js": "../node_modules/moment/locale/tg.js",
	"./th": "../node_modules/moment/locale/th.js",
	"./th.js": "../node_modules/moment/locale/th.js",
	"./tl-ph": "../node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../node_modules/moment/locale/tl-ph.js",
	"./tlh": "../node_modules/moment/locale/tlh.js",
	"./tlh.js": "../node_modules/moment/locale/tlh.js",
	"./tr": "../node_modules/moment/locale/tr.js",
	"./tr.js": "../node_modules/moment/locale/tr.js",
	"./tzl": "../node_modules/moment/locale/tzl.js",
	"./tzl.js": "../node_modules/moment/locale/tzl.js",
	"./tzm": "../node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../node_modules/moment/locale/tzm.js",
	"./ug-cn": "../node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "../node_modules/moment/locale/ug-cn.js",
	"./uk": "../node_modules/moment/locale/uk.js",
	"./uk.js": "../node_modules/moment/locale/uk.js",
	"./ur": "../node_modules/moment/locale/ur.js",
	"./ur.js": "../node_modules/moment/locale/ur.js",
	"./uz": "../node_modules/moment/locale/uz.js",
	"./uz-latn": "../node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../node_modules/moment/locale/uz.js",
	"./vi": "../node_modules/moment/locale/vi.js",
	"./vi.js": "../node_modules/moment/locale/vi.js",
	"./x-pseudo": "../node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../node_modules/moment/locale/x-pseudo.js",
	"./yo": "../node_modules/moment/locale/yo.js",
	"./yo.js": "../node_modules/moment/locale/yo.js",
	"./zh-cn": "../node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "../node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.logo {\n    margin-left: 5px;\n}\n.button-text {\n    background-color: #762889;\n    color: #fff;\n    border-radius: 100px;\n}\n.ActionBar {\n    background-color: transparent;\n}\n.album-image {\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n}\n.home-panel {\n    vertical-align: center;\n    font-size: 20;\n    margin: 15;\n}\n.description-label {\n    margin-bottom: 15;\n}\n#searchRow {\n    margin-top: 20;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Home.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page[data-v-c27482c4] {\n    align-items: center;\n    flex-direction: column;\n}\n.form[data-v-c27482c4] {\n    margin-left: 30;\n    margin-right: 30;\n    flex-grow: 2;\n    vertical-align: middle;\n}\n.logo[data-v-c27482c4] {\n    margin-bottom: 12;\n    height: 90;\n    font-weight: bold;\n}\n.header[data-v-c27482c4] {\n    horizontal-align: center;\n    font-size: 25;\n    font-weight: 600;\n    margin-bottom: 70;\n    text-align: center;\n    color: #762889;\n}\n.input-field[data-v-c27482c4] {\n    margin-bottom: 25;\n}\n.input[data-v-c27482c4] {\n    font-size: 18;\n    placeholder-color: #A8A8A8;\n}\n.input[data-v-c27482c4]:disabled {\n    background-color: white;\n    opacity: 0.5;\n}\n.btn-primary[data-v-c27482c4] {\n    margin: 30 5 15 5;\n}\n.login-label[data-v-c27482c4] {\n    horizontal-align: center;\n    color: #A8A8A8;\n    font-size: 16;\n}\n.sign-up-label[data-v-c27482c4] {\n    margin-bottom: 20;\n}\n.button-text[data-v-c27482c4] {\n    background-color: #762889;\n    color: #fff;\n    border-radius: 100px;\n}\n.bold[data-v-c27482c4] {\n    color: #000000;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Login.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "page" },
    [
      _c(
        "ActionBar",
        { attrs: { backgroundColor: "#762889", flat: "true" } },
        [
          _c(
            "StackLayout",
            {
              attrs: {
                orientation: "vertical",
                width: "100%",
                height: "100%",
                backgroundColor: "#762889"
              }
            },
            [
              _c(
                "StackLayout",
                { attrs: { backgroundColor: "#762889" } },
                [
                  _c("StackLayout", {
                    attrs: { orientation: "horizontal", marginTop: "5" },
                    scopedSlots: _vm._u([
                      {
                        key: "searchRow",
                        fn: function() {
                          return [
                            _c("TextField", {
                              attrs: {
                                backgroundColor: "white",
                                paddingLeft: "20",
                                borderRadius: "20",
                                width: "80%",
                                height: "40",
                                fontSize: "14",
                                hint: "Search",
                                text: _vm.textFieldValue
                              },
                              on: {
                                textChange: function($event) {
                                  _vm.textFieldValue = $event.value
                                }
                              }
                            })
                          ]
                        },
                        proxy: true
                      }
                    ])
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "GridLayout",
        {
          attrs: {
            orientation: "vertical",
            width: "100%",
            height: "100%",
            columns: "*",
            rows: "*,auto"
          }
        },
        [
          _c(
            "StackLayout",
            { attrs: { col: "0", row: "0", backgroundColor: "#f8f8f8" } },
            [
              _c(
                "StackLayout",
                {
                  attrs: {
                    orientation: "horizontal",
                    backgroundColor: "#762889",
                    paddingBottom: "15",
                    marginTop: "-10"
                  }
                },
                [
                  _c("Image", {
                    staticClass: "logo",
                    attrs: { width: "15%", src: "~/assets/images/logo.png" }
                  }),
                  _c("Label", {
                    staticClass: "font-weight-bold",
                    attrs: {
                      text: "Recharge U",
                      color: "#FFFFFF",
                      padding: "15",
                      fontSize: "24"
                    }
                  })
                ],
                1
              ),
              _c(
                "StackLayout",
                {
                  staticClass: "album-image",
                  attrs: {
                    paddingLeft: "20",
                    paddingRight: "20",
                    paddingTop: "20",
                    paddingBottom: "5",
                    marginTop: "-20",
                    backgroundColor: "#fff",
                    borderRadius: "10",
                    height: "85%",
                    width: "90%",
                    stretch: "aspectFit"
                  }
                },
                [
                  _c(
                    "GridLayout",
                    {
                      attrs: {
                        columns: "*",
                        rows: "auto,*,auto",
                        height: "100%"
                      }
                    },
                    [
                      _c(
                        "GridLayout",
                        {
                          attrs: {
                            columns: "auto,*,auto",
                            rows: "auto,auto",
                            col: "0",
                            row: "2"
                          }
                        },
                        [
                          _c("TextField", {
                            staticClass: "input",
                            attrs: {
                              col: "0",
                              row: "0",
                              hint: "Name",
                              autocorrect: "false",
                              text: _vm.cell.name
                            },
                            on: {
                              textChange: function($event) {
                                return _vm.$set(_vm.cell, "name", $event.value)
                              }
                            }
                          }),
                          _c("TextField", {
                            staticClass: "input",
                            attrs: {
                              col: "0",
                              row: "1",
                              hint: "Phone",
                              autocorrect: "false",
                              text: _vm.cell.phone
                            },
                            on: {
                              textChange: function($event) {
                                return _vm.$set(_vm.cell, "phone", $event.value)
                              }
                            }
                          }),
                          _c("ActivityIndicator", {
                            attrs: {
                              col: "0",
                              row: "2",
                              rowSpan: "3",
                              busy: _vm.processing
                            }
                          }),
                          _c("Button", {
                            staticClass: "btn btn-primary m-t-20 button-text",
                            attrs: { col: "0", row: "3", text: "Recharge" },
                            on: { tap: _vm.handleFormSubmit }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _c(
            "StackLayout",
            {
              attrs: {
                col: "0",
                row: "1",
                orientation: "horizontal",
                backgroundColor: "#FFFFFF",
                height: "60"
              }
            },
            [
              _c(
                "GridLayout",
                { attrs: { rows: "*", columns: "*,*,*,*,*" } },
                [
                  _c("Image", {
                    attrs: {
                      col: "0",
                      row: "0",
                      "(tap)": "onButtonTap()",
                      height: "25",
                      width: "25",
                      margin: "10",
                      src: "~/assets/images/shape2@3x.png"
                    }
                  }),
                  _c("Image", {
                    attrs: {
                      col: "1",
                      row: "0",
                      "(tap)": "onButtonTap()",
                      height: "25",
                      width: "25",
                      margin: "10",
                      src: "~/assets/images/shape1@3x.png"
                    }
                  }),
                  _c("Image", {
                    attrs: {
                      col: "2",
                      row: "0",
                      "(tap)": "onButtonTap()",
                      height: "60",
                      width: "60",
                      margin: "10",
                      src: "~/assets/images/home@3x.png"
                    }
                  }),
                  _c("Image", {
                    attrs: {
                      col: "3",
                      row: "0",
                      "(tap)": "onButtonTap()",
                      height: "25",
                      width: "25",
                      margin: "10",
                      src: "~/assets/images/shape3@3x.png"
                    }
                  }),
                  _c("Image", {
                    attrs: {
                      col: "4",
                      row: "0",
                      "(tap)": "onButtonTap()",
                      height: "25",
                      width: "25",
                      margin: "10",
                      src: "~/assets/images/icon04@3x.png"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { attrs: { actionBarHidden: "true" } },
    [
      _c(
        "FlexboxLayout",
        { staticClass: "page" },
        [
          _c(
            "StackLayout",
            { staticClass: "form" },
            [
              _c("Image", {
                staticClass: "logo",
                attrs: { src: "~/assets/images/logo.png" }
              }),
              _c("Label", {
                staticClass: "header",
                attrs: { text: "Recharge U" }
              }),
              _c(
                "GridLayout",
                { attrs: { rows: "auto, auto, auto" } },
                [
                  _c(
                    "StackLayout",
                    { staticClass: "input-field", attrs: { row: "0" } },
                    [
                      _c("TextField", {
                        staticClass: "input",
                        attrs: {
                          hint: "Email",
                          isEnabled: !_vm.processing,
                          keyboardType: "email",
                          autocorrect: "false",
                          autocapitalizationType: "none",
                          returnKeyType: "next",
                          text: _vm.user.email
                        },
                        on: {
                          returnPress: _vm.focusPassword,
                          textChange: function($event) {
                            return _vm.$set(_vm.user, "email", $event.value)
                          }
                        }
                      }),
                      _c("StackLayout", { staticClass: "hr-light" })
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    { staticClass: "input-field", attrs: { row: "1" } },
                    [
                      _c("TextField", {
                        ref: "password",
                        staticClass: "input",
                        attrs: {
                          isEnabled: !_vm.processing,
                          hint: "Password",
                          secure: "true",
                          returnKeyType: _vm.isLoggingIn ? "done" : "next",
                          text: _vm.user.password
                        },
                        on: {
                          returnPress: _vm.focusConfirmPassword,
                          textChange: function($event) {
                            return _vm.$set(_vm.user, "password", $event.value)
                          }
                        }
                      }),
                      _c("StackLayout", { staticClass: "hr-light" })
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.isLoggingIn,
                          expression: "!isLoggingIn"
                        }
                      ],
                      staticClass: "input-field",
                      attrs: { row: "2" }
                    },
                    [
                      _c("TextField", {
                        ref: "confirmPassword",
                        staticClass: "input",
                        attrs: {
                          isEnabled: !_vm.processing,
                          hint: "Confirm password",
                          secure: "true",
                          returnKeyType: "done",
                          text: _vm.user.confirmPassword
                        },
                        on: {
                          textChange: function($event) {
                            return _vm.$set(
                              _vm.user,
                              "confirmPassword",
                              $event.value
                            )
                          }
                        }
                      }),
                      _c("StackLayout", { staticClass: "hr-light" })
                    ],
                    1
                  ),
                  _c("ActivityIndicator", {
                    attrs: { rowSpan: "3", busy: _vm.processing }
                  })
                ],
                1
              ),
              _c("Button", {
                staticClass: "btn btn-primary m-t-20 button-text",
                attrs: {
                  text: _vm.isLoggingIn ? "Log In" : "Sign Up",
                  isEnabled: !_vm.processing
                },
                on: { tap: _vm.handleFormSubmit }
              }),
              _c("Label", {
                staticClass: "login-label",
                attrs: {
                  "*v-show": "isLoggingIn",
                  text: "Forgot your password?"
                },
                on: {
                  tap: function($event) {
                    return _vm.forgotPassword()
                  }
                }
              })
            ],
            1
          ),
          _c(
            "Label",
            {
              staticClass: "login-label sign-up-label",
              on: { tap: _vm.toggleForm }
            },
            [
              _c(
                "FormattedString",
                [
                  _c("Span", {
                    attrs: {
                      text: _vm.isLoggingIn
                        ? "Don’t have an account? "
                        : "Back to Login"
                    }
                  }),
                  _c("Span", {
                    staticClass: "bold",
                    attrs: { text: _vm.isLoggingIn ? "Sign up" : "" }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css",
	"./app.js": "./app.js",
	"./components/offer/OfferStore.js": "./components/offer/OfferStore.js",
	"./components/recharge/RechargeStore.js": "./components/recharge/RechargeStore.js",
	"./components/user/UserStore.js": "./components/user/UserStore.js",
	"./config.js": "./config.js",
	"./env.js": "./env.js",
	"./fonts/fa5-all.css": "./fonts/fa5-all.css",
	"./routes/index.js": "./routes/index.js",
	"./services/backend-service.js": "./services/backend-service.js",
	"./store.js": "./store.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":" @import 'nativescript-theme-core/css/core.light.css'; "},{"type":"rule","selectors":[".btn-primary"],"declarations":[{"type":"declaration","property":"height","value":"50"},{"type":"declaration","property":"background-color","value":"#D51A1A"},{"type":"declaration","property":"border-radius","value":"5"},{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"font-weight","value":"600"}]},{"type":"rule","selectors":[".btn-primary:disabled"],"declarations":[{"type":"declaration","property":"opacity","value":"0.5"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./services/backend-service.js");
/* harmony import */ var nativescript_fonticon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-fonticon/nativescript-fonticon.js");
/* harmony import */ var nativescript_fonticon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_fonticon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tns-core-modules/platform");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./store.js");

        let applicationCheckPlatform = __webpack_require__("tns-core-modules/application");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("tns-core-modules/ui/frame");
__webpack_require__("tns-core-modules/ui/frame/activity");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        /**
 * @Author: Codeals
 * @Date:   05-03-2020
 * @Email:  ian@codeals.es
 * @Last modified by:   Codeals
 * @Last modified time: 06-03-2020
 * @Copyright: Codeals
 */


 // import RadListView from 'nativescript-ui-listview/vue'
// import RadSideDrawer from 'nativescript-ui-sidedrawer/vue'

 // import ChartVue from 'nativescript-ui-chart/vue';

 // import Vuex from './vuex';
// import appSettings from 'tns-core-modules/application-settings';


nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_5__["default"]);

nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$isAndroid = tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_4__["isAndroid"];
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$isIOS = tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_4__["isIOS"];
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.silent = true; //Initialize FontAwesome

nativescript_fonticon__WEBPACK_IMPORTED_MODULE_3__["TNSFontIcon"].debug = false;
nativescript_fonticon__WEBPACK_IMPORTED_MODULE_3__["TNSFontIcon"].paths = {
  'fa': './fonts/fa5-all.css'
};
nativescript_fonticon__WEBPACK_IMPORTED_MODULE_3__["TNSFontIcon"].loadCss();
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('fonticon', nativescript_fonticon__WEBPACK_IMPORTED_MODULE_3__["fonticon"]); // Vue.use(RadListView)
// login with backend

var backendService = new _services_backend_service__WEBPACK_IMPORTED_MODULE_2__["default"]();
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$backendService = backendService; // Vue.prototype.$appSettings = appSettings;

new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  render: h => h('frame', [h(_components_Login__WEBPACK_IMPORTED_MODULE_1__["default"])]),
  store: _store__WEBPACK_IMPORTED_MODULE_6__["default"]
}).$start(); // import Vue from "nativescript-vue";
// import routes from "./routes";
// import BackendService from "./services/backend-service";
// // Uncommment the following to see NativeScript-Vue output logs
// // Vue.config.silent = false;
// const backendService = new BackendService();
// Vue.prototype.$backendService = backendService;
// new Vue({
//   render: h => h("frame", [h(backendService.isLoggedIn() ? routes.home : routes.login)])
// }).$start();
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/Home.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('67410f3a')) {
      api.createRecord('67410f3a', component.options)
    } else {
      api.reload('67410f3a', component.options)
    }
    module.hot.accept("./components/Home.vue?vue&type=template&id=67410f3a&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&");
(function () {
      api.rerender('67410f3a', {
        render: _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Home.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Home.vue?vue&type=template&id=67410f3a&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Login.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c27482c4",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('c27482c4')) {
      api.createRecord('c27482c4', component.options)
    } else {
      api.reload('c27482c4', component.options)
    }
    module.hot.accept("./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&");
(function () {
      api.rerender('c27482c4', {
        render: _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/offer/OfferStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./config.js");
/**
 * @Author: alejandro
 * @Date:   2019-11-22T14:46:15+01:00
 * @Email:  alejo901003@hotmail.com
 * @Project: Recargame
 * @Last modified by:   alejandro
 * @Last modified time: 2019-11-23T14:17:45+01:00
 */



var state = {
  offers: []
};
var getters = {
  getCellOffersSchedule(state) {
    var list = state.offers;
    var now = moment__WEBPACK_IMPORTED_MODULE_1___default()(new Date()).format('YYYY/MM/DD');
    return list.filter(function (offer) {
      if (offer.type === 'Cell' && !moment__WEBPACK_IMPORTED_MODULE_1___default()(now).isBetween(offer.date_ini, offer.date_end, null, '[]')) {
        return true;
      }

      return false;
    });
  },

  getCellOffers(state) {
    var list = state.offers;
    var now = moment__WEBPACK_IMPORTED_MODULE_1___default()(new Date()).format('YYYY/MM/DD');
    return list.filter(function (offer) {
      if (offer.type === 'Cell' && moment__WEBPACK_IMPORTED_MODULE_1___default()(now).isBetween(offer.date_ini, offer.date_end, null, '[]')) {
        return true;
      }

      return false;
    });
  },

  getNautaOffers(state) {
    var list = state.offers;
    var now = moment__WEBPACK_IMPORTED_MODULE_1___default()(new Date()).format('YYYY/MM/DD');
    return list.filter(function (offer) {
      if (offer.type === 'Nauta' && moment__WEBPACK_IMPORTED_MODULE_1___default()(now).isBetween(offer.date_ini, offer.date_end, null, '[]')) {
        return true;
      }

      return false;
    });
  }

};
var mutations = {
  SET_OFFER_LIST(state, offers) {
    state.offers = offers;
  }

};
var actions = {
  getOfferList: (_ref) => {
    var {
      commit
    } = _ref;
    return vue__WEBPACK_IMPORTED_MODULE_0___default.a.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["offerList"]).then(response => {
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.$logger('info', 'offerList response', response);

      if (response.status === 200) {
        commit('SET_OFFER_LIST', response.body.data);
      }
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  state,
  mutations,
  actions,
  getters
});

/***/ }),

/***/ "./components/recharge/RechargeStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./config.js");
/**
 * @Author: alejandro
 * @Date:   2019-11-21T23:25:57+01:00
 * @Email:  alejo901003@hotmail.com
 * @Project: Recargame
 * @Last modified by:   alejandro
 * @Last modified time: 2019-11-26T23:25:11+01:00
 */


var state = {
  recharge: {},
  purchaseInfo: {},
  rechargeList: {} // recharge: {
  //   id: '',
  //   type: '',
  //   offer_id: {},
  //   price_pay: '',
  //   phone: '',
  //   email: ''
  // }

};
var getters = {};
var mutations = {
  SET_RECHARGE_QUICK(state, recharge) {
    state.recharge = recharge;
  },

  SET_RECHARGE_LIST(state, recharge) {
    state.rechargeList = recharge;
  },

  SET_PURCHASE_INFO(state, purchase) {
    state.purchaseInfo = purchase;
  },

  CLEAR_RECHARGE(state) {
    state.recharge = {};
  }

};
var actions = {
  setRecharge: (_ref, recharge) => {
    var {
      commit
    } = _ref;
    var postData = recharge;
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.$logger('info', 'setRecharge response', postData);
    commit('SET_RECHARGE_QUICK', postData);
  },
  setRechargeList: (_ref2) => {
    var {
      commit
    } = _ref2;
    return vue__WEBPACK_IMPORTED_MODULE_0___default.a.http.get(_config__WEBPACK_IMPORTED_MODULE_1__["rechargeList"], {
      headers: Object(_config__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
    }).then(response => {
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.$logger('info', 'setRechargeList response', response);

      if (response.status === 200) {
        commit('SET_RECHARGE_LIST', response.body.data);
      }

      return response;
    });
  },
  rechargeCell: (_ref3) => {
    var {
      commit
    } = _ref3;
    var postData = state.recharge;
    return vue__WEBPACK_IMPORTED_MODULE_0___default.a.http.post(_config__WEBPACK_IMPORTED_MODULE_1__["rechargeCell"], postData, {
      headers: Object(_config__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
    }).then(response => {
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.$logger('info', 'rechargecell response', response);

      if (response.status === 201) {
        commit('SET_PURCHASE_INFO', response.body.data);
      }

      return response;
    });
  },
  rechargeNauta: (_ref4) => {
    var {
      commit
    } = _ref4;
    var postData = state.recharge;
    return vue__WEBPACK_IMPORTED_MODULE_0___default.a.http.post(_config__WEBPACK_IMPORTED_MODULE_1__["rechargeNauta"], postData, {
      headers: Object(_config__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
    }).then(response => {
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.$logger('info', 'rechargeNauta response', response);
      commit('SET_PURCHASE_INFO', response.body.data);

      if (response.status === 201) {
        commit('SET_PURCHASE_INFO', response.body.data);
      }

      return response;
    });
  },
  multiRechargeCell: (_ref5, contacts) => {
    var {
      commit
    } = _ref5;
    var postData = contacts;
    return vue__WEBPACK_IMPORTED_MODULE_0___default.a.http.post(_config__WEBPACK_IMPORTED_MODULE_1__["multiRechargeCell"], postData, {
      headers: Object(_config__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
    }).then(response => {
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.$logger('info', 'multiRechargeCell response', response);

      if (response.status === 201) {
        commit('SET_PURCHASE_INFO', response.body.data);
      }

      return response;
    });
  },
  multiRechargeNauta: (_ref6, contacts) => {
    var {
      commit
    } = _ref6;
    var postData = contacts;
    return vue__WEBPACK_IMPORTED_MODULE_0___default.a.http.post(_config__WEBPACK_IMPORTED_MODULE_1__["multiRechargeNauta"], postData, {
      headers: Object(_config__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
    }).then(response => {
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.$logger('info', 'multiRechargeNauta response', response);

      if (response.status === 201) {
        commit('SET_PURCHASE_INFO', response.body.data);
      }

      return response;
    });
  },
  setRedsysPayment: (_ref7, rechargeId) => {
    var {
      commit
    } = _ref7;
    var postData = {
      offer_id: rechargeId
    };
    return vue__WEBPACK_IMPORTED_MODULE_0___default.a.http.post(_config__WEBPACK_IMPORTED_MODULE_1__["paymentRedsys"], postData, {
      headers: Object(_config__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
    }).then(response => {
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.$logger('info', 'setRedsysPayment response', response);

      if (response.status === 200) {// commit('SET_PURCHASE_INFO', response.body.data)
      }

      return response;
    });
  },
  setPayPalPayment: (_ref8, rechargeId) => {
    var {
      commit
    } = _ref8;
    var postData = {
      offer_id: rechargeId
    };
    return vue__WEBPACK_IMPORTED_MODULE_0___default.a.http.post(_config__WEBPACK_IMPORTED_MODULE_1__["paymentPayPal"], postData, {
      headers: Object(_config__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
    }).then(response => {
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.$logger('info', 'setPayPalPayment response', response);

      if (response.status === 200) {// commit('SET_PURCHASE_INFO', response.body.data)
      }

      return response;
    });
  },
  clearRecharge: (_ref9) => {
    var {
      commit
    } = _ref9;
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.$logger('info', 'clearRecharge');
    commit('CLEAR_RECHARGE');
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  state,
  mutations,
  actions,
  getters
});

/***/ }),

/***/ "./components/user/UserStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @Author: alejandro
 * @Date:   2019-11-21T19:08:21+01:00
 * @Email:  alejo901003@hotmail.com
 * @Last modified by:   alejandro
 * @Last modified time: 2019-11-26T14:55:35+01:00
 */
// import Vue from 'vue'
// import {
//   // getHeader,
//   // userListUrl
// } from './../../config'
var state = {
  authUser: null,
  is_banner: true,
  topMenu: true
};
var mutations = {
  SET_AUTH_USER(state, userObj) {
    state.authUser = userObj;
  },

  CLEAR_AUTH_USER(state) {
    state.authUser = null;
  },

  SET_IS_BANNER(state, status) {
    state.is_banner = status;
  },

  SET_IS_TOP(state, status) {
    state.topMenu = status;
  }

};
var actions = {
  setUserObject: (_ref, userObj) => {
    var {
      commit
    } = _ref;
    commit('SET_AUTH_USER', userObj);
  },
  clearAuthUser: (_ref2) => {
    var {
      commit
    } = _ref2;
    commit('CLEAR_AUTH_USER');
  },
  setBanner: (_ref3, status) => {
    var {
      commit
    } = _ref3;
    commit('SET_IS_BANNER', status);
  },
  setTopMenu: (_ref4, status) => {
    var {
      commit
    } = _ref4;
    commit('SET_IS_TOP', status);
  } // getUserList: ({commit}) => {
  //   return Vue.http.get(userListUrl, {headers: getHeader()})
  //     .then(response => {
  //       Vue.$logger('info', 'userListUrl response', response)
  //       if (response.status === 200) {
  //         commit('SET_USER_LIST', response.body.data)
  //         return response.body.data
  //       }
  //     })
  // }

};
/* harmony default export */ __webpack_exports__["default"] = ({
  state,
  mutations,
  actions
});

/***/ }),

/***/ "./config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiClient", function() { return apiClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiDomain", function() { return apiDomain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUrl", function() { return loginUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userUrl", function() { return userUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgotPassword", function() { return forgotPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetPassword", function() { return resetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUserUrl", function() { return registerUserUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeUserUrl", function() { return activeUserUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePassword", function() { return changePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientListUrl", function() { return clientListUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientById", function() { return getClientById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewClient", function() { return addNewClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateClient", function() { return updateClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteClient", function() { return deleteClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentRedsys", function() { return paymentRedsys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentPayPal", function() { return paymentPayPal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redsys", function() { return redsys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTestUrl", function() { return getTestUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeader", function() { return getHeader; });
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/application-settings");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @Author: Codeals
 * @Date:   06-03-2020
 * @Email:  ian@codeals.es
 * @Last modified by:   Codeals
 * @Last modified time: 06-03-2020
 * @Copyright: Codeals
 */

var apiClient = 'http://127.0.0.1:8080/';
var apiDomain = 'https://adminrecharge.codeals.es/';
var loginUrl = apiDomain + 'oauth/token';
var userUrl = apiDomain + 'api/user';
var forgotPassword = apiDomain + 'api/forgot-password';
var resetPassword = apiDomain + 'api/reset-password';
var registerUserUrl = apiDomain + 'api/user-register';
var activeUserUrl = apiDomain + 'api/user-active';
var changePassword = apiDomain + 'api/v1/change-password'; // client

var clientListUrl = apiDomain + 'api/v1/client-list';
var getClientById = apiDomain + 'api/v1/client-get';
var addNewClient = apiDomain + 'api/v1/client-add';
var updateClient = apiDomain + 'api/v1/client-update';
var deleteClient = apiDomain + 'api/v1/client-delete'; // paymemt

var paymentRedsys = apiDomain + 'api/v1/pay-redsys';
var paymentPayPal = apiDomain + 'api/v1/pay-paypal';
var redsys = 'https://sis.redsys.es/sis/realizarPago'; // test

var getTestUrl = apiDomain + 'api/test';
var getHeader = function getHeader() {
  // const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
  var tokenData = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_0__["getString"])("authUser");
  var headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + tokenData
  };
  return headers;
};

/***/ }),

/***/ "./env.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientId", function() { return clientId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientSecret", function() { return clientSecret; });
/**
 * @Author: Codeals
 * @Date:   06-03-2020
 * @Email:  ian@codeals.es
 * @Last modified by:   Codeals
 * @Last modified time: 06-03-2020
 * @Copyright: Codeals
 */
var clientId = '2';
var clientSecret = 'XYXHbI23XNN7ie1t4gyp9Clq09lSCE34dVWiRua8';

/***/ }),

/***/ "./fonts/fa5-all.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\r\n * Font Awesome Free 5.4.1 by @fontawesome - https://fontawesome.com\r\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\r\n */\r\n .fa-accessible-icon:before{content:\"\\F368\"}.fa-accusoft:before{content:\"\\F369\"}.fa-acquisitions-incorporated:before{content:\"\\F6AF\"}.fa-ad:before{content:\"\\F641\"}.fa-address-book:before{content:\"\\F2B9\"}.fa-address-card:before{content:\"\\F2BB\"}.fa-adjust:before{content:\"\\F042\"}.fa-adn:before{content:\"\\F170\"}.fa-adversal:before{content:\"\\F36A\"}.fa-affiliatetheme:before{content:\"\\F36B\"}.fa-air-freshener:before{content:\"\\F5D0\"}.fa-algolia:before{content:\"\\F36C\"}.fa-align-center:before{content:\"\\F037\"}.fa-align-justify:before{content:\"\\F039\"}.fa-align-left:before{content:\"\\F036\"}.fa-align-right:before{content:\"\\F038\"}.fa-alipay:before{content:\"\\F642\"}.fa-allergies:before{content:\"\\F461\"}.fa-amazon:before{content:\"\\F270\"}.fa-amazon-pay:before{content:\"\\F42C\"}.fa-ambulance:before{content:\"\\F0F9\"}.fa-american-sign-language-interpreting:before{content:\"\\F2A3\"}.fa-amilia:before{content:\"\\F36D\"}.fa-anchor:before{content:\"\\F13D\"}.fa-android:before{content:\"\\F17B\"}.fa-angellist:before{content:\"\\F209\"}.fa-angle-double-down:before{content:\"\\F103\"}.fa-angle-double-left:before{content:\"\\F100\"}.fa-angle-double-right:before{content:\"\\F101\"}.fa-angle-double-up:before{content:\"\\F102\"}.fa-angle-down:before{content:\"\\F107\"}.fa-angle-left:before{content:\"\\F104\"}.fa-angle-right:before{content:\"\\F105\"}.fa-angle-up:before{content:\"\\F106\"}.fa-angry:before{content:\"\\F556\"}.fa-angrycreative:before{content:\"\\F36E\"}.fa-angular:before{content:\"\\F420\"}.fa-ankh:before{content:\"\\F644\"}.fa-app-store:before{content:\"\\F36F\"}.fa-app-store-ios:before{content:\"\\F370\"}.fa-apper:before{content:\"\\F371\"}.fa-apple:before{content:\"\\F179\"}.fa-apple-alt:before{content:\"\\F5D1\"}.fa-apple-pay:before{content:\"\\F415\"}.fa-archive:before{content:\"\\F187\"}.fa-archway:before{content:\"\\F557\"}.fa-arrow-alt-circle-down:before{content:\"\\F358\"}.fa-arrow-alt-circle-left:before{content:\"\\F359\"}.fa-arrow-alt-circle-right:before{content:\"\\F35A\"}.fa-arrow-alt-circle-up:before{content:\"\\F35B\"}.fa-arrow-circle-down:before{content:\"\\F0AB\"}.fa-arrow-circle-left:before{content:\"\\F0A8\"}.fa-arrow-circle-right:before{content:\"\\F0A9\"}.fa-arrow-circle-up:before{content:\"\\F0AA\"}.fa-arrow-down:before{content:\"\\F063\"}.fa-arrow-left:before{content:\"\\F060\"}.fa-arrow-right:before{content:\"\\F061\"}.fa-arrow-up:before{content:\"\\F062\"}.fa-arrows-alt:before{content:\"\\F0B2\"}.fa-arrows-alt-h:before{content:\"\\F337\"}.fa-arrows-alt-v:before{content:\"\\F338\"}.fa-assistive-listening-systems:before{content:\"\\F2A2\"}.fa-asterisk:before{content:\"\\F069\"}.fa-asymmetrik:before{content:\"\\F372\"}.fa-at:before{content:\"\\F1FA\"}.fa-atlas:before{content:\"\\F558\"}.fa-atom:before{content:\"\\F5D2\"}.fa-audible:before{content:\"\\F373\"}.fa-audio-description:before{content:\"\\F29E\"}.fa-autoprefixer:before{content:\"\\F41C\"}.fa-avianex:before{content:\"\\F374\"}.fa-aviato:before{content:\"\\F421\"}.fa-award:before{content:\"\\F559\"}.fa-aws:before{content:\"\\F375\"}.fa-backspace:before{content:\"\\F55A\"}.fa-backward:before{content:\"\\F04A\"}.fa-balance-scale:before{content:\"\\F24E\"}.fa-ban:before{content:\"\\F05E\"}.fa-band-aid:before{content:\"\\F462\"}.fa-bandcamp:before{content:\"\\F2D5\"}.fa-barcode:before{content:\"\\F02A\"}.fa-bars:before{content:\"\\F0C9\"}.fa-baseball-ball:before{content:\"\\F433\"}.fa-basketball-ball:before{content:\"\\F434\"}.fa-bath:before{content:\"\\F2CD\"}.fa-battery-empty:before{content:\"\\F244\"}.fa-battery-full:before{content:\"\\F240\"}.fa-battery-half:before{content:\"\\F242\"}.fa-battery-quarter:before{content:\"\\F243\"}.fa-battery-three-quarters:before{content:\"\\F241\"}.fa-bed:before{content:\"\\F236\"}.fa-beer:before{content:\"\\F0FC\"}.fa-behance:before{content:\"\\F1B4\"}.fa-behance-square:before{content:\"\\F1B5\"}.fa-bell:before{content:\"\\F0F3\"}.fa-bell-slash:before{content:\"\\F1F6\"}.fa-bezier-curve:before{content:\"\\F55B\"}.fa-bible:before{content:\"\\F647\"}.fa-bicycle:before{content:\"\\F206\"}.fa-bimobject:before{content:\"\\F378\"}.fa-binoculars:before{content:\"\\F1E5\"}.fa-birthday-cake:before{content:\"\\F1FD\"}.fa-bitbucket:before{content:\"\\F171\"}.fa-bitcoin:before{content:\"\\F379\"}.fa-bity:before{content:\"\\F37A\"}.fa-black-tie:before{content:\"\\F27E\"}.fa-blackberry:before{content:\"\\F37B\"}.fa-blender:before{content:\"\\F517\"}.fa-blender-phone:before{content:\"\\F6B6\"}.fa-blind:before{content:\"\\F29D\"}.fa-blogger:before{content:\"\\F37C\"}.fa-blogger-b:before{content:\"\\F37D\"}.fa-bluetooth:before{content:\"\\F293\"}.fa-bluetooth-b:before{content:\"\\F294\"}.fa-bold:before{content:\"\\F032\"}.fa-bolt:before{content:\"\\F0E7\"}.fa-bomb:before{content:\"\\F1E2\"}.fa-bone:before{content:\"\\F5D7\"}.fa-bong:before{content:\"\\F55C\"}.fa-book:before{content:\"\\F02D\"}.fa-book-dead:before{content:\"\\F6B7\"}.fa-book-open:before{content:\"\\F518\"}.fa-book-reader:before{content:\"\\F5DA\"}.fa-bookmark:before{content:\"\\F02E\"}.fa-bowling-ball:before{content:\"\\F436\"}.fa-box:before{content:\"\\F466\"}.fa-box-open:before{content:\"\\F49E\"}.fa-boxes:before{content:\"\\F468\"}.fa-braille:before{content:\"\\F2A1\"}.fa-brain:before{content:\"\\F5DC\"}.fa-briefcase:before{content:\"\\F0B1\"}.fa-briefcase-medical:before{content:\"\\F469\"}.fa-broadcast-tower:before{content:\"\\F519\"}.fa-broom:before{content:\"\\F51A\"}.fa-brush:before{content:\"\\F55D\"}.fa-btc:before{content:\"\\F15A\"}.fa-bug:before{content:\"\\F188\"}.fa-building:before{content:\"\\F1AD\"}.fa-bullhorn:before{content:\"\\F0A1\"}.fa-bullseye:before{content:\"\\F140\"}.fa-burn:before{content:\"\\F46A\"}.fa-buromobelexperte:before{content:\"\\F37F\"}.fa-bus:before{content:\"\\F207\"}.fa-bus-alt:before{content:\"\\F55E\"}.fa-business-time:before{content:\"\\F64A\"}.fa-buysellads:before{content:\"\\F20D\"}.fa-calculator:before{content:\"\\F1EC\"}.fa-calendar:before{content:\"\\F133\"}.fa-calendar-alt:before{content:\"\\F073\"}.fa-calendar-check:before{content:\"\\F274\"}.fa-calendar-minus:before{content:\"\\F272\"}.fa-calendar-plus:before{content:\"\\F271\"}.fa-calendar-times:before{content:\"\\F273\"}.fa-camera:before{content:\"\\F030\"}.fa-camera-retro:before{content:\"\\F083\"}.fa-campground:before{content:\"\\F6BB\"}.fa-cannabis:before{content:\"\\F55F\"}.fa-capsules:before{content:\"\\F46B\"}.fa-car:before{content:\"\\F1B9\"}.fa-car-alt:before{content:\"\\F5DE\"}.fa-car-battery:before{content:\"\\F5DF\"}.fa-car-crash:before{content:\"\\F5E1\"}.fa-car-side:before{content:\"\\F5E4\"}.fa-caret-down:before{content:\"\\F0D7\"}.fa-caret-left:before{content:\"\\F0D9\"}.fa-caret-right:before{content:\"\\F0DA\"}.fa-caret-square-down:before{content:\"\\F150\"}.fa-caret-square-left:before{content:\"\\F191\"}.fa-caret-square-right:before{content:\"\\F152\"}.fa-caret-square-up:before{content:\"\\F151\"}.fa-caret-up:before{content:\"\\F0D8\"}.fa-cart-arrow-down:before{content:\"\\F218\"}.fa-cart-plus:before{content:\"\\F217\"}.fa-cat:before{content:\"\\F6BE\"}.fa-cc-amazon-pay:before{content:\"\\F42D\"}.fa-cc-amex:before{content:\"\\F1F3\"}.fa-cc-apple-pay:before{content:\"\\F416\"}.fa-cc-diners-club:before{content:\"\\F24C\"}.fa-cc-discover:before{content:\"\\F1F2\"}.fa-cc-jcb:before{content:\"\\F24B\"}.fa-cc-mastercard:before{content:\"\\F1F1\"}.fa-cc-paypal:before{content:\"\\F1F4\"}.fa-cc-stripe:before{content:\"\\F1F5\"}.fa-cc-visa:before{content:\"\\F1F0\"}.fa-centercode:before{content:\"\\F380\"}.fa-certificate:before{content:\"\\F0A3\"}.fa-chair:before{content:\"\\F6C0\"}.fa-chalkboard:before{content:\"\\F51B\"}.fa-chalkboard-teacher:before{content:\"\\F51C\"}.fa-charging-station:before{content:\"\\F5E7\"}.fa-chart-area:before{content:\"\\F1FE\"}.fa-chart-bar:before{content:\"\\F080\"}.fa-chart-line:before{content:\"\\F201\"}.fa-chart-pie:before{content:\"\\F200\"}.fa-check:before{content:\"\\F00C\"}.fa-check-circle:before{content:\"\\F058\"}.fa-check-double:before{content:\"\\F560\"}.fa-check-square:before{content:\"\\F14A\"}.fa-chess:before{content:\"\\F439\"}.fa-chess-bishop:before{content:\"\\F43A\"}.fa-chess-board:before{content:\"\\F43C\"}.fa-chess-king:before{content:\"\\F43F\"}.fa-chess-knight:before{content:\"\\F441\"}.fa-chess-pawn:before{content:\"\\F443\"}.fa-chess-queen:before{content:\"\\F445\"}.fa-chess-rook:before{content:\"\\F447\"}.fa-chevron-circle-down:before{content:\"\\F13A\"}.fa-chevron-circle-left:before{content:\"\\F137\"}.fa-chevron-circle-right:before{content:\"\\F138\"}.fa-chevron-circle-up:before{content:\"\\F139\"}.fa-chevron-down:before{content:\"\\F078\"}.fa-chevron-left:before{content:\"\\F053\"}.fa-chevron-right:before{content:\"\\F054\"}.fa-chevron-up:before{content:\"\\F077\"}.fa-child:before{content:\"\\F1AE\"}.fa-chrome:before{content:\"\\F268\"}.fa-church:before{content:\"\\F51D\"}.fa-circle:before{content:\"\\F111\"}.fa-circle-notch:before{content:\"\\F1CE\"}.fa-city:before{content:\"\\F64F\"}.fa-clipboard:before{content:\"\\F328\"}.fa-clipboard-check:before{content:\"\\F46C\"}.fa-clipboard-list:before{content:\"\\F46D\"}.fa-clock:before{content:\"\\F017\"}.fa-clone:before{content:\"\\F24D\"}.fa-closed-captioning:before{content:\"\\F20A\"}.fa-cloud:before{content:\"\\F0C2\"}.fa-cloud-download-alt:before{content:\"\\F381\"}.fa-cloud-moon:before{content:\"\\F6C3\"}.fa-cloud-sun:before{content:\"\\F6C4\"}.fa-cloud-upload-alt:before{content:\"\\F382\"}.fa-cloudscale:before{content:\"\\F383\"}.fa-cloudsmith:before{content:\"\\F384\"}.fa-cloudversify:before{content:\"\\F385\"}.fa-cocktail:before{content:\"\\F561\"}.fa-code:before{content:\"\\F121\"}.fa-code-branch:before{content:\"\\F126\"}.fa-codepen:before{content:\"\\F1CB\"}.fa-codiepie:before{content:\"\\F284\"}.fa-coffee:before{content:\"\\F0F4\"}.fa-cog:before{content:\"\\F013\"}.fa-cogs:before{content:\"\\F085\"}.fa-coins:before{content:\"\\F51E\"}.fa-columns:before{content:\"\\F0DB\"}.fa-comment:before{content:\"\\F075\"}.fa-comment-alt:before{content:\"\\F27A\"}.fa-comment-dollar:before{content:\"\\F651\"}.fa-comment-dots:before{content:\"\\F4AD\"}.fa-comment-slash:before{content:\"\\F4B3\"}.fa-comments:before{content:\"\\F086\"}.fa-comments-dollar:before{content:\"\\F653\"}.fa-compact-disc:before{content:\"\\F51F\"}.fa-compass:before{content:\"\\F14E\"}.fa-compress:before{content:\"\\F066\"}.fa-concierge-bell:before{content:\"\\F562\"}.fa-connectdevelop:before{content:\"\\F20E\"}.fa-contao:before{content:\"\\F26D\"}.fa-cookie:before{content:\"\\F563\"}.fa-cookie-bite:before{content:\"\\F564\"}.fa-copy:before{content:\"\\F0C5\"}.fa-copyright:before{content:\"\\F1F9\"}.fa-couch:before{content:\"\\F4B8\"}.fa-cpanel:before{content:\"\\F388\"}.fa-creative-commons:before{content:\"\\F25E\"}.fa-creative-commons-by:before{content:\"\\F4E7\"}.fa-creative-commons-nc:before{content:\"\\F4E8\"}.fa-creative-commons-nc-eu:before{content:\"\\F4E9\"}.fa-creative-commons-nc-jp:before{content:\"\\F4EA\"}.fa-creative-commons-nd:before{content:\"\\F4EB\"}.fa-creative-commons-pd:before{content:\"\\F4EC\"}.fa-creative-commons-pd-alt:before{content:\"\\F4ED\"}.fa-creative-commons-remix:before{content:\"\\F4EE\"}.fa-creative-commons-sa:before{content:\"\\F4EF\"}.fa-creative-commons-sampling:before{content:\"\\F4F0\"}.fa-creative-commons-sampling-plus:before{content:\"\\F4F1\"}.fa-creative-commons-share:before{content:\"\\F4F2\"}.fa-creative-commons-zero:before{content:\"\\F4F3\"}.fa-credit-card:before{content:\"\\F09D\"}.fa-critical-role:before{content:\"\\F6C9\"}.fa-crop:before{content:\"\\F125\"}.fa-crop-alt:before{content:\"\\F565\"}.fa-cross:before{content:\"\\F654\"}.fa-crosshairs:before{content:\"\\F05B\"}.fa-crow:before{content:\"\\F520\"}.fa-crown:before{content:\"\\F521\"}.fa-css3:before{content:\"\\F13C\"}.fa-css3-alt:before{content:\"\\F38B\"}.fa-cube:before{content:\"\\F1B2\"}.fa-cubes:before{content:\"\\F1B3\"}.fa-cut:before{content:\"\\F0C4\"}.fa-cuttlefish:before{content:\"\\F38C\"}.fa-d-and-d:before{content:\"\\F38D\"}.fa-dashcube:before{content:\"\\F210\"}.fa-database:before{content:\"\\F1C0\"}.fa-deaf:before{content:\"\\F2A4\"}.fa-delicious:before{content:\"\\F1A5\"}.fa-deploydog:before{content:\"\\F38E\"}.fa-deskpro:before{content:\"\\F38F\"}.fa-desktop:before{content:\"\\F108\"}.fa-dev:before{content:\"\\F6CC\"}.fa-deviantart:before{content:\"\\F1BD\"}.fa-dharmachakra:before{content:\"\\F655\"}.fa-diagnoses:before{content:\"\\F470\"}.fa-dice:before{content:\"\\F522\"}.fa-dice-d20:before{content:\"\\F6CF\"}.fa-dice-d6:before{content:\"\\F6D1\"}.fa-dice-five:before{content:\"\\F523\"}.fa-dice-four:before{content:\"\\F524\"}.fa-dice-one:before{content:\"\\F525\"}.fa-dice-six:before{content:\"\\F526\"}.fa-dice-three:before{content:\"\\F527\"}.fa-dice-two:before{content:\"\\F528\"}.fa-digg:before{content:\"\\F1A6\"}.fa-digital-ocean:before{content:\"\\F391\"}.fa-digital-tachograph:before{content:\"\\F566\"}.fa-directions:before{content:\"\\F5EB\"}.fa-discord:before{content:\"\\F392\"}.fa-discourse:before{content:\"\\F393\"}.fa-divide:before{content:\"\\F529\"}.fa-dizzy:before{content:\"\\F567\"}.fa-dna:before{content:\"\\F471\"}.fa-dochub:before{content:\"\\F394\"}.fa-docker:before{content:\"\\F395\"}.fa-dog:before{content:\"\\F6D3\"}.fa-dollar-sign:before{content:\"\\F155\"}.fa-dolly:before{content:\"\\F472\"}.fa-dolly-flatbed:before{content:\"\\F474\"}.fa-donate:before{content:\"\\F4B9\"}.fa-door-closed:before{content:\"\\F52A\"}.fa-door-open:before{content:\"\\F52B\"}.fa-dot-circle:before{content:\"\\F192\"}.fa-dove:before{content:\"\\F4BA\"}.fa-download:before{content:\"\\F019\"}.fa-draft2digital:before{content:\"\\F396\"}.fa-drafting-compass:before{content:\"\\F568\"}.fa-dragon:before{content:\"\\F6D5\"}.fa-draw-polygon:before{content:\"\\F5EE\"}.fa-dribbble:before{content:\"\\F17D\"}.fa-dribbble-square:before{content:\"\\F397\"}.fa-dropbox:before{content:\"\\F16B\"}.fa-drum:before{content:\"\\F569\"}.fa-drum-steelpan:before{content:\"\\F56A\"}.fa-drumstick-bite:before{content:\"\\F6D7\"}.fa-drupal:before{content:\"\\F1A9\"}.fa-dumbbell:before{content:\"\\F44B\"}.fa-dungeon:before{content:\"\\F6D9\"}.fa-dyalog:before{content:\"\\F399\"}.fa-earlybirds:before{content:\"\\F39A\"}.fa-ebay:before{content:\"\\F4F4\"}.fa-edge:before{content:\"\\F282\"}.fa-edit:before{content:\"\\F044\"}.fa-eject:before{content:\"\\F052\"}.fa-elementor:before{content:\"\\F430\"}.fa-ellipsis-h:before{content:\"\\F141\"}.fa-ellipsis-v:before{content:\"\\F142\"}.fa-ello:before{content:\"\\F5F1\"}.fa-ember:before{content:\"\\F423\"}.fa-empire:before{content:\"\\F1D1\"}.fa-envelope:before{content:\"\\F0E0\"}.fa-envelope-open:before{content:\"\\F2B6\"}.fa-envelope-open-text:before{content:\"\\F658\"}.fa-envelope-square:before{content:\"\\F199\"}.fa-envira:before{content:\"\\F299\"}.fa-equals:before{content:\"\\F52C\"}.fa-eraser:before{content:\"\\F12D\"}.fa-erlang:before{content:\"\\F39D\"}.fa-ethereum:before{content:\"\\F42E\"}.fa-etsy:before{content:\"\\F2D7\"}.fa-euro-sign:before{content:\"\\F153\"}.fa-exchange-alt:before{content:\"\\F362\"}.fa-exclamation:before{content:\"\\F12A\"}.fa-exclamation-circle:before{content:\"\\F06A\"}.fa-exclamation-triangle:before{content:\"\\F071\"}.fa-expand:before{content:\"\\F065\"}.fa-expand-arrows-alt:before{content:\"\\F31E\"}.fa-expeditedssl:before{content:\"\\F23E\"}.fa-external-link-alt:before{content:\"\\F35D\"}.fa-external-link-square-alt:before{content:\"\\F360\"}.fa-eye:before{content:\"\\F06E\"}.fa-eye-dropper:before{content:\"\\F1FB\"}.fa-eye-slash:before{content:\"\\F070\"}.fa-facebook:before{content:\"\\F09A\"}.fa-facebook-f:before{content:\"\\F39E\"}.fa-facebook-messenger:before{content:\"\\F39F\"}.fa-facebook-square:before{content:\"\\F082\"}.fa-fantasy-flight-games:before{content:\"\\F6DC\"}.fa-fast-backward:before{content:\"\\F049\"}.fa-fast-forward:before{content:\"\\F050\"}.fa-fax:before{content:\"\\F1AC\"}.fa-feather:before{content:\"\\F52D\"}.fa-feather-alt:before{content:\"\\F56B\"}.fa-female:before{content:\"\\F182\"}.fa-fighter-jet:before{content:\"\\F0FB\"}.fa-file:before{content:\"\\F15B\"}.fa-file-alt:before{content:\"\\F15C\"}.fa-file-archive:before{content:\"\\F1C6\"}.fa-file-audio:before{content:\"\\F1C7\"}.fa-file-code:before{content:\"\\F1C9\"}.fa-file-contract:before{content:\"\\F56C\"}.fa-file-csv:before{content:\"\\F6DD\"}.fa-file-download:before{content:\"\\F56D\"}.fa-file-excel:before{content:\"\\F1C3\"}.fa-file-export:before{content:\"\\F56E\"}.fa-file-image:before{content:\"\\F1C5\"}.fa-file-import:before{content:\"\\F56F\"}.fa-file-invoice:before{content:\"\\F570\"}.fa-file-invoice-dollar:before{content:\"\\F571\"}.fa-file-medical:before{content:\"\\F477\"}.fa-file-medical-alt:before{content:\"\\F478\"}.fa-file-pdf:before{content:\"\\F1C1\"}.fa-file-powerpoint:before{content:\"\\F1C4\"}.fa-file-prescription:before{content:\"\\F572\"}.fa-file-signature:before{content:\"\\F573\"}.fa-file-upload:before{content:\"\\F574\"}.fa-file-video:before{content:\"\\F1C8\"}.fa-file-word:before{content:\"\\F1C2\"}.fa-fill:before{content:\"\\F575\"}.fa-fill-drip:before{content:\"\\F576\"}.fa-film:before{content:\"\\F008\"}.fa-filter:before{content:\"\\F0B0\"}.fa-fingerprint:before{content:\"\\F577\"}.fa-fire:before{content:\"\\F06D\"}.fa-fire-extinguisher:before{content:\"\\F134\"}.fa-firefox:before{content:\"\\F269\"}.fa-first-aid:before{content:\"\\F479\"}.fa-first-order:before{content:\"\\F2B0\"}.fa-first-order-alt:before{content:\"\\F50A\"}.fa-firstdraft:before{content:\"\\F3A1\"}.fa-fish:before{content:\"\\F578\"}.fa-fist-raised:before{content:\"\\F6DE\"}.fa-flag:before{content:\"\\F024\"}.fa-flag-checkered:before{content:\"\\F11E\"}.fa-flask:before{content:\"\\F0C3\"}.fa-flickr:before{content:\"\\F16E\"}.fa-flipboard:before{content:\"\\F44D\"}.fa-flushed:before{content:\"\\F579\"}.fa-fly:before{content:\"\\F417\"}.fa-folder:before{content:\"\\F07B\"}.fa-folder-minus:before{content:\"\\F65D\"}.fa-folder-open:before{content:\"\\F07C\"}.fa-folder-plus:before{content:\"\\F65E\"}.fa-font:before{content:\"\\F031\"}.fa-font-awesome:before{content:\"\\F2B4\"}.fa-font-awesome-alt:before{content:\"\\F35C\"}.fa-font-awesome-flag:before{content:\"\\F425\"}.fa-font-awesome-logo-full:before{content:\"\\F4E6\"}.fa-fonticons:before{content:\"\\F280\"}.fa-fonticons-fi:before{content:\"\\F3A2\"}.fa-football-ball:before{content:\"\\F44E\"}.fa-fort-awesome:before{content:\"\\F286\"}.fa-fort-awesome-alt:before{content:\"\\F3A3\"}.fa-forumbee:before{content:\"\\F211\"}.fa-forward:before{content:\"\\F04E\"}.fa-foursquare:before{content:\"\\F180\"}.fa-free-code-camp:before{content:\"\\F2C5\"}.fa-freebsd:before{content:\"\\F3A4\"}.fa-frog:before{content:\"\\F52E\"}.fa-frown:before{content:\"\\F119\"}.fa-frown-open:before{content:\"\\F57A\"}.fa-fulcrum:before{content:\"\\F50B\"}.fa-funnel-dollar:before{content:\"\\F662\"}.fa-futbol:before{content:\"\\F1E3\"}.fa-galactic-republic:before{content:\"\\F50C\"}.fa-galactic-senate:before{content:\"\\F50D\"}.fa-gamepad:before{content:\"\\F11B\"}.fa-gas-pump:before{content:\"\\F52F\"}.fa-gavel:before{content:\"\\F0E3\"}.fa-gem:before{content:\"\\F3A5\"}.fa-genderless:before{content:\"\\F22D\"}.fa-get-pocket:before{content:\"\\F265\"}.fa-gg:before{content:\"\\F260\"}.fa-gg-circle:before{content:\"\\F261\"}.fa-ghost:before{content:\"\\F6E2\"}.fa-gift:before{content:\"\\F06B\"}.fa-git:before{content:\"\\F1D3\"}.fa-git-square:before{content:\"\\F1D2\"}.fa-github:before{content:\"\\F09B\"}.fa-github-alt:before{content:\"\\F113\"}.fa-github-square:before{content:\"\\F092\"}.fa-gitkraken:before{content:\"\\F3A6\"}.fa-gitlab:before{content:\"\\F296\"}.fa-gitter:before{content:\"\\F426\"}.fa-glass-martini:before{content:\"\\F000\"}.fa-glass-martini-alt:before{content:\"\\F57B\"}.fa-glasses:before{content:\"\\F530\"}.fa-glide:before{content:\"\\F2A5\"}.fa-glide-g:before{content:\"\\F2A6\"}.fa-globe:before{content:\"\\F0AC\"}.fa-globe-africa:before{content:\"\\F57C\"}.fa-globe-americas:before{content:\"\\F57D\"}.fa-globe-asia:before{content:\"\\F57E\"}.fa-gofore:before{content:\"\\F3A7\"}.fa-golf-ball:before{content:\"\\F450\"}.fa-goodreads:before{content:\"\\F3A8\"}.fa-goodreads-g:before{content:\"\\F3A9\"}.fa-google:before{content:\"\\F1A0\"}.fa-google-drive:before{content:\"\\F3AA\"}.fa-google-play:before{content:\"\\F3AB\"}.fa-google-plus:before{content:\"\\F2B3\"}.fa-google-plus-g:before{content:\"\\F0D5\"}.fa-google-plus-square:before{content:\"\\F0D4\"}.fa-google-wallet:before{content:\"\\F1EE\"}.fa-gopuram:before{content:\"\\F664\"}.fa-graduation-cap:before{content:\"\\F19D\"}.fa-gratipay:before{content:\"\\F184\"}.fa-grav:before{content:\"\\F2D6\"}.fa-greater-than:before{content:\"\\F531\"}.fa-greater-than-equal:before{content:\"\\F532\"}.fa-grimace:before{content:\"\\F57F\"}.fa-grin:before{content:\"\\F580\"}.fa-grin-alt:before{content:\"\\F581\"}.fa-grin-beam:before{content:\"\\F582\"}.fa-grin-beam-sweat:before{content:\"\\F583\"}.fa-grin-hearts:before{content:\"\\F584\"}.fa-grin-squint:before{content:\"\\F585\"}.fa-grin-squint-tears:before{content:\"\\F586\"}.fa-grin-stars:before{content:\"\\F587\"}.fa-grin-tears:before{content:\"\\F588\"}.fa-grin-tongue:before{content:\"\\F589\"}.fa-grin-tongue-squint:before{content:\"\\F58A\"}.fa-grin-tongue-wink:before{content:\"\\F58B\"}.fa-grin-wink:before{content:\"\\F58C\"}.fa-grip-horizontal:before{content:\"\\F58D\"}.fa-grip-vertical:before{content:\"\\F58E\"}.fa-gripfire:before{content:\"\\F3AC\"}.fa-grunt:before{content:\"\\F3AD\"}.fa-gulp:before{content:\"\\F3AE\"}.fa-h-square:before{content:\"\\F0FD\"}.fa-hacker-news:before{content:\"\\F1D4\"}.fa-hacker-news-square:before{content:\"\\F3AF\"}.fa-hackerrank:before{content:\"\\F5F7\"}.fa-hammer:before{content:\"\\F6E3\"}.fa-hamsa:before{content:\"\\F665\"}.fa-hand-holding:before{content:\"\\F4BD\"}.fa-hand-holding-heart:before{content:\"\\F4BE\"}.fa-hand-holding-usd:before{content:\"\\F4C0\"}.fa-hand-lizard:before{content:\"\\F258\"}.fa-hand-paper:before{content:\"\\F256\"}.fa-hand-peace:before{content:\"\\F25B\"}.fa-hand-point-down:before{content:\"\\F0A7\"}.fa-hand-point-left:before{content:\"\\F0A5\"}.fa-hand-point-right:before{content:\"\\F0A4\"}.fa-hand-point-up:before{content:\"\\F0A6\"}.fa-hand-pointer:before{content:\"\\F25A\"}.fa-hand-rock:before{content:\"\\F255\"}.fa-hand-scissors:before{content:\"\\F257\"}.fa-hand-spock:before{content:\"\\F259\"}.fa-hands:before{content:\"\\F4C2\"}.fa-hands-helping:before{content:\"\\F4C4\"}.fa-handshake:before{content:\"\\F2B5\"}.fa-hanukiah:before{content:\"\\F6E6\"}.fa-hashtag:before{content:\"\\F292\"}.fa-hat-wizard:before{content:\"\\F6E8\"}.fa-haykal:before{content:\"\\F666\"}.fa-hdd:before{content:\"\\F0A0\"}.fa-heading:before{content:\"\\F1DC\"}.fa-headphones:before{content:\"\\F025\"}.fa-headphones-alt:before{content:\"\\F58F\"}.fa-headset:before{content:\"\\F590\"}.fa-heart:before{content:\"\\F004\"}.fa-heartbeat:before{content:\"\\F21E\"}.fa-helicopter:before{content:\"\\F533\"}.fa-highlighter:before{content:\"\\F591\"}.fa-hiking:before{content:\"\\F6EC\"}.fa-hippo:before{content:\"\\F6ED\"}.fa-hips:before{content:\"\\F452\"}.fa-hire-a-helper:before{content:\"\\F3B0\"}.fa-history:before{content:\"\\F1DA\"}.fa-hockey-puck:before{content:\"\\F453\"}.fa-home:before{content:\"\\F015\"}.fa-hooli:before{content:\"\\F427\"}.fa-hornbill:before{content:\"\\F592\"}.fa-horse:before{content:\"\\F6F0\"}.fa-hospital:before{content:\"\\F0F8\"}.fa-hospital-alt:before{content:\"\\F47D\"}.fa-hospital-symbol:before{content:\"\\F47E\"}.fa-hot-tub:before{content:\"\\F593\"}.fa-hotel:before{content:\"\\F594\"}.fa-hotjar:before{content:\"\\F3B1\"}.fa-hourglass:before{content:\"\\F254\"}.fa-hourglass-end:before{content:\"\\F253\"}.fa-hourglass-half:before{content:\"\\F252\"}.fa-hourglass-start:before{content:\"\\F251\"}.fa-house-damage:before{content:\"\\F6F1\"}.fa-houzz:before{content:\"\\F27C\"}.fa-hryvnia:before{content:\"\\F6F2\"}.fa-html5:before{content:\"\\F13B\"}.fa-hubspot:before{content:\"\\F3B2\"}.fa-i-cursor:before{content:\"\\F246\"}.fa-id-badge:before{content:\"\\F2C1\"}.fa-id-card:before{content:\"\\F2C2\"}.fa-id-card-alt:before{content:\"\\F47F\"}.fa-image:before{content:\"\\F03E\"}.fa-images:before{content:\"\\F302\"}.fa-imdb:before{content:\"\\F2D8\"}.fa-inbox:before{content:\"\\F01C\"}.fa-indent:before{content:\"\\F03C\"}.fa-industry:before{content:\"\\F275\"}.fa-infinity:before{content:\"\\F534\"}.fa-info:before{content:\"\\F129\"}.fa-info-circle:before{content:\"\\F05A\"}.fa-instagram:before{content:\"\\F16D\"}.fa-internet-explorer:before{content:\"\\F26B\"}.fa-ioxhost:before{content:\"\\F208\"}.fa-italic:before{content:\"\\F033\"}.fa-itunes:before{content:\"\\F3B4\"}.fa-itunes-note:before{content:\"\\F3B5\"}.fa-java:before{content:\"\\F4E4\"}.fa-jedi:before{content:\"\\F669\"}.fa-jedi-order:before{content:\"\\F50E\"}.fa-jenkins:before{content:\"\\F3B6\"}.fa-joget:before{content:\"\\F3B7\"}.fa-joint:before{content:\"\\F595\"}.fa-joomla:before{content:\"\\F1AA\"}.fa-journal-whills:before{content:\"\\F66A\"}.fa-js:before{content:\"\\F3B8\"}.fa-js-square:before{content:\"\\F3B9\"}.fa-jsfiddle:before{content:\"\\F1CC\"}.fa-kaaba:before{content:\"\\F66B\"}.fa-kaggle:before{content:\"\\F5FA\"}.fa-key:before{content:\"\\F084\"}.fa-keybase:before{content:\"\\F4F5\"}.fa-keyboard:before{content:\"\\F11C\"}.fa-keycdn:before{content:\"\\F3BA\"}.fa-khanda:before{content:\"\\F66D\"}.fa-kickstarter:before{content:\"\\F3BB\"}.fa-kickstarter-k:before{content:\"\\F3BC\"}.fa-kiss:before{content:\"\\F596\"}.fa-kiss-beam:before{content:\"\\F597\"}.fa-kiss-wink-heart:before{content:\"\\F598\"}.fa-kiwi-bird:before{content:\"\\F535\"}.fa-korvue:before{content:\"\\F42F\"}.fa-landmark:before{content:\"\\F66F\"}.fa-language:before{content:\"\\F1AB\"}.fa-laptop:before{content:\"\\F109\"}.fa-laptop-code:before{content:\"\\F5FC\"}.fa-laravel:before{content:\"\\F3BD\"}.fa-lastfm:before{content:\"\\F202\"}.fa-lastfm-square:before{content:\"\\F203\"}.fa-laugh:before{content:\"\\F599\"}.fa-laugh-beam:before{content:\"\\F59A\"}.fa-laugh-squint:before{content:\"\\F59B\"}.fa-laugh-wink:before{content:\"\\F59C\"}.fa-layer-group:before{content:\"\\F5FD\"}.fa-leaf:before{content:\"\\F06C\"}.fa-leanpub:before{content:\"\\F212\"}.fa-lemon:before{content:\"\\F094\"}.fa-less:before{content:\"\\F41D\"}.fa-less-than:before{content:\"\\F536\"}.fa-less-than-equal:before{content:\"\\F537\"}.fa-level-down-alt:before{content:\"\\F3BE\"}.fa-level-up-alt:before{content:\"\\F3BF\"}.fa-life-ring:before{content:\"\\F1CD\"}.fa-lightbulb:before{content:\"\\F0EB\"}.fa-line:before{content:\"\\F3C0\"}.fa-link:before{content:\"\\F0C1\"}.fa-linkedin:before{content:\"\\F08C\"}.fa-linkedin-in:before{content:\"\\F0E1\"}.fa-linode:before{content:\"\\F2B8\"}.fa-linux:before{content:\"\\F17C\"}.fa-lira-sign:before{content:\"\\F195\"}.fa-list:before{content:\"\\F03A\"}.fa-list-alt:before{content:\"\\F022\"}.fa-list-ol:before{content:\"\\F0CB\"}.fa-list-ul:before{content:\"\\F0CA\"}.fa-location-arrow:before{content:\"\\F124\"}.fa-lock:before{content:\"\\F023\"}.fa-lock-open:before{content:\"\\F3C1\"}.fa-long-arrow-alt-down:before{content:\"\\F309\"}.fa-long-arrow-alt-left:before{content:\"\\F30A\"}.fa-long-arrow-alt-right:before{content:\"\\F30B\"}.fa-long-arrow-alt-up:before{content:\"\\F30C\"}.fa-low-vision:before{content:\"\\F2A8\"}.fa-luggage-cart:before{content:\"\\F59D\"}.fa-lyft:before{content:\"\\F3C3\"}.fa-magento:before{content:\"\\F3C4\"}.fa-magic:before{content:\"\\F0D0\"}.fa-magnet:before{content:\"\\F076\"}.fa-mail-bulk:before{content:\"\\F674\"}.fa-mailchimp:before{content:\"\\F59E\"}.fa-male:before{content:\"\\F183\"}.fa-mandalorian:before{content:\"\\F50F\"}.fa-map:before{content:\"\\F279\"}.fa-map-marked:before{content:\"\\F59F\"}.fa-map-marked-alt:before{content:\"\\F5A0\"}.fa-map-marker:before{content:\"\\F041\"}.fa-map-marker-alt:before{content:\"\\F3C5\"}.fa-map-pin:before{content:\"\\F276\"}.fa-map-signs:before{content:\"\\F277\"}.fa-markdown:before{content:\"\\F60F\"}.fa-marker:before{content:\"\\F5A1\"}.fa-mars:before{content:\"\\F222\"}.fa-mars-double:before{content:\"\\F227\"}.fa-mars-stroke:before{content:\"\\F229\"}.fa-mars-stroke-h:before{content:\"\\F22B\"}.fa-mars-stroke-v:before{content:\"\\F22A\"}.fa-mask:before{content:\"\\F6FA\"}.fa-mastodon:before{content:\"\\F4F6\"}.fa-maxcdn:before{content:\"\\F136\"}.fa-medal:before{content:\"\\F5A2\"}.fa-medapps:before{content:\"\\F3C6\"}.fa-medium:before{content:\"\\F23A\"}.fa-medium-m:before{content:\"\\F3C7\"}.fa-medkit:before{content:\"\\F0FA\"}.fa-medrt:before{content:\"\\F3C8\"}.fa-meetup:before{content:\"\\F2E0\"}.fa-megaport:before{content:\"\\F5A3\"}.fa-meh:before{content:\"\\F11A\"}.fa-meh-blank:before{content:\"\\F5A4\"}.fa-meh-rolling-eyes:before{content:\"\\F5A5\"}.fa-memory:before{content:\"\\F538\"}.fa-menorah:before{content:\"\\F676\"}.fa-mercury:before{content:\"\\F223\"}.fa-microchip:before{content:\"\\F2DB\"}.fa-microphone:before{content:\"\\F130\"}.fa-microphone-alt:before{content:\"\\F3C9\"}.fa-microphone-alt-slash:before{content:\"\\F539\"}.fa-microphone-slash:before{content:\"\\F131\"}.fa-microscope:before{content:\"\\F610\"}.fa-microsoft:before{content:\"\\F3CA\"}.fa-minus:before{content:\"\\F068\"}.fa-minus-circle:before{content:\"\\F056\"}.fa-minus-square:before{content:\"\\F146\"}.fa-mix:before{content:\"\\F3CB\"}.fa-mixcloud:before{content:\"\\F289\"}.fa-mizuni:before{content:\"\\F3CC\"}.fa-mobile:before{content:\"\\F10B\"}.fa-mobile-alt:before{content:\"\\F3CD\"}.fa-modx:before{content:\"\\F285\"}.fa-monero:before{content:\"\\F3D0\"}.fa-money-bill:before{content:\"\\F0D6\"}.fa-money-bill-alt:before{content:\"\\F3D1\"}.fa-money-bill-wave:before{content:\"\\F53A\"}.fa-money-bill-wave-alt:before{content:\"\\F53B\"}.fa-money-check:before{content:\"\\F53C\"}.fa-money-check-alt:before{content:\"\\F53D\"}.fa-monument:before{content:\"\\F5A6\"}.fa-moon:before{content:\"\\F186\"}.fa-mortar-pestle:before{content:\"\\F5A7\"}.fa-mosque:before{content:\"\\F678\"}.fa-motorcycle:before{content:\"\\F21C\"}.fa-mountain:before{content:\"\\F6FC\"}.fa-mouse-pointer:before{content:\"\\F245\"}.fa-music:before{content:\"\\F001\"}.fa-napster:before{content:\"\\F3D2\"}.fa-neos:before{content:\"\\F612\"}.fa-network-wired:before{content:\"\\F6FF\"}.fa-neuter:before{content:\"\\F22C\"}.fa-newspaper:before{content:\"\\F1EA\"}.fa-nimblr:before{content:\"\\F5A8\"}.fa-nintendo-switch:before{content:\"\\F418\"}.fa-node:before{content:\"\\F419\"}.fa-node-js:before{content:\"\\F3D3\"}.fa-not-equal:before{content:\"\\F53E\"}.fa-notes-medical:before{content:\"\\F481\"}.fa-npm:before{content:\"\\F3D4\"}.fa-ns8:before{content:\"\\F3D5\"}.fa-nutritionix:before{content:\"\\F3D6\"}.fa-object-group:before{content:\"\\F247\"}.fa-object-ungroup:before{content:\"\\F248\"}.fa-odnoklassniki:before{content:\"\\F263\"}.fa-odnoklassniki-square:before{content:\"\\F264\"}.fa-oil-can:before{content:\"\\F613\"}.fa-old-republic:before{content:\"\\F510\"}.fa-om:before{content:\"\\F679\"}.fa-opencart:before{content:\"\\F23D\"}.fa-openid:before{content:\"\\F19B\"}.fa-opera:before{content:\"\\F26A\"}.fa-optin-monster:before{content:\"\\F23C\"}.fa-osi:before{content:\"\\F41A\"}.fa-otter:before{content:\"\\F700\"}.fa-outdent:before{content:\"\\F03B\"}.fa-page4:before{content:\"\\F3D7\"}.fa-pagelines:before{content:\"\\F18C\"}.fa-paint-brush:before{content:\"\\F1FC\"}.fa-paint-roller:before{content:\"\\F5AA\"}.fa-palette:before{content:\"\\F53F\"}.fa-palfed:before{content:\"\\F3D8\"}.fa-pallet:before{content:\"\\F482\"}.fa-paper-plane:before{content:\"\\F1D8\"}.fa-paperclip:before{content:\"\\F0C6\"}.fa-parachute-box:before{content:\"\\F4CD\"}.fa-paragraph:before{content:\"\\F1DD\"}.fa-parking:before{content:\"\\F540\"}.fa-passport:before{content:\"\\F5AB\"}.fa-pastafarianism:before{content:\"\\F67B\"}.fa-paste:before{content:\"\\F0EA\"}.fa-patreon:before{content:\"\\F3D9\"}.fa-pause:before{content:\"\\F04C\"}.fa-pause-circle:before{content:\"\\F28B\"}.fa-paw:before{content:\"\\F1B0\"}.fa-paypal:before{content:\"\\F1ED\"}.fa-peace:before{content:\"\\F67C\"}.fa-pen:before{content:\"\\F304\"}.fa-pen-alt:before{content:\"\\F305\"}.fa-pen-fancy:before{content:\"\\F5AC\"}.fa-pen-nib:before{content:\"\\F5AD\"}.fa-pen-square:before{content:\"\\F14B\"}.fa-pencil-alt:before{content:\"\\F303\"}.fa-pencil-ruler:before{content:\"\\F5AE\"}.fa-penny-arcade:before{content:\"\\F704\"}.fa-people-carry:before{content:\"\\F4CE\"}.fa-percent:before{content:\"\\F295\"}.fa-percentage:before{content:\"\\F541\"}.fa-periscope:before{content:\"\\F3DA\"}.fa-phabricator:before{content:\"\\F3DB\"}.fa-phoenix-framework:before{content:\"\\F3DC\"}.fa-phoenix-squadron:before{content:\"\\F511\"}.fa-phone:before{content:\"\\F095\"}.fa-phone-slash:before{content:\"\\F3DD\"}.fa-phone-square:before{content:\"\\F098\"}.fa-phone-volume:before{content:\"\\F2A0\"}.fa-php:before{content:\"\\F457\"}.fa-pied-piper:before{content:\"\\F2AE\"}.fa-pied-piper-alt:before{content:\"\\F1A8\"}.fa-pied-piper-hat:before{content:\"\\F4E5\"}.fa-pied-piper-pp:before{content:\"\\F1A7\"}.fa-piggy-bank:before{content:\"\\F4D3\"}.fa-pills:before{content:\"\\F484\"}.fa-pinterest:before{content:\"\\F0D2\"}.fa-pinterest-p:before{content:\"\\F231\"}.fa-pinterest-square:before{content:\"\\F0D3\"}.fa-place-of-worship:before{content:\"\\F67F\"}.fa-plane:before{content:\"\\F072\"}.fa-plane-arrival:before{content:\"\\F5AF\"}.fa-plane-departure:before{content:\"\\F5B0\"}.fa-play:before{content:\"\\F04B\"}.fa-play-circle:before{content:\"\\F144\"}.fa-playstation:before{content:\"\\F3DF\"}.fa-plug:before{content:\"\\F1E6\"}.fa-plus:before{content:\"\\F067\"}.fa-plus-circle:before{content:\"\\F055\"}.fa-plus-square:before{content:\"\\F0FE\"}.fa-podcast:before{content:\"\\F2CE\"}.fa-poll:before{content:\"\\F681\"}.fa-poll-h:before{content:\"\\F682\"}.fa-poo:before{content:\"\\F2FE\"}.fa-poop:before{content:\"\\F619\"}.fa-portrait:before{content:\"\\F3E0\"}.fa-pound-sign:before{content:\"\\F154\"}.fa-power-off:before{content:\"\\F011\"}.fa-pray:before{content:\"\\F683\"}.fa-praying-hands:before{content:\"\\F684\"}.fa-prescription:before{content:\"\\F5B1\"}.fa-prescription-bottle:before{content:\"\\F485\"}.fa-prescription-bottle-alt:before{content:\"\\F486\"}.fa-print:before{content:\"\\F02F\"}.fa-procedures:before{content:\"\\F487\"}.fa-product-hunt:before{content:\"\\F288\"}.fa-project-diagram:before{content:\"\\F542\"}.fa-pushed:before{content:\"\\F3E1\"}.fa-puzzle-piece:before{content:\"\\F12E\"}.fa-python:before{content:\"\\F3E2\"}.fa-qq:before{content:\"\\F1D6\"}.fa-qrcode:before{content:\"\\F029\"}.fa-question:before{content:\"\\F128\"}.fa-question-circle:before{content:\"\\F059\"}.fa-quidditch:before{content:\"\\F458\"}.fa-quinscape:before{content:\"\\F459\"}.fa-quora:before{content:\"\\F2C4\"}.fa-quote-left:before{content:\"\\F10D\"}.fa-quote-right:before{content:\"\\F10E\"}.fa-quran:before{content:\"\\F687\"}.fa-r-project:before{content:\"\\F4F7\"}.fa-random:before{content:\"\\F074\"}.fa-ravelry:before{content:\"\\F2D9\"}.fa-react:before{content:\"\\F41B\"}.fa-readme:before{content:\"\\F4D5\"}.fa-rebel:before{content:\"\\F1D0\"}.fa-receipt:before{content:\"\\F543\"}.fa-recycle:before{content:\"\\F1B8\"}.fa-red-river:before{content:\"\\F3E3\"}.fa-reddit:before{content:\"\\F1A1\"}.fa-reddit-alien:before{content:\"\\F281\"}.fa-reddit-square:before{content:\"\\F1A2\"}.fa-redo:before{content:\"\\F01E\"}.fa-redo-alt:before{content:\"\\F2F9\"}.fa-registered:before{content:\"\\F25D\"}.fa-rendact:before{content:\"\\F3E4\"}.fa-renren:before{content:\"\\F18B\"}.fa-reply:before{content:\"\\F3E5\"}.fa-reply-all:before{content:\"\\F122\"}.fa-replyd:before{content:\"\\F3E6\"}.fa-researchgate:before{content:\"\\F4F8\"}.fa-resolving:before{content:\"\\F3E7\"}.fa-retweet:before{content:\"\\F079\"}.fa-rev:before{content:\"\\F5B2\"}.fa-ribbon:before{content:\"\\F4D6\"}.fa-ring:before{content:\"\\F70B\"}.fa-road:before{content:\"\\F018\"}.fa-robot:before{content:\"\\F544\"}.fa-rocket:before{content:\"\\F135\"}.fa-rocketchat:before{content:\"\\F3E8\"}.fa-rockrms:before{content:\"\\F3E9\"}.fa-route:before{content:\"\\F4D7\"}.fa-rss:before{content:\"\\F09E\"}.fa-rss-square:before{content:\"\\F143\"}.fa-ruble-sign:before{content:\"\\F158\"}.fa-ruler:before{content:\"\\F545\"}.fa-ruler-combined:before{content:\"\\F546\"}.fa-ruler-horizontal:before{content:\"\\F547\"}.fa-ruler-vertical:before{content:\"\\F548\"}.fa-running:before{content:\"\\F70C\"}.fa-rupee-sign:before{content:\"\\F156\"}.fa-sad-cry:before{content:\"\\F5B3\"}.fa-sad-tear:before{content:\"\\F5B4\"}.fa-safari:before{content:\"\\F267\"}.fa-sass:before{content:\"\\F41E\"}.fa-save:before{content:\"\\F0C7\"}.fa-schlix:before{content:\"\\F3EA\"}.fa-school:before{content:\"\\F549\"}.fa-screwdriver:before{content:\"\\F54A\"}.fa-scribd:before{content:\"\\F28A\"}.fa-scroll:before{content:\"\\F70E\"}.fa-search:before{content:\"\\F002\"}.fa-search-dollar:before{content:\"\\F688\"}.fa-search-location:before{content:\"\\F689\"}.fa-search-minus:before{content:\"\\F010\"}.fa-search-plus:before{content:\"\\F00E\"}.fa-searchengin:before{content:\"\\F3EB\"}.fa-seedling:before{content:\"\\F4D8\"}.fa-sellcast:before{content:\"\\F2DA\"}.fa-sellsy:before{content:\"\\F213\"}.fa-server:before{content:\"\\F233\"}.fa-servicestack:before{content:\"\\F3EC\"}.fa-shapes:before{content:\"\\F61F\"}.fa-share:before{content:\"\\F064\"}.fa-share-alt:before{content:\"\\F1E0\"}.fa-share-alt-square:before{content:\"\\F1E1\"}.fa-share-square:before{content:\"\\F14D\"}.fa-shekel-sign:before{content:\"\\F20B\"}.fa-shield-alt:before{content:\"\\F3ED\"}.fa-ship:before{content:\"\\F21A\"}.fa-shipping-fast:before{content:\"\\F48B\"}.fa-shirtsinbulk:before{content:\"\\F214\"}.fa-shoe-prints:before{content:\"\\F54B\"}.fa-shopping-bag:before{content:\"\\F290\"}.fa-shopping-basket:before{content:\"\\F291\"}.fa-shopping-cart:before{content:\"\\F07A\"}.fa-shopware:before{content:\"\\F5B5\"}.fa-shower:before{content:\"\\F2CC\"}.fa-shuttle-van:before{content:\"\\F5B6\"}.fa-sign:before{content:\"\\F4D9\"}.fa-sign-in-alt:before{content:\"\\F2F6\"}.fa-sign-language:before{content:\"\\F2A7\"}.fa-sign-out-alt:before{content:\"\\F2F5\"}.fa-signal:before{content:\"\\F012\"}.fa-signature:before{content:\"\\F5B7\"}.fa-simplybuilt:before{content:\"\\F215\"}.fa-sistrix:before{content:\"\\F3EE\"}.fa-sitemap:before{content:\"\\F0E8\"}.fa-sith:before{content:\"\\F512\"}.fa-skull:before{content:\"\\F54C\"}.fa-skull-crossbones:before{content:\"\\F714\"}.fa-skyatlas:before{content:\"\\F216\"}.fa-skype:before{content:\"\\F17E\"}.fa-slack:before{content:\"\\F198\"}.fa-slack-hash:before{content:\"\\F3EF\"}.fa-slash:before{content:\"\\F715\"}.fa-sliders-h:before{content:\"\\F1DE\"}.fa-slideshare:before{content:\"\\F1E7\"}.fa-smile:before{content:\"\\F118\"}.fa-smile-beam:before{content:\"\\F5B8\"}.fa-smile-wink:before{content:\"\\F4DA\"}.fa-smoking:before{content:\"\\F48D\"}.fa-smoking-ban:before{content:\"\\F54D\"}.fa-snapchat:before{content:\"\\F2AB\"}.fa-snapchat-ghost:before{content:\"\\F2AC\"}.fa-snapchat-square:before{content:\"\\F2AD\"}.fa-snowflake:before{content:\"\\F2DC\"}.fa-socks:before{content:\"\\F696\"}.fa-solar-panel:before{content:\"\\F5BA\"}.fa-sort:before{content:\"\\F0DC\"}.fa-sort-alpha-down:before{content:\"\\F15D\"}.fa-sort-alpha-up:before{content:\"\\F15E\"}.fa-sort-amount-down:before{content:\"\\F160\"}.fa-sort-amount-up:before{content:\"\\F161\"}.fa-sort-down:before{content:\"\\F0DD\"}.fa-sort-numeric-down:before{content:\"\\F162\"}.fa-sort-numeric-up:before{content:\"\\F163\"}.fa-sort-up:before{content:\"\\F0DE\"}.fa-soundcloud:before{content:\"\\F1BE\"}.fa-spa:before{content:\"\\F5BB\"}.fa-space-shuttle:before{content:\"\\F197\"}.fa-speakap:before{content:\"\\F3F3\"}.fa-spider:before{content:\"\\F717\"}.fa-spinner:before{content:\"\\F110\"}.fa-splotch:before{content:\"\\F5BC\"}.fa-spotify:before{content:\"\\F1BC\"}.fa-spray-can:before{content:\"\\F5BD\"}.fa-square:before{content:\"\\F0C8\"}.fa-square-full:before{content:\"\\F45C\"}.fa-square-root-alt:before{content:\"\\F698\"}.fa-squarespace:before{content:\"\\F5BE\"}.fa-stack-exchange:before{content:\"\\F18D\"}.fa-stack-overflow:before{content:\"\\F16C\"}.fa-stamp:before{content:\"\\F5BF\"}.fa-star:before{content:\"\\F005\"}.fa-star-and-crescent:before{content:\"\\F699\"}.fa-star-half:before{content:\"\\F089\"}.fa-star-half-alt:before{content:\"\\F5C0\"}.fa-star-of-david:before{content:\"\\F69A\"}.fa-star-of-life:before{content:\"\\F621\"}.fa-staylinked:before{content:\"\\F3F5\"}.fa-steam:before{content:\"\\F1B6\"}.fa-steam-square:before{content:\"\\F1B7\"}.fa-steam-symbol:before{content:\"\\F3F6\"}.fa-step-backward:before{content:\"\\F048\"}.fa-step-forward:before{content:\"\\F051\"}.fa-stethoscope:before{content:\"\\F0F1\"}.fa-sticker-mule:before{content:\"\\F3F7\"}.fa-sticky-note:before{content:\"\\F249\"}.fa-stop:before{content:\"\\F04D\"}.fa-stop-circle:before{content:\"\\F28D\"}.fa-stopwatch:before{content:\"\\F2F2\"}.fa-store:before{content:\"\\F54E\"}.fa-store-alt:before{content:\"\\F54F\"}.fa-strava:before{content:\"\\F428\"}.fa-stream:before{content:\"\\F550\"}.fa-street-view:before{content:\"\\F21D\"}.fa-strikethrough:before{content:\"\\F0CC\"}.fa-stripe:before{content:\"\\F429\"}.fa-stripe-s:before{content:\"\\F42A\"}.fa-stroopwafel:before{content:\"\\F551\"}.fa-studiovinari:before{content:\"\\F3F8\"}.fa-stumbleupon:before{content:\"\\F1A4\"}.fa-stumbleupon-circle:before{content:\"\\F1A3\"}.fa-subscript:before{content:\"\\F12C\"}.fa-subway:before{content:\"\\F239\"}.fa-suitcase:before{content:\"\\F0F2\"}.fa-suitcase-rolling:before{content:\"\\F5C1\"}.fa-sun:before{content:\"\\F185\"}.fa-superpowers:before{content:\"\\F2DD\"}.fa-superscript:before{content:\"\\F12B\"}.fa-supple:before{content:\"\\F3F9\"}.fa-surprise:before{content:\"\\F5C2\"}.fa-swatchbook:before{content:\"\\F5C3\"}.fa-swimmer:before{content:\"\\F5C4\"}.fa-swimming-pool:before{content:\"\\F5C5\"}.fa-synagogue:before{content:\"\\F69B\"}.fa-sync:before{content:\"\\F021\"}.fa-sync-alt:before{content:\"\\F2F1\"}.fa-syringe:before{content:\"\\F48E\"}.fa-table:before{content:\"\\F0CE\"}.fa-table-tennis:before{content:\"\\F45D\"}.fa-tablet:before{content:\"\\F10A\"}.fa-tablet-alt:before{content:\"\\F3FA\"}.fa-tablets:before{content:\"\\F490\"}.fa-tachometer-alt:before{content:\"\\F3FD\"}.fa-tag:before{content:\"\\F02B\"}.fa-tags:before{content:\"\\F02C\"}.fa-tape:before{content:\"\\F4DB\"}.fa-tasks:before{content:\"\\F0AE\"}.fa-taxi:before{content:\"\\F1BA\"}.fa-teamspeak:before{content:\"\\F4F9\"}.fa-teeth:before{content:\"\\F62E\"}.fa-teeth-open:before{content:\"\\F62F\"}.fa-telegram:before{content:\"\\F2C6\"}.fa-telegram-plane:before{content:\"\\F3FE\"}.fa-tencent-weibo:before{content:\"\\F1D5\"}.fa-terminal:before{content:\"\\F120\"}.fa-text-height:before{content:\"\\F034\"}.fa-text-width:before{content:\"\\F035\"}.fa-th:before{content:\"\\F00A\"}.fa-th-large:before{content:\"\\F009\"}.fa-th-list:before{content:\"\\F00B\"}.fa-the-red-yeti:before{content:\"\\F69D\"}.fa-theater-masks:before{content:\"\\F630\"}.fa-themeco:before{content:\"\\F5C6\"}.fa-themeisle:before{content:\"\\F2B2\"}.fa-thermometer:before{content:\"\\F491\"}.fa-thermometer-empty:before{content:\"\\F2CB\"}.fa-thermometer-full:before{content:\"\\F2C7\"}.fa-thermometer-half:before{content:\"\\F2C9\"}.fa-thermometer-quarter:before{content:\"\\F2CA\"}.fa-thermometer-three-quarters:before{content:\"\\F2C8\"}.fa-thumbs-down:before{content:\"\\F165\"}.fa-thumbs-up:before{content:\"\\F164\"}.fa-thumbtack:before{content:\"\\F08D\"}.fa-ticket-alt:before{content:\"\\F3FF\"}.fa-times:before{content:\"\\F00D\"}.fa-times-circle:before{content:\"\\F057\"}.fa-tint:before{content:\"\\F043\"}.fa-tint-slash:before{content:\"\\F5C7\"}.fa-tired:before{content:\"\\F5C8\"}.fa-toggle-off:before{content:\"\\F204\"}.fa-toggle-on:before{content:\"\\F205\"}.fa-toilet-paper:before{content:\"\\F71E\"}.fa-toolbox:before{content:\"\\F552\"}.fa-tooth:before{content:\"\\F5C9\"}.fa-torah:before{content:\"\\F6A0\"}.fa-torii-gate:before{content:\"\\F6A1\"}.fa-tractor:before{content:\"\\F722\"}.fa-trade-federation:before{content:\"\\F513\"}.fa-trademark:before{content:\"\\F25C\"}.fa-traffic-light:before{content:\"\\F637\"}.fa-train:before{content:\"\\F238\"}.fa-transgender:before{content:\"\\F224\"}.fa-transgender-alt:before{content:\"\\F225\"}.fa-trash:before{content:\"\\F1F8\"}.fa-trash-alt:before{content:\"\\F2ED\"}.fa-tree:before{content:\"\\F1BB\"}.fa-trello:before{content:\"\\F181\"}.fa-tripadvisor:before{content:\"\\F262\"}.fa-trophy:before{content:\"\\F091\"}.fa-truck:before{content:\"\\F0D1\"}.fa-truck-loading:before{content:\"\\F4DE\"}.fa-truck-monster:before{content:\"\\F63B\"}.fa-truck-moving:before{content:\"\\F4DF\"}.fa-truck-pickup:before{content:\"\\F63C\"}.fa-tshirt:before{content:\"\\F553\"}.fa-tty:before{content:\"\\F1E4\"}.fa-tumblr:before{content:\"\\F173\"}.fa-tumblr-square:before{content:\"\\F174\"}.fa-tv:before{content:\"\\F26C\"}.fa-twitch:before{content:\"\\F1E8\"}.fa-twitter:before{content:\"\\F099\"}.fa-twitter-square:before{content:\"\\F081\"}.fa-typo3:before{content:\"\\F42B\"}.fa-uber:before{content:\"\\F402\"}.fa-uikit:before{content:\"\\F403\"}.fa-umbrella:before{content:\"\\F0E9\"}.fa-umbrella-beach:before{content:\"\\F5CA\"}.fa-underline:before{content:\"\\F0CD\"}.fa-undo:before{content:\"\\F0E2\"}.fa-undo-alt:before{content:\"\\F2EA\"}.fa-uniregistry:before{content:\"\\F404\"}.fa-universal-access:before{content:\"\\F29A\"}.fa-university:before{content:\"\\F19C\"}.fa-unlink:before{content:\"\\F127\"}.fa-unlock:before{content:\"\\F09C\"}.fa-unlock-alt:before{content:\"\\F13E\"}.fa-untappd:before{content:\"\\F405\"}.fa-upload:before{content:\"\\F093\"}.fa-usb:before{content:\"\\F287\"}.fa-user:before{content:\"\\F007\"}.fa-user-alt:before{content:\"\\F406\"}.fa-user-alt-slash:before{content:\"\\F4FA\"}.fa-user-astronaut:before{content:\"\\F4FB\"}.fa-user-check:before{content:\"\\F4FC\"}.fa-user-circle:before{content:\"\\F2BD\"}.fa-user-clock:before{content:\"\\F4FD\"}.fa-user-cog:before{content:\"\\F4FE\"}.fa-user-edit:before{content:\"\\F4FF\"}.fa-user-friends:before{content:\"\\F500\"}.fa-user-graduate:before{content:\"\\F501\"}.fa-user-injured:before{content:\"\\F728\"}.fa-user-lock:before{content:\"\\F502\"}.fa-user-md:before{content:\"\\F0F0\"}.fa-user-minus:before{content:\"\\F503\"}.fa-user-ninja:before{content:\"\\F504\"}.fa-user-plus:before{content:\"\\F234\"}.fa-user-secret:before{content:\"\\F21B\"}.fa-user-shield:before{content:\"\\F505\"}.fa-user-slash:before{content:\"\\F506\"}.fa-user-tag:before{content:\"\\F507\"}.fa-user-tie:before{content:\"\\F508\"}.fa-user-times:before{content:\"\\F235\"}.fa-users:before{content:\"\\F0C0\"}.fa-users-cog:before{content:\"\\F509\"}.fa-ussunnah:before{content:\"\\F407\"}.fa-utensil-spoon:before{content:\"\\F2E5\"}.fa-utensils:before{content:\"\\F2E7\"}.fa-vaadin:before{content:\"\\F408\"}.fa-vector-square:before{content:\"\\F5CB\"}.fa-venus:before{content:\"\\F221\"}.fa-venus-double:before{content:\"\\F226\"}.fa-venus-mars:before{content:\"\\F228\"}.fa-viacoin:before{content:\"\\F237\"}.fa-viadeo:before{content:\"\\F2A9\"}.fa-viadeo-square:before{content:\"\\F2AA\"}.fa-vial:before{content:\"\\F492\"}.fa-vials:before{content:\"\\F493\"}.fa-viber:before{content:\"\\F409\"}.fa-video:before{content:\"\\F03D\"}.fa-video-slash:before{content:\"\\F4E2\"}.fa-vihara:before{content:\"\\F6A7\"}.fa-vimeo:before{content:\"\\F40A\"}.fa-vimeo-square:before{content:\"\\F194\"}.fa-vimeo-v:before{content:\"\\F27D\"}.fa-vine:before{content:\"\\F1CA\"}.fa-vk:before{content:\"\\F189\"}.fa-vnv:before{content:\"\\F40B\"}.fa-volleyball-ball:before{content:\"\\F45F\"}.fa-volume-down:before{content:\"\\F027\"}.fa-volume-mute:before{content:\"\\F6A9\"}.fa-volume-off:before{content:\"\\F026\"}.fa-volume-up:before{content:\"\\F028\"}.fa-vuejs:before{content:\"\\F41F\"}.fa-walking:before{content:\"\\F554\"}.fa-wallet:before{content:\"\\F555\"}.fa-warehouse:before{content:\"\\F494\"}.fa-weebly:before{content:\"\\F5CC\"}.fa-weibo:before{content:\"\\F18A\"}.fa-weight:before{content:\"\\F496\"}.fa-weight-hanging:before{content:\"\\F5CD\"}.fa-weixin:before{content:\"\\F1D7\"}.fa-whatsapp:before{content:\"\\F232\"}.fa-whatsapp-square:before{content:\"\\F40C\"}.fa-wheelchair:before{content:\"\\F193\"}.fa-whmcs:before{content:\"\\F40D\"}.fa-wifi:before{content:\"\\F1EB\"}.fa-wikipedia-w:before{content:\"\\F266\"}.fa-wind:before{content:\"\\F72E\"}.fa-window-close:before{content:\"\\F410\"}.fa-window-maximize:before{content:\"\\F2D0\"}.fa-window-minimize:before{content:\"\\F2D1\"}.fa-window-restore:before{content:\"\\F2D2\"}.fa-windows:before{content:\"\\F17A\"}.fa-wine-bottle:before{content:\"\\F72F\"}.fa-wine-glass:before{content:\"\\F4E3\"}.fa-wine-glass-alt:before{content:\"\\F5CE\"}.fa-wix:before{content:\"\\F5CF\"}.fa-wizards-of-the-coast:before{content:\"\\F730\"}.fa-wolf-pack-battalion:before{content:\"\\F514\"}.fa-won-sign:before{content:\"\\F159\"}.fa-wordpress:before{content:\"\\F19A\"}.fa-wordpress-simple:before{content:\"\\F411\"}.fa-wpbeginner:before{content:\"\\F297\"}.fa-wpexplorer:before{content:\"\\F2DE\"}.fa-wpforms:before{content:\"\\F298\"}.fa-wrench:before{content:\"\\F0AD\"}.fa-x-ray:before{content:\"\\F497\"}.fa-xbox:before{content:\"\\F412\"}.fa-xing:before{content:\"\\F168\"}.fa-xing-square:before{content:\"\\F169\"}.fa-y-combinator:before{content:\"\\F23B\"}.fa-yahoo:before{content:\"\\F19E\"}.fa-yandex:before{content:\"\\F413\"}.fa-yandex-international:before{content:\"\\F414\"}.fa-yelp:before{content:\"\\F1E9\"}.fa-yen-sign:before{content:\"\\F157\"}.fa-yin-yang:before{content:\"\\F6AD\"}.fa-yoast:before{content:\"\\F2B1\"}.fa-youtube:before{content:\"\\F167\"}.fa-youtube-square:before{content:\"\\F431\"}.fa-zhihu:before{content:\"\\F63F\"}", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './fonts/fa5-all.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./routes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue");


var routes = {
  login: _components_Login__WEBPACK_IMPORTED_MODULE_0__["default"],
  home: _components_Home__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./services/backend-service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackendService; });
/* harmony import */ var kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kinvey-nativescript-sdk");
/* harmony import */ var kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__);
// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.

kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__["init"]({
  appKey: "kid_SyY8LYO8M",
  appSecret: "09282985d7c540f7b076a9c7fd884c77"
});
class BackendService {
  isLoggedIn() {
    return !!kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__["User"].getActiveUser();
  }

  login(user) {
    return kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__["User"].login(user.email, user.password);
  }

  logout() {
    return kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__["User"].logout();
  }

  register(user) {
    return kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__["User"].signup({
      username: user.email,
      password: user.password
    });
  }

}

/***/ }),

/***/ "./store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_user_UserStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/user/UserStore.js");
/* harmony import */ var _components_recharge_RechargeStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/recharge/RechargeStore.js");
/* harmony import */ var _components_offer_OfferStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/offer/OfferStore.js");
/**
 * @Author: Codeals
 * @Date:   05-03-2020
 * @Email:  ian@codeals.es
 * @Last modified by:   Codeals
 * @Last modified time: 06-03-2020
 * @Copyright: Codeals
 */


nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);


 // import contactStore from './components/contact/ContactStore'

var debug = "development" !== 'production';
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  modules: {
    userStore: _components_user_UserStore__WEBPACK_IMPORTED_MODULE_2__["default"],
    offerStore: _components_offer_OfferStore__WEBPACK_IMPORTED_MODULE_4__["default"],
    rechargeStore: _components_recharge_RechargeStore__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  strict: debug
}));

/***/ }),

/***/ "kinvey-nativescript-sdk":
/***/ (function(module, exports) {

module.exports = require("kinvey-nativescript-sdk");

/***/ }),

/***/ "nativescript-vue":
/***/ (function(module, exports) {

module.exports = require("nativescript-vue");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/application-settings":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application-settings");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/data/observable-array":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/data/observable-array");

/***/ }),

/***/ "tns-core-modules/fetch":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/fetch");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/platform":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/platform");

/***/ }),

/***/ "tns-core-modules/text/formatted-string":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/text/formatted-string");

/***/ }),

/***/ "tns-core-modules/text/span":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/text/span");

/***/ }),

/***/ "tns-core-modules/ui/action-bar":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/action-bar");

/***/ }),

/***/ "tns-core-modules/ui/activity-indicator":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/activity-indicator");

/***/ }),

/***/ "tns-core-modules/ui/border":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/border");

/***/ }),

/***/ "tns-core-modules/ui/bottom-navigation":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/bottom-navigation");

/***/ }),

/***/ "tns-core-modules/ui/button":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/button");

/***/ }),

/***/ "tns-core-modules/ui/content-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/content-view");

/***/ }),

/***/ "tns-core-modules/ui/core/view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/core/view");

/***/ }),

/***/ "tns-core-modules/ui/date-picker":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/date-picker");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/frame/activity":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame/activity");

/***/ }),

/***/ "tns-core-modules/ui/html-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/html-view");

/***/ }),

/***/ "tns-core-modules/ui/image":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/image");

/***/ }),

/***/ "tns-core-modules/ui/label":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/label");

/***/ }),

/***/ "tns-core-modules/ui/layouts/absolute-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/absolute-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/dock-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/dock-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/flexbox-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/flexbox-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/grid-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/grid-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/layout-base":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/layout-base");

/***/ }),

/***/ "tns-core-modules/ui/layouts/stack-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/stack-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/wrap-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/wrap-layout");

/***/ }),

/***/ "tns-core-modules/ui/list-picker":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/list-picker");

/***/ }),

/***/ "tns-core-modules/ui/list-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/list-view");

/***/ }),

/***/ "tns-core-modules/ui/page":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/page");

/***/ }),

/***/ "tns-core-modules/ui/placeholder":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/placeholder");

/***/ }),

/***/ "tns-core-modules/ui/progress":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/progress");

/***/ }),

/***/ "tns-core-modules/ui/proxy-view-container":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/proxy-view-container");

/***/ }),

/***/ "tns-core-modules/ui/scroll-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/scroll-view");

/***/ }),

/***/ "tns-core-modules/ui/search-bar":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/search-bar");

/***/ }),

/***/ "tns-core-modules/ui/segmented-bar":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/segmented-bar");

/***/ }),

/***/ "tns-core-modules/ui/slider":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/slider");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ }),

/***/ "tns-core-modules/ui/switch":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/switch");

/***/ }),

/***/ "tns-core-modules/ui/tab-navigation-base/tab-content-item":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tab-navigation-base/tab-content-item");

/***/ }),

/***/ "tns-core-modules/ui/tab-navigation-base/tab-strip":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tab-navigation-base/tab-strip");

/***/ }),

/***/ "tns-core-modules/ui/tab-navigation-base/tab-strip-item":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tab-navigation-base/tab-strip-item");

/***/ }),

/***/ "tns-core-modules/ui/tab-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tab-view");

/***/ }),

/***/ "tns-core-modules/ui/tabs":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tabs");

/***/ }),

/***/ "tns-core-modules/ui/text-field":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/text-field");

/***/ }),

/***/ "tns-core-modules/ui/text-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/text-view");

/***/ }),

/***/ "tns-core-modules/ui/time-picker":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/time-picker");

/***/ }),

/***/ "tns-core-modules/ui/web-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/web-view");

/***/ }),

/***/ "tns-core-modules/utils/types":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/utils/types");

/***/ }),

/***/ "tns-core-modules/xml":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/xml");

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzRmN2IiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWU/MDE0NyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlP2I2NmIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWU/M2NlOCIsIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzU2MjUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZT85Yjg1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/ODM0MiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLnZ1ZT9lNjA2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4udnVlPzIxMjQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWU/ZmI0ZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL29mZmVyL09mZmVyU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZWNoYXJnZS9SZWNoYXJnZVN0b3JlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdXNlci9Vc2VyU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnLmpzIiwid2VicGFjazovLy8uL2Vudi5qcyIsIndlYnBhY2s6Ly8vLi9mb250cy9mYTUtYWxsLmNzcyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYmFja2VuZC1zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXZ1ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2ZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3RleHQvZm9ybWF0dGVkLXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdGV4dC9zcGFuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpb24tYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2JvcmRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvYm90dG9tLW5hdmlnYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29udGVudC12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RhdGUtcGlja2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvYWN0aXZpdHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2h0bWwtdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvaW1hZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2Fic29sdXRlLWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9kb2NrLWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9mbGV4Ym94LWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9ncmlkLWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9sYXlvdXQtYmFzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvd3JhcC1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtcGlja2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BsYWNlaG9sZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wcm9ncmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvcHJveHktdmlldy1jb250YWluZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3Njcm9sbC12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWdtZW50ZWQtYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zbGlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N3aXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItY29udGVudC1pdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItbmF2aWdhdGlvbi1iYXNlL3RhYi1zdHJpcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItc3RyaXAtaXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGltZS1waWNrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3dlYi12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy90eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMveG1sXCIiXSwibmFtZXMiOlsiVnVlIiwiQXBwIiwiQmFja2VuZFNlcnZpY2UiLCJUTlNGb250SWNvbiIsImZvbnRpY29uIiwiaXNBbmRyb2lkIiwiaXNJT1MiLCJWdWV4Iiwic3RvcmUiLCJwcm90b3R5cGUiLCIkaXNBbmRyb2lkIiwiJGlzSU9TIiwiY29uZmlnIiwic2lsZW50IiwiZGVidWciLCJmaWx0ZXIiLCJiYWNrZW5kU2VydmljZSIsIiRiYWNrZW5kU2VydmljZSIsInJlbmRlciIsImgiLCIkc3RhcnQiLCJzdGF0ZSIsIm9mZmVycyIsImdldHRlcnMiLCJnZXRDZWxsT2ZmZXJzU2NoZWR1bGUiLCJsaXN0Iiwibm93IiwibW9tZW50IiwiRGF0ZSIsImZvcm1hdCIsIm9mZmVyIiwidHlwZSIsImlzQmV0d2VlbiIsImRhdGVfaW5pIiwiZGF0ZV9lbmQiLCJnZXRDZWxsT2ZmZXJzIiwiZ2V0TmF1dGFPZmZlcnMiLCJtdXRhdGlvbnMiLCJTRVRfT0ZGRVJfTElTVCIsImFjdGlvbnMiLCJnZXRPZmZlckxpc3QiLCJjb21taXQiLCJodHRwIiwiZ2V0Iiwib2ZmZXJMaXN0IiwidGhlbiIsInJlc3BvbnNlIiwiJGxvZ2dlciIsInN0YXR1cyIsImJvZHkiLCJkYXRhIiwicmVjaGFyZ2UiLCJwdXJjaGFzZUluZm8iLCJyZWNoYXJnZUxpc3QiLCJTRVRfUkVDSEFSR0VfUVVJQ0siLCJTRVRfUkVDSEFSR0VfTElTVCIsIlNFVF9QVVJDSEFTRV9JTkZPIiwicHVyY2hhc2UiLCJDTEVBUl9SRUNIQVJHRSIsInNldFJlY2hhcmdlIiwicG9zdERhdGEiLCJzZXRSZWNoYXJnZUxpc3QiLCJoZWFkZXJzIiwiZ2V0SGVhZGVyIiwicmVjaGFyZ2VDZWxsIiwicG9zdCIsInJlY2hhcmdlTmF1dGEiLCJtdWx0aVJlY2hhcmdlQ2VsbCIsImNvbnRhY3RzIiwibXVsdGlSZWNoYXJnZU5hdXRhIiwic2V0UmVkc3lzUGF5bWVudCIsInJlY2hhcmdlSWQiLCJvZmZlcl9pZCIsInBheW1lbnRSZWRzeXMiLCJzZXRQYXlQYWxQYXltZW50IiwicGF5bWVudFBheVBhbCIsImNsZWFyUmVjaGFyZ2UiLCJhdXRoVXNlciIsImlzX2Jhbm5lciIsInRvcE1lbnUiLCJTRVRfQVVUSF9VU0VSIiwidXNlck9iaiIsIkNMRUFSX0FVVEhfVVNFUiIsIlNFVF9JU19CQU5ORVIiLCJTRVRfSVNfVE9QIiwic2V0VXNlck9iamVjdCIsImNsZWFyQXV0aFVzZXIiLCJzZXRCYW5uZXIiLCJzZXRUb3BNZW51IiwiYXBpQ2xpZW50IiwiYXBpRG9tYWluIiwibG9naW5VcmwiLCJ1c2VyVXJsIiwiZm9yZ290UGFzc3dvcmQiLCJyZXNldFBhc3N3b3JkIiwicmVnaXN0ZXJVc2VyVXJsIiwiYWN0aXZlVXNlclVybCIsImNoYW5nZVBhc3N3b3JkIiwiY2xpZW50TGlzdFVybCIsImdldENsaWVudEJ5SWQiLCJhZGROZXdDbGllbnQiLCJ1cGRhdGVDbGllbnQiLCJkZWxldGVDbGllbnQiLCJyZWRzeXMiLCJnZXRUZXN0VXJsIiwidG9rZW5EYXRhIiwiZ2V0U3RyaW5nIiwiY2xpZW50SWQiLCJjbGllbnRTZWNyZXQiLCJyb3V0ZXMiLCJsb2dpbiIsIkxvZ2luIiwiaG9tZSIsIkhvbWUiLCJLaW52ZXkiLCJhcHBLZXkiLCJhcHBTZWNyZXQiLCJpc0xvZ2dlZEluIiwiZ2V0QWN0aXZlVXNlciIsInVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwibG9nb3V0IiwicmVnaXN0ZXIiLCJzaWdudXAiLCJ1c2VybmFtZSIsInVzZSIsInByb2Nlc3MiLCJTdG9yZSIsIm1vZHVsZXMiLCJ1c2VyU3RvcmUiLCJvZmZlclN0b3JlIiwicmVjaGFyZ2VTdG9yZSIsInN0cmljdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0VBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQSxrQkFGQTtBQUdBO0FBQ0EsZ0JBREE7QUFFQSxpQkFGQTtBQUdBLG9CQUhBO0FBSUE7QUFKQSxPQUhBO0FBU0E7QUFDQSxnQkFEQTtBQUVBLGlCQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUpBLE9BVEE7QUFlQSwyQkFmQTtBQWdCQSw0QkFoQkE7QUFpQkEsK0RBakJBO0FBa0JBLHlGQWxCQTtBQW1CQTtBQW5CQTtBQXFCQSxHQXZCQTs7QUF5QkEsOEJBQ0E7QUFDQSx1Q0FEQTtBQUVBLCtDQUZBO0FBR0E7QUFIQSxJQURBLE1B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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUEsa0U7Ozs7Ozs7QUNBQSxpRTs7Ozs7OztBQ0FBLG1FOzs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsbUU7Ozs7Ozs7QUNBQSx1RDs7Ozs7OztBQ0FBLDJEOzs7Ozs7O0FDQUEsbUU7Ozs7Ozs7QUNBQSx1RDs7Ozs7OztBQ0FBLGtFOzs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7QUNBQSw2RDs7Ozs7OztBQ0FBLDBEOzs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLCtEOzs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsd0U7Ozs7Ozs7QUNBQSxvRTs7Ozs7OztBQ0FBLHVFOzs7Ozs7O0FDQUEsb0U7Ozs7Ozs7QUNBQSxvRTs7Ozs7OztBQ0FBLHFFOzs7Ozs7O0FDQUEsb0U7Ozs7Ozs7QUNBQSw0RDs7Ozs7OztBQ0FBLDBEOzs7Ozs7O0FDQUEscUQ7Ozs7Ozs7QUNBQSw0RDs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEscUU7Ozs7Ozs7QUNBQSw0RDs7Ozs7OztBQ0FBLDJEOzs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7QUNBQSx1RDs7Ozs7OztBQ0FBLG9FOzs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7QUNBQSxxRjs7Ozs7OztBQ0FBLDhFOzs7Ozs7O0FDQUEsbUY7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLHFEOzs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7QUNBQSwwRDs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLGlEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cblxuICAgICAgICA8QWN0aW9uQmFyIGJhY2tncm91bmRDb2xvcj1cIiM3NjI4ODlcIiBmbGF0PVwidHJ1ZVwiPlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjNzYyODg5XCI+XG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGJhY2tncm91bmRDb2xvcj1cIiM3NjI4ODlcIj5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0ICNzZWFyY2hSb3cgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD1cIjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIiBwYWRkaW5nTGVmdD1cIjIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCIyMFwiIHYtbW9kZWw9XCJ0ZXh0RmllbGRWYWx1ZVwiIHdpZHRoPVwiODAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0MFwiIGZvbnRTaXplPVwiMTRcIiBoaW50PVwiU2VhcmNoXCI+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxJbWFnZSBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvc2hhcGU0QDN4LnBuZ1wiIGhlaWdodD1cIjMwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwXCIgbWFyZ2luTGVmdD1cIjEwXCI+PC9JbWFnZT4gLS0+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDwvQWN0aW9uQmFyPlxuXG5cbiAgICAgICAgPEdyaWRMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBjb2x1bW5zPVwiKlwiXG4gICAgICAgICAgICByb3dzPVwiKixhdXRvXCI+XG5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjb2w9XCIwXCIgcm93PVwiMFwiIGJhY2tncm91bmRDb2xvcj1cIiNmOGY4ZjhcIj5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgYmFja2dyb3VuZENvbG9yPVwiIzc2Mjg4OVwiIHBhZGRpbmdCb3R0b209XCIxNVwiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD1cIi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9XCIxNSVcIiBjbGFzcz1cImxvZ29cIiBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIj48L0ltYWdlPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlJlY2hhcmdlIFVcIiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjRkZGRkZGXCIgcGFkZGluZz1cIjE1XCIgZm9udFNpemU9XCIyNFwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBwYWRkaW5nTGVmdD1cIjIwXCIgcGFkZGluZ1JpZ2h0PVwiMjBcIiBwYWRkaW5nVG9wPVwiMjBcIlxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tPVwiNVwiIG1hcmdpblRvcD1cIi0yMFwiIGJhY2tncm91bmRDb2xvcj1cIiNmZmZcIlxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCIxMFwiIGhlaWdodD1cIjg1JVwiIHdpZHRoPVwiOTAlXCJcbiAgICAgICAgICAgICAgICAgICAgc3RyZXRjaD1cImFzcGVjdEZpdFwiIGNsYXNzPVwiYWxidW0taW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIipcIiByb3dzPVwiYXV0bywqLGF1dG9cIiBoZWlnaHQ9XCIxMDAlXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCJhdXRvLCosYXV0b1wiIHJvd3M9XCJhdXRvLGF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbD1cIjBcIiByb3c9XCIyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNvbD1cIjBcIiByb3c9XCIwXCIgY2xhc3M9XCJpbnB1dFwiIGhpbnQ9XCJOYW1lXCIgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiIHYtbW9kZWw9XCJjZWxsLm5hbWVcIj48L1RleHRGaWVsZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY29sPVwiMFwiIHJvdz1cIjFcIiBjbGFzcz1cImlucHV0XCIgaGludD1cIlBob25lXCIgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiIHYtbW9kZWw9XCJjZWxsLnBob25lXCI+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIGNvbD1cIjBcIiByb3c9XCIyXCIgcm93U3Bhbj1cIjNcIiA6YnVzeT1cInByb2Nlc3NpbmdcIj48L0FjdGl2aXR5SW5kaWNhdG9yPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2w9XCIwXCIgcm93PVwiM1wiIHRleHQ9XCJSZWNoYXJnZVwiIEB0YXA9XCJoYW5kbGVGb3JtU3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbS10LTIwIGJ1dHRvbi10ZXh0XCI+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cblxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjb2w9XCIwXCIgcm93PVwiMVwiIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiI0ZGRkZGRlwiIGhlaWdodD1cIjYwXCI+XG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cIipcIiBjb2x1bW5zPVwiKiwqLCosKiwqXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjb2w9XCIwXCIgcm93PVwiMFwiICh0YXApPVwib25CdXR0b25UYXAoKVwiIGhlaWdodD1cIjI1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjVcIiBtYXJnaW49XCIxMFwiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9zaGFwZTJAM3gucG5nXCI+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNvbD1cIjFcIiByb3c9XCIwXCIgKHRhcCk9XCJvbkJ1dHRvblRhcCgpXCIgaGVpZ2h0PVwiMjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNVwiIG1hcmdpbj1cIjEwXCIgc3JjPVwifi9hc3NldHMvaW1hZ2VzL3NoYXBlMUAzeC5wbmdcIj48L0ltYWdlPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY29sPVwiMlwiIHJvdz1cIjBcIiAodGFwKT1cIm9uQnV0dG9uVGFwKClcIiBoZWlnaHQ9XCI2MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjYwXCIgbWFyZ2luPVwiMTBcIiBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvaG9tZUAzeC5wbmdcIj48L0ltYWdlPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY29sPVwiM1wiIHJvdz1cIjBcIiAodGFwKT1cIm9uQnV0dG9uVGFwKClcIiBoZWlnaHQ9XCIyNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI1XCIgbWFyZ2luPVwiMTBcIiBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvc2hhcGUzQDN4LnBuZ1wiPjwvSW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjb2w9XCI0XCIgcm93PVwiMFwiICh0YXApPVwib25CdXR0b25UYXAoKVwiIGhlaWdodD1cIjI1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjVcIiBtYXJnaW49XCIxMFwiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9pY29uMDRAM3gucG5nXCI+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgIDwvR3JpZExheW91dD5cbiAgICA8L3BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG4gICAgaW1wb3J0IHttYXBTdGF0ZSwgbWFwR2V0dGVyc30gZnJvbSAndnVleCc7XG4gICAgaW1wb3J0IHthcGlEb21haW59IGZyb20gJy4vLi4vY29uZmlnJztcbiAgICBpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbiAgICBpbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW5cIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvbnRhY3Q6ICcnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdjZWxsJyxcbiAgICAgICAgICAgICAgICBjZWxsOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBwaG9uZTogJycsXG4gICAgICAgICAgICAgICAgICAgIG9mZmVyX2lkOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogJ3JlY2hhcmdlQ2VsbCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG5hdXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICAgICAgICAgIG9mZmVyX2lkOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogJ3JlY2hhcmdlTmF1dGEnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaG9vc2Vfb2ZmZXJfY2VsbDogJycsXG4gICAgICAgICAgICAgICAgY2hvb3NlX29mZmVyX25hdXRhOiAnJyxcbiAgICAgICAgICAgICAgICBzZXJ2ZXI6IGFwaURvbWFpbixcbiAgICAgICAgICAgICAgICBub3c6IG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoJ1lZWVkvTU0vREQnKSxcbiAgICAgICAgICAgICAgICBtb21lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgLi4ubWFwU3RhdGUoe1xuICAgICAgICAgICAgICAgIHVzZXJTdG9yZTogc3RhdGUgPT4gc3RhdGUudXNlclN0b3JlLFxuICAgICAgICAgICAgICAgIHJlY2hhcmdlU3RvcmU6IHN0YXRlID0+IHN0YXRlLnJlY2hhcmdlU3RvcmUsXG4gICAgICAgICAgICAgICAgb2ZmZXJTdG9yZTogc3RhdGUgPT4gc3RhdGUub2ZmZXJTdG9yZVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKHtcbiAgICAgICAgICAgICAgICBvcHRpb25zQ2VsbDogJ2dldENlbGxPZmZlcnMnLFxuICAgICAgICAgICAgICAgIG9wdGlvbnNOYXV0YTogJ2dldE5hdXRhT2ZmZXJzJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgaGFuZGxlRm9ybVN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRiYWNrZW5kU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExvZ2luLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgLmxvZ28ge1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cblxuICAgIC5idXR0b24tdGV4dCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3NjI4ODk7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICB9XG5cbiAgICAuQWN0aW9uQmFyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgLmFsYnVtLWltYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5ob21lLXBhbmVsIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyMDtcbiAgICAgICAgbWFyZ2luOiAxNTtcbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24tbGFiZWwge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNTtcbiAgICB9XG5cbiAgICAjc2VhcmNoUm93IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjA7XG4gICAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZSBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwicGFnZVwiPlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzcz1cImxvZ29cIiBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIj48L0ltYWdlPlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImhlYWRlclwiIHRleHQ9XCJSZWNoYXJnZSBVXCI+PC9MYWJlbD5cblxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XCJhdXRvLCBhdXRvLCBhdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIwXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgaGludD1cIkVtYWlsXCIgOmlzRW5hYmxlZD1cIiFwcm9jZXNzaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU9XCJlbWFpbFwiIGF1dG9jb3JyZWN0PVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCIgdi1tb2RlbD1cInVzZXIuZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XCJuZXh0XCIgQHJldHVyblByZXNzPVwiZm9jdXNQYXNzd29yZFwiPjwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIj48L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIxXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgcmVmPVwicGFzc3dvcmRcIiA6aXNFbmFibGVkPVwiIXByb2Nlc3NpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJQYXNzd29yZFwiIHNlY3VyZT1cInRydWVcIiB2LW1vZGVsPVwidXNlci5wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJldHVybktleVR5cGU9XCJpc0xvZ2dpbmdJbiA/ICdkb25lJyA6ICduZXh0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHJldHVyblByZXNzPVwiZm9jdXNDb25maXJtUGFzc3dvcmRcIj48L1RleHRGaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCI+PC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVwiMlwiIHYtc2hvdz1cIiFpc0xvZ2dpbmdJblwiIGNsYXNzPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XCJpbnB1dFwiIHJlZj1cImNvbmZpcm1QYXNzd29yZFwiIDppc0VuYWJsZWQ9XCIhcHJvY2Vzc2luZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIkNvbmZpcm0gcGFzc3dvcmRcIiBzZWN1cmU9XCJ0cnVlXCIgdi1tb2RlbD1cInVzZXIuY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwiZG9uZVwiPjwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIj48L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxBY3Rpdml0eUluZGljYXRvciByb3dTcGFuPVwiM1wiIDpidXN5PVwicHJvY2Vzc2luZ1wiPjwvQWN0aXZpdHlJbmRpY2F0b3I+XG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiA6dGV4dD1cImlzTG9nZ2luZ0luID8gJ0xvZyBJbicgOiAnU2lnbiBVcCdcIiA6aXNFbmFibGVkPVwiIXByb2Nlc3NpbmdcIlxuICAgICAgICAgICAgICAgICAgICBAdGFwPVwiaGFuZGxlRm9ybVN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMCBidXR0b24tdGV4dFwiPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxMYWJlbCAqdi1zaG93PVwiaXNMb2dnaW5nSW5cIiB0ZXh0PVwiRm9yZ290IHlvdXIgcGFzc3dvcmQ/XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsb2dpbi1sYWJlbFwiIEB0YXA9XCJmb3Jnb3RQYXNzd29yZCgpXCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImxvZ2luLWxhYmVsIHNpZ24tdXAtbGFiZWxcIiBAdGFwPVwidG9nZ2xlRm9ybVwiPlxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiaXNMb2dnaW5nSW4gPyAnRG9u4oCZdCBoYXZlIGFuIGFjY291bnQ/ICcgOiAnQmFjayB0byBMb2dpbidcIj48L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiaXNMb2dnaW5nSW4gPyAnU2lnbiB1cCcgOiAnJ1wiIGNsYXNzPVwiYm9sZFwiPjwvU3Bhbj5cbiAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgIDwvRmxleGJveExheW91dD5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7IGZldGNoIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9mZXRjaCc7XG4gICAgaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xuICAgIGltcG9ydCB7bG9naW5VcmwsIHVzZXJVcmwsIGdldEhlYWRlcn0gZnJvbSAnLi8uLi9jb25maWcnO1xuICAgIGltcG9ydCB7Y2xpZW50SWQsIGNsaWVudFNlY3JldH0gZnJvbSAnLi8uLi9lbnYnO1xuICAgIGltcG9ydCB7bWFwU3RhdGV9IGZyb20gJ3Z1ZXgnO1xuICAgIGltcG9ydCB7c2V0U3RyaW5nLCBnZXRTdHJpbmd9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdJbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcm9jZXNzaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcImlhbmthbWlzYW1hQGdtYWlsLmNvbVwiLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogXCIxMjMxMjNcIixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIC4uLm1hcFN0YXRlKHtcbiAgICAgICAgICAgICAgICB1c2VyU3RvcmU6IHN0YXRlID0+IHN0YXRlLnVzZXJTdG9yZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBpc0xvZ2luICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VyU3RvcmUuYXV0aFVzZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdob21lJ30pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhvbWUsIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGhhbmRsZUZvcm1TdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnVzZXIuZW1haWwgfHwgIXRoaXMudXNlci5wYXNzd29yZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJQbGVhc2UgcHJvdmlkZSBib3RoIGFuIGVtYWlsIGFkZHJlc3MgYW5kIHBhc3N3b3JkLlwiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTG9naW4oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVJlZ2lzdGVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGFuZGxlTG9naW4gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc3QgYXV0aFVzZXIgPSB7fTtcbiAgICAgICAgICAgICAgICBmZXRjaChsb2dpblVybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYW50X3R5cGU6ICdwYXNzd29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRfaWQ6IGNsaWVudElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50X3NlY3JldDogY2xpZW50U2VjcmV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZTogJydcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnT2F1dGggdG9rZW4nLCByZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ09hdXRoIHRva2VuJywgcmVzcG9uc2UucmVmcmVzaF90b2tlbilcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhVc2VyLmFjY2Vzc190b2tlbiA9IHJlc3BvbnNlLmFjY2Vzc190b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhVc2VyLnJlZnJlc2hfdG9rZW4gPSByZXNwb25zZS5yZWZyZXNoX3Rva2VuO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RyaW5nKFwiYXV0aFVzZXJcIiwgcmVzcG9uc2UuYWNjZXNzX3Rva2VuKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2godXNlclVybCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IGdldEhlYWRlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ09hdXRoIHRva2VuJywgcmVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1c2VyIG9iamVjdCcsIHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aFVzZXIuZW1haWwgPSByZXNwb25zZS5lbWFpbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhVc2VyLm5hbWUgPSByZXNwb25zZS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3NldFVzZXJPYmplY3QnLCBhdXRoVXNlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFjdGl2ZSBsYSBjdWVudGEgZW4gc3UgY29ycmVvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVXN1YXJpbyBvIGNvbnRyYXNlw7FhIGluY29ycmVjdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBoYW5kbGVSZWdpc3RlcigpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VyLnBhc3N3b3JkICE9IHRoaXMudXNlci5jb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcIllvdXIgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaC5cIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy4kYmFja2VuZFNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgLnJlZ2lzdGVyKHRoaXMudXNlcilcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB0b2dnbGVGb3JtKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGZvcmdvdFBhc3N3b3JkKCkge1xuICAgICAgICAgICAgICAgIHByb21wdCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkZvcmdvdCBQYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkVudGVyIHRoZSBlbWFpbCBhZGRyZXNzIHlvdSB1c2VkIHRvIHJlZ2lzdGVyIGZvciBSZWNoYXJnZSBVIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXCIsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcbiAgICAgICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGJhY2tlbmRTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc2V0UGFzc3dvcmQoZGF0YS50ZXh0LnRyaW0oKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIllvdXIgcGFzc3dvcmQgd2FzIHN1Y2Nlc3NmdWxseSByZXNldC4gUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgZm9yIGluc3RydWN0aW9ucyBvbiBjaG9vc2luZyBhIG5ldyBwYXNzd29yZC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVW5mb3J0dW5hdGVseSwgYW4gZXJyb3Igb2NjdXJyZWQgcmVzZXR0aW5nIHlvdXIgcGFzc3dvcmQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZm9jdXNQYXNzd29yZCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBhc3N3b3JkLm5hdGl2ZVZpZXcuZm9jdXMoKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGZvY3VzQ29uZmlybVBhc3N3b3JkKCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmNvbmZpcm1QYXNzd29yZC5uYXRpdmVWaWV3LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBcbiAgICAgICAgICAgIGFsZXJ0KG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJSZWNoYXJnZSBVXCIsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gICAgLnBhZ2Uge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5mb3JtIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwO1xuICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuXG4gICAgLmxvZ28ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMjtcbiAgICAgICAgaGVpZ2h0OiA5MDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyNTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNzA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICM3NjI4ODk7XG4gICAgfVxuXG4gICAgLmlucHV0LWZpZWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjU7XG4gICAgfVxuXG4gICAgLmlucHV0IHtcbiAgICAgICAgZm9udC1zaXplOiAxODtcbiAgICAgICAgcGxhY2Vob2xkZXItY29sb3I6ICNBOEE4QTg7XG4gICAgfVxuXG4gICAgLmlucHV0OmRpc2FibGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG5cbiAgICAuYnRuLXByaW1hcnkge1xuICAgICAgICBtYXJnaW46IDMwIDUgMTUgNTtcbiAgICB9XG5cbiAgICAubG9naW4tbGFiZWwge1xuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjQThBOEE4O1xuICAgICAgICBmb250LXNpemU6IDE2O1xuICAgIH1cblxuICAgIC5zaWduLXVwLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjA7XG4gICAgfVxuXG4gICAgLmJ1dHRvbi10ZXh0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc2Mjg4OTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIH1cblxuICAgIC5ib2xkIHtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgfVxuPC9zdHlsZT5cbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hclwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1rd1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1zYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci10bi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9hei5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZ1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9ibS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ib1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ici5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9jYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jcy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jeVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9lbFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1TR1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1TRy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nZC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5sb2dvIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuLmJ1dHRvbi10ZXh0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc2Mjg4OTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbn1cXG4uQWN0aW9uQmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5hbGJ1bS1pbWFnZSB7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuLmhvbWUtcGFuZWwge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBtYXJnaW46IDE1O1xcbn1cXG4uZGVzY3JpcHRpb24tbGFiZWwge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG59XFxuI3NlYXJjaFJvdyB7XFxuICAgIG1hcmdpbi10b3A6IDIwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvSG9tZS52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnBhZ2VbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5mb3JtW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogMzA7XFxuICAgIG1hcmdpbi1yaWdodDogMzA7XFxuICAgIGZsZXgtZ3JvdzogMjtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmxvZ29bZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEyO1xcbiAgICBoZWlnaHQ6IDkwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmhlYWRlcltkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI1O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA3MDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogIzc2Mjg4OTtcXG59XFxuLmlucHV0LWZpZWxkW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNTtcXG59XFxuLmlucHV0W2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBmb250LXNpemU6IDE4O1xcbiAgICBwbGFjZWhvbGRlci1jb2xvcjogI0E4QThBODtcXG59XFxuLmlucHV0W2RhdGEtdi1jMjc0ODJjNF06ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG4uYnRuLXByaW1hcnlbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIG1hcmdpbjogMzAgNSAxNSA1O1xcbn1cXG4ubG9naW4tbGFiZWxbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNBOEE4QTg7XFxuICAgIGZvbnQtc2l6ZTogMTY7XFxufVxcbi5zaWduLXVwLWxhYmVsW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMDtcXG59XFxuLmJ1dHRvbi10ZXh0W2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzYyODg5O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxufVxcbi5ib2xkW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0xvZ2luLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICB7IGF0dHJzOiB7IGJhY2tncm91bmRDb2xvcjogXCIjNzYyODg5XCIsIGZsYXQ6IFwidHJ1ZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM3NjI4ODlcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzc2Mjg4OVwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLCBtYXJnaW5Ub3A6IFwiNVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJzZWFyY2hSb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjgwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCJTZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnRleHRGaWVsZFZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRleHRGaWVsZFZhbHVlID0gJGV2ZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgIGNvbHVtbnM6IFwiKlwiLFxuICAgICAgICAgICAgcm93czogXCIqLGF1dG9cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBjb2w6IFwiMFwiLCByb3c6IFwiMFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y4ZjhmOFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM3NjI4ODlcIixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxNVwiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiLTEwXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dvXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHdpZHRoOiBcIjE1JVwiLCBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9udC13ZWlnaHQtYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiUmVjaGFyZ2UgVVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWxidW0taW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjIwXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIyMFwiLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjIwXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiLTIwXCIsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiODUlXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjkwJVwiLFxuICAgICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpdFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uczogXCIqXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzOiBcImF1dG8sKixhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sKixhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93czogXCJhdXRvLGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCJOYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdDogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLmNlbGwubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoX3ZtLmNlbGwsIFwibmFtZVwiLCAkZXZlbnQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCJQaG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3Q6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5jZWxsLnBob25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChfdm0uY2VsbCwgXCJwaG9uZVwiLCAkZXZlbnQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJBY3Rpdml0eUluZGljYXRvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3BhbjogXCIzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXN5OiBfdm0ucHJvY2Vzc2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgbS10LTIwIGJ1dHRvbi10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjBcIiwgcm93OiBcIjNcIiwgdGV4dDogXCJSZWNoYXJnZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uaGFuZGxlRm9ybVN1Ym1pdCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCI2MFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93czogXCIqXCIsIGNvbHVtbnM6IFwiKiwqLCosKiwqXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIih0YXApXCI6IFwib25CdXR0b25UYXAoKVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyNVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9zaGFwZTJAM3gucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCIodGFwKVwiOiBcIm9uQnV0dG9uVGFwKClcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjVcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNVwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvc2hhcGUxQDN4LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiKHRhcClcIjogXCJvbkJ1dHRvblRhcCgpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjYwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2hvbWVAM3gucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCIodGFwKVwiOiBcIm9uQnV0dG9uVGFwKClcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjVcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNVwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvc2hhcGUzQDN4LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjRcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiKHRhcClcIjogXCJvbkJ1dHRvblRhcCgpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjVcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2ljb24wNEAzeC5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IGF0dHJzOiB7IGFjdGlvbkJhckhpZGRlbjogXCJ0cnVlXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9nb1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoZWFkZXJcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlJlY2hhcmdlIFVcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvd3M6IFwiYXV0bywgYXV0bywgYXV0b1wiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCIsIGF0dHJzOiB7IHJvdzogXCIwXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiRW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbmFibGVkOiAhX3ZtLnByb2Nlc3NpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdDogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZTogXCJuZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS51c2VyLmVtYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuUHJlc3M6IF92bS5mb2N1c1Bhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoX3ZtLnVzZXIsIFwiZW1haWxcIiwgJGV2ZW50LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIiwgYXR0cnM6IHsgcm93OiBcIjFcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VuYWJsZWQ6ICFfdm0ucHJvY2Vzc2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCJQYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cmU6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBfdm0uaXNMb2dnaW5nSW4gPyBcImRvbmVcIiA6IFwibmV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0udXNlci5wYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblByZXNzOiBfdm0uZm9jdXNDb25maXJtUGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChfdm0udXNlciwgXCJwYXNzd29yZFwiLCAkZXZlbnQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhX3ZtLmlzTG9nZ2luZ0luLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiFpc0xvZ2dpbmdJblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImNvbmZpcm1QYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZDogIV92bS5wcm9jZXNzaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIkNvbmZpcm0gcGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJlOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZTogXCJkb25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS51c2VyLmNvbmZpcm1QYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25maXJtUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcIkFjdGl2aXR5SW5kaWNhdG9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93U3BhbjogXCIzXCIsIGJ1c3k6IF92bS5wcm9jZXNzaW5nIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgbS10LTIwIGJ1dHRvbi10ZXh0XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pc0xvZ2dpbmdJbiA/IFwiTG9nIEluXCIgOiBcIlNpZ24gVXBcIixcbiAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZDogIV92bS5wcm9jZXNzaW5nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5oYW5kbGVGb3JtU3VibWl0IH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvZ2luLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIFwiKnYtc2hvd1wiOiBcImlzTG9nZ2luZ0luXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIkZvcmdvdCB5b3VyIHBhc3N3b3JkP1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5mb3Jnb3RQYXNzd29yZCgpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dpbi1sYWJlbCBzaWduLXVwLWxhYmVsXCIsXG4gICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnRvZ2dsZUZvcm0gfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pc0xvZ2dpbmdJblxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkRvbuKAmXQgaGF2ZSBhbiBhY2NvdW50PyBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkJhY2sgdG8gTG9naW5cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLmlzTG9nZ2luZ0luID8gXCJTaWduIHVwXCIgOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIF5cXFxcLlxcXFwvYXBwXFxcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiLFxuXHRcIi4vYXBwLmpzXCI6IFwiLi9hcHAuanNcIixcblx0XCIuL2NvbXBvbmVudHMvb2ZmZXIvT2ZmZXJTdG9yZS5qc1wiOiBcIi4vY29tcG9uZW50cy9vZmZlci9PZmZlclN0b3JlLmpzXCIsXG5cdFwiLi9jb21wb25lbnRzL3JlY2hhcmdlL1JlY2hhcmdlU3RvcmUuanNcIjogXCIuL2NvbXBvbmVudHMvcmVjaGFyZ2UvUmVjaGFyZ2VTdG9yZS5qc1wiLFxuXHRcIi4vY29tcG9uZW50cy91c2VyL1VzZXJTdG9yZS5qc1wiOiBcIi4vY29tcG9uZW50cy91c2VyL1VzZXJTdG9yZS5qc1wiLFxuXHRcIi4vY29uZmlnLmpzXCI6IFwiLi9jb25maWcuanNcIixcblx0XCIuL2Vudi5qc1wiOiBcIi4vZW52LmpzXCIsXG5cdFwiLi9mb250cy9mYTUtYWxsLmNzc1wiOiBcIi4vZm9udHMvZmE1LWFsbC5jc3NcIixcblx0XCIuL3JvdXRlcy9pbmRleC5qc1wiOiBcIi4vcm91dGVzL2luZGV4LmpzXCIsXG5cdFwiLi9zZXJ2aWNlcy9iYWNrZW5kLXNlcnZpY2UuanNcIjogXCIuL3NlcnZpY2VzL2JhY2tlbmQtc2VydmljZS5qc1wiLFxuXHRcIi4vc3RvcmUuanNcIjogXCIuL3N0b3JlLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlICg/PCFcXFxcYkFwcF9SZXNvdXJjZXNcXFxcYi4qKSg/PCFcXFxcLlxcXFwvXFxcXGJ0ZXN0c1xcXFxiXFxcXC8uKj8pXFxcXC4oeG1sfGNzc3xqc3woPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsIm1vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBAaW1wb3J0ICduYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3MnOyBcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0bi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI0Q1MUExQVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjYwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tcHJpbWFyeTpkaXNhYmxlZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm9wYWNpdHlcIixcInZhbHVlXCI6XCIwLjVcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiLyoqXG4gKiBAQXV0aG9yOiBDb2RlYWxzXG4gKiBARGF0ZTogICAwNS0wMy0yMDIwXG4gKiBARW1haWw6ICBpYW5AY29kZWFscy5lc1xuICogQExhc3QgbW9kaWZpZWQgYnk6ICAgQ29kZWFsc1xuICogQExhc3QgbW9kaWZpZWQgdGltZTogMDYtMDMtMjAyMFxuICogQENvcHlyaWdodDogQ29kZWFsc1xuICovXG5cbmltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSc7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0xvZ2luJztcbmltcG9ydCBCYWNrZW5kU2VydmljZSBmcm9tIFwiLi9zZXJ2aWNlcy9iYWNrZW5kLXNlcnZpY2VcIjtcbi8vIGltcG9ydCBSYWRMaXN0VmlldyBmcm9tICduYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvdnVlJ1xuLy8gaW1wb3J0IFJhZFNpZGVEcmF3ZXIgZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvdnVlJ1xuaW1wb3J0IHsgVE5TRm9udEljb24sIGZvbnRpY29uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWZvbnRpY29uJztcbi8vIGltcG9ydCBDaGFydFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdWktY2hhcnQvdnVlJztcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcbi8vIGltcG9ydCBWdWV4IGZyb20gJy4vdnVleCc7XG4vLyBpbXBvcnQgYXBwU2V0dGluZ3MgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncyc7XG5cbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnO1xuVnVlLnVzZShWdWV4KTtcblxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG5WdWUucHJvdG90eXBlLiRpc0FuZHJvaWQgPSBpc0FuZHJvaWQ7XG5WdWUucHJvdG90eXBlLiRpc0lPUyA9IGlzSU9TO1xuXG5WdWUuY29uZmlnLnNpbGVudCA9IHRydWU7XG5cbi8vSW5pdGlhbGl6ZSBGb250QXdlc29tZVxuVE5TRm9udEljb24uZGVidWcgPSBmYWxzZTtcblROU0ZvbnRJY29uLnBhdGhzID0ge1xuICAgICdmYSc6ICcuL2ZvbnRzL2ZhNS1hbGwuY3NzJ1xufTtcblROU0ZvbnRJY29uLmxvYWRDc3MoKTtcblZ1ZS5maWx0ZXIoJ2ZvbnRpY29uJywgZm9udGljb24pO1xuXG4vLyBWdWUudXNlKFJhZExpc3RWaWV3KVxuXG4vLyBsb2dpbiB3aXRoIGJhY2tlbmRcbmNvbnN0IGJhY2tlbmRTZXJ2aWNlID0gbmV3IEJhY2tlbmRTZXJ2aWNlKCk7XG5WdWUucHJvdG90eXBlLiRiYWNrZW5kU2VydmljZSA9IGJhY2tlbmRTZXJ2aWNlO1xuXG4vLyBWdWUucHJvdG90eXBlLiRhcHBTZXR0aW5ncyA9IGFwcFNldHRpbmdzO1xuXG5uZXcgVnVlKHtcbiAgICByZW5kZXI6IGggPT4gaCgnZnJhbWUnLCBbaChBcHApXSksXG4gICAgc3RvcmVcbn0pLiRzdGFydCgpXG5cblxuXG5cbi8vIGltcG9ydCBWdWUgZnJvbSBcIm5hdGl2ZXNjcmlwdC12dWVcIjtcblxuLy8gaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi9yb3V0ZXNcIjtcbi8vIGltcG9ydCBCYWNrZW5kU2VydmljZSBmcm9tIFwiLi9zZXJ2aWNlcy9iYWNrZW5kLXNlcnZpY2VcIjtcblxuLy8gLy8gVW5jb21tbWVudCB0aGUgZm9sbG93aW5nIHRvIHNlZSBOYXRpdmVTY3JpcHQtVnVlIG91dHB1dCBsb2dzXG4vLyAvLyBWdWUuY29uZmlnLnNpbGVudCA9IGZhbHNlO1xuXG4vLyBjb25zdCBiYWNrZW5kU2VydmljZSA9IG5ldyBCYWNrZW5kU2VydmljZSgpO1xuLy8gVnVlLnByb3RvdHlwZS4kYmFja2VuZFNlcnZpY2UgPSBiYWNrZW5kU2VydmljZTtcblxuLy8gbmV3IFZ1ZSh7XG4vLyAgIHJlbmRlcjogaCA9PiBoKFwiZnJhbWVcIiwgW2goYmFja2VuZFNlcnZpY2UuaXNMb2dnZWRJbigpID8gcm91dGVzLmhvbWUgOiByb3V0ZXMubG9naW4pXSlcbi8vIH0pLiRzdGFydCgpO1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzQxMGYzYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcSUFOXFxcXERlc2t0b3BcXFxcc3RhcnR1cFxcXFx5b3N2YVxcXFxyZWNoYXJnZXVcXFxcYXBwc1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NzQxMGYzYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NzQxMGYzYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NzQxMGYzYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc0MTBmM2EmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjc0MTBmM2EnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvSG9tZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NDEwZjNhJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzI3NDgyYzQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzI3NDgyYzQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImMyNzQ4MmM0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcSUFOXFxcXERlc2t0b3BcXFxcc3RhcnR1cFxcXFx5b3N2YVxcXFxyZWNoYXJnZXVcXFxcYXBwc1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjMjc0ODJjNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjMjc0ODJjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjMjc0ODJjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2MyNzQ4MmM0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0xvZ2luLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMjc0ODJjNCZzY29wZWQ9dHJ1ZSZcIiIsIi8qKlxyXG4gKiBAQXV0aG9yOiBhbGVqYW5kcm9cclxuICogQERhdGU6ICAgMjAxOS0xMS0yMlQxNDo0NjoxNSswMTowMFxyXG4gKiBARW1haWw6ICBhbGVqbzkwMTAwM0Bob3RtYWlsLmNvbVxyXG4gKiBAUHJvamVjdDogUmVjYXJnYW1lXHJcbiAqIEBMYXN0IG1vZGlmaWVkIGJ5OiAgIGFsZWphbmRyb1xyXG4gKiBATGFzdCBtb2RpZmllZCB0aW1lOiAyMDE5LTExLTIzVDE0OjE3OjQ1KzAxOjAwXHJcbiAqL1xyXG5cclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG5cclxuaW1wb3J0IHtcclxuICBvZmZlckxpc3RcclxuICAvLyByZWNoYXJnZUNlbGwsXHJcbiAgLy8gcmVjaGFyZ2VOYXV0YVxyXG59IGZyb20gJy4vLi4vLi4vY29uZmlnJ1xyXG5cclxuY29uc3Qgc3RhdGUgPSB7XHJcbiAgb2ZmZXJzOiBbXVxyXG59XHJcblxyXG5jb25zdCBnZXR0ZXJzID0ge1xyXG4gIGdldENlbGxPZmZlcnNTY2hlZHVsZSAoc3RhdGUpIHtcclxuICAgIGxldCBsaXN0ID0gc3RhdGUub2ZmZXJzXHJcbiAgICBsZXQgbm93ID0gbW9tZW50KG5ldyBEYXRlKCkpLmZvcm1hdCgnWVlZWS9NTS9ERCcpXHJcbiAgICByZXR1cm4gbGlzdC5maWx0ZXIoZnVuY3Rpb24gKG9mZmVyKSB7XHJcbiAgICAgIGlmIChvZmZlci50eXBlID09PSAnQ2VsbCcgJiYgIW1vbWVudChub3cpLmlzQmV0d2VlbihvZmZlci5kYXRlX2luaSwgb2ZmZXIuZGF0ZV9lbmQsIG51bGwsICdbXScpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH0pXHJcbiAgfSxcclxuICBnZXRDZWxsT2ZmZXJzIChzdGF0ZSkge1xyXG4gICAgbGV0IGxpc3QgPSBzdGF0ZS5vZmZlcnNcclxuICAgIGxldCBub3cgPSBtb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KCdZWVlZL01NL0REJylcclxuICAgIHJldHVybiBsaXN0LmZpbHRlcihmdW5jdGlvbiAob2ZmZXIpIHtcclxuICAgICAgaWYgKG9mZmVyLnR5cGUgPT09ICdDZWxsJyAmJiBtb21lbnQobm93KS5pc0JldHdlZW4ob2ZmZXIuZGF0ZV9pbmksIG9mZmVyLmRhdGVfZW5kLCBudWxsLCAnW10nKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZ2V0TmF1dGFPZmZlcnMgKHN0YXRlKSB7XHJcbiAgICBsZXQgbGlzdCA9IHN0YXRlLm9mZmVyc1xyXG4gICAgbGV0IG5vdyA9IG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoJ1lZWVkvTU0vREQnKVxyXG4gICAgcmV0dXJuIGxpc3QuZmlsdGVyKGZ1bmN0aW9uIChvZmZlcikge1xyXG4gICAgICBpZiAob2ZmZXIudHlwZSA9PT0gJ05hdXRhJyAmJiBtb21lbnQobm93KS5pc0JldHdlZW4ob2ZmZXIuZGF0ZV9pbmksIG9mZmVyLmRhdGVfZW5kLCBudWxsLCAnW10nKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbXV0YXRpb25zID0ge1xyXG4gIFNFVF9PRkZFUl9MSVNUIChzdGF0ZSwgb2ZmZXJzKSB7XHJcbiAgICBzdGF0ZS5vZmZlcnMgPSBvZmZlcnNcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGFjdGlvbnMgPSB7XHJcbiAgZ2V0T2ZmZXJMaXN0OiAoe2NvbW1pdH0pID0+IHtcclxuICAgIHJldHVybiBWdWUuaHR0cC5nZXQob2ZmZXJMaXN0KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgVnVlLiRsb2dnZXIoJ2luZm8nLCAnb2ZmZXJMaXN0IHJlc3BvbnNlJywgcmVzcG9uc2UpXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICBjb21taXQoJ1NFVF9PRkZFUl9MSVNUJywgcmVzcG9uc2UuYm9keS5kYXRhKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBzdGF0ZSwgbXV0YXRpb25zLCBhY3Rpb25zLCBnZXR0ZXJzXHJcbn1cclxuIiwiLyoqXHJcbiAqIEBBdXRob3I6IGFsZWphbmRyb1xyXG4gKiBARGF0ZTogICAyMDE5LTExLTIxVDIzOjI1OjU3KzAxOjAwXHJcbiAqIEBFbWFpbDogIGFsZWpvOTAxMDAzQGhvdG1haWwuY29tXHJcbiAqIEBQcm9qZWN0OiBSZWNhcmdhbWVcclxuICogQExhc3QgbW9kaWZpZWQgYnk6ICAgYWxlamFuZHJvXHJcbiAqIEBMYXN0IG1vZGlmaWVkIHRpbWU6IDIwMTktMTEtMjZUMjM6MjU6MTErMDE6MDBcclxuICovXHJcblxyXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IHtcclxuICBnZXRIZWFkZXIsXHJcbiAgcmVjaGFyZ2VMaXN0LFxyXG4gIHJlY2hhcmdlQ2VsbCxcclxuICByZWNoYXJnZU5hdXRhLFxyXG4gIG11bHRpUmVjaGFyZ2VDZWxsLFxyXG4gIG11bHRpUmVjaGFyZ2VOYXV0YSxcclxuICBwYXltZW50UmVkc3lzLFxyXG4gIHBheW1lbnRQYXlQYWxcclxufSBmcm9tICcuLy4uLy4uL2NvbmZpZydcclxuXHJcbmNvbnN0IHN0YXRlID0ge1xyXG4gIHJlY2hhcmdlOiB7fSxcclxuICBwdXJjaGFzZUluZm86IHt9LFxyXG4gIHJlY2hhcmdlTGlzdDoge31cclxuICAvLyByZWNoYXJnZToge1xyXG4gIC8vICAgaWQ6ICcnLFxyXG4gIC8vICAgdHlwZTogJycsXHJcbiAgLy8gICBvZmZlcl9pZDoge30sXHJcbiAgLy8gICBwcmljZV9wYXk6ICcnLFxyXG4gIC8vICAgcGhvbmU6ICcnLFxyXG4gIC8vICAgZW1haWw6ICcnXHJcbiAgLy8gfVxyXG59XHJcblxyXG5jb25zdCBnZXR0ZXJzID0ge1xyXG5cclxufVxyXG5cclxuY29uc3QgbXV0YXRpb25zID0ge1xyXG4gIFNFVF9SRUNIQVJHRV9RVUlDSyAoc3RhdGUsIHJlY2hhcmdlKSB7XHJcbiAgICBzdGF0ZS5yZWNoYXJnZSA9IHJlY2hhcmdlXHJcbiAgfSxcclxuICBTRVRfUkVDSEFSR0VfTElTVCAoc3RhdGUsIHJlY2hhcmdlKSB7XHJcbiAgICBzdGF0ZS5yZWNoYXJnZUxpc3QgPSByZWNoYXJnZVxyXG4gIH0sXHJcbiAgU0VUX1BVUkNIQVNFX0lORk8gKHN0YXRlLCBwdXJjaGFzZSkge1xyXG4gICAgc3RhdGUucHVyY2hhc2VJbmZvID0gcHVyY2hhc2VcclxuICB9LFxyXG4gIENMRUFSX1JFQ0hBUkdFIChzdGF0ZSkge1xyXG4gICAgc3RhdGUucmVjaGFyZ2UgPSB7fVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgYWN0aW9ucyA9IHtcclxuICBzZXRSZWNoYXJnZTogKHtjb21taXR9LCByZWNoYXJnZSkgPT4ge1xyXG4gICAgbGV0IHBvc3REYXRhID0gcmVjaGFyZ2VcclxuICAgIFZ1ZS4kbG9nZ2VyKCdpbmZvJywgJ3NldFJlY2hhcmdlIHJlc3BvbnNlJywgcG9zdERhdGEpXHJcbiAgICBjb21taXQoJ1NFVF9SRUNIQVJHRV9RVUlDSycsIHBvc3REYXRhKVxyXG4gIH0sXHJcbiAgc2V0UmVjaGFyZ2VMaXN0OiAoe2NvbW1pdH0pID0+IHtcclxuICAgIHJldHVybiBWdWUuaHR0cC5nZXQocmVjaGFyZ2VMaXN0LCB7aGVhZGVyczogZ2V0SGVhZGVyKCl9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgVnVlLiRsb2dnZXIoJ2luZm8nLCAnc2V0UmVjaGFyZ2VMaXN0IHJlc3BvbnNlJywgcmVzcG9uc2UpXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICBjb21taXQoJ1NFVF9SRUNIQVJHRV9MSVNUJywgcmVzcG9uc2UuYm9keS5kYXRhKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgfSlcclxuICB9LFxyXG4gIHJlY2hhcmdlQ2VsbDogKHtjb21taXR9KSA9PiB7XHJcbiAgICBsZXQgcG9zdERhdGEgPSBzdGF0ZS5yZWNoYXJnZVxyXG4gICAgcmV0dXJuIFZ1ZS5odHRwLnBvc3QocmVjaGFyZ2VDZWxsLCBwb3N0RGF0YSwge2hlYWRlcnM6IGdldEhlYWRlcigpfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIFZ1ZS4kbG9nZ2VyKCdpbmZvJywgJ3JlY2hhcmdlY2VsbCByZXNwb25zZScsIHJlc3BvbnNlKVxyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgY29tbWl0KCdTRVRfUFVSQ0hBU0VfSU5GTycsIHJlc3BvbnNlLmJvZHkuZGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgIH0pXHJcbiAgfSxcclxuICByZWNoYXJnZU5hdXRhOiAoe2NvbW1pdH0pID0+IHtcclxuICAgIGxldCBwb3N0RGF0YSA9IHN0YXRlLnJlY2hhcmdlXHJcbiAgICByZXR1cm4gVnVlLmh0dHAucG9zdChyZWNoYXJnZU5hdXRhLCBwb3N0RGF0YSwge2hlYWRlcnM6IGdldEhlYWRlcigpfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIFZ1ZS4kbG9nZ2VyKCdpbmZvJywgJ3JlY2hhcmdlTmF1dGEgcmVzcG9uc2UnLCByZXNwb25zZSlcclxuICAgICAgICBjb21taXQoJ1NFVF9QVVJDSEFTRV9JTkZPJywgcmVzcG9uc2UuYm9keS5kYXRhKVxyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgY29tbWl0KCdTRVRfUFVSQ0hBU0VfSU5GTycsIHJlc3BvbnNlLmJvZHkuZGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgIH0pXHJcbiAgfSxcclxuICBtdWx0aVJlY2hhcmdlQ2VsbDogKHtjb21taXR9LCBjb250YWN0cykgPT4ge1xyXG4gICAgbGV0IHBvc3REYXRhID0gY29udGFjdHNcclxuICAgIHJldHVybiBWdWUuaHR0cC5wb3N0KG11bHRpUmVjaGFyZ2VDZWxsLCBwb3N0RGF0YSwge2hlYWRlcnM6IGdldEhlYWRlcigpfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIFZ1ZS4kbG9nZ2VyKCdpbmZvJywgJ211bHRpUmVjaGFyZ2VDZWxsIHJlc3BvbnNlJywgcmVzcG9uc2UpXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgICBjb21taXQoJ1NFVF9QVVJDSEFTRV9JTkZPJywgcmVzcG9uc2UuYm9keS5kYXRhKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgfSlcclxuICB9LFxyXG4gIG11bHRpUmVjaGFyZ2VOYXV0YTogKHtjb21taXR9LCBjb250YWN0cykgPT4ge1xyXG4gICAgbGV0IHBvc3REYXRhID0gY29udGFjdHNcclxuICAgIHJldHVybiBWdWUuaHR0cC5wb3N0KG11bHRpUmVjaGFyZ2VOYXV0YSwgcG9zdERhdGEsIHtoZWFkZXJzOiBnZXRIZWFkZXIoKX0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBWdWUuJGxvZ2dlcignaW5mbycsICdtdWx0aVJlY2hhcmdlTmF1dGEgcmVzcG9uc2UnLCByZXNwb25zZSlcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAgIGNvbW1pdCgnU0VUX1BVUkNIQVNFX0lORk8nLCByZXNwb25zZS5ib2R5LmRhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICB9KVxyXG4gIH0sXHJcbiAgc2V0UmVkc3lzUGF5bWVudDogKHtjb21taXR9LCByZWNoYXJnZUlkKSA9PiB7XHJcbiAgICBsZXQgcG9zdERhdGEgPSB7b2ZmZXJfaWQ6IHJlY2hhcmdlSWR9XHJcbiAgICByZXR1cm4gVnVlLmh0dHAucG9zdChwYXltZW50UmVkc3lzLCBwb3N0RGF0YSwge2hlYWRlcnM6IGdldEhlYWRlcigpfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIFZ1ZS4kbG9nZ2VyKCdpbmZvJywgJ3NldFJlZHN5c1BheW1lbnQgcmVzcG9uc2UnLCByZXNwb25zZSlcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIC8vIGNvbW1pdCgnU0VUX1BVUkNIQVNFX0lORk8nLCByZXNwb25zZS5ib2R5LmRhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICB9KVxyXG4gIH0sXHJcbiAgc2V0UGF5UGFsUGF5bWVudDogKHtjb21taXR9LCByZWNoYXJnZUlkKSA9PiB7XHJcbiAgICBsZXQgcG9zdERhdGEgPSB7b2ZmZXJfaWQ6IHJlY2hhcmdlSWR9XHJcbiAgICByZXR1cm4gVnVlLmh0dHAucG9zdChwYXltZW50UGF5UGFsLCBwb3N0RGF0YSwge2hlYWRlcnM6IGdldEhlYWRlcigpfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIFZ1ZS4kbG9nZ2VyKCdpbmZvJywgJ3NldFBheVBhbFBheW1lbnQgcmVzcG9uc2UnLCByZXNwb25zZSlcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIC8vIGNvbW1pdCgnU0VUX1BVUkNIQVNFX0lORk8nLCByZXNwb25zZS5ib2R5LmRhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICB9KVxyXG4gIH0sXHJcbiAgY2xlYXJSZWNoYXJnZTogKHtjb21taXR9KSA9PiB7XHJcbiAgICBWdWUuJGxvZ2dlcignaW5mbycsICdjbGVhclJlY2hhcmdlJylcclxuICAgIGNvbW1pdCgnQ0xFQVJfUkVDSEFSR0UnKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHN0YXRlLCBtdXRhdGlvbnMsIGFjdGlvbnMsIGdldHRlcnNcclxufVxyXG4iLCIvKipcclxuICogQEF1dGhvcjogYWxlamFuZHJvXHJcbiAqIEBEYXRlOiAgIDIwMTktMTEtMjFUMTk6MDg6MjErMDE6MDBcclxuICogQEVtYWlsOiAgYWxlam85MDEwMDNAaG90bWFpbC5jb21cclxuICogQExhc3QgbW9kaWZpZWQgYnk6ICAgYWxlamFuZHJvXHJcbiAqIEBMYXN0IG1vZGlmaWVkIHRpbWU6IDIwMTktMTEtMjZUMTQ6NTU6MzUrMDE6MDBcclxuICovXHJcblxyXG4vLyBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuLy8gaW1wb3J0IHtcclxuLy8gICAvLyBnZXRIZWFkZXIsXHJcbi8vICAgLy8gdXNlckxpc3RVcmxcclxuLy8gfSBmcm9tICcuLy4uLy4uL2NvbmZpZydcclxuY29uc3Qgc3RhdGUgPSB7XHJcbiAgYXV0aFVzZXI6IG51bGwsXHJcbiAgaXNfYmFubmVyOiB0cnVlLFxyXG4gIHRvcE1lbnU6IHRydWVcclxufVxyXG5cclxuY29uc3QgbXV0YXRpb25zID0ge1xyXG4gIFNFVF9BVVRIX1VTRVIgKHN0YXRlLCB1c2VyT2JqKSB7XHJcbiAgICBzdGF0ZS5hdXRoVXNlciA9IHVzZXJPYmpcclxuICB9LFxyXG4gIENMRUFSX0FVVEhfVVNFUiAoc3RhdGUpIHtcclxuICAgIHN0YXRlLmF1dGhVc2VyID0gbnVsbFxyXG4gIH0sXHJcbiAgU0VUX0lTX0JBTk5FUiAoc3RhdGUsIHN0YXR1cykge1xyXG4gICAgc3RhdGUuaXNfYmFubmVyID0gc3RhdHVzXHJcbiAgfSxcclxuICBTRVRfSVNfVE9QIChzdGF0ZSwgc3RhdHVzKSB7XHJcbiAgICBzdGF0ZS50b3BNZW51ID0gc3RhdHVzXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBhY3Rpb25zID0ge1xyXG4gIHNldFVzZXJPYmplY3Q6ICh7Y29tbWl0fSwgdXNlck9iaikgPT4ge1xyXG4gICAgY29tbWl0KCdTRVRfQVVUSF9VU0VSJywgdXNlck9iailcclxuICB9LFxyXG4gIGNsZWFyQXV0aFVzZXI6ICh7Y29tbWl0fSkgPT4ge1xyXG4gICAgY29tbWl0KCdDTEVBUl9BVVRIX1VTRVInKVxyXG4gIH0sXHJcbiAgc2V0QmFubmVyOiAoe2NvbW1pdH0sIHN0YXR1cykgPT4ge1xyXG4gICAgY29tbWl0KCdTRVRfSVNfQkFOTkVSJywgc3RhdHVzKVxyXG4gIH0sXHJcbiAgc2V0VG9wTWVudTogKHtjb21taXR9LCBzdGF0dXMpID0+IHtcclxuICAgIGNvbW1pdCgnU0VUX0lTX1RPUCcsIHN0YXR1cylcclxuICB9XHJcbiAgLy8gZ2V0VXNlckxpc3Q6ICh7Y29tbWl0fSkgPT4ge1xyXG4gIC8vICAgcmV0dXJuIFZ1ZS5odHRwLmdldCh1c2VyTGlzdFVybCwge2hlYWRlcnM6IGdldEhlYWRlcigpfSlcclxuICAvLyAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gIC8vICAgICAgIFZ1ZS4kbG9nZ2VyKCdpbmZvJywgJ3VzZXJMaXN0VXJsIHJlc3BvbnNlJywgcmVzcG9uc2UpXHJcbiAgLy8gICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgLy8gICAgICAgICBjb21taXQoJ1NFVF9VU0VSX0xJU1QnLCByZXNwb25zZS5ib2R5LmRhdGEpXHJcbiAgLy8gICAgICAgICByZXR1cm4gcmVzcG9uc2UuYm9keS5kYXRhXHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICB9KVxyXG4gIC8vIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHN0YXRlLCBtdXRhdGlvbnMsIGFjdGlvbnNcclxufVxyXG4iLCIvKipcclxuICogQEF1dGhvcjogQ29kZWFsc1xyXG4gKiBARGF0ZTogICAwNi0wMy0yMDIwXHJcbiAqIEBFbWFpbDogIGlhbkBjb2RlYWxzLmVzXHJcbiAqIEBMYXN0IG1vZGlmaWVkIGJ5OiAgIENvZGVhbHNcclxuICogQExhc3QgbW9kaWZpZWQgdGltZTogMDYtMDMtMjAyMFxyXG4gKiBAQ29weXJpZ2h0OiBDb2RlYWxzXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtnZXRTdHJpbmd9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwaUNsaWVudCA9ICdodHRwOi8vMTI3LjAuMC4xOjgwODAvJztcclxuZXhwb3J0IGNvbnN0IGFwaURvbWFpbiA9ICdodHRwczovL2FkbWlucmVjaGFyZ2UuY29kZWFscy5lcy8nO1xyXG5leHBvcnQgY29uc3QgbG9naW5VcmwgPSBhcGlEb21haW4gKyAnb2F1dGgvdG9rZW4nO1xyXG5leHBvcnQgY29uc3QgdXNlclVybCA9IGFwaURvbWFpbiArICdhcGkvdXNlcic7XHJcbmV4cG9ydCBjb25zdCBmb3Jnb3RQYXNzd29yZCA9IGFwaURvbWFpbiArICdhcGkvZm9yZ290LXBhc3N3b3JkJztcclxuZXhwb3J0IGNvbnN0IHJlc2V0UGFzc3dvcmQgPSBhcGlEb21haW4gKyAnYXBpL3Jlc2V0LXBhc3N3b3JkJztcclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVXNlclVybCA9IGFwaURvbWFpbiArICdhcGkvdXNlci1yZWdpc3Rlcic7XHJcbmV4cG9ydCBjb25zdCBhY3RpdmVVc2VyVXJsID0gYXBpRG9tYWluICsgJ2FwaS91c2VyLWFjdGl2ZSc7XHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VQYXNzd29yZCA9IGFwaURvbWFpbiArICdhcGkvdjEvY2hhbmdlLXBhc3N3b3JkJztcclxuXHJcbi8vIGNsaWVudFxyXG5leHBvcnQgY29uc3QgY2xpZW50TGlzdFVybCA9IGFwaURvbWFpbiArICdhcGkvdjEvY2xpZW50LWxpc3QnO1xyXG5leHBvcnQgY29uc3QgZ2V0Q2xpZW50QnlJZCA9IGFwaURvbWFpbiArICdhcGkvdjEvY2xpZW50LWdldCc7XHJcbmV4cG9ydCBjb25zdCBhZGROZXdDbGllbnQgPSBhcGlEb21haW4gKyAnYXBpL3YxL2NsaWVudC1hZGQnO1xyXG5leHBvcnQgY29uc3QgdXBkYXRlQ2xpZW50ID0gYXBpRG9tYWluICsgJ2FwaS92MS9jbGllbnQtdXBkYXRlJztcclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNsaWVudCA9IGFwaURvbWFpbiArICdhcGkvdjEvY2xpZW50LWRlbGV0ZSc7XHJcblxyXG4vLyBwYXltZW10XHJcbmV4cG9ydCBjb25zdCBwYXltZW50UmVkc3lzID0gYXBpRG9tYWluICsgJ2FwaS92MS9wYXktcmVkc3lzJztcclxuZXhwb3J0IGNvbnN0IHBheW1lbnRQYXlQYWwgPSBhcGlEb21haW4gKyAnYXBpL3YxL3BheS1wYXlwYWwnO1xyXG5leHBvcnQgY29uc3QgcmVkc3lzID0gJ2h0dHBzOi8vc2lzLnJlZHN5cy5lcy9zaXMvcmVhbGl6YXJQYWdvJztcclxuXHJcbi8vIHRlc3RcclxuZXhwb3J0IGNvbnN0IGdldFRlc3RVcmwgPSBhcGlEb21haW4gKyAnYXBpL3Rlc3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEhlYWRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAvLyBjb25zdCB0b2tlbkRhdGEgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aFVzZXInKSlcclxuXHJcbiAgY29uc3QgdG9rZW5EYXRhID0gZ2V0U3RyaW5nKFwiYXV0aFVzZXJcIik7XHJcbiAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRva2VuRGF0YVxyXG4gIH1cclxuICByZXR1cm4gaGVhZGVycztcclxufVxyXG4iLCIvKipcclxuICogQEF1dGhvcjogQ29kZWFsc1xyXG4gKiBARGF0ZTogICAwNi0wMy0yMDIwXHJcbiAqIEBFbWFpbDogIGlhbkBjb2RlYWxzLmVzXHJcbiAqIEBMYXN0IG1vZGlmaWVkIGJ5OiAgIENvZGVhbHNcclxuICogQExhc3QgbW9kaWZpZWQgdGltZTogMDYtMDMtMjAyMFxyXG4gKiBAQ29weXJpZ2h0OiBDb2RlYWxzXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsaWVudElkID0gJzInO1xyXG5leHBvcnQgY29uc3QgY2xpZW50U2VjcmV0ID0gJ1hZWEhiSTIzWE5ON2llMXQ0Z3lwOUNscTA5bFNDRTM0ZFZXaVJ1YTgnO1xyXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIVxcclxcbiAqIEZvbnQgQXdlc29tZSBGcmVlIDUuNC4xIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tXFxyXFxuICogTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UvZnJlZSAoSWNvbnM6IENDIEJZIDQuMCwgRm9udHM6IFNJTCBPRkwgMS4xLCBDb2RlOiBNSVQgTGljZW5zZSlcXHJcXG4gKi9cXHJcXG4gLmZhLWFjY2Vzc2libGUtaWNvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzNjhcXFwifS5mYS1hY2N1c29mdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzNjlcXFwifS5mYS1hY3F1aXNpdGlvbnMtaW5jb3Jwb3JhdGVkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjZBRlxcXCJ9LmZhLWFkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjY0MVxcXCJ9LmZhLWFkZHJlc3MtYm9vazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQjlcXFwifS5mYS1hZGRyZXNzLWNhcmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkJCXFxcIn0uZmEtYWRqdXN0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA0MlxcXCJ9LmZhLWFkbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxNzBcXFwifS5mYS1hZHZlcnNhbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzNkFcXFwifS5mYS1hZmZpbGlhdGV0aGVtZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzNkJcXFwifS5mYS1haXItZnJlc2hlbmVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVEMFxcXCJ9LmZhLWFsZ29saWE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzZDXFxcIn0uZmEtYWxpZ24tY2VudGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAzN1xcXCJ9LmZhLWFsaWduLWp1c3RpZnk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDM5XFxcIn0uZmEtYWxpZ24tbGVmdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMzZcXFwifS5mYS1hbGlnbi1yaWdodDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMzhcXFwifS5mYS1hbGlwYXk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjQyXFxcIn0uZmEtYWxsZXJnaWVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ2MVxcXCJ9LmZhLWFtYXpvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNzBcXFwifS5mYS1hbWF6b24tcGF5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQyQ1xcXCJ9LmZhLWFtYnVsYW5jZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwRjlcXFwifS5mYS1hbWVyaWNhbi1zaWduLWxhbmd1YWdlLWludGVycHJldGluZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQTNcXFwifS5mYS1hbWlsaWE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzZEXFxcIn0uZmEtYW5jaG9yOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjEzRFxcXCJ9LmZhLWFuZHJvaWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTdCXFxcIn0uZmEtYW5nZWxsaXN0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIwOVxcXCJ9LmZhLWFuZ2xlLWRvdWJsZS1kb3duOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjEwM1xcXCJ9LmZhLWFuZ2xlLWRvdWJsZS1sZWZ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjEwMFxcXCJ9LmZhLWFuZ2xlLWRvdWJsZS1yaWdodDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMDFcXFwifS5mYS1hbmdsZS1kb3VibGUtdXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTAyXFxcIn0uZmEtYW5nbGUtZG93bjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMDdcXFwifS5mYS1hbmdsZS1sZWZ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjEwNFxcXCJ9LmZhLWFuZ2xlLXJpZ2h0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjEwNVxcXCJ9LmZhLWFuZ2xlLXVwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjEwNlxcXCJ9LmZhLWFuZ3J5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU1NlxcXCJ9LmZhLWFuZ3J5Y3JlYXRpdmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzZFXFxcIn0uZmEtYW5ndWxhcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MjBcXFwifS5mYS1hbmtoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjY0NFxcXCJ9LmZhLWFwcC1zdG9yZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzNkZcXFwifS5mYS1hcHAtc3RvcmUtaW9zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM3MFxcXCJ9LmZhLWFwcGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM3MVxcXCJ9LmZhLWFwcGxlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE3OVxcXCJ9LmZhLWFwcGxlLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1RDFcXFwifS5mYS1hcHBsZS1wYXk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDE1XFxcIn0uZmEtYXJjaGl2ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxODdcXFwifS5mYS1hcmNod2F5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU1N1xcXCJ9LmZhLWFycm93LWFsdC1jaXJjbGUtZG93bjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzNThcXFwifS5mYS1hcnJvdy1hbHQtY2lyY2xlLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzU5XFxcIn0uZmEtYXJyb3ctYWx0LWNpcmNsZS1yaWdodDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzNUFcXFwifS5mYS1hcnJvdy1hbHQtY2lyY2xlLXVwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM1QlxcXCJ9LmZhLWFycm93LWNpcmNsZS1kb3duOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBBQlxcXCJ9LmZhLWFycm93LWNpcmNsZS1sZWZ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBBOFxcXCJ9LmZhLWFycm93LWNpcmNsZS1yaWdodDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwQTlcXFwifS5mYS1hcnJvdy1jaXJjbGUtdXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEFBXFxcIn0uZmEtYXJyb3ctZG93bjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwNjNcXFwifS5mYS1hcnJvdy1sZWZ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA2MFxcXCJ9LmZhLWFycm93LXJpZ2h0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA2MVxcXCJ9LmZhLWFycm93LXVwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA2MlxcXCJ9LmZhLWFycm93cy1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEIyXFxcIn0uZmEtYXJyb3dzLWFsdC1oOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjMzN1xcXCJ9LmZhLWFycm93cy1hbHQtdjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzMzhcXFwifS5mYS1hc3Npc3RpdmUtbGlzdGVuaW5nLXN5c3RlbXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkEyXFxcIn0uZmEtYXN0ZXJpc2s6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDY5XFxcIn0uZmEtYXN5bW1ldHJpazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzNzJcXFwifS5mYS1hdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxRkFcXFwifS5mYS1hdGxhczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NThcXFwifS5mYS1hdG9tOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVEMlxcXCJ9LmZhLWF1ZGlibGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzczXFxcIn0uZmEtYXVkaW8tZGVzY3JpcHRpb246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjlFXFxcIn0uZmEtYXV0b3ByZWZpeGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQxQ1xcXCJ9LmZhLWF2aWFuZXg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzc0XFxcIn0uZmEtYXZpYXRvOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQyMVxcXCJ9LmZhLWF3YXJkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU1OVxcXCJ9LmZhLWF3czpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzNzVcXFwifS5mYS1iYWNrc3BhY2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTVBXFxcIn0uZmEtYmFja3dhcmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDRBXFxcIn0uZmEtYmFsYW5jZS1zY2FsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNEVcXFwifS5mYS1iYW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDVFXFxcIn0uZmEtYmFuZC1haWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDYyXFxcIn0uZmEtYmFuZGNhbXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkQ1XFxcIn0uZmEtYmFyY29kZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMkFcXFwifS5mYS1iYXJzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBDOVxcXCJ9LmZhLWJhc2ViYWxsLWJhbGw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDMzXFxcIn0uZmEtYmFza2V0YmFsbC1iYWxsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQzNFxcXCJ9LmZhLWJhdGg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkNEXFxcIn0uZmEtYmF0dGVyeS1lbXB0eTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNDRcXFwifS5mYS1iYXR0ZXJ5LWZ1bGw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjQwXFxcIn0uZmEtYmF0dGVyeS1oYWxmOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI0MlxcXCJ9LmZhLWJhdHRlcnktcXVhcnRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNDNcXFwifS5mYS1iYXR0ZXJ5LXRocmVlLXF1YXJ0ZXJzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI0MVxcXCJ9LmZhLWJlZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMzZcXFwifS5mYS1iZWVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBGQ1xcXCJ9LmZhLWJlaGFuY2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUI0XFxcIn0uZmEtYmVoYW5jZS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUI1XFxcIn0uZmEtYmVsbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwRjNcXFwifS5mYS1iZWxsLXNsYXNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFGNlxcXCJ9LmZhLWJlemllci1jdXJ2ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NUJcXFwifS5mYS1iaWJsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2NDdcXFwifS5mYS1iaWN5Y2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIwNlxcXCJ9LmZhLWJpbW9iamVjdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzNzhcXFwifS5mYS1iaW5vY3VsYXJzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFFNVxcXCJ9LmZhLWJpcnRoZGF5LWNha2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUZEXFxcIn0uZmEtYml0YnVja2V0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE3MVxcXCJ9LmZhLWJpdGNvaW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzc5XFxcIn0uZmEtYml0eTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzN0FcXFwifS5mYS1ibGFjay10aWU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjdFXFxcIn0uZmEtYmxhY2tiZXJyeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzN0JcXFwifS5mYS1ibGVuZGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUxN1xcXCJ9LmZhLWJsZW5kZXItcGhvbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNkI2XFxcIn0uZmEtYmxpbmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjlEXFxcIn0uZmEtYmxvZ2dlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzN0NcXFwifS5mYS1ibG9nZ2VyLWI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzdEXFxcIn0uZmEtYmx1ZXRvb3RoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI5M1xcXCJ9LmZhLWJsdWV0b290aC1iOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI5NFxcXCJ9LmZhLWJvbGQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDMyXFxcIn0uZmEtYm9sdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwRTdcXFwifS5mYS1ib21iOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFFMlxcXCJ9LmZhLWJvbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUQ3XFxcIn0uZmEtYm9uZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NUNcXFwifS5mYS1ib29rOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAyRFxcXCJ9LmZhLWJvb2stZGVhZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2QjdcXFwifS5mYS1ib29rLW9wZW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTE4XFxcIn0uZmEtYm9vay1yZWFkZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNURBXFxcIn0uZmEtYm9va21hcms6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDJFXFxcIn0uZmEtYm93bGluZy1iYWxsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQzNlxcXCJ9LmZhLWJveDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0NjZcXFwifS5mYS1ib3gtb3BlbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0OUVcXFwifS5mYS1ib3hlczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0NjhcXFwifS5mYS1icmFpbGxlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJBMVxcXCJ9LmZhLWJyYWluOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVEQ1xcXCJ9LmZhLWJyaWVmY2FzZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwQjFcXFwifS5mYS1icmllZmNhc2UtbWVkaWNhbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0NjlcXFwifS5mYS1icm9hZGNhc3QtdG93ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTE5XFxcIn0uZmEtYnJvb206YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTFBXFxcIn0uZmEtYnJ1c2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTVEXFxcIn0uZmEtYnRjOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE1QVxcXCJ9LmZhLWJ1ZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxODhcXFwifS5mYS1idWlsZGluZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQURcXFwifS5mYS1idWxsaG9ybjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwQTFcXFwifS5mYS1idWxsc2V5ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxNDBcXFwifS5mYS1idXJuOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ2QVxcXCJ9LmZhLWJ1cm9tb2JlbGV4cGVydGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzdGXFxcIn0uZmEtYnVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIwN1xcXCJ9LmZhLWJ1cy1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTVFXFxcIn0uZmEtYnVzaW5lc3MtdGltZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2NEFcXFwifS5mYS1idXlzZWxsYWRzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIwRFxcXCJ9LmZhLWNhbGN1bGF0b3I6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUVDXFxcIn0uZmEtY2FsZW5kYXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTMzXFxcIn0uZmEtY2FsZW5kYXItYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA3M1xcXCJ9LmZhLWNhbGVuZGFyLWNoZWNrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI3NFxcXCJ9LmZhLWNhbGVuZGFyLW1pbnVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI3MlxcXCJ9LmZhLWNhbGVuZGFyLXBsdXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjcxXFxcIn0uZmEtY2FsZW5kYXItdGltZXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjczXFxcIn0uZmEtY2FtZXJhOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAzMFxcXCJ9LmZhLWNhbWVyYS1yZXRybzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwODNcXFwifS5mYS1jYW1wZ3JvdW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjZCQlxcXCJ9LmZhLWNhbm5hYmlzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU1RlxcXCJ9LmZhLWNhcHN1bGVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ2QlxcXCJ9LmZhLWNhcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQjlcXFwifS5mYS1jYXItYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVERVxcXCJ9LmZhLWNhci1iYXR0ZXJ5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVERlxcXCJ9LmZhLWNhci1jcmFzaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1RTFcXFwifS5mYS1jYXItc2lkZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1RTRcXFwifS5mYS1jYXJldC1kb3duOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBEN1xcXCJ9LmZhLWNhcmV0LWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEQ5XFxcIn0uZmEtY2FyZXQtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMERBXFxcIn0uZmEtY2FyZXQtc3F1YXJlLWRvd246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTUwXFxcIn0uZmEtY2FyZXQtc3F1YXJlLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTkxXFxcIn0uZmEtY2FyZXQtc3F1YXJlLXJpZ2h0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE1MlxcXCJ9LmZhLWNhcmV0LXNxdWFyZS11cDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxNTFcXFwifS5mYS1jYXJldC11cDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwRDhcXFwifS5mYS1jYXJ0LWFycm93LWRvd246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjE4XFxcIn0uZmEtY2FydC1wbHVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIxN1xcXCJ9LmZhLWNhdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2QkVcXFwifS5mYS1jYy1hbWF6b24tcGF5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQyRFxcXCJ9LmZhLWNjLWFtZXg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUYzXFxcIn0uZmEtY2MtYXBwbGUtcGF5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQxNlxcXCJ9LmZhLWNjLWRpbmVycy1jbHViOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI0Q1xcXCJ9LmZhLWNjLWRpc2NvdmVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFGMlxcXCJ9LmZhLWNjLWpjYjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNEJcXFwifS5mYS1jYy1tYXN0ZXJjYXJkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFGMVxcXCJ9LmZhLWNjLXBheXBhbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxRjRcXFwifS5mYS1jYy1zdHJpcGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUY1XFxcIn0uZmEtY2MtdmlzYTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxRjBcXFwifS5mYS1jZW50ZXJjb2RlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM4MFxcXCJ9LmZhLWNlcnRpZmljYXRlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBBM1xcXCJ9LmZhLWNoYWlyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjZDMFxcXCJ9LmZhLWNoYWxrYm9hcmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTFCXFxcIn0uZmEtY2hhbGtib2FyZC10ZWFjaGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUxQ1xcXCJ9LmZhLWNoYXJnaW5nLXN0YXRpb246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUU3XFxcIn0uZmEtY2hhcnQtYXJlYTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxRkVcXFwifS5mYS1jaGFydC1iYXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDgwXFxcIn0uZmEtY2hhcnQtbGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMDFcXFwifS5mYS1jaGFydC1waWU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjAwXFxcIn0uZmEtY2hlY2s6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDBDXFxcIn0uZmEtY2hlY2stY2lyY2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA1OFxcXCJ9LmZhLWNoZWNrLWRvdWJsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NjBcXFwifS5mYS1jaGVjay1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTRBXFxcIn0uZmEtY2hlc3M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDM5XFxcIn0uZmEtY2hlc3MtYmlzaG9wOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQzQVxcXCJ9LmZhLWNoZXNzLWJvYXJkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQzQ1xcXCJ9LmZhLWNoZXNzLWtpbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDNGXFxcIn0uZmEtY2hlc3Mta25pZ2h0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ0MVxcXCJ9LmZhLWNoZXNzLXBhd246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDQzXFxcIn0uZmEtY2hlc3MtcXVlZW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDQ1XFxcIn0uZmEtY2hlc3Mtcm9vazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0NDdcXFwifS5mYS1jaGV2cm9uLWNpcmNsZS1kb3duOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjEzQVxcXCJ9LmZhLWNoZXZyb24tY2lyY2xlLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTM3XFxcIn0uZmEtY2hldnJvbi1jaXJjbGUtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTM4XFxcIn0uZmEtY2hldnJvbi1jaXJjbGUtdXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTM5XFxcIn0uZmEtY2hldnJvbi1kb3duOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA3OFxcXCJ9LmZhLWNoZXZyb24tbGVmdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwNTNcXFwifS5mYS1jaGV2cm9uLXJpZ2h0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA1NFxcXCJ9LmZhLWNoZXZyb24tdXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDc3XFxcIn0uZmEtY2hpbGQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUFFXFxcIn0uZmEtY2hyb21lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI2OFxcXCJ9LmZhLWNodXJjaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MURcXFwifS5mYS1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTExXFxcIn0uZmEtY2lyY2xlLW5vdGNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFDRVxcXCJ9LmZhLWNpdHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjRGXFxcIn0uZmEtY2xpcGJvYXJkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjMyOFxcXCJ9LmZhLWNsaXBib2FyZC1jaGVjazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0NkNcXFwifS5mYS1jbGlwYm9hcmQtbGlzdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0NkRcXFwifS5mYS1jbG9jazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMTdcXFwifS5mYS1jbG9uZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNERcXFwifS5mYS1jbG9zZWQtY2FwdGlvbmluZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMEFcXFwifS5mYS1jbG91ZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwQzJcXFwifS5mYS1jbG91ZC1kb3dubG9hZC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzgxXFxcIn0uZmEtY2xvdWQtbW9vbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2QzNcXFwifS5mYS1jbG91ZC1zdW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNkM0XFxcIn0uZmEtY2xvdWQtdXBsb2FkLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzODJcXFwifS5mYS1jbG91ZHNjYWxlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM4M1xcXCJ9LmZhLWNsb3Vkc21pdGg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzg0XFxcIn0uZmEtY2xvdWR2ZXJzaWZ5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM4NVxcXCJ9LmZhLWNvY2t0YWlsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU2MVxcXCJ9LmZhLWNvZGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTIxXFxcIn0uZmEtY29kZS1icmFuY2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTI2XFxcIn0uZmEtY29kZXBlbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQ0JcXFwifS5mYS1jb2RpZXBpZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyODRcXFwifS5mYS1jb2ZmZWU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEY0XFxcIn0uZmEtY29nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAxM1xcXCJ9LmZhLWNvZ3M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDg1XFxcIn0uZmEtY29pbnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTFFXFxcIn0uZmEtY29sdW1uczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwREJcXFwifS5mYS1jb21tZW50OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA3NVxcXCJ9LmZhLWNvbW1lbnQtYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI3QVxcXCJ9LmZhLWNvbW1lbnQtZG9sbGFyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjY1MVxcXCJ9LmZhLWNvbW1lbnQtZG90czpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0QURcXFwifS5mYS1jb21tZW50LXNsYXNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRCM1xcXCJ9LmZhLWNvbW1lbnRzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA4NlxcXCJ9LmZhLWNvbW1lbnRzLWRvbGxhcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2NTNcXFwifS5mYS1jb21wYWN0LWRpc2M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTFGXFxcIn0uZmEtY29tcGFzczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxNEVcXFwifS5mYS1jb21wcmVzczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwNjZcXFwifS5mYS1jb25jaWVyZ2UtYmVsbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NjJcXFwifS5mYS1jb25uZWN0ZGV2ZWxvcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMEVcXFwifS5mYS1jb250YW86YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjZEXFxcIn0uZmEtY29va2llOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU2M1xcXCJ9LmZhLWNvb2tpZS1iaXRlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU2NFxcXCJ9LmZhLWNvcHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEM1XFxcIn0uZmEtY29weXJpZ2h0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFGOVxcXCJ9LmZhLWNvdWNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRCOFxcXCJ9LmZhLWNwYW5lbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzODhcXFwifS5mYS1jcmVhdGl2ZS1jb21tb25zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI1RVxcXCJ9LmZhLWNyZWF0aXZlLWNvbW1vbnMtYnk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEU3XFxcIn0uZmEtY3JlYXRpdmUtY29tbW9ucy1uYzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0RThcXFwifS5mYS1jcmVhdGl2ZS1jb21tb25zLW5jLWV1OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRFOVxcXCJ9LmZhLWNyZWF0aXZlLWNvbW1vbnMtbmMtanA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEVBXFxcIn0uZmEtY3JlYXRpdmUtY29tbW9ucy1uZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0RUJcXFwifS5mYS1jcmVhdGl2ZS1jb21tb25zLXBkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRFQ1xcXCJ9LmZhLWNyZWF0aXZlLWNvbW1vbnMtcGQtYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRFRFxcXCJ9LmZhLWNyZWF0aXZlLWNvbW1vbnMtcmVtaXg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEVFXFxcIn0uZmEtY3JlYXRpdmUtY29tbW9ucy1zYTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0RUZcXFwifS5mYS1jcmVhdGl2ZS1jb21tb25zLXNhbXBsaW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRGMFxcXCJ9LmZhLWNyZWF0aXZlLWNvbW1vbnMtc2FtcGxpbmctcGx1czpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0RjFcXFwifS5mYS1jcmVhdGl2ZS1jb21tb25zLXNoYXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRGMlxcXCJ9LmZhLWNyZWF0aXZlLWNvbW1vbnMtemVybzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0RjNcXFwifS5mYS1jcmVkaXQtY2FyZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwOURcXFwifS5mYS1jcml0aWNhbC1yb2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjZDOVxcXCJ9LmZhLWNyb3A6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTI1XFxcIn0uZmEtY3JvcC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTY1XFxcIn0uZmEtY3Jvc3M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjU0XFxcIn0uZmEtY3Jvc3NoYWlyczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwNUJcXFwifS5mYS1jcm93OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUyMFxcXCJ9LmZhLWNyb3duOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUyMVxcXCJ9LmZhLWNzczM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTNDXFxcIn0uZmEtY3NzMy1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzhCXFxcIn0uZmEtY3ViZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQjJcXFwifS5mYS1jdWJlczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQjNcXFwifS5mYS1jdXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEM0XFxcIn0uZmEtY3V0dGxlZmlzaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzOENcXFwifS5mYS1kLWFuZC1kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM4RFxcXCJ9LmZhLWRhc2hjdWJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIxMFxcXCJ9LmZhLWRhdGFiYXNlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFDMFxcXCJ9LmZhLWRlYWY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkE0XFxcIn0uZmEtZGVsaWNpb3VzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFBNVxcXCJ9LmZhLWRlcGxveWRvZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzOEVcXFwifS5mYS1kZXNrcHJvOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM4RlxcXCJ9LmZhLWRlc2t0b3A6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTA4XFxcIn0uZmEtZGV2OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjZDQ1xcXCJ9LmZhLWRldmlhbnRhcnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUJEXFxcIn0uZmEtZGhhcm1hY2hha3JhOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjY1NVxcXCJ9LmZhLWRpYWdub3NlczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0NzBcXFwifS5mYS1kaWNlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUyMlxcXCJ9LmZhLWRpY2UtZDIwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjZDRlxcXCJ9LmZhLWRpY2UtZDY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNkQxXFxcIn0uZmEtZGljZS1maXZlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUyM1xcXCJ9LmZhLWRpY2UtZm91cjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MjRcXFwifS5mYS1kaWNlLW9uZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MjVcXFwifS5mYS1kaWNlLXNpeDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MjZcXFwifS5mYS1kaWNlLXRocmVlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUyN1xcXCJ9LmZhLWRpY2UtdHdvOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUyOFxcXCJ9LmZhLWRpZ2c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUE2XFxcIn0uZmEtZGlnaXRhbC1vY2VhbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzOTFcXFwifS5mYS1kaWdpdGFsLXRhY2hvZ3JhcGg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTY2XFxcIn0uZmEtZGlyZWN0aW9uczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1RUJcXFwifS5mYS1kaXNjb3JkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM5MlxcXCJ9LmZhLWRpc2NvdXJzZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzOTNcXFwifS5mYS1kaXZpZGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTI5XFxcIn0uZmEtZGl6enk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTY3XFxcIn0uZmEtZG5hOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ3MVxcXCJ9LmZhLWRvY2h1YjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzOTRcXFwifS5mYS1kb2NrZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzk1XFxcIn0uZmEtZG9nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjZEM1xcXCJ9LmZhLWRvbGxhci1zaWduOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE1NVxcXCJ9LmZhLWRvbGx5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ3MlxcXCJ9LmZhLWRvbGx5LWZsYXRiZWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDc0XFxcIn0uZmEtZG9uYXRlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRCOVxcXCJ9LmZhLWRvb3ItY2xvc2VkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUyQVxcXCJ9LmZhLWRvb3Itb3BlbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MkJcXFwifS5mYS1kb3QtY2lyY2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE5MlxcXCJ9LmZhLWRvdmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEJBXFxcIn0uZmEtZG93bmxvYWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDE5XFxcIn0uZmEtZHJhZnQyZGlnaXRhbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzOTZcXFwifS5mYS1kcmFmdGluZy1jb21wYXNzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU2OFxcXCJ9LmZhLWRyYWdvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2RDVcXFwifS5mYS1kcmF3LXBvbHlnb246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUVFXFxcIn0uZmEtZHJpYmJibGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTdEXFxcIn0uZmEtZHJpYmJibGUtc3F1YXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM5N1xcXCJ9LmZhLWRyb3Bib3g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTZCXFxcIn0uZmEtZHJ1bTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NjlcXFwifS5mYS1kcnVtLXN0ZWVscGFuOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU2QVxcXCJ9LmZhLWRydW1zdGljay1iaXRlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjZEN1xcXCJ9LmZhLWRydXBhbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQTlcXFwifS5mYS1kdW1iYmVsbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0NEJcXFwifS5mYS1kdW5nZW9uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjZEOVxcXCJ9LmZhLWR5YWxvZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzOTlcXFwifS5mYS1lYXJseWJpcmRzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM5QVxcXCJ9LmZhLWViYXk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEY0XFxcIn0uZmEtZWRnZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyODJcXFwifS5mYS1lZGl0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA0NFxcXCJ9LmZhLWVqZWN0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA1MlxcXCJ9LmZhLWVsZW1lbnRvcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MzBcXFwifS5mYS1lbGxpcHNpcy1oOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE0MVxcXCJ9LmZhLWVsbGlwc2lzLXY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTQyXFxcIn0uZmEtZWxsbzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1RjFcXFwifS5mYS1lbWJlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MjNcXFwifS5mYS1lbXBpcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUQxXFxcIn0uZmEtZW52ZWxvcGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEUwXFxcIn0uZmEtZW52ZWxvcGUtb3BlbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQjZcXFwifS5mYS1lbnZlbG9wZS1vcGVuLXRleHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjU4XFxcIn0uZmEtZW52ZWxvcGUtc3F1YXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE5OVxcXCJ9LmZhLWVudmlyYTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyOTlcXFwifS5mYS1lcXVhbHM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTJDXFxcIn0uZmEtZXJhc2VyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjEyRFxcXCJ9LmZhLWVybGFuZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzOURcXFwifS5mYS1ldGhlcmV1bTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MkVcXFwifS5mYS1ldHN5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJEN1xcXCJ9LmZhLWV1cm8tc2lnbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxNTNcXFwifS5mYS1leGNoYW5nZS1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzYyXFxcIn0uZmEtZXhjbGFtYXRpb246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTJBXFxcIn0uZmEtZXhjbGFtYXRpb24tY2lyY2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA2QVxcXCJ9LmZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA3MVxcXCJ9LmZhLWV4cGFuZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwNjVcXFwifS5mYS1leHBhbmQtYXJyb3dzLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzMUVcXFwifS5mYS1leHBlZGl0ZWRzc2w6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjNFXFxcIn0uZmEtZXh0ZXJuYWwtbGluay1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzVEXFxcIn0uZmEtZXh0ZXJuYWwtbGluay1zcXVhcmUtYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM2MFxcXCJ9LmZhLWV5ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwNkVcXFwifS5mYS1leWUtZHJvcHBlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxRkJcXFwifS5mYS1leWUtc2xhc2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDcwXFxcIn0uZmEtZmFjZWJvb2s6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDlBXFxcIn0uZmEtZmFjZWJvb2stZjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzOUVcXFwifS5mYS1mYWNlYm9vay1tZXNzZW5nZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzlGXFxcIn0uZmEtZmFjZWJvb2stc3F1YXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA4MlxcXCJ9LmZhLWZhbnRhc3ktZmxpZ2h0LWdhbWVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjZEQ1xcXCJ9LmZhLWZhc3QtYmFja3dhcmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDQ5XFxcIn0uZmEtZmFzdC1mb3J3YXJkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA1MFxcXCJ9LmZhLWZheDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQUNcXFwifS5mYS1mZWF0aGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUyRFxcXCJ9LmZhLWZlYXRoZXItYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU2QlxcXCJ9LmZhLWZlbWFsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxODJcXFwifS5mYS1maWdodGVyLWpldDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwRkJcXFwifS5mYS1maWxlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE1QlxcXCJ9LmZhLWZpbGUtYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE1Q1xcXCJ9LmZhLWZpbGUtYXJjaGl2ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQzZcXFwifS5mYS1maWxlLWF1ZGlvOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFDN1xcXCJ9LmZhLWZpbGUtY29kZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQzlcXFwifS5mYS1maWxlLWNvbnRyYWN0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU2Q1xcXCJ9LmZhLWZpbGUtY3N2OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjZERFxcXCJ9LmZhLWZpbGUtZG93bmxvYWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTZEXFxcIn0uZmEtZmlsZS1leGNlbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQzNcXFwifS5mYS1maWxlLWV4cG9ydDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NkVcXFwifS5mYS1maWxlLWltYWdlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFDNVxcXCJ9LmZhLWZpbGUtaW1wb3J0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU2RlxcXCJ9LmZhLWZpbGUtaW52b2ljZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NzBcXFwifS5mYS1maWxlLWludm9pY2UtZG9sbGFyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU3MVxcXCJ9LmZhLWZpbGUtbWVkaWNhbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0NzdcXFwifS5mYS1maWxlLW1lZGljYWwtYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ3OFxcXCJ9LmZhLWZpbGUtcGRmOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFDMVxcXCJ9LmZhLWZpbGUtcG93ZXJwb2ludDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQzRcXFwifS5mYS1maWxlLXByZXNjcmlwdGlvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NzJcXFwifS5mYS1maWxlLXNpZ25hdHVyZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NzNcXFwifS5mYS1maWxlLXVwbG9hZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NzRcXFwifS5mYS1maWxlLXZpZGVvOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFDOFxcXCJ9LmZhLWZpbGUtd29yZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQzJcXFwifS5mYS1maWxsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU3NVxcXCJ9LmZhLWZpbGwtZHJpcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NzZcXFwifS5mYS1maWxtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAwOFxcXCJ9LmZhLWZpbHRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwQjBcXFwifS5mYS1maW5nZXJwcmludDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NzdcXFwifS5mYS1maXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA2RFxcXCJ9LmZhLWZpcmUtZXh0aW5ndWlzaGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjEzNFxcXCJ9LmZhLWZpcmVmb3g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjY5XFxcIn0uZmEtZmlyc3QtYWlkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ3OVxcXCJ9LmZhLWZpcnN0LW9yZGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJCMFxcXCJ9LmZhLWZpcnN0LW9yZGVyLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MEFcXFwifS5mYS1maXJzdGRyYWZ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNBMVxcXCJ9LmZhLWZpc2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTc4XFxcIn0uZmEtZmlzdC1yYWlzZWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNkRFXFxcIn0uZmEtZmxhZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMjRcXFwifS5mYS1mbGFnLWNoZWNrZXJlZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMUVcXFwifS5mYS1mbGFzazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwQzNcXFwifS5mYS1mbGlja3I6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTZFXFxcIn0uZmEtZmxpcGJvYXJkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ0RFxcXCJ9LmZhLWZsdXNoZWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTc5XFxcIn0uZmEtZmx5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQxN1xcXCJ9LmZhLWZvbGRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwN0JcXFwifS5mYS1mb2xkZXItbWludXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjVEXFxcIn0uZmEtZm9sZGVyLW9wZW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDdDXFxcIn0uZmEtZm9sZGVyLXBsdXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjVFXFxcIn0uZmEtZm9udDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMzFcXFwifS5mYS1mb250LWF3ZXNvbWU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkI0XFxcIn0uZmEtZm9udC1hd2Vzb21lLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzNUNcXFwifS5mYS1mb250LWF3ZXNvbWUtZmxhZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MjVcXFwifS5mYS1mb250LWF3ZXNvbWUtbG9nby1mdWxsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRFNlxcXCJ9LmZhLWZvbnRpY29uczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyODBcXFwifS5mYS1mb250aWNvbnMtZmk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0EyXFxcIn0uZmEtZm9vdGJhbGwtYmFsbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0NEVcXFwifS5mYS1mb3J0LWF3ZXNvbWU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjg2XFxcIn0uZmEtZm9ydC1hd2Vzb21lLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQTNcXFwifS5mYS1mb3J1bWJlZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMTFcXFwifS5mYS1mb3J3YXJkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA0RVxcXCJ9LmZhLWZvdXJzcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTgwXFxcIn0uZmEtZnJlZS1jb2RlLWNhbXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkM1XFxcIn0uZmEtZnJlZWJzZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQTRcXFwifS5mYS1mcm9nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUyRVxcXCJ9LmZhLWZyb3duOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjExOVxcXCJ9LmZhLWZyb3duLW9wZW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTdBXFxcIn0uZmEtZnVsY3J1bTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MEJcXFwifS5mYS1mdW5uZWwtZG9sbGFyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjY2MlxcXCJ9LmZhLWZ1dGJvbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxRTNcXFwifS5mYS1nYWxhY3RpYy1yZXB1YmxpYzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MENcXFwifS5mYS1nYWxhY3RpYy1zZW5hdGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTBEXFxcIn0uZmEtZ2FtZXBhZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMUJcXFwifS5mYS1nYXMtcHVtcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MkZcXFwifS5mYS1nYXZlbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwRTNcXFwifS5mYS1nZW06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0E1XFxcIn0uZmEtZ2VuZGVybGVzczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMkRcXFwifS5mYS1nZXQtcG9ja2V0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI2NVxcXCJ9LmZhLWdnOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI2MFxcXCJ9LmZhLWdnLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNjFcXFwifS5mYS1naG9zdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2RTJcXFwifS5mYS1naWZ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA2QlxcXCJ9LmZhLWdpdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxRDNcXFwifS5mYS1naXQtc3F1YXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFEMlxcXCJ9LmZhLWdpdGh1YjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwOUJcXFwifS5mYS1naXRodWItYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjExM1xcXCJ9LmZhLWdpdGh1Yi1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDkyXFxcIn0uZmEtZ2l0a3Jha2VuOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNBNlxcXCJ9LmZhLWdpdGxhYjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyOTZcXFwifS5mYS1naXR0ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDI2XFxcIn0uZmEtZ2xhc3MtbWFydGluaTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMDBcXFwifS5mYS1nbGFzcy1tYXJ0aW5pLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1N0JcXFwifS5mYS1nbGFzc2VzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUzMFxcXCJ9LmZhLWdsaWRlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJBNVxcXCJ9LmZhLWdsaWRlLWc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkE2XFxcIn0uZmEtZ2xvYmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEFDXFxcIn0uZmEtZ2xvYmUtYWZyaWNhOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU3Q1xcXCJ9LmZhLWdsb2JlLWFtZXJpY2FzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU3RFxcXCJ9LmZhLWdsb2JlLWFzaWE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTdFXFxcIn0uZmEtZ29mb3JlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNBN1xcXCJ9LmZhLWdvbGYtYmFsbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0NTBcXFwifS5mYS1nb29kcmVhZHM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0E4XFxcIn0uZmEtZ29vZHJlYWRzLWc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0E5XFxcIn0uZmEtZ29vZ2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFBMFxcXCJ9LmZhLWdvb2dsZS1kcml2ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQUFcXFwifS5mYS1nb29nbGUtcGxheTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQUJcXFwifS5mYS1nb29nbGUtcGx1czpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQjNcXFwifS5mYS1nb29nbGUtcGx1cy1nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBENVxcXCJ9LmZhLWdvb2dsZS1wbHVzLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwRDRcXFwifS5mYS1nb29nbGUtd2FsbGV0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFFRVxcXCJ9LmZhLWdvcHVyYW06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjY0XFxcIn0uZmEtZ3JhZHVhdGlvbi1jYXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTlEXFxcIn0uZmEtZ3JhdGlwYXk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTg0XFxcIn0uZmEtZ3JhdjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyRDZcXFwifS5mYS1ncmVhdGVyLXRoYW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTMxXFxcIn0uZmEtZ3JlYXRlci10aGFuLWVxdWFsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUzMlxcXCJ9LmZhLWdyaW1hY2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTdGXFxcIn0uZmEtZ3JpbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1ODBcXFwifS5mYS1ncmluLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1ODFcXFwifS5mYS1ncmluLWJlYW06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTgyXFxcIn0uZmEtZ3Jpbi1iZWFtLXN3ZWF0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU4M1xcXCJ9LmZhLWdyaW4taGVhcnRzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU4NFxcXCJ9LmZhLWdyaW4tc3F1aW50OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU4NVxcXCJ9LmZhLWdyaW4tc3F1aW50LXRlYXJzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU4NlxcXCJ9LmZhLWdyaW4tc3RhcnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTg3XFxcIn0uZmEtZ3Jpbi10ZWFyczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1ODhcXFwifS5mYS1ncmluLXRvbmd1ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1ODlcXFwifS5mYS1ncmluLXRvbmd1ZS1zcXVpbnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNThBXFxcIn0uZmEtZ3Jpbi10b25ndWUtd2luazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1OEJcXFwifS5mYS1ncmluLXdpbms6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNThDXFxcIn0uZmEtZ3JpcC1ob3Jpem9udGFsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU4RFxcXCJ9LmZhLWdyaXAtdmVydGljYWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNThFXFxcIn0uZmEtZ3JpcGZpcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0FDXFxcIn0uZmEtZ3J1bnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0FEXFxcIn0uZmEtZ3VscDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQUVcXFwifS5mYS1oLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwRkRcXFwifS5mYS1oYWNrZXItbmV3czpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxRDRcXFwifS5mYS1oYWNrZXItbmV3cy1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0FGXFxcIn0uZmEtaGFja2VycmFuazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1RjdcXFwifS5mYS1oYW1tZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNkUzXFxcIn0uZmEtaGFtc2E6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjY1XFxcIn0uZmEtaGFuZC1ob2xkaW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRCRFxcXCJ9LmZhLWhhbmQtaG9sZGluZy1oZWFydDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0QkVcXFwifS5mYS1oYW5kLWhvbGRpbmctdXNkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRDMFxcXCJ9LmZhLWhhbmQtbGl6YXJkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI1OFxcXCJ9LmZhLWhhbmQtcGFwZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjU2XFxcIn0uZmEtaGFuZC1wZWFjZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNUJcXFwifS5mYS1oYW5kLXBvaW50LWRvd246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEE3XFxcIn0uZmEtaGFuZC1wb2ludC1sZWZ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBBNVxcXCJ9LmZhLWhhbmQtcG9pbnQtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEE0XFxcIn0uZmEtaGFuZC1wb2ludC11cDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwQTZcXFwifS5mYS1oYW5kLXBvaW50ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjVBXFxcIn0uZmEtaGFuZC1yb2NrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI1NVxcXCJ9LmZhLWhhbmQtc2Npc3NvcnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjU3XFxcIn0uZmEtaGFuZC1zcG9jazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNTlcXFwifS5mYS1oYW5kczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0QzJcXFwifS5mYS1oYW5kcy1oZWxwaW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRDNFxcXCJ9LmZhLWhhbmRzaGFrZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQjVcXFwifS5mYS1oYW51a2lhaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2RTZcXFwifS5mYS1oYXNodGFnOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI5MlxcXCJ9LmZhLWhhdC13aXphcmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNkU4XFxcIn0uZmEtaGF5a2FsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjY2NlxcXCJ9LmZhLWhkZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwQTBcXFwifS5mYS1oZWFkaW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFEQ1xcXCJ9LmZhLWhlYWRwaG9uZXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDI1XFxcIn0uZmEtaGVhZHBob25lcy1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNThGXFxcIn0uZmEtaGVhZHNldDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1OTBcXFwifS5mYS1oZWFydDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMDRcXFwifS5mYS1oZWFydGJlYXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjFFXFxcIn0uZmEtaGVsaWNvcHRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MzNcXFwifS5mYS1oaWdobGlnaHRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1OTFcXFwifS5mYS1oaWtpbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNkVDXFxcIn0uZmEtaGlwcG86YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNkVEXFxcIn0uZmEtaGlwczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0NTJcXFwifS5mYS1oaXJlLWEtaGVscGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNCMFxcXCJ9LmZhLWhpc3Rvcnk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMURBXFxcIn0uZmEtaG9ja2V5LXB1Y2s6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDUzXFxcIn0uZmEtaG9tZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMTVcXFwifS5mYS1ob29saTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MjdcXFwifS5mYS1ob3JuYmlsbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1OTJcXFwifS5mYS1ob3JzZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2RjBcXFwifS5mYS1ob3NwaXRhbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwRjhcXFwifS5mYS1ob3NwaXRhbC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDdEXFxcIn0uZmEtaG9zcGl0YWwtc3ltYm9sOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ3RVxcXCJ9LmZhLWhvdC10dWI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTkzXFxcIn0uZmEtaG90ZWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTk0XFxcIn0uZmEtaG90amFyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNCMVxcXCJ9LmZhLWhvdXJnbGFzczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNTRcXFwifS5mYS1ob3VyZ2xhc3MtZW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI1M1xcXCJ9LmZhLWhvdXJnbGFzcy1oYWxmOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI1MlxcXCJ9LmZhLWhvdXJnbGFzcy1zdGFydDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNTFcXFwifS5mYS1ob3VzZS1kYW1hZ2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNkYxXFxcIn0uZmEtaG91eno6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjdDXFxcIn0uZmEtaHJ5dm5pYTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2RjJcXFwifS5mYS1odG1sNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxM0JcXFwifS5mYS1odWJzcG90OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNCMlxcXCJ9LmZhLWktY3Vyc29yOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI0NlxcXCJ9LmZhLWlkLWJhZGdlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJDMVxcXCJ9LmZhLWlkLWNhcmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkMyXFxcIn0uZmEtaWQtY2FyZC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDdGXFxcIn0uZmEtaW1hZ2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDNFXFxcIn0uZmEtaW1hZ2VzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjMwMlxcXCJ9LmZhLWltZGI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkQ4XFxcIn0uZmEtaW5ib3g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDFDXFxcIn0uZmEtaW5kZW50OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAzQ1xcXCJ9LmZhLWluZHVzdHJ5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI3NVxcXCJ9LmZhLWluZmluaXR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUzNFxcXCJ9LmZhLWluZm86YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTI5XFxcIn0uZmEtaW5mby1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDVBXFxcIn0uZmEtaW5zdGFncmFtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE2RFxcXCJ9LmZhLWludGVybmV0LWV4cGxvcmVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI2QlxcXCJ9LmZhLWlveGhvc3Q6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjA4XFxcIn0uZmEtaXRhbGljOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAzM1xcXCJ9LmZhLWl0dW5lczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQjRcXFwifS5mYS1pdHVuZXMtbm90ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQjVcXFwifS5mYS1qYXZhOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRFNFxcXCJ9LmZhLWplZGk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjY5XFxcIn0uZmEtamVkaS1vcmRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MEVcXFwifS5mYS1qZW5raW5zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNCNlxcXCJ9LmZhLWpvZ2V0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNCN1xcXCJ9LmZhLWpvaW50OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU5NVxcXCJ9LmZhLWpvb21sYTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQUFcXFwifS5mYS1qb3VybmFsLXdoaWxsczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2NkFcXFwifS5mYS1qczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQjhcXFwifS5mYS1qcy1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0I5XFxcIn0uZmEtanNmaWRkbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUNDXFxcIn0uZmEta2FhYmE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjZCXFxcIn0uZmEta2FnZ2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVGQVxcXCJ9LmZhLWtleTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwODRcXFwifS5mYS1rZXliYXNlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRGNVxcXCJ9LmZhLWtleWJvYXJkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjExQ1xcXCJ9LmZhLWtleWNkbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQkFcXFwifS5mYS1raGFuZGE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjZEXFxcIn0uZmEta2lja3N0YXJ0ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0JCXFxcIn0uZmEta2lja3N0YXJ0ZXItazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQkNcXFwifS5mYS1raXNzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU5NlxcXCJ9LmZhLWtpc3MtYmVhbTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1OTdcXFwifS5mYS1raXNzLXdpbmstaGVhcnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTk4XFxcIn0uZmEta2l3aS1iaXJkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUzNVxcXCJ9LmZhLWtvcnZ1ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MkZcXFwifS5mYS1sYW5kbWFyazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2NkZcXFwifS5mYS1sYW5ndWFnZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQUJcXFwifS5mYS1sYXB0b3A6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTA5XFxcIn0uZmEtbGFwdG9wLWNvZGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUZDXFxcIn0uZmEtbGFyYXZlbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQkRcXFwifS5mYS1sYXN0Zm06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjAyXFxcIn0uZmEtbGFzdGZtLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMDNcXFwifS5mYS1sYXVnaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1OTlcXFwifS5mYS1sYXVnaC1iZWFtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU5QVxcXCJ9LmZhLWxhdWdoLXNxdWludDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1OUJcXFwifS5mYS1sYXVnaC13aW5rOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU5Q1xcXCJ9LmZhLWxheWVyLWdyb3VwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVGRFxcXCJ9LmZhLWxlYWY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDZDXFxcIn0uZmEtbGVhbnB1YjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMTJcXFwifS5mYS1sZW1vbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwOTRcXFwifS5mYS1sZXNzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQxRFxcXCJ9LmZhLWxlc3MtdGhhbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MzZcXFwifS5mYS1sZXNzLXRoYW4tZXF1YWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTM3XFxcIn0uZmEtbGV2ZWwtZG93bi1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0JFXFxcIn0uZmEtbGV2ZWwtdXAtYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNCRlxcXCJ9LmZhLWxpZmUtcmluZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQ0RcXFwifS5mYS1saWdodGJ1bGI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEVCXFxcIn0uZmEtbGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQzBcXFwifS5mYS1saW5rOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBDMVxcXCJ9LmZhLWxpbmtlZGluOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA4Q1xcXCJ9LmZhLWxpbmtlZGluLWluOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBFMVxcXCJ9LmZhLWxpbm9kZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQjhcXFwifS5mYS1saW51eDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxN0NcXFwifS5mYS1saXJhLXNpZ246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTk1XFxcIn0uZmEtbGlzdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwM0FcXFwifS5mYS1saXN0LWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMjJcXFwifS5mYS1saXN0LW9sOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBDQlxcXCJ9LmZhLWxpc3QtdWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMENBXFxcIn0uZmEtbG9jYXRpb24tYXJyb3c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTI0XFxcIn0uZmEtbG9jazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMjNcXFwifS5mYS1sb2NrLW9wZW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0MxXFxcIn0uZmEtbG9uZy1hcnJvdy1hbHQtZG93bjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzMDlcXFwifS5mYS1sb25nLWFycm93LWFsdC1sZWZ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjMwQVxcXCJ9LmZhLWxvbmctYXJyb3ctYWx0LXJpZ2h0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjMwQlxcXCJ9LmZhLWxvbmctYXJyb3ctYWx0LXVwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjMwQ1xcXCJ9LmZhLWxvdy12aXNpb246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkE4XFxcIn0uZmEtbHVnZ2FnZS1jYXJ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU5RFxcXCJ9LmZhLWx5ZnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0MzXFxcIn0uZmEtbWFnZW50bzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQzRcXFwifS5mYS1tYWdpYzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwRDBcXFwifS5mYS1tYWduZXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDc2XFxcIn0uZmEtbWFpbC1idWxrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjY3NFxcXCJ9LmZhLW1haWxjaGltcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1OUVcXFwifS5mYS1tYWxlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE4M1xcXCJ9LmZhLW1hbmRhbG9yaWFuOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUwRlxcXCJ9LmZhLW1hcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNzlcXFwifS5mYS1tYXAtbWFya2VkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU5RlxcXCJ9LmZhLW1hcC1tYXJrZWQtYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVBMFxcXCJ9LmZhLW1hcC1tYXJrZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDQxXFxcIn0uZmEtbWFwLW1hcmtlci1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0M1XFxcIn0uZmEtbWFwLXBpbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNzZcXFwifS5mYS1tYXAtc2lnbnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjc3XFxcIn0uZmEtbWFya2Rvd246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjBGXFxcIn0uZmEtbWFya2VyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVBMVxcXCJ9LmZhLW1hcnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjIyXFxcIn0uZmEtbWFycy1kb3VibGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjI3XFxcIn0uZmEtbWFycy1zdHJva2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjI5XFxcIn0uZmEtbWFycy1zdHJva2UtaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMkJcXFwifS5mYS1tYXJzLXN0cm9rZS12OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIyQVxcXCJ9LmZhLW1hc2s6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNkZBXFxcIn0uZmEtbWFzdG9kb246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEY2XFxcIn0uZmEtbWF4Y2RuOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjEzNlxcXCJ9LmZhLW1lZGFsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVBMlxcXCJ9LmZhLW1lZGFwcHM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0M2XFxcIn0uZmEtbWVkaXVtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIzQVxcXCJ9LmZhLW1lZGl1bS1tOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNDN1xcXCJ9LmZhLW1lZGtpdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwRkFcXFwifS5mYS1tZWRydDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQzhcXFwifS5mYS1tZWV0dXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkUwXFxcIn0uZmEtbWVnYXBvcnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUEzXFxcIn0uZmEtbWVoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjExQVxcXCJ9LmZhLW1laC1ibGFuazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1QTRcXFwifS5mYS1tZWgtcm9sbGluZy1leWVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVBNVxcXCJ9LmZhLW1lbW9yeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MzhcXFwifS5mYS1tZW5vcmFoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjY3NlxcXCJ9LmZhLW1lcmN1cnk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjIzXFxcIn0uZmEtbWljcm9jaGlwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJEQlxcXCJ9LmZhLW1pY3JvcGhvbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTMwXFxcIn0uZmEtbWljcm9waG9uZS1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0M5XFxcIn0uZmEtbWljcm9waG9uZS1hbHQtc2xhc2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTM5XFxcIn0uZmEtbWljcm9waG9uZS1zbGFzaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMzFcXFwifS5mYS1taWNyb3Njb3BlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjYxMFxcXCJ9LmZhLW1pY3Jvc29mdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQ0FcXFwifS5mYS1taW51czpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwNjhcXFwifS5mYS1taW51cy1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDU2XFxcIn0uZmEtbWludXMtc3F1YXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE0NlxcXCJ9LmZhLW1peDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQ0JcXFwifS5mYS1taXhjbG91ZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyODlcXFwifS5mYS1taXp1bmk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0NDXFxcIn0uZmEtbW9iaWxlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjEwQlxcXCJ9LmZhLW1vYmlsZS1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0NEXFxcIn0uZmEtbW9keDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyODVcXFwifS5mYS1tb25lcm86YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0QwXFxcIn0uZmEtbW9uZXktYmlsbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwRDZcXFwifS5mYS1tb25leS1iaWxsLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzRDFcXFwifS5mYS1tb25leS1iaWxsLXdhdmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTNBXFxcIn0uZmEtbW9uZXktYmlsbC13YXZlLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1M0JcXFwifS5mYS1tb25leS1jaGVjazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1M0NcXFwifS5mYS1tb25leS1jaGVjay1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTNEXFxcIn0uZmEtbW9udW1lbnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUE2XFxcIn0uZmEtbW9vbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxODZcXFwifS5mYS1tb3J0YXItcGVzdGxlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVBN1xcXCJ9LmZhLW1vc3F1ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2NzhcXFwifS5mYS1tb3RvcmN5Y2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIxQ1xcXCJ9LmZhLW1vdW50YWluOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjZGQ1xcXCJ9LmZhLW1vdXNlLXBvaW50ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjQ1XFxcIn0uZmEtbXVzaWM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDAxXFxcIn0uZmEtbmFwc3RlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzRDJcXFwifS5mYS1uZW9zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjYxMlxcXCJ9LmZhLW5ldHdvcmstd2lyZWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNkZGXFxcIn0uZmEtbmV1dGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIyQ1xcXCJ9LmZhLW5ld3NwYXBlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxRUFcXFwifS5mYS1uaW1ibHI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUE4XFxcIn0uZmEtbmludGVuZG8tc3dpdGNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQxOFxcXCJ9LmZhLW5vZGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDE5XFxcIn0uZmEtbm9kZS1qczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzRDNcXFwifS5mYS1ub3QtZXF1YWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTNFXFxcIn0uZmEtbm90ZXMtbWVkaWNhbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0ODFcXFwifS5mYS1ucG06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0Q0XFxcIn0uZmEtbnM4OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNENVxcXCJ9LmZhLW51dHJpdGlvbml4OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNENlxcXCJ9LmZhLW9iamVjdC1ncm91cDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNDdcXFwifS5mYS1vYmplY3QtdW5ncm91cDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNDhcXFwifS5mYS1vZG5va2xhc3NuaWtpOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI2M1xcXCJ9LmZhLW9kbm9rbGFzc25pa2ktc3F1YXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI2NFxcXCJ9LmZhLW9pbC1jYW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjEzXFxcIn0uZmEtb2xkLXJlcHVibGljOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUxMFxcXCJ9LmZhLW9tOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjY3OVxcXCJ9LmZhLW9wZW5jYXJ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIzRFxcXCJ9LmZhLW9wZW5pZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxOUJcXFwifS5mYS1vcGVyYTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNkFcXFwifS5mYS1vcHRpbi1tb25zdGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIzQ1xcXCJ9LmZhLW9zaTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MUFcXFwifS5mYS1vdHRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY3MDBcXFwifS5mYS1vdXRkZW50OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAzQlxcXCJ9LmZhLXBhZ2U0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNEN1xcXCJ9LmZhLXBhZ2VsaW5lczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxOENcXFwifS5mYS1wYWludC1icnVzaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxRkNcXFwifS5mYS1wYWludC1yb2xsZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUFBXFxcIn0uZmEtcGFsZXR0ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1M0ZcXFwifS5mYS1wYWxmZWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0Q4XFxcIn0uZmEtcGFsbGV0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ4MlxcXCJ9LmZhLXBhcGVyLXBsYW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFEOFxcXCJ9LmZhLXBhcGVyY2xpcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwQzZcXFwifS5mYS1wYXJhY2h1dGUtYm94OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRDRFxcXCJ9LmZhLXBhcmFncmFwaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxRERcXFwifS5mYS1wYXJraW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU0MFxcXCJ9LmZhLXBhc3Nwb3J0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVBQlxcXCJ9LmZhLXBhc3RhZmFyaWFuaXNtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjY3QlxcXCJ9LmZhLXBhc3RlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBFQVxcXCJ9LmZhLXBhdHJlb246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0Q5XFxcIn0uZmEtcGF1c2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDRDXFxcIn0uZmEtcGF1c2UtY2lyY2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI4QlxcXCJ9LmZhLXBhdzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQjBcXFwifS5mYS1wYXlwYWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUVEXFxcIn0uZmEtcGVhY2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjdDXFxcIn0uZmEtcGVuOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjMwNFxcXCJ9LmZhLXBlbi1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzA1XFxcIn0uZmEtcGVuLWZhbmN5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVBQ1xcXCJ9LmZhLXBlbi1uaWI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUFEXFxcIn0uZmEtcGVuLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxNEJcXFwifS5mYS1wZW5jaWwtYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjMwM1xcXCJ9LmZhLXBlbmNpbC1ydWxlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1QUVcXFwifS5mYS1wZW5ueS1hcmNhZGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNzA0XFxcIn0uZmEtcGVvcGxlLWNhcnJ5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRDRVxcXCJ9LmZhLXBlcmNlbnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjk1XFxcIn0uZmEtcGVyY2VudGFnZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NDFcXFwifS5mYS1wZXJpc2NvcGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0RBXFxcIn0uZmEtcGhhYnJpY2F0b3I6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0RCXFxcIn0uZmEtcGhvZW5peC1mcmFtZXdvcms6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0RDXFxcIn0uZmEtcGhvZW5peC1zcXVhZHJvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MTFcXFwifS5mYS1waG9uZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwOTVcXFwifS5mYS1waG9uZS1zbGFzaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzRERcXFwifS5mYS1waG9uZS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDk4XFxcIn0uZmEtcGhvbmUtdm9sdW1lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJBMFxcXCJ9LmZhLXBocDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0NTdcXFwifS5mYS1waWVkLXBpcGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJBRVxcXCJ9LmZhLXBpZWQtcGlwZXItYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFBOFxcXCJ9LmZhLXBpZWQtcGlwZXItaGF0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRFNVxcXCJ9LmZhLXBpZWQtcGlwZXItcHA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUE3XFxcIn0uZmEtcGlnZ3ktYmFuazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0RDNcXFwifS5mYS1waWxsczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0ODRcXFwifS5mYS1waW50ZXJlc3Q6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEQyXFxcIn0uZmEtcGludGVyZXN0LXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjMxXFxcIn0uZmEtcGludGVyZXN0LXNxdWFyZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwRDNcXFwifS5mYS1wbGFjZS1vZi13b3JzaGlwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjY3RlxcXCJ9LmZhLXBsYW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA3MlxcXCJ9LmZhLXBsYW5lLWFycml2YWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUFGXFxcIn0uZmEtcGxhbmUtZGVwYXJ0dXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVCMFxcXCJ9LmZhLXBsYXk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDRCXFxcIn0uZmEtcGxheS1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTQ0XFxcIn0uZmEtcGxheXN0YXRpb246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0RGXFxcIn0uZmEtcGx1ZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxRTZcXFwifS5mYS1wbHVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA2N1xcXCJ9LmZhLXBsdXMtY2lyY2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA1NVxcXCJ9LmZhLXBsdXMtc3F1YXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBGRVxcXCJ9LmZhLXBvZGNhc3Q6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkNFXFxcIn0uZmEtcG9sbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2ODFcXFwifS5mYS1wb2xsLWg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjgyXFxcIn0uZmEtcG9vOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJGRVxcXCJ9LmZhLXBvb3A6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjE5XFxcIn0uZmEtcG9ydHJhaXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0UwXFxcIn0uZmEtcG91bmQtc2lnbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxNTRcXFwifS5mYS1wb3dlci1vZmY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDExXFxcIn0uZmEtcHJheTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2ODNcXFwifS5mYS1wcmF5aW5nLWhhbmRzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjY4NFxcXCJ9LmZhLXByZXNjcmlwdGlvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1QjFcXFwifS5mYS1wcmVzY3JpcHRpb24tYm90dGxlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ4NVxcXCJ9LmZhLXByZXNjcmlwdGlvbi1ib3R0bGUtYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ4NlxcXCJ9LmZhLXByaW50OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAyRlxcXCJ9LmZhLXByb2NlZHVyZXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDg3XFxcIn0uZmEtcHJvZHVjdC1odW50OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI4OFxcXCJ9LmZhLXByb2plY3QtZGlhZ3JhbTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NDJcXFwifS5mYS1wdXNoZWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0UxXFxcIn0uZmEtcHV6emxlLXBpZWNlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjEyRVxcXCJ9LmZhLXB5dGhvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzRTJcXFwifS5mYS1xcTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxRDZcXFwifS5mYS1xcmNvZGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDI5XFxcIn0uZmEtcXVlc3Rpb246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTI4XFxcIn0uZmEtcXVlc3Rpb24tY2lyY2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA1OVxcXCJ9LmZhLXF1aWRkaXRjaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0NThcXFwifS5mYS1xdWluc2NhcGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDU5XFxcIn0uZmEtcXVvcmE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkM0XFxcIn0uZmEtcXVvdGUtbGVmdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMERcXFwifS5mYS1xdW90ZS1yaWdodDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMEVcXFwifS5mYS1xdXJhbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2ODdcXFwifS5mYS1yLXByb2plY3Q6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEY3XFxcIn0uZmEtcmFuZG9tOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA3NFxcXCJ9LmZhLXJhdmVscnk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkQ5XFxcIn0uZmEtcmVhY3Q6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDFCXFxcIn0uZmEtcmVhZG1lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRENVxcXCJ9LmZhLXJlYmVsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFEMFxcXCJ9LmZhLXJlY2VpcHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTQzXFxcIn0uZmEtcmVjeWNsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQjhcXFwifS5mYS1yZWQtcml2ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0UzXFxcIn0uZmEtcmVkZGl0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFBMVxcXCJ9LmZhLXJlZGRpdC1hbGllbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyODFcXFwifS5mYS1yZWRkaXQtc3F1YXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFBMlxcXCJ9LmZhLXJlZG86YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDFFXFxcIn0uZmEtcmVkby1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkY5XFxcIn0uZmEtcmVnaXN0ZXJlZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNURcXFwifS5mYS1yZW5kYWN0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNFNFxcXCJ9LmZhLXJlbnJlbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxOEJcXFwifS5mYS1yZXBseTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzRTVcXFwifS5mYS1yZXBseS1hbGw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTIyXFxcIn0uZmEtcmVwbHlkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNFNlxcXCJ9LmZhLXJlc2VhcmNoZ2F0ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0RjhcXFwifS5mYS1yZXNvbHZpbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0U3XFxcIn0uZmEtcmV0d2VldDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwNzlcXFwifS5mYS1yZXY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUIyXFxcIn0uZmEtcmliYm9uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRENlxcXCJ9LmZhLXJpbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNzBCXFxcIn0uZmEtcm9hZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMThcXFwifS5mYS1yb2JvdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NDRcXFwifS5mYS1yb2NrZXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTM1XFxcIn0uZmEtcm9ja2V0Y2hhdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzRThcXFwifS5mYS1yb2Nrcm1zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNFOVxcXCJ9LmZhLXJvdXRlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjREN1xcXCJ9LmZhLXJzczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwOUVcXFwifS5mYS1yc3Mtc3F1YXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE0M1xcXCJ9LmZhLXJ1YmxlLXNpZ246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTU4XFxcIn0uZmEtcnVsZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTQ1XFxcIn0uZmEtcnVsZXItY29tYmluZWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTQ2XFxcIn0uZmEtcnVsZXItaG9yaXpvbnRhbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NDdcXFwifS5mYS1ydWxlci12ZXJ0aWNhbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NDhcXFwifS5mYS1ydW5uaW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjcwQ1xcXCJ9LmZhLXJ1cGVlLXNpZ246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTU2XFxcIn0uZmEtc2FkLWNyeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1QjNcXFwifS5mYS1zYWQtdGVhcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1QjRcXFwifS5mYS1zYWZhcmk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjY3XFxcIn0uZmEtc2FzczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MUVcXFwifS5mYS1zYXZlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBDN1xcXCJ9LmZhLXNjaGxpeDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzRUFcXFwifS5mYS1zY2hvb2w6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTQ5XFxcIn0uZmEtc2NyZXdkcml2ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTRBXFxcIn0uZmEtc2NyaWJkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI4QVxcXCJ9LmZhLXNjcm9sbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY3MEVcXFwifS5mYS1zZWFyY2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDAyXFxcIn0uZmEtc2VhcmNoLWRvbGxhcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2ODhcXFwifS5mYS1zZWFyY2gtbG9jYXRpb246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjg5XFxcIn0uZmEtc2VhcmNoLW1pbnVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAxMFxcXCJ9LmZhLXNlYXJjaC1wbHVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAwRVxcXCJ9LmZhLXNlYXJjaGVuZ2luOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNFQlxcXCJ9LmZhLXNlZWRsaW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjREOFxcXCJ9LmZhLXNlbGxjYXN0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJEQVxcXCJ9LmZhLXNlbGxzeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMTNcXFwifS5mYS1zZXJ2ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjMzXFxcIn0uZmEtc2VydmljZXN0YWNrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNFQ1xcXCJ9LmZhLXNoYXBlczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2MUZcXFwifS5mYS1zaGFyZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwNjRcXFwifS5mYS1zaGFyZS1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUUwXFxcIn0uZmEtc2hhcmUtYWx0LXNxdWFyZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxRTFcXFwifS5mYS1zaGFyZS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTREXFxcIn0uZmEtc2hla2VsLXNpZ246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjBCXFxcIn0uZmEtc2hpZWxkLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzRURcXFwifS5mYS1zaGlwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIxQVxcXCJ9LmZhLXNoaXBwaW5nLWZhc3Q6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDhCXFxcIn0uZmEtc2hpcnRzaW5idWxrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIxNFxcXCJ9LmZhLXNob2UtcHJpbnRzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU0QlxcXCJ9LmZhLXNob3BwaW5nLWJhZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyOTBcXFwifS5mYS1zaG9wcGluZy1iYXNrZXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjkxXFxcIn0uZmEtc2hvcHBpbmctY2FydDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwN0FcXFwifS5mYS1zaG9wd2FyZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1QjVcXFwifS5mYS1zaG93ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkNDXFxcIn0uZmEtc2h1dHRsZS12YW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUI2XFxcIn0uZmEtc2lnbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0RDlcXFwifS5mYS1zaWduLWluLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyRjZcXFwifS5mYS1zaWduLWxhbmd1YWdlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJBN1xcXCJ9LmZhLXNpZ24tb3V0LWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyRjVcXFwifS5mYS1zaWduYWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDEyXFxcIn0uZmEtc2lnbmF0dXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVCN1xcXCJ9LmZhLXNpbXBseWJ1aWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIxNVxcXCJ9LmZhLXNpc3RyaXg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0VFXFxcIn0uZmEtc2l0ZW1hcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwRThcXFwifS5mYS1zaXRoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUxMlxcXCJ9LmZhLXNrdWxsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU0Q1xcXCJ9LmZhLXNrdWxsLWNyb3NzYm9uZXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNzE0XFxcIn0uZmEtc2t5YXRsYXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjE2XFxcIn0uZmEtc2t5cGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTdFXFxcIn0uZmEtc2xhY2s6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTk4XFxcIn0uZmEtc2xhY2staGFzaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzRUZcXFwifS5mYS1zbGFzaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY3MTVcXFwifS5mYS1zbGlkZXJzLWg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMURFXFxcIn0uZmEtc2xpZGVzaGFyZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxRTdcXFwifS5mYS1zbWlsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMThcXFwifS5mYS1zbWlsZS1iZWFtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVCOFxcXCJ9LmZhLXNtaWxlLXdpbms6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNERBXFxcIn0uZmEtc21va2luZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0OERcXFwifS5mYS1zbW9raW5nLWJhbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NERcXFwifS5mYS1zbmFwY2hhdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQUJcXFwifS5mYS1zbmFwY2hhdC1naG9zdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQUNcXFwifS5mYS1zbmFwY2hhdC1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkFEXFxcIn0uZmEtc25vd2ZsYWtlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJEQ1xcXCJ9LmZhLXNvY2tzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjY5NlxcXCJ9LmZhLXNvbGFyLXBhbmVsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVCQVxcXCJ9LmZhLXNvcnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMERDXFxcIn0uZmEtc29ydC1hbHBoYS1kb3duOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE1RFxcXCJ9LmZhLXNvcnQtYWxwaGEtdXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTVFXFxcIn0uZmEtc29ydC1hbW91bnQtZG93bjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxNjBcXFwifS5mYS1zb3J0LWFtb3VudC11cDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxNjFcXFwifS5mYS1zb3J0LWRvd246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEREXFxcIn0uZmEtc29ydC1udW1lcmljLWRvd246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTYyXFxcIn0uZmEtc29ydC1udW1lcmljLXVwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE2M1xcXCJ9LmZhLXNvcnQtdXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMERFXFxcIn0uZmEtc291bmRjbG91ZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQkVcXFwifS5mYS1zcGE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUJCXFxcIn0uZmEtc3BhY2Utc2h1dHRsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxOTdcXFwifS5mYS1zcGVha2FwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNGM1xcXCJ9LmZhLXNwaWRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY3MTdcXFwifS5mYS1zcGlubmVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjExMFxcXCJ9LmZhLXNwbG90Y2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUJDXFxcIn0uZmEtc3BvdGlmeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQkNcXFwifS5mYS1zcHJheS1jYW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUJEXFxcIn0uZmEtc3F1YXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBDOFxcXCJ9LmZhLXNxdWFyZS1mdWxsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ1Q1xcXCJ9LmZhLXNxdWFyZS1yb290LWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2OThcXFwifS5mYS1zcXVhcmVzcGFjZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1QkVcXFwifS5mYS1zdGFjay1leGNoYW5nZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxOERcXFwifS5mYS1zdGFjay1vdmVyZmxvdzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxNkNcXFwifS5mYS1zdGFtcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1QkZcXFwifS5mYS1zdGFyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAwNVxcXCJ9LmZhLXN0YXItYW5kLWNyZXNjZW50OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjY5OVxcXCJ9LmZhLXN0YXItaGFsZjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwODlcXFwifS5mYS1zdGFyLWhhbGYtYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVDMFxcXCJ9LmZhLXN0YXItb2YtZGF2aWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjlBXFxcIn0uZmEtc3Rhci1vZi1saWZlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjYyMVxcXCJ9LmZhLXN0YXlsaW5rZWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0Y1XFxcIn0uZmEtc3RlYW06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUI2XFxcIn0uZmEtc3RlYW0tc3F1YXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFCN1xcXCJ9LmZhLXN0ZWFtLXN5bWJvbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzRjZcXFwifS5mYS1zdGVwLWJhY2t3YXJkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA0OFxcXCJ9LmZhLXN0ZXAtZm9yd2FyZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwNTFcXFwifS5mYS1zdGV0aG9zY29wZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwRjFcXFwifS5mYS1zdGlja2VyLW11bGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0Y3XFxcIn0uZmEtc3RpY2t5LW5vdGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjQ5XFxcIn0uZmEtc3RvcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwNERcXFwifS5mYS1zdG9wLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyOERcXFwifS5mYS1zdG9wd2F0Y2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkYyXFxcIn0uZmEtc3RvcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTRFXFxcIn0uZmEtc3RvcmUtYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU0RlxcXCJ9LmZhLXN0cmF2YTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MjhcXFwifS5mYS1zdHJlYW06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTUwXFxcIn0uZmEtc3RyZWV0LXZpZXc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjFEXFxcIn0uZmEtc3RyaWtldGhyb3VnaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwQ0NcXFwifS5mYS1zdHJpcGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDI5XFxcIn0uZmEtc3RyaXBlLXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDJBXFxcIn0uZmEtc3Ryb29wd2FmZWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTUxXFxcIn0uZmEtc3R1ZGlvdmluYXJpOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNGOFxcXCJ9LmZhLXN0dW1ibGV1cG9uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFBNFxcXCJ9LmZhLXN0dW1ibGV1cG9uLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQTNcXFwifS5mYS1zdWJzY3JpcHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTJDXFxcIn0uZmEtc3Vid2F5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIzOVxcXCJ9LmZhLXN1aXRjYXNlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBGMlxcXCJ9LmZhLXN1aXRjYXNlLXJvbGxpbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUMxXFxcIn0uZmEtc3VuOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE4NVxcXCJ9LmZhLXN1cGVycG93ZXJzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJERFxcXCJ9LmZhLXN1cGVyc2NyaXB0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjEyQlxcXCJ9LmZhLXN1cHBsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzRjlcXFwifS5mYS1zdXJwcmlzZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1QzJcXFwifS5mYS1zd2F0Y2hib29rOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVDM1xcXCJ9LmZhLXN3aW1tZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUM0XFxcIn0uZmEtc3dpbW1pbmctcG9vbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1QzVcXFwifS5mYS1zeW5hZ29ndWU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjlCXFxcIn0uZmEtc3luYzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMjFcXFwifS5mYS1zeW5jLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyRjFcXFwifS5mYS1zeXJpbmdlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ4RVxcXCJ9LmZhLXRhYmxlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBDRVxcXCJ9LmZhLXRhYmxlLXRlbm5pczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0NURcXFwifS5mYS10YWJsZXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTBBXFxcIn0uZmEtdGFibGV0LWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzRkFcXFwifS5mYS10YWJsZXRzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ5MFxcXCJ9LmZhLXRhY2hvbWV0ZXItYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNGRFxcXCJ9LmZhLXRhZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMkJcXFwifS5mYS10YWdzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAyQ1xcXCJ9LmZhLXRhcGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNERCXFxcIn0uZmEtdGFza3M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEFFXFxcIn0uZmEtdGF4aTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQkFcXFwifS5mYS10ZWFtc3BlYWs6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEY5XFxcIn0uZmEtdGVldGg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjJFXFxcIn0uZmEtdGVldGgtb3BlbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2MkZcXFwifS5mYS10ZWxlZ3JhbTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQzZcXFwifS5mYS10ZWxlZ3JhbS1wbGFuZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzRkVcXFwifS5mYS10ZW5jZW50LXdlaWJvOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFENVxcXCJ9LmZhLXRlcm1pbmFsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjEyMFxcXCJ9LmZhLXRleHQtaGVpZ2h0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAzNFxcXCJ9LmZhLXRleHQtd2lkdGg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDM1XFxcIn0uZmEtdGg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDBBXFxcIn0uZmEtdGgtbGFyZ2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDA5XFxcIn0uZmEtdGgtbGlzdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMEJcXFwifS5mYS10aGUtcmVkLXlldGk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjlEXFxcIn0uZmEtdGhlYXRlci1tYXNrczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2MzBcXFwifS5mYS10aGVtZWNvOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVDNlxcXCJ9LmZhLXRoZW1laXNsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQjJcXFwifS5mYS10aGVybW9tZXRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0OTFcXFwifS5mYS10aGVybW9tZXRlci1lbXB0eTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQ0JcXFwifS5mYS10aGVybW9tZXRlci1mdWxsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJDN1xcXCJ9LmZhLXRoZXJtb21ldGVyLWhhbGY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkM5XFxcIn0uZmEtdGhlcm1vbWV0ZXItcXVhcnRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQ0FcXFwifS5mYS10aGVybW9tZXRlci10aHJlZS1xdWFydGVyczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQzhcXFwifS5mYS10aHVtYnMtZG93bjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxNjVcXFwifS5mYS10aHVtYnMtdXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTY0XFxcIn0uZmEtdGh1bWJ0YWNrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA4RFxcXCJ9LmZhLXRpY2tldC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0ZGXFxcIn0uZmEtdGltZXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDBEXFxcIn0uZmEtdGltZXMtY2lyY2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA1N1xcXCJ9LmZhLXRpbnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDQzXFxcIn0uZmEtdGludC1zbGFzaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1QzdcXFwifS5mYS10aXJlZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1QzhcXFwifS5mYS10b2dnbGUtb2ZmOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIwNFxcXCJ9LmZhLXRvZ2dsZS1vbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMDVcXFwifS5mYS10b2lsZXQtcGFwZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNzFFXFxcIn0uZmEtdG9vbGJveDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NTJcXFwifS5mYS10b290aDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1QzlcXFwifS5mYS10b3JhaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2QTBcXFwifS5mYS10b3JpaS1nYXRlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjZBMVxcXCJ9LmZhLXRyYWN0b3I6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNzIyXFxcIn0uZmEtdHJhZGUtZmVkZXJhdGlvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MTNcXFwifS5mYS10cmFkZW1hcms6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjVDXFxcIn0uZmEtdHJhZmZpYy1saWdodDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2MzdcXFwifS5mYS10cmFpbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMzhcXFwifS5mYS10cmFuc2dlbmRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMjRcXFwifS5mYS10cmFuc2dlbmRlci1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjI1XFxcIn0uZmEtdHJhc2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUY4XFxcIn0uZmEtdHJhc2gtYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJFRFxcXCJ9LmZhLXRyZWU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUJCXFxcIn0uZmEtdHJlbGxvOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE4MVxcXCJ9LmZhLXRyaXBhZHZpc29yOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI2MlxcXCJ9LmZhLXRyb3BoeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwOTFcXFwifS5mYS10cnVjazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwRDFcXFwifS5mYS10cnVjay1sb2FkaW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRERVxcXCJ9LmZhLXRydWNrLW1vbnN0ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjNCXFxcIn0uZmEtdHJ1Y2stbW92aW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRERlxcXCJ9LmZhLXRydWNrLXBpY2t1cDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2M0NcXFwifS5mYS10c2hpcnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTUzXFxcIn0uZmEtdHR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFFNFxcXCJ9LmZhLXR1bWJscjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxNzNcXFwifS5mYS10dW1ibHItc3F1YXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE3NFxcXCJ9LmZhLXR2OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI2Q1xcXCJ9LmZhLXR3aXRjaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxRThcXFwifS5mYS10d2l0dGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA5OVxcXCJ9LmZhLXR3aXR0ZXItc3F1YXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA4MVxcXCJ9LmZhLXR5cG8zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQyQlxcXCJ9LmZhLXViZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDAyXFxcIn0uZmEtdWlraXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDAzXFxcIn0uZmEtdW1icmVsbGE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEU5XFxcIn0uZmEtdW1icmVsbGEtYmVhY2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUNBXFxcIn0uZmEtdW5kZXJsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBDRFxcXCJ9LmZhLXVuZG86YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEUyXFxcIn0uZmEtdW5kby1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkVBXFxcIn0uZmEtdW5pcmVnaXN0cnk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDA0XFxcIn0uZmEtdW5pdmVyc2FsLWFjY2VzczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyOUFcXFwifS5mYS11bml2ZXJzaXR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE5Q1xcXCJ9LmZhLXVubGluazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMjdcXFwifS5mYS11bmxvY2s6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDlDXFxcIn0uZmEtdW5sb2NrLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxM0VcXFwifS5mYS11bnRhcHBkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQwNVxcXCJ9LmZhLXVwbG9hZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwOTNcXFwifS5mYS11c2I6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjg3XFxcIn0uZmEtdXNlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMDdcXFwifS5mYS11c2VyLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MDZcXFwifS5mYS11c2VyLWFsdC1zbGFzaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0RkFcXFwifS5mYS11c2VyLWFzdHJvbmF1dDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0RkJcXFwifS5mYS11c2VyLWNoZWNrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRGQ1xcXCJ9LmZhLXVzZXItY2lyY2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJCRFxcXCJ9LmZhLXVzZXItY2xvY2s6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEZEXFxcIn0uZmEtdXNlci1jb2c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEZFXFxcIn0uZmEtdXNlci1lZGl0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRGRlxcXCJ9LmZhLXVzZXItZnJpZW5kczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MDBcXFwifS5mYS11c2VyLWdyYWR1YXRlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUwMVxcXCJ9LmZhLXVzZXItaW5qdXJlZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY3MjhcXFwifS5mYS11c2VyLWxvY2s6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTAyXFxcIn0uZmEtdXNlci1tZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwRjBcXFwifS5mYS11c2VyLW1pbnVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUwM1xcXCJ9LmZhLXVzZXItbmluamE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTA0XFxcIn0uZmEtdXNlci1wbHVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIzNFxcXCJ9LmZhLXVzZXItc2VjcmV0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIxQlxcXCJ9LmZhLXVzZXItc2hpZWxkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUwNVxcXCJ9LmZhLXVzZXItc2xhc2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTA2XFxcIn0uZmEtdXNlci10YWc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTA3XFxcIn0uZmEtdXNlci10aWU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTA4XFxcIn0uZmEtdXNlci10aW1lczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMzVcXFwifS5mYS11c2VyczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwQzBcXFwifS5mYS11c2Vycy1jb2c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTA5XFxcIn0uZmEtdXNzdW5uYWg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDA3XFxcIn0uZmEtdXRlbnNpbC1zcG9vbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyRTVcXFwifS5mYS11dGVuc2lsczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyRTdcXFwifS5mYS12YWFkaW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDA4XFxcIn0uZmEtdmVjdG9yLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1Q0JcXFwifS5mYS12ZW51czpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMjFcXFwifS5mYS12ZW51cy1kb3VibGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjI2XFxcIn0uZmEtdmVudXMtbWFyczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMjhcXFwifS5mYS12aWFjb2luOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIzN1xcXCJ9LmZhLXZpYWRlbzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQTlcXFwifS5mYS12aWFkZW8tc3F1YXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJBQVxcXCJ9LmZhLXZpYWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDkyXFxcIn0uZmEtdmlhbHM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDkzXFxcIn0uZmEtdmliZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDA5XFxcIn0uZmEtdmlkZW86YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDNEXFxcIn0uZmEtdmlkZW8tc2xhc2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEUyXFxcIn0uZmEtdmloYXJhOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjZBN1xcXCJ9LmZhLXZpbWVvOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQwQVxcXCJ9LmZhLXZpbWVvLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxOTRcXFwifS5mYS12aW1lby12OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI3RFxcXCJ9LmZhLXZpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUNBXFxcIn0uZmEtdms6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTg5XFxcIn0uZmEtdm52OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQwQlxcXCJ9LmZhLXZvbGxleWJhbGwtYmFsbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0NUZcXFwifS5mYS12b2x1bWUtZG93bjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMjdcXFwifS5mYS12b2x1bWUtbXV0ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2QTlcXFwifS5mYS12b2x1bWUtb2ZmOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAyNlxcXCJ9LmZhLXZvbHVtZS11cDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMjhcXFwifS5mYS12dWVqczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MUZcXFwifS5mYS13YWxraW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU1NFxcXCJ9LmZhLXdhbGxldDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NTVcXFwifS5mYS13YXJlaG91c2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDk0XFxcIn0uZmEtd2VlYmx5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVDQ1xcXCJ9LmZhLXdlaWJvOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE4QVxcXCJ9LmZhLXdlaWdodDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0OTZcXFwifS5mYS13ZWlnaHQtaGFuZ2luZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1Q0RcXFwifS5mYS13ZWl4aW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUQ3XFxcIn0uZmEtd2hhdHNhcHA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjMyXFxcIn0uZmEtd2hhdHNhcHAtc3F1YXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQwQ1xcXCJ9LmZhLXdoZWVsY2hhaXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTkzXFxcIn0uZmEtd2htY3M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDBEXFxcIn0uZmEtd2lmaTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxRUJcXFwifS5mYS13aWtpcGVkaWEtdzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNjZcXFwifS5mYS13aW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjcyRVxcXCJ9LmZhLXdpbmRvdy1jbG9zZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MTBcXFwifS5mYS13aW5kb3ctbWF4aW1pemU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkQwXFxcIn0uZmEtd2luZG93LW1pbmltaXplOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJEMVxcXCJ9LmZhLXdpbmRvdy1yZXN0b3JlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJEMlxcXCJ9LmZhLXdpbmRvd3M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTdBXFxcIn0uZmEtd2luZS1ib3R0bGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNzJGXFxcIn0uZmEtd2luZS1nbGFzczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0RTNcXFwifS5mYS13aW5lLWdsYXNzLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1Q0VcXFwifS5mYS13aXg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUNGXFxcIn0uZmEtd2l6YXJkcy1vZi10aGUtY29hc3Q6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNzMwXFxcIn0uZmEtd29sZi1wYWNrLWJhdHRhbGlvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MTRcXFwifS5mYS13b24tc2lnbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxNTlcXFwifS5mYS13b3JkcHJlc3M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTlBXFxcIn0uZmEtd29yZHByZXNzLXNpbXBsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MTFcXFwifS5mYS13cGJlZ2lubmVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI5N1xcXCJ9LmZhLXdwZXhwbG9yZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkRFXFxcIn0uZmEtd3Bmb3JtczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyOThcXFwifS5mYS13cmVuY2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEFEXFxcIn0uZmEteC1yYXk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDk3XFxcIn0uZmEteGJveDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MTJcXFwifS5mYS14aW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE2OFxcXCJ9LmZhLXhpbmctc3F1YXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE2OVxcXCJ9LmZhLXktY29tYmluYXRvcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyM0JcXFwifS5mYS15YWhvbzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxOUVcXFwifS5mYS15YW5kZXg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDEzXFxcIn0uZmEteWFuZGV4LWludGVybmF0aW9uYWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDE0XFxcIn0uZmEteWVscDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxRTlcXFwifS5mYS15ZW4tc2lnbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxNTdcXFwifS5mYS15aW4teWFuZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2QURcXFwifS5mYS15b2FzdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQjFcXFwifS5mYS15b3V0dWJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE2N1xcXCJ9LmZhLXlvdXR1YmUtc3F1YXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQzMVxcXCJ9LmZhLXpoaWh1OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjYzRlxcXCJ9XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9mb250cy9mYTUtYWxsLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IExvZ2luIGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ2luXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lXCI7XG5cbmNvbnN0IHJvdXRlcyA9IHtcbiAgICBsb2dpbjogTG9naW4sXG4gICAgaG9tZTogSG9tZVxufVxuZXhwb3J0IGRlZmF1bHQgcm91dGVzOyIsIi8vIFRoZSBmb2xsb3dpbmcgaXMgYSBzYW1wbGUgaW1wbGVtZW50YXRpb24gb2YgYSBiYWNrZW5kIHNlcnZpY2UgdXNpbmcgUHJvZ3Jlc3MgS2ludmV5IChodHRwczovL3d3dy5wcm9ncmVzcy5jb20va2ludmV5KS5cbi8vIEZlZWwgZnJlZSB0byBzd2FwIGluIHlvdXIgb3duIHNlcnZpY2UgLyBBUElzIC8gZXRjIGhlcmUgZm9yIHlvdXIgb3duIGFwcHMuXG5cbmltcG9ydCAqIGFzIEtpbnZleSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcblxuS2ludmV5LmluaXQoe1xuICAgIGFwcEtleTogXCJraWRfU3lZOExZTzhNXCIsXG4gICAgYXBwU2VjcmV0OiBcIjA5MjgyOTg1ZDdjNTQwZjdiMDc2YTljN2ZkODg0Yzc3XCJcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XG5cbiAgICBpc0xvZ2dlZEluKCkge1xuICAgICAgICByZXR1cm4gISFLaW52ZXkuVXNlci5nZXRBY3RpdmVVc2VyKCk7XG4gICAgfVxuXG4gICAgbG9naW4odXNlcikge1xuICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIubG9naW4odXNlci5lbWFpbCwgdXNlci5wYXNzd29yZCk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIubG9nb3V0KCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIodXNlcikge1xuICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIuc2lnbnVwKHsgdXNlcm5hbWU6IHVzZXIuZW1haWwsIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkIH0pO1xuICAgIH1cbn1cblxuIiwiLyoqXHJcbiAqIEBBdXRob3I6IENvZGVhbHNcclxuICogQERhdGU6ICAgMDUtMDMtMjAyMFxyXG4gKiBARW1haWw6ICBpYW5AY29kZWFscy5lc1xyXG4gKiBATGFzdCBtb2RpZmllZCBieTogICBDb2RlYWxzXHJcbiAqIEBMYXN0IG1vZGlmaWVkIHRpbWU6IDA2LTAzLTIwMjBcclxuICogQENvcHlyaWdodDogQ29kZWFsc1xyXG4gKi9cclxuXHJcbmltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSc7XHJcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnO1xyXG5WdWUudXNlKFZ1ZXgpO1xyXG5cclxuaW1wb3J0IHVzZXJTdG9yZSBmcm9tICcuL2NvbXBvbmVudHMvdXNlci9Vc2VyU3RvcmUnO1xyXG5pbXBvcnQgcmVjaGFyZ2VTdG9yZSBmcm9tICcuL2NvbXBvbmVudHMvcmVjaGFyZ2UvUmVjaGFyZ2VTdG9yZSc7XHJcbmltcG9ydCBvZmZlclN0b3JlIGZyb20gJy4vY29tcG9uZW50cy9vZmZlci9PZmZlclN0b3JlJztcclxuLy8gaW1wb3J0IGNvbnRhY3RTdG9yZSBmcm9tICcuL2NvbXBvbmVudHMvY29udGFjdC9Db250YWN0U3RvcmUnXHJcblxyXG5jb25zdCBkZWJ1ZyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcclxuICBtb2R1bGVzOiB7XHJcbiAgICB1c2VyU3RvcmUsIG9mZmVyU3RvcmUsIHJlY2hhcmdlU3RvcmVcclxuICB9LFxyXG4gIHN0cmljdDogZGVidWdcclxufSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC12dWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3RleHQvZm9ybWF0dGVkLXN0cmluZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3RleHQvc3BhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGlvbi1iYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9ib3JkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9ib3R0b20tbmF2aWdhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvbnRlbnQtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RhdGUtcGlja2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9hY3Rpdml0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2h0bWwtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2Fic29sdXRlLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZG9jay1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2ZsZXhib3gtbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9ncmlkLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvbGF5b3V0LWJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvd3JhcC1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXBpY2tlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9wbGFjZWhvbGRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3Byb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvcHJveHktdmlldy1jb250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zY3JvbGwtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlYXJjaC1iYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWdtZW50ZWQtYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc2xpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N3aXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLWNvbnRlbnQtaXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLXN0cmlwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItc3RyaXAtaXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFic1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS90aW1lLXBpY2tlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3dlYi12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy94bWxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==