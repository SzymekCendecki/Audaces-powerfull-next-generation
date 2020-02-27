import{ letsPlayGame } from '../functions.js';

export let preview = (hero) => {
    document.querySelector("#preview").addEventListener("click", ()=>{
        const showHero = `<div class = "showHero">
            <p id='name'>imię: ${hero[0]}</p>
            <p id='sex'>płeć: ${hero[1]}</p>
            <p id='race'>rasa: ${hero[2]}</p>
            <p id='occupation'>profesja: ${hero[3]}</p>
            <p id='force'>siła: ${hero[4]}</p>
            <p id='strength'>wytrzymałość: ${hero[5]}</p>
            <p id='dexterity'>zręczność: ${hero[6]}</p>
            <p id='intelligence'>inteligencja: ${hero[7]}</p>
            <p id='charisma'>charyzma: ${hero[8]}</p>
            <p id='eyes'>kolor oczu: <span id="eyesColor">${hero[9]}</span></p>
            <p id='hair'>kolor włosów: <span id="hairColor">${hero[10]}</span></p>
            <p id='skin'>kolor skóry: <span id="skinColor">${hero[11]}</span></p>
            <p id='tattoo'>tatuaże: ${hero[12]}</p>
            <p id='weight'>waga: ${hero[13]} kg</p>
            <p id='height'>wzrost: ${hero[14]} cm</p>
        </div>`;
    
        mainContainer.innerHTML = "";
        mainContainer.innerHTML = showHero;
        letsPlayGame(hero);
    });    
}