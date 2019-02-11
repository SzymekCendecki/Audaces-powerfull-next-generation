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
	
	module.exports.randomHero = function(){

		$("#randomHero").on("click", ()=>{
			randomSex(heroCreator.sex, heroCreator.hero);
			randomName(heroCreator.namesMan, heroCreator.namesWomen, heroCreator.hero);
			randomRace(heroCreator.races, heroCreator.hero);
			randomOccupation(heroCreator.occupation, heroCreator.hero);
			setOccupationPoints(heroCreator.hero.occupation, heroCreator.occupationPoints, heroCreator.hero);
			setRacePoints(heroCreator.hero.race, heroCreator.racePoints, heroCreator.hero);
			randomPoints(heroCreator.hero);
				
			$("#mainDescription").empty().append(`<p class='heroRandom'>imię</p><p class='heroRandom'>${heroCreator.hero.name}</p><p class='heroRandom'>płeć</p><p class='heroRandom'>${heroCreator.hero.sex}</p><p class='heroRandom'>rasa</p><p class='heroRandom'>${heroCreator.hero.race}</p><p class='heroRandom'>profesja</p><p class='heroRandom'>${heroCreator.hero.occupation}</p><p class='heroRandom'>punkty</p><p id="summaryPoints" class='heroRandom'></p>`);
			
			heroCreator.hero.summaryPoints();
		});

	}
});
