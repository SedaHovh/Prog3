let matrix = [];
let side = 10;
let xotArr = [];
let eatArr = [];
let perdArr = [];
let poisArr = [];
let bomArr = [];

function generate(a, b) {
    for (let i = 0; i < a; i++) {
        matrix.push([]);
        for (let j = 0; j < b; j++) {
            matrix[i].push(Math.round(Math.random() * 5 ));
        }
    }
}
generate(80, 80);


function setup() {
// frameRate(30); 
 //noStroke();
  
    createCanvas(matrix[0].length * side, matrix.length * side);
    background("grey");
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {


            if (matrix[y][x] === 2) {
                eatArr.push(new GrassEater(x, y));
            } else if (matrix[y][x] === 1) {
                xotArr.push(new Grass(x, y));
            }
            else if (matrix[y][x] === 3) {
                perdArr.push(new Predator(x, y));
            }
            else if (matrix[y][x] === 4){
                poisArr.push(new Poison(x,y))
            }
            else if (matrix[y][x] === 5){
                bomArr.push(new ProbablyBomb(x,y))
            }
        }

    }
}

function draw() {
    //objectsCreation()

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            } else if (matrix[y][x] == 2) {
                fill("orange");
            } else if (matrix[y][x] == 3) {  // Predator
                fill(102, 0, 0);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }else if (matrix[y][x] == 4){
                fill(0,0,153)
            }else if(matrix[y][x] == 5){
                fill(59)
            }
            rect(x * side, y * side, side, side);
        }


    }


    for (let i = 0; i < xotArr.length; i++) {
        xotArr[i].mul();
    }

    for (let i = 0; i < eatArr.length; i++) {
        eatArr[i].eat();
    }
    for (let i = 0; i < perdArr.length; i++) {

        perdArr[i].eat();
    }
    for (let i = 0; i < poisArr.length; i++) {
        poisArr[i].mul();
    }

    for(let i = 0; i < bomArr.length; i++){
        bomArr[i].explode();
    }
}
 setTimeout(() => {
     console.log("Whatever one may say, life will end anyway");
 },200000)


