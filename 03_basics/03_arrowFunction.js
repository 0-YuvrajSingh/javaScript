const user = {
    username: "yuvraj",
    language: "javascript",

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        // here 'this' refers to the current context.
        console.log(this);
    }
}
user.welcomeMessage();
user.username = "Yuvraj";
user.welcomeMessage();

console.log(this); // empty{}
// In browser global object is Window so this shows Window in browser.

function one(){
    console.log(this);
    console.log(this.username); // undefined
}

const two = function() {
    let username = "Yuvraj";
    console.log(this.username);//undefined
    console.log(this);

}

one();
two();

const three = () => {
    let username = "Yuvraj";
    console.log(this.username); // undefined
    console.log(this); // empty: {}
}
three();

// Arrow Function:
const addNo = (num1, num2) => {
    return num1 + num2;
    // This is called Explicit Return.
}
console.log(addNo(4, 16));

//Implicit Return :
const addAnotherNo = (num1, num2) => num1 + num2;
// OR : const addAnotherNo = (num1, num2) => (num1 + num2);
// In above we do not have to use return statement but if used curly braces use retun.
console.log(addAnotherNo(45, 55));

// What if we have to return Object:
const addAnyNo = (num1, num2) => ({username: "yuvraj"});
// we have used {username: "yuvraj"} in place of ({username: "yuvraj"})
// Output :  undefined . Return statement is anything inside().
console.log(addAnyNo(4, 9));

/* Why do we not use this method inside arrow function ?
   We don't use this inside arrow functions in many cases because 
   arrow functions do not have their own this binding. 
   Instead, they inherit this from their lexical (surrounding) scope.
   This behavior is different from regular functions, 
   which define their own this depending on how they are called.
*/