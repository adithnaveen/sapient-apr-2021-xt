/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/main.js":
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _maths_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maths.js */ \"./scripts/maths.js\");\n/* harmony import */ var _sample_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sample.js */ \"./scripts/sample.js\");\n \n\n\nconsole.log((0,_maths_js__WEBPACK_IMPORTED_MODULE_0__.add)(10, 20));\nconsole.log((0,_maths_js__WEBPACK_IMPORTED_MODULE_0__.sub)(10, 20));\n\n(0,_maths_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_sample_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n\nwindow['add']= _maths_js__WEBPACK_IMPORTED_MODULE_0__.add;\nwindow['sub'] = _maths_js__WEBPACK_IMPORTED_MODULE_0__.sub;\n\n//# sourceURL=webpack://webpack-works/./scripts/main.js?");

/***/ }),

/***/ "./scripts/maths.js":
/*!**************************!*\
  !*** ./scripts/maths.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"sub\": () => (/* binding */ sub),\n/* harmony export */   \"default\": () => (/* binding */ fnSayHi)\n/* harmony export */ });\n// these functions as of now is not eligible to get the \n// scope out of this file \nfunction add (num1, num2) {\n    return num1 + num2; \n}\n\nfunction sub(num1, num2) {\n    return num1 - num2; \n}\n\nfunction fnSayHi() {\n    console.log('====================================');\n    console.log(\"hi from Maths.js \");\n    console.log('====================================');\n}\n\n//# sourceURL=webpack://webpack-works/./scripts/maths.js?");

/***/ }),

/***/ "./scripts/sample.js":
/*!***************************!*\
  !*** ./scripts/sample.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sayHi)\n/* harmony export */ });\nfunction sayHi() {\n    console.log('====================================');\n    console.log(\"Saying hi from sample.js\");\n    console.log('====================================');\n}\n\n//# sourceURL=webpack://webpack-works/./scripts/sample.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/main.js");
/******/ 	
/******/ })()
;