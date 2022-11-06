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