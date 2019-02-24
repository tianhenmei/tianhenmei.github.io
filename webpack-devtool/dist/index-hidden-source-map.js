(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./a.js":
/*!**************!*\
  !*** ./a.js ***!
  \**************/
/*! no static exports found */
/***/ (function(module, exports) {

console.log("this is a.js");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a.js */ "./a.js");
/* harmony import */ var _a_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_a_js__WEBPACK_IMPORTED_MODULE_0__);
// start

var a = 123,
    b = 234;
console.log(Math.abs(a)+Math.abs(b));
console.log(a**2);
// define function add
function add(i,j){
    return i+j;
}
console.log(add(a,b));
// end

/***/ })

},[["./index.js","runtime~index"]]]);