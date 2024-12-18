// for-in loop
// The for...in loop is used to iterate over the enumerable properties (keys) of an object. 
// It can also be used with arrays, but it iterates over the index or property names, not the values.
// for...in iterates over the keys (or indices) of an object or array.
/*
The loop will iterate over all enumerable properties of the object itself and those the 
object inherits from its prototype chain (properties of nearer prototypes take precedence 
over those of prototypes further away from the object in its prototype chain). 
*/

/*
A for...in loop only iterates over enumerable, non-symbol properties. 
Objects created from built–in constructors like Array and Object have inherited non–enumerable properties 
from Array.prototype and Object.prototype, such as Array's indexOf() method or Object's toString() method, 
which will not be visited in the for...in loop.
*/

// USING FOR-IN LOOP ON AN OBJECT
let person = {
  name: 'John',
  age: 30,
  occupation: 'Developer',
}

for (let key in person) {
  // console.log(key) // this will only return keys i.e. name, age, occupation
  // console.log(person[key]) // this will return the values i.e. John, 30, Developer
  // console.log(`${key} : ${person[key]}`); //this will return key-value pair i.e name : John
}

// USING FOR-IN LOOP ON AN ARRAY
let colors = ['red', 'green', 'blue'];
for (const key in colors) {
  // console.log(key); //As for-in loop is used to iterate over the enumerable properties (keys) of an object. 
  // here in Arrays it will iterate over the index or property names, not the values.
  // console.log(colors[key]); // this will return the values i.e. red, green, blue
  
}