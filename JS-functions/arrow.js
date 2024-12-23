// this keyword
// `this`keyword refers to the current context.
// `this` keyword is used to refer to the current object.
// It is used to access the properties and methods of the current object.
// It is also used to pass the current object as an argument to a function.
// The `this` keyword is used to refer to the current object in the context of a function
// or a method. It is not a keyword in the classical sense, but rather a property of the global object
const user = {
  username : "mark",
  age : 25,
  welcomMessage : function(){
    console.log(`Welcome ${this.username} you are ${this.age} years old`); //here this refers to the current object
    console.log(this); // this shows the current context of the printed lines meaning all the key-pair values of the current object 
  }
};

//user.welcomMessage(); //for this line the key-pair will show Mark as username.
//user.username = "Carl";
//user.welcomMessage(); // but here the key-pair value will show username as Carl.


// (in a browser, the global object is the window object, and in a Node.js environment it is the global object).
//console.log(this); //here the in Node.js environment it will refer to an  empty object {}. 
// BUT IN THE BROWSER THE GLOBAL OBJECT WILL THE WINDOWS OBJECT.


/*ALL THIS IS BECOZ IN EARLIER TIMES THERE WAS ONLY ONE WAY TO EXECUTE JS THAT WAS IN BROWSER.
THE ENGINE THAT EXECUTED JS WAS FOUND ONLY IN THE BROWSER.
BUT AS TIME PASSED THAT ENGINE WAS EXTRACTED AND NAMED DIFFERENTLY BY THE EXTRACTORS LIKE NODE, DENO, ETC,
RESULTING IN US HAVING A STANDALONE ENGINE.
SO THE GLOBAL OBJECT WAS WINDOW. BUT NOW WE CAN EXECUTE JS IN OTHER ENVIRONMENT LIKE NODE
SO THE GLOBAL OBJECT IS NOW GLOBAL.
BCOZ OF THE WINDOWS GLOBAL OBJECT WE CAN CAPTURE ALL WINDOWS EVENTS LIKE CLICK, FORM SUBMIT,ETC. */

// console.log(window); //this will show the windows object in the browser.


// using `this` with FUNCTION EXPRESSION
const eg = function(){
  let user = "aq"; 
  //console.log(this.user); //accessig user will show undefined 
   //console.log(this); //this will show the global object windows in browser and in node it will give large set of values
  // console.log(user); //this will show aq
}

eg();


// using `this` with ARROW FUNCTION
const user1 =  () => {
     username = "AQ";
    //console.log(this.user); // Output: UNDENFINED
  // console.log(this);  //here the in Node.js environment it will refer to an  empty object {} and windows object in browser.
}
// user1();


// PURE ARROW FUNCTION
// PURE FUNCTION IS A FUNCTION WHERE THE OUTPUT IS ONLY DETERMINED BY ITS VALUES, WITH NO SIDE EFFECTS.
const multiply = (num1, num2) => {
  return num1*num2;
}

// Implicit Return in JavaScript
// Implicit return occurs when a function automatically returns a value without needing the explicit return keyword. 
// This feature is available in arrow functions for concise, single-line expressions.

// When Implicit Return Happens
// Single-line arrow functions (i.e., those without curly braces/scope {}) automatically return the result of the expression.
// If you use curly braces {} in an arrow function, you must explicitly use the return keyword.



// example
const add = (num1, num2) => num1 + num2;
console.log(add(5, 7)); 

// example . IMPLICIT RETURN WITH STRING
const greet = name /* OR (name) */ => `HELLO ${name}`;
// console.log(greet("AQ"));

// Implicit Return and Objects
// If you want to return an ob+ject implicitly, you must wrap the object in parentheses to avoid confusion with the block body syntax.
const person1 = (name, age) => ({name : name, age : age});
// console.log(person("AQ",20));

const person2 = (name, age) => ({name, age}); // This is equivalent to
const person3 = (name, age) => {return {name, age};}
// console.log(person("Carl", 25)); 