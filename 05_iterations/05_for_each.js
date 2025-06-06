const coding = ["js", "py", "java", "cpp", "rb"];

coding.forEach( function (arrayElement) {
    console.log(arrayElement);
})
// Here it is a callback function  they  do not have names .
// above 1st thing inside for each is a callback function.

// Using Arrow function :
coding.forEach( (arrayElement) => {
    console.log(arrayElement);
})
// Since it is also a callback function here

function printThis(item) {
    console.log(item);
};
coding.forEach(printThis);
// This will do same thing as above.

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javaScript",
        languageFileExtension: ".js"
    },
    {
        languageName: "java",
        languageFileExtension: ".java"
    },
    {
        languageName: "python",
        languageFileExtension: ".py"
    }
]
// Above is : [{}, {}, {}]

myCoding.forEach((item)=> {
    // Object Name is item here
    console.log(item.languageName);
    // console.log(objectName.property);
})

const values = coding.forEach( (item) => {
    // console.log(item); returns undefined
    return item;
    // It also returns undefined
})
console.log(values);