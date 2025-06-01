// Object Destructuring

const course = {
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "Shadow"
};

const {courseInstructor} = course;
console.log(courseInstructor);

// Benefits : ✅ Less repetition ✅ More readable

/* const {courseInstructor: Professor} = course;
   console.log(Professor);
   Here, courseIntructor is assigned a new name generally shorter names for easy acces
*/

// ********************API's******************** \\
// For JSON generally keys and values are strings
// {
//     "name": "Yuvraj",
//     "courseName": "JavaScript",
//     "price": "free"
// };