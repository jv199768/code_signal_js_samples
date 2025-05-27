class Player {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    increaseScore() {
        this.score++; // Increase Player's score by 1, the same as this.score += 1;
    }
}

let player1 = new Player('John', 0);
player1.increaseScore();

console.log(player1.name); // Output: John
console.log(player1.score); // Output: 1
