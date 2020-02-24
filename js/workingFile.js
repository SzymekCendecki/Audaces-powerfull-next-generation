import { namesMan, namesWomen, races, occupation, sex, tatoo, equipWeapon, equipArmor, equipShield, equipOther, skillsWarrior, skillsCriminal, skillsWizard, warrior, criminal, wizard, human, halfOrc, orc, halfElv, elv, dwarf, gnome, halfling, goblin, troll, semiGiant, tattoo } from './arrays.js';

import{ toFirstMenu, newP, newDiv, newInput, newBtn, rndFromArray } from './functions.js';

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

	  let letsPlayGame = (hero) =>{
		if(hero[0] !== "" && hero[1] !=="" && hero[2] !=="" && hero[3] !=="" && hero[4] !== 0 && hero[5] !== 0 && hero[6] !== 0 && hero[7] !==0 && hero[8] !=="" && hero[9] !=="" && hero[10] !=="" && hero[11] !=="" && hero[12] !=="" && hero[13] !=="" && hero[14] !==""){
			play.disabled = false;
			play.classList.remove("playDisabled");
			play.classList.add("playEnabled");
		}
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
		letsPlayGame(hero);

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
		letsPlayGame(hero);

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
		letsPlayGame(hero);

		let xxx = (x, y) => {
			hero.splice(2, 1, x);	
			hero.splice(13, 1, "");
			hero.splice(14, 1, "");
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
		letsPlayGame(hero);

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
		letsPlayGame(hero);

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

  <div id="tattoos">	
		<p class="labelName">tatuaże</p>
		
		<div class="displayFlex">
			<input type="radio" id="none" name="tattoos" value="brak">
			<label for="none" class="blueText">brak</label>

	  		<input type="radio" id="prison" name="tattoos" value="więzienne">
			<label for="prison" class="blueText">więzienne</label>

			<input type="radio" id="tribal" name="tattoos" value="plemienne">
	  		<label for="tribal" class="blueText">plemiennne</label>

	  		<input type="radio" id="strange" name="tattoos" value="dziwne">
			<label for="strange" class="blueText">dziwne</label>
		</div>
				  
	  	<p id="choosenTattoo" class="standardSize labelName"></p>
  	</div>

  	<div id="weight">	
		<p class="labelName">waga</p>

		<p id="noRaceWeight" class="labelName"></p>

	 	<p id="choosenWeight" class="standardSize labelName"></p>
 	</div>

 	<div id="height">	
		<p class="labelName">wzrost</p>
		  
		<p id="noRaceHeight" class="labelName"></p>	

		<p id="choosenHeight" class="standardSize labelName"></p>
	</div>
	`;
	mainContainer.innerHTML = "";
	mainContainer.innerHTML = showCharacterTraits;
	letsPlayGame(hero);

	function checkRace(hero){
		if(hero[2] == ""){
			
			document.querySelector("#noRaceWeight").innerHTML = "musisz wybrać rasę";
			document.querySelector("#noRaceHeight").innerHTML = "musisz wybrać rasę";
		
		}else{
			
			switch (hero[2]) {
				case 'człowiek':

					document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="40" max="120" step="1"></input>';

					document.querySelector("#vol").addEventListener("change", ()=>{
						hero.splice(13, 1, document.getElementById("vol").value);
						document.querySelector("#choosenWeight").innerHTML ="";
						document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
					});
					 
					document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="150" max="210" step="1"></input>';
					
					document.querySelector("#volume").addEventListener("change", ()=>{
						hero.splice(14, 1, document.getElementById("volume").value);
						document.querySelector("#choosenHeight").innerHTML ="";
						document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
					});

					break;

				case 'półork':

					document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="50" max="140" step="1"></input>';

					document.querySelector("#vol").addEventListener("change", ()=>{
						hero.splice(13, 1, document.getElementById("vol").value);
						document.querySelector("#choosenWeight").innerHTML ="";
						document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
					});
					 

					document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="170" max="220" step="1"></input>';
					
					document.querySelector("#volume").addEventListener("change", ()=>{
						hero.splice(14, 1, document.getElementById("volume").value);
						document.querySelector("#choosenHeight").innerHTML ="";
						document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
					});
			
					break;

				case 'ork':

					document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="80" max="180" step="1"></input>';

					document.querySelector("#vol").addEventListener("change", ()=>{
						hero.splice(13, 1, document.getElementById("vol").value);
						document.querySelector("#choosenWeight").innerHTML ="";
						document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
					});
					 

					document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="180" max="240" step="1"></input>';
					
					document.querySelector("#volume").addEventListener("change", ()=>{
						hero.splice(14, 1, document.getElementById("volume").value);
						document.querySelector("#choosenHeight").innerHTML ="";
						document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
					});
					break;

				case 'półelf':

					document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="40" max="100" step="1"></input>';

					document.querySelector("#vol").addEventListener("change", ()=>{
						hero.splice(13, 1, document.getElementById("vol").value);
						document.querySelector("#choosenWeight").innerHTML ="";
						document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
					});
					 

					document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="165" max="210" step="1"></input>';
					
					document.querySelector("#volume").addEventListener("change", ()=>{
						hero.splice(14, 1, document.getElementById("volume").value);
						document.querySelector("#choosenHeight").innerHTML ="";
						document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
					});
					break;

				case 'elf':

					document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="40" max="90" step="1"></input>';

					document.querySelector("#vol").addEventListener("change", ()=>{
						hero.splice(13, 1, document.getElementById("vol").value);
						document.querySelector("#choosenWeight").innerHTML ="";
						document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
					});
					 

					document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="180" max="210" step="1"></input>';
					
					document.querySelector("#volume").addEventListener("change", ()=>{
						hero.splice(14, 1, document.getElementById("volume").value);
						document.querySelector("#choosenHeight").innerHTML ="";
						document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
					});
					break;

				case 'krasnolud':

					document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="70" max="100" step="1"></input>';

					document.querySelector("#vol").addEventListener("change", ()=>{
						hero.splice(13, 1, document.getElementById("vol").value);
						document.querySelector("#choosenWeight").innerHTML ="";
						document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
					});
					 

					document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="100" max="145" step="1"></input>';
					
					document.querySelector("#volume").addEventListener("change", ()=>{
						hero.splice(14, 1, document.getElementById("volume").value);
						document.querySelector("#choosenHeight").innerHTML ="";
						document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
					});
		
					break;

				case 'gnom':

					document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="50" max="80" step="1"></input>';

					document.querySelector("#vol").addEventListener("change", ()=>{
						hero.splice(13, 1, document.getElementById("vol").value);
						document.querySelector("#choosenWeight").innerHTML ="";
						document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
					});					 

					document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="100" max="145" step="1"></input>';
					
					document.querySelector("#volume").addEventListener("change", ()=>{
						hero.splice(14, 1, document.getElementById("volume").value);
						document.querySelector("#choosenHeight").innerHTML ="";
						document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
					});
			
					break;

				case 'niziołek':

					document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="60" max="100" step="1"></input>';

					document.querySelector("#vol").addEventListener("change", ()=>{
						hero.splice(13, 1, document.getElementById("vol").value);
						document.querySelector("#choosenWeight").innerHTML ="";
						document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
					});				

					document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="105" max="150" step="1"></input>';
					
					document.querySelector("#volume").addEventListener("change", ()=>{
						hero.splice(14, 1, document.getElementById("volume").value);
						document.querySelector("#choosenHeight").innerHTML ="";
						document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
					});
					break;

				case 'goblin':

					document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="50" max="80" step="1"></input>';

					document.querySelector("#vol").addEventListener("change", ()=>{
						hero.splice(13, 1, document.getElementById("vol").value);
						document.querySelector("#choosenWeight").innerHTML ="";
						document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
					});				

					document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="80" max="120" step="1"></input>';
					
					document.querySelector("#volume").addEventListener("change", ()=>{
						hero.splice(14, 1, document.getElementById("volume").value);
						document.querySelector("#choosenHeight").innerHTML ="";
						document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
					});

					break;

				case 'trol':

					document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="150" max="200" step="1"></input>';

					document.querySelector("#vol").addEventListener("change", ()=>{
						hero.splice(13, 1, document.getElementById("vol").value);
						document.querySelector("#choosenWeight").innerHTML ="";
						document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
					});				

					document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="220" max="260" step="1"></input>';
					
					document.querySelector("#volume").addEventListener("change", ()=>{
						hero.splice(14, 1, document.getElementById("volume").value);
						document.querySelector("#choosenHeight").innerHTML ="";
						document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
					});
	
					break;

				case 'półolbrzym':

					document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="210" max="300" step="1"></input>';

					document.querySelector("#vol").addEventListener("change", ()=>{
						hero.splice(13, 1, document.getElementById("vol").value);
						document.querySelector("#choosenWeight").innerHTML ="";
						document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
					});				

					document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="260" max="320" step="1"></input>';
					
					document.querySelector("#volume").addEventListener("change", ()=>{
						hero.splice(14, 1, document.getElementById("volume").value);
						document.querySelector("#choosenHeight").innerHTML ="";
						document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
					});

					break;
			  }

		}
	}
	checkRace(hero);

	const formEyes = document.querySelector("#eyes");
	const eyeColor = formEyes.querySelectorAll("input[name=eyesColor]");

 	for (const radio of eyeColor) {
		radio.addEventListener("change", function() {
			for (const radio of eyeColor) {
				if (radio.checked) {
					document.querySelector("#eyesColor").innerText = `kolor oczu: ${radio.value}`;
					hero.splice(9, 1, radio.value)
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
					hero.splice(10, 1, radio.value)
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
					hero.splice(11, 1, radio.value)
					break;
				}
			}
		});
	}

	const formTattoos = document.querySelector("#tattoos");
	const choosenTattoo = formTattoos.querySelectorAll("input[name=tattoos]");

 	for (const radio of choosenTattoo) {
		radio.addEventListener("change", function() {
			for (const radio of choosenTattoo) {
				if (radio.checked) {
					document.querySelector("#choosenTattoo").innerText = `tatuaż: ${radio.value}`;
					hero.splice(12, 1, radio.value)
					break;
				}
			}
		});
	}	
});

document.querySelector("#preview").addEventListener("click", ()=>{
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
	letsPlayGame(hero);
});


document.querySelector("#reset").addEventListener("click", ()=>{
	clearHero(hero);
});

document.querySelector("#play").addEventListener("click", ()=>{
	console.log("działa");
});

