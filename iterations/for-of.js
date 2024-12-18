// for-of loop
// The for...of loop is used to iterate over iterable objects such as arrays, strings, maps, sets, etc. It works on the values of the object.
// Use Case: When you want to work with the values of an iterable object (e.g., array, string).
// Does not work with non-iterable objects (e.g., plain objects).
// Non-destructive: The original data structure is not altered.

// for (const element of object) { 

// }
// ELEMENT in here will be used as argument and here we dont use any condition to iterate over each items the argument passed will directly represent each items
// here the OBJECT does not refer to JS OBJECT but it is used in for broader term like any object which the for-of loop can iterate eg. arrays,
// strings, maps, sets etc

const arr = ["A", "B", 1, 2];
for (const elements of arr) {
  // console.log(elements);  
}

const greetings = "Hello World";
for (const character of greetings) {
  if (character == " ") {
    // continue
    // break
  }
  // console.log(`Each character of greetings are ${character} `);
}

// USING FOR-OF ON MAPS
// The Map object holds key-value pairs and remembers the original insertion order of the keys. 
// Any value (both objects and primitive values) may be used as either a key or a value.
// Unlike plain objects here keys are also wrapped in ("double-quotes")

const map = new Map();
map.set("India", "91");
// map.set("India", "91"); //Unlike plain objects maps doesnt take duplicate value all its values are UNIQUE and in THE ORDER IN WHICH INSERTED
map.set("Afghanistan", "93");
map.set("Antarctica", "672"); //here if we dont add "" to value it will return Map(3) { 'India' => '91', 'Afghanistan' => '93', 'Antarctica' => 672 }
/*Map(3) {
  'India' => '91',
  'Afghanistan' => '93',
  'Antarctica' => '672'
}*/
// console.log(map);

// Now iterating over MAPS using FOR-OF loop
for (const keys of map) { // IF WE WRITE KEYS IN THIS MANNER THE OUTPUT WILL BE AN ARRAY OF KEY-VALUE PAIRS of each entries eg: [ 'India', '91' ]
  // console.log(keys);
}
// Correct Syntax
for (const [key, value] of map) {
  // console.log(key, ":", value);
  // OP: India : 91
  // Afghanistan : 93
  // Antarctica : 672
}

// iterating plain object using for-of
const person = {
  personName : "John Doe",
  personAge : 28,
  personCountry : "USA"
};
 for (const keys of person) {
  // console.log(key) Objects are not iterable in for-of loop
 }