import{  letsPlayGame } from '../functions.js';

export let chooseName = (hero) =>{
    document.querySelector("#name").addEventListener("click", ()=>{
        const showName = `<p class='labelName'>podaj imię</p>
		    <input type="text" id="chooseName" name="name" class='fontInput'>
		    <button id="accept" class="btnAccept">zatwierdź</button>
		    <p id="comment"></p>
		`;

		mainContainer.innerHTML = "";
		mainContainer.innerHTML = showName;
		letsPlayGame(hero);

		document.querySelector("#accept").addEventListener("click", ()=>{

			const noNumbersExpression = /^[a-zA-Z]+$/;

			let choosenName = document.getElementById("chooseName").value;
			let isValid = noNumbersExpression.test(choosenName); 

			if(isValid === true){
				hero.splice(0, 1, choosenName);
				document.querySelector("#comment").innerHTML = "";
				document.querySelector("#comment").innerHTML=`<p class='greenText'>Twoje imię to: ${choosenName}</p>`;
			}else{
				document.querySelector("#comment").innerHTML = "";
				document.querySelector("#comment").innerHTML="<p class='redText'>imię nie może zawierać cyfr, znaków specjalnych i białych znaków</p>";
			}
        });
    });
}