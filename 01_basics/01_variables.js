const userId = 1222;
let userName = "anything";
var userPassword = "stylist";
let userState;
/* We can reserve the memory
    for a variable in js
without giving it a value. */ 

// var had scope problem : In its place let is used.

console.table([userId, userName, userPassword, userState]);
//userState is undefined beacause no value declared.

// we can also declare without let var const if we are not using use strict; 