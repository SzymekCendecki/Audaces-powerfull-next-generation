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


var namesMan = ["Wortigern", "Gintor", "Hegel", "Derig", "Diggramon", "Zengowetoryk", "Deggetm", "Zigamon", "Birduk", "Ardenor", "Winterks", "Joluntik", "Menigor", "Oltis", "Kurdir"];

var namesWomen = ["Wortigerna", "Hejacynta", "Dejawina", "Ludiniam", "Keoburna", "Leokamina", "Erminia", "Xynenda", "Fejmira", "Apsurginis", "Wicynia", "Jermodernia", "Sertyksa"];

var races = ["człowiek", "półork", "ork", "półelf", "elf", "krasnolud", "gnom", "niziołek", "goblin", "trol", "półolbrzym"];

var occupation = ["wojownik", "złoczyńca", "czarodziej"];
var sex = ["kobieta", "mężczyzna", "nie wiadomo"];
var tattoo = ["brak", "więzienne", "plemienne", "dziwne"];

var equipWeapon = ["sztylet", "drew. pałka", "krótki miecz", "szabla", "włócznia", "proca", "łuk"];
var equipArmor = ["przeszywanica", "zbroja skórzana", "zbroja ćwiekowana"];
var equipShield = ["puklerz", "mała tarcza drew.", "mała tarcza metal."];
var equipOther = ["kostur", "mieszek", "torba podróżna", "sakwa", "plecak", "manierka", "sagan", "koc", "tuba na perg.", "pęk piór do pis.", "pergaminy 5szt.", "zwykłe ubranie", "fikuśna czapka", "płaszcz", "skórzany pas", "igły i nici", "derka", "namiot", "drewniana miska", "drewniana łyżka", "pochodnia", "lampa oliwna", "kaganek", "lina 5m", "hubka i krzesiwo"];

var skillsWarrior = ["szt. przetrwania", "dyscyplina", "dowodzenie", "uderzenie tarczą", "jeździectwo", "sztylet", "krótki miecz", "szabla", "włócznia", "łuk", "puklerz", "mała tarcza drew.", "mała tarcza metal."];

var skillsCriminal = ["trucizny", "wspinaczka", "aktorstwo", "akrobatyka", "pułapki", "skradanie się", "kradzież", "uniki", "blefowanie", "drew. pałka"];

var skillsWizard = ["pisanie i czytanie", "przyw./odp. demona", "wróżbiarstwo", "leczenie ran", "rzuczanie czarów", "tworz. eliksirów", "tworz.mag. przedm.", "tworzenie maści", "tworzenie runów", "astrologia", "zielarstwo"];

//indexes: 0-force, 1-strength, 2-dexterity, 3-ntelligence, 4-charisma
var warrior = [5, 5, 0, 0, 0];
var criminal = [0, 0, 10, 0, 0];
var wizard = [0, 0, 0, 5, 5];

var human = [0, 0, 0, 0, 0];
var halfOrc = [3, 3, 0, -3, -3];
var orc = [5, 5, 0, -5, -5];
var halfElv = [-3, -3, 0, 3, 3];
var elv = [-5, -5, 0, 5, 5];
var dwarf = [4, 4, 0, -2, -3];
var gnome = [-2, -2, 3, 3, 0];
var halfling = [-3, 0, 6, 0, 0];
var goblin = [2, -2, 4, 0, -4];
var troll = [2, 0, 0, -2, -2];
var semiGiant = [7, 7, -5, -3, 0];

var sumPoints = [0, 0, 0, 0, 0];
var features = ['siła', 'wytrzym.', 'zręczność', 'inteligencja', 'charyzma'];

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

var toFirstMenu = function toFirstMenu() {
	info.classList.remove('displayNone');
	licence.classList.remove('displayNone');
	tutorial.classList.remove('displayNone');
	newGame.classList.remove('displayNone');

	gameTitle.classList.add('displayNone');
	gameSubTitle.classList.add('displayNone');

	document.querySelector('.progress').classList.add('displayNone');
};

setTimeout(function () {
	return toFirstMenu();
}, 3000);

var newP = function newP(data) {
	var newP = document.createElement("p");
	var newContent = document.createTextNode(data);
	newP.appendChild(newContent);
	newP.classList.add("pStyles");
	mainContainer.appendChild(newP);
};

info.addEventListener("click", function () {
	mainContainer.innerHTML = '';
	fetch(path + 'info.json').then(function (response) {
		return response.json();
	}).then(function (data) {
		newP(data.info);
	}).catch(function (error) {
		return console.error(error);
	});
});

licence.addEventListener("click", function () {
	mainContainer.innerHTML = '';
	fetch(path + 'licence.json').then(function (response) {
		return response.json();
	}).then(function (data) {
		newP(data.licence);
	}).catch(function (error) {
		return console.error(error);
	});
});

tutorial.addEventListener("click", function () {
	mainContainer.innerHTML = '';
	fetch(path + 'tutorial.json').then(function (response) {
		return response.json();
	}).then(function (data) {
		newP(data.tutorial);
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

randomHero.addEventListener("click", function () {
	console.log("działa");
});

createHero.addEventListener("click", function () {
	console.log("działa");
});

/***/ })
/******/ ]);