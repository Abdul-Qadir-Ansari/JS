// objects in js
// objects are collections of key-value pairs
// objects are mutable
// objects are passed by reference


let user = {
  name: 'John',
  "full name" : "John Doe",
  age: 30,
  email : "user@google.com",
  workingDays : ["monday", "tuesday","wednesday","thursday", "friday"],
  offDays : ["saturday", "sunday"],
  contact : 6540102080 ,
  location : "remote"
};
// accessing object properties
// dot notation method
// console.log(user.name);
// accessing as bracket method
// console.log(user["full name"]);

// adding, updating, deleting
// adding a new property
user.country = "usa";
// console.log(user);    

// updating a property
user.age = 35;
// console.log(user);

// deleting a property
delete user.location;
// console.log(user);

// using data type symbol in object as a key
let sym1 = Symbol("key");

/* let user2 = {
   sym1 : "key1"
*/ 

// console.log(typeof user2.sym1);
// here's the main trick, sym1  is being used but its data type is still string rather than symbol  
/* to properly use symbol in objects as symbols the syntax is a bit same 
like the accesssing property bracket method but here we dont use  
("doubleqoutes") as symbol in itself is a data type and not some string */

// now, properly defining and calling symbol in an object
 let user2 = {
  [sym1]  : "key1" 
 };
//  console.log(user2[sym1]);
//  here the value remains same but when we print the object its type will be symbol
// console.log(user2);

// freezing objects
// Object.freeze(user);
// user.email = "me@yahoo.com";
// console.log(user);
// here the object is frozen i.e we cant ulter or change the properties and their values

// adding function into objects
// in JS we can add functions inside a variable
// user.greetings = function(){
//   console.log("hello, USER!");
// }
// console.log(user.greetings);
// here we are calling the function using the object name and the function name but without [paranthesis()] so it just returns [Function (anonymous)]
// if we want to call the function we need to use the [paranthesis()] like this
// console.log(user.greetings());

//  now if we want to greet with users name, for that we will be using STRING INTERPOLATION ie. (`backticks`)

// user.greetings = function(){
//   console.log(`hello, ${this.name}`);
// }
//here [this] keyword is used to refer to the same object 
// console.log(user.greetings());

/* IMPORTANT : for 90% of the time we will be using dot method for 
accessing objects properties but in some special cases we have to use 
BRACKET METHOD such as we used for SYMBOL DECLARATION and CALLING IT
it is IMPORTANT FOR INTERVIEW PERSPECTIVE  */

