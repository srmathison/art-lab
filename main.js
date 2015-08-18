var success = 0;

$(document ).ready(function() {
  
  var w_height = $(".wrapper").height();
  var w_width = $(".wrapper").width();
  
  for (var i = 0; i<=10; i++) {
    
    $(".wrapper").append("<div id='drag"+i+"' class='square drag'><p>Drag me <br>to "+i+"</p></div>");
    
    $("#drag"+i).css({"top": randomnumber(w_height-100), "left": randomnumber(w_width-100)});
    
    $("#drag"+i).draggable();
    
    $(".wrapper").append("<div id='drop"+i+"' class='square drop'><p>"+i+"</p></div>");
    

    
    $("#drop"+i).css({"top": randomnumber(w_height-100), "left": randomnumber(w_width-100)});
    
    $("#drop"+i).droppable({accept: "#drag"+i, tolerance: "intersect", hoverClass: "hovered", containment: "document" });
    
    $("#drop"+i).on("drop", function(event, ui) {dropped($(this).css("top"), $(this).css("left"),ui)});
  
  }
});
 
function randomnumber (top) {
  return Math.floor(top * Math.random());
}

function dropped(top, left, ui) {
  ui.draggable.css({"top": top,"left": left}).html("<p><br></p>").draggable( "destroy" ).css("border-color", "orange");
  

  if (success == 9) {
    $(".drag").html("<p><br>You Won!</p>").css("border-color", "green");
  }
}