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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.popup {\r\n  display: none;\r\n}\r\n\r\n.fa-hat-chef {\r\n  margin-left: 17rem;\r\n  margin-bottom: 1rem;\r\n  color: #723e3e;\r\n  font-size: larger;\r\n}\r\n\r\n.popupView {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 70%;\r\n}\r\n\r\n.popup-child {\r\n  opacity: 0.9;\r\n  height: 40rem;\r\n  padding-top: 1rem;\r\n  padding-right: 1rem;\r\n  padding-left: 2rem;\r\n  border: 2px solid black;\r\n  background: aliceblue;\r\n  background-size: 100%;\r\n  border-radius: 2%;\r\n  box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0 30px 60px -30px, rgba(10, 37, 64, 0.35) 0 -2px 6px 0 inset;\r\n}\r\n\r\n.popupView .closepopup {\r\n  float: right;\r\n  background: none;\r\n  border: none;\r\n  box-shadow: none;\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.popupView h3 {\r\n  text-align: left;\r\n  color: #723e3e;\r\n  margin-left: 2rem;\r\n}\r\n\r\n#comment-btn {\r\n  padding: 0.5rem;\r\n  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\r\n  background: #723e3e;\r\n  color: aliceblue;\r\n  border: none;\r\n  width: 50%;\r\n  font-weight: bold;\r\n}\r\n\r\n#comment-btn:hover {\r\n  box-shadow: none;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0 2px 4px, rgba(0, 0, 0, 0.3) 0 7px 13px -3px, rgba(0, 0, 0, 0.2) 0 -3px 0 inset;\r\n  background: aliceblue;\r\n  color: #723e3e;\r\n}\r\n\r\n#msg {\r\n  border: none;\r\n  background: #ffe0a3;\r\n}\r\n\r\n#msg:active {\r\n  border: none;\r\n  background: #ffe0a3;\r\n  border-radius: 11%;\r\n}\r\n\r\n#name {\r\n  border: none;\r\n  background: #ffe0a3;\r\n  width: 14rem;\r\n  height: 2rem;\r\n}\r\n\r\n#msg:focus,\r\n#name:focus {\r\n  outline: none;\r\n}\r\n\r\n.meal-instructions-child {\r\n  display: none;\r\n}\r\n\r\n.meal-instructions-parent:hover .meal-instructions-child {\r\n  text-align: left;\r\n  font-weight: bold;\r\n  margin: -15rem 1rem;\r\n  border: 2px solid black;\r\n  height: auto;\r\n  position: absolute;\r\n  z-index: 1;\r\n  margin-bottom: 10rem;\r\n  background-color: white;\r\n  transition: 1s;\r\n  display: block;\r\n}\r\n\r\n.user-comments {\r\n  position: fixed;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: rgb(250, 239, 218);\r\n  align-items: center;\r\n  justify-content: center;\r\n  top: 11%;\r\n  left: 57%;\r\n  box-shadow: rgba(50, 50, 93, 0.25) 0 2px 5px -1px, rgba(0, 0, 0, 0.3) 0 1px 3px -1px;\r\n  width: 31%;\r\n  overflow-y: auto;\r\n  height: 16rem;\r\n}\r\n\r\n.user-comments li {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  border-bottom: 1px solid #723e3e;\r\n  height: 15rem;\r\n}\r\n\r\n.comment-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  float: right;\r\n  margin-top: -20rem;\r\n  margin-right: 5rem;\r\n}\r\n\r\n.comment-section h4 {\r\n  color: #723e3e;\r\n}\r\n\r\n.comment-section h3 {\r\n  margin: 0;\r\n}\r\n\r\n.popupView .popupimg {\r\n  border-radius: 10%;\r\n  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;\r\n  margin: 1rem 1.5rem;\r\n  width: 20rem;\r\n}\r\n\r\n.mealInfo {\r\n  list-style: none;\r\n  width: 19rem;\r\n  padding: 1.5rem;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  display: grid;\r\n  grid-template-columns: 25% 25% 25%;\r\n  gap: 0.5rem;\r\n  margin-bottom: 5rem;\r\n  box-shadow: rgb(0 0 0 / 24%) 0 3px 8px;\r\n  background-color: wheat;\r\n  justify-items: center;\r\n}\r\n\r\n.mealInfo li {\r\n  font-weight: 500;\r\n  box-shadow: rgba(0, 0, 0, 0.25) 0 54px 55px, rgba(0, 0, 0, 0.12) 0 -12px 30px, rgba(0, 0, 0, 0.12) 0 4px 6px, rgba(0, 0, 0, 0.17) 0 12px 13px, rgba(0, 0, 0, 0.09) 0 -3px 5px;\r\n  padding: 0.5rem;\r\n  text-align: center;\r\n  background: #723e3e;\r\n  border-radius: 6%;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/comment.css"],"names":[],"mappings":"AAAA;EACE,kCAAkC;AACpC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,uBAAuB;EACvB,qBAAqB;EACrB,qBAAqB;EACrB,iBAAiB;EACjB,sIAAsI;AACxI;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,iDAAiD;EACjD,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,+GAA+G;EAC/G,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,YAAY;AACd;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,oBAAoB;EACpB,uBAAuB;EACvB,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,oCAAoC;EACpC,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;EACR,SAAS;EACT,oFAAoF;EACpF,UAAU;EACV,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,gCAAgC;EAChC,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,0CAA0C;EAC1C,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,kCAAkC;EAClC,WAAW;EACX,mBAAmB;EACnB,sCAAsC;EACtC,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,6KAA6K;EAC7K,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;AACnB","sourcesContent":["body {\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.popup {\r\n  display: none;\r\n}\r\n\r\n.fa-hat-chef {\r\n  margin-left: 17rem;\r\n  margin-bottom: 1rem;\r\n  color: #723e3e;\r\n  font-size: larger;\r\n}\r\n\r\n.popupView {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 70%;\r\n}\r\n\r\n.popup-child {\r\n  opacity: 0.9;\r\n  height: 40rem;\r\n  padding-top: 1rem;\r\n  padding-right: 1rem;\r\n  padding-left: 2rem;\r\n  border: 2px solid black;\r\n  background: aliceblue;\r\n  background-size: 100%;\r\n  border-radius: 2%;\r\n  box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0 30px 60px -30px, rgba(10, 37, 64, 0.35) 0 -2px 6px 0 inset;\r\n}\r\n\r\n.popupView .closepopup {\r\n  float: right;\r\n  background: none;\r\n  border: none;\r\n  box-shadow: none;\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.popupView h3 {\r\n  text-align: left;\r\n  color: #723e3e;\r\n  margin-left: 2rem;\r\n}\r\n\r\n#comment-btn {\r\n  padding: 0.5rem;\r\n  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\r\n  background: #723e3e;\r\n  color: aliceblue;\r\n  border: none;\r\n  width: 50%;\r\n  font-weight: bold;\r\n}\r\n\r\n#comment-btn:hover {\r\n  box-shadow: none;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0 2px 4px, rgba(0, 0, 0, 0.3) 0 7px 13px -3px, rgba(0, 0, 0, 0.2) 0 -3px 0 inset;\r\n  background: aliceblue;\r\n  color: #723e3e;\r\n}\r\n\r\n#msg {\r\n  border: none;\r\n  background: #ffe0a3;\r\n}\r\n\r\n#msg:active {\r\n  border: none;\r\n  background: #ffe0a3;\r\n  border-radius: 11%;\r\n}\r\n\r\n#name {\r\n  border: none;\r\n  background: #ffe0a3;\r\n  width: 14rem;\r\n  height: 2rem;\r\n}\r\n\r\n#msg:focus,\r\n#name:focus {\r\n  outline: none;\r\n}\r\n\r\n.meal-instructions-child {\r\n  display: none;\r\n}\r\n\r\n.meal-instructions-parent:hover .meal-instructions-child {\r\n  text-align: left;\r\n  font-weight: bold;\r\n  margin: -15rem 1rem;\r\n  border: 2px solid black;\r\n  height: auto;\r\n  position: absolute;\r\n  z-index: 1;\r\n  margin-bottom: 10rem;\r\n  background-color: white;\r\n  transition: 1s;\r\n  display: block;\r\n}\r\n\r\n.user-comments {\r\n  position: fixed;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: rgb(250, 239, 218);\r\n  align-items: center;\r\n  justify-content: center;\r\n  top: 11%;\r\n  left: 57%;\r\n  box-shadow: rgba(50, 50, 93, 0.25) 0 2px 5px -1px, rgba(0, 0, 0, 0.3) 0 1px 3px -1px;\r\n  width: 31%;\r\n  overflow-y: auto;\r\n  height: 16rem;\r\n}\r\n\r\n.user-comments li {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  border-bottom: 1px solid #723e3e;\r\n  height: 15rem;\r\n}\r\n\r\n.comment-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  float: right;\r\n  margin-top: -20rem;\r\n  margin-right: 5rem;\r\n}\r\n\r\n.comment-section h4 {\r\n  color: #723e3e;\r\n}\r\n\r\n.comment-section h3 {\r\n  margin: 0;\r\n}\r\n\r\n.popupView .popupimg {\r\n  border-radius: 10%;\r\n  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;\r\n  margin: 1rem 1.5rem;\r\n  width: 20rem;\r\n}\r\n\r\n.mealInfo {\r\n  list-style: none;\r\n  width: 19rem;\r\n  padding: 1.5rem;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  display: grid;\r\n  grid-template-columns: 25% 25% 25%;\r\n  gap: 0.5rem;\r\n  margin-bottom: 5rem;\r\n  box-shadow: rgb(0 0 0 / 24%) 0 3px 8px;\r\n  background-color: wheat;\r\n  justify-items: center;\r\n}\r\n\r\n.mealInfo li {\r\n  font-weight: 500;\r\n  box-shadow: rgba(0, 0, 0, 0.25) 0 54px 55px, rgba(0, 0, 0, 0.12) 0 -12px 30px, rgba(0, 0, 0, 0.12) 0 4px 6px, rgba(0, 0, 0, 0.17) 0 12px 13px, rgba(0, 0, 0, 0.09) 0 -3px 5px;\r\n  padding: 0.5rem;\r\n  text-align: center;\r\n  background: #723e3e;\r\n  border-radius: 6%;\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "@media only screen and (min-width: 992px) {\r\n  .meal-img-div {\r\n    height: 400px;\r\n  }\r\n\r\n  .meal-img {\r\n    height: 400px;\r\n    width: 400px;\r\n  }\r\n\r\n  .reservation-form,\r\n  .reservation-info,\r\n  .info {\r\n    font-size: larger;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/reservation-desktop.css"],"names":[],"mappings":"AAAA;EACE;IACE,aAAa;EACf;;EAEA;IACE,aAAa;IACb,YAAY;EACd;;EAEA;;;IAGE,iBAAiB;EACnB;AACF","sourcesContent":["@media only screen and (min-width: 992px) {\r\n  .meal-img-div {\r\n    height: 400px;\r\n  }\r\n\r\n  .meal-img {\r\n    height: 400px;\r\n    width: 400px;\r\n  }\r\n\r\n  .reservation-form,\r\n  .reservation-info,\r\n  .info {\r\n    font-size: larger;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "fieldset {\r\n  border: none;\r\n  width: 30%;\r\n  padding: 0;\r\n  justify-self: center;\r\n}\r\n\r\n.reservation {\r\n  display: none;\r\n  z-index: 9;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  position: fixed;\r\n  flex-wrap: wrap;\r\n  background: #ec5242;\r\n  justify-content: space-between;\r\n  margin: auto;\r\n  top: 0;\r\n}\r\n\r\n.reservation-list-div {\r\n  width: 96%;\r\n  height: 97vh;\r\n  margin: 2%;\r\n  border: 1px solid #000;\r\n}\r\n\r\n.div.cross-img-div {\r\n  max-width: 8%;\r\n}\r\n\r\n.meal-img-div {\r\n  height: 300px;\r\n  margin-top: 20px;\r\n  margin-right: 5%;\r\n  margin-left: 5%;\r\n  justify-content: center;\r\n}\r\n\r\n.meal-img {\r\n  height: 300px;\r\n  width: 300px;\r\n  resize: both;\r\n}\r\n\r\n.click {\r\n  position: fixed;\r\n  right: 7%;\r\n}\r\n\r\n.reservations-list {\r\n  width: 60%;\r\n  background: #fff;\r\n  align-self: center;\r\n  padding: 2%;\r\n  height: 100px;\r\n}\r\n\r\n.reservation-list-div,\r\n.reservations-list {\r\n  overflow-y: scroll;\r\n}\r\n\r\n.reservation-form,\r\n.reservation-info,\r\n.info {\r\n  text-align: center;\r\n}\r\n\r\n.reservation-form {\r\n  align-self: center;\r\n  width: 300px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.reservation,\r\n.reservation-list-div,\r\n.reservation-info,\r\n.reservation-form,\r\n.form {\r\n  flex-direction: column;\r\n}\r\n\r\n.form-item {\r\n  height: 40px;\r\n}\r\n\r\n.addButton {\r\n  font-size: 25px;\r\n}\r\n\r\n.addButton:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.margin-bottom {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.d-flex {\r\n  display: flex;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/reservation.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,UAAU;EACV,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,UAAU;EACV,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;EACZ,MAAM;AACR;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;EACf,SAAS;AACX;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;EACX,aAAa;AACf;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;;;EAGE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;;;;EAKE,sBAAsB;AACxB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf","sourcesContent":["fieldset {\r\n  border: none;\r\n  width: 30%;\r\n  padding: 0;\r\n  justify-self: center;\r\n}\r\n\r\n.reservation {\r\n  display: none;\r\n  z-index: 9;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  position: fixed;\r\n  flex-wrap: wrap;\r\n  background: #ec5242;\r\n  justify-content: space-between;\r\n  margin: auto;\r\n  top: 0;\r\n}\r\n\r\n.reservation-list-div {\r\n  width: 96%;\r\n  height: 97vh;\r\n  margin: 2%;\r\n  border: 1px solid #000;\r\n}\r\n\r\n.div.cross-img-div {\r\n  max-width: 8%;\r\n}\r\n\r\n.meal-img-div {\r\n  height: 300px;\r\n  margin-top: 20px;\r\n  margin-right: 5%;\r\n  margin-left: 5%;\r\n  justify-content: center;\r\n}\r\n\r\n.meal-img {\r\n  height: 300px;\r\n  width: 300px;\r\n  resize: both;\r\n}\r\n\r\n.click {\r\n  position: fixed;\r\n  right: 7%;\r\n}\r\n\r\n.reservations-list {\r\n  width: 60%;\r\n  background: #fff;\r\n  align-self: center;\r\n  padding: 2%;\r\n  height: 100px;\r\n}\r\n\r\n.reservation-list-div,\r\n.reservations-list {\r\n  overflow-y: scroll;\r\n}\r\n\r\n.reservation-form,\r\n.reservation-info,\r\n.info {\r\n  text-align: center;\r\n}\r\n\r\n.reservation-form {\r\n  align-self: center;\r\n  width: 300px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.reservation,\r\n.reservation-list-div,\r\n.reservation-info,\r\n.reservation-form,\r\n.form {\r\n  flex-direction: column;\r\n}\r\n\r\n.form-item {\r\n  height: 40px;\r\n}\r\n\r\n.addButton {\r\n  font-size: 25px;\r\n}\r\n\r\n.addButton:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.margin-bottom {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.d-flex {\r\n  display: flex;\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  list-style: none;\r\n  text-decoration: none;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 0;\r\n  z-index: 0;\r\n}\r\n\r\nhtml {\r\n  background-color: #943939;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0 30px 0 30px;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 2% 0 2% 0;\r\n}\r\n\r\n.logo {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  height: 7rem;\r\n  width: 7rem;\r\n}\r\n\r\nli {\r\n  padding-left: 30px;\r\n}\r\n\r\nli a {\r\n  font-size: 20px;\r\n  color: #ffe0a3;\r\n}\r\n\r\n.container {\r\n  display: grid;\r\n  justify-content: center;\r\n  text-align: center;\r\n  grid-template-columns: 25% 25% 25%;\r\n  grid-gap: 3rem;\r\n  height: 5%;\r\n}\r\n\r\n.foodPic {\r\n  width: 50%;\r\n}\r\n\r\nbutton {\r\n  margin-bottom: 10px;\r\n  box-shadow: 5px 5px 5px;\r\n  cursor: pointer;\r\n  border-radius: 25px;\r\n}\r\n\r\nfooter {\r\n  margin-top: 5rem;\r\n  padding-top: 1rem;\r\n  margin-bottom: -1rem;\r\n  background-color: #723e3e;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,cAAc;EACd,eAAe;EACf,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,gDAAuC;EACvC,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,kCAAkC;EAClC,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,oBAAoB;EACpB,yBAAyB;EACzB,WAAW;EACX,kBAAkB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\r\n\r\n* {\r\n  list-style: none;\r\n  text-decoration: none;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 0;\r\n  z-index: 0;\r\n}\r\n\r\nhtml {\r\n  background-color: #943939;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0 30px 0 30px;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 2% 0 2% 0;\r\n}\r\n\r\n.logo {\r\n  content: url(\"../logo_transparent.png\");\r\n  height: 7rem;\r\n  width: 7rem;\r\n}\r\n\r\nli {\r\n  padding-left: 30px;\r\n}\r\n\r\nli a {\r\n  font-size: 20px;\r\n  color: #ffe0a3;\r\n}\r\n\r\n.container {\r\n  display: grid;\r\n  justify-content: center;\r\n  text-align: center;\r\n  grid-template-columns: 25% 25% 25%;\r\n  grid-gap: 3rem;\r\n  height: 5%;\r\n}\r\n\r\n.foodPic {\r\n  width: 50%;\r\n}\r\n\r\nbutton {\r\n  margin-bottom: 10px;\r\n  box-shadow: 5px 5px 5px;\r\n  cursor: pointer;\r\n  border-radius: 25px;\r\n}\r\n\r\nfooter {\r\n  margin-top: 5rem;\r\n  padding-top: 1rem;\r\n  margin-bottom: -1rem;\r\n  background-color: #723e3e;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/involvementApi.js":
/*!*******************************!*\
  !*** ./src/involvementApi.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appID": () => (/* binding */ appID),
