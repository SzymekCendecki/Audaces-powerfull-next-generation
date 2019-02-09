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


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var randomHero = __webpack_require__(4);
document.addEventListener("DOMContentLoaded", function () {

	var namesMan = ["Wortigern", "Gintor", "Hegel", "Derig", "Diggramon", "Zengowetoryk", "Deggetm", "Zigamon", "Birduk", "Ardenor", "Winterks", "Joluntik", "Menigor", "Oltis", "Kurdir"];module.exports.namesMan = namesMan;

	var namesWomen = ["Wortigerna", "Hejacynta", "Dejawina", "Ludiniam", "Keoburna", "Leokamina", "Erminia", "Xynenda", "Fejmira", "Apsurginis", "Wicynia", "Jermodernia", "Sertyksa"];module.exports.namesWomen = namesWomen;

	var races = ["człowiek", "półork", "ork", "półelf", "elf", "krasnolud", "gnom", "niziołek", "goblin", "trol", "półolbrzym"];module.exports.races = races;

	var occupations = ["wojownik", "złoczyńca", "czarodziej"];module.exports.occupations = occupations;
	var sex = ["kobieta", "mężczyzna", "nie wiadomo"];module.exports.sex = sex;
	var tattoo = ["brak", "więzienne", "plemienne", "dziwne"];module.exports.tattoo = tattoo;

	var equipWeapon = ["sztylet", "drew. pałka", "krótki miecz", "szabla", "włócznia", "proca", "łuk"];
	var equipArmor = ["przeszywanica", "zbroja skórzana", "zbroja ćwiekowana"];
	var equipShield = ["puklerz", "mała tarcza drew.", "mała tarcza metal."];
	var equipOther = ["kostur", "mieszek", "torba podróżna", "sakwa", "plecak", "manierka", "sagan", "koc", "tuba na perg.", "pęk piór do pis.", "pergaminy 5szt.", "zwykłe ubranie", "fikuśna czapka", "płaszcz", "skórzany pas", "igły i nici", "derka", "namiot", "drewniana miska", "drewniana łyżka", "pochodnia", "lampa oliwna", "kaganek", "lina 5m", "hubka i krzesiwo"];

	var skillsWarrior = ["szt. przetrwania", "dyscyplina", "dowodzenie", "uderzenie tarczą", "jeździectwo", "sztylet", "krótki miecz", "szabla", "włócznia", "łuk", "puklerz", "mała tarcza drew.", "mała tarcza metal."];
	module.exports.skillsWarrior = skillsWarrior;

	var skillsCriminal = ["trucizny", "wspinaczka", "aktorstwo", "akrobatyka", "pułapki", "skradanie się", "kradzież", "uniki", "blefowanie", "drew. pałka"];
	module.exports.skillsCriminal = skillsCriminal;

	var skillsWizard = ["pisanie i czytanie", "przyw./odp. demona", "wróżbiarstwo", "leczenie ran", "rzuczanie czarów", "tworz. eliksirów", "tworz.mag. przedm.", "tworzenie maści", "tworzenie runów", "astrologia", "zielarstwo"];
	module.exports.skillsWizard = skillsWizard;

	//indeksy: 0-siła, 1-wytrzymałość, 2-zręczność, 3-inteligencja, 4-charyzma
	var warrior = [5, 5, 0, 0, 0];module.exports.warrior = warrior;
	var criminal = [0, 0, 10, 0, 0];module.exports.criminal = criminal;
	var wizard = [0, 0, 0, 5, 5];module.exports.wizard = wizard;

	var human = [0, 0, 0, 0, 0];module.exports.human = human;
	var halfOrc = [3, 3, 0, -3, -3];module.exports.halfOrc = halfOrc;
	var orc = [5, 5, 0, -5, -5];module.exports.orc = orc;
	var halfElv = [-3, -3, 0, 3, 3];module.exports.halfElv = halfElv;
	var elv = [-5, -5, 0, 5, 5];module.exports.elv = elv;
	var dwarf = [4, 4, 0, -2, -3];module.exports.dwarf = dwarf;
	var gnome = [-2, -2, 3, 3, 0];module.exports.gnome = gnome;
	var halfling = [-3, 0, 6, 0, 0];module.exports.halfling = halfling;
	var goblin = [2, -2, 4, 0, -4];module.exports.goblin = goblin;
	var troll = [2, 0, 0, -2, -2];module.exports.troll = troll;
	var semiGiant = [7, 7, -5, -3, 0];module.exports.semiGiant = semiGiant;

	module.exports.heroCreator = function () {
		var Person = function () {
			function Person(name, sex) {
				_classCallCheck(this, Person);

				this.name = name;
				this.sex = sex;
			}

			_createClass(Person, [{
				key: "setSex",
				value: function setSex(sex) {
					this.sex = sex;
				}
			}, {
				key: "setName",
				value: function setName(name) {
					this.name = name;
				}
			}, {
				key: "setRace",
				value: function setRace(race) {
					this.race = race;
				}
			}]);

			return Person;
		}();

		//1-name, 2 - sex, 3 - race


		var hero = new Person("brak", "brak", "brak");
		module.exports.hero = hero;

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

	randomHero.randomHero();
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var heroCreator = __webpack_require__(3);

document.addEventListener("DOMContentLoaded", function () {

	function randomName(table1, table2, hero) {
		if (heroCreator.hero.sex == "mężczyzna") {
			var x = Math.round(Math.random() * (table1.length - 1));
			var name = table1[x];
			hero.setName(name);
		} else if (heroCreator.hero.sex == "kobieta") {
			var _x = Math.round(Math.random() * (table2.length - 1));
			var _name = table2[_x];
			hero.setName(_name);
		} else {
			var table3 = table1.concat(table2);
			var _x2 = Math.round(Math.random() * (table3.length - 1));
			var _name2 = table3[_x2];
			hero.setName(_name2);
		}
	}

	function randomSex(table, hero) {
		var x = Math.round(Math.random() * (table.length - 1));
		var sex = table[x];
		hero.setSex(sex);
	}

	function randomRace(table, hero) {
		var x = Math.round(Math.random() * (table.length - 1));
		var race = table[x];
		hero.setRace(race);
	}

	module.exports.randomHero = function () {

		$("#randomHero").on("click", function () {
			randomSex(heroCreator.sex, heroCreator.hero);
			randomName(heroCreator.namesMan, heroCreator.namesWomen, heroCreator.hero);
			randomRace(heroCreator.races, heroCreator.hero);
			$("#mainDescription").empty().append("<p class='heroRandom'>imi\u0119</p><p class='heroRandom'>" + heroCreator.hero.name + "</p><p class='heroRandom'>p\u0142e\u0107</p><p class='heroRandom'>" + heroCreator.hero.sex + "</p><p class='heroRandom'>rasa</p><p class='heroRandom'>" + heroCreator.hero.race + "</p>");
		});
	};
});

/***/ })
/******/ ]);