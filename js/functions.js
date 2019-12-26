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
