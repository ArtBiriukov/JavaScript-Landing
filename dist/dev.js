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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_popUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popUp */ \"./src/modules/popUp.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_addDot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/addDot */ \"./src/modules/addDot.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n //таймер\n// countTimer('23 September  2021');\n//меню\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); //Модальное окно\n\n(0,_modules_popUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); //скрол\n\nvar menu = document.querySelector('menu'),\n    menuLinks = menu.querySelectorAll('ul>li>a'),\n    btnScroll = document.querySelector('a[href=\"#service-block\"]');\n\nvar scrollEvent = function scrollEvent(event) {\n  event.preventDefault();\n  var itemHash = event.currentTarget.getAttribute('href');\n  document.querySelector('' + itemHash).scrollIntoView({\n    behavior: 'smooth',\n    block: 'start'\n  });\n};\n\nmenuLinks.forEach(function (menuLink) {\n  menuLink.addEventListener('click', scrollEvent);\n});\nbtnScroll.addEventListener('click', scrollEvent); //табы\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); //Script DOT\n\n(0,_modules_addDot__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); //слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); //Атрибуты у фото\n\nvar commandPhoto = document.querySelectorAll('.command__photo');\ncommandPhoto.forEach(function (photo, ind) {\n  photo.addEventListener('mouseenter', function (event) {\n    if (event.target === commandPhoto[ind]) {\n      event.target.dataset.firstImg = commandPhoto[ind].src;\n      commandPhoto[ind].src = event.target.dataset.img;\n    }\n  });\n  photo.addEventListener('mouseout', function (event) {\n    if (event.target === commandPhoto[ind]) {\n      commandPhoto[ind].src = event.target.dataset.firstImg;\n    }\n  });\n}); //Регулярки\n\nvar calcBlock = document.querySelector('.calc-block'),\n    inputCalc = calcBlock.querySelectorAll('input');\ninputCalc.forEach(function (item) {\n  var checkValue = function checkValue() {\n    item.value = item.value.replace(/[^\\d]/g, '');\n  };\n\n  item.addEventListener('input', checkValue);\n}); //Калькулятор\n\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100); //ajax работа с сервером\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\n//# sourceURL=webpack://landing/./src/index.js?");

/***/ }),

