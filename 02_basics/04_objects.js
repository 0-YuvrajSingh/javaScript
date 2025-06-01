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

// Another Method :
const ob8 = {...ob1,...ob2,...ob3};
console.log(ob8);

// Array of Objects : (generally during fetching)
const newUserInfo = [
    {
        id: 1,
        email: "starter1@gmail.com"
    },
    {
        id: 2,
        email: "starter2@gmail.com"
    },
    {
        id: 3,
        email: "starter3@gmail.com"
    },
    {
        id: 4,
        email: "starter4@gmail.com"
    }
];
console.log(newUserInfo[0].email); // 0-based indexing

console.log(appUser);
console.log(Object.keys(appUser));
console.log(Object.values(appUser));
console.log(Object.entries(appUser));
console.log(appUser.hasOwnProperty('isLoggedIn'));
console.log(typeof Object.keys(appUser));
// It shows object and array are a special type of an object.
// Correct way to check if it is an array:
console.log(Array.isArray(Object.keys(appUser)));
//true;
