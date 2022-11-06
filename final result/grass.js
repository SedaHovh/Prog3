// class Grass {
//     constructor(x, y) {
        
        
//         this.x = x;
//         this.y = y;
//         this.multiply = 0; 
    
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

//     getDirections(ch) {
        
//         var found = [];

//         for (let i = 0; i < this.directions.length; i++) {
//             let x = this.directions[i][0];
//             let y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == ch) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;
//     }

//     mul() {

//         this.multiply++;
//         if (this.multiply == 3) {

            
//             let empty = random(this.getDirections(0));
//             if (empty) {
//                 let x = empty[0];
//                 let y = empty[1];

               
//                 xotArr.push(new Grass(x, y))

//                 matrix[y][x] = 1;
//                 this.multiply = 0;
//             }
//         }
//     }



// }

class Grass extends LivingCreature {

    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if(this.multiply >= 4 && newCell) {
            // console.log(newCell)
            let newGrass = new Grass(newCell[0],newCell[1]);
            xotArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }
}
