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
        let r;
        let g;
        let b;
        let a=255;
        

        if(y <=heigth/2){
            var coeficiente = 255 / (heigth/2); 
            r=coeficiente * y;
            g=coeficiente * y;
            b=0;
        }else{
            var coeficiente = 255 / (heigth/2); 
            r=coeficiente * y;
            g=0;
            b=0;
        }
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