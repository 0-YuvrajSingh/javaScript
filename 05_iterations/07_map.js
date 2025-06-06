const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.map( (num) => num + 10);
// It works on every value no conditions like num > 2 etc should be applied.
console.log(newNums);

// Chaining : Chaining means calling multiple array methods one after another 
// :— the output of one method becomes the input of the next.
const newNumbers = myNums
                        .map( (num) => num * 10)
                        .map( (num) => num + 15)
                        .filter( (num) => num >= 55);
console.log(newNumbers);