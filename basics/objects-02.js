// declaring singleton object
// construcotr method
let randomUser = new Object;
// console.log(randomUser);
// this is a singleton object
// here both the  singleton and the object literals are empty

const user = {};
// console.log(user);
user.name = "AQ";
user.email = "user@gmail.com";
user.age = 20 ;
user.location = "bhiwandi";
// console.log(user);

//  we can create nested objects
const regularUser = {
  name :{
    fullName : {
      firstName : "ABDUL QADIR",
      lastName : "ANSARI"
        }
  }
};
// to access the properties inside the nested object we use dot method
//  console.log(regularUser.name.fullName.lastName);  



// Combining objects

// Object.assign(target,source) (destructive)
const   ace = {1:"a", 2:"b"};
const heart = {3:"a", 4:"b"};
const spade = {5:"a", 6:"b"};

// const obj = Object.assign(ace, heart);
// console.log(obj);
// console.log(obj===ace);
// console.log(ace);

// when we have more than two objects to combine we can use an empty {} as a target to avoid error
// const obj = Object.assign({},ace, heart, spade);
// console.log(obj);

// Object.assign method will not be used frequently instead we will use spread operator (...)

// const newObj = {...ace,...heart,...spade}
// console.log(newObj);

// when values come from database we get arrays of objects
const value = [
  { id : 1,  
    email : "you@gmail.com"
  },
  { id : 2,  
    email : "you2@gmail.com"
  }
];

// to access our objects we first need their index position and the using the dot method we can access them
// console.log(value[0].email);

// Frequently used Methods
// object.key(objectName) returns all keys of an object in an array format
// console.log(Object.keys(user));

// object.value(objectName) retirns all values of objects in an array format
// console.log(Object.values(user));

// Object.entries(objectName) returns an array of key-value pairs  
// console.log(Object.entries(user));
// [ 'email', 'user@gmail.com' ],
// [ 'age', 20 ],
// [ 'location', 'bhiwandi' ]

// hasOwnProperty(key) checks if the object has the spwcific property
// console.log(user.hasOwnProperty("age"));

// OBJECT DESTRUCTURING
// syntax const {property} = objectName

const {name} = user;
// console.log(name);

// features of object destructuring
// 1. assigning to new variable name
// syntax const {proeprty:newVariableName} = objectName;
// const {email:newEmail} = user;
// console.log(newEmail);

// 2.Default values : If a property does not exist in the object you can assign a default value
// syntax const {key = value} = objectName;
// const {isLoggedIn = true} = user;
// console.log(isLoggedIn);

// 3.Nested Object Destructuring
// syntax const {nested object Key :{value}};
// const person = {
//   name : "Abdul",
//   address : {
//     city: "bhiwandi",
//     zip : 421302
//   }
// };
// const {address:{city,zip}} = person;
// console.log(city,zip);


// 4.Rest Operator(...rest) used to gather the remaining properties into a new object
// syntax const {selected-key, ...rest} = objectName;
// const {age, ...rest} = user;
// console.log(...rest);


// objects are of reference type, meaning variables store a reference (memory address) to the object and not the object itself
/* objects are of reference type, meaning they are stored by reference , not by value.
This can lead to side effects, when you modify  an object, as any changes to object will affect all references to it  */


/**
 When you assign or pass an object to another variable, both variables refer to the same object in memory. 
 This means modifying the object through one variable will affect the other variable as well, 
 because they both point to the same reference.
 */
// Eg.
// const obj1 = {
//   name: "AQ",
//   age: 20
// };
// const obj2 = obj1;
// obj2.name = "qadir";
// console.log(obj1.name);
// console.log(obj2.name);

//  to avoid such side effects we use SHALLOW COPY and DEEP COPY
// SHALLOW COPY using Object.assign()
 const obj1 = {
 name : "AQ",
 age:20,
 address : {
  city: "bhiwandi",
  zip: 421302
 }
 };

//  const obj2 = Object.assign({},obj1);
//  obj2.name = "qadir";
//  console.log(obj1.name);
//  console.log(obj2.name);

//  obj2.address.city = "mumbai";
//  console.log(obj1.address.city);
//  console.log(obj2.address.city);

// SHALLOW COPY USING SPREAD OPERATOR (...)
// const obj2 = {...obj1, rank:10, surname:"Ansari" } ;
// obj2.name = "qadir";
// console.log(obj1.name);
// console.log(obj2);
// when using spread operator we can add more properties in the new object and we can also update the existing properties(properties at the end will overwrite)


// In both cases, obj1 and obj2 are now independent objects, so modifying obj2 doesn't 
// affect obj1(only top level properties are copied nested objects are still passed by reference).
// Shallow vs. Deep Copy:
// Shallow Copy: Only the top-level properties are copied, while nested objects are still passed by reference.
// Deep Copy: All levels of nested objects are copied, creating a fully independent object.
//  To copy nested objects, you need to use a deep copy method, such as JSON.parse
//  and JSON.stringify() or a library like Lodash.

// const obj2 = JSON.parse(JSON.stringify(obj1));
// obj2.address.city = "mumbai";
// console.log(obj1.address.city);
// console.log(obj2.address.city);

// Here, obj1 and obj2 are completely independent, even with nested objects, because a deep copy was made.

