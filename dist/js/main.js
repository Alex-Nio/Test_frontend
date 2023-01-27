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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/disclaimers/disclaimers.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/disclaimers/disclaimers.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// footer js
var scrollBtn = document.querySelector(".scroll-top"),
  menu = document.querySelector(".nav");
function scrollTop() {
  var scrollToTop = function scrollToTop() {
    var x = document.documentElement.scrollTop || document.body.scrollTop;
    if (x > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, x - x / 15);
      // Fast bugfix
      menu.style.cssText = "position: fixed; width: 100%; z-index: 100;";
      menu.classList.remove("on-scroll");
    }
  };
  scrollToTop();
}
scrollBtn.addEventListener("click", scrollTop);

/***/ }),

/***/ "./src/blocks/modules/header-content/header-content.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/header-content/header-content.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var cityCheck = document.querySelector(".default-text"),
  email = document.getElementById("email");
var formSubmitBtn = document.querySelector(".submit-btn");
var checkbox = document.getElementById("checkbox");
var fakeCheckbox = document.querySelector(".checkbox");
var otherBtn = document.querySelector(".menu-actions").querySelector(".btn");
function validateForm(e) {
  e.preventDefault();
  var regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var validateEmail = function validateEmail(email) {
    valueToCheck = String(email).toLowerCase();
    if (valueToCheck.match(regexp)) {
      return true;
    } else {
      return false;
    }
  };
  if (cityCheck.innerText != "Выбрать город" && checkbox.checked == true && validateEmail(email.value)) {
    cratePopup("Упс!", "Был бы back-end, всё бы сработало");
  } else {
    cratePopup("Ой", "Пожалуйста, корректно заполните поля");
  }
}

