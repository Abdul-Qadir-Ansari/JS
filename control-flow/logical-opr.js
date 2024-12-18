/* LOGICAL OPERATORS
1. Logical AND (&&)
Returns true if both operands are true.
Returns false if any one of the operands is false.
eg: console.log(true && true); true
console.log(true && false); false
Short-Circuiting with &&:
If the first operand is false, JavaScript does not evaluate the second operand because the whole expression will already be false.
console.log(false && (3 > 2));   false (doesn't check the second condition)


2. Logical OR (||)
Returns true if at least one of the operands is true.
Returns false if both operands are false.

Short-Circuiting with ||:
If the first operand is true, JavaScript does not evaluate the second operand because the whole expression will already be true.
console.log(true || (3 < 1));   true (doesn't check the second condition)

3.  Logical NOT (!)
Inverts the Boolean value:
true becomes false,
false becomes true.

4. Logical Operator Precedence
i. ! has the highest precedence so it's evaluated first.
ii. && is evaluated next.
iii. || has the lowest precedence.
console.log(true || false && false);  true (AND evaluated first, then OR)
console.log(!false || false);         true (NOT evaluated first)

*/

// using &&
//let userActive = true;
//let userHasDebit = true;

// if (userActive && userHasDebit) {
//   console.log("user can buy");
// }else{
//   console.log("not allowed");
// }

// using ||
// let loggedInFromGoogle = false;
// let loggedInFromEmail = true ;
// let loggedInFromFacebook = false;
// if (loggedInFromGoogle||loggedInFromEmail||loggedInFromFacebook){
//   console.log("welcome");
// }else{
//   console.log("not logged in");
// }



// NULLISH COALESCING OPERATOR (??)
/*
Nullish Coalescing Operator (??) in JavaScript
The nullish coalescing operator (??) is a logical operator that returns the right-hand side operand when the left-hand side operand is null or undefined. If the left-hand side is not null or undefined, it returns the left-hand side value.

It is used to provide a default value when dealing with potentially null or undefined variables.

Syntax:
javascript
Copy code
let result = leftExpr ?? rightExpr;
leftExpr: The value to be checked.
rightExpr: The default value to return if leftExpr is null or undefined.
How It Works:
If leftExpr is null or undefined, rightExpr is returned.
If leftExpr is any other value (even falsy values like 0, false, ""), leftExpr is returned.
 */

let val ;
// val = 12 ?? 40;
// val = null ?? "hello";
// val =  undefined ?? "nullish";
// val = null ?? 30 ?? 50;
// val = false ?? null;
// console.log(val); 

// When Left Operand Is Not Null/Undefined:
let name = "John";
// console.log(name ?? "Anonymous");

// Handling Falsy Values:
// let count = 0;
// console.log(count ?? 5);  
// Although 0 is falsy, it's not null or undefined, so the left-hand value 0 is returned, not the default value 5.

// chaining: You can chain multiple operators to provide fallback values until a valid (non-null/undefined) value is found.
let a = null;
let b = undefined;
let c = "Hello";
// console.log(a ?? b ?? c ?? "Fallback");


/*
Difference from || (Logical OR):
The logical OR (||) operator also provides a fallback, but it checks for any falsy values, not just null or undefined.

?? checks for: null or undefined.
|| checks for: any falsy value (0, false, "", NaN, null, undefined).
Example with ||:
*/

// let count = 0;
// console.log(count || 5);  // IMPORTANT
// console.log(count ?? 5);  // IMPORTANT
// In the first case (||), 0 is falsy, so 5 is returned. In the second case (??), since 0 is not null or undefined, it is returned.


// TERNARY OPERATOR (OFTEN CONFUSED WITH NULLISH COALESCING OPERATOR)
// The ternary operator is used to provide a simple way to execute a different expression based on a
// condition. It's often confused with the nullish coalescing operator, but they serve different PURPOSES
/*
The ternary operator is a concise way to write conditional statements in JavaScript. 
It is often used as a shorthand for if-else statements and is the \ONLY OPERAND IN JAVASCRIPT THAT TAKES THREE OPERANDS
*/

// let age = 20;
// age >= 20 ? console.log("can vote") : console.log("cannot vote") ;
// OR
// let age = 20;
// let canVote = (age>=20) ? "Eligible to vote" : "Not eligible to vote"
// console.log(canVote);

/*
Nested Ternary Example:
Ternary operators can be nested, but it can make code harder to read.

let score = 85;
let grade = (score >= 90) ? 'A' : (score >= 80) ? 'B' : 'C';
console.log(grade);  // Output: "B"
Interview Tip:
Use the ternary operator for simple conditional logic to keep your code concise, 
but avoid excessive nesting, as it can decrease code readability.
*/