// Singleton Objects
const appUser = new Object(); // Constructor

appUser.id = 2312026;
appUser.name = "yuvraj";
appUser.isLoggedIn = false;

 console.log(appUser);

const regularUser = {
email: "yuvraj@appuser.com",
fullname: {
    userfullname: "yuvraj",
    lastname: "singh"
    }
}
console.log(regularUser.fullname.lastname);

const ob1 = {
    1: "a",
    2: "b"
};
const ob2 = {
    3: "c",
    4: "d"
};
const ob3 = {
    5:"e",
    6:"f"
}
const ob4 = {7: "h"}
const ob5 = Object.assign(ob4, ob2, ob3);
// Above modifies obj1 beacause Object.assign(target, ...sources)
console.log(ob5);
console.log(ob4);
console.log(ob1);
//So to tackle above thing we use  {}
const ob6 = Object.assign({}, ob1, ob2, ob3 , ob5);
console.log(ob6);
/* If you want immutable merging (no mutation), 
   always use {} as the first argument.
   {} is an empty object literal — this is the target.
   Properties from obj1 and obj2 are copied into this new empty object.
*/ 
