const score = 400;
console.log(score);

const count = new Number (100);
console.log(count);
console.log(count.toString().length);
console.log(count.toFixed(2));
// Gives upto decimal n point inside toFixed(n);

const anyNumber = 123.8967;
console.log(anyNumber.toPrecision(4));
// Returns String Value;
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

/* ********************* Math ********************* */
console.log(Math);
/* Above is an object named Math which contains many values
   We can access these values by Math.propertyName 
*/
console.log(Math.abs(-999));
console.log(Math.round(9.5));
console.log(Math.ceil(9.3));
console.log(Math.floor(9.7));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // Values are between 0 & 1 and are different everytime.
console.log(Math.random()*10+1); 
// Via this we ensure that min value is 1 and max value 11.

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


/* Above theory in steps to gain result in  a particular range:
   Step 1 :  Math.random() => Result between 0 and 1.
   Step 2 : (max - min + 1) => Select the range between which 
             you want the value.
   Step 3 : Math.random() * (max - min + 1) => So now the range 
            is a number from 0 up to just less than max - min + 1.
   Step 4 : Math.floor(Math.random() * (max - min + 1))   =>
            Rounds down to the nearest integer of above value.
   Step 5 : (Math.floor(Math.random() * (max - min + 1)) + min ) => 
            To get a random integer between min and max inclusive.
*/