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


var _arrays = __webpack_require__(2);

var _functions = __webpack_require__(3);

//indexs for hero
//0-name, 1-sex, 2-race, 3-occupation, 4-force, 5-strength, 6-dexterity, 7-intelligence, 8-charisma, 9-eyes color, 10-hair color, 11-skin color, 12 - tattoo, 13 - weight, 14-height

var hero = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

var skills = [];

var equip = [];

var randomPoints = [0, 0, 0, 0, 0];

var showHero = function showHero(hero) {
	var showHero = '<div class = "showHero">\n\t\t<p id=\'name\'>imi\u0119: ' + hero[0] + '</p>\n\t\t<p id=\'sex\'>p\u0142e\u0107: ' + hero[1] + '</p>\n\t\t<p id=\'race\'>rasa: ' + hero[2] + '</p>\n\t\t<p id=\'occupation\'>profesja: ' + hero[3] + '</p>\n\t\t<p id=\'force\'>si\u0142a: ' + hero[4] + '</p>\n\t\t<p id=\'strength\'>wytrzyma\u0142o\u015B\u0107: ' + hero[5] + '</p>\n\t\t<p id=\'dexterity\'>zr\u0119czno\u015B\u0107: ' + hero[6] + '</p>\n\t\t<p id=\'intelligence\'>inteligencja: ' + hero[7] + '</p>\n\t\t<p id=\'charisma\'>charyzma: ' + hero[8] + '</p>\n\t\t<p id=\'eyes\'>kolor oczu: ' + hero[9] + '</p>\n\t\t<p id=\'hair\'>kolor w\u0142os\xF3w: ' + hero[10] + '</p>\n\t\t<p id=\'skin\'>kolor sk\xF3ry: ' + hero[11] + '</p>\n\t\t<p id=\'tattoo\'>tatua\u017Ce: ' + hero[12] + '</p>\n\t\t<p id=\'weight\'>waga: ' + hero[13] + '</p>\n\t\t<p id=\'height\'>wzrost: ' + hero[14] + '</p>\n\t</div>';
	mainContainer.innerHTML = "";
	mainContainer.innerHTML = showHero;
};

var gameTitle = document.querySelector("#gameTitle");
var gameSubTitle = document.querySelector("#gameSubTitle");

var info = document.querySelector("#info");
var licence = document.querySelector("#licence");
var tutorial = document.querySelector("#tutorial");
var newGame = document.querySelector("#newGame");

var mainContainer = document.querySelector("#mainContainer");

var randomHero = document.querySelector("#randomHero");
var createHero = document.querySelector("#createHero");

var path = 'https://szymekcendecki.github.io/Audaces-powerfull-next-generation/json/';

setTimeout(function () {
	return (0, _functions.toFirstMenu)();
}, 3000);

info.addEventListener("click", function () {
	mainContainer.innerHTML = '';
	fetch(path + 'info.json').then(function (response) {
		return response.json();
	}).then(function (data) {
		(0, _functions.newP)(data.info);
	}).catch(function (error) {
		return console.error(error);
	});
});

licence.addEventListener("click", function () {
	mainContainer.innerHTML = '';
	fetch(path + 'licence.json').then(function (response) {
		return response.json();
	}).then(function (data) {
		(0, _functions.newP)(data.licence);
	}).catch(function (error) {
		return console.error(error);
	});
});

tutorial.addEventListener("click", function () {
	mainContainer.innerHTML = '';
	fetch(path + 'tutorial.json').then(function (response) {
		return response.json();
	}).then(function (data) {
		(0, _functions.newP)(data.tutorial);
	}).catch(function (error) {
		return console.error(error);
	});
});

newGame.addEventListener("click", function () {
	mainContainer.innerHTML = '';
	randomHero.classList.remove('displayNone');
	createHero.classList.remove('displayNone');
	info.classList.add("displayNone");
	licence.classList.add("displayNone");
	tutorial.classList.add("displayNone");
	newGame.classList.add("displayNone");
});

var rndPoints = function rndPoints() {
	for (var i = 0; i < 5; i++) {
		var x = Math.round(Math.random() * 50);
		randomPoints.splice(i, 1, x);
	}
};

randomHero.addEventListener("click", function () {

	(0, _functions.rndFromArray)(_arrays.sex, hero, 1);

	var randomName = function randomName(randomSex) {
		switch (randomSex) {
			case "mężczyzna":
				(0, _functions.rndFromArray)(_arrays.namesMan, hero, 0);break;
			case "kobieta":
				(0, _functions.rndFromArray)(_arrays.namesWomen, hero, 0);break;
			case "nie wiadomo":
				var allNames = _arrays.namesMan.concat(_arrays.namesWomen);(0, _functions.rndFromArray)(allNames, hero, 0);
		}
	};

	randomName(hero[1]);
	(0, _functions.rndFromArray)(_arrays.races, hero, 2);
	(0, _functions.rndFromArray)(_arrays.occupation, hero, 3);
	rndPoints();

	var allPoints = function allPoints(who, race) {
		for (var i = 0; i < 5; i++) {
			var z = who[i] + race[i] + randomPoints[i];
			hero.splice(i + 4, 1, z);
		}
	};

	var checkOccupation = function checkOccupation(race, occupation) {
		if (occupation == "wojownik") {
			allPoints(_arrays.warrior, race);
		} else if (occupation == "złoczyńca") {
			allPoints(_arrays.criminal, race);
		} else {
			allPoints(_arrays.wizard, race);
		}
	};

	var addPoints = function addPoints() {
		switch (hero[2]) {
			case "człowiek":
				checkOccupation(_arrays.human, hero[3]);break;
			case "półork":
				checkOccupation(_arrays.halfOrc, hero[3]);break;
			case "ork":
				checkOccupation(_arrays.orc, hero[3]);break;
			case "półelf":
				checkOccupation(_arrays.halfElv, hero[3]);break;
			case "elf":
				checkOccupation(_arrays.elv, hero[3]);break;
			case "krasnolud":
				checkOccupation(_arrays.dwarf, hero[3]);break;
			case "gnom":
				checkOccupation(_arrays.gnome, hero[3]);break;
			case "niziołek":
				checkOccupation(_arrays.halfling, hero[3]);break;
			case "goblin":
				checkOccupation(_arrays.goblin, hero[3]);break;
			case "trol":
				checkOccupation(_arrays.troll, hero[3]);break;
			case "półolbrzym":
				checkOccupation(_arrays.semiGiant, hero[3]);break;
		}
	};

	addPoints();
	showHero(hero);
});

