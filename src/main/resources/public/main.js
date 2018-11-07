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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/images/go-back-to-main-page.png":
/*!*********************************************!*\
  !*** ./src/images/go-back-to-main-page.png ***!
  \*********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/go-back-to-main-page.png";

/***/ }),

/***/ "./src/images/logo-negative.png":
/*!**************************************!*\
  !*** ./src/images/logo-negative.png ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/logo-negative.png";

/***/ }),

/***/ "./src/images/logo-play.png":
/*!**********************************!*\
  !*** ./src/images/logo-play.png ***!
  \**********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/logo-play.png";

/***/ }),

/***/ "./src/index.ts":
/*!***********************************!*\
  !*** ./src/index.ts + 10 modules ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/scripts/addScrollEventListener.ts
function addScrollEventListener(fun) {
    let ticking = false;
    window.addEventListener("scroll", (ev) => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                fun();
                ticking = false;
            });
        }
        ticking = true;
    });
}

// CONCATENATED MODULE: ./src/scripts/getPageScrollPositionTop.ts
function getPageScrollPositionTop() {
    return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}

// CONCATENATED MODULE: ./src/scripts/menuPositionObserver.ts


function menuPositionObserver(referenceElementForFixedMenu, topElementFixedOverMenu) {
    const FIXED_MENU_CLASS_NAME = "menu-fixed";
    const body = document.body;
    const heightOfFixedElementThatHidesMenu = topElementFixedOverMenu === undefined ? 0 : topElementFixedOverMenu.getBoundingClientRect().height;
    addScrollEventListener(() => {
        const positionTopOfRefElement = parseInt(window.getComputedStyle(referenceElementForFixedMenu).paddingTop);
        const refPositionForFixedMenu = positionTopOfRefElement - heightOfFixedElementThatHidesMenu;
        if (getPageScrollPositionTop() >= refPositionForFixedMenu && !body.classList.contains(FIXED_MENU_CLASS_NAME)) {
            body.classList.add(FIXED_MENU_CLASS_NAME);
        }
        else if (getPageScrollPositionTop() <= refPositionForFixedMenu && body.classList.contains(FIXED_MENU_CLASS_NAME)) {
            body.classList.remove(FIXED_MENU_CLASS_NAME);
        }
    });
}

// CONCATENATED MODULE: ./src/scripts/HTML_SELECTORS.ts
var HTML_SELECTORS;
(function (HTML_SELECTORS) {
    HTML_SELECTORS["CODE_AREA"] = ".code-area";
    HTML_SELECTORS["CONTENT"] = "#d2v-content";
    HTML_SELECTORS["CURRENT_SECTION_NAME"] = "#current-section-name";
    HTML_SELECTORS["TOP_HEADER"] = "#d2v-header";
    HTML_SELECTORS["NAVIGATION_MENU"] = "#site-navigation";
})(HTML_SELECTORS || (HTML_SELECTORS = {}));

// CONCATENATED MODULE: ./src/scripts/navigationMenu/setCurrentSectionName.ts

function setCurrentSectionName() {
    document.querySelector(HTML_SELECTORS.CURRENT_SECTION_NAME).innerHTML = getCurrentSectionName();
}
function getCurrentSectionName() {
    const pageTitleElement = document.querySelector("h1");
    if (pageTitleElement !== null) {
        return pageTitleElement.innerHTML;
    }
    else {
        return "";
    }
}

// CONCATENATED MODULE: ./src/scripts/navigationMenu/setNavigationMenu.ts


function setNavigationMenu() {
    setLevelNavOne();
    setLevelNavTwo();
}
function setLevelNavOne() {
    const CURRENT_SECTION_CLASSNAME = "active";
    const LEVEL_ON_NAVIGATION_ELEMENTS = document.querySelectorAll(`${HTML_SELECTORS.NAVIGATION_MENU} > li > a`);
    const currentTitlePage = document.querySelector("h1");
    if (currentTitlePage !== null) {
        for (const level1MenuNavigationElement of LEVEL_ON_NAVIGATION_ELEMENTS) {
            if (level1MenuNavigationElement.innerHTML === currentTitlePage.innerHTML) {
                level1MenuNavigationElement.classList.add(CURRENT_SECTION_CLASSNAME);
            }
        }
    }
}
function setLevelNavTwo() {
    generateListOfTitleLevelTwo().then((value) => {
        addScrollEventListener(() => {
            updateLevelTwoInNavigationMenu(value);
        });
    });
}
function updateLevelTwoInNavigationMenu(listOfTitleLevelTwo) {
    let lastTitleIsNotFound = true;
    for (const titleLevelTwo of listOfTitleLevelTwo) {
        if (titleLevelTwo.isActive && lastTitleIsNotFound) {
            lastTitleIsNotFound = false;
            titleLevelTwo.classname = "active";
        }
        else {
            titleLevelTwo.classname = "unactive";
        }
    }
}
function generateListOfTitleLevelTwo() {
    return new Promise((resolve, reject) => {
        const listToReturn = [];
        const TITLE_TWO_ELEMENTS = document.querySelectorAll(`${HTML_SELECTORS.CONTENT} h2`);
        const NAVIGATION_MENU_ELEMENT = document.querySelector(`${HTML_SELECTORS.NAVIGATION_MENU}`);
        for (const navigationTwoElement of TITLE_TWO_ELEMENTS) {
            listToReturn.push(new setNavigationMenu_TitleLevelTwo(navigationTwoElement, NAVIGATION_MENU_ELEMENT));
        }
        resolve(listToReturn.reverse());
        reject(new Error("can't get list of level two in navigation menu"));
    });
}
class setNavigationMenu_TitleLevelTwo {
    constructor(element, navigationMenuElement) {
        this._element = element;
        this._elementInMenu = this.getElementInMenu(navigationMenuElement);
    }
    get isActive() {
        return this._element.getBoundingClientRect().top <= window.innerHeight / 2;
    }
    set classname(classname) {
        if (classname === "active") {
            if (!this._elementInMenuContainsActiveClass) {
                this._elementInMenu.classList.add("active");
            }
        }
        else {
            if (this._elementInMenuContainsActiveClass) {
                this._elementInMenu.classList.remove("active");
            }
        }
    }
    getElementInMenu(navigationMenuElement) {
        const listOfLevelTwoInMenu = document.querySelectorAll(`${HTML_SELECTORS.NAVIGATION_MENU} > li > ul > li > a`);
        for (const levelTwoElement of listOfLevelTwoInMenu) {
            if (levelTwoElement.getAttribute("href") === "#" + this._element.getAttribute("id")) {
                return levelTwoElement;
            }
        }
    }
    get _elementInMenuContainsActiveClass() {
        if (this._elementInMenu !== undefined) {
            return this._elementInMenu.classList.contains("active");
        }
        else {
            return false;
        }
    }
}

// CONCATENATED MODULE: ./src/scripts/editor/Editor.ts
class Editor {
    constructor(codeArea, kotlinEditor) {
        this.codeArea = codeArea;
        this.kotlinEditor = kotlinEditor;
        this._hasBeenExecuted = false;
    }
    get hasNotBeenExecuted() { return !this._hasBeenExecuted; }
    get isOnScreen() {
        return this.codeArea.getBoundingClientRect().bottom >= 0 && this.codeArea.getBoundingClientRect().bottom <= window.innerHeight;
    }
    execute() {
        return new Promise((resolve, reject) => {
            this._hasBeenExecuted = true;
            this.kotlinEditor.execute();
            resolve();
            reject(new Error("can't execute kotlin playground editor"));
        });
    }
}

// CONCATENATED MODULE: ./src/scripts/editor/D2VKotlinEditors.ts



class D2VKotlinEditors_D2VKotlinEditors {
    constructor(kotlinEditors) {
        this.editors = [];
        this.setEditors(kotlinEditors);
        this.setListenerForEditorsAutoExecution();
        this.runVisibleEditors();
    }
    setEditors(kotlinEditors) {
        for (const i in kotlinEditors) {
            const editor = kotlinEditors[i];
            const codeArea = editor.nodes[0].querySelector(HTML_SELECTORS.CODE_AREA);
            if (codeArea !== null) {
                this.editors.push(new Editor(codeArea, editor));
            }
            else {
                console.error(`codeArea of ${i + 1} kotlin editor`);
            }
        }
    }
    setListenerForEditorsAutoExecution() {
        addScrollEventListener(() => {
            this.runVisibleEditors();
        });
    }
    runVisibleEditors() {
        for (const editor of this.editors) {
            if (editor.isOnScreen && editor.hasNotBeenExecuted) {
                editor.execute();
            }
        }
    }
}

// CONCATENATED MODULE: ./src/scripts/editor/setEditors.ts

const listOfKotlinPlaygroundEditors = [];
const eventFunctions = {
    getInstance: (kotlinPlaygroundEditor) => {
        listOfKotlinPlaygroundEditors.push(kotlinPlaygroundEditor);
    }
};
function setEditors() {
    KotlinPlayground('.kotlin-code', eventFunctions).then(() => {
        new D2VKotlinEditors_D2VKotlinEditors(listOfKotlinPlaygroundEditors);
    });
}

// CONCATENATED MODULE: ./src/scripts/main.ts





setEditors();
menuPositionObserver(document.querySelector(HTML_SELECTORS.CONTENT), document.querySelector(HTML_SELECTORS.TOP_HEADER));
setCurrentSectionName();
setNavigationMenu();

// EXTERNAL MODULE: ./src/styles/main.scss
var main = __webpack_require__("./src/styles/main.scss");

// EXTERNAL MODULE: ./src/images/logo-play.png
var logo_play = __webpack_require__("./src/images/logo-play.png");

// EXTERNAL MODULE: ./src/images/logo-negative.png
var logo_negative = __webpack_require__("./src/images/logo-negative.png");

// EXTERNAL MODULE: ./src/images/go-back-to-main-page.png
var go_back_to_main_page = __webpack_require__("./src/images/go-back-to-main-page.png");

// CONCATENATED MODULE: ./src/index.ts







/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9nby1iYWNrLXRvLW1haW4tcGFnZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9sb2dvLW5lZ2F0aXZlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2xvZ28tcGxheS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYWRkU2Nyb2xsRXZlbnRMaXN0ZW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nZXRQYWdlU2Nyb2xsUG9zaXRpb25Ub3AudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWVudVBvc2l0aW9uT2JzZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvSFRNTF9TRUxFQ1RPUlMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbmF2aWdhdGlvbk1lbnUvc2V0Q3VycmVudFNlY3Rpb25OYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL25hdmlnYXRpb25NZW51L3NldE5hdmlnYXRpb25NZW51LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VkaXRvci9FZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZWRpdG9yL0QyVktvdGxpbkVkaXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZWRpdG9yL3NldEVkaXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/OWJjZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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QUFpQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7QUNoQkk7QUFDSTtBQUVJO0FBQ0k7QUFDTzs7Ozs7Ozs7Ozs7OztBQ0wxQyx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvZ28tYmFjay10by1tYWluLXBhZ2UucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2xvZ28tbmVnYXRpdmUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2xvZ28tcGxheS5wbmdcIjsiLCJleHBvcnQgZnVuY3Rpb24gYWRkU2Nyb2xsRXZlbnRMaXN0ZW5lcihmdW46ICgpID0+IHZvaWQpIHtcbiAgICBsZXQgdGlja2luZyA9IGZhbHNlXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKGV2KSA9PiB7XG4gICAgICAgIGlmKCF0aWNraW5nKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICBmdW4oKVxuICAgICAgICAgICAgICAgIHRpY2tpbmcgPSBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB0aWNraW5nID0gdHJ1ZVxuICAgIH0pXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0UGFnZVNjcm9sbFBvc2l0aW9uVG9wKCk6IG51bWJlciB7XG4gICAgcmV0dXJuICh3aW5kb3cucGFnZVlPZmZzZXQgIT09IHVuZGVmaW5lZCkgPyB3aW5kb3cucGFnZVlPZmZzZXQgOiAoKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUgfHwgZG9jdW1lbnQuYm9keSkgYXMgSFRNTEVsZW1lbnQpLnNjcm9sbFRvcFxufSIsImltcG9ydCB7YWRkU2Nyb2xsRXZlbnRMaXN0ZW5lcn0gZnJvbSBcIi4vYWRkU2Nyb2xsRXZlbnRMaXN0ZW5lclwiXG5pbXBvcnQge2dldFBhZ2VTY3JvbGxQb3NpdGlvblRvcH0gZnJvbSBcIi4vZ2V0UGFnZVNjcm9sbFBvc2l0aW9uVG9wXCJcbmltcG9ydCB7SFRNTF9TRUxFQ1RPUlN9IGZyb20gXCIuL0hUTUxfU0VMRUNUT1JTXCJcblxuXG5leHBvcnQgZnVuY3Rpb24gbWVudVBvc2l0aW9uT2JzZXJ2ZXIocmVmZXJlbmNlRWxlbWVudEZvckZpeGVkTWVudTogSFRNTEVsZW1lbnQsIHRvcEVsZW1lbnRGaXhlZE92ZXJNZW51PzogSFRNTEVsZW1lbnQpIHtcblxuICAgIGNvbnN0IEZJWEVEX01FTlVfQ0xBU1NfTkFNRSA9IFwibWVudS1maXhlZFwiXG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keVxuXG4gICAgY29uc3QgaGVpZ2h0T2ZGaXhlZEVsZW1lbnRUaGF0SGlkZXNNZW51ID0gdG9wRWxlbWVudEZpeGVkT3Zlck1lbnUgPT09IHVuZGVmaW5lZCA/ICAwIDogdG9wRWxlbWVudEZpeGVkT3Zlck1lbnUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG5cbiAgICBhZGRTY3JvbGxFdmVudExpc3RlbmVyKCgpID0+IHtcblxuICAgICAgICBjb25zdCBwb3NpdGlvblRvcE9mUmVmRWxlbWVudCA9IHBhcnNlSW50KCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShyZWZlcmVuY2VFbGVtZW50Rm9yRml4ZWRNZW51KS5wYWRkaW5nVG9wIGFzIHN0cmluZyApXG5cbiAgICAgICAgY29uc3QgcmVmUG9zaXRpb25Gb3JGaXhlZE1lbnUgPSBwb3NpdGlvblRvcE9mUmVmRWxlbWVudCAtIGhlaWdodE9mRml4ZWRFbGVtZW50VGhhdEhpZGVzTWVudVxuXG4gICAgICAgIGlmKGdldFBhZ2VTY3JvbGxQb3NpdGlvblRvcCgpID49IHJlZlBvc2l0aW9uRm9yRml4ZWRNZW51ICYmICFib2R5LmNsYXNzTGlzdC5jb250YWlucyhGSVhFRF9NRU5VX0NMQVNTX05BTUUpKXtcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZChGSVhFRF9NRU5VX0NMQVNTX05BTUUpXG4gICAgICAgIH0gZWxzZSBpZiAoZ2V0UGFnZVNjcm9sbFBvc2l0aW9uVG9wKCkgPD0gcmVmUG9zaXRpb25Gb3JGaXhlZE1lbnUgJiYgYm9keS5jbGFzc0xpc3QuY29udGFpbnMoRklYRURfTUVOVV9DTEFTU19OQU1FKSkge1xuICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKEZJWEVEX01FTlVfQ0xBU1NfTkFNRSlcbiAgICAgICAgfVxuXG4gICAgfSlcbn1cbiIsImV4cG9ydCBlbnVtIEhUTUxfU0VMRUNUT1JTIHtcbiAgICBDT0RFX0FSRUEgICAgICAgICAgICAgICA9IFwiLmNvZGUtYXJlYVwiLFxuICAgIENPTlRFTlQgICAgICAgICAgICAgICAgID0gXCIjZDJ2LWNvbnRlbnRcIixcbiAgICBDVVJSRU5UX1NFQ1RJT05fTkFNRSAgICA9IFwiI2N1cnJlbnQtc2VjdGlvbi1uYW1lXCIsXG4gICAgVE9QX0hFQURFUiAgICAgICAgICAgICAgPSBcIiNkMnYtaGVhZGVyXCIsXG4gICAgTkFWSUdBVElPTl9NRU5VICAgICAgICAgPSBcIiNzaXRlLW5hdmlnYXRpb25cIlxufSIsImltcG9ydCB7SFRNTF9TRUxFQ1RPUlN9IGZyb20gXCIuLi9IVE1MX1NFTEVDVE9SU1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50U2VjdGlvbk5hbWUoKSB7XG4gICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoSFRNTF9TRUxFQ1RPUlMuQ1VSUkVOVF9TRUNUSU9OX05BTUUpIGFzIEhUTUxFbGVtZW50KS5pbm5lckhUTUwgPSBnZXRDdXJyZW50U2VjdGlvbk5hbWUoKVxufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50U2VjdGlvbk5hbWUoKTogc3RyaW5nIHtcbiAgICBjb25zdCBwYWdlVGl0bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpXG4gICAgaWYocGFnZVRpdGxlRWxlbWVudCAhPT0gbnVsbCApIHtcbiAgICAgICAgcmV0dXJuIHBhZ2VUaXRsZUVsZW1lbnQuaW5uZXJIVE1MXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiXCJcbiAgICB9XG59XG4iLCJpbXBvcnQge0hUTUxfU0VMRUNUT1JTfSBmcm9tIFwiLi4vSFRNTF9TRUxFQ1RPUlNcIlxuaW1wb3J0IHthZGRTY3JvbGxFdmVudExpc3RlbmVyfSBmcm9tIFwiLi4vYWRkU2Nyb2xsRXZlbnRMaXN0ZW5lclwiXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXROYXZpZ2F0aW9uTWVudSgpIHtcbiAgICBzZXRMZXZlbE5hdk9uZSgpXG4gICAgc2V0TGV2ZWxOYXZUd28oKVxufVxuXG5mdW5jdGlvbiBzZXRMZXZlbE5hdk9uZSgpIHtcbiAgICBjb25zdCBDVVJSRU5UX1NFQ1RJT05fQ0xBU1NOQU1FID0gXCJhY3RpdmVcIlxuXG4gICAgY29uc3QgTEVWRUxfT05fTkFWSUdBVElPTl9FTEVNRU5UUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7SFRNTF9TRUxFQ1RPUlMuTkFWSUdBVElPTl9NRU5VfSA+IGxpID4gYWApXG5cbiAgICBjb25zdCBjdXJyZW50VGl0bGVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpXG5cbiAgICBpZihjdXJyZW50VGl0bGVQYWdlICE9PSBudWxsKXtcbiAgICAgICAgZm9yKGNvbnN0IGxldmVsMU1lbnVOYXZpZ2F0aW9uRWxlbWVudCBvZiBMRVZFTF9PTl9OQVZJR0FUSU9OX0VMRU1FTlRTKSB7XG4gICAgICAgICAgICBpZihsZXZlbDFNZW51TmF2aWdhdGlvbkVsZW1lbnQuaW5uZXJIVE1MID09PSBjdXJyZW50VGl0bGVQYWdlLmlubmVySFRNTCkge1xuICAgICAgICAgICAgICAgIGxldmVsMU1lbnVOYXZpZ2F0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKENVUlJFTlRfU0VDVElPTl9DTEFTU05BTUUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldExldmVsTmF2VHdvKCkge1xuICAgIGdlbmVyYXRlTGlzdE9mVGl0bGVMZXZlbFR3bygpLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICAgIGFkZFNjcm9sbEV2ZW50TGlzdGVuZXIoKCkgPT4ge1xuICAgICAgICAgICAgdXBkYXRlTGV2ZWxUd29Jbk5hdmlnYXRpb25NZW51KHZhbHVlKVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxldmVsVHdvSW5OYXZpZ2F0aW9uTWVudShsaXN0T2ZUaXRsZUxldmVsVHdvOiBUaXRsZUxldmVsVHdvW10pIHtcbiAgICBsZXQgbGFzdFRpdGxlSXNOb3RGb3VuZCA9IHRydWVcblxuICAgIGZvcihjb25zdCB0aXRsZUxldmVsVHdvIG9mIGxpc3RPZlRpdGxlTGV2ZWxUd28pIHtcbiAgICAgICAgaWYodGl0bGVMZXZlbFR3by5pc0FjdGl2ZSAmJiBsYXN0VGl0bGVJc05vdEZvdW5kKSB7XG4gICAgICAgICAgICBsYXN0VGl0bGVJc05vdEZvdW5kID0gZmFsc2VcbiAgICAgICAgICAgIHRpdGxlTGV2ZWxUd28uY2xhc3NuYW1lID0gXCJhY3RpdmVcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGl0bGVMZXZlbFR3by5jbGFzc25hbWUgPSBcInVuYWN0aXZlXCJcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVMaXN0T2ZUaXRsZUxldmVsVHdvKCk6IFByb21pc2U8VGl0bGVMZXZlbFR3b1tdPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdFRvUmV0dXJuID0gW11cblxuICAgICAgICBjb25zdCBUSVRMRV9UV09fRUxFTUVOVFMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke0hUTUxfU0VMRUNUT1JTLkNPTlRFTlR9IGgyYCkgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD5cbiAgICAgICAgY29uc3QgTkFWSUdBVElPTl9NRU5VX0VMRU1FTlQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke0hUTUxfU0VMRUNUT1JTLk5BVklHQVRJT05fTUVOVX1gKSBhcyBIVE1MRWxlbWVudFxuXG4gICAgICAgIGZvcihjb25zdCBuYXZpZ2F0aW9uVHdvRWxlbWVudCBvZiBUSVRMRV9UV09fRUxFTUVOVFMpIHtcbiAgICAgICAgICAgIGxpc3RUb1JldHVybi5wdXNoKG5ldyBUaXRsZUxldmVsVHdvKG5hdmlnYXRpb25Ud29FbGVtZW50LCBOQVZJR0FUSU9OX01FTlVfRUxFTUVOVCkpXG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKGxpc3RUb1JldHVybi5yZXZlcnNlKCkpXG5cbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcImNhbid0IGdldCBsaXN0IG9mIGxldmVsIHR3byBpbiBuYXZpZ2F0aW9uIG1lbnVcIikpXG4gICAgfSlcbn1cblxuY2xhc3MgVGl0bGVMZXZlbFR3byB7XG4gICAgcHJpdmF0ZSBfZWxlbWVudDogSFRNTEVsZW1lbnRcblxuICAgIHByaXZhdGUgX2VsZW1lbnRJbk1lbnU6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkXG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCwgbmF2aWdhdGlvbk1lbnVFbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICAgICAgICB0aGlzLl9lbGVtZW50SW5NZW51ID0gdGhpcy5nZXRFbGVtZW50SW5NZW51KG5hdmlnYXRpb25NZW51RWxlbWVudClcbiAgICB9XG5cbiAgICBnZXQgaXNBY3RpdmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8PSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyXG4gICAgfVxuXG4gICAgc2V0IGNsYXNzbmFtZShjbGFzc25hbWU6IFwiYWN0aXZlXCJ8XCJ1bmFjdGl2ZVwiKSB7XG4gICAgICAgIGlmKGNsYXNzbmFtZSA9PT0gXCJhY3RpdmVcIikge1xuICAgICAgICAgICAgaWYoISB0aGlzLl9lbGVtZW50SW5NZW51Q29udGFpbnNBY3RpdmVDbGFzcykge1xuICAgICAgICAgICAgICAgICh0aGlzLl9lbGVtZW50SW5NZW51IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZih0aGlzLl9lbGVtZW50SW5NZW51Q29udGFpbnNBY3RpdmVDbGFzcykge1xuICAgICAgICAgICAgICAgICh0aGlzLl9lbGVtZW50SW5NZW51IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEVsZW1lbnRJbk1lbnUobmF2aWdhdGlvbk1lbnVFbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICBjb25zdCBsaXN0T2ZMZXZlbFR3b0luTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7SFRNTF9TRUxFQ1RPUlMuTkFWSUdBVElPTl9NRU5VfSA+IGxpID4gdWwgPiBsaSA+IGFgKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PlxuXG4gICAgICAgIGZvcihjb25zdCBsZXZlbFR3b0VsZW1lbnQgb2YgbGlzdE9mTGV2ZWxUd29Jbk1lbnUpIHtcbiAgICAgICAgICAgIGlmKGxldmVsVHdvRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpID09PSBcIiNcIiArIHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKFwiaWRcIikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGV2ZWxUd29FbGVtZW50XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBfZWxlbWVudEluTWVudUNvbnRhaW5zQWN0aXZlQ2xhc3MoKSB7XG4gICAgICAgIGlmKHRoaXMuX2VsZW1lbnRJbk1lbnUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRJbk1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7SUtvdGxpblBsYXlncm91bmRFZGl0b3J9IGZyb20gXCIuL0lLb3RsaW5QbGF5Z3JvdW5kRWRpdG9yXCJcblxuZXhwb3J0IGNsYXNzIEVkaXRvciB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBjb2RlQXJlYTogSFRNTERpdkVsZW1lbnQsXG4gICAgICAgIHB1YmxpYyBrb3RsaW5FZGl0b3I6IElLb3RsaW5QbGF5Z3JvdW5kRWRpdG9yLFxuICAgICkge31cblxuICAgIHByaXZhdGUgX2hhc0JlZW5FeGVjdXRlZCA9IGZhbHNlXG4gICAgZ2V0IGhhc05vdEJlZW5FeGVjdXRlZCgpIHsgcmV0dXJuICF0aGlzLl9oYXNCZWVuRXhlY3V0ZWR9XG5cbiAgICBnZXQgaXNPblNjcmVlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29kZUFyZWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tID49IDAgJiYgdGhpcy5jb2RlQXJlYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgfVxuXG4gICAgcHVibGljIGV4ZWN1dGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2hhc0JlZW5FeGVjdXRlZCA9IHRydWVcbiAgICAgICAgICAgIHRoaXMua290bGluRWRpdG9yLmV4ZWN1dGUoKVxuICAgICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiY2FuJ3QgZXhlY3V0ZSBrb3RsaW4gcGxheWdyb3VuZCBlZGl0b3JcIikpXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQge0lLb3RsaW5QbGF5Z3JvdW5kRWRpdG9yfSBmcm9tIFwiLi9JS290bGluUGxheWdyb3VuZEVkaXRvclwiXG5pbXBvcnQge0VkaXRvcn0gZnJvbSBcIi4vRWRpdG9yXCJcbmltcG9ydCB7YWRkU2Nyb2xsRXZlbnRMaXN0ZW5lcn0gZnJvbSBcIi4uL2FkZFNjcm9sbEV2ZW50TGlzdGVuZXJcIlxuaW1wb3J0IHtIVE1MX1NFTEVDVE9SU30gZnJvbSBcIi4uL0hUTUxfU0VMRUNUT1JTXCJcblxuZXhwb3J0IGNsYXNzIEQyVktvdGxpbkVkaXRvcnMge1xuICAgIGNvbnN0cnVjdG9yKGtvdGxpbkVkaXRvcnM6IElLb3RsaW5QbGF5Z3JvdW5kRWRpdG9yW10pIHtcblxuICAgICAgICB0aGlzLnNldEVkaXRvcnMoa290bGluRWRpdG9ycylcblxuICAgICAgICB0aGlzLnNldExpc3RlbmVyRm9yRWRpdG9yc0F1dG9FeGVjdXRpb24oKVxuXG4gICAgICAgIHRoaXMucnVuVmlzaWJsZUVkaXRvcnMoKVxuICAgIH1cblxuICAgIHByaXZhdGUgZWRpdG9yczogRWRpdG9yW10gPSBbXVxuXG4gICAgcHJpdmF0ZSBzZXRFZGl0b3JzKGtvdGxpbkVkaXRvcnM6IElLb3RsaW5QbGF5Z3JvdW5kRWRpdG9yW10pIHtcbiAgICAgICAgZm9yKGNvbnN0IGkgaW4ga290bGluRWRpdG9ycykge1xuICAgICAgICAgICAgY29uc3QgZWRpdG9yID0ga290bGluRWRpdG9yc1tpXVxuICAgICAgICAgICAgY29uc3QgY29kZUFyZWEgPSBlZGl0b3Iubm9kZXNbMF0ucXVlcnlTZWxlY3RvcihIVE1MX1NFTEVDVE9SUy5DT0RFX0FSRUEpXG5cbiAgICAgICAgICAgIGlmKGNvZGVBcmVhICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0b3JzLnB1c2gobmV3IEVkaXRvcihjb2RlQXJlYSBhcyBIVE1MRGl2RWxlbWVudCwgZWRpdG9yKSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgY29kZUFyZWEgb2YgJHtpICsgMX0ga290bGluIGVkaXRvcmApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldExpc3RlbmVyRm9yRWRpdG9yc0F1dG9FeGVjdXRpb24oKSB7XG4gICAgICAgIGFkZFNjcm9sbEV2ZW50TGlzdGVuZXIoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ydW5WaXNpYmxlRWRpdG9ycygpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBydW5WaXNpYmxlRWRpdG9ycygpIHtcbiAgICAgICAgZm9yKGNvbnN0IGVkaXRvciBvZiB0aGlzLmVkaXRvcnMpIHtcbiAgICAgICAgICAgIGlmKGVkaXRvci5pc09uU2NyZWVuICYmIGVkaXRvci5oYXNOb3RCZWVuRXhlY3V0ZWQpIHtcbiAgICAgICAgICAgICAgICBlZGl0b3IuZXhlY3V0ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQge0lLb3RsaW5QbGF5Z3JvdW5kRWRpdG9yfSBmcm9tIFwiLi9JS290bGluUGxheWdyb3VuZEVkaXRvclwiXG5pbXBvcnQge0QyVktvdGxpbkVkaXRvcnN9IGZyb20gXCIuL0QyVktvdGxpbkVkaXRvcnNcIlxuXG5kZWNsYXJlIGZ1bmN0aW9uIEtvdGxpblBsYXlncm91bmQoc2VsZWN0b3I6IHN0cmluZywgZXZlbnRGdW5jdGlvbnM/OiBJRXZlbnRGdW5jdGlvbnMpOiBQcm9taXNlPElLb3RsaW5QbGF5Z3JvdW5kRWRpdG9yW10+XG5cbmludGVyZmFjZSBJRXZlbnRGdW5jdGlvbnMge1xuICAgIGNhbGxiYWNrPzogKHRhcmdldE5vZGU6IEhUTUxFbGVtZW50LCBtb3VudE5vZGU6IEhUTUxFbGVtZW50KSA9PiB2b2lkLFxuICAgIGdldEluc3RhbmNlPzogKGluc3RhbmNlOiBJS290bGluUGxheWdyb3VuZEVkaXRvcikgPT4gdm9pZFxuICAgIG9uQ2hhbmdlPzogKGNvZGU6IHN0cmluZykgPT4gdm9pZCxcbiAgICBvblRlc3RQYXNzZWQ/OiAoKSA9PiB2b2lkLFxufVxuXG5jb25zdCBsaXN0T2ZLb3RsaW5QbGF5Z3JvdW5kRWRpdG9yczogSUtvdGxpblBsYXlncm91bmRFZGl0b3JbXSA9IFtdXG5cbmNvbnN0IGV2ZW50RnVuY3Rpb25zID0ge1xuICAgIGdldEluc3RhbmNlOiAoa290bGluUGxheWdyb3VuZEVkaXRvcjogSUtvdGxpblBsYXlncm91bmRFZGl0b3IpID0+IHtcbiAgICAgICAgbGlzdE9mS290bGluUGxheWdyb3VuZEVkaXRvcnMucHVzaChrb3RsaW5QbGF5Z3JvdW5kRWRpdG9yKVxuICAgIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRFZGl0b3JzKCkge1xuICAgIEtvdGxpblBsYXlncm91bmQoJy5rb3RsaW4tY29kZScsIGV2ZW50RnVuY3Rpb25zKS50aGVuKCgpID0+IHtcbiAgICAgICAgbmV3IEQyVktvdGxpbkVkaXRvcnMobGlzdE9mS290bGluUGxheWdyb3VuZEVkaXRvcnMpXG4gICAgfSlcbn1cbiIsImltcG9ydCB7bWVudVBvc2l0aW9uT2JzZXJ2ZXJ9IGZyb20gXCIuL21lbnVQb3NpdGlvbk9ic2VydmVyXCJcbmltcG9ydCB7SFRNTF9TRUxFQ1RPUlN9IGZyb20gXCIuL0hUTUxfU0VMRUNUT1JTXCJcbmltcG9ydCB7c2V0Q3VycmVudFNlY3Rpb25OYW1lfSBmcm9tIFwiLi9uYXZpZ2F0aW9uTWVudS9zZXRDdXJyZW50U2VjdGlvbk5hbWVcIlxuaW1wb3J0IHtzZXROYXZpZ2F0aW9uTWVudX0gZnJvbSBcIi4vbmF2aWdhdGlvbk1lbnUvc2V0TmF2aWdhdGlvbk1lbnVcIlxuaW1wb3J0IHtzZXRFZGl0b3JzfSBmcm9tIFwiLi9lZGl0b3Ivc2V0RWRpdG9yc1wiXG5cbnNldEVkaXRvcnMoKVxuXG5tZW51UG9zaXRpb25PYnNlcnZlcihcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKEhUTUxfU0VMRUNUT1JTLkNPTlRFTlQpIGFzIEhUTUxFbGVtZW50LFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoSFRNTF9TRUxFQ1RPUlMuVE9QX0hFQURFUikgYXMgSFRNTEVsZW1lbnQsXG4pXG5cblxuc2V0Q3VycmVudFNlY3Rpb25OYW1lKClcblxuc2V0TmF2aWdhdGlvbk1lbnUoKSIsImltcG9ydCBcIi4vc2NyaXB0cy9tYWluXCJcbmltcG9ydCBcIi4vc3R5bGVzL21haW4uc2Nzc1wiXG5cbmltcG9ydCBcIi4vaW1hZ2VzL2xvZ28tcGxheS5wbmdcIlxuaW1wb3J0IFwiLi9pbWFnZXMvbG9nby1uZWdhdGl2ZS5wbmdcIlxuaW1wb3J0IFwiLi9pbWFnZXMvZ28tYmFjay10by1tYWluLXBhZ2UucG5nXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9