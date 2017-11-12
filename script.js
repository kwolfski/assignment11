// Add the attached icon image before the text in each LI element in the main navigation

$(document).ready(function(){
  $( '#menu li a' ).prepend('<img id="icon" src="icon.png" />'); 
        
    //Clicking on the H1 element in the header changes the background color of the header DIV
    
    $("#header h1").click(function(){
        $("#header").css("backgroundColor", "purple");
    });



});

