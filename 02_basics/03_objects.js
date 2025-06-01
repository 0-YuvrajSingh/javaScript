// Singleton : A Singleton Object is a design pattern that restricts the instantiation of a class to only one object.
// It is created using a constructor i.e.,
// "Object.create" =>Called as constructor method will learn in future.
// Now normal way i.e., Object Literals which create multiple instances.

const mySymbol = Symbol("anySymbol");
const jsUser = {
    name: "Yuvraj", // By default system process the key name as "name" (String key).
    age: 20,
    "fullName": "Yuvraj Singh",
    [mySymbol]: Symbol("Symbiote"),
    // If we remove Symbol("Symbiote") <= Symbol from this it will again be treated as string.
    location: "India",
    email: "yuvi@github.com",
    //If you have stored value in String format to search by second method i.e., jsUser["email"];
    isLoggedIn: false,
    lastLoginDays: ["Yesterday", "2-Days Ago", "3-Days Ago"]
};
/* Important points :To print a Symbol it must be inside [] ,
   otherwise it will be treated as a string.
   Also,You must declare mySymbol before using it as a computed key in the object.
*/

// Ways to access objects : Two ways =>
    console.log(jsUser.email);
    console.log(jsUser["email"]);
    console.log(jsUser[mySymbol]);
    console.log(typeof(jsUser[mySymbol]));
//Problem with method 1 is if we have a key in format of String we cannot access it by objectName.key;

// We can also change anything of an object and can also prevent from changing.
jsUser[mySymbol] = Symbol("$^^^^$");
//TO prevent from making any change : Object.freeze(jsUser);

jsUser.greet = function(){
    console.log(`hello ${this.name} and ${this[mySymbol].toString()}`);
    // this.contextObject => refers to the context object — i.e., the object on which a method is called.
};

jsUser.greet();


// console.log(jsUser.greet); => This will print function definition undefined.
console.log(jsUser.greet());

