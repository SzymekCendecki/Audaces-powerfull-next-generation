export let features = (a, b, c) =>{
    	a.classList.remove("displayNone");

	const featuresHero = `<div class = "showHero">
		<p id='name'>imię: ${b[0]}</p>
		<p id='sex'>płeć: ${b[1]}</p>
		<p id='race'>rasa: ${b[2]}</p>
		<p id='occupation'>profesja: ${b[3]}</p>
		<p id='force'>siła: ${b[4]}</p>
		<p id='strength'>wytrzymałość: ${b[5]}</p>
		<p id='dexterity'>zręczność: ${b[6]}</p>
		<p id='intelligence'>inteligencja: ${b[7]}</p>
		<p id='charisma'>charyzma: ${b[8]}</p>
		<p id='eyes'>kolor oczu: <span id="eyesColor">${b[9]}</span></p>
		<p id='hair'>kolor włosów: <span id="hairColor">${b[10]}</span></p>
		<p id='skin'>kolor skóry: <span id="skinColor">${b[11]}</span></p>
		<p id='tattoo'>tatuaże: ${b[12]}</p>
		<p id='weight'>waga: ${b[13]} kg</p>
		<p id='height'>wzrost: ${b[14]} cm</p>
	</div>`;

		c.innerHTML = "";
		c.innerHTML = featuresHero;
}

export let equipBtn = (a, b, equip, gold) =>{
	a.classList.remove("displayNone");
	b.innerHTML = "";

	for (let i=0; i<equip.length; i++){
		let p = document.createElement("p");
		p.append(`${equip[i]}`);
		p.classList.add("pStyles");
		p.classList.add("centerText");
		b.append(p);
	}

	let p = document.createElement("p");
	p.append(`złoto: ` + gold);
	p.classList.add("pStyles");
	b.append(p);
}

export let skillsBtn = (infoContainer, infoHero, skills) =>{
	infoContainer.classList.remove("displayNone");

	infoHero.innerHTML = "";

	for (let i=0; i<skills.length; i++){
		let p = document.createElement("p");
		p.append(`${skills[i]}`);
		p.classList.add("pStyles");
		p.classList.add("centerText");
		infoHero.append(p);
	}
}

export let tasksBtn = (infoContainer, infoHero, tasks) =>{
	infoContainer.classList.remove("displayNone");

	infoHero.innerHTML = "";

	for (let i=0; i<tasks.length; i++){
		let p = document.createElement("p");
		p.append(`${tasks[i]}`);
		p.classList.add("pStyles");
		p.classList.add("centerText");
		infoHero.append(p);
	}
}