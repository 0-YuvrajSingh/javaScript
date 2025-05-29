"use strict"; // treat all JS code as newer version

/* alert ( 3 + 3)
    will not work in nodejs , but in browser
*/
console.log("dataTypes");
/* Data Types :
    number in range [(-2^53-1)-(2^53-1)];
    string can be declared as " " or  ' ';
    bigInt value that are not in range of number datatype;
    boolean true/false;
    null is standalone value;
    undefined i.e., value not given or something like that;
    symbol => unique characters;
*/
let x = "masterControl Code : OO1";
// I fit is not in  " " / ' ' it will show error;
x = 666666666666666666666666666666666666666666666666;
console.log(typeof x);
console.log(typeof null);
//It show error;
console.log(typeof undefined);
//It show error;

// dataTypes : Primitive  || Non-Primitive

/* Primitive dataType (7):
   -> string,
   -> number,
   -> boolean,
   -> null
   -> undefined,
   -> bigint
   -> symbol
*/

/* Non-Primitive dataType [Reference dataType] (3):
   -> Array,
   -> Object,
   -> Functions
*/

const id1 = Symbol('$');
const id2 = Symbol('$');
console.log(typeof(id1));


console.log(id1 === id2);
/* Will result in false because both will generate different
   value i.e.,  return different value whether same thing is inside.
*/

const bigNumber = 348209032912345n;
console.log(typeof(bigNumber));
// bigint ends with n at last;

// Array:
const heroes = ["Ben 10", "SpiderMan", "BatMan"];
console.log(typeof(heroes));

// Objects (Any thing inside {} is taking it well is termed as object):
const hero = {
    name: "Ben 10",
    age : 17,
    power: "Ultimatrix",
    alias: "Saviour of the Universe"
};
console.log(hero);

// It is a key-value pair dataType

// Function:
const myHero = function(){
    console.log(typeof(hero));
}
console.log(myHero);
//typeof(null) => object;
