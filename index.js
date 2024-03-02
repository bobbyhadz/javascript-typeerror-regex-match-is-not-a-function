// TypeError: regex match is not a function in JavaScript

// EXAMPLE 1 - Only call the `match()` method on strings

const str = 'Bobby Hadz';

const result = str.match(/[A-Z]/g);

console.log(result); // 👉️ ['B', 'H']

// ------------------------------------------------------------------

// // EXAMPLE 2 - Converting the value to a string with the String() constructor

// const num = 1234;

// // 👇️ use String() to convert to string first
// const result = String(num).match(/[0-2]/g);

// console.log(result); // 👉️ ['1', '2']

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if the value is a string before calling `match()`

// const str = null;

// const result =
//   typeof str === 'string' ? str.match(/[0-2]/g) : null;

// console.log(result); // 👉️ null

// ------------------------------------------------------------------

// // EXAMPLE 4 - Using an if statement to achieve the same result

// const str = undefined;

// let result = null;

// if (typeof str === 'string') {
//   result = str.match(/[0-2]/g);
// }

// console.log(result); // 👉️ null

// ------------------------------------------------------------------

// // TypeError: regex test is not a function in JavaScript

// // EXAMPLE 5 - Only call the `test()` method on regular expressions

// const result = /[a-z]/.test('example');

// console.log(result); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 6 - Don't wrap regular expressions in quotes

// const regex = /[a-z]/;

// const result = regex.test('example');

// console.log(result); // 👉️ true
