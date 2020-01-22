import { namesMan, namesWomen, races, occupation, sex, tatoo, equipWeapon, equipArmor, equipShield, equipOther, skillsWarrior, skillsCriminal, skillsWizard, warrior, criminal, wizard, human, halfOrc, orc, halfElv, elv, dwarf, gnome, halfling, goblin, troll, semiGiant, tattoo } from './arrays.js';

import{ toFirstMenu, newP, newDiv, newInput, newBtn, rndFromArray, colors } from './functions.js';

//indexs for hero
//0-name, 1-sex, 2-race, 3-occupation, 4-force, 5-strength, 6-dexterity, 7-intelligence, 8-charisma, 9-eyes color, 10-hair color, 11-skin color, 12 - tattoo, 13 - weight, 14-height

let hero =["", "", "", "", , 0, 0, 0, 0, [0, 0, 0], [0, 0, 0], [0, 0, 0], "", "", ""];

let skills = ["", "", ""];

let equip = [];

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

	const gameTitle = document.querySelector("#gameTitle");
	const gameSubTitle = document.querySelector("#gameSubTitle");
		
	const info = document.querySelector("#info");
	const licence = document.querySelector("#licence");
	const tutorial = document.querySelector("#tutorial");
	const newGame = document.querySelector("#newGame");
	
	let mainContainer = document.querySelector("#mainContainer");
	
	const randomHero = document.querySelector("#randomHero");
	const play = document.querySelector("#play");
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

		play.disabled = true;
		play.classList.add("playDisabled");
		play.classList.remove("playEnabled");

		mainContainer.innerHTML = "";
		document.querySelector("#creatorBtns").classList.remove('displayNone');
		document.querySelector("#creatorBtns").classList.add('creatorBtnsStyles');

		hero.splice(0, 1, "");
		hero.splice(1, 1, "");
		hero.splice(2, 1, "");
		hero.splice(3, 1, "");
		hero.splice(4, 1, "");
		hero.splice(5, 1, "");
		hero.splice(6, 1, "");
		hero.splice(7, 1, "");
		hero.splice(8, 1, "");
		hero.splice(9, 1, [0, 0, 0]);
		hero.splice(10, 1, [0, 0, 0]);
		hero.splice(11, 1, [0, 0, 0]);
		hero.splice(12, 1, "");
		hero.splice(13, 1, "");
		hero.splice(14, 1, "");
	});

	document.querySelector("#name").addEventListener("click", ()=>{
		const showName = `<label>podaj imię</label>
		<input type="text" id="chooseName" name="name">
		<button id="accept">zatwierdź</button>
		<p id="comment"></p>
		`;

		mainContainer.innerHTML = "";
		mainContainer.innerHTML = showName;

		document.querySelector("#accept").addEventListener("click", ()=>{

			const noNumbersExpression = /^[a-zA-Z]+$/;

			let choosenName = document.getElementById("chooseName").value;
			let isValid = noNumbersExpression.test(choosenName); 

			if(isValid === true){
				hero.splice(0, 1, choosenName);
				document.querySelector("#comment").innerHTML = "";
				document.querySelector("#comment").innerHTML="imię zostało wybrane";
			}else{
				document.querySelector("#comment").innerHTML = "";
				document.querySelector("#comment").innerHTML="imię nie może zawierać cyfr, znaków specjalnych i białych znaków";
			}
		});
	});

	document.querySelector("#sex").addEventListener("click", ()=>{
		const showSex = `<p>wybierz płeć</p>
		<button id="chooseMan">mężczyzna</button>
		<button id="chooseWomen">kobieta</button>
		<button id="chooseOther">nie wiadomo</button>
		<p id="comment"></p>
		`;
		mainContainer.innerHTML = "";
		mainContainer.innerHTML = showSex;

		document.querySelector("#chooseMan").addEventListener("click", ()=>{
			hero.splice(1, 1, "mężczyzna");
		});

		document.querySelector("#chooseWomen").addEventListener("click", ()=>{
			hero.splice(1, 1, "kobieta");
		});

		document.querySelector("#chooseOther").addEventListener("click", ()=>{
			hero.splice(1, 1, "nie wiadomo");
		});
	});

	document.querySelector("#race").addEventListener("click", ()=>{
		const showRace = `<p>wybierz rasę</p>
		<button id="human">człowiek</button>
		<button id="halfOrc">półork</button>
		<button id="orc">ork</button>
		<button id="halfElv">półelf</button>
		<button id="elv">elf</button>
		<button id="dwarf">krasnolud</button>
		<button id="gnome">gnom</button>
		<button id="halfling">niziołek</button>
		<button id="goblin">goblin</button>
		<button id="troll">trol</button>
		<button id="semiGiant">półolbrzym</button>
		`;
		mainContainer.innerHTML = "";
		mainContainer.innerHTML = showRace;
		
		document.querySelector("#human").addEventListener("click", ()=>{ hero.splice(2, 1, "człowiek");	});
		document.querySelector("#halfOrc").addEventListener("click", ()=>{ hero.splice(2, 1, "półork");	});
		document.querySelector("#orc").addEventListener("click", ()=>{ hero.splice(2, 1, "ork"); });
		document.querySelector("#halfElv").addEventListener("click", ()=>{ hero.splice(2, 1, "półelf"); });
		document.querySelector("#elv").addEventListener("click", ()=>{ hero.splice(2, 1, "elf"); });
		document.querySelector("#dwarf").addEventListener("click", ()=>{ hero.splice(2, 1, "krasnolud"); });
		document.querySelector("#gnome").addEventListener("click", ()=>{ hero.splice(2, 1, "gnom"); });
		document.querySelector("#halfling").addEventListener("click", ()=>{ hero.splice(2, 1, "niziołek"); });
		document.querySelector("#goblin").addEventListener("click", ()=>{ hero.splice(2, 1, "goblin"); });
		document.querySelector("#troll").addEventListener("click", ()=>{ hero.splice(2, 1, "trol");	});
		document.querySelector("#semiGiant").addEventListener("click", ()=>{ hero.splice(2, 1, "półolbrzym"); });

	});

	document.querySelector("#occupation").addEventListener("click", ()=>{
		const showOccupation = `<p>wybierz profesję</p>
		<button id="warrior">wojownik</button>
		<button id="criminal">złoczyńca</button>
		<button id="wizard">czarodziej</button>	
		`;
		mainContainer.innerHTML = "";
		mainContainer.innerHTML = showOccupation;

		document.querySelector("#warrior").addEventListener("click", ()=>{ hero.splice(3, 1, "wojownik");	});
		document.querySelector("#criminal").addEventListener("click", ()=>{ hero.splice(3, 1, "złoczyńca");	});
		document.querySelector("#wizard").addEventListener("click", ()=>{ hero.splice(3, 1, "czarodziej"); });
	});

	document.querySelector("#points").addEventListener("click", ()=>{
		const showPoints = `<p>rozdziel punkty postaci</p>
		<p>ilość punktów: <span id="allPoints">250</span></p>

		<div>
			<label for="force">Siła</label>
			<input type="range" id="force" min="0" max="50" step="1">
			<div id="forcePoints"></div>
		</div>
		  
		<div>
			<label for="strength">Wytrzymałość</label>
			<input type="range" id="strength"  min="0" max="50" step="1">
			<div id="strengthPoints"></div>
		</div>
		  
		<div>
			<label for="dexterity">Zręczność</label>
			<input type="range" id="dexterity" min="0" max="50" step="1">
			<div id="dexterityPoints"></div>
		</div>
		  
		<div>
			<label for="intelligence">Inteligencja</label>
			<input type="range" id="intelligence" min="0" max="50" step="1">
			<div id="intelligencePoints"></div>
		</div>
		  
		<div>
			<label for="charisma">Charyzma</label>
			<input type="range" id="charisma" name="charsima" min="0" max="50" step="1">
			<div id="charismaPoints"></div>
  		</div>
		`;
		mainContainer.innerHTML = "";
		mainContainer.innerHTML = showPoints;

		document.querySelector("#force").addEventListener("change", ()=>{

			let choosenForce = document.getElementById("force").value;
			hero.splice(4, 1, choosenForce);
			document.getElementById('forcePoints').textContent = hero[4];

			let force = hero[4];
			let strength = hero[5];
			let dexterity = hero[6];
			let intelligence = hero[7];
			let charisma = hero[8];	
			let allPoints = 250;
				
			let choosenPoints = allPoints - force - strength - dexterity - intelligence - charisma;
			document.getElementById('allPoints').textContent = choosenPoints;
		});

		document.querySelector("#strength").addEventListener("change", ()=>{
			let choosenStrength = document.getElementById("strength").value;
			hero.splice(5, 1, choosenStrength);
			document.getElementById('strengthPoints').textContent = hero[5];

			let force = hero[4];
			let strength = hero[5];
			let dexterity = hero[6];
			let intelligence = hero[7];
			let charisma = hero[8];	
			let allPoints = 250;

			let choosenPoints = allPoints - force - strength - dexterity - intelligence - charisma;
			document.getElementById('allPoints').textContent = choosenPoints;
		});

		document.querySelector("#dexterity").addEventListener("change", ()=>{
			let choosenDexterity = document.getElementById("dexterity").value;
			hero.splice(6, 1, choosenDexterity);
			document.getElementById('dexterityPoints').textContent = hero[6];

			let force = hero[4];
			let strength = hero[5];
			let dexterity = hero[6];
			let intelligence = hero[7];
			let charisma = hero[8];	
			let allPoints = 250;

			let choosenPoints = allPoints - force - strength - dexterity - intelligence - charisma;
			document.getElementById('allPoints').textContent = choosenPoints;
		});

		document.querySelector("#intelligence").addEventListener("change", ()=>{
			let choosenIntelligence = document.getElementById("intelligence").value;
			hero.splice(7, 1, choosenIntelligence);
			document.getElementById('intelligencePoints').textContent = hero[7];

			let force = hero[4];
			let strength = hero[5];
			let dexterity = hero[6];
			let intelligence = hero[7];
			let charisma = hero[8];	
			let allPoints = 250;

			let choosenPoints = allPoints - force - strength - dexterity - intelligence - charisma;
			document.getElementById('allPoints').textContent = choosenPoints;
		});

		document.querySelector("#charisma").addEventListener("change", ()=>{
			let choosenCharisma = document.getElementById("charisma").value;
			hero.splice(8, 1, choosenCharisma);
			document.getElementById('charismaPoints').textContent = hero[8];

			let force = hero[4];
			let strength = hero[5];
			let dexterity = hero[6];
			let intelligence = hero[7];
			let charisma = hero[8];	
			let allPoints = 250;

			let choosenPoints = allPoints - force - strength - dexterity - intelligence - charisma;
			document.getElementById('allPoints').textContent = choosenPoints;
		});
	});

	let eyesColor = [0,0,0];
	let hairColor = [0,0,0];
	let skinColor = [0, 0, 0];

	document.querySelector("#characterTraits").addEventListener("click", ()=>{
		const showCharacterTraits = `<p>wygląd</p>
		<div>
			<label for="eyes">kolor oczu</label>
			<input type="range" id="eye1" min="0" max="250" step="1">
			<input type="range" id="eye2" min="0" max="250" step="1">
			<input type="range" id="eye3" min="0" max="250" step="1">
			<div id="eyesColor" class="standardSize"></div>
		</div>
		  
		<div>
			<label for="hair">kolor włosów</label>
			<input type="range" id="hair1" min="0" max="250" step="1">
			<input type="range" id="hair2" min="0" max="250" step="1">
			<input type="range" id="hair3" min="0" max="250" step="1">
			<div id="hairColor" class="standardSize"></div>
		</div>
		  
		 <div>
			<label for="skin">kolor skóry</label>
			<input type="range" id="skin1" min="0" max="250" step="1">
			<input type="range" id="skin2" min="0" max="250" step="1">
			<input type="range" id="skin3" min="0" max="250" step="1">
			<div id="skinColor" class="standardSize"></div>
		</div>
		`;
		mainContainer.innerHTML = "";
		mainContainer.innerHTML = showCharacterTraits;
		document.getElementById('eyesColor').style.backgroundColor = `rgb(${hero[9][0]},${hero[9][1]}, ${hero[9][2]}`;
		document.getElementById('hairColor').style.backgroundColor = `rgb(${hero[10][0]},${hero[10][1]}, ${hero[10][2]}`;
		document.getElementById('skinColor').style.backgroundColor = `rgb(${hero[11][0]},${hero[11][1]}, ${hero[11][2]}`;

		document.querySelector("#eye1").addEventListener("change", ()=>{
			let eye1 = document.getElementById("eye1").value;
			eyesColor.splice(0, 1, parseInt(eye1));
			hero.splice(9, 1, eyesColor);
			document.getElementById('eyesColor').style.backgroundColor = `rgb(${eyesColor[0]},${eyesColor[1]}, ${eyesColor[2]}`;
		});		

		document.querySelector("#eye2").addEventListener("change", ()=>{
			let eye2 = document.getElementById("eye2").value;
			eyesColor.splice(1, 1, parseInt(eye2));
			hero.splice(9, 1, eyesColor);
			document.getElementById('eyesColor').style.backgroundColor = `rgb(${eyesColor[0]},${eyesColor[1]}, ${eyesColor[2]}`;
		});	

		document.querySelector("#eye3").addEventListener("change", ()=>{
			let eye3 = document.getElementById("eye3").value;
			eyesColor.splice(2, 1, parseInt(eye3));
			hero.splice(9, 1, eyesColor);
			document.getElementById('eyesColor').style.backgroundColor = `rgb(${eyesColor[0]},${eyesColor[1]}, ${eyesColor[2]}`;
		});	

		document.querySelector("#hair1").addEventListener("change", ()=>{
			let hair1 = document.getElementById("hair1").value;
			hairColor.splice(0, 1, parseInt(hair1));
			hero.splice(10, 1, hairColor);
			document.getElementById('hairColor').style.backgroundColor = `rgb(${hairColor[0]},${hairColor[1]}, ${hairColor[2]}`;
		});		

		document.querySelector("#hair2").addEventListener("change", ()=>{
			let hair2 = document.getElementById("hair2").value;
			hairColor.splice(1, 1, parseInt(hair2));
			hero.splice(10, 1, hairColor);
			document.getElementById('hairColor').style.backgroundColor = `rgb(${hairColor[0]},${hairColor[1]}, ${hairColor[2]}`;
		});		

		document.querySelector("#hair3").addEventListener("change", ()=>{
			let hair3 = document.getElementById("hair3").value;
			hairColor.splice(2, 1, parseInt(hair3));
			hero.splice(10, 1, hairColor);
			document.getElementById('hairColor').style.backgroundColor = `rgb(${hairColor[0]},${hairColor[1]}, ${hairColor[2]}`;
		});		

		document.querySelector("#skin1").addEventListener("change", ()=>{
			let skin1 = document.getElementById("skin1").value;
			skinColor.splice(0, 1, parseInt(skin1));
			hero.splice(11, 1, skinColor);
			document.getElementById('skinColor').style.backgroundColor = `rgb(${skinColor[0]},${skinColor[1]}, ${skinColor[2]}`;
		});		

		document.querySelector("#skin2").addEventListener("change", ()=>{
			let skin2 = document.getElementById("skin2").value;
			skinColor.splice(1, 1, parseInt(skin2));
			hero.splice(11, 1, skinColor);
			document.getElementById('skinColor').style.backgroundColor = `rgb(${skinColor[0]},${skinColor[1]}, ${skinColor[2]}`;
		});	

		document.querySelector("#skin3").addEventListener("change", ()=>{
			let skin3 = document.getElementById("skin3").value;
			skinColor.splice(2, 1, parseInt(skin3));
			hero.splice(11, 1, skinColor);
			document.getElementById('skinColor').style.backgroundColor = `rgb(${skinColor[0]},${skinColor[1]}, ${skinColor[2]}`;
		});	
	});

	play.addEventListener("click", ()=>{
		console.log("działa");
	});