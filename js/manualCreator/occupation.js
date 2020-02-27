import{ letsPlayGame } from '../functions.js';

export let chooseOccupation = (hero) =>{
    document.querySelector("#occupation").addEventListener("click", ()=>{
		const showOccupation = `<p class="labelName">wybierz profesję</p>
		<button id="warrior" class="btnAccept">wojownik</button>
		<button id="criminal" class="btnAccept">złoczyńca</button>
		<button id="wizard" class="btnAccept">czarodziej</button>	
		<p id="comment" class="greenText"></p>
		`;
		mainContainer.innerHTML = "";
		mainContainer.innerHTML = showOccupation;
	
		document.querySelector("#warrior").addEventListener("click", ()=>{ 
			hero.splice(3, 1, "wojownik");	
			document.querySelector("#comment").innerHTML = "";
			document.querySelector("#comment").innerHTML="wybrano wojownika";
			letsPlayGame(hero);
		});
		document.querySelector("#criminal").addEventListener("click", ()=>{ 
			hero.splice(3, 1, "złoczyńca");	
			document.querySelector("#comment").innerHTML = "";
			document.querySelector("#comment").innerHTML="wybrano złoczyńcę";
			letsPlayGame(hero);
		});
		document.querySelector("#wizard").addEventListener("click", ()=>{ 
			hero.splice(3, 1, "czarodziej"); 
			document.querySelector("#comment").innerHTML = "";
			document.querySelector("#comment").innerHTML="wybrano czarodzieja";
			letsPlayGame(hero);
		});
	});

}