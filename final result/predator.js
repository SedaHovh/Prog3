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