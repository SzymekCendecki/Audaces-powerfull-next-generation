export let infoTxt = (mainContainer, path, newP) =>{
    mainContainer.innerHTML = '';
		fetch(path + 'info.json').then(response => response.json()).then(data => { 
			newP(data.info);
		}).catch(error => console.error(error))
}

export let licenceTxt = (mainContainer, path, newP) =>{
    mainContainer.innerHTML = '';
    fetch(path + 'licence.json').then(response => response.json()).then(data => { 
        newP(data.licence);
    }).catch(error => console.error(error))
}

export let tutorialTxt = (mainContainer, path, newP) =>{
    mainContainer.innerHTML = '';
		fetch(path + 'tutorial.json').then(response => response.json()).then(data => { 
			newP(data.tutorial);
		}).catch(error => console.error(error))
}
