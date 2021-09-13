let matriz = [];
let maxNum=0;
let maxNumFilaPar=0;
let maxNumFilaImpar=0;
let valorPromedioFila=0;
for(let i =0 ; i<10;i++){
    let matriz[i]=[];
  
    for(let j =0 ; j<10;j++){
        matriz[i][j] = Math.floor(Math.random()*1000);
        if(maxNum<matriz[i][j]){
            maxNum=matriz[i][j];
        }

        if(j % 2==0 && maxNumFilaPar <matriz[i][j] ){
            maxNumFilaPar=matriz[i][j];
        }

        if(j % 2==1 && maxNumFilaimpar <matriz[i][j] ){
            maxNumFilaPar=matriz[i][j];
        }   
        
    }    
   
}

console.log(matriz);
console.log(maxNum);
console.log(maxNumFilaPar);
console.log(maxNumFilaimpar);