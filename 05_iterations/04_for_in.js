const myObject = {
    'game1': 'NFS',
    'game2': 'SpiderMan',
    'game3': 'PUBG'
};

// Below will not able to run via key-value pair

// We will use for in loop :
for (const key in myObject) {
    console.log(`${key} :- ${myObject[key]}`);
}

const programming = ["js", "java", "py", "cpp", "rb"];
for (const key in programming) {
    // console.log(key);
    // Array's key start from 0 and are numbers;
    // So, to print values we do :
    // console.log(programming[key]);
    console.log(`At ${key} :- ${programming[key]}`);
}

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('UAE', "United Arab Emirates");
// Unique Values are Stored & order is maintained.
for (const key in map) {
    console.log(key);
    // No value will be printed.
    // Reason : Map is not iterable so forin will not print key values.
}

