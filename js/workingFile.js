import { namesMan, namesWomen, races, occupation, sex, tatoo, equipWeapon, equipArmor, equipShield, equipOther, skillsWarrior, skillsCriminal, skillsWizard, warrior, criminal, wizard, human, halfOrc, orc, halfElv, elv, dwarf, gnome, halfling, goblin, troll, semiGiant, tattoo } from './arrays.js';

import{ toFirstMenu, newP, newDiv, newInput, newBtn, rndFromArray, colors } from './functions.js';

//indexs for hero
//0-name, 1-sex, 2-race, 3-occupation, 4-force, 5-strength, 6-dexterity, 7-intelligence, 8-charisma, 9-eyes color, 10-hair color, 11-skin color, 12 - tattoo, 13 - weight, 14-height

let hero =["", "", "", "", 0, 0, 0, 0, 0, "", "", "", "", "", ""];

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

	let clearHero = (hero) => {
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
	  }
	
	createHero.addEventListener("click", ()=>{

		play.disabled = true;
		play.classList.add("playDisabled");
		play.classList.remove("playEnabled");

		mainContainer.innerHTML = "";
		document.querySelector("#creatorBtns").classList.remove('displayNone');
	
		clearHero(hero);
	});	

	document.querySelector("#name").addEventListener("click", ()=>{
		const showName = `<p class='labelName'>podaj imię</p>
		<input type="text" id="chooseName" name="name" class='fontInput'>
		<button id="accept" class="btnAccept">zatwierdź</button>
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
				document.querySelector("#comment").innerHTML=`<p class='greenText'>Twoje imię to: ${choosenName}</p>`;
			}else{
				document.querySelector("#comment").innerHTML = "";
				document.querySelector("#comment").innerHTML="<p class='redText'>imię nie może zawierać cyfr, znaków specjalnych i białych znaków</p>";
			}
		});
	});

	document.querySelector("#sex").addEventListener("click", ()=>{
		const showSex = `<p class='labelName'>wybierz płeć</p>
		<button id="chooseMan" class="btnAccept">mężczyzna</button>
		<button id="chooseWomen" class="btnAccept">kobieta</button>
		<button id="chooseOther" class="btnAccept">nie wiadomo</button>
		<p id="comment" class="greenText"></p>
		`;
		mainContainer.innerHTML = "";
		mainContainer.innerHTML = showSex;

		document.querySelector("#chooseMan").addEventListener("click", ()=>{
			hero.splice(1, 1, "mężczyzna");
			document.querySelector("#comment").innerHTML = "";
			document.querySelector("#comment").innerHTML="wybrano mężczyznę";
		});

		document.querySelector("#chooseWomen").addEventListener("click", ()=>{
			hero.splice(1, 1, "kobieta");
			document.querySelector("#comment").innerHTML = "";
			document.querySelector("#comment").innerHTML="wybrano kobietę";
		});

		document.querySelector("#chooseOther").addEventListener("click", ()=>{
			hero.splice(1, 1, "nie wiadomo");
			document.querySelector("#comment").innerHTML = "";
			document.querySelector("#comment").innerHTML="wybrano nie określoną płeć";
		});
	});

	document.querySelector("#race").addEventListener("click", ()=>{
		const showRace = `<p class="labelName">wybierz rasę</p>
		<button id="human" class="btnAccept">człowiek</button>
		<button id="halfOrc" class="btnAccept">półork</button>
		<button id="orc" class="btnAccept">ork</button>
		<button id="halfElv" class="btnAccept">półelf</button>
		<button id="elv" class="btnAccept">elf</button>
		<button id="dwarf" class="btnAccept">krasnolud</button>
		<button id="gnome" class="btnAccept">gnom</button>
		<button id="halfling" class="btnAccept">niziołek</button>
		<button id="goblin" class="btnAccept">goblin</button>
		<button id="troll" class="btnAccept">trol</button>
		<button id="semiGiant" class="btnAccept">półolbrzym</button>
		<p id="comment" class="greenText"></p>
		`;
		mainContainer.innerHTML = "";
		mainContainer.innerHTML = showRace;

		let xxx = (x, y) => {
			hero.splice(2, 1, x);	
			document.querySelector("#comment").innerHTML = "";
			document.querySelector("#comment").innerHTML=`wybrano ${y}`;
		}
		
		document.querySelector("#human").addEventListener("click", ()=>{ 
			xxx("człowiek", "człowieka");
		});
		document.querySelector("#halfOrc").addEventListener("click", ()=>{ 
			xxx("półork", "półorka");
		});
		document.querySelector("#orc").addEventListener("click", ()=>{ 
			xxx("ork", "orka");
		});
		document.querySelector("#halfElv").addEventListener("click", ()=>{ 
			xxx("półelf", "półelfa");
		});
		document.querySelector("#elv").addEventListener("click", ()=>{ 
			xxx("elf", "elfa");
		});
		document.querySelector("#dwarf").addEventListener("click", ()=>{ 
			xxx("krasnolud", "krasnoluda");
		});
		document.querySelector("#gnome").addEventListener("click", ()=>{ 
			xxx("gnom", "gnoma");
		});
		document.querySelector("#halfling").addEventListener("click", ()=>{ 
			xxx("niziołek", "niziołka");
		});
		document.querySelector("#goblin").addEventListener("click", ()=>{ 
			xxx("goblin", "goblina");
		});
		document.querySelector("#troll").addEventListener("click", ()=>{ 
			xxx("trol", "trola");
		});
		document.querySelector("#semiGiant").addEventListener("click", ()=>{ 
			xxx("półolbrzym", "półolbrzyma");
		});

	});

	document.querySelector("#occupation").addEventListener("click", ()=>{
		const showOccupation = `<p class="labelName">wybierz profesję</p>
		<button id="warrior" class="btnAccept">wojownik</button>
		<button id="criminal" class="btnAccept">złoczyńca</button>
		<button id="wizard" class="btnAccept">czarodziej</button>	
		<p id="comment" class="greenText"></p>
		`;
		mainContainer.innerHTML = "";
		mainContainer.innerHTML = showOccupation;

		document.querySelector("#warrior").addEventListener("click", ()=>{ 
			hero.splice(3, 1, "wojownik");	
			document.querySelector("#comment").innerHTML = "";
			document.querySelector("#comment").innerHTML="wybrano wojownika";
		});
		document.querySelector("#criminal").addEventListener("click", ()=>{ 
			hero.splice(3, 1, "złoczyńca");	
			document.querySelector("#comment").innerHTML = "";
			document.querySelector("#comment").innerHTML="wybrano złoczyńcę";
		});
		document.querySelector("#wizard").addEventListener("click", ()=>{ 
			hero.splice(3, 1, "czarodziej"); 
			document.querySelector("#comment").innerHTML = "";
			document.querySelector("#comment").innerHTML="wybrano czarodzieja";
		});
	});

	document.querySelector("#points").addEventListener("click", ()=>{
		const showPoints = `<p class="labelName">rozdziel punkty postaci</p>
		<p class="labelName">ilość punktów: <span id="allPoints">250</span></p>

		<div class="displayFlex mainDivPoints">
			<div class="divPoints">
				<p class="labelName">Siła</p>
				<input type="range" id="force" min="0" max="50" step="1">
				<p id="forcePoints" class="labelName"></p>
			</div>
		  
			<div class="divPoints">
				<p class="labelName">Wytrzymałość</p>
				<input type="range" id="strength"  min="0" max="50" step="1">
				<p id="strengthPoints" class="labelName"></p>
			</div>
		  
			<div class="divPoints">
				<p class="labelName">Zręczność</p>
				<input type="range" id="dexterity" min="0" max="50" step="1">
				<p id="dexterityPoints" class="labelName"></p>
			</div>
		  
			<div class="divPoints">
				<p class="labelName">Inteligencja</p>
				<input type="range" id="intelligence" min="0" max="50" step="1">
				<p id="intelligencePoints" class="labelName"></p>
			</div>
		  
			<div class="divPoints">
				<p class="labelName">Charyzma</p>
				<input type="range" id="charisma" name="charsima" min="0" max="50" step="1">
				<p id="charismaPoints" class="labelName"></p>
		  	</div>
		</div>
		`;
		mainContainer.innerHTML = "";
		mainContainer.innerHTML = showPoints;

		document.querySelector("#force").addEventListener("change", ()=>{

			let choosenForce = document.getElementById("force").value;
			hero.splice(4, 1, parseInt(choosenForce));
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
			hero.splice(5, 1, parseInt(choosenStrength));
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
			hero.splice(6, 1, parseInt(choosenDexterity));
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
			hero.splice(7, 1, parseInt(choosenIntelligence));
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
			hero.splice(8, 1, parseInt(choosenCharisma));
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

document.querySelector("#characterTraits").addEventListener("click", ()=>{
	const showCharacterTraits = `
	<div id="eyes">
		<p class="labelName">kolor oczu</p>

		<div class="displayFlex">
			<input type="radio" id="blue" name="eyesColor" value="niebieskie">
			<label for="blue" class="blueText">niebieskie</label>

	  		<input type="radio" id="brown" name="eyesColor" value="brązowe">
			<label for="brown" class="blueText">brązowe</label>

			<input type="radio" id="green" name="eyesColor" value="zielone">
	  		<label for="green" class="blueText">zielone</label>

	  		<input type="radio" id="gray" name="eyesColor" value="szare">
			 <label for="gray" class="blueText">szare</label>

			<input type="radio" id="red" name="eyesColor" value="czerwone">
			<label for="red" class="blueText">czerwone</label>
		</div>
		  
	  <p id="eyesColor" class="standardSize labelName"></p>
  </div>

  <div id="hair">
		<p class="labelName">kolor włosów</p>

		<div class="displayFlex">
			<input type="radio" id="blond" name="hairColor" value="blond">
			<label for="blond" class="blueText">blond</label>

	  		<input type="radio" id="black" name="hairColor" value="czarne">
			<label for="black" class="blueText">czarne</label>

			<input type="radio" id="redHair" name="hairColor" value="rude">
	  		<label for="redHair" class="blueText">rude</label>

	  		<input type="radio" id="colors" name="hairColor" value="kolorowe">
			 <label for="colors" class="blueText">kolorowe</label>

			<input type="radio" id="none" name="hairColor" value="brak włosów">
			<label for="none" class="blueText">brak włosów</label>
		</div>  
		 
		<p id="hairColor" class="standardSize labelName"></p>
  </div>
	  
	<div id="skin">	
		<p class="labelName">kolor skóry</p>
		
		<div class="displayFlex">
			<input type="radio" id="white" name="skinColor" value="biała">
			<label for="white" class="blueText">blond</label>

	  		<input type="radio" id="brownSkin" name="skinColor" value="brązowa">
			<label for="brownSkin" class="blueText">brązowa</label>

			<input type="radio" id="blackSkin" name="skinColor" value="czarna">
	  		<label for="blackSkin" class="blueText">czarna</label>

	  		<input type="radio" id="greenSkin" name="skinColor" value="zielona">
			<label for="greenSkin" class="blueText">zielona</label>

			<input type="radio" id="olive" name="skinColor" value="oliwkowa">
			<label for="olive" class="blueText">oliwkowa</label>
		</div>
		  
	  <p id="skinColor" class="standardSize labelName"></p>
  </div>
	`;
	mainContainer.innerHTML = "";
	mainContainer.innerHTML = showCharacterTraits;

	document.getElementById('skinColor').style.backgroundColor = `rgb(${hero[11][0]},${hero[11][1]}, ${hero[11][2]}`;

	const formEyes = document.querySelector("#eyes");
	const eyeColor = formEyes.querySelectorAll("input[name=eyesColor]");

 	for (const radio of eyeColor) {
		radio.addEventListener("change", function() {
			for (const radio of eyeColor) {
				if (radio.checked) {
					document.querySelector("#eyesColor").innerText = `kolor oczu: ${radio.value}`;
					break;
				}
			}
		});
	}

	const formHair = document.querySelector("#hair");
	const hairColor = formHair.querySelectorAll("input[name=hairColor]");

 	for (const radio of hairColor) {
		radio.addEventListener("change", function() {
			for (const radio of hairColor) {
				if (radio.checked) {
					document.querySelector("#hairColor").innerText = `kolor włosów: ${radio.value}`;
					break;
				}
			}
		});
	}

	const formSkin = document.querySelector("#skin");
	const skinColor = formSkin.querySelectorAll("input[name=skinColor]");

 	for (const radio of skinColor) {
		radio.addEventListener("change", function() {
			for (const radio of skinColor) {
				if (radio.checked) {
					document.querySelector("#skinColor").innerText = `kolor skóry: ${radio.value}`;
					break;
				}
			}
		});
	}

	document.querySelector("#skills").addEventListener("click", ()=>{
		console.log("działa");
		
		let showSkills = `
			<p class="labelName">wybierz umiejętności</p>
			
			<div id="warrior">
				<p class="labelName">umiejętności wojownika</p>

				<input type="checkbox" name="survival" value="szt. prztrwania">
				<label for="survival" class="blueText">szt. przetrwania</label>

				<input type="checkbox" name="discipline" value="dyscyplina">
				<label for="discipline" class="blueText">dyscyplina</label>

				<input type="checkbox" name="command" value="dowodzenie">
				<label for="command" class="blueText">dowodzenie</label>

				<input type="checkbox" name="hitShield" value="uderzenie tarczą">
				<label for="hitShield" class="blueText">uderzenie tarczą</label>

				<input type="checkbox" name="horseridding" value="jazda konna">
				<label for="horseridding" class="blueText">jazda konna</label>

				<input type="checkbox" name="dagger" value="sztylet">
				<label for="dagger" class="blueText">sztylet</label>

				<input type="checkbox" name="shortSword" value="krótki miecz">
				<label for="shortSword" class="blueText">krótki miecz</label>

				<input type="checkbox" name="sabre" value="szabla">
				<label for="sabre" class="blueText">szabla</label>

				<input type="checkbox" name="spear" value="włócznia">
				<label for="spear" class="blueText">włócznia</label>

				<input type="checkbox" name="bow" value="łuk">
				<label for="bow" class="blueText">łuk</label>

				<input type="checkbox" name="buckler" value="puklerz">
				<label for="buckler" class="blueText">puklerz</label>

				<input type="checkbox" name="smallShieldWodden" value="mała tarcza drew.">
				<label for="smallShieldWodden" class="blueText">mała tarcza drew.</label>

				<input type="checkbox" name="smallShieldMetal" value="mała tarcza metal.">
				<label for="smallShieldMetal" class="blueText" >mała tarcza matal.</label>
			</div>

			<div id="criminal">
				<p class="labelName">umiejętności złoczyńcy</p>

				<input type="checkbox" name="poisons" value="trucizny">
				<label for="poisons" class="blueText" >trucizny</label>

				<input type="checkbox" name="climbing" value="wspinaczka">
				<label for="climbing" class="blueText">wspinaczka</label>

				<input type="checkbox" name="histrionics" value="aktorstwo">
				<label for="histrionics" class="blueText">aktorstwo</label>

				<input type="checkbox" name="acrobatics" value="akrobatyka">
				<label for="acrobatics" class="blueText">akrobatyka</label>

				<input type="checkbox" name="traps" value="pułapki">
				<label for="traps" class="blueText">pułapki</label>

				<input type="checkbox" name="sneaking" value="skradanie się">
				<label for="sneaking" class="blueText">skradanie się</label>

				<input type="checkbox" name="theft" value="kradzież">
				<label for="theft" class="blueText">kradzież</label>

				<input type="checkbox" name="evasion" value="uniki">
				<label for="evasion" class="blueText">uniki</label>

				<input type="checkbox" name="bluffing" value="blefowanie">
				<label for="bluffing" class="blueText">blefowanie</label>

				<input type="checkbox" name="woodenStick" value="drew. pałka">
				<label for="woodenStick" class="blueText">drew. pałka</label>
			</div>

			<div id="wizard">
				<p class="labelName">umiejętności czarodzieja</p>

				<input type="checkbox" name="readingWriting" value="pisanie i czytanie">
				<label for="readingWriting" class="blueText">pisanie i czytanie</label>

				<input type="checkbox" name="deamons" value="przyw./odp. demona">
				<label for="deamons" class="blueText">przyw./odp. demona</label>
				
				<input type="checkbox" name="divinations" value="wróżbiarstwo">
				<label for="divinations" class="blueText">wróżbiarstwo</label>

				<input type="checkbox" name="healing" value="leczenie ran">
				<label for="healing" class="blueText">leczenie ran</label>

				<input type="checkbox" name="castSpells" value="rzucanie czarów">
				<label for="castSpells" class="blueText">rzuczanie czarów</label>

				<input type="checkbox" name="potions" value="tworz. eliksirów">
				<label for="potions" class="blueText">tworz. eliksirów</label>

				<input type="checkbox" name="magicItems" value="tworz. mag. przedm.">
				<label for="magicItems" class="blueText">tworz.mag. przedm.</label>

				<input type="checkbox" name="oinment" value="tworzenie maści">
				<label for="oinment" class="blueText">tworzenie maści</label>

				<input type="checkbox" name="runes" value="tworzenie runów">
				<label for="runes" class="blueText">tworzenie runów</label>

				<input type="checkbox" name="astrology" value="astrologia">
				<label for="astrology" class="blueText">astrologia</label>

				<input type="checkbox" name="herbology" value="zielarstwo">
				<label for="herbology" class="blueText">zielarstwo</label>
			</div>

			<p id="choosenSkills" class="standardSize labelName"></p>
		`;
		
		mainContainer.innerHTML = "";
		mainContainer.innerHTML = showSkills;
	});

	document.querySelector("#reset").addEventListener("click", ()=>{
		clearHero(hero);
	});
});


	play.addEventListener("click", ()=>{
		console.log("działa");
	});