document.addEventListener("DOMContentLoaded", () => {

  module.exports.intro=function(){
    $.ajax({
      url: 'https://szymekcendecki.github.io/Audaces-powerfull-next-generation/jsonFiles/intro.json',
      type: 'GET',
      dataType: 'json'
      }).done((data) => {  $("#prepare").append(data.intro[0].prepare);
      }).fail(()=>{ console.log("coś nie bangla..."); });  

    let numbers = 0;
    let id = setInterval(frame, 40);

    function frame(){
      if (numbers == 100) {

        clearInterval(id);
        $("#prepare, #counter").remove();

        setTimeout(()=> {
          $.ajax({
            url: 'https://szymekcendecki.github.io/Audaces-powerfull-next-generation/jsonFiles/intro.json',
            type: 'GET',
            dataType: 'json'
            }).done((data) => {  
              $(".studioName").append(data.intro[0].studioName);
              $(".maxim").append(data.intro[0].maxim);
            }).fail(()=>{ console.log("coś nie bangla..."); });  
        }, 500);

        setTimeout(()=> {
          $.ajax({
            url: 'https://szymekcendecki.github.io/Audaces-powerfull-next-generation/jsonFiles/intro.json',
            type: 'GET',
            dataType: 'json'
            }).done((data) => {  
              $(".studioName, .maxim").remove();
              $(".title").append(data.intro[0].title);
              $(".subTitle").append(data.intro[0].subTitle);
            }).fail(()=>{ console.log("coś nie bangla..."); });  
        }, 10000);
      }else{
        numbers++;
        $("#counter").empty().append(numbers + "%");
      }
    }

    setTimeout(()=> {
        $(".title, .subTitle").remove();
        $("#info, #licence, #tutorial, #game, #mainDescription").show();
        $.ajax({
          url: 'https://szymekcendecki.github.io/Audaces-powerfull-next-generation/jsonFiles/intro.json',
          type: 'GET',
          dataType: 'json'
          }).done((data) => {  
            $("#mainDescription").empty().append(data.menu[0].helloText);
          }).fail(()=>{ console.log("coś nie bangla..."); });
      }, 24000);

    $("#info").on("click", ()=>{
      $.ajax({
        url: 'https://szymekcendecki.github.io/Audaces-powerfull-next-generation/jsonFiles/intro.json',
        type: 'GET',
        dataType: 'json'
        }).done((data) => {  
          $("#mainDescription").empty().append(data.menu[0].info);
        }).fail(()=>{ console.log("coś nie bangla..."); });
    });

	$("#licence").on("click", ()=>{
    $.ajax({
      url: 'https://szymekcendecki.github.io/Audaces-powerfull-next-generation/jsonFiles/intro.json',
      type: 'GET',
      dataType: 'json'
      }).done((data) => {  
        $("#mainDescription").empty().append(data.menu[0].licence);
      }).fail(()=>{ console.log("coś nie bangla..."); });
  });

	$("#tutorial").on("click", ()=>{
    $.ajax({
      url: 'https://szymekcendecki.github.io/Audaces-powerfull-next-generation/jsonFiles/intro.json',
      type: 'GET',
      dataType: 'json'
      }).done((data) => {  
        $("#mainDescription").empty().append(data.menu[0].tutorial);
      }).fail(()=>{ console.log("coś nie bangla..."); });
  });
 }
});//koniec DOMContentLoaded
