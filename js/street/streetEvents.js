export let inRoom = (a, b, c) =>{
    a.classList.remove("displayNone");
    b.classList.add("displayNone");

    fetch(c).then(response => response.json()).then(data => { 
        document.querySelector("#first").innerHTML = data.room2;
    }).catch(error => console.error(error))
}

export let toMarket = (a, b, c, d) =>{
    a.addEventListener("click", ()=>{
        b.classList.add("displayNone");
        c.classList.remove("displayNone");
        
        fetch(d).then(response => response.json()).then(data => { 
            document.querySelector("#first").innerHTML = data.market;
        }).catch(error => console.error(error))
    });
}