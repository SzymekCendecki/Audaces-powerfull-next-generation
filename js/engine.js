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

var newBtn = exports.newBtn = function newBtn(text, where, name) {
	var newBtn = document.createElement("button");
	var textBtn = document.createTextNode(text);
	newBtn.appendChild(textBtn);
	newBtn.setAttribute("id", name);
	where.appendChild(newBtn);
};

var newDiv = exports.newDiv = function newDiv(where, name) {
	var newDiv = document.createElement("div");
	where.appendChild(newDiv);
	newDiv.setAttribute("id", name);
};

var newInput = exports.newInput = function newInput(where, typeName, idName) {
	var newInput = document.createElement("input");
	where.appendChild(newInput);
	newInput.setAttribute("type", typeName);
	newInput.setAttribute("id", idName);
};

var rndFromArray = exports.rndFromArray = function rndFromArray(nameArray, hero, position) {
	var draw = nameArray[Math.floor(Math.random() * nameArray.length)];
	hero.splice(position, 1, draw);
};

var letsPlayGame = exports.letsPlayGame = function letsPlayGame(hero) {
	if (hero[0] !== "" && hero[1] !== "" && hero[2] !== "" && hero[3] !== "" && hero[4] !== 0 && hero[5] !== 0 && hero[6] !== 0 && hero[7] !== 0 && hero[8] !== "" && hero[9] !== "" && hero[10] !== "" && hero[11] !== "" && hero[12] !== "" && hero[13] !== "" && hero[14] !== "") {
		play.disabled = false;
		play.classList.remove("playDisabled");
		play.classList.add("playEnabled");
	}
};

