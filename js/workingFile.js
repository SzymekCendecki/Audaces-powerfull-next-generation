import { namesMan, namesWomen, races, occupation, sex, tatoo, equipWeapon, equipArmor, equipShield, equipOther, skillsWarrior, skillsCriminal, skillsWizard, warrior, criminal, wizard, human, halfOrc, orc, halfElv, elv, dwarf, gnome, halfling, goblin, troll, semiGiant } from './arrays.js';

import{ toFirstMenu, newP } from './functions.js';


//indexs for hero
//0-name, 1-sex, 2-race, 3-occupation, 4-force, 5-strength, 6-dexterity, 7-intelligence, 8-charisma, 9-eyes color, 10-hair color, 11-skin color, 12 - tattoo, 13 - weight, 14-height

let hero =["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

let skills = [];

let equip = [];

let showHero = (hero) =>{
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
		<p id='eyes'>kolor oczu: ${hero[9]}</p>
		<p id='hair'>kolor włosów: ${hero[10]}</p>
		<p id='skin'>kolor skóry: ${hero[11]}</p>
		<p id='tattoo'>tatuaże: ${hero[12]}</p>
		<p id='weight'>waga: ${hero[13]}</p>
		<p id='height'>wzrost: ${hero[14]}</p>
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
	const createHero = document.querySelector("#createHero");
	
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
		createHero.classList.remove('displayNone');
		info.classList.add("displayNone");
		licence.classList.add("displayNone");
		tutorial.classList.add("displayNone");
		newGame.classList.add("displayNone");
	});
	
	randomHero.addEventListener("click", ()=>{
		let randomSex = sex[Math.floor(Math.random() * sex.length)];
		hero.splice(1, 1, randomSex);
		
		let randomName =(randomSex)=>{
			switch(randomSex) {
				case "mężczyzna":
				let rndNameMan = namesMan[Math.floor(Math.random() * namesMan.length)];
				hero.splice(0, 1, rndNameMan);
				break;
				
				case "kobieta":
				let rndNameWomen = namesWomen[Math.floor(Math.random() * namesWomen.length)];
				hero.splice(0, 1, rndNameWomen);
				break;
				
				case "nie wiadomo":
				let allNames = namesMan.concat(namesWomen);
				let rndNameOther = allNames[Math.floor(Math.random() * allNames.length)];
				hero.splice(0, 1, rndNameOther);
			}
		}
		randomName(hero[1]);
		
		let randomRace = races[Math.floor(Math.random() * races.length)];
		hero.splice(2, 1, randomRace);
		
		let randomOccupation = occupation[Math.floor(Math.random() * occupation.length)];
		hero.splice(3, 1, randomOccupation);
		
		showHero(hero);
	});
	
	createHero.addEventListener("click", ()=>{
		console.log("działa");
	});
	
