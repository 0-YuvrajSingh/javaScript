let var1 = 10;
const var2 = 20;
var var3 = 30;

console.log(var1);
console.log(var2);
console.log(var3);

/* If all three are working correctly so why there are 
   3 ways to declare variable . Reason : Scope
*/

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a); // Show error
// console.log(b); // Show error
console.log(c); // Will print 30 that is why we do not use var.

/* Note : if we check global/core scope of a browser and in code 
   environment run via node it will be different.
*/
/* ******************** Nested Scope ******************* */
function one() {
    const username = "Yuvraj";
    
    function two() {
        const website = "GitHub";
        console.log(username);
    }
    // console.log(website) Out of Scope
    two()
}
one()

// Another example : 
if (true) {
    const username = "Yuvraj";
    if (username === "Yuvraj"){
        const website = "GitHub";
        console.log(username + " " + website);
    }
    // console.log(website); => Out of scope 
}
// console.log(username); => Out of scope

// Mini-Hosting(just a brief will explain in future) :

addOne(5); // Will not give Error
function addOne(num){
    return num + 1;
}

// addTwo(5); => Will Show Error
const addTwo = function(num){
    return num + 2;
} // This way is also called an expression
addTwo(5);