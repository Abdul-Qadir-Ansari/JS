// forEach()
// forEach() is a method that calls a provided function once for each element in an array.
// It is a more functional approach to looping through arrays.
// The forEach() method of Array instances executes a provided function once for each array element.
// The forEach() method is an iterative method. 
// It calls a provided callbackFn function once for each element in an array in ascending-index order. 
// Unlike map(), forEach() always returns undefined and is not chainable. 
// The typical use case is to execute side effects at the end of a chain. 
// There is no way to stop or break a forEach() loop other than by throwing an exception. 
// If you need such behavior, the forEach() method is the wrong tool.


/*
SYNTAX
forEach(callbackFn)
forEach(callbackFn, thisArg)

PARAMETERS
callbackFn
A function to execute for each element in the array. Its return value is discarded. The function is called with the following arguments:

element
The current element being processed in the array.

index
The index of the current element being processed in the array.

array
The array forEach() was called upon.

thisArg Optional
A value to use as this when executing callbackFn. See iterative methods.

Return value
None (undefined).
*/
// forEach expects a callbackfunction which does not have any names and knows where to 
// start and takes a parameter which is referred for all elements and it iterates each element
// forEach() method does not only knows the elements of array but also their index and list of the whole array
const values = ["a", "b", "c", "d"];
values.forEach(function (items, index, arr){
  // console.log(items, index, arr);
});





// forEach() method also takes arrow function 
const languages = ["cpp", "javascript", "python", "java"];
const hold = languages.forEach(  (characters) => { // character here represents each elements of array and does
  // console.log(characters);
  return characters; //Return value None (undefined).
}  )
// console.log(values);



// using forEach() we can get values of objects inside arrays as they are returned in this form from database

const data = [];
data.push({name: "john", age:20});
data.push({name: "Robert", age: 25});
data.push({name: "Mark", age: 22});
data.forEach((obj) => {
  // console.log(obj.name);
  // console.log(obj.age);
})

// console.log(data);

const myNums = [1, 2, 3, 4, 5,];
myNums.forEach( (num) =>  {
  // console.log(num + 10);
}
);
