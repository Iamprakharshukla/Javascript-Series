// 🔹 1. length – String Ki Length
// 👉 Kitne characters hain, wo batata hai.

let str = "JavaScript";
console.log(str.length); // 10


// 🔹 2. toUpperCase() – Capital Banata Hai
console.log(str.toUpperCase()); // JAVASCRIPT

// 🔹 3. toLowerCase() – Chhote Akshar Banata Hai
console.log(str.toLowerCase()); // javascript

// 🔹 4. trim() – Extra Space Hatata Hai
console.log(str.trim()); // "JavaScript"
// 👉 trimStart() → starting space remove
// 👉 trimEnd() → ending space remove

// 🔹 5. slice(start, end) – Part Nikalna
console.log(str.slice(0,4)); // Java
console.log(str.slice(4));  // Script

// 👉 Negative bhi use hota hai:
console.log(str.slice(-6)); // Script

// 🔹 6. substring(start, end)
// slice jaisa hi hota hai, but negative allow nahi karta.
console.log(str.substring(0,4)); // Deve

// 🔹 8. replace() – Replace Karna

let newStr = str.replace("Java", "Type");
console.log(newStr); // TypeScript