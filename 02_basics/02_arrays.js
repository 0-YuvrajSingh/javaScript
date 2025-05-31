const mcu = ["thor", "ironMan", "spiderMan"];
const dc = ["superMan", "batMan", "flash"];

mcu.push(dc);
console.log("Push: ",mcu);
// Result=> [ 'thor', 'ironMan', 'spiderMan', [ 'superMan', 'batMan', 'flash' ] ]
// array can take any data as input here array takes another array as input.
const marvel = ["thor", "ironMan", "spiderMan"];
const heroes =  marvel.concat(dc);
//concat : This method returns a new array without modifying original array.
console.log("Concat : ", heroes);
console.log(marvel);

// Another Easy Method named as Spread Method for doing same as concat :
const ogHeroes = [...marvel, ...dc];
// [... => means spread each individual element of this array does not modify original array]
// Returns new Array
// It plus point is we can add multiple array like adding ...anotherArray;
console.log("Spread :",ogHeroes);
console.log(marvel);

const nestedArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10]];
const flatArray = nestedArray.flat(Infinity);
console.log(flatArray);
/* .flat() method is used on arrays to flatten nested arrays 
    => that is, to pull out elements from sub-arrays into a 
    single-level array
    arr.flat(depth) : depth is how many levels of nested arrays you want to flatten;
    depth = Infinity, it flattens all levels, no matter how deeply nested.
*/

console.log(Array.isArray("Anything")); // Returns true of array else false;
console.log(Array.from("Yuvraj"));
console.log(Array.from({name: "Yuvraj"}));
//Above one will return [] because we have to specify whether key is to be converted to array or valye;
//.from()  is a static method that creates a new array from given inputs.

/*
const key = { name: "Yuvraj"};
const toArray = Object.keys(key);
console.log(toArray.keys());
            OR
const value = { name: "Yuvraj"};
const toArray = Object.values(value);
console.log(toArray.values());
*/



let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
/* Array.of() creates a new array from the arguments you pass to it,
   no matter how many or what they are.
*/