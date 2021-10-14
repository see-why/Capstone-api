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








const mealIds = [52768, 52776, 52765, 52935, 52960, 52962];

const populate = async () => {
  const data = [];

  const mealArray = [];

  await mealIds.forEach((id) => data.push((0,_api_js__WEBPACK_IMPORTED_MODULE_4__["default"])(id)));
  data.forEach((data) => (data.then((meal) => {
    const card = document.createElement('div');

    card.className = 'card';
    card.innerHTML = `<div class="card" id="${meal.meals[0].idMeal}">
                        <img src="${meal.meals[0].strMealThumb}
                        " alt="meal" class="foodPic">
                        <div class="like">
                          <h3>${meal.meals[0].strMeal}</h3>
                          <a href="#"><i class="fas fa-heart"></i></a>
                        </div>
                        <h4 class="likesNum"></h4>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vc3JjL2NvbW1lbnQuY3NzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL3NyYy9yZXNlcnZhdGlvbi1kZXNrdG9wLmNzcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9zcmMvcmVzZXJ2YXRpb24uY3NzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL3NyYy9jb21tZW50LmNzcz84M2RhIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL3NyYy9yZXNlcnZhdGlvbi1kZXNrdG9wLmNzcz8wMWFkIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL3NyYy9yZXNlcnZhdGlvbi5jc3M/ZjU3ZiIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL3NyYy9jb21tZW50RXZlbnQuanMiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vc3JjL2ludm9sdmVtZW50QXBpLmpzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL3NyYy9yZXNlcnZhdGlvbkV2ZW50cy5qcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0NhcHN0b25lLWFwaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL0NhcHN0b25lLWFwaS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtaGF0LWNoZWYge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDE3cmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIGNvbG9yOiAjNzIzZTNlO1xcclxcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cFZpZXcge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jaGlsZCB7XFxyXFxuICBvcGFjaXR5OiAwLjk7XFxyXFxuICBoZWlnaHQ6IDQwcmVtO1xcclxcbiAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyJTtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMCA1MHB4IDEwMHB4IC0yMHB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMCAzMHB4IDYwcHggLTMwcHgsIHJnYmEoMTAsIDM3LCA2NCwgMC4zNSkgMCAtMnB4IDZweCAwIGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBWaWV3IC5jbG9zZXBvcHVwIHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwVmlldyBoMyB7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgY29sb3I6ICM3MjNlM2U7XFxyXFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMi40cHggMi40cHggMy4ycHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNzIzZTNlO1xcclxcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtYnRuOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMCAycHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMCA3cHggMTNweCAtM3B4LCByZ2JhKDAsIDAsIDAsIDAuMikgMCAtM3B4IDAgaW5zZXQ7XFxyXFxuICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XFxyXFxuICBjb2xvcjogIzcyM2UzZTtcXHJcXG59XFxyXFxuXFxyXFxuI21zZyB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZlMGEzO1xcclxcbn1cXHJcXG5cXHJcXG4jbXNnOmFjdGl2ZSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZlMGEzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTElO1xcclxcbn1cXHJcXG5cXHJcXG4jbmFtZSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZlMGEzO1xcclxcbiAgd2lkdGg6IDE0cmVtO1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbXNnOmZvY3VzLFxcclxcbiNuYW1lOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWluc3RydWN0aW9ucy1jaGlsZCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pbnN0cnVjdGlvbnMtcGFyZW50OmhvdmVyIC5tZWFsLWluc3RydWN0aW9ucy1jaGlsZCB7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBtYXJnaW46IC0xNXJlbSAxcmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRyYW5zaXRpb246IDFzO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi51c2VyLWNvbW1lbnRzIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjM5LCAyMTgpO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgdG9wOiAxMSU7XFxyXFxuICBsZWZ0OiA1NyU7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDAgMnB4IDVweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMCAxcHggM3B4IC0xcHg7XFxyXFxuICB3aWR0aDogMzElO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIGhlaWdodDogMTZyZW07XFxyXFxufVxcclxcblxcclxcbi51c2VyLWNvbW1lbnRzIGxpIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3MjNlM2U7XFxyXFxuICBoZWlnaHQ6IDE1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgbWFyZ2luLXRvcDogLTIwcmVtO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1zZWN0aW9uIGg0IHtcXHJcXG4gIGNvbG9yOiAjNzIzZTNlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1zZWN0aW9uIGgzIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwVmlldyAucG9wdXBpbWcge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwIDVweCAxNXB4O1xcclxcbiAgbWFyZ2luOiAxcmVtIDEuNXJlbTtcXHJcXG4gIHdpZHRoOiAyMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWxJbmZvIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB3aWR0aDogMTlyZW07XFxyXFxuICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDI1JSAyNSU7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XFxyXFxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyNCUpIDAgM3B4IDhweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbEluZm8gbGkge1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCA1NHB4IDU1cHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMCAtMTJweCAzMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDAgNHB4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjE3KSAwIDEycHggMTNweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwIC0zcHggNXB4O1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogIzcyM2UzZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDYlO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tbWVudC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsc0lBQXNJO0FBQ3hJOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpREFBaUQ7RUFDakQsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwrR0FBK0c7RUFDL0cscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1IsU0FBUztFQUNULG9GQUFvRjtFQUNwRixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHNDQUFzQztFQUN0Qyx1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDZLQUE2SztFQUM3SyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhhdC1jaGVmIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxN3JlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICBjb2xvcjogIzcyM2UzZTtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBWaWV3IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY2hpbGQge1xcclxcbiAgb3BhY2l0eTogMC45O1xcclxcbiAgaGVpZ2h0OiA0MHJlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMiU7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDAgNTBweCAxMDBweCAtMjBweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDAgMzBweCA2MHB4IC0zMHB4LCByZ2JhKDEwLCAzNywgNjQsIDAuMzUpIDAgLTJweCA2cHggMCBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwVmlldyAuY2xvc2Vwb3B1cCB7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cFZpZXcgaDMge1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGNvbG9yOiAjNzIzZTNlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LWJ0biB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDIuNHB4IDIuNHB4IDMuMnB4O1xcclxcbiAgYmFja2dyb3VuZDogIzcyM2UzZTtcXHJcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LWJ0bjpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQpIDAgMnB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDAgN3B4IDEzcHggLTNweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDAgLTNweCAwIGluc2V0O1xcclxcbiAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xcclxcbiAgY29sb3I6ICM3MjNlM2U7XFxyXFxufVxcclxcblxcclxcbiNtc2cge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZTBhMztcXHJcXG59XFxyXFxuXFxyXFxuI21zZzphY3RpdmUge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZTBhMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDExJTtcXHJcXG59XFxyXFxuXFxyXFxuI25hbWUge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZTBhMztcXHJcXG4gIHdpZHRoOiAxNHJlbTtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI21zZzpmb2N1cyxcXHJcXG4jbmFtZTpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pbnN0cnVjdGlvbnMtY2hpbGQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtaW5zdHJ1Y3Rpb25zLXBhcmVudDpob3ZlciAubWVhbC1pbnN0cnVjdGlvbnMtY2hpbGQge1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbWFyZ2luOiAtMTVyZW0gMXJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB0cmFuc2l0aW9uOiAxcztcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1jb21tZW50cyB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDIzOSwgMjE4KTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHRvcDogMTElO1xcclxcbiAgbGVmdDogNTclO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwIDJweCA1cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDAgMXB4IDNweCAtMXB4O1xcclxcbiAgd2lkdGg6IDMxJTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBoZWlnaHQ6IDE2cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1jb21tZW50cyBsaSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzIzZTNlO1xcclxcbiAgaGVpZ2h0OiAxNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIG1hcmdpbi10b3A6IC0yMHJlbTtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtc2VjdGlvbiBoNCB7XFxyXFxuICBjb2xvcjogIzcyM2UzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtc2VjdGlvbiBoMyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cFZpZXcgLnBvcHVwaW1nIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMCA1cHggMTVweDtcXHJcXG4gIG1hcmdpbjogMXJlbSAxLjVyZW07XFxyXFxuICB3aWR0aDogMjByZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsSW5mbyB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgd2lkdGg6IDE5cmVtO1xcclxcbiAgcGFkZGluZzogMS41cmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSAyNSUgMjUlO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcclxcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjQlKSAwIDNweCA4cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWxJbmZvIGxpIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgNTRweCA1NXB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDAgLTEycHggMzBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwIDRweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xNykgMCAxMnB4IDEzcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMCAtM3B4IDVweDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6ICM3MjNlM2U7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2JTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcclxcbiAgLm1lYWwtaW1nLWRpdiB7XFxyXFxuICAgIGhlaWdodDogNDAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVhbC1pbWcge1xcclxcbiAgICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVzZXJ2YXRpb24tZm9ybSxcXHJcXG4gIC5yZXNlcnZhdGlvbi1pbmZvLFxcclxcbiAgLmluZm8ge1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Jlc2VydmF0aW9uLWRlc2t0b3AuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtFQUNkOztFQUVBOzs7SUFHRSxpQkFBaUI7RUFDbkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxyXFxuICAubWVhbC1pbWctZGl2IHtcXHJcXG4gICAgaGVpZ2h0OiA0MDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZWFsLWltZyB7XFxyXFxuICAgIGhlaWdodDogNDAwcHg7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZXNlcnZhdGlvbi1mb3JtLFxcclxcbiAgLnJlc2VydmF0aW9uLWluZm8sXFxyXFxuICAuaW5mbyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJmaWVsZHNldCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHotaW5kZXg6IDk7XFxyXFxuICBtaW4td2lkdGg6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYmFja2dyb3VuZDogI2VjNTI0MjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWxpc3QtZGl2IHtcXHJcXG4gIHdpZHRoOiA5NiU7XFxyXFxuICBoZWlnaHQ6IDk3dmg7XFxyXFxuICBtYXJnaW46IDIlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpdi5jcm9zcy1pbWctZGl2IHtcXHJcXG4gIG1heC13aWR0aDogOCU7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWltZy1kaXYge1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDUlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWltZyB7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgcmVzaXplOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xpY2sge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgcmlnaHQ6IDclO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25zLWxpc3Qge1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbi1saXN0LWRpdixcXHJcXG4ucmVzZXJ2YXRpb25zLWxpc3Qge1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24tZm9ybSxcXHJcXG4ucmVzZXJ2YXRpb24taW5mbyxcXHJcXG4uaW5mbyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbi1mb3JtIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbixcXHJcXG4ucmVzZXJ2YXRpb24tbGlzdC1kaXYsXFxyXFxuLnJlc2VydmF0aW9uLWluZm8sXFxyXFxuLnJlc2VydmF0aW9uLWZvcm0sXFxyXFxuLmZvcm0ge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0taXRlbSB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRCdXR0b24ge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkQnV0dG9uOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1hcmdpbi1ib3R0b20ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmQtZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcmVzZXJ2YXRpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osTUFBTTtBQUNSOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBOzs7RUFHRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTs7Ozs7RUFLRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJmaWVsZHNldCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHotaW5kZXg6IDk7XFxyXFxuICBtaW4td2lkdGg6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYmFja2dyb3VuZDogI2VjNTI0MjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWxpc3QtZGl2IHtcXHJcXG4gIHdpZHRoOiA5NiU7XFxyXFxuICBoZWlnaHQ6IDk3dmg7XFxyXFxuICBtYXJnaW46IDIlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpdi5jcm9zcy1pbWctZGl2IHtcXHJcXG4gIG1heC13aWR0aDogOCU7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWltZy1kaXYge1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDUlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWltZyB7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgcmVzaXplOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xpY2sge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgcmlnaHQ6IDclO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25zLWxpc3Qge1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbi1saXN0LWRpdixcXHJcXG4ucmVzZXJ2YXRpb25zLWxpc3Qge1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24tZm9ybSxcXHJcXG4ucmVzZXJ2YXRpb24taW5mbyxcXHJcXG4uaW5mbyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbi1mb3JtIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbixcXHJcXG4ucmVzZXJ2YXRpb24tbGlzdC1kaXYsXFxyXFxuLnJlc2VydmF0aW9uLWluZm8sXFxyXFxuLnJlc2VydmF0aW9uLWZvcm0sXFxyXFxuLmZvcm0ge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0taXRlbSB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRCdXR0b24ge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkQnV0dG9uOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1hcmdpbi1ib3R0b20ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmQtZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2xvZ29fdHJhbnNwYXJlbnQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgei1pbmRleDogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTQzOTM5O1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAgMzBweCAwIDMwcHg7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDIlIDAgMiUgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGhlaWdodDogN3JlbTtcXHJcXG4gIHdpZHRoOiA3cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbmxpIGEge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgY29sb3I6ICNmZmUwYTM7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgMjUlIDI1JTtcXHJcXG4gIGdyaWQtZ2FwOiAzcmVtO1xcclxcbiAgaGVpZ2h0OiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb2RQaWMge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcclxcbiAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAtMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MjNlM2U7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2IsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdEQUF1QztFQUN2QyxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbioge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIHotaW5kZXg6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0MzkzOTtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwIDMwcHggMCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAyJSAwIDIlIDA7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcXFwiLi4vbG9nb190cmFuc3BhcmVudC5wbmdcXFwiKTtcXHJcXG4gIGhlaWdodDogN3JlbTtcXHJcXG4gIHdpZHRoOiA3cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbmxpIGEge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgY29sb3I6ICNmZmUwYTM7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgMjUlIDI1JTtcXHJcXG4gIGdyaWQtZ2FwOiAzcmVtO1xcclxcbiAgaGVpZ2h0OiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb2RQaWMge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcclxcbiAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAtMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MjNlM2U7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tbWVudC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbW1lbnQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2VydmF0aW9uLWRlc2t0b3AuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNlcnZhdGlvbi1kZXNrdG9wLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNlcnZhdGlvbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2VydmF0aW9uLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBiYXNlVXJsID0gJ2h0dHA6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2xvb2t1cC5waHA/aT0nO1xyXG5cclxuY29uc3QgZmV0Y2hNZWFscyA9IGFzeW5jIChtZWFsSWQpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9JHttZWFsSWR9YCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZldGNoTWVhbHM7IiwiY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG5cclxuY29uc3QgcG9wdXBDb21tZW50ID0gKGV2ZW50VGFyZ2V0KSA9PiB7XHJcbiAgY29uc3QgbWVhbEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnTWVhbHMnKSk7XHJcblxyXG4gIGlmIChtZWFsQXJyYXkgIT09IG51bGwpIHtcclxuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ3BvcHVwVmlldycpO1xyXG4gICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG4gICAgY29uc3QgdG1wID0gbWVhbEFycmF5LmZpbmRJbmRleCgoZWwpID0+IGVsWzBdLmlkTWVhbCA9PSBwYXJzZUludChldmVudFRhcmdldC5pZCwgMTApKTtcclxuICAgIC8qIGVzbGludC1lbmFibGUgKi9cclxuXHJcbiAgICBwb3B1cC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcyA9XCJwb3B1cC1jaGlsZFwiPiBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJ1c2VyLWNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZXBvcHVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJnRpbWVzO1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInBvcHVwaW1nXCIgIHNyYz1cIiR7bWVhbEFycmF5W3RtcF1bMF0uc3RyTWVhbFRodW1ifVwiIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDM+JHttZWFsQXJyYXlbdG1wXVswXS5zdHJNZWFsfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaW5zdHJ1Y3Rpb25zLXBhcmVudFwiPiA8aSBjbGFzcz1cImZhcyBmYS1oYXQtY2hlZlwiPlJlY2lwZTwvaT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWluc3RydWN0aW9ucy1jaGlsZFwiPiR7bWVhbEFycmF5W3RtcF1bMF0uc3RySW5zdHJ1Y3Rpb25zfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1lYWxJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPiR7bWVhbEFycmF5W3RtcF1bMF0uc3RyQ2F0ZWdvcnl9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+JHttZWFsQXJyYXlbdG1wXVswXS5zdHJBcmVhfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBtZXRob2Q9XCJnZXRcIiBjbGFzcz1cImNvbW1lbnQtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5BZGQgeW91ciBjb21tZW50PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBtYXhsZW5ndGg9XCIzMFwiIG5hbWU9XCJ1c2VyX25hbWVcIiBwbGFjZWhvbGRlcj1cIkZ1bGwgbmFtZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG1heGxlbmd0aD1cIjUwMFwiIGlkPVwibXNnXCIgbmFtZT1cInVzZXJfbWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0XCIgcm93cz1cIjVcIiBjb2xzPVwiNVwicmVxdWlyZWQ+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cImNvbW1lbnQtYnRuXCIgY2xhc3M9XCJidG4tYnRuXCI+Q29tbWVudDwvYnV0dG9uPiBcclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuXHJcbiAgICBjb25zdCB0YWdzQXJyID0gbWVhbEFycmF5W3RtcF1bMF0uc3RyVGFncy5zcGxpdCgnLCcpO1xyXG4gICAgLyogZXNsaW50LWRpc2FibGUgKi9cclxuICAgIGZvciAoY29uc3QgdGFnIG9mIHRhZ3NBcnIpIHtcclxuICAgICAgaWYgKHRhZyA9PT0gJycpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBUYWdsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgVGFnbGkuaW5uZXJIVE1MICs9IGAke3RhZ31gO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWFsSW5mbycpLmFwcGVuZENoaWxkKFRhZ2xpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogZXNsaW50LWVuYWJsZSAqL1xyXG5cclxuICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgIGNvbnRhaW5lci5zdHlsZS5maWx0ZXIgPSAnYmx1cig1cHgpJztcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLnN0eWxlLmZpbHRlciA9ICdibHVyKDVweCknO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGxvYWRDb21tZW50ID0gKG5hbWUsIGNvbW1lbnQpID0+IHtcclxuICBjb25zdCBjb21tZW50SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgY29tbWVudEluZm8uaW5uZXJIVE1MID0gYFxyXG4gICAgICA8c3BhbiBjbGFzcz1cInVzZXJcIj4ke25hbWV9OiAgPC9zcGFuPlxyXG4gICAgICAmbmJzcDtcclxuICAgICAgPHNwYW4gY2xhc3M9XCJ1c2VyX3Njb3JlXCI+JHtjb21tZW50fTwvc3Bhbj5cclxuICAgICAgYDtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1jb21tZW50cycpLmFwcGVuZENoaWxkKGNvbW1lbnRJbmZvKTtcclxufTtcclxuXHJcbmNvbnN0IGxvYWRDb21tZW50c1NlY3Rpb24gPSAodXNlckFycikgPT4ge1xyXG4gIHVzZXJBcnIuZm9yRWFjaCgoZGF0YSkgPT4ge1xyXG4gICAgbG9hZENvbW1lbnQoZGF0YS5uYW1lLCBkYXRhLmNvbW1lbnQpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgdXNlckNvbW1lbnREYXRhID0ge1xyXG4gIG5hbWU6ICcnLFxyXG4gIGNvbW1lbnQ6ICcnLFxyXG59O1xyXG5jb25zdCB1c2VyRGF0YUFyciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJEYXRhJykpIHx8IFtdO1xyXG51c2VyRGF0YUFyci5wdXNoKHVzZXJDb21tZW50RGF0YSk7XHJcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyRGF0YScsIEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhQXJyKSk7XHJcblxyXG5leHBvcnQge1xyXG4gIGNvbnRhaW5lciwgYm9keSwgcG9wdXAsIHBvcHVwQ29tbWVudCwgdXNlckRhdGFBcnIsIGxvYWRDb21tZW50c1NlY3Rpb24sXHJcbn07IiwiY29uc3QgYXBwSUQgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgYmFzZVVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYmFzZVVSTCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6ICd7fScsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgY29uc3QgaWQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgcmV0dXJuIGlkO1xyXG59O1xyXG5cclxuY29uc3QgZGlzcGxheVJlc2VydmF0aW9ucyA9IChkYXRhKSA9PiB7XHJcbiAgbGV0IGNvdW50ID0gMDtcclxuICBjb25zdCBwYXJhZ3JhcGhPZlJlc2VydmF0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbnMtbGlzdCcpO1xyXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9ucy1jb3VudCcpO1xyXG5cclxuICBpZiAodHlwZW9mIGRhdGEgIT09ICd1bmRlZmluZWQnICYmIGRhdGEgIT09IG51bGwgJiYgZGF0YS5lcnJvciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb3VudCA9IGRhdGEubGVuZ3RoO1xyXG4gICAgbGV0IHN0cmluZ09mTGlzdHMgPSAnJztcclxuICAgIGRhdGEuZm9yRWFjaCgocmVzZXJ2YXRpb24pID0+IHtcclxuICAgICAgaWYgKHJlc2VydmF0aW9uLnVzZXJuYW1lID09PSAnICcpIHtcclxuICAgICAgICByZXNlcnZhdGlvbi51c2VybmFtZSA9ICdKb2huIERvZSc7XHJcbiAgICAgIH1cclxuICAgICAgc3RyaW5nT2ZMaXN0cyArPSBgPGVtPiR7cmVzZXJ2YXRpb24uZGF0ZV9zdGFydH0gLSAke3Jlc2VydmF0aW9uLmRhdGVfZW5kfSBieSAke3Jlc2VydmF0aW9uLnVzZXJuYW1lfTwvZW0+PGJyPmA7XHJcbiAgICB9KTtcclxuICAgIHBhcmFncmFwaE9mUmVzZXJ2YXRpb25zLmlubmVySFRNTCA9IHN0cmluZ09mTGlzdHM7XHJcbiAgfVxyXG5cclxuICBpZiAoY291bnQgPiAwKSB7XHJcbiAgICBoMS5pbm5lckhUTUwgPSBgUmVzZXJ2YXRpb25zIDxlbT4oJHtjb3VudH0pPC9lbT5gO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBoMS5pbm5lckhUTUwgPSAnUmVzZXJ2YXRpb25zJztcclxuICAgIHBhcmFncmFwaE9mUmVzZXJ2YXRpb25zLmlubmVySFRNTCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvdW50O1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UmVzZXJ2YXRpb25zID0gYXN5bmMgKGl0ZW1JZCkgPT4ge1xyXG4gIGNvbnN0IGJhc2VVcmxHZXQgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvSEFhVnBEUHRjOVBhR3hlaWh0dGwvcmVzZXJ2YXRpb25zP2l0ZW1faWQ9JztcclxuICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4gKGF3YWl0IGZldGNoKGAke2Jhc2VVcmxHZXR9JHtpdGVtSWR9YCkpLmpzb24oKTtcclxuXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGEoKTtcclxuICBhd2FpdCBkaXNwbGF5UmVzZXJ2YXRpb25zKGRhdGEpO1xyXG59O1xyXG5cclxuY29uc3QgZGlzcGxheU1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xyXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1tZXNzYWdlJyk7XHJcbiAgcC5pbm5lclRleHQgPSBtZXNzYWdlO1xyXG4gIHAuc3R5bGUuY29sb3IgPSAnI2ZmZic7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBwLnN0eWxlLmNvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICB9LCAzMDAwKTtcclxufTtcclxuXHJcbmNvbnN0IGFkZFJlc2VydmF0aW9uID0gYXN5bmMgKGl0ZW1JZCwgbmFtZSwgc3RhcnREYXRlLCBlbmREYXRlKSA9PiB7XHJcbiAgaWYgKG5hbWUgfHwgc3RhcnREYXRlIHx8IGVuZERhdGUpIHtcclxuICAgIGNvbnN0IHJlc2VydmF0aW9uID0ge1xyXG4gICAgICBpdGVtX2lkOiBpdGVtSWQsXHJcbiAgICAgIHVzZXJuYW1lOiBuYW1lLFxyXG4gICAgICBkYXRlX3N0YXJ0OiBzdGFydERhdGUsXHJcbiAgICAgIGRhdGVfZW5kOiBlbmREYXRlLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBiYXNlVXJsV2l0aElkID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0hBYVZwRFB0YzlQYUd4ZWlodHRsL3Jlc2VydmF0aW9ucy8nO1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IGFzeW5jICgpID0+IChhd2FpdCBmZXRjaChiYXNlVXJsV2l0aElkLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXNlcnZhdGlvbiksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxyXG4gICAgICB9LFxyXG4gICAgfSkpLnRleHQoKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVTdGF0dXMgPSBhd2FpdCBtZXNzYWdlKCk7XHJcbiAgICBhd2FpdCBnZXRSZXNlcnZhdGlvbnMoaXRlbUlkKTtcclxuXHJcbiAgICBpZiAodXBkYXRlU3RhdHVzLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09ICdjcmVhdGVkJykge1xyXG4gICAgICBkaXNwbGF5TWVzc2FnZSgnTmV3IFJlc2VydmF0aW9uIG1hZGUuLi4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3BsYXlNZXNzYWdlKCdBbiBlcnJvciBvY2N1cmVkLCBQbGVhc2UgdHJ5IGFnYWluLi4uJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgYXBwSUQsIGFkZFJlc2VydmF0aW9uLCBnZXRSZXNlcnZhdGlvbnMgfTsiLCJpbXBvcnQgeyBhZGRSZXNlcnZhdGlvbiwgZ2V0UmVzZXJ2YXRpb25zIH0gZnJvbSAnLi9pbnZvbHZlbWVudEFwaS5qcyc7XG5cbmNvbnN0IGFkZE5ld1Njb3JlID0gKGJ1dHRvbklkKSA9PiB7XG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJfbmFtZScpO1xuICBjb25zdCBzdGFydERhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJfc3RhcnREYXRlJyk7XG4gIGNvbnN0IGVuZERhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJfZW5kRGF0ZScpO1xuICBhZGRSZXNlcnZhdGlvbihidXR0b25JZCwgbmFtZUlucHV0LnZhbHVlLCBzdGFydERhdGVJbnB1dC52YWx1ZSwgZW5kRGF0ZUlucHV0LnZhbHVlKTtcbiAgbmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ1lvdXIgbmFtZSc7XG59O1xuXG5jb25zdCBhZGRQcm9wZXJ0aWVzID0gKHNpbmdsZU1lYWwpID0+IHtcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVhbC1uYW1lJyk7XG4gIGgxLmlubmVyVGV4dCA9IHNpbmdsZU1lYWxbMF0uc3RyTWVhbDtcblxuICBjb25zdCBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8nKTtcbiAgcC5pbm5lckhUTUwgPSBgPHN0cm9uZz5SZWdpb246ICR7c2luZ2xlTWVhbFswXS5zdHJBcmVhfTwvc3Ryb25nPiAmbmJzcDsgPHN0cm9uZz5NYWluIEluZ3JlZGllbnQ6ICR7c2luZ2xlTWVhbFswXS5zdHJJbmdyZWRpZW50MX08L3N0cm9uZz4gPGJyPlxuICA8c3Ryb25nPkNhdGVnb3J5OiAke3NpbmdsZU1lYWxbMF0uc3RyQ2F0ZWdvcnl9PC9zdHJvbmc+ICZuYnNwOyA8c3Ryb25nPlRhZzogJHtzaW5nbGVNZWFsWzBdLnN0clRhZ3N9PC9zdHJvbmc+IDxicj5gO1xuXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZWFsLWltZycpO1xuICBpbWcuc3JjID0gc2luZ2xlTWVhbFswXS5zdHJNZWFsVGh1bWI7XG5cbiAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEJ1dHRvbicpO1xuICBhZGRCdXR0b24ubmFtZSA9IHNpbmdsZU1lYWxbMF0uaWRNZWFsO1xuXG4gIGdldFJlc2VydmF0aW9ucyhzaW5nbGVNZWFsWzBdLmlkTWVhbCk7XG5cbiAgYWRkQnV0dG9uLm9uY2xpY2sgPSBhc3luYyAoZSkgPT4ge1xuICAgIGF3YWl0IGFkZE5ld1Njb3JlKGUudGFyZ2V0Lm5hbWUpO1xuICB9O1xufTtcblxuY29uc3Qgc2hvd1BvcHVwID0gKGluZGV4KSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbicpO1xuICBkaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcblxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ01lYWxzJykgIT09IG51bGwpIHtcbiAgICBjb25zdCBhcnJheU9mTWVhbHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdNZWFscycpKTtcbiAgICBjb25zdCBzaW5nbGVNZWFsID0gYXJyYXlPZk1lYWxzLmZpbmQoKG1lYWwpID0+IG1lYWxbMF0uaWRNZWFsID09PSBpbmRleCk7XG5cbiAgICBhZGRQcm9wZXJ0aWVzKHNpbmdsZU1lYWwpO1xuICB9XG59O1xuXG5jb25zdCBhZGRSZXNlcnZhdGlvbkJ1dHRvbkV2ZW50ID0gKCkgPT4ge1xuICBjb25zdCByZXNlcnZhdGlvbkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuUmVzZXJ2YXRvbicpO1xuXG4gIHJlc2VydmF0aW9uQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24ub25jbGljayA9IChlKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuaWQ7XG4gICAgICBzaG93UG9wdXAoaW5kZXgpO1xuICAgIH07XG4gIH0pO1xufTtcblxuY29uc3QgY2xvc2VDbGljayA9ICgpID0+IHtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbicpO1xuICBtZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59O1xuXG5jb25zdCBhZGRDcm9zc0ltYWdlRXZlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbmNlbEltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC1pbWcnKTtcbiAgY2FuY2VsSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUNsaWNrKTtcbn07XG5cbmNvbnN0IGFkZERhdGVGb2N1c0V2ZW50ID0gKCkgPT4ge1xuICBjb25zdCBzdGFydERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyX3N0YXJ0RGF0ZScpO1xuICBjb25zdCBlbmREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcl9lbmREYXRlJyk7XG5cbiAgc3RhcnREYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKGUpID0+IHtcbiAgICBlLnRhcmdldC50eXBlID0gJ2RhdGUnO1xuICB9KTtcblxuICBlbmREYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKGUpID0+IHtcbiAgICBlLnRhcmdldC50eXBlID0gJ2RhdGUnO1xuICB9KTtcblxuICBzdGFydERhdGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChlKSA9PiB7XG4gICAgZS50YXJnZXQudHlwZSA9ICd0ZXh0JztcbiAgICBlLnRhcmdldC5wbGFjZWhvbGRlciA9ICdTdGFydCBkYXRlJztcbiAgfSk7XG5cbiAgZW5kRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKGUpID0+IHtcbiAgICBlLnRhcmdldC50eXBlID0gJ3RleHQnO1xuICAgIGUudGFyZ2V0LnBsYWNlaG9sZGVyID0gJ0VuZCBkYXRlJztcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBhZGRSZXNlcnZhdGlvbkJ1dHRvbkV2ZW50LCBhZGRDcm9zc0ltYWdlRXZlbnQsIGFkZERhdGVGb2N1c0V2ZW50IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2NvbW1lbnQuY3NzJztcbmltcG9ydCAnLi9yZXNlcnZhdGlvbi5jc3MnO1xuaW1wb3J0ICcuL3Jlc2VydmF0aW9uLWRlc2t0b3AuY3NzJztcbmltcG9ydCBmZXRjaE1lYWxzIGZyb20gJy4vYXBpLmpzJztcbmltcG9ydCB7IGFkZFJlc2VydmF0aW9uQnV0dG9uRXZlbnQsIGFkZENyb3NzSW1hZ2VFdmVudCwgYWRkRGF0ZUZvY3VzRXZlbnQgfSBmcm9tICcuL3Jlc2VydmF0aW9uRXZlbnRzLmpzJztcbmltcG9ydCB7XG4gIGJvZHksIGNvbnRhaW5lciwgcG9wdXAsIHBvcHVwQ29tbWVudCwgdXNlckRhdGFBcnIsIGxvYWRDb21tZW50c1NlY3Rpb24sXG59IGZyb20gJy4vY29tbWVudEV2ZW50LmpzJztcblxuY29uc3QgbWVhbElkcyA9IFs1Mjc2OCwgNTI3NzYsIDUyNzY1LCA1MjkzNSwgNTI5NjAsIDUyOTYyXTtcblxuY29uc3QgcG9wdWxhdGUgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBbXTtcblxuICBjb25zdCBtZWFsQXJyYXkgPSBbXTtcblxuICBhd2FpdCBtZWFsSWRzLmZvckVhY2goKGlkKSA9PiBkYXRhLnB1c2goZmV0Y2hNZWFscyhpZCkpKTtcbiAgZGF0YS5mb3JFYWNoKChkYXRhKSA9PiAoZGF0YS50aGVuKChtZWFsKSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY2FyZC5jbGFzc05hbWUgPSAnY2FyZCc7XG4gICAgY2FyZC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImNhcmRcIiBpZD1cIiR7bWVhbC5tZWFsc1swXS5pZE1lYWx9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7bWVhbC5tZWFsc1swXS5zdHJNZWFsVGh1bWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBcIiBhbHQ9XCJtZWFsXCIgY2xhc3M9XCJmb29kUGljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlrZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JHttZWFsLm1lYWxzWzBdLnN0ck1lYWx9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhcyBmYS1oZWFydFwiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImxpa2VzTnVtXCI+PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcIiR7bWVhbC5tZWFsc1swXS5pZE1lYWx9XCIgY2xhc3M9XCJjb21tZW50XCI+PGkgY2xhc3M9XCJmYXMgZmEtY29tbWVudFwiPjwvaT4gIENvbW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJSZXNlcnZhdG9uXCI+UmVzZXJ2YXRvbiA8aSBjbGFzcz1cImZhIGZhLXBlbmNpbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICBtZWFsQXJyYXkucHVzaChtZWFsLm1lYWxzKTtcbiAgICBhZGRSZXNlcnZhdGlvbkJ1dHRvbkV2ZW50KCk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTWVhbHMnLCBKU09OLnN0cmluZ2lmeShtZWFsQXJyYXkpKTtcbiAgfSkpKTtcblxuICBhZGRDcm9zc0ltYWdlRXZlbnQoKTtcbiAgYWRkRGF0ZUZvY3VzRXZlbnQoKTtcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IHBvcHVsYXRlKCk7XG59KTtcblxuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0Lm1hdGNoZXMoJy5jb21tZW50JykpIHtcbiAgICBwb3B1cENvbW1lbnQoZS50YXJnZXQpO1xuICAgIGxvYWRDb21tZW50c1NlY3Rpb24odXNlckRhdGFBcnIpO1xuICB9XG59KTtcblxuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5tYXRjaGVzKCcuY2xvc2Vwb3B1cCcpKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG5cbiAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICBjb250YWluZXIuc3R5bGUuZmlsdGVyID0gJ2JsdXIoMHB4KSc7XG4gICAgaGVhZGVyLnN0eWxlLmZpbHRlciA9ICdibHVyKDBweCknO1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0Lm1hdGNoZXMoJy5jb21tZW50LWJ0bicpKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==