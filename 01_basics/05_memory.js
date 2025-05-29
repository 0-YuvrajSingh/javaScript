/* Types of memory :
   -> Stack : for Primitive dataType,
   -> Heap : for Non-primitive dataType
*/

let userName = "yuvraj";
let userFirstName = userName;

userFirstName = "Yuvraj";
console.log(userFirstName);
console.log(userName);

/* In Stack : if reference is given to another primitive dataType
   a copy of original is created and if other's value is changed 
   original remains same.
*/

let userOne = {
    userEmail : "user@google.com",
    userId : 546739
};

let userTwo = userOne;
userTwo.userEmail = "user@google.com";

console.log(userTwo);
console.log(userOne);

/* In Heap : The data created is stored in heap memory
   the first is given reference to it
   the second is also given refernce to it
   if any change is made from any side original is changed.
   This works for Non-Primitive dataType.
*/






