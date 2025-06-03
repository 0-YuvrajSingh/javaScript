const month = 3;
switch (month) {
    case 1:
        console.log("January");       
        break;
    case 3:
        console.log("March");       
        break;
    case 5:
        console.log("May");       
        break;
    case 7:
        console.log("July");       
        break;
    case 9:
        console.log("September");       
        break;
    case 11:
        console.log("November");       
        break;

    default:
        console.log("Even no. of Month");
        break;
}
/* If break statement not present it will go through
    every case after it including itself except default case.
*/
const day = "Mon";
switch (day) {
    case "Mon":
        console.log("Today is Monday");
        break;
    case "Tue":
        console.log("Today is Tuesday");
        break;
    case "Wed":
        console.log("Today is Wednesday");
        break;
    case "Thr":
        console.log("Today is Thursday");
        break;
    case "Fri":
        console.log("Today is Friday");
        break;
    case "Sat":
        console.log("Today is Saturday");
        break;
    case "Sun":
        console.log("Today is Sunday");
        break;

    default:
        console.log("Not Correct Input !");
        break;
}
// Case-Sensitive language if mon then it will not match Mon;
