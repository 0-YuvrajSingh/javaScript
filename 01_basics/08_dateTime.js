// *********************** Date ***********************

let myDate = new Date();
console.log(myDate);
// Non-Readable value will be returned.
// So we use different methods to obtain readable data :
console.log(myDate.toString())
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof(myDate));

// To create a specific date 
let myCreatedDate = new Date(2008, 0, 22);
console.log(myCreatedDate.toDateString());
//  Month starts from 0(January) : In this format and in result as well so we generally add 1 to month.

let myCreatedDate2 = new Date(2008, 0, 22, 5, 3);
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("01-22-2025"); // MM-DD-YY
let myCreatedDate4 = new Date('2023-01-22'); // YY-MM-DD : Not followed in this country(this particular);
console.log(myCreatedDate3.toLocaleString());
console.log(myCreatedDate4.toLocaleString()); 

let myTimeStamp = Date.now();
console.log(myTimeStamp); // Time in milliseconds
console.log(myCreatedDate.getTime()); // Time in milliseconds
// We can compare time from above two methods

console.log(Math.floor(Date.now()/1000));
// To convert into seconds divide by 1000
// But problems arise that it is in decimal so we can use round() or floor().

let newDate = new Date();
console.log(`The Month is ${newDate.getMonth() + 1} and the Date is ${newDate.getDate()}`);
//And many more are present in it as well

let newDate1 = new Date();
let formattedDate = newDate1.toLocaleString('default', {
    weekday: "long",
    timeZone: "Asia/Kolkata"
});
console.log(formattedDate);