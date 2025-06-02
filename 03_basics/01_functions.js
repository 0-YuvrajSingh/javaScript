function addition(number1, number2) {
    console.log(number1 + number2);
    return number1 + number2;
}
const result = addition(889, 1101);
console.log("Result:", result);

function loginUserMessage (userName){
    if(userName === undefined){
        return "Please Enter the UserName."
    }
    return `${userName} just logged in.`
}
const User = loginUserMessage("Yuvraj");
console.log(User);
const User2 = loginUserMessage();
console.log(User2);
// If no input is provided in function parameters it will return : undefined : Info..

function loginUserDefaultMessage (userName = "Yuvraj Singh"){
/* this case does  not arise because default value is given :
    userName = "Yuvraj Singh"
    if(userName === undefined){
        return "Please Enter the UserName."
    }
*/
    return `${userName} just logged in.`
}
const User3 = loginUserDefaultMessage("Yuvraj");
console.log(User3);
const User4 = loginUserDefaultMessage();
console.log(User4);

// If We Don't know howmany arguments/Inputs are coming :
function calculateCartPrice(...num1){
    // ... can be both rest and spread it depends on use case.
    // Spread Operator (...) :"Expands" elements from an array or object
    // Rest Operator (...) : "Collects" multiple elements into a single array or object.
    return num1;
}
console.log(calculateCartPrice(1200, 400 ,600));

function totalPrice(val1, val2, ...nums){
    // If given inputs first value will go to val1 second to value2 rest as an element of array.
    return nums; 
}

const user = {
    username: "yuvraj",
    tech: "javascript"
};
function handleObject(anyObject){
    console.log(`UserName is ${anyObject.username} and the Technology he 
    is using is ${anyObject.tech}`);
};
handleObject(user);
// OR :
handleObject({
    username: "Yuvraj Singh",
    tech: "JavaScript"
});

const myNewArray = [200, 400, 100, 300];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));