    export let inRoom = (a, b, c) =>{
        a.classList.remove("displayNone");
        b.classList.add("displayNone");
    
        fetch(c).then(response => response.json()).then(data => { 
            document.querySelector("#first").innerHTML = data.room2;
        }).catch(error => console.error(error))
    }
    
    