// Динамический попап
function cratePopup(incomingHeadingText, incomingText) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  var popup = document.createElement("div"),
    popupWrapper = document.createElement("div"),
    popupHeading = document.createElement("h3"),
    popupText = document.createElement("p"),
    popupCloseBtn = document.createElement("button"),
    body = document.querySelector("body");
  body.classList.add("blocked");
  popup.classList.add("popup");
  popupWrapper.classList.add("popup-wrapper");
  popupCloseBtn.classList.add("popup-close-btn");
  function generateStyles() {
    // For fun
    if (args) {
      for (var i = 0; i < args.length; i++) {
        var str = args[i];
        var _popupText = document.createElement("p");
        _popupText.innerText = str;
        _popupText.style.cssText = "\n\t\t\t\t\tfont-size: 2.4rem;\n\t\t\t\t\tmax-width: 240px;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tmargin: 10px auto 0 auto;\n\t\t\t\t";
        popupWrapper.append(_popupText);
      }
    } else {
      popupText.style.cssText = "\n\t\t\t\tfont-size: 2.8rem;\n\t\t\t\tmax-width: 240px;\n\t\t\t\ttext-align: center;\n\t\t\t\tmargin: 0 auto;\n\t\t\t";
    }
    popupCloseBtn.style.cssText = "\n\t\t\twidth: 30px;\n\t\t\theight: 30px;\n\t\t\talign-self: end;\n\t\t\tmargin: 20px;\n\t\t\tpadding: 5px;\n\t\t\tbackground: url('./img/svg/popup-close.svg') no-repeat center / 100%;\n\t\t\tz-index: 10;\n\t\t";
    popupText.style.cssText = "\n\t\t\tfont-size: 2.4rem;\n\t\t\tmax-width: 240px;\n\t\t\ttext-align: center;\n\t\t\tmargin: 0 auto;\n\t\t";
    popupHeading.style.cssText = "\n\t\t\tfont-size: 4rem;\n\t\t\tfont-family: \"Formular\";\n\t\t\tmargin: 15px 0 30px 0;\n\t\t";
    popupWrapper.style.cssText = "\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tjustify-content: flex-start;\n\t\t\talign-items: center;\n\t\t\twidth: 320px;\n\t\t\theight: 460px;\n\t\t\tbackground-color: #ffffff;\n\t\t\tborder-radius: 30px;\n\t\t\tbox-shadow: 0px 0px 20px rgba(143, 149, 172, 0.4);\n\t\t\tanimation: zoomIn 0.5s linear;\n\t\t";
    popup.style.cssText = "\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\tright: 0;\n\t\t\tbottom: 0;\n\t\t\tbackground-color: red;\n\t\t\tz-index: 1000;\n\t\t";
  }
  popupHeading.innerText = incomingHeadingText;
  popupText.innerText = incomingText;
  popupWrapper.append(popupCloseBtn, popupHeading, popupText);
  popup.append(popupWrapper);
  document.documentElement.append(popup);
  generateStyles();
  popupCloseBtn.addEventListener("click", popupClose);
  function popupClose() {
    popupWrapper.style.cssText = "\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tjustify-content: flex-start;\n\t\t\talign-items: center;\n\t\t\twidth: 320px;\n\t\t\theight: 460px;\n\t\t\tbackground-color: #ffffff;\n\t\t\tborder-radius: 30px;\n\t\t\tbox-shadow: 0px 0px 20px rgba(143, 149, 172, 0.4);\n\t\t\tanimation: zoomOut 0.5s linear;\n\t\t";
    setTimeout(function () {
      popup.remove();
      body.classList.remove("blocked");
    }, 450);
  }
}
formSubmitBtn.addEventListener("click", validateForm, event);
otherBtn.addEventListener("click", function () {
  cratePopup("©", "Наша работа — это безусловная любовь.", "Работа всех остальных в нашей жизни — нажимать на наши кнопки");
});

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//! Main Menu Initialization
function menuInitialize() {
  var menuItems = document.querySelectorAll(".menu-list__item"),
    menuContentItems = document.querySelectorAll(".menu-content");

  // Вешаем обработчик событий на пункт меню
  menuItems.forEach(function (item, i) {
    item.addEventListener("click", function (e) {
      var target = e.target;
      currentContentCount = i;
      if (target.classList.contains("active")) {
        removeAllActiveItems(menuItems);
        hideMenuContent(menuContentItems);
      } else {
        hideMenuContent(menuContentItems);
        setActiveItem(menuItems[i]);
        setActiveContent(menuContentItems[i]);
        getMenuStartPosition();
      }
    });
  });

  // Клик по документу
  document.addEventListener("click", function (e) {
    var target = e.target,
      not_active = !target.classList.contains("active"),
      not_content = !target.classList.contains("menu-content");
    if (not_active && not_content) {
      removeAllActiveItems(menuItems);
      hideMenuContent(menuContentItems);
    }
  });

  // Скрываем контент пункта меню
  function hideMenuContent(arr) {
    arr.forEach(function (item) {
      item.classList.add("hide");
      item.classList.remove("active");
    });
  }

  // Устанавливаем активный контент и проверяем количество ссылок
  function setActiveContent(item) {
    item.classList.remove("hide");
    item.classList.add("active");
    var contentCounter = item.querySelectorAll(".menu-content__item");

    // Фикс количества элементов в контенте меню
    if (contentCounter.length >= 5) {
      item.classList.add("afteroff");
    } else if (contentCounter.length <= 2) {
      item.style.gridTemplateRows = "repeat(1, 44px)";
      item.classList.add("afteroff");
    }
  }

  // Устанавливаем позицию контента по пункту меню
  function getMenuStartPosition() {
    var activeItem = document.querySelector(".menu-list__item.active"),
      currentContent = document.querySelector(".menu-content.active"),
      windowWidth = document.documentElement.offsetWidth;
    if (activeItem == null) {
      activeItem = document.querySelectorAll(".menu-list__item")[0];
    }
    if (currentContent == null) {
      currentContent = document.querySelectorAll(".menu-content")[0];
    }
    var menuLeftPosition = activeItem.getBoundingClientRect().left;

    // Адаптив
    if (windowWidth <= 1120) {
      currentContent.style.left = "unset";
      currentContent.style.transform = "translateY(-50%)";
    } else if (windowWidth >= 1660) {
      currentContent.style.left = menuLeftPosition + "px";
      currentContent.style.transform = "none";
    } else if (windowWidth < 1660) {
      currentContent.style.left = 50 + "%";
      currentContent.style.transform = "translateX(-50%)";
    }
  }

  // Ставим активный класс на пункт меню
  function setActiveItem(itemSelector) {
    removeAllActiveItems(menuItems);
    itemSelector.classList.toggle("active");
    getMenuStartPosition();
  }

  // Убираем активный класс со всех элементов
  function removeAllActiveItems(Array) {
    Array.forEach(function (item) {
      item.classList.remove("active");
    });
  }

  // После загрузки дом-структуры выполняем действия
  hideMenuContent(menuContentItems);
  getMenuStartPosition();

  // Если срабатывает ресайз вьюпорта
  window.addEventListener("resize", getMenuStartPosition);
}
document.addEventListener("DOMContentLoaded", function () {
  //!Header Scrolling
  var nav = document.querySelector(".nav");

  // Triggers
  var scrollTriger = "on-scroll",
    windowWidth;
  function checkWindowWidth() {
    windowWidth = document.documentElement.offsetWidth;
    return windowWidth;
  }
  window.addEventListener("resize", checkWindowWidth);
  checkWindowWidth();
  var requestFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
  //* polyfill - throttle fall-back for unsupported browsers
  function () {
    var throttle = false,
      FPS = 1000 / 60; // 60fps (in ms)

    return function (CB) {
      if (throttle) return;
      throttle = true;
      setTimeout(function () {
        throttle = false;
      }, FPS);
      CB();
    };
  }();
  function onScroll() {
    window.addEventListener("scroll", callbackFunc);
    function callbackFunc() {
      var y = window.pageYOffset;
      if (y > 0 && windowWidth > 1119) {
        nav.classList.add(scrollTriger);
      } else {
        nav.classList.remove(scrollTriger);
      }
    }
  }
  window.onscroll = function () {
    requestFrame(onScroll);
  };

  //! Burger Mobile Menu
  var burgerBtn = document.querySelector(".burger-btn"),
    menu = document.querySelector(".menu"),
    menuContentItems = document.querySelectorAll(".menu-content");

  // Скрываем контент пункта меню
  function hideMenuContent(arr) {
    arr.forEach(function (item) {
      item.classList.add("hide");
      item.classList.remove("active");
    });
  }

  // Открыть / Закрыть меню
  function menuToggle(menu, btn, content) {
    btn.classList.toggle("active");
    menu.classList.toggle("active");
    hideMenuContent(content);
  }

  // Открыть / Закрыть меню
  burgerBtn.addEventListener("click", function (e) {
    menuToggle(menu, burgerBtn, menuContentItems);
  });
  hideMenuContent(menuContentItems);

  // Закрыть меню при клике извне
  document.addEventListener("click", function (e) {
    var target = e.target;
    var its_menu = target == menu || menu.contains(target);
    var its_btnMenu = target == burgerBtn;
    var menu_is_active = menu.classList.contains("active");
    if (!its_menu && !its_btnMenu && menu_is_active) {
      menuToggle(menu, burgerBtn, menuContentItems);
    }
  });

  //! Select
  var optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    selectDefaultText = optionMenu.querySelector(".default-text");
  optionMenu.classList.add("hidden");
  selectBtn.addEventListener("click", function (e) {
    optionMenu.classList.toggle("active");
    optionMenu.classList.remove("hidden");
    optionMenu.classList.add("animated");
  });
  options.forEach(function (option) {
    option.addEventListener("click", function () {
      var selectedOption = option.querySelector(".option-text").innerText;
      selectDefaultText.innerText = selectedOption;
      optionMenu.classList.add("hidden");
      optionMenu.classList.remove("active");
    });
  });
});
document.addEventListener("DOMContentLoaded", menuInitialize);

