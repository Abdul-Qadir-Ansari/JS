// map()
// Purpose: Creates a new array with the results of calling a provided function on every element in the calling array.
// Return: A new array with transformed values.
/*
The map() method is an iterative method. 
It calls a provided callbackFn function once for each element in an array and constructs a new array from the results. 
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = numbers.map( (num) => {
 return num * 2;
});
// console.log(newNum);

// CHAINING
/*
Chaining in JavaScript allows you to call multiple methods sequentially in a single statement, which improves readability and conciseness. 
This pattern is often found in libraries like jQuery and frameworks like Node.js, as well as native JavaScript methods.
*/

const chaining = numbers
.map( (num) => num + 10 ) // here 10 will be added to all the elements of array numbers 
//output : [ 11, 12, 13, 14, 15,16, 17, 18, 19, 20]
.map ((num) => num * 2) 
//output : [ 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]
/* THE TRICK IS IN THIS PHASE OF CHAINING IS THAT THE VALUES WHICH ARE SUPPOSED TO BE PROCESSED 
IN THIS STAGE WILL NOT BE THE VALUES OF ORIGINAL-ARRAY BUT THE SHALLOW-COPY OF THE ARRAY WHICH IS RETURNED FROM ITS PREVIOUS MAP()METHOD
I.E VALUES WITH 10 ADDED TO THEM
*/
.filter((num) => num >= 30) // THE VALUES THAT WILL BE FILTERED HERE WILL COME FROM THE PREVIOUS METHOD CALLLED
// output: [30, 32, 34, 36, 38, 40]
// console.log(chaining);
