export let toFirstMenu = () =>{
		info.classList.remove('displayNone');
		licence.classList.remove('displayNone');
		tutorial.classList.remove('displayNone');
		newGame.classList.remove('displayNone');

		gameTitle.classList.add('displayNone');
		gameSubTitle.classList.add('displayNone');

		document.querySelector('.progress').classList.add('displayNone');
	}
	
export let newP = (data) =>{ 
 		const newP= document.createElement("p"); 
  		let newContent = document.createTextNode(data); 
		newP.appendChild(newContent);
		newP.classList.add("pStyles");
		mainContainer.appendChild(newP); 
	}

export let newBtn = (text, where, name) =>{
	const newBtn = document.createElement("button");
	let textBtn = document.createTextNode(text);
	newBtn.appendChild(textBtn);
	newBtn.setAttribute("id", name);
	where.appendChild(newBtn);
}

export let newDiv = (where, name) =>{
	const newDiv = document.createElement("div");
	where.appendChild(newDiv);
	newDiv.setAttribute("id", name);
}

export let newInput = (where, typeName, idName) => {
	const newInput = document.createElement("input");
	where.appendChild(newInput);
	newInput.setAttribute("type", typeName);
	newInput.setAttribute("id", idName);
}

export let rndFromArray = (nameArray, hero, position) => {
		let draw = nameArray[Math.floor(Math.random() * nameArray.length)];
		hero.splice(position, 1, draw);
	}

export let letsPlayGame = (hero) =>{
	if(hero[0] !== "" && hero[1] !=="" && hero[2] !=="" && hero[3] !=="" && hero[4] !== 0 && hero[5] !== 0 && hero[6] !== 0 && hero[7] !==0 && hero[8] !=="" && hero[9] !=="" && hero[10] !=="" && hero[11] !=="" && hero[12] !=="" && hero[13] !=="" && hero[14] !==""){
		play.disabled = false;
		play.classList.remove("playDisabled");
		play.classList.add("playEnabled");
	}
}

export let clearHero = (hero) => {
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
  