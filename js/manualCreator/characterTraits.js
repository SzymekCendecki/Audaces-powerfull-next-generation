import{ letsPlayGame } from '../functions.js';

export let chooseCharacterTraits = (hero) => {
    document.querySelector("#characterTraits").addEventListener("click", ()=>{
        const showCharacterTraits = `
        <div id="eyes">
            <p class="labelName">kolor oczu</p>
    
            <div class="displayFlex">
                <input type="radio" id="blue" name="eyesColor" value="niebieskie">
                <label for="blue" class="blueText">niebieskie</label>
    
                  <input type="radio" id="brown" name="eyesColor" value="brązowe">
                <label for="brown" class="blueText">brązowe</label>
    
                <input type="radio" id="green" name="eyesColor" value="zielone">
                  <label for="green" class="blueText">zielone</label>
    
                  <input type="radio" id="gray" name="eyesColor" value="szare">
                 <label for="gray" class="blueText">szare</label>
    
                <input type="radio" id="red" name="eyesColor" value="czerwone">
                <label for="red" class="blueText">czerwone</label>
            </div>
                  
          <p id="eyesColor" class="standardSize labelName"></p>
      </div>
    
      <div id="hair">
            <p class="labelName">kolor włosów</p>
    
            <div class="displayFlex">
                <input type="radio" id="blond" name="hairColor" value="blond">
                <label for="blond" class="blueText">blond</label>
    
                  <input type="radio" id="black" name="hairColor" value="czarne">
                <label for="black" class="blueText">czarne</label>
    
                <input type="radio" id="redHair" name="hairColor" value="rude">
                  <label for="redHair" class="blueText">rude</label>
    
                  <input type="radio" id="colors" name="hairColor" value="kolorowe">
                 <label for="colors" class="blueText">kolorowe</label>
    
                <input type="radio" id="none" name="hairColor" value="brak włosów">
                <label for="none" class="blueText">brak włosów</label>
            </div>  		 
            
            <p id="hairColor" class="standardSize labelName"></p>
      </div>
          
        <div id="skin">	
            <p class="labelName">kolor skóry</p>
            
            <div class="displayFlex">
                <input type="radio" id="white" name="skinColor" value="biała">
                <label for="white" class="blueText">blond</label>
    
                  <input type="radio" id="brownSkin" name="skinColor" value="brązowa">
                <label for="brownSkin" class="blueText">brązowa</label>
    
                <input type="radio" id="blackSkin" name="skinColor" value="czarna">
                  <label for="blackSkin" class="blueText">czarna</label>
    
                  <input type="radio" id="greenSkin" name="skinColor" value="zielona">
                <label for="greenSkin" class="blueText">zielona</label>
    
                <input type="radio" id="olive" name="skinColor" value="oliwkowa">
                <label for="olive" class="blueText">oliwkowa</label>
            </div>
                      
          <p id="skinColor" class="standardSize labelName"></p>
      </div>
    
      <div id="tattoos">	
            <p class="labelName">tatuaże</p>
            
            <div class="displayFlex">
                <input type="radio" id="none" name="tattoos" value="brak">
                <label for="none" class="blueText">brak</label>
    
                  <input type="radio" id="prison" name="tattoos" value="więzienne">
                <label for="prison" class="blueText">więzienne</label>
    
                <input type="radio" id="tribal" name="tattoos" value="plemienne">
                  <label for="tribal" class="blueText">plemiennne</label>
    
                  <input type="radio" id="strange" name="tattoos" value="dziwne">
                <label for="strange" class="blueText">dziwne</label>
            </div>
                      
              <p id="choosenTattoo" class="standardSize labelName"></p>
          </div>
    
          <div id="weight">	
            <p class="labelName">waga</p>
    
            <p id="noRaceWeight" class="labelName"></p>
    
             <p id="choosenWeight" class="standardSize labelName"></p>
         </div>
    
         <div id="height">	
            <p class="labelName">wzrost</p>
              
            <p id="noRaceHeight" class="labelName"></p>	
    
            <p id="choosenHeight" class="standardSize labelName"></p>
        </div>
        `;
        mainContainer.innerHTML = "";
        mainContainer.innerHTML = showCharacterTraits;
    
        function checkRace(hero){
            if(hero[2] == ""){
                
                document.querySelector("#noRaceWeight").innerHTML = "musisz wybrać rasę";
                document.querySelector("#noRaceHeight").innerHTML = "musisz wybrać rasę";
            
            }else{
                
                switch (hero[2]) {
                    case 'człowiek':
    
                        document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="40" max="120" step="1"></input>';
    
                        document.querySelector("#vol").addEventListener("change", ()=>{
                            hero.splice(13, 1, document.getElementById("vol").value);
                            document.querySelector("#choosenWeight").innerHTML ="";
                            document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
                            letsPlayGame(hero);
                        });
                         
                        document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="150" max="210" step="1"></input>';
                        
                        document.querySelector("#volume").addEventListener("change", ()=>{
                            hero.splice(14, 1, document.getElementById("volume").value);
                            document.querySelector("#choosenHeight").innerHTML ="";
                            document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
                            letsPlayGame(hero);
                        });
    
                        break;
    
                    case 'półork':
    
                        document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="50" max="140" step="1"></input>';
    
                        document.querySelector("#vol").addEventListener("change", ()=>{
                            hero.splice(13, 1, document.getElementById("vol").value);
                            document.querySelector("#choosenWeight").innerHTML ="";
                            document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
                            letsPlayGame(hero);
                        });
                         
    
                        document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="170" max="220" step="1"></input>';
                        
                        document.querySelector("#volume").addEventListener("change", ()=>{
                            hero.splice(14, 1, document.getElementById("volume").value);
                            document.querySelector("#choosenHeight").innerHTML ="";
                            document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
                            letsPlayGame(hero);
                        });
                
                        break;
    
                    case 'ork':
    
                        document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="80" max="180" step="1"></input>';
    
                        document.querySelector("#vol").addEventListener("change", ()=>{
                            hero.splice(13, 1, document.getElementById("vol").value);
                            document.querySelector("#choosenWeight").innerHTML ="";
                            document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
                            letsPlayGame(hero);
                        });
                         
    
                        document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="180" max="240" step="1"></input>';
                        
                        document.querySelector("#volume").addEventListener("change", ()=>{
                            hero.splice(14, 1, document.getElementById("volume").value);
                            document.querySelector("#choosenHeight").innerHTML ="";
                            document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
                            letsPlayGame(hero);
                        });
                        break;
    
                    case 'półelf':
    
                        document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="40" max="100" step="1"></input>';
    
                        document.querySelector("#vol").addEventListener("change", ()=>{
                            hero.splice(13, 1, document.getElementById("vol").value);
                            document.querySelector("#choosenWeight").innerHTML ="";
                            document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
                            letsPlayGame(hero);
                        });
                         
    
                        document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="165" max="210" step="1"></input>';
                        
                        document.querySelector("#volume").addEventListener("change", ()=>{
                            hero.splice(14, 1, document.getElementById("volume").value);
                            document.querySelector("#choosenHeight").innerHTML ="";
                            document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
                            letsPlayGame(hero);
                        });
                        break;
    
                    case 'elf':
    
                        document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="40" max="90" step="1"></input>';
    
                        document.querySelector("#vol").addEventListener("change", ()=>{
                            hero.splice(13, 1, document.getElementById("vol").value);
                            document.querySelector("#choosenWeight").innerHTML ="";
                            document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
                            letsPlayGame(hero);
                        });
                         
    
                        document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="180" max="210" step="1"></input>';
                        
                        document.querySelector("#volume").addEventListener("change", ()=>{
                            hero.splice(14, 1, document.getElementById("volume").value);
                            document.querySelector("#choosenHeight").innerHTML ="";
                            document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
                            letsPlayGame(hero);
                        });
                        break;
    
                    case 'krasnolud':
    
                        document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="70" max="100" step="1"></input>';
    
                        document.querySelector("#vol").addEventListener("change", ()=>{
                            hero.splice(13, 1, document.getElementById("vol").value);
                            document.querySelector("#choosenWeight").innerHTML ="";
                            document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
                            letsPlayGame(hero);
                        });
                         
    
                        document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="100" max="145" step="1"></input>';
                        
                        document.querySelector("#volume").addEventListener("change", ()=>{
                            hero.splice(14, 1, document.getElementById("volume").value);
                            document.querySelector("#choosenHeight").innerHTML ="";
                            document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
                            letsPlayGame(hero);
                        });
            
                        break;
    
                    case 'gnom':
    
                        document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="50" max="80" step="1"></input>';
    
                        document.querySelector("#vol").addEventListener("change", ()=>{
                            hero.splice(13, 1, document.getElementById("vol").value);
                            document.querySelector("#choosenWeight").innerHTML ="";
                            document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
                            letsPlayGame(hero);
                        });					 
    
                        document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="100" max="145" step="1"></input>';
                        
                        document.querySelector("#volume").addEventListener("change", ()=>{
                            hero.splice(14, 1, document.getElementById("volume").value);
                            document.querySelector("#choosenHeight").innerHTML ="";
                            document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
                            letsPlayGame(hero);
                        });
                
                        break;
    
                    case 'niziołek':
    
                        document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="60" max="100" step="1"></input>';
    
                        document.querySelector("#vol").addEventListener("change", ()=>{
                            hero.splice(13, 1, document.getElementById("vol").value);
                            document.querySelector("#choosenWeight").innerHTML ="";
                            document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
                            letsPlayGame(hero);
                        });				
    
                        document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="105" max="150" step="1"></input>';
                        
                        document.querySelector("#volume").addEventListener("change", ()=>{
                            hero.splice(14, 1, document.getElementById("volume").value);
                            document.querySelector("#choosenHeight").innerHTML ="";
                            document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
                            letsPlayGame(hero);
                        });
                        break;
    
                    case 'goblin':
    
                        document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="50" max="80" step="1"></input>';
    
                        document.querySelector("#vol").addEventListener("change", ()=>{
                            hero.splice(13, 1, document.getElementById("vol").value);
                            document.querySelector("#choosenWeight").innerHTML ="";
                            document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
                            letsPlayGame(hero);
                        });				
    
                        document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="80" max="120" step="1"></input>';
                        
                        document.querySelector("#volume").addEventListener("change", ()=>{
                            hero.splice(14, 1, document.getElementById("volume").value);
                            document.querySelector("#choosenHeight").innerHTML ="";
                            document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
                            letsPlayGame(hero);
                        });
    
                        break;
    
                    case 'trol':
    
                        document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="150" max="200" step="1"></input>';
    
                        document.querySelector("#vol").addEventListener("change", ()=>{
                            hero.splice(13, 1, document.getElementById("vol").value);
                            document.querySelector("#choosenWeight").innerHTML ="";
                            document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
                            letsPlayGame(hero);
                        });				
    
                        document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="220" max="260" step="1"></input>';
                        
                        document.querySelector("#volume").addEventListener("change", ()=>{
                            hero.splice(14, 1, document.getElementById("volume").value);
                            document.querySelector("#choosenHeight").innerHTML ="";
                            document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
                            letsPlayGame(hero);
                        });
        
                        break;
    
                    case 'półolbrzym':
    
                        document.querySelector("#noRaceWeight").innerHTML = '<input type="range" id="vol" name="vol" min="210" max="300" step="1"></input>';
    
                        document.querySelector("#vol").addEventListener("change", ()=>{
                            hero.splice(13, 1, document.getElementById("vol").value);
                            document.querySelector("#choosenWeight").innerHTML ="";
                            document.querySelector("#choosenWeight").innerHTML = hero[13] + " kg";
                            letsPlayGame(hero);
                        });				
    
                        document.querySelector("#noRaceHeight").innerHTML = '<input type="range" id="volume" name="volume" min="260" max="320" step="1"></input>';
                        
                        document.querySelector("#volume").addEventListener("change", ()=>{
                            hero.splice(14, 1, document.getElementById("volume").value);
                            document.querySelector("#choosenHeight").innerHTML ="";
                            document.querySelector("#choosenHeight").innerHTML = hero[14] + " cm";
                            letsPlayGame(hero);
                        });
    
                        break;
                  }
    
            }
        }
        checkRace(hero);
    
        const formEyes = document.querySelector("#eyes");
        const eyeColor = formEyes.querySelectorAll("input[name=eyesColor]");
    
         for (const radio of eyeColor) {
            radio.addEventListener("change", function() {
                for (const radio of eyeColor) {
                    if (radio.checked) {
                        document.querySelector("#eyesColor").innerText = `kolor oczu: ${radio.value}`;
                        hero.splice(9, 1, radio.value);
                        letsPlayGame(hero);
                    }
                }
            });
        }
    
        const formHair = document.querySelector("#hair");
        const hairColor = formHair.querySelectorAll("input[name=hairColor]");
    
         for (const radio of hairColor) {
            radio.addEventListener("change", function() {
                for (const radio of hairColor) {
                    if (radio.checked) {
                        document.querySelector("#hairColor").innerText = `kolor włosów: ${radio.value}`;
                        hero.splice(10, 1, radio.value);
                        letsPlayGame(hero);
                    }
                }
            });
        }
    
        const formSkin = document.querySelector("#skin");
        const skinColor = formSkin.querySelectorAll("input[name=skinColor]");
    
         for (const radio of skinColor) {
            radio.addEventListener("change", function() {
                for (const radio of skinColor) {
                    if (radio.checked) {
                        document.querySelector("#skinColor").innerText = `kolor skóry: ${radio.value}`;
                        hero.splice(11, 1, radio.value);
                        letsPlayGame(hero);
                    }
                }
            });
        }
    
        const formTattoos = document.querySelector("#tattoos");
        const choosenTattoo = formTattoos.querySelectorAll("input[name=tattoos]");
    
         for (const radio of choosenTattoo) {
            radio.addEventListener("change", function() {
                for (const radio of choosenTattoo) {
                    if (radio.checked) {
                        document.querySelector("#choosenTattoo").innerText = `tatuaż: ${radio.value}`;
                        hero.splice(12, 1, radio.value);
                        letsPlayGame(hero);
                    }
                }
            });
        }	
    });
    
}