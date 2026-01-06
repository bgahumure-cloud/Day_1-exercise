// 1. Comments and Documentation
// bruce is a student of refactory, this is a single line comment

/*
  i love javascript as aprogramming language.
  Bruce is writing mult-line comment.
*/

// 2. Variable Declaration with `let`
let name = "Gahumure";
console.log("Variable with let:", name);

// 3. Variable Declaration with `const`
const rentAmount = 300000;
console.log("Constant value:", rentAmount);

// 4. Checking Data Types
let age = 25;
console.log("Type of age:", typeof age);

let city = "Kampala";
console.log("Type of city:", typeof city);

// 5. String Data Type
let name1 = "Gahumure";
let greeting = "Hello";
let fullGreeting = greeting + " " + name1 + "!";
console.log("Concatenated string:", fullGreeting);

// 6. Number Data Type
let a = 10;
let b = 5;
console.log("Sum:", a + b);
console.log("Difference:", a - b);
console.log("Product:", a * b);
console.log("Quotient:", a / b);

// 7. Boolean Data Type
let isStudent = true;
let isGraduated = false;

if (isStudent) {
  console.log("He is a student.");
} else {
  console.log("He is not a student.");
}

// 8. Undefined vs Null
let uninitialized;
let emptyValue = null;

console.log("Undefined value:", uninitialized);
console.log("Null value:", emptyValue);
console.log("Type of undefined:", typeof uninitialized);
console.log("Type of null:", typeof emptyValue); 

// 9. Using typeof Operator
console.log("typeof null:", typeof null); 
console.log("typeof undefined:", typeof undefined); 

// 10. Console.log() Practice
console.log("how are doing Bruce");