// targetting elements by their id
// document.getElementById("title") this will give access to the element with id="title"

//By adding the dot method of object we can get access to attributes of the elements and other properties
// document.getElementById("title").id;
// o/p : title

// document.getElementById("title").class this will give undefined for accessing class name we have to use "className"
// document.getElementById("title").className

// we can also use getAttribute to get the values of attributes of a element
// document.getElementById("title").getAttribute this will return (ƒ getAttribute() { [native code] }) meaning this is not the correct syntax
// we have to pass the attribute name in the bracket like this
// document.getElementById("title").getAttribute("id")

// while using getAttribute to get the class name "className" won't work as it worked for the dot method
// to get class name from this method we have to use "class" as a parameter

// we have another accessing method which set the values
// syntax
// document.getElementById("title").setAttribute("attribute name" , "attribute value")
// document.getElementById("title").setAttribute("class" , "rage")
// When we set values using setAttribute() method it always overwrites the value and in the console it returns-
// undefined even though the elements attribute value is changed 

// NOW STORING document.getElementById("title") IN A VARIABLE FOR QUICK ACCESS AND LEARN VARIOUS OPERATIONS 
const title = document.getElementById("title")

// AS EVERYTHING HERE IS A BIG OBJECT WE CAN USE THE DOT METHOD TO ACCESS ITS PROPERTIES
// NOW USING STYLE TO STYLE THE ELEMENT
// TO GIVE STLE PROPERTIES W'LL USE THE SAME STYLING SYNTAX AS WE USE IN INLINE CSS
title.style.backgroundColor = "grey";
title.style.color = "yellow";
title.style.padding = "15px";
title.style.borderRadius = "20px";


//innerText: Gets or sets the visible text within an element, considering CSS styling. It excludes text hidden by CSS (e.g., display: none).
//textContent: Gets or sets all the text inside an element, regardless of styling.  It includes all text, even if hidden by CSS.
//innerHtml: Gets or sets the HTML content (including tags) inside an element. Not applicable to plain text; includes all child elements and tags.

// title.innerText
//op:'Learning DOM From Chai and Code'
// title.textContent
//op: 'Learning DOM From Chai and Code Test Code'
// title.innerHTML
//op: 'Learning DOM From Chai and Code <span style="display: none;">Test Code</span>'


// NOW USING querySelector()
// querySelector() is used to select an element based on a CSS selector. It returns the first
// element that matches the specified CSS selector. If no element matches the selector, it returns null.
var title = document.querySelector("#title");
//op: <h1 id="title" style="background-color: grey; color: yellow; padding: 15px; border-radius: 20px;">Learning DOM From Chai and Code</h1>


// document.querySelector('input[type="password"]') in this first use single quotes and for type use double quotes


// NOW SELECTING A UL THEN SAVING IT IN A VARIABLE TO FURTHER SELECT LIST items AND SAVE THAT TO IN A VARIABLE THEN CHANGE ITS BG-COLOR
document.querySelector("ul")
// Selects the ul

const myul = document.querySelector("ul")
// saves the selected ul in a variable and shows undefined on pressing ENTER in console of devtools
// op: undefined

// myul //Calling the variable to check if the ul is saved 

const tempLiItem = myul.querySelector("li")
//op: undefined
//Now using querySelector on the variable holding the ul using DOT METHOD to further select the first li item of the ul and storing it in another variable

tempLiItem.style.backgroundColor = "green";
tempLiItem.style.padding = "10px";
// using the dot method to change the style of the li item


// extracting innerText from the li item and changing  its text 
// tempLiItem.innerText
// op: 'one'
// tempLiItem.innerText = "one hundred"
// op: 'one hundred'


// querySelectorAll()
// It returns data as a NodeList
// querySelectorAll() is used to select all elements that match the specified CSS selector. It returns
// a NodeList, which is a collection of nodes that matches the selector. If no element matches it returns an empty NodeList.
// Using querySelectorAll and dealing with Nodelist and Understanding how to make styling changes in a NodeList
// NodeList and HTMLCollections are not pure arrays, to apply array methods to them first check their prototype for available methods

document.querySelectorAll("li")
//op: NodeList(3) [li, li, li]

const tempList = document.querySelectorAll("li")
// undefined
// tempList
// op: NodeList(3) [li, li, li]
tempList.style.backgroundColor = "green";
// trying to change the bg color of the list but it displays an error
// Uncaught TypeError: Cannot set properties of undefined (setting 'backgroundColor') at <anonymous>:1:32


// To change the styling of a NodeList we have to specify their index position to change their styling
// tempList[0].style.color = "pink";
//op: 'pink'

// We took this EXAMPLE bcoz there a chance of mistake in here 
const myH1 = document.querySelectorAll("h1");
// op: NodeList(1) [h1]
myH1.style.color = "green";
// even though there's only h1 we cannot change its styling through the above syntax

// Correct Syntax
// myH1[0].style.color = "green";

// Using forEach() with NodeList
// myH1.forEach(l => {l.style.backgroundColor = "green"})


// USING getElementByClassname
// It returns data as a HTMLCollection
// It returns HTML collection of elements that matches the specified class name. If no elements match the class name it returns null.
// Using getElementsByClassName and dealing with HTMLCollection and Understanding how to make styling changes in HTML Collection
// To apply array methods on HTMLCollection we have to convert it to an array using Array.from()

document.getElementsByClassName("list-item")
// getting all elements with class list-item
// op: HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
const tempClassList = document.getElementsByClassName("list-item")
// holding it in a variable to convert into an array 
//op: undefined
tempClassList // calling the variable to check if HTMLCollection is saved in it or not
//op: HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
const convertArray = Array.from(tempClassList)
// using Array.from() to convert the HTMLCollection from tempClasslist variable into an array and storing it into another variable for future use
//op: undefined
convertArray //calling the variable to check if teh HTMLCollection is converted into an Array
//op: (4) [li.list-item, li.list-item, li.list-item, li.list-item]
convertArray.forEach(li => li.style.backgroundColor = "grey")
// styling the list items with grey color using the array method forEach() on the array convertArray
//op: undefined