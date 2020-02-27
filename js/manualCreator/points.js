import{ letsPlayGame } from '../functions.js';

export let choosePoints = (hero) => {
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
			letsPlayGame(hero);
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
			letsPlayGame(hero);
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
			letsPlayGame(hero);
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
			letsPlayGame(hero);
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
			letsPlayGame(hero);
		});
	});	
}