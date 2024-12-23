// filter()
// Purpose: Creates a new array with all elements that pass the test implemented by the provided function.
// Return: A new array containing elements that pass the condition (true values).
/*
The filter() method is an iterative method. 
It calls a provided callbackFn function once for each element in an array, 
and constructs a new array of all the values for which callbackFn returns a truthy value. 
Array elements which do not pass the callbackFn test are not included in the new array.

*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = numbers.filter(num => num % 2 === 0);
// console.log(even);
const greaterThanFour = numbers.filter((num) => num >= 4);
// console.log(greaterThanFour); // doing the same with forEach() method
numbers.forEach((num) => {
  if (num >= 4) {
    // console.log(num);
  }
}
)

// pushing value of num in an empty array
const newNum = [];
numbers.forEach((num) => {
  if (num >= 4) {
    newNum.push(num);
  }
})
// console.log(newNum);


//Taking a bigger array with objects inside it
const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// accessing books with genre fiction
const fictionBooks = books.filter((book) => book.genre === "Fiction");
// console.log(fictionBooks);

// getting books with genre history and shuld be published before 2000
const historyBooks = books.filter((book) => {
  // here we've to use EXPLICIT RETURN i.e using return keyword bcoz we're using curly-braces{}/SCOPE otherwise it'll return empty array in filter()
  return book.genre === "History" && book.publish <= 2000
});
// console.log(historyBooks);

// getting books with genre science and shuold be published after 2000
const scienceBooks = books.filter((book) => book.genre === "Science" && book.publish >= 2000); // Here we're using IMPLICIT RETURN 
// const scienceBooks = books.filter((book) => (book.genre === "Science" && book.publish >= 2000));
// IN IMPLICIT RETURN we can WRITE our CONDITION WITH or W/O PARENTHESES AROUND THEM
console.log(scienceBooks);