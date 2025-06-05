// for of :

const arr = [1, 2, 3, 4, 5];
for (const item of arr) {
    console.log(item);
}

const greetings = "Hello Visitor!";
for (const greet of greetings) {
    console.log(`Each char is : ${greet}`);
}

// Maps :

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('UAE', "United Arab Emirates");
// Unique Values are Stored & order is maintained.
console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);    
}