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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: 'Poppins', sans-serif;\n}\n\n.popup {\n  display: none;\n}\n\n.popupView {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -47%);\n  width: 70%;\n}\n\n.popup-child {\n  height: 40rem;\n  padding-top: 1rem;\n  padding-right: 1rem;\n  padding-left: 2rem;\n  border: 2px solid black;\n  background: aliceblue;\n  background-size: 100%;\n  border-radius: 2%;\n  box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0 30px 60px -30px, rgba(10, 37, 64, 0.35) 0 -2px 6px 0 inset;\n}\n\n.popupView .closepopup {\n  float: right;\n  background: none;\n  border: none;\n  box-shadow: none;\n  font-weight: bold;\n  font-size: 1.5rem;\n}\n\n.popupView h3 {\n  text-align: left;\n  color: #723e3e;\n  margin-left: 2rem;\n}\n\n.btn-comment {\n  padding: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\n  background: #723e3e;\n  color: aliceblue;\n  border: none;\n  width: 50%;\n  font-weight: bold;\n}\n\n.btn-comment:hover {\n  box-shadow: none;\n  box-shadow: rgba(0, 0, 0, 0.4) 0 2px 4px, rgba(0, 0, 0, 0.3) 0 7px 13px -3px, rgba(0, 0, 0, 0.2) 0 -3px 0 inset;\n  background: aliceblue;\n  color: #723e3e;\n}\n\n#msg {\n  border: none;\n  background: #ffe0a3;\n}\n\n#msg:active {\n  border: none;\n  background: #ffe0a3;\n  border-radius: 11%;\n}\n\n#name {\n  border: none;\n  background: #ffe0a3;\n  width: 14rem;\n  height: 2rem;\n}\n\n#name:focus,\n#msg:focus {\n  outline: none;\n}\n\n.meal-instructions-child {\n  display: none;\n}\n\n.meal-instructions-parent:hover .meal-instructions-child {\n  text-align: left;\n  font-weight: bold;\n  margin: -15rem 1rem;\n  border: 2px solid black;\n  height: auto;\n  position: absolute;\n  z-index: 1;\n  margin-bottom: 10rem;\n  background-color: white;\n  transition: 1s;\n  display: block;\n}\n\n.user-comments {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(250, 239, 218);\n  align-items: center;\n  justify-content: center;\n  top: 11%;\n  left: 45%;\n  box-shadow: rgba(50, 50, 93, 0.25) 0 2px 5px -1px, rgba(0, 0, 0, 0.3) 0 1px 3px -1px;\n  width: 45%;\n  overflow-x: auto;\n  overflow-y: auto;\n  height: 16rem;\n}\n\n.user-comments li {\n  text-align: center;\n  border-bottom: 1px solid #723e3e;\n  height: 15rem;\n}\n\n.user-comments li .comment_date {\n  font-weight: bold;\n  float: left;\n  margin-right: 2rem;\n  color: rgb(10, 10, 10);\n  font-size: 1rem;\n  text-transform: uppercase;\n}\n\n.user-comments li .user_comment {\n  font-weight: bold;\n  float: right;\n  color: rgb(110, 52, 52);\n  font-size: 0.8rem;\n  text-transform: uppercase;\n}\n\n.user-comments li .user {\n  font-weight: bold;\n  font-size: 0.8rem;\n  margin-left: 1rem;\n}\n\n.comment-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  float: right;\n  margin-top: -20rem;\n  margin-right: 5rem;\n}\n\n.comment-section h4 {\n  color: #723e3e;\n}\n\n.comment-section h3 {\n  margin: 0;\n}\n\n.popupView .popupimg {\n  border-radius: 10%;\n  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;\n  margin: 1rem 1.5rem;\n  width: 20rem;\n}\n\n.mealInfo {\n  list-style: none;\n  width: 19rem;\n  padding: 1.5rem;\n  justify-content: space-between;\n  align-items: center;\n  display: grid;\n  grid-template-columns: 25% 25% 25%;\n  gap: 1rem;\n  margin-bottom: 5rem;\n  box-shadow: rgb(0 0 0 / 24%) 0 3px 8px;\n  background-color: wheat;\n  justify-items: center;\n}\n\n.mealInfo li {\n  font-weight: 500;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 54px 55px, rgba(0, 0, 0, 0.12) 0 -12px 30px, rgba(0, 0, 0, 0.12) 0 4px 6px, rgba(0, 0, 0, 0.17) 0 12px 13px, rgba(0, 0, 0, 0.09) 0 -3px 5px;\n  padding: 0.5rem;\n  text-align: center;\n  background: #723e3e;\n  border-radius: 6%;\n}\n", "",{"version":3,"sources":["webpack://./src/comment.css"],"names":[],"mappings":"AAAA;EACE,kCAAkC;AACpC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,uBAAuB;EACvB,qBAAqB;EACrB,qBAAqB;EACrB,iBAAiB;EACjB,sIAAsI;AACxI;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,iDAAiD;EACjD,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,+GAA+G;EAC/G,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,YAAY;AACd;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,oBAAoB;EACpB,uBAAuB;EACvB,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,oCAAoC;EACpC,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;EACR,SAAS;EACT,oFAAoF;EACpF,UAAU;EACV,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,gCAAgC;EAChC,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,kBAAkB;EAClB,sBAAsB;EACtB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,uBAAuB;EACvB,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,0CAA0C;EAC1C,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,kCAAkC;EAClC,SAAS;EACT,mBAAmB;EACnB,sCAAsC;EACtC,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,6KAA6K;EAC7K,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;AACnB","sourcesContent":["body {\n  font-family: 'Poppins', sans-serif;\n}\n\n.popup {\n  display: none;\n}\n\n.popupView {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -47%);\n  width: 70%;\n}\n\n.popup-child {\n  height: 40rem;\n  padding-top: 1rem;\n  padding-right: 1rem;\n  padding-left: 2rem;\n  border: 2px solid black;\n  background: aliceblue;\n  background-size: 100%;\n  border-radius: 2%;\n  box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0 30px 60px -30px, rgba(10, 37, 64, 0.35) 0 -2px 6px 0 inset;\n}\n\n.popupView .closepopup {\n  float: right;\n  background: none;\n  border: none;\n  box-shadow: none;\n  font-weight: bold;\n  font-size: 1.5rem;\n}\n\n.popupView h3 {\n  text-align: left;\n  color: #723e3e;\n  margin-left: 2rem;\n}\n\n.btn-comment {\n  padding: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\n  background: #723e3e;\n  color: aliceblue;\n  border: none;\n  width: 50%;\n  font-weight: bold;\n}\n\n.btn-comment:hover {\n  box-shadow: none;\n  box-shadow: rgba(0, 0, 0, 0.4) 0 2px 4px, rgba(0, 0, 0, 0.3) 0 7px 13px -3px, rgba(0, 0, 0, 0.2) 0 -3px 0 inset;\n  background: aliceblue;\n  color: #723e3e;\n}\n\n#msg {\n  border: none;\n  background: #ffe0a3;\n}\n\n#msg:active {\n  border: none;\n  background: #ffe0a3;\n  border-radius: 11%;\n}\n\n#name {\n  border: none;\n  background: #ffe0a3;\n  width: 14rem;\n  height: 2rem;\n}\n\n#name:focus,\n#msg:focus {\n  outline: none;\n}\n\n.meal-instructions-child {\n  display: none;\n}\n\n.meal-instructions-parent:hover .meal-instructions-child {\n  text-align: left;\n  font-weight: bold;\n  margin: -15rem 1rem;\n  border: 2px solid black;\n  height: auto;\n  position: absolute;\n  z-index: 1;\n  margin-bottom: 10rem;\n  background-color: white;\n  transition: 1s;\n  display: block;\n}\n\n.user-comments {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(250, 239, 218);\n  align-items: center;\n  justify-content: center;\n  top: 11%;\n  left: 45%;\n  box-shadow: rgba(50, 50, 93, 0.25) 0 2px 5px -1px, rgba(0, 0, 0, 0.3) 0 1px 3px -1px;\n  width: 45%;\n  overflow-x: auto;\n  overflow-y: auto;\n  height: 16rem;\n}\n\n.user-comments li {\n  text-align: center;\n  border-bottom: 1px solid #723e3e;\n  height: 15rem;\n}\n\n.user-comments li .comment_date {\n  font-weight: bold;\n  float: left;\n  margin-right: 2rem;\n  color: rgb(10, 10, 10);\n  font-size: 1rem;\n  text-transform: uppercase;\n}\n\n.user-comments li .user_comment {\n  font-weight: bold;\n  float: right;\n  color: rgb(110, 52, 52);\n  font-size: 0.8rem;\n  text-transform: uppercase;\n}\n\n.user-comments li .user {\n  font-weight: bold;\n  font-size: 0.8rem;\n  margin-left: 1rem;\n}\n\n.comment-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  float: right;\n  margin-top: -20rem;\n  margin-right: 5rem;\n}\n\n.comment-section h4 {\n  color: #723e3e;\n}\n\n.comment-section h3 {\n  margin: 0;\n}\n\n.popupView .popupimg {\n  border-radius: 10%;\n  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;\n  margin: 1rem 1.5rem;\n  width: 20rem;\n}\n\n.mealInfo {\n  list-style: none;\n  width: 19rem;\n  padding: 1.5rem;\n  justify-content: space-between;\n  align-items: center;\n  display: grid;\n  grid-template-columns: 25% 25% 25%;\n  gap: 1rem;\n  margin-bottom: 5rem;\n  box-shadow: rgb(0 0 0 / 24%) 0 3px 8px;\n  background-color: wheat;\n  justify-items: center;\n}\n\n.mealInfo li {\n  font-weight: 500;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 54px 55px, rgba(0, 0, 0, 0.12) 0 -12px 30px, rgba(0, 0, 0, 0.12) 0 4px 6px, rgba(0, 0, 0, 0.17) 0 12px 13px, rgba(0, 0, 0, 0.09) 0 -3px 5px;\n  padding: 0.5rem;\n  text-align: center;\n  background: #723e3e;\n  border-radius: 6%;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "@media only screen and (min-width: 992px) {\n  .meal-img-div {\n    height: 400px;\n  }\n\n  .meal-img {\n    height: 400px;\n    width: 400px;\n  }\n\n  .reservation-form,\n  .reservation-info,\n  .info {\n    font-size: larger;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/reservation-desktop.css"],"names":[],"mappings":"AAAA;EACE;IACE,aAAa;EACf;;EAEA;IACE,aAAa;IACb,YAAY;EACd;;EAEA;;;IAGE,iBAAiB;EACnB;AACF","sourcesContent":["@media only screen and (min-width: 992px) {\n  .meal-img-div {\n    height: 400px;\n  }\n\n  .meal-img {\n    height: 400px;\n    width: 400px;\n  }\n\n  .reservation-form,\n  .reservation-info,\n  .info {\n    font-size: larger;\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "fieldset {\n  border: none;\n  width: 30%;\n  padding: 0;\n  justify-self: center;\n}\n\n.reservation {\n  display: none;\n  z-index: 9;\n  min-width: 100%;\n  min-height: 100%;\n  position: fixed;\n  flex-wrap: wrap;\n  background: #ec5242;\n  justify-content: space-between;\n  margin: auto;\n  top: 0;\n}\n\n.reservation-list-div {\n  width: 96%;\n  height: 97vh;\n  margin: 2%;\n  border: 1px solid #000;\n}\n\n.div.cross-img-div {\n  max-width: 8%;\n}\n\n.meal-img-div {\n  height: 300px;\n  margin-top: 20px;\n  margin-right: 5%;\n  margin-left: 5%;\n  justify-content: center;\n}\n\n.meal-img {\n  height: 300px;\n  width: 300px;\n  resize: both;\n}\n\n.click {\n  position: fixed;\n  right: 7%;\n}\n\n.reservations-list {\n  width: 60%;\n  background: #fff;\n  align-self: center;\n  padding: 2%;\n  height: 100px;\n}\n\n.reservation-list-div,\n.reservations-list {\n  overflow-y: scroll;\n}\n\n.reservation-form,\n.reservation-info,\n.info {\n  text-align: center;\n}\n\n.reservation-form {\n  align-self: center;\n  width: 300px;\n  margin-bottom: 20px;\n}\n\n.reservation,\n.reservation-list-div,\n.reservation-info,\n.reservation-form,\n.form {\n  flex-direction: column;\n}\n\n.form-item {\n  height: 40px;\n}\n\n.addButton {\n  font-size: 25px;\n}\n\n.addButton:hover {\n  cursor: pointer;\n}\n\n.margin-bottom {\n  margin-bottom: 30px;\n}\n\n.d-flex {\n  display: flex;\n}\n", "",{"version":3,"sources":["webpack://./src/reservation.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,UAAU;EACV,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,UAAU;EACV,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;EACZ,MAAM;AACR;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;EACf,SAAS;AACX;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;EACX,aAAa;AACf;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;;;EAGE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;;;;EAKE,sBAAsB;AACxB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf","sourcesContent":["fieldset {\n  border: none;\n  width: 30%;\n  padding: 0;\n  justify-self: center;\n}\n\n.reservation {\n  display: none;\n  z-index: 9;\n  min-width: 100%;\n  min-height: 100%;\n  position: fixed;\n  flex-wrap: wrap;\n  background: #ec5242;\n  justify-content: space-between;\n  margin: auto;\n  top: 0;\n}\n\n.reservation-list-div {\n  width: 96%;\n  height: 97vh;\n  margin: 2%;\n  border: 1px solid #000;\n}\n\n.div.cross-img-div {\n  max-width: 8%;\n}\n\n.meal-img-div {\n  height: 300px;\n  margin-top: 20px;\n  margin-right: 5%;\n  margin-left: 5%;\n  justify-content: center;\n}\n\n.meal-img {\n  height: 300px;\n  width: 300px;\n  resize: both;\n}\n\n.click {\n  position: fixed;\n  right: 7%;\n}\n\n.reservations-list {\n  width: 60%;\n  background: #fff;\n  align-self: center;\n  padding: 2%;\n  height: 100px;\n}\n\n.reservation-list-div,\n.reservations-list {\n  overflow-y: scroll;\n}\n\n.reservation-form,\n.reservation-info,\n.info {\n  text-align: center;\n}\n\n.reservation-form {\n  align-self: center;\n  width: 300px;\n  margin-bottom: 20px;\n}\n\n.reservation,\n.reservation-list-div,\n.reservation-info,\n.reservation-form,\n.form {\n  flex-direction: column;\n}\n\n.form-item {\n  height: 40px;\n}\n\n.addButton {\n  font-size: 25px;\n}\n\n.addButton:hover {\n  cursor: pointer;\n}\n\n.margin-bottom {\n  margin-bottom: 30px;\n}\n\n.d-flex {\n  display: flex;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "populateComments": () => (/* binding */ populateComments)
/* harmony export */ });
/* harmony import */ var _comments_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments_api.js */ "./src/comments_api.js");


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
                    <button type="submit" id="${mealArray[tmp][0].idMeal}" class="btn-comment">Comment</button> 
                </form>
                </div>
                `;
    /* eslint-disable */
    populateComments(mealArray[tmp][0].idMeal);
    const tagsArr = mealArray[tmp][0].strTags.split(',');
    
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

const populateComments = (mealId) => {
  const commentSection = document.querySelector('.user-comments');
  while (commentSection.lastElementChild) {
    commentSection.removeChild(commentSection.lastElementChild);
  }

  (0,_comments_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchComments)(mealId).then((data) => {
    if (data !== undefined) {
      data.forEach((comment) => {
        const commentInfo = document.createElement('li');
        commentInfo.innerHTML = `
        <span class="comment_date">${comment.creation_date}</span>
        <span class="user">${comment.username.toUpperCase()}:  </span>
        &nbsp;
        <span class="user_comment">${comment.comment}</span>
      
        `;
        commentSection.appendChild(commentInfo);
      });
    }
  });
};



/***/ }),

/***/ "./src/comments_api.js":
/*!*****************************!*\
  !*** ./src/comments_api.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchComments": () => (/* binding */ fetchComments),
/* harmony export */   "createComments": () => (/* binding */ createComments)
/* harmony export */ });
const baseAppUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const AppId = 'HAaVpDPtc9PaGxeihttl';

const createComments = async (mealId, username, comment) => {
  const response = await fetch(`${baseAppUrl}${AppId}/comments`, {
    method: 'POST',
    body: JSON.stringify({ item_id: mealId, username, comment }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const data = await response.text();
  return data;
};

const fetchComments = async (mealId) => {
  const response = await fetch(`${baseAppUrl}${AppId}/comments?item_id=${mealId}`);
  const data = await response.json();
  return data;
};



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
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "updateLikes": () => (/* binding */ updateLikes)
/* harmony export */ });
const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appId = '1jTZg5AjMH1qouB9viL2';

async function appID() {
  const response = await fetch(baseURL, { method: 'POST' });
  const id = await response.text();
  return id;
}

const createLikes = async (mealId) => {
  const response = await fetch(`${baseURL}${appId}/likes/`, {
    method: 'POST',
    body: JSON.stringify({ item_id: mealId }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  const likes = await response.text();
  return likes;
};

const getLikes = async () => {
  const response = await fetch(`${baseURL}${appId}/likes/`);
  const likes = await response.json();
  return likes;
};

const updateLikes = async (eventTarget) => {
  await createLikes(parseInt(eventTarget.id, 10));
  let dataLikes = await getLikes();
  /* eslint-disable */
  dataLikes = dataLikes.filter((like) => typeof (like.item_id) == 'number');
  const likesArray = dataLikes.filter((like) => like.item_id == parseInt(eventTarget.id, 10));
  /* eslint-enable */
  let count = likesArray[0].likes;
  count += 1;
  eventTarget.parentNode.parentNode.lastChild.previousSibling.innerHTML = `${count} likes`;
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
/* harmony import */ var _comments_api_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comments_api.js */ "./src/comments_api.js");
/* harmony import */ var _commentEvent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./commentEvent.js */ "./src/commentEvent.js");
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./likes.js */ "./src/likes.js");










const mealIds = [52768, 52776, 52765, 52935, 52960, 52962];

const populate = async () => {
  const data = [];

  const mealArray = [];

  let dataLikes = await (0,_likes_js__WEBPACK_IMPORTED_MODULE_8__.getLikes)();
  /* eslint-disable */
  dataLikes = dataLikes.filter((like) => typeof (like.item_id) == 'number');

  mealIds.forEach((id) => data.push((0,_api_js__WEBPACK_IMPORTED_MODULE_4__["default"])(id)));
  data.forEach((data) => (data.then((meal) => {
    const card = document.createElement('div');
    const likesArray = dataLikes.filter(
      (like) => like.item_id == parseInt(meal.meals[0].idMeal, 10),
    );
    /* eslint-enable */
    card.className = 'card';
    card.innerHTML = `<div class="card" id="${meal.meals[0].idMeal}">
                        <img src="${meal.meals[0].strMealThumb}
                        " alt="meal" class="foodPic">
                        <div class="like">
                          <h3>${meal.meals[0].strMeal}</h3>
                          <a href="#"><i class="fas fa-heart give-like" id="${meal.meals[0].idMeal}"></i></a>
                          <h4 class="likesNum">${likesArray[0].likes + 1} likes</h4>
                        </div>
                        <button id = "${meal.meals[0].idMeal}" class="comment"><i class="fas fa-comment"></i>  Comment</button>
                        <button class="Reservaton">Reservaton <i class="fa fa-pencil" aria-hidden="true"></i></button>
                      </div>`;
    _commentEvent_js__WEBPACK_IMPORTED_MODULE_7__.container.appendChild(card);
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

_commentEvent_js__WEBPACK_IMPORTED_MODULE_7__.body.addEventListener('click', async (e) => {
  if (e.target && e.target.matches('.give-like')) {
    (0,_likes_js__WEBPACK_IMPORTED_MODULE_8__.updateLikes)(e.target);
  }
  e.preventDefault();
});

_commentEvent_js__WEBPACK_IMPORTED_MODULE_7__.container.addEventListener('click', (e) => {
  if (e.target && e.target.matches('.comment')) {
    (0,_commentEvent_js__WEBPACK_IMPORTED_MODULE_7__.popupComment)(e.target);
  }
});

_commentEvent_js__WEBPACK_IMPORTED_MODULE_7__.body.addEventListener('click', async (e) => {
  if (e.target && e.target.matches('.closepopup')) {
    const header = document.querySelector('header');

    _commentEvent_js__WEBPACK_IMPORTED_MODULE_7__.popup.style.display = 'none';
    _commentEvent_js__WEBPACK_IMPORTED_MODULE_7__.body.style.overflow = 'scroll';
    _commentEvent_js__WEBPACK_IMPORTED_MODULE_7__.container.style.filter = 'blur(0px)';
    header.style.filter = 'blur(0px)';
  } else if (e.target && e.target.matches('.btn-comment')) {
    e.preventDefault();
    const userName = document.getElementById('name').value;
    const userComment = document.getElementById('msg').value;

    if (userName !== '' && userComment !== '') {
      await (0,_comments_api_js__WEBPACK_IMPORTED_MODULE_6__.createComments)(e.target.id, userName, userComment);
      (0,_commentEvent_js__WEBPACK_IMPORTED_MODULE_7__.populateComments)(e.target.id);
    }
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnFCO0FBQ0U7QUFDSTtBQUNRO0FBQ0Q7QUFDd0U7QUFDdkQ7QUFHeEI7QUFDd0I7O0FBRW5EOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsd0JBQXdCLG1EQUFRO0FBQ2hDO0FBQ0E7O0FBRUEsb0NBQW9DLG1EQUFVO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHFCQUFxQjtBQUNuRSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBLGdDQUFnQyxzQkFBc0I7QUFDdEQsOEVBQThFLHFCQUFxQjtBQUNuRyxpREFBaUQseUJBQXlCO0FBQzFFO0FBQ0Esd0NBQXdDLHFCQUFxQjtBQUM3RDtBQUNBO0FBQ0EsSUFBSSxtRUFBcUI7QUFDekI7QUFDQSxJQUFJLGdGQUF5QjtBQUM3QjtBQUNBLEdBQUc7O0FBRUgsRUFBRSx5RUFBa0I7QUFDcEIsRUFBRSx3RUFBaUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQsbUVBQXFCO0FBQ3JCO0FBQ0EsSUFBSSxzREFBVztBQUNmO0FBQ0E7QUFDQSxDQUFDOztBQUVELHdFQUEwQjtBQUMxQjtBQUNBLElBQUksOERBQVk7QUFDaEI7QUFDQSxDQUFDOztBQUVELG1FQUFxQjtBQUNyQjtBQUNBOztBQUVBLElBQUksaUVBQW1CO0FBQ3ZCLElBQUksaUVBQW1CO0FBQ3ZCLElBQUksb0VBQXNCO0FBQzFCO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksZ0VBQWM7QUFDMUIsTUFBTSxrRUFBZ0I7QUFDdEI7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9zcmMvY29tbWVudC5jc3MiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vc3JjL3Jlc2VydmF0aW9uLWRlc2t0b3AuY3NzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL3NyYy9yZXNlcnZhdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vc3JjL2NvbW1lbnQuY3NzPzgzZGEiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vc3JjL3Jlc2VydmF0aW9uLWRlc2t0b3AuY3NzPzAxYWQiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vc3JjL3Jlc2VydmF0aW9uLmNzcz9mNTdmIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL3NyYy9hcGkuanMiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vc3JjL2NvbW1lbnRFdmVudC5qcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9zcmMvY29tbWVudHNfYXBpLmpzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL3NyYy9pbnZvbHZlbWVudEFwaS5qcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9zcmMvbGlrZXMuanMiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vc3JjL3Jlc2VydmF0aW9uRXZlbnRzLmpzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wb3B1cFZpZXcge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNDclKTtcXG4gIHdpZHRoOiA3MCU7XFxufVxcblxcbi5wb3B1cC1jaGlsZCB7XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAyJTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMCA1MHB4IDEwMHB4IC0yMHB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMCAzMHB4IDYwcHggLTMwcHgsIHJnYmEoMTAsIDM3LCA2NCwgMC4zNSkgMCAtMnB4IDZweCAwIGluc2V0O1xcbn1cXG5cXG4ucG9wdXBWaWV3IC5jbG9zZXBvcHVwIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnBvcHVwVmlldyBoMyB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgY29sb3I6ICM3MjNlM2U7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG59XFxuXFxuLmJ0bi1jb21tZW50IHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMi40cHggMi40cHggMy4ycHg7XFxuICBiYWNrZ3JvdW5kOiAjNzIzZTNlO1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiA1MCU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmJ0bi1jb21tZW50OmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMCAycHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMCA3cHggMTNweCAtM3B4LCByZ2JhKDAsIDAsIDAsIDAuMikgMCAtM3B4IDAgaW5zZXQ7XFxuICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XFxuICBjb2xvcjogIzcyM2UzZTtcXG59XFxuXFxuI21zZyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjZmZlMGEzO1xcbn1cXG5cXG4jbXNnOmFjdGl2ZSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjZmZlMGEzO1xcbiAgYm9yZGVyLXJhZGl1czogMTElO1xcbn1cXG5cXG4jbmFtZSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjZmZlMGEzO1xcbiAgd2lkdGg6IDE0cmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4jbmFtZTpmb2N1cyxcXG4jbXNnOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5tZWFsLWluc3RydWN0aW9ucy1jaGlsZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWVhbC1pbnN0cnVjdGlvbnMtcGFyZW50OmhvdmVyIC5tZWFsLWluc3RydWN0aW9ucy1jaGlsZCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW46IC0xNXJlbSAxcmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IDFzO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi51c2VyLWNvbW1lbnRzIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjM5LCAyMTgpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdG9wOiAxMSU7XFxuICBsZWZ0OiA0NSU7XFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDAgMnB4IDVweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMCAxcHggM3B4IC0xcHg7XFxuICB3aWR0aDogNDUlO1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBoZWlnaHQ6IDE2cmVtO1xcbn1cXG5cXG4udXNlci1jb21tZW50cyBsaSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzcyM2UzZTtcXG4gIGhlaWdodDogMTVyZW07XFxufVxcblxcbi51c2VyLWNvbW1lbnRzIGxpIC5jb21tZW50X2RhdGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gIGNvbG9yOiByZ2IoMTAsIDEwLCAxMCk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4udXNlci1jb21tZW50cyBsaSAudXNlcl9jb21tZW50IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgY29sb3I6IHJnYigxMTAsIDUyLCA1Mik7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi51c2VyLWNvbW1lbnRzIGxpIC51c2VyIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuLmNvbW1lbnQtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIG1hcmdpbi10b3A6IC0yMHJlbTtcXG4gIG1hcmdpbi1yaWdodDogNXJlbTtcXG59XFxuXFxuLmNvbW1lbnQtc2VjdGlvbiBoNCB7XFxuICBjb2xvcjogIzcyM2UzZTtcXG59XFxuXFxuLmNvbW1lbnQtc2VjdGlvbiBoMyB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5wb3B1cFZpZXcgLnBvcHVwaW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMCA1cHggMTVweDtcXG4gIG1hcmdpbjogMXJlbSAxLjVyZW07XFxuICB3aWR0aDogMjByZW07XFxufVxcblxcbi5tZWFsSW5mbyB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgd2lkdGg6IDE5cmVtO1xcbiAgcGFkZGluZzogMS41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSAyNSUgMjUlO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDI0JSkgMCAzcHggOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZWFsSW5mbyBsaSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIDU0cHggNTVweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwIC0xMnB4IDMwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMCA0cHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMTcpIDAgMTJweCAxM3B4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDAgLTNweCA1cHg7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjNzIzZTNlO1xcbiAgYm9yZGVyLXJhZGl1czogNiU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21tZW50LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHNJQUFzSTtBQUN4STs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaURBQWlEO0VBQ2pELG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsK0dBQStHO0VBQy9HLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsUUFBUTtFQUNSLFNBQVM7RUFDVCxvRkFBb0Y7RUFDcEYsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLHNDQUFzQztFQUN0Qyx1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDZLQUE2SztFQUM3SyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnBvcHVwVmlldyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00NyUpO1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLnBvcHVwLWNoaWxkIHtcXG4gIGhlaWdodDogNDByZW07XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDIlO1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwIDUwcHggMTAwcHggLTIwcHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDMwcHggNjBweCAtMzBweCwgcmdiYSgxMCwgMzcsIDY0LCAwLjM1KSAwIC0ycHggNnB4IDAgaW5zZXQ7XFxufVxcblxcbi5wb3B1cFZpZXcgLmNsb3NlcG9wdXAge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ucG9wdXBWaWV3IGgzIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjb2xvcjogIzcyM2UzZTtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbn1cXG5cXG4uYnRuLWNvbW1lbnQge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAyLjRweCAyLjRweCAzLjJweDtcXG4gIGJhY2tncm91bmQ6ICM3MjNlM2U7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYnRuLWNvbW1lbnQ6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwIDJweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDdweCAxM3B4IC0zcHgsIHJnYmEoMCwgMCwgMCwgMC4yKSAwIC0zcHggMCBpbnNldDtcXG4gIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcXG4gIGNvbG9yOiAjNzIzZTNlO1xcbn1cXG5cXG4jbXNnIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICNmZmUwYTM7XFxufVxcblxcbiNtc2c6YWN0aXZlIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICNmZmUwYTM7XFxuICBib3JkZXItcmFkaXVzOiAxMSU7XFxufVxcblxcbiNuYW1lIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICNmZmUwYTM7XFxuICB3aWR0aDogMTRyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbiNuYW1lOmZvY3VzLFxcbiNtc2c6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLm1lYWwtaW5zdHJ1Y3Rpb25zLWNoaWxkIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tZWFsLWluc3RydWN0aW9ucy1wYXJlbnQ6aG92ZXIgLm1lYWwtaW5zdHJ1Y3Rpb25zLWNoaWxkIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogLTE1cmVtIDFyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGhlaWdodDogYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogMXM7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnVzZXItY29tbWVudHMge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyMzksIDIxOCk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0b3A6IDExJTtcXG4gIGxlZnQ6IDQ1JTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMCAycHggNXB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDFweCAzcHggLTFweDtcXG4gIHdpZHRoOiA0NSU7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGhlaWdodDogMTZyZW07XFxufVxcblxcbi51c2VyLWNvbW1lbnRzIGxpIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzIzZTNlO1xcbiAgaGVpZ2h0OiAxNXJlbTtcXG59XFxuXFxuLnVzZXItY29tbWVudHMgbGkgLmNvbW1lbnRfZGF0ZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgY29sb3I6IHJnYigxMCwgMTAsIDEwKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi51c2VyLWNvbW1lbnRzIGxpIC51c2VyX2NvbW1lbnQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBjb2xvcjogcmdiKDExMCwgNTIsIDUyKTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLnVzZXItY29tbWVudHMgbGkgLnVzZXIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4uY29tbWVudC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgbWFyZ2luLXRvcDogLTIwcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcbn1cXG5cXG4uY29tbWVudC1zZWN0aW9uIGg0IHtcXG4gIGNvbG9yOiAjNzIzZTNlO1xcbn1cXG5cXG4uY29tbWVudC1zZWN0aW9uIGgzIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnBvcHVwVmlldyAucG9wdXBpbWcge1xcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwIDVweCAxNXB4O1xcbiAgbWFyZ2luOiAxcmVtIDEuNXJlbTtcXG4gIHdpZHRoOiAyMHJlbTtcXG59XFxuXFxuLm1lYWxJbmZvIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB3aWR0aDogMTlyZW07XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDI1JSAyNSU7XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjQlKSAwIDNweCA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lYWxJbmZvIGxpIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgNTRweCA1NXB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDAgLTEycHggMzBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwIDRweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xNykgMCAxMnB4IDEzcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMCAtM3B4IDVweDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICM3MjNlM2U7XFxuICBib3JkZXItcmFkaXVzOiA2JTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLm1lYWwtaW1nLWRpdiB7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICB9XFxuXFxuICAubWVhbC1pbWcge1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICB9XFxuXFxuICAucmVzZXJ2YXRpb24tZm9ybSxcXG4gIC5yZXNlcnZhdGlvbi1pbmZvLFxcbiAgLmluZm8ge1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Jlc2VydmF0aW9uLWRlc2t0b3AuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtFQUNkOztFQUVBOzs7SUFHRSxpQkFBaUI7RUFDbkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAubWVhbC1pbWctZGl2IHtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gIH1cXG5cXG4gIC5tZWFsLWltZyB7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gIH1cXG5cXG4gIC5yZXNlcnZhdGlvbi1mb3JtLFxcbiAgLnJlc2VydmF0aW9uLWluZm8sXFxuICAuaW5mbyB7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJmaWVsZHNldCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogMzAlO1xcbiAgcGFkZGluZzogMDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucmVzZXJ2YXRpb24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHotaW5kZXg6IDk7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYmFja2dyb3VuZDogI2VjNTI0MjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRvcDogMDtcXG59XFxuXFxuLnJlc2VydmF0aW9uLWxpc3QtZGl2IHtcXG4gIHdpZHRoOiA5NiU7XFxuICBoZWlnaHQ6IDk3dmg7XFxuICBtYXJnaW46IDIlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG59XFxuXFxuLmRpdi5jcm9zcy1pbWctZGl2IHtcXG4gIG1heC13aWR0aDogOCU7XFxufVxcblxcbi5tZWFsLWltZy1kaXYge1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDUlO1xcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tZWFsLWltZyB7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgcmVzaXplOiBib3RoO1xcbn1cXG5cXG4uY2xpY2sge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDclO1xcbn1cXG5cXG4ucmVzZXJ2YXRpb25zLWxpc3Qge1xcbiAgd2lkdGg6IDYwJTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyJTtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi5yZXNlcnZhdGlvbi1saXN0LWRpdixcXG4ucmVzZXJ2YXRpb25zLWxpc3Qge1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4ucmVzZXJ2YXRpb24tZm9ybSxcXG4ucmVzZXJ2YXRpb24taW5mbyxcXG4uaW5mbyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5yZXNlcnZhdGlvbi1mb3JtIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5yZXNlcnZhdGlvbixcXG4ucmVzZXJ2YXRpb24tbGlzdC1kaXYsXFxuLnJlc2VydmF0aW9uLWluZm8sXFxuLnJlc2VydmF0aW9uLWZvcm0sXFxuLmZvcm0ge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZvcm0taXRlbSB7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5hZGRCdXR0b24ge1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4uYWRkQnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1hcmdpbi1ib3R0b20ge1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLmQtZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcmVzZXJ2YXRpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osTUFBTTtBQUNSOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBOzs7RUFHRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTs7Ozs7RUFLRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJmaWVsZHNldCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogMzAlO1xcbiAgcGFkZGluZzogMDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucmVzZXJ2YXRpb24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHotaW5kZXg6IDk7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYmFja2dyb3VuZDogI2VjNTI0MjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRvcDogMDtcXG59XFxuXFxuLnJlc2VydmF0aW9uLWxpc3QtZGl2IHtcXG4gIHdpZHRoOiA5NiU7XFxuICBoZWlnaHQ6IDk3dmg7XFxuICBtYXJnaW46IDIlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG59XFxuXFxuLmRpdi5jcm9zcy1pbWctZGl2IHtcXG4gIG1heC13aWR0aDogOCU7XFxufVxcblxcbi5tZWFsLWltZy1kaXYge1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDUlO1xcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tZWFsLWltZyB7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgcmVzaXplOiBib3RoO1xcbn1cXG5cXG4uY2xpY2sge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDclO1xcbn1cXG5cXG4ucmVzZXJ2YXRpb25zLWxpc3Qge1xcbiAgd2lkdGg6IDYwJTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyJTtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi5yZXNlcnZhdGlvbi1saXN0LWRpdixcXG4ucmVzZXJ2YXRpb25zLWxpc3Qge1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4ucmVzZXJ2YXRpb24tZm9ybSxcXG4ucmVzZXJ2YXRpb24taW5mbyxcXG4uaW5mbyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5yZXNlcnZhdGlvbi1mb3JtIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5yZXNlcnZhdGlvbixcXG4ucmVzZXJ2YXRpb24tbGlzdC1kaXYsXFxuLnJlc2VydmF0aW9uLWluZm8sXFxuLnJlc2VydmF0aW9uLWZvcm0sXFxuLmZvcm0ge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZvcm0taXRlbSB7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5hZGRCdXR0b24ge1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4uYWRkQnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1hcmdpbi1ib3R0b20ge1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLmQtZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2xvZ29fdHJhbnNwYXJlbnQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgei1pbmRleDogMDtcXG59XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTQzOTM5O1xcbn1cXG5cXG51bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMzBweCAwIDMwcHg7XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDIlIDAgMiUgMDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGhlaWdodDogN3JlbTtcXG4gIHdpZHRoOiA3cmVtO1xcbn1cXG5cXG5saSB7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxufVxcblxcbmxpIGEge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6ICNmZmUwYTM7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgMjUlIDI1JTtcXG4gIGdyaWQtZ2FwOiAzcmVtO1xcbiAgaGVpZ2h0OiA1JTtcXG59XFxuXFxuLmZvb2RQaWMge1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbmZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAtMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MjNlM2U7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2IsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdEQUF1QztFQUN2QyxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIHotaW5kZXg6IDA7XFxufVxcblxcbmh0bWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0MzkzOTtcXG59XFxuXFxudWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDMwcHggMCAzMHB4O1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAyJSAwIDIlIDA7XFxufVxcblxcbi5sb2dvIHtcXG4gIGNvbnRlbnQ6IHVybChcXFwiLi4vbG9nb190cmFuc3BhcmVudC5wbmdcXFwiKTtcXG4gIGhlaWdodDogN3JlbTtcXG4gIHdpZHRoOiA3cmVtO1xcbn1cXG5cXG5saSB7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxufVxcblxcbmxpIGEge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6ICNmZmUwYTM7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgMjUlIDI1JTtcXG4gIGdyaWQtZ2FwOiAzcmVtO1xcbiAgaGVpZ2h0OiA1JTtcXG59XFxuXFxuLmZvb2RQaWMge1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbmZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAtMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MjNlM2U7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tbWVudC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbW1lbnQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2VydmF0aW9uLWRlc2t0b3AuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNlcnZhdGlvbi1kZXNrdG9wLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNlcnZhdGlvbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2VydmF0aW9uLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBiYXNlVXJsID0gJ2h0dHA6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2xvb2t1cC5waHA/aT0nO1xuXG5jb25zdCBmZXRjaE1lYWxzID0gYXN5bmMgKG1lYWxJZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9JHttZWFsSWR9YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hNZWFsczsiLCJpbXBvcnQgeyBmZXRjaENvbW1lbnRzIH0gZnJvbSAnLi9jb21tZW50c19hcGkuanMnO1xuXG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcblxuY29uc3QgcG9wdXBDb21tZW50ID0gKGV2ZW50VGFyZ2V0KSA9PiB7XG4gIGNvbnN0IG1lYWxBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ01lYWxzJykpO1xuXG4gIGlmIChtZWFsQXJyYXkgIT09IG51bGwpIHtcbiAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdwb3B1cFZpZXcnKTtcbiAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgIGNvbnN0IHRtcCA9IG1lYWxBcnJheS5maW5kSW5kZXgoKGVsKSA9PiBlbFswXS5pZE1lYWwgPT0gcGFyc2VJbnQoZXZlbnRUYXJnZXQuaWQsIDEwKSk7XG4gICAgLyogZXNsaW50LWVuYWJsZSAqL1xuXG4gICAgcG9wdXAuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3MgPVwicG9wdXAtY2hpbGRcIj4gXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJ1c2VyLWNvbW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICBcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2Vwb3B1cFwiPlxuICAgICAgICAgICAgICAgICAgICAmdGltZXM7XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJwb3B1cGltZ1wiICBzcmM9XCIke21lYWxBcnJheVt0bXBdWzBdLnN0ck1lYWxUaHVtYn1cIiAvPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgzPiR7bWVhbEFycmF5W3RtcF1bMF0uc3RyTWVhbH08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1pbnN0cnVjdGlvbnMtcGFyZW50XCI+IDxpIGNsYXNzPVwiZmFzIGZhLWhhdC1jaGVmXCI+UmVjaXBlPC9pPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWluc3RydWN0aW9ucy1jaGlsZFwiPiR7bWVhbEFycmF5W3RtcF1bMF0uc3RySW5zdHJ1Y3Rpb25zfTwvZGl2PlxuICAgICAgICAgICAgICAgIFxuIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJtZWFsSW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+JHttZWFsQXJyYXlbdG1wXVswXS5zdHJDYXRlZ29yeX08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+JHttZWFsQXJyYXlbdG1wXVswXS5zdHJBcmVhfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgbWV0aG9kPVwiZ2V0XCIgY2xhc3M9XCJjb21tZW50LXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0PkFkZCB5b3VyIGNvbW1lbnQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBtYXhsZW5ndGg9XCIzMFwiIG5hbWU9XCJ1c2VyX25hbWVcIiBwbGFjZWhvbGRlcj1cIkZ1bGwgbmFtZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBtYXhsZW5ndGg9XCI1MDBcIiBpZD1cIm1zZ1wiIG5hbWU9XCJ1c2VyX21lc3NhZ2VcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodFwiIHJvd3M9XCI1XCIgY29scz1cIjVcInJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwiJHttZWFsQXJyYXlbdG1wXVswXS5pZE1lYWx9XCIgY2xhc3M9XCJidG4tY29tbWVudFwiPkNvbW1lbnQ8L2J1dHRvbj4gXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGA7XG4gICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICBwb3B1bGF0ZUNvbW1lbnRzKG1lYWxBcnJheVt0bXBdWzBdLmlkTWVhbCk7XG4gICAgY29uc3QgdGFnc0FyciA9IG1lYWxBcnJheVt0bXBdWzBdLnN0clRhZ3Muc3BsaXQoJywnKTtcbiAgICBcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHRhZyBvZiB0YWdzQXJyKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGFnID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFRhZ2xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICAgICAgVGFnbGkuaW5uZXJIVE1MICs9IGAke3RhZ31gO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhbEluZm8nKS5hcHBlbmRDaGlsZChUYWdsaSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgIC8qIGVzbGludC1lbmFibGUgKi9cblxuICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBjb250YWluZXIuc3R5bGUuZmlsdGVyID0gJ2JsdXIoNXB4KSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuc3R5bGUuZmlsdGVyID0gJ2JsdXIoNXB4KSc7XG4gIH1cbn07XG5cbmNvbnN0IHBvcHVsYXRlQ29tbWVudHMgPSAobWVhbElkKSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItY29tbWVudHMnKTtcbiAgd2hpbGUgKGNvbW1lbnRTZWN0aW9uLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBjb21tZW50U2VjdGlvbi5yZW1vdmVDaGlsZChjb21tZW50U2VjdGlvbi5sYXN0RWxlbWVudENoaWxkKTtcbiAgfVxuXG4gIGZldGNoQ29tbWVudHMobWVhbElkKS50aGVuKChkYXRhKSA9PiB7XG4gICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZGF0YS5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbW1lbnRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY29tbWVudEluZm8uaW5uZXJIVE1MID0gYFxuICAgICAgICA8c3BhbiBjbGFzcz1cImNvbW1lbnRfZGF0ZVwiPiR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ1c2VyXCI+JHtjb21tZW50LnVzZXJuYW1lLnRvVXBwZXJDYXNlKCl9OiAgPC9zcGFuPlxuICAgICAgICAmbmJzcDtcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ1c2VyX2NvbW1lbnRcIj4ke2NvbW1lbnQuY29tbWVudH08L3NwYW4+XG4gICAgICBcbiAgICAgICAgYDtcbiAgICAgICAgY29tbWVudFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29tbWVudEluZm8pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIGNvbnRhaW5lciwgYm9keSwgcG9wdXAsIHBvcHVwQ29tbWVudCwgcG9wdWxhdGVDb21tZW50cyxcbn07IiwiY29uc3QgYmFzZUFwcFVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xuY29uc3QgQXBwSWQgPSAnSEFhVnBEUHRjOVBhR3hlaWh0dGwnO1xuXG5jb25zdCBjcmVhdGVDb21tZW50cyA9IGFzeW5jIChtZWFsSWQsIHVzZXJuYW1lLCBjb21tZW50KSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFzZUFwcFVybH0ke0FwcElkfS9jb21tZW50c2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IG1lYWxJZCwgdXNlcm5hbWUsIGNvbW1lbnQgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBmZXRjaENvbW1lbnRzID0gYXN5bmMgKG1lYWxJZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2Jhc2VBcHBVcmx9JHtBcHBJZH0vY29tbWVudHM/aXRlbV9pZD0ke21lYWxJZH1gKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgeyBmZXRjaENvbW1lbnRzLCBjcmVhdGVDb21tZW50cyB9OyIsImNvbnN0IGFwcElEID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBiYXNlVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyc7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYmFzZVVSTCxcbiAgICB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6ICd7fScsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgIH0pO1xuICBjb25zdCBpZCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgcmV0dXJuIGlkO1xufTtcblxuY29uc3QgZGlzcGxheVJlc2VydmF0aW9ucyA9IChkYXRhKSA9PiB7XG4gIGxldCBjb3VudCA9IDA7XG4gIGNvbnN0IHBhcmFncmFwaE9mUmVzZXJ2YXRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9ucy1saXN0Jyk7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9ucy1jb3VudCcpO1xuXG4gIGlmICh0eXBlb2YgZGF0YSAhPT0gJ3VuZGVmaW5lZCcgJiYgZGF0YSAhPT0gbnVsbCAmJiBkYXRhLmVycm9yID09PSB1bmRlZmluZWQpIHtcbiAgICBjb3VudCA9IGRhdGEubGVuZ3RoO1xuICAgIGxldCBzdHJpbmdPZkxpc3RzID0gJyc7XG4gICAgZGF0YS5mb3JFYWNoKChyZXNlcnZhdGlvbikgPT4ge1xuICAgICAgaWYgKHJlc2VydmF0aW9uLnVzZXJuYW1lID09PSAnICcpIHtcbiAgICAgICAgcmVzZXJ2YXRpb24udXNlcm5hbWUgPSAnSm9obiBEb2UnO1xuICAgICAgfVxuICAgICAgc3RyaW5nT2ZMaXN0cyArPSBgPGVtPiR7cmVzZXJ2YXRpb24uZGF0ZV9zdGFydH0gLSAke3Jlc2VydmF0aW9uLmRhdGVfZW5kfSBieSAke3Jlc2VydmF0aW9uLnVzZXJuYW1lfTwvZW0+PGJyPmA7XG4gICAgfSk7XG4gICAgcGFyYWdyYXBoT2ZSZXNlcnZhdGlvbnMuaW5uZXJIVE1MID0gc3RyaW5nT2ZMaXN0cztcbiAgfVxuXG4gIGlmIChjb3VudCA+IDApIHtcbiAgICBoMS5pbm5lckhUTUwgPSBgUmVzZXJ2YXRpb25zIDxlbT4oJHtjb3VudH0pPC9lbT5gO1xuICB9IGVsc2Uge1xuICAgIGgxLmlubmVySFRNTCA9ICdSZXNlcnZhdGlvbnMnO1xuICAgIHBhcmFncmFwaE9mUmVzZXJ2YXRpb25zLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgcmV0dXJuIGNvdW50O1xufTtcblxuY29uc3QgZ2V0UmVzZXJ2YXRpb25zID0gYXN5bmMgKGl0ZW1JZCkgPT4ge1xuICBjb25zdCBiYXNlVXJsR2V0ID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0hBYVZwRFB0YzlQYUd4ZWlodHRsL3Jlc2VydmF0aW9ucz9pdGVtX2lkPSc7XG4gIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiAoYXdhaXQgZmV0Y2goYCR7YmFzZVVybEdldH0ke2l0ZW1JZH1gKSkuanNvbigpO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhKCk7XG4gIGF3YWl0IGRpc3BsYXlSZXNlcnZhdGlvbnMoZGF0YSk7XG59O1xuXG5jb25zdCBkaXNwbGF5TWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1tZXNzYWdlJyk7XG4gIHAuaW5uZXJUZXh0ID0gbWVzc2FnZTtcbiAgcC5zdHlsZS5jb2xvciA9ICcjZmZmJztcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcC5zdHlsZS5jb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gIH0sIDMwMDApO1xufTtcblxuY29uc3QgYWRkUmVzZXJ2YXRpb24gPSBhc3luYyAoaXRlbUlkLCBuYW1lLCBzdGFydERhdGUsIGVuZERhdGUpID0+IHtcbiAgaWYgKG5hbWUgfHwgc3RhcnREYXRlIHx8IGVuZERhdGUpIHtcbiAgICBjb25zdCByZXNlcnZhdGlvbiA9IHtcbiAgICAgIGl0ZW1faWQ6IGl0ZW1JZCxcbiAgICAgIHVzZXJuYW1lOiBuYW1lLFxuICAgICAgZGF0ZV9zdGFydDogc3RhcnREYXRlLFxuICAgICAgZGF0ZV9lbmQ6IGVuZERhdGUsXG4gICAgfTtcblxuICAgIGNvbnN0IGJhc2VVcmxXaXRoSWQgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvSEFhVnBEUHRjOVBhR3hlaWh0dGwvcmVzZXJ2YXRpb25zLyc7XG4gICAgY29uc3QgbWVzc2FnZSA9IGFzeW5jICgpID0+IChhd2FpdCBmZXRjaChiYXNlVXJsV2l0aElkLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlc2VydmF0aW9uKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgfSkpLnRleHQoKTtcblxuICAgIGNvbnN0IHVwZGF0ZVN0YXR1cyA9IGF3YWl0IG1lc3NhZ2UoKTtcbiAgICBhd2FpdCBnZXRSZXNlcnZhdGlvbnMoaXRlbUlkKTtcblxuICAgIGlmICh1cGRhdGVTdGF0dXMudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gJ2NyZWF0ZWQnKSB7XG4gICAgICBkaXNwbGF5TWVzc2FnZSgnTmV3IFJlc2VydmF0aW9uIG1hZGUuLi4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGxheU1lc3NhZ2UoJ0FuIGVycm9yIG9jY3VyZWQsIFBsZWFzZSB0cnkgYWdhaW4uLi4nKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCB7IGFwcElELCBhZGRSZXNlcnZhdGlvbiwgZ2V0UmVzZXJ2YXRpb25zIH07IiwiY29uc3QgYmFzZVVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xuY29uc3QgYXBwSWQgPSAnMWpUWmc1QWpNSDFxb3VCOXZpTDInO1xuXG5hc3luYyBmdW5jdGlvbiBhcHBJRCgpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChiYXNlVVJMLCB7IG1ldGhvZDogJ1BPU1QnIH0pO1xuICBjb25zdCBpZCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgcmV0dXJuIGlkO1xufVxuXG5jb25zdCBjcmVhdGVMaWtlcyA9IGFzeW5jIChtZWFsSWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfSR7YXBwSWR9L2xpa2VzL2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IG1lYWxJZCB9KSxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcgfSxcbiAgfSk7XG4gIGNvbnN0IGxpa2VzID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICByZXR1cm4gbGlrZXM7XG59O1xuXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfSR7YXBwSWR9L2xpa2VzL2ApO1xuICBjb25zdCBsaWtlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGxpa2VzO1xufTtcblxuY29uc3QgdXBkYXRlTGlrZXMgPSBhc3luYyAoZXZlbnRUYXJnZXQpID0+IHtcbiAgYXdhaXQgY3JlYXRlTGlrZXMocGFyc2VJbnQoZXZlbnRUYXJnZXQuaWQsIDEwKSk7XG4gIGxldCBkYXRhTGlrZXMgPSBhd2FpdCBnZXRMaWtlcygpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICBkYXRhTGlrZXMgPSBkYXRhTGlrZXMuZmlsdGVyKChsaWtlKSA9PiB0eXBlb2YgKGxpa2UuaXRlbV9pZCkgPT0gJ251bWJlcicpO1xuICBjb25zdCBsaWtlc0FycmF5ID0gZGF0YUxpa2VzLmZpbHRlcigobGlrZSkgPT4gbGlrZS5pdGVtX2lkID09IHBhcnNlSW50KGV2ZW50VGFyZ2V0LmlkLCAxMCkpO1xuICAvKiBlc2xpbnQtZW5hYmxlICovXG4gIGxldCBjb3VudCA9IGxpa2VzQXJyYXlbMF0ubGlrZXM7XG4gIGNvdW50ICs9IDE7XG4gIGV2ZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5sYXN0Q2hpbGQucHJldmlvdXNTaWJsaW5nLmlubmVySFRNTCA9IGAke2NvdW50fSBsaWtlc2A7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVMaWtlcywgYXBwSUQsIGdldExpa2VzLCB1cGRhdGVMaWtlcyxcbn07IiwiaW1wb3J0IHsgYWRkUmVzZXJ2YXRpb24sIGdldFJlc2VydmF0aW9ucyB9IGZyb20gJy4vaW52b2x2ZW1lbnRBcGkuanMnO1xuXG5jb25zdCBhZGROZXdTY29yZSA9IChidXR0b25JZCkgPT4ge1xuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyX25hbWUnKTtcbiAgY29uc3Qgc3RhcnREYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyX3N0YXJ0RGF0ZScpO1xuICBjb25zdCBlbmREYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyX2VuZERhdGUnKTtcbiAgYWRkUmVzZXJ2YXRpb24oYnV0dG9uSWQsIG5hbWVJbnB1dC52YWx1ZSwgc3RhcnREYXRlSW5wdXQudmFsdWUsIGVuZERhdGVJbnB1dC52YWx1ZSk7XG4gIG5hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdZb3VyIG5hbWUnO1xufTtcblxuY29uc3QgYWRkUHJvcGVydGllcyA9IChzaW5nbGVNZWFsKSA9PiB7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lYWwtbmFtZScpO1xuICBoMS5pbm5lclRleHQgPSBzaW5nbGVNZWFsWzBdLnN0ck1lYWw7XG5cbiAgY29uc3QgcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvJyk7XG4gIHAuaW5uZXJIVE1MID0gYDxzdHJvbmc+UmVnaW9uOiAke3NpbmdsZU1lYWxbMF0uc3RyQXJlYX08L3N0cm9uZz4gJm5ic3A7IDxzdHJvbmc+TWFpbiBJbmdyZWRpZW50OiAke3NpbmdsZU1lYWxbMF0uc3RySW5ncmVkaWVudDF9PC9zdHJvbmc+IDxicj5cbiAgPHN0cm9uZz5DYXRlZ29yeTogJHtzaW5nbGVNZWFsWzBdLnN0ckNhdGVnb3J5fTwvc3Ryb25nPiAmbmJzcDsgPHN0cm9uZz5UYWc6ICR7c2luZ2xlTWVhbFswXS5zdHJUYWdzfTwvc3Ryb25nPiA8YnI+YDtcblxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVhbC1pbWcnKTtcbiAgaW1nLnNyYyA9IHNpbmdsZU1lYWxbMF0uc3RyTWVhbFRodW1iO1xuXG4gIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRCdXR0b24nKTtcbiAgYWRkQnV0dG9uLm5hbWUgPSBzaW5nbGVNZWFsWzBdLmlkTWVhbDtcblxuICBnZXRSZXNlcnZhdGlvbnMoc2luZ2xlTWVhbFswXS5pZE1lYWwpO1xuXG4gIGFkZEJ1dHRvbi5vbmNsaWNrID0gYXN5bmMgKGUpID0+IHtcbiAgICBhd2FpdCBhZGROZXdTY29yZShlLnRhcmdldC5uYW1lKTtcbiAgfTtcbn07XG5cbmNvbnN0IHNob3dQb3B1cCA9IChpbmRleCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXRpb24nKTtcbiAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdNZWFscycpICE9PSBudWxsKSB7XG4gICAgY29uc3QgYXJyYXlPZk1lYWxzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnTWVhbHMnKSk7XG4gICAgY29uc3Qgc2luZ2xlTWVhbCA9IGFycmF5T2ZNZWFscy5maW5kKChtZWFsKSA9PiBtZWFsWzBdLmlkTWVhbCA9PT0gaW5kZXgpO1xuXG4gICAgYWRkUHJvcGVydGllcyhzaW5nbGVNZWFsKTtcbiAgfVxufTtcblxuY29uc3QgYWRkUmVzZXJ2YXRpb25CdXR0b25FdmVudCA9ICgpID0+IHtcbiAgY29uc3QgcmVzZXJ2YXRpb25CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLlJlc2VydmF0b24nKTtcblxuICByZXNlcnZhdGlvbkJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5wYXJlbnROb2RlLmlkO1xuICAgICAgc2hvd1BvcHVwKGluZGV4KTtcbiAgICB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGNsb3NlQ2xpY2sgPSAoKSA9PiB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXRpb24nKTtcbiAgbWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcblxuY29uc3QgYWRkQ3Jvc3NJbWFnZUV2ZW50ID0gKCkgPT4ge1xuICBjb25zdCBjYW5jZWxJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtaW1nJyk7XG4gIGNhbmNlbEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VDbGljayk7XG59O1xuXG5jb25zdCBhZGREYXRlRm9jdXNFdmVudCA9ICgpID0+IHtcbiAgY29uc3Qgc3RhcnREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcl9zdGFydERhdGUnKTtcbiAgY29uc3QgZW5kRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJfZW5kRGF0ZScpO1xuXG4gIHN0YXJ0RGF0ZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIChlKSA9PiB7XG4gICAgZS50YXJnZXQudHlwZSA9ICdkYXRlJztcbiAgfSk7XG5cbiAgZW5kRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIChlKSA9PiB7XG4gICAgZS50YXJnZXQudHlwZSA9ICdkYXRlJztcbiAgfSk7XG5cbiAgc3RhcnREYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZSkgPT4ge1xuICAgIGUudGFyZ2V0LnR5cGUgPSAndGV4dCc7XG4gICAgZS50YXJnZXQucGxhY2Vob2xkZXIgPSAnU3RhcnQgZGF0ZSc7XG4gIH0pO1xuXG4gIGVuZERhdGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChlKSA9PiB7XG4gICAgZS50YXJnZXQudHlwZSA9ICd0ZXh0JztcbiAgICBlLnRhcmdldC5wbGFjZWhvbGRlciA9ICdFbmQgZGF0ZSc7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgYWRkUmVzZXJ2YXRpb25CdXR0b25FdmVudCwgYWRkQ3Jvc3NJbWFnZUV2ZW50LCBhZGREYXRlRm9jdXNFdmVudCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9jb21tZW50LmNzcyc7XG5pbXBvcnQgJy4vcmVzZXJ2YXRpb24uY3NzJztcbmltcG9ydCAnLi9yZXNlcnZhdGlvbi1kZXNrdG9wLmNzcyc7XG5pbXBvcnQgZmV0Y2hNZWFscyBmcm9tICcuL2FwaS5qcyc7XG5pbXBvcnQgeyBhZGRSZXNlcnZhdGlvbkJ1dHRvbkV2ZW50LCBhZGRDcm9zc0ltYWdlRXZlbnQsIGFkZERhdGVGb2N1c0V2ZW50IH0gZnJvbSAnLi9yZXNlcnZhdGlvbkV2ZW50cy5qcyc7XG5pbXBvcnQgeyBjcmVhdGVDb21tZW50cyB9IGZyb20gJy4vY29tbWVudHNfYXBpLmpzJztcbmltcG9ydCB7XG4gIGJvZHksIGNvbnRhaW5lciwgcG9wdXAsIHBvcHVwQ29tbWVudCwgcG9wdWxhdGVDb21tZW50cyxcbn0gZnJvbSAnLi9jb21tZW50RXZlbnQuanMnO1xuaW1wb3J0IHsgZ2V0TGlrZXMsIHVwZGF0ZUxpa2VzIH0gZnJvbSAnLi9saWtlcy5qcyc7XG5cbmNvbnN0IG1lYWxJZHMgPSBbNTI3NjgsIDUyNzc2LCA1Mjc2NSwgNTI5MzUsIDUyOTYwLCA1Mjk2Ml07XG5cbmNvbnN0IHBvcHVsYXRlID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhID0gW107XG5cbiAgY29uc3QgbWVhbEFycmF5ID0gW107XG5cbiAgbGV0IGRhdGFMaWtlcyA9IGF3YWl0IGdldExpa2VzKCk7XG4gIC8qIGVzbGludC1kaXNhYmxlICovXG4gIGRhdGFMaWtlcyA9IGRhdGFMaWtlcy5maWx0ZXIoKGxpa2UpID0+IHR5cGVvZiAobGlrZS5pdGVtX2lkKSA9PSAnbnVtYmVyJyk7XG5cbiAgbWVhbElkcy5mb3JFYWNoKChpZCkgPT4gZGF0YS5wdXNoKGZldGNoTWVhbHMoaWQpKSk7XG4gIGRhdGEuZm9yRWFjaCgoZGF0YSkgPT4gKGRhdGEudGhlbigobWVhbCkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsaWtlc0FycmF5ID0gZGF0YUxpa2VzLmZpbHRlcihcbiAgICAgIChsaWtlKSA9PiBsaWtlLml0ZW1faWQgPT0gcGFyc2VJbnQobWVhbC5tZWFsc1swXS5pZE1lYWwsIDEwKSxcbiAgICApO1xuICAgIC8qIGVzbGludC1lbmFibGUgKi9cbiAgICBjYXJkLmNsYXNzTmFtZSA9ICdjYXJkJztcbiAgICBjYXJkLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiY2FyZFwiIGlkPVwiJHttZWFsLm1lYWxzWzBdLmlkTWVhbH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHttZWFsLm1lYWxzWzBdLnN0ck1lYWxUaHVtYn1cbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIGFsdD1cIm1lYWxcIiBjbGFzcz1cImZvb2RQaWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWtlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4ke21lYWwubWVhbHNbMF0uc3RyTWVhbH08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmFzIGZhLWhlYXJ0IGdpdmUtbGlrZVwiIGlkPVwiJHttZWFsLm1lYWxzWzBdLmlkTWVhbH1cIj48L2k+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJsaWtlc051bVwiPiR7bGlrZXNBcnJheVswXS5saWtlcyArIDF9IGxpa2VzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwiJHttZWFsLm1lYWxzWzBdLmlkTWVhbH1cIiBjbGFzcz1cImNvbW1lbnRcIj48aSBjbGFzcz1cImZhcyBmYS1jb21tZW50XCI+PC9pPiAgQ29tbWVudDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIlJlc2VydmF0b25cIj5SZXNlcnZhdG9uIDxpIGNsYXNzPVwiZmEgZmEtcGVuY2lsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIG1lYWxBcnJheS5wdXNoKG1lYWwubWVhbHMpO1xuICAgIGFkZFJlc2VydmF0aW9uQnV0dG9uRXZlbnQoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTWVhbHMnLCBKU09OLnN0cmluZ2lmeShtZWFsQXJyYXkpKTtcbiAgfSkpKTtcblxuICBhZGRDcm9zc0ltYWdlRXZlbnQoKTtcbiAgYWRkRGF0ZUZvY3VzRXZlbnQoKTtcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IHBvcHVsYXRlKCk7XG59KTtcblxuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5tYXRjaGVzKCcuZ2l2ZS1saWtlJykpIHtcbiAgICB1cGRhdGVMaWtlcyhlLnRhcmdldCk7XG4gIH1cbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5tYXRjaGVzKCcuY29tbWVudCcpKSB7XG4gICAgcG9wdXBDb21tZW50KGUudGFyZ2V0KTtcbiAgfVxufSk7XG5cbmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQubWF0Y2hlcygnLmNsb3NlcG9wdXAnKSkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuXG4gICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgY29udGFpbmVyLnN0eWxlLmZpbHRlciA9ICdibHVyKDBweCknO1xuICAgIGhlYWRlci5zdHlsZS5maWx0ZXIgPSAnYmx1cigwcHgpJztcbiAgfSBlbHNlIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5tYXRjaGVzKCcuYnRuLWNvbW1lbnQnKSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWU7XG4gICAgY29uc3QgdXNlckNvbW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXNnJykudmFsdWU7XG5cbiAgICBpZiAodXNlck5hbWUgIT09ICcnICYmIHVzZXJDb21tZW50ICE9PSAnJykge1xuICAgICAgYXdhaXQgY3JlYXRlQ29tbWVudHMoZS50YXJnZXQuaWQsIHVzZXJOYW1lLCB1c2VyQ29tbWVudCk7XG4gICAgICBwb3B1bGF0ZUNvbW1lbnRzKGUudGFyZ2V0LmlkKTtcbiAgICB9XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9