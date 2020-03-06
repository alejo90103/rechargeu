webpackHotUpdate("bundle",{

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
                  },
                  on: {
                    tap: function($event) {
                      return _vm.showDetails()
                    }
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
                            row: "2",
                            marginBottom: "5"
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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlP2I2NmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLGtCQUZBO0FBR0E7QUFDQSxnQkFEQTtBQUVBLGlCQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUpBLE9BSEE7QUFTQTtBQUNBLGdCQURBO0FBRUEsaUJBRkE7QUFHQSxvQkFIQTtBQUlBO0FBSkEsT0FUQTtBQWVBLDJCQWZBO0FBZ0JBLDRCQWhCQTtBQWlCQSwrREFqQkE7QUFrQkEseUZBbEJBO0FBbUJBO0FBbkJBO0FBcUJBLEdBdkJBOztBQXlCQSw4QkFDQTtBQUNBLHVDQURBO0FBRUEsK0NBRkE7QUFHQTtBQUhBLElBREEsTUFNQTtBQUNBLGdDQURBO0FBRUE7QUFGQSxJQU5BLENBekJBO0FBb0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQU5BO0FBcENBLEc7Ozs7Ozs7O0FDcEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssc0JBQXNCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUywyQ0FBMkMsRUFBRTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUyw2QkFBNkIsRUFBRTtBQUN6RDtBQUNBO0FBQ0EsNEJBQTRCLDRDQUE0QztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTLGlEQUFpRCxFQUFFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLG9DQUFvQyx1Q0FBdUM7QUFDM0UsaUNBQWlDO0FBQ2pDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUyxrQ0FBa0MsRUFBRTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuYWEwOTBlYTk0MWFkNTQwM2UwMjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cblxuICAgICAgICA8QWN0aW9uQmFyIGJhY2tncm91bmRDb2xvcj1cIiM3NjI4ODlcIiBmbGF0PVwidHJ1ZVwiPlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjNzYyODg5XCI+XG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGJhY2tncm91bmRDb2xvcj1cIiM3NjI4ODlcIj5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0ICNzZWFyY2hSb3cgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD1cIjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIiBwYWRkaW5nTGVmdD1cIjIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCIyMFwiIHYtbW9kZWw9XCJ0ZXh0RmllbGRWYWx1ZVwiIHdpZHRoPVwiODAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0MFwiIGZvbnRTaXplPVwiMTRcIiBoaW50PVwiU2VhcmNoXCI+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxJbWFnZSBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvc2hhcGU0QDN4LnBuZ1wiIGhlaWdodD1cIjMwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwXCIgbWFyZ2luTGVmdD1cIjEwXCI+PC9JbWFnZT4gLS0+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDwvQWN0aW9uQmFyPlxuXG5cbiAgICAgICAgPEdyaWRMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBjb2x1bW5zPVwiKlwiXG4gICAgICAgICAgICByb3dzPVwiKixhdXRvXCI+XG5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjb2w9XCIwXCIgcm93PVwiMFwiIGJhY2tncm91bmRDb2xvcj1cIiNmOGY4ZjhcIj5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgYmFja2dyb3VuZENvbG9yPVwiIzc2Mjg4OVwiIHBhZGRpbmdCb3R0b209XCIxNVwiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD1cIi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9XCIxNSVcIiBjbGFzcz1cImxvZ29cIiBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIj48L0ltYWdlPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlJlY2hhcmdlIFVcIiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjRkZGRkZGXCIgcGFkZGluZz1cIjE1XCIgZm9udFNpemU9XCIyNFwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBwYWRkaW5nTGVmdD1cIjIwXCIgcGFkZGluZ1JpZ2h0PVwiMjBcIiBwYWRkaW5nVG9wPVwiMjBcIlxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tPVwiNVwiIG1hcmdpblRvcD1cIi0yMFwiIGJhY2tncm91bmRDb2xvcj1cIiNmZmZcIlxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCIxMFwiIGhlaWdodD1cIjg1JVwiIHdpZHRoPVwiOTAlXCIgQHRhcD1cInNob3dEZXRhaWxzKClcIlxuICAgICAgICAgICAgICAgICAgICBzdHJldGNoPVwiYXNwZWN0Rml0XCIgY2xhc3M9XCJhbGJ1bS1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiKlwiIHJvd3M9XCJhdXRvLCosYXV0b1wiIGhlaWdodD1cIjEwMCVcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cImF1dG8sKixhdXRvXCIgcm93cz1cImF1dG8sYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sPVwiMFwiIHJvdz1cIjJcIiBtYXJnaW5Cb3R0b209XCI1XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNvbD1cIjBcIiByb3c9XCIwXCIgY2xhc3M9XCJpbnB1dFwiIGhpbnQ9XCJOYW1lXCIgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiIHYtbW9kZWw9XCJjZWxsLm5hbWVcIj48L1RleHRGaWVsZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY29sPVwiMFwiIHJvdz1cIjFcIiBjbGFzcz1cImlucHV0XCIgaGludD1cIlBob25lXCIgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiIHYtbW9kZWw9XCJjZWxsLnBob25lXCI+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIGNvbD1cIjBcIiByb3c9XCIyXCIgcm93U3Bhbj1cIjNcIiA6YnVzeT1cInByb2Nlc3NpbmdcIj48L0FjdGl2aXR5SW5kaWNhdG9yPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2w9XCIwXCIgcm93PVwiM1wiIHRleHQ9XCJSZWNoYXJnZVwiIEB0YXA9XCJoYW5kbGVGb3JtU3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbS10LTIwIGJ1dHRvbi10ZXh0XCI+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cblxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjb2w9XCIwXCIgcm93PVwiMVwiIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiI0ZGRkZGRlwiIGhlaWdodD1cIjYwXCI+XG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cIipcIiBjb2x1bW5zPVwiKiwqLCosKiwqXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjb2w9XCIwXCIgcm93PVwiMFwiICh0YXApPVwib25CdXR0b25UYXAoKVwiIGhlaWdodD1cIjI1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjVcIiBtYXJnaW49XCIxMFwiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9zaGFwZTJAM3gucG5nXCI+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNvbD1cIjFcIiByb3c9XCIwXCIgKHRhcCk9XCJvbkJ1dHRvblRhcCgpXCIgaGVpZ2h0PVwiMjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNVwiIG1hcmdpbj1cIjEwXCIgc3JjPVwifi9hc3NldHMvaW1hZ2VzL3NoYXBlMUAzeC5wbmdcIj48L0ltYWdlPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY29sPVwiMlwiIHJvdz1cIjBcIiAodGFwKT1cIm9uQnV0dG9uVGFwKClcIiBoZWlnaHQ9XCI2MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjYwXCIgbWFyZ2luPVwiMTBcIiBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvaG9tZUAzeC5wbmdcIj48L0ltYWdlPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY29sPVwiM1wiIHJvdz1cIjBcIiAodGFwKT1cIm9uQnV0dG9uVGFwKClcIiBoZWlnaHQ9XCIyNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI1XCIgbWFyZ2luPVwiMTBcIiBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvc2hhcGUzQDN4LnBuZ1wiPjwvSW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjb2w9XCI0XCIgcm93PVwiMFwiICh0YXApPVwib25CdXR0b25UYXAoKVwiIGhlaWdodD1cIjI1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjVcIiBtYXJnaW49XCIxMFwiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9pY29uMDRAM3gucG5nXCI+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgIDwvR3JpZExheW91dD5cbiAgICA8L3BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG4gICAgaW1wb3J0IHttYXBTdGF0ZSwgbWFwR2V0dGVyc30gZnJvbSAndnVleCc7XG4gICAgaW1wb3J0IHthcGlEb21haW59IGZyb20gJy4vLi4vY29uZmlnJztcbiAgICBpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbiAgICBpbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW5cIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvbnRhY3Q6ICcnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdjZWxsJyxcbiAgICAgICAgICAgICAgICBjZWxsOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBwaG9uZTogJycsXG4gICAgICAgICAgICAgICAgICAgIG9mZmVyX2lkOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogJ3JlY2hhcmdlQ2VsbCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG5hdXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICAgICAgICAgIG9mZmVyX2lkOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogJ3JlY2hhcmdlTmF1dGEnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaG9vc2Vfb2ZmZXJfY2VsbDogJycsXG4gICAgICAgICAgICAgICAgY2hvb3NlX29mZmVyX25hdXRhOiAnJyxcbiAgICAgICAgICAgICAgICBzZXJ2ZXI6IGFwaURvbWFpbixcbiAgICAgICAgICAgICAgICBub3c6IG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoJ1lZWVkvTU0vREQnKSxcbiAgICAgICAgICAgICAgICBtb21lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgLi4ubWFwU3RhdGUoe1xuICAgICAgICAgICAgICAgIHVzZXJTdG9yZTogc3RhdGUgPT4gc3RhdGUudXNlclN0b3JlLFxuICAgICAgICAgICAgICAgIHJlY2hhcmdlU3RvcmU6IHN0YXRlID0+IHN0YXRlLnJlY2hhcmdlU3RvcmUsXG4gICAgICAgICAgICAgICAgb2ZmZXJTdG9yZTogc3RhdGUgPT4gc3RhdGUub2ZmZXJTdG9yZVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKHtcbiAgICAgICAgICAgICAgICBvcHRpb25zQ2VsbDogJ2dldENlbGxPZmZlcnMnLFxuICAgICAgICAgICAgICAgIG9wdGlvbnNOYXV0YTogJ2dldE5hdXRhT2ZmZXJzJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgaGFuZGxlRm9ybVN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRiYWNrZW5kU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExvZ2luLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgLmxvZ28ge1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cblxuICAgIC5idXR0b24tdGV4dCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3NjI4ODk7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICB9XG5cbiAgICAuQWN0aW9uQmFyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgLmFsYnVtLWltYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5ob21lLXBhbmVsIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyMDtcbiAgICAgICAgbWFyZ2luOiAxNTtcbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24tbGFiZWwge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNTtcbiAgICB9XG5cbiAgICAjc2VhcmNoUm93IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjA7XG4gICAgfVxuPC9zdHlsZT5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJBY3Rpb25CYXJcIixcbiAgICAgICAgeyBhdHRyczogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzc2Mjg4OVwiLCBmbGF0OiBcInRydWVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNzYyODg5XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgYmFja2dyb3VuZENvbG9yOiBcIiM3NjI4ODlcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiwgbWFyZ2luVG9wOiBcIjVcIiB9LFxuICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwic2VhcmNoUm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI4MCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiU2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS50ZXh0RmllbGRWYWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50ZXh0RmllbGRWYWx1ZSA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgb3JpZW50YXRpb246IFwidmVydGljYWxcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICBjb2x1bW5zOiBcIipcIixcbiAgICAgICAgICAgIHJvd3M6IFwiKixhdXRvXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sOiBcIjBcIiwgcm93OiBcIjBcIiwgYmFja2dyb3VuZENvbG9yOiBcIiNmOGY4ZjhcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNzYyODg5XCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMTVcIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIi0xMFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9nb1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB3aWR0aDogXCIxNSVcIiwgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvbnQtd2VpZ2h0LWJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlJlY2hhcmdlIFVcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxNVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjI0XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFsYnVtLWltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIyMFwiLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMjBcIixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIyMFwiLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjVcIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIi0yMFwiLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBcIixcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjg1JVwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI5MCVcIixcbiAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaXRcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93RGV0YWlscygpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcIipcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0bywqLGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiYXV0bywqLGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzOiBcImF1dG8sYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiTmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3Q6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5jZWxsLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KF92bS5jZWxsLCBcIm5hbWVcIiwgJGV2ZW50LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiUGhvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb3JyZWN0OiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uY2VsbC5waG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoX3ZtLmNlbGwsIFwicGhvbmVcIiwgJGV2ZW50LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQWN0aXZpdHlJbmRpY2F0b3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NwYW46IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVzeTogX3ZtLnByb2Nlc3NpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMCBidXR0b24tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIwXCIsIHJvdzogXCIzXCIsIHRleHQ6IFwiUmVjaGFyZ2VcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmhhbmRsZUZvcm1TdWJtaXQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNjBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvd3M6IFwiKlwiLCBjb2x1bW5zOiBcIiosKiwqLCosKlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCIodGFwKVwiOiBcIm9uQnV0dG9uVGFwKClcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjVcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNVwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvc2hhcGUyQDN4LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiKHRhcClcIjogXCJvbkJ1dHRvblRhcCgpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjVcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3NoYXBlMUAzeC5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIih0YXApXCI6IFwib25CdXR0b25UYXAoKVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI2MFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjYwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9ob21lQDN4LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiKHRhcClcIjogXCJvbkJ1dHRvblRhcCgpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjVcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3NoYXBlM0AzeC5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIih0YXApXCI6IFwib25CdXR0b25UYXAoKVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyNVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9pY29uMDRAM3gucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=