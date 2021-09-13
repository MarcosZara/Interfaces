let c = document.querySelector("#myCanvas");
let contex = c.getContext("2d");

var img = new Image();
img.src = "./image/estadio.jpg";
img.onload = function(){
    contex.drawImage(img,10,10);
}