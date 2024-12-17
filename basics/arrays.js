// Creating Arrays
// Arrays are used to store multiple values in a single variable.
// Arrays are declared using square brackets [].
let fruits = ["apple", "mango", "banana"];
// console.log(fruits);

// Array constructor
let bikes = new Array("passion+", "splendor", "pulsor", "shine");
// console.log(bikes);




// Accessing Array Elements
// Array elements can be accessed using their index.
// Index starts from 0.
let colors = ["red", "green", "blue"];
let fristColors = [0];
// console.log(colors[fristColors[0]]);
// console.log(colors);



// modifying array elements unlike strings
// array elements can be modified by assinging new values to desired index position
// colors[0] = "yellow";
// console.log(colors);



// Array properties
/* Arrays have several properties that can be used
 to get information about the array.*/
// The length property returns the number of elements in the array.
let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.length);
// here length refers to no. of elements in an array and not its index

let isArray = Array.isArray(colors);
// console.log(isArray);
// The isArray() method returns true if the object is an array, otherwise false.



// Adding elements in array
// elements can be added at the end of array using push() method
// colors.push("lavender");
// console.log(colors);
// elements can be removed at the end of array using pop() method
// colors.pop("lavender");
// console.log(colors);

// elements can be added at the beginning of array using unshift() method
// colors.unshift("black");
// console.log(colors);
// elements can be removed at the beginning of array using shift() method
// colors.shift("black");
// console.log(colors);


// elements can be added at a specific position in array using splice() method
colors.splice(1, 0, "pink");
/* here splice(start: number(index at which the element will be added),
 deleteCount: number
(denotes the number of the elements that will be deleted 
and will start right next from the newly inserted element ),
...items: string[]): string[] (+1 overload)*/
// console.log(colors);

let nos = [1, 2, 3, 4, 5];
nos.splice(2, 3);
// console.log(nos); 
//here the returned value arent showed

// console.log(numbers.splice(2, 3));
// here the reurned value of splice which is deleted value is shown



// elements can be removed from a specific position in array using splice() method
// colors.splice(1, 1);
/*start — The zero-based location in the array from which to start removing elements.
deleteCount — The number of elements to remove.*/
// console.log(colors);



// elements can be added at the end of array using concat() method
colors = colors.concat("black");
// console.log(colors);

// or two or more arrays can be concatenated 
let moreColors = ["white", "gray", "brown"];
let combinedColors = (colors.concat(moreColors));
// console.log(combinedColors);

// console.log(colors);
let slicedColors = colors.slice(1,3);
// console.log(slicedColors);


// Searching/Filtering

// indexOf() method returns the first index of the element in the array
let index = colors.indexOf("black");
// console.log(index);
// if the element is not found in the array, it returns -1

// includes() checks if array has specific element
let has = colors.includes("blue");
// console.log(has);
// if the element is found in the array, it returns true, otherwise false

let findColors = colors.find(colors=>colors.startsWith("g"));
// console.log(findColors);
// find() method returns the first element in the array that satisfies the provided testing function
// if no elements satisfy the testing function, undefined is returned

let filteredColors = colors.filter(colors=>5);
// console.log(filteredColors);



// transfoeming arrays
// map() method creates a new array populated with the results of calling a provided function on every element
let mappedColors = colors.map(colors=>colors.toUpperCase());
// console.log(mappedColors);
// map() method does not change the original array
// reduce() method applies a function against an accumulator and each element in the array (from left to rigth)
// to reduce it to a single value
let totalLength = colors.reduce((sum, colors) => sum + colors.length, 0); 
// console.log(totalLength);
// colors.reverse();
// console.log(colors);
// sort() method sorts the elements of an array in place and returns the array
// colors.sort();
// console.log(colors);

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
// console.log(matrix);

// console.log(Array.isArray("ABCDEF"));
// console.log(Array.from("ABCDEF"));
// Creates an array from an iterable object.

let score1 = 100 ;
let score2 = 200 ;
let score3 = 300 ;
// console.log(Array.of(score1, score2, score3));
// .of() method convertes strings, objects etc into array

/* Here in ARRAYS also, we can create DEEP and SHALLOW COPIES using SPREAD OPERATOR(...)
   and also we can add new properties[using .push()] and update the existing properties in the copied object */

let useCase1 = ["abc","def","ghi"];
let useCase2 = [...useCase,"jkl","mno"];
useCase1.push("xyz");
// console.log(useCase1);
// console.log(useCase2);

// here useCase1 and useCase2 are two independent arrays which means changing one's property wont affect the other


// Adding objects in arrays
let arr = [];
// using .push()method
// arr.push(
//   {name : "john", age : 20},
//   {name : "Robert", age : 25},
//   {name : "Mark", age : 22}
// );

// console.log(arr);
let newObj = [
  // {name : "john",age : 20},
  // {name : "Robert", age : 25},
  // {name : "Mark", age : 22}
]
// using concat
// arr = arr.concat(newObj);
// console.log(arr);


// using spread operator (...)
arr = [
  ...arr,
  {name : "john",age : 20},
  {name : "Robert", age : 25},
  {name : "Mark", age : 22}
]
// console.log(arr);