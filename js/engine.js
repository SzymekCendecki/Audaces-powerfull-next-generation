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

var clearHero = function clearHero(hero) {
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

createHero.addEventListener("click", function () {

	play.disabled = true;
	play.classList.add("playDisabled");
	play.classList.remove("playEnabled");

	mainContainer.innerHTML = "";
	document.querySelector("#creatorBtns").classList.remove('displayNone');

	clearHero(hero);
});

document.querySelector("#name").addEventListener("click", function () {
	var showName = '<p class=\'labelName\'>podaj imi\u0119</p>\n\t\t<input type="text" id="chooseName" name="name" class=\'fontInput\'>\n\t\t<button id="accept" class="btnAccept">zatwierd\u017A</button>\n\t\t<p id="comment"></p>\n\t\t';

	mainContainer.innerHTML = "";
	mainContainer.innerHTML = showName;

	document.querySelector("#accept").addEventListener("click", function () {

		var noNumbersExpression = /^[a-zA-Z]+$/;

		var choosenName = document.getElementById("chooseName").value;
		var isValid = noNumbersExpression.test(choosenName);

		if (isValid === true) {
			hero.splice(0, 1, choosenName);
			document.querySelector("#comment").innerHTML = "";
			document.querySelector("#comment").innerHTML = '<p class=\'greenText\'>Twoje imi\u0119 to: ' + choosenName + '</p>';
		} else {
			document.querySelector("#comment").innerHTML = "";
			document.querySelector("#comment").innerHTML = "<p class='redText'>imię nie może zawierać cyfr, znaków specjalnych i białych znaków</p>";
		}
	});
});

document.querySelector("#sex").addEventListener("click", function () {
	var showSex = '<p class=\'labelName\'>wybierz p\u0142e\u0107</p>\n\t\t<button id="chooseMan" class="btnAccept">m\u0119\u017Cczyzna</button>\n\t\t<button id="chooseWomen" class="btnAccept">kobieta</button>\n\t\t<button id="chooseOther" class="btnAccept">nie wiadomo</button>\n\t\t<p id="comment" class="greenText"></p>\n\t\t';
	mainContainer.innerHTML = "";
	mainContainer.innerHTML = showSex;

	document.querySelector("#chooseMan").addEventListener("click", function () {
		hero.splice(1, 1, "mężczyzna");
		document.querySelector("#comment").innerHTML = "";
		document.querySelector("#comment").innerHTML = "wybrano mężczyznę";
	});

	document.querySelector("#chooseWomen").addEventListener("click", function () {
		hero.splice(1, 1, "kobieta");
		document.querySelector("#comment").innerHTML = "";
		document.querySelector("#comment").innerHTML = "wybrano kobietę";
	});

	document.querySelector("#chooseOther").addEventListener("click", function () {
		hero.splice(1, 1, "nie wiadomo");
		document.querySelector("#comment").innerHTML = "";
		document.querySelector("#comment").innerHTML = "wybrano nie określoną płeć";
	});
});

document.querySelector("#race").addEventListener("click", function () {
	var showRace = '<p class="labelName">wybierz ras\u0119</p>\n\t\t<button id="human" class="btnAccept">cz\u0142owiek</button>\n\t\t<button id="halfOrc" class="btnAccept">p\xF3\u0142ork</button>\n\t\t<button id="orc" class="btnAccept">ork</button>\n\t\t<button id="halfElv" class="btnAccept">p\xF3\u0142elf</button>\n\t\t<button id="elv" class="btnAccept">elf</button>\n\t\t<button id="dwarf" class="btnAccept">krasnolud</button>\n\t\t<button id="gnome" class="btnAccept">gnom</button>\n\t\t<button id="halfling" class="btnAccept">nizio\u0142ek</button>\n\t\t<button id="goblin" class="btnAccept">goblin</button>\n\t\t<button id="troll" class="btnAccept">trol</button>\n\t\t<button id="semiGiant" class="btnAccept">p\xF3\u0142olbrzym</button>\n\t\t<p id="comment" class="greenText"></p>\n\t\t';
	mainContainer.innerHTML = "";
	mainContainer.innerHTML = showRace;

	var xxx = function xxx(x, y) {
		hero.splice(2, 1, x);
		document.querySelector("#comment").innerHTML = "";
		document.querySelector("#comment").innerHTML = 'wybrano ' + y;
	};

	document.querySelector("#human").addEventListener("click", function () {
		xxx("człowiek", "człowieka");
	});
	document.querySelector("#halfOrc").addEventListener("click", function () {
		xxx("półork", "półorka");
	});
	document.querySelector("#orc").addEventListener("click", function () {
		xxx("ork", "orka");
	});
	document.querySelector("#halfElv").addEventListener("click", function () {
		xxx("półelf", "półelfa");
	});
	document.querySelector("#elv").addEventListener("click", function () {
		xxx("elf", "elfa");
	});
	document.querySelector("#dwarf").addEventListener("click", function () {
		xxx("krasnolud", "krasnoluda");
	});
	document.querySelector("#gnome").addEventListener("click", function () {
		xxx("gnom", "gnoma");
	});
	document.querySelector("#halfling").addEventListener("click", function () {
		xxx("niziołek", "niziołka");
	});
	document.querySelector("#goblin").addEventListener("click", function () {
		xxx("goblin", "goblina");
	});
	document.querySelector("#troll").addEventListener("click", function () {
		xxx("trol", "trola");
	});
	document.querySelector("#semiGiant").addEventListener("click", function () {
		xxx("półolbrzym", "półolbrzyma");
	});
});

document.querySelector("#occupation").addEventListener("click", function () {
	var showOccupation = '<p class="labelName">wybierz profesj\u0119</p>\n\t\t<button id="warrior" class="btnAccept">wojownik</button>\n\t\t<button id="criminal" class="btnAccept">z\u0142oczy\u0144ca</button>\n\t\t<button id="wizard" class="btnAccept">czarodziej</button>\t\n\t\t<p id="comment" class="greenText"></p>\n\t\t';
	mainContainer.innerHTML = "";
	mainContainer.innerHTML = showOccupation;

	document.querySelector("#warrior").addEventListener("click", function () {
		hero.splice(3, 1, "wojownik");
		document.querySelector("#comment").innerHTML = "";
		document.querySelector("#comment").innerHTML = "wybrano wojownika";
	});
	document.querySelector("#criminal").addEventListener("click", function () {
		hero.splice(3, 1, "złoczyńca");
		document.querySelector("#comment").innerHTML = "";
		document.querySelector("#comment").innerHTML = "wybrano złoczyńcę";
	});
	document.querySelector("#wizard").addEventListener("click", function () {
		hero.splice(3, 1, "czarodziej");
		document.querySelector("#comment").innerHTML = "";
		document.querySelector("#comment").innerHTML = "wybrano czarodzieja";
	});
});

document.querySelector("#points").addEventListener("click", function () {
	var showPoints = '<p class="labelName">rozdziel punkty postaci</p>\n\t\t<p class="labelName">ilo\u015B\u0107 punkt\xF3w: <span id="allPoints">250</span></p>\n\n\t\t<div class="displayFlex mainDivPoints">\n\t\t\t<div class="divPoints">\n\t\t\t\t<p class="labelName">Si\u0142a</p>\n\t\t\t\t<input type="range" id="force" min="0" max="50" step="1">\n\t\t\t\t<p id="forcePoints" class="labelName"></p>\n\t\t\t</div>\n\t\t  \n\t\t\t<div class="divPoints">\n\t\t\t\t<p class="labelName">Wytrzyma\u0142o\u015B\u0107</p>\n\t\t\t\t<input type="range" id="strength"  min="0" max="50" step="1">\n\t\t\t\t<p id="strengthPoints" class="labelName"></p>\n\t\t\t</div>\n\t\t  \n\t\t\t<div class="divPoints">\n\t\t\t\t<p class="labelName">Zr\u0119czno\u015B\u0107</p>\n\t\t\t\t<input type="range" id="dexterity" min="0" max="50" step="1">\n\t\t\t\t<p id="dexterityPoints" class="labelName"></p>\n\t\t\t</div>\n\t\t  \n\t\t\t<div class="divPoints">\n\t\t\t\t<p class="labelName">Inteligencja</p>\n\t\t\t\t<input type="range" id="intelligence" min="0" max="50" step="1">\n\t\t\t\t<p id="intelligencePoints" class="labelName"></p>\n\t\t\t</div>\n\t\t  \n\t\t\t<div class="divPoints">\n\t\t\t\t<p class="labelName">Charyzma</p>\n\t\t\t\t<input type="range" id="charisma" name="charsima" min="0" max="50" step="1">\n\t\t\t\t<p id="charismaPoints" class="labelName"></p>\n\t\t  \t</div>\n\t\t</div>\n\t\t';
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
	});
});