createHero.addEventListener("click", function () {
	console.log("działa");
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var namesMan = exports.namesMan = ["Wortigern", "Gintor", "Hegel", "Derig", "Diggramon", "Zengowetoryk", "Deggetm", "Zigamon", "Birduk", "Ardenor", "Winterks", "Joluntik", "Menigor", "Oltis", "Kurdir"];

var namesWomen = exports.namesWomen = ["Wortigerna", "Hejacynta", "Dejawina", "Ludiniam", "Keoburna", "Leokamina", "Erminia", "Xynenda", "Fejmira", "Apsurginis", "Wicynia", "Jermodernia", "Sertyksa"];

var races = exports.races = ["człowiek", "półork", "ork", "półelf", "elf", "krasnolud", "gnom", "niziołek", "goblin", "trol", "półolbrzym"];

var occupation = exports.occupation = ["wojownik", "złoczyńca", "czarodziej"];
var sex = exports.sex = ["kobieta", "mężczyzna", "nie wiadomo"];
var tattoo = exports.tattoo = ["brak", "więzienne", "plemienne", "dziwne"];

var equipWeapon = exports.equipWeapon = ["sztylet", "drew. pałka", "krótki miecz", "szabla", "włócznia", "proca", "łuk"];
var equipArmor = exports.equipArmor = ["przeszywanica", "zbroja skórzana", "zbroja ćwiekowana"];
var equipShield = exports.equipShield = ["puklerz", "mała tarcza drew.", "mała tarcza metal."];
var equipOther = exports.equipOther = ["kostur", "mieszek", "torba podróżna", "sakwa", "plecak", "manierka", "sagan", "koc", "tuba na perg.", "pęk piór do pis.", "pergaminy 5szt.", "zwykłe ubranie", "fikuśna czapka", "płaszcz", "skórzany pas", "igły i nici", "derka", "namiot", "drewniana miska", "drewniana łyżka", "pochodnia", "lampa oliwna", "kaganek", "lina 5m", "hubka i krzesiwo"];

var skillsWarrior = exports.skillsWarrior = ["szt. przetrwania", "dyscyplina", "dowodzenie", "uderzenie tarczą", "jeździectwo", "sztylet", "krótki miecz", "szabla", "włócznia", "łuk", "puklerz", "mała tarcza drew.", "mała tarcza metal."];

var skillsCriminal = exports.skillsCriminal = ["trucizny", "wspinaczka", "aktorstwo", "akrobatyka", "pułapki", "skradanie się", "kradzież", "uniki", "blefowanie", "drew. pałka"];

var skillsWizard = exports.skillsWizard = ["pisanie i czytanie", "przyw./odp. demona", "wróżbiarstwo", "leczenie ran", "rzuczanie czarów", "tworz. eliksirów", "tworz.mag. przedm.", "tworzenie maści", "tworzenie runów", "astrologia", "zielarstwo"];

//indexes: 0-force, 1-strength, 2-dexterity, 3-intelligence, 4-charisma
var warrior = exports.warrior = [5, 5, 0, 0, 0];
var criminal = exports.criminal = [0, 0, 10, 0, 0];
var wizard = exports.wizard = [0, 0, 0, 5, 5];

var human = exports.human = [0, 0, 0, 0, 0];
var halfOrc = exports.halfOrc = [3, 3, 0, -3, -3];
var orc = exports.orc = [5, 5, 0, -5, -5];
var halfElv = exports.halfElv = [-3, -3, 0, 3, 3];
var elv = exports.elv = [-5, -5, 0, 5, 5];
var dwarf = exports.dwarf = [4, 4, 0, -2, -3];
var gnome = exports.gnome = [-2, -2, 3, 3, 0];
var halfling = exports.halfling = [-3, 0, 6, 0, 0];
var goblin = exports.goblin = [2, -2, 4, 0, -4];
var troll = exports.troll = [2, 0, 0, -2, -2];
var semiGiant = exports.semiGiant = [7, 7, -5, -3, 0];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});
var toFirstMenu = exports.toFirstMenu = function toFirstMenu() {
		info.classList.remove('displayNone');
		licence.classList.remove('displayNone');
		tutorial.classList.remove('displayNone');
		newGame.classList.remove('displayNone');

		gameTitle.classList.add('displayNone');
		gameSubTitle.classList.add('displayNone');

		document.querySelector('.progress').classList.add('displayNone');
};

var newP = exports.newP = function newP(data) {
		var newP = document.createElement("p");
		var newContent = document.createTextNode(data);
		newP.appendChild(newContent);
		newP.classList.add("pStyles");
		mainContainer.appendChild(newP);
};

var rndFromArray = exports.rndFromArray = function rndFromArray(nameArray, hero, position) {
		var draw = nameArray[Math.floor(Math.random() * nameArray.length)];
		hero.splice(position, 1, draw);
};

/***/ })
/******/ ]);