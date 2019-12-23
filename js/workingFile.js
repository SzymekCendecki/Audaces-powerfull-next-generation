const namesMan = ["Wortigern", "Gintor", "Hegel", "Derig", "Diggramon", "Zengowetoryk", "Deggetm", "Zigamon", "Birduk", "Ardenor", "Winterks", "Joluntik", "Menigor", "Oltis", "Kurdir"];

const namesWomen = ["Wortigerna", "Hejacynta", "Dejawina", "Ludiniam", "Keoburna", "Leokamina", "Erminia", "Xynenda", "Fejmira", "Apsurginis", "Wicynia", "Jermodernia", "Sertyksa"];

const races = ["człowiek", "półork", "ork", "półelf", "elf", "krasnolud", "gnom", "niziołek", "goblin", "trol", "półolbrzym"];

let occupation = ["wojownik", "złoczyńca", "czarodziej"]; 
let sex = ["kobieta", "mężczyzna", "nie wiadomo"]; 
let tattoo = ["brak", "więzienne", "plemienne", "dziwne"]; 

let equipWeapon = ["sztylet", "drew. pałka", "krótki miecz", "szabla", "włócznia", "proca", "łuk"];
let equipArmor = ["przeszywanica", "zbroja skórzana", "zbroja ćwiekowana"];
let equipShield = ["puklerz", "mała tarcza drew.", "mała tarcza metal."];
let equipOther = ["kostur", "mieszek", "torba podróżna", "sakwa", "plecak", "manierka", "sagan", "koc", "tuba na perg.", "pęk piór do pis.", "pergaminy 5szt.", "zwykłe ubranie", "fikuśna czapka", "płaszcz", "skórzany pas",  "igły i nici", "derka", "namiot", "drewniana miska", "drewniana łyżka", "pochodnia", "lampa oliwna", "kaganek", "lina 5m", "hubka i krzesiwo"];

let skillsWarrior = ["szt. przetrwania", "dyscyplina", "dowodzenie", "uderzenie tarczą", "jeździectwo", "sztylet", "krótki miecz", "szabla", "włócznia", "łuk", "puklerz", "mała tarcza drew.", "mała tarcza metal."];

let skillsCriminal = ["trucizny", "wspinaczka", "aktorstwo", "akrobatyka", "pułapki", "skradanie się", "kradzież", "uniki", "blefowanie", "drew. pałka"];

let skillsWizard = ["pisanie i czytanie", "przyw./odp. demona", "wróżbiarstwo", "leczenie ran", "rzuczanie czarów", "tworz. eliksirów", "tworz.mag. przedm.", "tworzenie maści", "tworzenie runów", "astrologia", "zielarstwo"];

//indexes: 0-force, 1-strength, 2-dexterity, 3-ntelligence, 4-charisma
	let warrior = [5, 5, 0, 0, 0]; 	
	let criminal = [0, 0, 10, 0, 0]; 
	let wizard = [0, 0, 0, 5, 5]; 

	let human = [0, 0, 0, 0, 0]; 
	let halfOrc = [3, 3, 0, -3, -3]; 
	let orc = [5, 5, 0, -5, -5]; 
	let halfElv = [-3, -3, 0, 3, 3]; 
	let elv = [-5, -5, 0, 5, 5]; 
	let dwarf = [4, 4, 0, -2, -3]; 
	let gnome = [-2, -2, 3, 3, 0]; 
	let halfling = [-3, 0, 6, 0, 0]; 
	let goblin = [2, -2, 4, 0, -4]; 
	let troll = [2, 0, 0, -2, -2]; 
	let semiGiant = [7, 7, -5, -3, 0]; 
	
	let sumPoints = [0, 0, 0, 0, 0];
	let features = ['siła', 'wytrzym.', 'zręczność', 'inteligencja', 'charyzma']; 
	
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

	let toFirstMenu = () =>{
		info.classList.remove('displayNone');
		licence.classList.remove('displayNone');
		tutorial.classList.remove('displayNone');
		newGame.classList.remove('displayNone');

		gameTitle.classList.add('displayNone');
		gameSubTitle.classList.add('displayNone');

		document.querySelector('.progress').classList.add('displayNone');
	}

	setTimeout( () => toFirstMenu(), 3000 );
	
	
	let newP =(data) =>{ 
 		var newP= document.createElement("p"); 
  		var newContent = document.createTextNode(data); 
		newP.appendChild(newContent);
		newP.classList.add("pStyles");
		mainContainer.appendChild(newP); 
	}
	
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
	
	randomHero.addEventListener("click", ()=>{
		console.log("działa");
	});
	
	createHero.addEventListener("click", ()=>{
		console.log("działa");
	});