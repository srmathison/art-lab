var success = 0;

$(document ).ready(function() {
  
  var nums = _.range(0, 11)
  nums = _.shuffle(nums)
  
  for (var i = 0; i<=10; i++) {

    $(".wrapper").append("<div id='drag"+nums[i]+"' class='square drag'><p>Drag me <br>to "+nums[i]+"</p></div>");
    
    $("#drag"+nums[i]).css({"display": "inline-block"});
    
    $("#drag"+nums[i]).draggable();
    
    $(".container").append("<div id='drop"+nums[i]+"' class='square drop'><p>"+nums[i]+"</p></div>");
    
    $("#drop"+nums[i]).css({"display": "inline-block"});
    
    $("#drop"+nums[i]).droppable({accept: "#drag"+nums[i], tolerance: "intersect", hoverClass: "hovered", containment: ".container" });
    
    $("#drop"+nums[i]).on("drop", function(event, ui) {dropped($(this).css("top"), $(this).css("left"),ui)});
  
  }
});
 

function dropped(top, left, ui) {
  ui.draggable.css({"top": top,"left": left}).html("<p><br></p>").draggable( "destroy" ).css("display", "none");
  
  if (success == 9) {
    $(".drag").html("<p><br>You Won!</p>").css("border-color", "green");
  }
}

// $( document ).ready(function() {
//   var w_height = $(document).height();
//   var w_width = $(document).width();
//   for (var i = 0; i<9; i++) {
//     $("body").append("<div id='drag"+i+"' class='circulo drag'><p>Drag me <br>to "+i+"</p></div>");
//     $("#drag"+i).css({"top": randomnumber(w_height-100), "left": randomnumber(w_width-100)});
//     $("#drag"+i).draggable();
//     $("body").append("<div id='drop"+i+"' class='circulo drop'><p>"+i+"</p></div>");
//     $("#drop"+i).css({"top": randomnumber(w_height-100), "left": randomnumber(w_width-100)});
//     $("#drop"+i).droppable({accept: "#drag"+i, tolerance: "intersect", hoverClass: "hovered", containment: "document" });
//     $("#drop"+i).on("drop", function(event, ui) {dropped($(this).css("top"), $(this).css("left"),ui)});
//   }
// });
 
// function randomnumber (top) {
//   return Math.floor(top * Math.random());
// }

// function dropped(top, left, ui) {
//   ui.draggable.css({"top": top,"left": left}).html("<p><br> Nice!</p>").draggable( "destroy" ).css("border-color", "orange");
  
//   acertadas++;
//   $("body").css("background-color", '#'+Math.floor(Math.random()*16777215).toString(16));

//   if (acertadas == 9) {
//     $(".drag").html("<p><br>You Won!</p>").css("border-color", "green");
//   }
// }






