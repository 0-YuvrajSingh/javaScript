// for :

for (let i = 0; i < 9; i++) {
    const element = i;
    if(element == 4){
        console.log("4 is a special Number.")
    }
    console.log(element);    
}
// changing duplicate elements : fn + F2(changing multiple i together);

for (let i = 1; i <= 10; i++) {
    console.log(`Table of: ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(i + ' * ' + j + ' = ' + i*j);
        // or console.log(`${i} * ${j} = ${i*j}`);     
    }
}

let myHeroes = ["Ben 10", "Spide-Man", "Iron-Man"];
for (let index = 0; index < myHeroes.length; index++) {
    const element = myHeroes[index];
    console.log(element);    
}

// break and continue;

for (let index = 0; index < 10; index++) {
    if(index == 5){
        console.log('5 Detected - Exit from loop');
        break;
        /* The break statement exits the current loop (or switch) immediately,
           even if the loop condition is still true.
        Usage:
           Used when you want to stop the loop early based on a condition.
        */
    }
    console.log(`Value of i is ${index}`);
}

for (let index = 0; index < 10; index++) {
    if(index == 5){
        console.log('5 Detected - Skip this Step.');
        continue;
        /* The continue statement skips the current iteration of the loop
           and moves to the next one, without running the remaining code in the loop body for that iteration.

        Usage:
           Used when you want to skip certain iterations but continue looping.
        */
    }
    console.log(`Value of i is ${index}`);
}