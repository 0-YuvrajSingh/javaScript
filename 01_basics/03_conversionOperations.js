// This lecture is for conversion of dataType;

let X = "45";
console.log(typeof X); // Direct Way
console.log(typeof(X)); // This is the method way typeof();

/*To convert to a dataType write first letter capital
  of that data like Number, String, Boolean;
*/

let y = Number(X);
console.log(typeof y);
console.log(y);

let a = "R45";
console.log(typeof(a));

let b = Number(a);
console.log(typeof(b));
console.log(b); // Nan

/* "45" => 45 | Easily converted;
   "R45" => NaN | Not A Number;
   true => 1; | false =>  0;
*/

let p = undefined;
console.log(typeof(p));
q = Number(p);
console.log(q);

let i = "R45"
let j = Boolean(i);
let k = ""
let l =Boolean(k);
console.log(typeof(j));
console.log(j);
console.log(l);





/*  Boolean Case
    1 => true | 0 => false;
    ""(emptyString) => false | "anygiberishPresent" => true;
    // If any space is also present it will show true;
*/