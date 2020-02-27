import{ letsPlayGame } from '../functions.js';

export let chooseRace = (hero) =>{
    
	document.querySelector("#race").addEventListener("click", ()=>{
		const showRace = `<p class="labelName">wybierz rasę</p>
		<button id="human" class="btnAccept">człowiek</button>
		<button id="halfOrc" class="btnAccept">półork</button>
		<button id="orc" class="btnAccept">ork</button>
		<button id="halfElv" class="btnAccept">półelf</button>
		<button id="elv" class="btnAccept">elf</button>
		<button id="dwarf" class="btnAccept">krasnolud</button>
		<button id="gnome" class="btnAccept">gnom</button>
		<button id="halfling" class="btnAccept">niziołek</button>
		<button id="goblin" class="btnAccept">goblin</button>
		<button id="troll" class="btnAccept">trol</button>
		<button id="semiGiant" class="btnAccept">półolbrzym</button>
		<p id="comment" class="greenText"></p>
		`;
		mainContainer.innerHTML = "";
		mainContainer.innerHTML = showRace;
		
		let xxx = (x, y) => {
			hero.splice(2, 1, x);	
			hero.splice(13, 1, "");
			hero.splice(14, 1, "");
			document.querySelector("#comment").innerHTML = "";
			document.querySelector("#comment").innerHTML=`wybrano ${y}`;
		}
		
		document.querySelector("#human").addEventListener("click", ()=>{ 
			xxx("człowiek", "człowieka");
			letsPlayGame(hero);
		});
		document.querySelector("#halfOrc").addEventListener("click", ()=>{ 
			xxx("półork", "półorka");
			letsPlayGame(hero);
		});
		document.querySelector("#orc").addEventListener("click", ()=>{ 
			xxx("ork", "orka");
			letsPlayGame(hero);
		});
		document.querySelector("#halfElv").addEventListener("click", ()=>{ 
			xxx("półelf", "półelfa");
			letsPlayGame(hero);
		});
		document.querySelector("#elv").addEventListener("click", ()=>{ 
			xxx("elf", "elfa");
			letsPlayGame(hero);
		});
		document.querySelector("#dwarf").addEventListener("click", ()=>{ 
			xxx("krasnolud", "krasnoluda");
			letsPlayGame(hero);
		});
		document.querySelector("#gnome").addEventListener("click", ()=>{ 
			xxx("gnom", "gnoma");
			letsPlayGame(hero);
		});
		document.querySelector("#halfling").addEventListener("click", ()=>{ 
			xxx("niziołek", "niziołka");
			letsPlayGame(hero);
		});
		document.querySelector("#goblin").addEventListener("click", ()=>{ 
			xxx("goblin", "goblina");
			letsPlayGame(hero);
		});
		document.querySelector("#troll").addEventListener("click", ()=>{ 
			xxx("trol", "trola");
			letsPlayGame(hero);
		});
		document.querySelector("#semiGiant").addEventListener("click", ()=>{ 
			xxx("półolbrzym", "półolbrzyma");
			letsPlayGame(hero);
		});

	});
}