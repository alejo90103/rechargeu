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

  created() {
    this.$store.dispatch('getOfferList');
  },

  methods: {
    handleFormSubmit() {
      // this.$backendService.logout();
      // this.$navigateTo(Login, {
      //     clearHistory: true
      // });
      // this.$store.dispatch('getTest');
      console.log(this.offerStore.offers);
    },

    onButtonTapOut() {
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
          // console.log('user object', response)
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
exports.push([module.i, "\n.logo {\n    margin-left: 5px;\n}\n.button-text {\n    background-color: #762889;\n    color: #fff;\n    border-radius: 100px;\n}\n.ActionBar {\n    background-color: transparent;\n}\n.album-image {\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n}\n.home-panel {\n    vertical-align: center;\n    font-size: 20;\n    margin: 15;\n}\n.description-label {\n    margin-bottom: 15;\n}\n#searchRow {\n    margin-top: 20;\n}\n.form {\n    margin-left: 30;\n    margin-right: 30;\n    flex-grow: 2;\n    vertical-align: middle;\n}\n.input-field {\n    margin-bottom: 25;\n}\n.input {\n    font-size: 18;\n    placeholder-color: #A8A8A8;\n}\n.input:disabled {\n    background-color: white;\n    opacity: 0.5;\n}\n", ""]);

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
                  staticClass: "form",
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
                            marginTop: "50",
                            rows: "auto, auto, auto, auto"
                          }
                        },
                        [
                          _c(
                            "StackLayout",
                            { staticClass: "input-field", attrs: { row: "0" } },
                            [
                              _c("TextField", {
                                staticClass: "input",
                                attrs: {
                                  hint: "Name",
                                  autocorrect: "false",
                                  autocapitalizationType: "none",
                                  text: _vm.cell.name
                                },
                                on: {
                                  textChange: function($event) {
                                    return _vm.$set(
                                      _vm.cell,
                                      "name",
                                      $event.value
                                    )
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
                                staticClass: "input",
                                attrs: {
                                  hint: "Phone",
                                  autocorrect: "false",
                                  autocapitalizationType: "none",
                                  text: _vm.cell.phone
                                },
                                on: {
                                  textChange: function($event) {
                                    return _vm.$set(
                                      _vm.cell,
                                      "phone",
                                      $event.value
                                    )
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
                              _c(
                                "ListView",
                                {
                                  attrs: {
                                    items: _vm.offerStore.offers,
                                    "+alias": "item"
                                  },
                                  on: { itemTap: _vm.onItemTap }
                                },
                                [
                                  _c("v-template", {
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function(ref) {
                                          var item = ref.item
                                          var $index = ref.$index
                                          var $even = ref.$even
                                          var $odd = ref.$odd
                                          return _c("Label", {
                                            attrs: { text: item.name }
                                          })
                                        }
                                      }
                                    ])
                                  })
                                ],
                                1
                              ),
                              _c("StackLayout", { staticClass: "hr-light" })
                            ],
                            1
                          ),
                          _c(
                            "StackLayout",
                            { staticClass: "input-field", attrs: { row: "3" } },
                            [
                              _c("Button", {
                                staticClass:
                                  "btn btn-primary m-t-10 button-text",
                                attrs: { text: "Recharge" },
                                on: { tap: _vm.handleFormSubmit }
                              }),
                              _c("StackLayout", { staticClass: "hr-light" })
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
                      "(tap)": "onButtonTapOut()",
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
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/fetch");
/* harmony import */ var tns_core_modules_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./config.js");
/**
 * @Author: alejandro
 * @Date:   2019-11-22T14:46:15+01:00
 * @Email:  alejo901003@hotmail.com
 * @Project: Recargame
 * @Last modified by:   alejandro
 * @Last modified time: 2019-11-23T14:17:45+01:00
 */





nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_2__["default"]);

var state = {
  offers: []
};
var getters = {
  getCellOffersSchedule(state) {
    var list = state.offers;
    var now = moment__WEBPACK_IMPORTED_MODULE_4___default()(new Date()).format('YYYY/MM/DD');
    return list.filter(function (offer) {
      if (offer.type === 'Cell' && !moment__WEBPACK_IMPORTED_MODULE_4___default()(now).isBetween(offer.date_ini, offer.date_end, null, '[]')) {
        return true;
      }

      return false;
    });
  },

  getCellOffers(state) {
    var list = state.offers;
    var now = moment__WEBPACK_IMPORTED_MODULE_4___default()(new Date()).format('YYYY/MM/DD');
    return list.filter(function (offer) {
      if (offer.type === 'Cell' && moment__WEBPACK_IMPORTED_MODULE_4___default()(now).isBetween(offer.date_ini, offer.date_end, null, '[]')) {
        return true;
      }

      return false;
    });
  },

  getNautaOffers(state) {
    var list = state.offers;
    var now = moment__WEBPACK_IMPORTED_MODULE_4___default()(new Date()).format('YYYY/MM/DD');
    return list.filter(function (offer) {
      if (offer.type === 'Nauta' && moment__WEBPACK_IMPORTED_MODULE_4___default()(now).isBetween(offer.date_ini, offer.date_end, null, '[]')) {
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
  // getOfferList: ({commit}) => {
  //   return Vue.http.get(offerList)
  //     .then(response => {
  //       Vue.$logger('info', 'offerList response', response)
  //       if (response.status === 200) {
  //         commit('SET_OFFER_LIST', response.body.data)
  //       }
  //     })
  // }
  getOfferList: (_ref) => {
    var {
      commit
    } = _ref;
    console.log('Entreeeeeeee');
    return Object(tns_core_modules_fetch__WEBPACK_IMPORTED_MODULE_1__["fetch"])(_config__WEBPACK_IMPORTED_MODULE_5__["offerList"]).then(res => {
      // console.log('offers objecttttttttttttttttttttt'+res.status);
      if (res.status === 200) {
        return res.json();
      }
    }).then(response => {
      console.log(response.data);
      commit('SET_OFFER_LIST', response.data);
    }).catch(err => {});
  },
  getTest: (_ref2) => {
    var {
      commit
    } = _ref2;
    return Object(tns_core_modules_fetch__WEBPACK_IMPORTED_MODULE_1__["fetch"])(_config__WEBPACK_IMPORTED_MODULE_5__["getTestUrl"]).then(res => {
      if (res.status === 200) {
        return res.json();
      }
    }).then(response => {
      console.log(response);
    }).catch(err => {});
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rechargeCell", function() { return rechargeCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rechargeNauta", function() { return rechargeNauta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiRechargeCell", function() { return multiRechargeCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiRechargeNauta", function() { return multiRechargeNauta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rechargeList", function() { return rechargeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offerList", function() { return offerList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactListUrl", function() { return contactListUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContactById", function() { return getContactById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewContact", function() { return addNewContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateContact", function() { return updateContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteContact", function() { return deleteContact; });
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
var changePassword = apiDomain + 'api/v1/change-password'; // recharge

var rechargeCell = apiDomain + 'api/v1/recharge-cell';
var rechargeNauta = apiDomain + 'api/v1/recharge-nauta';
var multiRechargeCell = apiDomain + 'api/v1/multi-recharge-cell';
var multiRechargeNauta = apiDomain + 'api/v1/multi-recharge-nauta';
var rechargeList = apiDomain + 'api/v1/recharge-list'; // offert

var offerList = apiDomain + 'api/offer-list'; // contact

var contactListUrl = apiDomain + 'api/v1/contact-list';
var getContactById = apiDomain + 'api/v1/contact-get';
var addNewContact = apiDomain + 'api/v1/contact-add';
var updateContact = apiDomain + 'api/v1/contact-update';
var deleteContact = apiDomain + 'api/v1/contact-delete'; // paymemt

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzRmN2IiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWU/MDE0NyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlP2I2NmIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWU/M2NlOCIsIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzU2MjUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZT85Yjg1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/ODM0MiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLnZ1ZT9lNjA2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4udnVlPzIxMjQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWU/ZmI0ZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL29mZmVyL09mZmVyU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZWNoYXJnZS9SZWNoYXJnZVN0b3JlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdXNlci9Vc2VyU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnLmpzIiwid2VicGFjazovLy8uL2Vudi5qcyIsIndlYnBhY2s6Ly8vLi9mb250cy9mYTUtYWxsLmNzcyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYmFja2VuZC1zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXZ1ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2ZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3RleHQvZm9ybWF0dGVkLXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdGV4dC9zcGFuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpb24tYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2JvcmRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvYm90dG9tLW5hdmlnYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29udGVudC12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RhdGUtcGlja2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvaHRtbC12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2RvY2stbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2ZsZXhib3gtbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2xheW91dC1iYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy93cmFwLWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC1waWNrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGxhY2Vob2xkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3Byb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wcm94eS12aWV3LWNvbnRhaW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlYXJjaC1iYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlZ21lbnRlZC1iYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NsaWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3dpdGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItbmF2aWdhdGlvbi1iYXNlL3RhYi1jb250ZW50LWl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLXN0cmlwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItbmF2aWdhdGlvbi1iYXNlL3RhYi1zdHJpcC1pdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFic1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1maWVsZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS90aW1lLXBpY2tlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvd2ViLXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3R5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy94bWxcIiJdLCJuYW1lcyI6WyJWdWUiLCJBcHAiLCJCYWNrZW5kU2VydmljZSIsIlROU0ZvbnRJY29uIiwiZm9udGljb24iLCJpc0FuZHJvaWQiLCJpc0lPUyIsIlZ1ZXgiLCJzdG9yZSIsInByb3RvdHlwZSIsIiRpc0FuZHJvaWQiLCJjb25maWciLCJkZWJ1ZyIsInBhdGhzIiwibG9hZENzcyIsImZpbHRlciIsImJhY2tlbmRTZXJ2aWNlIiwiJGJhY2tlbmRTZXJ2aWNlIiwicmVuZGVyIiwiaCIsIiRzdGFydCIsInVzZSIsInN0YXRlIiwib2ZmZXJzIiwiZ2V0dGVycyIsImdldENlbGxPZmZlcnNTY2hlZHVsZSIsImxpc3QiLCJub3ciLCJtb21lbnQiLCJEYXRlIiwiZm9ybWF0Iiwib2ZmZXIiLCJ0eXBlIiwiaXNCZXR3ZWVuIiwiZGF0ZV9pbmkiLCJkYXRlX2VuZCIsImdldENlbGxPZmZlcnMiLCJnZXROYXV0YU9mZmVycyIsIm11dGF0aW9ucyIsIlNFVF9PRkZFUl9MSVNUIiwiYWN0aW9ucyIsImdldE9mZmVyTGlzdCIsImNvbW1pdCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm9mZmVyTGlzdCIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJnZXRUZXN0IiwiZ2V0VGVzdFVybCIsInJlY2hhcmdlIiwicHVyY2hhc2VJbmZvIiwicmVjaGFyZ2VMaXN0IiwiU0VUX1JFQ0hBUkdFX1FVSUNLIiwiU0VUX1JFQ0hBUkdFX0xJU1QiLCJTRVRfUFVSQ0hBU0VfSU5GTyIsInB1cmNoYXNlIiwiQ0xFQVJfUkVDSEFSR0UiLCJzZXRSZWNoYXJnZSIsInBvc3REYXRhIiwiJGxvZ2dlciIsInNldFJlY2hhcmdlTGlzdCIsImh0dHAiLCJnZXQiLCJoZWFkZXJzIiwiZ2V0SGVhZGVyIiwiYm9keSIsInJlY2hhcmdlQ2VsbCIsInBvc3QiLCJyZWNoYXJnZU5hdXRhIiwibXVsdGlSZWNoYXJnZUNlbGwiLCJjb250YWN0cyIsIm11bHRpUmVjaGFyZ2VOYXV0YSIsInNldFJlZHN5c1BheW1lbnQiLCJyZWNoYXJnZUlkIiwib2ZmZXJfaWQiLCJwYXltZW50UmVkc3lzIiwic2V0UGF5UGFsUGF5bWVudCIsInBheW1lbnRQYXlQYWwiLCJjbGVhclJlY2hhcmdlIiwiYXV0aFVzZXIiLCJpc19iYW5uZXIiLCJ0b3BNZW51IiwiU0VUX0FVVEhfVVNFUiIsInVzZXJPYmoiLCJDTEVBUl9BVVRIX1VTRVIiLCJTRVRfSVNfQkFOTkVSIiwiU0VUX0lTX1RPUCIsInNldFVzZXJPYmplY3QiLCJjbGVhckF1dGhVc2VyIiwic2V0QmFubmVyIiwic2V0VG9wTWVudSIsImFwaUNsaWVudCIsImFwaURvbWFpbiIsImxvZ2luVXJsIiwidXNlclVybCIsImZvcmdvdFBhc3N3b3JkIiwicmVzZXRQYXNzd29yZCIsInJlZ2lzdGVyVXNlclVybCIsImFjdGl2ZVVzZXJVcmwiLCJjaGFuZ2VQYXNzd29yZCIsImNvbnRhY3RMaXN0VXJsIiwiZ2V0Q29udGFjdEJ5SWQiLCJhZGROZXdDb250YWN0IiwidXBkYXRlQ29udGFjdCIsImRlbGV0ZUNvbnRhY3QiLCJyZWRzeXMiLCJ0b2tlbkRhdGEiLCJnZXRTdHJpbmciLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsInJvdXRlcyIsImxvZ2luIiwiTG9naW4iLCJob21lIiwiSG9tZSIsIktpbnZleSIsImFwcEtleSIsImFwcFNlY3JldCIsImlzTG9nZ2VkSW4iLCJnZXRBY3RpdmVVc2VyIiwidXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2dvdXQiLCJyZWdpc3RlciIsInNpZ251cCIsInVzZXJuYW1lIiwicHJvY2VzcyIsIlN0b3JlIiwibW9kdWxlcyIsInVzZXJTdG9yZSIsIm9mZmVyU3RvcmUiLCJyZWNoYXJnZVN0b3JlIiwic3RyaWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5SEE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLGtCQUZBO0FBR0E7QUFDQSxnQkFEQTtBQUVBLGlCQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUpBLE9BSEE7QUFTQTtBQUNBLGdCQURBO0FBRUEsaUJBRkE7QUFHQSxvQkFIQTtBQUlBO0FBSkEsT0FUQTtBQWVBLDJCQWZBO0FBZ0JBLDRCQWhCQTtBQWlCQSwrREFqQkE7QUFrQkEseUZBbEJBO0FBbUJBO0FBbkJBO0FBcUJBLEdBdkJBOztBQXlC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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Ozs7QUNBQSxrRTs7Ozs7OztBQ0FBLHVEOzs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7QUNBQSwwRDs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7QUNBQSwwRDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7QUNBQSx3RTs7Ozs7OztBQ0FBLG9FOzs7Ozs7O0FDQUEsdUU7Ozs7Ozs7QUNBQSxvRTs7Ozs7OztBQ0FBLG9FOzs7Ozs7O0FDQUEscUU7Ozs7Ozs7QUNBQSxvRTs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7QUNBQSxxRDs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxxRTs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7QUNBQSw4RDs7Ozs7OztBQ0FBLHVEOzs7Ozs7O0FDQUEsb0U7Ozs7Ozs7QUNBQSx1RDs7Ozs7OztBQ0FBLHFGOzs7Ozs7O0FDQUEsOEU7Ozs7Ozs7QUNBQSxtRjs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEscUQ7Ozs7Ozs7QUNBQSwyRDs7Ozs7OztBQ0FBLDBEOzs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsaUQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxQYWdlIGNsYXNzPVwicGFnZVwiPlxuXG4gICAgICAgIDxBY3Rpb25CYXIgYmFja2dyb3VuZENvbG9yPVwiIzc2Mjg4OVwiIGZsYXQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIiM3NjI4ODlcIj5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgYmFja2dyb3VuZENvbG9yPVwiIzc2Mjg4OVwiPlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgI3NlYXJjaFJvdyBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wPVwiNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiIHBhZGRpbmdMZWZ0PVwiMjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjIwXCIgdi1tb2RlbD1cInRleHRGaWVsZFZhbHVlXCIgd2lkdGg9XCI4MCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQwXCIgZm9udFNpemU9XCIxNFwiIGhpbnQ9XCJTZWFyY2hcIj48L1RleHRGaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPEltYWdlIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9zaGFwZTRAM3gucG5nXCIgaGVpZ2h0PVwiMzBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzBcIiBtYXJnaW5MZWZ0PVwiMTBcIj48L0ltYWdlPiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPC9BY3Rpb25CYXI+XG5cblxuICAgICAgICA8R3JpZExheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGNvbHVtbnM9XCIqXCJcbiAgICAgICAgICAgIHJvd3M9XCIqLGF1dG9cIj5cblxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNvbD1cIjBcIiByb3c9XCIwXCIgYmFja2dyb3VuZENvbG9yPVwiI2Y4ZjhmOFwiPlxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjNzYyODg5XCIgcGFkZGluZ0JvdHRvbT1cIjE1XCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wPVwiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSB3aWR0aD1cIjE1JVwiIGNsYXNzPVwibG9nb1wiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiPjwvSW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiUmVjaGFyZ2UgVVwiIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNGRkZGRkZcIiBwYWRkaW5nPVwiMTVcIiBmb250U2l6ZT1cIjI0XCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHBhZGRpbmdMZWZ0PVwiMjBcIiBwYWRkaW5nUmlnaHQ9XCIyMFwiIHBhZGRpbmdUb3A9XCIyMFwiXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b209XCI1XCIgbWFyZ2luVG9wPVwiLTIwXCIgYmFja2dyb3VuZENvbG9yPVwiI2ZmZlwiXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjEwXCIgaGVpZ2h0PVwiODUlXCIgd2lkdGg9XCI5MCVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJldGNoPVwiYXNwZWN0Rml0XCIgY2xhc3M9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIqXCIgcm93cz1cImF1dG8sKixhdXRvXCIgaGVpZ2h0PVwiMTAwJVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxHcmlkTGF5b3V0IG1hcmdpblRvcD1cIi0yMDBcIiBjb2x1bW5zPVwiYXV0bywqLGF1dG9cIiByb3dzPVwiYXV0byxhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w9XCIwXCIgcm93PVwiM1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjb2w9XCIwXCIgcm93PVwiMFwiIGNsYXNzPVwiaW5wdXRcIiBoaW50PVwiTmFtZVwiIGF1dG9jb3JyZWN0PVwiZmFsc2VcIiB2LW1vZGVsPVwiY2VsbC5uYW1lXCI+PC9UZXh0RmllbGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNvbD1cIjBcIiByb3c9XCIxXCIgY2xhc3M9XCJpbnB1dFwiIGhpbnQ9XCJQaG9uZVwiIGF1dG9jb3JyZWN0PVwiZmFsc2VcIiB2LW1vZGVsPVwiY2VsbC5waG9uZVwiPjwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY3Rpdml0eUluZGljYXRvciBjb2w9XCIwXCIgcm93PVwiMlwiIHJvd1NwYW49XCIzXCIgOmJ1c3k9XCJwcm9jZXNzaW5nXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sPVwiMFwiIHJvdz1cIjNcIiB0ZXh0PVwiUmVjaGFyZ2VcIiBAdGFwPVwiaGFuZGxlRm9ybVN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMCBidXR0b24tdGV4dFwiPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PiAtLT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgbWFyZ2luVG9wPVwiNTBcIiByb3dzPVwiYXV0bywgYXV0bywgYXV0bywgYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIwXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVwiaW5wdXRcIiBoaW50PVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCIgdi1tb2RlbD1cImNlbGwubmFtZVwiPjwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIxXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxUZXh0RmllbGQgY2xhc3M9XCJpbnB1dFwiIHJlZj1cInBhc3N3b3JkXCIgOmlzRW5hYmxlZD1cIiFwcm9jZXNzaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJQYXNzd29yZFwiIHNlY3VyZT1cInRydWVcIiB2LW1vZGVsPVwidXNlci5wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cmV0dXJuS2V5VHlwZT1cImlzTG9nZ2luZ0luID8gJ2RvbmUnIDogJ25leHQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEByZXR1cm5QcmVzcz1cImZvY3VzQ29uZmlybVBhc3N3b3JkXCI+PC9UZXh0RmllbGQ+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgaGludD1cIlBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb3JyZWN0PVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIiB2LW1vZGVsPVwiY2VsbC5waG9uZVwiPjwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIyXCIgdi1zaG93PVwiIWlzTG9nZ2luZ0luXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxUZXh0RmllbGQgY2xhc3M9XCJpbnB1dFwiIHJlZj1cImNvbmZpcm1QYXNzd29yZFwiIDppc0VuYWJsZWQ9XCIhcHJvY2Vzc2luZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiQ29uZmlybSBwYXNzd29yZFwiIHNlY3VyZT1cInRydWVcIiB2LW1vZGVsPVwidXNlci5jb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cImRvbmVcIj48L1RleHRGaWVsZD4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxUZXh0RmllbGQgY2xhc3M9XCJpbnB1dFwiIGhpbnQ9XCJPZmZlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiIHYtbW9kZWw9XCJjZWxsLm9mZmVyX2lkXCI+PC9UZXh0RmllbGQ+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RWaWV3IGZvcj1cIml0ZW0gaW4gb2ZmZXJTdG9yZS5vZmZlcnNcIiBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJpdGVtLm5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdFZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCI+PC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjNcIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlJlY2hhcmdlXCIgQHRhcD1cImhhbmRsZUZvcm1TdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLXQtMTAgYnV0dG9uLXRleHRcIj48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIj48L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxBY3Rpdml0eUluZGljYXRvciByb3dTcGFuPVwiM1wiIDpidXN5PVwicHJvY2Vzc2luZ1wiPjwvQWN0aXZpdHlJbmRpY2F0b3I+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxCdXR0b24gdGV4dD1cIlJlY2hhcmdlXCIgQHRhcD1cImhhbmRsZUZvcm1TdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLXQtMTUgYnV0dG9uLXRleHRcIj48L0J1dHRvbj4gLS0+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNvbD1cIjBcIiByb3c9XCIxXCIgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjRkZGRkZGXCIgaGVpZ2h0PVwiNjBcIj5cbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiKlwiIGNvbHVtbnM9XCIqLCosKiwqLCpcIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNvbD1cIjBcIiByb3c9XCIwXCIgKHRhcCk9XCJvbkJ1dHRvblRhcCgpXCIgaGVpZ2h0PVwiMjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNVwiIG1hcmdpbj1cIjEwXCIgc3JjPVwifi9hc3NldHMvaW1hZ2VzL3NoYXBlMkAzeC5wbmdcIj48L0ltYWdlPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY29sPVwiMVwiIHJvdz1cIjBcIiAodGFwKT1cIm9uQnV0dG9uVGFwKClcIiBoZWlnaHQ9XCIyNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI1XCIgbWFyZ2luPVwiMTBcIiBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvc2hhcGUxQDN4LnBuZ1wiPjwvSW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjb2w9XCIyXCIgcm93PVwiMFwiICh0YXApPVwib25CdXR0b25UYXAoKVwiIGhlaWdodD1cIjYwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNjBcIiBtYXJnaW49XCIxMFwiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9ob21lQDN4LnBuZ1wiPjwvSW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjb2w9XCIzXCIgcm93PVwiMFwiICh0YXApPVwib25CdXR0b25UYXAoKVwiIGhlaWdodD1cIjI1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjVcIiBtYXJnaW49XCIxMFwiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9zaGFwZTNAM3gucG5nXCI+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNvbD1cIjRcIiByb3c9XCIwXCIgKHRhcCk9XCJvbkJ1dHRvblRhcE91dCgpXCIgaGVpZ2h0PVwiMjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNVwiIG1hcmdpbj1cIjEwXCIgc3JjPVwifi9hc3NldHMvaW1hZ2VzL2ljb24wNEAzeC5wbmdcIj48L0ltYWdlPlxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgIDwvcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbiAgICBpbXBvcnQge21hcFN0YXRlLCBtYXBHZXR0ZXJzfSBmcm9tICd2dWV4JztcbiAgICBpbXBvcnQge2FwaURvbWFpbn0gZnJvbSAnLi8uLi9jb25maWcnO1xuICAgIGltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuICAgIGltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29udGFjdDogJycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2NlbGwnLFxuICAgICAgICAgICAgICAgIGNlbGw6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIHBob25lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgb2ZmZXJfaWQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAncmVjaGFyZ2VDZWxsJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbmF1dGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgb2ZmZXJfaWQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAncmVjaGFyZ2VOYXV0YSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNob29zZV9vZmZlcl9jZWxsOiAnJyxcbiAgICAgICAgICAgICAgICBjaG9vc2Vfb2ZmZXJfbmF1dGE6ICcnLFxuICAgICAgICAgICAgICAgIHNlcnZlcjogYXBpRG9tYWluLFxuICAgICAgICAgICAgICAgIG5vdzogbW9tZW50KG5ldyBEYXRlKCkpLmZvcm1hdCgnWVlZWS9NTS9ERCcpLFxuICAgICAgICAgICAgICAgIG1vbWVudFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICAuLi5tYXBTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdXNlclN0b3JlOiBzdGF0ZSA9PiBzdGF0ZS51c2VyU3RvcmUsXG4gICAgICAgICAgICAgICAgcmVjaGFyZ2VTdG9yZTogc3RhdGUgPT4gc3RhdGUucmVjaGFyZ2VTdG9yZSxcbiAgICAgICAgICAgICAgICBvZmZlclN0b3JlOiBzdGF0ZSA9PiBzdGF0ZS5vZmZlclN0b3JlXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoe1xuICAgICAgICAgICAgICAgIG9wdGlvbnNDZWxsOiAnZ2V0Q2VsbE9mZmVycycsXG4gICAgICAgICAgICAgICAgb3B0aW9uc05hdXRhOiAnZ2V0TmF1dGFPZmZlcnMnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZWQgKCkge1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldE9mZmVyTGlzdCcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGhhbmRsZUZvcm1TdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy4kYmFja2VuZFNlcnZpY2UubG9nb3V0KCk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy4kbmF2aWdhdGVUbyhMb2dpbiwge1xuICAgICAgICAgICAgICAgIC8vICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgICAgIC8vIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdnZXRUZXN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5vZmZlclN0b3JlLm9mZmVycyk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvbkJ1dHRvblRhcE91dCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRiYWNrZW5kU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExvZ2luLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgLmxvZ28ge1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cblxuICAgIC5idXR0b24tdGV4dCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3NjI4ODk7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICB9XG5cbiAgICAuQWN0aW9uQmFyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgLmFsYnVtLWltYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5ob21lLXBhbmVsIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyMDtcbiAgICAgICAgbWFyZ2luOiAxNTtcbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24tbGFiZWwge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNTtcbiAgICB9XG5cbiAgICAjc2VhcmNoUm93IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjA7XG4gICAgfVxuXG4gICAgLmZvcm0ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMzA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzA7XG4gICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG5cbiAgICAuaW5wdXQtZmllbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNTtcbiAgICB9XG5cbiAgICAuaW5wdXQge1xuICAgICAgICBmb250LXNpemU6IDE4O1xuICAgICAgICBwbGFjZWhvbGRlci1jb2xvcjogI0E4QThBODtcbiAgICB9XG5cbiAgICAuaW5wdXQ6ZGlzYWJsZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPFBhZ2UgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICA8RmxleGJveExheW91dCBjbGFzcz1cInBhZ2VcIj5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3M9XCJsb2dvXCIgc3JjPVwifi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCI+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoZWFkZXJcIiB0ZXh0PVwiUmVjaGFyZ2UgVVwiPjwvTGFiZWw+XG5cbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiYXV0bywgYXV0bywgYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVwiMFwiIGNsYXNzPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XCJpbnB1dFwiIGhpbnQ9XCJFbWFpbFwiIDppc0VuYWJsZWQ9XCIhcHJvY2Vzc2luZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVwiZW1haWxcIiBhdXRvY29ycmVjdD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiIHYtbW9kZWw9XCJ1c2VyLmVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwibmV4dFwiIEByZXR1cm5QcmVzcz1cImZvY3VzUGFzc3dvcmRcIj48L1RleHRGaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCI+PC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVwiMVwiIGNsYXNzPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XCJpbnB1dFwiIHJlZj1cInBhc3N3b3JkXCIgOmlzRW5hYmxlZD1cIiFwcm9jZXNzaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiUGFzc3dvcmRcIiBzZWN1cmU9XCJ0cnVlXCIgdi1tb2RlbD1cInVzZXIucGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpyZXR1cm5LZXlUeXBlPVwiaXNMb2dnaW5nSW4gPyAnZG9uZScgOiAnbmV4dCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEByZXR1cm5QcmVzcz1cImZvY3VzQ29uZmlybVBhc3N3b3JkXCI+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjJcIiB2LXNob3c9XCIhaXNMb2dnaW5nSW5cIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVwiaW5wdXRcIiByZWY9XCJjb25maXJtUGFzc3dvcmRcIiA6aXNFbmFibGVkPVwiIXByb2Nlc3NpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJDb25maXJtIHBhc3N3b3JkXCIgc2VjdXJlPVwidHJ1ZVwiIHYtbW9kZWw9XCJ1c2VyLmNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cImRvbmVcIj48L1RleHRGaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCI+PC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgICAgICA8QWN0aXZpdHlJbmRpY2F0b3Igcm93U3Bhbj1cIjNcIiA6YnVzeT1cInByb2Nlc3NpbmdcIj48L0FjdGl2aXR5SW5kaWNhdG9yPlxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gOnRleHQ9XCJpc0xvZ2dpbmdJbiA/ICdMb2cgSW4nIDogJ1NpZ24gVXAnXCIgOmlzRW5hYmxlZD1cIiFwcm9jZXNzaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgQHRhcD1cImhhbmRsZUZvcm1TdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLXQtMjAgYnV0dG9uLXRleHRcIj48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgKnYtc2hvdz1cImlzTG9nZ2luZ0luXCIgdGV4dD1cIkZvcmdvdCB5b3VyIHBhc3N3b3JkP1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9naW4tbGFiZWxcIiBAdGFwPVwiZm9yZ290UGFzc3dvcmQoKVwiPjwvTGFiZWw+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJsb2dpbi1sYWJlbCBzaWduLXVwLWxhYmVsXCIgQHRhcD1cInRvZ2dsZUZvcm1cIj5cbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cImlzTG9nZ2luZ0luID8gJ0RvbuKAmXQgaGF2ZSBhbiBhY2NvdW50PyAnIDogJ0JhY2sgdG8gTG9naW4nXCI+PC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cImlzTG9nZ2luZ0luID8gJ1NpZ24gdXAnIDogJydcIiBjbGFzcz1cImJvbGRcIj48L1NwYW4+XG4gICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBmZXRjaCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZmV0Y2gnO1xuICAgIGltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIjtcbiAgICBpbXBvcnQge2xvZ2luVXJsLCB1c2VyVXJsLCBnZXRIZWFkZXJ9IGZyb20gJy4vLi4vY29uZmlnJztcbiAgICBpbXBvcnQge2NsaWVudElkLCBjbGllbnRTZWNyZXR9IGZyb20gJy4vLi4vZW52JztcbiAgICBpbXBvcnQge21hcFN0YXRlfSBmcm9tICd2dWV4JztcbiAgICBpbXBvcnQge3NldFN0cmluZywgZ2V0U3RyaW5nfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJztcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaXNMb2dnaW5nSW46IHRydWUsXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJpYW5rYW1pc2FtYUBnbWFpbC5jb21cIixcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiMTIzMTIzXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICAuLi5tYXBTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdXNlclN0b3JlOiBzdGF0ZSA9PiBzdGF0ZS51c2VyU3RvcmVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgaXNMb2dpbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlclN0b3JlLmF1dGhVc2VyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnaG9tZSd9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb21lLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBoYW5kbGVGb3JtU3VibWl0KCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy51c2VyLmVtYWlsIHx8ICF0aGlzLnVzZXIucGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUGxlYXNlIHByb3ZpZGUgYm90aCBhbiBlbWFpbCBhZGRyZXNzIGFuZCBwYXNzd29yZC5cIlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUxvZ2luKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVSZWdpc3RlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGhhbmRsZUxvZ2luICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGF1dGhVc2VyID0ge307XG4gICAgICAgICAgICAgICAgZmV0Y2gobG9naW5VcmwsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmFudF90eXBlOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50X2lkOiBjbGllbnRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudF9zZWNyZXQ6IGNsaWVudFNlY3JldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy51c2VyLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU6ICcnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ09hdXRoIHRva2VuJywgcmVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdPYXV0aCB0b2tlbicsIHJlc3BvbnNlLnJlZnJlc2hfdG9rZW4pXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRoVXNlci5hY2Nlc3NfdG9rZW4gPSByZXNwb25zZS5hY2Nlc3NfdG9rZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRoVXNlci5yZWZyZXNoX3Rva2VuID0gcmVzcG9uc2UucmVmcmVzaF90b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0cmluZyhcImF1dGhVc2VyXCIsIHJlc3BvbnNlLmFjY2Vzc190b2tlbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKHVzZXJVcmwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBnZXRIZWFkZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdPYXV0aCB0b2tlbicsIHJlcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndXNlciBvYmplY3QnLCByZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhVc2VyLmVtYWlsID0gcmVzcG9uc2UuZW1haWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoVXNlci5uYW1lID0gcmVzcG9uc2UubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdzZXRVc2VyT2JqZWN0JywgYXV0aFVzZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhvbWUsIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBY3RpdmUgbGEgY3VlbnRhIGVuIHN1IGNvcnJlb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVzdWFyaW8gbyBjb250cmFzZcOxYSBpbmNvcnJlY3RvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGFuZGxlUmVnaXN0ZXIoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlci5wYXNzd29yZCAhPSB0aGlzLnVzZXIuY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXCJZb3VyIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2guXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuJGJhY2tlbmRTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgIC5yZWdpc3Rlcih0aGlzLnVzZXIpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIllvdXIgYWNjb3VudCB3YXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdG9nZ2xlRm9ybSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBmb3Jnb3RQYXNzd29yZCgpIHtcbiAgICAgICAgICAgICAgICBwcm9tcHQoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJGb3Jnb3QgUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgUmVjaGFyZ2UgVSB0byByZXNldCB5b3VyIHBhc3N3b3JkLlwiLFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiXG4gICAgICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRiYWNrZW5kU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXNldFBhc3N3b3JkKGRhdGEudGV4dC50cmltKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJZb3VyIHBhc3N3b3JkIHdhcyBzdWNjZXNzZnVsbHkgcmVzZXQuIFBsZWFzZSBjaGVjayB5b3VyIGVtYWlsIGZvciBpbnN0cnVjdGlvbnMgb24gY2hvb3NpbmcgYSBuZXcgcGFzc3dvcmQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHksIGFuIGVycm9yIG9jY3VycmVkIHJlc2V0dGluZyB5b3VyIHBhc3N3b3JkLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGZvY3VzUGFzc3dvcmQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wYXNzd29yZC5uYXRpdmVWaWV3LmZvY3VzKCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBmb2N1c0NvbmZpcm1QYXNzd29yZCgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5jb25maXJtUGFzc3dvcmQubmF0aXZlVmlldy5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXG4gICAgICAgICAgICBhbGVydChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVjaGFyZ2UgVVwiLFxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAgIC5wYWdlIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuZm9ybSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMDtcbiAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cblxuICAgIC5sb2dvIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTI7XG4gICAgICAgIGhlaWdodDogOTA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDcwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjNzYyODg5O1xuICAgIH1cblxuICAgIC5pbnB1dC1maWVsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1O1xuICAgIH1cblxuICAgIC5pbnB1dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTg7XG4gICAgICAgIHBsYWNlaG9sZGVyLWNvbG9yOiAjQThBOEE4O1xuICAgIH1cblxuICAgIC5pbnB1dDpkaXNhYmxlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuXG4gICAgLmJ0bi1wcmltYXJ5IHtcbiAgICAgICAgbWFyZ2luOiAzMCA1IDE1IDU7XG4gICAgfVxuXG4gICAgLmxvZ2luLWxhYmVsIHtcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogI0E4QThBODtcbiAgICAgICAgZm9udC1zaXplOiAxNjtcbiAgICB9XG5cbiAgICAuc2lnbi11cC1sYWJlbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwO1xuICAgIH1cblxuICAgIC5idXR0b24tdGV4dCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3NjI4ODk7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICB9XG5cbiAgICAuYm9sZCB7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cbjwvc3R5bGU+XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYWYuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXItZHouanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXItbHlcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItbWEuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItdG5cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXpcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmUuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYm1cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm4uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYnJcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vYnMuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY3NcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3YuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vZGFcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZGUtYXRcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUtY2guanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZHYuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZW4tU0dcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tU0cuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tYXVcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tYXUuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tY2EuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tZ2JcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4taWVcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4tbnpcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tbnouanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW9cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZXNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXMtZG9cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtdXNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMtdXMuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXRcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXQuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZXUuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZmFcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmlcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmkuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZm9cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZm8uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnItY2FcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2EuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnItY2guanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnIuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZnkuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZ2FcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2RcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2QuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ2wuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ3VcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vZ3UuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGUuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGlcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaHJcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHIuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHUuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHktYW1cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaWRcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaWQuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXMuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXRcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQtY2hcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQtY2guanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vamFcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vamEuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4vanYuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4va2FcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2tcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va2suanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va20uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va25cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va29cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va28uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3VcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3UuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3lcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4vbGJcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbG8uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHZcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWUuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWtcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbWwuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbXJcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXMtbXlcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXRcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbXkuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmVcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbmwtYmVcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbm5cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vcGEtaW5cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGxcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcGwuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcHQtYnJcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQtYnIuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcm9cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcm8uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vcnUuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vc2RcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2VcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2UuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2kuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2tcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2xcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc2wuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3EuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3JcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLWN5cmwuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zcy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zdlwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zd1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi9zdy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90YS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90ZVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZXRcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RldC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGcuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGhcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGwtcGhcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGxoXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90bGguanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3RyLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3R6bFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90em1cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdWctY25cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWtcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdWsuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXIuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXpcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi92aS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi95b1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi95by5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1oa1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCIsXG5cdFwiLi96aC10dy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ubG9nbyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcbi5idXR0b24tdGV4dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NjI4ODk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG59XFxuLkFjdGlvbkJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uYWxidW0taW1hZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcbi5ob21lLXBhbmVsIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgbWFyZ2luOiAxNTtcXG59XFxuLmRlc2NyaXB0aW9uLWxhYmVsIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxufVxcbiNzZWFyY2hSb3cge1xcbiAgICBtYXJnaW4tdG9wOiAyMDtcXG59XFxuLmZvcm0ge1xcbiAgICBtYXJnaW4tbGVmdDogMzA7XFxuICAgIG1hcmdpbi1yaWdodDogMzA7XFxuICAgIGZsZXgtZ3JvdzogMjtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmlucHV0LWZpZWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjU7XFxufVxcbi5pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMTg7XFxuICAgIHBsYWNlaG9sZGVyLWNvbG9yOiAjQThBOEE4O1xcbn1cXG4uaW5wdXQ6ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvSG9tZS52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnBhZ2VbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5mb3JtW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogMzA7XFxuICAgIG1hcmdpbi1yaWdodDogMzA7XFxuICAgIGZsZXgtZ3JvdzogMjtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmxvZ29bZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEyO1xcbiAgICBoZWlnaHQ6IDkwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmhlYWRlcltkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI1O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA3MDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogIzc2Mjg4OTtcXG59XFxuLmlucHV0LWZpZWxkW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNTtcXG59XFxuLmlucHV0W2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBmb250LXNpemU6IDE4O1xcbiAgICBwbGFjZWhvbGRlci1jb2xvcjogI0E4QThBODtcXG59XFxuLmlucHV0W2RhdGEtdi1jMjc0ODJjNF06ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG4uYnRuLXByaW1hcnlbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIG1hcmdpbjogMzAgNSAxNSA1O1xcbn1cXG4ubG9naW4tbGFiZWxbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNBOEE4QTg7XFxuICAgIGZvbnQtc2l6ZTogMTY7XFxufVxcbi5zaWduLXVwLWxhYmVsW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMDtcXG59XFxuLmJ1dHRvbi10ZXh0W2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzYyODg5O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxufVxcbi5ib2xkW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0xvZ2luLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICB7IGF0dHJzOiB7IGJhY2tncm91bmRDb2xvcjogXCIjNzYyODg5XCIsIGZsYXQ6IFwidHJ1ZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM3NjI4ODlcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzc2Mjg4OVwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLCBtYXJnaW5Ub3A6IFwiNVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJzZWFyY2hSb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjgwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCJTZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnRleHRGaWVsZFZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRleHRGaWVsZFZhbHVlID0gJGV2ZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgIGNvbHVtbnM6IFwiKlwiLFxuICAgICAgICAgICAgcm93czogXCIqLGF1dG9cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBjb2w6IFwiMFwiLCByb3c6IFwiMFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y4ZjhmOFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM3NjI4ODlcIixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxNVwiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiLTEwXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dvXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHdpZHRoOiBcIjE1JVwiLCBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9udC13ZWlnaHQtYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiUmVjaGFyZ2UgVVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMjBcIixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjIwXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMjBcIixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCItMjBcIixcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI4NSVcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOTAlXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcIipcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0bywqLGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI1MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0bywgYXV0bywgYXV0bywgYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCIsIGF0dHJzOiB7IHJvdzogXCIwXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIk5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdDogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5jZWxsLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNlbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIiwgYXR0cnM6IHsgcm93OiBcIjFcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiUGhvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdDogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5jZWxsLnBob25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jZWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBob25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogIV92bS5pc0xvZ2dpbmdJbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiFpc0xvZ2dpbmdJblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0ub2ZmZXJTdG9yZS5vZmZlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIithbGlhc1wiOiBcIml0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgaXRlbVRhcDogX3ZtLm9uSXRlbVRhcCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogaXRlbS5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLCBhdHRyczogeyByb3c6IFwiM1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0xMCBidXR0b24tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlJlY2hhcmdlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uaGFuZGxlRm9ybVN1Ym1pdCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjYwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3dzOiBcIipcIiwgY29sdW1uczogXCIqLCosKiwqLCpcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiKHRhcClcIjogXCJvbkJ1dHRvblRhcCgpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjVcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3NoYXBlMkAzeC5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIih0YXApXCI6IFwib25CdXR0b25UYXAoKVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyNVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9zaGFwZTFAM3gucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCIodGFwKVwiOiBcIm9uQnV0dG9uVGFwKClcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNjBcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI2MFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvaG9tZUAzeC5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIih0YXApXCI6IFwib25CdXR0b25UYXAoKVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyNVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9zaGFwZTNAM3gucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiNFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCIodGFwKVwiOiBcIm9uQnV0dG9uVGFwT3V0KClcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjVcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNVwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvaWNvbjA0QDN4LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgYXR0cnM6IHsgYWN0aW9uQmFySGlkZGVuOiBcInRydWVcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiRmxleGJveExheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm1cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dvXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhlYWRlclwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiUmVjaGFyZ2UgVVwiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93czogXCJhdXRvLCBhdXRvLCBhdXRvXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIiwgYXR0cnM6IHsgcm93OiBcIjBcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCJFbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VuYWJsZWQ6ICFfdm0ucHJvY2Vzc2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb3JyZWN0OiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBcIm5leHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnVzZXIuZW1haWxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5QcmVzczogX3ZtLmZvY3VzUGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChfdm0udXNlciwgXCJlbWFpbFwiLCAkZXZlbnQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLCBhdHRyczogeyByb3c6IFwiMVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZDogIV92bS5wcm9jZXNzaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIlBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyZTogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IF92bS5pc0xvZ2dpbmdJbiA/IFwiZG9uZVwiIDogXCJuZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS51c2VyLnBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuUHJlc3M6IF92bS5mb2N1c0NvbmZpcm1QYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KF92bS51c2VyLCBcInBhc3N3b3JkXCIsICRldmVudC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0uaXNMb2dnaW5nSW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIWlzTG9nZ2luZ0luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjJcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiY29uZmlybVBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbmFibGVkOiAhX3ZtLnByb2Nlc3NpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiQ29uZmlybSBwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cmU6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBcImRvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnVzZXIuY29uZmlybVBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbmZpcm1QYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiQWN0aXZpdHlJbmRpY2F0b3JcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3dTcGFuOiBcIjNcIiwgYnVzeTogX3ZtLnByb2Nlc3NpbmcgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBtLXQtMjAgYnV0dG9uLXRleHRcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLmlzTG9nZ2luZ0luID8gXCJMb2cgSW5cIiA6IFwiU2lnbiBVcFwiLFxuICAgICAgICAgICAgICAgICAgaXNFbmFibGVkOiAhX3ZtLnByb2Nlc3NpbmdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmhhbmRsZUZvcm1TdWJtaXQgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9naW4tbGFiZWxcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgXCIqdi1zaG93XCI6IFwiaXNMb2dnaW5nSW5cIixcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRm9yZ290IHlvdXIgcGFzc3dvcmQ/XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmZvcmdvdFBhc3N3b3JkKClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvZ2luLWxhYmVsIHNpZ24tdXAtbGFiZWxcIixcbiAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0udG9nZ2xlRm9ybSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLmlzTG9nZ2luZ0luXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiRG9u4oCZdCBoYXZlIGFuIGFjY291bnQ/IFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiQmFjayB0byBMb2dpblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uaXNMb2dnaW5nSW4gPyBcIlNpZ24gdXBcIiA6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCIsXG5cdFwiLi9hcHAuanNcIjogXCIuL2FwcC5qc1wiLFxuXHRcIi4vY29tcG9uZW50cy9vZmZlci9PZmZlclN0b3JlLmpzXCI6IFwiLi9jb21wb25lbnRzL29mZmVyL09mZmVyU3RvcmUuanNcIixcblx0XCIuL2NvbXBvbmVudHMvcmVjaGFyZ2UvUmVjaGFyZ2VTdG9yZS5qc1wiOiBcIi4vY29tcG9uZW50cy9yZWNoYXJnZS9SZWNoYXJnZVN0b3JlLmpzXCIsXG5cdFwiLi9jb21wb25lbnRzL3VzZXIvVXNlclN0b3JlLmpzXCI6IFwiLi9jb21wb25lbnRzL3VzZXIvVXNlclN0b3JlLmpzXCIsXG5cdFwiLi9jb25maWcuanNcIjogXCIuL2NvbmZpZy5qc1wiLFxuXHRcIi4vZW52LmpzXCI6IFwiLi9lbnYuanNcIixcblx0XCIuL2ZvbnRzL2ZhNS1hbGwuY3NzXCI6IFwiLi9mb250cy9mYTUtYWxsLmNzc1wiLFxuXHRcIi4vcm91dGVzL2luZGV4LmpzXCI6IFwiLi9yb3V0ZXMvaW5kZXguanNcIixcblx0XCIuL3NlcnZpY2VzL2JhY2tlbmQtc2VydmljZS5qc1wiOiBcIi4vc2VydmljZXMvYmFja2VuZC1zZXJ2aWNlLmpzXCIsXG5cdFwiLi9zdG9yZS5qc1wiOiBcIi4vc3RvcmUuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopKD88IVxcXFwuXFxcXC9cXFxcYnRlc3RzXFxcXGJcXFxcLy4qPylcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIEBpbXBvcnQgJ25hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzcyc7IFwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCI1MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjRDUxQTFBXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiNjAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0bi1wcmltYXJ5OmRpc2FibGVkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwib3BhY2l0eVwiLFwidmFsdWVcIjpcIjAuNVwifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19OztcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCIvKipcbiAqIEBBdXRob3I6IENvZGVhbHNcbiAqIEBEYXRlOiAgIDA1LTAzLTIwMjBcbiAqIEBFbWFpbDogIGlhbkBjb2RlYWxzLmVzXG4gKiBATGFzdCBtb2RpZmllZCBieTogICBDb2RlYWxzXG4gKiBATGFzdCBtb2RpZmllZCB0aW1lOiAwNi0wMy0yMDIwXG4gKiBAQ29weXJpZ2h0OiBDb2RlYWxzXG4gKi9cblxuaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJztcblxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4nO1xuaW1wb3J0IEJhY2tlbmRTZXJ2aWNlIGZyb20gXCIuL3NlcnZpY2VzL2JhY2tlbmQtc2VydmljZVwiO1xuLy8gaW1wb3J0IFJhZExpc3RWaWV3IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldy92dWUnXG4vLyBpbXBvcnQgUmFkU2lkZURyYXdlciBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci92dWUnXG5pbXBvcnQgeyBUTlNGb250SWNvbiwgZm9udGljb24gfSBmcm9tICduYXRpdmVzY3JpcHQtZm9udGljb24nO1xuLy8gaW1wb3J0IENoYXJ0VnVlIGZyb20gJ25hdGl2ZXNjcmlwdC11aS1jaGFydC92dWUnO1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xuLy8gaW1wb3J0IFZ1ZXggZnJvbSAnLi92dWV4Jztcbi8vIGltcG9ydCBhcHBTZXR0aW5ncyBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJztcblxuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XG5WdWUudXNlKFZ1ZXgpO1xuXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cblZ1ZS5wcm90b3R5cGUuJGlzQW5kcm9pZCA9IGlzQW5kcm9pZDtcblZ1ZS5wcm90b3R5cGUuJGlzSU9TID0gaXNJT1M7XG5cblZ1ZS5jb25maWcuc2lsZW50ID0gdHJ1ZTtcblxuLy9Jbml0aWFsaXplIEZvbnRBd2Vzb21lXG5UTlNGb250SWNvbi5kZWJ1ZyA9IGZhbHNlO1xuVE5TRm9udEljb24ucGF0aHMgPSB7XG4gICAgJ2ZhJzogJy4vZm9udHMvZmE1LWFsbC5jc3MnXG59O1xuVE5TRm9udEljb24ubG9hZENzcygpO1xuVnVlLmZpbHRlcignZm9udGljb24nLCBmb250aWNvbik7XG5cbi8vIFZ1ZS51c2UoUmFkTGlzdFZpZXcpXG5cbi8vIGxvZ2luIHdpdGggYmFja2VuZFxuY29uc3QgYmFja2VuZFNlcnZpY2UgPSBuZXcgQmFja2VuZFNlcnZpY2UoKTtcblZ1ZS5wcm90b3R5cGUuJGJhY2tlbmRTZXJ2aWNlID0gYmFja2VuZFNlcnZpY2U7XG5cbi8vIFZ1ZS5wcm90b3R5cGUuJGFwcFNldHRpbmdzID0gYXBwU2V0dGluZ3M7XG5cbm5ldyBWdWUoe1xuICAgIHJlbmRlcjogaCA9PiBoKCdmcmFtZScsIFtoKEFwcCldKSxcbiAgICBzdG9yZVxufSkuJHN0YXJ0KClcblxuXG5cblxuLy8gaW1wb3J0IFZ1ZSBmcm9tIFwibmF0aXZlc2NyaXB0LXZ1ZVwiO1xuXG4vLyBpbXBvcnQgcm91dGVzIGZyb20gXCIuL3JvdXRlc1wiO1xuLy8gaW1wb3J0IEJhY2tlbmRTZXJ2aWNlIGZyb20gXCIuL3NlcnZpY2VzL2JhY2tlbmQtc2VydmljZVwiO1xuXG4vLyAvLyBVbmNvbW1tZW50IHRoZSBmb2xsb3dpbmcgdG8gc2VlIE5hdGl2ZVNjcmlwdC1WdWUgb3V0cHV0IGxvZ3Ncbi8vIC8vIFZ1ZS5jb25maWcuc2lsZW50ID0gZmFsc2U7XG5cbi8vIGNvbnN0IGJhY2tlbmRTZXJ2aWNlID0gbmV3IEJhY2tlbmRTZXJ2aWNlKCk7XG4vLyBWdWUucHJvdG90eXBlLiRiYWNrZW5kU2VydmljZSA9IGJhY2tlbmRTZXJ2aWNlO1xuXG4vLyBuZXcgVnVlKHtcbi8vICAgcmVuZGVyOiBoID0+IGgoXCJmcmFtZVwiLCBbaChiYWNrZW5kU2VydmljZS5pc0xvZ2dlZEluKCkgPyByb3V0ZXMuaG9tZSA6IHJvdXRlcy5sb2dpbildKVxuLy8gfSkuJHN0YXJ0KCk7XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NDEwZjNhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxJQU5cXFxcRGVza3RvcFxcXFxzdGFydHVwXFxcXHlvc3ZhXFxcXHJlY2hhcmdldVxcXFxhcHBzXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY3NDEwZjNhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY3NDEwZjNhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY3NDEwZjNhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzQxMGYzYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2NzQxMGYzYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9Ib21lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc0MTBmM2EmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMjc0ODJjNCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMjc0ODJjNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYzI3NDgyYzRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxJQU5cXFxcRGVza3RvcFxcXFxzdGFydHVwXFxcXHlvc3ZhXFxcXHJlY2hhcmdldVxcXFxhcHBzXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2MyNzQ4MmM0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2MyNzQ4MmM0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2MyNzQ4MmM0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzI3NDgyYzQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYzI3NDgyYzQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvTG9naW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzI3NDgyYzQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzI3NDgyYzQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJlwiIiwiLyoqXHJcbiAqIEBBdXRob3I6IGFsZWphbmRyb1xyXG4gKiBARGF0ZTogICAyMDE5LTExLTIyVDE0OjQ2OjE1KzAxOjAwXHJcbiAqIEBFbWFpbDogIGFsZWpvOTAxMDAzQGhvdG1haWwuY29tXHJcbiAqIEBQcm9qZWN0OiBSZWNhcmdhbWVcclxuICogQExhc3QgbW9kaWZpZWQgYnk6ICAgYWxlamFuZHJvXHJcbiAqIEBMYXN0IG1vZGlmaWVkIHRpbWU6IDIwMTktMTEtMjNUMTQ6MTc6NDUrMDE6MDBcclxuICovXHJcblxyXG5pbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnO1xyXG5pbXBvcnQgeyBmZXRjaCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZmV0Y2gnO1xyXG5pbXBvcnQgVnVleCBmcm9tICd2dWV4JztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuVnVlLnVzZShWdWV4KTtcclxuXHJcbmltcG9ydCB7XHJcbiAgb2ZmZXJMaXN0LFxyXG4gIGdldEhlYWRlcixcclxuICBnZXRUZXN0VXJsXHJcbiAgLy8gcmVjaGFyZ2VDZWxsLFxyXG4gIC8vIHJlY2hhcmdlTmF1dGFcclxufSBmcm9tICcuLy4uLy4uL2NvbmZpZydcclxuXHJcbmNvbnN0IHN0YXRlID0ge1xyXG4gIG9mZmVyczogW11cclxufVxyXG5cclxuY29uc3QgZ2V0dGVycyA9IHtcclxuICBnZXRDZWxsT2ZmZXJzU2NoZWR1bGUgKHN0YXRlKSB7XHJcbiAgICBsZXQgbGlzdCA9IHN0YXRlLm9mZmVyc1xyXG4gICAgbGV0IG5vdyA9IG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoJ1lZWVkvTU0vREQnKVxyXG4gICAgcmV0dXJuIGxpc3QuZmlsdGVyKGZ1bmN0aW9uIChvZmZlcikge1xyXG4gICAgICBpZiAob2ZmZXIudHlwZSA9PT0gJ0NlbGwnICYmICFtb21lbnQobm93KS5pc0JldHdlZW4ob2ZmZXIuZGF0ZV9pbmksIG9mZmVyLmRhdGVfZW5kLCBudWxsLCAnW10nKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZ2V0Q2VsbE9mZmVycyAoc3RhdGUpIHtcclxuICAgIGxldCBsaXN0ID0gc3RhdGUub2ZmZXJzXHJcbiAgICBsZXQgbm93ID0gbW9tZW50KG5ldyBEYXRlKCkpLmZvcm1hdCgnWVlZWS9NTS9ERCcpXHJcbiAgICByZXR1cm4gbGlzdC5maWx0ZXIoZnVuY3Rpb24gKG9mZmVyKSB7XHJcbiAgICAgIGlmIChvZmZlci50eXBlID09PSAnQ2VsbCcgJiYgbW9tZW50KG5vdykuaXNCZXR3ZWVuKG9mZmVyLmRhdGVfaW5pLCBvZmZlci5kYXRlX2VuZCwgbnVsbCwgJ1tdJykpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfSlcclxuICB9LFxyXG4gIGdldE5hdXRhT2ZmZXJzIChzdGF0ZSkge1xyXG4gICAgbGV0IGxpc3QgPSBzdGF0ZS5vZmZlcnNcclxuICAgIGxldCBub3cgPSBtb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KCdZWVlZL01NL0REJylcclxuICAgIHJldHVybiBsaXN0LmZpbHRlcihmdW5jdGlvbiAob2ZmZXIpIHtcclxuICAgICAgaWYgKG9mZmVyLnR5cGUgPT09ICdOYXV0YScgJiYgbW9tZW50KG5vdykuaXNCZXR3ZWVuKG9mZmVyLmRhdGVfaW5pLCBvZmZlci5kYXRlX2VuZCwgbnVsbCwgJ1tdJykpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG11dGF0aW9ucyA9IHtcclxuICBTRVRfT0ZGRVJfTElTVCAoc3RhdGUsIG9mZmVycykge1xyXG4gICAgc3RhdGUub2ZmZXJzID0gb2ZmZXJzXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBhY3Rpb25zID0ge1xyXG4gIC8vIGdldE9mZmVyTGlzdDogKHtjb21taXR9KSA9PiB7XHJcbiAgLy8gICByZXR1cm4gVnVlLmh0dHAuZ2V0KG9mZmVyTGlzdClcclxuICAvLyAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gIC8vICAgICAgIFZ1ZS4kbG9nZ2VyKCdpbmZvJywgJ29mZmVyTGlzdCByZXNwb25zZScsIHJlc3BvbnNlKVxyXG4gIC8vICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gIC8vICAgICAgICAgY29tbWl0KCdTRVRfT0ZGRVJfTElTVCcsIHJlc3BvbnNlLmJvZHkuZGF0YSlcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gfVxyXG5cclxuICBnZXRPZmZlckxpc3Q6ICh7IGNvbW1pdCB9KSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKCdFbnRyZWVlZWVlZWUnKTtcclxuXHJcbiAgICByZXR1cm4gZmV0Y2gob2ZmZXJMaXN0KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdvZmZlcnMgb2JqZWN0dHR0dHR0dHR0dHR0dHR0dHR0dHQnK3Jlcy5zdGF0dXMpO1xyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgY29tbWl0KCdTRVRfT0ZGRVJfTElTVCcsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICB9KTtcclxuICB9LFxyXG5cclxuICBnZXRUZXN0OiAoeyBjb21taXQgfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiBmZXRjaChnZXRUZXN0VXJsKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBzdGF0ZSwgbXV0YXRpb25zLCBhY3Rpb25zLCBnZXR0ZXJzXHJcbn1cclxuIiwiLyoqXHJcbiAqIEBBdXRob3I6IGFsZWphbmRyb1xyXG4gKiBARGF0ZTogICAyMDE5LTExLTIxVDIzOjI1OjU3KzAxOjAwXHJcbiAqIEBFbWFpbDogIGFsZWpvOTAxMDAzQGhvdG1haWwuY29tXHJcbiAqIEBQcm9qZWN0OiBSZWNhcmdhbWVcclxuICogQExhc3QgbW9kaWZpZWQgYnk6ICAgYWxlamFuZHJvXHJcbiAqIEBMYXN0IG1vZGlmaWVkIHRpbWU6IDIwMTktMTEtMjZUMjM6MjU6MTErMDE6MDBcclxuICovXHJcblxyXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IHtcclxuICBnZXRIZWFkZXIsXHJcbiAgcmVjaGFyZ2VMaXN0LFxyXG4gIHJlY2hhcmdlQ2VsbCxcclxuICByZWNoYXJnZU5hdXRhLFxyXG4gIG11bHRpUmVjaGFyZ2VDZWxsLFxyXG4gIG11bHRpUmVjaGFyZ2VOYXV0YSxcclxuICBwYXltZW50UmVkc3lzLFxyXG4gIHBheW1lbnRQYXlQYWxcclxufSBmcm9tICcuLy4uLy4uL2NvbmZpZydcclxuXHJcbmNvbnN0IHN0YXRlID0ge1xyXG4gIHJlY2hhcmdlOiB7fSxcclxuICBwdXJjaGFzZUluZm86IHt9LFxyXG4gIHJlY2hhcmdlTGlzdDoge31cclxuICAvLyByZWNoYXJnZToge1xyXG4gIC8vICAgaWQ6ICcnLFxyXG4gIC8vICAgdHlwZTogJycsXHJcbiAgLy8gICBvZmZlcl9pZDoge30sXHJcbiAgLy8gICBwcmljZV9wYXk6ICcnLFxyXG4gIC8vICAgcGhvbmU6ICcnLFxyXG4gIC8vICAgZW1haWw6ICcnXHJcbiAgLy8gfVxyXG59XHJcblxyXG5jb25zdCBnZXR0ZXJzID0ge1xyXG5cclxufVxyXG5cclxuY29uc3QgbXV0YXRpb25zID0ge1xyXG4gIFNFVF9SRUNIQVJHRV9RVUlDSyAoc3RhdGUsIHJlY2hhcmdlKSB7XHJcbiAgICBzdGF0ZS5yZWNoYXJnZSA9IHJlY2hhcmdlXHJcbiAgfSxcclxuICBTRVRfUkVDSEFSR0VfTElTVCAoc3RhdGUsIHJlY2hhcmdlKSB7XHJcbiAgICBzdGF0ZS5yZWNoYXJnZUxpc3QgPSByZWNoYXJnZVxyXG4gIH0sXHJcbiAgU0VUX1BVUkNIQVNFX0lORk8gKHN0YXRlLCBwdXJjaGFzZSkge1xyXG4gICAgc3RhdGUucHVyY2hhc2VJbmZvID0gcHVyY2hhc2VcclxuICB9LFxyXG4gIENMRUFSX1JFQ0hBUkdFIChzdGF0ZSkge1xyXG4gICAgc3RhdGUucmVjaGFyZ2UgPSB7fVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgYWN0aW9ucyA9IHtcclxuICBzZXRSZWNoYXJnZTogKHtjb21taXR9LCByZWNoYXJnZSkgPT4ge1xyXG4gICAgbGV0IHBvc3REYXRhID0gcmVjaGFyZ2VcclxuICAgIFZ1ZS4kbG9nZ2VyKCdpbmZvJywgJ3NldFJlY2hhcmdlIHJlc3BvbnNlJywgcG9zdERhdGEpXHJcbiAgICBjb21taXQoJ1NFVF9SRUNIQVJHRV9RVUlDSycsIHBvc3REYXRhKVxyXG4gIH0sXHJcbiAgc2V0UmVjaGFyZ2VMaXN0OiAoe2NvbW1pdH0pID0+IHtcclxuICAgIHJldHVybiBWdWUuaHR0cC5nZXQocmVjaGFyZ2VMaXN0LCB7aGVhZGVyczogZ2V0SGVhZGVyKCl9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgVnVlLiRsb2dnZXIoJ2luZm8nLCAnc2V0UmVjaGFyZ2VMaXN0IHJlc3BvbnNlJywgcmVzcG9uc2UpXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICBjb21taXQoJ1NFVF9SRUNIQVJHRV9MSVNUJywgcmVzcG9uc2UuYm9keS5kYXRhKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgfSlcclxuICB9LFxyXG4gIHJlY2hhcmdlQ2VsbDogKHtjb21taXR9KSA9PiB7XHJcbiAgICBsZXQgcG9zdERhdGEgPSBzdGF0ZS5yZWNoYXJnZVxyXG4gICAgcmV0dXJuIFZ1ZS5odHRwLnBvc3QocmVjaGFyZ2VDZWxsLCBwb3N0RGF0YSwge2hlYWRlcnM6IGdldEhlYWRlcigpfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIFZ1ZS4kbG9nZ2VyKCdpbmZvJywgJ3JlY2hhcmdlY2VsbCByZXNwb25zZScsIHJlc3BvbnNlKVxyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgY29tbWl0KCdTRVRfUFVSQ0hBU0VfSU5GTycsIHJlc3BvbnNlLmJvZHkuZGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgIH0pXHJcbiAgfSxcclxuICByZWNoYXJnZU5hdXRhOiAoe2NvbW1pdH0pID0+IHtcclxuICAgIGxldCBwb3N0RGF0YSA9IHN0YXRlLnJlY2hhcmdlXHJcbiAgICByZXR1cm4gVnVlLmh0dHAucG9zdChyZWNoYXJnZU5hdXRhLCBwb3N0RGF0YSwge2hlYWRlcnM6IGdldEhlYWRlcigpfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIFZ1ZS4kbG9nZ2VyKCdpbmZvJywgJ3JlY2hhcmdlTmF1dGEgcmVzcG9uc2UnLCByZXNwb25zZSlcclxuICAgICAgICBjb21taXQoJ1NFVF9QVVJDSEFTRV9JTkZPJywgcmVzcG9uc2UuYm9keS5kYXRhKVxyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgY29tbWl0KCdTRVRfUFVSQ0hBU0VfSU5GTycsIHJlc3BvbnNlLmJvZHkuZGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgIH0pXHJcbiAgfSxcclxuICBtdWx0aVJlY2hhcmdlQ2VsbDogKHtjb21taXR9LCBjb250YWN0cykgPT4ge1xyXG4gICAgbGV0IHBvc3REYXRhID0gY29udGFjdHNcclxuICAgIHJldHVybiBWdWUuaHR0cC5wb3N0KG11bHRpUmVjaGFyZ2VDZWxsLCBwb3N0RGF0YSwge2hlYWRlcnM6IGdldEhlYWRlcigpfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIFZ1ZS4kbG9nZ2VyKCdpbmZvJywgJ211bHRpUmVjaGFyZ2VDZWxsIHJlc3BvbnNlJywgcmVzcG9uc2UpXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgICBjb21taXQoJ1NFVF9QVVJDSEFTRV9JTkZPJywgcmVzcG9uc2UuYm9keS5kYXRhKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgfSlcclxuICB9LFxyXG4gIG11bHRpUmVjaGFyZ2VOYXV0YTogKHtjb21taXR9LCBjb250YWN0cykgPT4ge1xyXG4gICAgbGV0IHBvc3REYXRhID0gY29udGFjdHNcclxuICAgIHJldHVybiBWdWUuaHR0cC5wb3N0KG11bHRpUmVjaGFyZ2VOYXV0YSwgcG9zdERhdGEsIHtoZWFkZXJzOiBnZXRIZWFkZXIoKX0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBWdWUuJGxvZ2dlcignaW5mbycsICdtdWx0aVJlY2hhcmdlTmF1dGEgcmVzcG9uc2UnLCByZXNwb25zZSlcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAgIGNvbW1pdCgnU0VUX1BVUkNIQVNFX0lORk8nLCByZXNwb25zZS5ib2R5LmRhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICB9KVxyXG4gIH0sXHJcbiAgc2V0UmVkc3lzUGF5bWVudDogKHtjb21taXR9LCByZWNoYXJnZUlkKSA9PiB7XHJcbiAgICBsZXQgcG9zdERhdGEgPSB7b2ZmZXJfaWQ6IHJlY2hhcmdlSWR9XHJcbiAgICByZXR1cm4gVnVlLmh0dHAucG9zdChwYXltZW50UmVkc3lzLCBwb3N0RGF0YSwge2hlYWRlcnM6IGdldEhlYWRlcigpfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIFZ1ZS4kbG9nZ2VyKCdpbmZvJywgJ3NldFJlZHN5c1BheW1lbnQgcmVzcG9uc2UnLCByZXNwb25zZSlcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIC8vIGNvbW1pdCgnU0VUX1BVUkNIQVNFX0lORk8nLCByZXNwb25zZS5ib2R5LmRhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICB9KVxyXG4gIH0sXHJcbiAgc2V0UGF5UGFsUGF5bWVudDogKHtjb21taXR9LCByZWNoYXJnZUlkKSA9PiB7XHJcbiAgICBsZXQgcG9zdERhdGEgPSB7b2ZmZXJfaWQ6IHJlY2hhcmdlSWR9XHJcbiAgICByZXR1cm4gVnVlLmh0dHAucG9zdChwYXltZW50UGF5UGFsLCBwb3N0RGF0YSwge2hlYWRlcnM6IGdldEhlYWRlcigpfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIFZ1ZS4kbG9nZ2VyKCdpbmZvJywgJ3NldFBheVBhbFBheW1lbnQgcmVzcG9uc2UnLCByZXNwb25zZSlcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIC8vIGNvbW1pdCgnU0VUX1BVUkNIQVNFX0lORk8nLCByZXNwb25zZS5ib2R5LmRhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICB9KVxyXG4gIH0sXHJcbiAgY2xlYXJSZWNoYXJnZTogKHtjb21taXR9KSA9PiB7XHJcbiAgICBWdWUuJGxvZ2dlcignaW5mbycsICdjbGVhclJlY2hhcmdlJylcclxuICAgIGNvbW1pdCgnQ0xFQVJfUkVDSEFSR0UnKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHN0YXRlLCBtdXRhdGlvbnMsIGFjdGlvbnMsIGdldHRlcnNcclxufVxyXG4iLCIvKipcclxuICogQEF1dGhvcjogYWxlamFuZHJvXHJcbiAqIEBEYXRlOiAgIDIwMTktMTEtMjFUMTk6MDg6MjErMDE6MDBcclxuICogQEVtYWlsOiAgYWxlam85MDEwMDNAaG90bWFpbC5jb21cclxuICogQExhc3QgbW9kaWZpZWQgYnk6ICAgYWxlamFuZHJvXHJcbiAqIEBMYXN0IG1vZGlmaWVkIHRpbWU6IDIwMTktMTEtMjZUMTQ6NTU6MzUrMDE6MDBcclxuICovXHJcblxyXG4vLyBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuLy8gaW1wb3J0IHtcclxuLy8gICAvLyBnZXRIZWFkZXIsXHJcbi8vICAgLy8gdXNlckxpc3RVcmxcclxuLy8gfSBmcm9tICcuLy4uLy4uL2NvbmZpZydcclxuY29uc3Qgc3RhdGUgPSB7XHJcbiAgYXV0aFVzZXI6IG51bGwsXHJcbiAgaXNfYmFubmVyOiB0cnVlLFxyXG4gIHRvcE1lbnU6IHRydWVcclxufVxyXG5cclxuY29uc3QgbXV0YXRpb25zID0ge1xyXG4gIFNFVF9BVVRIX1VTRVIgKHN0YXRlLCB1c2VyT2JqKSB7XHJcbiAgICBzdGF0ZS5hdXRoVXNlciA9IHVzZXJPYmpcclxuICB9LFxyXG4gIENMRUFSX0FVVEhfVVNFUiAoc3RhdGUpIHtcclxuICAgIHN0YXRlLmF1dGhVc2VyID0gbnVsbFxyXG4gIH0sXHJcbiAgU0VUX0lTX0JBTk5FUiAoc3RhdGUsIHN0YXR1cykge1xyXG4gICAgc3RhdGUuaXNfYmFubmVyID0gc3RhdHVzXHJcbiAgfSxcclxuICBTRVRfSVNfVE9QIChzdGF0ZSwgc3RhdHVzKSB7XHJcbiAgICBzdGF0ZS50b3BNZW51ID0gc3RhdHVzXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBhY3Rpb25zID0ge1xyXG4gIHNldFVzZXJPYmplY3Q6ICh7Y29tbWl0fSwgdXNlck9iaikgPT4ge1xyXG4gICAgY29tbWl0KCdTRVRfQVVUSF9VU0VSJywgdXNlck9iailcclxuICB9LFxyXG4gIGNsZWFyQXV0aFVzZXI6ICh7Y29tbWl0fSkgPT4ge1xyXG4gICAgY29tbWl0KCdDTEVBUl9BVVRIX1VTRVInKVxyXG4gIH0sXHJcbiAgc2V0QmFubmVyOiAoe2NvbW1pdH0sIHN0YXR1cykgPT4ge1xyXG4gICAgY29tbWl0KCdTRVRfSVNfQkFOTkVSJywgc3RhdHVzKVxyXG4gIH0sXHJcbiAgc2V0VG9wTWVudTogKHtjb21taXR9LCBzdGF0dXMpID0+IHtcclxuICAgIGNvbW1pdCgnU0VUX0lTX1RPUCcsIHN0YXR1cylcclxuICB9XHJcbiAgLy8gZ2V0VXNlckxpc3Q6ICh7Y29tbWl0fSkgPT4ge1xyXG4gIC8vICAgcmV0dXJuIFZ1ZS5odHRwLmdldCh1c2VyTGlzdFVybCwge2hlYWRlcnM6IGdldEhlYWRlcigpfSlcclxuICAvLyAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gIC8vICAgICAgIFZ1ZS4kbG9nZ2VyKCdpbmZvJywgJ3VzZXJMaXN0VXJsIHJlc3BvbnNlJywgcmVzcG9uc2UpXHJcbiAgLy8gICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgLy8gICAgICAgICBjb21taXQoJ1NFVF9VU0VSX0xJU1QnLCByZXNwb25zZS5ib2R5LmRhdGEpXHJcbiAgLy8gICAgICAgICByZXR1cm4gcmVzcG9uc2UuYm9keS5kYXRhXHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICB9KVxyXG4gIC8vIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHN0YXRlLCBtdXRhdGlvbnMsIGFjdGlvbnNcclxufVxyXG4iLCIvKipcclxuICogQEF1dGhvcjogQ29kZWFsc1xyXG4gKiBARGF0ZTogICAwNi0wMy0yMDIwXHJcbiAqIEBFbWFpbDogIGlhbkBjb2RlYWxzLmVzXHJcbiAqIEBMYXN0IG1vZGlmaWVkIGJ5OiAgIENvZGVhbHNcclxuICogQExhc3QgbW9kaWZpZWQgdGltZTogMDYtMDMtMjAyMFxyXG4gKiBAQ29weXJpZ2h0OiBDb2RlYWxzXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtnZXRTdHJpbmd9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwaUNsaWVudCA9ICdodHRwOi8vMTI3LjAuMC4xOjgwODAvJztcclxuZXhwb3J0IGNvbnN0IGFwaURvbWFpbiA9ICdodHRwczovL2FkbWlucmVjaGFyZ2UuY29kZWFscy5lcy8nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luVXJsID0gYXBpRG9tYWluICsgJ29hdXRoL3Rva2VuJztcclxuZXhwb3J0IGNvbnN0IHVzZXJVcmwgPSBhcGlEb21haW4gKyAnYXBpL3VzZXInO1xyXG5leHBvcnQgY29uc3QgZm9yZ290UGFzc3dvcmQgPSBhcGlEb21haW4gKyAnYXBpL2ZvcmdvdC1wYXNzd29yZCc7XHJcbmV4cG9ydCBjb25zdCByZXNldFBhc3N3b3JkID0gYXBpRG9tYWluICsgJ2FwaS9yZXNldC1wYXNzd29yZCc7XHJcbmV4cG9ydCBjb25zdCByZWdpc3RlclVzZXJVcmwgPSBhcGlEb21haW4gKyAnYXBpL3VzZXItcmVnaXN0ZXInO1xyXG5leHBvcnQgY29uc3QgYWN0aXZlVXNlclVybCA9IGFwaURvbWFpbiArICdhcGkvdXNlci1hY3RpdmUnO1xyXG5leHBvcnQgY29uc3QgY2hhbmdlUGFzc3dvcmQgPSBhcGlEb21haW4gKyAnYXBpL3YxL2NoYW5nZS1wYXNzd29yZCc7XHJcblxyXG4vLyByZWNoYXJnZVxyXG5leHBvcnQgY29uc3QgcmVjaGFyZ2VDZWxsID0gYXBpRG9tYWluICsgJ2FwaS92MS9yZWNoYXJnZS1jZWxsJztcclxuZXhwb3J0IGNvbnN0IHJlY2hhcmdlTmF1dGEgPSBhcGlEb21haW4gKyAnYXBpL3YxL3JlY2hhcmdlLW5hdXRhJztcclxuZXhwb3J0IGNvbnN0IG11bHRpUmVjaGFyZ2VDZWxsID0gYXBpRG9tYWluICsgJ2FwaS92MS9tdWx0aS1yZWNoYXJnZS1jZWxsJztcclxuZXhwb3J0IGNvbnN0IG11bHRpUmVjaGFyZ2VOYXV0YSA9IGFwaURvbWFpbiArICdhcGkvdjEvbXVsdGktcmVjaGFyZ2UtbmF1dGEnO1xyXG5leHBvcnQgY29uc3QgcmVjaGFyZ2VMaXN0ID0gYXBpRG9tYWluICsgJ2FwaS92MS9yZWNoYXJnZS1saXN0JztcclxuXHJcbi8vIG9mZmVydFxyXG5leHBvcnQgY29uc3Qgb2ZmZXJMaXN0ID0gYXBpRG9tYWluICsgJ2FwaS9vZmZlci1saXN0JztcclxuXHJcbi8vIGNvbnRhY3RcclxuZXhwb3J0IGNvbnN0IGNvbnRhY3RMaXN0VXJsID0gYXBpRG9tYWluICsgJ2FwaS92MS9jb250YWN0LWxpc3QnO1xyXG5leHBvcnQgY29uc3QgZ2V0Q29udGFjdEJ5SWQgPSBhcGlEb21haW4gKyAnYXBpL3YxL2NvbnRhY3QtZ2V0JztcclxuZXhwb3J0IGNvbnN0IGFkZE5ld0NvbnRhY3QgPSBhcGlEb21haW4gKyAnYXBpL3YxL2NvbnRhY3QtYWRkJztcclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNvbnRhY3QgPSBhcGlEb21haW4gKyAnYXBpL3YxL2NvbnRhY3QtdXBkYXRlJztcclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbnRhY3QgPSBhcGlEb21haW4gKyAnYXBpL3YxL2NvbnRhY3QtZGVsZXRlJztcclxuXHJcbi8vIHBheW1lbXRcclxuZXhwb3J0IGNvbnN0IHBheW1lbnRSZWRzeXMgPSBhcGlEb21haW4gKyAnYXBpL3YxL3BheS1yZWRzeXMnO1xyXG5leHBvcnQgY29uc3QgcGF5bWVudFBheVBhbCA9IGFwaURvbWFpbiArICdhcGkvdjEvcGF5LXBheXBhbCc7XHJcbmV4cG9ydCBjb25zdCByZWRzeXMgPSAnaHR0cHM6Ly9zaXMucmVkc3lzLmVzL3Npcy9yZWFsaXphclBhZ28nO1xyXG5cclxuLy8gdGVzdFxyXG5leHBvcnQgY29uc3QgZ2V0VGVzdFVybCA9IGFwaURvbWFpbiArICdhcGkvdGVzdCc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SGVhZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gIC8vIGNvbnN0IHRva2VuRGF0YSA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoVXNlcicpKVxyXG5cclxuICBjb25zdCB0b2tlbkRhdGEgPSBnZXRTdHJpbmcoXCJhdXRoVXNlclwiKTtcclxuICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdG9rZW5EYXRhXHJcbiAgfVxyXG4gIHJldHVybiBoZWFkZXJzO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBAQXV0aG9yOiBDb2RlYWxzXHJcbiAqIEBEYXRlOiAgIDA2LTAzLTIwMjBcclxuICogQEVtYWlsOiAgaWFuQGNvZGVhbHMuZXNcclxuICogQExhc3QgbW9kaWZpZWQgYnk6ICAgQ29kZWFsc1xyXG4gKiBATGFzdCBtb2RpZmllZCB0aW1lOiAwNi0wMy0yMDIwXHJcbiAqIEBDb3B5cmlnaHQ6IENvZGVhbHNcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgY2xpZW50SWQgPSAnMic7XHJcbmV4cG9ydCBjb25zdCBjbGllbnRTZWNyZXQgPSAnWFlYSGJJMjNYTk43aWUxdDRneXA5Q2xxMDlsU0NFMzRkVldpUnVhOCc7XHJcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyohXFxyXFxuICogRm9udCBBd2Vzb21lIEZyZWUgNS40LjEgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb21cXHJcXG4gKiBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKVxcclxcbiAqL1xcclxcbiAuZmEtYWNjZXNzaWJsZS1pY29uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM2OFxcXCJ9LmZhLWFjY3Vzb2Z0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM2OVxcXCJ9LmZhLWFjcXVpc2l0aW9ucy1pbmNvcnBvcmF0ZWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNkFGXFxcIn0uZmEtYWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjQxXFxcIn0uZmEtYWRkcmVzcy1ib29rOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJCOVxcXCJ9LmZhLWFkZHJlc3MtY2FyZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQkJcXFwifS5mYS1hZGp1c3Q6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDQyXFxcIn0uZmEtYWRuOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE3MFxcXCJ9LmZhLWFkdmVyc2FsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM2QVxcXCJ9LmZhLWFmZmlsaWF0ZXRoZW1lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM2QlxcXCJ9LmZhLWFpci1mcmVzaGVuZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUQwXFxcIn0uZmEtYWxnb2xpYTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzNkNcXFwifS5mYS1hbGlnbi1jZW50ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDM3XFxcIn0uZmEtYWxpZ24tanVzdGlmeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMzlcXFwifS5mYS1hbGlnbi1sZWZ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAzNlxcXCJ9LmZhLWFsaWduLXJpZ2h0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAzOFxcXCJ9LmZhLWFsaXBheTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2NDJcXFwifS5mYS1hbGxlcmdpZXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDYxXFxcIn0uZmEtYW1hem9uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI3MFxcXCJ9LmZhLWFtYXpvbi1wYXk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDJDXFxcIn0uZmEtYW1idWxhbmNlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBGOVxcXCJ9LmZhLWFtZXJpY2FuLXNpZ24tbGFuZ3VhZ2UtaW50ZXJwcmV0aW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJBM1xcXCJ9LmZhLWFtaWxpYTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzNkRcXFwifS5mYS1hbmNob3I6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTNEXFxcIn0uZmEtYW5kcm9pZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxN0JcXFwifS5mYS1hbmdlbGxpc3Q6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjA5XFxcIn0uZmEtYW5nbGUtZG91YmxlLWRvd246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTAzXFxcIn0uZmEtYW5nbGUtZG91YmxlLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTAwXFxcIn0uZmEtYW5nbGUtZG91YmxlLXJpZ2h0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjEwMVxcXCJ9LmZhLWFuZ2xlLWRvdWJsZS11cDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMDJcXFwifS5mYS1hbmdsZS1kb3duOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjEwN1xcXCJ9LmZhLWFuZ2xlLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTA0XFxcIn0uZmEtYW5nbGUtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTA1XFxcIn0uZmEtYW5nbGUtdXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTA2XFxcIn0uZmEtYW5ncnk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTU2XFxcIn0uZmEtYW5ncnljcmVhdGl2ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzNkVcXFwifS5mYS1hbmd1bGFyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQyMFxcXCJ9LmZhLWFua2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjQ0XFxcIn0uZmEtYXBwLXN0b3JlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM2RlxcXCJ9LmZhLWFwcC1zdG9yZS1pb3M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzcwXFxcIn0uZmEtYXBwZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzcxXFxcIn0uZmEtYXBwbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTc5XFxcIn0uZmEtYXBwbGUtYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVEMVxcXCJ9LmZhLWFwcGxlLXBheTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MTVcXFwifS5mYS1hcmNoaXZlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE4N1xcXCJ9LmZhLWFyY2h3YXk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTU3XFxcIn0uZmEtYXJyb3ctYWx0LWNpcmNsZS1kb3duOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM1OFxcXCJ9LmZhLWFycm93LWFsdC1jaXJjbGUtbGVmdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzNTlcXFwifS5mYS1hcnJvdy1hbHQtY2lyY2xlLXJpZ2h0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM1QVxcXCJ9LmZhLWFycm93LWFsdC1jaXJjbGUtdXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzVCXFxcIn0uZmEtYXJyb3ctY2lyY2xlLWRvd246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEFCXFxcIn0uZmEtYXJyb3ctY2lyY2xlLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEE4XFxcIn0uZmEtYXJyb3ctY2lyY2xlLXJpZ2h0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBBOVxcXCJ9LmZhLWFycm93LWNpcmNsZS11cDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwQUFcXFwifS5mYS1hcnJvdy1kb3duOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA2M1xcXCJ9LmZhLWFycm93LWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDYwXFxcIn0uZmEtYXJyb3ctcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDYxXFxcIn0uZmEtYXJyb3ctdXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDYyXFxcIn0uZmEtYXJyb3dzLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwQjJcXFwifS5mYS1hcnJvd3MtYWx0LWg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzM3XFxcIn0uZmEtYXJyb3dzLWFsdC12OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjMzOFxcXCJ9LmZhLWFzc2lzdGl2ZS1saXN0ZW5pbmctc3lzdGVtczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQTJcXFwifS5mYS1hc3RlcmlzazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwNjlcXFwifS5mYS1hc3ltbWV0cmlrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM3MlxcXCJ9LmZhLWF0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFGQVxcXCJ9LmZhLWF0bGFzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU1OFxcXCJ9LmZhLWF0b206YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUQyXFxcIn0uZmEtYXVkaWJsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzNzNcXFwifS5mYS1hdWRpby1kZXNjcmlwdGlvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyOUVcXFwifS5mYS1hdXRvcHJlZml4ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDFDXFxcIn0uZmEtYXZpYW5leDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzNzRcXFwifS5mYS1hdmlhdG86YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDIxXFxcIn0uZmEtYXdhcmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTU5XFxcIn0uZmEtYXdzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM3NVxcXCJ9LmZhLWJhY2tzcGFjZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NUFcXFwifS5mYS1iYWNrd2FyZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwNEFcXFwifS5mYS1iYWxhbmNlLXNjYWxlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI0RVxcXCJ9LmZhLWJhbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwNUVcXFwifS5mYS1iYW5kLWFpZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0NjJcXFwifS5mYS1iYW5kY2FtcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyRDVcXFwifS5mYS1iYXJjb2RlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAyQVxcXCJ9LmZhLWJhcnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEM5XFxcIn0uZmEtYmFzZWJhbGwtYmFsbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MzNcXFwifS5mYS1iYXNrZXRiYWxsLWJhbGw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDM0XFxcIn0uZmEtYmF0aDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQ0RcXFwifS5mYS1iYXR0ZXJ5LWVtcHR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI0NFxcXCJ9LmZhLWJhdHRlcnktZnVsbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNDBcXFwifS5mYS1iYXR0ZXJ5LWhhbGY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjQyXFxcIn0uZmEtYmF0dGVyeS1xdWFydGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI0M1xcXCJ9LmZhLWJhdHRlcnktdGhyZWUtcXVhcnRlcnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjQxXFxcIn0uZmEtYmVkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIzNlxcXCJ9LmZhLWJlZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEZDXFxcIn0uZmEtYmVoYW5jZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQjRcXFwifS5mYS1iZWhhbmNlLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQjVcXFwifS5mYS1iZWxsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBGM1xcXCJ9LmZhLWJlbGwtc2xhc2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUY2XFxcIn0uZmEtYmV6aWVyLWN1cnZlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU1QlxcXCJ9LmZhLWJpYmxlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjY0N1xcXCJ9LmZhLWJpY3ljbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjA2XFxcIn0uZmEtYmltb2JqZWN0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM3OFxcXCJ9LmZhLWJpbm9jdWxhcnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUU1XFxcIn0uZmEtYmlydGhkYXktY2FrZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxRkRcXFwifS5mYS1iaXRidWNrZXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTcxXFxcIn0uZmEtYml0Y29pbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzNzlcXFwifS5mYS1iaXR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM3QVxcXCJ9LmZhLWJsYWNrLXRpZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyN0VcXFwifS5mYS1ibGFja2JlcnJ5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM3QlxcXCJ9LmZhLWJsZW5kZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTE3XFxcIn0uZmEtYmxlbmRlci1waG9uZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2QjZcXFwifS5mYS1ibGluZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyOURcXFwifS5mYS1ibG9nZ2VyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM3Q1xcXCJ9LmZhLWJsb2dnZXItYjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzN0RcXFwifS5mYS1ibHVldG9vdGg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjkzXFxcIn0uZmEtYmx1ZXRvb3RoLWI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjk0XFxcIn0uZmEtYm9sZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMzJcXFwifS5mYS1ib2x0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBFN1xcXCJ9LmZhLWJvbWI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUUyXFxcIn0uZmEtYm9uZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1RDdcXFwifS5mYS1ib25nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU1Q1xcXCJ9LmZhLWJvb2s6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDJEXFxcIn0uZmEtYm9vay1kZWFkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjZCN1xcXCJ9LmZhLWJvb2stb3BlbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MThcXFwifS5mYS1ib29rLXJlYWRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1REFcXFwifS5mYS1ib29rbWFyazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMkVcXFwifS5mYS1ib3dsaW5nLWJhbGw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDM2XFxcIn0uZmEtYm94OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ2NlxcXCJ9LmZhLWJveC1vcGVuOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ5RVxcXCJ9LmZhLWJveGVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ2OFxcXCJ9LmZhLWJyYWlsbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkExXFxcIn0uZmEtYnJhaW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNURDXFxcIn0uZmEtYnJpZWZjYXNlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBCMVxcXCJ9LmZhLWJyaWVmY2FzZS1tZWRpY2FsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ2OVxcXCJ9LmZhLWJyb2FkY2FzdC10b3dlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MTlcXFwifS5mYS1icm9vbTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MUFcXFwifS5mYS1icnVzaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NURcXFwifS5mYS1idGM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTVBXFxcIn0uZmEtYnVnOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE4OFxcXCJ9LmZhLWJ1aWxkaW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFBRFxcXCJ9LmZhLWJ1bGxob3JuOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBBMVxcXCJ9LmZhLWJ1bGxzZXllOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE0MFxcXCJ9LmZhLWJ1cm46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDZBXFxcIn0uZmEtYnVyb21vYmVsZXhwZXJ0ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzN0ZcXFwifS5mYS1idXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjA3XFxcIn0uZmEtYnVzLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NUVcXFwifS5mYS1idXNpbmVzcy10aW1lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjY0QVxcXCJ9LmZhLWJ1eXNlbGxhZHM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjBEXFxcIn0uZmEtY2FsY3VsYXRvcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxRUNcXFwifS5mYS1jYWxlbmRhcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMzNcXFwifS5mYS1jYWxlbmRhci1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDczXFxcIn0uZmEtY2FsZW5kYXItY2hlY2s6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjc0XFxcIn0uZmEtY2FsZW5kYXItbWludXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjcyXFxcIn0uZmEtY2FsZW5kYXItcGx1czpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNzFcXFwifS5mYS1jYWxlbmRhci10aW1lczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNzNcXFwifS5mYS1jYW1lcmE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDMwXFxcIn0uZmEtY2FtZXJhLXJldHJvOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA4M1xcXCJ9LmZhLWNhbXBncm91bmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNkJCXFxcIn0uZmEtY2FubmFiaXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTVGXFxcIn0uZmEtY2Fwc3VsZXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDZCXFxcIn0uZmEtY2FyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFCOVxcXCJ9LmZhLWNhci1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNURFXFxcIn0uZmEtY2FyLWJhdHRlcnk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNURGXFxcIn0uZmEtY2FyLWNyYXNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVFMVxcXCJ9LmZhLWNhci1zaWRlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVFNFxcXCJ9LmZhLWNhcmV0LWRvd246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEQ3XFxcIn0uZmEtY2FyZXQtbGVmdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwRDlcXFwifS5mYS1jYXJldC1yaWdodDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwREFcXFwifS5mYS1jYXJldC1zcXVhcmUtZG93bjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxNTBcXFwifS5mYS1jYXJldC1zcXVhcmUtbGVmdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxOTFcXFwifS5mYS1jYXJldC1zcXVhcmUtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTUyXFxcIn0uZmEtY2FyZXQtc3F1YXJlLXVwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE1MVxcXCJ9LmZhLWNhcmV0LXVwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBEOFxcXCJ9LmZhLWNhcnQtYXJyb3ctZG93bjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMThcXFwifS5mYS1jYXJ0LXBsdXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjE3XFxcIn0uZmEtY2F0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjZCRVxcXCJ9LmZhLWNjLWFtYXpvbi1wYXk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDJEXFxcIn0uZmEtY2MtYW1leDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxRjNcXFwifS5mYS1jYy1hcHBsZS1wYXk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDE2XFxcIn0uZmEtY2MtZGluZXJzLWNsdWI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjRDXFxcIn0uZmEtY2MtZGlzY292ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUYyXFxcIn0uZmEtY2MtamNiOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI0QlxcXCJ9LmZhLWNjLW1hc3RlcmNhcmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUYxXFxcIn0uZmEtY2MtcGF5cGFsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFGNFxcXCJ9LmZhLWNjLXN0cmlwZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxRjVcXFwifS5mYS1jYy12aXNhOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFGMFxcXCJ9LmZhLWNlbnRlcmNvZGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzgwXFxcIn0uZmEtY2VydGlmaWNhdGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEEzXFxcIn0uZmEtY2hhaXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNkMwXFxcIn0uZmEtY2hhbGtib2FyZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MUJcXFwifS5mYS1jaGFsa2JvYXJkLXRlYWNoZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTFDXFxcIn0uZmEtY2hhcmdpbmctc3RhdGlvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1RTdcXFwifS5mYS1jaGFydC1hcmVhOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFGRVxcXCJ9LmZhLWNoYXJ0LWJhcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwODBcXFwifS5mYS1jaGFydC1saW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIwMVxcXCJ9LmZhLWNoYXJ0LXBpZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMDBcXFwifS5mYS1jaGVjazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMENcXFwifS5mYS1jaGVjay1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDU4XFxcIn0uZmEtY2hlY2stZG91YmxlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU2MFxcXCJ9LmZhLWNoZWNrLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxNEFcXFwifS5mYS1jaGVzczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MzlcXFwifS5mYS1jaGVzcy1iaXNob3A6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDNBXFxcIn0uZmEtY2hlc3MtYm9hcmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDNDXFxcIn0uZmEtY2hlc3Mta2luZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0M0ZcXFwifS5mYS1jaGVzcy1rbmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDQxXFxcIn0uZmEtY2hlc3MtcGF3bjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0NDNcXFwifS5mYS1jaGVzcy1xdWVlbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0NDVcXFwifS5mYS1jaGVzcy1yb29rOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ0N1xcXCJ9LmZhLWNoZXZyb24tY2lyY2xlLWRvd246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTNBXFxcIn0uZmEtY2hldnJvbi1jaXJjbGUtbGVmdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMzdcXFwifS5mYS1jaGV2cm9uLWNpcmNsZS1yaWdodDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMzhcXFwifS5mYS1jaGV2cm9uLWNpcmNsZS11cDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMzlcXFwifS5mYS1jaGV2cm9uLWRvd246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDc4XFxcIn0uZmEtY2hldnJvbi1sZWZ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA1M1xcXCJ9LmZhLWNoZXZyb24tcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDU0XFxcIn0uZmEtY2hldnJvbi11cDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwNzdcXFwifS5mYS1jaGlsZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQUVcXFwifS5mYS1jaHJvbWU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjY4XFxcIn0uZmEtY2h1cmNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUxRFxcXCJ9LmZhLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMTFcXFwifS5mYS1jaXJjbGUtbm90Y2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUNFXFxcIn0uZmEtY2l0eTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2NEZcXFwifS5mYS1jbGlwYm9hcmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzI4XFxcIn0uZmEtY2xpcGJvYXJkLWNoZWNrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ2Q1xcXCJ9LmZhLWNsaXBib2FyZC1saXN0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ2RFxcXCJ9LmZhLWNsb2NrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAxN1xcXCJ9LmZhLWNsb25lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI0RFxcXCJ9LmZhLWNsb3NlZC1jYXB0aW9uaW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIwQVxcXCJ9LmZhLWNsb3VkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBDMlxcXCJ9LmZhLWNsb3VkLWRvd25sb2FkLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzODFcXFwifS5mYS1jbG91ZC1tb29uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjZDM1xcXCJ9LmZhLWNsb3VkLXN1bjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2QzRcXFwifS5mYS1jbG91ZC11cGxvYWQtYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM4MlxcXCJ9LmZhLWNsb3Vkc2NhbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzgzXFxcIn0uZmEtY2xvdWRzbWl0aDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzODRcXFwifS5mYS1jbG91ZHZlcnNpZnk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzg1XFxcIn0uZmEtY29ja3RhaWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTYxXFxcIn0uZmEtY29kZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMjFcXFwifS5mYS1jb2RlLWJyYW5jaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMjZcXFwifS5mYS1jb2RlcGVuOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFDQlxcXCJ9LmZhLWNvZGllcGllOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI4NFxcXCJ9LmZhLWNvZmZlZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwRjRcXFwifS5mYS1jb2c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDEzXFxcIn0uZmEtY29nczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwODVcXFwifS5mYS1jb2luczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MUVcXFwifS5mYS1jb2x1bW5zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBEQlxcXCJ9LmZhLWNvbW1lbnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDc1XFxcIn0uZmEtY29tbWVudC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjdBXFxcIn0uZmEtY29tbWVudC1kb2xsYXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjUxXFxcIn0uZmEtY29tbWVudC1kb3RzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRBRFxcXCJ9LmZhLWNvbW1lbnQtc2xhc2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEIzXFxcIn0uZmEtY29tbWVudHM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDg2XFxcIn0uZmEtY29tbWVudHMtZG9sbGFyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjY1M1xcXCJ9LmZhLWNvbXBhY3QtZGlzYzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MUZcXFwifS5mYS1jb21wYXNzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE0RVxcXCJ9LmZhLWNvbXByZXNzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA2NlxcXCJ9LmZhLWNvbmNpZXJnZS1iZWxsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU2MlxcXCJ9LmZhLWNvbm5lY3RkZXZlbG9wOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIwRVxcXCJ9LmZhLWNvbnRhbzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNkRcXFwifS5mYS1jb29raWU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTYzXFxcIn0uZmEtY29va2llLWJpdGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTY0XFxcIn0uZmEtY29weTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwQzVcXFwifS5mYS1jb3B5cmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUY5XFxcIn0uZmEtY291Y2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEI4XFxcIn0uZmEtY3BhbmVsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM4OFxcXCJ9LmZhLWNyZWF0aXZlLWNvbW1vbnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjVFXFxcIn0uZmEtY3JlYXRpdmUtY29tbW9ucy1ieTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0RTdcXFwifS5mYS1jcmVhdGl2ZS1jb21tb25zLW5jOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRFOFxcXCJ9LmZhLWNyZWF0aXZlLWNvbW1vbnMtbmMtZXU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEU5XFxcIn0uZmEtY3JlYXRpdmUtY29tbW9ucy1uYy1qcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0RUFcXFwifS5mYS1jcmVhdGl2ZS1jb21tb25zLW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRFQlxcXCJ9LmZhLWNyZWF0aXZlLWNvbW1vbnMtcGQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEVDXFxcIn0uZmEtY3JlYXRpdmUtY29tbW9ucy1wZC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEVEXFxcIn0uZmEtY3JlYXRpdmUtY29tbW9ucy1yZW1peDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0RUVcXFwifS5mYS1jcmVhdGl2ZS1jb21tb25zLXNhOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRFRlxcXCJ9LmZhLWNyZWF0aXZlLWNvbW1vbnMtc2FtcGxpbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEYwXFxcIn0uZmEtY3JlYXRpdmUtY29tbW9ucy1zYW1wbGluZy1wbHVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRGMVxcXCJ9LmZhLWNyZWF0aXZlLWNvbW1vbnMtc2hhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEYyXFxcIn0uZmEtY3JlYXRpdmUtY29tbW9ucy16ZXJvOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRGM1xcXCJ9LmZhLWNyZWRpdC1jYXJkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA5RFxcXCJ9LmZhLWNyaXRpY2FsLXJvbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNkM5XFxcIn0uZmEtY3JvcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMjVcXFwifS5mYS1jcm9wLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NjVcXFwifS5mYS1jcm9zczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2NTRcXFwifS5mYS1jcm9zc2hhaXJzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA1QlxcXCJ9LmZhLWNyb3c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTIwXFxcIn0uZmEtY3Jvd246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTIxXFxcIn0uZmEtY3NzMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxM0NcXFwifS5mYS1jc3MzLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzOEJcXFwifS5mYS1jdWJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFCMlxcXCJ9LmZhLWN1YmVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFCM1xcXCJ9LmZhLWN1dDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwQzRcXFwifS5mYS1jdXR0bGVmaXNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM4Q1xcXCJ9LmZhLWQtYW5kLWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzhEXFxcIn0uZmEtZGFzaGN1YmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjEwXFxcIn0uZmEtZGF0YWJhc2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUMwXFxcIn0uZmEtZGVhZjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQTRcXFwifS5mYS1kZWxpY2lvdXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUE1XFxcIn0uZmEtZGVwbG95ZG9nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM4RVxcXCJ9LmZhLWRlc2twcm86YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzhGXFxcIn0uZmEtZGVza3RvcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMDhcXFwifS5mYS1kZXY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNkNDXFxcIn0uZmEtZGV2aWFudGFydDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQkRcXFwifS5mYS1kaGFybWFjaGFrcmE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjU1XFxcIn0uZmEtZGlhZ25vc2VzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ3MFxcXCJ9LmZhLWRpY2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTIyXFxcIn0uZmEtZGljZS1kMjA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNkNGXFxcIn0uZmEtZGljZS1kNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2RDFcXFwifS5mYS1kaWNlLWZpdmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTIzXFxcIn0uZmEtZGljZS1mb3VyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUyNFxcXCJ9LmZhLWRpY2Utb25lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUyNVxcXCJ9LmZhLWRpY2Utc2l4OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUyNlxcXCJ9LmZhLWRpY2UtdGhyZWU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTI3XFxcIn0uZmEtZGljZS10d286YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTI4XFxcIn0uZmEtZGlnZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQTZcXFwifS5mYS1kaWdpdGFsLW9jZWFuOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM5MVxcXCJ9LmZhLWRpZ2l0YWwtdGFjaG9ncmFwaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NjZcXFwifS5mYS1kaXJlY3Rpb25zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVFQlxcXCJ9LmZhLWRpc2NvcmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzkyXFxcIn0uZmEtZGlzY291cnNlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM5M1xcXCJ9LmZhLWRpdmlkZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MjlcXFwifS5mYS1kaXp6eTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NjdcXFwifS5mYS1kbmE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDcxXFxcIn0uZmEtZG9jaHViOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM5NFxcXCJ9LmZhLWRvY2tlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzOTVcXFwifS5mYS1kb2c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNkQzXFxcIn0uZmEtZG9sbGFyLXNpZ246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTU1XFxcIn0uZmEtZG9sbHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDcyXFxcIn0uZmEtZG9sbHktZmxhdGJlZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0NzRcXFwifS5mYS1kb25hdGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEI5XFxcIn0uZmEtZG9vci1jbG9zZWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTJBXFxcIn0uZmEtZG9vci1vcGVuOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUyQlxcXCJ9LmZhLWRvdC1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTkyXFxcIn0uZmEtZG92ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0QkFcXFwifS5mYS1kb3dubG9hZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMTlcXFwifS5mYS1kcmFmdDJkaWdpdGFsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM5NlxcXCJ9LmZhLWRyYWZ0aW5nLWNvbXBhc3M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTY4XFxcIn0uZmEtZHJhZ29uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjZENVxcXCJ9LmZhLWRyYXctcG9seWdvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1RUVcXFwifS5mYS1kcmliYmJsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxN0RcXFwifS5mYS1kcmliYmJsZS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzk3XFxcIn0uZmEtZHJvcGJveDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxNkJcXFwifS5mYS1kcnVtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU2OVxcXCJ9LmZhLWRydW0tc3RlZWxwYW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTZBXFxcIn0uZmEtZHJ1bXN0aWNrLWJpdGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNkQ3XFxcIn0uZmEtZHJ1cGFsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFBOVxcXCJ9LmZhLWR1bWJiZWxsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ0QlxcXCJ9LmZhLWR1bmdlb246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNkQ5XFxcIn0uZmEtZHlhbG9nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM5OVxcXCJ9LmZhLWVhcmx5YmlyZHM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzlBXFxcIn0uZmEtZWJheTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0RjRcXFwifS5mYS1lZGdlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI4MlxcXCJ9LmZhLWVkaXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDQ0XFxcIn0uZmEtZWplY3Q6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDUyXFxcIn0uZmEtZWxlbWVudG9yOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQzMFxcXCJ9LmZhLWVsbGlwc2lzLWg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTQxXFxcIn0uZmEtZWxsaXBzaXMtdjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxNDJcXFwifS5mYS1lbGxvOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVGMVxcXCJ9LmZhLWVtYmVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQyM1xcXCJ9LmZhLWVtcGlyZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxRDFcXFwifS5mYS1lbnZlbG9wZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwRTBcXFwifS5mYS1lbnZlbG9wZS1vcGVuOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJCNlxcXCJ9LmZhLWVudmVsb3BlLW9wZW4tdGV4dDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2NThcXFwifS5mYS1lbnZlbG9wZS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTk5XFxcIn0uZmEtZW52aXJhOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI5OVxcXCJ9LmZhLWVxdWFsczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MkNcXFwifS5mYS1lcmFzZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTJEXFxcIn0uZmEtZXJsYW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM5RFxcXCJ9LmZhLWV0aGVyZXVtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQyRVxcXCJ9LmZhLWV0c3k6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkQ3XFxcIn0uZmEtZXVyby1zaWduOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE1M1xcXCJ9LmZhLWV4Y2hhbmdlLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzNjJcXFwifS5mYS1leGNsYW1hdGlvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMkFcXFwifS5mYS1leGNsYW1hdGlvbi1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDZBXFxcIn0uZmEtZXhjbGFtYXRpb24tdHJpYW5nbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDcxXFxcIn0uZmEtZXhwYW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA2NVxcXCJ9LmZhLWV4cGFuZC1hcnJvd3MtYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjMxRVxcXCJ9LmZhLWV4cGVkaXRlZHNzbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyM0VcXFwifS5mYS1leHRlcm5hbC1saW5rLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzNURcXFwifS5mYS1leHRlcm5hbC1saW5rLXNxdWFyZS1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzYwXFxcIn0uZmEtZXllOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA2RVxcXCJ9LmZhLWV5ZS1kcm9wcGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFGQlxcXCJ9LmZhLWV5ZS1zbGFzaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwNzBcXFwifS5mYS1mYWNlYm9vazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwOUFcXFwifS5mYS1mYWNlYm9vay1mOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM5RVxcXCJ9LmZhLWZhY2Vib29rLW1lc3NlbmdlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzOUZcXFwifS5mYS1mYWNlYm9vay1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDgyXFxcIn0uZmEtZmFudGFzeS1mbGlnaHQtZ2FtZXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNkRDXFxcIn0uZmEtZmFzdC1iYWNrd2FyZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwNDlcXFwifS5mYS1mYXN0LWZvcndhcmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDUwXFxcIn0uZmEtZmF4OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFBQ1xcXCJ9LmZhLWZlYXRoZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTJEXFxcIn0uZmEtZmVhdGhlci1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTZCXFxcIn0uZmEtZmVtYWxlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE4MlxcXCJ9LmZhLWZpZ2h0ZXItamV0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBGQlxcXCJ9LmZhLWZpbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTVCXFxcIn0uZmEtZmlsZS1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTVDXFxcIn0uZmEtZmlsZS1hcmNoaXZlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFDNlxcXCJ9LmZhLWZpbGUtYXVkaW86YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUM3XFxcIn0uZmEtZmlsZS1jb2RlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFDOVxcXCJ9LmZhLWZpbGUtY29udHJhY3Q6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTZDXFxcIn0uZmEtZmlsZS1jc3Y6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNkREXFxcIn0uZmEtZmlsZS1kb3dubG9hZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NkRcXFwifS5mYS1maWxlLWV4Y2VsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFDM1xcXCJ9LmZhLWZpbGUtZXhwb3J0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU2RVxcXCJ9LmZhLWZpbGUtaW1hZ2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUM1XFxcIn0uZmEtZmlsZS1pbXBvcnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTZGXFxcIn0uZmEtZmlsZS1pbnZvaWNlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU3MFxcXCJ9LmZhLWZpbGUtaW52b2ljZS1kb2xsYXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTcxXFxcIn0uZmEtZmlsZS1tZWRpY2FsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ3N1xcXCJ9LmZhLWZpbGUtbWVkaWNhbC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDc4XFxcIn0uZmEtZmlsZS1wZGY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUMxXFxcIn0uZmEtZmlsZS1wb3dlcnBvaW50OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFDNFxcXCJ9LmZhLWZpbGUtcHJlc2NyaXB0aW9uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU3MlxcXCJ9LmZhLWZpbGUtc2lnbmF0dXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU3M1xcXCJ9LmZhLWZpbGUtdXBsb2FkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU3NFxcXCJ9LmZhLWZpbGUtdmlkZW86YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUM4XFxcIn0uZmEtZmlsZS13b3JkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFDMlxcXCJ9LmZhLWZpbGw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTc1XFxcIn0uZmEtZmlsbC1kcmlwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU3NlxcXCJ9LmZhLWZpbG06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDA4XFxcIn0uZmEtZmlsdGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBCMFxcXCJ9LmZhLWZpbmdlcnByaW50OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU3N1xcXCJ9LmZhLWZpcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDZEXFxcIn0uZmEtZmlyZS1leHRpbmd1aXNoZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTM0XFxcIn0uZmEtZmlyZWZveDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNjlcXFwifS5mYS1maXJzdC1haWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDc5XFxcIn0uZmEtZmlyc3Qtb3JkZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkIwXFxcIn0uZmEtZmlyc3Qtb3JkZXItYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUwQVxcXCJ9LmZhLWZpcnN0ZHJhZnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0ExXFxcIn0uZmEtZmlzaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NzhcXFwifS5mYS1maXN0LXJhaXNlZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2REVcXFwifS5mYS1mbGFnOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAyNFxcXCJ9LmZhLWZsYWctY2hlY2tlcmVkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjExRVxcXCJ9LmZhLWZsYXNrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBDM1xcXCJ9LmZhLWZsaWNrcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxNkVcXFwifS5mYS1mbGlwYm9hcmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDREXFxcIn0uZmEtZmx1c2hlZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NzlcXFwifS5mYS1mbHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDE3XFxcIn0uZmEtZm9sZGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA3QlxcXCJ9LmZhLWZvbGRlci1taW51czpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2NURcXFwifS5mYS1mb2xkZXItb3BlbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwN0NcXFwifS5mYS1mb2xkZXItcGx1czpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2NUVcXFwifS5mYS1mb250OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAzMVxcXCJ9LmZhLWZvbnQtYXdlc29tZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQjRcXFwifS5mYS1mb250LWF3ZXNvbWUtYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjM1Q1xcXCJ9LmZhLWZvbnQtYXdlc29tZS1mbGFnOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQyNVxcXCJ9LmZhLWZvbnQtYXdlc29tZS1sb2dvLWZ1bGw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEU2XFxcIn0uZmEtZm9udGljb25zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI4MFxcXCJ9LmZhLWZvbnRpY29ucy1maTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQTJcXFwifS5mYS1mb290YmFsbC1iYWxsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ0RVxcXCJ9LmZhLWZvcnQtYXdlc29tZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyODZcXFwifS5mYS1mb3J0LWF3ZXNvbWUtYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNBM1xcXCJ9LmZhLWZvcnVtYmVlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIxMVxcXCJ9LmZhLWZvcndhcmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDRFXFxcIn0uZmEtZm91cnNxdWFyZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxODBcXFwifS5mYS1mcmVlLWNvZGUtY2FtcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQzVcXFwifS5mYS1mcmVlYnNkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNBNFxcXCJ9LmZhLWZyb2c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTJFXFxcIn0uZmEtZnJvd246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTE5XFxcIn0uZmEtZnJvd24tb3BlbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1N0FcXFwifS5mYS1mdWxjcnVtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUwQlxcXCJ9LmZhLWZ1bm5lbC1kb2xsYXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjYyXFxcIn0uZmEtZnV0Ym9sOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFFM1xcXCJ9LmZhLWdhbGFjdGljLXJlcHVibGljOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUwQ1xcXCJ9LmZhLWdhbGFjdGljLXNlbmF0ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MERcXFwifS5mYS1nYW1lcGFkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjExQlxcXCJ9LmZhLWdhcy1wdW1wOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUyRlxcXCJ9LmZhLWdhdmVsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBFM1xcXCJ9LmZhLWdlbTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQTVcXFwifS5mYS1nZW5kZXJsZXNzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIyRFxcXCJ9LmZhLWdldC1wb2NrZXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjY1XFxcIn0uZmEtZ2c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjYwXFxcIn0uZmEtZ2ctY2lyY2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI2MVxcXCJ9LmZhLWdob3N0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjZFMlxcXCJ9LmZhLWdpZnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDZCXFxcIn0uZmEtZ2l0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFEM1xcXCJ9LmZhLWdpdC1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUQyXFxcIn0uZmEtZ2l0aHViOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA5QlxcXCJ9LmZhLWdpdGh1Yi1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTEzXFxcIn0uZmEtZ2l0aHViLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwOTJcXFwifS5mYS1naXRrcmFrZW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0E2XFxcIn0uZmEtZ2l0bGFiOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI5NlxcXCJ9LmZhLWdpdHRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MjZcXFwifS5mYS1nbGFzcy1tYXJ0aW5pOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAwMFxcXCJ9LmZhLWdsYXNzLW1hcnRpbmktYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU3QlxcXCJ9LmZhLWdsYXNzZXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTMwXFxcIn0uZmEtZ2xpZGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkE1XFxcIn0uZmEtZ2xpZGUtZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQTZcXFwifS5mYS1nbG9iZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwQUNcXFwifS5mYS1nbG9iZS1hZnJpY2E6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTdDXFxcIn0uZmEtZ2xvYmUtYW1lcmljYXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTdEXFxcIn0uZmEtZ2xvYmUtYXNpYTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1N0VcXFwifS5mYS1nb2ZvcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0E3XFxcIn0uZmEtZ29sZi1iYWxsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ1MFxcXCJ9LmZhLWdvb2RyZWFkczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQThcXFwifS5mYS1nb29kcmVhZHMtZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQTlcXFwifS5mYS1nb29nbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUEwXFxcIn0uZmEtZ29vZ2xlLWRyaXZlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNBQVxcXCJ9LmZhLWdvb2dsZS1wbGF5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNBQlxcXCJ9LmZhLWdvb2dsZS1wbHVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJCM1xcXCJ9LmZhLWdvb2dsZS1wbHVzLWc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEQ1XFxcIn0uZmEtZ29vZ2xlLXBsdXMtc3F1YXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBENFxcXCJ9LmZhLWdvb2dsZS13YWxsZXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUVFXFxcIn0uZmEtZ29wdXJhbTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2NjRcXFwifS5mYS1ncmFkdWF0aW9uLWNhcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxOURcXFwifS5mYS1ncmF0aXBheTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxODRcXFwifS5mYS1ncmF2OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJENlxcXCJ9LmZhLWdyZWF0ZXItdGhhbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MzFcXFwifS5mYS1ncmVhdGVyLXRoYW4tZXF1YWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTMyXFxcIn0uZmEtZ3JpbWFjZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1N0ZcXFwifS5mYS1ncmluOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU4MFxcXCJ9LmZhLWdyaW4tYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU4MVxcXCJ9LmZhLWdyaW4tYmVhbTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1ODJcXFwifS5mYS1ncmluLWJlYW0tc3dlYXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTgzXFxcIn0uZmEtZ3Jpbi1oZWFydHM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTg0XFxcIn0uZmEtZ3Jpbi1zcXVpbnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTg1XFxcIn0uZmEtZ3Jpbi1zcXVpbnQtdGVhcnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTg2XFxcIn0uZmEtZ3Jpbi1zdGFyczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1ODdcXFwifS5mYS1ncmluLXRlYXJzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU4OFxcXCJ9LmZhLWdyaW4tdG9uZ3VlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU4OVxcXCJ9LmZhLWdyaW4tdG9uZ3VlLXNxdWludDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1OEFcXFwifS5mYS1ncmluLXRvbmd1ZS13aW5rOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU4QlxcXCJ9LmZhLWdyaW4td2luazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1OENcXFwifS5mYS1ncmlwLWhvcml6b250YWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNThEXFxcIn0uZmEtZ3JpcC12ZXJ0aWNhbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1OEVcXFwifS5mYS1ncmlwZmlyZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQUNcXFwifS5mYS1ncnVudDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQURcXFwifS5mYS1ndWxwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNBRVxcXCJ9LmZhLWgtc3F1YXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBGRFxcXCJ9LmZhLWhhY2tlci1uZXdzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFENFxcXCJ9LmZhLWhhY2tlci1uZXdzLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQUZcXFwifS5mYS1oYWNrZXJyYW5rOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVGN1xcXCJ9LmZhLWhhbW1lcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2RTNcXFwifS5mYS1oYW1zYTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2NjVcXFwifS5mYS1oYW5kLWhvbGRpbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEJEXFxcIn0uZmEtaGFuZC1ob2xkaW5nLWhlYXJ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRCRVxcXCJ9LmZhLWhhbmQtaG9sZGluZy11c2Q6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEMwXFxcIn0uZmEtaGFuZC1saXphcmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjU4XFxcIn0uZmEtaGFuZC1wYXBlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNTZcXFwifS5mYS1oYW5kLXBlYWNlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI1QlxcXCJ9LmZhLWhhbmQtcG9pbnQtZG93bjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwQTdcXFwifS5mYS1oYW5kLXBvaW50LWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEE1XFxcIn0uZmEtaGFuZC1wb2ludC1yaWdodDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwQTRcXFwifS5mYS1oYW5kLXBvaW50LXVwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBBNlxcXCJ9LmZhLWhhbmQtcG9pbnRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNUFcXFwifS5mYS1oYW5kLXJvY2s6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjU1XFxcIn0uZmEtaGFuZC1zY2lzc29yczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNTdcXFwifS5mYS1oYW5kLXNwb2NrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI1OVxcXCJ9LmZhLWhhbmRzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRDMlxcXCJ9LmZhLWhhbmRzLWhlbHBpbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEM0XFxcIn0uZmEtaGFuZHNoYWtlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJCNVxcXCJ9LmZhLWhhbnVraWFoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjZFNlxcXCJ9LmZhLWhhc2h0YWc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjkyXFxcIn0uZmEtaGF0LXdpemFyZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2RThcXFwifS5mYS1oYXlrYWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjY2XFxcIn0uZmEtaGRkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBBMFxcXCJ9LmZhLWhlYWRpbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMURDXFxcIn0uZmEtaGVhZHBob25lczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMjVcXFwifS5mYS1oZWFkcGhvbmVzLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1OEZcXFwifS5mYS1oZWFkc2V0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU5MFxcXCJ9LmZhLWhlYXJ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAwNFxcXCJ9LmZhLWhlYXJ0YmVhdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMUVcXFwifS5mYS1oZWxpY29wdGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUzM1xcXCJ9LmZhLWhpZ2hsaWdodGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU5MVxcXCJ9LmZhLWhpa2luZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2RUNcXFwifS5mYS1oaXBwbzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2RURcXFwifS5mYS1oaXBzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ1MlxcXCJ9LmZhLWhpcmUtYS1oZWxwZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0IwXFxcIn0uZmEtaGlzdG9yeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxREFcXFwifS5mYS1ob2NrZXktcHVjazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0NTNcXFwifS5mYS1ob21lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAxNVxcXCJ9LmZhLWhvb2xpOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQyN1xcXCJ9LmZhLWhvcm5iaWxsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU5MlxcXCJ9LmZhLWhvcnNlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjZGMFxcXCJ9LmZhLWhvc3BpdGFsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBGOFxcXCJ9LmZhLWhvc3BpdGFsLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0N0RcXFwifS5mYS1ob3NwaXRhbC1zeW1ib2w6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDdFXFxcIn0uZmEtaG90LXR1YjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1OTNcXFwifS5mYS1ob3RlbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1OTRcXFwifS5mYS1ob3RqYXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0IxXFxcIn0uZmEtaG91cmdsYXNzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI1NFxcXCJ9LmZhLWhvdXJnbGFzcy1lbmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjUzXFxcIn0uZmEtaG91cmdsYXNzLWhhbGY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjUyXFxcIn0uZmEtaG91cmdsYXNzLXN0YXJ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI1MVxcXCJ9LmZhLWhvdXNlLWRhbWFnZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2RjFcXFwifS5mYS1ob3V6ejpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyN0NcXFwifS5mYS1ocnl2bmlhOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjZGMlxcXCJ9LmZhLWh0bWw1OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjEzQlxcXCJ9LmZhLWh1YnNwb3Q6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0IyXFxcIn0uZmEtaS1jdXJzb3I6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjQ2XFxcIn0uZmEtaWQtYmFkZ2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkMxXFxcIn0uZmEtaWQtY2FyZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQzJcXFwifS5mYS1pZC1jYXJkLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0N0ZcXFwifS5mYS1pbWFnZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwM0VcXFwifS5mYS1pbWFnZXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzAyXFxcIn0uZmEtaW1kYjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyRDhcXFwifS5mYS1pbmJveDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMUNcXFwifS5mYS1pbmRlbnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDNDXFxcIn0uZmEtaW5kdXN0cnk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjc1XFxcIn0uZmEtaW5maW5pdHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTM0XFxcIn0uZmEtaW5mbzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMjlcXFwifS5mYS1pbmZvLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwNUFcXFwifS5mYS1pbnN0YWdyYW06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTZEXFxcIn0uZmEtaW50ZXJuZXQtZXhwbG9yZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjZCXFxcIn0uZmEtaW94aG9zdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMDhcXFwifS5mYS1pdGFsaWM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDMzXFxcIn0uZmEtaXR1bmVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNCNFxcXCJ9LmZhLWl0dW5lcy1ub3RlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNCNVxcXCJ9LmZhLWphdmE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEU0XFxcIn0uZmEtamVkaTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2NjlcXFwifS5mYS1qZWRpLW9yZGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUwRVxcXCJ9LmZhLWplbmtpbnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0I2XFxcIn0uZmEtam9nZXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0I3XFxcIn0uZmEtam9pbnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTk1XFxcIn0uZmEtam9vbWxhOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFBQVxcXCJ9LmZhLWpvdXJuYWwtd2hpbGxzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjY2QVxcXCJ9LmZhLWpzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNCOFxcXCJ9LmZhLWpzLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQjlcXFwifS5mYS1qc2ZpZGRsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQ0NcXFwifS5mYS1rYWFiYTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2NkJcXFwifS5mYS1rYWdnbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUZBXFxcIn0uZmEta2V5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA4NFxcXCJ9LmZhLWtleWJhc2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEY1XFxcIn0uZmEta2V5Ym9hcmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTFDXFxcIn0uZmEta2V5Y2RuOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNCQVxcXCJ9LmZhLWtoYW5kYTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2NkRcXFwifS5mYS1raWNrc3RhcnRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQkJcXFwifS5mYS1raWNrc3RhcnRlci1rOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNCQ1xcXCJ9LmZhLWtpc3M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTk2XFxcIn0uZmEta2lzcy1iZWFtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU5N1xcXCJ9LmZhLWtpc3Mtd2luay1oZWFydDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1OThcXFwifS5mYS1raXdpLWJpcmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTM1XFxcIn0uZmEta29ydnVlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQyRlxcXCJ9LmZhLWxhbmRtYXJrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjY2RlxcXCJ9LmZhLWxhbmd1YWdlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFBQlxcXCJ9LmZhLWxhcHRvcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMDlcXFwifS5mYS1sYXB0b3AtY29kZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1RkNcXFwifS5mYS1sYXJhdmVsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNCRFxcXCJ9LmZhLWxhc3RmbTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMDJcXFwifS5mYS1sYXN0Zm0tc3F1YXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIwM1xcXCJ9LmZhLWxhdWdoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU5OVxcXCJ9LmZhLWxhdWdoLWJlYW06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTlBXFxcIn0uZmEtbGF1Z2gtc3F1aW50OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU5QlxcXCJ9LmZhLWxhdWdoLXdpbms6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTlDXFxcIn0uZmEtbGF5ZXItZ3JvdXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUZEXFxcIn0uZmEtbGVhZjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwNkNcXFwifS5mYS1sZWFucHViOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIxMlxcXCJ9LmZhLWxlbW9uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA5NFxcXCJ9LmZhLWxlc3M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDFEXFxcIn0uZmEtbGVzcy10aGFuOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUzNlxcXCJ9LmZhLWxlc3MtdGhhbi1lcXVhbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MzdcXFwifS5mYS1sZXZlbC1kb3duLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQkVcXFwifS5mYS1sZXZlbC11cC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0JGXFxcIn0uZmEtbGlmZS1yaW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFDRFxcXCJ9LmZhLWxpZ2h0YnVsYjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwRUJcXFwifS5mYS1saW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNDMFxcXCJ9LmZhLWxpbms6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEMxXFxcIn0uZmEtbGlua2VkaW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDhDXFxcIn0uZmEtbGlua2VkaW4taW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEUxXFxcIn0uZmEtbGlub2RlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJCOFxcXCJ9LmZhLWxpbnV4OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE3Q1xcXCJ9LmZhLWxpcmEtc2lnbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxOTVcXFwifS5mYS1saXN0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAzQVxcXCJ9LmZhLWxpc3QtYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAyMlxcXCJ9LmZhLWxpc3Qtb2w6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMENCXFxcIn0uZmEtbGlzdC11bDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwQ0FcXFwifS5mYS1sb2NhdGlvbi1hcnJvdzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMjRcXFwifS5mYS1sb2NrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAyM1xcXCJ9LmZhLWxvY2stb3BlbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQzFcXFwifS5mYS1sb25nLWFycm93LWFsdC1kb3duOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjMwOVxcXCJ9LmZhLWxvbmctYXJyb3ctYWx0LWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzBBXFxcIn0uZmEtbG9uZy1hcnJvdy1hbHQtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzBCXFxcIn0uZmEtbG9uZy1hcnJvdy1hbHQtdXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzBDXFxcIn0uZmEtbG93LXZpc2lvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQThcXFwifS5mYS1sdWdnYWdlLWNhcnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTlEXFxcIn0uZmEtbHlmdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQzNcXFwifS5mYS1tYWdlbnRvOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNDNFxcXCJ9LmZhLW1hZ2ljOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBEMFxcXCJ9LmZhLW1hZ25ldDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwNzZcXFwifS5mYS1tYWlsLWJ1bGs6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjc0XFxcIn0uZmEtbWFpbGNoaW1wOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU5RVxcXCJ9LmZhLW1hbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTgzXFxcIn0uZmEtbWFuZGFsb3JpYW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTBGXFxcIn0uZmEtbWFwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI3OVxcXCJ9LmZhLW1hcC1tYXJrZWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTlGXFxcIn0uZmEtbWFwLW1hcmtlZC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUEwXFxcIn0uZmEtbWFwLW1hcmtlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwNDFcXFwifS5mYS1tYXAtbWFya2VyLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQzVcXFwifS5mYS1tYXAtcGluOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI3NlxcXCJ9LmZhLW1hcC1zaWduczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNzdcXFwifS5mYS1tYXJrZG93bjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2MEZcXFwifS5mYS1tYXJrZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUExXFxcIn0uZmEtbWFyczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMjJcXFwifS5mYS1tYXJzLWRvdWJsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMjdcXFwifS5mYS1tYXJzLXN0cm9rZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMjlcXFwifS5mYS1tYXJzLXN0cm9rZS1oOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIyQlxcXCJ9LmZhLW1hcnMtc3Ryb2tlLXY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjJBXFxcIn0uZmEtbWFzazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2RkFcXFwifS5mYS1tYXN0b2RvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0RjZcXFwifS5mYS1tYXhjZG46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTM2XFxcIn0uZmEtbWVkYWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUEyXFxcIn0uZmEtbWVkYXBwczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQzZcXFwifS5mYS1tZWRpdW06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjNBXFxcIn0uZmEtbWVkaXVtLW06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0M3XFxcIn0uZmEtbWVka2l0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBGQVxcXCJ9LmZhLW1lZHJ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNDOFxcXCJ9LmZhLW1lZXR1cDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyRTBcXFwifS5mYS1tZWdhcG9ydDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1QTNcXFwifS5mYS1tZWg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTFBXFxcIn0uZmEtbWVoLWJsYW5rOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVBNFxcXCJ9LmZhLW1laC1yb2xsaW5nLWV5ZXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUE1XFxcIn0uZmEtbWVtb3J5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUzOFxcXCJ9LmZhLW1lbm9yYWg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjc2XFxcIn0uZmEtbWVyY3VyeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMjNcXFwifS5mYS1taWNyb2NoaXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkRCXFxcIn0uZmEtbWljcm9waG9uZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMzBcXFwifS5mYS1taWNyb3Bob25lLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQzlcXFwifS5mYS1taWNyb3Bob25lLWFsdC1zbGFzaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MzlcXFwifS5mYS1taWNyb3Bob25lLXNsYXNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjEzMVxcXCJ9LmZhLW1pY3Jvc2NvcGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjEwXFxcIn0uZmEtbWljcm9zb2Z0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNDQVxcXCJ9LmZhLW1pbnVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA2OFxcXCJ9LmZhLW1pbnVzLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwNTZcXFwifS5mYS1taW51cy1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTQ2XFxcIn0uZmEtbWl4OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNDQlxcXCJ9LmZhLW1peGNsb3VkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI4OVxcXCJ9LmZhLW1penVuaTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQ0NcXFwifS5mYS1tb2JpbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTBCXFxcIn0uZmEtbW9iaWxlLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzQ0RcXFwifS5mYS1tb2R4OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI4NVxcXCJ9LmZhLW1vbmVybzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzRDBcXFwifS5mYS1tb25leS1iaWxsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBENlxcXCJ9LmZhLW1vbmV5LWJpbGwtYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNEMVxcXCJ9LmZhLW1vbmV5LWJpbGwtd2F2ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1M0FcXFwifS5mYS1tb25leS1iaWxsLXdhdmUtYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUzQlxcXCJ9LmZhLW1vbmV5LWNoZWNrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUzQ1xcXCJ9LmZhLW1vbmV5LWNoZWNrLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1M0RcXFwifS5mYS1tb251bWVudDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1QTZcXFwifS5mYS1tb29uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE4NlxcXCJ9LmZhLW1vcnRhci1wZXN0bGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUE3XFxcIn0uZmEtbW9zcXVlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjY3OFxcXCJ9LmZhLW1vdG9yY3ljbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjFDXFxcIn0uZmEtbW91bnRhaW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNkZDXFxcIn0uZmEtbW91c2UtcG9pbnRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNDVcXFwifS5mYS1tdXNpYzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMDFcXFwifS5mYS1uYXBzdGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNEMlxcXCJ9LmZhLW5lb3M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjEyXFxcIn0uZmEtbmV0d29yay13aXJlZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2RkZcXFwifS5mYS1uZXV0ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjJDXFxcIn0uZmEtbmV3c3BhcGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFFQVxcXCJ9LmZhLW5pbWJscjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1QThcXFwifS5mYS1uaW50ZW5kby1zd2l0Y2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDE4XFxcIn0uZmEtbm9kZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MTlcXFwifS5mYS1ub2RlLWpzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNEM1xcXCJ9LmZhLW5vdC1lcXVhbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1M0VcXFwifS5mYS1ub3Rlcy1tZWRpY2FsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ4MVxcXCJ9LmZhLW5wbTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzRDRcXFwifS5mYS1uczg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0Q1XFxcIn0uZmEtbnV0cml0aW9uaXg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0Q2XFxcIn0uZmEtb2JqZWN0LWdyb3VwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI0N1xcXCJ9LmZhLW9iamVjdC11bmdyb3VwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI0OFxcXCJ9LmZhLW9kbm9rbGFzc25pa2k6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjYzXFxcIn0uZmEtb2Rub2tsYXNzbmlraS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjY0XFxcIn0uZmEtb2lsLWNhbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2MTNcXFwifS5mYS1vbGQtcmVwdWJsaWM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTEwXFxcIn0uZmEtb206YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjc5XFxcIn0uZmEtb3BlbmNhcnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjNEXFxcIn0uZmEtb3BlbmlkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE5QlxcXCJ9LmZhLW9wZXJhOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI2QVxcXCJ9LmZhLW9wdGluLW1vbnN0ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjNDXFxcIn0uZmEtb3NpOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQxQVxcXCJ9LmZhLW90dGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjcwMFxcXCJ9LmZhLW91dGRlbnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDNCXFxcIn0uZmEtcGFnZTQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0Q3XFxcIn0uZmEtcGFnZWxpbmVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE4Q1xcXCJ9LmZhLXBhaW50LWJydXNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFGQ1xcXCJ9LmZhLXBhaW50LXJvbGxlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1QUFcXFwifS5mYS1wYWxldHRlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUzRlxcXCJ9LmZhLXBhbGZlZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzRDhcXFwifS5mYS1wYWxsZXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDgyXFxcIn0uZmEtcGFwZXItcGxhbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUQ4XFxcIn0uZmEtcGFwZXJjbGlwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBDNlxcXCJ9LmZhLXBhcmFjaHV0ZS1ib3g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNENEXFxcIn0uZmEtcGFyYWdyYXBoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFERFxcXCJ9LmZhLXBhcmtpbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTQwXFxcIn0uZmEtcGFzc3BvcnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUFCXFxcIn0uZmEtcGFzdGFmYXJpYW5pc206YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjdCXFxcIn0uZmEtcGFzdGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEVBXFxcIn0uZmEtcGF0cmVvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzRDlcXFwifS5mYS1wYXVzZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwNENcXFwifS5mYS1wYXVzZS1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjhCXFxcIn0uZmEtcGF3OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFCMFxcXCJ9LmZhLXBheXBhbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxRURcXFwifS5mYS1wZWFjZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2N0NcXFwifS5mYS1wZW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzA0XFxcIn0uZmEtcGVuLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzMDVcXFwifS5mYS1wZW4tZmFuY3k6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUFDXFxcIn0uZmEtcGVuLW5pYjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1QURcXFwifS5mYS1wZW4tc3F1YXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE0QlxcXCJ9LmZhLXBlbmNpbC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMzAzXFxcIn0uZmEtcGVuY2lsLXJ1bGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVBRVxcXCJ9LmZhLXBlbm55LWFyY2FkZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY3MDRcXFwifS5mYS1wZW9wbGUtY2Fycnk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNENFXFxcIn0uZmEtcGVyY2VudDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyOTVcXFwifS5mYS1wZXJjZW50YWdlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU0MVxcXCJ9LmZhLXBlcmlzY29wZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzREFcXFwifS5mYS1waGFicmljYXRvcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzREJcXFwifS5mYS1waG9lbml4LWZyYW1ld29yazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzRENcXFwifS5mYS1waG9lbml4LXNxdWFkcm9uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUxMVxcXCJ9LmZhLXBob25lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA5NVxcXCJ9LmZhLXBob25lLXNsYXNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNERFxcXCJ9LmZhLXBob25lLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwOThcXFwifS5mYS1waG9uZS12b2x1bWU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkEwXFxcIn0uZmEtcGhwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ1N1xcXCJ9LmZhLXBpZWQtcGlwZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkFFXFxcIn0uZmEtcGllZC1waXBlci1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUE4XFxcIn0uZmEtcGllZC1waXBlci1oYXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEU1XFxcIn0uZmEtcGllZC1waXBlci1wcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQTdcXFwifS5mYS1waWdneS1iYW5rOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjREM1xcXCJ9LmZhLXBpbGxzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ4NFxcXCJ9LmZhLXBpbnRlcmVzdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwRDJcXFwifS5mYS1waW50ZXJlc3QtcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMzFcXFwifS5mYS1waW50ZXJlc3Qtc3F1YXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBEM1xcXCJ9LmZhLXBsYWNlLW9mLXdvcnNoaXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjdGXFxcIn0uZmEtcGxhbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDcyXFxcIn0uZmEtcGxhbmUtYXJyaXZhbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1QUZcXFwifS5mYS1wbGFuZS1kZXBhcnR1cmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUIwXFxcIn0uZmEtcGxheTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwNEJcXFwifS5mYS1wbGF5LWNpcmNsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxNDRcXFwifS5mYS1wbGF5c3RhdGlvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzREZcXFwifS5mYS1wbHVnOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFFNlxcXCJ9LmZhLXBsdXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDY3XFxcIn0uZmEtcGx1cy1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDU1XFxcIn0uZmEtcGx1cy1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEZFXFxcIn0uZmEtcG9kY2FzdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQ0VcXFwifS5mYS1wb2xsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjY4MVxcXCJ9LmZhLXBvbGwtaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2ODJcXFwifS5mYS1wb286YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkZFXFxcIn0uZmEtcG9vcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2MTlcXFwifS5mYS1wb3J0cmFpdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzRTBcXFwifS5mYS1wb3VuZC1zaWduOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE1NFxcXCJ9LmZhLXBvd2VyLW9mZjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMTFcXFwifS5mYS1wcmF5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjY4M1xcXCJ9LmZhLXByYXlpbmctaGFuZHM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjg0XFxcIn0uZmEtcHJlc2NyaXB0aW9uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVCMVxcXCJ9LmZhLXByZXNjcmlwdGlvbi1ib3R0bGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDg1XFxcIn0uZmEtcHJlc2NyaXB0aW9uLWJvdHRsZS1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDg2XFxcIn0uZmEtcHJpbnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDJGXFxcIn0uZmEtcHJvY2VkdXJlczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0ODdcXFwifS5mYS1wcm9kdWN0LWh1bnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjg4XFxcIn0uZmEtcHJvamVjdC1kaWFncmFtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU0MlxcXCJ9LmZhLXB1c2hlZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzRTFcXFwifS5mYS1wdXp6bGUtcGllY2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTJFXFxcIn0uZmEtcHl0aG9uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNFMlxcXCJ9LmZhLXFxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFENlxcXCJ9LmZhLXFyY29kZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMjlcXFwifS5mYS1xdWVzdGlvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMjhcXFwifS5mYS1xdWVzdGlvbi1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDU5XFxcIn0uZmEtcXVpZGRpdGNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ1OFxcXCJ9LmZhLXF1aW5zY2FwZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0NTlcXFwifS5mYS1xdW9yYTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQzRcXFwifS5mYS1xdW90ZS1sZWZ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjEwRFxcXCJ9LmZhLXF1b3RlLXJpZ2h0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjEwRVxcXCJ9LmZhLXF1cmFuOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjY4N1xcXCJ9LmZhLXItcHJvamVjdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0RjdcXFwifS5mYS1yYW5kb206YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDc0XFxcIn0uZmEtcmF2ZWxyeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyRDlcXFwifS5mYS1yZWFjdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MUJcXFwifS5mYS1yZWFkbWU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEQ1XFxcIn0uZmEtcmViZWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUQwXFxcIn0uZmEtcmVjZWlwdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NDNcXFwifS5mYS1yZWN5Y2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFCOFxcXCJ9LmZhLXJlZC1yaXZlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzRTNcXFwifS5mYS1yZWRkaXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUExXFxcIn0uZmEtcmVkZGl0LWFsaWVuOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI4MVxcXCJ9LmZhLXJlZGRpdC1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUEyXFxcIn0uZmEtcmVkbzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMUVcXFwifS5mYS1yZWRvLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyRjlcXFwifS5mYS1yZWdpc3RlcmVkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI1RFxcXCJ9LmZhLXJlbmRhY3Q6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0U0XFxcIn0uZmEtcmVucmVuOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE4QlxcXCJ9LmZhLXJlcGx5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNFNVxcXCJ9LmZhLXJlcGx5LWFsbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMjJcXFwifS5mYS1yZXBseWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0U2XFxcIn0uZmEtcmVzZWFyY2hnYXRlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRGOFxcXCJ9LmZhLXJlc29sdmluZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzRTdcXFwifS5mYS1yZXR3ZWV0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA3OVxcXCJ9LmZhLXJldjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1QjJcXFwifS5mYS1yaWJib246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEQ2XFxcIn0uZmEtcmluZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY3MEJcXFwifS5mYS1yb2FkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAxOFxcXCJ9LmZhLXJvYm90OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU0NFxcXCJ9LmZhLXJvY2tldDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMzVcXFwifS5mYS1yb2NrZXRjaGF0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNFOFxcXCJ9LmZhLXJvY2tybXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0U5XFxcIn0uZmEtcm91dGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEQ3XFxcIn0uZmEtcnNzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA5RVxcXCJ9LmZhLXJzcy1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTQzXFxcIn0uZmEtcnVibGUtc2lnbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxNThcXFwifS5mYS1ydWxlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NDVcXFwifS5mYS1ydWxlci1jb21iaW5lZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NDZcXFwifS5mYS1ydWxlci1ob3Jpem9udGFsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU0N1xcXCJ9LmZhLXJ1bGVyLXZlcnRpY2FsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU0OFxcXCJ9LmZhLXJ1bm5pbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNzBDXFxcIn0uZmEtcnVwZWUtc2lnbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxNTZcXFwifS5mYS1zYWQtY3J5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVCM1xcXCJ9LmZhLXNhZC10ZWFyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVCNFxcXCJ9LmZhLXNhZmFyaTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNjdcXFwifS5mYS1zYXNzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQxRVxcXCJ9LmZhLXNhdmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEM3XFxcIn0uZmEtc2NobGl4OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNFQVxcXCJ9LmZhLXNjaG9vbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NDlcXFwifS5mYS1zY3Jld2RyaXZlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NEFcXFwifS5mYS1zY3JpYmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjhBXFxcIn0uZmEtc2Nyb2xsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjcwRVxcXCJ9LmZhLXNlYXJjaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMDJcXFwifS5mYS1zZWFyY2gtZG9sbGFyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjY4OFxcXCJ9LmZhLXNlYXJjaC1sb2NhdGlvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2ODlcXFwifS5mYS1zZWFyY2gtbWludXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDEwXFxcIn0uZmEtc2VhcmNoLXBsdXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDBFXFxcIn0uZmEtc2VhcmNoZW5naW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0VCXFxcIn0uZmEtc2VlZGxpbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEQ4XFxcIn0uZmEtc2VsbGNhc3Q6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkRBXFxcIn0uZmEtc2VsbHN5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIxM1xcXCJ9LmZhLXNlcnZlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMzNcXFwifS5mYS1zZXJ2aWNlc3RhY2s6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0VDXFxcIn0uZmEtc2hhcGVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjYxRlxcXCJ9LmZhLXNoYXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA2NFxcXCJ9LmZhLXNoYXJlLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxRTBcXFwifS5mYS1zaGFyZS1hbHQtc3F1YXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFFMVxcXCJ9LmZhLXNoYXJlLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxNERcXFwifS5mYS1zaGVrZWwtc2lnbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMEJcXFwifS5mYS1zaGllbGQtYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNFRFxcXCJ9LmZhLXNoaXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjFBXFxcIn0uZmEtc2hpcHBpbmctZmFzdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0OEJcXFwifS5mYS1zaGlydHNpbmJ1bGs6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjE0XFxcIn0uZmEtc2hvZS1wcmludHM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTRCXFxcIn0uZmEtc2hvcHBpbmctYmFnOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI5MFxcXCJ9LmZhLXNob3BwaW5nLWJhc2tldDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyOTFcXFwifS5mYS1zaG9wcGluZy1jYXJ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA3QVxcXCJ9LmZhLXNob3B3YXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVCNVxcXCJ9LmZhLXNob3dlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQ0NcXFwifS5mYS1zaHV0dGxlLXZhbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1QjZcXFwifS5mYS1zaWduOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjREOVxcXCJ9LmZhLXNpZ24taW4tYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJGNlxcXCJ9LmZhLXNpZ24tbGFuZ3VhZ2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkE3XFxcIn0uZmEtc2lnbi1vdXQtYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJGNVxcXCJ9LmZhLXNpZ25hbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMTJcXFwifS5mYS1zaWduYXR1cmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUI3XFxcIn0uZmEtc2ltcGx5YnVpbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjE1XFxcIn0uZmEtc2lzdHJpeDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzRUVcXFwifS5mYS1zaXRlbWFwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBFOFxcXCJ9LmZhLXNpdGg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTEyXFxcIn0uZmEtc2t1bGw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTRDXFxcIn0uZmEtc2t1bGwtY3Jvc3Nib25lczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY3MTRcXFwifS5mYS1za3lhdGxhczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMTZcXFwifS5mYS1za3lwZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxN0VcXFwifS5mYS1zbGFjazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxOThcXFwifS5mYS1zbGFjay1oYXNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNFRlxcXCJ9LmZhLXNsYXNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjcxNVxcXCJ9LmZhLXNsaWRlcnMtaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxREVcXFwifS5mYS1zbGlkZXNoYXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFFN1xcXCJ9LmZhLXNtaWxlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjExOFxcXCJ9LmZhLXNtaWxlLWJlYW06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUI4XFxcIn0uZmEtc21pbGUtd2luazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0REFcXFwifS5mYS1zbW9raW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ4RFxcXCJ9LmZhLXNtb2tpbmctYmFuOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU0RFxcXCJ9LmZhLXNuYXBjaGF0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJBQlxcXCJ9LmZhLXNuYXBjaGF0LWdob3N0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJBQ1xcXCJ9LmZhLXNuYXBjaGF0LXNxdWFyZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQURcXFwifS5mYS1zbm93Zmxha2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkRDXFxcIn0uZmEtc29ja3M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjk2XFxcIn0uZmEtc29sYXItcGFuZWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUJBXFxcIn0uZmEtc29ydDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwRENcXFwifS5mYS1zb3J0LWFscGhhLWRvd246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTVEXFxcIn0uZmEtc29ydC1hbHBoYS11cDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxNUVcXFwifS5mYS1zb3J0LWFtb3VudC1kb3duOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE2MFxcXCJ9LmZhLXNvcnQtYW1vdW50LXVwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE2MVxcXCJ9LmZhLXNvcnQtZG93bjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwRERcXFwifS5mYS1zb3J0LW51bWVyaWMtZG93bjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxNjJcXFwifS5mYS1zb3J0LW51bWVyaWMtdXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTYzXFxcIn0uZmEtc29ydC11cDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwREVcXFwifS5mYS1zb3VuZGNsb3VkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFCRVxcXCJ9LmZhLXNwYTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1QkJcXFwifS5mYS1zcGFjZS1zaHV0dGxlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE5N1xcXCJ9LmZhLXNwZWFrYXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0YzXFxcIn0uZmEtc3BpZGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjcxN1xcXCJ9LmZhLXNwaW5uZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTEwXFxcIn0uZmEtc3Bsb3RjaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1QkNcXFwifS5mYS1zcG90aWZ5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFCQ1xcXCJ9LmZhLXNwcmF5LWNhbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1QkRcXFwifS5mYS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEM4XFxcIn0uZmEtc3F1YXJlLWZ1bGw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDVDXFxcIn0uZmEtc3F1YXJlLXJvb3QtYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjY5OFxcXCJ9LmZhLXNxdWFyZXNwYWNlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVCRVxcXCJ9LmZhLXN0YWNrLWV4Y2hhbmdlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE4RFxcXCJ9LmZhLXN0YWNrLW92ZXJmbG93OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE2Q1xcXCJ9LmZhLXN0YW1wOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVCRlxcXCJ9LmZhLXN0YXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDA1XFxcIn0uZmEtc3Rhci1hbmQtY3Jlc2NlbnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjk5XFxcIn0uZmEtc3Rhci1oYWxmOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA4OVxcXCJ9LmZhLXN0YXItaGFsZi1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUMwXFxcIn0uZmEtc3Rhci1vZi1kYXZpZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2OUFcXFwifS5mYS1zdGFyLW9mLWxpZmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjIxXFxcIn0uZmEtc3RheWxpbmtlZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzRjVcXFwifS5mYS1zdGVhbTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQjZcXFwifS5mYS1zdGVhbS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUI3XFxcIn0uZmEtc3RlYW0tc3ltYm9sOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNGNlxcXCJ9LmZhLXN0ZXAtYmFja3dhcmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDQ4XFxcIn0uZmEtc3RlcC1mb3J3YXJkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA1MVxcXCJ9LmZhLXN0ZXRob3Njb3BlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBGMVxcXCJ9LmZhLXN0aWNrZXItbXVsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzRjdcXFwifS5mYS1zdGlja3ktbm90ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNDlcXFwifS5mYS1zdG9wOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA0RFxcXCJ9LmZhLXN0b3AtY2lyY2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI4RFxcXCJ9LmZhLXN0b3B3YXRjaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyRjJcXFwifS5mYS1zdG9yZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NEVcXFwifS5mYS1zdG9yZS1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTRGXFxcIn0uZmEtc3RyYXZhOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQyOFxcXCJ9LmZhLXN0cmVhbTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NTBcXFwifS5mYS1zdHJlZXQtdmlldzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMURcXFwifS5mYS1zdHJpa2V0aHJvdWdoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBDQ1xcXCJ9LmZhLXN0cmlwZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MjlcXFwifS5mYS1zdHJpcGUtczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MkFcXFwifS5mYS1zdHJvb3B3YWZlbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NTFcXFwifS5mYS1zdHVkaW92aW5hcmk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0Y4XFxcIn0uZmEtc3R1bWJsZXVwb246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUE0XFxcIn0uZmEtc3R1bWJsZXVwb24tY2lyY2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFBM1xcXCJ9LmZhLXN1YnNjcmlwdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMkNcXFwifS5mYS1zdWJ3YXk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjM5XFxcIn0uZmEtc3VpdGNhc2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMEYyXFxcIn0uZmEtc3VpdGNhc2Utcm9sbGluZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1QzFcXFwifS5mYS1zdW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTg1XFxcIn0uZmEtc3VwZXJwb3dlcnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkREXFxcIn0uZmEtc3VwZXJzY3JpcHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTJCXFxcIn0uZmEtc3VwcGxlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNGOVxcXCJ9LmZhLXN1cnByaXNlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVDMlxcXCJ9LmZhLXN3YXRjaGJvb2s6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUMzXFxcIn0uZmEtc3dpbW1lcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1QzRcXFwifS5mYS1zd2ltbWluZy1wb29sOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVDNVxcXCJ9LmZhLXN5bmFnb2d1ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2OUJcXFwifS5mYS1zeW5jOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAyMVxcXCJ9LmZhLXN5bmMtYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJGMVxcXCJ9LmZhLXN5cmluZ2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDhFXFxcIn0uZmEtdGFibGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMENFXFxcIn0uZmEtdGFibGUtdGVubmlzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ1RFxcXCJ9LmZhLXRhYmxldDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxMEFcXFwifS5mYS10YWJsZXQtYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNGQVxcXCJ9LmZhLXRhYmxldHM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDkwXFxcIn0uZmEtdGFjaG9tZXRlci1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGM0ZEXFxcIn0uZmEtdGFnOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAyQlxcXCJ9LmZhLXRhZ3M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDJDXFxcIn0uZmEtdGFwZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0REJcXFwifS5mYS10YXNrczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwQUVcXFwifS5mYS10YXhpOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFCQVxcXCJ9LmZhLXRlYW1zcGVhazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0RjlcXFwifS5mYS10ZWV0aDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2MkVcXFwifS5mYS10ZWV0aC1vcGVuOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjYyRlxcXCJ9LmZhLXRlbGVncmFtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJDNlxcXCJ9LmZhLXRlbGVncmFtLXBsYW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjNGRVxcXCJ9LmZhLXRlbmNlbnQtd2VpYm86YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUQ1XFxcIn0uZmEtdGVybWluYWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTIwXFxcIn0uZmEtdGV4dC1oZWlnaHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDM0XFxcIn0uZmEtdGV4dC13aWR0aDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMzVcXFwifS5mYS10aDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMEFcXFwifS5mYS10aC1sYXJnZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMDlcXFwifS5mYS10aC1saXN0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAwQlxcXCJ9LmZhLXRoZS1yZWQteWV0aTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2OURcXFwifS5mYS10aGVhdGVyLW1hc2tzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjYzMFxcXCJ9LmZhLXRoZW1lY286YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUM2XFxcIn0uZmEtdGhlbWVpc2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJCMlxcXCJ9LmZhLXRoZXJtb21ldGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ5MVxcXCJ9LmZhLXRoZXJtb21ldGVyLWVtcHR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJDQlxcXCJ9LmZhLXRoZXJtb21ldGVyLWZ1bGw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkM3XFxcIn0uZmEtdGhlcm1vbWV0ZXItaGFsZjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyQzlcXFwifS5mYS10aGVybW9tZXRlci1xdWFydGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJDQVxcXCJ9LmZhLXRoZXJtb21ldGVyLXRocmVlLXF1YXJ0ZXJzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJDOFxcXCJ9LmZhLXRodW1icy1kb3duOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE2NVxcXCJ9LmZhLXRodW1icy11cDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxNjRcXFwifS5mYS10aHVtYnRhY2s6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDhEXFxcIn0uZmEtdGlja2V0LWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYzRkZcXFwifS5mYS10aW1lczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwMERcXFwifS5mYS10aW1lcy1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDU3XFxcIn0uZmEtdGludDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwNDNcXFwifS5mYS10aW50LXNsYXNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVDN1xcXCJ9LmZhLXRpcmVkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVDOFxcXCJ9LmZhLXRvZ2dsZS1vZmY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjA0XFxcIn0uZmEtdG9nZ2xlLW9uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIwNVxcXCJ9LmZhLXRvaWxldC1wYXBlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY3MUVcXFwifS5mYS10b29sYm94OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU1MlxcXCJ9LmZhLXRvb3RoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVDOVxcXCJ9LmZhLXRvcmFoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjZBMFxcXCJ9LmZhLXRvcmlpLWdhdGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNkExXFxcIn0uZmEtdHJhY3RvcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY3MjJcXFwifS5mYS10cmFkZS1mZWRlcmF0aW9uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUxM1xcXCJ9LmZhLXRyYWRlbWFyazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyNUNcXFwifS5mYS10cmFmZmljLWxpZ2h0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjYzN1xcXCJ9LmZhLXRyYWluOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIzOFxcXCJ9LmZhLXRyYW5zZ2VuZGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIyNFxcXCJ9LmZhLXRyYW5zZ2VuZGVyLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMjVcXFwifS5mYS10cmFzaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxRjhcXFwifS5mYS10cmFzaC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkVEXFxcIn0uZmEtdHJlZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQkJcXFwifS5mYS10cmVsbG86YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTgxXFxcIn0uZmEtdHJpcGFkdmlzb3I6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjYyXFxcIn0uZmEtdHJvcGh5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA5MVxcXCJ9LmZhLXRydWNrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBEMVxcXCJ9LmZhLXRydWNrLWxvYWRpbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNERFXFxcIn0uZmEtdHJ1Y2stbW9uc3RlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY2M0JcXFwifS5mYS10cnVjay1tb3Zpbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNERGXFxcIn0uZmEtdHJ1Y2stcGlja3VwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjYzQ1xcXCJ9LmZhLXRzaGlydDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1NTNcXFwifS5mYS10dHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMUU0XFxcIn0uZmEtdHVtYmxyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE3M1xcXCJ9LmZhLXR1bWJsci1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTc0XFxcIn0uZmEtdHY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjZDXFxcIn0uZmEtdHdpdGNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFFOFxcXCJ9LmZhLXR3aXR0ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDk5XFxcIn0uZmEtdHdpdHRlci1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDgxXFxcIn0uZmEtdHlwbzM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDJCXFxcIn0uZmEtdWJlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MDJcXFwifS5mYS11aWtpdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MDNcXFwifS5mYS11bWJyZWxsYTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwRTlcXFwifS5mYS11bWJyZWxsYS1iZWFjaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1Q0FcXFwifS5mYS11bmRlcmxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMENEXFxcIn0uZmEtdW5kbzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwRTJcXFwifS5mYS11bmRvLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyRUFcXFwifS5mYS11bmlyZWdpc3RyeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MDRcXFwifS5mYS11bml2ZXJzYWwtYWNjZXNzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI5QVxcXCJ9LmZhLXVuaXZlcnNpdHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTlDXFxcIn0uZmEtdW5saW5rOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjEyN1xcXCJ9LmZhLXVubG9jazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwOUNcXFwifS5mYS11bmxvY2stYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjEzRVxcXCJ9LmZhLXVudGFwcGQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDA1XFxcIn0uZmEtdXBsb2FkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjA5M1xcXCJ9LmZhLXVzYjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyODdcXFwifS5mYS11c2VyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAwN1xcXCJ9LmZhLXVzZXItYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQwNlxcXCJ9LmZhLXVzZXItYWx0LXNsYXNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRGQVxcXCJ9LmZhLXVzZXItYXN0cm9uYXV0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRGQlxcXCJ9LmZhLXVzZXItY2hlY2s6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEZDXFxcIn0uZmEtdXNlci1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkJEXFxcIn0uZmEtdXNlci1jbG9jazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0RkRcXFwifS5mYS11c2VyLWNvZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0RkVcXFwifS5mYS11c2VyLWVkaXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNEZGXFxcIn0uZmEtdXNlci1mcmllbmRzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUwMFxcXCJ9LmZhLXVzZXItZ3JhZHVhdGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTAxXFxcIn0uZmEtdXNlci1pbmp1cmVkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjcyOFxcXCJ9LmZhLXVzZXItbG9jazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MDJcXFwifS5mYS11c2VyLW1kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBGMFxcXCJ9LmZhLXVzZXItbWludXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTAzXFxcIn0uZmEtdXNlci1uaW5qYTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MDRcXFwifS5mYS11c2VyLXBsdXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjM0XFxcIn0uZmEtdXNlci1zZWNyZXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjFCXFxcIn0uZmEtdXNlci1zaGllbGQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTA1XFxcIn0uZmEtdXNlci1zbGFzaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MDZcXFwifS5mYS11c2VyLXRhZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MDdcXFwifS5mYS11c2VyLXRpZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MDhcXFwifS5mYS11c2VyLXRpbWVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIzNVxcXCJ9LmZhLXVzZXJzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjBDMFxcXCJ9LmZhLXVzZXJzLWNvZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1MDlcXFwifS5mYS11c3N1bm5haDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MDdcXFwifS5mYS11dGVuc2lsLXNwb29uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJFNVxcXCJ9LmZhLXV0ZW5zaWxzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJFN1xcXCJ9LmZhLXZhYWRpbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MDhcXFwifS5mYS12ZWN0b3Itc3F1YXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVDQlxcXCJ9LmZhLXZlbnVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIyMVxcXCJ9LmZhLXZlbnVzLWRvdWJsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMjZcXFwifS5mYS12ZW51cy1tYXJzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIyOFxcXCJ9LmZhLXZpYWNvaW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjM3XFxcIn0uZmEtdmlhZGVvOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJBOVxcXCJ9LmZhLXZpYWRlby1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkFBXFxcIn0uZmEtdmlhbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0OTJcXFwifS5mYS12aWFsczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0OTNcXFwifS5mYS12aWJlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MDlcXFwifS5mYS12aWRlbzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwM0RcXFwifS5mYS12aWRlby1zbGFzaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0RTJcXFwifS5mYS12aWhhcmE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNkE3XFxcIn0uZmEtdmltZW86YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDBBXFxcIn0uZmEtdmltZW8tc3F1YXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE5NFxcXCJ9LmZhLXZpbWVvLXY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjdEXFxcIn0uZmEtdmluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxQ0FcXFwifS5mYS12azpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxODlcXFwifS5mYS12bnY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDBCXFxcIn0uZmEtdm9sbGV5YmFsbC1iYWxsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ1RlxcXCJ9LmZhLXZvbHVtZS1kb3duOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAyN1xcXCJ9LmZhLXZvbHVtZS1tdXRlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjZBOVxcXCJ9LmZhLXZvbHVtZS1vZmY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMDI2XFxcIn0uZmEtdm9sdW1lLXVwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjAyOFxcXCJ9LmZhLXZ1ZWpzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQxRlxcXCJ9LmZhLXdhbGtpbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNTU0XFxcIn0uZmEtd2FsbGV0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjU1NVxcXCJ9LmZhLXdhcmVob3VzZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0OTRcXFwifS5mYS13ZWVibHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNUNDXFxcIn0uZmEtd2VpYm86YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMThBXFxcIn0uZmEtd2VpZ2h0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQ5NlxcXCJ9LmZhLXdlaWdodC1oYW5naW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVDRFxcXCJ9LmZhLXdlaXhpbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxRDdcXFwifS5mYS13aGF0c2FwcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyMzJcXFwifS5mYS13aGF0c2FwcC1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDBDXFxcIn0uZmEtd2hlZWxjaGFpcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxOTNcXFwifS5mYS13aG1jczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MERcXFwifS5mYS13aWZpOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFFQlxcXCJ9LmZhLXdpa2lwZWRpYS13OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI2NlxcXCJ9LmZhLXdpbmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNzJFXFxcIn0uZmEtd2luZG93LWNsb3NlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQxMFxcXCJ9LmZhLXdpbmRvdy1tYXhpbWl6ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyRDBcXFwifS5mYS13aW5kb3ctbWluaW1pemU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkQxXFxcIn0uZmEtd2luZG93LXJlc3RvcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMkQyXFxcIn0uZmEtd2luZG93czpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxN0FcXFwifS5mYS13aW5lLWJvdHRsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY3MkZcXFwifS5mYS13aW5lLWdsYXNzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjRFM1xcXCJ9LmZhLXdpbmUtZ2xhc3MtYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjVDRVxcXCJ9LmZhLXdpeDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY1Q0ZcXFwifS5mYS13aXphcmRzLW9mLXRoZS1jb2FzdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY3MzBcXFwifS5mYS13b2xmLXBhY2stYmF0dGFsaW9uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjUxNFxcXCJ9LmZhLXdvbi1zaWduOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE1OVxcXCJ9LmZhLXdvcmRwcmVzczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYxOUFcXFwifS5mYS13b3JkcHJlc3Mtc2ltcGxlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQxMVxcXCJ9LmZhLXdwYmVnaW5uZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMjk3XFxcIn0uZmEtd3BleHBsb3JlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYyREVcXFwifS5mYS13cGZvcm1zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjI5OFxcXCJ9LmZhLXdyZW5jaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEYwQURcXFwifS5mYS14LXJheTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0OTdcXFwifS5mYS14Ym94OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjQxMlxcXCJ9LmZhLXhpbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTY4XFxcIn0uZmEteGluZy1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTY5XFxcIn0uZmEteS1jb21iaW5hdG9yOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjIzQlxcXCJ9LmZhLXlhaG9vOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE5RVxcXCJ9LmZhLXlhbmRleDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MTNcXFwifS5mYS15YW5kZXgtaW50ZXJuYXRpb25hbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEY0MTRcXFwifS5mYS15ZWxwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjFFOVxcXCJ9LmZhLXllbi1zaWduOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjE1N1xcXCJ9LmZhLXlpbi15YW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjZBRFxcXCJ9LmZhLXlvYXN0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRjJCMVxcXCJ9LmZhLXlvdXR1YmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGMTY3XFxcIn0uZmEteW91dHViZS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNDMxXFxcIn0uZmEtemhpaHU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxGNjNGXFxcIn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2ZvbnRzL2ZhNS1hbGwuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJpbXBvcnQgTG9naW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9naW5cIjtcbmltcG9ydCBIb21lIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWVcIjtcblxuY29uc3Qgcm91dGVzID0ge1xuICAgIGxvZ2luOiBMb2dpbixcbiAgICBob21lOiBIb21lXG59XG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7IiwiLy8gVGhlIGZvbGxvd2luZyBpcyBhIHNhbXBsZSBpbXBsZW1lbnRhdGlvbiBvZiBhIGJhY2tlbmQgc2VydmljZSB1c2luZyBQcm9ncmVzcyBLaW52ZXkgKGh0dHBzOi8vd3d3LnByb2dyZXNzLmNvbS9raW52ZXkpLlxuLy8gRmVlbCBmcmVlIHRvIHN3YXAgaW4geW91ciBvd24gc2VydmljZSAvIEFQSXMgLyBldGMgaGVyZSBmb3IgeW91ciBvd24gYXBwcy5cblxuaW1wb3J0ICogYXMgS2ludmV5IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNka1wiO1xuXG5LaW52ZXkuaW5pdCh7XG4gICAgYXBwS2V5OiBcImtpZF9TeVk4TFlPOE1cIixcbiAgICBhcHBTZWNyZXQ6IFwiMDkyODI5ODVkN2M1NDBmN2IwNzZhOWM3ZmQ4ODRjNzdcIlxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tlbmRTZXJ2aWNlIHtcblxuICAgIGlzTG9nZ2VkSW4oKSB7XG4gICAgICAgIHJldHVybiAhIUtpbnZleS5Vc2VyLmdldEFjdGl2ZVVzZXIoKTtcbiAgICB9XG5cbiAgICBsb2dpbih1c2VyKSB7XG4gICAgICAgIHJldHVybiBLaW52ZXkuVXNlci5sb2dpbih1c2VyLmVtYWlsLCB1c2VyLnBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIHJldHVybiBLaW52ZXkuVXNlci5sb2dvdXQoKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlcih1c2VyKSB7XG4gICAgICAgIHJldHVybiBLaW52ZXkuVXNlci5zaWdudXAoeyB1c2VybmFtZTogdXNlci5lbWFpbCwgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQgfSk7XG4gICAgfVxufVxuXG4iLCIvKipcclxuICogQEF1dGhvcjogQ29kZWFsc1xyXG4gKiBARGF0ZTogICAwNS0wMy0yMDIwXHJcbiAqIEBFbWFpbDogIGlhbkBjb2RlYWxzLmVzXHJcbiAqIEBMYXN0IG1vZGlmaWVkIGJ5OiAgIENvZGVhbHNcclxuICogQExhc3QgbW9kaWZpZWQgdGltZTogMDYtMDMtMjAyMFxyXG4gKiBAQ29weXJpZ2h0OiBDb2RlYWxzXHJcbiAqL1xyXG5cclxuaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJztcclxuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XHJcblZ1ZS51c2UoVnVleCk7XHJcblxyXG5pbXBvcnQgdXNlclN0b3JlIGZyb20gJy4vY29tcG9uZW50cy91c2VyL1VzZXJTdG9yZSc7XHJcbmltcG9ydCByZWNoYXJnZVN0b3JlIGZyb20gJy4vY29tcG9uZW50cy9yZWNoYXJnZS9SZWNoYXJnZVN0b3JlJztcclxuaW1wb3J0IG9mZmVyU3RvcmUgZnJvbSAnLi9jb21wb25lbnRzL29mZmVyL09mZmVyU3RvcmUnO1xyXG4vLyBpbXBvcnQgY29udGFjdFN0b3JlIGZyb20gJy4vY29tcG9uZW50cy9jb250YWN0L0NvbnRhY3RTdG9yZSdcclxuXHJcbmNvbnN0IGRlYnVnID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xyXG4gIG1vZHVsZXM6IHtcclxuICAgIHVzZXJTdG9yZSwgb2ZmZXJTdG9yZSwgcmVjaGFyZ2VTdG9yZVxyXG4gIH0sXHJcbiAgc3RyaWN0OiBkZWJ1Z1xyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXZ1ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdGV4dC9mb3JtYXR0ZWQtc3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdGV4dC9zcGFuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvYWN0aW9uLWJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2JvcmRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2JvdHRvbS1uYXZpZ2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvY29udGVudC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGF0ZS1waWNrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2h0bWwtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2Fic29sdXRlLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZG9jay1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2ZsZXhib3gtbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9ncmlkLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvbGF5b3V0LWJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvd3JhcC1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXBpY2tlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9wbGFjZWhvbGRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3Byb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvcHJveHktdmlldy1jb250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zY3JvbGwtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlYXJjaC1iYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWdtZW50ZWQtYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc2xpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N3aXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLWNvbnRlbnQtaXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLXN0cmlwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItc3RyaXAtaXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFic1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS90aW1lLXBpY2tlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3dlYi12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy94bWxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==