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

//indeksy: 0-siła, 1-wytrzymałość, 2-zręczność, 3-inteligencja, 4-charyzma
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

	
	document.querySelector('button').addEventListener('click', ()=>{
		document.querySelector("#gameTitle").classList.add("displayNone");
		document.querySelector("#gameSubTitle").classList.add("displayNone");
		document.getElementsByName("startBtn")[0].classList.add("displayNone");
	});