/* harmony export */   "addReservation": () => (/* binding */ addReservation),
/* harmony export */   "getReservations": () => (/* binding */ getReservations)
/* harmony export */ });
const appID = async () => {
  const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const response = await fetch(baseURL,
    {
      method: 'POST',
      body: '{}',
      headers: {
        'Content-type': 'application/json',
      },
    });
  const id = await response.text();
  return id;
};

const displayReservations = (data) => {
  let count = 0;
  const paragraphOfReservations = document.getElementById('reservations-list');
  const h1 = document.getElementById('reservations-count');

  if (typeof data !== 'undefined' && data !== null && data.error === undefined) {
    count = data.length;
    let stringOfLists = '';
    data.forEach((reservation) => {
      if (reservation.username === ' ') {
        reservation.username = 'John Doe';
      }
      stringOfLists += `<em>${reservation.date_start} - ${reservation.date_end} by ${reservation.username}</em><br>`;
    });
    paragraphOfReservations.innerHTML = stringOfLists;
  }

  if (count > 0) {
    h1.innerHTML = `Reservations <em>(${count})</em>`;
  } else {
    h1.innerHTML = 'Reservations';
    paragraphOfReservations.innerHTML = '';
  }

  return count;
};

const getReservations = async (itemId) => {
  const baseUrlGet = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HAaVpDPtc9PaGxeihttl/reservations?item_id=';
  const getData = async () => (await fetch(`${baseUrlGet}${itemId}`)).json();

  const data = await getData();
  await displayReservations(data);
};

