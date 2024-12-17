// alert ("hello world")
// let age = 25 ;
// console.log(age);

// age = 90;
// console.log(age);

// const score = 25;
// console.log(score);

let singleQuotedString = 'abdul';
console.log(singleQuotedString);

let father = "ShahFAisal";
console.log(father);

let space = " ";

let sName = "Ansari";
console.log(father + space + sName);

let full = father + space + sName;
console.log(full);

let text = "Hello World!";
console.log(text.startsWith("H"));
console.log(text.endsWith("!"));
console.log(text.includes("World"));

console.log(text.replace("World", "Everyone"));
console.log(text.replace("World", "folks"));
console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.slice(1, 13));
console.log(text.substring(0, 8));
console.log(text.split(" "));
console.log(text.indexOf("l"));
console.log(text.lastIndexOf("l"));
console.log(text.trim());

let radius = 15;
const pi = 3.14;

console.log(radius === pi);

radius -= 5; /*short-hand for adding more than 
1 pronounced as radius equals to radius +5*/
console.log(radius);

let no = 10;
console.log(radius === no);

//type conversion

// implicit
let result = "5" - 2;
console.log(result);

// explicit
let random = 123;
random = String(123);
console.log(random);


let abc = 1.56;
console.log(Math.ceil(abc));
console.log(Math.floor(abc));
console.log(Math.round(abc));
console.log(Math.max(10, 20, 30));
console.log(Math.min(10, 20, 30));
console.log(Math.random());
console.log(Math.sqrt(25));
console.log(Math.pow(2, 3));
// console.log(Math.abs(45));

/* Order of operations in JS :
 Order Precedence*/
// 1. Parentheses ()
// 2. Exponents (**)
// 3. Multiplications *, Division /, Remainder % (they are evaluated from left to right)
// 4. Addition +, Subtraction - (evaluated from left to right)
// eg
console.log(5+2*(3**2)-4/2);

// Template Literals
// instead of single/double quotes here we use ``(backticks) to work with strings
 let names = "AQ";
 let age = 20 ;
 let intro = `My name is ${names} and my age is ${age}`;
 console.log(intro);
 /* here we use ( ${} ) to call variables instead of traditional concatenation*/

//Multi-line Template literals

console.log(`My name is ${names},
and my age is ${age} `);

// variables