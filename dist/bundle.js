/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/comment.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/comment.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: 'Poppins', sans-serif;\n}\n\n.popup {\n  display: none;\n}\n\n.fa-hat-chef {\n  margin-left: 17rem;\n  margin-bottom: 1rem;\n  color: #723e3e;\n  font-size: larger;\n}\n\n.popupView {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 70%;\n}\n\n.popup-child {\n  opacity: 0.9;\n  height: 40rem;\n  padding-top: 1rem;\n  padding-right: 1rem;\n  padding-left: 2rem;\n  border: 2px solid black;\n  background: aliceblue;\n  background-size: 100%;\n  border-radius: 2%;\n  box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0 30px 60px -30px, rgba(10, 37, 64, 0.35) 0 -2px 6px 0 inset;\n}\n\n.popupView .closepopup {\n  float: right;\n  background: none;\n  border: none;\n  box-shadow: none;\n  font-weight: bold;\n  font-size: 1.5rem;\n}\n\n.popupView h3 {\n  text-align: left;\n  color: #723e3e;\n  margin-left: 2rem;\n}\n\n#comment-btn {\n  padding: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\n  background: #723e3e;\n  color: aliceblue;\n  border: none;\n  width: 50%;\n  font-weight: bold;\n}\n\n#comment-btn:hover {\n  box-shadow: none;\n  box-shadow: rgba(0, 0, 0, 0.4) 0 2px 4px, rgba(0, 0, 0, 0.3) 0 7px 13px -3px, rgba(0, 0, 0, 0.2) 0 -3px 0 inset;\n  background: aliceblue;\n  color: #723e3e;\n}\n\n#msg {\n  border: none;\n  background: #ffe0a3;\n}\n\n#msg:active {\n  border: none;\n  background: #ffe0a3;\n  border-radius: 11%;\n}\n\n#name {\n  border: none;\n  background: #ffe0a3;\n  width: 14rem;\n  height: 2rem;\n}\n\n#msg:focus,\n#name:focus {\n  outline: none;\n}\n\n.meal-instructions-child {\n  display: none;\n}\n\n.meal-instructions-parent:hover .meal-instructions-child {\n  text-align: left;\n  font-weight: bold;\n  margin: -15rem 1rem;\n  border: 2px solid black;\n  height: auto;\n  position: absolute;\n  z-index: 1;\n  margin-bottom: 10rem;\n  background-color: white;\n  transition: 1s;\n  display: block;\n}\n\n.user-comments {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(250, 239, 218);\n  align-items: center;\n  justify-content: center;\n  top: 11%;\n  left: 57%;\n  box-shadow: rgba(50, 50, 93, 0.25) 0 2px 5px -1px, rgba(0, 0, 0, 0.3) 0 1px 3px -1px;\n  width: 31%;\n  overflow-y: auto;\n  height: 16rem;\n}\n\n.user-comments li {\n  text-align: center;\n  font-weight: bold;\n  border-bottom: 1px solid #723e3e;\n  height: 15rem;\n}\n\n.comment-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  float: right;\n  margin-top: -20rem;\n  margin-right: 5rem;\n}\n\n.comment-section h4 {\n  color: #723e3e;\n}\n\n.comment-section h3 {\n  margin: 0;\n}\n\n.popupView .popupimg {\n  border-radius: 10%;\n  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;\n  margin: 1rem 1.5rem;\n  width: 20rem;\n}\n\n.mealInfo {\n  list-style: none;\n  width: 19rem;\n  padding: 1.5rem;\n  justify-content: space-between;\n  align-items: center;\n  display: grid;\n  grid-template-columns: 25% 25% 25%;\n  gap: 0.5rem;\n  margin-bottom: 5rem;\n  box-shadow: rgb(0 0 0 / 24%) 0 3px 8px;\n  background-color: wheat;\n  justify-items: center;\n}\n\n.mealInfo li {\n  font-weight: 500;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 54px 55px, rgba(0, 0, 0, 0.12) 0 -12px 30px, rgba(0, 0, 0, 0.12) 0 4px 6px, rgba(0, 0, 0, 0.17) 0 12px 13px, rgba(0, 0, 0, 0.09) 0 -3px 5px;\n  padding: 0.5rem;\n  text-align: center;\n  background: #723e3e;\n  border-radius: 6%;\n}\n", "",{"version":3,"sources":["webpack://./src/comment.css"],"names":[],"mappings":"AAAA;EACE,kCAAkC;AACpC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,uBAAuB;EACvB,qBAAqB;EACrB,qBAAqB;EACrB,iBAAiB;EACjB,sIAAsI;AACxI;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,iDAAiD;EACjD,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,+GAA+G;EAC/G,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,YAAY;AACd;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,oBAAoB;EACpB,uBAAuB;EACvB,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,oCAAoC;EACpC,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;EACR,SAAS;EACT,oFAAoF;EACpF,UAAU;EACV,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,gCAAgC;EAChC,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,0CAA0C;EAC1C,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,kCAAkC;EAClC,WAAW;EACX,mBAAmB;EACnB,sCAAsC;EACtC,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,6KAA6K;EAC7K,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;AACnB","sourcesContent":["body {\n  font-family: 'Poppins', sans-serif;\n}\n\n.popup {\n  display: none;\n}\n\n.fa-hat-chef {\n  margin-left: 17rem;\n  margin-bottom: 1rem;\n  color: #723e3e;\n  font-size: larger;\n}\n\n.popupView {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 70%;\n}\n\n.popup-child {\n  opacity: 0.9;\n  height: 40rem;\n  padding-top: 1rem;\n  padding-right: 1rem;\n  padding-left: 2rem;\n  border: 2px solid black;\n  background: aliceblue;\n  background-size: 100%;\n  border-radius: 2%;\n  box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0 30px 60px -30px, rgba(10, 37, 64, 0.35) 0 -2px 6px 0 inset;\n}\n\n.popupView .closepopup {\n  float: right;\n  background: none;\n  border: none;\n  box-shadow: none;\n  font-weight: bold;\n  font-size: 1.5rem;\n}\n\n.popupView h3 {\n  text-align: left;\n  color: #723e3e;\n  margin-left: 2rem;\n}\n\n#comment-btn {\n  padding: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\n  background: #723e3e;\n  color: aliceblue;\n  border: none;\n  width: 50%;\n  font-weight: bold;\n}\n\n#comment-btn:hover {\n  box-shadow: none;\n  box-shadow: rgba(0, 0, 0, 0.4) 0 2px 4px, rgba(0, 0, 0, 0.3) 0 7px 13px -3px, rgba(0, 0, 0, 0.2) 0 -3px 0 inset;\n  background: aliceblue;\n  color: #723e3e;\n}\n\n#msg {\n  border: none;\n  background: #ffe0a3;\n}\n\n#msg:active {\n  border: none;\n  background: #ffe0a3;\n  border-radius: 11%;\n}\n\n#name {\n  border: none;\n  background: #ffe0a3;\n  width: 14rem;\n  height: 2rem;\n}\n\n#msg:focus,\n#name:focus {\n  outline: none;\n}\n\n.meal-instructions-child {\n  display: none;\n}\n\n.meal-instructions-parent:hover .meal-instructions-child {\n  text-align: left;\n  font-weight: bold;\n  margin: -15rem 1rem;\n  border: 2px solid black;\n  height: auto;\n  position: absolute;\n  z-index: 1;\n  margin-bottom: 10rem;\n  background-color: white;\n  transition: 1s;\n  display: block;\n}\n\n.user-comments {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(250, 239, 218);\n  align-items: center;\n  justify-content: center;\n  top: 11%;\n  left: 57%;\n  box-shadow: rgba(50, 50, 93, 0.25) 0 2px 5px -1px, rgba(0, 0, 0, 0.3) 0 1px 3px -1px;\n  width: 31%;\n  overflow-y: auto;\n  height: 16rem;\n}\n\n.user-comments li {\n  text-align: center;\n  font-weight: bold;\n  border-bottom: 1px solid #723e3e;\n  height: 15rem;\n}\n\n.comment-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  float: right;\n  margin-top: -20rem;\n  margin-right: 5rem;\n}\n\n.comment-section h4 {\n  color: #723e3e;\n}\n\n.comment-section h3 {\n  margin: 0;\n}\n\n.popupView .popupimg {\n  border-radius: 10%;\n  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;\n  margin: 1rem 1.5rem;\n  width: 20rem;\n}\n\n.mealInfo {\n  list-style: none;\n  width: 19rem;\n  padding: 1.5rem;\n  justify-content: space-between;\n  align-items: center;\n  display: grid;\n  grid-template-columns: 25% 25% 25%;\n  gap: 0.5rem;\n  margin-bottom: 5rem;\n  box-shadow: rgb(0 0 0 / 24%) 0 3px 8px;\n  background-color: wheat;\n  justify-items: center;\n}\n\n.mealInfo li {\n  font-weight: 500;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 54px 55px, rgba(0, 0, 0, 0.12) 0 -12px 30px, rgba(0, 0, 0, 0.12) 0 4px 6px, rgba(0, 0, 0, 0.17) 0 12px 13px, rgba(0, 0, 0, 0.09) 0 -3px 5px;\n  padding: 0.5rem;\n  text-align: center;\n  background: #723e3e;\n  border-radius: 6%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reservation-desktop.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reservation-desktop.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media only screen and (min-width: 992px) {\n  .meal-img-div {\n    height: 600px;\n  }\n\n  .meal-img {\n    height: 600px;\n    width: 600px;\n  }\n\n  .reservation-form,\n  .reservation-info,\n  .info {\n    font-size: larger;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/reservation-desktop.css"],"names":[],"mappings":"AAAA;EACE;IACE,aAAa;EACf;;EAEA;IACE,aAAa;IACb,YAAY;EACd;;EAEA;;;IAGE,iBAAiB;EACnB;AACF","sourcesContent":["@media only screen and (min-width: 992px) {\n  .meal-img-div {\n    height: 600px;\n  }\n\n  .meal-img {\n    height: 600px;\n    width: 600px;\n  }\n\n  .reservation-form,\n  .reservation-info,\n  .info {\n    font-size: larger;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reservation.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reservation.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "fieldset {\n  border: none;\n  width: 30%;\n  padding: 0;\n  justify-self: center;\n}\n\n.reservation {\n  display: none;\n  z-index: 9;\n  min-width: 100%;\n  min-height: 100%;\n  position: fixed;\n  flex-wrap: wrap;\n  background: #ec5242;\n  justify-content: space-between;\n  margin: auto;\n  top: 0;\n}\n\n.reservation-list {\n  width: 96%;\n  height: 97vh;\n  margin: 2%;\n  border: 1px solid #000;\n  overflow-y: scroll;\n}\n\n.div.cross-img-div {\n  max-width: 8%;\n}\n\n.meal-img-div {\n  height: 300px;\n  margin-top: 20px;\n  margin-right: 5%;\n  margin-left: 5%;\n  justify-content: center;\n}\n\n.meal-img {\n  height: 300px;\n  width: 300px;\n  resize: both;\n}\n\n.click {\n  position: fixed;\n  right: 7%;\n}\n\n.reservation-form,\n.reservation-info,\n.info {\n  text-align: center;\n}\n\n.reservation-form {\n  align-self: center;\n  width: 300px;\n  margin-bottom: 20px;\n}\n\n.reservation,\n.reservation-list,\n.reservation-form,\n.form {\n  flex-direction: column;\n}\n\n.form-item {\n  height: 40px;\n}\n\n.addButton {\n  font-size: 25px;\n}\n\n.addButton:hover {\n  cursor: pointer;\n}\n\n.margin-bottom {\n  margin-bottom: 30px;\n}\n\n.d-flex {\n  display: flex;\n}\n", "",{"version":3,"sources":["webpack://./src/reservation.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,UAAU;EACV,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,UAAU;EACV,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;EACZ,MAAM;AACR;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,UAAU;EACV,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;EACf,SAAS;AACX;;AAEA;;;EAGE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;;;EAIE,sBAAsB;AACxB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf","sourcesContent":["fieldset {\n  border: none;\n  width: 30%;\n  padding: 0;\n  justify-self: center;\n}\n\n.reservation {\n  display: none;\n  z-index: 9;\n  min-width: 100%;\n  min-height: 100%;\n  position: fixed;\n  flex-wrap: wrap;\n  background: #ec5242;\n  justify-content: space-between;\n  margin: auto;\n  top: 0;\n}\n\n.reservation-list {\n  width: 96%;\n  height: 97vh;\n  margin: 2%;\n  border: 1px solid #000;\n  overflow-y: scroll;\n}\n\n.div.cross-img-div {\n  max-width: 8%;\n}\n\n.meal-img-div {\n  height: 300px;\n  margin-top: 20px;\n  margin-right: 5%;\n  margin-left: 5%;\n  justify-content: center;\n}\n\n.meal-img {\n  height: 300px;\n  width: 300px;\n  resize: both;\n}\n\n.click {\n  position: fixed;\n  right: 7%;\n}\n\n.reservation-form,\n.reservation-info,\n.info {\n  text-align: center;\n}\n\n.reservation-form {\n  align-self: center;\n  width: 300px;\n  margin-bottom: 20px;\n}\n\n.reservation,\n.reservation-list,\n.reservation-form,\n.form {\n  flex-direction: column;\n}\n\n.form-item {\n  height: 40px;\n}\n\n.addButton {\n  font-size: 25px;\n}\n\n.addButton:hover {\n  cursor: pointer;\n}\n\n.margin-bottom {\n  margin-bottom: 30px;\n}\n\n.d-flex {\n  display: flex;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../logo_transparent.png */ "./logo_transparent.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  list-style: none;\n  text-decoration: none;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  z-index: 0;\n}\n\nhtml {\n  background-color: #943939;\n}\n\nul {\n  display: flex;\n  align-items: center;\n  padding: 0 30px 0 30px;\n}\n\nnav {\n  display: flex;\n  justify-content: center;\n  margin: 2% 0 2% 0;\n}\n\n.logo {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  height: 7rem;\n  width: 7rem;\n}\n\nli {\n  padding-left: 30px;\n}\n\nli a {\n  font-size: 20px;\n  color: #ffe0a3;\n}\n\n.container {\n  display: grid;\n  justify-content: center;\n  text-align: center;\n  grid-template-columns: 25% 25% 25%;\n  grid-gap: 3rem;\n  height: 5%;\n}\n\n.foodPic {\n  width: 50%;\n}\n\nbutton {\n  margin-bottom: 10px;\n  box-shadow: 5px 5px 5px;\n  cursor: pointer;\n  border-radius: 25px;\n}\n\nfooter {\n  margin-top: 5rem;\n  padding-top: 1rem;\n  margin-bottom: -1rem;\n  background-color: #723e3e;\n  width: 100%;\n  text-align: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,cAAc;EACd,eAAe;EACf,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,gDAAuC;EACvC,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,kCAAkC;EAClC,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,oBAAoB;EACpB,yBAAyB;EACzB,WAAW;EACX,kBAAkB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n\n* {\n  list-style: none;\n  text-decoration: none;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  z-index: 0;\n}\n\nhtml {\n  background-color: #943939;\n}\n\nul {\n  display: flex;\n  align-items: center;\n  padding: 0 30px 0 30px;\n}\n\nnav {\n  display: flex;\n  justify-content: center;\n  margin: 2% 0 2% 0;\n}\n\n.logo {\n  content: url(\"../logo_transparent.png\");\n  height: 7rem;\n  width: 7rem;\n}\n\nli {\n  padding-left: 30px;\n}\n\nli a {\n  font-size: 20px;\n  color: #ffe0a3;\n}\n\n.container {\n  display: grid;\n  justify-content: center;\n  text-align: center;\n  grid-template-columns: 25% 25% 25%;\n  grid-gap: 3rem;\n  height: 5%;\n}\n\n.foodPic {\n  width: 50%;\n}\n\nbutton {\n  margin-bottom: 10px;\n  box-shadow: 5px 5px 5px;\n  cursor: pointer;\n  border-radius: 25px;\n}\n\nfooter {\n  margin-top: 5rem;\n  padding-top: 1rem;\n  margin-bottom: -1rem;\n  background-color: #723e3e;\n  width: 100%;\n  text-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/comment.css":
/*!*************************!*\
  !*** ./src/comment.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_comment_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./comment.css */ "./node_modules/css-loader/dist/cjs.js!./src/comment.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_comment_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_comment_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_comment_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_comment_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/reservation-desktop.css":
/*!*************************************!*\
  !*** ./src/reservation-desktop.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reservation_desktop_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reservation-desktop.css */ "./node_modules/css-loader/dist/cjs.js!./src/reservation-desktop.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reservation_desktop_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reservation_desktop_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reservation_desktop_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reservation_desktop_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/reservation.css":
/*!*****************************!*\
  !*** ./src/reservation.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reservation_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reservation.css */ "./node_modules/css-loader/dist/cjs.js!./src/reservation.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reservation_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reservation_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reservation_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reservation_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const baseUrl = 'http://www.themealdb.com/api/json/v1/1/lookup.php?i=';

const fetchMeals = async (mealId) => {
  const response = await fetch(`${baseUrl}${mealId}`);
  const data = await response.json();
  return data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchMeals);

/***/ }),

