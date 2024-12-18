/*Truthy and Falsy Values in JavaScript
In JavaScript, a truthy or falsy value refers to how a value behaves when evaluated in a Boolean context 
(e.g., inside an if statement or when used with logical operators). Every value is inherently truthy or falsy, 
depending on how JavaScript converts it during evaluation.*/
// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// TRUTHY VALUES
/*  Non-zero numbers (e.g., 1, -1, 3.14)
Non-empty strings (e.g:" ", "0", "hello", "false")
Objects and arrays (e.g., {}, [])
Functions
Dates (e.g., new Date()) */

// let userEmail = ""
// if (userEmail) {
//   console.log("User has an email");
// }else{
//   console.log("enter your email");
// }


// let userEmail = [];
// if (userEmail) {
//   console.log("User has an email");
// }else{
//   console.log("enter your email");
// }

//  check if array is empty
// if (userEmail.length === 0) {
//   console.log("array is empty");
// }

// CHECKING IF THE OBJECT IS EMPTY
let userEmail = {}
if (Object.keys(userEmail).length === 0) {
  console.log("object is empty");
  } 
  // Here when we use Object.keys property we get an array of keys. 
  // Since we have an array we can use .length property on array and check if obj is empty or not