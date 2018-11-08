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
/*!**********************************!*\
  !*** ./src/index.ts + 8 modules ***!
  \**********************************/
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

// CONCATENATED MODULE: ./src/scripts/editor/setEditors.ts
const listOfKotlinPlaygroundEditors = [];
const eventFunctions = {
    getInstance: (kotlinPlaygroundEditor) => {
        listOfKotlinPlaygroundEditors.push(kotlinPlaygroundEditor);
    },
    onChange: (code) => {
        console.log("Editor code was changed:\n" + code);
    },
};
function setEditors() {
    const codeElementsForKotlinPlaygroundEditorInit = document.querySelectorAll('.kotlin-code');
    for (const codeElement of codeElementsForKotlinPlaygroundEditorInit) {
        if (codeElement instanceof HTMLElement) {
            const test = KotlinPlayground(codeElement, eventFunctions).then((e) => {
                console.log(e);
            });
        }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9nby1iYWNrLXRvLW1haW4tcGFnZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9sb2dvLW5lZ2F0aXZlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2xvZ28tcGxheS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYWRkU2Nyb2xsRXZlbnRMaXN0ZW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nZXRQYWdlU2Nyb2xsUG9zaXRpb25Ub3AudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWVudVBvc2l0aW9uT2JzZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvSFRNTF9TRUxFQ1RPUlMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbmF2aWdhdGlvbk1lbnUvc2V0Q3VycmVudFNlY3Rpb25OYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL25hdmlnYXRpb25NZW51L3NldE5hdmlnYXRpb25NZW51LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VkaXRvci9zZXRFZGl0b3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFB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QUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FDSixDQUFDO0FBRUssU0FBUyxVQUFVO0lBQ3RCLE1BQU0seUNBQXlDLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztJQUUzRixLQUFJLE1BQU0sV0FBVyxJQUFJLHlDQUF5QyxFQUFFO1FBQ2hFLElBQUcsV0FBVyxZQUFZLFdBQVcsRUFBRTtZQUNuQyxNQUFNLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQztTQUNMO0tBQ0o7QUFDTCxDQUFDOzs7QUNqQzBEO0FBQ1o7QUFDNkI7QUFDUjtBQUN0QjtBQUU5QyxVQUFVLEVBQUU7QUFFWixvQkFBb0IsQ0FDaEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFnQixFQUM3RCxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQWdCLENBQ25FO0FBR0QscUJBQXFCLEVBQUU7QUFFdkIsaUJBQWlCLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztBQ2hCSTtBQUNJO0FBRUk7QUFDSTtBQUNPOzs7Ozs7Ozs7Ozs7O0FDTDFDLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9nby1iYWNrLXRvLW1haW4tcGFnZS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbG9nby1uZWdhdGl2ZS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbG9nby1wbGF5LnBuZ1wiOyIsImV4cG9ydCBmdW5jdGlvbiBhZGRTY3JvbGxFdmVudExpc3RlbmVyKGZ1bjogKCkgPT4gdm9pZCkge1xuICAgIGxldCB0aWNraW5nID0gZmFsc2VcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoZXYpID0+IHtcbiAgICAgICAgaWYoIXRpY2tpbmcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZ1bigpXG4gICAgICAgICAgICAgICAgdGlja2luZyA9IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHRpY2tpbmcgPSB0cnVlXG4gICAgfSlcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRQYWdlU2Nyb2xsUG9zaXRpb25Ub3AoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKHdpbmRvdy5wYWdlWU9mZnNldCAhPT0gdW5kZWZpbmVkKSA/IHdpbmRvdy5wYWdlWU9mZnNldCA6ICgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSB8fCBkb2N1bWVudC5ib2R5KSBhcyBIVE1MRWxlbWVudCkuc2Nyb2xsVG9wXG59IiwiaW1wb3J0IHthZGRTY3JvbGxFdmVudExpc3RlbmVyfSBmcm9tIFwiLi9hZGRTY3JvbGxFdmVudExpc3RlbmVyXCJcbmltcG9ydCB7Z2V0UGFnZVNjcm9sbFBvc2l0aW9uVG9wfSBmcm9tIFwiLi9nZXRQYWdlU2Nyb2xsUG9zaXRpb25Ub3BcIlxuaW1wb3J0IHtIVE1MX1NFTEVDVE9SU30gZnJvbSBcIi4vSFRNTF9TRUxFQ1RPUlNcIlxuXG5cbmV4cG9ydCBmdW5jdGlvbiBtZW51UG9zaXRpb25PYnNlcnZlcihyZWZlcmVuY2VFbGVtZW50Rm9yRml4ZWRNZW51OiBIVE1MRWxlbWVudCwgdG9wRWxlbWVudEZpeGVkT3Zlck1lbnU/OiBIVE1MRWxlbWVudCkge1xuXG4gICAgY29uc3QgRklYRURfTUVOVV9DTEFTU19OQU1FID0gXCJtZW51LWZpeGVkXCJcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5XG5cbiAgICBjb25zdCBoZWlnaHRPZkZpeGVkRWxlbWVudFRoYXRIaWRlc01lbnUgPSB0b3BFbGVtZW50Rml4ZWRPdmVyTWVudSA9PT0gdW5kZWZpbmVkID8gIDAgOiB0b3BFbGVtZW50Rml4ZWRPdmVyTWVudS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcblxuICAgIGFkZFNjcm9sbEV2ZW50TGlzdGVuZXIoKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uVG9wT2ZSZWZFbGVtZW50ID0gcGFyc2VJbnQoIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHJlZmVyZW5jZUVsZW1lbnRGb3JGaXhlZE1lbnUpLnBhZGRpbmdUb3AgYXMgc3RyaW5nIClcblxuICAgICAgICBjb25zdCByZWZQb3NpdGlvbkZvckZpeGVkTWVudSA9IHBvc2l0aW9uVG9wT2ZSZWZFbGVtZW50IC0gaGVpZ2h0T2ZGaXhlZEVsZW1lbnRUaGF0SGlkZXNNZW51XG5cbiAgICAgICAgaWYoZ2V0UGFnZVNjcm9sbFBvc2l0aW9uVG9wKCkgPj0gcmVmUG9zaXRpb25Gb3JGaXhlZE1lbnUgJiYgIWJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKEZJWEVEX01FTlVfQ0xBU1NfTkFNRSkpe1xuICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKEZJWEVEX01FTlVfQ0xBU1NfTkFNRSlcbiAgICAgICAgfSBlbHNlIGlmIChnZXRQYWdlU2Nyb2xsUG9zaXRpb25Ub3AoKSA8PSByZWZQb3NpdGlvbkZvckZpeGVkTWVudSAmJiBib2R5LmNsYXNzTGlzdC5jb250YWlucyhGSVhFRF9NRU5VX0NMQVNTX05BTUUpKSB7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoRklYRURfTUVOVV9DTEFTU19OQU1FKVxuICAgICAgICB9XG5cbiAgICB9KVxufVxuIiwiZXhwb3J0IGVudW0gSFRNTF9TRUxFQ1RPUlMge1xuICAgIENPREVfQVJFQSAgICAgICAgICAgICAgID0gXCIuY29kZS1hcmVhXCIsXG4gICAgQ09OVEVOVCAgICAgICAgICAgICAgICAgPSBcIiNkMnYtY29udGVudFwiLFxuICAgIENVUlJFTlRfU0VDVElPTl9OQU1FICAgID0gXCIjY3VycmVudC1zZWN0aW9uLW5hbWVcIixcbiAgICBUT1BfSEVBREVSICAgICAgICAgICAgICA9IFwiI2Qydi1oZWFkZXJcIixcbiAgICBOQVZJR0FUSU9OX01FTlUgICAgICAgICA9IFwiI3NpdGUtbmF2aWdhdGlvblwiXG59IiwiaW1wb3J0IHtIVE1MX1NFTEVDVE9SU30gZnJvbSBcIi4uL0hUTUxfU0VMRUNUT1JTXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRTZWN0aW9uTmFtZSgpIHtcbiAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihIVE1MX1NFTEVDVE9SUy5DVVJSRU5UX1NFQ1RJT05fTkFNRSkgYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTCA9IGdldEN1cnJlbnRTZWN0aW9uTmFtZSgpXG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRTZWN0aW9uTmFtZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHBhZ2VUaXRsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIilcbiAgICBpZihwYWdlVGl0bGVFbGVtZW50ICE9PSBudWxsICkge1xuICAgICAgICByZXR1cm4gcGFnZVRpdGxlRWxlbWVudC5pbm5lckhUTUxcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJcIlxuICAgIH1cbn1cbiIsImltcG9ydCB7SFRNTF9TRUxFQ1RPUlN9IGZyb20gXCIuLi9IVE1MX1NFTEVDVE9SU1wiXG5pbXBvcnQge2FkZFNjcm9sbEV2ZW50TGlzdGVuZXJ9IGZyb20gXCIuLi9hZGRTY3JvbGxFdmVudExpc3RlbmVyXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHNldE5hdmlnYXRpb25NZW51KCkge1xuICAgIHNldExldmVsTmF2T25lKClcbiAgICBzZXRMZXZlbE5hdlR3bygpXG59XG5cbmZ1bmN0aW9uIHNldExldmVsTmF2T25lKCkge1xuICAgIGNvbnN0IENVUlJFTlRfU0VDVElPTl9DTEFTU05BTUUgPSBcImFjdGl2ZVwiXG5cbiAgICBjb25zdCBMRVZFTF9PTl9OQVZJR0FUSU9OX0VMRU1FTlRTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtIVE1MX1NFTEVDVE9SUy5OQVZJR0FUSU9OX01FTlV9ID4gbGkgPiBhYClcblxuICAgIGNvbnN0IGN1cnJlbnRUaXRsZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIilcblxuICAgIGlmKGN1cnJlbnRUaXRsZVBhZ2UgIT09IG51bGwpe1xuICAgICAgICBmb3IoY29uc3QgbGV2ZWwxTWVudU5hdmlnYXRpb25FbGVtZW50IG9mIExFVkVMX09OX05BVklHQVRJT05fRUxFTUVOVFMpIHtcbiAgICAgICAgICAgIGlmKGxldmVsMU1lbnVOYXZpZ2F0aW9uRWxlbWVudC5pbm5lckhUTUwgPT09IGN1cnJlbnRUaXRsZVBhZ2UuaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICAgICAgbGV2ZWwxTWVudU5hdmlnYXRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoQ1VSUkVOVF9TRUNUSU9OX0NMQVNTTkFNRSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0TGV2ZWxOYXZUd28oKSB7XG4gICAgZ2VuZXJhdGVMaXN0T2ZUaXRsZUxldmVsVHdvKCkudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgYWRkU2Nyb2xsRXZlbnRMaXN0ZW5lcigoKSA9PiB7XG4gICAgICAgICAgICB1cGRhdGVMZXZlbFR3b0luTmF2aWdhdGlvbk1lbnUodmFsdWUpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdXBkYXRlTGV2ZWxUd29Jbk5hdmlnYXRpb25NZW51KGxpc3RPZlRpdGxlTGV2ZWxUd286IFRpdGxlTGV2ZWxUd29bXSkge1xuICAgIGxldCBsYXN0VGl0bGVJc05vdEZvdW5kID0gdHJ1ZVxuXG4gICAgZm9yKGNvbnN0IHRpdGxlTGV2ZWxUd28gb2YgbGlzdE9mVGl0bGVMZXZlbFR3bykge1xuICAgICAgICBpZih0aXRsZUxldmVsVHdvLmlzQWN0aXZlICYmIGxhc3RUaXRsZUlzTm90Rm91bmQpIHtcbiAgICAgICAgICAgIGxhc3RUaXRsZUlzTm90Rm91bmQgPSBmYWxzZVxuICAgICAgICAgICAgdGl0bGVMZXZlbFR3by5jbGFzc25hbWUgPSBcImFjdGl2ZVwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aXRsZUxldmVsVHdvLmNsYXNzbmFtZSA9IFwidW5hY3RpdmVcIlxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUxpc3RPZlRpdGxlTGV2ZWxUd28oKTogUHJvbWlzZTxUaXRsZUxldmVsVHdvW10+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0VG9SZXR1cm4gPSBbXVxuXG4gICAgICAgIGNvbnN0IFRJVExFX1RXT19FTEVNRU5UUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7SFRNTF9TRUxFQ1RPUlMuQ09OVEVOVH0gaDJgKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PlxuICAgICAgICBjb25zdCBOQVZJR0FUSU9OX01FTlVfRUxFTUVOVCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7SFRNTF9TRUxFQ1RPUlMuTkFWSUdBVElPTl9NRU5VfWApIGFzIEhUTUxFbGVtZW50XG5cbiAgICAgICAgZm9yKGNvbnN0IG5hdmlnYXRpb25Ud29FbGVtZW50IG9mIFRJVExFX1RXT19FTEVNRU5UUykge1xuICAgICAgICAgICAgbGlzdFRvUmV0dXJuLnB1c2gobmV3IFRpdGxlTGV2ZWxUd28obmF2aWdhdGlvblR3b0VsZW1lbnQsIE5BVklHQVRJT05fTUVOVV9FTEVNRU5UKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUobGlzdFRvUmV0dXJuLnJldmVyc2UoKSlcblxuICAgICAgICByZWplY3QobmV3IEVycm9yKFwiY2FuJ3QgZ2V0IGxpc3Qgb2YgbGV2ZWwgdHdvIGluIG5hdmlnYXRpb24gbWVudVwiKSlcbiAgICB9KVxufVxuXG5jbGFzcyBUaXRsZUxldmVsVHdvIHtcbiAgICBwcml2YXRlIF9lbGVtZW50OiBIVE1MRWxlbWVudFxuXG4gICAgcHJpdmF0ZSBfZWxlbWVudEluTWVudTogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWRcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBuYXZpZ2F0aW9uTWVudUVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgICAgIHRoaXMuX2VsZW1lbnRJbk1lbnUgPSB0aGlzLmdldEVsZW1lbnRJbk1lbnUobmF2aWdhdGlvbk1lbnVFbGVtZW50KVxuICAgIH1cblxuICAgIGdldCBpc0FjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDw9IHdpbmRvdy5pbm5lckhlaWdodCAvIDJcbiAgICB9XG5cbiAgICBzZXQgY2xhc3NuYW1lKGNsYXNzbmFtZTogXCJhY3RpdmVcInxcInVuYWN0aXZlXCIpIHtcbiAgICAgICAgaWYoY2xhc3NuYW1lID09PSBcImFjdGl2ZVwiKSB7XG4gICAgICAgICAgICBpZighIHRoaXMuX2VsZW1lbnRJbk1lbnVDb250YWluc0FjdGl2ZUNsYXNzKSB7XG4gICAgICAgICAgICAgICAgKHRoaXMuX2VsZW1lbnRJbk1lbnUgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKHRoaXMuX2VsZW1lbnRJbk1lbnVDb250YWluc0FjdGl2ZUNsYXNzKSB7XG4gICAgICAgICAgICAgICAgKHRoaXMuX2VsZW1lbnRJbk1lbnUgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RWxlbWVudEluTWVudShuYXZpZ2F0aW9uTWVudUVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGxpc3RPZkxldmVsVHdvSW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtIVE1MX1NFTEVDVE9SUy5OQVZJR0FUSU9OX01FTlV9ID4gbGkgPiB1bCA+IGxpID4gYWApIGFzIE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+XG5cbiAgICAgICAgZm9yKGNvbnN0IGxldmVsVHdvRWxlbWVudCBvZiBsaXN0T2ZMZXZlbFR3b0luTWVudSkge1xuICAgICAgICAgICAgaWYobGV2ZWxUd29FbGVtZW50LmdldEF0dHJpYnV0ZShcImhyZWZcIikgPT09IFwiI1wiICsgdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsZXZlbFR3b0VsZW1lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IF9lbGVtZW50SW5NZW51Q29udGFpbnNBY3RpdmVDbGFzcygpIHtcbiAgICAgICAgaWYodGhpcy5fZWxlbWVudEluTWVudSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudEluTWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHtJS290bGluUGxheWdyb3VuZEVkaXRvcn0gZnJvbSBcIi4vSUtvdGxpblBsYXlncm91bmRFZGl0b3JcIlxuaW1wb3J0IHtEMlZLb3RsaW5FZGl0b3JzfSBmcm9tIFwiLi9EMlZLb3RsaW5FZGl0b3JzXCJcblxuZGVjbGFyZSBmdW5jdGlvbiBLb3RsaW5QbGF5Z3JvdW5kKHNlbGVjdG9yOiBzdHJpbmcgfMKgSFRNTEVsZW1lbnQsIGV2ZW50RnVuY3Rpb25zPzogSUV2ZW50RnVuY3Rpb25zKTogUHJvbWlzZTxJS290bGluUGxheWdyb3VuZEVkaXRvcltdPlxuXG5pbnRlcmZhY2UgSUV2ZW50RnVuY3Rpb25zIHtcbiAgICBjYWxsYmFjaz86ICh0YXJnZXROb2RlOiBIVE1MRWxlbWVudCwgbW91bnROb2RlOiBIVE1MRWxlbWVudCkgPT4gdm9pZCxcbiAgICBnZXRJbnN0YW5jZT86IChpbnN0YW5jZTogSUtvdGxpblBsYXlncm91bmRFZGl0b3IpID0+IHZvaWRcbiAgICBvbkNoYW5nZT86IChjb2RlOiBzdHJpbmcpID0+IHZvaWQsXG4gICAgb25UZXN0UGFzc2VkPzogKCkgPT4gdm9pZCxcbn1cblxuY29uc3QgbGlzdE9mS290bGluUGxheWdyb3VuZEVkaXRvcnM6IElLb3RsaW5QbGF5Z3JvdW5kRWRpdG9yW10gPSBbXVxuXG5jb25zdCBldmVudEZ1bmN0aW9uczogSUtvdGxpblBsYXlncm91bmRFZGl0b3JFdmVudEZ1bmN0aW9ucyA9IHtcbiAgICBnZXRJbnN0YW5jZTogKGtvdGxpblBsYXlncm91bmRFZGl0b3I6IElLb3RsaW5QbGF5Z3JvdW5kRWRpdG9yKSA9PiB7XG4gICAgICAgIGxpc3RPZktvdGxpblBsYXlncm91bmRFZGl0b3JzLnB1c2goa290bGluUGxheWdyb3VuZEVkaXRvcilcbiAgICB9LFxuICAgIG9uQ2hhbmdlOiAoY29kZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRWRpdG9yIGNvZGUgd2FzIGNoYW5nZWQ6XFxuXCIgKyBjb2RlKTtcbiAgICB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEVkaXRvcnMoKSB7XG4gICAgY29uc3QgY29kZUVsZW1lbnRzRm9yS290bGluUGxheWdyb3VuZEVkaXRvckluaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua290bGluLWNvZGUnKVxuXG4gICAgZm9yKGNvbnN0IGNvZGVFbGVtZW50IG9mIGNvZGVFbGVtZW50c0ZvcktvdGxpblBsYXlncm91bmRFZGl0b3JJbml0KSB7XG4gICAgICAgIGlmKGNvZGVFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QgPSBLb3RsaW5QbGF5Z3JvdW5kKGNvZGVFbGVtZW50LCBldmVudEZ1bmN0aW9ucykudGhlbigoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmludGVyZmFjZSBJS290bGluUGxheWdyb3VuZEVkaXRvckV2ZW50RnVuY3Rpb25zIHtcbiAgICBvbkNoYW5nZT86ICAgICAgICAgIChjb2RlOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25UZXN0UGFzc2VkPzogICAgICAoKSA9PiB2b2lkO1xuICAgIG9uQ2xvc2VDb25zb2xlPzogICAgKCkgPT4gdm9pZDtcbiAgICBvbk9wZW5Db25zb2xlPzogICAgICgpID0+IHZvaWQ7XG4gICAgY2FsbGJhY2s/OiAgICAgICAgICAodGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQsIG1vdW50Tm9kZTogSFRNTEVsZW1lbnQpID0+IHZvaWQ7XG4gICAgZ2V0SW5zdGFuY2U/OiAgICAgICAoaW5zdGFuY2U6IElLb3RsaW5QbGF5Z3JvdW5kRWRpdG9yKSA9PiB2b2lkXG59IiwiaW1wb3J0IHttZW51UG9zaXRpb25PYnNlcnZlcn0gZnJvbSBcIi4vbWVudVBvc2l0aW9uT2JzZXJ2ZXJcIlxuaW1wb3J0IHtIVE1MX1NFTEVDVE9SU30gZnJvbSBcIi4vSFRNTF9TRUxFQ1RPUlNcIlxuaW1wb3J0IHtzZXRDdXJyZW50U2VjdGlvbk5hbWV9IGZyb20gXCIuL25hdmlnYXRpb25NZW51L3NldEN1cnJlbnRTZWN0aW9uTmFtZVwiXG5pbXBvcnQge3NldE5hdmlnYXRpb25NZW51fSBmcm9tIFwiLi9uYXZpZ2F0aW9uTWVudS9zZXROYXZpZ2F0aW9uTWVudVwiXG5pbXBvcnQge3NldEVkaXRvcnN9IGZyb20gXCIuL2VkaXRvci9zZXRFZGl0b3JzXCJcblxuc2V0RWRpdG9ycygpXG5cbm1lbnVQb3NpdGlvbk9ic2VydmVyKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoSFRNTF9TRUxFQ1RPUlMuQ09OVEVOVCkgYXMgSFRNTEVsZW1lbnQsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihIVE1MX1NFTEVDVE9SUy5UT1BfSEVBREVSKSBhcyBIVE1MRWxlbWVudCxcbilcblxuXG5zZXRDdXJyZW50U2VjdGlvbk5hbWUoKVxuXG5zZXROYXZpZ2F0aW9uTWVudSgpIiwiaW1wb3J0IFwiLi9zY3JpcHRzL21haW5cIlxuaW1wb3J0IFwiLi9zdHlsZXMvbWFpbi5zY3NzXCJcblxuaW1wb3J0IFwiLi9pbWFnZXMvbG9nby1wbGF5LnBuZ1wiXG5pbXBvcnQgXCIuL2ltYWdlcy9sb2dvLW5lZ2F0aXZlLnBuZ1wiXG5pbXBvcnQgXCIuL2ltYWdlcy9nby1iYWNrLXRvLW1haW4tcGFnZS5wbmdcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=