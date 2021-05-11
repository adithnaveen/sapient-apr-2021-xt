/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./controller/login.js":
/*!*****************************!*\
  !*** ./controller/login.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const {loginClient} = __webpack_require__(/*! ../scripts/client-login */ \"./scripts/client-login.js\")\n \nconst initApp =() => {\n    console.log(\"in the controller... \");\n    document.querySelector(\"#loginUser\").addEventListener(\"click\", loginUserController); \n}\n\nconst loginUserController = async (event) => {\n    event.preventDefault()\n    let obj = {}; \n    obj.email=document.querySelector(\"#email\").value; \n    obj.password =document.querySelector(\"#password\").value; \n    obj.pic=\"/pic.jpg\"\n\n    console.log(obj);\n    let result = await loginClient(obj); \n    \n    console.log(\"result \" , result)\n    return false; \n}\n\ninitApp()\n\n//# sourceURL=webpack://tdd-jest-tms/./controller/login.js?");

/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/***/ ((module, exports) => {

"use strict";
eval("\n\n// ref: https://github.com/tc39/proposal-global\nvar getGlobal = function () {\n\t// the only reliable means to get the global object is\n\t// `Function('return this')()`\n\t// However, this causes CSP violations in Chrome apps.\n\tif (typeof self !== 'undefined') { return self; }\n\tif (typeof window !== 'undefined') { return window; }\n\tif (typeof global !== 'undefined') { return global; }\n\tthrow new Error('unable to locate global object');\n}\n\nvar global = getGlobal();\n\nmodule.exports = exports = global.fetch;\n\n// Needed for TypeScript and Webpack.\nif (global.fetch) {\n\texports.default = global.fetch.bind(global);\n}\n\nexports.Headers = global.Headers;\nexports.Request = global.Request;\nexports.Response = global.Response;\n\n//# sourceURL=webpack://tdd-jest-tms/./node_modules/node-fetch/browser.js?");

/***/ }),

/***/ "./scripts/client-login.js":
/*!*********************************!*\
  !*** ./scripts/client-login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const fetch = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n\n// i can pass the value from test case \n// also from controller <- comes from HTML\n exports.loginClient =   async (obj) => {\n    try {\n    const result = \n        await fetch(\"https://trainingmanagementapp.herokuapp.com/api/users/login/\",{\n            method: 'POST',\n            body: JSON.stringify(obj),\n            headers: {\"Content-Type\": \"application/json\"}\n        })\n    console.log(\"obs in loginclient\", obj );\n    const data = await result.json()\n    return data;\n    }catch(err ) {\n        return err; \n    }\n    return null;\n}\n\n//# sourceURL=webpack://tdd-jest-tms/./scripts/client-login.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./controller/login.js");
/******/ 	
/******/ })()
;