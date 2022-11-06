// class GrassEater {
//     constructor(x, y) {
        
//         this.x = x;
//         this.y = y;
//         this.multiply = 0;
//         this.energy = 2;

//     }

//     newDirections() {
        
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }

//     getDirections(t) {
//         this.newDirections();
//         let found = [];

//         for (let i = 0; i < this.directions.length; i++) {
//             let x = this.directions[i][0];
//             let y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == t) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;
//     }



//     move() {

//        let cord = random(this.getDirections(0));

//         if (cord) {
//             let x = cord[0];
//             let y = cord[1];

//             matrix[y][x] = 3;
//             matrix[this.y][this.x] = 0;

//             this.x = x;
//             this.y = y;

//         }
//     }


//     eat() {

//        let cord1 = random(this.getDirections(4))
//         let cord = random( this.getDirections(1));

//         if (cord) {
//             let x = cord[0];
//             let y = cord[1];

//             matrix[y][x] = 2;
//             matrix[this.y][this.x] = 0;

//             this.x = x;
//             this.y = y;

//             this.multiply++;

//             this.energy++;

         
//             for (let i = 0; i < xotArr.length; i++) {
//                 if (x == xotArr[i].x && y == xotArr[i].y) {
//                     xotArr.splice(i, 1);
//                 }
//             }
//         }else if(cord1){
//             let x = cord1[0];
//             let y = cord1[1];

//             matrix[y][x] = 2;
//             matrix[this.y][this.x] = 0;

//             this.x = x;
//             this.y = y;

//             this.multiply+=2;

//             this.energy+=2;

         
//             for (let i = 0; i < poisArr.length; i++) {
//                 if (x == poisArr[i].x && y == poisArr[i].y) {
//                     poisArr.splice(i, 1);
//                 }
//             }


//         }else {
            
//             this.move();
//             this.energy--;
//             if (this.energy < 3) {
//                 this.die();
//             }
//         }
    
//     if (this.multiply == 9) {
//         this.mul()
//         this.multiply = 0;
//     }
// }
    
//     mul() {

     
      
//         let cord = random(this.getDirections(0));

     
//         if (cord) {
//             let x = cord[0];
//             let y = cord[1];

//             this.multiply++;

        
            
//             eatArr.push(new GrassEater(x, y));

//             matrix[y][x] = 1;
//             this.multiply = 0;
//         }
//     }


//     die() {
//         matrix[this.y][this.x] = 0;

//         for (let i = 0; i < eatArr.length; i++) {
//             if (this.x == eatArr[i].x && this.y == eatArr[i].y) {
//                 eatArr.splice(i, 1);
//             }
//         }
//     }

// }

class GrassEater extends LivingCreature {
    constructor(x, y){
        super(x, y);
        this.energy = 8;
    }
   getNewCoordinates() {
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
   chooseCell(character) {
       this.getNewCoordinates();
       return super.chooseCell(character);
   }

       eat() {

       let cord1 = random(this.getNewCoordinates())
        let cord = random( this.getNewCoordinates());
    

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
       //eat, mul, move, die
}