const displayMessage = (message) => {
  const p = document.getElementById('info-message');
  p.innerText = message;
  p.style.color = '#fff';
  setTimeout(() => {
    p.style.color = 'transparent';
  }, 3000);
};

const addReservation = async (itemId, name, startDate, endDate) => {
  if (name || startDate || endDate) {
    const reservation = {
      item_id: itemId,
      username: name,
      date_start: startDate,
      date_end: endDate,
    };

    const baseUrlWithId = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HAaVpDPtc9PaGxeihttl/reservations/';
    const message = async () => (await fetch(baseUrlWithId, {
      method: 'POST',
      body: JSON.stringify(reservation),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })).text();

    const updateStatus = await message();
    await getReservations(itemId);

    if (updateStatus.toLocaleLowerCase() === 'created') {
      displayMessage('New Reservation made...');
    } else {
      displayMessage('An error occured, Please try again...');
    }
  }
};



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
/* harmony import */ var _involvementApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementApi.js */ "./src/involvementApi.js");


const addNewScore = (buttonId) => {
  const nameInput = document.getElementById('player_name');
  const startDateInput = document.getElementById('player_startDate');
  const endDateInput = document.getElementById('player_endDate');
  (0,_involvementApi_js__WEBPACK_IMPORTED_MODULE_0__.addReservation)(buttonId, nameInput.value, startDateInput.value, endDateInput.value);
  nameInput.placeholder = 'Your name';
};

const addProperties = (singleMeal) => {
  const h1 = document.getElementById('meal-name');
  h1.innerText = singleMeal[0].strMeal;

  const p = document.getElementById('info');
  p.innerHTML = `<strong>Region: ${singleMeal[0].strArea}</strong> &nbsp; <strong>Main Ingredient: ${singleMeal[0].strIngredient1}</strong> <br>
  <strong>Category: ${singleMeal[0].strCategory}</strong> &nbsp; <strong>Tag: ${singleMeal[0].strTags}</strong> <br>`;

  const img = document.getElementById('meal-img');
  img.src = singleMeal[0].strMealThumb;

  const addButton = document.getElementById('addButton');
  addButton.name = singleMeal[0].idMeal;

  (0,_involvementApi_js__WEBPACK_IMPORTED_MODULE_0__.getReservations)(singleMeal[0].idMeal);

  addButton.onclick = async (e) => {
    await addNewScore(e.target.name);
  };
};

const showPopup = (index) => {
  const div = document.getElementById('reservation');
  div.style.display = 'flex';

  if (localStorage.getItem('Meals') !== null) {
    const arrayOfMeals = JSON.parse(localStorage.getItem('Meals'));
    const singleMeal = arrayOfMeals.find((meal) => meal[0].idMeal === index);

    addProperties(singleMeal);
  }
};

