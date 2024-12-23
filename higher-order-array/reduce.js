//  reduce()
// Purpose: Executes a reducer function on each element of the array, resulting in a single output value (like summing or accumulating).
// Return: A single value (not an array).
// SYNTAX
/*
const result = array.reduce((accumulator, currentValue, index, array) => {
  return accumulator + currentValue;
}, initialValue);
*/
/*
Parameters
callbackFn
A function to execute for each element in the array. 
Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn. 
For the last invocation, the return value becomes the return value of reduce(). 
The function is called with the following arguments:

accumulator
The value resulting from the previous call to callbackFn. On the first call, 
its value is initialValue if the latter is specified; otherwise its value is array[0].

currentValue
The value of the current element. On the first call, 
its value is array[0] if initialValue is specified; otherwise its value is array[1].

currentIndex
The index position of currentValue in the array. On the first call, its value is 0 if initialValue is specified, otherwise 1.

array
The array on which reduce() was called upon.

initialValue Optional
A value to which accumulator is initialized the first time the callback is called. 
If initialValue is specified, callbackFn starts executing with the first value in the array as currentValue. 
If initialValue is not specified, accumulator is initialized to the first value in the array, 
and callbackFn starts executing with the second value in the array as currentValue. 
In this case, if the array is empty (so that there's no first value to return as accumulator), an error is thrown.
*/



const numbers = [1, 2, 3, 4];
// EXAMPLE with NORMAL FUNCTION
//  const totalPrice = numbers.reduce(function (accumulator, currentValue){
//  console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`); //just to showcase how the callback will take values and process them
//  return accumulator + currentValue;
//  },0
/*
If initialValue is specified, callbackFn starts executing with the first value in the array as currentValue. 
If initialValue is not specified, accumulator is initialized to the first value in the array, 
and callbackFn starts executing with the second value in the array as currentValue. 
*/
//  );
//  console.log(totalPrice);



// Example with ARRROW FUNCTION
// const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(total);


// taking bigger example
const shoppingCart = [
  {
    itemName: "js course",
    price: 2999
  },
  {
    itemName: "py course",
    price: 999
  },
  {
    itemName: "mobile dev course",
    price: 5999
  },
  {
    itemName: "data science course",
    price: 12999
  },
]
// making the total amount of all the courses in the cart

const cartTotal = shoppingCart.reduce((accumulator, courses) => accumulator + courses.price, 0);
// here accumulator will hold the previous values to add with next to give the sum total of the cart
// courses represent each course in the shoppingCart and 0 will be the initialValue for accumulator
// console.log(`TOTAL AMOUNT: ${cartTotal}`);