/***/ "./src/modules/addDot.js":
/*!*******************************!*\
  !*** ./src/modules/addDot.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar addDot = function addDot() {\n  var sliders = document.querySelectorAll('.portfolio-item'),\n      dotContainer = document.querySelector('.portfolio-dots');\n  dotContainer.insertAdjacentHTML('beforeend', '<li class=\"dot dot-active\"></li>');\n\n  for (var i = 0; i < sliders.length - 1; i++) {\n    dotContainer.insertAdjacentHTML('beforeend', '<li class=\"dot\"></li>');\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDot);\n\n//# sourceURL=webpack://landing/./src/modules/addDot.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block'),\n      calcType = document.querySelector('.calc-type'),\n      calcSquare = document.querySelector('.calc-square'),\n      calcDay = document.querySelector('.calc-day'),\n      calcCoutn = document.querySelector('.calc-count'),\n      totalValue = document.getElementById('total');\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target;\n\n    var countSum = function countSum() {\n      var total = 0,\n          countValue = 1,\n          dayValue = 1;\n      var typeValue = calcType.options[calcType.selectedIndex].value,\n          squareValue = calcSquare.value;\n\n      if (!typeValue) {\n        calcCoutn.value = '';\n        calcSquare.value = '';\n        calcDay.value = '';\n        total = 0;\n      } //Количество комнат\n\n\n      if (calcCoutn.value > 1) {\n        countValue += (calcCoutn.value - 1) / 10;\n      } //за какое количество дней\n\n\n      if (calcDay.value && calcDay.value < 5) {\n        dayValue *= 2;\n      } else if (calcDay.value && calcDay.value < 10) {\n        dayValue *= 1.5;\n      } //самая главная формула\n\n\n      if (typeValue && squareValue) {\n        total = parseInt(price * typeValue * squareValue * countValue * dayValue);\n      }\n\n      var animateValue = function animateValue(start, end, duration) {\n        var startTimestamp = null;\n\n        var step = function step(timestamp) {\n          if (!startTimestamp) startTimestamp = timestamp;\n          var progress = Math.min((timestamp - startTimestamp) / duration, 1);\n          totalValue.textContent = Math.floor(progress * (end + start) + start);\n\n          if (progress < 1) {\n            window.requestAnimationFrame(step);\n          }\n        };\n\n        window.requestAnimationFrame(step);\n      };\n\n      animateValue(0, total, 1000);\n    };\n\n    if (target === calcType || target === calcSquare || target === calcDay || target === calcCoutn) {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://landing/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/checkFilds.js":
/*!***********************************!*\
  !*** ./src/modules/checkFilds.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Регулярные выражения для форм\nvar regExpName = /^[а-яё]{2,}$/i,\n    regExpText = /[а-яё\\s\\!\\.\\,\\?\\:\\;\\(\\)]+$/gi,\n    regExpEmail = /^\\w+@\\w+\\.\\w{2,}$/,\n    regExpPhone = /^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$/;\n\nvar checkFilds = function checkFilds(target) {\n  var checkGood = function checkGood() {\n    target.classList.add('success');\n    target.classList.remove('error');\n  };\n\n  var checkBed = function checkBed() {\n    target.classList.add('error');\n    target.classList.remove('success');\n  };\n\n  if (target.name === 'user_name') {\n    target.value = target.value.replace(/[a-z\\s]*/gi, '');\n\n    if (regExpName.test(target.value)) {\n      checkGood();\n    } else {\n      checkBed();\n    }\n  }\n\n  if (target.name === 'user_message') {\n    if (regExpText.test(target.value)) {\n      checkGood();\n    } else {\n      checkBed();\n    }\n  }\n\n  if (target.matches('.form-email')) {\n    if (regExpEmail.test(target.value)) {\n      checkGood();\n    } else {\n      checkBed();\n    }\n  }\n\n  if (target.matches('.form-phone')) {\n    target.value = target.value.replace(/[^\\d\\+\\-\\s\\(\\)]+/g, '');\n\n    if (regExpPhone.test(target.value)) {\n      checkGood();\n    } else {\n      checkBed();\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkFilds);\n\n//# sourceURL=webpack://landing/./src/modules/checkFilds.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar countTimer = function countTimer(deadline) {\n  var timerHours = document.getElementById('timer-hours'),\n      timerMinutes = document.getElementById('timer-minutes'),\n      timerSeconds = document.getElementById('timer-seconds');\n\n  var getTimeRemaining = function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 3600);\n\n    if (timeRemaining > 0) {\n      return {\n        timeRemaining: timeRemaining,\n        hours: hours,\n        minutes: minutes,\n        seconds: seconds\n      };\n    } else {\n      return {\n        timeRemaining: 0,\n        hours: 0,\n        minutes: 0,\n        seconds: 0\n      };\n    }\n  };\n\n  var updateClock = function updateClock() {\n    var _getTimeRemaining = getTimeRemaining(),\n        hours = _getTimeRemaining.hours,\n        minutes = _getTimeRemaining.minutes,\n        seconds = _getTimeRemaining.seconds,\n        timeRemaining = _getTimeRemaining.timeRemaining;\n\n    var checkZero = function checkZero(itemTime) {\n      if (itemTime < 10) {\n        return \"0\".concat(itemTime);\n      } else {\n        return itemTime;\n      }\n    };\n\n    timerSeconds.textContent = checkZero(seconds);\n    timerMinutes.textContent = checkZero(minutes);\n    timerHours.textContent = checkZero(hours);\n    var idInterval = setInterval(updateClock, 1000);\n\n    if (timeRemaining < 0) {\n      clearInterval(idInterval);\n    }\n  };\n\n  updateClock();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://landing/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/mask-phone.js":
/*!***********************************!*\
  !*** ./src/modules/mask-phone.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction maskPhone(selector) {\n  var masked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '+7 (___) ___-__-__';\n  var elems = document.querySelectorAll(selector);\n\n  function mask(event) {\n    var keyCode = event.keyCode;\n    var template = masked,\n        def = template.replace(/\\D/g, \"\"),\n        val = this.value.replace(/\\D/g, \"\");\n    var i = 0,\n        newValue = template.replace(/[_\\d]/g, function (a) {\n      return i < val.length ? val.charAt(i++) || def.charAt(i) : a;\n    });\n    i = newValue.indexOf(\"_\");\n\n    if (i != -1) {\n      newValue = newValue.slice(0, i);\n    }\n\n    var reg = template.substr(0, this.value.length).replace(/_+/g, function (a) {\n      return \"\\\\d{1,\" + a.length + \"}\";\n    }).replace(/[+()]/g, \"\\\\$&\");\n    reg = new RegExp(\"^\" + reg + \"$\");\n\n    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {\n      this.value = newValue;\n    }\n\n    if (event.type == \"blur\" && this.value.length < 5) {\n      this.value = \"\";\n    }\n  }\n\n  var _iterator = _createForOfIteratorHelper(elems),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var elem = _step.value;\n      elem.addEventListener(\"input\", mask);\n      elem.addEventListener(\"focus\", mask);\n      elem.addEventListener(\"blur\", mask);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n} // use\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (maskPhone);\nmaskPhone('селектор элементов', 'маска, если маску не передать то будет работать стандартная +7 (___) ___-__-__');\n\n//# sourceURL=webpack://landing/./src/modules/mask-phone.js?");

/***/ }),

