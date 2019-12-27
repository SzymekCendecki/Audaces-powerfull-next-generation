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
	var rndForce = Math.round(Math.random() * 50);
	randomPoints.splice(0, 1, rndForce);
	var rndStrength = Math.round(Math.random() * 50);
	randomPoints.splice(1, 1, rndStrength);
	var rndDexterity = Math.round(Math.random() * 50);
	randomPoints.splice(2, 1, rndDexterity);
	var rndIntelligence = Math.round(Math.random() * 50);
	randomPoints.splice(3, 1, rndIntelligence);
	var rndCharisma = Math.round(Math.random() * 50);
	randomPoints.splice(4, 1, rndCharisma);

	console.log(randomPoints);
};

randomHero.addEventListener("click", function () {
	var randomSex = _arrays.sex[Math.floor(Math.random() * _arrays.sex.length)];
	hero.splice(1, 1, randomSex);

	var randomName = function randomName(randomSex) {
		switch (randomSex) {
			case "mężczyzna":
				var rndNameMan = _arrays.namesMan[Math.floor(Math.random() * _arrays.namesMan.length)];
				hero.splice(0, 1, rndNameMan);
				break;

			case "kobieta":
				var rndNameWomen = _arrays.namesWomen[Math.floor(Math.random() * _arrays.namesWomen.length)];
				hero.splice(0, 1, rndNameWomen);
				break;

			case "nie wiadomo":
				var allNames = _arrays.namesMan.concat(_arrays.namesWomen);
				var rndNameOther = allNames[Math.floor(Math.random() * allNames.length)];
				hero.splice(0, 1, rndNameOther);
		}
	};

	randomName(hero[1]);

	var randomRace = _arrays.races[Math.floor(Math.random() * _arrays.races.length)];
	hero.splice(2, 1, randomRace);

	var randomOccupation = _arrays.occupation[Math.floor(Math.random() * _arrays.occupation.length)];
	hero.splice(3, 1, randomOccupation);

	rndPoints();

	var checkOccupation = function checkOccupation(race, occupation) {
		if (occupation == "wojownik") {
			var allForce = _arrays.warrior[0] + race[0] + randomPoints[0];
			var allStrenght = _arrays.warrior[1] + race[1] + randomPoints[1];
			var allDexterity = _arrays.warrior[2] + race[2] + randomPoints[2];
			var allIntelligence = _arrays.warrior[3] + race[3] + randomPoints[3];
			var allCharisma = _arrays.warrior[4] + race[4] + randomPoints[4];

			hero.splice(4, 1, allForce);
			hero.splice(5, 1, allStrenght);
			hero.splice(6, 1, allDexterity);
			hero.splice(7, 1, allIntelligence);
			hero.splice(8, 1, allCharisma);
		} else if (occupation == "złoczyńca") {
			var _allForce = _arrays.criminal[0] + race[0] + randomPoints[0];
			var _allStrenght = _arrays.criminal[1] + race[1] + randomPoints[1];
			var _allDexterity = _arrays.criminal[2] + race[2] + randomPoints[2];
			var _allIntelligence = _arrays.criminal[3] + race[3] + randomPoints[3];
			var _allCharisma = _arrays.criminal[4] + race[4] + randomPoints[4];

			hero.splice(4, 1, _allForce);
			hero.splice(5, 1, _allStrenght);
			hero.splice(6, 1, _allDexterity);
			hero.splice(7, 1, _allIntelligence);
			hero.splice(8, 1, _allCharisma);
		} else {
			var _allForce2 = _arrays.wizard[0] + race[0] + randomPoints[0];
			var _allStrenght2 = _arrays.wizard[1] + race[1] + randomPoints[1];
			var _allDexterity2 = _arrays.wizard[2] + race[2] + randomPoints[2];
			var _allIntelligence2 = _arrays.wizard[3] + race[3] + randomPoints[3];
			var _allCharisma2 = _arrays.wizard[4] + race[4] + randomPoints[4];

			hero.splice(4, 1, _allForce2);
			hero.splice(5, 1, _allStrenght2);
			hero.splice(6, 1, _allDexterity2);
			hero.splice(7, 1, _allIntelligence2);
			hero.splice(8, 1, _allCharisma2);
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

/***/ })
/******/ ]);