/***/ "./src/commentEvent.js":
/*!*****************************!*\
  !*** ./src/commentEvent.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "container": () => (/* binding */ container),
/* harmony export */   "body": () => (/* binding */ body),
/* harmony export */   "popup": () => (/* binding */ popup),
/* harmony export */   "popupComment": () => (/* binding */ popupComment),
/* harmony export */   "userDataArr": () => (/* binding */ userDataArr),
/* harmony export */   "loadCommentsSection": () => (/* binding */ loadCommentsSection)
/* harmony export */ });
const popup = document.querySelector('.popup');
const body = document.querySelector('body');
const container = document.querySelector('.container');

const popupComment = (eventTarget) => {
  const mealArray = JSON.parse(localStorage.getItem('Meals'));

  if (mealArray !== null) {
    popup.classList.add('popupView');
    popup.style.display = 'block';
    /* eslint-disable */
    const tmp = mealArray.findIndex((el) => el[0].idMeal == parseInt(eventTarget.id, 10));
    /* eslint-enable */

    popup.innerHTML = `<div class ="popup-child"> 
                <div>
                <ul class="user-comments">
                
                </ul>
                </div>      
                <button class="closepopup">
                    &times;
                </button>
                    <img class="popupimg"  src="${mealArray[tmp][0].strMealThumb}" />
                
                <div>
                <h3>${mealArray[tmp][0].strMeal}</h3>
                    <div class="meal-instructions-parent"> <i class="fas fa-hat-chef">Recipe</i>
                <div class="meal-instructions-child">${mealArray[tmp][0].strInstructions}</div>
                
 
                </div>
                
                
                
                </div>
        
                <div>
                    <ul class="mealInfo">
                    <li>${mealArray[tmp][0].strCategory}</li>
                    <li>${mealArray[tmp][0].strArea}</li>
                    </ul>
                </div>
                
                <form action="" method="get" class="comment-section">
                    <h4>Add your comment</h4>
                    <input type="text" id="name" maxlength="30" name="user_name" placeholder="Full name" required />
                    <textarea maxlength="500" id="msg" name="user_message" placeholder="Your insight" rows="5" cols="5"required></textarea>
                    <button type="submit" id="comment-btn" class="btn-btn">Comment</button> 
                </form>
                </div>
                `;

    const tagsArr = mealArray[tmp][0].strTags.split(',');
    /* eslint-disable */
    for (const tag of tagsArr) {
      if (tag === '') {
        continue;
      } else {
        const Tagli = document.createElement('li');
        Tagli.innerHTML += `${tag}`;
        document.querySelector('.mealInfo').appendChild(Tagli);
      }
    }
    /* eslint-enable */

    body.style.overflow = 'hidden';
    container.style.filter = 'blur(5px)';
    document.querySelector('header').style.filter = 'blur(5px)';
  }
};

