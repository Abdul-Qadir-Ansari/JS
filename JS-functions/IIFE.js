// IIFE (IMEDIATELY INVOKED FUNCTIONS EXPRESSION)
// An IIFE is a function that is executed immediately after its definition. 
// It is useful for creating local scope too avoid polluting the GLOBAL NAMESPACE.

// Syntax: IIFE syntax: (function() {  code  })(); OR (() => { code })(); for arrow functions.
// (function(){ code })();  
// FOR ARROW FUNCTION
// (() => { code }) ();

//Examples
// 1. simple IIFE
(function () {
  console.log("SIMPLE IIFE");
})();

// 2. IIFE with PARAMETERS
(function (a, b) {
  console.log("IIFE WITH PARAMETERS", a + b);
})(3, 8);

// 3. IIFE with ARROW FUNCTION
(() => {
  console.log("IIFE WITH ARROW FUNCTION");
})();

// 4. IIFE with ARROW FUNCTION and PARAMETERS
((name) => {
  console.log(`ARROW IIFE ACCEPTING VARIABLES. MY NAME IS ${name}`);
})("AQ");

// 5.TWO IIFE's IN ONE FILE
(function () {
  console.log("IIFE ONE");
})();
// HERE THIS CODE WILL HAVE ERRORS AND WONT RUN. FINDING ERRORS WILL BE HARD. 
// THE FUNCTION WILL NOT EXECUTE IF WE CHANGE ARROW FUNCTION TO  NORMAL FUNCTION.
// HERE THE PROBLEM IS THAT THE IIFE IS INVOKED BUT DOES NOT KNOW WHERE TO STOP. 
// IN ORDER TO PREVENT THIS WE HAVE TO EXPLICITLY ADD SEMI-COLON (;) TO END THE INVOKED IIFE.
(() => {
  console.log("IIFE TWO");
})();

// 6.NAMED IIFE : NAMED IIFE IS AN IIFE HAVING NAME AS NORMAL FUNCTIONS
(function namedIIFE() {
  console.log("THIS IS A NAMED IIFE");
})();


// USE CASES OF IIFE
/* Avoiding Global Namespace Pollution: An IIFE creates a new scope, 
so variables defined inside the IIFE don't leak into the global scope. 
This helps prevent naming conflicts, especially in large codebases*/

(function () {
  var message = "AVOIDING GLOBAL NAMESPACE POLLUTION";
  console.log(message);
})();
// console.log(message); //ERROR: message is not defined
/*Data Privacy/Encapsulation: Variables inside an IIFE are not accessible outside of it, 
which helps encapsulate data and avoid unwanted access or modification.*/
const counter = (function () {
  let count = 0;
  return function () {
    return ++count;
  }
})();
console.log(counter()); //1 if ++count //0 if count++ 
console.log(counter()); //2 if ++count //1 if count++
// while callin this function expression if parentheses () is not used it gives [FUNCTION(anonymous)]
//  In this example, the count variable is private to the IIFE, but the returned function can still access it, creating a closure.


/*Avoiding Variable Hoisting Issues: By immediately executing the function, 
you can avoid issues with variable hoisting and ensure that variables are scoped to the IIFE.*/

(function () {
  var x = 10;
  console.log(x);
})();
// console.log(x); //ERROR: x is not defined

// function a() {
//   console.log("Function A");
//   b();
// }

// function b() {
//   console.log("Function B");
//   c();
// }

// function c() {  
//   console.log("Function C");
// }

// a();

// let val1 = 10;
// let val2 = 20;
// function addNum(num1, num2){
//   let total = num1 + num2;
//   return total;
// }

// let result1 = addNum(val1, val2);
// let result2 = addNum(5,9);

// console.log(result1);
// console.log(result2);