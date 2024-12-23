/*
1.A function in JavaScript is a block of reusable code designed to perform a particular task. 
2.Functions are fundamental building blocks in JavaScript programming, and understanding them is crucial for interviews.
3.A method is a procedure or function in OOPs Concepts. 
  Whereas, a function is a group of reusable code which can be used anywhere in the program.
4.Functions can take input arguments and return output values. 
  On the other hand, a method is a function that is associated with an object in object-oriented programming. 
  Methods are functions that are called on objects and can modify or access the object's properties
*/
// Function declaration
//1. A function declaration defines a function with the function keyword. 
function greet() {
  console.log("Hello, world!");
}

// greet(); 
// Hoisting: Function declarations are hoisted, meaning they can be called before they are defined in the code.
function sayMyName() {
  console.log("A");
  console.log("Q");
}

// sayMyName();


//2. Function expression
// A function expression defines a function using the let or const keyword.
// A function expression assigns a function to a variable. These functions are not hoisted.


const sayHello = function () {
  console.log("HELLO!");
}
// sayHello();

//3. Parameters and Arguements
// Parameters are the variables in Function Declaration. 
// function add(a, b) {
//   return a + b;
// }
// here (a,b) are parameters
// Arguments are the values passed to the function when it is called.
// add(5, 10); (5,10) are arguements.
// console.log(add(5, 10)); // Outputs: 15

//4. Default Parameters : You can set default values for parameters if no argument is provided.
// if user deos not pass any arguement or just passed an empty string thenwhta will happen
// function greetUser(username){
//   return `${username} Welcome`;
// }
// console.log(greetUser(""));
// here nothing happens and empty string will be printed
// but if the user does nit pass anything
// function greetUser(username){
//   return `${username} Welcome`;
// }
// console.log(greetUser());
// here, in place of username undefined will be printed
// to avoid such problems we can use IF ELSE statement
// function greetUser(username){
//   if(username === undefined /*|| username === null || username === ""*/){
//     console.log("Please enter username");
//     return // this will make all the code below in the function unreachable
//   }
//   return `${username} Welcome`;
// }
// console.log(greetUser("Abdul Qadir"));

// OR INSTEAD OF THIS LENGTHY CODE WE COULD JUST GIVE DEFAULT PARAMETER

// function greet(name = "guest") {
//   return`Hello, ${name}!`;
// }
// console.log(greet("AQ"));
// greet();
// Outputs: Hello, guest! if no arguement is passed. If arguement is passed it will uver write the default parameter.


//5. Return keyword
// The return keyword is used to exit a function and return a value to the caller.
function add(a, b) {
  return a+b;
}
// add(5,5);//here we only returned value from function . To print the value we need to condsole log it
// console.log(add(2,3));

//why to use return keyword instead console.log() 
// function sub(num1, num2){
//   console.log(num1-num2);
// }
 //sub(5,5); //if directly called it will display answer but if used in a variable it is undefined
// const result = sub(6,5);
// console.log(result); // gives result and undefined both at same time
// now we will use return keyword
function sub(num1,num2){
  return num1 - num2;
}
//sub(5,1); //just values are retuned from function not printed
// console.log(sub(5,1));
// ANYTHING IN A FUNCTION BELOW RETURN KEYWORD WILL BE UNREACHABLE AND WONT HAVE ANY EFFECT ON FUNCTION.
// when we return values we can also save it in a variable
/*function multiply(num1,num2){
  return num1 * num2;
}
const result = multiply(5,5);
console.log(result);*/


// 6. ...REST parameter: Rest parameters allow a function to accept an indefinite number of arguments as an array.
function cartItems(...num1){
  return num1 ;
}
// console.log(cartItems(200,300,400,500)); // returns array of items
// OR we can assign some values and after those values we can use ...rest
function items(val1,val2,...value){
  return value;
}
// console.log(items(200,300,400,500)); // returns array of items
// here val1 and val2 have values 200 and 300 respectively and remaining values are stored in rest parameter i.e. ...value