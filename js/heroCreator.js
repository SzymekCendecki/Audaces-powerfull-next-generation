document.addEventListener("DOMContentLoaded", () => {
	
	module.exports.heroCreator = function(){
		$("#game").on("click", ()=>{
			console.log("działa");
			$("#info, #licence, #tutorial, #game").hide();
			$("#randomHero, #manualHero").show();
			$("#mainDescription").empty();
		});
	}
});