const loadComment = (name, comment) => {
  const commentInfo = document.createElement('li');
  commentInfo.innerHTML = `
      <span class="user">${name}:  </span>
      &nbsp;
      <span class="user_score">${comment}</span>
      `;
  document.querySelector('.user-comments').appendChild(commentInfo);
};

const loadCommentsSection = (userArr) => {
  userArr.forEach((data) => {
    loadComment(data.name, data.comment);
  });
};

const userCommentData = {
  name: '',
  comment: '',
};
const userDataArr = JSON.parse(localStorage.getItem('userData')) || [];
userDataArr.push(userCommentData);
localStorage.setItem('userData', JSON.stringify(userDataArr));



/***/ }),

/***/ "./src/likes.js":
/*!**********************!*\
  !*** ./src/likes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLikes": () => (/* binding */ createLikes),
/* harmony export */   "appID": () => (/* binding */ appID),
/* harmony export */   "getLikes": () => (/* binding */ getLikes)
/* harmony export */ });
const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appId = '1jTZg5AjMH1qouB9viL2';

async function appID() {
  const response = await fetch(baseURL, { method: 'POST' });
  const id = await response.text();
  return id;
}

const mealIds = [52768, 52776, 52765, 52935, 52960, 52962];

const data = [];

const createLikes = async (mealId) => {
  const response = await fetch(`${baseURL}${appId}/likes/`, {
    method: 'POST',
    body: JSON.stringify({ item_id: mealId }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const likes = await response.text();
  return likes;
};

mealIds.forEach((id) => data.push(createLikes(id)));

const getLikes = async () => {
  const response = await fetch(`${baseURL}${appId}/likes/`);
  const likes = await response.json();
  return likes;
};



/***/ }),

/***/ "./src/reservationEvents.js":
/*!**********************************!*\
  !*** ./src/reservationEvents.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addReservationButtonEvent": () => (/* binding */ addReservationButtonEvent),
