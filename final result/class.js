class Grass {
    constructor(x, y) {
       
        this.x = x;
        this.y = y;
        this.multiply = 0; 
    
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

    getDirections(ch) {
        
        var found = [];

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mul() {
        this.multiply++;
        if (this.multiply == 3) {

            
            let empty = random(this.getDirections(0));
            if (empty) {
                let x = empty[0];
                let y = empty[1];

               
                xotArr.push(new Grass(x, y))

                matrix[y][x] = 1;
                this.multiply = 0;
            }
        }
    }



}

class GrassEater {
    constructor(x, y) {
        
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 2;

    }

    newDirections() {
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

    getDirections(t) {
        this.newDirections();
        let found = [];

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }



    move() {

       let cord = random(this.getDirections(0));

        if (cord) {
            let x = cord[0];
            let y = cord[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        }
    }


    eat() {

       let cord1 = random(this.getDirections(4))
        let cord = random( this.getDirections(1));

        if (cord) {
            let x = cord[0];
            let y = cord[1];

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            this.multiply++;

            this.energy++;

         
            for (let i = 0; i < xotArr.length; i++) {
                if (x == xotArr[i].x && y == xotArr[i].y) {
                    xotArr.splice(i, 1);
                }
            }
        }else if(cord1){
            let x = cord1[0];
            let y = cord1[1];

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            this.multiply+=2;

            this.energy+=2;

         
            for (let i = 0; i < poisArr.length; i++) {
                if (x == poisArr[i].x && y == poisArr[i].y) {
                    poisArr.splice(i, 1);
                }
            }


        }else {
            
            this.move();
            this.energy--;
            if (this.energy < 3) {
                this.die();
            }
        }
    
    if (this.multiply == 9) {
        this.mul()
        this.multiply = 0;
    }
}
    
    mul() {

     
      
        let cord = random(this.getDirections(0));

     
        if (cord) {
            let x = cord[0];
            let y = cord[1];

            this.multiply++;

        
            
            eatArr.push(new GrassEater(x, y));

            matrix[y][x] = 1;
            this.multiply = 0;
        }
    }


    die() {
        matrix[this.y][this.x] = 0;

        for (let i = 0; i < eatArr.length; i++) {
            if (this.x == eatArr[i].x && this.y == eatArr[i].y) {
                eatArr.splice(i, 1);
            }
        }
    }

}

class Predator{
    constructor(x,y){
     this.x = x;
     this.y = y;
     this.multiply = 0;
     this.energy = 3;
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
    getDirections(h) {
        this.newDirections();
        let found = [];

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == h) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
    
          let cord1 = random(this.getDirections(0));

     
        if (cord1) {
            let x = cord1[0];
            let y = cord1[1];

            this.multiply++;

        
            
       perdArr.push(new Predator(x, y));

            matrix[y][x] = 2;
            this.multiply = 0;
        }
    }
    move() {

        let cord = random(this.getDirections(0));
 
         if (cord) {
             let x = cord[0];
             let y = cord[1];
 
             matrix[y][x] = 3;
             matrix[this.y][this.x] = 0;
 
             this.x = x;
             this.y = y;
 
         }
     }
     eat() {
     let cord1 = random(this.getDirections(4));
     let cord = random(this.getDirections(2));

        if (cord) {
            let x = cord[0];
            let y = cord[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            this.multiply+=2;
            this.energy+=2;

         
            for (let i = 0; i < eatArr.length; i++) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);
                }
            }
 
             
            if (this.multiply === 7 || this.multiply === 8) {
                this.mul()
                this.multiply = 0;
            }


        }else if(cord1){
            let x = cord1[0];
            let y = cord1[1];

            matrix[y][x] = 0;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            this.die()

         
            for (let i = 0; i < poisArr.length; i++) {
                if (x == poisArr[i].x && y == poisArr[i].y) {
                    poisArr.splice(i, 1);
                }
            }
        
        } else {
            
            this.move();
            this.energy--;
            if (this.energy < 6) {
                this.die();
            }
        }
    
    }
    
    die() {
        
        matrix[this.y][this.x] = 0;

        for (let i = 0; i < perdArr.length; i++) {
            if (this.x == perdArr[i].x && this.y == perdArr[i].y) {
                perdArr.splice(i, 1);
            }
}
}
     }


class Poison{
    constructor(x,y){
       this.x = x;
       this.y = y;
       this.multiply = 0;
       this.energy = 6
      
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

getDirections(p) {
    
    var found = [];

    for (let i = 0;i < this.directions.length; i++) {
        let x = this.directions[i][0];
        let y = this.directions[i][1];
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[y][x] == p) {
                found.push(this.directions[i]);
            }
        }
    }
    return found;
}

mul() {
    this.multiply++;
    if (this.multiply === 4) {

        
        let empty = random(this.getDirections(0));
        if (empty) {
            let x = empty[0];
            let y = empty[1];

           
            poisArr.push(new Poison(x, y))

            matrix[y][x] = 4;
            this.multiply = 0;
        }
    }
}
die() {
        
    matrix[this.y][this.x] = 0;

    for (let i = 0; i < poisArr.length; i++) {
        if (this.x == poisArr[i].x && this.y == poisArr[i].y) {
            poisArr.splice(i, 1);
        }
}
}
}

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