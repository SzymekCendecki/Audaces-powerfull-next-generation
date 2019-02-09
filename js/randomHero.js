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

	module.exports.randomHero = function(){

		$("#randomHero").on("click", ()=>{
			randomSex(heroCreator.sex, heroCreator.hero);
			randomName(heroCreator.namesMan, heroCreator.namesWomen, heroCreator.hero);
			randomRace(heroCreator.races, heroCreator.hero);
			$.ajax({
					url: 'https://szymekcendecki.github.io/Audaces-powerfull-next-generation/jsonFiles/heroCreator.json',
					data: {
						format: 'json'
					},
					error: ()=>{
						console.log("coś nie bangla...");
					},
					dataType: 'json',
					success: (data)=>{
						$("#mainDescription").empty().append(data.heroCreator[0].random);
				 },
					type: 'GET'
			 });
		});

	}
});
