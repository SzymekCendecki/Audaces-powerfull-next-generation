let heroCreator = require("./heroCreator.js");

document.addEventListener("DOMContentLoaded", () => {

    module.exports.manualHero = function(){
        $("#manualHero").on("click", ()=>{
            
            if(document.querySelectorAll(".btnManualHero").length > 0){
                 document.querySelectorAll(".btnManualHero")[0].remove();
            }

            heroCreator.hero.setSex("wybierz");
            heroCreator.hero.setName("wybierz");
            heroCreator.hero.setRace("wybierz");
            heroCreator.hero.setOccupation("wybierz");
            heroCreator.hero.setOccupationPoints([0, 0, 0, 0, 0]);
            heroCreator.hero.setRacePoints([0, 0, 0, 0, 0]);
            heroCreator.hero.setRandomPoints([0, 0, 0, 0, 0]);
            heroCreator.hero.setSummaryPoints([0, 0, 0, 0, 0]);
            heroCreator.hero.setEyesColor("wybierz");
            heroCreator.hero.setHairColor("wybierz");
            heroCreator.hero.setSkinColor("wybierz");
            heroCreator.hero.setWeight("wybierz");
            heroCreator.hero.setHeight("wybierz");

        $("#mainDescription").empty();
        $("nav").append(`
            <div class='btnManualHero'>
                <button id='name'>imię</button>
                <button id='sex'>płeć</button>
                <button id='race'>rasa</button>
                <button id='occupation'>profesja</button>
                <button id='points'>punkty</button>
                <button id='eyes'>oczy</button>
                <button id='hair'>włosy</button>
                <button id='skin'>skóra</button>
                <button id='weight'>waga</button>
                <button id='height'>wzrost</button>
                <button id='allChooses'>info</button>
                <button id='hideShow'>pokaż</button>
            </div>`);

        $("#name, #sex, #race, #occupation, #points, #eyes, #hair, #skin, #weight, #height, #allChooses").hide();

        function hide(){
            $("#name, #sex, #race, #occupation, #points, #eyes, #hair, #skin, #weight, #height, #allChooses").slideUp();
            $("#hideShow").empty().append("pokaż");
        }

        function show(){
            $("#name, #sex, #race, #occupation, #points, #eyes, #hair, #skin, #weight, #height, #allChooses").slideDown();
            $("#hideShow").empty().append("ukryj");
        }
            
        $("#hideShow").on("click", ()=>{
            if($("#hideShow").text() === "ukryj"){
                hide();
            }else{ 
                show();
            }
        });

        function summaryPoints(hero, tab, tab2){
            let element = document.getElementById('summaryPoints');
            var fragment = document.createDocumentFragment();
            
            for(let i=0; i<hero.racePoints.length && i<hero.occupationPoints.length && i<hero.randomPoints.length; i++){
                let x = (hero.racePoints[i] + hero.occupationPoints[i] + hero.randomPoints[i]);
                tab.splice(i, 1, x);
            }
            
            hero.setSummaryPoints(tab);
            
            for(let j=0; j<tab.length && j<tab2.length; j++){
                var p = document.createElement('p');
                p.textContent = tab2[j] + " " + tab[j];
                fragment.appendChild(p);
            }
            element.appendChild(fragment);
        }

            //wybór imienia
            $("#name").on("click", ()=>{
                hide();
                $.ajax({
					url: 'https://szymekcendecki.github.io/Audaces-powerfull-next-generation/jsonFiles/heroCreator.json',
					data: {
						format: 'json'
					},
					error: ()=>{
						console.log("coś nie bangla...");
					},
					dataType: 'json',
					success: (data)=>{
                        $("#mainDescription").empty().append(data.heroCreator[0].name);
                        $("#acceptName").on("click", ()=>{
                            let name = $("#nameForInput").val().replace(/\d/g,'');
                            if(name == ""){
                                $("#alerts").empty().append(data.heroCreator[0].warningName);
                                setTimeout(()=>{ $("#alerts").empty(); }, 3000);
                            }else{
                                heroCreator.hero.setName(name);
                                $("#alerts").empty().append(data.heroCreator[0].acceptName);
                                setTimeout(()=>{ $("#alerts").empty(); }, 3000);
                            }
                        });
				 },
					type: 'GET'
			 });
            });

            //przycisk info
            $("#allChooses").on("click", ()=>{
                hide();
                $("#mainDescription").empty().append(`
                <p class='heroRandom'>imię</p><p class='heroRandom'>${heroCreator.hero.name}</p>
                <p class='heroRandom'>płeć</p><p class='heroRandom'>${heroCreator.hero.sex}</p>
                <p class='heroRandom'>rasa</p><p class='heroRandom'>${heroCreator.hero.race}</p>
                <p class='heroRandom'>profesja</p><p class='heroRandom'>${heroCreator.hero.occupation}</p>
                <p class='heroRandom'>kolor oczu</p><p id='eyesColor' class='heroRandom'></p>
                <p class='heroRandom'>kolor włosów</p><p id='hairColor' class='heroRandom'></p>
                <p class='heroRandom'>kolor skóry</p><p id='skinColor' class='heroRandom'></p>
                <p class='heroRandom'>waga</p><p class='heroRandom'>${heroCreator.hero.weight} kg</p>
                <p class='heroRandom'>wzrost</p><p class='heroRandom'>${heroCreator.hero.height} cm</p>
                <p class='heroRandom'>punkty cech</p><p id="summaryPoints" class='heroRandom'></p>`);

                if(heroCreator.hero.colorEyes === "wybierz"){
                    $("#eyesColor").empty().append("wybierz");
                }else{
                    let x1 = heroCreator.hero.colorEyes[0];
                    let x2 = heroCreator.hero.colorEyes[1];
                    let x3 = heroCreator.hero.colorEyes[2];
                    $("#eyesColor").css("background-color", "rgb("+x1+", "+x2 + ", "+x3+")");
                }

                if(heroCreator.hero.colorHair === "wybierz"){
                    $("#hairColor").empty().append("wybierz");
                }else{
                    let x4 = heroCreator.hero.colorHair[0];
			        let x5 = heroCreator.hero.colorHair[1];
			        let x6 = heroCreator.hero.colorHair[2];
                    $("#hairColor").empty().css("background-color", "rgb("+x4+", "+x5 + ", "+x6+")");
                }

                if(heroCreator.hero.colorSkin === "wybierz"){
                    $("#skinColor").empty().append("wybierz");
                }else{
                    let x7 = heroCreator.hero.colorSkin[0];
                    let x8 = heroCreator.hero.colorSkin[1];
                    let x9 = heroCreator.hero.colorSkin[2];
                    $("#skinColor").empty().css("background-color", "rgb("+x7+", "+x8 + ", "+x9+")");
                }
                summaryPoints(heroCreator.hero, heroCreator.sumPoints, heroCreator.features);
                console.log(heroCreator.hero);
            })
        });
    }
});