/* harmony export */   "addCrossImageEvent": () => (/* binding */ addCrossImageEvent),
/* harmony export */   "addDateFocusEvent": () => (/* binding */ addDateFocusEvent)
/* harmony export */ });
const showPopup = (index) => {
  const div = document.getElementById('reservation');
  div.style.display = 'flex';

  if (localStorage.getItem('Meals') !== null) {
    const arrayOfMeals = JSON.parse(localStorage.getItem('Meals'));
    const singleMeal = arrayOfMeals.find((meal) => meal[0].idMeal === index);

    const h1 = document.getElementById('meal-name');
    h1.innerText = singleMeal[0].strMeal;

    const p = document.getElementById('info');
    p.innerHTML = `<strong>Region: ${singleMeal[0].strArea}</strong> &nbsp; <strong>Main Ingredient: ${singleMeal[0].strIngredient1}</strong> <br>
    <strong>Category: ${singleMeal[0].strCategory}</strong> &nbsp; <strong>Tag: ${singleMeal[0].strTags}</strong> <br>`;

    const img = document.getElementById('meal-img');
    img.src = singleMeal[0].strMealThumb;
  }
};

const addReservationButtonEvent = () => {
  const reservationButtons = document.querySelectorAll('.Reservaton');

  reservationButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const index = e.target.parentNode.id;
      showPopup(index);
    });
  });
};

const closeClick = () => {
  const menu = document.getElementById('reservation');
  menu.style.display = 'none';
};

const addCrossImageEvent = () => {
  const cancelImage = document.getElementById('cancel-img');
  cancelImage.addEventListener('click', closeClick);
};

const addDateFocusEvent = () => {
  const startDate = document.getElementById('player_startDate');
  const endDate = document.getElementById('player_endDate');

  startDate.addEventListener('focus', (e) => {
    e.target.type = 'date';
  });

  endDate.addEventListener('focus', (e) => {
    e.target.type = 'date';
  });

  startDate.addEventListener('blur', (e) => {
    e.target.type = 'text';
    e.target.placeholder = 'Start date';
  });

  endDate.addEventListener('blur', (e) => {
    e.target.type = 'text';
    e.target.placeholder = 'End date';
  });
};




/***/ }),

/***/ "./logo_transparent.png":
/*!******************************!*\
  !*** ./logo_transparent.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ff7b0df15dbfec66c9f.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _comment_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment.css */ "./src/comment.css");
/* harmony import */ var _reservation_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservation.css */ "./src/reservation.css");
/* harmony import */ var _reservation_desktop_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservation-desktop.css */ "./src/reservation-desktop.css");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.js */ "./src/api.js");
/* harmony import */ var _reservationEvents_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reservationEvents.js */ "./src/reservationEvents.js");
/* harmony import */ var _commentEvent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commentEvent.js */ "./src/commentEvent.js");
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./likes.js */ "./src/likes.js");









const mealIds = [52768, 52776, 52765, 52935, 52960, 52962];

const populate = async () => {
  const data = [];

  const mealArray = [];

  const dataLikes = await (0,_likes_js__WEBPACK_IMPORTED_MODULE_7__.getLikes)();

  mealIds.forEach((id) => data.push((0,_api_js__WEBPACK_IMPORTED_MODULE_4__["default"])(id)));
  data.forEach((data) => (data.then((meal) => {
    const card = document.createElement('div');
    const likesArray = dataLikes.filter((like) => like.item_id.toString() === meal.meals[0].idMeal);
    card.className = 'card';
    card.innerHTML = `<div class="card" id="${meal.meals[0].idMeal}">
                        <img src="${meal.meals[0].strMealThumb}
                        " alt="meal" class="foodPic">
                        <div class="like">
                          <h3>${meal.meals[0].strMeal}</h3>
                          <a href="#"><i class="fas fa-heart"></i></a>
                        </div>
                        <h4 class="likesNum">${likesArray[0].likes} likes</h4>
                        <button id = "${meal.meals[0].idMeal}" class="comment"><i class="fas fa-comment"></i>  Comment</button>
                        <button class="Reservaton">Reservaton <i class="fa fa-pencil" aria-hidden="true"></i></button>
                      </div>`;
    _commentEvent_js__WEBPACK_IMPORTED_MODULE_6__.container.appendChild(card);
    mealArray.push(meal.meals);
    (0,_reservationEvents_js__WEBPACK_IMPORTED_MODULE_5__.addReservationButtonEvent)();

    localStorage.setItem('Meals', JSON.stringify(mealArray));
  })));

  (0,_reservationEvents_js__WEBPACK_IMPORTED_MODULE_5__.addCrossImageEvent)();
  (0,_reservationEvents_js__WEBPACK_IMPORTED_MODULE_5__.addDateFocusEvent)();
};

document.addEventListener('DOMContentLoaded', async () => {
  await populate();
});

_commentEvent_js__WEBPACK_IMPORTED_MODULE_6__.container.addEventListener('click', (e) => {
  if (e.target && e.target.matches('.comment')) {
    (0,_commentEvent_js__WEBPACK_IMPORTED_MODULE_6__.popupComment)(e.target);
    (0,_commentEvent_js__WEBPACK_IMPORTED_MODULE_6__.loadCommentsSection)(_commentEvent_js__WEBPACK_IMPORTED_MODULE_6__.userDataArr);
  }
});

