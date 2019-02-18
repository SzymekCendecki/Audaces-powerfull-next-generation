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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var randomHero = __webpack_require__(4);
var chooseHero = __webpack_require__(5);

document.addEventListener("DOMContentLoaded", function () {

	var namesMan = ["Wortigern", "Gintor", "Hegel", "Derig", "Diggramon", "Zengowetoryk", "Deggetm", "Zigamon", "Birduk", "Ardenor", "Winterks", "Joluntik", "Menigor", "Oltis", "Kurdir"];module.exports.namesMan = namesMan;

	var namesWomen = ["Wortigerna", "Hejacynta", "Dejawina", "Ludiniam", "Keoburna", "Leokamina", "Erminia", "Xynenda", "Fejmira", "Apsurginis", "Wicynia", "Jermodernia", "Sertyksa"];module.exports.namesWomen = namesWomen;

	var races = ["człowiek", "półork", "ork", "półelf", "elf", "krasnolud", "gnom", "niziołek", "goblin", "trol", "półolbrzym"];module.exports.races = races;

	var occupation = ["wojownik", "złoczyńca", "czarodziej"];module.exports.occupation = occupation;
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

	var sumPoints = [0, 0, 0, 0, 0];module.exports.sumPoints = sumPoints;
	var features = ['siła', 'wytrzym.', 'zręczność', 'inteligencja', 'charyzma'];module.exports.features = features;

	module.exports.heroCreator = function () {
		var Person = function () {
			function Person() {
				_classCallCheck(this, Person);
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
			}, {
				key: "setOccupation",
				value: function setOccupation(occupation) {
					this.occupation = occupation;
				}
			}, {
				key: "setOccupationPoints",
				value: function setOccupationPoints(occupationPoints) {
					this.occupationPoints = occupationPoints;
				}
			}, {
				key: "setRacePoints",
				value: function setRacePoints(racePoints) {
					this.racePoints = racePoints;
				}
			}, {
				key: "setRandomPoints",
				value: function setRandomPoints(randomPoints) {
					this.randomPoints = randomPoints;
				}
			}, {
				key: "setSummaryPoints",
				value: function setSummaryPoints(summaryPoints) {
					this.summaryPoints = summaryPoints;
				}
			}, {
				key: "setEyesColor",
				value: function setEyesColor(colorEyes) {
					this.colorEyes = colorEyes;
				}
			}, {
				key: "setHairColor",
				value: function setHairColor(colorHair) {
					this.colorHair = colorHair;
				}
			}, {
				key: "setSkinColor",
				value: function setSkinColor(colorSkin) {
					this.colorSkin = colorSkin;
				}
			}, {
				key: "setWeight",
				value: function setWeight(weight) {
					this.weight = weight;
				}
			}, {
				key: "setHeight",
				value: function setHeight(height) {
					this.height = height;
				}
			}]);

			return Person;
		}();

		//1-name, 2 - sex, 3 - race


		var hero = new Person();
		module.exports.hero = hero;

		var blacksmith = new Person("kowal", "mężczyzna", "krasnolud");
		blacksmith.setOccupation = "wojownik";
		module.exports.blacksmith = blacksmith;

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
	chooseHero.manualHero();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var intro = __webpack_require__(3);
var heroCreator = __webpack_require__(0);

document.addEventListener("DOMContentLoaded", function () {
  $("#info, #licence, #tutorial, #game, #mainDescription").hide();
  $("#randomHero, #manualHero").hide();
  $(".btnManualHero").hide();
  intro.intro();
  heroCreator.heroCreator();
});

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var heroCreator = __webpack_require__(0);

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

	function randomOccupation(table, hero) {
		var x = Math.round(Math.random() * (table.length - 1));
		var occupation = table[x];
		hero.setOccupation(occupation);
	}

	function setOccupationPoints(occupation, table, hero) {
		switch (occupation) {
			case "wojownik":
				table = heroCreator.warrior;break;
			case "czarodziej":
				table = heroCreator.wizard;break;
			case "złoczyńca":
				table = heroCreator.criminal;break;
			default:
				table = [0, 0, 0, 0, 0];
		}
		hero.setOccupationPoints(table);
	}

	function setRacePoints(race, table, hero) {
		switch (race) {
			case "człowiek":
				table = heroCreator.human;break;
			case "półork":
				table = heroCreator.halfOrc;break;
			case "ork":
				table = heroCreator.orc;break;
			case "półelf":
				table = heroCreator.halfElv;break;
			case "elf":
				table = heroCreator.elv;break;
			case "krasnolud":
				table = heroCreator.dwarf;break;
			case "gnom":
				table = heroCreator.gnome;break;
			case "niziołek":
				table = heroCreator.halfling;break;
			case "goblin":
				table = heroCreator.goblin;break;
			case "trol":
				table = heroCreator.troll;break;
			case "półolbrzym":
				table = heroCreator.semiGiant;break;
			default:
				table = [0, 0, 0, 0, 0];
		}
		hero.setRacePoints(table);
	}

	function randomPoints(hero) {
		var x1 = Math.round(Math.random() * 50);
		var x2 = Math.round(Math.random() * 50);
		var x3 = Math.round(Math.random() * 50);
		var x4 = Math.round(Math.random() * 50);
		var x5 = Math.round(Math.random() * 50);
		var randomPoints = [x1, x2, x3, x4, x5];
		hero.setRandomPoints(randomPoints);
	}

	function summaryPoints(hero, tab, tab2) {
		var element = document.getElementById('summaryPoints');
		var fragment = document.createDocumentFragment();

		for (var i = 0; i < hero.racePoints.length && i < hero.occupationPoints.length && i < hero.randomPoints.length; i++) {
			var x = hero.racePoints[i] + hero.occupationPoints[i] + hero.randomPoints[i];
			tab.splice(i, 1, x);
		}

		hero.setSummaryPoints(tab);

		for (var j = 0; j < tab.length && j < tab2.length; j++) {
			var p = document.createElement('p');
			p.textContent = tab2[j] + " " + tab[j];
			fragment.appendChild(p);
		}
		element.appendChild(fragment);
	}

	function randomEyesColor(hero) {
		var eyeColor = [];
		var a = Math.round(Math.random() * 255);
		var b = Math.round(Math.random() * 255);
		var c = Math.round(Math.random() * 255);
		eyeColor.splice(0, 1, a);
		eyeColor.splice(1, 1, b);
		eyeColor.splice(2, 1, c);
		hero.setEyesColor(eyeColor);
	}

	function randomHairColor(hero) {
		var hairColor = [];
		var a = Math.round(Math.random() * 255);
		var b = Math.round(Math.random() * 255);
		var c = Math.round(Math.random() * 255);
		hairColor.splice(0, 1, a);
		hairColor.splice(1, 1, b);
		hairColor.splice(2, 1, c);
		hero.setHairColor(hairColor);
	}

	function randomSkinColor(hero) {
		var skinColor = [];
		var a = Math.round(Math.random() * 255);
		var b = Math.round(Math.random() * 255);
		var c = Math.round(Math.random() * 255);
		skinColor.splice(0, 1, a);
		skinColor.splice(1, 1, b);
		skinColor.splice(2, 1, c);
		hero.setSkinColor(skinColor);
	}

	function randomWeight(hero) {
		var weight = 0;
		switch (hero.race) {
			case "człowiek":
				weight = Math.round(Math.random() * 80 + 40);break;
			case "półork":
				weight = Math.round(Math.random() * 90 + 50);break;
			case "ork":
				weight = Math.round(Math.random() * 100 + 80);break;
			case "półelf":
				weight = Math.round(Math.random() * 60 + 40);break;
			case "elf":
				weight = Math.round(Math.random() * 50 + 40);break;
			case "krasnolud":
				weight = Math.round(Math.random() * 30 + 70);break;
			case "gnom":
				weight = Math.round(Math.random() * 20 + 50);break;
			case "niziołek":
				weight = Math.round(Math.random() * 40 + 60);break;
			case "goblin":
				weight = Math.round(Math.random() * 40 + 80);break;
			case "trol":
				weight = Math.round(Math.random() * 60 + 100);break;
			case "półolbrzym":
				weight = Math.round(Math.random() * 90 + 210);break;
		}
		hero.setWeight(weight);
	}

	function randomHeight(hero) {
		var height = 0;
		switch (hero.race) {
			case "człowiek":
				height = Math.round(Math.random() * 60 + 150);break;
			case "półork":
				height = Math.round(Math.random() * 50 + 170);break;
			case "ork":
				height = Math.round(Math.random() * 70 + 170);break;
			case "półelf":
				height = Math.round(Math.random() * 45 + 165);break;
			case "elf":
				height = Math.round(Math.random() * 30 + 180);break;
			case "krasnolud":
				height = Math.round(Math.random() * 45 + 100);break;
			case "gnom":
				height = Math.round(Math.random() * 50 + 90);break;
			case "niziołek":
				height = Math.round(Math.random() * 45 + 105);break;
			case "goblin":
				height = Math.round(Math.random() * 40 + 80);break;
			case "trol":
				height = Math.round(Math.random() * 70 + 190);break;
			case "półolbrzym":
				height = Math.round(Math.random() * 60 + 260);break;
		}
		hero.setHeight(height);
	}

	module.exports.randomHero = function () {

		$("#randomHero").on("click", function () {
			$(".btnManualHero").remove(".btnManualHero");

			randomSex(heroCreator.sex, heroCreator.hero);
			randomName(heroCreator.namesMan, heroCreator.namesWomen, heroCreator.hero);
			randomRace(heroCreator.races, heroCreator.hero);
			randomOccupation(heroCreator.occupation, heroCreator.hero);
			setOccupationPoints(heroCreator.hero.occupation, heroCreator.occupationPoints, heroCreator.hero);
			setRacePoints(heroCreator.hero.race, heroCreator.racePoints, heroCreator.hero);
			randomPoints(heroCreator.hero);
			randomEyesColor(heroCreator.hero);
			randomHairColor(heroCreator.hero);
			randomSkinColor(heroCreator.hero);
			randomWeight(heroCreator.hero);
			randomHeight(heroCreator.hero);

			$("#mainDescription").empty().append("<p class='heroRandom'>imi\u0119</p><p class='heroRandom'>" + heroCreator.hero.name + "</p><p class='heroRandom'>p\u0142e\u0107</p><p class='heroRandom'>" + heroCreator.hero.sex + "</p><p class='heroRandom'>rasa</p><p class='heroRandom'>" + heroCreator.hero.race + "</p><p class='heroRandom'>profesja</p><p class='heroRandom'>" + heroCreator.hero.occupation + "</p><p class='heroRandom'>kolor oczu</p><p id='eyesColor' class='heroRandom'></p><p class='heroRandom'>kolor w\u0142os\xF3w</p><p id='hairColor' class='heroRandom'></p><p class='heroRandom'>kolor sk\xF3ry</p><p id='skinColor' class='heroRandom'></p><p class='heroRandom'>waga</p><p class='heroRandom'>" + heroCreator.hero.weight + " kg</p><p class='heroRandom'>wzrost</p><p class='heroRandom'>" + heroCreator.hero.height + " cm</p><p class='heroRandom'>punkty cech</p><p id=\"summaryPoints\" class='heroRandom'></p>");

			summaryPoints(heroCreator.hero, heroCreator.sumPoints, heroCreator.features);

			var x1 = heroCreator.hero.colorEyes[0];
			var x2 = heroCreator.hero.colorEyes[1];
			var x3 = heroCreator.hero.colorEyes[2];

			var x4 = heroCreator.hero.colorHair[0];
			var x5 = heroCreator.hero.colorHair[1];
			var x6 = heroCreator.hero.colorHair[2];

			var x7 = heroCreator.hero.colorSkin[0];
			var x8 = heroCreator.hero.colorSkin[1];
			var x9 = heroCreator.hero.colorSkin[2];
			$("#eyesColor").css("background-color", "rgb(" + x1 + ", " + x2 + ", " + x3 + ")");
			$("#hairColor").css("background-color", "rgb(" + x4 + ", " + x5 + ", " + x6 + ")");
			$("#skinColor").css("background-color", "rgb(" + x7 + ", " + x8 + ", " + x9 + ")");
		});
	};
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var heroCreator = __webpack_require__(0);

document.addEventListener("DOMContentLoaded", function () {

    module.exports.manualHero = function () {
        $("#manualHero").on("click", function () {

            if (document.querySelectorAll(".btnManualHero").length > 0) {
                document.querySelectorAll(".btnManualHero")[0].remove();
            }

            heroCreator.hero.setSex("wybierz");
            heroCreator.hero.setName("wybierz");
            heroCreator.hero.setRace("wybierz");
            heroCreator.hero.setOccupation("wybierz");
            heroCreator.hero.setOccupationPoints([0, 0, 0, 0, 0]);
            heroCreator.hero.setRacePoints([0, 0, 0, 0, 0]);
            heroCreator.hero.setRandomPoints([0, 0, 0, 0, 0]);
            heroCreator.hero.setSummaryPoints([0, 0, 0, 0, 0]);
            heroCreator.hero.setEyesColor("wybierz");
            heroCreator.hero.setHairColor("wybierz");
            heroCreator.hero.setSkinColor("wybierz");
            heroCreator.hero.setWeight("wybierz");
            heroCreator.hero.setHeight("wybierz");

            $("#mainDescription").empty();
            $("nav").append("\n            <div class='btnManualHero'>\n                <button id='name'>imi\u0119</button>\n                <button id='sex'>p\u0142e\u0107</button>\n                <button id='race'>rasa</button>\n                <button id='occupation'>profesja</button>\n                <button id='points'>punkty</button>\n                <button id='eyes'>oczy</button>\n                <button id='hair'>w\u0142osy</button>\n                <button id='skin'>sk\xF3ra</button>\n                <button id='weight'>waga</button>\n                <button id='height'>wzrost</button>\n                <button id='allChooses'>info</button>\n                <button id='hideShow'>poka\u017C</button>\n            </div>");

            $("#name, #sex, #race, #occupation, #points, #eyes, #hair, #skin, #weight, #height, #allChooses").hide();

            function hide() {
                $("#name, #sex, #race, #occupation, #points, #eyes, #hair, #skin, #weight, #height, #allChooses").slideUp();
                $("#hideShow").empty().append("pokaż");
            }

            function show() {
                $("#name, #sex, #race, #occupation, #points, #eyes, #hair, #skin, #weight, #height, #allChooses").slideDown();
                $("#hideShow").empty().append("ukryj");
            }

            $("#hideShow").on("click", function () {
                if ($("#hideShow").text() === "ukryj") {
                    hide();
                } else {
                    show();
                }
            });

            function summaryPoints(hero, tab, tab2) {
                var element = document.getElementById('summaryPoints');
                var fragment = document.createDocumentFragment();

                for (var i = 0; i < hero.racePoints.length && i < hero.occupationPoints.length && i < hero.randomPoints.length; i++) {
                    var x = hero.racePoints[i] + hero.occupationPoints[i] + hero.randomPoints[i];
                    tab.splice(i, 1, x);
                }

                hero.setSummaryPoints(tab);

                for (var j = 0; j < tab.length && j < tab2.length; j++) {
                    var p = document.createElement('p');
                    p.textContent = tab2[j] + " " + tab[j];
                    fragment.appendChild(p);
                }
                element.appendChild(fragment);
            }

            //wybór imienia
            $("#name").on("click", function () {
                hide();
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
                        $("#mainDescription").empty().append(data.heroCreator[0].name);
                        $("#acceptName").on("click", function () {
                            var name = $("#nameForInput").val().replace(/\d/g, '');
                            if (name == "") {
                                $("#alerts").empty().append(data.heroCreator[0].warningName);
                                setTimeout(function () {
                                    $("#alerts").empty();
                                }, 3000);
                            } else {
                                heroCreator.hero.setName(name);
                                $("#alerts").empty().append(data.heroCreator[0].acceptName);
                                setTimeout(function () {
                                    $("#alerts").empty();
                                }, 3000);
                            }
                        });
                    },
                    type: 'GET'
                });
            });

            //przycisk info
            $("#allChooses").on("click", function () {
                hide();
                $("#mainDescription").empty().append("\n                <p class='heroRandom'>imi\u0119</p><p class='heroRandom'>" + heroCreator.hero.name + "</p>\n                <p class='heroRandom'>p\u0142e\u0107</p><p class='heroRandom'>" + heroCreator.hero.sex + "</p>\n                <p class='heroRandom'>rasa</p><p class='heroRandom'>" + heroCreator.hero.race + "</p>\n                <p class='heroRandom'>profesja</p><p class='heroRandom'>" + heroCreator.hero.occupation + "</p>\n                <p class='heroRandom'>kolor oczu</p><p id='eyesColor' class='heroRandom'></p>\n                <p class='heroRandom'>kolor w\u0142os\xF3w</p><p id='hairColor' class='heroRandom'></p>\n                <p class='heroRandom'>kolor sk\xF3ry</p><p id='skinColor' class='heroRandom'></p>\n                <p class='heroRandom'>waga</p><p class='heroRandom'>" + heroCreator.hero.weight + " kg</p>\n                <p class='heroRandom'>wzrost</p><p class='heroRandom'>" + heroCreator.hero.height + " cm</p>\n                <p class='heroRandom'>punkty cech</p><p id=\"summaryPoints\" class='heroRandom'></p>");

                if (heroCreator.hero.colorEyes === "wybierz") {
                    $("#eyesColor").empty().append("wybierz");
                } else {
                    var x1 = heroCreator.hero.colorEyes[0];
                    var x2 = heroCreator.hero.colorEyes[1];
                    var x3 = heroCreator.hero.colorEyes[2];
                    $("#eyesColor").css("background-color", "rgb(" + x1 + ", " + x2 + ", " + x3 + ")");
                }

                if (heroCreator.hero.colorHair === "wybierz") {
                    $("#hairColor").empty().append("wybierz");
                } else {
                    var x4 = heroCreator.hero.colorHair[0];
                    var x5 = heroCreator.hero.colorHair[1];
                    var x6 = heroCreator.hero.colorHair[2];
                    $("#hairColor").empty().css("background-color", "rgb(" + x4 + ", " + x5 + ", " + x6 + ")");
                }

                if (heroCreator.hero.colorSkin === "wybierz") {
                    $("#skinColor").empty().append("wybierz");
                } else {
                    var x7 = heroCreator.hero.colorSkin[0];
                    var x8 = heroCreator.hero.colorSkin[1];
                    var x9 = heroCreator.hero.colorSkin[2];
                    $("#skinColor").empty().css("background-color", "rgb(" + x7 + ", " + x8 + ", " + x9 + ")");
                }
                summaryPoints(heroCreator.hero, heroCreator.sumPoints, heroCreator.features);
                console.log(heroCreator.hero);
            });
        });
    };
});

/***/ })
/******/ ]);