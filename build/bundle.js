/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const root = "https://aleshaoleg.github.io/holy-grail-markup/";

/* harmony default export */ __webpack_exports__["a"] = (link => {
    return (
        `
            <div class="dumb-component">
			    <h2 class="title">Dumb component</h2>
			</div>
        `
    );
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = App;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__smart1__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__smart2__ = __webpack_require__(8);




function App() {
  return `<!DOCTYPE html>
    <html>
    <head>
        <title>Holy Grail Markup</title>
        <link rel="stylesheet" href="global-styles/global.css">
        <link rel="stylesheet" href="build/style.css">
    </head>
    <body>
      <div class=${__WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.wrapper}>
        <h1 class="global-styles">Main page</h1>
        
        ${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__smart1__["a" /* default */])()}
        <br />
        ${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__smart2__["a" /* default */])()}
      </div>
    </body>
    </html>`;
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);



__WEBPACK_IMPORTED_MODULE_1_fs___default.a.writeFileSync('./index.html', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__app__["a" /* default */])());


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrapper":"app-styles__wrapper--4caad"};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"smartComponent":"smart1-styles__smartComponent--39d29","title":"smart1-styles__title--78140"};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"smartComponent":"smart2-styles__smartComponent--01758"};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Smart1;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dumb__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);




const items = [
  { id: "oocss", name: "OOCSS" },
  { id: "smacss", name: "SMACSS" },
  { id: "atomic", name: "Atomic" },
  { id: "organic", name: "Organic" },
  { id: "bem-css", name: "BEM CSS" },
  { id: "bem-flexboxgrid", name: "BEM Flexbox Grid" },
  { id: "bem-platform/pages/index", name: "BEM Platform" },
  { id: "css-modules", name: "CSS-modules" },
  { id: "raw", name: "Raw" }
];



function Smart1() {
  return `<div class="${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.smartComponent}">
      <h2 class="${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.title}">Smart component 1</h2>
      
      ${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dumb__["a" /* default */])()}
      ${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dumb__["a" /* default */])()}
  </div>`;
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Smart1;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dumb__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);




const items = [
  { id: "oocss", name: "OOCSS" },
  { id: "smacss", name: "SMACSS" },
  { id: "atomic", name: "Atomic" },
  { id: "organic", name: "Organic" },
  { id: "bem-css", name: "BEM CSS" },
  { id: "bem-flexboxgrid", name: "BEM Flexbox Grid" },
  { id: "bem-platform/pages/index", name: "BEM Platform" },
  { id: "css-modules", name: "CSS-modules" },
  { id: "raw", name: "Raw" }
];



function Smart1() {
  return `<div class="${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.smartComponent}">
      <h2 class="${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.title}">Smart component 2</h2>
      
      ${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dumb__["a" /* default */])()}
      ${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dumb__["a" /* default */])()}
  </div>`;
}


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map