var clearHero = exports.clearHero = function clearHero(hero) {
	hero.splice(0, 1, "");
	hero.splice(1, 1, "");
	hero.splice(2, 1, "");
	hero.splice(3, 1, "");
	hero.splice(4, 1, 0);
	hero.splice(5, 1, 0);
	hero.splice(6, 1, 0);
	hero.splice(7, 1, 0);
	hero.splice(8, 1, 0);
	hero.splice(9, 1, "");
	hero.splice(10, 1, "");
	hero.splice(11, 1, "");
	hero.splice(12, 1, "");
	hero.splice(13, 1, "");
	hero.splice(14, 1, "");
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _arrays = __webpack_require__(3);

var _functions = __webpack_require__(0);

var _name = __webpack_require__(4);

var _sex = __webpack_require__(5);

var _race = __webpack_require__(6);

var _occupation = __webpack_require__(7);

var _points = __webpack_require__(8);

var _characterTraits = __webpack_require__(9);

var _preview = __webpack_require__(10);

var _reset = __webpack_require__(11);

//indexs for hero
//0-name, 1-sex, 2-race, 3-occupation, 4-force, 5-strength, 6-dexterity, 7-intelligence, 8-charisma, 9-eyes color, 10-hair color, 11-skin color, 12 - tattoo, 13 - weight, 14-height

var hero = ["", "", "", "", 0, 0, 0, 0, 0, "", "", "", "", "", ""];

var skills = [];

var equip = [];

var eyesColor = ["niebieskie", "brązowe", "zielone", "szare", "czerwone"];
var hairColor = ["blond", "czarne", "rude", "kolorowe", "brak włosów"];
var skinColor = ["biała", "brązowa", "czarna", "zielona", "oliwkowa"];

var randomPoints = [0, 0, 0, 0, 0];

var showHero = function showHero(hero) {
	document.querySelector("#creatorBtns").classList.add('displayNone');
	document.querySelector("#creatorBtns").classList.remove('creatorBtnsStyles');

	var showHero = '<div class = "showHero">\n\t\t<p id=\'name\'>imi\u0119: ' + hero[0] + '</p>\n\t\t<p id=\'sex\'>p\u0142e\u0107: ' + hero[1] + '</p>\n\t\t<p id=\'race\'>rasa: ' + hero[2] + '</p>\n\t\t<p id=\'occupation\'>profesja: ' + hero[3] + '</p>\n\t\t<p id=\'force\'>si\u0142a: ' + hero[4] + '</p>\n\t\t<p id=\'strength\'>wytrzyma\u0142o\u015B\u0107: ' + hero[5] + '</p>\n\t\t<p id=\'dexterity\'>zr\u0119czno\u015B\u0107: ' + hero[6] + '</p>\n\t\t<p id=\'intelligence\'>inteligencja: ' + hero[7] + '</p>\n\t\t<p id=\'charisma\'>charyzma: ' + hero[8] + '</p>\n\t\t<p id=\'eyes\'>kolor oczu: <span id="eyesColor">' + hero[9] + '</span></p>\n\t\t<p id=\'hair\'>kolor w\u0142os\xF3w: <span id="hairColor">' + hero[10] + '</span></p>\n\t\t<p id=\'skin\'>kolor sk\xF3ry: <span id="skinColor">' + hero[11] + '</span></p>\n\t\t<p id=\'tattoo\'>tatua\u017Ce: ' + hero[12] + '</p>\n\t\t<p id=\'weight\'>waga: ' + hero[13] + ' kg</p>\n\t\t<p id=\'height\'>wzrost: ' + hero[14] + ' cm</p>\n\t</div>';

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
var play = document.querySelector("#play");

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
	play.classList.remove('displayNone');
	play.disabled = true;
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

var allPoints = function allPoints(who, race) {
	for (var i = 0; i < 5; i++) {
		var z = who[i] + race[i] + randomPoints[i];
		hero.splice(i + 4, 1, z);
	}
};

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

var randomValue = function randomValue(value1, value2, where) {
	var x = Math.round(Math.random() * value1 + value2);
	hero.splice(where, 1, x);
};

var weight = function weight(hero, where) {
	switch (hero[2]) {
		case "człowiek":
			randomValue(80, 40, where);break;
		case "półork":
			randomValue(90, 50, where);break;
		case "ork":
			randomValue(100, 80, where);break;
		case "półelf":
			randomValue(60, 40, where);break;
		case "elf":
			randomValue(50, 40, where);break;
		case "krasnolud":
			randomValue(30, 70, where);break;
		case "gnom":
			randomValue(20, 50, where);break;
		case "niziołek":
			randomValue(40, 60, where);break;
		case "goblin":
			randomValue(30, 50, where);break;
		case "trol":
			randomValue(60, 100, where);break;
		case "półolbrzym":
			randomValue(90, 210, where);break;
	}
};

var height = function height(hero, where) {
	switch (hero[2]) {
		case "człowiek":
			randomValue(60, 150, where);break;
		case "półork":
			randomValue(50, 170, where);break;
		case "ork":
			randomValue(70, 170, where);break;
		case "półelf":
			randomValue(45, 165, where);break;
		case "elf":
			randomValue(30, 180, where);break;
		case "krasnolud":
			randomValue(45, 100, where);break;
		case "gnom":
			randomValue(50, 90, where);break;
		case "niziołek":
			randomValue(45, 105, where);break;
		case "goblin":
			randomValue(40, 80, where);break;
		case "trol":
			randomValue(70, 190, where);break;
		case "półolbrzym":
			randomValue(60, 260, where);break;
	}
};

randomHero.addEventListener("click", function () {

	play.disabled = false;
	play.classList.remove("playDisabled");
	play.classList.add("playEnabled");

	(0, _functions.rndFromArray)(_arrays.sex, hero, 1);
	randomName(hero[1]);

	(0, _functions.rndFromArray)(_arrays.races, hero, 2);
	(0, _functions.rndFromArray)(_arrays.occupation, hero, 3);

	rndPoints();
	addPoints();

	(0, _functions.rndFromArray)(_arrays.tattoo, hero, 12);

	var colors = function colors(position, nameArray) {
		var draw = nameArray[Math.floor(Math.random() * nameArray.length)];
		hero.splice(position, 1, draw);
	};

	colors(9, eyesColor);
	colors(10, hairColor);
	colors(11, skinColor);

	weight(hero, 13);
	height(hero, 14);

	showHero(hero);
});

createHero.addEventListener("click", function () {

	play.disabled = true;
	play.classList.add("playDisabled");
	play.classList.remove("playEnabled");

	mainContainer.innerHTML = "";
	document.querySelector("#creatorBtns").classList.remove('displayNone');

	(0, _functions.clearHero)(hero);
});

(0, _name.chooseName)(hero);
(0, _sex.chooseSex)(hero);
(0, _race.chooseRace)(hero);
(0, _occupation.chooseOccupation)(hero);
(0, _points.choosePoints)(hero);
(0, _characterTraits.chooseCharacterTraits)(hero);
(0, _preview.preview)(hero);
(0, _reset.reset)(hero);

document.querySelector("#play").addEventListener("click", function () {

	document.querySelector("#randomHero").classList.add('displayNone');
	document.querySelector("#play").classList.add('displayNone');
	document.querySelector("#createHero").classList.add('displayNone');
	document.querySelector("#creatorBtns").classList.add('displayNone');
	document.querySelector("#mainContainer").innerHTML = "";

	fetch(path + 'introGame.json').then(function (response) {
		return response.json();
	}).then(function (data) {

		for (var i = 0; i < Object.keys(data).length; i++) {
			var _newP = document.createElement("p");
			var newContent = document.createTextNode(Object.values(data)[i]);
			_newP.appendChild(newContent);
			mainContainer.appendChild(_newP);
			_newP.classList.add("centerText");
			_newP.classList.add("pStyles");
		}
	}).catch(function (error) {
		return console.error(error);
	});
});

/***/ }),
/* 3 */
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

var skillsWarrior = exports.skillsWarrior = ["szt. przetrwania", "dyscyplina", "dowodzenie", "uderzenie tarczą", "jazda konna", "sztylet", "krótki miecz", "szabla", "włócznia", "łuk", "puklerz", "mała tarcza drew.", "mała tarcza metal."];

var skillsCriminal = exports.skillsCriminal = ["trucizny", "wspinaczka", "aktorstwo", "akrobatyka", "pułapki", "skradanie się", "kradzież", "uniki", "blefowanie", "drew. pałka"];

var skillsWizard = exports.skillsWizard = ["pisanie i czytanie", "przyw./odp. demona", "wróżbiarstwo", "leczenie ran", "rzuczanie czarów", "tworz. eliksirów", "tworz. mag. przedm.", "tworzenie maści", "tworzenie runów", "astrologia", "zielarstwo"];

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
			value: true
});
exports.chooseName = undefined;

var _functions = __webpack_require__(0);

