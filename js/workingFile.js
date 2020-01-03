import { namesMan, namesWomen, races, occupation, sex, tatoo, equipWeapon, equipArmor, equipShield, equipOther, skillsWarrior, skillsCriminal, skillsWizard, warrior, criminal, wizard, human, halfOrc, orc, halfElv, elv, dwarf, gnome, halfling, goblin, troll, semiGiant, tattoo } from './arrays.js';

import{ toFirstMenu, newP, rndFromArray, colors } from './functions.js';

//indexs for hero
//0-name, 1-sex, 2-race, 3-occupation, 4-force, 5-strength, 6-dexterity, 7-intelligence, 8-charisma, 9-eyes color, 10-hair color, 11-skin color, 12 - tattoo, 13 - weight, 14-height

let hero =["", "", "", "", "", "", "", "", "", [0, 0, 0], [0, 0, 0], [0, 0, 0], "", "", "", "", "", "", ""];

let skills = ["", "", ""];

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
		<p id='eyes'>kolor oczu: <span id="eyesColor"></span></p>
		<p id='hair'>kolor włosów: <span id="hairColor"></span></p>
		<p id='skin'>kolor skóry: <span id="skinColor"></span></p>
		<p id='tattoo'>tatuaże: ${hero[12]}</p>
		<p id='weight'>waga: ${hero[13]} kg</p>
		<p id='height'>wzrost: ${hero[14]} cm</p>
		<p id='skills'>umiejętności: ${skills}</p>
		<p id='equip'>ekwipunek: ${equip}</p>
	</div>`;
	mainContainer.innerHTML = "";
    mainContainer.innerHTML = showHero;
}

let chooseHero = () =>{
	const chooseHero = `<form id="chooseHeroForm">
			<label>imię</label>
			<input id="enterName"></input>
			
			<label>płeć</label>
			<input></input>
		</form>`;

	mainContainer.innerHTML = "";
    mainContainer.innerHTML = chooseHero;
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

let randomSkills = () =>{
	switch(hero[3]){
		case "wojownik": 
			for (let i=0; i<3; i++) {
				let random = Math.round(Math.random()*skillsWarrior.length);
				let is = false;
				for (let j=0; j<skills.length; j++)
				if (skills[j] == random) is = true; if (is) i--; else skills[i] = random;
				skills.splice(i, 1, skillsWarrior[random]);
			}
		break;
		  
		case "złoczyńca": 
			for (let i=0; i<3; i++) {
				let random = Math.round(Math.random()*skillsCriminal.length);
				let is = false;
				for (let j=0; j<skills.length; j++)
				if (skills[j] == random) is = true; if (is) i--; else skills[i] = random;
				skills.splice(i, 1, skillsCriminal[random]);
			}
		break;
		  
		case "czarodziej": 
			for (let i=0; i<3; i++) {
				let random = Math.round(Math.random()*skillsWizard.length);
				let is = false;
				for (let j=0; j<skills.length; j++)
				if (skills[j] == random) is = true; if (is) i--; else skills[i] = random;
				skills.splice(i, 1, skillsWizard[random]);
			}
		break;
	  }	  
  }
  
  let randomEquip = () =>{
	let allEquip = [];
	let randomEquip = equip.concat(equipWeapon, equipArmor, equipShield, equipOther);

	for (let i=0; i<5; i++) {
		let random = Math.round(Math.random()*randomEquip.length);
		let is = false;
		for (let j=0; j<equip.length; j++)
		if (equip[j] == random) is = true; if (is) i--; else equip[i] = random;
		equip.splice(i, 1, randomEquip[random]);
	}
  }
	
	
		rndFromArray(sex, hero, 1);
		randomName(hero[1]);
		
		rndFromArray(races, hero, 2);
		rndFromArray(occupation, hero, 3);
		
		rndPoints();
		addPoints();
		
		rndFromArray(tattoo, hero, 12);	
				
		weight(hero, 13);		
		height(hero, 14);	
		
		randomSkills(hero[3]);	
		randomEquip();
		
		showHero(hero);
		
		colors(9,"#eyesColor", hero);
		colors(10, "#hairColor", hero);
		colors(11, "#skinColor", hero);				
	});
	
	createHero.addEventListener("click", ()=>{
		console.log("działa");
		chooseHero();
	});
	
