// if :

const a = 5;
const b = 10;
if (a<b){
    console.log("b is bigger");
}
if (a!=b){
    console.log("Not Equal");
}

/* Operators (that can be used) :
   <, >, <=, >=. ==. !=, ===, !==   
*/

// if & else :
const temperature = 50;
if (temperature < 50){
    console.log("Less than too Hot but hot.")
}
else{
    console.log("Too Hot for stable mind.")
}
console.log("Always gets executed");

const score = 200;
if (score > 100) {
    const power = "fly";
    console.log(`User power: ${power}`);
}
//console.log(`User power: ${power}`); => Out of Scope

// ShortHand Notation :
const balance = 1000;
if (balance > 500) console.log("Only one line will be considered inside Scope");
// there are ways to add more lines by comma but not recommended for future.

if (balance < 500){
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 1000) {
    console.log("less than 1000");
} else {
    console.log("Greater than 1000");
}

const userLoggedIn = true;
const debitCard = true;
const googleAccount = false;
const emailAccount = true;
// "ampersand" (&) 
if (userLoggedIn && debitCard){
    console.log("Access Granted");
}

if (googleAccount || emailAccount){
    console.log("User can Sign-In");
}