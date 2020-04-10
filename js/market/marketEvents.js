export let toStreet = (a, b, c, d) =>{
	a.addEventListener("click", ()=>{
		b.classList.remove("displayNone");
		c.classList.add("displayNone");
	
		fetch(d).then(response => response.json()).then(data => { 
			document.querySelector("#first").innerHTML = data.street;
		}).catch(error => console.error(error))
	});
}

export let buyList = (a, b) =>{
    a.classList.remove("displayNone");

    b.innerHTML = `
    <p class='pStyles'>Możesz kupić:</p>
    <div id='itemsBuy' class='displayFlex'>

        <button id='spear' class='btnAccept' data-cost='6'>włócznia</button>
        <button id='bucket' class='btnAccept' data-cost='2'>wiadro</button>
        <button id='buckler' class='btnAccept' data-cost='6'>puklerz</button>
        <button id='herring' class='btnAccept' data-cost='1'>śledzie</button>
        <button id='blanket' class='btnAccept' data-cost='2'>koc</button>
        <button id='dagger' class='btnAccept' data-cost='4'>sztylet</button>
        <button id='sword' class='btnAccept' data-cost='10'>miecz</button>

    </div>	
    <p id='warning' class='pStyles'></p>
    `;
}

export let buyLoop = (b, c, d, e) =>{
    console.log(c);
    const allItems = document.querySelectorAll("#itemsBuy > button");
    for(let i=0; i<allItems.length; i++){
        allItems[i].addEventListener("click", ()=>{
            if(allItems[i].dataset.cost <= c){
                b.push(allItems[i].innerText);
                c = c - allItems[i].dataset.cost;
                d.innerHTML = `Zakupiono przedmiot: ${allItems[i].innerText}.`;
                e;
            }else{
                d.innerHTML = `Nie masz tyle złota !!!`;
                e;
            }
        });
    }
}

export let sellList = (a, b) =>{
    a.classList.remove("displayNone");

	b.innerHTML = `
	<p class='pStyles'>Możesz sprzedać:</p>
	<div id='itemsSell' class='displayFlex'>
	</div>	
	<p id='warning' class='pStyles'></p>
	`;
}

export let sellLoop = (a, b, c, d, e) =>{
    for(let i=0; i<a.length; i++){
        const btn = document.createElement("button"); 
        let text = document.createTextNode(`${a[i]}`); 
        btn.appendChild(text);  
        b.append(btn);
        btn.classList.add("btnAccept");

        if(btn.innerText == "paczka"){
            btn.classList.remove("btnAccept");
            btn.classList.add("redBtn");
            btn.disabled = true;
        }else{
            btn.classList.add("btnAccept");
            btn.disabled = false;
            btn.dataset.cost = "1";
        }
    }

    let btns = document.querySelectorAll("#itemsSell > button");

    for (let i=0; i<btns.length; i++){
        btns[i].addEventListener("click", ()=>{
            let index = a.indexOf(btns[i].innerText);
    
            if (index !== -1){
                a.splice(index, 1);
                btns[i].remove();
            }
            c = c + parseInt(btns[i].dataset.cost);

            d.innerHTML = `Sprzedano przedmiot: ${btns[i].innerText}`;
            e;
        });
    }
}