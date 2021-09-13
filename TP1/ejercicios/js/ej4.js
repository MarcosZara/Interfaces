let c = document.querySelector("#myCanvas");
let contex = c.getContext("2d");
let width = 500;
let heigth = 300;

let imageData = contex.createImageData(width,heigth);

let r = 67;
let g = 103;
let b = 188;
let a = 0;

function dibujarRect(imageData,r,g,b,a){
    for (let y = 0; y < heigth; y++) {       
        var coeficiente = 255 / width;
        
        let r=coeficiente * y;
        let g=coeficiente * y;
        let b=0;
        let a=255;
        for (let x = 0; x< width ; x++) {
            setPixel(imageData,x,y,r,g,b,a);          
        }
    }
}

function setPixel(imageData,x,y,r,g,b,a){
    let index = (x + y * imageData.width)*4;
    imageData.data[index + 0] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
    imageData.data[index + 3] = a;
}

dibujarRect(imageData,r,g,b,a);
contex.putImageData(imageData,0,0);