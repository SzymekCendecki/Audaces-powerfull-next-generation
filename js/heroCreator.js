let randomHero = require("./randomHero.js");
let chooseHero = require("./chooseHero.js");

document.addEventListener("DOMContentLoaded", () => {

let namesMan = ["Wortigern", "Gintor", "Hegel", "Derig", "Diggramon", "Zengowetoryk", "Deggetm", "Zigamon", "Birduk", "Ardenor", "Winterks", "Joluntik", "Menigor", "Oltis", "Kurdir"]; module.exports.namesMan = namesMan;

let namesWomen = ["Wortigerna", "Hejacynta", "Dejawina", "Ludiniam", "Keoburna", "Leokamina", "Erminia", "Xynenda", "Fejmira", "Apsurginis", "Wicynia", "Jermodernia", "Sertyksa"]; module.exports.namesWomen = namesWomen;

let races = ["człowiek", "półork", "ork", "półelf", "elf", "krasnolud", "gnom", "niziołek", "goblin", "trol", "półolbrzym"]; module.exports.races = races;

let occupation = ["wojownik", "złoczyńca", "czarodziej"]; module.exports.occupation = occupation;
let sex = ["kobieta", "mężczyzna", "nie wiadomo"]; module.exports.sex = sex;
let tattoo = ["brak", "więzienne", "plemienne", "dziwne"]; module.exports.tattoo = tattoo;

let equipWeapon = ["sztylet", "drew. pałka", "krótki miecz", "szabla", "włócznia", "proca", "łuk"];
let equipArmor = ["przeszywanica", "zbroja skórzana", "zbroja ćwiekowana"];
let equipShield = ["puklerz", "mała tarcza drew.", "mała tarcza metal."];
let equipOther = ["kostur", "mieszek", "torba podróżna", "sakwa", "plecak", "manierka", "sagan", "koc", "tuba na perg.", "pęk piór do pis.", "pergaminy 5szt.", "zwykłe ubranie", "fikuśna czapka", "płaszcz", "skórzany pas",  "igły i nici", "derka", "namiot", "drewniana miska", "drewniana łyżka", "pochodnia", "lampa oliwna", "kaganek", "lina 5m", "hubka i krzesiwo"];

let skillsWarrior = ["szt. przetrwania", "dyscyplina", "dowodzenie", "uderzenie tarczą", "jeździectwo", "sztylet", "krótki miecz", "szabla", "włócznia", "łuk", "puklerz", "mała tarcza drew.", "mała tarcza metal."];
module.exports.skillsWarrior = skillsWarrior;

let skillsCriminal = ["trucizny", "wspinaczka", "aktorstwo", "akrobatyka", "pułapki", "skradanie się", "kradzież", "uniki", "blefowanie", "drew. pałka"];
module.exports.skillsCriminal = skillsCriminal;

let skillsWizard = ["pisanie i czytanie", "przyw./odp. demona", "wróżbiarstwo", "leczenie ran", "rzuczanie czarów", "tworz. eliksirów", "tworz.mag. przedm.", "tworzenie maści", "tworzenie runów", "astrologia", "zielarstwo"];
module.exports.skillsWizard = skillsWizard;

//indeksy: 0-siła, 1-wytrzymałość, 2-zręczność, 3-inteligencja, 4-charyzma
	let warrior = [5, 5, 0, 0, 0]; 	module.exports.warrior = warrior;
	let criminal = [0, 0, 10, 0, 0]; module.exports.criminal = criminal;
	let wizard = [0, 0, 0, 5, 5]; module.exports.wizard = wizard;

	let human = [0, 0, 0, 0, 0]; module.exports.human = human;
	let halfOrc = [3, 3, 0, -3, -3]; module.exports.halfOrc = halfOrc;
	let orc = [5, 5, 0, -5, -5]; module.exports.orc = orc;
	let halfElv = [-3, -3, 0, 3, 3]; module.exports.halfElv = halfElv;
	let elv = [-5, -5, 0, 5, 5]; module.exports.elv = elv;
	let dwarf = [4, 4, 0, -2, -3]; module.exports.dwarf = dwarf;
	let gnome = [-2, -2, 3, 3, 0]; module.exports.gnome = gnome;
	let halfling = [-3, 0, 6, 0, 0]; module.exports.halfling = halfling;
	let goblin = [2, -2, 4, 0, -4]; module.exports.goblin = goblin;
	let troll = [2, 0, 0, -2, -2]; module.exports.troll = troll;
	let semiGiant = [7, 7, -5, -3, 0]; module.exports.semiGiant = semiGiant;
	
	let sumPoints = [0, 0, 0, 0, 0]; module.exports.sumPoints = sumPoints;
	let features = ['siła', 'wytrzym.', 'zręczność', 'inteligencja', 'charyzma']; module.exports.features = features;
	
	module.exports.heroCreator = function(){

		class Person{
			constructor(){
			}
			setSex(sex){ this.sex = sex; }
			setName(name){ this.name = name; }
			setRace(race){ this.race = race; }
			setOccupation(occupation){ this.occupation = occupation; }
			setOccupationPoints(occupationPoints){ this.occupationPoints = occupationPoints; }
			setRacePoints(racePoints){ this.racePoints = racePoints; }
			setRandomPoints(randomPoints){ this.randomPoints = randomPoints; }
			setSummaryPoints(summaryPoints){ this.summaryPoints = summaryPoints; }
			setEyesColor(colorEyes){ this.colorEyes = colorEyes; }
			setHairColor(colorHair){ this.colorHair = colorHair; }
			setSkinColor(colorSkin){ this.colorSkin = colorSkin; }
			setWeight(weight){ this.weight = weight; }
			setHeight(height){ this.height = height; }
		}

//1-name, 2 - sex, 3 - race
		let hero = new Person();
		module.exports.hero = hero;
		
		let blacksmith = new Person("kowal", "mężczyzna", "krasnolud");
		blacksmith.setOccupation = "wojownik";
		module.exports.blacksmith = blacksmith;
		
		$("#game").on("click", ()=>{
			$("#info, #licence, #tutorial, #game").hide();
			$("#randomHero, #manualHero").show();
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
						$("#mainDescription").empty().append(data.heroCreator[0].firstText);
				 },
					type: 'GET'
			 });
		});
	}

	randomHero.randomHero();
	chooseHero.manualHero();

});
