// Creating Promise :
const promiseOne = new Promise(function(resolve, reject){
    // Do an Async Task :
    // e.g., DB Calls, Cryptography, Network
    setTimeout(function(){
        console.log('Async Task Is Complete');
        resolve();        
    }, 1000);
});

// Promise Consumption:
promiseOne.then(function(){
    console.log("Promise Consumed");
})

// Relation:  resolve  is connected to then but for it to work resolve() must be called.

new Promise((resolve, reject) => {
    setTimeout( () => {
        console.log("Async Task-2");
        resolve();
    }, 1000);
}).then( () => {
    console.log("Async Task-2 resolved");
});

const promiseSecond = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve({username: "Yuvraj",
            email: "yuvraj@childplay.js"
        })
    },1000)
});
promiseSecond.then((e) => {
    console.log(e);
});

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({username: "Yuvraj Singh",
                password: `Math.random()`
            })
        } else {
            reject('ERROR : Something Went Wrong');
        }
    }, 2000)
})

promiseThree.then((x) => {
    console.log(x);
    return x.password; 
}).then((userPassword) => {
    console.log(userPassword);
}).catch((error) => {
    console.log(error);
})
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error) {
            resolve({username: "Yuvraj Singh",
                password: Math.floor(Math.random()* 100 + 1)
            })
        } else {
            reject('ERROR : Something Went Wrong');
        }
    }, 2000)
})

// Preferred Syntax:
promiseFour
.then((x) => {
    console.log(x);
    return x.password; 
})
.then((userPassword) => {
    console.log(userPassword);
})
.catch((error) => {
    console.log(error);
    // catch to handle errors that might be thrown
})
.finally(() => {
    console.log("The Promise is either resolved or rejected");
});

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false; // try true will show error
        if(!error) {
            resolve({username: "JavaScript",
                password: Math.floor(Math.random())* 100
            })
        } else {
            reject('ERROR : JS Went Wrong');
        }
    }, 2000)
});