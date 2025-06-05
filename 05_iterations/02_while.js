let index = 0;
while (index < 10) {
    console.log(`Value of index is ${index}`);
    index += 2;
}

let myHeroes = ["Ben 10", "Spider-Man", "Iron-Man"];
let currentHero = 0;
while (currentHero < myHeroes.length) {
    console.log(`Current Hero is : ${myHeroes[currentHero]}`);
    currentHero++;
}

let score = 1;
do {
    console.log(`Score is ${score}`);
    score++;
} while (score<5); // Will print value less than 5 and not print 5.

/* A do...while loop executes a block of code at least once,
   and then continues to execute it as long as a given condition is true.
*/