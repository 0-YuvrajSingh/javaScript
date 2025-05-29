/* Comaprison Operators :
   <,>, <=, >=, == , != 
*/

/* Comparison is easy if the dataTypes are same.
   But if dataTypes are different it becomes Unpredictable.
*/

console.log("2" > 1); // Easily compared 
console.log("02" > 1); // Easily compared

// But what if :

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/* Reason for above three:
   An equality check == and comparisons > < >= <= works differently.
   Comparisons convert null to a number , treating it as 0.
   While, == return false because it does not convert.
   (1) 0 not greater than 0
   (2) null NaN
   (3) null is converted to 0 
*/

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// Same problem occurs with undefined but it could not be converted to a number so, false.

// Strict check : === ; Check both values and dataType
console.log("2" == 2);
console.log("2" === 2);

/* Note : We should comparisons between avoid unpredictable , 
          null , undefined as well as variables of different dataTypes.
*/
