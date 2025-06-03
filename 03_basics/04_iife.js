// IIFE : Immediately Invoked Function Expressions

function atStart() {
    console.log("DataBase Loaded");
}
atStart(); 
// Above will be polluted by global scope many times

// Now, IIFE Syntax :
(function atBeginning() {
    // This is called named IIFE
    console.log("DB Connected");
})();
// (functionDefinition)(functionExecutionCall);
// And ';' is important because it Ends the IIFE.

// Another Way for IIFE :
(() => {
    console.log("Database Connected");
})();

// To give input : 
((name) => {
    console.log(`Database Connected , Welcome ${name}`);
})("Yuvraj !");
// Above two are simple IIFE.