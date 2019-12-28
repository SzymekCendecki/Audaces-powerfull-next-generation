import { namesMan, namesWomen, races, occupation, sex, tatoo, equipWeapon, equipArmor, equipShield, equipOther, skillsWarrior, skillsCriminal, skillsWizard, warrior, criminal, wizard, human, halfOrc, orc, halfElv, elv, dwarf, gnome, halfling, goblin, troll, semiGiant } from './arrays.js';

import{ toFirstMenu, newP, rndFromArray } from './functions.js';

//indexs for hero
//0-name, 1-sex, 2-race, 3-occupation, 4-force, 5-strength, 6-dexterity, 7-intelligence, 8-charisma, 9-eyes color, 10-hair color, 11-skin color, 12 - tattoo, 13 - weight, 14-height

let hero =["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

let skills = [];

let equip = [];

let randomPoints = [0, 0, 0, 0, 0];

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
	
	let rndPoints = () => {
		for (let i = 0; i<5; i++){
			let x = Math.round(Math.random()*50);
			randomPoints.splice(i, 1, x);
		}
	}
	
	randomHero.addEventListener("click", ()=>{
		
		rndFromArray(sex, hero, 1);
				
		let randomName =(randomSex)=>{
			switch(randomSex) {
				case "mężczyzna": rndFromArray(namesMan, hero, 0); break;
				case "kobieta": rndFromArray(namesWomen, hero, 0); break;
				case "nie wiadomo": let allNames = namesMan.concat(namesWomen); rndFromArray(allNames, hero, 0);
			}
		}
	
		randomName(hero[1]);
		rndFromArray(races, hero, 2);
		rndFromArray(occupation, hero, 3);
		rndPoints();
		
		let allPoints = (who, race) =>{
			for(let i=0; i<5; i++){
					let z = who[i] + race[i] + randomPoints[i];
					hero.splice(i+4, 1, z);				
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
		
		addPoints();
		showHero(hero);
	});
	
	createHero.addEventListener("click", ()=>{
		console.log("działa");
	});
	
