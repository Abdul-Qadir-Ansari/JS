
/*06:37 Control flow is an important concept in JavaScript that allows the program to execute certain code based on conditions.
13:14 Control flow in JavaScript involves the use of conditional statements.
19:51 The scope of variables declared using the const and let keywords is limited to the block they are declared in
26:28 Control flow in JavaScript involves executing different portions of code based on conditions.
33:05 Understanding control flow in JavaScript
39:42 Falsy values in JavaScript include false, 0, negative 0, empty string, null, undefined, and NaN.
46:19 Understanding the concept of nullish coalescence operator in JavaScript.
52:50 The video covers control flow in JavaScript, including the ternary operator and if-else statements.
Crafted by Merlin AI.*/

// const temperature = 40;
// if (temperature <= 39) {
//   console.log("STAY HOME,STAY HYDRATED");
// }else{
//  console.log("DONT STAY OUT UNNECESSARY"); 
// }


// IF_ELSE statements have block scope 
// const score = 250;
// if (score>150){
//   let status = "ELIGIBLE FOR COURSE";
//   console.log(`Candidate is ${status}`);
// }
// console.log(status); // ReferenceError: status is not defined

// SHORTHAND NOTATION
let balance = 1000;
if(balance > 500) console.log("insufficient balance") //console.log("sufficient balance"); // IT IS OK TO WRITE A SINGLE LINE BUT IF WE ADD COMMA (,) AND MORE LINES OF CODE IT'S BAD PRACTISE
// here the scope is defined implicitly and we can write multiple lines by using (,). 
// BUR THIS IS A BAD PRACTISE,MAKES CODE UNREADABLE AND IS CONSIDERED IMMATURE CODE

// if we want to check multiple conditions then we use else if
// let amount = 1500 ;
// if (amount < 500){
//   console.log("You need 1000 more");
// }else if(amount <= 1000){
//   console.log("You need 500 more");
// }else if(amount <= 1500){
//   console.log("You are eligible");
// }else{
//   console.log("You are not eligible");
// }

// comparison operators
// == loose comparison   performs type coercion and onlyc heck value eg: 0 == false ; true
// === strict comparison doesnt perform type coercion and checks both type and value eg: 0 === false; false


/* != loose inequality
performs type coercion before comparing, so it only check for value equality after converting types
console.log(5 != "5"); true converts 5 from number to string 
(When one of the operands is a string, JavaScript defaults to string concatenation.)
*/

/* !== strict inequality
returns true if value and type are not equal
returns false if value and type are equal
eg: console.log(5 !== "5"); true (num & string)
console.log(5 !== 5); false both are num
*/

