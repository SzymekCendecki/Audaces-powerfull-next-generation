let heroCreator = require("./heroCreator.js");

document.addEventListener("DOMContentLoaded", () => {

    module.exports.manualHero = function(){
        $("#manualHero").on("click", ()=>{
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
                <button id='hideShow'>pokaż</button>
            </div>`);

        $("#name, #sex, #race, #occupation, #points, #eyes, #hair, #skin, #weight, #height").hide();

        function hide(){
            $("#name, #sex, #race, #occupation, #points, #eyes, #hair, #skin, #weight, #height").slideUp();
            $("#hideShow").empty().append("pokaż");
        }

        function show(){
            $("#name, #sex, #race, #occupation, #points, #eyes, #hair, #skin, #weight, #height").slideDown();
            $("#hideShow").empty().append("ukryj");
        }
            
            $("#hideShow").on("click", ()=>{
                if($("#hideShow").text() === "ukryj"){
                    hide();
                }else{ 
                    show();
                }
            });

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
				 },
					type: 'GET'
			 });
            });
            console.log(heroCreator.hero);
        });
    }
   });
