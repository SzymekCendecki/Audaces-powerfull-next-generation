let intro = require("./intro.js");

document.addEventListener("DOMContentLoaded", () => {
  $("#info, #licence, #tutorial, #game").hide();
  intro.intro();
});//koniec DOMContentLoaded