/***/ }),

/***/ "./src/blocks/modules/info/info.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/info/info.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// const range = document.querySelector(".range"),
// 	thumb = document.querySelector(".range-thumb"),
// 	rangeBtn = document.getElementById("bar-btn");

// let max = range.max,
// 	rangePx = range.offsetWidth,
// 	thumbWidth = 95,
// 	mozThumb = 45,
// 	inputСoordinates,
// 	counterBtn = document.querySelector(".progressbar-btn");

// let onePercent = rangePx / thumbWidth;

// window.onbeforeunload = function() {
// 	range.value = 0;
// };

// // rangeBtn.addEventListener("click", function() {
// // 	range.value = Number(range.value) + 1;
// // 	range.setAttribute("value", range.value);
// // 	console.log(range.value);
// // });

// // Получаем значение с кнопки

// thumb.textContent = `0%`;

// // 1. Получить значение с кнопки оно будет в %
// // 2. Посчитать количество пикселей в 1%
// // 3. запустить счётчик
// // 4. Если счётчик = 1% нужно к left прибавить количество пикселей в 1%

var rangeInput = document.querySelector(".range");
var rangeThumb = document.querySelector(".range-thumb");
var rangeBtn = document.getElementById("bar-btn");
var percent, pixels;
function calc() {
  percent = (rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min);
  pixels = percent * rangeInput.offsetWidth;
  if (rangeInput.value >= 80) {
    rangeInput.value = 80;
  } else {
    rangeThumb.style.left = "".concat(pixels + 5, "px");
  }
}
rangeInput.addEventListener("input", calc);
function updateRangeSlider(value) {
  var counter = 0;
  var counterIntervalId = setInterval(function () {
    counter++;
    if (counter === value) {
      clearInterval(counterIntervalId);
    }
    requestAnimationFrame(function () {
      calc();
      rangeInput.value = counter;
      rangeThumb.textContent = "".concat(counter, " %");
    });
  }, 15);
}
rangeBtn.addEventListener("click", function (e) {
  var increment = parseInt(rangeBtn.value.toString());
  updateRangeSlider(increment);
});
rangeThumb.textContent = "0 %";

