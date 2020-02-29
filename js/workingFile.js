import { namesMan, namesWomen, races, occupation, sex, tatoo, equipWeapon, equipArmor, equipShield, equipOther, skillsWarrior, skillsCriminal, skillsWizard, warrior, criminal, wizard, human, halfOrc, orc, halfElv, elv, dwarf, gnome, halfling, goblin, troll, semiGiant, tattoo } from './arrays.js';

import{ toFirstMenu, newP, newDiv, newInput, newBtn, rndFromArray, clearHero } from './functions.js';

import{ chooseName } from './manualCreator/name.js';
import{ chooseSex } from './manualCreator/sex.js';
import{ chooseRace } from './manualCreator/race.js';
import{ chooseOccupation } from './manualCreator/occupation.js';
import{ choosePoints } from './manualCreator/points.js';
import{ chooseCharacterTraits } from './manualCreator/characterTraits.js';
import{ preview } from './manualCreator/preview.js';
import{ reset } from './manualCreator/reset.js';

//indexs for hero
//0-name, 1-sex, 2-race, 3-occupation, 4-force, 5-strength, 6-dexterity, 7-intelligence, 8-charisma, 9-eyes color, 10-hair color, 11-skin color, 12 - tattoo, 13 - weight, 14-height

let hero =["", "", "", "", 0, 0, 0, 0, 0, "", "", "", "", "", ""];

let skills = [];

let equip = [];

const eyesColor = ["niebieskie", "brązowe", "zielone", "szare", "czerwone"];
const hairColor = ["blond", "czarne", "rude", "kolorowe", "brak włosów"];
const skinColor = ["biała", "brązowa", "czarna", "zielona", "oliwkowa"];

let randomPoints = [0, 0, 0, 0, 0];

