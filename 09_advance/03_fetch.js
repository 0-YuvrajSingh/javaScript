
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error: ", error);  
    }
}
getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);  
})
.catch((error) => {
    console.log(error);    
});

// 🧠 Key Concept: JavaScript Event Loop
// JavaScript runs in a single-threaded environment with a mechanism called the Event Loop, which decides when and how asynchronous code (like Promises, setTimeout, fetch) executes.

// 🧩 Understanding the Queues:
// Call Stack — Executes sync code top to bottom.

// Web APIs — Browser handles timers (setTimeout), fetch(), etc.

// Task Queues:

// 🌀 Microtask Queue: .then, await, Promise.resolve()

// 🧱 Macrotask Queue: setTimeout, setInterval, UI events

// ✅ Why fetch appears to "run first"?
// Here’s what’s really going on:

// promiseOne and others use setTimeout(..., 1000) or 2000 ms → So they delay on purpose.

// fetch(...) might respond faster than those timeouts.

// Even if fetch takes some time, its .then() is registered immediately, and if the network is fast,
// it finishes before the setTimeout Promises do.