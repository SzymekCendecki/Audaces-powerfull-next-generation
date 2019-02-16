let heroCreator = require("./heroCreator.js");

document.addEventListener("DOMContentLoaded", () => {

	function randomName (table1, table2, hero){
			if(heroCreator.hero.sex == "mężczyzna"){
			let x = Math.round(Math.random()*(table1.length-1));
			let name = table1[x];
			hero.setName(name);
		}else if(heroCreator.hero.sex == "kobieta"){
			let x = Math.round(Math.random()*(table2.length-1));
			let name = table2[x];
			hero.setName(name);
		}else{
			let table3 = table1.concat(table2);
			let x = Math.round(Math.random()*(table3.length-1));
			let name = table3[x];
			hero.setName(name);
		}
	}

	function randomSex (table, hero){
		let x = Math.round(Math.random()*(table.length-1));
		let sex = table[x];
		hero.setSex(sex);
	}

	function randomRace(table, hero){
		let x = Math.round(Math.random()*(table.length-1));
		let race = table[x];
		hero.setRace(race);
	}

	function randomOccupation(table, hero){
		let x = Math.round(Math.random()*(table.length-1));
		let occupation = table[x];
		hero.setOccupation(occupation);
	}
	
	function setOccupationPoints(occupation, table, hero){
		switch(occupation) {
			case "wojownik": table = heroCreator.warrior; break;
			case "czarodziej": table = heroCreator.wizard; break;
			case "złoczyńca": table = heroCreator.criminal; break;
			default: table = [0, 0, 0, 0, 0];
		}
		hero.setOccupationPoints(table);
	}
	
	function setRacePoints(race, table, hero){
		switch(race) {
			case "człowiek": table = heroCreator.human; break;
			case "półork": table = heroCreator.halfOrc; break;
			case "ork": table = heroCreator.orc; break;
			case "półelf": table = heroCreator.halfElv; break;
			case "elf": table = heroCreator.elv; break;
			case "krasnolud": table = heroCreator.dwarf; break;
			case "gnom": table = heroCreator.gnome; break;
			case "niziołek": table = heroCreator.halfling; break;
			case "goblin": table = heroCreator.goblin; break;
			case "trol": table = heroCreator.troll; break;
			case "półolbrzym": table = heroCreator.semiGiant; break;
			default: table = [0, 0, 0, 0, 0];
		}
		hero.setRacePoints(table);
	}
	
	function randomPoints(hero){
		let x1 = Math.round(Math.random()*50);
		let x2 = Math.round(Math.random()*50);
		let x3 = Math.round(Math.random()*50);
		let x4 = Math.round(Math.random()*50);
		let x5 = Math.round(Math.random()*50);
		let randomPoints = [x1, x2, x3, x4, x5];
		hero.setRandomPoints(randomPoints);
	}
	
	function summaryPoints(hero, tab, tab2){
		let element = document.getElementById('summaryPoints');
		var fragment = document.createDocumentFragment();
		
		for(let i=0; i<hero.racePoints.length && i<hero.occupationPoints.length && i<hero.randomPoints.length; i++){
			let x = (hero.racePoints[i] + hero.occupationPoints[i] + hero.randomPoints[i]);
			tab.splice(i, 1, x);
		}
		
		hero.setSummaryPoints(tab);
		
		for(let j=0; j<tab.length && j<tab2.length; j++){
			var p = document.createElement('p');
			p.textContent = tab2[j] + " " + tab[j];
			fragment.appendChild(p);
		}
		element.appendChild(fragment);
	}
	
	function randomEyesColor(hero){
		let eyeColor = [];
		let a = Math.round(Math.random()*255);
		let b = Math.round(Math.random()*255);
		let c = Math.round(Math.random()*255);
		eyeColor.splice(0, 1, a);
		eyeColor.splice(1, 1, b);
		eyeColor.splice(2, 1, c);
		hero.setEyesColor(eyeColor);
	}
	
	function randomHairColor(hero){
		let hairColor = [];
		let a = Math.round(Math.random()*255);
		let b = Math.round(Math.random()*255);
		let c = Math.round(Math.random()*255);
		hairColor.splice(0, 1, a);
		hairColor.splice(1, 1, b);
		hairColor.splice(2, 1, c);
		hero.setHairColor(hairColor);
	}
	
	function randomSkinColor(hero){
		let skinColor = [];
		let a = Math.round(Math.random()*255);
		let b = Math.round(Math.random()*255);
		let c = Math.round(Math.random()*255);
		skinColor.splice(0, 1, a);
		skinColor.splice(1, 1, b);
		skinColor.splice(2, 1, c);
		hero.setSkinColor(skinColor);
	}
	
	function randomWeight(hero){
		let weight = 0;
		switch(hero.race) {
			case "człowiek": weight = Math.round(Math.random()*80 + 40); break;
			case "półork": weight = Math.round(Math.random()*90 + 50); break;
			case "ork": weight = Math.round(Math.random()*100 + 80); break;
			case "półelf": weight = Math.round(Math.random()*60 + 40); break;
			case "elf": weight = Math.round(Math.random()*50 + 40); break;
			case "krasnolud": weight = Math.round(Math.random()*30 + 70); break;
			case "gnom": weight = Math.round(Math.random()*20 + 50); break;
			case "niziołek": weight = Math.round(Math.random()*40 + 60); break;
			case "goblin": weight = Math.round(Math.random()*40 + 80); break;
			case "trol": weight = Math.round(Math.random()*60 + 100); break;
			case "półolbrzym": weight = Math.round(Math.random()*90 + 210); break;
		}
		hero.setWeight(weight);
	}
	
	function randomHeight(hero){
		let height = 0;
		switch(hero.race) {
			case "człowiek": height = Math.round(Math.random()*60 + 150); break;
			case "półork": height = Math.round(Math.random()*50 + 170); break;
			case "ork": height = Math.round(Math.random()*70 + 170); break;
			case "półelf": height = Math.round(Math.random()*45 + 165); break;
			case "elf": height = Math.round(Math.random()*30 + 180); break;
			case "krasnolud": height = Math.round(Math.random()*45 + 100); break;
			case "gnom": height = Math.round(Math.random()*50 + 90); break;
			case "niziołek": height = Math.round(Math.random()*45 + 105); break;
			case "goblin": height = Math.round(Math.random()*40 + 80); break;
			case "trol": height = Math.round(Math.random()*70 + 190); break;
			case "półolbrzym": height = Math.round(Math.random()*60 + 260); break;
		}
		hero.setHeight(height);
	}
		
	module.exports.randomHero = function(){
			
		$("#randomHero").on("click", ()=>{
			$(".btnManualHero").remove(".btnManualHero");

			randomSex(heroCreator.sex, heroCreator.hero);
			randomName(heroCreator.namesMan, heroCreator.namesWomen, heroCreator.hero);
			randomRace(heroCreator.races, heroCreator.hero);
			randomOccupation(heroCreator.occupation, heroCreator.hero);
			setOccupationPoints(heroCreator.hero.occupation, heroCreator.occupationPoints, heroCreator.hero);
			setRacePoints(heroCreator.hero.race, heroCreator.racePoints, heroCreator.hero);
			randomPoints(heroCreator.hero);
			randomEyesColor(heroCreator.hero);
			randomHairColor(heroCreator.hero);
			randomSkinColor(heroCreator.hero);
			randomWeight(heroCreator.hero);
			randomHeight(heroCreator.hero);
			
			$("#mainDescription").empty().append(`<p class='heroRandom'>imię</p><p class='heroRandom'>${heroCreator.hero.name}</p><p class='heroRandom'>płeć</p><p class='heroRandom'>${heroCreator.hero.sex}</p><p class='heroRandom'>rasa</p><p class='heroRandom'>${heroCreator.hero.race}</p><p class='heroRandom'>profesja</p><p class='heroRandom'>${heroCreator.hero.occupation}</p><p class='heroRandom'>kolor oczu</p><p id='eyesColor' class='heroRandom'></p><p class='heroRandom'>kolor włosów</p><p id='hairColor' class='heroRandom'></p><p class='heroRandom'>kolor skóry</p><p id='skinColor' class='heroRandom'></p><p class='heroRandom'>waga</p><p class='heroRandom'>${heroCreator.hero.weight} kg</p><p class='heroRandom'>wzrost</p><p class='heroRandom'>${heroCreator.hero.height} cm</p><p class='heroRandom'>punkty cech</p><p id="summaryPoints" class='heroRandom'></p>`);
								
			summaryPoints(heroCreator.hero, heroCreator.sumPoints, heroCreator.features);
			console.log(heroCreator.hero);
			
			let x1 = heroCreator.hero.colorEyes[0];
			let x2 = heroCreator.hero.colorEyes[1];
			let x3 = heroCreator.hero.colorEyes[2];
			
			let x4 = heroCreator.hero.colorHair[0];
			let x5 = heroCreator.hero.colorHair[1];
			let x6 = heroCreator.hero.colorHair[2];
			
			let x7 = heroCreator.hero.colorSkin[0];
			let x8 = heroCreator.hero.colorSkin[1];
			let x9 = heroCreator.hero.colorSkin[2];
			$("#eyesColor").css("background-color", "rgb("+x1+", "+x2 + ", "+x3+")");
			$("#hairColor").css("background-color", "rgb("+x4+", "+x5 + ", "+x6+")");
			$("#skinColor").css("background-color", "rgb("+x7+", "+x8 + ", "+x9+")");
		});
	}
});
