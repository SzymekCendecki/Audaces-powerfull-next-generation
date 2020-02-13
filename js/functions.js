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

	