const addReservationButtonEvent = () => {
  const reservationButtons = document.querySelectorAll('.Reservaton');

  reservationButtons.forEach((button) => {
    button.onclick = (e) => {
      const index = e.target.parentNode.id;
      showPopup(index);
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxnRkFBeUI7O0FBRTdCO0FBQ0EsR0FBRzs7QUFFSCxFQUFFLHlFQUFrQjtBQUNwQixFQUFFLHdFQUFpQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCx3RUFBMEI7QUFDMUI7QUFDQSxJQUFJLDhEQUFZO0FBQ2hCLElBQUkscUVBQW1CLENBQUMseURBQVc7QUFDbkM7QUFDQSxDQUFDOztBQUVELG1FQUFxQjtBQUNyQjtBQUNBOztBQUVBLElBQUksaUVBQW1CO0FBQ3ZCLElBQUksaUVBQW1CO0FBQ3ZCLElBQUksb0VBQXNCO0FBQzFCO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vc3JjL2NvbW1lbnQuY3NzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL3NyYy9yZXNlcnZhdGlvbi1kZXNrdG9wLmNzcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9zcmMvcmVzZXJ2YXRpb24uY3NzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL3NyYy9jb21tZW50LmNzcz84M2RhIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL3NyYy9yZXNlcnZhdGlvbi1kZXNrdG9wLmNzcz8wMWFkIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL3NyYy9yZXNlcnZhdGlvbi5jc3M/ZjU3ZiIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL3NyYy9jb21tZW50RXZlbnQuanMiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vc3JjL2ludm9sdmVtZW50QXBpLmpzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL3NyYy9saWtlcy5qcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9zcmMvcmVzZXJ2YXRpb25FdmVudHMuanMiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0NhcHN0b25lLWFwaS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL0NhcHN0b25lLWFwaS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0NhcHN0b25lLWFwaS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0NhcHN0b25lLWFwaS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhhdC1jaGVmIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxN3JlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICBjb2xvcjogIzcyM2UzZTtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBWaWV3IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY2hpbGQge1xcclxcbiAgb3BhY2l0eTogMC45O1xcclxcbiAgaGVpZ2h0OiA0MHJlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMiU7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDAgNTBweCAxMDBweCAtMjBweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDAgMzBweCA2MHB4IC0zMHB4LCByZ2JhKDEwLCAzNywgNjQsIDAuMzUpIDAgLTJweCA2cHggMCBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwVmlldyAuY2xvc2Vwb3B1cCB7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cFZpZXcgaDMge1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGNvbG9yOiAjNzIzZTNlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LWJ0biB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDIuNHB4IDIuNHB4IDMuMnB4O1xcclxcbiAgYmFja2dyb3VuZDogIzcyM2UzZTtcXHJcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LWJ0bjpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQpIDAgMnB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDAgN3B4IDEzcHggLTNweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDAgLTNweCAwIGluc2V0O1xcclxcbiAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xcclxcbiAgY29sb3I6ICM3MjNlM2U7XFxyXFxufVxcclxcblxcclxcbiNtc2cge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZTBhMztcXHJcXG59XFxyXFxuXFxyXFxuI21zZzphY3RpdmUge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZTBhMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDExJTtcXHJcXG59XFxyXFxuXFxyXFxuI25hbWUge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZTBhMztcXHJcXG4gIHdpZHRoOiAxNHJlbTtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI21zZzpmb2N1cyxcXHJcXG4jbmFtZTpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pbnN0cnVjdGlvbnMtY2hpbGQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtaW5zdHJ1Y3Rpb25zLXBhcmVudDpob3ZlciAubWVhbC1pbnN0cnVjdGlvbnMtY2hpbGQge1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbWFyZ2luOiAtMTVyZW0gMXJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB0cmFuc2l0aW9uOiAxcztcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1jb21tZW50cyB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDIzOSwgMjE4KTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHRvcDogMTElO1xcclxcbiAgbGVmdDogNTclO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwIDJweCA1cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDAgMXB4IDNweCAtMXB4O1xcclxcbiAgd2lkdGg6IDMxJTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBoZWlnaHQ6IDE2cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1jb21tZW50cyBsaSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzIzZTNlO1xcclxcbiAgaGVpZ2h0OiAxNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIG1hcmdpbi10b3A6IC0yMHJlbTtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtc2VjdGlvbiBoNCB7XFxyXFxuICBjb2xvcjogIzcyM2UzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtc2VjdGlvbiBoMyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cFZpZXcgLnBvcHVwaW1nIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMCA1cHggMTVweDtcXHJcXG4gIG1hcmdpbjogMXJlbSAxLjVyZW07XFxyXFxuICB3aWR0aDogMjByZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsSW5mbyB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgd2lkdGg6IDE5cmVtO1xcclxcbiAgcGFkZGluZzogMS41cmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSAyNSUgMjUlO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcclxcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjQlKSAwIDNweCA4cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWxJbmZvIGxpIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgNTRweCA1NXB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDAgLTEycHggMzBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwIDRweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xNykgMCAxMnB4IDEzcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMCAtM3B4IDVweDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6ICM3MjNlM2U7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2JTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbW1lbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHNJQUFzSTtBQUN4STs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaURBQWlEO0VBQ2pELG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsK0dBQStHO0VBQy9HLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsUUFBUTtFQUNSLFNBQVM7RUFDVCxvRkFBb0Y7RUFDcEYsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw2S0FBNks7RUFDN0ssZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mYS1oYXQtY2hlZiB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTdyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgY29sb3I6ICM3MjNlM2U7XFxyXFxuICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwVmlldyB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNoaWxkIHtcXHJcXG4gIG9wYWNpdHk6IDAuOTtcXHJcXG4gIGhlaWdodDogNDByZW07XFxyXFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIlO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwIDUwcHggMTAwcHggLTIwcHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDMwcHggNjBweCAtMzBweCwgcmdiYSgxMCwgMzcsIDY0LCAwLjM1KSAwIC0ycHggNnB4IDAgaW5zZXQ7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cFZpZXcgLmNsb3NlcG9wdXAge1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBWaWV3IGgzIHtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBjb2xvcjogIzcyM2UzZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudC1idG4ge1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAyLjRweCAyLjRweCAzLjJweDtcXHJcXG4gIGJhY2tncm91bmQ6ICM3MjNlM2U7XFxyXFxuICBjb2xvcjogYWxpY2VibHVlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudC1idG46aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwIDJweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDdweCAxM3B4IC0zcHgsIHJnYmEoMCwgMCwgMCwgMC4yKSAwIC0zcHggMCBpbnNldDtcXHJcXG4gIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcXHJcXG4gIGNvbG9yOiAjNzIzZTNlO1xcclxcbn1cXHJcXG5cXHJcXG4jbXNnIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmUwYTM7XFxyXFxufVxcclxcblxcclxcbiNtc2c6YWN0aXZlIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmUwYTM7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMSU7XFxyXFxufVxcclxcblxcclxcbiNuYW1lIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmUwYTM7XFxyXFxuICB3aWR0aDogMTRyZW07XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNtc2c6Zm9jdXMsXFxyXFxuI25hbWU6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtaW5zdHJ1Y3Rpb25zLWNoaWxkIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWluc3RydWN0aW9ucy1wYXJlbnQ6aG92ZXIgLm1lYWwtaW5zdHJ1Y3Rpb25zLWNoaWxkIHtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIG1hcmdpbjogLTE1cmVtIDFyZW07XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgdHJhbnNpdGlvbjogMXM7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItY29tbWVudHMge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyMzksIDIxOCk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB0b3A6IDExJTtcXHJcXG4gIGxlZnQ6IDU3JTtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMCAycHggNXB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDFweCAzcHggLTFweDtcXHJcXG4gIHdpZHRoOiAzMSU7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgaGVpZ2h0OiAxNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItY29tbWVudHMgbGkge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzcyM2UzZTtcXHJcXG4gIGhlaWdodDogMTVyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICBtYXJnaW4tdG9wOiAtMjByZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXNlY3Rpb24gaDQge1xcclxcbiAgY29sb3I6ICM3MjNlM2U7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXNlY3Rpb24gaDMge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBWaWV3IC5wb3B1cGltZyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDAgNXB4IDE1cHg7XFxyXFxuICBtYXJnaW46IDFyZW0gMS41cmVtO1xcclxcbiAgd2lkdGg6IDIwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbEluZm8ge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHdpZHRoOiAxOXJlbTtcXHJcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgMjUlIDI1JTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDI0JSkgMCAzcHggOHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsSW5mbyBsaSB7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIDU0cHggNTVweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwIC0xMnB4IDMwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMCA0cHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMTcpIDAgMTJweCAxM3B4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDAgLTNweCA1cHg7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNzIzZTNlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNiU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXHJcXG4gIC5tZWFsLWltZy1kaXYge1xcclxcbiAgICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lYWwtaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiA0MDBweDtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlc2VydmF0aW9uLWZvcm0sXFxyXFxuICAucmVzZXJ2YXRpb24taW5mbyxcXHJcXG4gIC5pbmZvIHtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9yZXNlcnZhdGlvbi1kZXNrdG9wLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7RUFDZDs7RUFFQTs7O0lBR0UsaUJBQWlCO0VBQ25CO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcclxcbiAgLm1lYWwtaW1nLWRpdiB7XFxyXFxuICAgIGhlaWdodDogNDAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVhbC1pbWcge1xcclxcbiAgICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVzZXJ2YXRpb24tZm9ybSxcXHJcXG4gIC5yZXNlcnZhdGlvbi1pbmZvLFxcclxcbiAgLmluZm8ge1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZmllbGRzZXQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB6LWluZGV4OiA5O1xcclxcbiAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGJhY2tncm91bmQ6ICNlYzUyNDI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbi1saXN0LWRpdiB7XFxyXFxuICB3aWR0aDogOTYlO1xcclxcbiAgaGVpZ2h0OiA5N3ZoO1xcclxcbiAgbWFyZ2luOiAyJTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5kaXYuY3Jvc3MtaW1nLWRpdiB7XFxyXFxuICBtYXgtd2lkdGg6IDglO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pbWctZGl2IHtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pbWcge1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIHJlc2l6ZTogYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsaWNrIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHJpZ2h0OiA3JTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9ucy1saXN0IHtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24tbGlzdC1kaXYsXFxyXFxuLnJlc2VydmF0aW9ucy1saXN0IHtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWZvcm0sXFxyXFxuLnJlc2VydmF0aW9uLWluZm8sXFxyXFxuLmluZm8ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24tZm9ybSB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24sXFxyXFxuLnJlc2VydmF0aW9uLWxpc3QtZGl2LFxcclxcbi5yZXNlcnZhdGlvbi1pbmZvLFxcclxcbi5yZXNlcnZhdGlvbi1mb3JtLFxcclxcbi5mb3JtIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWl0ZW0ge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkQnV0dG9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZEJ1dHRvbjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYXJnaW4tYm90dG9tIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5kLWZsZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Jlc2VydmF0aW9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsVUFBVTtFQUNWLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLE1BQU07QUFDUjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTs7O0VBR0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7Ozs7O0VBS0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZmllbGRzZXQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB6LWluZGV4OiA5O1xcclxcbiAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGJhY2tncm91bmQ6ICNlYzUyNDI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbi1saXN0LWRpdiB7XFxyXFxuICB3aWR0aDogOTYlO1xcclxcbiAgaGVpZ2h0OiA5N3ZoO1xcclxcbiAgbWFyZ2luOiAyJTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5kaXYuY3Jvc3MtaW1nLWRpdiB7XFxyXFxuICBtYXgtd2lkdGg6IDglO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pbWctZGl2IHtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pbWcge1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIHJlc2l6ZTogYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsaWNrIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHJpZ2h0OiA3JTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9ucy1saXN0IHtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24tbGlzdC1kaXYsXFxyXFxuLnJlc2VydmF0aW9ucy1saXN0IHtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWZvcm0sXFxyXFxuLnJlc2VydmF0aW9uLWluZm8sXFxyXFxuLmluZm8ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24tZm9ybSB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24sXFxyXFxuLnJlc2VydmF0aW9uLWxpc3QtZGl2LFxcclxcbi5yZXNlcnZhdGlvbi1pbmZvLFxcclxcbi5yZXNlcnZhdGlvbi1mb3JtLFxcclxcbi5mb3JtIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWl0ZW0ge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkQnV0dG9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZEJ1dHRvbjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYXJnaW4tYm90dG9tIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5kLWZsZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9sb2dvX3RyYW5zcGFyZW50LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIHotaW5kZXg6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0MzkzOTtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwIDMwcHggMCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAyJSAwIDIlIDA7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBoZWlnaHQ6IDdyZW07XFxyXFxuICB3aWR0aDogN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5saSBhIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGNvbG9yOiAjZmZlMGEzO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDI1JSAyNSU7XFxyXFxuICBncmlkLWdhcDogM3JlbTtcXHJcXG4gIGhlaWdodDogNSU7XFxyXFxufVxcclxcblxcclxcbi5mb29kUGljIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgbWFyZ2luLXRvcDogNXJlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogLTFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzIzZTNlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnREFBdUM7RUFDdkMsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICB6LWluZGV4OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NDM5Mzk7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMCAzMHB4IDAgMzBweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMiUgMCAyJSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4uL2xvZ29fdHJhbnNwYXJlbnQucG5nXFxcIik7XFxyXFxuICBoZWlnaHQ6IDdyZW07XFxyXFxuICB3aWR0aDogN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5saSBhIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGNvbG9yOiAjZmZlMGEzO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDI1JSAyNSU7XFxyXFxuICBncmlkLWdhcDogM3JlbTtcXHJcXG4gIGhlaWdodDogNSU7XFxyXFxufVxcclxcblxcclxcbi5mb29kUGljIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgbWFyZ2luLXRvcDogNXJlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogLTFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzIzZTNlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbW1lbnQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21tZW50LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNlcnZhdGlvbi1kZXNrdG9wLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXJ2YXRpb24tZGVza3RvcC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXJ2YXRpb24uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNlcnZhdGlvbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYmFzZVVybCA9ICdodHRwOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9sb29rdXAucGhwP2k9JztcclxuXHJcbmNvbnN0IGZldGNoTWVhbHMgPSBhc3luYyAobWVhbElkKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfSR7bWVhbElkfWApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmZXRjaE1lYWxzOyIsImNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwJyk7XHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxuXHJcbmNvbnN0IHBvcHVwQ29tbWVudCA9IChldmVudFRhcmdldCkgPT4ge1xyXG4gIGNvbnN0IG1lYWxBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ01lYWxzJykpO1xyXG5cclxuICBpZiAobWVhbEFycmF5ICE9PSBudWxsKSB7XHJcbiAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdwb3B1cFZpZXcnKTtcclxuICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgLyogZXNsaW50LWRpc2FibGUgKi9cclxuICAgIGNvbnN0IHRtcCA9IG1lYWxBcnJheS5maW5kSW5kZXgoKGVsKSA9PiBlbFswXS5pZE1lYWwgPT0gcGFyc2VJbnQoZXZlbnRUYXJnZXQuaWQsIDEwKSk7XHJcbiAgICAvKiBlc2xpbnQtZW5hYmxlICovXHJcblxyXG4gICAgcG9wdXAuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3MgPVwicG9wdXAtY2hpbGRcIj4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwidXNlci1jb21tZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2Vwb3B1cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICZ0aW1lcztcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJwb3B1cGltZ1wiICBzcmM9XCIke21lYWxBcnJheVt0bXBdWzBdLnN0ck1lYWxUaHVtYn1cIiAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgzPiR7bWVhbEFycmF5W3RtcF1bMF0uc3RyTWVhbH08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWluc3RydWN0aW9ucy1wYXJlbnRcIj4gPGkgY2xhc3M9XCJmYXMgZmEtaGF0LWNoZWZcIj5SZWNpcGU8L2k+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1pbnN0cnVjdGlvbnMtY2hpbGRcIj4ke21lYWxBcnJheVt0bXBdWzBdLnN0ckluc3RydWN0aW9uc308L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJtZWFsSW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT4ke21lYWxBcnJheVt0bXBdWzBdLnN0ckNhdGVnb3J5fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPiR7bWVhbEFycmF5W3RtcF1bMF0uc3RyQXJlYX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgbWV0aG9kPVwiZ2V0XCIgY2xhc3M9XCJjb21tZW50LXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+QWRkIHlvdXIgY29tbWVudDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgbWF4bGVuZ3RoPVwiMzBcIiBuYW1lPVwidXNlcl9uYW1lXCIgcGxhY2Vob2xkZXI9XCJGdWxsIG5hbWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBtYXhsZW5ndGg9XCI1MDBcIiBpZD1cIm1zZ1wiIG5hbWU9XCJ1c2VyX21lc3NhZ2VcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodFwiIHJvd3M9XCI1XCIgY29scz1cIjVcInJlcXVpcmVkPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJjb21tZW50LWJ0blwiIGNsYXNzPVwiYnRuLWJ0blwiPkNvbW1lbnQ8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGA7XHJcblxyXG4gICAgY29uc3QgdGFnc0FyciA9IG1lYWxBcnJheVt0bXBdWzBdLnN0clRhZ3Muc3BsaXQoJywnKTtcclxuICAgIC8qIGVzbGludC1kaXNhYmxlICovXHJcbiAgICBmb3IgKGNvbnN0IHRhZyBvZiB0YWdzQXJyKSB7XHJcbiAgICAgIGlmICh0YWcgPT09ICcnKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgVGFnbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIFRhZ2xpLmlubmVySFRNTCArPSBgJHt0YWd9YDtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhbEluZm8nKS5hcHBlbmRDaGlsZChUYWdsaSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIGVzbGludC1lbmFibGUgKi9cclxuXHJcbiAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICBjb250YWluZXIuc3R5bGUuZmlsdGVyID0gJ2JsdXIoNXB4KSc7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5zdHlsZS5maWx0ZXIgPSAnYmx1cig1cHgpJztcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBsb2FkQ29tbWVudCA9IChuYW1lLCBjb21tZW50KSA9PiB7XHJcbiAgY29uc3QgY29tbWVudEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGNvbW1lbnRJbmZvLmlubmVySFRNTCA9IGBcclxuICAgICAgPHNwYW4gY2xhc3M9XCJ1c2VyXCI+JHtuYW1lfTogIDwvc3Bhbj5cclxuICAgICAgJm5ic3A7XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwidXNlcl9zY29yZVwiPiR7Y29tbWVudH08L3NwYW4+XHJcbiAgICAgIGA7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItY29tbWVudHMnKS5hcHBlbmRDaGlsZChjb21tZW50SW5mbyk7XHJcbn07XHJcblxyXG5jb25zdCBsb2FkQ29tbWVudHNTZWN0aW9uID0gKHVzZXJBcnIpID0+IHtcclxuICB1c2VyQXJyLmZvckVhY2goKGRhdGEpID0+IHtcclxuICAgIGxvYWRDb21tZW50KGRhdGEubmFtZSwgZGF0YS5jb21tZW50KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHVzZXJDb21tZW50RGF0YSA9IHtcclxuICBuYW1lOiAnJyxcclxuICBjb21tZW50OiAnJyxcclxufTtcclxuY29uc3QgdXNlckRhdGFBcnIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyRGF0YScpKSB8fCBbXTtcclxudXNlckRhdGFBcnIucHVzaCh1c2VyQ29tbWVudERhdGEpO1xyXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckRhdGEnLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YUFycikpO1xyXG5cclxuZXhwb3J0IHtcclxuICBjb250YWluZXIsIGJvZHksIHBvcHVwLCBwb3B1cENvbW1lbnQsIHVzZXJEYXRhQXJyLCBsb2FkQ29tbWVudHNTZWN0aW9uLFxyXG59OyIsImNvbnN0IGFwcElEID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGJhc2VVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGJhc2VVUkwsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBib2R5OiAne30nLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIGNvbnN0IGlkID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gIHJldHVybiBpZDtcclxufTtcclxuXHJcbmNvbnN0IGRpc3BsYXlSZXNlcnZhdGlvbnMgPSAoZGF0YSkgPT4ge1xyXG4gIGxldCBjb3VudCA9IDA7XHJcbiAgY29uc3QgcGFyYWdyYXBoT2ZSZXNlcnZhdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXRpb25zLWxpc3QnKTtcclxuICBjb25zdCBoMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbnMtY291bnQnKTtcclxuXHJcbiAgaWYgKHR5cGVvZiBkYXRhICE9PSAndW5kZWZpbmVkJyAmJiBkYXRhICE9PSBudWxsICYmIGRhdGEuZXJyb3IgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgY291bnQgPSBkYXRhLmxlbmd0aDtcclxuICAgIGxldCBzdHJpbmdPZkxpc3RzID0gJyc7XHJcbiAgICBkYXRhLmZvckVhY2goKHJlc2VydmF0aW9uKSA9PiB7XHJcbiAgICAgIGlmIChyZXNlcnZhdGlvbi51c2VybmFtZSA9PT0gJyAnKSB7XHJcbiAgICAgICAgcmVzZXJ2YXRpb24udXNlcm5hbWUgPSAnSm9obiBEb2UnO1xyXG4gICAgICB9XHJcbiAgICAgIHN0cmluZ09mTGlzdHMgKz0gYDxlbT4ke3Jlc2VydmF0aW9uLmRhdGVfc3RhcnR9IC0gJHtyZXNlcnZhdGlvbi5kYXRlX2VuZH0gYnkgJHtyZXNlcnZhdGlvbi51c2VybmFtZX08L2VtPjxicj5gO1xyXG4gICAgfSk7XHJcbiAgICBwYXJhZ3JhcGhPZlJlc2VydmF0aW9ucy5pbm5lckhUTUwgPSBzdHJpbmdPZkxpc3RzO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvdW50ID4gMCkge1xyXG4gICAgaDEuaW5uZXJIVE1MID0gYFJlc2VydmF0aW9ucyA8ZW0+KCR7Y291bnR9KTwvZW0+YDtcclxuICB9IGVsc2Uge1xyXG4gICAgaDEuaW5uZXJIVE1MID0gJ1Jlc2VydmF0aW9ucyc7XHJcbiAgICBwYXJhZ3JhcGhPZlJlc2VydmF0aW9ucy5pbm5lckhUTUwgPSAnJztcclxuICB9XHJcblxyXG4gIHJldHVybiBjb3VudDtcclxufTtcclxuXHJcbmNvbnN0IGdldFJlc2VydmF0aW9ucyA9IGFzeW5jIChpdGVtSWQpID0+IHtcclxuICBjb25zdCBiYXNlVXJsR2V0ID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0hBYVZwRFB0YzlQYUd4ZWlodHRsL3Jlc2VydmF0aW9ucz9pdGVtX2lkPSc7XHJcbiAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IChhd2FpdCBmZXRjaChgJHtiYXNlVXJsR2V0fSR7aXRlbUlkfWApKS5qc29uKCk7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhKCk7XHJcbiAgYXdhaXQgZGlzcGxheVJlc2VydmF0aW9ucyhkYXRhKTtcclxufTtcclxuXHJcbmNvbnN0IGRpc3BsYXlNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcclxuICBjb25zdCBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tbWVzc2FnZScpO1xyXG4gIHAuaW5uZXJUZXh0ID0gbWVzc2FnZTtcclxuICBwLnN0eWxlLmNvbG9yID0gJyNmZmYnO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgcC5zdHlsZS5jb2xvciA9ICd0cmFuc3BhcmVudCc7XHJcbiAgfSwgMzAwMCk7XHJcbn07XHJcblxyXG5jb25zdCBhZGRSZXNlcnZhdGlvbiA9IGFzeW5jIChpdGVtSWQsIG5hbWUsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSkgPT4ge1xyXG4gIGlmIChuYW1lIHx8IHN0YXJ0RGF0ZSB8fCBlbmREYXRlKSB7XHJcbiAgICBjb25zdCByZXNlcnZhdGlvbiA9IHtcclxuICAgICAgaXRlbV9pZDogaXRlbUlkLFxyXG4gICAgICB1c2VybmFtZTogbmFtZSxcclxuICAgICAgZGF0ZV9zdGFydDogc3RhcnREYXRlLFxyXG4gICAgICBkYXRlX2VuZDogZW5kRGF0ZSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYmFzZVVybFdpdGhJZCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9IQWFWcERQdGM5UGFHeGVpaHR0bC9yZXNlcnZhdGlvbnMvJztcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBhc3luYyAoKSA9PiAoYXdhaXQgZmV0Y2goYmFzZVVybFdpdGhJZCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVzZXJ2YXRpb24pLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgICAgfSxcclxuICAgIH0pKS50ZXh0KCk7XHJcblxyXG4gICAgY29uc3QgdXBkYXRlU3RhdHVzID0gYXdhaXQgbWVzc2FnZSgpO1xyXG4gICAgYXdhaXQgZ2V0UmVzZXJ2YXRpb25zKGl0ZW1JZCk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZVN0YXR1cy50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSAnY3JlYXRlZCcpIHtcclxuICAgICAgZGlzcGxheU1lc3NhZ2UoJ05ldyBSZXNlcnZhdGlvbiBtYWRlLi4uJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNwbGF5TWVzc2FnZSgnQW4gZXJyb3Igb2NjdXJlZCwgUGxlYXNlIHRyeSBhZ2Fpbi4uLicpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IGFwcElELCBhZGRSZXNlcnZhdGlvbiwgZ2V0UmVzZXJ2YXRpb25zIH07IiwiY29uc3QgYmFzZVVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xyXG5jb25zdCBhcHBJZCA9ICcxalRaZzVBak1IMXFvdUI5dmlMMic7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBhcHBJRCgpIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGJhc2VVUkwsIHsgbWV0aG9kOiAnUE9TVCcgfSk7XHJcbiAgY29uc3QgaWQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgcmV0dXJuIGlkO1xyXG59XHJcblxyXG5jb25zdCBtZWFsSWRzID0gWzUyNzY4LCA1Mjc3NiwgNTI3NjUsIDUyOTM1LCA1Mjk2MCwgNTI5NjJdO1xyXG5cclxuY29uc3QgZGF0YSA9IFtdO1xyXG5cclxuY29uc3QgY3JlYXRlTGlrZXMgPSBhc3luYyAobWVhbElkKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfSR7YXBwSWR9L2xpa2VzL2AsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBtZWFsSWQgfSksXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IGxpa2VzID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gIHJldHVybiBsaWtlcztcclxufTtcclxuXHJcbm1lYWxJZHMuZm9yRWFjaCgoaWQpID0+IGRhdGEucHVzaChjcmVhdGVMaWtlcyhpZCkpKTtcclxuXHJcbmNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke2FwcElkfS9saWtlcy9gKTtcclxuICBjb25zdCBsaWtlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gbGlrZXM7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjcmVhdGVMaWtlcywgYXBwSUQsIGdldExpa2VzIH07IiwiaW1wb3J0IHsgYWRkUmVzZXJ2YXRpb24sIGdldFJlc2VydmF0aW9ucyB9IGZyb20gJy4vaW52b2x2ZW1lbnRBcGkuanMnO1xuXG5jb25zdCBhZGROZXdTY29yZSA9IChidXR0b25JZCkgPT4ge1xuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyX25hbWUnKTtcbiAgY29uc3Qgc3RhcnREYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyX3N0YXJ0RGF0ZScpO1xuICBjb25zdCBlbmREYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyX2VuZERhdGUnKTtcbiAgYWRkUmVzZXJ2YXRpb24oYnV0dG9uSWQsIG5hbWVJbnB1dC52YWx1ZSwgc3RhcnREYXRlSW5wdXQudmFsdWUsIGVuZERhdGVJbnB1dC52YWx1ZSk7XG4gIG5hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdZb3VyIG5hbWUnO1xufTtcblxuY29uc3QgYWRkUHJvcGVydGllcyA9IChzaW5nbGVNZWFsKSA9PiB7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lYWwtbmFtZScpO1xuICBoMS5pbm5lclRleHQgPSBzaW5nbGVNZWFsWzBdLnN0ck1lYWw7XG5cbiAgY29uc3QgcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvJyk7XG4gIHAuaW5uZXJIVE1MID0gYDxzdHJvbmc+UmVnaW9uOiAke3NpbmdsZU1lYWxbMF0uc3RyQXJlYX08L3N0cm9uZz4gJm5ic3A7IDxzdHJvbmc+TWFpbiBJbmdyZWRpZW50OiAke3NpbmdsZU1lYWxbMF0uc3RySW5ncmVkaWVudDF9PC9zdHJvbmc+IDxicj5cbiAgPHN0cm9uZz5DYXRlZ29yeTogJHtzaW5nbGVNZWFsWzBdLnN0ckNhdGVnb3J5fTwvc3Ryb25nPiAmbmJzcDsgPHN0cm9uZz5UYWc6ICR7c2luZ2xlTWVhbFswXS5zdHJUYWdzfTwvc3Ryb25nPiA8YnI+YDtcblxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVhbC1pbWcnKTtcbiAgaW1nLnNyYyA9IHNpbmdsZU1lYWxbMF0uc3RyTWVhbFRodW1iO1xuXG4gIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRCdXR0b24nKTtcbiAgYWRkQnV0dG9uLm5hbWUgPSBzaW5nbGVNZWFsWzBdLmlkTWVhbDtcblxuICBnZXRSZXNlcnZhdGlvbnMoc2luZ2xlTWVhbFswXS5pZE1lYWwpO1xuXG4gIGFkZEJ1dHRvbi5vbmNsaWNrID0gYXN5bmMgKGUpID0+IHtcbiAgICBhd2FpdCBhZGROZXdTY29yZShlLnRhcmdldC5uYW1lKTtcbiAgfTtcbn07XG5cbmNvbnN0IHNob3dQb3B1cCA9IChpbmRleCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXRpb24nKTtcbiAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdNZWFscycpICE9PSBudWxsKSB7XG4gICAgY29uc3QgYXJyYXlPZk1lYWxzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnTWVhbHMnKSk7XG4gICAgY29uc3Qgc2luZ2xlTWVhbCA9IGFycmF5T2ZNZWFscy5maW5kKChtZWFsKSA9PiBtZWFsWzBdLmlkTWVhbCA9PT0gaW5kZXgpO1xuXG4gICAgYWRkUHJvcGVydGllcyhzaW5nbGVNZWFsKTtcbiAgfVxufTtcblxuY29uc3QgYWRkUmVzZXJ2YXRpb25CdXR0b25FdmVudCA9ICgpID0+IHtcbiAgY29uc3QgcmVzZXJ2YXRpb25CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLlJlc2VydmF0b24nKTtcblxuICByZXNlcnZhdGlvbkJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5wYXJlbnROb2RlLmlkO1xuICAgICAgc2hvd1BvcHVwKGluZGV4KTtcbiAgICB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGNsb3NlQ2xpY2sgPSAoKSA9PiB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXRpb24nKTtcbiAgbWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcblxuY29uc3QgYWRkQ3Jvc3NJbWFnZUV2ZW50ID0gKCkgPT4ge1xuICBjb25zdCBjYW5jZWxJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtaW1nJyk7XG4gIGNhbmNlbEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VDbGljayk7XG59O1xuXG5jb25zdCBhZGREYXRlRm9jdXNFdmVudCA9ICgpID0+IHtcbiAgY29uc3Qgc3RhcnREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcl9zdGFydERhdGUnKTtcbiAgY29uc3QgZW5kRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJfZW5kRGF0ZScpO1xuXG4gIHN0YXJ0RGF0ZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIChlKSA9PiB7XG4gICAgZS50YXJnZXQudHlwZSA9ICdkYXRlJztcbiAgfSk7XG5cbiAgZW5kRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIChlKSA9PiB7XG4gICAgZS50YXJnZXQudHlwZSA9ICdkYXRlJztcbiAgfSk7XG5cbiAgc3RhcnREYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZSkgPT4ge1xuICAgIGUudGFyZ2V0LnR5cGUgPSAndGV4dCc7XG4gICAgZS50YXJnZXQucGxhY2Vob2xkZXIgPSAnU3RhcnQgZGF0ZSc7XG4gIH0pO1xuXG4gIGVuZERhdGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChlKSA9PiB7XG4gICAgZS50YXJnZXQudHlwZSA9ICd0ZXh0JztcbiAgICBlLnRhcmdldC5wbGFjZWhvbGRlciA9ICdFbmQgZGF0ZSc7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgYWRkUmVzZXJ2YXRpb25CdXR0b25FdmVudCwgYWRkQ3Jvc3NJbWFnZUV2ZW50LCBhZGREYXRlRm9jdXNFdmVudCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9jb21tZW50LmNzcyc7XG5pbXBvcnQgJy4vcmVzZXJ2YXRpb24uY3NzJztcbmltcG9ydCAnLi9yZXNlcnZhdGlvbi1kZXNrdG9wLmNzcyc7XG5pbXBvcnQgZmV0Y2hNZWFscyBmcm9tICcuL2FwaS5qcyc7XG5pbXBvcnQgeyBhZGRSZXNlcnZhdGlvbkJ1dHRvbkV2ZW50LCBhZGRDcm9zc0ltYWdlRXZlbnQsIGFkZERhdGVGb2N1c0V2ZW50IH0gZnJvbSAnLi9yZXNlcnZhdGlvbkV2ZW50cy5qcyc7XG5pbXBvcnQge1xuICBib2R5LCBjb250YWluZXIsIHBvcHVwLCBwb3B1cENvbW1lbnQsIHVzZXJEYXRhQXJyLCBsb2FkQ29tbWVudHNTZWN0aW9uLFxufSBmcm9tICcuL2NvbW1lbnRFdmVudC5qcyc7XG5pbXBvcnQgeyBnZXRMaWtlcyB9IGZyb20gJy4vbGlrZXMuanMnO1xuXG5jb25zdCBtZWFsSWRzID0gWzUyNzY4LCA1Mjc3NiwgNTI3NjUsIDUyOTM1LCA1Mjk2MCwgNTI5NjJdO1xuXG5jb25zdCBwb3B1bGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IFtdO1xuXG4gIGNvbnN0IG1lYWxBcnJheSA9IFtdO1xuXG4gIGNvbnN0IGRhdGFMaWtlcyA9IGF3YWl0IGdldExpa2VzKCk7XG5cbiAgbWVhbElkcy5mb3JFYWNoKChpZCkgPT4gZGF0YS5wdXNoKGZldGNoTWVhbHMoaWQpKSk7XG4gIGRhdGEuZm9yRWFjaCgoZGF0YSkgPT4gKGRhdGEudGhlbigobWVhbCkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsaWtlc0FycmF5ID0gZGF0YUxpa2VzLmZpbHRlcigobGlrZSkgPT4gbGlrZS5pdGVtX2lkLnRvU3RyaW5nKCkgPT09IG1lYWwubWVhbHNbMF0uaWRNZWFsKTtcbiAgICBjYXJkLmNsYXNzTmFtZSA9ICdjYXJkJztcbiAgICBjYXJkLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiY2FyZFwiIGlkPVwiJHttZWFsLm1lYWxzWzBdLmlkTWVhbH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHttZWFsLm1lYWxzWzBdLnN0ck1lYWxUaHVtYn1cbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIGFsdD1cIm1lYWxcIiBjbGFzcz1cImZvb2RQaWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWtlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4ke21lYWwubWVhbHNbMF0uc3RyTWVhbH08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmFzIGZhLWhlYXJ0XCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibGlrZXNOdW1cIj4ke2xpa2VzQXJyYXlbMF0ubGlrZXN9IGxpa2VzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcIiR7bWVhbC5tZWFsc1swXS5pZE1lYWx9XCIgY2xhc3M9XCJjb21tZW50XCI+PGkgY2xhc3M9XCJmYXMgZmEtY29tbWVudFwiPjwvaT4gIENvbW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJSZXNlcnZhdG9uXCI+UmVzZXJ2YXRvbiA8aSBjbGFzcz1cImZhIGZhLXBlbmNpbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICBtZWFsQXJyYXkucHVzaChtZWFsLm1lYWxzKTtcbiAgICBhZGRSZXNlcnZhdGlvbkJ1dHRvbkV2ZW50KCk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTWVhbHMnLCBKU09OLnN0cmluZ2lmeShtZWFsQXJyYXkpKTtcbiAgfSkpKTtcblxuICBhZGRDcm9zc0ltYWdlRXZlbnQoKTtcbiAgYWRkRGF0ZUZvY3VzRXZlbnQoKTtcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IHBvcHVsYXRlKCk7XG59KTtcblxuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0Lm1hdGNoZXMoJy5jb21tZW50JykpIHtcbiAgICBwb3B1cENvbW1lbnQoZS50YXJnZXQpO1xuICAgIGxvYWRDb21tZW50c1NlY3Rpb24odXNlckRhdGFBcnIpO1xuICB9XG59KTtcblxuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5tYXRjaGVzKCcuY2xvc2Vwb3B1cCcpKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG5cbiAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICBjb250YWluZXIuc3R5bGUuZmlsdGVyID0gJ2JsdXIoMHB4KSc7XG4gICAgaGVhZGVyLnN0eWxlLmZpbHRlciA9ICdibHVyKDBweCknO1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0Lm1hdGNoZXMoJy5jb21tZW50LWJ0bicpKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==