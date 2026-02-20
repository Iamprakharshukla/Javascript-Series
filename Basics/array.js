let myArray = [1, 2, 3, 4, 5];

console.log(myArray);

// const yourArray=['Hello', 'World', 42, true,['hello', 'world',['Hello', 'World']]];
// console.log(yourArray);

// Array ke andar kisi bhi type ka data store kar sakte hain.

//shallow copy  => let newArray = yourArray; // Ye reference copy hai, original array ko point karta hai. agar newArray me changes karoge to yourArray me bhi changes honge.


newArray = myArray; // Shallow copy
newArray.push(6);   
console.log(myArray); // [1, 2, 3, 4, 5, 6] - original array bhi change ho gaya


// Deep copy => let newArray = [...yourArray]; // Ye spread operator se deep copy hai, original array se alag memory location par store hota hai. agar newArray me changes karoge to yourArray me changes nahi honge.

newArray1 = [...myArray]; // Deep copy
newArray1.push(7);
console.log(newArray1); // [1, 2, 3, 4, 5, 6, 7] - original array change nahi hua
console.log(myArray); // [1, 2, 3, 4, 5, 6] - original array unchanged


//Array Methods => There are many built-in methods available for arrays in JavaScript. Some commonly used array methods include:

// 1. push() - Adds one or more elements to the end of an array and returns the new length of the array.
myArray.push(6);
console.log(myArray); // [1, 2, 3, 4, 5, 6]
// 2. pop() - Removes the last element from an array and returns that element.
myArray.pop();
console.log(myArray); // [1, 2, 3, 4, 5]            
// 3. shift() - Removes the first element from an array and returns that element.
myArray.shift();
console.log(myArray); // [2, 3, 4, 5]           
// 4. unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.   
myArray.unshift(1);
console.log(myArray); // [1, 2, 3, 4, 5]
// 5. indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(myArray.indexOf(3)); // 2
// 6. includes() - Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log(myArray.includes(4)); // true
// 7. length - Returns the number of elements in an array.
console.log(myArray.length); // 5   
// 8. slice() - Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
console.log(myArray.slice(1, 4)); // [2, 3, 4]
// 9. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
myArray.splice(2, 1, 10); // Starting from index 2, remove 1 element and add 10
console.log(myArray); // [1, 2, 10, 4, 5]
// 10. join() - Joins all elements of an array into a string and returns this string.
console.log(myArray.join('-')); // "1-2-10-4-5"
// 11. reverse() - Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
myArray.reverse();
console.log(myArray); // [5, 4, 10, 2, 1]   
// 12. sort() - Sorts the elements of an array in place and returns the sorted array.
myArray.sort((a, b) => a - b); // Sort in ascending order
console.log(myArray); // [1, 2, 4, 5, 10]
// 13. forEach() - Executes a provided function once for each array element.
myArray.forEach((element) => {
  console.log(element);
});
// 14. map() - Creates a new array populated with the results of calling a provided function on every element in the calling array.
const squaredArray = myArray.map((element) => element * element);
console.log(squaredArray); // [1, 4, 16, 25, 100]