let showHero = (hero) =>{
	document.querySelector("#creatorBtns").classList.add('displayNone');
	document.querySelector("#creatorBtns").classList.remove('creatorBtnsStyles');

	const showHero = `<div class = "showHero">
		<p id='name'>imię: ${hero[0]}</p>
		<p id='sex'>płeć: ${hero[1]}</p>
		<p id='race'>rasa: ${hero[2]}</p>
		<p id='occupation'>profesja: ${hero[3]}</p>
		<p id='force'>siła: ${hero[4]}</p>
		<p id='strength'>wytrzymałość: ${hero[5]}</p>
		<p id='dexterity'>zręczność: ${hero[6]}</p>
		<p id='intelligence'>inteligencja: ${hero[7]}</p>
		<p id='charisma'>charyzma: ${hero[8]}</p>
		<p id='eyes'>kolor oczu: <span id="eyesColor">${hero[9]}</span></p>
		<p id='hair'>kolor włosów: <span id="hairColor">${hero[10]}</span></p>
		<p id='skin'>kolor skóry: <span id="skinColor">${hero[11]}</span></p>
		<p id='tattoo'>tatuaże: ${hero[12]}</p>
		<p id='weight'>waga: ${hero[13]} kg</p>
		<p id='height'>wzrost: ${hero[14]} cm</p>
	</div>`;

	mainContainer.innerHTML = "";
    mainContainer.innerHTML = showHero;
}

	const gameTitle = document.querySelector("#gameTitle");
	const gameSubTitle = document.querySelector("#gameSubTitle");
		
	const info = document.querySelector("#info");
	const licence = document.querySelector("#licence");
	const tutorial = document.querySelector("#tutorial");
	const newGame = document.querySelector("#newGame");
	
	let mainContainer = document.querySelector("#mainContainer");
	
	const randomHero = document.querySelector("#randomHero");
	const play = document.querySelector("#play");
	
	const path = 'https://szymekcendecki.github.io/Audaces-powerfull-next-generation/json/';

	setTimeout( () => toFirstMenu(), 3000 );
	
	info.addEventListener("click", ()=>{
		mainContainer.innerHTML = '';
		fetch(path + 'info.json').then(response => response.json()).then(data => { 
			newP(data.info);
		}).catch(error => console.error(error))
	});
	
	licence.addEventListener("click", ()=>{
		mainContainer.innerHTML = '';
		fetch(path + 'licence.json').then(response => response.json()).then(data => { 
			newP(data.licence);
		}).catch(error => console.error(error))
	});
	
	tutorial.addEventListener("click", ()=>{
		mainContainer.innerHTML = '';
		fetch(path + 'tutorial.json').then(response => response.json()).then(data => { 
			newP(data.tutorial);
		}).catch(error => console.error(error))
	});
	
	newGame.addEventListener("click", ()=>{
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
	
	let rndPoints = () => {
		for (let i = 0; i<5; i++){
			let x = Math.round(Math.random()*50);
			randomPoints.splice(i, 1, x);
		}
	}
	
	let allPoints = (who, race) =>{
		for(let i=0; i<5; i++){
			let z = who[i] + race[i] + randomPoints[i];
			hero.splice(i+4, 1, z);				
		}
	}
	
	let randomName =(randomSex)=>{
		switch(randomSex) {
			case "mężczyzna": rndFromArray(namesMan, hero, 0); break;
			case "kobieta": rndFromArray(namesWomen, hero, 0); break;
			case "nie wiadomo": let allNames = namesMan.concat(namesWomen); rndFromArray(allNames, hero, 0);
		}
	}
	
	let checkOccupation = (race, occupation) => {
			if(occupation == "wojownik"){ 
				allPoints(warrior, race);				
			}else if(occupation == "złoczyńca"){
				allPoints(criminal, race);
			}else{
				allPoints(wizard, race);
			}			
		}
		
	let addPoints = () =>{
		switch(hero[2]) {
			case "człowiek": checkOccupation(human, hero[3]); break;				
			case "półork": checkOccupation(halfOrc, hero[3]); break;
			case "ork": checkOccupation(orc, hero[3]); break;
			case "półelf": checkOccupation(halfElv, hero[3]); break;
			case "elf": checkOccupation(elv, hero[3]); break;
			case "krasnolud": checkOccupation(dwarf, hero[3]); break;
			case "gnom": checkOccupation(gnome, hero[3]); break;
			case "niziołek": checkOccupation(halfling, hero[3]); break;
			case "goblin": checkOccupation(goblin, hero[3]); break;
			case "trol": checkOccupation(troll, hero[3]); break;
			case "półolbrzym": checkOccupation(semiGiant, hero[3]); break;
		}
	}
		
	let randomValue = (value1, value2, where) =>{
		let x = Math.round(Math.random()*value1 + value2);
		hero.splice(where, 1, x);
	}

	let weight = (hero, where) =>{
		switch(hero[2]) {
			case "człowiek": randomValue(80, 40, where); break;				
			case "półork": randomValue(90, 50, where); break;
			case "ork": randomValue(100, 80, where); break;
			case "półelf": randomValue(60, 40, where); break;
			case "elf": randomValue(50, 40, where); break;
			case "krasnolud": randomValue(30, 70, where); break;
			case "gnom": randomValue(20, 50, where); break;
			case "niziołek": randomValue(40, 60, where); break;
			case "goblin": randomValue(30, 50, where); break;
			case "trol": randomValue(60, 100, where); break;
			case "półolbrzym": randomValue(90, 210, where); break;
		}
	}
		
	let height = (hero, where) =>{
		switch(hero[2]) {
			case "człowiek": randomValue(60, 150, where); break;				
			case "półork": randomValue(50, 170, where); break;
			case "ork": randomValue(70, 170, where); break;
			case "półelf": randomValue(45, 165, where); break;
			case "elf": randomValue(30, 180, where); break;
			case "krasnolud": randomValue(45, 100, where); break;
			case "gnom": randomValue(50, 90, where); break;
			case "niziołek": randomValue(45, 105, where); break;
			case "goblin": randomValue(40, 80, where); break;
			case "trol": randomValue(70, 190, where); break;
			case "półolbrzym": randomValue(60, 260, where); break;
		}
	}
	
	randomHero.addEventListener("click", ()=>{

		play.disabled = false;
		play.classList.remove("playDisabled");
		play.classList.add("playEnabled");

		rndFromArray(sex, hero, 1);
		randomName(hero[1]);
		
		rndFromArray(races, hero, 2);
		rndFromArray(occupation, hero, 3);
		
		rndPoints();
		addPoints();
		
		rndFromArray(tattoo, hero, 12);	
		
		let colors = (position, nameArray) =>{
			let draw = nameArray[Math.floor(Math.random() * nameArray.length)];
			hero.splice(position, 1, draw);
		}
		
		colors(9, eyesColor);
		colors(10, hairColor);
		colors(11, skinColor);	
				
		weight(hero, 13);		
		height(hero, 14);	
		
		showHero(hero);		
	});
	
	createHero.addEventListener("click", ()=>{

		play.disabled = true;
		play.classList.add("playDisabled");
		play.classList.remove("playEnabled");

		mainContainer.innerHTML = "";
		document.querySelector("#creatorBtns").classList.remove('displayNone');
	
		clearHero(hero);
	});	

	chooseName(hero);
	chooseSex(hero);
	chooseRace(hero);
	chooseOccupation(hero);
	choosePoints(hero);	
	chooseCharacterTraits(hero);
	preview(hero);
	reset(hero);

document.querySelector("#play").addEventListener("click", ()=>{

	document.querySelector("#randomHero").classList.add('displayNone');
	document.querySelector("#play").classList.add('displayNone');
	document.querySelector("#createHero").classList.add('displayNone');
	document.querySelector("#creatorBtns").classList.add('displayNone');
	document.querySelector("#mainContainer").innerHTML = "";

	fetch(path + 'introGame.json').then(response => response.json()).then(data => { 

		for (let i = 0; i<Object.keys(data).length; i++){
			const newP = document.createElement("p"); 
			let newContent = document.createTextNode(Object.values(data)[i]); 
			newP.appendChild(newContent);
			mainContainer.appendChild(newP); 
			newP.classList.add("centerText");
			newP.classList.add("pStyles");			
		}

		document.querySelector("#start").classList.remove("displayNone");

	}).catch(error => console.error(error))

});


document.querySelector("#start").addEventListener("click", ()=>{
	document.querySelector("#start").classList.add("displayNone");
	document.querySelector("#mainContainer").innerHTML = "";

	document.querySelector("#features").classList.remove("displayNone");
	document.querySelector("#equip").classList.remove("displayNone");
	document.querySelector("#skills").classList.remove("displayNone");
	document.querySelector("#tasks").classList.remove("displayNone");

	document.querySelector("#roomBtns").classList.remove("displayNone");
});
