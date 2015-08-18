<video id=“videoOutput” style=“display:none;” width=“500px” height=“660px” autoplay></video>
<canvas id=“output” width=“500px” height=“660px” align=“center”>
<p>Please upgrade your browser to something new like <a href=“https://www.google.com/chrome”>Google Chrome</a>.</p>
</canvas>
<script type=“application/processing” target=“output”>
/*
GetUserMedia script from http://www.html5rocks.com/en/tutorials/webgl/jsartoolkit_webrtc/
*/
var video = document.getElementById(“videoOutput”);

var getUserMedia = function(t, onsuccess, onerror) {
if (navigator.getUserMedia) {
return navigator.getUserMedia(t, onsuccess, onerror);
} else if (navigator.webkitGetUserMedia) {
return navigator.webkitGetUserMedia(t, onsuccess, onerror);
} else if (navigator.mozGetUserMedia) {
return navigator.mozGetUserMedia(t, onsuccess, onerror);
} else if (navigator.msGetUserMedia) {
return navigator.msGetUserMedia(t, onsuccess, onerror);
} else {
onerror(new Error(“No getUserMedia implementation found.”));
}
};

var URL = window.URL || window.webkitURL;
var createObjectURL = URL.createObjectURL || webkitURL.createObjectURL;
if (!createObjectURL) {
throw new Error(“URL.createObjectURL not found.”);
}

getUserMedia({audio:true, video:true},
function(stream) {
var url = createObjectURL(stream);
video.src = url;
},
function(error) {
alert(“Couldn’t access webcam.”);
}
);
/////////////////////////////////////////////////P5JS
//Canvas drawing context for the running sketch.
var ctx;
PImage img;
int i,j;
int nb=20;

void setup(){
size(500,660);
ctx = externals.context;
ellipseMode(CORNER);
smooth();
}

void draw(){
pushMatrix();
translate(width,0);
scale(-1,1);//mirror the video
ctx.drawImage(video, 0, 0, width, height); //video is defined inside getUserMedia.js
popMatrix();

//do something
img=get();
img.resize(nb,nb);
background(255);
noStroke();
for(j=0;j<nb; j++){
for(i=0;i<nb; i++){
fill(img.get(i, j));
ellipse(i*width/nb, j*height/nb, width/nb, height/nb);
}
}
}
</script>
