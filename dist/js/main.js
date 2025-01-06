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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cardsHero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cardsHero */ \"./modules/cardsHero.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n\r\n\r\n\r\n(0,_modules_cardsHero__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/cardsHero.js":
/*!******************************!*\
  !*** ./modules/cardsHero.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cardsHero = () => {\r\n  const cardsWrapper = document.querySelector(\".cards__wrapper\");\r\n  const headerWrapper = document.querySelector(\".header__wrapper\");\r\n\r\n  fetch(\"dbHeroes.json\")\r\n    .then((response) => response.json())\r\n    .then((data) => render(data));\r\n\r\n  const render = (cards) => {\r\n    cardsWrapper.innerHTML = \"\";\r\n    cards.forEach((card) => {\r\n      cardsWrapper.innerHTML += `\r\n      <div class=\"card\">\r\n          <div class=\"card__photo\">\r\n              <img src=${card.photo} alt=\"#\">\r\n          </div>\r\n          <div class=\"card__information\">\r\n              <p><span>Name: </span>${card.name}</p>\r\n              <p><span>Real name: </span>${card.realName}</p>\r\n              <p><span>Status: </span>${card.status}</p>\r\n              <p class=\"card__movies\"><span>Movies: </span>${\r\n                card.movies ? card.movies.join(\", \") : \"-\"\r\n              }</p>\r\n          </div>\r\n      </div>\r\n      `;\r\n    });\r\n  };\r\n\r\n  const filterCards = (cards, movies) => {\r\n    let newCards = [];\r\n    cards.forEach((card) => {\r\n      if (typeof card.movies === \"object\") {\r\n        card.movies.find((movie) => {\r\n          if (movie === movies) newCards.push(card);\r\n        });\r\n      }\r\n    });\r\n    render(newCards);\r\n  };\r\n\r\n  headerWrapper.addEventListener(\"click\", (e) => {\r\n    if (e.target.textContent === \"All\") {\r\n      fetch(\"dbHeroes.json\")\r\n        .then((response) => response.json())\r\n        .then((data) => render(data));\r\n    } else if (e.target.tagName === \"A\") {\r\n      fetch(\"dbHeroes.json\")\r\n        .then((response) => response.json())\r\n        .then((data) => filterCards(data, e.target.textContent));\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardsHero);\r\n\n\n//# sourceURL=webpack:///./modules/cardsHero.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const header = document.querySelector(\".header\");\r\n  const headerBtn = header.querySelector(\".header__btn\");\r\n\r\n  headerBtn.addEventListener(\"click\", () => {\r\n    if (headerBtn.classList.contains(\"header__btn--active\")) {\r\n      headerBtn.classList.remove(\"header__btn--active\");\r\n      header.style.transform = \"translateY(-100%)\";\r\n    } else {\r\n      headerBtn.classList.add(\"header__btn--active\");\r\n      header.style.transform = \"translateY(0%)\";\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;