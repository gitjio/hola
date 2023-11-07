const originalString = "Hello, World!";

// Get the length of the string
const length = originalString.length;
console.log("Length:", length); // 13

// Get the character at a specific index
const charAtIndex = originalString.charAt(7);
console.log("Character at index 7:", charAtIndex); // "W"

// Get the Unicode value of a character at a specific index
const charCode = originalString.charCodeAt(0);
console.log("Unicode value of the first character:", charCode); // 72

// Get a substring
const substring = originalString.substring(7, 12);
console.log("Substring:", substring); // "World"

// Get a slice
const slice1 = originalString.slice(7, 12);
const slice2 = originalString.slice(-6, -1);
console.log("Slice 1:", slice1); // "World"
console.log("Slice 2:", slice2); // "World"

// Find the index of a substring
const indexOfWorld = originalString.indexOf("World");
console.log("Index of 'World':", indexOfWorld); // 7

// Find the last index of a character
const lastIndexOfO = originalString.lastIndexOf("o");
console.log("Last Index of 'o':", lastIndexOfO); // 8

// Convert to uppercase and lowercase
const upperCaseString = originalString.toUpperCase();
const lowerCaseString = originalString.toLowerCase();
console.log("Uppercase:", upperCaseString); // "HELLO, WORLD!"
console.log("Lowercase:", lowerCaseString); // "hello, world!"

// Concatenate strings
const str1 = "Hello, ";
const str2 = "Universe!";
const concatenatedString = str1.concat(str2);
console.log("Concatenated String:", concatenatedString); // "Hello, Universe!"

// Replace a substring
const replacedString = originalString.replace("World", "Universe");
console.log("Replaced String:", replacedString); // "Hello, Universe!"

// Split a string into an array
const fruitsString = "apple,banana,orange";
const fruitsArray = fruitsString.split(",");
console.log("Fruits Array:", fruitsArray); // ["apple", "banana", "orange"]
