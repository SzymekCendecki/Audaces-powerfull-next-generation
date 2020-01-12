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
	const newBtn = document.createElement("div");
	where.appendChild(newBtn);
	newBtn.setAttribute("id", name);
}

let newInput = (where, typeName, idName) => {
	const newInput = document.createElement("input");
	where.appendChild(newInput);
	newInput.setAttribute("type", typeName);
	newInput.setAttribute("id", idName);
}

export let rndFromArray = (nameArray, hero, position) => {
		let draw = nameArray[Math.floor(Math.random() * nameArray.length)];
		hero.splice(position, 1, draw);
	}
	
export let colors = (arrayNum, where, hero) =>{
	for (let i=0; i<3; i++){
		let a = Math.round(Math.random()*255);
			hero[arrayNum].splice([i], 1, a);
		}
						
	document.querySelector(where).setAttribute("style", `background-color: rgb(${parseInt(hero[arrayNum][0])},${parseInt(hero[arrayNum][1])}, ${parseInt(hero[arrayNum][2])}); padding-right: 50px;`);
}
	