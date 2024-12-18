/*
SYNTAX:
for (initialization; condition; increment/decrement) {
  Code to be executed in each iteration
}
*/
// initialization: This runs once at the start of the loop. It's usually used to declare and initialize a counter variable.
// Condition:This is evaluated before each iteration of the loop.If the condition is true,the loop body runs.If the condition is false,the loop stops.
// Increment/Decrement: This is executed after each iteration of the loop body. It usually updates the loop counter.
/*
Steps of Execution:
Initialize: i = 0
Check Condition: Is i < 5? If true, proceed; if false, exit the loop.
Execute Loop Body: Run the code block.
Increment: Increase i by 1.
Repeat: Go back to Step 2.
*/
/*
How JavaScript Executes a for Loop:
Memory Allocation Phase:
JavaScript allocates memory for the loop counter (e.g., i).
Execution Context:
JavaScript enters the execution phase and runs the initialization step once.
The condition is evaluated before each iteration. If the condition is true, the loop body runs; if false, the loop exits.
After each iteration, the increment step is executed.
Call Stack:
The for loop is part of the call stack when being executed, and every iteration gets processed sequentially within the loop.
Once the condition fails, the loop exits and the call stack moves to the next statement after the loop.
*/


for (let i = 0; i <= 10; i++) {
  const element = i;
  // console.log(element);
}

// using if else inside a loop
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (i == 5) {
    // console.log("iteration 5");
  }
  // console.log(element);
}

// for-loop inside of for-loop
for (let i = 1; i <= 10; i++) {
  // console.log(`Outer value is : ${i}`)
  for (let j = 1; j <= 10; j++) {
    //  console.log(`Inner value is : ${j} and Outer loop's current value is : ${i}`);
    // printing tables from 1 to 10 usin nested for-loops
    // console.log(i + ' * ' + j + ' = ' + i*j);
  }
}
/* Here what happens is that first loop's body is executed one time the the execution context 
goes inside secon loop which contains j as loop-counter executes the 2nd loop 10 times
hten goes to first loop, prints the 2nd value of first loop and then executes 2nd loop 
and the same process is carried on until the 1st loop is ended
*/


// Printing array using for-loop
let myArray = ["dexter", "cody", "harrison", "harry"];
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  // here in cndition, we myArray < array.length. it is bcoz the length starts from 0 and the array uses index no which starts from 0.
  const element = myArray[index];
  // console.log(element);  
}



// break and continue keyword
// break :The break statement exits a loop entirely, stopping all further iterations and moving control to the first line of code after the loop.
// When break is encountered inside a loop, the loop is immediately terminated.
// Any code after the break statement inside the loop will not be executed.

for (let i = 0; i <= 10 ; i++) {
  if (i == 6) {
    // console.log("6 Detected, break the loop");
    break;
  }
  // console.log(i);
}


// continue : The continue statement skips the current iteration of the loop and moves control to the next iteration, without exiting the loop.
// When continue is encountered inside a loop, the loop immediately jumps to the next iteration, 
// skipping any code following the continue statement for the current iteration.
// The condition is checked again, and if still valid, the loop proceeds to the next iteration.


// for (let i = 0; i <= 10; i++) {
//   if (i == 6) {
//     console.log("6 Detected, skip the current iteration");
//     continue;
//   }  
//   console.log(i);
// }

// let n = 10; // Number of terms in Fibonacci series
// let a = 0, b = 1, next;

// console.log("Fibonacci Series:");
// for (let i = 1; i <= n; i++) {
//   console.log(a);
//   next = a + b;
//   a = b;
//   b = next;
// }