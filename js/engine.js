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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var intro = __webpack_require__(2);
var heroCreator = __webpack_require__(3);

document.addEventListener("DOMContentLoaded", function () {
  $("#info, #licence, #tutorial, #game, #mainDescription").hide();
  $("#randomHero, #manualHero").hide();
  intro.intro();
  heroCreator.heroCreator();
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener("DOMContentLoaded", function () {

  module.exports.intro = function () {
    $.ajax({
      url: 'https://szymekcendecki.github.io/Audaces-powerfull-next-generation/jsonFiles/intro.json',
      data: {
        format: 'json'
      },
      error: function error() {
        console.log("coś nie bangla...");
      },
      dataType: 'json',
      success: function success(data) {
        $("#prepare").append(data.intro[0].prepare);
      },
      type: 'GET'
    });

    var numbers = 0;
    var id = setInterval(frame, 40);

    function frame() {
      if (numbers == 100) {

        clearInterval(id);
        $("#prepare, #counter").remove();

        setTimeout(function () {
          $.ajax({
            url: 'https://szymekcendecki.github.io/Audaces-powerfull-next-generation/jsonFiles/intro.json',
            data: {
              format: 'json'
            },
            error: function error() {
              console.log("coś nie bangla...");
            },
            dataType: 'json',
            success: function success(data) {
              $(".studioName").append(data.intro[0].studioName);
              $(".maxim").append(data.intro[0].maxim);
            },
            type: 'GET'
          });
        }, 500);

        setTimeout(function () {
          $.ajax({
            url: 'https://szymekcendecki.github.io/Audaces-powerfull-next-generation/jsonFiles/intro.json',
            data: {
              format: 'json'
            },
            error: function error() {
              console.log("coś nie bangla...");
            },
            dataType: 'json',
            success: function success(data) {
              $(".studioName, .maxim").remove();
              $(".title").append(data.intro[0].title);
              $(".subTitle").append(data.intro[0].subTitle);
            },
            type: 'GET'
          });
        }, 10000);
      } else {
        numbers++;
        $("#counter").empty().append(numbers + "%");
      }
    }

    setTimeout(function () {
      $(".title, .subTitle").remove();
      $("#info, #licence, #tutorial, #game, #mainDescription").show();
      $.ajax({
        url: 'https://szymekcendecki.github.io/Audaces-powerfull-next-generation/jsonFiles/intro.json',
        data: {
          format: 'json'
        },
        error: function error() {
          console.log("coś nie bangla...");
        },
        dataType: 'json',
        success: function success(data) {

          $("#mainDescription").empty().append(data.menu[0].helloText);
        },
        type: 'GET'
      });
    }, 24000);

    $("#info").on("click", function () {
      $.ajax({
        url: 'https://szymekcendecki.github.io/Audaces-powerfull-next-generation/jsonFiles/intro.json',
        data: {
          format: 'json'
        },
        error: function error() {
          console.log("coś nie bangla...");
        },
        dataType: 'json',
        success: function success(data) {

          $("#mainDescription").empty().append(data.menu[0].info);
        },
        type: 'GET'
      });
    });

    $("#licence").on("click", function () {
      $.ajax({
        url: 'https://szymekcendecki.github.io/Audaces-powerfull-next-generation/jsonFiles/intro.json',
        data: {
          format: 'json'
        },
        error: function error() {
          console.log("coś nie bangla...");
        },
        dataType: 'json',
        success: function success(data) {

          $("#mainDescription").empty().append(data.menu[0].licence);
        },
        type: 'GET'
      });
    });

    $("#tutorial").on("click", function () {
      $.ajax({
        url: 'https://szymekcendecki.github.io/Audaces-powerfull-next-generation/jsonFiles/intro.json',
        data: {
          format: 'json'
        },
        error: function error() {
          console.log("coś nie bangla...");
        },
        dataType: 'json',
        success: function success(data) {

          $("#mainDescription").empty().append(data.menu[0].tutorial);
        },
        type: 'GET'
      });
    });
  };
}); //koniec DOMContentLoaded

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener("DOMContentLoaded", function () {

	module.exports.heroCreator = function () {
		$("#game").on("click", function () {
			$("#info, #licence, #tutorial, #game").hide();
			$("#randomHero, #manualHero").show();
			$.ajax({
				url: 'https://szymekcendecki.github.io/Audaces-powerfull-next-generation/jsonFiles/heroCreator.json',
				data: {
					format: 'json'
				},
				error: function error() {
					console.log("coś nie bangla...");
				},
				dataType: 'json',
				success: function success(data) {
					$("#mainDescription").empty().append(data.heroCreator[0].firstText);
				},
				type: 'GET'
			});
		});
	};
});

/***/ })
/******/ ]);