document.querySelector("#characterTraits").addEventListener("click", function () {
	var showCharacterTraits = '\n\t<div id="eyes">\n\t\t<p class="labelName">kolor oczu</p>\n\n\t\t<div class="displayFlex">\n\t\t\t<input type="radio" id="blue" name="eyesColor" value="niebieskie">\n\t\t\t<label for="blue" class="blueText">niebieskie</label>\n\n\t  \t\t<input type="radio" id="brown" name="eyesColor" value="br\u0105zowe">\n\t\t\t<label for="brown" class="blueText">br\u0105zowe</label>\n\n\t\t\t<input type="radio" id="green" name="eyesColor" value="zielone">\n\t  \t\t<label for="green" class="blueText">zielone</label>\n\n\t  \t\t<input type="radio" id="gray" name="eyesColor" value="szare">\n\t\t\t <label for="gray" class="blueText">szare</label>\n\n\t\t\t<input type="radio" id="red" name="eyesColor" value="czerwone">\n\t\t\t<label for="red" class="blueText">czerwone</label>\n\t\t</div>\n\t\t\t  \n\t  <p id="eyesColor" class="standardSize labelName"></p>\n  </div>\n\n  <div id="hair">\n\t\t<p class="labelName">kolor w\u0142os\xF3w</p>\n\n\t\t<div class="displayFlex">\n\t\t\t<input type="radio" id="blond" name="hairColor" value="blond">\n\t\t\t<label for="blond" class="blueText">blond</label>\n\n\t  \t\t<input type="radio" id="black" name="hairColor" value="czarne">\n\t\t\t<label for="black" class="blueText">czarne</label>\n\n\t\t\t<input type="radio" id="redHair" name="hairColor" value="rude">\n\t  \t\t<label for="redHair" class="blueText">rude</label>\n\n\t  \t\t<input type="radio" id="colors" name="hairColor" value="kolorowe">\n\t\t\t <label for="colors" class="blueText">kolorowe</label>\n\n\t\t\t<input type="radio" id="none" name="hairColor" value="brak w\u0142os\xF3w">\n\t\t\t<label for="none" class="blueText">brak w\u0142os\xF3w</label>\n\t\t</div>  \t\t \n\t\t\n\t\t<p id="hairColor" class="standardSize labelName"></p>\n  </div>\n\t  \n\t<div id="skin">\t\n\t\t<p class="labelName">kolor sk\xF3ry</p>\n\t\t\n\t\t<div class="displayFlex">\n\t\t\t<input type="radio" id="white" name="skinColor" value="bia\u0142a">\n\t\t\t<label for="white" class="blueText">blond</label>\n\n\t  \t\t<input type="radio" id="brownSkin" name="skinColor" value="br\u0105zowa">\n\t\t\t<label for="brownSkin" class="blueText">br\u0105zowa</label>\n\n\t\t\t<input type="radio" id="blackSkin" name="skinColor" value="czarna">\n\t  \t\t<label for="blackSkin" class="blueText">czarna</label>\n\n\t  \t\t<input type="radio" id="greenSkin" name="skinColor" value="zielona">\n\t\t\t<label for="greenSkin" class="blueText">zielona</label>\n\n\t\t\t<input type="radio" id="olive" name="skinColor" value="oliwkowa">\n\t\t\t<label for="olive" class="blueText">oliwkowa</label>\n\t\t</div>\n\t\t\t\t  \n\t  <p id="skinColor" class="standardSize labelName"></p>\n  </div>\n\t';
	mainContainer.innerHTML = "";
	mainContainer.innerHTML = showCharacterTraits;

	document.getElementById('skinColor').style.backgroundColor = 'rgb(' + hero[11][0] + ',' + hero[11][1] + ', ' + hero[11][2];

	var formEyes = document.querySelector("#eyes");
	var eyeColor = formEyes.querySelectorAll("input[name=eyesColor]");

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = eyeColor[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var radio = _step.value;

			radio.addEventListener("change", function () {
				var _iteratorNormalCompletion4 = true;
				var _didIteratorError4 = false;
				var _iteratorError4 = undefined;

				try {
					for (var _iterator4 = eyeColor[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
						var _radio = _step4.value;

						if (_radio.checked) {
							document.querySelector("#eyesColor").innerText = 'kolor oczu: ' + _radio.value;
							hero.splice(9, 1, _radio.value);
							break;
						}
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
				var _iteratorNormalCompletion5 = true;
				var _didIteratorError5 = false;
				var _iteratorError5 = undefined;

				try {
					for (var _iterator5 = hairColor[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
						var _radio3 = _step5.value;

						if (_radio3.checked) {
							document.querySelector("#hairColor").innerText = 'kolor w\u0142os\xF3w: ' + _radio3.value;
							hero.splice(10, 1, _radio3.value);
							break;
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
				var _iteratorNormalCompletion6 = true;
				var _didIteratorError6 = false;
				var _iteratorError6 = undefined;

				try {
					for (var _iterator6 = skinColor[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
						var _radio5 = _step6.value;

						if (_radio5.checked) {
							document.querySelector("#skinColor").innerText = 'kolor sk\xF3ry: ' + _radio5.value;
							hero.splice(11, 1, _radio5.value);
							break;
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
});

document.querySelector("#preview").addEventListener("click", function () {
	var showHero = '<div class = "showHero">\n\t\t<p id=\'name\'>imi\u0119: ' + hero[0] + '</p>\n\t\t<p id=\'sex\'>p\u0142e\u0107: ' + hero[1] + '</p>\n\t\t<p id=\'race\'>rasa: ' + hero[2] + '</p>\n\t\t<p id=\'occupation\'>profesja: ' + hero[3] + '</p>\n\t\t<p id=\'force\'>si\u0142a: ' + hero[4] + '</p>\n\t\t<p id=\'strength\'>wytrzyma\u0142o\u015B\u0107: ' + hero[5] + '</p>\n\t\t<p id=\'dexterity\'>zr\u0119czno\u015B\u0107: ' + hero[6] + '</p>\n\t\t<p id=\'intelligence\'>inteligencja: ' + hero[7] + '</p>\n\t\t<p id=\'charisma\'>charyzma: ' + hero[8] + '</p>\n\t\t<p id=\'eyes\'>kolor oczu: <span id="eyesColor">' + hero[9] + '</span></p>\n\t\t<p id=\'hair\'>kolor w\u0142os\xF3w: <span id="hairColor">' + hero[10] + '</span></p>\n\t\t<p id=\'skin\'>kolor sk\xF3ry: <span id="skinColor">' + hero[11] + '</span></p>\n\t\t<p id=\'tattoo\'>tatua\u017Ce: ' + hero[12] + '</p>\n\t\t<p id=\'weight\'>waga: ' + hero[13] + ' kg</p>\n\t\t<p id=\'height\'>wzrost: ' + hero[14] + ' cm</p>\n\t</div>';

	mainContainer.innerHTML = "";
	mainContainer.innerHTML = showHero;
});

document.querySelector("#reset").addEventListener("click", function () {
	clearHero(hero);
});

play.addEventListener("click", function () {
	console.log("działa");

	if (hero[0] !== "" && hero[1] !== "" && hero[2] !== "" && hero[3] !== "" && hero[4] !== 0 && hero[5] !== 0 && hero[6] !== 0 && hero[7] !== 0 && hero[8] !== "" && hero[9] !== "" && hero[10] !== "" && hero[11] !== "" && hero[12] !== "" && hero[13] !== "" && hero[14] !== "") {
		console.log("wypełnione");
	}
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

/***/ })
/******/ ]);