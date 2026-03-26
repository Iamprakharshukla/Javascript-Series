//Push()-> It is used to add an element at the end of the array.
let fruits = ["Apple", "Banana", "Orange"];
fruits.push("Grapes");
console.log(fruits); // Output: ["Apple", "Banana", "Orange", "Grapes"]

//Pop()-> It is used to remove the last element from the array.
fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana", "Orange"]

//Shift()-> It is used to remove the first element from the array.
fruits.shift();
console.log(fruits); // Output: ["Banana", "Orange"]    

//Unshift()-> It is used to add an element at the beginning of the array.
fruits.unshift("Mango");
console.log(fruits); // Output: ["Mango", "Banana", "Orange"]


//tstring()-> It is used to convert an array into a string.
let fruitsString = fruits.toString();
console.log(fruitsString); // Output: "Mango,Banana,Orange"


//Join()-> It is used to join all elements of an array into a string with a specified separator.
let fruitsJoined = fruits.join(" - ");
console.log(fruitsJoined); // Output: "Mango - Banana - Orange" 

//concat()-> It is used to merge two or more arrays into a single array.
let vegetables = ["Carrot", "Broccoli", "Spinach"];
let food = fruits.concat(vegetables);
console.log(food); // Output: ["Mango", "Banana", "Orange", "Carrot", "Broccoli", "Spinach"]


// slice()-> It is used to extract a portion of an array and return it as a new array.  
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ["Banana", "Orange"]

// splice()-> It is used to add or remove elements from an array at a specified index. it modifies the original array and can also return the removed elements as a new array.
fruits.splice(1, 1, "Strawberry", "Pineapple");
console.log(fruits); // Output: ["Mango", "Strawberry", "Pineapple", "Orange"]