var chooseName = exports.chooseName = function chooseName(hero) {
			document.querySelector("#name").addEventListener("click", function () {
						var showName = "<p class='labelName'>podaj imi\u0119</p>\n\t\t    <input type=\"text\" id=\"chooseName\" name=\"name\" class='fontInput'>\n\t\t    <button id=\"accept\" class=\"btnAccept\">zatwierd\u017A</button>\n\t\t    <p id=\"comment\"></p>\n\t\t";

						mainContainer.innerHTML = "";
						mainContainer.innerHTML = showName;
						(0, _functions.letsPlayGame)(hero);

						document.querySelector("#accept").addEventListener("click", function () {

									var noNumbersExpression = /^[a-zA-Z]+$/;

									var choosenName = document.getElementById("chooseName").value;
									var isValid = noNumbersExpression.test(choosenName);

									if (isValid === true) {
												hero.splice(0, 1, choosenName);
												document.querySelector("#comment").innerHTML = "";
												document.querySelector("#comment").innerHTML = "<p class='greenText'>Twoje imi\u0119 to: " + choosenName + "</p>";
									} else {
												document.querySelector("#comment").innerHTML = "";
												document.querySelector("#comment").innerHTML = "<p class='redText'>imię nie może zawierać cyfr, znaków specjalnych i białych znaków</p>";
									}
						});
			});
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.chooseSex = undefined;

var _functions = __webpack_require__(0);

var chooseSex = exports.chooseSex = function chooseSex(hero) {
	document.querySelector("#sex").addEventListener("click", function () {
		var showSex = "<p class='labelName'>wybierz p\u0142e\u0107</p>\n\t\t<button id=\"chooseMan\" class=\"btnAccept\">m\u0119\u017Cczyzna</button>\n\t\t<button id=\"chooseWomen\" class=\"btnAccept\">kobieta</button>\n\t\t<button id=\"chooseOther\" class=\"btnAccept\">nie wiadomo</button>\n\t\t<p id=\"comment\" class=\"greenText\"></p>\n\t\t";
		mainContainer.innerHTML = "";
		mainContainer.innerHTML = showSex;

		document.querySelector("#chooseMan").addEventListener("click", function () {
			hero.splice(1, 1, "mężczyzna");
			document.querySelector("#comment").innerHTML = "";
			document.querySelector("#comment").innerHTML = "wybrano mężczyznę";
			(0, _functions.letsPlayGame)(hero);
		});

		document.querySelector("#chooseWomen").addEventListener("click", function () {
			hero.splice(1, 1, "kobieta");
			document.querySelector("#comment").innerHTML = "";
			document.querySelector("#comment").innerHTML = "wybrano kobietę";
			(0, _functions.letsPlayGame)(hero);
		});

		document.querySelector("#chooseOther").addEventListener("click", function () {
			hero.splice(1, 1, "nie wiadomo");
			document.querySelector("#comment").innerHTML = "";
			document.querySelector("#comment").innerHTML = "wybrano nie określoną płeć";
			(0, _functions.letsPlayGame)(hero);
		});
	});
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.chooseRace = undefined;

var _functions = __webpack_require__(0);

var chooseRace = exports.chooseRace = function chooseRace(hero) {

	document.querySelector("#race").addEventListener("click", function () {
		var showRace = "<p class=\"labelName\">wybierz ras\u0119</p>\n\t\t<button id=\"human\" class=\"btnAccept\">cz\u0142owiek</button>\n\t\t<button id=\"halfOrc\" class=\"btnAccept\">p\xF3\u0142ork</button>\n\t\t<button id=\"orc\" class=\"btnAccept\">ork</button>\n\t\t<button id=\"halfElv\" class=\"btnAccept\">p\xF3\u0142elf</button>\n\t\t<button id=\"elv\" class=\"btnAccept\">elf</button>\n\t\t<button id=\"dwarf\" class=\"btnAccept\">krasnolud</button>\n\t\t<button id=\"gnome\" class=\"btnAccept\">gnom</button>\n\t\t<button id=\"halfling\" class=\"btnAccept\">nizio\u0142ek</button>\n\t\t<button id=\"goblin\" class=\"btnAccept\">goblin</button>\n\t\t<button id=\"troll\" class=\"btnAccept\">trol</button>\n\t\t<button id=\"semiGiant\" class=\"btnAccept\">p\xF3\u0142olbrzym</button>\n\t\t<p id=\"comment\" class=\"greenText\"></p>\n\t\t";
		mainContainer.innerHTML = "";
		mainContainer.innerHTML = showRace;

		var xxx = function xxx(x, y) {
			hero.splice(2, 1, x);
			hero.splice(13, 1, "");
			hero.splice(14, 1, "");
			document.querySelector("#comment").innerHTML = "";
			document.querySelector("#comment").innerHTML = "wybrano " + y;
		};

		document.querySelector("#human").addEventListener("click", function () {
			xxx("człowiek", "człowieka");
			(0, _functions.letsPlayGame)(hero);
		});
		document.querySelector("#halfOrc").addEventListener("click", function () {
			xxx("półork", "półorka");
			(0, _functions.letsPlayGame)(hero);
		});
		document.querySelector("#orc").addEventListener("click", function () {
			xxx("ork", "orka");
			(0, _functions.letsPlayGame)(hero);
		});
		document.querySelector("#halfElv").addEventListener("click", function () {
			xxx("półelf", "półelfa");
			(0, _functions.letsPlayGame)(hero);
		});
		document.querySelector("#elv").addEventListener("click", function () {
			xxx("elf", "elfa");
			(0, _functions.letsPlayGame)(hero);
		});
		document.querySelector("#dwarf").addEventListener("click", function () {
			xxx("krasnolud", "krasnoluda");
			(0, _functions.letsPlayGame)(hero);
		});
		document.querySelector("#gnome").addEventListener("click", function () {
			xxx("gnom", "gnoma");
			(0, _functions.letsPlayGame)(hero);
		});
		document.querySelector("#halfling").addEventListener("click", function () {
			xxx("niziołek", "niziołka");
			(0, _functions.letsPlayGame)(hero);
		});
		document.querySelector("#goblin").addEventListener("click", function () {
			xxx("goblin", "goblina");
			(0, _functions.letsPlayGame)(hero);
		});
		document.querySelector("#troll").addEventListener("click", function () {
			xxx("trol", "trola");
			(0, _functions.letsPlayGame)(hero);
		});
		document.querySelector("#semiGiant").addEventListener("click", function () {
			xxx("półolbrzym", "półolbrzyma");
			(0, _functions.letsPlayGame)(hero);
		});
	});
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.chooseOccupation = undefined;

var _functions = __webpack_require__(0);

var chooseOccupation = exports.chooseOccupation = function chooseOccupation(hero) {
	document.querySelector("#occupation").addEventListener("click", function () {
		var showOccupation = "<p class=\"labelName\">wybierz profesj\u0119</p>\n\t\t<button id=\"warrior\" class=\"btnAccept\">wojownik</button>\n\t\t<button id=\"criminal\" class=\"btnAccept\">z\u0142oczy\u0144ca</button>\n\t\t<button id=\"wizard\" class=\"btnAccept\">czarodziej</button>\t\n\t\t<p id=\"comment\" class=\"greenText\"></p>\n\t\t";
		mainContainer.innerHTML = "";
		mainContainer.innerHTML = showOccupation;

		document.querySelector("#warrior").addEventListener("click", function () {
			hero.splice(3, 1, "wojownik");
			document.querySelector("#comment").innerHTML = "";
			document.querySelector("#comment").innerHTML = "wybrano wojownika";
			(0, _functions.letsPlayGame)(hero);
		});
		document.querySelector("#criminal").addEventListener("click", function () {
			hero.splice(3, 1, "złoczyńca");
			document.querySelector("#comment").innerHTML = "";
			document.querySelector("#comment").innerHTML = "wybrano złoczyńcę";
			(0, _functions.letsPlayGame)(hero);
		});
		document.querySelector("#wizard").addEventListener("click", function () {
			hero.splice(3, 1, "czarodziej");
			document.querySelector("#comment").innerHTML = "";
			document.querySelector("#comment").innerHTML = "wybrano czarodzieja";
			(0, _functions.letsPlayGame)(hero);
		});
	});
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.choosePoints = undefined;

var _functions = __webpack_require__(0);

var choosePoints = exports.choosePoints = function choosePoints(hero) {
	document.querySelector("#points").addEventListener("click", function () {
		var showPoints = "<p class=\"labelName\">rozdziel punkty postaci</p>\n\t\t<p class=\"labelName\">ilo\u015B\u0107 punkt\xF3w: <span id=\"allPoints\">250</span></p>\n\n\t\t<div class=\"displayFlex mainDivPoints\">\n\t\t\t<div class=\"divPoints\">\n\t\t\t\t<p class=\"labelName\">Si\u0142a</p>\n\t\t\t\t<input type=\"range\" id=\"force\" min=\"0\" max=\"50\" step=\"1\">\n\t\t\t\t<p id=\"forcePoints\" class=\"labelName\"></p>\n\t\t\t</div>\n\t\t  \n\t\t\t<div class=\"divPoints\">\n\t\t\t\t<p class=\"labelName\">Wytrzyma\u0142o\u015B\u0107</p>\n\t\t\t\t<input type=\"range\" id=\"strength\"  min=\"0\" max=\"50\" step=\"1\">\n\t\t\t\t<p id=\"strengthPoints\" class=\"labelName\"></p>\n\t\t\t</div>\n\t\t  \n\t\t\t<div class=\"divPoints\">\n\t\t\t\t<p class=\"labelName\">Zr\u0119czno\u015B\u0107</p>\n\t\t\t\t<input type=\"range\" id=\"dexterity\" min=\"0\" max=\"50\" step=\"1\">\n\t\t\t\t<p id=\"dexterityPoints\" class=\"labelName\"></p>\n\t\t\t</div>\n\t\t  \n\t\t\t<div class=\"divPoints\">\n\t\t\t\t<p class=\"labelName\">Inteligencja</p>\n\t\t\t\t<input type=\"range\" id=\"intelligence\" min=\"0\" max=\"50\" step=\"1\">\n\t\t\t\t<p id=\"intelligencePoints\" class=\"labelName\"></p>\n\t\t\t</div>\n\t\t  \n\t\t\t<div class=\"divPoints\">\n\t\t\t\t<p class=\"labelName\">Charyzma</p>\n\t\t\t\t<input type=\"range\" id=\"charisma\" name=\"charsima\" min=\"0\" max=\"50\" step=\"1\">\n\t\t\t\t<p id=\"charismaPoints\" class=\"labelName\"></p>\n\t\t  \t</div>\n\t\t</div>\n\t\t";
		mainContainer.innerHTML = "";
		mainContainer.innerHTML = showPoints;

		document.querySelector("#force").addEventListener("change", function () {

			var choosenForce = document.getElementById("force").value;
			hero.splice(4, 1, parseInt(choosenForce));
			document.getElementById('forcePoints').textContent = hero[4];

			var force = hero[4];
			var strength = hero[5];
			var dexterity = hero[6];
			var intelligence = hero[7];
			var charisma = hero[8];
			var allPoints = 250;

			var choosenPoints = allPoints - force - strength - dexterity - intelligence - charisma;
			document.getElementById('allPoints').textContent = choosenPoints;
			(0, _functions.letsPlayGame)(hero);
		});

		document.querySelector("#strength").addEventListener("change", function () {
			var choosenStrength = document.getElementById("strength").value;
			hero.splice(5, 1, parseInt(choosenStrength));
			document.getElementById('strengthPoints').textContent = hero[5];

			var force = hero[4];
			var strength = hero[5];
			var dexterity = hero[6];
			var intelligence = hero[7];
			var charisma = hero[8];
			var allPoints = 250;

			var choosenPoints = allPoints - force - strength - dexterity - intelligence - charisma;
			document.getElementById('allPoints').textContent = choosenPoints;
			(0, _functions.letsPlayGame)(hero);
		});

		document.querySelector("#dexterity").addEventListener("change", function () {
			var choosenDexterity = document.getElementById("dexterity").value;
			hero.splice(6, 1, parseInt(choosenDexterity));
			document.getElementById('dexterityPoints').textContent = hero[6];

			var force = hero[4];
			var strength = hero[5];
			var dexterity = hero[6];
			var intelligence = hero[7];
			var charisma = hero[8];
			var allPoints = 250;

			var choosenPoints = allPoints - force - strength - dexterity - intelligence - charisma;
			document.getElementById('allPoints').textContent = choosenPoints;
			(0, _functions.letsPlayGame)(hero);
		});

		document.querySelector("#intelligence").addEventListener("change", function () {
			var choosenIntelligence = document.getElementById("intelligence").value;
			hero.splice(7, 1, parseInt(choosenIntelligence));
			document.getElementById('intelligencePoints').textContent = hero[7];

			var force = hero[4];
			var strength = hero[5];
			var dexterity = hero[6];
			var intelligence = hero[7];
			var charisma = hero[8];
			var allPoints = 250;

			var choosenPoints = allPoints - force - strength - dexterity - intelligence - charisma;
			document.getElementById('allPoints').textContent = choosenPoints;
			(0, _functions.letsPlayGame)(hero);
		});

		document.querySelector("#charisma").addEventListener("change", function () {
			var choosenCharisma = document.getElementById("charisma").value;
			hero.splice(8, 1, parseInt(choosenCharisma));
			document.getElementById('charismaPoints').textContent = hero[8];

			var force = hero[4];
			var strength = hero[5];
			var dexterity = hero[6];
			var intelligence = hero[7];
			var charisma = hero[8];
			var allPoints = 250;

			var choosenPoints = allPoints - force - strength - dexterity - intelligence - charisma;
			document.getElementById('allPoints').textContent = choosenPoints;
			(0, _functions.letsPlayGame)(hero);
		});
	});
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.chooseCharacterTraits = undefined;

var _functions = __webpack_require__(0);

var chooseCharacterTraits = exports.chooseCharacterTraits = function chooseCharacterTraits(hero) {
    document.querySelector("#characterTraits").addEventListener("click", function () {
        var showCharacterTraits = "\n        <div id=\"eyes\">\n            <p class=\"labelName\">kolor oczu</p>\n    \n            <div class=\"displayFlex\">\n                <input type=\"radio\" id=\"blue\" name=\"eyesColor\" value=\"niebieskie\">\n                <label for=\"blue\" class=\"blueText\">niebieskie</label>\n    \n                  <input type=\"radio\" id=\"brown\" name=\"eyesColor\" value=\"br\u0105zowe\">\n                <label for=\"brown\" class=\"blueText\">br\u0105zowe</label>\n    \n                <input type=\"radio\" id=\"green\" name=\"eyesColor\" value=\"zielone\">\n                  <label for=\"green\" class=\"blueText\">zielone</label>\n    \n                  <input type=\"radio\" id=\"gray\" name=\"eyesColor\" value=\"szare\">\n                 <label for=\"gray\" class=\"blueText\">szare</label>\n    \n                <input type=\"radio\" id=\"red\" name=\"eyesColor\" value=\"czerwone\">\n                <label for=\"red\" class=\"blueText\">czerwone</label>\n            </div>\n                  \n          <p id=\"eyesColor\" class=\"standardSize labelName\"></p>\n      </div>\n    \n      <div id=\"hair\">\n            <p class=\"labelName\">kolor w\u0142os\xF3w</p>\n    \n            <div class=\"displayFlex\">\n                <input type=\"radio\" id=\"blond\" name=\"hairColor\" value=\"blond\">\n                <label for=\"blond\" class=\"blueText\">blond</label>\n    \n                  <input type=\"radio\" id=\"black\" name=\"hairColor\" value=\"czarne\">\n                <label for=\"black\" class=\"blueText\">czarne</label>\n    \n                <input type=\"radio\" id=\"redHair\" name=\"hairColor\" value=\"rude\">\n                  <label for=\"redHair\" class=\"blueText\">rude</label>\n    \n                  <input type=\"radio\" id=\"colors\" name=\"hairColor\" value=\"kolorowe\">\n                 <label for=\"colors\" class=\"blueText\">kolorowe</label>\n    \n                <input type=\"radio\" id=\"none\" name=\"hairColor\" value=\"brak w\u0142os\xF3w\">\n                <label for=\"none\" class=\"blueText\">brak w\u0142os\xF3w</label>\n            </div>  \t\t \n            \n            <p id=\"hairColor\" class=\"standardSize labelName\"></p>\n      </div>\n          \n        <div id=\"skin\">\t\n            <p class=\"labelName\">kolor sk\xF3ry</p>\n            \n            <div class=\"displayFlex\">\n                <input type=\"radio\" id=\"white\" name=\"skinColor\" value=\"bia\u0142a\">\n                <label for=\"white\" class=\"blueText\">blond</label>\n    \n                  <input type=\"radio\" id=\"brownSkin\" name=\"skinColor\" value=\"br\u0105zowa\">\n                <label for=\"brownSkin\" class=\"blueText\">br\u0105zowa</label>\n    \n                <input type=\"radio\" id=\"blackSkin\" name=\"skinColor\" value=\"czarna\">\n                  <label for=\"blackSkin\" class=\"blueText\">czarna</label>\n    \n                  <input type=\"radio\" id=\"greenSkin\" name=\"skinColor\" value=\"zielona\">\n                <label for=\"greenSkin\" class=\"blueText\">zielona</label>\n    \n                <input type=\"radio\" id=\"olive\" name=\"skinColor\" value=\"oliwkowa\">\n                <label for=\"olive\" class=\"blueText\">oliwkowa</label>\n            </div>\n                      \n          <p id=\"skinColor\" class=\"standardSize labelName\"></p>\n      </div>\n    \n      <div id=\"tattoos\">\t\n            <p class=\"labelName\">tatua\u017Ce</p>\n            \n            <div class=\"displayFlex\">\n                <input type=\"radio\" id=\"none\" name=\"tattoos\" value=\"brak\">\n                <label for=\"none\" class=\"blueText\">brak</label>\n    \n                  <input type=\"radio\" id=\"prison\" name=\"tattoos\" value=\"wi\u0119zienne\">\n                <label for=\"prison\" class=\"blueText\">wi\u0119zienne</label>\n    \n                <input type=\"radio\" id=\"tribal\" name=\"tattoos\" value=\"plemienne\">\n                  <label for=\"tribal\" class=\"blueText\">plemiennne</label>\n    \n                  <input type=\"radio\" id=\"strange\" name=\"tattoos\" value=\"dziwne\">\n                <label for=\"strange\" class=\"blueText\">dziwne</label>\n            </div>\n                      \n              <p id=\"choosenTattoo\" class=\"standardSize labelName\"></p>\n          </div>\n    \n          <div id=\"weight\">\t\n            <p class=\"labelName\">waga</p>\n    \n            <p id=\"noRaceWeight\" class=\"labelName\"></p>\n    \n             <p id=\"choosenWeight\" class=\"standardSize labelName\"></p>\n         </div>\n    \n         <div id=\"height\">\t\n            <p class=\"labelName\">wzrost</p>\n              \n            <p id=\"noRaceHeight\" class=\"labelName\"></p>\t\n    \n            <p id=\"choosenHeight\" class=\"standardSize labelName\"></p>\n        </div>\n        ";
        mainContainer.innerHTML = "";
        mainContainer.innerHTML = showCharacterTraits;

        function checkRace(hero) {
            if (hero[2] == "") {

                document.querySelector("#noRaceWeight").innerHTML = "musisz wybrać rasę";
                document.querySelector("#noRaceHeight").innerHTML = "musisz wybrać rasę";
            } else {

                switch (hero[2]) {
                    case 'człowiek':

                        document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="40" max="120" step="1"></input>';

                        document.querySelector("#vol").addEventListener("change", function () {
                            hero.splice(13, 1, document.getElementById("vol").value);
                            document.querySelector("#choosenWeight").innerHTML = "";
                            document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
                            (0, _functions.letsPlayGame)(hero);
                        });

                        document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="150" max="210" step="1"></input>';

                        document.querySelector("#volume").addEventListener("change", function () {
                            hero.splice(14, 1, document.getElementById("volume").value);
                            document.querySelector("#choosenHeight").innerHTML = "";
                            document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
                            (0, _functions.letsPlayGame)(hero);
                        });

                        break;

                    case 'półork':

                        document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="50" max="140" step="1"></input>';

                        document.querySelector("#vol").addEventListener("change", function () {
                            hero.splice(13, 1, document.getElementById("vol").value);
                            document.querySelector("#choosenWeight").innerHTML = "";
                            document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
                            (0, _functions.letsPlayGame)(hero);
                        });

                        document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="170" max="220" step="1"></input>';

                        document.querySelector("#volume").addEventListener("change", function () {
                            hero.splice(14, 1, document.getElementById("volume").value);
                            document.querySelector("#choosenHeight").innerHTML = "";
                            document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
                            (0, _functions.letsPlayGame)(hero);
                        });

                        break;

                    case 'ork':

                        document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="80" max="180" step="1"></input>';

                        document.querySelector("#vol").addEventListener("change", function () {
                            hero.splice(13, 1, document.getElementById("vol").value);
                            document.querySelector("#choosenWeight").innerHTML = "";
                            document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
                            (0, _functions.letsPlayGame)(hero);
                        });

                        document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="180" max="240" step="1"></input>';

                        document.querySelector("#volume").addEventListener("change", function () {
                            hero.splice(14, 1, document.getElementById("volume").value);
                            document.querySelector("#choosenHeight").innerHTML = "";
                            document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
                            (0, _functions.letsPlayGame)(hero);
                        });
                        break;

                    case 'półelf':

                        document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="40" max="100" step="1"></input>';

                        document.querySelector("#vol").addEventListener("change", function () {
                            hero.splice(13, 1, document.getElementById("vol").value);
                            document.querySelector("#choosenWeight").innerHTML = "";
                            document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
                            (0, _functions.letsPlayGame)(hero);
                        });

                        document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="165" max="210" step="1"></input>';

                        document.querySelector("#volume").addEventListener("change", function () {
                            hero.splice(14, 1, document.getElementById("volume").value);
                            document.querySelector("#choosenHeight").innerHTML = "";
                            document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
                            (0, _functions.letsPlayGame)(hero);
                        });
                        break;

                    case 'elf':

                        document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="40" max="90" step="1"></input>';

                        document.querySelector("#vol").addEventListener("change", function () {
                            hero.splice(13, 1, document.getElementById("vol").value);
                            document.querySelector("#choosenWeight").innerHTML = "";
                            document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
                            (0, _functions.letsPlayGame)(hero);
                        });

                        document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="180" max="210" step="1"></input>';

                        document.querySelector("#volume").addEventListener("change", function () {
                            hero.splice(14, 1, document.getElementById("volume").value);
                            document.querySelector("#choosenHeight").innerHTML = "";
                            document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
                            (0, _functions.letsPlayGame)(hero);
                        });
                        break;

                    case 'krasnolud':

                        document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="70" max="100" step="1"></input>';

                        document.querySelector("#vol").addEventListener("change", function () {
                            hero.splice(13, 1, document.getElementById("vol").value);
                            document.querySelector("#choosenWeight").innerHTML = "";
                            document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
                            (0, _functions.letsPlayGame)(hero);
                        });

                        document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="100" max="145" step="1"></input>';

                        document.querySelector("#volume").addEventListener("change", function () {
                            hero.splice(14, 1, document.getElementById("volume").value);
                            document.querySelector("#choosenHeight").innerHTML = "";
                            document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
                            (0, _functions.letsPlayGame)(hero);
                        });

                        break;

                    case 'gnom':

                        document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="50" max="80" step="1"></input>';

                        document.querySelector("#vol").addEventListener("change", function () {
                            hero.splice(13, 1, document.getElementById("vol").value);
                            document.querySelector("#choosenWeight").innerHTML = "";
                            document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
                            (0, _functions.letsPlayGame)(hero);
                        });

                        document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="100" max="145" step="1"></input>';

                        document.querySelector("#volume").addEventListener("change", function () {
                            hero.splice(14, 1, document.getElementById("volume").value);
                            document.querySelector("#choosenHeight").innerHTML = "";
                            document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
                            (0, _functions.letsPlayGame)(hero);
                        });

                        break;

                    case 'niziołek':

                        document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="60" max="100" step="1"></input>';

                        document.querySelector("#vol").addEventListener("change", function () {
                            hero.splice(13, 1, document.getElementById("vol").value);
                            document.querySelector("#choosenWeight").innerHTML = "";
                            document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
                            (0, _functions.letsPlayGame)(hero);
                        });

                        document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="105" max="150" step="1"></input>';

                        document.querySelector("#volume").addEventListener("change", function () {
                            hero.splice(14, 1, document.getElementById("volume").value);
                            document.querySelector("#choosenHeight").innerHTML = "";
                            document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
                            (0, _functions.letsPlayGame)(hero);
                        });
                        break;

                    case 'goblin':

                        document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="50" max="80" step="1"></input>';

                        document.querySelector("#vol").addEventListener("change", function () {
                            hero.splice(13, 1, document.getElementById("vol").value);
                            document.querySelector("#choosenWeight").innerHTML = "";
                            document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
                            (0, _functions.letsPlayGame)(hero);
                        });

                        document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="80" max="120" step="1"></input>';

                        document.querySelector("#volume").addEventListener("change", function () {
                            hero.splice(14, 1, document.getElementById("volume").value);
                            document.querySelector("#choosenHeight").innerHTML = "";
                            document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
                            (0, _functions.letsPlayGame)(hero);
                        });

                        break;

                    case 'trol':

                        document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="150" max="200" step="1"></input>';

                        document.querySelector("#vol").addEventListener("change", function () {
                            hero.splice(13, 1, document.getElementById("vol").value);
                            document.querySelector("#choosenWeight").innerHTML = "";
                            document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
                            (0, _functions.letsPlayGame)(hero);
                        });

                        document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="220" max="260" step="1"></input>';

                        document.querySelector("#volume").addEventListener("change", function () {
                            hero.splice(14, 1, document.getElementById("volume").value);
                            document.querySelector("#choosenHeight").innerHTML = "";
                            document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
                            (0, _functions.letsPlayGame)(hero);
                        });

                        break;

                    case 'półolbrzym':

                        document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="210" max="300" step="1"></input>';

                        document.querySelector("#vol").addEventListener("change", function () {
                            hero.splice(13, 1, document.getElementById("vol").value);
                            document.querySelector("#choosenWeight").innerHTML = "";
                            document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
                            (0, _functions.letsPlayGame)(hero);
                        });

                        document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="260" max="320" step="1"></input>';

                        document.querySelector("#volume").addEventListener("change", function () {
                            hero.splice(14, 1, document.getElementById("volume").value);
                            document.querySelector("#choosenHeight").innerHTML = "";
                            document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
                            (0, _functions.letsPlayGame)(hero);
                        });

                        break;
                }
            }
        }
        checkRace(hero);

        var formEyes = document.querySelector("#eyes");
        var eyeColor = formEyes.querySelectorAll("input[name=eyesColor]");

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = eyeColor[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var radio = _step.value;

                radio.addEventListener("change", function () {
                    var _iteratorNormalCompletion5 = true;
                    var _didIteratorError5 = false;
                    var _iteratorError5 = undefined;

                    try {
                        for (var _iterator5 = eyeColor[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                            var _radio = _step5.value;

                            if (_radio.checked) {
                                document.querySelector("#eyesColor").innerText = "kolor oczu: " + _radio.value;
                                hero.splice(9, 1, _radio.value);
                                (0, _functions.letsPlayGame)(hero);
                            }
                        }
                    } catch (err) {
                        _didIteratorError5 = true;
                        _iteratorError5 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                _iterator5.return();
                            }
                        } finally {
                            if (_didIteratorError5) {
                                throw _iteratorError5;
                            }
                        }
                    }
                });
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        var formHair = document.querySelector("#hair");
        var hairColor = formHair.querySelectorAll("input[name=hairColor]");

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = hairColor[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _radio2 = _step2.value;

                _radio2.addEventListener("change", function () {
                    var _iteratorNormalCompletion6 = true;
                    var _didIteratorError6 = false;
                    var _iteratorError6 = undefined;

                    try {
                        for (var _iterator6 = hairColor[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                            var _radio3 = _step6.value;

                            if (_radio3.checked) {
                                document.querySelector("#hairColor").innerText = "kolor w\u0142os\xF3w: " + _radio3.value;
                                hero.splice(10, 1, _radio3.value);
                                (0, _functions.letsPlayGame)(hero);
                            }
                        }
                    } catch (err) {
                        _didIteratorError6 = true;
                        _iteratorError6 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion6 && _iterator6.return) {
                                _iterator6.return();
                            }
                        } finally {
                            if (_didIteratorError6) {
                                throw _iteratorError6;
                            }
                        }
                    }
                });
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        var formSkin = document.querySelector("#skin");
        var skinColor = formSkin.querySelectorAll("input[name=skinColor]");

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
            for (var _iterator3 = skinColor[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _radio4 = _step3.value;

                _radio4.addEventListener("change", function () {
                    var _iteratorNormalCompletion7 = true;
                    var _didIteratorError7 = false;
                    var _iteratorError7 = undefined;

                    try {
                        for (var _iterator7 = skinColor[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                            var _radio5 = _step7.value;

                            if (_radio5.checked) {
                                document.querySelector("#skinColor").innerText = "kolor sk\xF3ry: " + _radio5.value;
                                hero.splice(11, 1, _radio5.value);
                                (0, _functions.letsPlayGame)(hero);
                            }
                        }
                    } catch (err) {
                        _didIteratorError7 = true;
                        _iteratorError7 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion7 && _iterator7.return) {
                                _iterator7.return();
                            }
                        } finally {
                            if (_didIteratorError7) {
                                throw _iteratorError7;
                            }
                        }
                    }
                });
            }
        } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                }
            } finally {
                if (_didIteratorError3) {
                    throw _iteratorError3;
                }
            }
        }

        var formTattoos = document.querySelector("#tattoos");
        var choosenTattoo = formTattoos.querySelectorAll("input[name=tattoos]");

        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
            for (var _iterator4 = choosenTattoo[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var _radio6 = _step4.value;

                _radio6.addEventListener("change", function () {
                    var _iteratorNormalCompletion8 = true;
                    var _didIteratorError8 = false;
                    var _iteratorError8 = undefined;

                    try {
                        for (var _iterator8 = choosenTattoo[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                            var _radio7 = _step8.value;

                            if (_radio7.checked) {
                                document.querySelector("#choosenTattoo").innerText = "tatua\u017C: " + _radio7.value;
                                hero.splice(12, 1, _radio7.value);
                                (0, _functions.letsPlayGame)(hero);
                            }
                        }
                    } catch (err) {
                        _didIteratorError8 = true;
                        _iteratorError8 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion8 && _iterator8.return) {
                                _iterator8.return();
                            }
                        } finally {
                            if (_didIteratorError8) {
                                throw _iteratorError8;
                            }
                        }
                    }
                });
            }
        } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                }
            } finally {
                if (_didIteratorError4) {
                    throw _iteratorError4;
                }
            }
        }
    });
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.preview = undefined;

