document.addEventListener("DOMContentLoaded", () => {

  module.exports.intro=function(){
    $.ajax({
        url: './jsonFiles/intro.json',
        data: {
          format: 'json'
        },
        error: ()=>{
          console.log("coś nie bangla...");
        },
        dataType: 'json',
        success: (data)=>{
           $("#prepare").append(data.intro[0].prepare);
       },
        type: 'GET'
     });

    let numbers = 0;
    let id = setInterval(frame, 40);

    function frame(){
      if (numbers == 100) {

        clearInterval(id);
        $("#prepare, #counter").remove();

        setTimeout(()=> {
          $.ajax({
              url: './jsonFiles/intro.json',
              data: {
                format: 'json'
              },
              error: ()=>{
                console.log("coś nie bangla...");
              },
              dataType: 'json',
              success: (data)=> {
                $(".studioName").append(data.intro[0].studioName);
                $(".maxim").append(data.intro[0].maxim);
              },
              type: 'GET'
           });
        }, 500);

        setTimeout(()=> {
          $.ajax({
              url: './jsonFiles/intro.json',
              data: {
                format: 'json'
              },
              error: ()=>{
                console.log("coś nie bangla...");
              },
              dataType: 'json',
              success: (data)=> {
                $(".studioName, .maxim").remove();
                $(".title").append(data.intro[0].title);
                $(".subTitle").append(data.intro[0].subTitle);
              },
              type: 'GET'
           });
        }, 10000);
      }else{
        numbers++;
        $("#counter").empty().append(numbers + "%");
      }
    }

    setTimeout(()=> {
        $(".title, .subTitle").remove();
        $("#info, #licence, #tutorial, #game").show();
        $.ajax({
            url: './jsonFiles/intro.json',
            data: {
              format: 'json'
            },
            error: ()=>{
              console.log("coś nie bangla...");
            },
            dataType: 'json',
            success: (data)=> {
              $("#mainDescription").empty().append(data.menu[0].helloText);
            },
            type: 'GET'
         });
    }, 24000);


    $("#info").on("click", ()=>{
      $.ajax({
          url: './jsonFiles/intro.json',
          data: {
            format: 'json'
          },
          error: ()=>{
            console.log("coś nie bangla...");
          },
          dataType: 'json',
          success: (data)=> {
            $("#mainDescription").empty().append(data.menu[0].info);
          },
          type: 'GET'
       });
    });

  }
});//koniec DOMContentLoaded