/***/ "./src/modules/popUp.js":
/*!******************************!*\
  !*** ./src/modules/popUp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar popUp = function popUp() {\n  var popup = document.querySelector('.popup'),\n      popupBtn = document.querySelectorAll('.popup-btn'),\n      popupContent = document.querySelector('.popup-content');\n\n  var animationPopup = function animationPopup() {\n    if (document.documentElement.clientWidth <= 768) {\n      popup.style.display = 'block';\n    } else {\n      var start = null;\n\n      var step = function step(timestamp) {\n        if (!start) start = timestamp;\n        var progress = timestamp - start;\n        popup.style.display = 'block';\n        popupContent.style.left = progress / 6 + '%';\n\n        if (progress < 240) {\n          window.requestAnimationFrame(step);\n        }\n      };\n\n      window.requestAnimationFrame(step);\n    }\n  };\n\n  popupBtn.forEach(function (item) {\n    item.addEventListener('click', animationPopup);\n  });\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      popup.style.display = 'none';\n      popupContent.style.left = '0';\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popup.style.display = 'none';\n        popupContent.style.left = '0';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popUp);\n\n//# sourceURL=webpack://landing/./src/modules/popUp.js?");

/***/ }),

/***/ "./src/modules/rebildFilds.js":
/*!************************************!*\
  !*** ./src/modules/rebildFilds.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar rebildFilds = function rebildFilds(event) {\n  var target = event.target,\n      regExpTextUp = /( |^)[а-яёa-z]/g,\n      regExpDelSpaceForword = /^(\\s*\\-*)*/g,\n      regExpDelSpaceBack = /[\\s*\\-*]*$/g;\n\n  var delSpaceForwordBack = function delSpaceForwordBack() {\n    target.value = target.value.replace(regExpDelSpaceForword, '');\n    target.value = target.value.replace(regExpDelSpaceBack, '');\n  };\n\n  if (target.name === 'user_name') {\n    delSpaceForwordBack();\n    target.value = target.value.replace(regExpTextUp, function (x) {\n      return x.toUpperCase();\n    });\n  }\n\n  if (target.name === 'user_message') {\n    delSpaceForwordBack();\n    target.value = target.value.replace(/\\s+/g, ' ');\n    target.value = target.value.replace(/\\-+/g, '-');\n  }\n\n  if (target.matches('.form-email')) {\n    delSpaceForwordBack();\n    target.value = target.value.replace(/@+/g, '@');\n    target.value = target.value.replace(/\\-+/g, '-');\n    target.value = target.value.replace(/\\.+/g, '.');\n  }\n\n  if (target.matches('.form-phone')) {\n    delSpaceForwordBack();\n    target.value = target.value.replace(/\\++/g, '+');\n    target.value = target.value.replace(/\\-+/g, '-');\n    target.value = target.value.replace(/\\(+/g, '(');\n    target.value = target.value.replace(/\\)+/g, ')');\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rebildFilds);\n\n//# sourceURL=webpack://landing/./src/modules/rebildFilds.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _checkFilds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkFilds */ \"./src/modules/checkFilds.js\");\n/* harmony import */ var _rebildFilds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rebildFilds */ \"./src/modules/rebildFilds.js\");\n/* harmony import */ var _mask_phone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mask-phone */ \"./src/modules/mask-phone.js\");\n\n\n\n\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что то не то',\n      loadMessage = 'Загрузка ...',\n      successMessage = 'Ваши данные у нас ))';\n  var statusMessage = document.createElement('div');\n  statusMessage.classList.add('animate__animated');\n  statusMessage.style.cssText = \"\\n    font-size: 2rem;\\n    background-color: steelblue;\\n    width: 230px;\\n    padding: 10px;\\n    border: 2px solid burlywood;\\n    border-radius: 25px;\\n    margin: 10px auto;\\n  \"; //запрос на сервер\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: \"POST\",\n      headers: {\n        'contant-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  }; //отчистка input\n\n\n  var clearInputs = function clearInputs(inputs) {\n    inputs.forEach(function (item) {\n      item.value = '';\n      item.classList.remove('success');\n      item.classList.remove('error');\n    });\n  }; //убирать сообшение\n\n\n  var closeMessage = function closeMessage() {\n    var popup = document.querySelector('.popup');\n    popup.style.display = 'none';\n    statusMessage.remove();\n  }; //работа по формам\n\n\n  var workForm = function workForm(idForm) {\n    var form = document.getElementById(idForm),\n        inputsForm = form.querySelectorAll('input');\n    inputsForm.forEach(function (input) {\n      input.addEventListener('input', function (event) {\n        (0,_checkFilds__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(event.target);\n      });\n      input.addEventListener('blur', _rebildFilds__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    });\n    (0,_mask_phone__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.form-phone');\n    form.addEventListener('submit', function (event) {\n      var target = event.target,\n          targetInput = target.querySelectorAll('input');\n      event.preventDefault();\n\n      var checkInputs = function checkInputs() {\n        var result = true;\n        targetInput.forEach(function (item) {\n          if (item.value === '') {\n            result = false;\n            return;\n          }\n\n          if (item.classList.contains('error')) {\n            result = false;\n            return;\n          }\n        });\n        return result;\n      };\n\n      if (checkInputs()) {\n        target.appendChild(statusMessage);\n        statusMessage.classList.add('animate__backInRight');\n        statusMessage.textContent = loadMessage;\n        var formData = new FormData(target);\n        var body = {};\n        formData.forEach(function (item, key) {\n          body[key] = item;\n        }); //Если все гуд\n\n        var successResolve = function successResolve() {\n          statusMessage.style.display = 'block';\n          statusMessage.textContent = successMessage;\n          clearInputs(targetInput);\n          setTimeout(closeMessage, 3000);\n        }; //Если ошибка\n\n\n        var errorResolve = function errorResolve() {\n          statusMessage.style.display = 'block';\n          successMessage.textContent = errorMessage;\n          clearInputs(targetInput);\n          setTimeout(closeMessage, 3000);\n        };\n\n        postData(body).then(function (response) {\n          if (response.status !== 200) {\n            throw new Error('status not 200');\n          }\n\n          successResolve();\n        })[\"catch\"](function (error) {\n          errorResolve();\n          console.log(error);\n        });\n      }\n    });\n  };\n\n  workForm('form1');\n  workForm('form2');\n  workForm('form3');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://landing/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var sliders = document.querySelectorAll('.portfolio-item'),\n      dot = document.querySelectorAll('.dot'),\n      sliderContent = document.querySelector('.portfolio-content');\n  var currentSlide = 0,\n      interval;\n\n  var prevSlide = function prevSlide(item, ind, strClass) {\n    item[ind].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(item, ind, strClass) {\n    item[ind].classList.add(strClass);\n  };\n\n  var autoPlay = function autoPlay() {\n    prevSlide(sliders, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= sliders.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(sliders, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1500;\n    interval = setInterval(autoPlay, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  sliderContent.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.portfolio-btn, .dot')) {\n      return;\n    }\n\n    prevSlide(sliders, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (item, ind) {\n        if (item === target) {\n          currentSlide = ind;\n        }\n      });\n    }\n\n    if (currentSlide >= sliders.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = sliders.length - 1;\n    }\n\n    nextSlide(sliders, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  });\n  sliderContent.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  sliderContent.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      startSlide();\n    }\n  });\n  startSlide(1500);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://landing/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header'),\n      tab = tabHeader.querySelectorAll('.service-header-tab'),\n      tabContent = document.querySelectorAll('.service-tab');\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        tab[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (e) {\n    var target = e.target;\n    target = target.closest('.service-header-tab');\n\n    if (target) {\n      tab.forEach(function (item, ind) {\n        if (item === target) {\n          toggleTabContent(ind);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://landing/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var menu = document.querySelector('menu');\n\n  var handlerMenu = function handlerMenu() {\n    menu.classList.toggle('active-menu');\n  };\n\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.matches('ul>li>a, .close-btn') || target.closest('.menu')) {\n      handlerMenu();\n    } else {\n      target = target.closest('menu');\n\n      if (!target && menu.classList.contains('active-menu')) {\n        handlerMenu();\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://landing/./src/modules/toggleMenu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;