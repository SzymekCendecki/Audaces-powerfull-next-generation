import{ letsPlayGame } from '../functions.js';

export let chooseSex = (hero) =>{
    document.querySelector("#sex").addEventListener("click", ()=>{
		const showSex = `<p class='labelName'>wybierz płeć</p>
		<button id="chooseMan" class="btnAccept">mężczyzna</button>
		<button id="chooseWomen" class="btnAccept">kobieta</button>
		<button id="chooseOther" class="btnAccept">nie wiadomo</button>
		<p id="comment" class="greenText"></p>
		`;
		mainContainer.innerHTML = "";
		mainContainer.innerHTML = showSex;
		
		document.querySelector("#chooseMan").addEventListener("click", ()=>{
			hero.splice(1, 1, "mężczyzna");
			document.querySelector("#comment").innerHTML = "";
			document.querySelector("#comment").innerHTML="wybrano mężczyznę";
			letsPlayGame(hero);
		});

		document.querySelector("#chooseWomen").addEventListener("click", ()=>{
			hero.splice(1, 1, "kobieta");
			document.querySelector("#comment").innerHTML = "";
			document.querySelector("#comment").innerHTML="wybrano kobietę";
			letsPlayGame(hero);
		});

		document.querySelector("#chooseOther").addEventListener("click", ()=>{
			hero.splice(1, 1, "nie wiadomo");
			document.querySelector("#comment").innerHTML = "";
			document.querySelector("#comment").innerHTML="wybrano nie określoną płeć";
			letsPlayGame(hero);
		});
	});
}