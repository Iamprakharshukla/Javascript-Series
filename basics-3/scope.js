if (true){
    let x = 10; // block scope variable
   const y = 20; // block scope variable
    var z = 30; // function scope variable

}
// console.log(x); // ReferenceError: x is not defined
// console.log(y); // ReferenceError: y is not defined
// console.log(z); // 30 - var variable is accessible outside the block    

function myFunction() {
    const userName = 'John'; // function scope variable
    function innerFunction() {
        console.log(userName); // Accessing outer function variable
    }   
    innerFunction(); // Output: John
}
myFunction();
// console.log(userName); // ReferenceError: userName is not defined - function scope variable is not accessible outside the function

if (true) {
    const userName = 'Alice'; // block scope variable
    if(userName === 'Alice') {
        const website = 'example.com'; // block scope variable
        console.log(userName+website); // Output: example.com
    }   
    // console.log(website); // ReferenceError: website is not defined - block scope variable is not accessible outside the block
}
console.log(userName); // ReferenceError: userName is not defined - block scope variable is not accessible outside the block