var _functions = __webpack_require__(0);

var preview = exports.preview = function preview(hero) {
    document.querySelector("#preview").addEventListener("click", function () {
        var showHero = "<div class = \"showHero\">\n            <p id='name'>imi\u0119: " + hero[0] + "</p>\n            <p id='sex'>p\u0142e\u0107: " + hero[1] + "</p>\n            <p id='race'>rasa: " + hero[2] + "</p>\n            <p id='occupation'>profesja: " + hero[3] + "</p>\n            <p id='force'>si\u0142a: " + hero[4] + "</p>\n            <p id='strength'>wytrzyma\u0142o\u015B\u0107: " + hero[5] + "</p>\n            <p id='dexterity'>zr\u0119czno\u015B\u0107: " + hero[6] + "</p>\n            <p id='intelligence'>inteligencja: " + hero[7] + "</p>\n            <p id='charisma'>charyzma: " + hero[8] + "</p>\n            <p id='eyes'>kolor oczu: <span id=\"eyesColor\">" + hero[9] + "</span></p>\n            <p id='hair'>kolor w\u0142os\xF3w: <span id=\"hairColor\">" + hero[10] + "</span></p>\n            <p id='skin'>kolor sk\xF3ry: <span id=\"skinColor\">" + hero[11] + "</span></p>\n            <p id='tattoo'>tatua\u017Ce: " + hero[12] + "</p>\n            <p id='weight'>waga: " + hero[13] + " kg</p>\n            <p id='height'>wzrost: " + hero[14] + " cm</p>\n        </div>";

        mainContainer.innerHTML = "";
        mainContainer.innerHTML = showHero;
        (0, _functions.letsPlayGame)(hero);
    });
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reset = undefined;

var _functions = __webpack_require__(0);

var reset = exports.reset = function reset(hero) {
    document.querySelector("#reset").addEventListener("click", function () {
        (0, _functions.clearHero)(hero);
    });
};

/***/ })
/******/ ]);