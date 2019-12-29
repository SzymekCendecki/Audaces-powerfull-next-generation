export let toFirstMenu = () =>{
		info.classList.remove('displayNone');
		licence.classList.remove('displayNone');
		tutorial.classList.remove('displayNone');
		newGame.classList.remove('displayNone');

		gameTitle.classList.add('displayNone');
		gameSubTitle.classList.add('displayNone');

		document.querySelector('.progress').classList.add('displayNone');
	}
	
export let newP =(data) =>{ 
 		var newP= document.createElement("p"); 
  		var newContent = document.createTextNode(data); 
		newP.appendChild(newContent);
		newP.classList.add("pStyles");
		mainContainer.appendChild(newP); 
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
	