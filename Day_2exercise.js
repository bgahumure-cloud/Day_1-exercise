// Day 2 JavaScript Exercises - Combined


// Exercise 1: String Concatenation Challenge
let dealerName = "Karibu Groceries";
let location = "Kampala";
let product = "fresh produce";

let messageConcat = "Dealer: " + dealerName + " | Location: " + location + " | Product: " + product;
console.log("Exercise 1 - String Concatenation:");
console.log(messageConcat);


// Exercise 2: Template Literal Practice
let messageTemplate = `Dealer: ${dealerName} | Location: ${location} | Product: ${product}`;
console.log("Exercise 2 - Template Literal:");
console.log(messageTemplate);


// Exercise 3: Type Checking and Conversion
let str = "123";
let num = 456;

console.log("Exercise 3 - Type Checking:");
console.log("Type of str:", typeof str);  // "string"
console.log("Type of num:", typeof num);  // "number"

let strToNum = Number(str);
let numToStr = String(num);

console.log("After conversion:");
console.log("strToNum:", strToNum, "| type:", typeof strToNum);  // "number"
console.log("numToStr:", numToStr, "| type:", typeof numToStr);  // "string"


// Exercise 4: String Method Challenge
let input = "  hello world  ";
let trimmed = input.trim();
let upper = trimmed.toUpperCase();
let splitArr = upper.split(" ");
let replaced = upper.replace("WORLD", "UGANDA");

console.log("Exercise 4 - String Methods:");
console.log("Trimmed:", `"${trimmed}"`);
console.log("Uppercase:", upper);
console.log("Split into array:", splitArr);
console.log("Includes 'WORLD'? :", upper.includes("WORLD"));
console.log("Replaced 'WORLD' with 'UGANDA':", replaced);


// Exercise 5: KGL Data Formatting Task
let rawDealerName = "  karibu groceries  ";
let rawLocation = "kampala";
let rawProduct = "fresh produce";
let productCode = "123abc";

// Function to capitalize first letter of each word
function capitalize(str) {
  return str
    .trim()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

let formattedDealer = capitalize(rawDealerName);
let formattedLocation = capitalize(rawLocation);

let formattedMessage = `Dealer: ${formattedDealer} | Location: ${formattedLocation} | Product: ${rawProduct}`;
console.log("Exercise 5 - KGL Data Formatting:");
console.log(formattedMessage);

// Validate product code
let codeNum = Number(productCode);
if (isNaN(codeNum)) {
  console.log("Product code is invalid");
} else {
  console.log("Product code is numeric:", codeNum);
}