_commentEvent_js__WEBPACK_IMPORTED_MODULE_6__.body.addEventListener('click', (e) => {
  if (e.target && e.target.matches('.closepopup')) {
    const header = document.querySelector('header');

    _commentEvent_js__WEBPACK_IMPORTED_MODULE_6__.popup.style.display = 'none';
    _commentEvent_js__WEBPACK_IMPORTED_MODULE_6__.body.style.overflow = 'scroll';
    _commentEvent_js__WEBPACK_IMPORTED_MODULE_6__.container.style.filter = 'blur(0px)';
    header.style.filter = 'blur(0px)';
  } else if (e.target && e.target.matches('.comment-btn')) {
    e.preventDefault();
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNoQixJQUFJLHFFQUFtQixDQUFDLHlEQUFXO0FBQ25DO0FBQ0EsQ0FBQzs7QUFFRCxtRUFBcUI7QUFDckI7QUFDQTs7QUFFQSxJQUFJLGlFQUFtQjtBQUN2QixJQUFJLGlFQUFtQjtBQUN2QixJQUFJLG9FQUFzQjtBQUMxQjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0NhcHN0b25lLWFwaS8uL3NyYy9jb21tZW50LmNzcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9zcmMvcmVzZXJ2YXRpb24tZGVza3RvcC5jc3MiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vc3JjL3Jlc2VydmF0aW9uLmNzcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9zcmMvY29tbWVudC5jc3M/ODNkYSIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9zcmMvcmVzZXJ2YXRpb24tZGVza3RvcC5jc3M/MDFhZCIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9zcmMvcmVzZXJ2YXRpb24uY3NzP2Y1N2YiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9zcmMvY29tbWVudEV2ZW50LmpzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL3NyYy9saWtlcy5qcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9zcmMvcmVzZXJ2YXRpb25FdmVudHMuanMiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0NhcHN0b25lLWFwaS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL0NhcHN0b25lLWFwaS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0NhcHN0b25lLWFwaS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0NhcHN0b25lLWFwaS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZhLWhhdC1jaGVmIHtcXG4gIG1hcmdpbi1sZWZ0OiAxN3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBjb2xvcjogIzcyM2UzZTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG4ucG9wdXBWaWV3IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB3aWR0aDogNzAlO1xcbn1cXG5cXG4ucG9wdXAtY2hpbGQge1xcbiAgb3BhY2l0eTogMC45O1xcbiAgaGVpZ2h0OiA0MHJlbTtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMiU7XFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDAgNTBweCAxMDBweCAtMjBweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDAgMzBweCA2MHB4IC0zMHB4LCByZ2JhKDEwLCAzNywgNjQsIDAuMzUpIDAgLTJweCA2cHggMCBpbnNldDtcXG59XFxuXFxuLnBvcHVwVmlldyAuY2xvc2Vwb3B1cCB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5wb3B1cFZpZXcgaDMge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGNvbG9yOiAjNzIzZTNlO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxufVxcblxcbiNjb21tZW50LWJ0biB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDIuNHB4IDIuNHB4IDMuMnB4O1xcbiAgYmFja2dyb3VuZDogIzcyM2UzZTtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogNTAlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNjb21tZW50LWJ0bjpob3ZlciB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQpIDAgMnB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDAgN3B4IDEzcHggLTNweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDAgLTNweCAwIGluc2V0O1xcbiAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xcbiAgY29sb3I6ICM3MjNlM2U7XFxufVxcblxcbiNtc2cge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogI2ZmZTBhMztcXG59XFxuXFxuI21zZzphY3RpdmUge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogI2ZmZTBhMztcXG4gIGJvcmRlci1yYWRpdXM6IDExJTtcXG59XFxuXFxuI25hbWUge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogI2ZmZTBhMztcXG4gIHdpZHRoOiAxNHJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuI21zZzpmb2N1cyxcXG4jbmFtZTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubWVhbC1pbnN0cnVjdGlvbnMtY2hpbGQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1lYWwtaW5zdHJ1Y3Rpb25zLXBhcmVudDpob3ZlciAubWVhbC1pbnN0cnVjdGlvbnMtY2hpbGQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiAtMTVyZW0gMXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiAxcztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udXNlci1jb21tZW50cyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDIzOSwgMjE4KTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRvcDogMTElO1xcbiAgbGVmdDogNTclO1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwIDJweCA1cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDAgMXB4IDNweCAtMXB4O1xcbiAgd2lkdGg6IDMxJTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBoZWlnaHQ6IDE2cmVtO1xcbn1cXG5cXG4udXNlci1jb21tZW50cyBsaSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzIzZTNlO1xcbiAgaGVpZ2h0OiAxNXJlbTtcXG59XFxuXFxuLmNvbW1lbnQtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIG1hcmdpbi10b3A6IC0yMHJlbTtcXG4gIG1hcmdpbi1yaWdodDogNXJlbTtcXG59XFxuXFxuLmNvbW1lbnQtc2VjdGlvbiBoNCB7XFxuICBjb2xvcjogIzcyM2UzZTtcXG59XFxuXFxuLmNvbW1lbnQtc2VjdGlvbiBoMyB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5wb3B1cFZpZXcgLnBvcHVwaW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMCA1cHggMTVweDtcXG4gIG1hcmdpbjogMXJlbSAxLjVyZW07XFxuICB3aWR0aDogMjByZW07XFxufVxcblxcbi5tZWFsSW5mbyB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgd2lkdGg6IDE5cmVtO1xcbiAgcGFkZGluZzogMS41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSAyNSUgMjUlO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjQlKSAwIDNweCA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lYWxJbmZvIGxpIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgNTRweCA1NXB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDAgLTEycHggMzBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwIDRweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xNykgMCAxMnB4IDEzcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMCAtM3B4IDVweDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICM3MjNlM2U7XFxuICBib3JkZXItcmFkaXVzOiA2JTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbW1lbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHNJQUFzSTtBQUN4STs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaURBQWlEO0VBQ2pELG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsK0dBQStHO0VBQy9HLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsUUFBUTtFQUNSLFNBQVM7RUFDVCxvRkFBb0Y7RUFDcEYsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw2S0FBNks7RUFDN0ssZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mYS1oYXQtY2hlZiB7XFxuICBtYXJnaW4tbGVmdDogMTdyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgY29sb3I6ICM3MjNlM2U7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxuLnBvcHVwVmlldyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLnBvcHVwLWNoaWxkIHtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIGhlaWdodDogNDByZW07XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDIlO1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwIDUwcHggMTAwcHggLTIwcHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDMwcHggNjBweCAtMzBweCwgcmdiYSgxMCwgMzcsIDY0LCAwLjM1KSAwIC0ycHggNnB4IDAgaW5zZXQ7XFxufVxcblxcbi5wb3B1cFZpZXcgLmNsb3NlcG9wdXAge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ucG9wdXBWaWV3IGgzIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjb2xvcjogIzcyM2UzZTtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbn1cXG5cXG4jY29tbWVudC1idG4ge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAyLjRweCAyLjRweCAzLjJweDtcXG4gIGJhY2tncm91bmQ6ICM3MjNlM2U7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jY29tbWVudC1idG46aG92ZXIge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwIDJweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDdweCAxM3B4IC0zcHgsIHJnYmEoMCwgMCwgMCwgMC4yKSAwIC0zcHggMCBpbnNldDtcXG4gIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcXG4gIGNvbG9yOiAjNzIzZTNlO1xcbn1cXG5cXG4jbXNnIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICNmZmUwYTM7XFxufVxcblxcbiNtc2c6YWN0aXZlIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICNmZmUwYTM7XFxuICBib3JkZXItcmFkaXVzOiAxMSU7XFxufVxcblxcbiNuYW1lIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICNmZmUwYTM7XFxuICB3aWR0aDogMTRyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbiNtc2c6Zm9jdXMsXFxuI25hbWU6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLm1lYWwtaW5zdHJ1Y3Rpb25zLWNoaWxkIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tZWFsLWluc3RydWN0aW9ucy1wYXJlbnQ6aG92ZXIgLm1lYWwtaW5zdHJ1Y3Rpb25zLWNoaWxkIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogLTE1cmVtIDFyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGhlaWdodDogYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogMXM7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnVzZXItY29tbWVudHMge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyMzksIDIxOCk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0b3A6IDExJTtcXG4gIGxlZnQ6IDU3JTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMCAycHggNXB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDFweCAzcHggLTFweDtcXG4gIHdpZHRoOiAzMSU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgaGVpZ2h0OiAxNnJlbTtcXG59XFxuXFxuLnVzZXItY29tbWVudHMgbGkge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzcyM2UzZTtcXG4gIGhlaWdodDogMTVyZW07XFxufVxcblxcbi5jb21tZW50LXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxuICBmbG9hdDogcmlnaHQ7XFxuICBtYXJnaW4tdG9wOiAtMjByZW07XFxuICBtYXJnaW4tcmlnaHQ6IDVyZW07XFxufVxcblxcbi5jb21tZW50LXNlY3Rpb24gaDQge1xcbiAgY29sb3I6ICM3MjNlM2U7XFxufVxcblxcbi5jb21tZW50LXNlY3Rpb24gaDMge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucG9wdXBWaWV3IC5wb3B1cGltZyB7XFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDAgNXB4IDE1cHg7XFxuICBtYXJnaW46IDFyZW0gMS41cmVtO1xcbiAgd2lkdGg6IDIwcmVtO1xcbn1cXG5cXG4ubWVhbEluZm8ge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHdpZHRoOiAxOXJlbTtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgMjUlIDI1JTtcXG4gIGdhcDogMC41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDI0JSkgMCAzcHggOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZWFsSW5mbyBsaSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIDU0cHggNTVweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwIC0xMnB4IDMwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMCA0cHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMTcpIDAgMTJweCAxM3B4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDAgLTNweCA1cHg7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjNzIzZTNlO1xcbiAgYm9yZGVyLXJhZGl1czogNiU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5tZWFsLWltZy1kaXYge1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgfVxcblxcbiAgLm1lYWwtaW1nIHtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgfVxcblxcbiAgLnJlc2VydmF0aW9uLWZvcm0sXFxuICAucmVzZXJ2YXRpb24taW5mbyxcXG4gIC5pbmZvIHtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9yZXNlcnZhdGlvbi1kZXNrdG9wLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7RUFDZDs7RUFFQTs7O0lBR0UsaUJBQWlCO0VBQ25CO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLm1lYWwtaW1nLWRpdiB7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICB9XFxuXFxuICAubWVhbC1pbWcge1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICB9XFxuXFxuICAucmVzZXJ2YXRpb24tZm9ybSxcXG4gIC5yZXNlcnZhdGlvbi1pbmZvLFxcbiAgLmluZm8ge1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZmllbGRzZXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDMwJTtcXG4gIHBhZGRpbmc6IDA7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnJlc2VydmF0aW9uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB6LWluZGV4OiA5O1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGJhY2tncm91bmQ6ICNlYzUyNDI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IGF1dG87XFxuICB0b3A6IDA7XFxufVxcblxcbi5yZXNlcnZhdGlvbi1saXN0IHtcXG4gIHdpZHRoOiA5NiU7XFxuICBoZWlnaHQ6IDk3dmg7XFxuICBtYXJnaW46IDIlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmRpdi5jcm9zcy1pbWctZGl2IHtcXG4gIG1heC13aWR0aDogOCU7XFxufVxcblxcbi5tZWFsLWltZy1kaXYge1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDUlO1xcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tZWFsLWltZyB7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgcmVzaXplOiBib3RoO1xcbn1cXG5cXG4uY2xpY2sge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDclO1xcbn1cXG5cXG4ucmVzZXJ2YXRpb24tZm9ybSxcXG4ucmVzZXJ2YXRpb24taW5mbyxcXG4uaW5mbyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5yZXNlcnZhdGlvbi1mb3JtIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5yZXNlcnZhdGlvbixcXG4ucmVzZXJ2YXRpb24tbGlzdCxcXG4ucmVzZXJ2YXRpb24tZm9ybSxcXG4uZm9ybSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9ybS1pdGVtIHtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLmFkZEJ1dHRvbiB7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi5hZGRCdXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWFyZ2luLWJvdHRvbSB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4uZC1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9yZXNlcnZhdGlvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixNQUFNO0FBQ1I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTs7O0VBR0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7Ozs7RUFJRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJmaWVsZHNldCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogMzAlO1xcbiAgcGFkZGluZzogMDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucmVzZXJ2YXRpb24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHotaW5kZXg6IDk7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYmFja2dyb3VuZDogI2VjNTI0MjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRvcDogMDtcXG59XFxuXFxuLnJlc2VydmF0aW9uLWxpc3Qge1xcbiAgd2lkdGg6IDk2JTtcXG4gIGhlaWdodDogOTd2aDtcXG4gIG1hcmdpbjogMiU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uZGl2LmNyb3NzLWltZy1kaXYge1xcbiAgbWF4LXdpZHRoOiA4JTtcXG59XFxuXFxuLm1lYWwtaW1nLWRpdiB7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogNSU7XFxuICBtYXJnaW4tbGVmdDogNSU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1lYWwtaW1nIHtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICByZXNpemU6IGJvdGg7XFxufVxcblxcbi5jbGljayB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogNyU7XFxufVxcblxcbi5yZXNlcnZhdGlvbi1mb3JtLFxcbi5yZXNlcnZhdGlvbi1pbmZvLFxcbi5pbmZvIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnJlc2VydmF0aW9uLWZvcm0ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnJlc2VydmF0aW9uLFxcbi5yZXNlcnZhdGlvbi1saXN0LFxcbi5yZXNlcnZhdGlvbi1mb3JtLFxcbi5mb3JtIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mb3JtLWl0ZW0ge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uYWRkQnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLmFkZEJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tYXJnaW4tYm90dG9tIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5kLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9sb2dvX3RyYW5zcGFyZW50LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIHotaW5kZXg6IDA7XFxufVxcblxcbmh0bWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0MzkzOTtcXG59XFxuXFxudWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDMwcHggMCAzMHB4O1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAyJSAwIDIlIDA7XFxufVxcblxcbi5sb2dvIHtcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBoZWlnaHQ6IDdyZW07XFxuICB3aWR0aDogN3JlbTtcXG59XFxuXFxubGkge1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbn1cXG5cXG5saSBhIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjZmZlMGEzO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDI1JSAyNSU7XFxuICBncmlkLWdhcDogM3JlbTtcXG4gIGhlaWdodDogNSU7XFxufVxcblxcbi5mb29kUGljIHtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgbWFyZ2luLXRvcDogNXJlbTtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogLTFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzIzZTNlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnREFBdUM7RUFDdkMsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICB6LWluZGV4OiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NDM5Mzk7XFxufVxcblxcbnVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAzMHB4IDAgMzBweDtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMiUgMCAyJSAwO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBjb250ZW50OiB1cmwoXFxcIi4uL2xvZ29fdHJhbnNwYXJlbnQucG5nXFxcIik7XFxuICBoZWlnaHQ6IDdyZW07XFxuICB3aWR0aDogN3JlbTtcXG59XFxuXFxubGkge1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbn1cXG5cXG5saSBhIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjZmZlMGEzO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDI1JSAyNSU7XFxuICBncmlkLWdhcDogM3JlbTtcXG4gIGhlaWdodDogNSU7XFxufVxcblxcbi5mb29kUGljIHtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgbWFyZ2luLXRvcDogNXJlbTtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogLTFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzIzZTNlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbW1lbnQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21tZW50LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNlcnZhdGlvbi1kZXNrdG9wLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXJ2YXRpb24tZGVza3RvcC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXJ2YXRpb24uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNlcnZhdGlvbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYmFzZVVybCA9ICdodHRwOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9sb29rdXAucGhwP2k9JztcblxuY29uc3QgZmV0Y2hNZWFscyA9IGFzeW5jIChtZWFsSWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfSR7bWVhbElkfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoTWVhbHM7IiwiY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5cbmNvbnN0IHBvcHVwQ29tbWVudCA9IChldmVudFRhcmdldCkgPT4ge1xuICBjb25zdCBtZWFsQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdNZWFscycpKTtcblxuICBpZiAobWVhbEFycmF5ICE9PSBudWxsKSB7XG4gICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXBWaWV3Jyk7XG4gICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICBjb25zdCB0bXAgPSBtZWFsQXJyYXkuZmluZEluZGV4KChlbCkgPT4gZWxbMF0uaWRNZWFsID09IHBhcnNlSW50KGV2ZW50VGFyZ2V0LmlkLCAxMCkpO1xuICAgIC8qIGVzbGludC1lbmFibGUgKi9cblxuICAgIHBvcHVwLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzID1cInBvcHVwLWNoaWxkXCI+IFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwidXNlci1jb21tZW50c1wiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlcG9wdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgJnRpbWVzO1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicG9wdXBpbWdcIiAgc3JjPVwiJHttZWFsQXJyYXlbdG1wXVswXS5zdHJNZWFsVGh1bWJ9XCIgLz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMz4ke21lYWxBcnJheVt0bXBdWzBdLnN0ck1lYWx9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaW5zdHJ1Y3Rpb25zLXBhcmVudFwiPiA8aSBjbGFzcz1cImZhcyBmYS1oYXQtY2hlZlwiPlJlY2lwZTwvaT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1pbnN0cnVjdGlvbnMtY2hpbGRcIj4ke21lYWxBcnJheVt0bXBdWzBdLnN0ckluc3RydWN0aW9uc308L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibWVhbEluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiR7bWVhbEFycmF5W3RtcF1bMF0uc3RyQ2F0ZWdvcnl9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiR7bWVhbEFycmF5W3RtcF1bMF0uc3RyQXJlYX08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIG1ldGhvZD1cImdldFwiIGNsYXNzPVwiY29tbWVudC1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoND5BZGQgeW91ciBjb21tZW50PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgbWF4bGVuZ3RoPVwiMzBcIiBuYW1lPVwidXNlcl9uYW1lXCIgcGxhY2Vob2xkZXI9XCJGdWxsIG5hbWVcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbWF4bGVuZ3RoPVwiNTAwXCIgaWQ9XCJtc2dcIiBuYW1lPVwidXNlcl9tZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGluc2lnaHRcIiByb3dzPVwiNVwiIGNvbHM9XCI1XCJyZXF1aXJlZD48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cImNvbW1lbnQtYnRuXCIgY2xhc3M9XCJidG4tYnRuXCI+Q29tbWVudDwvYnV0dG9uPiBcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYDtcblxuICAgIGNvbnN0IHRhZ3NBcnIgPSBtZWFsQXJyYXlbdG1wXVswXS5zdHJUYWdzLnNwbGl0KCcsJyk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICBmb3IgKGNvbnN0IHRhZyBvZiB0YWdzQXJyKSB7XG4gICAgICBpZiAodGFnID09PSAnJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IFRhZ2xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgVGFnbGkuaW5uZXJIVE1MICs9IGAke3RhZ31gO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhbEluZm8nKS5hcHBlbmRDaGlsZChUYWdsaSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qIGVzbGludC1lbmFibGUgKi9cblxuICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBjb250YWluZXIuc3R5bGUuZmlsdGVyID0gJ2JsdXIoNXB4KSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuc3R5bGUuZmlsdGVyID0gJ2JsdXIoNXB4KSc7XG4gIH1cbn07XG5cbmNvbnN0IGxvYWRDb21tZW50ID0gKG5hbWUsIGNvbW1lbnQpID0+IHtcbiAgY29uc3QgY29tbWVudEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb21tZW50SW5mby5pbm5lckhUTUwgPSBgXG4gICAgICA8c3BhbiBjbGFzcz1cInVzZXJcIj4ke25hbWV9OiAgPC9zcGFuPlxuICAgICAgJm5ic3A7XG4gICAgICA8c3BhbiBjbGFzcz1cInVzZXJfc2NvcmVcIj4ke2NvbW1lbnR9PC9zcGFuPlxuICAgICAgYDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItY29tbWVudHMnKS5hcHBlbmRDaGlsZChjb21tZW50SW5mbyk7XG59O1xuXG5jb25zdCBsb2FkQ29tbWVudHNTZWN0aW9uID0gKHVzZXJBcnIpID0+IHtcbiAgdXNlckFyci5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgbG9hZENvbW1lbnQoZGF0YS5uYW1lLCBkYXRhLmNvbW1lbnQpO1xuICB9KTtcbn07XG5cbmNvbnN0IHVzZXJDb21tZW50RGF0YSA9IHtcbiAgbmFtZTogJycsXG4gIGNvbW1lbnQ6ICcnLFxufTtcbmNvbnN0IHVzZXJEYXRhQXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckRhdGEnKSkgfHwgW107XG51c2VyRGF0YUFyci5wdXNoKHVzZXJDb21tZW50RGF0YSk7XG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckRhdGEnLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YUFycikpO1xuXG5leHBvcnQge1xuICBjb250YWluZXIsIGJvZHksIHBvcHVwLCBwb3B1cENvbW1lbnQsIHVzZXJEYXRhQXJyLCBsb2FkQ29tbWVudHNTZWN0aW9uLFxufTsiLCJjb25zdCBiYXNlVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyc7XG5jb25zdCBhcHBJZCA9ICcxalRaZzVBak1IMXFvdUI5dmlMMic7XG5cbmFzeW5jIGZ1bmN0aW9uIGFwcElEKCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGJhc2VVUkwsIHsgbWV0aG9kOiAnUE9TVCcgfSk7XG4gIGNvbnN0IGlkID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICByZXR1cm4gaWQ7XG59XG5cbmNvbnN0IG1lYWxJZHMgPSBbNTI3NjgsIDUyNzc2LCA1Mjc2NSwgNTI5MzUsIDUyOTYwLCA1Mjk2Ml07XG5cbmNvbnN0IGRhdGEgPSBbXTtcblxuY29uc3QgY3JlYXRlTGlrZXMgPSBhc3luYyAobWVhbElkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke2FwcElkfS9saWtlcy9gLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBtZWFsSWQgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgbGlrZXMgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gIHJldHVybiBsaWtlcztcbn07XG5cbm1lYWxJZHMuZm9yRWFjaCgoaWQpID0+IGRhdGEucHVzaChjcmVhdGVMaWtlcyhpZCkpKTtcblxuY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke2FwcElkfS9saWtlcy9gKTtcbiAgY29uc3QgbGlrZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBsaWtlcztcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUxpa2VzLCBhcHBJRCwgZ2V0TGlrZXMgfTsiLCJjb25zdCBzaG93UG9wdXAgPSAoaW5kZXgpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uJyk7XG4gIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnTWVhbHMnKSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGFycmF5T2ZNZWFscyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ01lYWxzJykpO1xuICAgIGNvbnN0IHNpbmdsZU1lYWwgPSBhcnJheU9mTWVhbHMuZmluZCgobWVhbCkgPT4gbWVhbFswXS5pZE1lYWwgPT09IGluZGV4KTtcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lYWwtbmFtZScpO1xuICAgIGgxLmlubmVyVGV4dCA9IHNpbmdsZU1lYWxbMF0uc3RyTWVhbDtcblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mbycpO1xuICAgIHAuaW5uZXJIVE1MID0gYDxzdHJvbmc+UmVnaW9uOiAke3NpbmdsZU1lYWxbMF0uc3RyQXJlYX08L3N0cm9uZz4gJm5ic3A7IDxzdHJvbmc+TWFpbiBJbmdyZWRpZW50OiAke3NpbmdsZU1lYWxbMF0uc3RySW5ncmVkaWVudDF9PC9zdHJvbmc+IDxicj5cbiAgICA8c3Ryb25nPkNhdGVnb3J5OiAke3NpbmdsZU1lYWxbMF0uc3RyQ2F0ZWdvcnl9PC9zdHJvbmc+ICZuYnNwOyA8c3Ryb25nPlRhZzogJHtzaW5nbGVNZWFsWzBdLnN0clRhZ3N9PC9zdHJvbmc+IDxicj5gO1xuXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lYWwtaW1nJyk7XG4gICAgaW1nLnNyYyA9IHNpbmdsZU1lYWxbMF0uc3RyTWVhbFRodW1iO1xuICB9XG59O1xuXG5jb25zdCBhZGRSZXNlcnZhdGlvbkJ1dHRvbkV2ZW50ID0gKCkgPT4ge1xuICBjb25zdCByZXNlcnZhdGlvbkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuUmVzZXJ2YXRvbicpO1xuXG4gIHJlc2VydmF0aW9uQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5wYXJlbnROb2RlLmlkO1xuICAgICAgc2hvd1BvcHVwKGluZGV4KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBjbG9zZUNsaWNrID0gKCkgPT4ge1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uJyk7XG4gIG1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn07XG5cbmNvbnN0IGFkZENyb3NzSW1hZ2VFdmVudCA9ICgpID0+IHtcbiAgY29uc3QgY2FuY2VsSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsLWltZycpO1xuICBjYW5jZWxJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlQ2xpY2spO1xufTtcblxuY29uc3QgYWRkRGF0ZUZvY3VzRXZlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXJ0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJfc3RhcnREYXRlJyk7XG4gIGNvbnN0IGVuZERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyX2VuZERhdGUnKTtcblxuICBzdGFydERhdGUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoZSkgPT4ge1xuICAgIGUudGFyZ2V0LnR5cGUgPSAnZGF0ZSc7XG4gIH0pO1xuXG4gIGVuZERhdGUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoZSkgPT4ge1xuICAgIGUudGFyZ2V0LnR5cGUgPSAnZGF0ZSc7XG4gIH0pO1xuXG4gIHN0YXJ0RGF0ZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKGUpID0+IHtcbiAgICBlLnRhcmdldC50eXBlID0gJ3RleHQnO1xuICAgIGUudGFyZ2V0LnBsYWNlaG9sZGVyID0gJ1N0YXJ0IGRhdGUnO1xuICB9KTtcblxuICBlbmREYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZSkgPT4ge1xuICAgIGUudGFyZ2V0LnR5cGUgPSAndGV4dCc7XG4gICAgZS50YXJnZXQucGxhY2Vob2xkZXIgPSAnRW5kIGRhdGUnO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGFkZFJlc2VydmF0aW9uQnV0dG9uRXZlbnQsIGFkZENyb3NzSW1hZ2VFdmVudCwgYWRkRGF0ZUZvY3VzRXZlbnQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vY29tbWVudC5jc3MnO1xuaW1wb3J0ICcuL3Jlc2VydmF0aW9uLmNzcyc7XG5pbXBvcnQgJy4vcmVzZXJ2YXRpb24tZGVza3RvcC5jc3MnO1xuaW1wb3J0IGZldGNoTWVhbHMgZnJvbSAnLi9hcGkuanMnO1xuaW1wb3J0IHsgYWRkUmVzZXJ2YXRpb25CdXR0b25FdmVudCwgYWRkQ3Jvc3NJbWFnZUV2ZW50LCBhZGREYXRlRm9jdXNFdmVudCB9IGZyb20gJy4vcmVzZXJ2YXRpb25FdmVudHMuanMnO1xuaW1wb3J0IHtcbiAgYm9keSwgY29udGFpbmVyLCBwb3B1cCwgcG9wdXBDb21tZW50LCB1c2VyRGF0YUFyciwgbG9hZENvbW1lbnRzU2VjdGlvbixcbn0gZnJvbSAnLi9jb21tZW50RXZlbnQuanMnO1xuaW1wb3J0IHsgZ2V0TGlrZXMgfSBmcm9tICcuL2xpa2VzLmpzJztcblxuY29uc3QgbWVhbElkcyA9IFs1Mjc2OCwgNTI3NzYsIDUyNzY1LCA1MjkzNSwgNTI5NjAsIDUyOTYyXTtcblxuY29uc3QgcG9wdWxhdGUgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBbXTtcblxuICBjb25zdCBtZWFsQXJyYXkgPSBbXTtcblxuICBjb25zdCBkYXRhTGlrZXMgPSBhd2FpdCBnZXRMaWtlcygpO1xuXG4gIG1lYWxJZHMuZm9yRWFjaCgoaWQpID0+IGRhdGEucHVzaChmZXRjaE1lYWxzKGlkKSkpO1xuICBkYXRhLmZvckVhY2goKGRhdGEpID0+IChkYXRhLnRoZW4oKG1lYWwpID0+IHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbGlrZXNBcnJheSA9IGRhdGFMaWtlcy5maWx0ZXIoKGxpa2UpID0+IGxpa2UuaXRlbV9pZC50b1N0cmluZygpID09PSBtZWFsLm1lYWxzWzBdLmlkTWVhbCk7XG4gICAgY2FyZC5jbGFzc05hbWUgPSAnY2FyZCc7XG4gICAgY2FyZC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImNhcmRcIiBpZD1cIiR7bWVhbC5tZWFsc1swXS5pZE1lYWx9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7bWVhbC5tZWFsc1swXS5zdHJNZWFsVGh1bWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBcIiBhbHQ9XCJtZWFsXCIgY2xhc3M9XCJmb29kUGljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlrZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JHttZWFsLm1lYWxzWzBdLnN0ck1lYWx9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhcyBmYS1oZWFydFwiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImxpa2VzTnVtXCI+JHtsaWtlc0FycmF5WzBdLmxpa2VzfSBsaWtlczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCIke21lYWwubWVhbHNbMF0uaWRNZWFsfVwiIGNsYXNzPVwiY29tbWVudFwiPjxpIGNsYXNzPVwiZmFzIGZhLWNvbW1lbnRcIj48L2k+ICBDb21tZW50PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiUmVzZXJ2YXRvblwiPlJlc2VydmF0b24gPGkgY2xhc3M9XCJmYSBmYS1wZW5jaWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgbWVhbEFycmF5LnB1c2gobWVhbC5tZWFscyk7XG4gICAgYWRkUmVzZXJ2YXRpb25CdXR0b25FdmVudCgpO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ01lYWxzJywgSlNPTi5zdHJpbmdpZnkobWVhbEFycmF5KSk7XG4gIH0pKSk7XG5cbiAgYWRkQ3Jvc3NJbWFnZUV2ZW50KCk7XG4gIGFkZERhdGVGb2N1c0V2ZW50KCk7XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBwb3B1bGF0ZSgpO1xufSk7XG5cbmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5tYXRjaGVzKCcuY29tbWVudCcpKSB7XG4gICAgcG9wdXBDb21tZW50KGUudGFyZ2V0KTtcbiAgICBsb2FkQ29tbWVudHNTZWN0aW9uKHVzZXJEYXRhQXJyKTtcbiAgfVxufSk7XG5cbmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQubWF0Y2hlcygnLmNsb3NlcG9wdXAnKSkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuXG4gICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgY29udGFpbmVyLnN0eWxlLmZpbHRlciA9ICdibHVyKDBweCknO1xuICAgIGhlYWRlci5zdHlsZS5maWx0ZXIgPSAnYmx1cigwcHgpJztcbiAgfSBlbHNlIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5tYXRjaGVzKCcuY29tbWVudC1idG4nKSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=