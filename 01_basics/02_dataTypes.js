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


