const userEmail = "yuvraj@github.com";
// or userEmail = [];

if (userEmail) {
    console.log("Got Email");
} else {
    console.log("Don't have a Email");
}

/* Falsy Values:
   => false
   => 0
   => -0
   => BigInt 0n
   => ""
   => null
   => undefined
   => NaN
*/
/* Truthy Values:
   => "0"
   => 'false'
   => " "
   => []
   => {}
   => function(){} : Called as an empty function but is a truthy value.
*/

// To check if Array is Empty:
const arrayEmpty = [];
if (arrayEmpty.length === 0) {
    console.log("Array is Empty");
}

const emptyObject = {};
if (Object.keys(emptyObject).length === 0){
    console.log("Object is Empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10; 
val1 = null ?? 10;
val1 = undefined ?? 15;
// At places of 5 , 10 and 15 there are complex functions if value
// is returned then assign it otherwise other values.
// Notes : The first value that it obtains , it will get assigned.
val1 = null ?? 10 ?? 20;

console.log(val1);

// Ternary Operator :
// Syntax : condition ? true : false;

const passPrice = 800;
passPrice <= 1000 ? console.log("Less than thousand") : 
console.log("More than thoudsand");