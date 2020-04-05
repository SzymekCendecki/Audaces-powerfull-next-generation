import{ closeP } from '../functions.js';

export let wardrobe = (path, second, equip) =>{
    fetch(path + 'room.json').then(response => response.json()).then(data => { 

		if(equip.indexOf('płaszcz') == -1){
			second.innerHTML = data.fullWardrobe;
		}else{
			second.innerHTML = data.emptyWardrobe;
			closeP("#second");
		}

		document.querySelector("#coat").addEventListener("click", ()=>{
			equip.push('płaszcz');
			second.innerHTML = "";
			second.innerHTML = data.emptyWardrobe;
			closeP("#second");		
		});
		
	}).catch(error => console.error(error))
}
