$(document).ready(function(){

  document.onkeydown = checkKey;

//  console.log("sanity")
  function checkKey(e) {
    //    console.log("here")
        e = e || window.event;

        if (e.keyCode == '74') {
            console.log("j")
            $(".wrapper").append("<div class='container'><div class='one bottom-right'></div><div class='two top-left'></div><div class='three top-right'></div><div class='four bottom-left'></div></div><br>")

           // $(".container .one").addClass('top-left')
        }
        else if (e.keyCode == '79') {
            console.log("o")
            $(".wrapper").append("<div class='container'><div class='one bottom-right'></div><div class='two bottom-left'></div><div class='three top-left'></div><div class='four top-right'></div></div><br>")
            //$(".container .two").addClass('top-right')
        }
        else if (e.keyCode == '72') {
           console.log("h")
           $(".wrapper").append("<div class='container'><div class='one bottom-left'></div><div class='two bottom-right'></div><div class='three top-right'></div><div class='four top-left'></div></div><br>")
           //$(".container .three").addClass('bottom-left')
         }
        else if (e.keyCode == '78') {
           console.log("n")
           $(".wrapper").append("<div class='container'><div class='one top-left'></div><div class='two bottom-left'></div><div class='three bottom-right'></div><div class='four top-right'></div></div><br>")

        }

    }


})