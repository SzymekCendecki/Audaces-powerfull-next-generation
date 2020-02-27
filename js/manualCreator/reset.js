import{ clearHero } from '../functions.js';

export let reset = (hero) => {
    document.querySelector("#reset").addEventListener("click", ()=>{
        clearHero(hero);
    });
}