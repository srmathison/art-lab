var window_height;
var window_width;

var paper;
var tilesholder;

var colours = new Array("#4312AE","#472B83","#280671","#7446D7","#8E6DD7","#AA00A2","#7F207B","#6E0069","#D435CD","#D460CF","#1049A9","#29497F","#052C6E","#4479D4","#6A92D4","#FF9A00","#FF3500","#FF6840");

function doTiles() {
        var rect_height = 15;
        var rect_width = 15;
        
        //x, y, width, height
        var clr = 0;
        /*
        var rect = paper.rect(0,0,100,100);
        rect.attr("fill",colours[clr-1]);
        
        clr = Math.floor((Math.random()*10)+1);
        var paper = Raphael(0,0,window_height, window_width);
        var rect = paper.rect(0,100,100,100);
        rect.attr("fill",colours[clr-1]);
        */
        var idx = 0;
        var tile_cnt = 0;
        for(var i=0;i<window.window_width;i+=15){
            for (var j=0;j<window.window_height;j+=15) {
                clr = Math.floor((Math.random()*17)+1);
                var tile = paper.rect(i,j,rect_width, rect_height);
                tile.attr("fill", colours[clr]);
                tile.attr("stroke-width",'0');
                tile.mouseover(function(){
                    var new_colr = Math.floor((Math.random()*17)+1);
                    //this.attr("fill", colours[new_colr]);
                    this.stop().animate({fill: colours[new_colr] }, 100);
                });
                tilesholder.push(tile);
                tile_cnt++;
            }
        }
    
};

function updateWindowSize() {
    window.window_height = $(window).height();
    window.window_width = $(window).width();

    window.paper = Raphael(0,0,window_width, window_height);
    window.tilesholder = paper.set(); 
}

$(window).ready(function(){
    updateWindowSize();            
    doTiles();            
});

$(window).resize(function(){
    updateWindowSize();
    doTiles();
    });

Raphael.el.update_tiles = function(){
    var new_colr = Math.floor((Math.random()*17)+1);
    this.stop().animate({fill: colours[new_colr] }, 100);
};

function updateColor() {
    var numoftiles = tilesholder.length;
    var rand_tile = Math.floor((Math.random()*(numoftiles-1)));
    tilesholder[rand_tile].update_tiles();
};

setInterval(function(){updateColor()},10);