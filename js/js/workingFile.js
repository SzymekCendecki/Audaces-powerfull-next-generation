let intro = require("./intro.js");
let heroCreator = require("./heroCreator.js");

document.addEventListener("DOMContentLoaded", () => {
  $("#info, #licence, #tutorial, #game, #mainDescription").hide();
  $("#randomHero, #manualHero").hide();
  intro.intro();
  heroCreator.heroCreator();
});
