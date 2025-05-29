const name = "yuvraj";
const studentNumber = 2300000;

//console.log(name+studentNumber+"@college.ac.in");
//Above usage for strings is outdated 
// Now use of backticks() for multi-line strings.
//String Interpolation : ${varName} inside ` `.

console.log(`User email is ${name}${studentNumber}@college.ac.in `);

// Another Way to declare Strings:
const way = new String('Yuvraj Singh');
console.log(way);
//This way it creates a key-value pair we can access by index.
console.log(way[0]);
console.log(way.__proto__);
// Here it shows {} but many thins are contained in it
// we can access it by var.property
console.log(way.toUpperCase());
console.log(way.charAt(11));
console.log(way.indexOf(' '))


const slice = way.substring(0,7);
console.log(slice);
const anotherSlice = way.substring(7,12);
//cannot start with negative number it take it as 0.
console.log(anotherSlice);

const url = "https://yuvraj.com/yuvraj%20singh";
console.log(url.replace('%20', ' '));
console.log(url.includes('singh'));
// .split(seperator, limit);
const str = "Yuvraj-Singh-20";
console.log(str.split('-'));