/***/ }),

/***/ "./src/blocks/modules/map/map.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/map/map.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/slider/slider.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/slider/slider.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// -----------------------------------------------
// ---------------HEADER SLIDER-------------------
// -----------------------------------------------

var swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false,
  autoplay: {
    enabled: true,
    delay: 3000
  },
  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: true,
  speed: 800,
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    1080: {
      slidesPerView: 2
    },
    1590: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    1281: {
      spaceBetween: 30
    }
  }
});
function ratingInitialize() {
  var ratingContainer = document.querySelectorAll(".rating");
  ratingContainer.forEach(function (item, i) {
    var starSelector = ".rating-star";
    var thisRate = +item.getAttribute("data-rate");

    // Устанавливаем рейтинг по дата-атрибуту
    function setRating(item, rateSelector, currentRate, command) {
      var arr = item.querySelectorAll(rateSelector);

      // Если предзагрузка
      if (command === "preload") {
        for (var _i = 0; _i < arr.length; _i++) {
          var el = arr[_i];
          _i >= currentRate ? el.classList.add("rating-star--empty") : el.classList.add("rating-star--filled");
        }
      }

      // Если пользователь сделал клик
      if (command === "set") {
        arr.forEach(function (el) {
          removeAllRates(el);
        });
        for (var _i2 = 0; _i2 < currentRate + 1; _i2++) {
          var _el = arr[_i2];
          setActive(_el);
        }
        if (currentRate == 4) {
          // Попап
        }
      }
    }

    // Устанавливаем дефолтный рейтинг из Html
    setRating(item, starSelector, thisRate, "preload");

    // Меняем рейтинг
    function changeRating(clickedItem, thisArrItem, rateSelector) {
      var currentRateBar = thisArrItem.querySelectorAll(rateSelector);

      // Находим текущий индекс элемента
      function getPosition(elementToFind, arrayElements) {
        var i;
        for (i = 0; i < arrayElements.length; i++) {
          if (arrayElements[i] === elementToFind) {
            return i;
          }
        }
        return null; //not found
      }

      return getPosition(clickedItem, currentRateBar);
    }

    // Убираем классы
    function removeAllRates(el) {
      el.classList.remove("rating-star--filled");
      el.classList.remove("rating-star--empty");
      el.classList.add("rating-star--empty");
    }

    // Добавляем классы
    function setActive(el) {
      el.classList.remove("rating-star--empty");
      el.classList.add("rating-star--filled");
    }

    // Клик по звезде
    item.addEventListener("click", function (e) {
      var target = e.target,
        clickedRate;
      if (!target.classList.contains("rating")) {
        clickedRate = changeRating(target, item, starSelector);
        +item.setAttribute("data-rate", clickedRate + 1);
        setRating(item, starSelector, clickedRate, "set");
      }
    });
  });
}
document.addEventListener("DOMContentLoaded", ratingInitialize);
var showMoreBtn = document.querySelector(".show-more-link");
showMoreBtn.addEventListener("click", function (e) {
  e.preventDefault();
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_header_content_header_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/header-content/header-content */ "./src/blocks/modules/header-content/header-content.js");
/* harmony import */ var _modules_header_content_header_content__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_header_content_header_content__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_slider_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/slider/slider */ "./src/blocks/modules/slider/slider.js");
/* harmony import */ var _modules_slider_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_slider_slider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_info_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/info/info */ "./src/blocks/modules/info/info.js");
/* harmony import */ var _modules_info_info__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_info_info__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_map_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/map/map */ "./src/blocks/modules/map/map.js");
/* harmony import */ var _modules_map_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_map_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_disclaimers_disclaimers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/disclaimers/disclaimers */ "./src/blocks/modules/disclaimers/disclaimers.js");
/* harmony import */ var _modules_disclaimers_disclaimers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_disclaimers_disclaimers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_6__);
// Импорт всех JS файлов из BEM модулей








/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map