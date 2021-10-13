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
___CSS_LOADER_EXPORT___.push([module.id, ".popup{\r\n    display: none;\r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  .popupView {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n      width: 70%;\r\n      \r\n  \r\n  }\r\n  \r\n  .popup-child {\r\n    opacity: 0.9;\r\n    height: 40rem;\r\n    padding-top: 1rem;\r\n    padding-right: 1rem;\r\n    padding-left: 2rem;\r\n    border: 2px solid black;\r\n    background:aliceblue; ;\r\n    background-size: 100%;\r\n    border-radius: 2%;\r\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\r\n  \r\n  }\r\n  \r\n  .popupView .closepopup{\r\n    float: right;\r\n    background: none;\r\n    border: none;\r\n    box-shadow: none;\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .popupView h3{\r\n  \r\n    text-align: left;\r\n    color: #723e3e;\r\n    margin-left: 2rem;\r\n  }\r\n  \r\n  #comment-btn{\r\n    \r\n    padding: 0.5rem;\r\n    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\r\n    background: #723e3e;\r\n    color: aliceblue;\r\n    border: none;\r\n    width: 50%;\r\n    font-weight: bold;\r\n  \r\n  }\r\n  \r\n  #comment-btn:hover{\r\n  \r\n    box-shadow: none;\r\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n    background:aliceblue ;\r\n    color:#723e3e ;\r\n  \r\n  }\r\n  \r\n  \r\n  \r\n  #msg{\r\n    border: none;\r\n    background: #ffe0a3;\r\n    \r\n    \r\n  \r\n  }\r\n  \r\n  #msg:active{\r\n    border: none;\r\n    background: #ffe0a3;\r\n    border-radius: 11%;\r\n  \r\n  }\r\n  \r\n  #msg:focus, #msg:focus{\r\n    outline: none;\r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  #name{\r\n    border: none;\r\n    background: #ffe0a3;\r\n    width: 14rem;\r\n    height: 2rem;\r\n    \r\n  }\r\n  \r\n  .meal-instructions-child{\r\n    display: none;\r\n  }\r\n  \r\n  .meal-instructions-parent:hover .meal-instructions-child{\r\n    text-align: left;\r\n    font-weight: bold;\r\n    margin: -15rem 1rem;\r\n    border: 2px solid black;\r\n    height: auto;\r\n    position: absolute;\r\n    z-index: 1;\r\n    margin-bottom: 10rem;\r\n    background-color: white;\r\n    transition: 1s;\r\n    display: block ;\r\n  }\r\n  \r\n  .user-comments{\r\n    position: fixed;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: rgb(250, 239, 218);\r\n    align-items: center;\r\n    justify-content: center;\r\n    top: 11%;\r\n    left: 57%;\r\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\r\n    width: 31%;\r\n    overflow-y: auto;\r\n    height: 16rem;\r\n  \r\n  }\r\n  \r\n  .user-comments li{\r\n    \r\n    text-align: center;\r\n    font-weight: bold;\r\n    border-bottom: 1px solid #723e3e;\r\n    height: 15rem;\r\n    \r\n  }\r\n  \r\n  .comment-section{\r\n  \r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 1rem;\r\n      float: right;\r\n      margin-top: -20rem;\r\n      margin-right: 5rem;\r\n  \r\n  }\r\n  \r\n  .comment-section h4{\r\n    color: #723e3e;\r\n  }\r\n  \r\n  .comment-section h3{\r\n    margin: 0;\r\n  }\r\n  \r\n  .popupView .popupimg{\r\n    border-radius: 10%;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n    margin: 1rem 1.5rem;\r\n    width: 20rem;\r\n  }\r\n  \r\n  .mealInfo{\r\n    list-style: none;\r\n      width: 19rem;\r\n      padding: 1.5rem;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n      display: grid;\r\n      grid-template-columns: 25% 25% 25%;\r\n      gap: 1rem;\r\n      margin-bottom: 5rem;\r\n      box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;\r\n      background-color: wheat;\r\n      justify-items: center;\r\n  \r\n  }\r\n  \r\n  .mealInfo li {\r\n    \r\n    font-weight:500;\r\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\r\n    padding: 0.5rem;\r\n    text-align: center;\r\n    background: #723e3e;\r\n    border-radius: 6%;\r\n  \r\n  }", "",{"version":3,"sources":["webpack://./src/comment.css"],"names":[],"mappings":"AAAA;IACI,aAAa;EACf;;;;;EAKA;IACE,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;MAC9B,UAAU;;;EAGd;;EAEA;IACE,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;IAClB,uBAAuB;IACvB,oBAAoB;IACpB,qBAAqB;IACrB,iBAAiB;IACjB,8IAA8I;;EAEhJ;;EAEA;IACE,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;EACnB;;EAEA;;IAEE,gBAAgB;IAChB,cAAc;IACd,iBAAiB;EACnB;;EAEA;;IAEE,eAAe;IACf,iDAAiD;IACjD,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;IACZ,UAAU;IACV,iBAAiB;;EAEnB;;EAEA;;IAEE,gBAAgB;IAChB,uHAAuH;IACvH,qBAAqB;IACrB,cAAc;;EAEhB;;;;EAIA;IACE,YAAY;IACZ,mBAAmB;;;;EAIrB;;EAEA;IACE,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;;EAEpB;;EAEA;IACE,aAAa;EACf;;;;;EAKA;IACE,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,YAAY;;EAEd;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,oBAAoB;IACpB,uBAAuB;IACvB,cAAc;IACd,eAAe;EACjB;;EAEA;IACE,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,oCAAoC;IACpC,mBAAmB;IACnB,uBAAuB;IACvB,QAAQ;IACR,SAAS;IACT,wFAAwF;IACxF,UAAU;IACV,gBAAgB;IAChB,aAAa;;EAEf;;EAEA;;IAEE,kBAAkB;IAClB,iBAAiB;IACjB,gCAAgC;IAChC,aAAa;;EAEf;;EAEA;;MAEI,aAAa;MACb,sBAAsB;MACtB,SAAS;MACT,YAAY;MACZ,kBAAkB;MAClB,kBAAkB;;EAEtB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,SAAS;EACX;;EAEA;IACE,kBAAkB;IAClB,4CAA4C;IAC5C,mBAAmB;IACnB,YAAY;EACd;;EAEA;IACE,gBAAgB;MACd,YAAY;MACZ,eAAe;MACf,8BAA8B;MAC9B,mBAAmB;MACnB,aAAa;MACb,kCAAkC;MAClC,SAAS;MACT,mBAAmB;MACnB,wCAAwC;MACxC,uBAAuB;MACvB,qBAAqB;;EAEzB;;EAEA;;IAEE,eAAe;IACf,uLAAuL;IACvL,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;;EAEnB","sourcesContent":[".popup{\r\n    display: none;\r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  .popupView {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n      width: 70%;\r\n      \r\n  \r\n  }\r\n  \r\n  .popup-child {\r\n    opacity: 0.9;\r\n    height: 40rem;\r\n    padding-top: 1rem;\r\n    padding-right: 1rem;\r\n    padding-left: 2rem;\r\n    border: 2px solid black;\r\n    background:aliceblue; ;\r\n    background-size: 100%;\r\n    border-radius: 2%;\r\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\r\n  \r\n  }\r\n  \r\n  .popupView .closepopup{\r\n    float: right;\r\n    background: none;\r\n    border: none;\r\n    box-shadow: none;\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .popupView h3{\r\n  \r\n    text-align: left;\r\n    color: #723e3e;\r\n    margin-left: 2rem;\r\n  }\r\n  \r\n  #comment-btn{\r\n    \r\n    padding: 0.5rem;\r\n    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\r\n    background: #723e3e;\r\n    color: aliceblue;\r\n    border: none;\r\n    width: 50%;\r\n    font-weight: bold;\r\n  \r\n  }\r\n  \r\n  #comment-btn:hover{\r\n  \r\n    box-shadow: none;\r\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n    background:aliceblue ;\r\n    color:#723e3e ;\r\n  \r\n  }\r\n  \r\n  \r\n  \r\n  #msg{\r\n    border: none;\r\n    background: #ffe0a3;\r\n    \r\n    \r\n  \r\n  }\r\n  \r\n  #msg:active{\r\n    border: none;\r\n    background: #ffe0a3;\r\n    border-radius: 11%;\r\n  \r\n  }\r\n  \r\n  #msg:focus, #msg:focus{\r\n    outline: none;\r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  #name{\r\n    border: none;\r\n    background: #ffe0a3;\r\n    width: 14rem;\r\n    height: 2rem;\r\n    \r\n  }\r\n  \r\n  .meal-instructions-child{\r\n    display: none;\r\n  }\r\n  \r\n  .meal-instructions-parent:hover .meal-instructions-child{\r\n    text-align: left;\r\n    font-weight: bold;\r\n    margin: -15rem 1rem;\r\n    border: 2px solid black;\r\n    height: auto;\r\n    position: absolute;\r\n    z-index: 1;\r\n    margin-bottom: 10rem;\r\n    background-color: white;\r\n    transition: 1s;\r\n    display: block ;\r\n  }\r\n  \r\n  .user-comments{\r\n    position: fixed;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: rgb(250, 239, 218);\r\n    align-items: center;\r\n    justify-content: center;\r\n    top: 11%;\r\n    left: 57%;\r\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\r\n    width: 31%;\r\n    overflow-y: auto;\r\n    height: 16rem;\r\n  \r\n  }\r\n  \r\n  .user-comments li{\r\n    \r\n    text-align: center;\r\n    font-weight: bold;\r\n    border-bottom: 1px solid #723e3e;\r\n    height: 15rem;\r\n    \r\n  }\r\n  \r\n  .comment-section{\r\n  \r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 1rem;\r\n      float: right;\r\n      margin-top: -20rem;\r\n      margin-right: 5rem;\r\n  \r\n  }\r\n  \r\n  .comment-section h4{\r\n    color: #723e3e;\r\n  }\r\n  \r\n  .comment-section h3{\r\n    margin: 0;\r\n  }\r\n  \r\n  .popupView .popupimg{\r\n    border-radius: 10%;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n    margin: 1rem 1.5rem;\r\n    width: 20rem;\r\n  }\r\n  \r\n  .mealInfo{\r\n    list-style: none;\r\n      width: 19rem;\r\n      padding: 1.5rem;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n      display: grid;\r\n      grid-template-columns: 25% 25% 25%;\r\n      gap: 1rem;\r\n      margin-bottom: 5rem;\r\n      box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;\r\n      background-color: wheat;\r\n      justify-items: center;\r\n  \r\n  }\r\n  \r\n  .mealInfo li {\r\n    \r\n    font-weight:500;\r\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\r\n    padding: 0.5rem;\r\n    text-align: center;\r\n    background: #723e3e;\r\n    border-radius: 6%;\r\n  \r\n  }"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "@media only screen and (min-width: 992px) {\r\n  .meal-img-div {\r\n    height: 600px;\r\n  }\r\n\r\n  .meal-img {\r\n    height: 600px;\r\n    width: 600px;\r\n  }\r\n\r\n  .reservation-form,\r\n  .reservation-info,\r\n  .info {\r\n    font-size: larger;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/reservation-desktop.css"],"names":[],"mappings":"AAAA;EACE;IACE,aAAa;EACf;;EAEA;IACE,aAAa;IACb,YAAY;EACd;;EAEA;;;IAGE,iBAAiB;EACnB;AACF","sourcesContent":["@media only screen and (min-width: 992px) {\r\n  .meal-img-div {\r\n    height: 600px;\r\n  }\r\n\r\n  .meal-img {\r\n    height: 600px;\r\n    width: 600px;\r\n  }\r\n\r\n  .reservation-form,\r\n  .reservation-info,\r\n  .info {\r\n    font-size: larger;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "fieldset {\r\n  border: none;\r\n  width: 30%;\r\n  padding: 0;\r\n  justify-self: center;\r\n}\r\n\r\n.reservation {\r\n  display: none;\r\n  z-index: 9;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  position: fixed;\r\n  flex-wrap: wrap;\r\n  background: #ec5242;\r\n  justify-content: space-between;\r\n  margin: auto;\r\n  top: 0;\r\n}\r\n\r\n.reservation-list {\r\n  width: 96%;\r\n  height: 97vh;\r\n  margin: 2%;\r\n  border: 1px solid #000;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.div.cross-img-div {\r\n  max-width: 8%;\r\n}\r\n\r\n.meal-img-div {\r\n  height: 300px;\r\n  margin-top: 20px;\r\n  margin-right: 5%;\r\n  margin-left: 5%;\r\n  justify-content: center;\r\n}\r\n\r\n.meal-img {\r\n  height: 300px;\r\n  width: 300px;\r\n  resize: both;\r\n}\r\n\r\n.click {\r\n  position: fixed;\r\n  right: 7%;\r\n}\r\n\r\n.reservation-form,\r\n.reservation-info,\r\n.info {\r\n  text-align: center;\r\n}\r\n\r\n.reservation-form {\r\n  align-self: center;\r\n  width: 300px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.reservation,\r\n.reservation-list,\r\n.reservation-form,\r\n.form {\r\n  flex-direction: column;\r\n}\r\n\r\n.form-item {\r\n  height: 40px;\r\n}\r\n\r\n.addButton {\r\n  font-size: 25px;\r\n}\r\n\r\n.addButton:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.margin-bottom {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.d-flex {\r\n  display: flex;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/reservation.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,UAAU;EACV,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,UAAU;EACV,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;EACZ,MAAM;AACR;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,UAAU;EACV,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;EACf,SAAS;AACX;;AAEA;;;EAGE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;;;EAIE,sBAAsB;AACxB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf","sourcesContent":["fieldset {\r\n  border: none;\r\n  width: 30%;\r\n  padding: 0;\r\n  justify-self: center;\r\n}\r\n\r\n.reservation {\r\n  display: none;\r\n  z-index: 9;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  position: fixed;\r\n  flex-wrap: wrap;\r\n  background: #ec5242;\r\n  justify-content: space-between;\r\n  margin: auto;\r\n  top: 0;\r\n}\r\n\r\n.reservation-list {\r\n  width: 96%;\r\n  height: 97vh;\r\n  margin: 2%;\r\n  border: 1px solid #000;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.div.cross-img-div {\r\n  max-width: 8%;\r\n}\r\n\r\n.meal-img-div {\r\n  height: 300px;\r\n  margin-top: 20px;\r\n  margin-right: 5%;\r\n  margin-left: 5%;\r\n  justify-content: center;\r\n}\r\n\r\n.meal-img {\r\n  height: 300px;\r\n  width: 300px;\r\n  resize: both;\r\n}\r\n\r\n.click {\r\n  position: fixed;\r\n  right: 7%;\r\n}\r\n\r\n.reservation-form,\r\n.reservation-info,\r\n.info {\r\n  text-align: center;\r\n}\r\n\r\n.reservation-form {\r\n  align-self: center;\r\n  width: 300px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.reservation,\r\n.reservation-list,\r\n.reservation-form,\r\n.form {\r\n  flex-direction: column;\r\n}\r\n\r\n.form-item {\r\n  height: 40px;\r\n}\r\n\r\n.addButton {\r\n  font-size: 25px;\r\n}\r\n\r\n.addButton:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.margin-bottom {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.d-flex {\r\n  display: flex;\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  list-style: none;\r\n  text-decoration: none;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 0;\r\n}\r\n\r\nhtml {\r\n  background-color: #943939;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0 30px 0 30px;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 2% 0 2% 0;\r\n}\r\n\r\n.logo {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  height: 7rem;\r\n  width: 7rem;\r\n}\r\n\r\nli {\r\n  padding-left: 30px;\r\n}\r\n\r\nli a {\r\n  font-size: 20px;\r\n  color: #ffe0a3;\r\n}\r\n\r\n.container {\r\n  display: grid;\r\n  justify-content: center;\r\n  text-align: center;\r\n  grid-template-columns: 25% 25% 25%;\r\n  grid-gap: 3rem;\r\n  height: 5%;\r\n}\r\n\r\n.foodPic {\r\n  width: 50%;\r\n}\r\n\r\nbutton {\r\n  margin-bottom: 10px;\r\n  box-shadow: 5px 5px 5px;\r\n  cursor: pointer;\r\n  border-radius: 25px;\r\n}\r\n\r\nfooter {\r\n  margin-top: 5rem;\r\n  padding-top: 1rem;\r\n  margin-bottom: -1rem;\r\n  background-color: #723e3e;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,cAAc;EACd,eAAe;EACf,aAAa;AACf;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,gDAAuC;EACvC,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,kCAAkC;EAClC,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,oBAAoB;EACpB,yBAAyB;EACzB,WAAW;EACX,kBAAkB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\r\n\r\n* {\r\n  list-style: none;\r\n  text-decoration: none;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 0;\r\n}\r\n\r\nhtml {\r\n  background-color: #943939;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0 30px 0 30px;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 2% 0 2% 0;\r\n}\r\n\r\n.logo {\r\n  content: url(\"../logo_transparent.png\");\r\n  height: 7rem;\r\n  width: 7rem;\r\n}\r\n\r\nli {\r\n  padding-left: 30px;\r\n}\r\n\r\nli a {\r\n  font-size: 20px;\r\n  color: #ffe0a3;\r\n}\r\n\r\n.container {\r\n  display: grid;\r\n  justify-content: center;\r\n  text-align: center;\r\n  grid-template-columns: 25% 25% 25%;\r\n  grid-gap: 3rem;\r\n  height: 5%;\r\n}\r\n\r\n.foodPic {\r\n  width: 50%;\r\n}\r\n\r\nbutton {\r\n  margin-bottom: 10px;\r\n  box-shadow: 5px 5px 5px;\r\n  cursor: pointer;\r\n  border-radius: 25px;\r\n}\r\n\r\nfooter {\r\n  margin-top: 5rem;\r\n  padding-top: 1rem;\r\n  margin-bottom: -1rem;\r\n  background-color: #723e3e;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n"],"sourceRoot":""}]);
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

    const mealArray =  JSON.parse(localStorage.getItem('Meals'));

    if(mealArray !== null){

        popup.classList.add('popupView');
        popup.style.display = 'block';
    
        const tmp = mealArray.findIndex((el) => el[0].idMeal == parseInt(eventTarget.id, 10));
        console.log(mealArray[0])
    
    
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
                    <div class="meal-instructions-parent"><i class="fas fa-hat-chef"></i>
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
    
                
    
                let tagsArr = mealArray[tmp][0].strTags.split(',');
    
                for(const tag of tagsArr){
    
                if(tag === ''){
                    continue
                }
    
                else {
    
                    let Tagli = document.createElement('li');
                Tagli.innerHTML += `${tag}`;
                document.querySelector('.mealInfo').appendChild(Tagli);
    
                }
                
    
                }
    
                
            
                body.style.overflow = 'hidden';
                container.style.filter = 'blur(5px)';
                document.querySelector('header').style.filter = 'blur(5px)';
                


    }

    
  
  
  
  }




const loadComment = (name, comment) => {

    const commentInfo = document.createElement('li');
      commentInfo.innerHTML = `
      <span class="user">${name}:  </span>
      &nbsp;
      <span class="user_score">${comment}</span>
      `;
      document.querySelector('.user-comments').appendChild(commentInfo);
  
}
  
  
const loadCommentsSection = (userArr) => {
  
    userArr.forEach((data) => {
        loadComment(data.name, data.comment);
    })
  
}
  

  
let userCommentData = {
    name : '',
    comment : ''
}
let userDataArr = JSON.parse(localStorage.getItem('userData')) || [];
userDataArr.push(userCommentData);
localStorage.setItem('userData', JSON.stringify(userDataArr));
  


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
    console.log(arrayOfMeals);
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
      console.log(index);
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

  if(e.target && e.target.matches('.comment')){
    
    (0,_commentEvent_js__WEBPACK_IMPORTED_MODULE_6__.popupComment)(e.target);
    (0,_commentEvent_js__WEBPACK_IMPORTED_MODULE_6__.loadCommentsSection)(_commentEvent_js__WEBPACK_IMPORTED_MODULE_6__.userDataArr);

  }
  
  
})


_commentEvent_js__WEBPACK_IMPORTED_MODULE_6__.body.addEventListener('click', (e) => {

   if (e.target && e.target.matches('.closepopup') ){

      const header  = document.querySelector('header');
      
        console.log('hello');
        _commentEvent_js__WEBPACK_IMPORTED_MODULE_6__.popup.style.display = 'none';
        _commentEvent_js__WEBPACK_IMPORTED_MODULE_6__.body.style.overflow = 'scroll';
        _commentEvent_js__WEBPACK_IMPORTED_MODULE_6__.container.style.filter = 'blur(0px)';
        header.style.filter = 'blur(0px)';  
    
  }

  else if (e.target && e.target.matches('.comment-btn')){

    e.preventDefault();
      
  }

  
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMseURBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLG1FQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFtQjtBQUMzQixRQUFRLGlFQUFtQjtBQUMzQixRQUFRLG9FQUFzQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0NhcHN0b25lLWFwaS8uL3NyYy9jb21tZW50LmNzcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9zcmMvcmVzZXJ2YXRpb24tZGVza3RvcC5jc3MiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vc3JjL3Jlc2VydmF0aW9uLmNzcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9zcmMvY29tbWVudC5jc3M/ODNkYSIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9zcmMvcmVzZXJ2YXRpb24tZGVza3RvcC5jc3M/MDFhZCIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9zcmMvcmVzZXJ2YXRpb24uY3NzP2Y1N2YiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9zcmMvY29tbWVudEV2ZW50LmpzIiwid2VicGFjazovL0NhcHN0b25lLWFwaS8uL3NyYy9yZXNlcnZhdGlvbkV2ZW50cy5qcyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0NhcHN0b25lLWFwaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQ2Fwc3RvbmUtYXBpL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL0NhcHN0b25lLWFwaS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9DYXBzdG9uZS1hcGkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucG9wdXB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIFxcclxcbiAgXFxyXFxuICBcXHJcXG4gIC5wb3B1cFZpZXcge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgICAgXFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnBvcHVwLWNoaWxkIHtcXHJcXG4gICAgb3BhY2l0eTogMC45O1xcclxcbiAgICBoZWlnaHQ6IDQwcmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZDphbGljZWJsdWU7IDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggNTBweCAxMDBweCAtMjBweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAzMHB4IDYwcHggLTMwcHgsIHJnYmEoMTAsIDM3LCA2NCwgMC4zNSkgMHB4IC0ycHggNnB4IDBweCBpbnNldDtcXHJcXG4gIFxcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucG9wdXBWaWV3IC5jbG9zZXBvcHVwe1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucG9wdXBWaWV3IGgze1xcclxcbiAgXFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGNvbG9yOiAjNzIzZTNlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgI2NvbW1lbnQtYnRue1xcclxcbiAgICBcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDIuNHB4IDIuNHB4IDMuMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNzIzZTNlO1xcclxcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNjb21tZW50LWJ0bjpob3ZlcntcXHJcXG4gIFxcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDJweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggN3B4IDEzcHggLTNweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAtM3B4IDBweCBpbnNldDtcXHJcXG4gICAgYmFja2dyb3VuZDphbGljZWJsdWUgO1xcclxcbiAgICBjb2xvcjojNzIzZTNlIDtcXHJcXG4gIFxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBcXHJcXG4gIFxcclxcbiAgI21zZ3tcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZlMGEzO1xcclxcbiAgICBcXHJcXG4gICAgXFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgI21zZzphY3RpdmV7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZTBhMztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTElO1xcclxcbiAgXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNtc2c6Zm9jdXMsICNtc2c6Zm9jdXN7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIFxcclxcbiAgXFxyXFxuICBcXHJcXG4gICNuYW1le1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmUwYTM7XFxyXFxuICAgIHdpZHRoOiAxNHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1lYWwtaW5zdHJ1Y3Rpb25zLWNoaWxke1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubWVhbC1pbnN0cnVjdGlvbnMtcGFyZW50OmhvdmVyIC5tZWFsLWluc3RydWN0aW9ucy1jaGlsZHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIG1hcmdpbjogLTE1cmVtIDFyZW07XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTByZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAxcztcXHJcXG4gICAgZGlzcGxheTogYmxvY2sgO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudXNlci1jb21tZW50c3tcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyMzksIDIxOCk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB0b3A6IDExJTtcXHJcXG4gICAgbGVmdDogNTclO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCAycHggNXB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMXB4IDNweCAtMXB4O1xcclxcbiAgICB3aWR0aDogMzElO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDE2cmVtO1xcclxcbiAgXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC51c2VyLWNvbW1lbnRzIGxpe1xcclxcbiAgICBcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3MjNlM2U7XFxyXFxuICAgIGhlaWdodDogMTVyZW07XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29tbWVudC1zZWN0aW9ue1xcclxcbiAgXFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGdhcDogMXJlbTtcXHJcXG4gICAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogLTIwcmVtO1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogNXJlbTtcXHJcXG4gIFxcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29tbWVudC1zZWN0aW9uIGg0e1xcclxcbiAgICBjb2xvcjogIzcyM2UzZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbW1lbnQtc2VjdGlvbiBoM3tcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucG9wdXBWaWV3IC5wb3B1cGltZ3tcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDEuNXJlbTtcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubWVhbEluZm97XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgICAgd2lkdGg6IDE5cmVtO1xcclxcbiAgICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDI1JSAyNSU7XFxyXFxuICAgICAgZ2FwOiAxcmVtO1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDVyZW07XFxyXFxuICAgICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjQlKSAwcHggM3B4IDhweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcXHJcXG4gICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1lYWxJbmZvIGxpIHtcXHJcXG4gICAgXFxyXFxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggNTRweCA1NXB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAtMTJweCAzMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCA0cHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMTcpIDBweCAxMnB4IDEzcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IC0zcHggNXB4O1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogIzcyM2UzZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNiU7XFxyXFxuICBcXHJcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tbWVudC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0VBQ2Y7Ozs7O0VBS0E7SUFDRSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7TUFDOUIsVUFBVTs7O0VBR2Q7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQiw4SUFBOEk7O0VBRWhKOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUsZUFBZTtJQUNmLGlEQUFpRDtJQUNqRCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixVQUFVO0lBQ1YsaUJBQWlCOztFQUVuQjs7RUFFQTs7SUFFRSxnQkFBZ0I7SUFDaEIsdUhBQXVIO0lBQ3ZILHFCQUFxQjtJQUNyQixjQUFjOztFQUVoQjs7OztFQUlBO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjs7OztFQUlyQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCOztFQUVwQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7Ozs7RUFLQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7O0VBRWQ7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0ZBQXdGO0lBQ3hGLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsYUFBYTs7RUFFZjs7RUFFQTs7SUFFRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxhQUFhOztFQUVmOztFQUVBOztNQUVJLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsU0FBUztNQUNULFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsa0JBQWtCOztFQUV0Qjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsNENBQTRDO0lBQzVDLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxnQkFBZ0I7TUFDZCxZQUFZO01BQ1osZUFBZTtNQUNmLDhCQUE4QjtNQUM5QixtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLGtDQUFrQztNQUNsQyxTQUFTO01BQ1QsbUJBQW1CO01BQ25CLHdDQUF3QztNQUN4Qyx1QkFBdUI7TUFDdkIscUJBQXFCOztFQUV6Qjs7RUFFQTs7SUFFRSxlQUFlO0lBQ2YsdUxBQXVMO0lBQ3ZMLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjs7RUFFbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnBvcHVwe1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBcXHJcXG4gIFxcclxcbiAgXFxyXFxuICAucG9wdXBWaWV3IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgICB3aWR0aDogNzAlO1xcclxcbiAgICAgIFxcclxcbiAgXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5wb3B1cC1jaGlsZCB7XFxyXFxuICAgIG9wYWNpdHk6IDAuOTtcXHJcXG4gICAgaGVpZ2h0OiA0MHJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQ6YWxpY2VibHVlOyA7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMiU7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDUwcHggMTAwcHggLTIwcHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMzBweCA2MHB4IC0zMHB4LCByZ2JhKDEwLCAzNywgNjQsIDAuMzUpIDBweCAtMnB4IDZweCAwcHggaW5zZXQ7XFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnBvcHVwVmlldyAuY2xvc2Vwb3B1cHtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnBvcHVwVmlldyBoM3tcXHJcXG4gIFxcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBjb2xvcjogIzcyM2UzZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNjb21tZW50LWJ0bntcXHJcXG4gICAgXFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAyLjRweCAyLjRweCAzLjJweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzcyM2UzZTtcXHJcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIFxcclxcbiAgfVxcclxcbiAgXFxyXFxuICAjY29tbWVudC1idG46aG92ZXJ7XFxyXFxuICBcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQpIDBweCAycHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDdweCAxM3B4IC0zcHgsIHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggLTNweCAwcHggaW5zZXQ7XFxyXFxuICAgIGJhY2tncm91bmQ6YWxpY2VibHVlIDtcXHJcXG4gICAgY29sb3I6IzcyM2UzZSA7XFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgXFxyXFxuICBcXHJcXG4gICNtc2d7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZTBhMztcXHJcXG4gICAgXFxyXFxuICAgIFxcclxcbiAgXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNtc2c6YWN0aXZle1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmUwYTM7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDExJTtcXHJcXG4gIFxcclxcbiAgfVxcclxcbiAgXFxyXFxuICAjbXNnOmZvY3VzLCAjbXNnOmZvY3Vze1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBcXHJcXG4gIFxcclxcbiAgXFxyXFxuICAjbmFtZXtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZlMGEzO1xcclxcbiAgICB3aWR0aDogMTRyZW07XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5tZWFsLWluc3RydWN0aW9ucy1jaGlsZHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1lYWwtaW5zdHJ1Y3Rpb25zLXBhcmVudDpob3ZlciAubWVhbC1pbnN0cnVjdGlvbnMtY2hpbGR7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBtYXJnaW46IC0xNXJlbSAxcmVtO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMXM7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrIDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnVzZXItY29tbWVudHN7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjM5LCAyMTgpO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdG9wOiAxMSU7XFxyXFxuICAgIGxlZnQ6IDU3JTtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMnB4IDVweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDFweCAzcHggLTFweDtcXHJcXG4gICAgd2lkdGg6IDMxJTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiAxNnJlbTtcXHJcXG4gIFxcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudXNlci1jb21tZW50cyBsaXtcXHJcXG4gICAgXFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzIzZTNlO1xcclxcbiAgICBoZWlnaHQ6IDE1cmVtO1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbW1lbnQtc2VjdGlvbntcXHJcXG4gIFxcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBnYXA6IDFyZW07XFxyXFxuICAgICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICAgIG1hcmdpbi10b3A6IC0yMHJlbTtcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbW1lbnQtc2VjdGlvbiBoNHtcXHJcXG4gICAgY29sb3I6ICM3MjNlM2U7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb21tZW50LXNlY3Rpb24gaDN7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnBvcHVwVmlldyAucG9wdXBpbWd7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAxLjVyZW07XFxyXFxuICAgIHdpZHRoOiAyMHJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1lYWxJbmZve1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICAgIHdpZHRoOiAxOXJlbTtcXHJcXG4gICAgICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSAyNSUgMjUlO1xcclxcbiAgICAgIGdhcDogMXJlbTtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcclxcbiAgICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDI0JSkgMHB4IDNweCA4cHg7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XFxyXFxuICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5tZWFsSW5mbyBsaSB7XFxyXFxuICAgIFxcclxcbiAgICBmb250LXdlaWdodDo1MDA7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDU0cHggNTVweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggLTEycHggMzBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNHB4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjE3KSAwcHggMTJweCAxM3B4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAtM3B4IDVweDtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM3MjNlM2U7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDYlO1xcclxcbiAgXFxyXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcclxcbiAgLm1lYWwtaW1nLWRpdiB7XFxyXFxuICAgIGhlaWdodDogNjAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVhbC1pbWcge1xcclxcbiAgICBoZWlnaHQ6IDYwMHB4O1xcclxcbiAgICB3aWR0aDogNjAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVzZXJ2YXRpb24tZm9ybSxcXHJcXG4gIC5yZXNlcnZhdGlvbi1pbmZvLFxcclxcbiAgLmluZm8ge1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Jlc2VydmF0aW9uLWRlc2t0b3AuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtFQUNkOztFQUVBOzs7SUFHRSxpQkFBaUI7RUFDbkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxyXFxuICAubWVhbC1pbWctZGl2IHtcXHJcXG4gICAgaGVpZ2h0OiA2MDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZWFsLWltZyB7XFxyXFxuICAgIGhlaWdodDogNjAwcHg7XFxyXFxuICAgIHdpZHRoOiA2MDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZXNlcnZhdGlvbi1mb3JtLFxcclxcbiAgLnJlc2VydmF0aW9uLWluZm8sXFxyXFxuICAuaW5mbyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJmaWVsZHNldCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHotaW5kZXg6IDk7XFxyXFxuICBtaW4td2lkdGg6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYmFja2dyb3VuZDogI2VjNTI0MjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWxpc3Qge1xcclxcbiAgd2lkdGg6IDk2JTtcXHJcXG4gIGhlaWdodDogOTd2aDtcXHJcXG4gIG1hcmdpbjogMiU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uZGl2LmNyb3NzLWltZy1kaXYge1xcclxcbiAgbWF4LXdpZHRoOiA4JTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtaW1nLWRpdiB7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNSU7XFxyXFxuICBtYXJnaW4tbGVmdDogNSU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtaW1nIHtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICByZXNpemU6IGJvdGg7XFxyXFxufVxcclxcblxcclxcbi5jbGljayB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICByaWdodDogNyU7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbi1mb3JtLFxcclxcbi5yZXNlcnZhdGlvbi1pbmZvLFxcclxcbi5pbmZvIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWZvcm0ge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLFxcclxcbi5yZXNlcnZhdGlvbi1saXN0LFxcclxcbi5yZXNlcnZhdGlvbi1mb3JtLFxcclxcbi5mb3JtIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWl0ZW0ge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkQnV0dG9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZEJ1dHRvbjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYXJnaW4tYm90dG9tIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5kLWZsZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Jlc2VydmF0aW9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsVUFBVTtFQUNWLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLE1BQU07QUFDUjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBOzs7RUFHRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTs7OztFQUlFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImZpZWxkc2V0IHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgei1pbmRleDogOTtcXHJcXG4gIG1pbi13aWR0aDogMTAwJTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWM1MjQyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24tbGlzdCB7XFxyXFxuICB3aWR0aDogOTYlO1xcclxcbiAgaGVpZ2h0OiA5N3ZoO1xcclxcbiAgbWFyZ2luOiAyJTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5kaXYuY3Jvc3MtaW1nLWRpdiB7XFxyXFxuICBtYXgtd2lkdGg6IDglO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pbWctZGl2IHtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pbWcge1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIHJlc2l6ZTogYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsaWNrIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHJpZ2h0OiA3JTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWZvcm0sXFxyXFxuLnJlc2VydmF0aW9uLWluZm8sXFxyXFxuLmluZm8ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24tZm9ybSB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24sXFxyXFxuLnJlc2VydmF0aW9uLWxpc3QsXFxyXFxuLnJlc2VydmF0aW9uLWZvcm0sXFxyXFxuLmZvcm0ge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0taXRlbSB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRCdXR0b24ge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkQnV0dG9uOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1hcmdpbi1ib3R0b20ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmQtZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2xvZ29fdHJhbnNwYXJlbnQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NDM5Mzk7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMCAzMHB4IDAgMzBweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMiUgMCAyJSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgaGVpZ2h0OiA3cmVtO1xcclxcbiAgd2lkdGg6IDdyZW07XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxubGkgYSB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBjb2xvcjogI2ZmZTBhMztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSAyNSUgMjUlO1xcclxcbiAgZ3JpZC1nYXA6IDNyZW07XFxyXFxuICBoZWlnaHQ6IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZFBpYyB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxyXFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IC0xcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcyM2UzZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnREFBdUM7RUFDdkMsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0MzkzOTtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwIDMwcHggMCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAyJSAwIDIlIDA7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcXFwiLi4vbG9nb190cmFuc3BhcmVudC5wbmdcXFwiKTtcXHJcXG4gIGhlaWdodDogN3JlbTtcXHJcXG4gIHdpZHRoOiA3cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbmxpIGEge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgY29sb3I6ICNmZmUwYTM7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgMjUlIDI1JTtcXHJcXG4gIGdyaWQtZ2FwOiAzcmVtO1xcclxcbiAgaGVpZ2h0OiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb2RQaWMge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcclxcbiAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAtMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MjNlM2U7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tbWVudC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbW1lbnQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2VydmF0aW9uLWRlc2t0b3AuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNlcnZhdGlvbi1kZXNrdG9wLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNlcnZhdGlvbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2VydmF0aW9uLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBiYXNlVXJsID0gJ2h0dHA6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2xvb2t1cC5waHA/aT0nO1xyXG5cclxuY29uc3QgZmV0Y2hNZWFscyA9IGFzeW5jIChtZWFsSWQpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9JHttZWFsSWR9YCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZldGNoTWVhbHM7IiwiY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG5cclxuY29uc3QgcG9wdXBDb21tZW50ID0gKGV2ZW50VGFyZ2V0KSA9PiB7XHJcblxyXG4gICAgY29uc3QgbWVhbEFycmF5ID0gIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ01lYWxzJykpO1xyXG5cclxuICAgIGlmKG1lYWxBcnJheSAhPT0gbnVsbCl7XHJcblxyXG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ3BvcHVwVmlldycpO1xyXG4gICAgICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgdG1wID0gbWVhbEFycmF5LmZpbmRJbmRleCgoZWwpID0+IGVsWzBdLmlkTWVhbCA9PSBwYXJzZUludChldmVudFRhcmdldC5pZCwgMTApKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtZWFsQXJyYXlbMF0pXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIHBvcHVwLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzID1cInBvcHVwLWNoaWxkXCI+IFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInVzZXItY29tbWVudHNcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlcG9wdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAmdGltZXM7XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicG9wdXBpbWdcIiAgc3JjPVwiJHttZWFsQXJyYXlbdG1wXVswXS5zdHJNZWFsVGh1bWJ9XCIgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMz4ke21lYWxBcnJheVt0bXBdWzBdLnN0ck1lYWx9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1pbnN0cnVjdGlvbnMtcGFyZW50XCI+PGkgY2xhc3M9XCJmYXMgZmEtaGF0LWNoZWZcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1pbnN0cnVjdGlvbnMtY2hpbGRcIj4ke21lYWxBcnJheVt0bXBdWzBdLnN0ckluc3RydWN0aW9uc308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1lYWxJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPiR7bWVhbEFycmF5W3RtcF1bMF0uc3RyQ2F0ZWdvcnl9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+JHttZWFsQXJyYXlbdG1wXVswXS5zdHJBcmVhfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBtZXRob2Q9XCJnZXRcIiBjbGFzcz1cImNvbW1lbnQtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5BZGQgeW91ciBjb21tZW50PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBtYXhsZW5ndGg9XCIzMFwiIG5hbWU9XCJ1c2VyX25hbWVcIiBwbGFjZWhvbGRlcj1cIkZ1bGwgbmFtZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG1heGxlbmd0aD1cIjUwMFwiIGlkPVwibXNnXCIgbmFtZT1cInVzZXJfbWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0XCIgcm93cz1cIjVcIiBjb2xzPVwiNVwicmVxdWlyZWQ+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cImNvbW1lbnQtYnRuXCIgY2xhc3M9XCJidG4tYnRuXCI+Q29tbWVudDwvYnV0dG9uPiBcclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGxldCB0YWdzQXJyID0gbWVhbEFycmF5W3RtcF1bMF0uc3RyVGFncy5zcGxpdCgnLCcpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBmb3IoY29uc3QgdGFnIG9mIHRhZ3NBcnIpe1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBpZih0YWcgPT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBUYWdsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgICAgICBUYWdsaS5pbm5lckhUTUwgKz0gYCR7dGFnfWA7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhbEluZm8nKS5hcHBlbmRDaGlsZChUYWdsaSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5maWx0ZXIgPSAnYmx1cig1cHgpJztcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLnN0eWxlLmZpbHRlciA9ICdibHVyKDVweCknO1xyXG4gICAgICAgICAgICAgICAgXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBcclxuICBcclxuICBcclxuICBcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBsb2FkQ29tbWVudCA9IChuYW1lLCBjb21tZW50KSA9PiB7XHJcblxyXG4gICAgY29uc3QgY29tbWVudEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICBjb21tZW50SW5mby5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxzcGFuIGNsYXNzPVwidXNlclwiPiR7bmFtZX06ICA8L3NwYW4+XHJcbiAgICAgICZuYnNwO1xyXG4gICAgICA8c3BhbiBjbGFzcz1cInVzZXJfc2NvcmVcIj4ke2NvbW1lbnR9PC9zcGFuPlxyXG4gICAgICBgO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1jb21tZW50cycpLmFwcGVuZENoaWxkKGNvbW1lbnRJbmZvKTtcclxuICBcclxufVxyXG4gIFxyXG4gIFxyXG5jb25zdCBsb2FkQ29tbWVudHNTZWN0aW9uID0gKHVzZXJBcnIpID0+IHtcclxuICBcclxuICAgIHVzZXJBcnIuZm9yRWFjaCgoZGF0YSkgPT4ge1xyXG4gICAgICAgIGxvYWRDb21tZW50KGRhdGEubmFtZSwgZGF0YS5jb21tZW50KTtcclxuICAgIH0pXHJcbiAgXHJcbn1cclxuICBcclxuXHJcbiAgXHJcbmxldCB1c2VyQ29tbWVudERhdGEgPSB7XHJcbiAgICBuYW1lIDogJycsXHJcbiAgICBjb21tZW50IDogJydcclxufVxyXG5sZXQgdXNlckRhdGFBcnIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyRGF0YScpKSB8fCBbXTtcclxudXNlckRhdGFBcnIucHVzaCh1c2VyQ29tbWVudERhdGEpO1xyXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckRhdGEnLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YUFycikpO1xyXG4gIFxyXG5leHBvcnQge2NvbnRhaW5lcixib2R5LHBvcHVwLCBwb3B1cENvbW1lbnQsIHVzZXJEYXRhQXJyLCBsb2FkQ29tbWVudHNTZWN0aW9ufSIsImNvbnN0IHNob3dQb3B1cCA9IChpbmRleCkgPT4ge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbicpO1xyXG4gIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG5cclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ01lYWxzJykgIT09IG51bGwpIHtcclxuICAgIGNvbnN0IGFycmF5T2ZNZWFscyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ01lYWxzJykpO1xyXG4gICAgY29uc29sZS5sb2coYXJyYXlPZk1lYWxzKTtcclxuICAgIGNvbnN0IHNpbmdsZU1lYWwgPSBhcnJheU9mTWVhbHMuZmluZCgobWVhbCkgPT4gbWVhbFswXS5pZE1lYWwgPT09IGluZGV4KTtcclxuXHJcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZWFsLW5hbWUnKTtcclxuICAgIGgxLmlubmVyVGV4dCA9IHNpbmdsZU1lYWxbMF0uc3RyTWVhbDtcclxuXHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8nKTtcclxuICAgIHAuaW5uZXJIVE1MID0gYDxzdHJvbmc+UmVnaW9uOiAke3NpbmdsZU1lYWxbMF0uc3RyQXJlYX08L3N0cm9uZz4gJm5ic3A7IDxzdHJvbmc+TWFpbiBJbmdyZWRpZW50OiAke3NpbmdsZU1lYWxbMF0uc3RySW5ncmVkaWVudDF9PC9zdHJvbmc+IDxicj5cclxuICAgIDxzdHJvbmc+Q2F0ZWdvcnk6ICR7c2luZ2xlTWVhbFswXS5zdHJDYXRlZ29yeX08L3N0cm9uZz4gJm5ic3A7IDxzdHJvbmc+VGFnOiAke3NpbmdsZU1lYWxbMF0uc3RyVGFnc308L3N0cm9uZz4gPGJyPmA7XHJcblxyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lYWwtaW1nJyk7XHJcbiAgICBpbWcuc3JjID0gc2luZ2xlTWVhbFswXS5zdHJNZWFsVGh1bWI7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgYWRkUmVzZXJ2YXRpb25CdXR0b25FdmVudCA9ICgpID0+IHtcclxuICBjb25zdCByZXNlcnZhdGlvbkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuUmVzZXJ2YXRvbicpO1xyXG5cclxuICByZXNlcnZhdGlvbkJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuaWQ7XHJcbiAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgc2hvd1BvcHVwKGluZGV4KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgY2xvc2VDbGljayA9ICgpID0+IHtcclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uJyk7XHJcbiAgbWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59O1xyXG5cclxuY29uc3QgYWRkQ3Jvc3NJbWFnZUV2ZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNhbmNlbEltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC1pbWcnKTtcclxuICBjYW5jZWxJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlQ2xpY2spO1xyXG59O1xyXG5cclxuY29uc3QgYWRkRGF0ZUZvY3VzRXZlbnQgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc3RhcnREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcl9zdGFydERhdGUnKTtcclxuICBjb25zdCBlbmREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcl9lbmREYXRlJyk7XHJcblxyXG4gIHN0YXJ0RGF0ZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIChlKSA9PiB7XHJcbiAgICBlLnRhcmdldC50eXBlID0gJ2RhdGUnO1xyXG4gIH0pO1xyXG5cclxuICBlbmREYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKGUpID0+IHtcclxuICAgIGUudGFyZ2V0LnR5cGUgPSAnZGF0ZSc7XHJcbiAgfSk7XHJcblxyXG4gIHN0YXJ0RGF0ZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKGUpID0+IHtcclxuICAgIGUudGFyZ2V0LnR5cGUgPSAndGV4dCc7XHJcbiAgICBlLnRhcmdldC5wbGFjZWhvbGRlciA9ICdTdGFydCBkYXRlJztcclxuICB9KTtcclxuXHJcbiAgZW5kRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKGUpID0+IHtcclxuICAgIGUudGFyZ2V0LnR5cGUgPSAndGV4dCc7XHJcbiAgICBlLnRhcmdldC5wbGFjZWhvbGRlciA9ICdFbmQgZGF0ZSc7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBhZGRSZXNlcnZhdGlvbkJ1dHRvbkV2ZW50LCBhZGRDcm9zc0ltYWdlRXZlbnQsIGFkZERhdGVGb2N1c0V2ZW50IH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi9jb21tZW50LmNzcyc7XHJcbmltcG9ydCAnLi9yZXNlcnZhdGlvbi5jc3MnO1xyXG5pbXBvcnQgJy4vcmVzZXJ2YXRpb24tZGVza3RvcC5jc3MnO1xyXG5pbXBvcnQgZmV0Y2hNZWFscyBmcm9tICcuL2FwaS5qcyc7XHJcbmltcG9ydCB7IGFkZFJlc2VydmF0aW9uQnV0dG9uRXZlbnQsIGFkZENyb3NzSW1hZ2VFdmVudCwgYWRkRGF0ZUZvY3VzRXZlbnQgfSBmcm9tICcuL3Jlc2VydmF0aW9uRXZlbnRzLmpzJztcclxuaW1wb3J0IHtib2R5LCBjb250YWluZXIsIHBvcHVwLHBvcHVwQ29tbWVudCwgIHVzZXJEYXRhQXJyLCBsb2FkQ29tbWVudHNTZWN0aW9ufSBmcm9tICcuL2NvbW1lbnRFdmVudC5qcydcclxuXHJcbmNvbnN0IG1lYWxJZHMgPSBbNTI3NjgsIDUyNzc2LCA1Mjc2NSwgNTI5MzUsIDUyOTYwLCA1Mjk2Ml07XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBwb3B1bGF0ZSA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gW107XHJcblxyXG4gIGNvbnN0IG1lYWxBcnJheSA9IFtdO1xyXG5cclxuICBhd2FpdCBtZWFsSWRzLmZvckVhY2goKGlkKSA9PiBkYXRhLnB1c2goZmV0Y2hNZWFscyhpZCkpKTtcclxuICBkYXRhLmZvckVhY2goKGRhdGEpID0+IChkYXRhLnRoZW4oKG1lYWwpID0+IHtcclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBjYXJkLmNsYXNzTmFtZSA9ICdjYXJkJztcclxuICAgIGNhcmQuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJjYXJkXCIgaWQ9XCIke21lYWwubWVhbHNbMF0uaWRNZWFsfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7bWVhbC5tZWFsc1swXS5zdHJNZWFsVGh1bWJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIGFsdD1cIm1lYWxcIiBjbGFzcz1cImZvb2RQaWNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpa2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JHttZWFsLm1lYWxzWzBdLnN0ck1lYWx9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmFzIGZhLWhlYXJ0XCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImxpa2VzTnVtXCI+PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwiJHttZWFsLm1lYWxzWzBdLmlkTWVhbH1cIiBjbGFzcz1cImNvbW1lbnRcIj48aSBjbGFzcz1cImZhcyBmYS1jb21tZW50XCI+PC9pPiAgQ29tbWVudDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiUmVzZXJ2YXRvblwiPlJlc2VydmF0b24gPGkgY2xhc3M9XCJmYSBmYS1wZW5jaWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgbWVhbEFycmF5LnB1c2gobWVhbC5tZWFscyk7XHJcbiAgICBhZGRSZXNlcnZhdGlvbkJ1dHRvbkV2ZW50KCk7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ01lYWxzJywgSlNPTi5zdHJpbmdpZnkobWVhbEFycmF5KSk7XHJcbiAgfSkpKTtcclxuXHJcbiAgYWRkQ3Jvc3NJbWFnZUV2ZW50KCk7XHJcbiAgYWRkRGF0ZUZvY3VzRXZlbnQoKTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgcG9wdWxhdGUoKTtcclxufSk7XHJcblxyXG5cclxuXHJcbmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblxyXG4gIGlmKGUudGFyZ2V0ICYmIGUudGFyZ2V0Lm1hdGNoZXMoJy5jb21tZW50Jykpe1xyXG4gICAgXHJcbiAgICBwb3B1cENvbW1lbnQoZS50YXJnZXQpO1xyXG4gICAgbG9hZENvbW1lbnRzU2VjdGlvbih1c2VyRGF0YUFycik7XHJcblxyXG4gIH1cclxuICBcclxuICBcclxufSlcclxuXHJcblxyXG5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHJcbiAgIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5tYXRjaGVzKCcuY2xvc2Vwb3B1cCcpICl7XHJcblxyXG4gICAgICBjb25zdCBoZWFkZXIgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XHJcbiAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdoZWxsbycpO1xyXG4gICAgICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xyXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5maWx0ZXIgPSAnYmx1cigwcHgpJztcclxuICAgICAgICBoZWFkZXIuc3R5bGUuZmlsdGVyID0gJ2JsdXIoMHB4KSc7ICBcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgZWxzZSBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQubWF0Y2hlcygnLmNvbW1lbnQtYnRuJykpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgXHJcbiAgfVxyXG5cclxuICBcclxufSlcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9