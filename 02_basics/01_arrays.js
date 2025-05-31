/* [] => Brackets/Square Brackets
   () => Parenthesis
   {} => Braces/Curly Braces
*/

const myArr = [1, 2, 3, 4, 5];
console.log(myArr);

const myArr2 = new Array(0, 2, 4, 6, 8);
console.log(myArr2);

myArr.push(6);
console.log(myArr);
myArr.push(7);
console.log(myArr);
myArr.pop();
console.log(myArr);

myArr.unshift(-1); // Add value to the front 
console.log(myArr);
myArr.shift();     // Remove value from the front
console.log(myArr);
myArr.shift();
console.log(myArr);

console.log(myArr.includes(6)); // Return true if present else false;
console.log(myArr.indexOf(9));  // Return index if present else -1;

const newArr = myArr2.join(" ");
//It does not change the original array but return a new string by joining array elements.
console.log(myArr2);
console.log(newArr);
console.log(typeof(myArr2));
console.log(typeof(newArr));

// Slice & Splice
console.log("Original :", myArr);

const myNewArr1 = myArr.slice(1, 3);
console.log("myNewArr1 :",myNewArr1);
console.log("afterSlice :", myArr);
//No change in original array;

const myNewArr2 = myArr.splice(1,3);
console.log("myNewArr2 :",myNewArr2); 
console.log("afterSplice :", myArr);
//It manipulates/changes original array and also include last range(here,3).