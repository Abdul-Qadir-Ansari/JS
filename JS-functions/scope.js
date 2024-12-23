

// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);
// upto here everything is fine, but when we introduce scope block {}, global and local it will create problem

// let and const are block scoped, var is function scoped
// let and const are hoisted but not initialized, var is hoisted and initialized with undefined

// now lets see block or local scope and the problems related to that
// let and const are not redeclared, var can be redeclared
//var c = 300; //instead of this the variable inside if will be printed causing errors


if(true){
  let a = 10;
  const b = 20;
  // var c = 30;
} // everything inside if have block scope except var thats bcoz it is globally scoped or function scope

// console.log(a); Error: a is not defined
// console.log(b); Error: b is not defined
 //console.log(c); //This should also be not defined but instead it shows its value. This is the core reason that var is not used

//lets try the above example with let and const

let x = 1;
const y = 2;

if(true){
  let x = 200;
  const y = 300;
  // console.log("INNER:", x);
  // console.log("INNER:", y);
}

// console.log(x);
// console.log(y);
// HERE BOTH THE VALUE HAVE SAME NAME BUT ARE TOTALLY INDEPENDENT DUE TO ITS SCOPE DIFFERENCE

/* WHEN CHECKING SCOPE THROUGH BROWSER I.E. BY INSPECTING ITS SCOPE WILL BE DIFFERENT FROM THE CODE ENVIRONMENT THROUGH NODE 
(INTERVIEW PERSPECTIVE)  */

// NESTED SCOPE
// IN Nested Scope CHILDRENS CAN ACCESS THEIR PARENTS PROPERTIES but PARENTS CAN'T ACCESS CHILDRENS PROPERTIES.
function one (){
  username = "AQ"
  function two(){
    age = 20;
    console.log(`UserName is ${username} and Age is ${age}`); // here we can accesss properties of PARENT FUNCTION
  }
  // console.log(age); (ERROR: age is not defined) Here we cant access age as it is  CHILD/NESTED function of FUNCTION ONE.
  two();
}
/* JavaScript is an interpreted language, but it also has some compilation
Interpreter: JavaScript uses an interpreter to execute instructions, one by one.
This allows JavaScript to run on lightweight applications like Notepad. 
Compilation: JavaScript is compiled into a binary byte code, which is then executed by the JS virtual machine. 
Just-in-time (JIT) compilation:Most modern JavaScript interpreters use JIT compilation to improve performance. 
This process compiles the JavaScript source code into a faster, binary format while the script is being used. 
Environment
Whether JavaScript is compiled or interpreted depends on the environment in which it is run. 
Older browsers interpret JavaScript, while modern browsers support JIT compilation and always compile JavaScript code.  */


// one();
// two() ReferenceError: tow is not defined. FUNCTION two CANT BE CALLED DIRECTLY IT CAN ONLY BE CALLED BY PROVOKING FUNCTION ONE.

// FUNCTION HOISTING 
// normal functions are hoisted meaning we can call them before declaring them.
// console.log(addOne(5));
function addOne(num){
  return num + 1;
}

// Function Expression are not hoisted meaning they cannot be called before initialization
// console.log(add(4));
let add = function(num){
  return num + 1;
} 