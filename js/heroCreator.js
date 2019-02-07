document.addEventListener("DOMContentLoaded", () => {

	module.exports.heroCreator = function(){
		$("#game").on("click", ()=>{
			$("#info, #licence, #tutorial, #game").hide();
			$("#randomHero, #manualHero").show();
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
						$("#mainDescription").empty().append(data.heroCreator[0].firstText);
				 },
					type: 'GET'
			 });

		});
	}
});
