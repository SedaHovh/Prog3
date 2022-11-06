class ProbablyBomb{
    constructor(x,y){
     this.x = x
     this.y = y
     this.energy = 3
    }
newDirections(){
       this.directions = [
       [this.x - 1, this.y - 1],
       [this.x, this.y - 1],
       [this.x + 1, this.y - 1],
       [this.x - 1, this.y],
       [this.x + 1, this.y],
       [this.x - 1, this.y + 1],
       [this.x, this.y + 1],
       [this.x + 1, this.y + 1]
        ];
    }
    getDirections(b) {
        this.newDirections();
        let found = [];

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == b) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    explode() {
     let cord = random(this.getDirections(1));
    let cord1 = random(this.getDirections(4));
           if (cord) {
               let x = cord[0];
               let y = cord[1];
   
               matrix[y][x] = 0;
            //    setTimeout(() => {
            //        matrix[y][x] = 0
            //    },1000)
               matrix[this.y][this.x] = 0;
               this.x = x;
               this.y = y;
               this.energy--
   
      for (let i = 0; i < xotArr.length; i++) {
                   if (x == xotArr[i].x && y == xotArr[i].y) {
                       xotArr.splice(i, 1);
                   }
               }
  
       
       } else if(cord1){
           let x = cord1[0];
           let y = cord1[1];

           matrix[y][x] = 0;
           matrix[this.y][this.x] = 0;
           this.x = x
           this.y = y
           this.energy--
           for (let i = 0; i < poisArr.length; i++) {
            if (x == poisArr[i].x && y == poisArr[i].y) {
                poisArr.splice(i, 1);
            }
        }
    }else{
                  this.energy--
                   this.die();
               }
           }

    die() {
        
            matrix[this.y][this.x] = 0;
    
            for (let i = 0; i < bomArr.length; i++) {
                if (this.x == bomArr[i].x && this.y == bomArr[i].y) {
                    bomArr.splice(i, 1);
                }
    }
    }
}

//Քանի որ կյանը անկանխատեսելի է, խաղի վերջում ևս հնարավոր են տարբեր ելքեր(օրինակ poison-ները կարող են վերանալ, կամ  predator-ները՝ մեռնել 🙃):
//Խաղը ստեղծված է այնպես, որ շատ դեպքերում կա՛մ չկա Grass, կա՛մ Poison, քանի որ այդպես ավելի հետաքրքիր է։ 
//Նռնակները շուտ են վերանում, քանի որ նրանց միակ նպատկան է պայթել և փոքր ինչ ազատել դաշտը