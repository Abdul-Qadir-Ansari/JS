// stack and heap memory
// stack memory is faster but limited in size
// in this example, we will use the stack memory to store the data, stack memory stores primitive data types
let myName1 = "abdul";
let myName2 = myName1;
// here, myName2 is a copy of myName1, both are pointing to the same
myName2 = "Ansari";
console.log(myName1);
console.log(myName2);
/* here in stack memory the actual variables does not change but
   its shallow copy is given to other who access it as thir value */



// heap memory is slower but can grow dynamically
/* in heap memory, the actual variable changes, and the change is reflected 
   in all the variables that point to the same location in the heap memory */
let obj1 = {
  email: "user@yahoo.com",
  age: 25
};

let obj2 = obj1;
obj2.email = "user@google.com";
console.log(obj1.email);
console.log(obj2.email);